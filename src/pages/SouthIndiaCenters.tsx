import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SouthIndiaCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const centers = [
    {
      name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
      city: "Bangalore, India",
      description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm. Offering a holistic approach to wellness with personalized treatments guided by experienced practitioners in a serene, nature-rich environment. Experience authentic healing through a blend of traditional wisdom and modern medical standards for deep rejuvenation of body, mind, and spirit.",
      rating: 4.9,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/SOUKYA/top center Thumb.jpg",
      slug: "bangalore/soukya",
    },
    {
      name: "AyurvedaGram Heritage Wellness Centre",
      city: "Bangalore, India",
      description: "Immerse yourself in the authentic spirit of Ayurveda at AyurvedaGram Heritage Wellness Centre, a globally recognized destination for traditional Ayurvedic healing. Rooted in classical Ayurvedic principles and set within a serene heritage village, AyurvedaGram offers holistic therapies guided by experienced Vaidyas. Each treatment is personalized to restore balance of body, mind, and spirit, promoting long-lasting wellness through time-tested natural healing practices.",
      rating: 4.7,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/AyurvedaGram/Thumb.jpg",
      slug: "bangalore/ayurvedagram",
    },
    {
      name: "Indus Valley Ayurvedic Centre",
      city: "Mysore, India",
      description: "Indus Valley Ayurvedic Centre (IVAC) is a luxury Ayurvedic healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards through personalized programs for body, mind, and spirit. Set against the backdrop of the Chamundi Hills, the center provides a tranquil sanctuary for deep detoxification and rejuvenation. Expert doctors and therapists ensure a comprehensive healing experience tailored to individual health needs.",
      rating: 4.8,
      reviews: 450,
      priceRange: "$$$$",
      image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
      slug: "mysore/indus-valley-ayurvedic-centre",
    },
    {
      name: "Shathayu Ayurveda Yoga Retreat",
      city: "Udupi, India",
      description: "Immerse yourself in a serene coastal sanctuary dedicated to authentic Ayurvedic healing and yogic living. Shathayu Ayurveda Yoga Retreat blends classical Ayurvedic therapies with structured yoga programs, offering a holistic pathway to detoxification, rejuvenation, and lifestyle transformation. Guided by experienced Vaidyas and yoga practitioners, the retreat emphasizes personalized treatment protocols in a peaceful, nature-rich environment—ideal for deep restoration.",
      rating: 4.8,
      reviews: 380,
      priceRange: "$$$",
      image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
      slug: "udupi/shathayu-ayurveda-yoga-retreat",
    },
    {
      name: "Somatheeram Ayurvedic Health Resort",
      city: "Kerala, India",
      description: "World's first Ayurveda retreat offering authentic treatments with German precision and serene beachside location.",
      rating: 4.9,
      reviews: 320,
      priceRange: "$$$",
      image: "/Center Images/somatheeram/Somatheeram 01.jpg",
      slug: "kerala/somatheeram",
    },
    {
      name: "Agni Ayurvedic Village Resort",
      city: "Kerala, India",
      description: "A tranquil wellness hideaway in the heart of Kerala, Agni Ayurvedic Village Resort blends ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it is a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies.",
      rating: 4.7,
      reviews: 190,
      priceRange: "$$$",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      slug: "kerala/agni-ayurvedic-village",
    }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#2C4E5A] text-white pt-10 pb-7 md:pt-20 md:pb-16">
        <div className="container mx-auto px-4 max-[380px]:px-2">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[17px] sm:text-lg md:text-4xl lg:text-5xl font-bold leading-[1.35] md:leading-[1.75] animate-fade-in px-2 md:px-4">
              <span className="block whitespace-nowrap">Top Ayurvedic Centers and Hospitals in</span>
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Bangalore, Hyderabad, Chennai & South India.</span>
            </h2>
            <p className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap" style={{ animationDelay: '200ms' }}>
              Discover India's finest Ayurvedic centers and wellness retreats across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 pt-6 pb-16 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col">
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#2C4E5A] mb-2 line-clamp-2 leading-tight min-h-[2.5rem]">
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

                <p className="text-sm leading-relaxed text-foreground/80 mb-4 line-clamp-3 flex-grow">
                  {center.description}
                </p>

                {/* Buttons Container */}
                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      className="w-full font-bold py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                      onClick={() => navigate(`/centers/${center.slug}`)}
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 hover:scale-[1.02] text-sm"
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

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default SouthIndiaCenters;
