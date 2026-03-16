import { Button } from "@/components/ui/button";

const programs = [
  {
    status: "Registration CLOSED",
    title: "REAL ESTATE BUSINESS MASTERY",
    description: "Most real estate agents don't own a business—they own a job. REBM is designed to bridge that gap, transforming high-performers into CEOs who command systems, people, and profits.",
    date: "7 MAR - 8 MAR 2026",
  },
  {
    status: "Registration OPEN",
    title: "Professional Sales Mastery",
    description: "This isn't about scripts. It's about psychology. We teach you how to read the room, identify the triggers, and lead the prospect to a confident Yes.",
    date: "19 - 21 JUN 2026",
  },
  {
    status: "Coming Soon",
    title: "Professional Marketing Marketing Mastery",
    description: "In a world of noise, attention is the new currency. PMM is designed to transform real estate professionals into local authorities by mastering digital ecosystems, lead generation, and the art of personal branding.",
    date: "26 - 29 NOV 2026",
  },
  {
    status: "Coming Soon",
    title: "Professional Team Building Leadership Mastery",
    description: "The greatest ceiling in real estate is your own capacity. PTBM is the strategic blueprint for high-performers ready to recruit, develop, and lead high-performing teams while reclaiming their own time through effective delegation.",
    date: "18 - 21 DEC 2025",
  },
  {
    status: "Coming Soon",
    title: "Professional Public Speaking Speaking Mastery",
    description: "The highest-paid professionals are those who can command a room. PPSM transforms you from an industry participant into a thought leader, unlocking the storytelling and presence required for keynote stages and dominant authority.",
    date: "15 AUG 2026 - 14 AUG 2027",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="relative py-20 md:py-32 bg-[#121a73] text-white border-t border-white/10 overflow-hidden">
      
      {/* Background Watermark: Swapped for an orange tint */}
      <div className="absolute top-10 left-6 md:left-10 select-none pointer-events-none opacity-[0.03] md:opacity-[0.05]">
        <h2 className="text-[6rem] md:text-[12rem] font-bold leading-none uppercase tracking-tighter text-orange-500">
          Curriculum
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-orange-500/40" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-orange-500/60">
                Academic Pathway
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight leading-tight">
              Leadership <span className="font-bold italic text-orange-500">Programs</span>
            </h2>
          </div>
          <div className="lg:text-right border-l lg:border-l-0 lg:border-r border-white/20 px-6">
            <p className="text-white/60 max-w-xs text-xs md:text-sm leading-relaxed font-light">
              Mastering leadership as an innate expression of human potential.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-px md:bg-white/10 md:border md:border-white/10">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="relative p-8 md:p-12 bg-[#121a73] flex flex-col justify-between border border-white/10 md:border-none group"
            >
              <div>
                <div className="flex justify-between items-center mb-10 md:mb-12">
                  {/* Status Badge: Registration OPEN is now Orange */}
                  <span className={`text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase px-3 py-1 border transition-colors ${
                    program.status === "Registration OPEN" 
                      ? "border-orange-500 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]" 
                      : "border-white/10 text-white/30"
                  }`}>
                    {program.status}
                  </span>
                  <span className="text-white/10 text-2xl md:text-3xl font-light group-hover:text-orange-500/20 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {program.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed text-sm mb-10 md:mb-12">
                  {program.description}
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <p className="text-[8px] md:text-[9px] text-orange-500/40 tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">
                    Scheduled Date
                  </p>
                  <p className="text-[10px] md:text-xs text-white/80 tracking-widest uppercase font-medium">
                    {program.date}
                  </p>
                </div>
                
                {/* Button: Hover state changed to Orange */}
                <button className="w-full h-14 md:h-auto md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] border border-white/20 text-white bg-white/5 active:bg-orange-500 active:text-white md:hover:bg-orange-500 md:hover:border-orange-500 md:hover:text-white transition-all duration-300">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;