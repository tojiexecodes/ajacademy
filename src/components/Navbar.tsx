import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "PREC", href: "#prec" },
  { name: "Courses", href: "#courses" },
  { name: "Coaches", href: "#coaches" },
  { name: "Contact us", href: "#contact" },
  { name: "Career", href: "#career" },
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
      <nav className="fixed top-0 left-0 right-0 z-[110] bg-[#121a73]/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 md:py-6 flex items-center justify-between">
          <a href="/" className="flex flex-col group shrink-0">
            <span className="text-xl md:text-2xl font-bold tracking-[0.1em] text-white">
              AJ <span className="text-orange-500">ACADEMY</span>
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-orange-500/60 font-bold">
              Leadership & Management
            </span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.25em] font-bold text-white/80 hover:text-orange-500 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* MOBILE TOGGLE - Z-index is higher to stay clickable when menu is open */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden relative z-[120] text-white p-2 flex items-center justify-center focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="relative w-7 h-7">
               <Menu className={`absolute inset-0 transition-all duration-300 transform ${isOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100 text-orange-500"}`} size={28} />
               <X className={`absolute inset-0 transition-all duration-300 transform ${isOpen ? "rotate-0 opacity-100 scale-100 text-orange-500" : "-rotate-90 opacity-0 scale-50"}`} size={28} />
            </div>
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU */}
      <div className={`
        fixed inset-0 z-[100] bg-[#121a73] transition-all duration-500 ease-in-out lg:hidden
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}>
        
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h2 className="text-[60vw] font-black text-orange-500/[0.03] uppercase leading-none">
            AJ
          </h2>
        </div>

        {/* Content Wrapper - Using h-full and overflow-y-auto for smaller phones */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 overflow-y-auto">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className={`
                  text-white text-3xl sm:text-4xl font-bold tracking-widest uppercase 
                  hover:text-orange-500 transition-all active:scale-95 text-center
                  transform transition-transform duration-500 delay-[${i * 50}ms]
                  ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;