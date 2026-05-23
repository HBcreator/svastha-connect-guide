import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Award,
  Brain,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Droplet,
  FileSearch,
  Globe,
  Heart,
  HeartPulse,
  Home,
  Hospital,
  MessageCircleHeart,
  MessageCircle,
  Phone,
  Pill,
  Images,
  Leaf,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TrendingUp,
  TreePine,
  Utensils,
  UserCheck,
  Users,
  Video,
  X,
  Wind
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SriSriAyurvedaHospital() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const breadcrumbRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    // Scroll breadcrumb to the end on mobile so current page is visible
    if (breadcrumbRef.current) {
      breadcrumbRef.current.scrollLeft = breadcrumbRef.current.scrollWidth;
    }
  }, []);

  // Hardcoded content based on Sri Sri Ayurveda Hospital, Bengaluru
  const programs = [
    {
      title: "Panchakarma & Detoxification",
      description: "Authentic detox processes including Vamana, Virechana, and Basti to deeply cleanse the body of metabolic toxins and restore dosha balance.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Spine & Joint Care",
      description: "Targeted treatments for arthritis, spondylosis, and sciatica utilizing specialized therapies like Kati Basti and Patra Pinda Sweda.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Wellness & Rejuvenation",
      description: "Holistic stress-relief and anti-aging programs combining relaxing massages, Shirodhara, and mindful lifestyle coaching.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Integrated Cancer Care",
      description: "Supportive holistic protocols that combine Ayurveda, ozone therapy, and nutritional guidance to aid recovery and improve quality of life.",
      icon: <HeartPulse className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Respiratory Health",
      description: "Effective management of asthma, sinusitis, and allergies through specialized nasal therapies and customized herbal regimens.",
      icon: <Wind className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Women's Health & Gynaecology",
      description: "Natural Ayurvedic care for PCOD/PCOS, menstrual disorders, and postnatal recovery, prioritizing long-term hormonal balance.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];

  const whyChooseUs = [
    {
      title: "NABH Accredited & ISO Certified",
      description: "High clinical standards and rigorous safety protocols ensuring reliable, world-class Ayurvedic healthcare.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Integrative Approach",
      description: "Seamlessly blends traditional Ayurveda with Naturopathy, Osteopathy, and modern diagnostics for comprehensive healing.",
      icon: <Brain className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Experienced Specialists",
      description: "A large team of highly qualified Vaidyas, modern medical doctors, and specialized therapists working collaboratively.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Peaceful Healing Environment",
      description: "Spread across a serene campus, providing a tranquil atmosphere that actively supports the recovery and healing process.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Specialized Advanced Therapies",
      description: "Unique access to specialized integrative treatments like Hyperbaric Oxygen Therapy (HBOT) and Ozone Therapy.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Global Patient Support",
      description: "Dedicated international patient care offering online consultations, seamless admissions, and customized dietary plans.",
      icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];

  const treatmentProcess = [
    {
      number: 1,
      title: "Comprehensive Assessment",
      description: "In-depth Nadi Pariksha (pulse diagnosis) and medical history review by senior Vaidyas.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Personalized Protocol",
      description: "Formulation of a customized treatment plan combining therapies, diet, and herbal medicines.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Deep Detoxification",
      description: "Implementation of classical Panchakarma procedures to eliminate accumulated toxins.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Rejuvenation Phase",
      description: "Restorative therapies like Shirodhara and Abhyanga to nourish tissues and calm the mind.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Lifestyle Integration",
      description: "Daily yoga, meditation, and Naturopathy practices to build a sustainable healthy routine.",
      icon: <TreePine className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Post-Treatment Care",
      description: "Ongoing guidance, dietary recommendations, and follow-up consultations to maintain health.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];

  const testimonials = [
    {
      name: "Sanjay Deshpande",
      location: "India",
      condition: "Severe Osteoarthritis",
      rating: 5,
      title: "Authentic Healing and Expert Doctors",
      review: "The Nadi Pariksha diagnosis was incredibly accurate. The doctors at Sri Sri Ayurveda Hospital truly understand the root cause. After a 14-day Panchakarma session, the mobility in my knees has improved significantly without any surgery.",
      verified: true
    },
    {
      name: "Linda Thompson",
      location: "USA",
      condition: "Chronic Stress & Insomnia",
      rating: 5,
      title: "Peaceful Sanctuary for Rejuvenation",
      review: "The peaceful hilltop location is a healing environment in itself. The Shirodhara treatments and the guided meditation sessions provided the mental clarity I haven't felt in years. The nursing staff is exceptionally attentive.",
      verified: true
    },
    {
      name: "Karthik Raja",
      location: "UAE",
      condition: "Psoriasis",
      rating: 5,
      title: "Remarkable Results with Ayurvedic Protocols",
      review: "I had been struggling with skin issues for a long time. The systematic approach here, combined with herbal medicines and a strict diet, has cleared my skin remarkably. I highly recommend this hospital for chronic conditions.",
      verified: true
    },
    {
      name: "Dr. Peter W.",
      location: "Germany",
      condition: "Holistic Health",
      rating: 5,
      title: "Impressive Clinical Standards",
      review: "As a medical professional, I was impressed by their clinical standards and NABH accreditation. Their approach to holistic health is structured, safe, and highly effective for detoxification.",
      verified: true
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isReviewAutoPlaying || testimonials.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, testimonials.length]);

  const goReviewPrevious = () => {
    setIsReviewAutoPlaying(false);
    setCurrentReview((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const goReviewNext = () => {
    setIsReviewAutoPlaying(false);
    setCurrentReview((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const faqItems = [
    {
      question: "What makes Sri Sri Ayurveda Hospital different?",
      answer: "We offer an integrative approach, combining classical Ayurveda with Naturopathy, modern diagnostics, and specialized therapies like Ozone and HBOT in a NABH-accredited facility."
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes, we provide comprehensive online consultations for international and domestic patients who cannot visit the hospital initially."
    },
    {
      question: "How long are the typical treatment programs?",
      answer: "Programs range from 7 days for basic wellness to 21-28 days for deep Panchakarma and chronic disease management. Your doctor will recommend the ideal duration."
    },
    {
      question: "Are the meals provided aligned with the treatment?",
      answer: "Absolutely. We provide customized, sattvic vegetarian meals prepared strictly according to your specific dosha and treatment requirements."
    },
    {
      question: "Do you treat chronic conditions like arthritis or PCOD?",
      answer: "Yes, we have specialized departments and treatment protocols specifically designed for managing chronic musculoskeletal, respiratory, and metabolic conditions."
    },
    {
      question: "Is airport pickup available for international guests?",
      answer: "Yes, we provide dedicated concierge services including airport transfers, language assistance, and help with accommodation arrangements."
    }
  ];

  const jumpSections = [
    { id: "overview", title: "Center Overview" },
    { id: "about", title: "About Hospital" },
    { id: "programs", title: "Top Ayurveda Packages" },
    { id: "why-choose", title: "Why Choose Us" },
    { id: "process", title: "Your Healing Journey" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "faq", title: "FAQs" },
    { id: "contact", title: "Contact Information" }
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300);
  };

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
              <a href="/centers" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              Sri Sri Ayurveda Hospital Bengaluru
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="bg-[#2C4E5A] text-white py-10 pt-10 md:pt-14">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Sri Sri Ayurveda Hospital Bengaluru</h1>
                <p className="text-xl mb-4 opacity-90">Premium Integrative Ayurvedic Hospital</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Kanakapura Road, Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.4</span>
                  <span className="opacity-90">(950 reviews)</span>
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

      {/* About Section (Introduction) */}
      <section id="about" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-[#2C4E5A]/5">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] leading-tight md:leading-[1.1] max-w-4xl mx-auto px-2">
                Authentic Ayurvedic Excellence <br className="hidden lg:block" />
                at Sri Sri Ayurveda Hospital
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="text-left space-y-8">
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80 text-justify md:text-left" style={{ color: "#7F543D" }}>
                  <p>
                    Welcome to Sri Sri Ayurveda Hospital in Bengaluru, a premier <strong className="font-bold text-[#2C4E5A]">NABH-accredited</strong> institution where the timeless wisdom of classical Ayurveda converges with modern medical science. Administered by the Sri Sri Ravi Shankar Vidya Mandir Trust, our hospital is deeply rooted in the holistic philosophy of the Art of Living. We believe that true health is not merely the absence of disease, but a dynamic state of physical, mental, and spiritual well-being. Nestled in a serene, natural environment away from the city's chaos, our campus provides the ideal setting for deep cellular healing and rejuvenation.
                  </p>

                  {/* Second Image - Mobile Only (Inserted between paragraphs) */}
                  <div className="lg:hidden py-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/50 aspect-[16/10]">
                        <img 
                          src="/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Sri Sri Ayurveda Hospital Bengaluru/second image.webp" 
                          alt="Sri Sri Ayurveda Hospital Bengaluru Secondary View"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    Our unique approach integrates authentic Ayurvedic detoxification therapies, such as <strong className="font-bold text-[#2C4E5A]">Panchakarma</strong>, with advanced diagnostics and lifestyle modifications. At the heart of our diagnostic process is <strong className="font-bold text-[#2C4E5A]">Nadi Pariksha</strong> (Pulse Diagnosis), a highly specialized technique used by our expert physicians to accurately identify the root cause of imbalances within your unique constitution (Prakriti). By combining these profound Ayurveda treatments with yoga, meditation, and customized sattvic diets, we ensure a comprehensive, evidence-based healing journey tailored exclusively for you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2C4E5A]/20 to-[#C68D6A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                    <img 
                      src="/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Sri Sri Ayurveda Hospital Bengaluru/Main Image.webp" 
                      alt="Sri Sri Ayurveda Hospital Bengaluru Main View"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Second Image - Desktop Only */}
                <div className="hidden lg:block">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                      <img 
                        src="/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Sri Sri Ayurveda Hospital Bengaluru/second image.webp" 
                        alt="Sri Sri Ayurveda Hospital Bengaluru Secondary View"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 text-center border-t border-[#2C4E5A]/10 mt-12">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2C4E5A] leading-relaxed">
                Your journey to renewed health begins with a single step.{" "}
                <span 
                  className="text-[#2C4E5A] underline cursor-pointer hover:text-[#2C4E5A]/80 font-bold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  CONTACT 
                </span>{" "}
                My Vaidyam to connect with the best of authentic <em>Ayurveda</em> in India.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda Packages (6 Cards) */}
      <section id="programs" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A]">Top Ayurveda Packages in Sri Sri Ayurveda Hospital</h2>
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

      {/* Why Choose Us (6 Cards) */}
      <section id="why-choose" className="py-4 md:py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#EDE8D0] rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm">
            <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Why Choose Sri Sri Ayurveda Hospital</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Experience authentic healing supported by modern infrastructure and compassionate care.
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

      {/* Treatment Process (6 Steps Grid) */}
      <section id="process" className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Your Healing Journey in Sri Sri Ayurveda</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A structured, step-by-step approach to restore your natural balance.
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

      {/* CTA Banner */}
      <section className="py-4 md:py-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#2C4E5A" }}>
            <div className="md:hidden">
              <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                <img
                  src="/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/1.jpg"
                  alt="Sri Sri Ayurveda Hospital"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <h2 className="text-xl font-bold text-white text-center mb-4">Ready to Start Your Wellness Journey at Sri Sri Ayurveda?</h2>
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
                <div className="mt-4 flex items-center justify-center gap-2 text-white/90 text-sm">
                  <Phone className="h-4 w-4 text-red-400" />
                  <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                </div>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Wellness Journey at Sri Sri Ayurveda?</h2>
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
                <div className="flex items-center gap-2 text-white/90">
                  <Phone className="h-5 w-5 text-red-400" />
                  <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                </div>
              </div>
              <div>
                <img
                  src="/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/1.jpg"
                  alt="Sri Sri Ayurveda Hospital"
                  className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
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
            <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Real stories of healing from our global guests.</p>
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
                    {testimonials[currentReview].title}
                  </h3>
                  <p className="text-xl md:text-2xl leading-relaxed" style={{ color: "#7F543D" }}>
                    "{testimonials[currentReview].review}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2C4E5A] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                    {testimonials[currentReview].name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg md:text-xl font-bold text-[#2C4E5A]">{testimonials[currentReview].name}</h4>
                      {testimonials[currentReview].verified && (
                        <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                          <span className="text-xs">✓</span> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm md:text-base" style={{ color: "#7F543D" }}>
                      {testimonials[currentReview].location} • Treated for {testimonials[currentReview].condition}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < testimonials[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                    ))}
                  </div>
                  <span className="text-sm md:text-base font-bold text-[#2C4E5A]">{testimonials[currentReview].rating}.0</span>
                </div>
              </CardContent>
            </Card>

            <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-8 z-20">
              <button
                onClick={goReviewPrevious}
                className="bg-white/90 hover:bg-[#2C4E5A] hover:text-white text-[#2C4E5A] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#2C4E5A] active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-8 z-20">
              <button
                onClick={goReviewNext}
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
            <p className="text-lg text-foreground/70">Find answers to common queries about treatments at Sri Sri Ayurveda.</p>
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
              <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Reach out to us to begin your journey towards holistic health.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><MapPin className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Hospital Address</h3>
                    <p className="text-foreground/70 leading-relaxed" style={{ color: "#7F543D" }}>
                      Sri Sri Ayurveda Hospital<br />
                      21st km, Kanakapura Road, Udayapura Post<br />
                      Bengaluru, Karnataka 560082, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><Phone className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Contact Numbers</h3>
                    <p className="text-foreground/70 leading-relaxed" style={{ color: "#7F543D" }}>+91 80 2843 2737</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><Globe className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Distance</h3>
                    <ul className="text-foreground/70 leading-relaxed space-y-1" style={{ color: "#7F543D" }}>
                      <li>• Approx. 50 km from Kempegowda International Airport (BLR)</li>
                      <li>• Approx. 20 km from KSR Bengaluru Railway Station</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-2 rounded-3xl overflow-hidden shadow-lg h-[400px] border-4 border-white/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.71696069042!2d77.51967472405238!3d12.822670148652424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41a95365695f%3A0xf44cc491a5662f1f!2sSri%20Sri%20Ayurveda%20Hospital%20-%20NABH%20accredited%20Multi%20Specialty%20Ayurveda%20Hospital%20in%20Bengaluru!5e0!3m2!1sen!2sin!4v1778153524065!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
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
            src="/Center Images/Sri Sri/footer-cta.png"
            alt="Ayurvedic Therapy at Sri Sri"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#2C4E5A]/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our doctors will guide you towards the perfect treatment program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20with%20Sri%20Sri%20Ayurveda%20Hospital."
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
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200"><ChevronRight className="h-3.5 w-3.5 text-[#2C4E5A] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" /></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

