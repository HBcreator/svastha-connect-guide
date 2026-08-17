import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const LifestyleAndWellness = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      category: "Lifestyle & Wellness",
      name: "Anti-Aging Ayurveda Program in India",
      duration: "21 Days",
      targetAudience: "Luxury wellness travellers",
      keyFocus: "Cellular rejuvenation",
      description:
        "A physician-guided 21-day anti-aging Ayurveda program focused on deep detox, cellular rejuvenation, skin vitality, metabolic balance, stress recovery, and graceful long-term wellness.",
      image: "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/1.jpg",
      link: "/ayurveda-packages/anti-aging-ayurveda-program-in-india",
      rating: 4.9,
      reviews: 240,
      tags: ["21 Days", "Anti-Aging", "Cellular Health", "Rasayana"]
    },
    {
      category: "Lifestyle & Wellness",
      name: "Ayurvedic Weight Loss Program in India",
      duration: "21 Days",
      targetAudience: "Weight management patients",
      keyFocus: "Metabolism & fat reduction",
      description: "A 21-day physician-supervised Ayurvedic weight loss program combining Panchakarma detox, Udvarthanam, Lekhana Basti, herbal medicines, and dosha-specific meals for sustainable metabolism reset.",
      image: "/Ayurvedic Programs/Images/Ayurvedic-Weight-Loss-Program-India/1.webp",
      link: "/ayurveda-packages/ayurvedic-weight-loss-program-in-india",
      rating: 4.8,
      reviews: 310,
      tags: ["21 Days", "Weight Loss", "Metabolism", "Udvarthanam"]
    },
    {
      category: "Lifestyle & Wellness",
      name: "Stress Management Ayurveda Retreat in India",
      duration: "14–21 Days",
      targetAudience: "European wellness tourists",
      keyFocus: "Stress relief & relaxation",
      description: "A specialized 14-21 day Ayurvedic retreat designed for deep mental relaxation, emotional healing, and stress recovery. Combines Shirodhara, yoga, meditation, and personalized nutrition for international travelers.",
      image: "/program-images/stress-management.png",
      link: "/ayurveda-packages/stress-management-ayurveda-retreat-in-india",
      rating: 4.8,
      reviews: 180,
      tags: ["14-21 Days", "Stress Relief", "Mental Health", "Shirodhara"]
    },
    {
      category: "Lifestyle & Wellness",
      name: "Ayurvedic Burnout Recovery Program in India",
      duration: "14–21 Days",
      targetAudience: "Corporate professionals",
      keyFocus: "Mental & physical recovery",
      description: "A comprehensive 14-21 day recovery protocol designed for high-performing professionals facing chronic exhaustion. Integrates Ayurvedic therapies, stress diagnostics, executive health coaching, and restorative routines to rebuild vitality and mental resilience.",
      image: "/program-images/burnout-recovery.png",
      link: "/ayurveda-packages/ayurvedic-burnout-recovery-program-in-india",
      rating: 4.7,
      reviews: 160,
      tags: ["14-21 Days", "Burnout Recovery", "Executive Health", "Deep Reset"]
    },
    {
      category: "Lifestyle & Wellness",
      name: "Immunity Boosting Detox Program in India",
      duration: "14 Days",
      targetAudience: "Health-conscious tourists",
      keyFocus: "Immune system strengthening",
      description: "A specialized 14-day Ayurvedic detox program designed to strengthen the immune system, enhance vitality, and restore natural balance. Ideal for health-conscious travelers seeking preventive wellness in India.",
      image: "/program-images/immunity-detox.png",
      link: "/ayurveda-packages/immunity-boosting-detox-program-in-india",
      rating: 4.8,
      reviews: 155,
      tags: ["14 Days", "Immunity Boost", "Detox", "Preventive Health"]
    },
  ];

  return (
    <div className="min-h-screen font-poppins bg-[#E5E7E2] flex flex-col">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#2C4E5A] text-white pt-12 pb-10 md:pt-20 md:pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
              Lifestyle & Wellness Packages in India
            </h1>
            <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Curated Ayurveda packages for preventive health, healthy aging,
              metabolism support, emotional balance, and long-term vitality.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow text-left">
                  <h3
                    className="text-lg font-bold text-[#2C4E5A] mb-2 leading-tight min-h-[2.5rem] md:min-h-[1.6rem] flex items-start"
                  >
                    {program.name}
                  </h3>

                  {/* Rating Row Only */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-black text-foreground">({program.rating} rating)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {program.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#E5E7E2]/60 text-[#2C4E5A] text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed md:leading-[1.5] text-foreground/80 mb-4">
                    {program.description}
                  </p>
                  {/* Buttons Container */}
                  <div className="mt-2 md:mt-auto pt-2 md:pt-3 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        className="w-full bg-[#E0E5DF] hover:bg-[#FF7A28] hover:text-white active:bg-[#FF7A28] active:text-white text-[#2C4E5A] font-bold py-4 md:py-5 rounded-xl transition-all duration-300 text-sm h-auto border-none shadow-none"
                        onClick={() => window.open(program.link, "_blank", "noopener,noreferrer")}
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => setQuoteModalOpen(true)}
                        className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-4 md:py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 hover:scale-[1.02] text-sm h-auto border-none"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default LifestyleAndWellness;


