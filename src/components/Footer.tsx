import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 bg-[#121a73] text-white border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-light tracking-tight mb-2">
                AJ <span className="font-bold">ACADEMY</span>
              </h3>
              <p className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/40 font-bold leading-relaxed">
                Leadership • Management • Public Policy
              </p>
            </div>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm font-light">
              Empowering the next generation of global leaders through 
              internal clarity and decisive action.
            </p>
          </div>

          {/* Contact & Location - Wrapped in a sub-grid for tablet/mobile efficiency */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Contact</h4>
              <div className="space-y-4 md:space-y-5 text-white/70 text-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 md:p-2.5 bg-white/5 border border-white/10">
                    <Phone className="w-3.5 h-3.5 text-white/60" />
                  </div>
                  <span className="font-light tracking-wide text-xs md:text-sm">+91 83000 84888</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 md:p-2.5 bg-white/5 border border-white/10">
                    <Mail className="w-3.5 h-3.5 text-white/60" />
                  </div>
                  <a href="mailto:info@ajacademy.org" className="hover:text-white transition-colors font-light tracking-wide text-xs md:text-sm">
                    info@ajacademy.org
                  </a>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Location</h4>
              <div className="flex items-start gap-4 md:gap-5 text-white/70 text-sm">
                <div className="p-2 md:p-2.5 bg-white/5 border border-white/10 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-white/60" />
                </div>
                <div className="font-light leading-relaxed text-xs md:text-sm">
                  <p className="text-white font-medium mb-1 tracking-wide">AJ Academy Campus</p>
                  <p>Knowledge Park, Coimbatore</p>
                  <p>Tamil Nadu — 641114</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          <div className="flex gap-6 md:gap-10 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Use</a>
          </div>
          <p className="text-white/20 text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.25em] font-medium">
            © 2026 AJ Academy · Excellence in Leadership
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;