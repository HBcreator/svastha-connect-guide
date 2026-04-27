import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Activity } from "lucide-react";

const PanchakarmaDetox = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      name: "21-Day Panchakarma Detox Program",
      duration: "21 Days",
      targetAudience: "Wellness tourists",
      keyFocus: "Full body detox & rejuvenation",
      description: "A comprehensive 21-day immersive Panchakarma plan designed for wellness tourists seeking a true reset. Experience authentic therapies aimed at deep internal cleansing, stress removal, and overall physical and mental rejuvenation.",
      image: "/Program Images/21-day-detox.png",
      link: "/ayurvedic-programs/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india",
    },
    {
      name: "28-Day Panchakarma Healing Program",
      duration: "28 Days",
      targetAudience: "Chronic disease patients",
      keyFocus: "Deep cleansing & disease recovery",
      description: "An intensive healing program focused on deep therapeutic cleansing and recovery from chronic ailments. Carefully monitored by expert Vaidyas, this program uses classic Ayurvedic protocols to address root causes of diseases.",
      image: "/Program Images/28-day-healing.png",
      link: "/ayurvedic-programs/panchakarma-healing-programs/28-day-panchakarma-healing-program-in-india",
    },
    {
      name: "14-Day Panchakarma Detox Retreat",
      duration: "14 Days",
      targetAudience: "Wellness tourists",
      keyFocus: "Short detox program",
      description: "A profound yet shorter detox experience to eliminate toxins and restore elemental balance. Perfect for wellness seekers looking to integrate brief yet highly effective Ayurvedic care into their vacation.",
      image: "/Program Images/14-day-retreat.png",
    },
    {
      name: "7-Day Ayurvedic Rejuvenation Program",
      duration: "7 Days",
      targetAudience: "First-time visitors",
      keyFocus: "Introductory rejuvenation",
      description: "An excellent introduction to Ayurveda for beginners. Focuses on gentle therapies, relaxing massages, and basic detox to help you experience the restorative power of natural healing.",
      image: "/Program Images/7-day-rejuvenation.png",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Panchakarma Detox Programs in India
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Experience the ancient, deeply restorative science of Panchakarma.
              Discover our carefully curated detoxification and healing programs designed to cleanse the body, balance the mind, and enhance longevity.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="container mx-auto px-4 py-16 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
              >
                {/* Image */}
                <div className="w-full aspect-video overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
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
                      <span className="text-muted-foreground mr-1">Ideal For:</span>
                      <span className="text-foreground font-semibold">{program.targetAudience}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 font-semibold"
                      onClick={() => navigate((program as any).link || '/centers')}
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

export default PanchakarmaDetox;
