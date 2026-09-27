import React, { useState, useEffect } from 'react';
import { ForumPost, PostCategory, Reply } from '../types';
import { INITIAL_POSTS } from '../data/initialData';
import { MessageSquare, Heart, ShieldAlert, Send, PlusCircle, Filter, Search, UserCheck, AlertCircle, CornerDownRight, Check } from 'lucide-react';

export const KwentoSilungan: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>(INITIAL_POSTS);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortOption, setSortOption] = useState<'latest' | 'discussed' | 'listened'>('latest');
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [postCategory, setPostCategory] = useState<PostCategory>('Personal Experiences');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // Replies State
  const [expandedReplies, setExpandedReplies] = useState<{ [postId: string]: boolean }>({});
  const [replyInput, setReplyInput] = useState<{ [postId: string]: string }>({});
  const [replyAuthor, setReplyAuthor] = useState<{ [postId: string]: string }>({});
  const [replyAnonymous, setReplyAnonymous] = useState<{ [postId: string]: boolean }>({});
  const [replySubmitting, setReplySubmitting] = useState<{ [postId: string]: boolean }>({});

  // Reaction State (Client-side tracking of listened posts)
  const [listenedPosts, setListenedPosts] = useState<{ [postId: string]: boolean }>({});

  // Report Modal State
  const [reportingPostId, setReportingPostId] = useState<string | null>(null);
  const [reportSuccess, setReportSuccess] = useState<string | null>(null);

  const categories: (PostCategory | 'All')[] = [
    'All',
    'Gender Roles',
    'Family',
    'School',
    'Workplace',
    'Relationships',
    'Media',
    'LGBTQ+',
    'Personal Experiences',
    'Questions',
    'Other',
  ];

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (activeCategory !== 'All') params.append('category', activeCategory);
      if (searchQuery) params.append('q', searchQuery);
      if (sortOption) params.append('sort', sortOption);

      const res = await fetch(`/api/posts?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (err) {
      console.warn('Backend not responding yet, using local store:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [activeCategory, sortOption]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPosts();
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) {
      setFormError('Pakipunan ang pamagat at ang iyong mensahe.');
      return;
    }
    setFormError('');
    setSubmitting(true);

    const payload = {
      title: postTitle.trim(),
      author: isAnonymous ? 'Anonymous' : (displayName.trim() || 'Silungan Voice'),
      isAnonymous,
      category: postCategory,
      content: postContent.trim(),
    };

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const newPost: ForumPost = await res.json();
        setPosts([newPost, ...posts]);
        setPostTitle('');
        setPostContent('');
        setDisplayName('');
        setIsAnonymous(false);
        setIsFormOpen(false);
      } else {
        // Fallback local creation
        const localPost: ForumPost = {
          id: `local-${Date.now()}`,
          ...payload,
          createdAt: new Date().toISOString(),
          listeningCount: 1,
          replies: [],
          reportCount: 0,
        };
        setPosts([localPost, ...posts]);
        setIsFormOpen(false);
      }
    } catch (err) {
      console.warn('Fallback local state on post submit:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleListenReaction = async (postId: string) => {
    if (listenedPosts[postId]) return; // already listened in this session

    setListenedPosts((prev) => ({ ...prev, [postId]: true }));
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, listeningCount: (p.listeningCount || 0) + 1 } : p
      )
    );

    try {
      await fetch(`/api/posts/${postId}/listen`, { method: 'POST' });
    } catch (err) {
      console.warn('Failed to sync listen reaction:', err);
    }
  };

  const handleReplySubmit = async (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const content = replyInput[postId];
    if (!content || !content.trim()) return;

    setReplySubmitting((prev) => ({ ...prev, [postId]: true }));
    const author = replyAnonymous[postId] ? 'Anonymous' : (replyAuthor[postId]?.trim() || 'Kapwa Silungan');
    const isAnon = !!replyAnonymous[postId];

    const replyPayload = {
      author,
      isAnonymous: isAnon,
      content: content.trim(),
    };

    try {
      const res = await fetch(`/api/posts/${postId}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(replyPayload),
      });

      if (res.ok) {
        const updatedPost: ForumPost = await res.json();
        setPosts((prev) => prev.map((p) => (p.id === postId ? updatedPost : p)));
      } else {
        // Fallback local update
        const fallbackReply: Reply = {
          id: `rep-${Date.now()}`,
          postId,
          author,
          isAnonymous: isAnon,
          content: content.trim(),
          createdAt: new Date().toISOString(),
        };
        setPosts((prev) =>
          prev.map((p) => (p.id === postId ? { ...p, replies: [...p.replies, fallbackReply] } : p))
        );
      }
      setReplyInput((prev) => ({ ...prev, [postId]: '' }));
    } catch (err) {
      console.warn('Fallback local update for reply:', err);
    } finally {
      setReplySubmitting((prev) => ({ ...prev, [postId]: false }));
    }
  };

  const handleReportPost = async (postId: string) => {
    try {
      await fetch(`/api/posts/${postId}/report`, { method: 'POST' });
      setReportSuccess('Salamat. Naipasa na ang ulat sa Silungan moderation team para sa pagsusuri.');
      setTimeout(() => {
        setReportSuccess(null);
        setReportingPostId(null);
      }, 2500);
    } catch (err) {
      setReportSuccess('Nai-record ang iyong ulat.');
      setTimeout(() => {
        setReportSuccess(null);
        setReportingPostId(null);
      }, 2000);
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('fil-PH', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Kamakailan';
    }
  };

  return (
    <section id="kwento-silungan" className="py-20 bg-[#FAF9FC] border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 07</span>
            <span aria-hidden="true">·</span>
            <span>Community Dialogue Space</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24202B] mb-2 text-balance">
            Kwento Silungan
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#4C3575] font-medium mb-3">
            “May kwento ka? Dito, may makikinig.”
          </p>
          <p className="text-sm text-[#24202B]/80 leading-relaxed">
            A safe digital sanctuary for sharing lived experiences, questions, reflections, and triumphs regarding gender expectations in the Philippines.
          </p>
        </div>

        {/* Respect Guidelines Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-white border border-[#C8B6FF]/50 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#F2EDFF] text-[#7C5CFC] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <p className="text-xs text-[#4C3575] font-medium">
              Paalala: <span className="font-serif italic">“Ang Silungan ay lugar para makinig, matuto, at magbahagi nang may respeto.”</span> Bawal ang pambabastos, diskriminasyon, at paglalabas ng pribadong impormasyon.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Magbahagi ng Kwento</span>
          </button>
        </div>

        {/* Share Story Modal / Expansion Form */}
        {isFormOpen && (
          <div className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#C8B6FF] shadow-md transition-all">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E2F2]">
              <h3 className="font-serif text-xl font-bold text-[#24202B]">
                Ibahagi ang Iyong Kwento sa Silungan
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-xs text-[#24202B]/60 hover:text-[#24202B] cursor-pointer"
              >
                Isara
              </button>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 text-rose-700 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#24202B] mb-1">
                    Pangalan / Display Name
                  </label>
                  <input
                    type="text"
                    disabled={isAnonymous}
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder={isAnonymous ? 'Nakatago bilang Anonymous' : 'Hal. Maria o Juan'}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden disabled:bg-slate-100 disabled:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24202B] mb-1">
                    Kategorya
                  </label>
                  <select
                    value={postCategory}
                    onChange={(e) => setPostCategory(e.target.value as PostCategory)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden bg-white"
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
              </div>

              {/* Anonymous Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="anonymousCheck"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-[#7C5CFC] focus:ring-[#7C5CFC] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="anonymousCheck" className="text-xs text-[#24202B]/80 cursor-pointer">
                  I-post bilang <span className="font-semibold text-[#4C3575]">Anonymous</span> (Protektado ang iyong pagkakakilanlan)
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#24202B] mb-1">
                  Pamagat ng Kwento o Tanong
                </label>
                <input
                  type="text"
                  required
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Hal. Karanasan sa pag-aalaga ng pamilya o diskriminasyon sa paaralan"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#24202B] mb-1">
                  Iyong Mensahe / Kwento
                </label>
                <textarea
                  required
                  rows={4}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Isalaysay ang iyong saloobin, tanong, o karanasan nang buong laya..."
                  className="w-full p-3.5 text-xs rounded-xl border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#24202B]/70 hover:text-[#24202B] cursor-pointer"
                >
                  Kanselahin
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Ipinapasa...' : 'I-post ang Kwento'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Mobile quick post button */}
        <div className="sm:hidden mb-6">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#7C5CFC] rounded-xl shadow-xs flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Magbahagi ng Kwento sa Silungan</span>
          </button>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Categories Pill/Tab Bar */}
          <div className="flex items-center overflow-x-auto gap-1.5 p-1.5 bg-white rounded-2xl border border-[#E8E2F2] max-w-2xl no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-1.5 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
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

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-2">
            <form onSubmit={handleSearchSubmit} className="relative flex-1 sm:w-56">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Maghanap ng kwento..."
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-white border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden"
              />
              <Search className="w-3.5 h-3.5 text-[#24202B]/40 absolute left-2.5 top-2.5" />
            </form>

            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-[#E8E2F2]">
              <button
                onClick={() => setSortOption('latest')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  sortOption === 'latest' ? 'bg-[#F2EDFF] text-[#4C3575] font-semibold' : 'text-[#24202B]/70'
                }`}
              >
                Bago
              </button>
              <button
                onClick={() => setSortOption('discussed')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  sortOption === 'discussed' ? 'bg-[#F2EDFF] text-[#4C3575] font-semibold' : 'text-[#24202B]/70'
                }`}
              >
                Talakayan
              </button>
              <button
                onClick={() => setSortOption('listened')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  sortOption === 'listened' ? 'bg-[#F2EDFF] text-[#4C3575] font-semibold' : 'text-[#24202B]/70'
                }`}
              >
                Nakikinig
              </button>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#E8E2F2]">
              <p className="font-serif text-lg text-[#24202B] mb-2">
                Walang nahanap na kwento sa kategoryang ito.
              </p>
              <p className="text-xs text-[#24202B]/70 mb-4">
                Maging unang magbahagi ng iyong saloobin sa Kwento Silungan.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#7C5CFC] rounded-xl hover:bg-[#4C3575] transition-all cursor-pointer"
              >
                Simulan ang Kwento
              </button>
            </div>
          ) : (
            posts.map((post) => {
              const isRepliesOpen = !!expandedReplies[post.id];
              const hasListened = !!listenedPosts[post.id];

              return (
                <article
                  key={post.id}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2F2] shadow-xs hover:border-[#C8B6FF] transition-all"
                >
                  {/* Post Metadata - Zero Pill Discipline */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#24202B]/65 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#4C3575]">
                        {post.isAnonymous ? 'Anonymous Kapwa' : post.author}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#7C5CFC] font-medium">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{formatDate(post.createdAt)}</span>
                    </div>

                    <button
                      onClick={() => setReportingPostId(post.id)}
                      className="text-[11px] text-[#24202B]/50 hover:text-rose-600 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <ShieldAlert className="w-3 h-3" />
                      <span>Mag-ulat</span>
                    </button>
                  </div>

                  {/* Post Title & Content */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#24202B] mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed mb-6 whitespace-pre-wrap">
                    {post.content}
                  </p>

                  {/* Interaction Bar */}
                  <div className="pt-4 border-t border-[#E8E2F2] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* "Nakikinig Ako" Reaction Button */}
                      <button
                        onClick={() => handleListenReaction(post.id)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                          hasListened
                            ? 'bg-[#F2EDFF] text-[#7C5CFC] border border-[#C8B6FF]'
                            : 'bg-[#FAF9FC] text-[#4C3575] hover:bg-[#F2EDFF] border border-[#E8E2F2]'
                        }`}
                        title="Iparamdam na may nakikinig sa kanyang kwento"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${hasListened ? 'fill-current text-[#7C5CFC]' : ''}`}
                        />
                        <span>Nakikinig Ako</span>
                        <span className="ml-1 text-[11px] font-mono tabular-nums opacity-80">
                          ({post.listeningCount || 0})
                        </span>
                      </button>

                      {/* Replies Toggle Button */}
                      <button
                        onClick={() =>
                          setExpandedReplies((prev) => ({ ...prev, [post.id]: !prev[post.id] }))
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#24202B]/70 hover:text-[#4C3575] hover:bg-[#FAF9FC] rounded-xl transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Mga Tugon ({post.replies?.length || 0})</span>
                      </button>
                    </div>

                    <span className="text-[11px] text-[#24202B]/50 hidden sm:inline">
                      Ligtas na talakayan
                    </span>
                  </div>

                  {/* Nested Replies Section */}
                  {isRepliesOpen && (
                    <div className="mt-6 pt-6 border-t border-[#E8E2F2]/80 space-y-4">
                      {/* Reply list */}
                      {post.replies && post.replies.length > 0 ? (
                        <div className="space-y-3 pl-4 border-l-2 border-[#C8B6FF]/50">
                          {post.replies.map((rep) => (
                            <div key={rep.id} className="p-3.5 rounded-xl bg-[#FAF9FC] border border-[#E8E2F2]">
                              <div className="flex items-center gap-2 text-[11px] text-[#24202B]/60 mb-1">
                                <span className="font-semibold text-[#4C3575]">
                                  {rep.isAnonymous ? 'Anonymous' : rep.author}
                                </span>
                                <span aria-hidden="true">·</span>
                                <span>{formatDate(rep.createdAt)}</span>
                              </div>
                              <p className="text-xs text-[#24202B]/85 leading-relaxed">
                                {rep.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-[#24202B]/60 italic pl-4">
                          Wala pang tugon. Maging una sa pagtugon nang may malasakit.
                        </p>
                      )}

                      {/* Reply Form */}
                      <form
                        onSubmit={(e) => handleReplySubmit(post.id, e)}
                        className="mt-4 p-4 rounded-2xl bg-[#FAF9FC] border border-[#E8E2F2] space-y-3"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <input
                            type="text"
                            disabled={replyAnonymous[post.id]}
                            value={replyAuthor[post.id] || ''}
                            onChange={(e) =>
                              setReplyAuthor((prev) => ({ ...prev, [post.id]: e.target.value }))
                            }
                            placeholder={replyAnonymous[post.id] ? 'Nakatago bilang Anonymous' : 'Iyong pangalan (opsiyonal)'}
                            className="text-xs px-3 py-1.5 rounded-lg border border-[#E8E2F2] bg-white focus:outline-hidden w-48 disabled:bg-slate-100"
                          />

                          <label className="text-[11px] text-[#24202B]/75 flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={!!replyAnonymous[post.id]}
                              onChange={(e) =>
                                setReplyAnonymous((prev) => ({
                                  ...prev,
                                  [post.id]: e.target.checked,
                                }))
                              }
                              className="rounded text-[#7C5CFC] w-3.5 h-3.5"
                            />
                            <span>Anonymous</span>
                          </label>
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            required
                            value={replyInput[post.id] || ''}
                            onChange={(e) =>
                              setReplyInput((prev) => ({ ...prev, [post.id]: e.target.value }))
                            }
                            placeholder="Magbahagi ng magalang at sumusuportang tugon..."
                            className="flex-1 text-xs px-3.5 py-2 rounded-xl border border-[#E8E2F2] bg-white focus:border-[#7C5CFC] focus:outline-hidden"
                          />
                          <button
                            type="submit"
                            disabled={replySubmitting[post.id]}
                            className="px-4 py-2 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all cursor-pointer shrink-0 disabled:opacity-50"
                          >
                            Tugon
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

        {/* Report Confirmation Modal */}
        {reportingPostId && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#E8E2F2] shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>

              <h4 className="font-serif text-lg font-bold text-[#24202B] mb-2">
                Iulat ang Mensaheng Ito
              </h4>

              <p className="text-xs text-[#24202B]/75 leading-relaxed mb-6">
                Nais mo bang iulat ang post na ito para sa pagsusuri ng aming moderasyon dahil sa paglabag sa respeto, paninirang-puri, o pamamahagi ng sensitibong impormasyon?
              </p>

              {reportSuccess ? (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center gap-2 mb-4 font-medium">
                  <Check className="w-4 h-4" />
                  <span>{reportSuccess}</span>
                </div>
              ) : (
                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => setReportingPostId(null)}
                    className="px-4 py-2 text-xs font-semibold text-[#24202B]/70 hover:text-[#24202B] cursor-pointer"
                  >
                    Kanselahin
                  </button>
                  <button
                    onClick={() => handleReportPost(reportingPostId)}
                    className="px-5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all cursor-pointer"
                  >
                    Kumpirmahin ang Ulat
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
