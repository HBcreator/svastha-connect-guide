import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import HeroSection from "@/components/home/HeroSection";
import MedicalFinder from "@/components/home/MedicalFinder";
import HomeProgramsSection from "@/components/home/HomeProgramsSection";
import HomeTreatmentsGuide from "@/components/home/HomeTreatmentsGuide";
import HomeProcessRoadmap from "@/components/home/HomeProcessRoadmap";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Sparkles, Award, ShieldCheck, HeartHandshake, Stethoscope, Hospital, CalendarCheck, HeartPulse, ArrowRight } from "lucide-react";

import centerKerala from "@/assets/center-kerala.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Index() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  // Top Centers Carousel State
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  // Flagship elite centers for static demonstration
  const featuredCenters = [
    {
      name: "Carnoustie Ayurveda & Wellness Resort",
      location: "Mararikulam, Kerala",
      desc: "Step into a sanctuary of authentic Ayurvedic healing at Carnoustie Ayurveda & Wellness Resort, an award-winning luxury destination.",
      specialties: ["Panchakarma", "Rejuvenation", "Anti-Aging"],
      rating: 4.7,
      price: "$$$$",
      path: "/centers/kerala/carnoustie",
      image: "/Center Images/Carnoustie Ayurveda/CTA mid.jpg",
      usp: "NABH Accredited & Award-Winning Luxury",
    },
    {
      name: "Toyam By Orchid Hotels",
      location: "Pune, Maharashtra",
      desc: "Escape into nature at Toyam by Orchid Hotels, a serene wellness retreat near Pune designed for holistic healing and restoration.",
      specialties: ["Detox", "Yoga", "Holistic Healing"],
      rating: 4.7,
      price: "$$$",
      path: "/centers/maharashtra/toyam",
      image: "/Center Images/Toyam By Orchid Hotels/CTA mid.webp",
      usp: "Eco-Friendly Wellness Sanctuary",
    },
    {
      name: "Somatheeram Ayurveda Village",
      location: "Chowara Beach, Kerala",
      desc: "The world's first traditional Ayurvedic beach resort with continuous multi-year national tourism excellence awards.",
      specialties: ["Psoriasis Protocols", "Weight Care", "Immunity Reset"],
      rating: 4.8,
      price: "$$$",
      path: "/centers/kerala/somatheeram",
      image: "/Center Images/somatheeram/Somatheeram 01.jpg",
      usp: "Multi-Time National Tourism Award Winner",
    },
    {
      name: "SOUKYA International Holistic Health Centre",
      location: "Whitefield, Bangalore",
      desc: "World-renowned integrative health center preferred by international royalty. 30-acre certified organic farm environment.",
      specialties: ["Panchakarma", "Integrative Medicine", "Chronic Detox"],
      rating: 4.9,
      price: "$$$$",
      path: "/centers/bangalore/soukya",
      image: "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/1%20Soukya.jpg",
      usp: "NABH Accredited & Global Royal Favorite",
    },
    {
      name: "Ananda in the Himalayas",
      location: "Rishikesh, Uttarakhand",
      desc: "Multi-award winning luxury palace retreat nestled in Himalayan foothills offering deep spiritual and physical restoration.",
      specialties: ["Stress Rebalance", "Yoga Therapy", "Detox Protocols"],
      rating: 4.9,
      price: "$$$$",
      path: "/centers/uttarakhand/ananda-in-the-himalayas",
      image: "/Center Images/Ananda in the Himalayas/CTA bottom.jpg",
      usp: "World's Leading Luxury Wellness Retreat",
    },
    {
      name: "Indus Valley Ayurvedic Centre",
      location: "Mysore, Karnataka",
      desc: "Designed according to Vastu Shastra, offering authentic treatments in a royal setting at the foothills of Chamundi Hill.",
      specialties: ["Rejuvenation", "Beauty Detox", "Wellness"],
      rating: 4.7,
      price: "$$$",
      path: "/centers/mysore/indus-valley-ayurvedic-centre",
      image: "/Center Images/Indus Valley Ayurvedic Centre/CTA mid.jpg",
      usp: "Vastu-Compliant Royal Architecture",
    },
    {
      name: "Kairali - The Ayurvedic Healing Village",
      location: "Palakkad, Kerala",
      desc: "Set amidst 50 acres of lush greenery, this NABH accredited village combines traditional Ayurveda with modern amenities.",
      specialties: ["Weight Loss", "Panchakarma", "Stress"],
      rating: 4.8,
      price: "$$$",
      path: "/centers/kerala/kairali-ayurvedic-healing-village",
      image: "/Center Images/The Ayurvedic Healing Village/CTA image (2).jpg",
      usp: "50-Acre Lush Green Sanctuary",
    },
    {
      name: "Agni Ayurvedic Village",
      location: "Mumbai, Maharashtra",
      desc: "A premium eco-friendly healing sanctuary near Mumbai focusing on authentic Kerala Ayurvedic therapies and holistic wellness.",
      specialties: ["Detox", "Pain Management", "Relaxation"],
      rating: 4.6,
      price: "$$",
      path: "/centers/kerala/agni-ayurvedic-village",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      usp: "Premium Eco-Friendly Sanctuary",
    },
    {
      name: "Veda5 Ayurveda & Yoga Retreat",
      location: "Rishikesh, Uttarakhand",
      desc: "Experience luxury wellness at Veda5, overlooking the Himalayas, offering world-class Ayurveda, Yoga, and Meditation programs.",
      specialties: ["Immunity", "Detox", "Spiritual Healing"],
      rating: 4.8,
      price: "$$$",
      path: "/centers/uttarakhand/veda5",
      image: "/Center Images/veda5/Facilities & Amenities/veda5-01.jpg",
      usp: "Himalayan Wellness & Yoga Retreat",
    }
  ];

  const itemsPerSlide = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const topCentersTotalSlides = Math.ceil(featuredCenters.length / itemsPerSlide);
  const visibleTopCenters = featuredCenters.slice(
    topCentersSlide * itemsPerSlide,
    (topCentersSlide + 1) * itemsPerSlide
  );

  const goTopCentersNext = () => {
    setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
    setExpandedCenterName(null);
  };

  const goTopCentersPrevious = () => {
    setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
    setExpandedCenterName(null);
  };

  const toggleCenterDescription = (name: string) => {
    setExpandedCenterName(prev => prev === name ? null : name);
  };

  return (
    <div className="min-h-screen font-poppins flex flex-col justify-between">
      {/* Top Header Navigation */}
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* MODULE 1: Premium Dynamic Hero Section */}
      <HeroSection onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* MODULE 2: Smart Interactive Medical Finder Widget */}
      <MedicalFinder />

      {/* QUICK NAVIGATION: 4 Main Site Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
            Explore Savastha Global
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Everything You Need, All in One Place
          </h2>
          <p className="text-sm sm:text-base text-[#7F543D] leading-relaxed">
            From curated healing programs and elite certified centers to targeted treatments — navigate every aspect of your Ayurvedic journey with ease.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {/* Card 1: Services */}
          <div className="p-6 rounded-2xl bg-white border border-primary/10 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-4">
              <Stethoscope className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-primary mb-2">Services of Savastha Global</h3>
            <p className="text-xs text-[#7F543D] leading-relaxed mb-4 flex-1">
              Explore our full range of traditional healing modalities — from authentic Panchakarma and Ayurveda to Yoga, Touch Therapies, Mind-Body interventions, and Biological plant-based treatments.
            </p>
            <Link to="/services" className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline mt-auto">
              View All Services →
            </Link>
          </div>

          {/* Card 2: Top Centers */}
          <div className="p-6 rounded-2xl bg-white border border-primary/10 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-4">
              <Hospital className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-primary mb-2">Top Centers of Savastha Global</h3>
            <p className="text-xs text-[#7F543D] leading-relaxed mb-4 flex-1">
              Discover India's most prestigious NABH-accredited Ayurvedic hospitals and retreat sanctuaries — handpicked across Kerala, the Himalayas, Goa, Bangalore, and beyond.
            </p>
            <Link to="/centers" className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline mt-auto">
              Browse All Centers →
            </Link>
          </div>

          {/* Card 3: Ayurvedic Programs */}
          <div className="p-6 rounded-2xl bg-white border border-primary/10 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-4">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-primary mb-2">Ayurvedic Programs</h3>
            <p className="text-xs text-[#7F543D] leading-relaxed mb-4 flex-1">
              Browse structured inpatient wellness packages — from 21-Day Panchakarma Detox and Burnout Recovery to Anti-Aging, Weight Loss, and disease-specific healing retreats.
            </p>
            <Link to="/ayurvedic-programs" className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline mt-auto">
              Explore All Programs →
            </Link>
          </div>

          {/* Card 4: Treatments */}
          <div className="p-6 rounded-2xl bg-white border border-primary/10 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-4">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-primary mb-2">Treatments by Condition</h3>
            <p className="text-xs text-[#7F543D] leading-relaxed mb-4 flex-1">
              Find Ayurvedic solutions tailored to your specific health condition — from Arthritis, Sciatica, and Psoriasis to Parkinson's, Stroke Rehab, Weight Management, and 23+ more.
            </p>
            <Link to="/treatments" className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline mt-auto">
              View All Treatments →
            </Link>
          </div>

        </div>
      </section>


      {/* MODULE 3 PREVIEW: Handpicked Elite Centers */}
      <section className="bg-primary/5 py-20 border-t border-b border-primary/10">
        <div className="container mx-auto px-4">
          
          <div className="text-center space-y-2 md:space-y-3 px-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care and authentic healing programs.</p>
          </div>
          
          <div className="relative group flex items-center justify-center">
            {/* Navigation Arrows - centered on image for mobile, centered on card for desktop */}
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersPrevious}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Previous centers"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersNext}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Next centers"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 w-full px-0 md:px-6 lg:px-8 items-stretch">
              {visibleTopCenters.map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                    <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                      <img
                        src={center.image}
                        alt={center.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-xs">
                        {center.usp}
                      </div>
                    </div>

                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex text-left">{center.name}</h3>

                      <div className="flex flex-nowrap items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 md:mt-1 md:mb-4 text-left overflow-hidden">
                        <div className="flex items-center gap-1.5 shrink min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span className="text-[12px] md:text-[13px] font-semibold truncate" title={center.location}>{center.location}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                          <span className="text-[12px] md:text-[13px] font-bold text-[#335765]">({center.rating} rating)</span>
                        </div>
                      </div>

                      <div className="relative mb-3 flex-grow text-left">
                        <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>
                          {center.desc}
                        </p>
                        <button
                          onClick={() => toggleCenterDescription(center.name)}
                          className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block"
                        >
                          {expandedCenterName === center.name ? "Read Less" : "Read More"}
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Link
                          to={center.path}
                          className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap"
                        >
                          View Details
                        </Link>
                        <Button
                          className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs"
                          onClick={() => setQuoteModalOpen(true)}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {topCentersTotalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: topCentersTotalSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTopCentersSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`}
                  />
                ))}
              </div>
            )}

            <div className="flex justify-center mt-4">
              <Button
                className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
                onClick={() => navigate('/centers')}
              >
                VIEW ALL CENTERS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 4: Curated Program Packages Hub */}
      <HomeProgramsSection />

      {/* MODULE 5: Complete A-Z Targeted Treatments Directory */}
      <HomeTreatmentsGuide />

      {/* MODULE 6: Patient Process Roadmap */}
      <HomeProcessRoadmap />

      {/* MODULE 7: Global Patient Testimonials */}
      <HomeTestimonials />

      {/* MODULE 8: Western Travel & Medical FAQ */}
      <HomeFAQ />

      {/* FINAL HIGH-IMPACT CTA */}
      <section className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#EDE8D0_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Ready to Begin Your Healing Journey to India?
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-8 font-light leading-relaxed">
            Connect with our senior health specialists today. Receive customized protocol recommendations, therapy durations, and hospital pricing options tailored precisely to your condition.
          </p>
          <Button 
            onClick={() => setQuoteModalOpen(true)}
            size="lg"
            className="bg-[#EDE8D0] text-primary hover:bg-white tracking-wide font-bold text-base py-7 px-10 rounded-xl shadow-2xl transition-all hover:scale-105"
          >
            Request Free Medical Plan & Pricing
          </Button>
        </div>
      </section>

      {/* Global Bottom Footer */}
      <Footer />

      {/* Global Quote Request Modal */}
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      
      {/* Persistent Floating Trigger Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-[#7F543D] text-white hover:bg-primary rounded-full p-4 shadow-2xl hover:scale-110 transition-all z-40 flex items-center gap-2 font-bold text-sm border-2 border-white/20"
      >
        <Phone size={18} className="animate-bounce" />
        <span className="hidden sm:inline tracking-wide">Request Quote</span>
      </button>
    </div>
  );
}
