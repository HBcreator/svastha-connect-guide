import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Globe, Heart, Shield, Leaf, CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    document.title = "About My Vaidyam | Authentic Ayurveda Retreats in India";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover My Vaidyam, a trusted global platform with 20+ years of legacy connecting individuals to India's premier, authentic Ayurvedic healing centers.");
    }
  }, []);

  return (
    <div className="min-h-screen font-poppins bg-gray-50">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-[#2c4c4e]/95 z-10" />
        <img 
          src={aboutImage} 
          alt="Ayurvedic Healing Atmosphere" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium tracking-wider mb-6 border border-white/30 backdrop-blur-sm">
            OUR LEGACY & VISION
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Discover <span className="text-orange-200">My Vaidyam</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Empowering global wellness through India's most authentic, profound, and trusted Ayurvedic healing sanctuaries. With two decades of medical tourism legacy, we connect you to true holistic balance.
          </p>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-30 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-3 gap-8 divide-x divide-gray-100 max-w-4xl mx-auto border border-gray-100">
              <div className="text-center px-4">
                <p className="text-4xl font-bold text-primary mb-2">20+</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years Legacy</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Verified Centers</p>
              </div>
              <div className="text-center px-4">
                <p className="text-4xl font-bold text-primary mb-2">10k+</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Lives Touched</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* spacer for floating stats on desktop */}
      <div className="h-0 md:h-24"></div>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              A Journey Rooted in Trust & Healing
            </h2>
            <div className="w-20 h-1 bg-orange-300 mb-8 rounded-full"></div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At <strong className="text-gray-800">My Vaidyam</strong>, we draw upon over 20 years of robust experience in global healthcare coordination. What began as a mission to guide international patients toward trusted medical interventions has blossomed into a profound dedication to holistic well-being.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We recognized a profound global need for preventive, natural healing. India, the birthplace of Ayurveda, offers unparalleled restorative wisdom. Today, we bridge the gap between global seekers and India's finest, NABH-accredited Ayurvedic retreats, ensuring your journey to balance is authentic, transparent, and deeply personalized.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Curated selection of premium wellness resorts and hospitals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Guidance from expert Ayurvedic doctors (BAMS/MD)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Unwavering commitment to patient safety and satisfaction</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src={aboutImage} 
              alt="Ayurvedic Natural Healing Elements" 
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
            {/* Mobile Stats Box */}
            <div className="md:hidden mt-8 grid grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg relative z-20">
               <div className="text-center">
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="text-[10px] text-gray-500 font-medium uppercase">Years</p>
              </div>
              <div className="text-center border-x border-gray-100">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-[10px] text-gray-500 font-medium uppercase">Centers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">10k+</p>
                <p className="text-[10px] text-gray-500 font-medium uppercase">Guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The My Vaidyam Difference
            </h2>
            <p className="text-gray-500 text-lg">
              We stand apart through our unwavering commitment to authenticity, empathy, and your holistic transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Value 1 */}
            <div className="bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Authentic Healing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strictly partner with institutions that adhere to classical Ayurvedic texts, ensuring uncompromised, pure treatments.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Verified Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From NABH accreditations to rigorous on-site hygiene audits, we prioritize your safety and medical security above all.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Care</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your body is unique. We facilitate bespoke consultations so your therapy, diet, and lifestyle plan are tailored exclusively for you.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From visa assistance and airport transfers to post-treatment follow-ups, our end-to-end concierge service supports you 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Begin Your Wellness Transformation
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Let the experts at My Vaidyam curate a life-changing Ayurvedic retreat tailored entirely to your physical and spiritual needs.
          </p>
          <Button 
            onClick={() => setQuoteModalOpen(true)}
            size="lg"
            className="h-14 bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      
      {/* Floating Quote Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white hover:bg-orange-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all z-40 flex items-center gap-2 font-semibold group"
      >
        <Phone size={20} className="group-hover:animate-bounce" />
        <span className="hidden md:inline">Get Free Quote</span>
      </button>
    </div>
  );
};

export default About;
