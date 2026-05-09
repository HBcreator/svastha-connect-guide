import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const BeautyAndRejuvenation = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      name: "Ayurvedic Skin Rejuvenation Therapy in India",
      description: "A holistic clinical program focusing on deep tissue purification and facial rejuvenation through traditional Ayurvedic therapies like Mukha Lepam, Navara Mukhabhyanga, and specialized herbal steam. Designed to restore natural skin glow, improve elasticity, and address chronic skin conditions at the root.",
      image: "/program-images/skin-rejuvenation.png",
      link: "/ayurvedic-programs/beauty-and-rejuvenation/skin-rejuvenation-treatment-in-india",
      rating: 4.9,
      reviews: 245,
      tags: ["7-14 Days", "Skin Glow", "Mukha Lepam", "Detox"]
    },
    {
      name: "Hair Loss Treatment Program in India",
      description: "A specialized Ayurvedic protocol targeting the underlying causes of hair thinning and loss (Khalitya). Combines Shirodhara, Nasya, and scalp-nourishing therapies like Shirolepa and Takradhara with personalized herbal supplements to stimulate follicle growth and restore scalp health.",
      image: "/program-images/hair-loss.png",
      link: "/ayurvedic-programs/beauty-and-rejuvenation/hair-loss-in-india",
      rating: 4.7,
      reviews: 312,
      tags: ["14-21 Days", "Hair Growth", "Shirodhara", "Scalp Health"]
    },
    {
      name: "Ayurvedic Beauty & Detox Retreat in India",
      description: "A comprehensive beauty and rejuvenation program that merges internal detoxification with external pampering. Includes whole-body Udvarthanam (herbal scrub), Pizhichil (oil bath), and specialized beauty rituals to cleanse the blood, tone the body, and refresh the spirit for a radiant transformation.",
      image: "/program-images/beauty-detox.png",
      link: "/ayurvedic-programs/beauty-and-rejuvenation/ayurvedic-beauty-detox-retreat-in-india",
      rating: 4.9,
      reviews: 188,
      tags: ["10-14 Days", "Full Body Detox", "Radiant Glow", "Anti-Aging"]
    },
  ];

  return (
    <div className="min-h-screen font-poppins bg-[#E5E7E2] flex flex-col">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#2C4E5A] text-white pt-12 pb-10 md:pt-20 md:pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Beauty and Rejuvenation Programs in India
            </h1>
            <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience the ancient secrets of Ayurvedic beauty. Our rejuvenation programs combine clinical detoxification with specialized therapies to restore your natural radiance, improve skin health, and revitalize your entire being.
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
                <Link to={program.link} className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden block">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </Link>

                {/* Content Section */}
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow text-left">
                  <Link to={program.link}>
                    <h3
                      className="text-lg font-bold text-[#2C4E5A] mb-2 leading-tight min-h-[2.5rem] md:min-h-[1.6rem] flex items-start hover:text-[#FF7A28] transition-colors"
                    >
                      {program.name}
                    </h3>
                  </Link>

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
                      <Link 
                        to={program.link}
                        className="w-full bg-[#E0E5DF] hover:bg-[#FF7A28] hover:text-white active:bg-[#FF7A28] active:text-white text-[#2C4E5A] font-bold py-4 md:py-5 rounded-xl transition-all duration-300 text-sm h-auto border-none shadow-none flex items-center justify-center"
                      >
                        View Details
                      </Link>
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

export default BeautyAndRejuvenation;
