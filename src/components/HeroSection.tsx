import React from 'react';
import heroImage from "@/assets/hero-leader.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-[#121a73] overflow-hidden selection:bg-white/20">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={heroImage} 
          alt="AJ Academy Leadership" 
          className="w-full h-full object-cover object-center transform translate-y-12 scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121a73] via-[#121a73]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121a73]/60 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-16">
          
          {/* Left: Branding & Narrative */}
          <div className="max-w-2xl order-2 lg:order-1 flex flex-col">
            
            {/* Heading moved to the top of this flex container */}
            <h2 className="text-4xl md:text-7xl text-white font-light tracking-tight leading-tight md:leading-none mb-6 md:mb-8">
              Integrity in <br />
              <span className="font-bold italic text-orange-500">Leadership.</span>
            </h2>

            <div className="space-y-8 md:space-y-10">
              {/* Branding shifted below the main title */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-6 md:w-8 bg-white/40" />
                  <span className="text-white/60 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] font-bold">
                    Established 2026
                  </span>
                </div>
              </div>

              <p className="text-white/90 text-base md:text-xl leading-relaxed font-light max-w-lg border-l border-white/20 pl-6 md:pl-8">
                Founded by <span className="text-white font-medium">AJ</span>, 
                the academy offers a curriculum of distinction—integrating professional excellence with 
                the precision of <span className="text-orange-500 font-medium">internal clarity.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
                <button className="bg-white text-[#121a73] px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white/90 transition-all text-center">
                  The Prospectus
                </button>
                <button className="text-orange-500 hover:text-orange-400 px-6 py-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all border border-orange-500/30 hover:border-orange-500/60 text-center">
                  Our Story
                </button>
              </div>
            </div>
          </div>

          {/* Right: Massive Minimalist Title */}
          <div className="order-1 lg:order-2 lg:text-right select-none">
            <h1 className="font-bold text-[clamp(3.5rem,15vw,10rem)] leading-[0.85] tracking-tighter text-white">
              <span className="block opacity-60 lg:opacity-60">AJ</span>
              <span className="block tracking-[-0.05em]">ACADEMY</span>
            </h1>
            <div className="hidden lg:flex justify-end mt-4">
              <div className="h-[1px] w-32 bg-white/20" />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-12 left-6 lg:left-12 items-center gap-4 opacity-40 rotate-90 origin-left">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold">Scroll</span>
        <div className="w-16 h-[1px] bg-white" />
      </div>
    </section>
  );
};

export default HeroSection;