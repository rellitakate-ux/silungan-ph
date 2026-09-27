import React, { useState } from 'react';
import { TIMELINE_DATA, BABAYLAN_IMAGE, SILUNGAN_LOGO } from '../data/initialData';
import { ScrollText, BookOpen, Clock, ArrowRight, ShieldCheck, ChevronRight, ExternalLink, Play } from 'lucide-react';

export const HistorySection: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(0);

  const historicalEras = [
    {
      id: 'pre-colonial',
      era: 'Pre-Colonial Philippines',
      period: 'Before 1565',
      summary:
        'Gender relations varied among communities, but historical accounts and contemporary scholarship describe women occupying important economic and social positions.',
      babaylanDetail:
        'The Babaylan, spiritual and community leaders who could be women or gender-diverse individuals, are an important example of roles that did not always conform to later colonial gender expectations.',
      institutionalSource:
        'The Philippine Commission on Women describes pre-colonial gender roles as comparatively flexible and diverse.',
      keyTakeaway:
        'Indigenous traditions recognized spiritual authority, economic agency, and bilateral familial rights before colonial intervention.',
    },
    {
      id: 'spanish-era',
      era: 'Spanish Colonial Period',
      period: '1565 – 1898',
      summary:
        'Spanish colonial rule brought Catholic and European ideas about family and gender. Expectations increasingly emphasized male authority and women’s domestic, religious, and family responsibilities.',
      babaylanDetail:
        'Ideals of modest and obedient femininity became influential, codified in literature and social codes through archetypes like Maria Clara.',
      institutionalSource:
        'Subordinated independent civic authority of women under Iberian civil law (Las Siete Partidas) and church doctrines.',
      keyTakeaway:
        'Transformed womanhood from an active civic role into cloistered domestic obedience, while casting indigenous shamans as heretical.',
    },
    {
      id: 'american-era',
      era: 'American Colonial Period',
      period: '1898 – 1946',
      summary:
        'American rule expanded formal education and created new professional opportunities for Filipino women. Women increasingly participated in teaching, nursing, civic organizations, and public life.',
      babaylanDetail:
        'Women’s political participation also expanded significantly, culminating in the historic victory for women’s suffrage in the 1937 national plebiscite.',
      institutionalSource:
        'Over 447,000 Filipinas voted YES in 1937, shattering political prohibitions and allowing women to run for public office.',
      keyTakeaway:
        'Establishment of secular public schooling and organized suffrage opened civic and professional avenues for women.',
    },
    {
      id: 'post-war',
      era: 'Post-War to Late 20th Century',
      period: '1946 – 1986',
      summary:
        'Post-war industrial growth and subsequent economic shifts saw Filipinas enter factory labor, commerce, and overseas migration in record numbers.',
      babaylanDetail:
        'Women formed civic and militant advocacy networks (such as MAKIBAKA and civil society groups) challenging both authoritarian rule and gender inequality.',
      institutionalSource:
        'The emergence of the "double burden": women taking on paid formal labor while continuing to bear 100% of unpaid household work.',
      keyTakeaway:
        'Economic necessity expanded women in the workforce, leading to active organizing for workplace rights and democratic governance.',
    },
    {
      id: 'modern',
      era: 'Modern Philippines (Present Day)',
      period: '1986 – Present',
      summary:
        'Women now participate extensively in education, employment, government, business, and community leadership.',
      babaylanDetail:
        'At the same time, some older expectations surrounding caregiving, masculinity, femininity, and household responsibilities continue.',
      institutionalSource:
        'Backed by modern statutory protections like the Magna Carta of Women (RA 9710) and Safe Spaces Act (RA 11313).',
      keyTakeaway:
        'A dynamic era where constitutional equality coexists with lingering cultural pressures in domestic life and SOGIESC rights.',
    },
  ];

  const currentEra = historicalEras[selectedEraIndex];

  return (
    <section id="history" className="py-20 bg-white border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 02</span>
            <span aria-hidden="true">·</span>
            <span>Historical Trajectory</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24202B] mb-4 text-balance">
            Historical Perspective
          </h2>

          {/* Opening Paragraph */}
          <div className="p-6 rounded-3xl bg-[#FAF9FC] border border-[#E8E2F2] shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFC] font-bold block mb-2">
              Opening Overview
            </span>
            <p className="text-base sm:text-lg text-[#24202B]/90 leading-relaxed font-medium">
              Gender roles in the Philippines have changed significantly throughout history. Indigenous traditions, colonization, religion, education, and social change have all influenced expectations of Filipino women and men.
            </p>
          </div>
        </div>

        {/* Interactive Timeline Rail: Pre-Colonial → Spanish Era → American Era → Post-War → Present Day */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase text-[#7C5CFC] font-bold">
              Interactive Timeline Sequence
            </span>
            <span className="text-xs text-[#24202B]/60">
              Click an era to explore
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {historicalEras.map((era, index) => {
              const isSelected = selectedEraIndex === index;
              return (
                <button
                  key={era.id}
                  onClick={() => setSelectedEraIndex(index)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#4C3575] text-white border-[#4C3575] shadow-md scale-102'
                      : 'bg-[#FAF9FC] text-[#24202B] border-[#E8E2F2] hover:border-[#C8B6FF]'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-mono block mb-1 uppercase tracking-wider ${
                        isSelected ? 'text-[#C8B6FF]' : 'text-[#7C5CFC]'
                      }`}
                    >
                      {era.period}
                    </span>
                    <h3 className="font-serif text-sm font-bold leading-snug mb-1">
                      {era.era}
                    </h3>
                  </div>

                  <div className="pt-3 mt-3 border-t border-current/20 flex items-center justify-between text-[10px] font-medium opacity-80">
                    <span>Era 0{index + 1}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* In-Depth Era Showcase Card */}
        <div className="bg-[#FAF9FC] rounded-3xl border border-[#E8E2F2] p-8 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#7C5CFC] uppercase mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentEra.period} · ERA 0{selectedEraIndex + 1}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202B] mb-3">
                  {currentEra.era}
                </h3>
                <p className="text-base text-[#24202B]/90 leading-relaxed font-serif italic border-l-2 border-[#7C5CFC] pl-4 py-1">
                  {currentEra.summary}
                </p>
              </div>

              {/* Historical Focus Box */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8E2F2] space-y-3">
                <span className="text-xs font-bold text-[#4C3575] uppercase tracking-wide block">
                  Detailed Historical Evidence:
                </span>
                <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                  {currentEra.babaylanDetail}
                </p>
              </div>

              {/* Institutional Reference Card */}
              <div className="p-4 rounded-2xl bg-[#F2EDFF]/60 border border-[#C8B6FF]/40 text-xs text-[#4C3575] space-y-1">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]">
                  <BookOpen className="w-3.5 h-3.5 text-[#7C5CFC]" />
                  <span>Institutional Documentation:</span>
                </div>
                <p className="leading-relaxed">
                  {currentEra.institutionalSource}
                </p>
              </div>

              {/* Pre-Colonial Video Resource Link */}
              {selectedEraIndex === 0 && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-white to-[#F2EDFF] border border-[#C8B6FF] text-xs space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#7C5CFC] uppercase tracking-wider font-bold flex items-center gap-1.5">
                      <Play className="w-3 h-3 text-[#7C5CFC] fill-current" />
                      <span>Featured Video Resource</span>
                    </span>
                    <span className="text-[10px] font-semibold text-[#4C3575] bg-white px-2 py-0.5 rounded-sm border border-[#C8B6FF]/50">
                      Kirby Araullo
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#24202B]">
                    The Babaylan – Badass Priestess of the Philippines!
                  </h4>
                  <p className="text-[11px] text-[#24202B]/80 leading-relaxed">
                    Filipino historian and educator Kirby Araullo discusses who the Babaylan were, their status in society, gender and transgender Babaylan, their decline during colonization, and their presence today.
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-2">
                    <a
                      href="https://youtu.be/DDCmfbBy464"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#7C5CFC] hover:bg-[#4C3575] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="#multimedia"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-[#F2EDFF] text-[#4C3575] rounded-lg text-xs font-semibold border border-[#C8B6FF]/50 transition-colors"
                    >
                      <span>View in Multimedia Hub</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right Visual / Spotlight Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#E8E2F2] bg-white shadow-xs">
                <img
                  src={selectedEraIndex === 0 ? BABAYLAN_IMAGE : '/src/assets/images/contemporary_filipino_roles_1790484629615.jpg'}
                  alt={currentEra.era}
                  className="w-full h-56 object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="p-5">
                  <span className="text-[11px] font-mono uppercase text-[#7C5CFC] font-semibold block mb-1">
                    Era Takeaway
                  </span>
                  <p className="text-xs text-[#24202B]/80 leading-relaxed">
                    {currentEra.keyTakeaway}
                  </p>
                </div>
              </div>

              {/* Philippine Commission on Women citation card */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E2F2] text-xs text-[#24202B]/70 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#7C5CFC] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#24202B]">Official Citation: </span>
                  Philippine Commission on Women (PCW) Resource Center & Historical Archives on Filipino Women’s Rights.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
