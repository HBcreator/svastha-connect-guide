import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DiseaseSpecific = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      name: "Ayurveda Treatment for Osteoarthritis",
      duration: "21–28 Days",
      targetAudience: "Chronic disease patients",
      keyFocus: "Joint pain & mobility",
      description: "A specialized Ayurvedic protocol designed specifically to manage Osteoarthritis. Focuses on strengthening the joints, reducing inflammation, pain management through authentic therapies like Janu Basti, and restoring mobility.",
      image: "/Program Images/osteoarthritis.png",
      link: "/ayurvedic-programs/disease-specific/osteoarthritis",
    },
    {
      name: "Ayurveda Treatment for Sciatica",
      duration: "21–28 Days",
      targetAudience: "Pain management patients",
      keyFocus: "Nerve & back pain relief",
      description: "A clinically supervised Ayurvedic program for sciatica (Gridhrasi) combining Kati Basti, Basti therapy, herbal medicines, and therapeutic yoga to relieve nerve compression, reduce shooting pain, and restore mobility — helping many patients avoid spinal surgery.",
      image: "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/1.webp",
      link: "/ayurvedic-programs/disease-specific/sciatica",
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
              Disease Specific Programs
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Explore targeted Ayurvedic treatments designed for chronic ailments. Our disease-specific programs combine intensive therapies, specialized diets, and herbal medicine to address root causes and provide long-term relief and healing.
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

export default DiseaseSpecific;
