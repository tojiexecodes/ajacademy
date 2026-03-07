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
    <section id="programs" className="relative py-32 bg-[#121a73] text-white border-t border-white/10">
      
      {/* Background Watermark: High-contrast but low-opacity */}
      <div className="absolute top-10 left-10 select-none pointer-events-none opacity-[0.03]">
        <h2 className="text-[12rem] font-bold leading-none uppercase tracking-tighter">
          Curriculum
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/60">
                Academic Pathway
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Leadership <span className="font-bold italic">Programs</span>
            </h2>
          </div>
          <div className="lg:text-right border-l lg:border-l-0 lg:border-r border-white/20 px-6">
            <p className="text-white/60 max-w-xs text-sm leading-relaxed font-light">
              Mastering leadership as an innate expression of human potential.
            </p>
          </div>
        </div>

        {/* Programs Grid: Sharp White Divider System */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="relative p-12 bg-[#121a73] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className={`text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1 border ${
                    program.status === "Registration OPEN" 
                      ? "border-white text-white" 
                      : "border-white/10 text-white/30"
                  }`}>
                    {program.status}
                  </span>
                  <span className="text-white/10 text-3xl font-light">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-wide text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed text-sm mb-12">
                  {program.description}
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-[9px] text-white/30 tracking-[0.4em] uppercase font-bold">
                    Scheduled Date
                  </p>
                  <p className="text-xs text-white/80 tracking-widest uppercase font-medium">
                    {program.date}
                  </p>
                </div>
                
                <button className="w-full py-4 text-[10px] font-bold uppercase tracking-[0.4em] border border-white/20 text-white bg-white/5 hover:bg-white hover:text-[#121a73] transition-all duration-300">
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