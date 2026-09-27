import React, { useState } from 'react';
import { CRISIS_RESOURCES } from '../data/initialData';
import { PhoneCall, ShieldAlert, HeartHandshake, ExternalLink, AlertTriangle, Clock } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('All');

  const allTags = ['All', 'Emergency Intervention', 'Mental Health', 'SOGIESC Discrimination', 'Human Trafficking'];

  const filteredResources =
    filterTag === 'All'
      ? CRISIS_RESOURCES
      : CRISIS_RESOURCES.filter((r) => r.tags.some((t) => t.includes(filterTag)));

  return (
    <section id="support" className="py-20 bg-[#FAF9FC] border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 tracking-wider uppercase mb-3">
            <span>Chapter 09</span>
            <span aria-hidden="true">·</span>
            <span>Emergency & Psycho-Social Assistance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24202B] mb-2 text-balance">
            You Are Not Alone
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#4C3575] font-medium mb-3">
            “May kanlungan at tulong para sa bawat biktima ng karahasan at pang-aabuso.”
          </p>
          <p className="text-sm text-[#24202B]/80 leading-relaxed">
            Verified, statutory Philippine hotlines and counseling institutions for individuals facing gender-based violence, domestic abuse, sexual harassment, or severe mental distress.
          </p>
        </div>

        {/* Mandatory Educational Disclaimer Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold uppercase tracking-wider block">
              Mahalagang Paalala / Educational Platform Disclaimer
            </span>
            <p className="leading-relaxed">
              Ang <span className="font-semibold">SILUNGAN PH</span> ay isang proyektong pang-akademiko at pananaliksik na nakalaan para sa edukasyon at kamalayan ng publiko. Ang platapormang ito ay <span className="font-bold underline">HINDI</span> kapalit ng propesyonal na serbisyong medikal, legal, sikolohikal, o pampulisya. Kung ikaw o ang isang kakilala ay nasa agarang panganib o banta sa buhay, mangyaring makipag-ugnayan agad sa 911 o sa pinakamalapit na himpilan ng pulisya at barangay VAW desk.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center overflow-x-auto gap-2 p-1 bg-white rounded-xl border border-[#E8E2F2] max-w-lg mb-8 no-scrollbar">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filterTag === tag
                  ? 'bg-[#7C5CFC] text-white shadow-xs'
                  : 'text-[#4C3575]/70 hover:text-[#4C3575]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E2F2] shadow-xs hover:border-[#C8B6FF] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Zero-Pill Tags */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#7C5CFC] font-semibold uppercase tracking-wider mb-2">
                  <span>{res.tags[0]}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#24202B] mb-2 leading-snug">
                  {res.organization}
                </h3>

                <p className="text-xs text-[#24202B]/75 leading-relaxed mb-6">
                  {res.purpose}
                </p>

                {/* Primary Hotline Box */}
                <div className="p-4 rounded-2xl bg-[#F2EDFF]/60 border border-[#C8B6FF]/40 mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase text-[#7C5CFC] font-bold">
                      Opisyal na Hotline
                    </span>
                    <span className="text-[10px] text-[#4C3575] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{res.availability}</span>
                    </span>
                  </div>

                  <div className="font-serif text-lg font-bold text-[#4C3575] flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#7C5CFC]" />
                    <span className="tabular-nums">{res.hotline}</span>
                  </div>

                  {res.secondaryContact && (
                    <div className="text-xs text-[#24202B]/70 tabular-nums pt-1 border-t border-[#C8B6FF]/30">
                      Mobile / Alt: {res.secondaryContact}
                    </div>
                  )}
                </div>
              </div>

              {/* Official Source & Verification Link */}
              <div className="pt-4 border-t border-[#E8E2F2] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#24202B]/60 truncate mr-2">
                  Verified by: {res.officialSource}
                </span>

                {res.link && (
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#7C5CFC] font-semibold hover:text-[#4C3575] shrink-0"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
