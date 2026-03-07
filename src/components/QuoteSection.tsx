const QuoteSection = () => {
  return (
    <section className="relative py-32 lg:py-48 bg-[#121a73] overflow-hidden border-y border-white/10">
      
      {/* Structural Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center">
        <span className="font-bold text-[25vw] text-white/[0.02] leading-none tracking-tighter uppercase">
          Leadership
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Marker */}
          <div className="flex items-center gap-4 mb-16 justify-center lg:justify-start">
            <span className="text-[10px] font-bold tracking-[0.6em] text-white/40 uppercase">
              Core Philosophy
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>

          <blockquote className="text-center lg:text-left space-y-12">
            <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.2] tracking-tight">
              As a leader, your every thought, emotion, and action <span className="italic font-normal opacity-80 underline underline-offset-[12px] decoration-white/20">impacts many lives</span>. It is extremely important to work on how you are within yourself.
            </p>
            
            <footer className="flex items-center justify-center lg:justify-start gap-6">
              <div className="w-16 h-[1px] bg-white" />
              <div className="flex flex-col">
                <cite className="text-xl font-bold tracking-[0.2em] text-white not-italic uppercase">
                  AJ
                </cite>
                <span className="text-[9px] tracking-[0.4em] text-white/40 uppercase font-bold mt-1">
                  Founder, AJ Academy
                </span>
              </div>
            </footer>
          </blockquote>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;