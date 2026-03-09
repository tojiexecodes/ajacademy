import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="py-20 md:py-24 bg-[#121a73] relative overflow-hidden">
      {/* Decorative Element - Scaled down and moved to avoid interfering with form on mobile */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/5 -rotate-45 translate-x-16 -translate-y-16 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">
                Newsletter
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-6">
              Join the <span className="font-bold italic">AJ Inner Circle</span>
            </h2>

            <div className="space-y-4 mb-2 lg:mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-1 w-1 rounded-full bg-white/60 shrink-0" />
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                  Monthly leadership insights curated for high-impact decision makers.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-1 w-1 rounded-full bg-white/60 shrink-0" />
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                  Complimentary access to our exclusive "Leadership Reimagined" digital guide.
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="w-full lg:w-1/2">
            <form 
              className="p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 space-y-5" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">
                  Full Name
                </label>
                <Input
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-white/20 text-white placeholder:text-white/20 focus:border-white/50 transition-all rounded-none h-14 md:h-12 text-base md:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-white/20 text-white placeholder:text-white/20 focus:border-white/50 transition-all rounded-none h-14 md:h-12 text-base md:text-sm"
                />
              </div>

              <Button className="w-full mt-2 bg-white text-[#121a73] hover:bg-white/90 active:scale-[0.98] transition-all rounded-none h-14 md:h-12 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-2">
                Subscribe Now
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              <p className="text-[9px] text-center text-white/30 uppercase tracking-widest pt-2">
                Private • Professional • Precise
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;