import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, ChevronRight, Building2, Leaf, Users, Award, ShieldCheck, TreePine, Phone, MessageCircle, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, ChevronLeft, Globe, Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function ShreeVishwavallabhAyurvedicCenter() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(false);

  const jumpSections = [
    { id: "overview", title: "Center Overview" },
    { id: "about", title: "About Center" },
    { id: "programs", title: "Top Ayurveda Packages" },
    { id: "why-choose", title: "Why Choose Us" },
    { id: "process", title: "Your Healing Journey" },
    { id: "reviews", title: "Patient Stories" },
    { id: "faq", title: "FAQs" },
    { id: "contact", title: "Contact Us" }
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const treatmentProcess = [
    {
      number: 1,
      title: "Holistic Clinical Diagnosis",
      description: "Thorough assessment of your health condition using advanced modern diagnostics integrated with classical Nadi Pariksha and Prakriti analysis.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Customized Treatment Strategy",
      description: "Developing personalized Ayurvedic protocols combining herbal medicines, specialized procedures, and diet for targeted root-cause healing.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Preparation & Purvakarma",
      description: "Preparing the body for detoxification using authentic therapies like Snehana (internal/external oleation) and Swedana (fomentation).",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Core Panchakarma Detoxification",
      description: "Executing deep cellular cleansing therapies such as Vamana, Virechana, or Basti under the direct supervision of expert Ayurvedic doctors.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Observation & Care Integration",
      description: "Close daily monitoring with integrated allied therapies including physiotherapy, yoga, and a personalized Saatvic diet to support the healing phase.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Post-Treatment Rasayana",
      description: "Providing rejuvenating medicines (Rasayana) and a complete lifestyle blueprint to sustain recovery, build immunity, and prevent recurrence.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];

    const testimonials = [
    {
      title: "Excellent Garbh Sanskar Guidance",
      review: "Dr. Jeevan's Garbh Sanskar program was a true blessing for my pregnancy. Traveling from the UK, the personalized dietary advice, prenatal yoga, and Ayurvedic treatments helped me experience a completely stress-free and healthy delivery.",
      name: "Emma W.",
      verified: true,
      location: "London, UK",
      condition: "Maternal Wellness",
      rating: 5
    },
    {
      title: "Remarkable Relief from Psoriasis",
      review: "I had been suffering from severe skin issues for years in Germany. The traditional Kerala Panchakarma therapies at Shree Vishwavallabh brought my condition completely under control. The hygiene and authenticity here are unparalleled.",
      name: "Markus H.",
      verified: true,
      location: "Berlin, Germany",
      condition: "Skin Disorders",
      rating: 5
    },
    {
      title: "Authentic Kerala Ayurveda",
      review: "Finding genuine Kerala-style Ayurveda outside India is tough, so I traveled here. The Vamana and Virechana detox treatments I underwent were highly effective for my chronic digestive problems. The staff is deeply compassionate.",
      name: "Sarah M.",
      verified: true,
      location: "Sydney, Australia",
      condition: "Digestive Health",
      rating: 5
    },
    {
      title: "Effective Spine Care",
      review: "My cervical spondylosis had restricted my mobility for years. The Kati Basti and specialized herbal oil massages provided immense relief from the pain and stiffness during my medical stay. The doctor's deep understanding of anatomy is remarkable.",
      name: "James T.",
      verified: true,
      location: "Toronto, Canada",
      condition: "Spine & Joint Care",
      rating: 5
    },
    {
      title: "Holistic Hair Fall Treatment",
      review: "The holistic approach taken here for my severe hair fall worked wonders. Instead of just prescribing topical oils, they treated the root cause with internal medicines and Nasya therapy during my retreat. I am seeing visible hair regrowth.",
      name: "Chloe P.",
      verified: true,
      location: "New York, USA",
      condition: "Hair & Scalp Care",
      rating: 5
    }
  ];

    const faqItems = [
    {
      question: "What is Garbh Sanskar and who is it for?",
      answer: "Garbh Sanskar is an ancient Ayurvedic science of nurturing the fetus in the womb. It involves a customized regimen of diet, yoga, mantras, and herbal supplements designed for pregnant women to ensure the optimal physical, mental, and spiritual development of the baby."
    },
    {
      question: "Do you offer authentic Kerala Panchakarma therapies?",
      answer: "Yes, our founder belongs to the renowned 'Vazhimangalathu' family of Ayurveda Vaidyas from Kerala. We strictly adhere to classical Kerala protocols, utilizing specialized medicated oils and traditional massage techniques for profound detoxification."
    },
    {
      question: "Is Shree Vishwavallabh a certified clinic?",
      answer: "Yes, we are proudly an ISO 9001:2015 certified and Gold Leaf Certified Ayurvedic Panchakarma clinic, ensuring uncompromising standards of hygiene, safety, and authentic medical care."
    },
    {
      question: "How long does a typical Panchakarma detox take?",
      answer: "A complete Panchakarma detox program usually spans 7 to 21 days, depending on your individual health condition, body constitution (Prakriti), and the specific therapies required for optimal healing."
    },
    {
      question: "Can Ayurveda effectively treat chronic skin diseases?",
      answer: "Absolutely. We specialize in treating chronic skin conditions like psoriasis and eczema through deep cellular detoxification (like Vamana and Virechana) and targeted herbal formulations that purify the blood and restore natural immunity."
    }
  ];

    const programs = [
    {
      title: "Garbh Sanskar Program",
      description: "A comprehensive maternal wellness program promoting healthy fetal development through customized diet, prenatal yoga, and Ayurvedic therapies.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Kerala Panchakarma Detox",
      description: "Deep cellular purification using authentic Kerala protocols to eliminate toxins, reset the digestive fire, and restore physiological balance.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skin & Hair Care Therapy",
      description: "Specialized treatments targeting the root causes of chronic skin conditions and hair fall using customized herbal oils and blood-purifying therapies.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Spine & Joint Management",
      description: "Targeted localized therapies like Kati Basti and Janu Basti for chronic pain relief, mobility restoration, and arthritis management.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Infertility Care & IVF Prep",
      description: "Holistic reproductive health treatments designed to improve fertility naturally and prepare the body for successful IVF procedures.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Healing Sound & Music Therapy",
      description: "A unique offering that integrates classical sound vibrations to calm the nervous system, reduce stress, and promote mental well-being.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];

  const whyChooseUs = [
    {
      title: "30 Years of Excellence",
      description: "A profound legacy of clinical success, backed by the academic prestige and research prowess of Shree Vishwavallabh Vidyapeeth University.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "NABH Accredited Hospital",
      description: "Recognized nationally for uncompromising standards in patient safety, clinical quality, and exceptional hygiene protocols.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Integrative Approach",
      description: "We seamlessly blend ancient classical Ayurvedic wisdom with state-of-the-art modern diagnostic technology.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "In-House ICU Facility",
      description: "One of the few Ayurvedic hospitals equipped with a fully functional Intensive Care Unit to handle medical emergencies 24/7.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Community Focused",
      description: "Actively running adopted village programs to provide free health check-ups and treatments to rural families across Maharashtra.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Prime Location",
      description: "Conveniently situated on the main Nashik-Satara Road, making it highly accessible for patients from all over the state.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];

  const breadcrumbRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    // Scroll breadcrumb to the end on mobile so current page is visible
    if (breadcrumbRef.current) {
      breadcrumbRef.current.scrollLeft = breadcrumbRef.current.scrollWidth;
    }
  }, []);

  useEffect(() => {
    document.title = "Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center Nashik | NABH Accredited Ayurvedic Care";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Experience authentic Ayurvedic treatments, Ksharasutra surgery, and Panchakarma at the NABH-accredited Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center on Nashik-Satara Road, Nashik.");

    if (!isReviewAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isReviewAutoPlaying, testimonials.length]);

  return (
    <div className="min-h-screen bg-background font-poppins selection:bg-[#2C4E5A]/20">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol ref={breadcrumbRef} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <li className="flex items-center gap-2 shrink-0">
              <a href="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <a href="/top-ayurvedic-centers-in-india" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center Nashik
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="bg-[#2C4E5A] text-white py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center</h1>
                <p className="text-xl mb-4 opacity-90">NABH Accredited Premium Ayurveda | Outpatient & Inpatient Clinical Care</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Nashik-Satara Road, Nashik, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.6</span>
                  <span className="opacity-90">(900+ Reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#2C4E5A] hover:bg-white/90 font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-[#2C4E5A]/5">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
                Authentic Ayurvedic Excellence <br className="hidden lg:block" />
                at Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="text-left space-y-8">
                <div className="space-y-6 text-base md:text-xl leading-relaxed text-foreground/80 text-left" style={{ color: "#7F543D" }}>
                  <p>
                    Welcome to <strong className="font-bold text-[#2C4E5A]">Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center</strong>, one of Nashik's most reputed and trusted destinations for authentic, clinical Ayurvedic healthcare. Proudly affiliated with Shree Vishwavallabh Vidyapeeth—a top-ranked university—our NABH-accredited hospital carries forward a 30-year legacy of clinical excellence. Prominently located on Nashik-Satara Road, we offer a serene and highly hygienic environment where traditional Ayurvedic wisdom meets advanced modern medical diagnostics. Our facility integrates traditional pulse diagnosis with state-of-the-art diagnostic tools, ensuring that our patients receive highly precise, evidence-based care tailored precisely to their unique body constitution and health challenges.
                  </p>
                  
                  <div className="lg:hidden py-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/50 aspect-[16/10]">
                        <img 
                          src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 2.webp" 
                          alt="Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center therapy room"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp"; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    Our institution uniquely stands out by providing comprehensive specialties under one roof. From highly successful Ksharasutra surgery for proctological issues to specialized pediatric Ayurveda, women's health, postpartum care, and profound Panchakarma detox programs. Equipped with a modern Intensive Care Unit (ICU) and a team of highly qualified physicians, we are committed to delivering safe, measurable, and deeply transformative healing outcomes for patients across the globe. By integrating deeply purifying Ayurvedic detoxes, rejuvenating therapies, personalized lifestyle counseling, and meticulously sourced organic medicines, we empower our patients to achieve lasting, vibrant health rather than just temporary symptom relief.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2C4E5A]/20 to-[#C68D6A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                    <img 
                      src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp" 
                      alt="Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center main view"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = "/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp"; }}
                    />
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                      <img 
                        src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 2.webp" 
                        alt="Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center therapy room"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = "/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp"; }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 text-center border-t border-[#2C4E5A]/10 mt-12">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2C4E5A] leading-relaxed">
                Your journey to deep healing and vitality begins with a single step.{" "}
                <span 
                  className="text-[#2C4E5A] underline cursor-pointer hover:text-[#2C4E5A]/80 font-bold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  CONTACT 
                </span>{" "}
                My Vaidyam to connect with Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center today.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
              Top Ayurveda Programs in <br className="hidden lg:block" /> Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <Card key={idx} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="shrink-0 p-2 bg-[#E7F0F1] rounded-lg">
                        {program.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#2C4E5A] leading-tight">{program.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      {program.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-4 md:py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#EDE8D0] rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
                Why Choose <br className="hidden lg:block" /> Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Experience world-class traditional healthcare backed by academic excellence, state-of-the-art facilities, and compassionate doctors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-border/50 hover:border-[#2C4E5A]/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="shrink-0 p-2 bg-background rounded-lg shadow-sm border border-border/20">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#2C4E5A] leading-tight">{feature.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section id="process" className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
              Your Healing Journey at <br className="hidden lg:block" /> Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A comprehensive pathway of precise diagnosis, targeted therapies, and deep healing designed specifically for your unique body constitution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentProcess.map((step, idx) => (
              <div key={idx} className="relative p-6 md:p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group h-full flex flex-col border border-[#2C4E5A]/5">
                <div className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-5xl font-black text-[#2C4E5A] transition-colors select-none">
                  {step.number}
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 p-3 bg-background rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2C4E5A] leading-tight pr-10">{step.title}</h3>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-4 md:py-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#2C4E5A" }}>
            <div className="md:hidden">
              <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                <img
                  src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 2.webp"
                  alt="Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center view"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp"; }}
                />
                <h2 className="text-xl font-bold text-white text-center mb-4">Ready to Start Your Wellness Journey at Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center?</h2>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-white text-[#2C4E5A] hover:bg-white/90 text-sm sm:text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Book Consultation Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500 text-sm sm:text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat With Us
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Wellness Journey at Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center?</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" className="rounded-full px-6 bg-white text-[#2C4E5A] hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Book Consultation Now
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-6 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500" onClick={() => setQuoteModalOpen(true)}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat With Us
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 2.webp"
                  alt="Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center view"
                  className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Patient Stories & Reviews</h2>
            <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Real stories of healing and recovery from our patients.</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <Card className="border-2 border-[#2C4E5A]/20 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-6 md:p-12 relative">
                <div className="text-[#2C4E5A]/20 mb-4 md:mb-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C4E5A] mb-3 md:mb-4">
                    {testimonials[currentReview]?.title}
                  </h3>
                  <p className="text-base md:text-xl leading-relaxed" style={{ color: "#7F543D" }}>
                    "{testimonials[currentReview]?.review}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2C4E5A] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                    {testimonials[currentReview]?.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg md:text-xl font-bold text-[#2C4E5A]">{testimonials[currentReview]?.name}</h4>
                      {testimonials[currentReview]?.verified && (
                        <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                          <span className="text-xs">✓</span> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] md:text-base" style={{ color: "#7F543D" }}>
                      {testimonials[currentReview]?.location} • Treated for {testimonials[currentReview]?.condition}
                    </p>
                  </div>
                </div>
 
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < (testimonials[currentReview]?.rating || 5) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                    ))}
                  </div>
                  <span className="text-sm md:text-base font-bold text-[#2C4E5A]">{testimonials[currentReview]?.rating}.0</span>
                </div>
              </CardContent>
            </Card>
 
            <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-8 z-20">
              <button
                onClick={() => {
                  setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setIsReviewAutoPlaying(false);
                }}
                className="bg-white/90 hover:bg-[#2C4E5A] hover:text-white text-[#2C4E5A] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#2C4E5A] active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-8 z-20">
              <button
                onClick={() => {
                  setCurrentReview((prev) => (prev + 1) % testimonials.length);
                  setIsReviewAutoPlaying(false);
                }}
                className="bg-white/90 hover:bg-[#2C4E5A] hover:text-white text-[#2C4E5A] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#2C4E5A] active:scale-95"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
 
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentReview(idx);
                    setIsReviewAutoPlaying(false);
                  }}
                  className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#2C4E5A]" : "w-3 h-3 bg-[#2C4E5A]/20 hover:bg-[#2C4E5A]/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* FAQ Section */}
      <section id="faq" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">Find answers to common queries about treatments, accommodations, and specialties at Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-xl bg-white shadow-sm overflow-hidden px-2">
                <AccordionTrigger className="px-4 py-5 text-left font-bold text-[#2C4E5A] hover:no-underline hover:bg-[#2C4E5A]/5 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 pt-2 leading-relaxed" style={{ color: "#7F543D" }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-4 md:py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#EDE8D0] rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Contact Information</h2>
              <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Reach out to us to begin your journey towards holistic health and well-being.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><MapPin className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Center Address</h3>
                    <p className="text-foreground/70 leading-relaxed" style={{ color: "#7F543D" }}>
                      Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center<br />
                      Nashik-Satara Road, Dhankawadi<br />
                      Nashik, Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><Phone className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Contact Details</h3>
                    <div className="text-foreground/70 leading-relaxed space-y-2.5" style={{ color: "#7F543D" }}>
                      <div>+91 989 xxxx xxx</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><MapPin className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Distance & Transit</h3>
                    <ul className="text-foreground/70 leading-relaxed space-y-2.5" style={{ color: "#7F543D" }}>
                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Located directly on the prominent Nashik-Satara Road for easy access.</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Well-connected by local transit options and major highways.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white/50">
                <iframe 
                  src="https://maps.google.com/maps?q=Shree+Vishwavallabh+Ayurvedic+Panchakarma,+Panchavati,+Nashik&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 overflow-hidden bg-[#2C4E5A] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp"
            alt="Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => { e.currentTarget.src = "/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp"; }}
          />
          <div className="absolute inset-0 bg-[#2C4E5A]/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation. Our dedicated practitioners will guide you towards the perfect treatment or therapy program at Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/919560113189?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20Shree Vishwavallabh%20Ayurved%20Hospital."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#2C4E5A] hover:bg-gray-100 font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
 
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
 
      {/* Floating Action Buttons */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button onClick={() => setIsJumpModalOpen(true)} className="bg-[#2C4E5A] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter">
          <span className="drop-shadow-sm">B</span><span className="drop-shadow-sm">R</span><Search size={16} strokeWidth={3.5} className="drop-shadow-sm" /><span className="drop-shadow-sm">W</span><span className="drop-shadow-sm">S</span><span className="drop-shadow-sm">E</span>
        </button>
      </div>
 
      <button onClick={() => setIsJumpModalOpen(true)} className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2C4E5A] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Search size={18} className="-ml-1" /><span>BROWSE</span></button>
 
      <button onClick={() => setQuoteModalOpen(true)} className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Phone size={18} className="-ml-1" /><span className="hidden md:inline">GET FREE QUOTE</span><span className="md:hidden">QUOTE</span></button>
 
      <div className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />
        <div className={`relative w-full max-w-sm h-full bg-background shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-[#2C4E5A]/20 via-[#2C4E5A] to-[#2C4E5A]/20" />
          <div className="p-4 pb-4 bg-[#2C4E5A] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5"><div className="flex items-center gap-2 mb-1"><div className="h-px w-6 bg-white/30" /><span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span></div><h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Section Info</h2></div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"><X className="h-6 w-6 transition-transform" /></button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm"><ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" /><p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section."</p></div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#2C4E5A] transition-all duration-300 p-3 rounded-xl border-2 border-[#2C4E5A]/20 hover:border-[#2C4E5A] flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10"><div className="w-9 h-9 rounded-lg bg-[#2C4E5A]/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200"><span className="text-xs font-black text-[#2C4E5A] group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span></div><span className="text-sm md:text-base font-bold text-[#2C4E5A] group-hover:text-white transition-all duration-200 text-left">{section.title}</span></div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200 border border-[#2C4E5A]/10 group-hover:border-transparent"><ChevronRight size={14} className="text-[#2C4E5A] group-hover:text-white transition-colors" /></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
