import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const PanchakarmaDetox = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      name: "21-Day Panchakarma Detox Program in India",
      description: "A comprehensive 21-day immersive Panchakarma plan designed for wellness tourists seeking a true reset. Experience authentic therapies aimed at deep internal cleansing, stress removal, and overall physical and mental rejuvenation.",
      image: "/Program Images/21-day-detox.png",
      link: "/ayurveda-packages/21-day-panchakarma-detox-program-in-india",
      rating: 4.6,
      reviews: 480,
      tags: ["21 Days", "Full Body Detox", "Vamana/Virechana", "Stress Reset"]
    },
    {
      name: "28-Day Panchakarma Healing Program in India",
      description: "An intensive healing program focused on deep therapeutic cleansing and recovery from chronic ailments. Carefully monitored by expert Vaidyas, this program uses classic Ayurvedic protocols to address root causes of diseases.",
      image: "/Program Images/28-day-healing.png",
      link: "/ayurveda-packages/28-day-panchakarma-healing-program-in-india",
      rating: 4.7,
      reviews: 320,
      tags: ["28 Days", "Chronic Recovery", "Deep Cleansing", "Clinical Care"]
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
              Panchakarma Detox Packages in India
            </h1>
            <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience the ancient, deeply restorative science of Panchakarma. Discover our carefully curated detoxification and healing programs designed to cleanse the body, balance the mind, and enhance longevity in India's finest wellness centers.
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
                        onClick={() => window.open(program.link || "/top-ayurvedic-centers-in-india", "_blank", "noopener,noreferrer")}
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

export default PanchakarmaDetox;

