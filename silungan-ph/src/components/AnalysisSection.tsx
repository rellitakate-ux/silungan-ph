import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertCircle, Sparkles, Scale, Users } from 'lucide-react';
import { RESEARCH_TEAM } from '../data/initialData';

export const AnalysisSection: React.FC = () => {
  const comparisonData = [
    {
      area: 'Family',
      then: 'More defined gender responsibilities',
      today: 'Roles can be more shared',
      notes: 'From strict "haligi" and "ilaw" divisions toward collaborative domestic care and dual breadwinning.',
    },
    {
      area: 'Education',
      then: 'Opportunities varied by era and gender',
      today: 'Wider access across genders',
      notes: 'From colonial convent beaterios to high female tertiary completion and open academic fields.',
    },
    {
      area: 'Work',
      then: 'More gender-defined occupations',
      today: 'Greater career diversity',
      notes: 'Filipinas leading in corporate management, civil service, healthcare, BPO, and entrepreneurship.',
    },
    {
      area: 'Leadership',
      then: 'Changed significantly across historical periods',
      today: 'Broader participation',
      notes: 'From pre-colonial Babaylan respect to colonial exclusion, now advancing toward governance parity.',
    },
    {
      area: 'Media',
      then: 'Traditional gender ideals were common',
      today: 'Traditional and diverse portrayals coexist',
      notes: 'From melodramatic suffering martyrs to nuanced independent cinema and diverse digital voices.',
    },
  ];

  return (
    <section id="analysis" className="py-20 bg-[#FAF9FC] border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 05</span>
            <span aria-hidden="true">·</span>
            <span>Comparative Analysis & Reflection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24202B] mb-4 text-balance">
            Analysis & Reflection
          </h2>

          {/* Opening Paragraph */}
          <div className="p-6 rounded-3xl bg-white border border-[#E8E2F2] shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFC] font-bold block mb-2">
              Opening Overview
            </span>
            <p className="text-base sm:text-lg text-[#24202B]/90 leading-relaxed font-medium">
              Philippine gender roles have changed considerably, but historical and cultural expectations continue to influence everyday life.
            </p>
          </div>
        </div>

        {/* Then vs. Now Comparative Table */}
        <div className="bg-white rounded-3xl border border-[#E8E2F2] overflow-hidden shadow-xs mb-14">
          <div className="p-6 sm:p-8 border-b border-[#E8E2F2] flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-[#7C5CFC] font-bold block mb-1">
                HISTORICAL COMPARISON
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#24202B]">
                Then vs. Now
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#24202B]/60 font-medium">
              <ArrowLeftRight className="w-4 h-4 text-[#7C5CFC]" />
              <span className="hidden sm:inline">Five Key Social Spheres</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#4C3575] text-white text-xs uppercase tracking-wider font-mono">
                  <th className="p-4 sm:p-5 font-semibold w-1/4">Area</th>
                  <th className="p-4 sm:p-5 font-semibold w-3/8 bg-[#5A3F8B]">Then (Historical)</th>
                  <th className="p-4 sm:p-5 font-semibold w-3/8 bg-[#7C5CFC]">Today (Contemporary)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2F2] text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={row.area} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF9FC]'}>
                    <td className="p-4 sm:p-5 font-bold text-[#4C3575] align-top bg-[#F2EDFF]/20">
                      {row.area}
                    </td>
                    <td className="p-4 sm:p-5 text-[#24202B]/80 align-top leading-relaxed">
                      {row.then}
                    </td>
                    <td className="p-4 sm:p-5 text-[#24202B] font-semibold align-top leading-relaxed bg-[#F2EDFF]/30 border-l border-[#C8B6FF]/30">
                      {row.today}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#FAF9FC] border-t border-[#E8E2F2] text-xs text-[#24202B]/60 flex items-center justify-between">
            <span>Historically, gender expectations were strongly shaped by local traditions and later by colonial institutions.</span>
            <span className="font-semibold text-[#7C5CFC]">SILUNGAN PH Analysis</span>
          </div>
        </div>

        {/* What Has Changed? vs. What Challenges Continue? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* What Has Changed? */}
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2F2] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Progress & Breakthroughs</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#24202B] mb-3">
                What Has Changed?
              </h3>
              <p className="text-sm sm:text-base text-[#24202B]/85 leading-relaxed mb-4">
                Greater access to education, employment, leadership, legal protections, and public participation has challenged many traditional gender expectations.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
              Legal milestones (RA 9710 Magna Carta of Women, RA 11313 Safe Spaces Act) and rising educational completion have widened the scope of choice for Filipino women and men.
            </div>
          </div>

          {/* What Challenges Continue? */}
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2F2] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Persistent Structural Hurdles</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#24202B] mb-3">
                What Challenges Continue?
              </h3>
              <p className="text-sm sm:text-base text-[#24202B]/85 leading-relaxed mb-4">
                Stereotypes, discrimination, harassment, unequal domestic expectations, and restrictive ideas about masculinity and femininity can still affect people's choices and experiences.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 text-xs text-rose-900 leading-relaxed">
              Unpaid care burdens, workplace biases, online harassment, and stalled national protections for SOGIESC equality show that formal law must be matched by cultural transformation.
            </div>
          </div>
        </div>

        {/* Group Reflection: Full Narrative Box */}
        <div className="bg-[#4C3575] text-white p-8 sm:p-12 lg:p-14 rounded-3xl shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B6FF]">
              <Sparkles className="w-4 h-4 text-[#C8B6FF]" />
              <span>RESEARCH GROUP CRITICAL REFLECTION</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Group Reflection: Culture, Choice, and Equality
            </h3>

            <blockquote className="font-serif italic text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed border-l-2 border-[#C8B6FF] pl-4 sm:pl-6 py-2">
              “Gender roles in the Philippines are not fixed. They have changed throughout history and continue to change today. Our group believes understanding their origins is important because expectations that seem ‘normal’ may actually come from culture, history, and social institutions. Greater equality does not require people to abandon Filipino culture; rather, it means allowing individuals to pursue responsibilities, careers, relationships, and identities without being unfairly limited by gender.”
            </blockquote>

            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-between text-xs text-[#C8B6FF] gap-3">
              <span>Authored by: Cabacang, Comonical, De Dios, Laudiana, Rellita, & Villanueva</span>
              <span className="font-mono">SILUNGAN PH Research Cohort</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
