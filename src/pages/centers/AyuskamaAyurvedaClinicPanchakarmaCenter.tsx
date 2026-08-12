import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, ChevronRight, Building2, Leaf, Users, Award, ShieldCheck, TreePine, Phone, MessageCircle, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, ChevronLeft, Globe, Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function AyuskamaAyurvedaClinicPanchakarmaCenter() {
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
      title: "Dosha & Prakriti Assessment",
      description: "A detailed clinical check-up and pulse review overseen by senior Vaidyas to establish your body constitution, determine dosha balances, and outline healing goals.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Custom Healing Schedule",
      description: "Compiling a customized daily timeline of botanical therapies, dietary directions, mindful breathing sets, and recommended organic herbal extracts.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Purva Karma Warmups",
      description: "Warm synchronized oil massage (Abhyangam) and customized steam baths (Swedana) using fresh herbal infusions to loosen metabolic cell wastes and prep the body's channels.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Pradhana Karma Cleansing",
      description: "Supervised administration of traditional biological cleansing (such as Virechana, Vasti, or Nasyam) to eliminate deep toxic accumulations and balance key functions.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Mindfulness & Restorative Yoga",
      description: "Sunset breathwork and physician-guided yoga exercises at our scenic open-air shala to restore cellular energy, build core strength, and calm the nerves.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Dinacharya Home Care",
      description: "Compiling a personal daily routine plan, customized home diet guidelines, breathing exercises, and recommended organic supplements to sustain long-term vital health.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];

  const testimonials = [
    {
      title: "Life-changing Panchakarma & Sciatica Relief",
      review: `I came to Ayuskama Rishikesh suffering from severe chronic sciatica and constant lower back pain.
Dr. Vinod Kumar designed a comprehensive 14-day treatment that targetted my spine.
The therapy successfully eliminated my pain and restored my mobility completely.`,
      name: "Liam Harrison",
      verified: true,
      location: "Melbourne, Australia",
      condition: "Chronic Sciatica & Spine Care",
      rating: 5
    },
    {
      title: "Deeply Transformative Detox & Digestion Restoration",
      review: `My Panchakarma detox at Ayuskama was fantastic and the consultation was extremely thorough.
Dr. Neetu Singh analyzed my imbalances and guided me through Virechana and daily oil massages.
I feel completely rejuvenated, and my digestion is better than it has been in years.`,
      name: "Emma Watson",
      verified: true,
      location: "Oxford, UK",
      condition: "Panchakarma Detox & Digestion",
      rating: 5
    },
    {
      title: "Excellent Ayurveda Course & Certification",
      review: `I joined the Ayurveda Nutrition and Marma Therapy certification course here.
The theoretical teachings are backed by deep practical clinical sessions in the clinic.
It was a great experience that gave me the confidence to practice Ayurveda professionally.`,
      name: "Lucas Novak",
      verified: true,
      location: "Prague, Czech Republic",
      condition: "Ayurveda Nutrition & Marma Course",
      rating: 5
    },
    {
      title: "Wonderful Stress Relief & Rejuvenation Retreat",
      review: `I booked a 7-day rejuvenation retreat at Ayuskama to recover from career burnout.
The Shirodhara treatment was relaxing, and morning yoga sessions helped calm my mind.
This sanctuary in Upper Tapovan is exactly what I needed to heal and recharge.`,
      name: "Chloe Mercier",
      verified: true,
      location: "Geneva, Switzerland",
      condition: "Stress & Rejuvenation Retreat",
      rating: 5
    },
    {
      title: "Incredible Support for Women's Health",
      review: `I went to Ayuskama to address long-standing hormonal imbalances and low energy.
Dr. Neetu Singh was extremely empathetic, knowledgeable, and designed a custom plan.
The herbs and dietary changes have brought back my vitality and balance.`,
      name: "Mia Rossi",
      verified: true,
      location: "Milan, Italy",
      condition: "Women's Hormonal Health & Vitality",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "What makes Ayuskama Ayurveda Clinic & Panchakarma Center unique?",
      answer: "Ayuskama Ayurveda is located in Upper Tapovan, Rishikesh. The center is led by Dr. Vinod Kumar (an expert in Panchakarma with over 25 years of experience) and Dr. Neetu Singh (specializing in women's health and yoga therapy with over 20 years of experience). We combine authentic Keralite Panchakarma treatments, clinical research-oriented practices, and globally certified educational courses in a quiet, serene environment."
    },
    {
      question: "What certification courses do you offer?",
      answer: "We offer professional, globally recognized certification courses including Ayurvedic Massage, Marma Therapy, and Ayurvedic Nutrition. We provide both short-term training and intensive 4-week certification programs designed for beginners to advanced practitioners."
    },
    {
      question: "Are meals and accommodations included in the packages?",
      answer: "Yes. Our residential Panchakarma and rejuvenation retreats include private accommodation and fresh, balanced Saatvic vegetarian meals prepared daily according to Ayurvedic principles to support your purification process."
    },
    {
      question: "How do I book a treatment program at Ayuskama?",
      answer: "You can book by contacting us through My Vaidyam. We require an initial deposit to confirm your booking, and the remaining balance can be settled upon arrival at the center. Consultations can be scheduled both offline and online."
    },
    {
      question: "How far is the center from the nearest airport and railway stations?",
      answer: "Our center is located in Upper Tapovan, Rishikesh. It is approximately 21 km (about 40 minutes) from Jolly Grant Airport (Dehradun Airport - DED). The Yog Nagari Rishikesh and Rishikesh Railway Stations are about 5–6 km away, while the Haridwar Railway Station is approximately 30 km away."
    }
  ];

  const programs = [
    {
      title: "Classical Panchakarma",
      description: "A complete five-fold biological detoxification program including Abhyanga (massage), Virechana, and Basti under close supervision of senior physicians.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Ayurveda Training & Certification",
      description: "Globally accredited professional courses in Ayurvedic Massage, Marma Therapy, and Ayurvedic Nutrition taught by experienced doctors.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Rejuvenation & Yoga Retreat",
      description: "Scenic 7, 14, and 21-day wellness programs integrating daily yoga, customized therapies, and organic Saatvic dining in Tapovan.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Spine & Joint Wellness",
      description: "Targeted clinical treatments for sciatica, back pain, arthritis, and joint stiffness using specialized herbal poultices and oil pools.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Women's Health & Gynecology",
      description: "Specialized clinical consultations and therapeutic regimens focusing on hormonal balance, prenatal/postnatal care, and wellness led by Dr. Neetu Singh.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Stress & Anxiety Reset",
      description: "Deep calming therapies featuring warm Shirodhara oil flows, guided meditation, and therapeutic breathwork to heal corporate burnout.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];

  const whyChooseUs = [
    {
      title: "Veteran Doctor Panel",
      description: "Led by Dr. Vinod Kumar (25+ yrs experience) and Dr. Neetu Singh (20+ yrs experience) who supervise all clinical therapies.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Accredited Training",
      description: "Offers globally recognized certifications in Ayurvedic Massage, Marma, and Nutrition, ensuring high academic standards.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Tapovan Foothills Peace",
      description: "Located near the secret waterfall road in Upper Tapovan, providing a quiet, pollution-free, and inspiring natural sanctuary.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Integrated Yoga Therapy",
      description: "Therapies are coupled with morning yoga, pranayama, and meditation designed to align the body's energy channels.",
      icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Saatvic Healing Meals",
      description: "Nutritious organic vegetarian food prepared in accordance with Ayurvedic principles to balance individual Doshas.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Personalized Care",
      description: "Maintaining small residential batches to guarantee that every guest receives individual attention from our Vaidyas and therapists.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
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
    document.title = "Ayuskama Ayurveda Clinic & Panchakarma Center | Rishikesh";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Experience authentic Panchakarma detoxification, globally certified Ayurvedic training courses, and holistic yoga retreats at Ayuskama Ayurveda Clinic in Upper Tapovan, Rishikesh under veteran Ayurvedic doctors.");

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
              Ayuskama Ayurveda Clinic & Panchakarma Center Rishikesh Uttarakhand
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Ayuskama Ayurveda Clinic & Panchakarma Center</h1>
                <p className="text-xl mb-4 opacity-90">Authentic Ayurvedic Healing & Panchakarma Detoxification</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Rishikesh, Uttarakhand, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(340 Reviews)</span>
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
                at Ayuskama Ayurveda Clinic & Panchakarma Center
</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="text-left space-y-8">
                <div className="space-y-6 text-base md:text-xl leading-relaxed text-foreground/80 text-left" style={{ color: "#7F543D" }}>
                  <p>
                    Welcome to <strong className="font-bold text-[#2C4E5A]">Ayuskama Ayurveda Clinic & Panchakarma Center</strong>, a premier healing sanctuary and educational institution located in the serene surroundings of Upper Tapovan, Rishikesh. Established to revive the ancient, time-tested wisdom of Ayurveda, Ayuskama is led by the highly regarded <strong className="font-bold text-[#2C4E5A]">Dr. Vinod Kumar</strong>, a veteran Ayurvedic physician and Panchakarma expert with over 25 years of experience, and <strong className="font-bold text-[#2C4E5A]">Dr. Neetu Singh</strong>, a specialist in therapeutic yoga and women's health with over 20 years of experience. We provide a peaceful retreat for profound body purification, mental clarity, and professional Ayurvedic training courses.
                  </p>
                  
                  <div className="lg:hidden py-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/50 aspect-[16/10]">
                        <img 
                          src="/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Center/secondary.jpg" 
                          alt="Ayuskama Ayurveda Clinic gardens and view"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    Our center specializes in custom Panchakarma detoxification, Ayurvedic nutrition, and chronic disease management. Under the direct supervision of our experienced Vaidyas and skilled therapists, we offer personalized treatment programs targeting spinal conditions, joint stiffness, sciatic pain, digestive issues, and stress-related ailments. We integrate therapeutic yoga and pranayama with authentic oil massages (Abhyanga), warm Shirodhara flows, and organic herbal formulations to restore constitutional balance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2C4E5A]/20 to-[#C68D6A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                    <img 
                      src="/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Center/main.avif" 
                      alt="Ayuskama Ayurveda Clinic Tapovan Rishikesh"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                    />
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                      <img 
                        src="/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Center/secondary.jpg" 
                        alt="Therapy Room at Ayuskama Ayurveda Clinic"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
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
                My Vaidyam to connect with Ayuskama Ayurveda Clinic today.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda Packages Section */}
      <section id="programs" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
              Top Ayurveda Programs in <br className="hidden lg:block" /> Ayuskama Ayurveda Clinic & Panchakarma Center
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
                Why Choose <br className="hidden lg:block" /> Ayuskama Ayurveda Clinic & Panchakarma Center
</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Experience veteran doctor supervision, accredited certification courses, and Upper Tapovan's tranquil healing environment.
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
              Your Healing Journey at <br className="hidden lg:block" /> Ayuskama Ayurveda Clinic & Panchakarma Center
</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A highly structured scientific healing system combining authentic Keralite Panchakarma therapies with modern naturopathic wellness standards.
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
                  src="/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Center/main.avif"
                  alt="Ayuskama Ayurveda Clinic"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                />
                <h2 className="text-xl font-bold text-white text-center mb-4">Ready to Start Your Wellness Journey at Ayuskama Ayurveda Clinic?</h2>
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
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Wellness Journey at Ayuskama Ayurveda Clinic?</h2>
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
                  src="/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Center/main.avif"
                  alt="Ayuskama Ayurveda Clinic"
                  className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
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
            <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Real stories of healing from our international patients.</p>
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
            <p className="text-lg text-foreground/70">Find answers to common queries about treatments at Ayuskama Rishikesh.</p>
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
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Clinic Address</h3>
                    <p className="text-foreground/70 leading-relaxed" style={{ color: "#7F543D" }}>
                      Ayuskama Ayurveda Clinic & Panchakarma Center<br />
                      60s Caffe, Next street to Hotel Green Hill, Secret Waterfall Road<br />
                      Upper Tapovan, Rishikesh, Uttarakhand
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><Phone className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Contact Numbers</h3>
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
                        <span>Approx. 21 km from Jolly Grant Airport</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Approx. 6 km from Yog Nagari Rishikesh / Rishikesh Railway Station</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.589483503737!2d78.31577877555722!3d30.134558274878227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909118e036b0fed%3A0x62811558f33c6cc8!2sAyuskama%20Ayurveda%20Clinic%20%26%20Panchakarma%20Center.!5e0!3m2!1sen!2sin!4v1780484142716!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ayuskama Ayurveda Clinic Location"
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
            src="/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Center/main.avif"
            alt="Ayuskama Ayurveda Clinic foothills view"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/3.jpg"; }}
          />
          <div className="absolute inset-0 bg-[#2C4E5A]/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation. Our dedicated practitioners will guide you towards the perfect treatment program at Ayuskama Ayurveda Clinic.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/919917317388?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20Ayuskama%20Ayurveda%20Clinic."
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
