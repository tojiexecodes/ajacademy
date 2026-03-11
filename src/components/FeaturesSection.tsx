import React from 'react';
import { Award, Users, Lightbulb, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Learn from the Best",
    description: "An unparalleled opportunity to connect with and receive mentoring from industry leaders.",
  },
  {
    icon: Lightbulb,
    title: "AJ's Perspective",
    description: "Hear AJ's unique perspective on leadership, business, and personal transformation.",
  },
  {
    icon: Users,
    title: "Alumni Community",
    description: "3500+ highly accomplished alumni offering invaluable insights and support throughout your journey.",
  },
  {
    icon: Sparkles,
    title: "Inner Transformation",
    description: "Empower yourself with tools for inner clarity to unleash your full potential as a leader.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#121a73] text-white overflow-hidden border-t border-white/10">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header: Clean & Institutional */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-[1px] w-8 bg-orange-500/50" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-orange-500/70 font-bold">
              Why AJ Academy
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-light tracking-tight leading-[1.1]">
            The AJ <span className="font-bold italic text-orange-500">Advantage</span>
          </h2>
        </div>

        {/* Features Grid: Responsive Divider System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t md:border-l border-white/10">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`
                group
                p-8 md:p-10 
                border-b border-r border-white/10 
                bg-white/[0.02] hover:bg-orange-500/[0.02]
                transition-all duration-500
              `}
            >
              {/* Icon: Now using Orange */}
              <div className="mb-10 md:mb-16">
                <feature.icon className="w-5 h-5 text-orange-500" strokeWidth={1.5} />
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Label */}
              <div className="mt-10 md:mt-16 flex items-center justify-between">
                <span className="text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase group-hover:text-orange-500/40 transition-colors">
                  Module 0{idx + 1}
                </span>
                <div className="w-4 h-[1px] bg-white/20 group-hover:bg-orange-500/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;