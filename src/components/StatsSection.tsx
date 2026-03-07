const stats = [
  { value: "3,000+", label: "C-Level Attendees" },
  { value: "50+", label: "Industries" },
  { value: "25+", label: "Countries Represented" },
  { value: "225+", label: "Resource Leaders" },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#121a73] border-y border-white/10 overflow-hidden">
      
      {/* Background Pattern: Subtle Grid for a "Global Infrastructure" feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-white text-[10px] font-bold tracking-[0.8em] uppercase mb-6 opacity-60">
            Institutional Impact
          </h2>
          <div className="h-16 w-[1px] bg-white/20" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col items-center text-center px-8 ${
                idx !== stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              {/* Sequential Marker */}
              <span className="text-[10px] font-bold text-white/30 tracking-widest mb-6">
                PHASE 0{idx + 1}
              </span>

              {/* The Number: Crisp and Bold */}
              <div className="mb-4">
                <p className="text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tighter">
                  {stat.value}
                </p>
              </div>
              
              {/* The Label: Spaced and Professional */}
              <div className="h-[1px] w-8 bg-white/40 mb-6" />
              
              <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-white/70 font-bold leading-relaxed max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Rule */}
        <div className="mt-24 flex justify-center">
          <div className="h-[1px] w-24 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;