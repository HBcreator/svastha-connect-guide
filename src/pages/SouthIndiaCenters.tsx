import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SouthIndiaCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const centers = [
    {
      name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
      city: "Bangalore, India",
      description:
        "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm. The center offers a holistic approach to wellness with personalized treatments guided by experienced practitioners in a serene, nature-rich environment. Guests benefit from preventive care, restorative therapies, and integrated healing plans designed to improve long-term physical and mental well-being.",
      rating: 4.9,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/SOUKYA/top center Thumb.jpg",
      slug: "bangalore/soukya",
    },
    {
      name: "AyurvedaGram Heritage Wellness Centre",
      city: "Bangalore, India",
      description:
        "AyurvedaGram Heritage Wellness Centre is a globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village, the center provides personalized therapies guided by experienced Vaidyas and supported by therapeutic yoga, mindful routines, and sattvic nutrition. Each program is tailored to restore balance of body and mind through time-tested, evidence-informed care.",
      rating: 4.7,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/AyurvedaGram/Thumb.jpg",
      slug: "bangalore/ayurvedagram",
    },
    {
      name: "Indus Valley Ayurvedic Centre",
      city: "Mysore, India",
      description:
        "Indus Valley Ayurvedic Centre (IVAC) is a luxury retreat in Mysuru blending classical Kerala Ayurveda with modern wellness standards. Located near the Chamundi Hills, it offers personalized programs for detoxification, stress reduction, pain management, and rejuvenation under expert medical guidance. The center's quiet setting and structured therapies support deep healing for body, mind, and lifestyle renewal.",
      rating: 4.8,
      reviews: 450,
      priceRange: "$$$$",
      image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
      slug: "mysore/indus-valley-ayurvedic-centre",
    },
    {
      name: "Shathayu Ayurveda Yoga Retreat",
      city: "Udupi, India",
      description:
        "Shathayu Ayurveda Yoga Retreat is a serene coastal sanctuary focused on authentic Ayurveda and yogic living. The retreat combines classical therapies with guided yoga, meditation, and lifestyle coaching to support detoxification, resilience, and sustainable health improvement. Led by experienced doctors and wellness practitioners, each treatment plan is personalized for restorative outcomes in a peaceful natural environment.",
      rating: 4.8,
      reviews: 380,
      priceRange: "$$$",
      image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
      slug: "udupi/shathayu-ayurveda-yoga-retreat",
    },
    {
      name: "Somatheeram Ayurvedic Health Resort",
      city: "Kerala, India",
      description:
        "Somatheeram Ayurvedic Health Resort is one of Kerala's most recognized wellness destinations, known for authentic Ayurveda in a peaceful coastal setting. The center offers personalized consultations, classical Panchakarma therapies, rejuvenation treatments, yoga, and guided lifestyle programs designed for long-term health improvement. With experienced doctors and structured care pathways, guests receive focused support for detoxification, recovery, and holistic balance.",
      rating: 4.9,
      reviews: 320,
      priceRange: "$$$",
      image: "/Center Images/somatheeram/Somatheeram 01.jpg",
      slug: "kerala/somatheeram",
    },
    {
      name: "Agni Ayurvedic Village Resort",
      city: "Kerala, India",
      description:
        "Agni Ayurvedic Village Resort is a calm wellness retreat in Kerala that combines traditional Ayurvedic healing with a nature-led restorative environment. The center focuses on personalized plans including Panchakarma, detox therapies, stress management, and preventive wellness routines based on each guest's health profile. Supported by trained therapists and Ayurveda specialists, Agni offers a grounded healing journey for recovery, stability, and lifestyle transformation.",
      rating: 4.7,
      reviews: 190,
      priceRange: "$$$",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      slug: "kerala/agni-ayurvedic-village",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#2C4E5A] text-white pt-10 pb-7 md:pt-20 md:pb-8">
        <div className="container mx-auto px-4 max-[380px]:px-2">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[17px] sm:text-lg md:text-4xl lg:text-5xl font-bold leading-[1.35] md:leading-[1.75] animate-fade-in px-2 md:px-4">
              <span className="block whitespace-nowrap">Top Ayurvedic Centers and Hospitals in</span>
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Bangalore, Hyderabad, Chennai &amp; South India.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover India's finest Ayurvedic centers and wellness retreats across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 pt-4 pb-6 md:pt-8 md:pb-16">
        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {centers.map((center, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full">
                {/* Image Section */}
                <div className="relative aspect-[16/9.5] sm:aspect-video md:aspect-[16/8.2] overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#2C4E5A] mb-2 line-clamp-2 md:line-clamp-1 leading-tight min-h-[2.5rem] md:min-h-[1.6rem]">
                    {center.name}
                  </h3>

                  {/* Location and Rating Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-foreground/80">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold">{center.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold text-foreground/90">{center.rating}</span>
                      <span className="text-[11px] text-foreground/60">({center.reviews})</span>
                    </div>
                  </div>

                <p
                  className={`text-sm leading-relaxed md:leading-[1.5] text-foreground/80 mb-1 md:mb-2 ${expandedCardIndex === index ? "" : "line-clamp-6 md:line-clamp-6"}`}
                >
                  {center.description}
                </p>
                {center.description.length > 260 && (
                  <button
                    type="button"
                    className="inline-flex text-xs font-semibold text-primary hover:text-primary/80 w-fit mb-2"
                    onClick={() =>
                      setExpandedCardIndex((prev) => (prev === index ? null : index))
                    }
                  >
                      {expandedCardIndex === index ? "Read Less" : "Read More"}
                    </button>
                  )}

                  {/* Buttons Container */}
                  <div className="mt-2 md:mt-auto pt-2 md:pt-3 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        className="w-full font-bold py-4 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                        onClick={() => navigate(`/centers/${center.slug}`)}
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => setQuoteModalOpen(true)}
                        className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-4 md:py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 hover:scale-[1.02] text-sm"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default SouthIndiaCenters;
