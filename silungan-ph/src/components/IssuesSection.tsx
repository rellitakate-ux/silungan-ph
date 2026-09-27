import React, { useState } from 'react';
import { HelpCircle, AlertTriangle, Scale, BookOpen, ShieldCheck, HeartCrack, Laptop, Users, Briefcase, Heart } from 'lucide-react';

export const IssuesSection: React.FC = () => {
  const [activeIssueId, setActiveIssueId] = useState<string>('stereotypes');

  const issuesList = [
    {
      id: 'stereotypes',
      title: 'Gender Stereotypes',
      subtitle: 'Rigid behavioral expectations',
      whatIsIt:
        'Stereotypes are generalized beliefs about how people should behave based on gender.',
      example:
        'Expecting men to always be strong, unemotional, and the sole breadwinners ("bawal umiyak"), or expecting women to naturally handle all caregiving and household responsibilities ("ilaw ng tahanan").',
      whyItMatters:
        'Stereotypes limit individual self-expression, prevent open emotional communication, and restrict people from pursuing roles aligned with their personal abilities rather than their gender.',
      relatedLaw:
        'DepEd Gender-Responsive Basic Education Policy (Order No. 32) & Magna Carta of Women promoting non-stereotyped curricula.',
    },
    {
      id: 'discrimination',
      title: 'Gender Discrimination',
      subtitle: 'Unfair treatment & barriers',
      whatIsIt:
        'Discrimination occurs when someone receives unfair treatment or restricted opportunities because of sex or gender.',
      example:
        'Overlooking qualified women for promotions due to assumptions regarding motherhood, or paying unequal wages for equivalent labor in informal or private sectors.',
      whyItMatters:
        'Discrimination denies individuals economic stability, career mobility, and fundamental human dignity while reinforcing systemic economic inequality.',
      relatedLaw:
        'The Magna Carta of Women (Republic Act No. 9710) strictly prohibits discrimination against women and promotes equal access to rights, resources, education, employment, and participation.',
    },
    {
      id: 'equal-opportunities',
      title: 'Equal Opportunities',
      subtitle: 'Universal access to rights',
      whatIsIt:
        'Gender should not prevent someone from pursuing education, employment, leadership, or participation in society. Equality involves ensuring people can access opportunities and exercise their rights without discrimination.',
      example:
        'Ensuring equal scholarship access in STEM, equitable hiring across corporate boards, and eliminating bias in sports and leadership appointments.',
      whyItMatters:
        'When opportunities are equal, entire communities thrive socially and economically by harnessing the talents and perspectives of all citizens.',
      relatedLaw:
        'Constitutional equal protection clause (Article II, Section 14) recognizing the role of women in nation-building and ensuring fundamental equality before the law.',
    },
    {
      id: 'media-representation',
      title: 'Representation in Media',
      subtitle: 'Shaping cultural perceptions',
      whatIsIt:
        'Media representation matters because repeated portrayals can influence society’s ideas about masculinity, femininity, beauty, careers, relationships, and leadership.',
      example:
        'Teleseryes reinforcing stereotypes of passive suffering female martyrs ("matiising biktima") or advertising framing household cleaning products exclusively for mothers.',
      whyItMatters:
        'Consistent, positive, and diverse media narratives dismantle harmful tropes and inspire young Filipinos of all backgrounds to dream without limitation.',
      relatedLaw:
        'The Magna Carta of Women (RA 9710) specifically calls for non-discriminatory and non-derogatory portrayals of women in media and film.',
    },
    {
      id: 'gbv-harassment',
      title: 'Gender-Based Violence & Harassment',
      subtitle: 'Safety in physical and digital spaces',
      whatIsIt:
        'Gender issues can involve sexual harassment, domestic violence, online harassment, and other forms of gender-based violence.',
      example:
        'Street catcalling along sidewalks, non-consensual sharing of intimate images online, workplace harassment by superiors, and physical/emotional partner abuse.',
      whyItMatters:
        'Violence and harassment violate bodily integrity, inflict psychological trauma, and limit people’s freedom of movement and digital participation.',
      relatedLaw:
        'The Safe Spaces Act (Republic Act No. 11313 / Bawal Bastos Law) and Anti-Violence Against Women and Their Children Act (RA 9262).',
    },
    {
      id: 'lgbtq-inclusion',
      title: 'LGBTQ+ Discrimination & Inclusion',
      subtitle: 'SOGIESC rights & protection',
      whatIsIt:
        'Inequalities and stigma experienced by lesbian, gay, bisexual, transgender, and queer Filipinos in schools, employment, healthcare, and public institutions.',
      example:
        'Strict binary uniform and haircut policies denying transgender students entry to university graduation ceremonies, or lack of national legal protection against workplace dismissal.',
      whyItMatters:
        'Every Filipino deserves freedom from harassment and the right to authentic personal identity without fear of systemic exclusion.',
      relatedLaw:
        'Local Anti-Discrimination Ordinances (ADOs in Manila, QC, Cebu) and the proposed national SOGIE Equality Bill.',
    },
    {
      id: 'unpaid-care-work',
      title: 'Unpaid Care Work',
      subtitle: 'The invisible domestic economy',
      whatIsIt:
        'The disproportionate amount of cooking, cleaning, child-rearing, and eldercare performed predominantly by women without pay or formal economic recognition.',
      example:
        'Filipinas spending an average of 4.5 hours daily on household care compared to men’s 1.5 hours, contributing to female time-poverty.',
      whyItMatters:
        'Unpaid care subsidizes the entire economy; without equitable sharing at home, women face severe obstacles in pursuing full-time careers or higher studies.',
      relatedLaw:
        'PIDS Research on Valuing Care Work & Magna Carta of Women provisions on social protection and community day care centers.',
    },
    {
      id: 'masculinity-expectations',
      title: 'Expectations Surrounding Masculinity',
      subtitle: 'Mental health & emotional expression',
      whatIsIt:
        'Cultural pressures dictating that Filipino men must never show emotional vulnerability, sadness, or pain, equating manhood with stoicism and aggression.',
      example:
        'Young men avoiding mental health therapy or emotional open dialogue with friends due to fear of being labeled weak or effeminate.',
      whyItMatters:
        'Toxic masculinity isolates men emotionally, contributes to elevated male suicide rates, and perpetuates generational cycles of domestic tension.',
      relatedLaw:
        'Mental Health Act (Republic Act No. 11036) and DOH psychosocial wellness initiatives promoting inclusive, stigma-free counseling.',
    },
  ];

  const currentIssue = issuesList.find((i) => i.id === activeIssueId) || issuesList[0];

  return (
    <section id="issues" className="py-20 bg-white border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 04</span>
            <span aria-hidden="true">·</span>
            <span>Critical Realities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24202B] mb-4 text-balance">
            Gender Issues & Realities
          </h2>

          {/* Opening Paragraph */}
          <div className="p-6 rounded-3xl bg-[#FAF9FC] border border-[#E8E2F2] shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFC] font-bold block mb-2">
              Opening Overview
            </span>
            <p className="text-base sm:text-lg text-[#24202B]/90 leading-relaxed font-medium">
              Although opportunities have expanded, gender-related inequalities and discrimination continue to affect people's experiences in Philippine society.
            </p>
          </div>
        </div>

        {/* Issue Selector Tabs / Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-10">
          {issuesList.map((issue) => {
            const isSelected = issue.id === activeIssueId;
            return (
              <button
                key={issue.id}
                onClick={() => setActiveIssueId(issue.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#4C3575] text-white border-[#4C3575] shadow-xs scale-102'
                    : 'bg-[#FAF9FC] text-[#24202B] border-[#E8E2F2] hover:border-[#C8B6FF]'
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono uppercase block mb-1 font-semibold ${
                      isSelected ? 'text-[#C8B6FF]' : 'text-[#7C5CFC]'
                    }`}
                  >
                    ISSUE
                  </span>
                  <h3 className="font-serif text-xs sm:text-sm font-bold leading-tight truncate">
                    {issue.title}
                  </h3>
                </div>
                <span
                  className={`text-[10px] block mt-2 truncate ${
                    isSelected ? 'text-white/80' : 'text-[#24202B]/60'
                  }`}
                >
                  {issue.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Structured 4-Step Framework Card: What is it? → Example → Why it matters → Related Philippine law */}
        <div className="bg-[#FAF9FC] rounded-3xl border border-[#E8E2F2] p-8 lg:p-12 shadow-xs">
          <div className="mb-6 pb-4 border-b border-[#E8E2F2]">
            <span className="text-xs font-mono uppercase text-[#7C5CFC] font-semibold block mb-1">
              STRUCTURAL INQUIRY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24202B]">
              {currentIssue.title}
            </h3>
            <p className="text-xs text-[#24202B]/60 mt-1">
              {currentIssue.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1: What is it? */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2F2] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#4C3575] uppercase tracking-wider mb-2">
                  <HelpCircle className="w-4 h-4 text-[#7C5CFC]" />
                  <span>1. What is it?</span>
                </div>
                <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                  {currentIssue.whatIsIt}
                </p>
              </div>
            </div>

            {/* Step 2: Example */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2F2] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#4C3575] uppercase tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>2. Concrete Example:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed italic font-serif">
                  “{currentIssue.example}”
                </p>
              </div>
            </div>

            {/* Step 3: Why it matters */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2F2] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#4C3575] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4 text-[#7C5CFC]" />
                  <span>3. Why does it matter?</span>
                </div>
                <p className="text-xs sm:text-sm text-[#24202B]/85 leading-relaxed">
                  {currentIssue.whyItMatters}
                </p>
              </div>
            </div>

            {/* Step 4: Related Philippine Law / Resource */}
            <div className="bg-[#F2EDFF]/60 p-6 rounded-2xl border border-[#C8B6FF]/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#7C5CFC] uppercase tracking-wider mb-2">
                  <BookOpen className="w-4 h-4 text-[#7C5CFC]" />
                  <span>4. Related Philippine Law / Resource:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4C3575] leading-relaxed font-medium">
                  {currentIssue.relatedLaw}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-[#C8B6FF]/40 text-[11px] text-[#4C3575]/80 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>Statutory Philippine Protection Framework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
