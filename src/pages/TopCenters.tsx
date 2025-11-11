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
      name: "Kerala Ayurveda Wellness Center",
      city: "Kochi",
      description: "Premier Ayurvedic center specializing in traditional Panchakarma detox and rejuvenation therapies",
      specialties: ["Panchakarma", "Shirodhara", "Stress Relief"],
      rating: 4.9,
      reviews: 234,
      priceRange: "$$$",
      image: centerKerala,
      slug: undefined,
    },
    {
      name: "Goa Holistic Healing Retreat",
      city: "Goa",
      description: "Beachside wellness center offering comprehensive Ayurvedic treatments with yoga integration",
      specialties: ["Weight Management", "Detox", "Yoga Therapy"],
      rating: 4.8,
      reviews: 189,
      priceRange: "$$",
      image: centerGoa,
      slug: undefined,
    },
    {
      name: "Bangalore Wellness Institute",
      city: "Bangalore",
      description: "Modern facility combining ancient Ayurvedic wisdom with contemporary healthcare practices",
      specialties: ["Chronic Disease", "Joint Care", "Skin Treatments"],
      rating: 4.7,
      reviews: 156,
      priceRange: "$$$",
      image: centerBangalore,
      slug: undefined,
    },
    {
      name: "Rishikesh Ayurvedic Spa",
      city: "Rishikesh",
      description: "Himalayan retreat center focused on spiritual healing and traditional Ayurvedic therapies",
      specialties: ["Stress Relief", "Meditation", "Panchakarma"],
      rating: 4.9,
      reviews: 201,
      priceRange: "$$",
      image: centerRishikesh,
      slug: undefined,
    },
    {
      name: "Mumbai Ayurveda Clinic",
      city: "Mumbai",
      description: "Urban wellness center providing authentic Ayurvedic treatments for busy professionals",
      specialties: ["Stress Management", "Hair Care", "Detox"],
      rating: 4.6,
      reviews: 143,
      priceRange: "$$$",
      image: centerMumbai,
      slug: undefined,
    },
    {
      name: "Chennai Traditional Healing",
      city: "Chennai",
      description: "Heritage Ayurvedic center with generational expertise in classical treatments",
      specialties: ["Women's Health", "Fertility", "Chronic Disease"],
      rating: 4.8,
      reviews: 178,
      priceRange: "$$",
      image: centerChennai,
      slug: undefined,
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
                  <MapPin size={14} /> {center.city}, India
                </p>
                
                <p className="text-foreground text-sm mb-4">{center.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {center.specialties.map((specialty, i) => (
                    <span key={i} className="bg-secondary/30 text-xs px-2 py-1 rounded-full text-secondary-foreground">
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
                    onClick={() => navigate(center.slug ? `/centers/${center.slug}` : `/centers/${center.city.toLowerCase()}`)}
                  >
                    {center.slug ? "View Details" : "View Centers"}
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
