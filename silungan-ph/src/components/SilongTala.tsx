import React, { useState, useEffect } from 'react';
import { EditorialArticle, ArticleCategory } from '../types';
import { INITIAL_ARTICLES, HERO_IMAGE, BABAYLAN_IMAGE, CONTEMPORARY_IMAGE, EDITORIAL_DESK_IMAGE, RESEARCH_TEAM } from '../data/initialData';
import { BookOpen, Clock, ArrowRight, User, X, Key, Plus, Edit2, Trash2, CheckCircle2, Bookmark, Share2 } from 'lucide-react';

export const SilongTala: React.FC = () => {
  const [articles, setArticles] = useState<EditorialArticle[]>(INITIAL_ARTICLES);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<EditorialArticle | null>(null);

  // Author / Admin Suite State
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);

  // Editor Form Fields
  const [formTitle, setFormTitle] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formAuthor, setFormAuthor] = useState(RESEARCH_TEAM[0].name);
  const [formCategory, setFormCategory] = useState<ArticleCategory>('Society');
  const [formReadTime, setFormReadTime] = useState('6 min read');
  const [formCoverImage, setFormCoverImage] = useState(EDITORIAL_DESK_IMAGE);
  const [formStatus, setFormStatus] = useState<'published' | 'draft'>('published');
  const [formQuote, setFormQuote] = useState('');

  // Reader Settings
  const [readerFontSize, setReaderFontSize] = useState<'normal' | 'large'>('normal');

  const categories: (ArticleCategory | 'All')[] = [
    'All',
    'History',
    'Culture',
    'Identity',
    'Gender',
    'Workplace',
    'Family',
    'Society',
    'Reflection',
  ];

  const fetchArticles = async () => {
    try {
      const url = isAdminMode ? '/api/articles?includeDrafts=true' : '/api/articles';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (err) {
      console.warn('Backend articles fetch fallback:', err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [isAdminMode]);

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === 'silungan2026' || pinInput.trim() === 'silungan' || pinInput.trim() === 'admin') {
      setIsAdminMode(true);
      setIsAuthModalOpen(false);
      setPinInput('');
      setAuthError('');
    } else {
      setAuthError('Maling PIN code. (Pahiwatig: silungan2026)');
    }
  };

  const openNewArticleModal = () => {
    setEditingArticleId(null);
    setFormTitle('');
    setFormExcerpt('');
    setFormContent('');
    setFormAuthor(RESEARCH_TEAM[0].name);
    setFormCategory('Society');
    setFormReadTime('5 min read');
    setFormCoverImage(EDITORIAL_DESK_IMAGE);
    setFormStatus('published');
    setFormQuote('');
    setIsEditorOpen(true);
  };

  const openEditArticleModal = (article: EditorialArticle) => {
    setEditingArticleId(article.id);
    setFormTitle(article.title);
    setFormExcerpt(article.excerpt);
    setFormContent(article.content.join('\n\n'));
    setFormAuthor(article.author);
    setFormCategory(article.category);
    setFormReadTime(article.readTime);
    setFormCoverImage(article.coverImage);
    setFormStatus(article.status);
    setFormQuote(article.quoteHighlight || '');
    setIsEditorOpen(true);
  };

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formTitle,
      excerpt: formExcerpt,
      content: formContent.split('\n\n').filter((p) => p.trim().length > 0),
      author: formAuthor,
      authorRole: 'Editorial Researcher',
      category: formCategory,
      readTime: formReadTime,
      coverImage: formCoverImage,
      status: formStatus,
      quoteHighlight: formQuote,
    };

    try {
      if (editingArticleId) {
        // Update
        const res = await fetch(`/api/articles/${editingArticleId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const updated = await res.json();
          setArticles(articles.map((a) => (a.id === editingArticleId ? updated : a)));
        } else {
          setArticles(
            articles.map((a) => (a.id === editingArticleId ? { ...a, ...payload } : a))
          );
        }
      } else {
        // Create new
        const res = await fetch('/api/articles', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const created = await res.json();
          setArticles([created, ...articles]);
        } else {
          const newLocal: EditorialArticle = {
            id: `art-${Date.now()}`,
            slug: formTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            date: 'March 2026',
            ...payload,
          };
          setArticles([newLocal, ...articles]);
        }
      }
      setIsEditorOpen(false);
    } catch (err) {
      console.warn('Fallback local article save:', err);
      setIsEditorOpen(false);
    }
  };

  const handleDeleteArticle = async (articleId: string) => {
    if (!window.confirm('Sigurado ka bang nais mong tanggalin ang artikulong ito?')) return;
    try {
      await fetch(`/api/articles/${articleId}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('Delete api error:', err);
    }
    setArticles(articles.filter((a) => a.id !== articleId));
    if (activeArticle?.id === articleId) setActiveArticle(null);
  };

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <section id="silong-tala" className="py-20 bg-white border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Author Portal Access */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
              <span>Chapter 08</span>
              <span aria-hidden="true">·</span>
              <span>Editorial Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24202B] mb-2 text-balance">
              Silong Tala
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#4C3575] font-medium mb-3">
              “Mga kuwentong nagbibigay-liwanag sa ilalim ng iisang silungan.”
            </p>
            <p className="text-sm text-[#24202B]/80 leading-relaxed">
              Curated long-form essays, historical interrogations, and reflective memoirs published by authorized student researchers to illuminate Philippine gender complexities.
            </p>
          </div>

          {/* Author Mode Control */}
          <div className="flex items-center gap-3 shrink-0">
            {isAdminMode ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={openNewArticleModal}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Sumulat ng Tala</span>
                </button>
                <button
                  onClick={() => setIsAdminMode(false)}
                  className="px-3 py-2 text-xs font-medium text-[#24202B]/70 hover:text-rose-600 cursor-pointer"
                >
                  Exit Author Mode
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#4C3575] bg-[#F2EDFF] hover:bg-[#C8B6FF]/30 border border-[#C8B6FF]/50 rounded-xl transition-all cursor-pointer"
              >
                <Key className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>Author Suite Access</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center overflow-x-auto gap-2 p-1.5 bg-[#FAF9FC] rounded-2xl max-w-2xl mb-10 border border-[#E8E2F2] no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#7C5CFC] text-white shadow-xs'
                    : 'text-[#4C3575]/80 hover:text-[#24202B] hover:bg-[#F2EDFF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid - Three-Tier Visual Salience */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => {
            const isLead = idx === 0;
            return (
              <article
                key={article.id}
                className={`rounded-3xl border border-[#E8E2F2] overflow-hidden bg-[#FAF9FC] flex flex-col justify-between hover:border-[#C8B6FF] hover:shadow-sm transition-all group ${
                  isLead && selectedCategory === 'All' ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#F2EDFF]/40' : 'bg-white'
                }`}
              >
                <div>
                  {/* Cover Image */}
                  <div className={`relative overflow-hidden ${isLead && selectedCategory === 'All' ? 'h-64 sm:h-72' : 'h-48'}`}>
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Unboxed category tag over image */}
                    <div className="absolute top-4 left-4 text-white text-xs font-semibold uppercase tracking-wider drop-shadow-sm">
                      <span>{article.category}</span>
                    </div>

                    {article.status === 'draft' && (
                      <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                        DRAFT
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    {/* Zero-Pill Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#24202B]/60 mb-2 font-medium">
                      <span>{article.author}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3
                      className={`font-serif font-bold text-[#24202B] group-hover:text-[#4C3575] transition-colors mb-3 leading-snug ${
                        isLead && selectedCategory === 'All' ? 'text-2xl sm:text-3xl' : 'text-xl'
                      }`}
                    >
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#24202B]/75 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Read Button / Admin Controls */}
                <div className="px-6 sm:px-8 py-4 border-t border-[#E8E2F2] flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] group-hover:text-[#4C3575] transition-colors cursor-pointer"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {isAdminMode && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditArticleModal(article)}
                        className="p-1.5 text-xs text-[#4C3575] hover:bg-[#F2EDFF] rounded-lg transition-colors cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteArticle(article.id)}
                        className="p-1.5 text-xs text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* FULL ARTICLE MODAL / READING CANVAS */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-2 sm:p-6 lg:p-10">
            <div className="bg-[#FAF9FC] rounded-3xl max-w-3xl w-full border border-[#E8E2F2] shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
              {/* Sticky Top Reading Bar */}
              <div className="sticky top-0 bg-[#FAF9FC]/95 backdrop-blur-md px-6 py-4 border-b border-[#E8E2F2] flex items-center justify-between z-20">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Silong Tala · {activeArticle.category}</span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Font Size Adjuster */}
                  <div className="flex items-center gap-1 text-xs border border-[#E8E2F2] rounded-lg p-0.5 bg-white">
                    <button
                      onClick={() => setReaderFontSize('normal')}
                      className={`px-2 py-0.5 rounded-md cursor-pointer ${
                        readerFontSize === 'normal' ? 'bg-[#F2EDFF] text-[#4C3575] font-bold' : 'text-[#24202B]/60'
                      }`}
                    >
                      A
                    </button>
                    <button
                      onClick={() => setReaderFontSize('large')}
                      className={`px-2 py-0.5 rounded-md cursor-pointer text-sm ${
                        readerFontSize === 'large' ? 'bg-[#F2EDFF] text-[#4C3575] font-bold' : 'text-[#24202B]/60'
                      }`}
                    >
                      A+
                    </button>
                  </div>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-1.5 rounded-lg text-[#24202B]/60 hover:text-[#24202B] hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Reading View */}
              <div className="overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-8">
                {/* Hero Header Presentation */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#24202B]/60 font-medium">
                    <span>{activeArticle.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeArticle.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeArticle.readTime}</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#24202B] leading-tight">
                    {activeArticle.title}
                  </h1>

                  <p className="font-serif italic text-base sm:text-lg text-[#4C3575]">
                    {activeArticle.excerpt}
                  </p>
                </div>

                {/* Hero Visual */}
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E2F2] h-64 sm:h-80">
                  <img
                    src={activeArticle.coverImage}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Pull Quote Highlight */}
                {activeArticle.quoteHighlight && (
                  <blockquote className="my-6 p-6 rounded-2xl bg-[#F2EDFF] border-l-4 border-[#7C5CFC] font-serif italic text-base sm:text-lg text-[#4C3575] leading-relaxed">
                    “{activeArticle.quoteHighlight}”
                  </blockquote>
                )}

                {/* Main Body Prose with Drop Cap */}
                <div
                  className={`space-y-6 text-[#24202B]/85 leading-relaxed ${
                    readerFontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                  }`}
                >
                  {activeArticle.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#4C3575]'
                          : ''
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Author Card & Attribution */}
                <div className="pt-8 border-t border-[#E8E2F2] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-mono text-[#7C5CFC] block">Akda ni</span>
                    <span className="font-serif font-bold text-base text-[#24202B]">
                      {activeArticle.author}
                    </span>
                    <span className="text-xs text-[#24202B]/60 block">
                      SILUNGAN PH Research Cohort
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all cursor-pointer"
                  >
                    Bumalik sa Talaan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AUTHOR PIN AUTHENTICATION MODAL */}
        {isAuthModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-[#E8E2F2] shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] text-[#7C5CFC] flex items-center justify-center mb-4">
                <Key className="w-5 h-5" />
              </div>

              <h4 className="font-serif text-lg font-bold text-[#24202B] mb-1">
                Author Suite Verification
              </h4>
              <p className="text-xs text-[#24202B]/70 leading-relaxed mb-4">
                Ipasok ang PIN ng research team para magdagdag o mag-edit ng mga artikulo sa Silong Tala. (Pahiwatig: <span className="font-mono text-[#7C5CFC]">silungan2026</span>)
              </p>

              {authError && (
                <div className="p-2.5 mb-3 bg-rose-50 text-rose-700 text-xs rounded-lg">
                  {authError}
                </div>
              )}

              <form onSubmit={handleVerifyPin} className="space-y-4">
                <input
                  type="password"
                  required
                  autoFocus
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="PIN code"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden"
                />

                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAuthModalOpen(false)}
                    className="px-4 py-2 text-xs text-[#24202B]/70 hover:text-[#24202B] cursor-pointer"
                  >
                    Kanselahin
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all cursor-pointer"
                  >
                    Mag-login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* AUTHOR ARTICLE EDITOR MODAL (CREATE / EDIT) */}
        {isEditorOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#E8E2F2] shadow-2xl p-6 sm:p-8 my-auto space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E2F2]">
                <h3 className="font-serif text-xl font-bold text-[#24202B]">
                  {editingArticleId ? 'I-edit ang Artikulo' : 'Sumulat ng Bagong Artikulo'}
                </h3>
                <button
                  onClick={() => setIsEditorOpen(false)}
                  className="p-1 rounded-lg text-[#24202B]/60 hover:text-[#24202B] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveArticle} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#24202B] mb-1">
                    Pamagat ng Artikulo
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="Hal. Ang Diwa ng Babaylan sa Makabagong Panahon"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#24202B] mb-1">
                      May-akda
                    </label>
                    <select
                      value={formAuthor}
                      onChange={(e) => setFormAuthor(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8E2F2] focus:outline-hidden bg-white"
                    >
                      {RESEARCH_TEAM.map((tm) => (
                        <option key={tm.name} value={tm.name}>
                          {tm.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#24202B] mb-1">
                      Kategorya
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value as ArticleCategory)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8E2F2] focus:outline-hidden bg-white"
                    >
                      {categories
                        .filter((c) => c !== 'All')
                        .map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#24202B] mb-1">
                      Oras ng Pagbasa
                    </label>
                    <input
                      type="text"
                      value={formReadTime}
                      onChange={(e) => setFormReadTime(e.target.value)}
                      placeholder="Hal. 5 min read"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8E2F2] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24202B] mb-1">
                    Maikling Buod / Excerpt
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formExcerpt}
                    onChange={(e) => setFormExcerpt(e.target.value)}
                    placeholder="Maikling panimulang paglalarawan sa sanaysay..."
                    className="w-full p-3 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24202B] mb-1">
                    Highlight Pull Quote (Opsiyonal)
                  </label>
                  <input
                    type="text"
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    placeholder="Isang makabuluhang pangungusap na itatampok..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24202B] mb-1">
                    Nilalaman ng Sanaysay (Paghiwalayin ang talata gamit ang dobleng enter)
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    placeholder="Isulat ang buong teksto dito..."
                    className="w-full p-3 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-[#24202B] font-semibold">Status:</label>
                    <select
                      value={formStatus}
                      onChange={(e) => setFormStatus(e.target.value as 'published' | 'draft')}
                      className="text-xs px-2.5 py-1 rounded-lg border border-[#E8E2F2] bg-white focus:outline-hidden"
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsEditorOpen(false)}
                      className="px-4 py-2 text-xs text-[#24202B]/70 hover:text-[#24202B] cursor-pointer"
                    >
                      Kanselahin
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all cursor-pointer shadow-xs"
                    >
                      I-save ang Tala
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
