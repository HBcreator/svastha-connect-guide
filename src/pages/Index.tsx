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
import { Activity, ChevronLeft, ChevronRight, Search, X, ClipboardList, Phone, MapPin, Star, Sparkles, Award, ShieldCheck, HeartHandshake, Stethoscope, Hospital, CalendarCheck, HeartPulse, ArrowRight } from "lucide-react";

export default function Index() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  // Top Centers Carousel State
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [isProgramsModalOpen, setIsProgramsModalOpen] = useState(false);

  const jumpSections = [
    { id: "hero", title: "Clinical Excellence" },
    { id: "navigator", title: "Treatment Navigator" },
    { id: "quick-nav", title: "Quick Explorer" },
    { id: "top-centers", title: "Top India Centers" },
    { id: "programs", title: "Ayurvedic Programs" },
    { id: "treatments", title: "Treatments Guide" },
    { id: "process", title: "Our Healing Process" },
    { id: "testimonials", title: "Patient Reviews" },
    { id: "faq", title: "Common Questions" }
  ];

  const jumpToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsJumpModalOpen(false);
  };

  // Flagship elite centers for static demonstration
  const featuredCenters = [
    {
      name: "Carnoustie Ayurveda & Wellness Resort",
      location: "Mararikulam, Kerala",
      desc: "Step into a sanctuary of authentic Ayurvedic healing at Carnoustie Ayurveda & Wellness Resort, an award-winning luxury destination.",
      specialties: ["Panchakarma", "Rejuvenation", "Anti-Aging"],
      rating: 4.7,
      price: "$$$$",
      path: "/centers/kerala/carnoustie-ayurveda-wellness-resort",
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
      path: "/centers/pune/toyam-by-orchid-hotels",
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
      path: "/centers/veda5",
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
    <div className="min-h-screen font-poppins flex flex-col justify-between overflow-x-hidden">
      {/* Top Header Navigation */}
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* MODULE 1: Premium Dynamic Hero Section */}
      <div id="hero">
        <HeroSection onQuoteClick={() => setQuoteModalOpen(true)} />
      </div>

      {/* MODULE 2: Smart Interactive Medical Finder Widget */}
      <div id="navigator">
        <MedicalFinder />
      </div>

      {/* QUICK NAVIGATION: 4 Main Site Sections */}
      <section id="quick-nav" className="max-w-6xl mx-auto px-4 pt-12 pb-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
            Explore MyVaidyam
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
            <h3 className="font-bold text-lg text-primary mb-2">Services of MyVaidyam</h3>
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
            <h3 className="font-bold text-lg text-primary mb-2">Top Centers of MyVaidyam</h3>
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
            <button 
              onClick={() => setIsProgramsModalOpen(true)} 
              className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Explore All Programs →
            </button>
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
      <section id="top-centers" className="pt-12 pb-2">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center space-y-2 md:space-y-3 px-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care and authentic healing programs.</p>
          </div>
          
          <div className="relative group flex items-center justify-center max-w-6xl mx-auto px-2">
            {/* Navigation Arrows - centered on image for mobile, centered on card for desktop */}
            <div className="absolute left-5 md:-left-12 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersPrevious}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Previous centers"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-5 md:-right-12 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersNext}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Next centers"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
              {visibleTopCenters.map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                    <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                      <img
                        src={center.image}
                        alt={center.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
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
                          target="_blank"
                          rel="noopener noreferrer"
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
              <Link
                to="/centers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
              >
                VIEW ALL CENTERS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 4: Curated Program Packages Hub */}
      <div id="programs">
        <HomeProgramsSection />
      </div>

      {/* MODULE 5: Complete A-Z Targeted Treatments Directory */}
      <div id="treatments">
        <HomeTreatmentsGuide />
      </div>

      {/* MODULE 6: Patient Process Roadmap */}
      <div id="process">
        <HomeProcessRoadmap />
      </div>

      {/* MODULE 7: Global Patient Testimonials */}
      <div id="testimonials">
        <HomeTestimonials />
      </div>

      {/* MODULE 8: Western Travel & Medical FAQ */}
      <div id="faq">
        <HomeFAQ />
      </div>

      {/* FINAL HIGH-IMPACT CTA WITH BACKGROUND IMAGE */}
      <section className="relative py-12 md:py-14 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/healing-journey-bg.png" 
            alt="Ayurvedic Healing Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ready to Begin Your <br className="hidden md:block" />
            Healing Journey?
          </h2>
          
          <p className="text-base md:text-xl text-white/90 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
            Contact us today for a free consultation. Our doctors will guide you towards the perfect treatment program.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button 
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-extrabold text-lg py-7 px-10 rounded-xl shadow-xl transition-all w-full sm:w-auto"
            >
              Get a Free Quote
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-bold text-lg py-7 px-10 rounded-xl shadow-xl transition-all w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/yournumber', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Global Bottom Footer */}
      <Footer />

      {/* Global Quote Request Modal */}
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      
      {/* Desktop Vertical BROWSE Button (Right Side) */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
        >
          <span className="drop-shadow-sm">B</span>
          <span className="drop-shadow-sm">R</span>
          <Search size={16} strokeWidth={3.5} className="drop-shadow-sm" />
          <span className="drop-shadow-sm">W</span>
          <span className="drop-shadow-sm">S</span>
          <span className="drop-shadow-sm">E</span>
        </button>
      </div>

      {/* Floating BROWSE Button (Mobile Only - Left Side) */}
      <button
        onClick={() => setIsJumpModalOpen(true)}
        className="md:hidden fixed bottom-6 left-5 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Search size={18} className="-ml-1" />
        <span>BROWSE</span>
      </button>

      {/* Floating Quote Button (All Devices - Right Side) */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-5 md:right-6 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:py-3.5 md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap group"
      >
        <Phone size={20} className="md:size-18 -ml-1 md:ml-0" />
        <span className="hidden md:inline tracking-wide">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

      {/* Navigation Jump Modal */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />

        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">
                  Page Sections
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"
                title="Close Menu"
              >
                <X className="h-6 w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">
                "Jump directly to any section in this page."
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => jumpToSection(section.id)}
                className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">
                    {section.title}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                  <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Ayurvedic Programs Categories Modal */}
      <div
        className={`fixed inset-0 z-[75] transition-all duration-500 flex items-center justify-center ${isProgramsModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsProgramsModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${isProgramsModalOpen ? "opacity-100" : "opacity-0"}`} />

        <div
          className={`relative w-full max-w-2xl mx-4 bg-[#FCFBF7] rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 transform ${isProgramsModalOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-10"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#335765] p-6 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Ayurvedic Healing Programs</h3>
                <p className="text-white/70 text-sm mt-1">Select a category to explore specialized wellness retreats</p>
              </div>
              <button
                onClick={() => setIsProgramsModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Program Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Panchakarma Detox", path: "/ayurvedic-programs/panchakarma-detox", icon: Sparkles, color: "text-orange-500", desc: "Full-body bio-purification and cellular elimination protocols." },
                { title: "Disease-Specific", path: "/ayurvedic-programs/disease-specific", icon: Stethoscope, color: "text-blue-500", desc: "Targeted clinical treatments for chronic medical conditions." },
                { title: "Lifestyle & Wellness", path: "/ayurvedic-programs/lifestyle-and-wellness", icon: Activity, color: "text-green-500", desc: "Holistic maintenance and preventative health programs." },
                { title: "Beauty & Rejuvenation", path: "/ayurvedic-programs/beauty-and-rejuvenation", icon: HeartPulse, color: "text-pink-500", desc: "Traditional anti-aging and skin vitality treatments." },
                { title: "Integrated Retreat", path: "/ayurvedic-programs/integrated-retreat", icon: CalendarCheck, color: "text-purple-500", desc: "Combined Yoga, Ayurveda, and meditation immersions." }
              ].map((prog) => (
                <Link
                  key={prog.title}
                  to={prog.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-2xl border-2 border-primary/10 hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
                  onClick={() => setIsProgramsModalOpen(false)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-xl bg-white shadow-sm border border-primary/5 group-hover:scale-110 transition-transform ${prog.color}`}>
                      <prog.icon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-primary transition-colors">{prog.title}</span>
                  </div>
                  <p className="text-xs text-[#7F543D]/80 leading-relaxed group-hover:text-[#7F543D] transition-colors">{prog.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                    Explore Program <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}

              {/* View All Card */}
              <Link
                to="/ayurvedic-programs"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-5 rounded-2xl border-2 border-dashed border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                onClick={() => setIsProgramsModalOpen(false)}
              >
                <div className="text-center">
                  <span className="block font-bold text-primary mb-1">View All Programs</span>
                  <span className="text-[10px] text-primary/60 font-medium">Browse our complete directory</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
