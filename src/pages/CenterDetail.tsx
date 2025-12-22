import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import { useState } from "react";

const CenterDetail = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const { city, centerId } = useParams();

  // details for all centers (lookup by centerId param)
  const centersData: Record<string, {
    id: string;
    name: string;
    city: string;
    region: string;
    description: string;
    specialties: string[];
    rating: number;
    reviews: { text: string; source: string }[];
    highlights: string[];
    website: string;
    images: string[];
  }> = {
    "back-to-roots": {
      id: "back-to-roots",
      name: "Back to Roots Ayurveda Retreat",
      city: "Idukki",
      region: "Kerala",
      description: "Rediscover the roots of true healing at this serene lakeside sanctuary in Idukki. Guided by the wisdom of 4th generation Ayurvedic physicians, this NABH-accredited retreat offers authentic, classical Panchakarma in a pristine natural setting. Expect a deeply personal journey where the focus is on pure, undiluted Ayurveda.",
      specialties: ["Panchakarma", "Authentic Ayurveda", "Pain Management", "Stress Relief", "Lakeside Retreat"],
      rating: 4.9,
      reviews: [
        {
          text: "An amazing experience rediscovering authentic Ayurveda.",
          source: "Google Reviews"
        }
      ],
      highlights: [
        "4th generation Ayurvedic physicians",
        "NABH-accredited retreat",
        "Classical Panchakarma",
        "Pristine lakeside setting",
        "Focus on pure, undiluted Ayurveda"
      ],
      website: "#",
      images: [
        "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
        "/Center Images/Back to Roots Ayurveda Retreat/CTA.jpg"
      ]
    },
    veda5: {
      id: "veda5",
      name: "Veda5 Ayurveda & Yoga Retreat",
      city: "Goa",
      region: "North Goa",
      description: "They specialise in authentic classical Ayurvedic therapies & Retreats including Panchakarma, yoga & naturopathy integration.",
      specialties: ["Panchakarma", "Yoga", "Naturopathy", "Rejuvenation"],
      rating: 4.8,
      reviews: [
        {
          text: "Quiet, clean and well kept resort. Staff was very genuine, helpful and accommodating. We enjoyed the delicious vegetarian food and the ayurvedic treatments.",
          source: "vedafive.com"
        },
        {
          text: "The rooms and vegetarian food was amazing! Good quality yoga classes and ayurvedic spa. Happy, relaxed stay.",
          source: "Booking.com"
        }
      ],
      highlights: [
        "Strong retreat-feel with full wellness integration",
        "Diet, yoga, and accommodation integration",
        "Credible reviews and international standards",
        "Good for international/long-stay segment"
      ],
      website: "https://vedafive.com",
      images: ["/images/Goa/Ved5/1-Veda5.jpg", "/images/Goa/Ved5/2-Veda5.jpg", "/images/Goa/Ved5/3-veda5.jpg"]
    },
    ayurclinic: {
      id: "ayurclinic",
      name: "Ayurclinic Goa",
      city: "Goa",
      region: "North Goa",
      description: "Professional Ayurvedic treatment tailored to each individual, with locations in Arpora and Mandrem Beach. Services include doctor diagnosis and panchakarma programs.",
      specialties: ["Panchakarma", "Therapeutic Packages", "Personalized Treatment"],
      rating: 4.7,
      reviews: [
        {
          text: "The two weeks I spent in Goa under the care of Ayurclinic Goa were the most relaxing weeks I have ever spent.",
          source: "Tripadvisor"
        },
        {
          text: "Dr. Rohit's clinic is one of the best value places in town for medicine-based relaxing and rejuvenating Ayurveda.",
          source: "Tripadvisor"
        }
      ],
      highlights: [
        "Genuine Ayurvedic therapy with doctor consultation",
        "Multiple locations in North Goa",
        "Specialized 7-day therapeutic packages"
      ],
      website: "https://ayurclinicgoa.com",
      images: ["/images/Goa/Ayurclinic Goa/1.jpg", "/images/Goa/Ayurclinic Goa/2.jpg", "/images/Goa/Ayurclinic Goa/3.jpg"]
    }
  };

  const centerKey = (centerId || "").toLowerCase();
  const centerDetails = centersData[centerKey] || centersData["veda5"];

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary">{centerDetails.name}</h1>
            <p className="text-lg flex items-center gap-2">
              <MapPin className="text-primary" />
              {centerDetails.city}, {centerDetails.region}
            </p>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{centerDetails.rating}</span>
            </div>
          </div>
          <div className="flex justify-end items-start">
            <Button 
              size="lg" 
              onClick={() => setQuoteModalOpen(true)}
              className="font-semibold"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          {centerDetails.images.map((image, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <img 
                src={image} 
                alt={`${centerDetails.name} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground">{centerDetails.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {centerDetails.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-4">
                {centerDetails.reviews.map((review, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg">
                    <p className="italic mb-2">{review.text}</p>
                    <p className="text-sm text-muted-foreground">Source: {review.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card p-6 rounded-lg sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                {centerDetails.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button 
                  className="w-full font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
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

export default CenterDetail;