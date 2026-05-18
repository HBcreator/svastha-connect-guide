import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqList = [
  {
    q: "Is language a barrier during clinical consultations or daily therapy sessions?",
    a: "Absolutely not. All flagship centers accredited by MyVaidyam feature senior doctors (Vaidyas) and administrative staff who are fully proficient in fluent English. Additionally, personalized interpreter assistance can be pre-arranged for guests speaking German, French, or Russian.",
  },
  {
    q: "How is the pure Ayurvedic diet customized for Western digestive adaptations?",
    a: "Understanding that sudden shifts to traditional culinary items can trigger metabolic stress, certified resort chefs customize internal nutrition matrices specifically for international guests. Organic, non-spicy, easily digestible plant-based preparations are served strictly aligned with your individual dosha diagnostic parameters.",
  },
  {
    q: "What safety, hygiene, and medical accreditations do recommended centers hold?",
    a: "We implement rigorous clinical filtering criteria. All our featured inpatient destinations hold full NABH (National Accreditation Board for Hospitals & Healthcare Providers) accreditation alongside official AYUSH approvals. Treatment rooms maintain international surgical-grade sanitization protocols.",
  },
  {
    q: "Which season is considered optimal for booking advanced Panchakarma bio-purification?",
    a: "While authentic retreat therapies provide profound continuous systemic reversal year-round, the Monsoon season (June to September) is highly revered. The humid, dust-free ambient atmosphere naturally softens skin pores, enabling prescribed herbal oils to achieve maximum transdermal absorption efficiency.",
  },
  {
    q: "Can I continue my regular Western prescription medications during the retreat?",
    a: "Yes. You must declare your complete ongoing allopathic medication logs during your initial online pre-assessment. Chief physicians structure customized internal herbal decoctions to avoid cross-reactions, gradually optimizing systemic parameters under continuous daily monitoring.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-4 pb-16 bg-primary/[0.01]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Top Titles */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-lg text-[#7F543D] leading-relaxed">
            Transparently resolving the critical logistical and therapeutic doubts of wellness seekers traveling to India.
          </p>
        </div>

        {/* Accordion Layout Container */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen 
                    ? "bg-white border-primary/20 shadow-xl" 
                    : "bg-white hover:bg-white border-primary/10 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm md:text-base text-primary leading-snug">
                    {faq.q}
                  </span>
                  
                  <div className={`h-8 w-8 rounded-full transition-all duration-300 flex-shrink-0 flex items-center justify-center ${
                    isOpen 
                      ? "rotate-180 bg-primary text-white shadow-lg" 
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  }`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-6 pb-6 pt-0 text-sm md:text-base text-[#7F543D] leading-relaxed border-t border-primary/5 bg-primary/[0.02]">
                    <p className="pt-4 font-medium opacity-90">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

