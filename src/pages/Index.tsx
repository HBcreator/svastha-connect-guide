import { useState } from "react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";
import centerKerala from "@/assets/center-kerala.jpg";
import centerGoa from "@/assets/center-goa.jpg";
import centerBangalore from "@/assets/center-bangalore.jpg";

const Index = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const featuredCenters = [
    {
      name: "Kerala Ayurveda Wellness Center",
      city: "Kochi, Kerala",
      description: "Traditional Panchakarma and rejuvenation therapies in serene backwaters",
      specialties: ["Panchakarma", "Shirodhara", "Stress Relief"],
      rating: 4.9,
      priceRange: "$$$",
      image: centerKerala,
    },
    {
      name: "Goa Holistic Healing Retreat",
      city: "Goa",
      description: "Beachside Ayurvedic spa with yoga and meditation programs",
      specialties: ["Weight Management", "Detox", "Yoga Therapy"],
      rating: 4.8,
      priceRange: "$$",
      image: centerGoa,
    },
    {
      name: "Bangalore Wellness Institute",
      city: "Bangalore, Karnataka",
      description: "Modern Ayurvedic center combining traditional wisdom with contemporary care",
      specialties: ["Chronic Disease", "Joint Care", "Skin Treatments"],
      rating: 4.7,
      priceRange: "$$$",
      image: centerBangalore,
    },
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Authentic Ayurvedic Centers & Healing Retreats
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              20 years of medical tourism experience — now guiding you to India's best Ayurvedic centers for personalized care
            </p>
            <Button 
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-card rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Search by treatment or condition..."
                className="pl-10"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="City or region in India..."
                className="pl-10"
              />
            </div>
            <Button className="font-semibold">Search Centers</Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Describe Your Condition</h3>
            <p className="text-muted-foreground">
              Tell us about your health concerns, goals, and preferences through our simple form
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">We Match Centers</h3>
            <p className="text-muted-foreground">
              Our experts connect you with the most suitable Ayurvedic centers for your needs
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Book & Travel</h3>
            <p className="text-muted-foreground">
              We handle all arrangements for a seamless healing journey to India
            </p>
          </div>
        </div>
      </section>

      {/* Featured Centers */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Featured Top Centers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredCenters.map((center, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${center.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{center.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin size={14} /> {center.city}
                  </p>
                  <p className="text-foreground mb-4">{center.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {center.specialties.map((specialty, i) => (
                      <span key={i} className="bg-secondary/30 text-xs px-2 py-1 rounded-full text-secondary-foreground">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{center.rating}</span>
                    </div>
                    <span className="text-muted-foreground">{center.priceRange}</span>
                  </div>
                  <Button className="w-full mt-4 font-semibold" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Choose Savastha Global?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex gap-4">
              <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">20 Years Experience</h3>
                <p className="text-muted-foreground">Decades of expertise in international medical tourism</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Verified Centers</h3>
                <p className="text-muted-foreground">Only trusted, authenticated Ayurvedic centers</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Personalized Care</h3>
                <p className="text-muted-foreground">Tailored recommendations for your unique needs</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">End-to-End Support</h3>
                <p className="text-muted-foreground">From consultation to post-treatment follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you to the perfect Ayurvedic center for your wellness goals
          </p>
          <Button 
            onClick={() => setQuoteModalOpen(true)}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
          >
            Get Free Consultation
          </Button>
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

export default Index;
