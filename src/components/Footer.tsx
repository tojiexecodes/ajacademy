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
              {/* Increased from text-xl to text-2xl/3xl */}
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                AJ <span className="text-orange-500">ACADEMY</span>
              </h3>
              {/* Increased from text-[9px] to text-[11px] */}
              <p className="text-[11px] md:text-[12px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-orange-500/50 font-bold leading-relaxed">
                Leadership • Management • Public Policy
              </p>
            </div>
            {/* Increased from text-sm to text-lg */}
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-sm font-light">
              Empowering the next generation of global leaders through 
              internal clarity and decisive action.
            </p>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Increased label size */}
              <h4 className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.3em] text-orange-500/80">Contact</h4>
              <div className="space-y-4 md:space-y-6 text-white/70">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-2.5 md:p-3 bg-white/5 border border-white/10 group-hover:border-orange-500/50 transition-colors">
                    <Phone className="w-4 h-4 text-white/60 group-hover:text-orange-500 transition-colors" />
                  </div>
                  {/* Bumped to text-base */}
                  <span className="font-light tracking-wide text-sm md:text-base group-hover:text-white transition-colors">+91 83000 84888</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 md:p-3 bg-white/5 border border-white/10 group-hover:border-orange-500/50 transition-colors">
                    <Mail className="w-4 h-4 text-white/60 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <a href="mailto:info@ajacademy.org" className="hover:text-white transition-colors font-light tracking-wide text-sm md:text-base">
                    info@ajacademy.org
                  </a>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <h4 className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.3em] text-orange-500/80">Location</h4>
              <div className="flex items-start gap-4 md:gap-5 text-white/70 group">
                <div className="p-2.5 md:p-3 bg-white/5 border border-white/10 mt-1 group-hover:border-orange-500/50 transition-colors">
                  <MapPin className="w-4 h-4 text-white/60 group-hover:text-orange-500 transition-colors" />
                </div>
                <div className="font-light leading-relaxed text-sm md:text-base">
                  <p className="text-orange-500 font-medium mb-1 tracking-wide">AJ Academy Campus</p>
                  <p>Knowledge Park, Coimbatore</p>
                  <p>Tamil Nadu — 641114</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          {/* Increased from text-[9px] to text-[11px] */}
          <div className="flex gap-6 md:gap-10 text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30">
            <a href="#" className="hover:text-orange-500 transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-all">Terms of Use</a>
          </div>
          <p className="text-white/20 text-[11px] md:text-[12px] uppercase tracking-[0.1em] md:tracking-[0.25em] font-medium">
            © 2026 <span className="text-orange-500/30">AJ Academy</span> · Excellence in Leadership
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;