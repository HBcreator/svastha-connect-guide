import { useState } from "react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const goaCenters = [
  {
    id: "veda5",
    name: "Veda5 Ayurveda & Yoga Retreat",
    city: "Goa",
    region: "North Goa",
    description: "Authentic Ayurvedic retreat with Panchakarma, yoga and naturopathy integration.",
    specialties: ["Panchakarma", "Yoga", "Naturopathy"],
    rating: 4.8,
    reviews: 156,
    priceRange: "$$$",
    image: "/images/Goa/Ved5/1-Veda5.jpg",
  },
  {
    id: "ayurclinic",
    name: "Ayurclinic Goa",
    city: "Goa",
    region: "North Goa",
    description: "Professional Ayurvedic clinic with doctor-supervised Panchakarma programs (Arpora & Mandrem).",
    specialties: ["Panchakarma", "Therapeutic Packages"],
    rating: 4.7,
    reviews: 142,
    priceRange: "$$",
    image: "/images/Goa/Ayurclinic Goa/1.jpg",
  }
];

const LocationCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const { location } = useParams();

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Ayurvedic Centers in {location?.charAt(0).toUpperCase() + (location?.slice(1) || "")}</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goaCenters.map((center) => (
            <div key={center.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${center.image})` }} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{center.name}</h3>
                <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1"><MapPin size={14} /> {center.region}</p>
                <p className="text-foreground text-sm mb-4 line-clamp-2">{center.description}</p>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-semibold">{center.rating}</span>
                    <span className="text-xs text-muted-foreground">({center.reviews} reviews)</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{center.priceRange}</span>
                </div>

                <div className="flex gap-2">
                  <Link to={`/centers/${center.city.toLowerCase()}/${center.id}`} className="flex-1">
                    <Button variant="outline" className="w-full font-semibold">View Details</Button>
                  </Link>
                  <Button onClick={() => setQuoteModalOpen(true)} className="flex-1 font-semibold">Get Quote</Button>
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

export default LocationCenters;
