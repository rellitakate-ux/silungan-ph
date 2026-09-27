import React from 'react';
import { ArrowRight, BookOpen, Clock, Compass, Eye, HeartHandshake, Sparkles, Users } from 'lucide-react';
import { HERO_IMAGE, SILUNGAN_LOGO } from '../data/initialData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const previewCards = [
    {
      id: 'explore',
      num: '01',
      title: 'Understanding Gender Roles',
      desc: 'Definitions, socialization agents, and the distinction between biological sex and gender identity.',
      icon: Compass,
      tag: 'Theoretical Framework',
    },
    {
      id: 'history',
      num: '02',
      title: 'Historical Perspective',
      desc: 'The journey from pre-colonial Babaylan egalitarianism to colonial domesticity and suffrage.',
      icon: Clock,
      tag: 'Archival Timeline',
    },
    {
      id: 'today',
      num: '03',
      title: 'Contemporary Gender Roles',
      desc: 'Lived realities in Filipino families, schools, workplaces, media, and grassroots communities.',
      icon: Users,
      tag: 'Modern Realities',
    },
    {
      id: 'issues',
      num: '04',
      title: 'Gender Issues & Realities',
      desc: 'Rigid stereotypes, gender-based violence (RA 9262, RA 11313), care poverty, and SOGIESC rights.',
      icon: HeartHandshake,
      tag: 'Critical Examination',
    },
    {
      id: 'multimedia',
      num: '05',
      title: 'Multimedia Hub',
      desc: 'Curated documentaries, data visualizations, infographic charts, and historical galleries.',
      icon: Eye,
      tag: 'Data & Visuals',
    },
    {
      id: 'kwento-silungan',
      num: '06',
      title: 'Kwento Silungan',
      desc: 'A safe community dialogue space. “May kwento ka? Dito, may makikinig.”',
      icon: Sparkles,
      tag: 'Community Space',
    },
    {
      id: 'silong-tala',
      num: '07',
      title: 'Silong Tala',
      desc: 'Editorial long-form storytelling: “Mga kuwentong nagbibigay-liwanag sa ilalim ng iisang silungan.”',
      icon: BookOpen,
      tag: 'Editorial Magazine',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 bg-ph-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card / Showcase */}
        <div className="relative rounded-3xl bg-white border border-[#E8E2F2] shadow-sm overflow-hidden mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between z-10">
              <div>
                {/* Project Title & Classification */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
                  <span>Project Title</span>
                  <span aria-hidden="true" className="text-[#C8B6FF]">·</span>
                  <span className="text-[#4C3575] font-bold">Critical Exploration and Creative Presentation of Gender Roles in the Philippine Context</span>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={SILUNGAN_LOGO}
                    alt="SILUNGAN PH Official Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl bg-white p-1 border border-[#C8B6FF]/50 shadow-md shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#24202B] leading-[1.08] text-balance">
                      SILUNGAN PH
                    </h1>
                  </div>
                </div>

                <p className="font-serif italic text-xl sm:text-2xl text-[#4C3575] mb-5 font-medium">
                  “Pag-unawa. Pagkukuwento. Pagbabago.”
                </p>

                {/* Short Introduction to the Topic */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9FC] border border-[#E8E2F2] mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7C5CFC] font-bold block mb-1">
                    Introduction to the Topic
                  </span>
                  <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                    Gender roles in the Philippines have evolved through pre-colonial traditions, colonial influences, and modern society. SILUNGAN PH explores how these changes continue to shape Filipino identities, opportunities, relationships, and everyday life.
                  </p>
                </div>

                {/* Group Name & Complete Member Roster */}
                <div className="mb-6 p-4 rounded-2xl bg-[#F2EDFF]/70 border border-[#C8B6FF]/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#4C3575] uppercase tracking-wide flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#7C5CFC]" />
                      <span>Group Members:</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#7C5CFC] font-semibold">6 Members</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-[#24202B]">
                    <div className="bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#E8E2F2]">
                      <span className="font-semibold text-[#4C3575]">Cabacang</span>, Mary Faith
                    </div>
                    <div className="bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#E8E2F2]">
                      <span className="font-semibold text-[#4C3575]">Comonical</span>, Kate
                    </div>
                    <div className="bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#E8E2F2]">
                      <span className="font-semibold text-[#4C3575]">De Dios</span>, Sharah
                    </div>
                    <div className="bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#E8E2F2]">
                      <span className="font-semibold text-[#4C3575]">Laudiana</span>, Mary Annjellyn
                    </div>
                    <div className="bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#E8E2F2]">
                      <span className="font-semibold text-[#4C3575]">Rellita</span>, Katelyn
                    </div>
                    <div className="bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#E8E2F2]">
                      <span className="font-semibold text-[#4C3575]">Villanueva</span>, Russell Athan
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('explore')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#7C5CFC] hover:bg-[#4C3575] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Explore Gender Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('kwento-silungan')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#4C3575] bg-[#F2EDFF] hover:bg-[#C8B6FF]/30 border border-[#C8B6FF]/50 rounded-xl transition-all cursor-pointer"
                >
                  <span>Enter Kwento Silungan</span>
                  <Sparkles className="w-4 h-4 text-[#7C5CFC]" />
                </button>
              </div>

              {/* Academic Attribution */}
              <div className="pt-8 mt-6 border-t border-[#E8E2F2] flex items-center justify-between text-xs text-[#24202B]/60">
                <span>By Cabacang, Comonical, De Dios, Laudiana, Rellita, & Villanueva</span>
                <span className="hidden sm:inline">Peer-Reviewed Research Platform</span>
              </div>
            </div>

            {/* Right Hero Visual Column */}
            <div className="lg:col-span-5 relative bg-[#F2EDFF] min-h-[300px] lg:min-h-full">
              <img
                src={HERO_IMAGE}
                alt="Silungan Filipino sanctuary illustration during dusk with warm lantern glow"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container styling handled cleanly
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24202B]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/10 lg:via-transparent lg:to-black/40" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 rounded-lg bg-[#24202B]/60 backdrop-blur-xs border border-white/10">
                <p className="font-serif italic">“Silungan” — A shelter from societal prejudice; a common ground for understanding.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Lead-in Context */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-[#7C5CFC] font-semibold mb-2">
            Academic Navigation Grid
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202B] mb-3">
            Seven Areas of Explorations
          </h2>
          <p className="text-sm text-[#24202B]/75 leading-relaxed">
            From pre-colonial spiritual authority to modern workplace dilemmas and safe storytelling, embark on a structured journey through Philippine gender dynamics.
          </p>
        </div>

        {/* Interactive Feature Cards (The 7 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {previewCards.map((card, idx) => {
            const Icon = card.icon;
            const isFeatured = idx === 5 || idx === 6; // Highlight Kwento Silungan & Silong Tala
            return (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 group cursor-pointer flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-br from-white to-[#F2EDFF]/60 border-[#C8B6FF] hover:border-[#7C5CFC] hover:shadow-md'
                    : 'bg-white border-[#E8E2F2] hover:border-[#C8B6FF] hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7C5CFC] font-mono mb-4">
                    <span>{card.num}</span>
                    <span className="text-[#4C3575]/60 font-sans text-[11px] font-medium tracking-wide">
                      {card.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] text-[#7C5CFC] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#7C5CFC] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#24202B] group-hover:text-[#4C3575] transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#24202B]/70 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8E2F2]/60 flex items-center justify-between text-xs font-medium text-[#7C5CFC] group-hover:text-[#4C3575]">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
