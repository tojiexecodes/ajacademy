import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const programs = [
  { title: "Insight", subtitle: "The DNA of Success", logo: "INSIGHT" },
  { title: "Brand Insight", subtitle: "Decoding Branding", logo: "BRAND" },
  { title: "Human Is Not A Resource", subtitle: "Unpacking Human Potential", logo: "HUMAN" },
  { title: "Family Enterprise Excellence", subtitle: "Mapping the Future of your business", logo: "FAMILY" },
  { title: "Gen A Entrepreneurship Bootcamp", subtitle: "Nurturing the next generation", logo: "GEN A" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[110] bg-[#121a73] border-b border-white/10">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.1em] text-white">AJ <span className="font-light">ACADEMY</span></span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/50 font-medium">Leadership & Management</span>
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 flex items-center gap-3 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hidden sm:block">
              {isOpen ? "Close" : "Menu"}
            </span>
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MENU */}
      <div className={`
        fixed inset-0 z-[100] bg-[#121a73] transition-all duration-700 ease-in-out flex flex-col
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}>
        
        {/* Subtle Brand Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h2 className="text-[18vw] font-black text-white/[0.02] uppercase leading-none">
            ACADEMY
          </h2>
        </div>

        <div className="container relative z-10 mx-auto px-6 flex-1 flex flex-col justify-center pt-24 pb-12">
          <div className="max-w-6xl mx-auto w-full">
             <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] w-8 bg-white/20" />
                <h2 className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">
                  Academic Programs
                </h2>
             </div>

            <div className="grid lg:grid-cols-2 gap-x-20">
              {programs.map((prog, i) => (
                <a 
                  key={i} 
                  href={`#${prog.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between py-8 border-b border-white/10 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-6">
                    {/* Minimalist Logo Badge */}
                    <div className="hidden sm:flex w-20 h-10 border border-white/10 bg-white/5 items-center justify-center text-[9px] font-bold text-white/70 tracking-tighter">
                      {prog.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-white tracking-wide">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-white/40 mt-1 font-light tracking-widest uppercase">
                        {prog.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-white/20 group-hover:text-white transition-colors" size={18} />
                </a>
              ))}
            </div>

            {/* Bottom Secondary Links */}
            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-6">
              {["About", "Alumni", "Initiatives", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;