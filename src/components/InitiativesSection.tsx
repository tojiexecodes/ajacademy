import workshopImage from "@/assets/workshop.jpg";
import campusImage from "@/assets/campus.jpg";

const initiatives = [
  {
    image: campusImage,
    title: "Conscious Leadership Movement",
    tagline: "GLOBAL IMPACT",
    description: "A global movement uniting leaders, visionaries, and changemakers behind a common purpose—to lead with consciousness and create lasting positive impact.",
  },
  {
    image: workshopImage,
    title: "AJ Education Foundation",
    tagline: "COMMUNITY & GENIUS",
    description: "Education as a means to unfold innate genius, manifested through community learning programs, mentorship initiatives, and skill-building workshops.",
  },
];

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="py-32 bg-[#121a73] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-white/40" />
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-white/60 font-bold">
                Philanthropy & Outreach
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-light tracking-tight">
              Initiatives <span className="italic opacity-80">Led by AJ</span>
            </h3>
          </div>
          {/* Minimalist Decorative Rule */}
          <div className="hidden md:block h-[1px] flex-grow mx-16 bg-white/10 mb-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {initiatives.map((initiative, idx) => (
            <div key={idx} className="space-y-10 cursor-default">
              
              {/* Image Container: Full color by default, border removed for a cleaner look */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  // grayscale, mix-blend-luminosity, opacity, group-hover, and transition removed.
                  // Images are now full color, full opacity, and static.
                  className="w-full h-full object-cover"
                />
                {/* Index Overlay */}
                <div className="absolute top-0 right-0 bg-white text-[#121a73] text-[11px] font-black px-6 py-3">
                  / 0{idx + 1}
                </div>
                {/* Subtle Inner Glow - retained as a subtle aesthetic touch against the solid blue */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121a73]/60 to-transparent pointer-events-none" />
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block mb-3">
                    {initiative.tagline}
                  </span>
                  {/* translation hover effect removed */}
                  <h4 className="text-3xl font-light tracking-wide">
                    {initiative.title}
                  </h4>
                </div>
                
                <p className="text-white/60 leading-relaxed font-light text-lg max-w-md">
                  {initiative.description}
                </p>
                
                {/* Non-interactive description "button" */}
                <div className="pt-4">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold py-2 text-white/80">
                    <span className="relative z-10">
                      Explore Initiative
                    </span>
                    {/* Width change and color change on hover removed. */}
                    <div className="h-[1px] w-12 bg-white/30" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;