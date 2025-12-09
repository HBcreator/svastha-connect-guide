import { useState } from "react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Award, Globe, Heart, Shield } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Savastha Global</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Two decades of expertise connecting thousands worldwide to India's most trusted healing centers
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={aboutImage} 
                  alt="Our Professional Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-foreground mb-4">
                  At Savastha Global, we bring over 20 years of expertise in international medical tourism, 
                  connecting thousands of patients worldwide to India's most trusted hospitals and specialists.
                </p>
                <p className="text-foreground">
                  Building on that foundation of trust and care, we now extend our vision into the world of 
                  Ayurveda and holistic healing — helping people rediscover balance, wellness, and inner harmony 
                  through time-tested natural therapies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Mission
            </h2>
            
            <p className="text-lg text-foreground text-center mb-12">
              Our mission is simple — to make authentic Ayurvedic healing accessible and personalized. 
              We have collaborated with top Ayurvedic centers, wellness resorts, and spa retreats across India — 
              from the serene backwaters of Kerala to the peaceful beaches of Goa, and the rejuvenating wellness 
              hubs of Bangalore and Rishikesh.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <Heart className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-3">Personalized Care</h3>
                <p className="text-muted-foreground">
                  Every individual's healing journey is unique. That's why we take the time to understand your 
                  condition, preferences, and goals, then connect you with the most suitable Ayurvedic center or therapy.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md">
                <Shield className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-foreground mb-3">Trust & Experience</h3>
                <p className="text-muted-foreground">
                  With two decades of experience in global healthcare coordination, Savastha Global stands as 
                  your trusted partner for a more natural, balanced, and healthy life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Why Choose Savastha Global?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">20+ Years Experience</h3>
              <p className="text-muted-foreground">
                Decades of proven expertise in international medical tourism and healthcare coordination
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Global Network</h3>
              <p className="text-muted-foreground">
                Verified partnerships with India's finest Ayurvedic centers and wellness retreats
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Holistic Support</h3>
              <p className="text-muted-foreground">
                End-to-end assistance from consultation to booking and post-treatment follow-up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you seek rejuvenation, stress relief, detoxification, or long-term wellness, our team 
              ensures a seamless experience. We understand that your healing journey is personal, and we're 
              committed to making it as smooth and effective as possible.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div>
                <h3 className="font-bold text-xl mb-2">Authenticity</h3>
                <p className="text-white/80">Only verified, traditional Ayurvedic centers</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Transparency</h3>
                <p className="text-white/80">Clear pricing, honest recommendations</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Support</h3>
                <p className="text-white/80">24/7 assistance throughout your journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center bg-card rounded-lg shadow-lg p-12">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experienced team guide you to the perfect Ayurvedic solution for your wellness needs
          </p>
          <Button 
            onClick={() => setQuoteModalOpen(true)}
            size="lg"
            className="font-semibold text-lg px-8"
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

export default About;
