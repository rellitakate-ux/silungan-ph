import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface ConclusionSectionProps {
  onExploreReferences: () => void;
}

export const ConclusionSection: React.FC<ConclusionSectionProps> = ({ onExploreReferences }) => {
  const takeaways = [
    {
      num: '01',
      title: 'Gender Roles Change Over Time',
      desc: 'Gender roles are not fixed. Philippine history shows that expectations and responsibilities associated with gender have changed as society, culture, and institutions have changed.',
    },
    {
      num: '02',
      title: 'Progress Has Been Made',
      desc: 'Today, women have broader opportunities in education, employment, leadership, and public life. Philippine laws such as the Magna Carta of Women also establish protections against discrimination and promote substantive equality.',
    },
    {
      num: '03',
      title: 'Challenges Still Remain',
      desc: 'Gender stereotypes, discrimination, harassment, unequal expectations, and other barriers continue to affect people. Philippine gender policy therefore addresses not only individual discrimination but also structures and practices that can perpetuate inequality.',
    },
    {
      num: '04',
      title: 'Everyone Has a Role',
      desc: 'Creating a more gender-equal society involves questioning harmful stereotypes, respecting different experiences, promoting equal opportunities, and treating people with dignity.',
    },
  ];

  return (
    <section id="conclusion" className="py-20 bg-white border-b border-[#E8E2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7C5CFC] tracking-wider uppercase mb-3">
            <span>Chapter 10</span>
            <span aria-hidden="true">·</span>
            <span>Conclusion & Key Takeaways</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24202B] mb-4 text-balance">
            Key Insights & Synthesis
          </h2>
          <p className="text-base text-[#24202B]/80 leading-relaxed">
            Our critical exploration of gender roles in the Philippine context highlights how cultural expectations evolve across generations and where collective responsibility begins.
          </p>
        </div>

        {/* 4 Key Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {takeaways.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-3xl bg-[#FAF9FC] border border-[#E8E2F2] hover:border-[#C8B6FF] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#7C5CFC] block mb-3">
                  TAKEAWAY {item.num}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#24202B] mb-3">
                  {item.num} — {item.title}
                </h3>
                <p className="text-sm text-[#24202B]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Group's Overall Insight Panel */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#4C3575] via-[#5A3F8B] to-[#7C5CFC] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-md">
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8B6FF]">
              <Sparkles className="w-4 h-4 text-[#C8B6FF]" />
              <span>Synthesis & Collective Reflection</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Our Group's Overall Insight
            </h3>

            <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Through this project, our group realized that gender roles in the Philippines are deeply connected to our history, culture, and everyday experiences. While Filipino society has made significant progress toward gender equality, some traditional expectations and stereotypes continue to influence how people are treated and what is expected of them.
              </p>
              <p>
                We believe that traditions should not be used to limit a person's opportunities simply because of their gender. Understanding where these expectations came from allows us to question harmful stereotypes while respecting the positive parts of Filipino culture.
              </p>
              <p className="font-medium text-white">
                Ultimately, gender equality is not about making everyone the same. It is about creating a society where people have the freedom, respect, rights, and opportunities to make their own choices without being unfairly limited by gender.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/20">
              <button
                onClick={onExploreReferences}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#4C3575] bg-white hover:bg-[#F2EDFF] rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>View Academic References</span>
                <ArrowUpRight className="w-4 h-4 text-[#7C5CFC]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
