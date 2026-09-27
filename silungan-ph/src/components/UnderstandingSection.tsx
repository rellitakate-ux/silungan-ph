import React, { useState } from 'react';
import { BookOpen, ArrowRight, CheckCircle2, HelpCircle, Scale, Users, School, Tv, HeartHandshake, Sparkles, Building2 } from 'lucide-react';

export const UnderstandingSection: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<number>(0);

  const socializationFlow = [
    {
      step: '01',
      title: 'Family (Tahanan)',
      subtitle: 'Earliest social foundation',
      icon: Users,
      description: 'Children first observe gender expectations at home through modeled behavior, toy selections, chore assignments, and parental language.',
      phExample: 'Chores traditionally divided: girls wash dishes or care for siblings, while boys are assigned physical yard work.',
    },
    {
      step: '02',
      title: 'School (Paaralan)',
      subtitle: 'Formal institutional reinforcement',
      icon: School,
      description: 'Educational environments shape behavior through gendered dress codes, classroom line rules, teacher expectations, and track streaming.',
      phExample: 'Tracking students toward traditional gender fields like steering girls to care courses and boys to tech-vocational tracks.',
    },
    {
      step: '03',
      title: 'Media & Religion (Midya at Relihiyon)',
      subtitle: 'Cultural narratives & moral ideals',
      icon: Tv,
      description: 'Television shows, advertisements, social media, and religious teachings transmit pervasive models of ideal femininity, masculinity, and domestic devotion.',
      phExample: 'Media portraying mothers as self-sacrificing martyrs ("matiisin") and advertisements framing household detergents solely for mothers.',
    },
    {
      step: '04',
      title: 'Community (Komunidad)',
      subtitle: 'Everyday peer & civic reinforcement',
      icon: Building2,
      description: 'Neighborhood customs, peer groups, workplace culture, and barangay institutions uphold or challenge acceptable gender behavior.',
      phExample: 'Barangay social norms on leadership roles and expectations surrounding men as primary public decision-makers.',
    },
    {
      step: '05',
      title: 'Gender Expectations',
      subtitle: 'Internalized roles & behaviors',
      icon: Sparkles,
      description: 'The cumulative result: internalized beliefs regarding who should provide, nurture, lead, speak out, or conform in Philippine society.',
      phExample: 'Expectations that influence career paths, romantic partnerships, family finances, and individual self-expression.',
    },
  ];

  return (
    <section id="explore" className="py-20 bg-[#FAF9FC] border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 01</span>
            <span aria-hidden="true">·</span>
            <span>Theoretical Foundations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24202B] mb-4 text-balance">
            Understanding Gender Roles
          </h2>

          {/* Opening Paragraph */}
          <div className="p-6 rounded-3xl bg-white border border-[#C8B6FF]/40 shadow-xs mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFC] font-bold block mb-2">
              Opening Overview
            </span>
            <p className="text-base sm:text-lg text-[#24202B]/90 leading-relaxed font-medium">
              Gender roles are social expectations about how people are expected to behave, dress, work, and take responsibilities based on gender. These expectations are learned through family, school, religion, media, communities, and culture.
            </p>
          </div>
        </div>

        {/* Section 1: What Are Gender Roles? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2F2] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#4C3575] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4 text-[#7C5CFC]" />
                <span>Core Definition</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#24202B] mb-3">
                What Are Gender Roles?
              </h3>
              <p className="text-sm sm:text-base text-[#24202B]/85 leading-relaxed mb-4">
                Gender roles can influence who is expected to earn money, care for children, do household work, lead organizations, or choose certain careers. These expectations can change across cultures and over time.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F2EDFF]/60 border border-[#C8B6FF]/40 text-xs text-[#4C3575]">
              <span className="font-semibold block mb-1">Key Insight:</span>
              Gender roles are not universal biological instincts—they are taught, reinforced, and subject to historical re-evaluation.
            </div>
          </div>

          {/* Section 2: Why Study Gender Roles? */}
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2F2] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#7C5CFC] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#7C5CFC]" />
                <span>Significance & Legal Context</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#24202B] mb-3">
                Why Study Gender Roles?
              </h3>
              <p className="text-sm sm:text-base text-[#24202B]/85 leading-relaxed mb-4">
                Studying gender roles helps us understand why people may experience different expectations and opportunities. It can help identify stereotypes and discrimination and encourage fairer treatment in education, employment, family life, leadership, and other parts of society.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF9FC] border border-[#E8E2F2] text-xs text-[#24202B]/80">
              <span className="font-semibold text-[#4C3575] block mb-1">Philippine Legal Recognition:</span>
              Philippine law itself recognizes the importance of addressing unequal structures and practices that perpetuate gender discrimination (e.g., Magna Carta of Women RA 9710, Safe Spaces Act RA 11313).
            </div>
          </div>
        </div>

        {/* Visual 1: Simple Sex vs. Gender Roles Comparison Graphic */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#7C5CFC] font-semibold block mb-1">
              Visual Comparison
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202B]">
              Biological Sex vs. Gender Roles
            </h3>
            <p className="text-xs sm:text-sm text-[#24202B]/75 mt-2">
              Understanding the critical distinction between biological characteristics and cultural constructs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Biological Sex Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#E8E2F2] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#4C3575] tracking-wider uppercase">
                  DIMENSION A
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#FAF9FC] text-[#24202B]/70 font-semibold border border-[#E8E2F2]">
                  Physical & Physiological
                </span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#24202B] mb-2">
                Biological Sex
              </h4>
              <p className="text-xs sm:text-sm text-[#24202B]/80 leading-relaxed mb-5">
                Biological sex generally refers to physical and biological characteristics (chromosomes, hormonal profiles, and anatomical features present at birth).
              </p>
              <ul className="space-y-2 text-xs text-[#24202B]/75 border-t border-[#E8E2F2] pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0 mt-0.5" />
                  <span>Determined by genetic and biological factors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0 mt-0.5" />
                  <span>Generally constant across different countries and eras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0 mt-0.5" />
                  <span>Examples: Male, female, and intersex biological variations</span>
                </li>
              </ul>
            </div>

            {/* Gender Roles Card */}
            <div className="bg-gradient-to-br from-white to-[#F2EDFF] p-7 rounded-3xl border border-[#C8B6FF] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#7C5CFC] tracking-wider uppercase">
                  DIMENSION B
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#F2EDFF] text-[#4C3575] font-semibold border border-[#C8B6FF]/40">
                  Social & Cultural
                </span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#24202B] mb-2">
                Gender Roles
              </h4>
              <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed mb-5">
                Gender roles are expectations created and reinforced by society. Because gender roles are social and cultural, they are not the same everywhere and can change over generations.
              </p>
              <ul className="space-y-2 text-xs text-[#24202B]/75 border-t border-[#C8B6FF]/40 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0 mt-0.5" />
                  <span>Learned through families, schools, media, and culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0 mt-0.5" />
                  <span>Dynamic, flexible, and variable across time and geography</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0 mt-0.5" />
                  <span>Examples: Caregiving, financial breadwinning, leadership styles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual 2: Diagram showing Family → School → Media → Community → Gender Expectations */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2F2] shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#7C5CFC] font-semibold block mb-1">
              Socialization Process Diagram
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202B]">
              How Gender Roles Are Learned
            </h3>
            <p className="text-xs sm:text-sm text-[#24202B]/75 mt-2">
              Trace how expectations travel from foundational family environments through schools, media, and communities to shape societal norms.
            </p>
          </div>

          {/* Interactive Flow Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {socializationFlow.map((item, idx) => {
              const isSelected = selectedAgent === idx;
              const Icon = item.icon;
              return (
                <button
                  key={item.step}
                  onClick={() => setSelectedAgent(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#4C3575] text-white border-[#4C3575] shadow-sm'
                      : 'bg-[#FAF9FC] text-[#24202B] border-[#E8E2F2] hover:border-[#C8B6FF]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#C8B6FF]' : 'text-[#7C5CFC]'}`}>
                        STEP {item.step}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#C8B6FF]' : 'text-[#7C5CFC]'}`} />
                    </div>
                    <span className="font-serif text-sm font-bold block mb-1 leading-snug">
                      {item.title}
                    </span>
                    <span className={`text-[11px] block ${isSelected ? 'text-white/80' : 'text-[#24202B]/60'}`}>
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="mt-4 pt-2 border-t border-current/20 flex items-center justify-between text-[10px] font-medium opacity-80">
                    <span>{isSelected ? 'Viewing' : 'Inspect'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9FC] border border-[#E8E2F2]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E8E2F2] mb-4">
              <div>
                <span className="text-xs font-mono text-[#7C5CFC] font-semibold uppercase">
                  STAGE {socializationFlow[selectedAgent].step} IN DETAIL
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#24202B]">
                  {socializationFlow[selectedAgent].title}
                </h4>
              </div>
              <span className="text-xs text-[#4C3575] font-medium bg-[#F2EDFF] px-3 py-1.5 rounded-lg border border-[#C8B6FF]/40 self-start md:self-auto">
                {socializationFlow[selectedAgent].subtitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7">
                <span className="text-xs font-bold text-[#4C3575] uppercase tracking-wide block mb-1">
                  How It Functions:
                </span>
                <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                  {socializationFlow[selectedAgent].description}
                </p>
              </div>

              <div className="md:col-span-5 p-4 rounded-xl bg-white border border-[#E8E2F2]">
                <span className="text-xs font-bold text-[#7C5CFC] uppercase tracking-wide block mb-1">
                  Philippine Context Example:
                </span>
                <p className="text-xs text-[#24202B]/80 leading-relaxed italic font-serif">
                  “{socializationFlow[selectedAgent].phExample}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
