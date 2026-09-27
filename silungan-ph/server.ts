import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { INITIAL_POSTS, INITIAL_ARTICLES } from './src/data/initialData.ts';
import { ForumPost, EditorialArticle, Reply } from './src/types/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'silungan_db.json');

// Ensure data folder and database file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface DatabaseSchema {
  posts: ForumPost[];
  articles: EditorialArticle[];
}

function loadDatabase(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error loading db file, re-initializing:', err);
  }
  const initialDb: DatabaseSchema = {
    posts: INITIAL_POSTS,
    articles: INITIAL_ARTICLES,
  };
  fs.writeFileSync(DB_FILE, JSON.stringify(initialDb, null, 2), 'utf-8');
  return initialDb;
}

function saveDatabase(db: DatabaseSchema) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save database:', err);
  }
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '10mb' }));

  // API Routes for Kwento Silungan (Community Forum)
  app.get('/api/posts', (req: Request, res: Response) => {
    const db = loadDatabase();
    let posts = [...db.posts];

    const { category, q, sort } = req.query;

    if (category && typeof category === 'string' && category !== 'All') {
      posts = posts.filter((p) => p.category === category);
    }

    if (q && typeof q === 'string') {
      const query = q.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.content.toLowerCase().includes(query) ||
          p.author.toLowerCase().includes(query)
      );
    }

    if (sort === 'discussed') {
      posts.sort((a, b) => b.replies.length - a.replies.length);
    } else if (sort === 'listened') {
      posts.sort((a, b) => b.listeningCount - a.listeningCount);
    } else {
      // Default: latest
      posts.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    res.json(posts);
  });

  app.post('/api/posts', (req: Request, res: Response) => {
    const { title, author, isAnonymous, category, content } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({ error: 'Title, content, and category are required.' });
    }

    const cleanTitle = String(title).trim().slice(0, 150);
    const cleanContent = String(content).trim().slice(0, 5000);
    const cleanAuthor = isAnonymous ? 'Anonymous' : (String(author).trim() || 'Silungan Voice');

    const newPost: ForumPost = {
      id: `post-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      title: cleanTitle,
      author: cleanAuthor,
      isAnonymous: Boolean(isAnonymous),
      category: category,
      content: cleanContent,
      createdAt: new Date().toISOString(),
      listeningCount: 1, // Author is listening by default
      replies: [],
      reportCount: 0,
    };

    const db = loadDatabase();
    db.posts.unshift(newPost);
    saveDatabase(db);

    res.status(201).json(newPost);
  });

  app.post('/api/posts/:id/reply', (req: Request, res: Response) => {
    const { id } = req.params;
    const { author, isAnonymous, content } = req.body;

    if (!content || !String(content).trim()) {
      return res.status(400).json({ error: 'Reply content cannot be empty.' });
    }

    const db = loadDatabase();
    const postIndex = db.posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    const newReply: Reply = {
      id: `rep-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      author: isAnonymous ? 'Anonymous' : (String(author).trim() || 'Kapwa Silungan'),
      isAnonymous: Boolean(isAnonymous),
      content: String(content).trim().slice(0, 2000),
      createdAt: new Date().toISOString(),
    };

    db.posts[postIndex].replies.push(newReply);
    saveDatabase(db);

    res.status(201).json(db.posts[postIndex]);
  });

  app.post('/api/posts/:id/listen', (req: Request, res: Response) => {
    const { id } = req.params;
    const db = loadDatabase();
    const post = db.posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    post.listeningCount = (post.listeningCount || 0) + 1;
    saveDatabase(db);
    res.json({ success: true, count: post.listeningCount });
  });

  app.post('/api/posts/:id/report', (req: Request, res: Response) => {
    const { id } = req.params;
    const db = loadDatabase();
    const post = db.posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    post.reportCount = (post.reportCount || 0) + 1;
    saveDatabase(db);
    res.json({ success: true, message: 'Report received by moderators for review.' });
  });

  app.delete('/api/posts/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const db = loadDatabase();
    const initialLen = db.posts.length;
    db.posts = db.posts.filter((p) => p.id !== id);
    if (db.posts.length === initialLen) {
      return res.status(404).json({ error: 'Post not found.' });
    }
    saveDatabase(db);
    res.json({ success: true, message: 'Post removed successfully.' });
  });

  // API Routes for Silong Tala (Editorial Magazine)
  app.get('/api/articles', (req: Request, res: Response) => {
    const db = loadDatabase();
    const { category, includeDrafts } = req.query;

    let articles = [...db.articles];
    if (includeDrafts !== 'true') {
      articles = articles.filter((a) => a.status === 'published');
    }

    if (category && typeof category === 'string' && category !== 'All') {
      articles = articles.filter((a) => a.category === category);
    }

    res.json(articles);
  });

  app.post('/api/auth/verify', (req: Request, res: Response) => {
    const { pin } = req.body;
    // Research author pin: 'silungan2026' or 'silungan'
    if (pin === 'silungan2026' || pin === 'silungan' || pin === 'admin') {
      res.json({ authorized: true, role: 'Editorial Contributor' });
    } else {
      res.status(401).json({ authorized: false, error: 'Incorrect author PIN code. Hint: silungan2026' });
    }
  });

  app.post('/api/articles', (req: Request, res: Response) => {
    const { title, excerpt, content, author, authorRole, category, readTime, coverImage, status, quoteHighlight } = req.body;

    if (!title || !excerpt || !content || !author) {
      return res.status(400).json({ error: 'Title, excerpt, content, and author are required.' });
    }

    const contentArray = Array.isArray(content)
      ? content
      : String(content).split('\n\n').filter((p) => p.trim().length > 0);

    const newArticle: EditorialArticle = {
      id: `art-${Date.now()}`,
      title: String(title).trim(),
      slug: String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      excerpt: String(excerpt).trim(),
      content: contentArray,
      author: String(author).trim(),
      authorRole: authorRole ? String(authorRole).trim() : 'Project Researcher',
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      readTime: readTime ? String(readTime).trim() : '5 min read',
      category: category || 'Society',
      coverImage: coverImage || '/src/assets/images/editorial_story_silong_tala_1790484643224.jpg',
      status: status === 'draft' ? 'draft' : 'published',
      quoteHighlight: quoteHighlight ? String(quoteHighlight).trim() : undefined,
    };

    const db = loadDatabase();
    db.articles.unshift(newArticle);
    saveDatabase(db);

    res.status(201).json(newArticle);
  });

  app.put('/api/articles/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const db = loadDatabase();
    const index = db.articles.findIndex((a) => a.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Article not found.' });
    }

    const existing = db.articles[index];
    const { title, excerpt, content, author, authorRole, category, readTime, coverImage, status, quoteHighlight } = req.body;

    const contentArray = content
      ? (Array.isArray(content) ? content : String(content).split('\n\n').filter((p) => p.trim().length > 0))
      : existing.content;

    db.articles[index] = {
      ...existing,
      title: title ? String(title).trim() : existing.title,
      excerpt: excerpt ? String(excerpt).trim() : existing.excerpt,
      content: contentArray,
      author: author ? String(author).trim() : existing.author,
      authorRole: authorRole !== undefined ? String(authorRole).trim() : existing.authorRole,
      category: category || existing.category,
      readTime: readTime || existing.readTime,
      coverImage: coverImage || existing.coverImage,
      status: status || existing.status,
      quoteHighlight: quoteHighlight !== undefined ? String(quoteHighlight).trim() : existing.quoteHighlight,
    };

    saveDatabase(db);
    res.json(db.articles[index]);
  });

  app.delete('/api/articles/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const db = loadDatabase();
    const initialLen = db.articles.length;
    db.articles = db.articles.filter((a) => a.id !== id);

    if (db.articles.length === initialLen) {
      return res.status(404).json({ error: 'Article not found.' });
    }

    saveDatabase(db);
    res.json({ success: true });
  });

  // Attach Vite middleware in development
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production serve dist files
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SILUNGAN PH] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start SILUNGAN PH server:', err);
  process.exit(1);
});
