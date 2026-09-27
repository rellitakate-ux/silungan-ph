import React, { useState } from 'react';
import { ACADEMIC_REFERENCES } from '../data/initialData';
import { ReferenceEntry } from '../types';
import { BookOpen, Copy, Check, ExternalLink, Search } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Journal Articles',
    'Government Sources',
    'Credible Websites',
    'Multimedia',
  ];

  const handleCopyCitation = (citation: string, index: number) => {
    navigator.clipboard.writeText(citation);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredReferences = ACADEMIC_REFERENCES.filter((ref) => {
    const matchesCategory = activeCategory === 'All' || ref.category === activeCategory;
    const matchesSearch =
      searchFilter === '' ||
      ref.citation.toLowerCase().includes(searchFilter.toLowerCase()) ||
      ref.annotation.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="references" className="py-20 bg-[#FAF9FC] border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 11</span>
            <span aria-hidden="true">·</span>
            <span>Academic Bibliography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24202B] mb-3 text-balance">
            Academic References & Archival Sources
          </h2>
          <p className="text-base text-[#24202B]/80 leading-relaxed">
            All historical assertions, statutory citations, and empirical statistics throughout SILUNGAN PH are grounded in peer-reviewed scholarship, official Philippine legislative acts, and state statistical registries.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto gap-1.5 p-1 bg-white rounded-xl border border-[#E8E2F2] max-w-2xl no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#7C5CFC] text-white shadow-xs'
                      : 'text-[#4C3575]/70 hover:text-[#4C3575] hover:bg-[#F2EDFF]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative sm:w-64">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter citations by keyword..."
              className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-white border border-[#E8E2F2] focus:border-[#7C5CFC] focus:outline-hidden"
            />
            <Search className="w-3.5 h-3.5 text-[#24202B]/40 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Citations List */}
        <div className="bg-white rounded-3xl border border-[#E8E2F2] divide-y divide-[#E8E2F2] overflow-hidden shadow-xs">
          {filteredReferences.map((ref, idx) => (
            <div key={idx} className="p-6 sm:p-7 hover:bg-[#FAF9FC] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#7C5CFC]">
                  <span>CATEGORY: {ref.category.toUpperCase()}</span>
                </div>

                <button
                  onClick={() => handleCopyCitation(ref.citation, idx)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#24202B]/60 hover:text-[#4C3575] cursor-pointer"
                  title="Copy APA Citation"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy APA</span>
                    </>
                  )}
                </button>
              </div>

              {/* Citation Body */}
              <p className="font-serif text-sm sm:text-base text-[#24202B] leading-relaxed mb-3">
                {ref.citation}
              </p>

              {/* Annotation & Significance */}
              <p className="text-xs text-[#24202B]/75 leading-relaxed bg-[#F2EDFF]/50 p-3 rounded-xl border border-[#C8B6FF]/30">
                <span className="font-semibold text-[#4C3575]">Critical Annotation: </span>
                {ref.annotation}
              </p>
            </div>
          ))}

          {filteredReferences.length === 0 && (
            <div className="p-12 text-center text-xs text-[#24202B]/60">
              Walang nahanap na sanggunian na tumutugma sa iyong paghahanap.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
