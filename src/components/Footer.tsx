import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-[#121a73] text-white border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-light tracking-tight mb-2">
                AJ <span className="font-bold">ACADEMY</span>
              </h3>
              <p className="text-[10px] tracking-[0.5em] uppercase text-white/40 font-bold">
                Leadership • Management • Public Policy
              </p>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-sm font-light">
              Empowering the next generation of global leaders through 
              internal clarity and decisive action.
            </p>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Contact</h4>
            <div className="space-y-5 text-white/70 text-sm">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white/5 border border-white/10">
                  <Phone className="w-3.5 h-3.5 text-white/60" />
                </div>
                <span className="font-light tracking-wide">+91 83000 84888</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white/5 border border-white/10">
                  <Mail className="w-3.5 h-3.5 text-white/60" />
                </div>
                <a href="mailto:info@ajacademy.org" className="hover:text-white transition-colors font-light tracking-wide">
                  info@ajacademy.org
                </a>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Location</h4>
            <div className="flex items-start gap-5 text-white/70 text-sm">
              <div className="p-2.5 bg-white/5 border border-white/10 mt-1">
                <MapPin className="w-3.5 h-3.5 text-white/60" />
              </div>
              <div className="font-light leading-relaxed">
                <p className="text-white font-medium mb-1 tracking-wide">AJ Academy Campus</p>
                <p>Knowledge Park, Coimbatore</p>
                <p>Tamil Nadu — 641114</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] text-white/30">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Use</a>
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em] font-medium">
            © 2026 AJ Academy · Excellence in Leadership
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;