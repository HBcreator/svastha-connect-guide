import { FileText, Plane, HeartHandshake, Stethoscope } from "lucide-react";

const roadmapSteps = [
  {
    step: "01",
    title: "Clinical Pre-Assessment",
    desc: "Submit your basic reports and health queries online. Our senior panel of certified Ayurvedic physicians reviews your parameters to recommend customized inpatient durations and highly compatible therapy pathways.",
    icon: Stethoscope,
  },
  {
    step: "02",
    title: "Travel & Medical Visa Support",
    desc: "Once your treatment roadmap is approved, our concierge team immediately provides customized official medical invitation letters for priority Indian Medical Visa processing along with transparent room/package pricing.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Secure VIP Airport Transfers",
    desc: "Arrive stress-free in India. You are greeted at the airport arrival terminal by private bilingual drivers and escorted directly to your chosen certified sanctuary in dedicated, clean premium vehicles.",
    icon: Plane,
  },
  {
    step: "04",
    title: "Immersive Care & Translations",
    desc: "Experience transformative daily therapies managed by fluent English-speaking vaidyas and therapists. Your assigned health ambassador assists with custom organic chef consultations and daily follow-ups.",
    icon: HeartHandshake,
  },
];

export default function HomeProcessRoadmap() {
  return (
    <section className="py-20 bg-primary/5 border-t border-primary/10 relative overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-[#EDE8D0]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7F543D] block mb-2">
            Zero-Friction Medical Travel
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Your Seamless Journey to India
          </h2>
          <p className="text-xs sm:text-sm text-[#7F543D] mt-3 leading-relaxed max-w-2xl mx-auto">
            We handle the complexities of international medical logistics so you can focus entirely on cellular recovery and physical renewal.
          </p>
        </div>

        {/* Roadmap Steps Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle line connector for large screens */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 z-0" />

          {roadmapSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left group">
                
                {/* Number & Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-primary/15 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  {/* Absolute subtle floating step number */}
                  <span className="absolute -top-3 -right-3 text-xs font-black px-2 py-0.5 rounded-md bg-[#EDE8D0] text-primary border border-primary/10 shadow-xs">
                    {item.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-bold text-base sm:text-lg text-primary mb-2.5 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#7F543D]/95 leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Mobile visual downward arrow indicator */}
                {idx < roadmapSteps.length - 1 && (
                  <div className="h-6 w-0.5 bg-primary/15 my-3 block sm:hidden" />
                )}

              </div>
            );
          })}

        </div>

        {/* Reassurance Alert Statement */}
        <div className="mt-16 p-4 rounded-xl bg-white border border-primary/10 max-w-2xl mx-auto text-center shadow-xs">
          <p className="text-xs text-primary font-medium">
            💡 <strong className="text-primary font-bold">Travel Assurance:</strong> All international guest airport transfers include live WhatsApp location tracking shared with family members back home upon request.
          </p>
        </div>

      </div>
    </section>
  );
}
