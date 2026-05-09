import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const DiseaseSpecific = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const programs = [
    {
      name: "Ayurveda Treatment for Osteoarthritis in India",
      description: "A specialized Ayurvedic protocol designed specifically to manage Osteoarthritis. Focuses on strengthening the joints, reducing inflammation, pain management through authentic therapies like Janu Basti, and restoring mobility through deep tissue nourishment and Vata correction.",
      image: "/Program Images/osteoarthritis.png",
      link: "/ayurvedic-programs/disease-specific/osteoarthritis",
      rating: 4.8,
      reviews: 420,
      tags: ["21-28 Days", "Joint Mobility", "Vata Balance", "Panchakarma"]
    },
    {
      name: "Ayurveda Treatment for Sciatica in India",
      description: "A clinically supervised Ayurvedic program for sciatica (Gridhrasi) combining Kati Basti, Basti therapy, herbal medicines, and therapeutic yoga to relieve nerve compression, reduce shooting pain, and restore mobility — helping many patients avoid spinal surgery.",
      image: "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/1.webp",
      link: "/ayurvedic-programs/disease-specific/sciatica",
      rating: 4.7,
      reviews: 380,
      tags: ["21-28 Days", "Nerve Relief", "Spine Health", "Kati Basti"]
    },
    {
      name: "Ayurveda Treatment for Rheumatoid Arthritis in India",
      description: "A comprehensive Ayurvedic protocol for Rheumatoid Arthritis (Amavata) focusing on deep detoxification to remove 'Ama' (toxins), reducing systemic inflammation, and restoring joint function through specialized therapies like Valuka Sweda, Basti, and clinical diet.",
      image: "/Program Images/rheumatoid-arthritis.png",
      link: "/ayurvedic-programs/disease-specific/rheumatoid-arthritis-treatment-in-india",
      rating: 4.6,
      reviews: 350,
      tags: ["21-28 Days", "RA Healing", "Detox (Ama)", "Immune Support"]
    },
    {
      name: "Ayurvedic Psoriasis Treatment Program in India",
      description: "A specialized skin-healing protocol targeting Psoriasis and chronic eczema. Focuses on blood purification (Raktamokshana), liver detox (Virechana), and specialized external therapies like Takradhara to achieve deep remission and skin clearance.",
      image: "/Treatments-images/Psoriasis Treatment.jpg",
      link: "/ayurvedic-programs/disease-specific/psoriasis-treatment-in-india",
      rating: 4.8,
      reviews: 290,
      tags: ["21-28 Days", "Skin Repair", "Raktamokshana", "Blood Detox"]
    },
    {
      name: "Ayurveda Treatment for Migraine in India",
      description: "A specialized Ayurvedic protocol for chronic headaches and Migraine. Focuses on balancing the nervous system, reducing vascular inflammation, and detoxifying the sensory organs through therapies like Shirodhara, Nasya, and specialized herbal cooling protocols.",
      image: "/program-images/ra-shirodhara.png",
      link: "/ayurvedic-programs/disease-specific/ayurvedic-treatment-for-migraine-in-india",
      rating: 4.7,
      reviews: 310,
      tags: ["14-21 Days", "Stress Relief", "Nasya Therapy", "Vata-Pitta"]
    },
    {
      name: "Ayurveda Treatment for Cervical Spondylosis in India",
      description: "A specialized Ayurvedic clinical program for Cervical Spondylosis focusing on Griva Basti, Pizhichil, and therapeutic neck strengthening protocols. Designed to relieve nerve compression, reduce stiffness, and restore natural cervical spine alignment without surgical intervention.",
      image: "/Program Images/cervical-spondylosis.png",
      link: "/ayurvedic-programs/disease-specific/cervical-spondylosis-treatment-in-india",
      rating: 4.8,
      reviews: 340,
      tags: ["14-21 Days", "Neck Health", "Griva Basti", "Spine Care"]
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
              Disease Specific Programs in India
            </h1>
            <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover India's finest residential Ayurvedic programs for chronic ailments. These targeted protocols combine intensive clinical therapies, specialized diets, and herbal medicine to address root causes for long-term recovery.
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
                      <span className="text-xs font-black text-[#2C4E5A]">({program.rating} rating)</span>
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
                        onClick={() => navigate(program.link)}
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

export default DiseaseSpecific;
