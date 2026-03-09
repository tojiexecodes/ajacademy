import React from 'react';

const quotes = [
  {
    quote: "We have the technology, resources, and capability right now to address every issue on the planet. The only thing missing is inclusive consciousness.",
    venue: "United Nations",
  },
  {
    quote: "Whatever kind of business you are into, ultimately, there is only one business: Human Wellbeing.",
    venue: "World Economic Forum",
  },
  {
    quote: "Leadership means partnership, cooperation, mentoring, and support. It does not mean dominance.",
    venue: "Wharton University",
  },
  {
    quote: "Whether you are running a business, an industry, or a nation – what is needed are insight, integrity, and inspiration.",
    venue: "Young Presidents Organization",
  },
];

const LeadershipQuotesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#121a73] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header: Minimal & Bold */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-white/30" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/50 font-bold">
              Global Perspectives
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-light tracking-tight leading-tight">
            Leadership <span className="font-bold italic opacity-90">Reimagined</span>
          </h2>
        </div>

        {/* Quotes Grid: Clean & Geometric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-20 max-w-7xl">
          {quotes.map((item, idx) => (
            <div key={idx} className="relative flex flex-col justify-between border-l border-white/10 pl-8 md:pl-10 py-2">
              
              {/* Decorative Numbering: Adjusted position for mobile safety */}
              <span className="absolute -left-3 md:-left-4 top-0 text-[9px] md:text-[10px] font-bold text-white/20 tracking-tighter">
                0{idx + 1}
              </span>

              <div className="space-y-6">
                <blockquote className="text-lg md:text-2xl font-light leading-snug tracking-tight text-white/90 italic md:not-italic">
                  "{item.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-4 bg-white/40" />
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-white/50">
                    AJ at {item.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Brand Watermark: Scaled heavily for mobile */}
        <div className="mt-20 md:mt-32 flex justify-end">
          <p className="text-[40px] sm:text-[80px] md:text-[120px] font-bold text-white/[0.03] leading-none select-none pointer-events-none md:translate-y-12 uppercase tracking-tighter">
            AJ Standard
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipQuotesSection;