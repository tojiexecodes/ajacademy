import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-[#121a73] overflow-hidden text-white">
      
      {/* Background: Minimal subtle gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1a26a3_0%,_transparent_40%)] opacity-40" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-10 md:mb-16 opacity-80">
            <div className="h-[1px] w-8 md:w-12 bg-white/40" />
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">
              Our Philosophy
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Main Narrative */}
            <div className="lg:col-span-7">
              {/* Adjusted text size for mobile (text-2xl) vs desktop (md:text-5xl) */}
              <h2 className="text-2xl md:text-5xl font-light leading-tight tracking-tight mb-8 md:mb-12">
                AJ Academy cultivates leadership as an <span className="font-medium text-white underline underline-offset-8 decoration-white/20">intuitive process</span>—reaching beyond strategy to the core of human purpose.
              </h2>
              
              <div className="h-[1px] w-20 md:w-24 bg-white/20 mb-8 md:mb-12" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-white/70">
                <p className="text-base md:text-lg leading-relaxed font-light">
                  We believe in mastering the <span className="text-white font-normal">internal landscape</span> first. True leadership is the external manifestation of internal clarity and self-mastery.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-light">
                  Our mission is to empower leaders to operate from a state of precision, where every action is a natural result of <span className="italic text-white">total focus</span>.
                </p>
              </div>
            </div>

            {/* Aesthetic Visual Side - Removed border-l on mobile, added border-t instead */}
            <div className="lg:col-span-4 lg:col-start-9 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-4 lg:pl-8">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-2">
                    Established Standard
                  </p>
                  <p className="text-xl md:text-2xl font-light tracking-wide italic">The AJ Excellence</p>
                </div>
                
                <div className="pt-4 md:pt-8">
                  {/* Made the quote box more compact on mobile */}
                  <div className="inline-block p-5 md:p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <p className="text-xs md:text-sm font-light leading-relaxed italic opacity-90">
                      "Precision in thought. <br className="hidden md:block" /> Impact in action."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;