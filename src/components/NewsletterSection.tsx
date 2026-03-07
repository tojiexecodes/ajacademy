import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="py-24 bg-[#121a73] relative overflow-hidden">
      {/* Decorative Geometric Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -rotate-45 translate-x-32 -translate-y-32 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-6">
              Join the <span className="font-bold italic">AJ Inner Circle</span>
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40" />
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Monthly leadership insights curated for high-impact decision makers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40" />
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Complimentary access to our exclusive "Leadership Reimagined" digital guide.
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:w-1/2 w-full">
            <form 
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 space-y-4" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Full Name</label>
                <Input
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-white/20 text-white placeholder:text-white/20 focus:border-white/50 transition-all rounded-none h-12"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-white/20 text-white placeholder:text-white/20 focus:border-white/50 transition-all rounded-none h-12"
                />
              </div>

              <Button className="w-full mt-4 bg-white text-[#121a73] hover:bg-white/90 transition-all rounded-none h-12 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                Subscribe Now
                <ChevronRight className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;