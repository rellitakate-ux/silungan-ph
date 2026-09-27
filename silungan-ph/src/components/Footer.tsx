import React from 'react';
import { ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';
import { SILUNGAN_LOGO } from '../data/initialData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#24202B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Project Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SILUNGAN_LOGO}
                alt="SILUNGAN PH Official Logo"
                className="w-11 h-11 object-contain rounded-xl bg-white p-0.5 border border-white/20 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-tight">
                  SILUNGAN PH
                </span>
                <span className="text-[10px] text-[#C8B6FF] tracking-wider uppercase font-semibold">
                  Philippine Gender Studies Platform
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm text-[#C8B6FF]">
              “Critical Exploration and Creative Presentation of Gender Roles in the Philippine Context”
            </p>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              An academic platform and digital sanctuary providing evidence-based learning, archival history, and respectful community dialogue regarding gender expectations in the Philippines.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#C8B6FF]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>For Educational Purposes Only</span>
              </div>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C8B6FF] font-semibold">
              Academic Modules
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Understanding Gender Roles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Historical Timeline & Babaylan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('today')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gender Roles Today
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('issues')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beyond Expectations: Issues & Realities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('analysis')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Then & Now Comparative Analysis
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Spaces & Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C8B6FF] font-semibold">
              Spaces & Sources
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => onNavigate('silong-tala')}
                  className="hover:text-white transition-colors cursor-pointer text-[#C8B6FF] font-medium"
                >
                  Silong Tala (Stories)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kwento-silungan')}
                  className="hover:text-white transition-colors cursor-pointer text-[#C8B6FF] font-medium"
                >
                  Kwento Silungan (Forum)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('multimedia')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Multimedia Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('support')}
                  className="hover:text-white transition-colors cursor-pointer text-rose-300"
                >
                  Emergency Crisis Hotlines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('conclusion')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  What We Learned (Conclusion)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('references')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Academic References
                </button>
              </li>
            </ul>
          </div>

          {/* Team Attribution */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C8B6FF] font-semibold">
              Research Group
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Cabacang, Mary Faith<br />
              Comonical, Kate<br />
              De Dios, Sharah<br />
              Laudiana, Mary Annjellyn<br />
              Rellita, Katelyn<br />
              Villanueve, Russell Athan
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            © 2026 SILUNGAN PH. Created for educational and academic research purposes.
          </p>
          <p className="font-serif italic text-white/70">
            “Pag-unawa. Pagkukuwento. Pagbabago.”
          </p>
        </div>
      </div>
    </footer>
  );
};
