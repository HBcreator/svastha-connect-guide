import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const IntegratedRetreat = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      category: "Integrated Retreat",
      name: "Ayurveda + Yoga Retreat Program in India",
      duration: "14–21 Days",
      targetAudience: "Mind-body wellness seekers",
      keyFocus: "Holistic healing & physical balance",
      description:
        "A transformative 14-21 day retreat that seamlessly integrates classical Ayurvedic therapies with daily yogic practices. Designed for those seeking deep mental clarity, physical flexibility, and a complete spiritual reset through personalized Shodhana protocols and advanced Hatha Yoga.",
      image: "/Program Images/ayurveda-yoga-retreat.png",
      link: "/ayurveda-packages/ayurvedic-yoga-retreat-program-in-india",
      rating: 4.9,
      reviews: 195,
      tags: ["14–21 Days", "Ayurveda + Yoga", "Spiritual Reset", "Holistic Healing"]
    },
    {
      category: "Integrated Retreat",
      name: "Ayurveda Digital Detox Retreat in India",
      duration: "14–21 Days",
      targetAudience: "Tech-stressed professionals",
      keyFocus: "Mindfulness, renewal & nervous system calm",
      description:
        "Specifically designed for corporate leaders and professionals, this 14-21 day program enforces a structured digital sabbatical. Focused on dampening the sympathetic nervous system through cooling Ayurveda treatments like Shirodhara, Takradhara, and guided forest bathing (Shinrin-yoku) in a serene nature-rich setting.",
      image: "/Program Images/digital-detox-retreat.png",
      link: "/ayurveda-packages/ayurvedic-digital-detox-retreat-in-india",
      rating: 4.8,
      reviews: 142,
      tags: ["14–21 Days", "Digital Detox", "Mindfulness", "Nervous System Recovery"]
    },
    {
      category: "Integrated Retreat",
      name: "Luxury Ayurveda Retreat Program in India",
      duration: "14 Days",
      targetAudience: "Privacy-focused, five-star wellness travelers",
      keyFocus: "Indulgent, fully personalized rejuvenation",
      description:
        "A fully bespoke 14-day retreat at India's finest five-star and heritage wellness properties. No disease diagnosis required — just a private Vaidya, a personalized itinerary of signature therapies like Abhyanga Royale and Shirodhara, and complete privacy from arrival to departure.",
      image: "/Ayurvedic Programs/Images/Luxury-Ayurveda-Retreat-Program-India/luxury-hero-new.png",
      link: "/ayurveda-packages/luxury-ayurveda-retreat-program-in-india",
      rating: 4.9,
      reviews: 210,
      tags: ["14 Days", "Five-Star Stay", "Private Villa", "Bespoke Itinerary"]
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-[#E5E7E2] flex flex-col">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#2C4E5A] text-white pt-12 pb-10 md:pt-20 md:pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
              Integrated Retreat Packages in India
            </h1>
            <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience the synergy of ancient healing sciences. Our integrated retreats combine Ayurveda, Yoga, and Mindfulness to provide a multi-dimensional reset for the modern individual.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 justify-center">
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

                  {/* Rating Row */}
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

export default IntegratedRetreat;

