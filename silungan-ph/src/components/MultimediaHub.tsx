import React, { useState } from 'react';
import { Play, BarChart2, BookOpen, ExternalLink, ShieldCheck, Scale, Info, Check, Filter, X, Youtube } from 'lucide-react';

type MediaCategory =
  | 'All'
  | 'Videos'
  | 'Data & Charts'
  | 'Laws Spotlight';

interface MultimediaItem {
  id: string;
  title: string;
  badge?: string;
  category: MediaCategory;
  description: string;
  educationalTakeaway: string;
  sourceCredit: string;
  year?: string;
  populationMeasured?: string;
  externalLink?: string;
  youtubeId?: string;
  imageSrc?: string;
  type: 'video' | 'chart' | 'law';
  lawDetails?: {
    lawNumber: string;
    officialTitle: string;
    simpleExplanation: string[];
    keyProtectedSpaces: string[];
  };
  chartDetails?: {
    metric: string;
    breakdown: { label: string; valueA: number; valueB: number; labelA: string; labelB: string; unit: string }[];
  };
}

export const MultimediaHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('All');
  const [activeVideoModal, setActiveVideoModal] = useState<{
    title: string;
    youtubeId: string;
    description: string;
    externalLink?: string;
  } | null>(null);

  const categories: MediaCategory[] = [
    'All',
    'Videos',
    'Data & Charts',
    'Laws Spotlight',
  ];

  const mediaData: MultimediaItem[] = [
    // 1. FEATURED VIDEOS
    {
      id: 'video-kirby-araullo-babaylan',
      title: 'THE BABAYLAN',
      badge: 'Pre-Colonial Gender & Leadership',
      category: 'Videos',
      type: 'video',
      youtubeId: 'DDCmfbBy464',
      externalLink: 'https://youtu.be/DDCmfbBy464',
      imageSrc: 'https://img.youtube.com/vi/DDCmfbBy464/hqdefault.jpg',
      description:
        'Discover the important spiritual, social, and leadership roles of the Babaylan in pre-colonial Philippine society and how these roles changed under colonization. Filipino historian and educator Kirby Araullo discusses who the Babaylan were, their status in society, gender and transgender Babaylan, their decline during colonization, and their presence today. The video also lists academic readings and historical resources in its description.',
      educationalTakeaway:
        'Highlights that pre-colonial Filipino society recognized spiritual authority, community leadership, and gender diversity (including transgender and gender-crossing Babaylan) long before European patriarchal constructs were introduced.',
      sourceCredit: 'Kirby Araullo (Filipino Historian & Educator) / YouTube',
      year: 'Educational Video Archive',
      populationMeasured: 'Pre-colonial to contemporary historical scholarship & primary accounts',
    },

    // 2. DATA & CHARTS: GENDER IN NUMBERS
    {
      id: 'chart-employment-by-sex',
      title: 'Employment by Sex (Labor Force Survey)',
      badge: 'Philippine Statistics Authority',
      category: 'Data & Charts',
      type: 'chart',
      description:
        'The Philippine Statistics Authority’s Labor Force Survey provides sex-disaggregated tables for employment status, occupation, industry, and educational attainment in the Philippines.',
      educationalTakeaway:
        'Demonstrates the persistent labor participation divide: while Filipinas lead in professional (61.8%) and managerial (52.4%) roles, their overall labor force participation (53.2%) remains significantly lower than men’s (75.3%) due to disproportionate unpaid caregiving burdens.',
      sourceCredit: 'Philippine Statistics Authority — Labor Force Survey',
      year: 'Official Statistics: 2023–2024 PSA LFS Series',
      populationMeasured: 'Nationwide working-age population aged 15 and over',
      chartDetails: {
        metric: 'Sex-Disaggregated Rate / Occupation Share (%)',
        breakdown: [
          { label: 'Labor Force Participation Rate', valueA: 53.2, valueB: 75.3, labelA: 'Women', labelB: 'Men', unit: '%' },
          { label: 'Managers & Executive Roles', valueA: 52.4, valueB: 47.6, labelA: 'Women', labelB: 'Men', unit: '%' },
          { label: 'Professionals & Educators', valueA: 61.8, valueB: 38.2, labelA: 'Women', labelB: 'Men', unit: '%' },
          { label: 'Service & Sales Workers', valueA: 57.9, valueB: 42.1, labelA: 'Women', labelB: 'Men', unit: '%' },
          { label: 'Plant & Machine Operators / Laborers', valueA: 15.6, valueB: 84.4, labelA: 'Women', labelB: 'Men', unit: '%' },
        ],
      },
    },
    {
      id: 'chart-women-political-leadership',
      title: 'Women in Political Leadership',
      badge: 'UN Women Data Hub',
      category: 'Data & Charts',
      type: 'chart',
      description:
        'The UN Women Data Hub reports that women held 27.3% of seats in the Philippine parliament as of February 2024. Displaying the date is essential because this figure can change over time and across legislative cycles.',
      educationalTakeaway:
        'As of February 2024, women held 27.3% of seats in the Philippine parliament. While the Philippines has elected two female presidents, legislative leadership remains beneath the 30% international critical mass benchmark, highlighting the continued need for electoral reforms.',
      sourceCredit: 'UN Women — Philippines Country Fact Sheet (UN Women Data Hub)',
      year: 'Official Benchmark: As of February 2024 (Time-Sensitive Metric)',
      populationMeasured: 'Philippine Parliament (Senate & House of Representatives) & Local Chief Executives',
      chartDetails: {
        metric: 'Seats & Offices Held (As of February 2024) (%)',
        breakdown: [
          { label: 'Philippine Parliament Seats (As of Feb 2024)', valueA: 27.3, valueB: 72.7, labelA: 'Women', labelB: 'Men', unit: '%' },
          { label: 'Senate of the Philippines (24 Seats)', valueA: 29.2, valueB: 70.8, labelA: 'Women', labelB: 'Men', unit: '%' },
          { label: 'Provincial Governors', valueA: 28.6, valueB: 71.4, labelA: 'Women', labelB: 'Men', unit: '%' },
          { label: 'City & Municipal Mayors', valueA: 23.8, valueB: 76.2, labelA: 'Women', labelB: 'Men', unit: '%' },
        ],
      },
    },
    {
      id: 'chart-unpaid-care',
      title: 'Data Chart: Daily Hours Dedicated to Domestic & Unpaid Care Work',
      badge: 'PSA Time-Use Survey',
      category: 'Data & Charts',
      type: 'chart',
      description:
        'Empirical time-use survey data showing the average daily hours spent on household cooking, child/eldercare, cleaning, and maintenance between women and men in the Philippines.',
      educationalTakeaway:
        'Filipina women dedicate an average of 4.5 hours daily to unpaid care compared to 1.5 hours by men—a 3.0x disparity that impacts women’s career advancement.',
      sourceCredit: 'Philippine Statistics Authority (PSA) Time Use Survey & PIDS Research Paper Series',
      year: 'Year of Data: 2022-2023',
      populationMeasured: 'Population Measured: Filipino adult population aged 15-64 nationwide',
      chartDetails: {
        metric: 'Average Hours Per Day',
        breakdown: [
          { label: 'Food Prep & Cooking', valueA: 1.8, valueB: 0.4, labelA: 'Women', labelB: 'Men', unit: 'hours/day' },
          { label: 'Childcare & Eldercare', valueA: 1.6, valueB: 0.5, labelA: 'Women', labelB: 'Men', unit: 'hours/day' },
          { label: 'Laundry & House Cleaning', valueA: 1.1, valueB: 0.6, labelA: 'Women', labelB: 'Men', unit: 'hours/day' },
        ],
      },
    },
    {
      id: 'chart-education-tertiary',
      title: 'Data Chart: Higher Education Completion by Gender in the Philippines',
      badge: 'CHED Higher Ed Stats',
      category: 'Data & Charts',
      type: 'chart',
      description:
        'Commission on Higher Education (CHED) statistics illustrating female higher graduation rates contrasted against course tracking disparities.',
      educationalTakeaway:
        'Women comprise over 57% of higher education graduates, yet remain underrepresented in technical and engineering fields.',
      sourceCredit: 'Commission on Higher Education (CHED) Higher Education Statistical Data',
      year: 'Year of Data: Academic Year 2023-2024',
      populationMeasured: 'Population Measured: All enrolled and graduating students in higher education institutions (HEIs)',
      chartDetails: {
        metric: 'Percentage Share (%)',
        breakdown: [
          { label: 'Education & Teaching Courses', valueA: 72.4, valueB: 27.6, labelA: 'Female', labelB: 'Male', unit: '%' },
          { label: 'Business & Management Courses', valueA: 59.8, valueB: 40.2, labelA: 'Female', labelB: 'Male', unit: '%' },
          { label: 'Engineering & Technology Courses', valueA: 28.5, valueB: 71.5, labelA: 'Female', labelB: 'Male', unit: '%' },
        ],
      },
    },

    // 3. PHILIPPINE LAWS SPOTLIGHT
    {
      id: 'law-magna-carta',
      title: 'Philippine Laws Spotlight: Republic Act No. 9710 (Magna Carta of Women)',
      category: 'Laws Spotlight',
      type: 'law',
      description:
        'The comprehensive national human rights law that seeks to eliminate discrimination against women through recognition, protection, fulfillment, and promotion of their rights.',
      educationalTakeaway:
        'Provides statutory guarantees for equal education, non-derogatory media portrayal, health services, and political leadership participation.',
      sourceCredit: 'Official Gazette of the Republic of the Philippines & Philippine Commission on Women (PCW)',
      year: 'Enacted: August 14, 2009',
      populationMeasured: 'Nationwide legal coverage for all Filipino women, especially marginalized sectors',
      lawDetails: {
        lawNumber: 'Republic Act No. 9710',
        officialTitle: 'The Magna Carta of Women',
        simpleExplanation: [
          'Prohibits discrimination against women in employment, schools, military, and governance.',
          'Mandates 50% incremental targets for women in third-level civil service and decision-making bodies.',
          'Guarantees equal access to scholarships, sports training, and vocational education without gender bias.',
          'Calls for non-discriminatory and non-derogatory portrayals of women in television, advertisements, and film.',
        ],
        keyProtectedSpaces: ['Workplaces', 'Schools & Universities', 'Government Offices', 'Media & Entertainment'],
      },
    },
    {
      id: 'law-safe-spaces',
      title: 'Philippine Laws Spotlight: Republic Act No. 11313 (Safe Spaces Act / Bawal Bastos Law)',
      category: 'Laws Spotlight',
      type: 'law',
      description:
        'Landmark penal statute defining and penalizing gender-based sexual harassment in streets, public spaces, workplaces, educational institutions, and online cyber platforms.',
      educationalTakeaway:
        'Clarifies that catcalling, wolf-whistling, stalking, and non-consensual online sexual advances are criminal acts with legal consequences.',
      sourceCredit: 'Official Gazette of the Republic of the Philippines & Commission on Human Rights',
      year: 'Enacted: April 17, 2019',
      populationMeasured: 'All individuals nationwide regardless of gender, sexual orientation, or gender expression',
      lawDetails: {
        lawNumber: 'Republic Act No. 11313',
        officialTitle: 'The Safe Spaces Act (Bawal Bastos Law)',
        simpleExplanation: [
          'Penalizes catcalling, wolf-whistling, leering, invasive sexual slurs, and stalking in streets and sidewalks.',
          'Criminalizes digital gender-based harassment, including non-consensual cyberstalking and sexual threats.',
          'Requires all schools, colleges, and workplaces to establish active Committees on Decorum and Investigation (CODI).',
          'Protects all persons regardless of sex, sexual orientation, gender identity, and expression (SOGIESC).',
        ],
        keyProtectedSpaces: ['Streets & Alleys', 'Public Transportation', 'Online Social Platforms', 'Offices & Campuses'],
      },
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? mediaData
      : mediaData.filter((item) => item.category === activeCategory);

  return (
    <section id="multimedia" className="py-20 bg-white border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 06</span>
            <span aria-hidden="true">·</span>
            <span>Educational Visual Learning Hub</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24202B] mb-4 text-balance">
            Multimedia Hub: Evidence, Archives, & Visual Learning
          </h2>

          <div className="p-6 rounded-3xl bg-[#FAF9FC] border border-[#E8E2F2] shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFC] font-bold block mb-2">
              Learning-Centered Architecture
            </span>
            <p className="text-base sm:text-lg text-[#24202B]/90 leading-relaxed font-medium">
              Every media asset in SILUNGAN PH is curated around something visitors can learn from—featuring educational video documentaries, verified sex-disaggregated data charts with population indices, and simplified Philippine legal spotlights.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center overflow-x-auto gap-2 p-1.5 bg-[#FAF9FC] rounded-2xl max-w-4xl mb-10 border border-[#E8E2F2] no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-3.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
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

        {/* Gender in Numbers Spotlight Banner for Data & Charts */}
        {activeCategory === 'Data & Charts' && (
          <div className="mb-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#F2EDFF] via-white to-[#FAF9FC] border border-[#C8B6FF] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7C5CFC] uppercase tracking-wider mb-2">
              <BarChart2 className="w-4 h-4 text-[#7C5CFC]" />
              <span>Data Visualization — “Gender in Numbers”</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#24202B] mb-2">
              Official Sex-Disaggregated Philippine & International Data
            </h3>
            <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed max-w-3xl">
              Instead of using fabricated or arbitrary statistics, SILUNGAN PH translates official government data into custom purple-themed charts—highlighting verified employment metrics from the <strong>Philippine Statistics Authority’s (PSA) Labor Force Survey</strong> and time-stamped parliamentary representation benchmarks from the <strong>UN Women Data Hub</strong>.
            </p>
          </div>
        )}

        {/* Grid of Media Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isLaw = item.type === 'law';
            const isChart = item.type === 'chart';

            return (
              <div
                key={item.id}
                className="bg-[#FAF9FC] rounded-3xl border border-[#E8E2F2] overflow-hidden flex flex-col justify-between hover:border-[#C8B6FF] hover:shadow-xs transition-all group"
              >
                <div>
                  {/* Visual Header / Chart / Law Banner */}
                  {isLaw && item.lawDetails ? (
                    <div className="p-6 bg-[#4C3575] text-white border-b border-[#E8E2F2]">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C8B6FF] uppercase tracking-wider mb-2">
                        <Scale className="w-3.5 h-3.5" />
                        <span>Philippine Statutory Spotlight</span>
                      </div>
                      <h4 className="font-serif text-xl font-bold mb-1">
                        {item.lawDetails.lawNumber}
                      </h4>
                      <p className="text-xs text-white/80 italic font-serif">
                        {item.lawDetails.officialTitle}
                      </p>
                    </div>
                  ) : isChart && item.chartDetails ? (
                    <div className="p-6 bg-[#F2EDFF]/70 border-b border-[#E8E2F2]">
                      <div className="flex items-center justify-between text-xs font-mono text-[#7C5CFC] mb-2">
                        <span className="font-bold flex items-center gap-1.5">
                          <BarChart2 className="w-3.5 h-3.5 text-[#7C5CFC]" />
                          <span>GENDER IN NUMBERS</span>
                        </span>
                        {item.badge && (
                          <span className="text-[10px] text-[#4C3575] font-semibold bg-white px-2 py-0.5 rounded-md border border-[#C8B6FF]/50 shadow-2xs">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-mono text-[#4C3575] font-medium mb-3">
                        {item.chartDetails.metric}
                      </div>
                      <div className="space-y-3">
                        {item.chartDetails.breakdown.map((b, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-[11px] font-semibold text-[#24202B]">
                              <span>{b.label}</span>
                              <span className="text-[#4C3575] tabular-nums font-mono">
                                {b.valueA} vs {b.valueB}
                              </span>
                            </div>
                            <div className="w-full h-2.5 bg-white rounded-full overflow-hidden flex shadow-xs">
                              <div
                                style={{ width: `${(b.valueA / (b.valueA + b.valueB)) * 100}%` }}
                                className="bg-[#7C5CFC] h-full"
                              />
                              <div
                                style={{ width: `${(b.valueB / (b.valueA + b.valueB)) * 100}%` }}
                                className="bg-[#C8B6FF] h-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#24202B]/60 mt-3 pt-2 border-t border-[#E8E2F2]">
                        <span>Purple: Female / Women</span>
                        <span>Lavender: Male / Men</span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`relative h-48 bg-[#E8E2F2] overflow-hidden ${
                        item.type === 'video' ? 'cursor-pointer' : ''
                      }`}
                      onClick={() => {
                        if (item.type === 'video' && item.youtubeId) {
                          setActiveVideoModal({
                            title: item.title,
                            youtubeId: item.youtubeId,
                            description: item.description,
                            externalLink: item.externalLink,
                          });
                        }
                      }}
                    >
                      {item.imageSrc && (
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      )}
                      {item.badge && (
                        <div className="absolute top-3 left-3 bg-[#4C3575]/90 backdrop-blur-xs text-[#F2EDFF] text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold shadow-xs">
                          {item.badge}
                        </div>
                      )}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/95 text-[#4C3575] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 ml-0.5 fill-current text-[#7C5CFC]" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#7C5CFC] uppercase tracking-wider mb-2">
                      <span>{item.category}</span>
                      {item.badge && (
                        <span className="text-[10px] text-[#4C3575] font-mono bg-[#F2EDFF] px-2 py-0.5 rounded-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#24202B] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#24202B]/80 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Interactive Video Buttons */}
                    {item.type === 'video' && item.youtubeId && (
                      <div className="flex items-center gap-2 mb-4">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveVideoModal({
                              title: item.title,
                              youtubeId: item.youtubeId!,
                              description: item.description,
                              externalLink: item.externalLink,
                            });
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#7C5CFC] hover:bg-[#4C3575] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Video</span>
                        </button>

                        {item.externalLink && (
                          <a
                            href={item.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-2 bg-[#F2EDFF] hover:bg-[#C8B6FF]/40 text-[#4C3575] text-xs font-semibold rounded-xl border border-[#C8B6FF]/40 transition-colors"
                            title="Open on YouTube"
                          >
                            <Youtube className="w-3.5 h-3.5 text-red-600" />
                            <span className="hidden sm:inline">YouTube</span>
                            <ExternalLink className="w-3 h-3 text-[#4C3575]" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Educational Takeaway Callout */}
                    <div className="p-3.5 rounded-xl bg-white border border-[#E8E2F2] text-xs text-[#4C3575]">
                      <span className="font-bold text-[#24202B] block text-[11px] uppercase tracking-wide mb-1">
                        Educational Takeaway:
                      </span>
                      <p className="leading-relaxed">
                        {item.educationalTakeaway}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sourced Footer Meta */}
                <div className="px-6 py-4 border-t border-[#E8E2F2] bg-white rounded-b-3xl text-xs space-y-1">
                  <div className="text-[11px] text-[#24202B]/70 truncate font-medium">
                    Source: {item.sourceCredit}
                  </div>
                  {item.year && (
                    <div className="text-[10px] text-[#24202B]/50 flex items-center justify-between">
                      <span>{item.year}</span>
                      {item.populationMeasured && <span className="truncate max-w-[180px]">{item.populationMeasured}</span>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded Video Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-[#FAF9FC] rounded-3xl border border-[#C8B6FF]/40 shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#4C3575] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#C8B6FF] uppercase tracking-wider block">
                  Multimedia Educational Screening
                </span>
                <h3 className="font-serif text-lg font-bold">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Responsive 16:9 Video Iframe */}
            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal.youtubeId}?autoplay=1&rel=0`}
                title={activeVideoModal.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Details Footer */}
            <div className="p-6 overflow-y-auto space-y-3 bg-white">
              <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                {activeVideoModal.description}
              </p>
              <div className="pt-3 border-t border-[#E8E2F2] flex items-center justify-between">
                <span className="text-xs text-[#24202B]/60">
                  Curated for the SILUNGAN PH Academic Platform
                </span>
                {activeVideoModal.externalLink && (
                  <a
                    href={activeVideoModal.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2EDFF] hover:bg-[#C8B6FF]/40 text-[#4C3575] text-xs font-semibold rounded-lg transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
