import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const LifestyleAndWellness = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      category: "Lifestyle & Wellness",
      name: "Anti-Aging Ayurveda Program",
      duration: "21 Days",
      targetAudience: "Luxury wellness travellers",
      keyFocus: "Cellular rejuvenation",
      description:
        "A physician-guided 21-day anti-aging Ayurveda program focused on deep detox, cellular rejuvenation, skin vitality, metabolic balance, stress recovery, and graceful long-term wellness.",
      image: "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/1.jpg",
      link: "/ayurvedic-programs/lifestyle-and-wellness/anti-aging-ayurveda-program-in-india",
    },
    {
      category: "Lifestyle & Wellness",
      name: "Ayurvedic Weight Loss Program in India",
      duration: "21 Days",
      targetAudience: "Weight management patients",
      keyFocus: "Metabolism & fat reduction",
      description: "A 21-day physician-supervised Ayurvedic weight loss program combining Panchakarma detox, Udvarthanam, Lekhana Basti, herbal medicines, and dosha-specific meals for sustainable metabolism reset.",
      image: "/Ayurvedic Programs/Images/Ayurvedic-Weight-Loss-Program-India/1.webp",
      link: "/ayurvedic-programs/lifestyle-and-wellness/ayurvedic-weight-loss-program-in-india",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Lifestyle & Wellness Programs
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Curated Ayurvedic programs for preventive health, healthy aging,
              metabolism support, emotional balance, and long-term vitality.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.name}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
              >
                <div className="w-full aspect-video overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary font-poppins line-clamp-2">
                      {program.name}
                    </h3>
                  </div>

                  <p className="text-foreground text-sm mb-4 line-clamp-3">
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-secondary/30 text-xs px-2 py-1 rounded-full text-secondary-foreground">
                      {program.duration}
                    </span>
                    <span className="bg-secondary/30 text-xs px-2 py-1 rounded-full text-secondary-foreground">
                      {program.keyFocus}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-auto mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <span className="text-muted-foreground mr-1">Category:</span>
                      <span className="text-foreground font-semibold">{program.category}</span>
                    </div>
                  </div>

                  <div className="text-sm mb-4">
                    <span className="text-muted-foreground mr-1">Ideal For:</span>
                    <span className="font-semibold text-foreground">{program.targetAudience}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 font-semibold"
                      onClick={() => navigate((program as any).link)}
                    >
                      View Details
                    </Button>
                    <Button
                      className="flex-1 font-semibold"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
};

export default LifestyleAndWellness;
