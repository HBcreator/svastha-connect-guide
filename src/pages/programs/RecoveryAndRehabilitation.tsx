import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const RecoveryAndRehabilitation = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      category: "Recovery & Rehabilitation",
      name: "Post-Chemotherapy Rejuvenation Program in India",
      duration: "21 Days",
      targetAudience: "Post-chemotherapy supportive recovery",
      keyFocus: "Gentle, physician-coordinated support",
      description:
        "Gentle, physician-supervised Ayurvedic support to help rebuild comfort, appetite, and strength after chemotherapy has been completed — always alongside your oncology care and requiring oncologist clearance.",
      image: "/Ayurvedic Programs/Images/Post-Chemotherapy-Rejuvenation-Program-India/post-chemo-hero.jpg",
      link: "/ayurveda-packages/post-chemotherapy-rejuvenation-program-in-india",
      rating: 4.8,
      reviews: 95,
      tags: ["21 Days", "Supportive Care", "Oncologist-Cleared", "Gentle Therapies"]
    },
    {
      category: "Recovery & Rehabilitation",
      name: "Cancer Recovery Support Program in India",
      duration: "21 Days",
      targetAudience: "Cancer recovery & remission support",
      keyFocus: "Comfort, resilience & emotional support",
      description:
        "Gentle, physician-supervised Ayurvedic support for comfort and resilience during cancer recovery — a supportive complement to your ongoing oncology treatment, never a replacement, requiring oncologist clearance.",
      image: "/Ayurvedic Programs/Images/Cancer-Recovery-Support-Program-India/cancer-recovery-hero.jpg",
      link: "/ayurveda-packages/cancer-recovery-support-program-in-india",
      rating: 4.8,
      reviews: 80,
      tags: ["21 Days", "Supportive Care", "Oncologist-Cleared", "Emotional Support"]
    },
    {
      category: "Recovery & Rehabilitation",
      name: "Post-Surgery Rehabilitation Program in India",
      duration: "14 Days",
      targetAudience: "Post-surgical supportive rehabilitation",
      keyFocus: "Mobility & strength rebuilding",
      description:
        "Gentle, physician-supervised Ayurvedic support to rebuild mobility and strength after surgery, coordinated alongside your prescribed physiotherapy and requiring your surgeon's clearance.",
      image: "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/generated-rehab-1.png",
      link: "/ayurveda-packages/post-surgery-rehabilitation-program-in-india",
      rating: 4.8,
      reviews: 110,
      tags: ["14 Days", "Supportive Care", "Surgeon-Cleared", "Mobility Rebuilding"]
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
              Recovery & Rehabilitation Packages in India
            </h1>
            <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Gentle, physician-supervised supportive care for post-treatment and post-surgical recovery — always coordinated alongside your existing medical team, never a replacement for it.
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

export default RecoveryAndRehabilitation;
