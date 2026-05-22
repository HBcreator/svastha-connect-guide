import { ShieldCheck, Stethoscope, Building2, FileText, HeartHandshake, Sparkles } from "lucide-react";

const whyChoosePoints = [
  {
    title: "Doctor-Led Clinical Advocacy",
    desc: "Our panel of senior physicians reviews every medical case before center shortlisting to ensure clinical accuracy and patient safety.",
    icon: Stethoscope,
  },
  {
    title: "Unbiased Hospital Mapping",
    desc: "We navigate India's 5,000+ centers to shortlist only NABH-accredited and clinically proven institutions for your specific condition.",
    icon: Building2,
  },
  {
    title: "Transparent Medical Pricing",
    desc: "No hidden surcharges. You receive direct hospital-to-patient package rates with clear therapeutic inclusions and no foreign-patient premiums.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Visa Support",
    desc: "We coordinate official medical invitation letters directly from hospitals, ensuring priority visa processing at the Indian Embassy/Consulate.",
    icon: FileText,
  },
  {
    title: "On-Ground Patient Handlers",
    desc: "Dedicated bilingual ambassadors bridge language gaps, coordinate custom dietary needs, and provide daily follow-up during your entire stay.",
    icon: HeartHandshake,
  },
  {
    title: "Verified Post-Discharge Care",
    desc: "Receive structured take-home herbal regimens and remote physician follow-up to sustain your recovery results long after returning home.",
    icon: Sparkles,
  },
];

export default function HomeProcessRoadmap() {
  return (
    <section className="pt-4 pb-4 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Main Themed Container */}
        <div className="bg-[#EDE8D0] rounded-[32px] border border-[#d8d0ae] p-8 md:p-12">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose My Vaidyam for Your Treatment Journey in India
            </h2>
            <p className="text-sm md:text-base text-[#7F543D] leading-relaxed max-w-2xl mx-auto">
              We streamline every phase of your international recovery journey, providing transparent medical planning, physical safety, and dedicated clinical advocacy.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {whyChoosePoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-5 md:p-6 rounded-2xl border border-[#d9cfae]/60 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#F8F4E7] border border-[#d9cfae] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-[15px] text-primary leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#7F543D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Reassurance Alert Statement */}
          <div className="mt-10 pt-8 border-t border-[#d6decf]/60 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="text-xl">💡</span>
              <p className="text-xs sm:text-sm text-primary font-medium">
                <strong className="font-bold">Travel Assurance:</strong> All international guest airport transfers include dedicated bilingual handlers and optional real-time transit tracking shared securely with your loved ones.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

