import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const programs = [
  { title: "Insight", subtitle: "The DNA of Success", logo: "INSIGHT" },
  { title: "Brand Insight", subtitle: "Decoding Branding", logo: "BRAND" },
  { title: "Human Is Not A Resource", subtitle: "Unpacking Potential", logo: "HUMAN" },
  { title: "Family Enterprise Excellence", subtitle: "Future Mapping", logo: "FAMILY" },
  { title: "Gen A Bootcamp", subtitle: "Next-Gen Leaders", logo: "GEN A" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[110] bg-[#121a73]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
          <a href="/" className="flex flex-col group">
            <span className="text-lg md:text-xl font-bold tracking-[0.1em] text-white">
              AJ <span className="font-light text-orange-500">ACADEMY</span>
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-orange-500/50 font-bold">
              Leadership & Management
            </span>
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 flex items-center gap-3 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/60 group-hover:text-orange-500 transition-colors hidden sm:block">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="relative w-6 h-6">
               <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100 text-orange-500"}`} size={24} strokeWidth={1.5} />
               <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100 scale-100 text-orange-500" : "-rotate-90 opacity-0 scale-50"}`} size={24} strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MENU */}
      <div className={`
        fixed inset-0 z-[100] bg-[#121a73] transition-all duration-500 ease-in-out flex flex-col
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
      `}>
        
        {/* Subtle Brand Background Text - Changed to Orange Tint */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h2 className="text-[25vw] font-black text-orange-500/[0.03] uppercase leading-none rotate-90 lg:rotate-0">
            AJ
          </h2>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col pt-24 pb-10 overflow-y-auto">
          <div className="container mx-auto px-6 max-w-6xl w-full my-auto">
             
             <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-6 bg-orange-500/40" />
                <h2 className="text-orange-500/60 text-[9px] uppercase tracking-[0.4em] font-bold">
                  Academic Programs
                </h2>
             </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {programs.map((prog, i) => (
                <a 
                  key={i} 
                  href={`#${prog.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between py-5 md:py-8 border-b border-white/5 group active:bg-orange-500/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-5">
                    {/* Logo Badge: Orange border/text on hover */}
                    <div className="flex w-14 h-8 md:w-20 md:h-10 border border-white/10 bg-white/5 items-center justify-center text-[8px] md:text-[9px] font-bold text-white/50 tracking-tighter shrink-0 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-all">
                      {prog.logo}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-light text-white tracking-wide group-hover:text-orange-500 transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-[10px] text-white/30 mt-0.5 font-light tracking-widest uppercase group-hover:text-orange-500/40 transition-colors">
                        {prog.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-white/20 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" size={16} />
                </a>
              ))}
            </div>

            {/* Bottom Secondary Links */}
            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="grid grid-cols-2 gap-y-6">
                {["About", "Alumni", "Initiatives", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-orange-500 transition-colors text-[10px] uppercase tracking-[0.3em] font-bold py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;