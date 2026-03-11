const stats = [
  { value: "3,000+", label: "C-Level Attendees" },
  { value: "50+", label: "Industries" },
  { value: "25+", label: "Countries Represented" },
  { value: "225+", label: "Resource Leaders" },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-[#121a73] border-y border-white/10 overflow-hidden">
      
      {/* Background Pattern: Changed dots to a very faint orange for warmth */}
      <div className="absolute inset-0 opacity-[0.05] md:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #f97316 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <h2 className="text-orange-500/80 text-[9px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase mb-4 md:mb-6">
            Institutional Impact
          </h2>
          <div className="h-12 md:h-16 w-[1px] bg-orange-500/30" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-y-20 lg:gap-0">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col items-center text-center px-4 md:px-8 ${
                idx !== stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              {/* Sequential Marker: Orange tint */}
              <span className="text-[8px] md:text-[10px] font-bold text-orange-500/40 tracking-[0.3em] mb-4 md:mb-6 uppercase">
                Phase 0{idx + 1}
              </span>

              {/* The Number: Now the primary orange focal point */}
              <div className="mb-2 md:mb-4">
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-orange-500 font-light tracking-tighter">
                  {stat.value}
                </p>
              </div>
              
              {/* Decorative Divider: Matches orange theme */}
              <div className="h-[1px] w-6 md:w-8 bg-orange-500/40 mb-4 md:mb-6" />
              
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70 font-bold leading-relaxed max-w-[150px] md:max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Rule */}
        <div className="mt-20 md:mt-24 flex justify-center">
          <div className="h-[1px] w-16 md:w-24 bg-orange-500/20" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;