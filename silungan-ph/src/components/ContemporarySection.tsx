import React, { useState } from 'react';
import { Home, GraduationCap, Briefcase, Tv, Award, Users, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { CONTEMPORARY_IMAGE } from '../data/initialData';

export const ContemporarySection: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>('family');

  const contemporaryCards = [
    {
      id: 'family',
      title: 'Family',
      icon: Home,
      summary:
        'Traditional expectations often associate men with providing financially and women with caregiving and household responsibilities.',
      modernReality:
        'Today, many Filipino households have both partners earning income, while caregiving and domestic responsibilities can also be shared.',
      legalOrResearchNote:
        'Changing dynamics see an increase in shared budgeting, dual-career households, and evolving fatherhood practices.',
    },
    {
      id: 'education',
      title: 'Education',
      icon: GraduationCap,
      summary:
        'Students of all genders participate across different fields, but stereotypes can still influence perceptions of which courses and careers are considered appropriate for women or men.',
      modernReality:
        'Filipinas achieve high tertiary completion rates, while ongoing advocacy seeks to encourage women in STEM and support male retention in basic education.',
      legalOrResearchNote:
        'Philippine law requires equal access and the elimination of discrimination in education, scholarships, and training (Magna Carta of Women).',
    },
    {
      id: 'workplace',
      title: 'Workplace',
      icon: Briefcase,
      summary:
        'Women participate across many professions and leadership roles in both corporate and public sectors.',
      modernReality:
        'However, gender expectations can still affect hiring, promotion, caregiving responsibilities, and workplace experiences, including the balancing of unpaid care work.',
      legalOrResearchNote:
        'Supported by labor protection statutes such as the 105-Day Expanded Maternity Leave Act (RA 11210) and Safe Spaces Act (RA 11313).',
    },
    {
      id: 'media',
      title: 'Media',
      icon: Tv,
      summary:
        'Television, advertisements, films, and social media can both reinforce and challenge gender stereotypes in everyday life.',
      modernReality:
        'Content creators, independent filmmakers, and digital platforms are presenting more complex, diverse portrayals of Filipino masculinities, femininities, and queer narratives.',
      legalOrResearchNote:
        'Research on Philippine media has examined how representations of femininity and imported beauty standards can influence social expectations (Socioeconomic Research Portal / PIDS).',
    },
    {
      id: 'leadership',
      title: 'Leadership',
      icon: Award,
      summary:
        'Filipinos of different genders participate in politics, businesses, schools, organizations, and community governance.',
      modernReality:
        'While the country has elected female presidents and senior officials, sustained effort is needed to ensure equitable representation across local councils and executive boards.',
      legalOrResearchNote:
        'The Magna Carta of Women includes provisions aimed at increasing women’s participation in government and development decision-making.',
    },
    {
      id: 'community',
      title: 'Community',
      icon: Users,
      summary:
        'Community life, neighborhood organizing, and barangay activities see vibrant, indispensable involvement from all genders.',
      modernReality:
        'Women frequently form the backbone of community health volunteer work (BHWs), youth programs, and grassroots emergency relief networks.',
      legalOrResearchNote:
        'Local government units are mandated to maintain active Barangay VAW Desks and gender-responsive development budgets (Gender and Development - GAD).',
    },
  ];

  const activeCard = contemporaryCards.find((c) => c.id === selectedCardId) || contemporaryCards[0];

  return (
    <section id="today" className="py-20 bg-[#FAF9FC] border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 03</span>
            <span aria-hidden="true">·</span>
            <span>Contemporary Realities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24202B] mb-4 text-balance">
            Contemporary Gender Roles
          </h2>

          {/* Opening Paragraph */}
          <div className="p-6 rounded-3xl bg-white border border-[#E8E2F2] shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFC] font-bold block mb-2">
              Opening Overview
            </span>
            <p className="text-base sm:text-lg text-[#24202B]/90 leading-relaxed font-medium">
              Gender roles in modern Philippine society are changing. Traditional expectations remain influential, but families, schools, workplaces, media, and communities increasingly reflect more diverse roles.
            </p>
          </div>
        </div>

        {/* Suggested Visual: Six Clickable Cards */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase text-[#7C5CFC] font-bold">
              Six Interactive Spheres (Click to Explore)
            </span>
            <span className="text-xs text-[#24202B]/60">
              Family | Education | Workplace | Media | Leadership | Community
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {contemporaryCards.map((card) => {
              const isActive = card.id === selectedCardId;
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#7C5CFC] text-white border-[#7C5CFC] shadow-md scale-102'
                      : 'bg-white text-[#24202B] border-[#E8E2F2] hover:border-[#C8B6FF]'
                  }`}
                >
                  <div>
                    <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-white' : 'text-[#7C5CFC]'}`} />
                    <h3 className="font-serif text-base font-bold leading-tight mb-1">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-current/20 flex items-center justify-between text-[10px] font-medium opacity-80">
                    <span>{isActive ? 'Selected' : 'Open'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Card In-Depth Display */}
        <div className="bg-white rounded-3xl border border-[#E8E2F2] p-8 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#7C5CFC] font-semibold tracking-wider block mb-1">
                  SPHERE IN FOCUS
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#24202B] mb-4">
                  {activeCard.title} in Contemporary Philippine Society
                </h3>
              </div>

              {/* Traditional Expectation vs Today's Lived Reality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FAF9FC] border border-[#E8E2F2]">
                  <span className="text-xs font-bold text-[#4C3575] uppercase tracking-wide block mb-2">
                    Traditional Expectations:
                  </span>
                  <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                    {activeCard.summary}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F2EDFF]/60 border border-[#C8B6FF]/50">
                  <span className="text-xs font-bold text-[#7C5CFC] uppercase tracking-wide block mb-2">
                    Evolving Modern Reality:
                  </span>
                  <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                    {activeCard.modernReality}
                  </p>
                </div>
              </div>

              {/* Legal & Policy Anchor */}
              <div className="p-5 rounded-2xl bg-[#FAF9FC] border border-[#E8E2F2] text-xs text-[#24202B]/80 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-[#7C5CFC] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#4C3575] block mb-0.5">
                    Legal & Research Reference:
                  </span>
                  <p className="leading-relaxed">
                    {activeCard.legalOrResearchNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#E8E2F2] shadow-xs bg-[#FAF9FC]">
                <img
                  src={CONTEMPORARY_IMAGE}
                  alt="Contemporary Filipinos in modern family and work roles"
                  className="w-full h-56 object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="p-4 bg-white border-t border-[#E8E2F2]">
                  <span className="text-[11px] font-mono text-[#7C5CFC] uppercase font-bold block mb-1">
                    Philippine Observation
                  </span>
                  <p className="text-xs text-[#24202B]/75 leading-relaxed">
                    The modern Philippine landscape balances cultural respect with aspirations for gender equity in homes, offices, lecture halls, and media productions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
