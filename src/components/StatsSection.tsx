const stats = [
  { value: "3,000+", label: "C-Level Attendees" },
  { value: "50+", label: "Industries" },
  { value: "25+", label: "Countries Represented" },
  { value: "225+", label: "Resource Leaders" },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-[#121a73] border-y border-white/10 overflow-hidden">
      
      {/* Background Pattern: Scaled down for mobile to prevent "flicker" while scrolling */}
      <div className="absolute inset-0 opacity-[0.05] md:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <h2 className="text-white text-[9px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase mb-4 md:mb-6 opacity-60">
            Institutional Impact
          </h2>
          <div className="h-12 md:h-16 w-[1px] bg-white/20" />
        </div>

        {/* Stats Grid: Switched to a 2x2 grid on small tablets/large phones for better rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-y-20 lg:gap-0">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col items-center text-center px-4 md:px-8 ${
                // Borders only show on desktop to avoid awkward partial lines on mobile
                idx !== stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              {/* Sequential Marker */}
              <span className="text-[8px] md:text-[10px] font-bold text-white/30 tracking-[0.3em] mb-4 md:mb-6 uppercase">
                Phase 0{idx + 1}
              </span>

              {/* The Number: Dynamically sized for mobile screens */}
              <div className="mb-2 md:mb-4">
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tighter">
                  {stat.value}
                </p>
              </div>
              
              {/* Decorative Divider */}
              <div className="h-[1px] w-6 md:w-8 bg-white/40 mb-4 md:mb-6" />
              
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 font-bold leading-relaxed max-w-[150px] md:max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Rule */}
        <div className="mt-20 md:mt-24 flex justify-center">
          <div className="h-[1px] w-16 md:w-24 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;