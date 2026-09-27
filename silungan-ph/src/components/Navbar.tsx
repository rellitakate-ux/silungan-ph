import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, MessageSquare, ShieldAlert } from 'lucide-react';
import { SILUNGAN_LOGO } from '../data/initialData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setExploreDropdownOpen(false);
  };

  const exploreLinks = [
    { id: 'explore', label: 'Understanding Gender' },
    { id: 'history', label: 'Historical Timeline' },
    { id: 'today', label: 'Gender Roles Today' },
    { id: 'issues', label: 'Issues & Realities' },
    { id: 'analysis', label: 'Then & Now Analysis' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#FAF9FC]/95 backdrop-blur-md border-[#C8B6FF]/30 shadow-xs'
          : 'bg-[#FAF9FC] border-[#E8E2F2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group text-left cursor-pointer flex items-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7C5CFC] rounded-sm py-1"
          >
            <img
              src={SILUNGAN_LOGO}
              alt="SILUNGAN PH Official Logo"
              className="w-10 h-10 object-contain rounded-xl shadow-xs bg-white p-0.5 border border-[#C8B6FF]/30 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#24202B] group-hover:text-[#4C3575] transition-colors block leading-tight">
                SILUNGAN PH
              </span>
              <span className="text-[10px] text-[#7C5CFC] font-semibold tracking-wide uppercase block">
                Gender Studies Initiative
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation links in requested order */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#4C3575]/80">
            {/* 1. Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`cursor-pointer transition-colors py-1 hover:text-[#24202B] ${
                activeSection === 'home' ? 'text-[#7C5CFC] font-semibold border-b-2 border-[#7C5CFC]' : ''
              }`}
            >
              Home
            </button>

            {/* 2. Academic Modules */}
            <div className="relative">
              <button
                onClick={() => setExploreDropdownOpen(!exploreDropdownOpen)}
                className={`flex items-center gap-1 cursor-pointer transition-colors py-1 hover:text-[#24202B] ${
                  ['explore', 'history', 'today', 'issues', 'analysis'].includes(activeSection)
                    ? 'text-[#7C5CFC] font-semibold'
                    : ''
                }`}
              >
                <span>Academic Modules</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${exploreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {exploreDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#C8B6FF]/30 py-2 z-50"
                  onMouseLeave={() => setExploreDropdownOpen(false)}
                >
                  {exploreLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-[#24202B] hover:bg-[#F2EDFF] hover:text-[#4C3575] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Multimedia */}
            <button
              onClick={() => handleLinkClick('multimedia')}
              className={`cursor-pointer transition-colors py-1 hover:text-[#24202B] ${
                activeSection === 'multimedia' ? 'text-[#7C5CFC] font-semibold border-b-2 border-[#7C5CFC]' : ''
              }`}
            >
              Multimedia
            </button>

            {/* 4. Kwento Silungan */}
            <button
              onClick={() => handleLinkClick('kwento-silungan')}
              className={`flex items-center gap-1 cursor-pointer transition-colors py-1 hover:text-[#24202B] ${
                activeSection === 'kwento-silungan' ? 'text-[#7C5CFC] font-semibold border-b-2 border-[#7C5CFC]' : ''
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#7C5CFC]" />
              <span>Kwento Silungan</span>
            </button>

            {/* 5. Silong Tala */}
            <button
              onClick={() => handleLinkClick('silong-tala')}
              className={`flex items-center gap-1 cursor-pointer transition-colors py-1 hover:text-[#24202B] ${
                activeSection === 'silong-tala' ? 'text-[#7C5CFC] font-semibold border-b-2 border-[#7C5CFC]' : ''
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#7C5CFC]" />
              <span>Silong Tala</span>
            </button>

            {/* 6. Conclusion */}
            <button
              onClick={() => handleLinkClick('conclusion')}
              className={`cursor-pointer transition-colors py-1 hover:text-[#24202B] ${
                activeSection === 'conclusion' ? 'text-[#7C5CFC] font-semibold border-b-2 border-[#7C5CFC]' : ''
              }`}
            >
              Conclusion
            </button>

            {/* 7. References */}
            <button
              onClick={() => handleLinkClick('references')}
              className={`cursor-pointer transition-colors py-1 hover:text-[#24202B] ${
                activeSection === 'references' ? 'text-[#7C5CFC] font-semibold border-b-2 border-[#7C5CFC]' : ''
              }`}
            >
              References
            </button>
          </nav>

          {/* Zone 3: 8. Crisis Support & 9. Join Discussion */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => handleLinkClick('support')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors border cursor-pointer ${
                activeSection === 'support'
                  ? 'bg-rose-50 text-rose-800 border-rose-300'
                  : 'text-[#4C3575] bg-[#F2EDFF] hover:bg-[#C8B6FF]/40 border-[#C8B6FF]/50'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#7C5CFC]" />
              <span>Crisis Support</span>
            </button>

            <button
              onClick={() => handleLinkClick('kwento-silungan')}
              className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              Join Discussion
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4C3575] hover:text-[#24202B] focus-visible:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu in exact matching order */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9FC] border-b border-[#E8E2F2] px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
            {/* 1. Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`p-2.5 text-left rounded-lg transition-colors ${
                activeSection === 'home' ? 'bg-[#F2EDFF] text-[#7C5CFC] font-semibold' : 'hover:bg-[#F2EDFF] text-[#24202B]'
              }`}
            >
              Home
            </button>

            {/* 2. Academic Modules */}
            <div className="p-2.5 rounded-lg bg-white border border-[#E8E2F2]">
              <span className="font-semibold text-[#4C3575] block mb-1.5 uppercase text-[10px] tracking-wider">
                Academic Modules
              </span>
              <div className="space-y-1 pl-1">
                {exploreLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="block w-full text-left py-1 text-[11px] text-[#24202B]/85 hover:text-[#7C5CFC]"
                  >
                    · {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Multimedia */}
            <button
              onClick={() => handleLinkClick('multimedia')}
              className={`p-2.5 text-left rounded-lg transition-colors ${
                activeSection === 'multimedia' ? 'bg-[#F2EDFF] text-[#7C5CFC] font-semibold' : 'hover:bg-[#F2EDFF] text-[#24202B]'
              }`}
            >
              Multimedia
            </button>

            {/* 4. Kwento Silungan */}
            <button
              onClick={() => handleLinkClick('kwento-silungan')}
              className="p-2.5 text-left rounded-lg bg-[#F2EDFF] text-[#7C5CFC] font-semibold flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Kwento Silungan</span>
            </button>

            {/* 5. Silong Tala */}
            <button
              onClick={() => handleLinkClick('silong-tala')}
              className="p-2.5 text-left rounded-lg bg-[#F2EDFF] text-[#4C3575] font-semibold flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Silong Tala</span>
            </button>

            {/* 6. Conclusion */}
            <button
              onClick={() => handleLinkClick('conclusion')}
              className={`p-2.5 text-left rounded-lg transition-colors ${
                activeSection === 'conclusion' ? 'bg-[#F2EDFF] text-[#7C5CFC] font-semibold' : 'hover:bg-[#F2EDFF] text-[#24202B]'
              }`}
            >
              Conclusion
            </button>

            {/* 7. References */}
            <button
              onClick={() => handleLinkClick('references')}
              className={`p-2.5 text-left rounded-lg transition-colors ${
                activeSection === 'references' ? 'bg-[#F2EDFF] text-[#7C5CFC] font-semibold' : 'hover:bg-[#F2EDFF] text-[#24202B]'
              }`}
            >
              References
            </button>

            {/* 8. Crisis Support */}
            <button
              onClick={() => handleLinkClick('support')}
              className="p-2.5 text-left rounded-lg bg-rose-50 text-rose-800 font-semibold flex items-center gap-1.5 border border-rose-200"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              <span>Crisis Support</span>
            </button>

            {/* 9. Join Discussion */}
            <button
              onClick={() => handleLinkClick('kwento-silungan')}
              className="p-2.5 text-center rounded-lg bg-[#7C5CFC] text-white font-semibold col-span-1 sm:col-span-2 shadow-xs"
            >
              Join Discussion
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
