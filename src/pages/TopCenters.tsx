import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Star } from "lucide-react";
import centerKerala from "@/assets/center-kerala.jpg";
import centerGoa from "@/assets/center-goa.jpg";
import centerBangalore from "@/assets/center-bangalore.jpg";
import centerRishikesh from "@/assets/center-rishikesh.jpg";
import centerMumbai from "@/assets/center-mumbai.jpg";
import centerChennai from "@/assets/center-chennai.jpg";

const TopCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedTreatment, setSelectedTreatment] = useState("All");

  const cities = ["All", "Goa", "Bangalore", "Kochi", "Mumbai", "Delhi", "Rishikesh", "Chennai"];
  
  const treatments = [
    "All",
    "Panchakarma",
    "Abhyanga",
    "Shirodhara",
    "Kati Basti",
    "Stress & Wellness",
    "Weight Management",
  ];

  const navigate = useNavigate();

  const centers = [
    {
      name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
      city: "Bangalore",
      description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm",
      specialties: ["Panchakarma", "Yoga", "Naturopathy"],
      rating: 4.9,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/SOUKYA/27 soukya.jpg",
      slug: "bangalore/soukya" as string | undefined,
    },
    {
      name: "Somatheeram Ayurvedic Health Resort",
      city: "Kerala",
      description: "World's first Ayurveda retreat offering authentic treatments with German precision and serene beachside location.",
      specialties: ["Panchakarma", "Rejuvenation", "Stress Relief"],
      rating: 4.9,
      reviews: 320,
      priceRange: "$$$",
      image: "/Center Images/somatheeram/Somatheeram 01.jpg",
      slug: "kerala/somatheeram" as string | undefined,
    },
    {
      name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
      city: "Rishikesh",
      description:
        "Veda5 is one of India’s most premium Ayurveda & Yoga wellness retreats — combining luxury, nature, and authentic healing. From Himalayan views in Rishikesh to a serene beachfront retreat in Kerala & Goa, Veda5 offers world-class Ayurveda, detox therapies, and holistic rejuvenation.",
      specialties: [
        "Panchakarma",
        "Rejuvenation",
        "Stress Relief",
        "Weight Management",
        "Yoga",
        "Meditation",
        "Naturopathy",
      ],
      rating: 4.9,
      reviews: 420,
      priceRange: "$$$$",
      image: "/Center Images/veda5/veda5-1.jpg",
      slug: "veda5",
      badgeColor: "#D9E3DC",
      locationText: "Rishikesh, Kerala, Goa, India",
    },
    {
      name: "Namaste Dwaar – Countryside Wellness Retreat",
      city: "Delhi",
      description:
        "Peaceful farmhouse sanctuary near NCR offering authentic Ayurvedic therapies, farm-fresh sattvic food, and compassionate care.",
      specialties: [
        "Panchakarma",
        "Stress & Sleep",
        "Weight Management",
        "Immunity",
        "Skin & Beauty",
      ],
      rating: 4.8,
      reviews: 180,
      priceRange: "$$$",
      image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
      slug: "delhi/namastedwaar" as string | undefined,
      badgeColor: "#EDE8D0",
      locationText: "Near NCR, Delhi, India",
    },
    {
      name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
      city: "Kerala",
      description:
        "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Detox",
        "Yoga & Meditation",
        "Stress & Wellness",
        "Wellness & Rejuvenation",
        "Naturopathy",
        "River-view Stay",
      ],
      rating: 4.8,
      reviews: 220,
      priceRange: "$$$",
      image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
      locationText: "Kannur, Kerala, India",
      slug: "kerala/kairali-heritage" as string | undefined,
    },
    {
      name: "Agni Ayurvedic Village Resort",
      city: "Kerala",
      description:
        "A tranquil wellness hideaway in the heart of Kerala, Agni Ayurvedic Village Resort blends ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it’s a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies. Expect genuine care, nurturing treatments, and an atmosphere that feels like coming home to yourself.",
      specialties: [
        "Panchakarma",
        "Rejuvenation",
        "Stress Relief",
        "Yoga & Meditation",
      ],
      rating: 4.7,
      reviews: 190,
      priceRange: "$$$",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      locationText: "Kerala, India",
      slug: "kerala/agni-ayurvedic-village" as string | undefined,
    },
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Ayurvedic Centers</h1>
          <p className="text-lg text-white/90">
            Discover India's finest Ayurvedic centers and wellness retreats
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Country</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="India">India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">City / Region</label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Treatment</label>
              <Select value={selectedTreatment} onValueChange={setSelectedTreatment}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  {treatments.map((treatment) => (
                    <SelectItem key={treatment} value={treatment}>
                      {treatment}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Sort By</label>
              <Select defaultValue="rating">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centers
            .filter((center) => {
              const cityMatch = selectedCity === "All" || center.city === selectedCity;
              const treatmentMatch = selectedTreatment === "All" || center.specialties.includes(selectedTreatment);
              return cityMatch && treatmentMatch;
            })
            .map((center, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="w-full aspect-video overflow-hidden">
                <img 
                  src={center.image}
                  alt={center.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">{center.name}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                  <MapPin size={14} /> {(center as { locationText?: string }).locationText || `${center.city}, India`}
                </p>
                
                <p className="text-foreground text-sm mb-4">{center.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {center.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="bg-secondary/30 text-xs px-2 py-1 rounded-full text-secondary-foreground"
                      style={(center as { badgeColor?: string }).badgeColor ? { backgroundColor: (center as { badgeColor?: string }).badgeColor } : undefined}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-semibold">{center.rating}</span>
                    <span className="text-xs text-muted-foreground">({center.reviews} reviews)</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{center.priceRange}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 font-semibold"
                    onClick={() => center.slug ? navigate(`/centers/${center.slug}`) : navigate("#")}
                  >
                    View Details
                  </Button>
                  <Button 
                    onClick={() => setQuoteModalOpen(true)}
                    className="flex-1 font-semibold"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      
      {/* Floating Quote Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 font-semibold"
      >
        <Phone size={20} />
        <span className="hidden md:inline">Get Free Quote</span>
      </button>
    </div>
  );
};

export default TopCenters;
