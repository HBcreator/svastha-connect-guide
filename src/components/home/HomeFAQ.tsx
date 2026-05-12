import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqList = [
  {
    q: "Is language a barrier during clinical consultations or daily therapy sessions?",
    a: "Absolutely not. All flagship centers accredited by Savastha Global feature senior doctors (Vaidyas) and administrative staff who are fully proficient in fluent English. Additionally, personalized interpreter assistance can be pre-arranged for guests speaking German, French, or Russian.",
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Top Titles */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold tracking-widest uppercase mb-3 border border-primary/10 shadow-xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#7F543D]" />
            <span>International Travelers' Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#7F543D] mt-2 leading-relaxed">
            Transparently resolving the critical logistical and therapeutic doubts of wellness seekers traveling to India.
          </p>
        </div>

        {/* Accordion Layout Container */}
        <div className="space-y-3.5">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-xl transition-all border overflow-hidden ${
                  isOpen 
                    ? "bg-white border-primary/20 shadow-md" 
                    : "bg-white/70 hover:bg-white border-primary/10 shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-xs sm:text-sm text-primary pr-2">
                    {faq.q}
                  </span>
                  
                  <div className={`h-6 w-6 rounded-full bg-primary/5 text-primary flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180 bg-primary text-white" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#7F543D] leading-relaxed border-t border-primary/5 bg-primary/5 font-light animate-fade-in">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Persistent bottom consultation link inside FAQ area */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-primary/10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 shadow-xs">
          <span className="text-xs text-[#7F543D] flex items-center gap-1.5 font-medium">
            <MessageCircle className="h-4 w-4 text-primary" /> Have highly specific personal diagnostic parameters?
          </span>
          <a 
            href="#quoteModal"
            onClick={(e) => {
              e.preventDefault();
              // Programmatically trigger the modal if accessible or scroll top
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} 
            className="text-xs font-bold text-primary underline hover:text-primary/80"
          >
            Connect with our medical concierge live →
          </a>
        </div>

      </div>
    </section>
  );
}
