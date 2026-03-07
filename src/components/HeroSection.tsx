import heroImage from "@/assets/hero-leader.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#121a73] overflow-hidden selection:bg-white/20">
      
      {/* Background Layer: Fully Integrated Color & Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={heroImage} 
          alt="AJ Academy Leadership" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay" 
        />
        {/* Deep blue vignettes to anchor the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121a73] via-transparent to-[#121a73]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121a73] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          
          {/* Left: Branding & Narrative */}
          <div className="max-w-2xl space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-white/40" />
                <span className="text-white/60 uppercase tracking-[0.6em] text-[10px] font-bold">
                  Established 2026
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl text-white font-light tracking-tight leading-none">
                Integrity in <br />
                <span className="font-bold italic opacity-90">Leadership.</span>
              </h2>
            </div>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-lg border-l border-white/10 pl-8">
              Founded by <span className="text-white font-medium">AJ</span>, 
              the academy offers a curriculum of distinction—integrating professional excellence with 
              the precision of <span className="text-white">internal clarity.</span>
            </p>

            <div className="flex items-center gap-8 pt-6">
              <button className="bg-white text-[#121a73] px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white/90 transition-all border border-transparent">
                The Prospectus
              </button>
              <button className="text-white/70 hover:text-white px-6 py-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all border border-white/10">
                Our Story
              </button>
            </div>
          </div>

          {/* Right: Massive Minimalist Title */}
          <div className="lg:text-right select-none lg:pb-4">
            <h1 className="font-bold text-[clamp(4rem,14vw,10rem)] leading-[0.85] tracking-tighter text-white">
              <span className="block opacity-20">AJ</span>
              <span className="block tracking-[-0.05em]">ACADEMY</span>
            </h1>
            <div className="hidden lg:flex justify-end mt-4">
              <div className="h-[1px] w-32 bg-white/20" />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 opacity-30 rotate-90 origin-left">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold">Scroll</span>
        <div className="w-16 h-[1px] bg-white" />
      </div>
    </section>
  );
};

export default HeroSection;