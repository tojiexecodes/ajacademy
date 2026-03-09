import { Button } from "@/components/ui/button";

const programs = [
  {
    status: "Registration OPEN",
    title: "Brand Insight",
    description: "Expand your business by leveraging the power of purposeful branding from the finest brand strategists.",
    date: "27 FEB - 1 MAR 2026",
  },
  {
    status: "Registration OPEN",
    title: "Human Is Not A Resource",
    description: "Explore practical steps to unleash the human potential in your organization by seeing human beings as possibilities.",
    date: "19 - 21 JUN 2026",
  },
  {
    status: "Coming Soon",
    title: "Insight",
    description: "Enhance your ability to 'see' and explore the science of scaling up your business through real-life case studies.",
    date: "26 - 29 NOV 2026",
  },
  {
    status: "Coming Soon",
    title: "Enterprise Excellence",
    description: "Embark on a transformative journey of crafting lasting success and a legacy beyond mere profitability.",
    date: "18 - 21 DEC 2025",
  },
  {
    status: "Coming Soon",
    title: "Entrepreneurship Bootcamp",
    description: "A one-year blended program for an audacious generation committed to building an enterprise from the ground up.",
    date: "15 AUG 2026 - 14 AUG 2027",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="relative py-20 md:py-32 bg-[#121a73] text-white border-t border-white/10 overflow-hidden">
      
      {/* Background Watermark: Reduced size and adjusted position for mobile */}
      <div className="absolute top-10 left-6 md:left-10 select-none pointer-events-none opacity-[0.02] md:opacity-[0.03]">
        <h2 className="text-[6rem] md:text-[12rem] font-bold leading-none uppercase tracking-tighter">
          Curriculum
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/60">
                Academic Pathway
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight leading-tight">
              Leadership <span className="font-bold italic">Programs</span>
            </h2>
          </div>
          <div className="lg:text-right border-l lg:border-l-0 lg:border-r border-white/20 px-6">
            <p className="text-white/60 max-w-xs text-xs md:text-sm leading-relaxed font-light">
              Mastering leadership as an innate expression of human potential.
            </p>
          </div>
        </div>

        {/* Programs Grid: Adjusted border logic for mobile stacking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-px md:bg-white/10 md:border md:border-white/10">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="relative p-8 md:p-12 bg-[#121a73] flex flex-col justify-between border border-white/10 md:border-none"
            >
              <div>
                <div className="flex justify-between items-center mb-10 md:mb-12">
                  <span className={`text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase px-3 py-1 border ${
                    program.status === "Registration OPEN" 
                      ? "border-white text-white" 
                      : "border-white/10 text-white/30"
                  }`}>
                    {program.status}
                  </span>
                  <span className="text-white/10 text-2xl md:text-3xl font-light">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed text-sm mb-10 md:mb-12">
                  {program.description}
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <p className="text-[8px] md:text-[9px] text-white/30 tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">
                    Scheduled Date
                  </p>
                  <p className="text-[10px] md:text-xs text-white/80 tracking-widest uppercase font-medium">
                    {program.date}
                  </p>
                </div>
                
                <button className="w-full h-14 md:h-auto md:py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] border border-white/20 text-white bg-white/5 active:bg-white active:text-[#121a73] md:hover:bg-white md:hover:text-[#121a73] transition-all duration-300">
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