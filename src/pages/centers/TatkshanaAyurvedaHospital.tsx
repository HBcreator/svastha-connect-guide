import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, ChevronRight, Building2, Leaf, Users, Award, ShieldCheck, TreePine, Phone, MessageCircle, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, ChevronLeft, Globe, Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function TatkshanaAyurvedaHospital() {
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
      title: "Clinical Diagnostic Consultation",
      description: "In-depth baseline assessment including traditional Ayurvedic pulse reading (Nadi Pariksha) and comprehensive physical case reviews.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Formulating Your Remedial Blueprint",
      description: "Developing an individualized therapeutic plan encompassing dietary prescriptions, lifestyle modifications, and targeted clinical procedures.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Preparatory Mobilization)",
      description: "Administering targeted external oil applications and customized herbal steam therapies to loosen and liquefy deep systemic toxins.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Targeted Classical Purification",
      description: "Executing precise bio-cleansing procedures (Panchakarma) tailored specifically to eliminate accumulated deep-seated metabolic wastes.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Fresh In-House Restoratives",
      description: "Administering freshly prepared, high-potency herbal remedies from our own pharmacy to nourish tissues and rebuild core physical strength.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Integrated Continuing Care",
      description: "Supporting your long-term health with practical diet plans, home exercises, and scheduled virtual doctor consultations.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];

  const testimonials = [
    {
      title: "Gastric Issues and IBS Cured Completely!",
      review: "Struggling with painful hyperacidity and IBS, a thorough diagnostic consultation at Tatkshana led to custom Panchakarma cleansing and fresh herbal teas that completely healed my gut. My digestion is excellent, and I finally feel incredibly light!",
      name: "Audrey Laurent",
      verified: true,
      location: "Geneva, Switzerland",
      condition: "Severe IBS & Hyperacidity",
      rating: 5
    },
    {
      title: "Walk Pain-Free Without Spinal Surgery!",
      review: "A herniated disc and severe sciatica made walking a nightmare. The specialized spine restoration therapies and targeted oils at Tatkshana worked absolute wonders. The pain has completely vanished and my flexibility is fully restored. Extremely clean rooms.",
      name: "Jonas Fischer",
      verified: true,
      location: "Hamburg, Germany",
      condition: "Herniated Lumbar Disc",
      rating: 5
    },
    {
      title: "Inflamed Hives and Allergies Cleared!",
      review: "Suffering from chronic skin allergies and persistent red hives, the doctors put me on intensive blood purification and customized herbal packs. Within a week, the intense itching stopped and redness cleared, leaving my skin completely healthy.",
      name: "Emma Van Dyke",
      verified: true,
      location: "Amsterdam, Netherlands",
      condition: "Chronic Skin Hives",
      rating: 5
    },
    {
      title: "Kidney Stones Cleared Naturally and Quickly",
      review: "Suffering from recurrent kidney stones, the non-invasive diuretic herbs freshly prepared at the Tatkshana pharmacy safely dissolved my stones within just ten days. The doctors were exceptionally supportive and highly skilled. I highly recommend this hospital!",
      name: "Liam Fitzpatrick",
      verified: true,
      location: "Dublin, Ireland",
      condition: "Recurrent Kidney Stones",
      rating: 5
    },
    {
      title: "Empathetic and Successful PCOS Support!",
      review: "Dr. Manasa's hormone balancing program is completely outstanding. Her compassionate guidance, custom dietary adjustments, and herbal remedies successfully regulated my cycles and permanently eliminated my PCOS fatigue. The hospital is highly professional and hygienic.",
      name: "Anya Kovalenko",
      verified: true,
      location: "Kyiv, Ukraine",
      condition: "PCOS & Hormone Imbalance",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "What sets Tatkshana Ayurveda Hospital apart?",
      answer: "Tatkshana Ayurveda Hospital is a premier, dedicated recovery facility in Yeshwanthpur, Bangalore. Founded by renowned senior specialists Dr. Ashakiran and Dr. Manasa, we feature a fully equipped in-house fresh pharmacy, comfortable inpatient rooms, and exceptional metro accessibility."
    },
    {
      question: "Who designs and directs the medical protocols?",
      answer: "All clinical treatments are designed and overseen by our founders, Dr. Ashakiran (BAMS, MS) and Dr. Manasa (BAMS, MD), alongside a highly qualified team of registered practitioners."
    },
    {
      question: "What is unique about your pharmacy preparations?",
      answer: "Tatkshana houses a state-of-the-art in-house pharmacy where all classical Ayurvedic preparations, decoctions, and botanical formulations are freshly prepared daily to ensure maximum clinical potency and absolute purity."
    },
    {
      question: "Do you offer inpatient stay accommodations?",
      answer: "Yes, we provide fully serviced inpatient stay options under 24/7 medical supervision. Patients can choose between comfortable shared general wards and completely independent, private recovery rooms."
    },
    {
      question: "Is the hospital insurance-reimbursement friendly?",
      answer: "Yes. Tatkshana operates in alignment with strict NABH safety guidelines. We provide detailed clinical summaries, itemized bills, diagnostics, and discharge documents to enable patients to easily claim AYUSH insurance cashless or reimbursement processing."
    }
  ];

  const programs = [
    {
      title: "Spine & Joint Restoration",
      description: "Targeted Ayurvedic orthopedics and clinical therapies designed to address herniated discs, sciatica, severe spondylosis, and osteoarthritic pain.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Panchakarma detoxification",
      description: "Meticulous classical 5-fold purification therapies tailored to systematically flush out deep-seated cellular toxins and restore dosha balance.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Digestive & Gastrointestinal Care",
      description: "Specialized, highly successful protocols to permanently resolve hyperacidity, irritable bowel syndrome (IBS), bloating, and sluggish metabolism.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Hormonal & Women's Health",
      description: "Compassionate, structured care for PCOS/PCOD, thyroid irregularities, menstrual imbalances, and metabolic optimization under senior specialists.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Allergy & Skin Recovery",
      description: "Deep internal blood purification and freshly prepared external herbal packs to completely clear hives, eczema, and severe skin allergies.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Kidney & Urinary Wellness",
      description: "Highly effective, non-invasive Ayurvedic formulations designed to naturally dissolve kidney stones and support complete urinary tract health.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];

  const whyChooseUs = [
    {
      title: "Eminent Founders & Doctors",
      description: "Directly guided by highly respected senior practitioners Dr. Ashakiran and Dr. Manasa, ensuring clinical diagnostic precision.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Fresh In-House Pharmacy",
      description: "Featuring a dedicated in-house pharmacy where botanical formulations and decoctions are freshly prepared daily for maximum clinical potency.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Comfortable Inpatient Stays",
      description: "Offering fully serviced shared wards and private, independent recovery rooms under round-the-clock professional supervision.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Accredited NABH Guidelines",
      description: "Strictly adheres to standard quality parameters, ensuring exceptional sanitization, standardized drugs, and patient safety.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Excellent Metro Transit",
      description: "Strategically located in Yeshwanthpur near the Sandal Soap Factory Metro Station, providing direct, rapid local connectivity.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "AYUSH Insurance Support",
      description: "Provides highly detailed clinical paperwork, summaries, and bills to facilitate smooth cashless or reimbursement insurance claims.",
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
    document.title = "Tatkshana Ayurveda Hospital | Best Panchakarma & Joint Care in Bangalore";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Book consultations and treatments at Tatkshana Ayurveda Hospital in Yeshwanthpur, Bangalore. Experience expert joint care, freshly prepared medicines, and authentic Panchakarma.");

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
              <a href="/centers" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              Tatkshana Ayurveda Hospital Bengaluru
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Tatkshana Ayurveda Hospital</h1>
                <p className="text-xl mb-4 opacity-90">Expert Joint Care, Fresh Pharmacy & Authentic Panchakarma</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Yeshwanthpur, Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(300 reviews)</span>
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
                at Tatkshana Ayurveda Hospital
</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="text-left space-y-8">
                <div className="space-y-6 text-base md:text-xl leading-relaxed text-foreground/80 text-left" style={{ color: "#7F543D" }}>
                  <p>
                    Welcome to <strong className="font-bold text-[#2C4E5A]">Tatkshana Ayurveda Hospital</strong>, Yeshwanthpur’s premier destination for authentic Ayurvedic medical care and holistic structural recovery. Conveniently located on the main road in the Industrial Suburb, steps away from the Sandal Soap Factory Metro Station, our hospital strictly rejects generic wellness spa programs and focuses entirely on physician-led therapeutic diagnostics. Under the strict guidelines of NABH safety standards, Tatkshana has earned an outstanding reputation as a trusted center for patient recovery from chronic, acute, and multi-system conditions.
                  </p>
                  
                  <div className="lg:hidden py-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/50 aspect-[16/10]">
                        <img 
                          src="/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png" 
                          alt="Tatkshana Ayurveda Hospital Exterior"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png"; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    Co-founded and directed by senior clinical specialists <strong className="font-bold text-[#2C4E5A]">Dr. Ashakiran</strong> and <strong className="font-bold text-[#2C4E5A]">Dr. Manasa</strong>, Tatkshana delivers a highly personalized healing framework. We feature a state-of-the-art in-house pharmacy where classical Ayurvedic preparations, decoctions, and targeted botanical remedies are freshly formulated daily under clinical supervision. The hospital is equipped with comfortable inpatient accommodations, including serviced general wards and private recovery rooms, specializing in advanced spine and joint restoration, gastrointestinal healing (IBS and acidity), kidney stone elimination, and hormonal balance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2C4E5A]/20 to-[#C68D6A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                    <img 
                      src="/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Tatkshana Ayurveda Hospital/main.png" 
                      alt="Tatkshana Ayurveda Hospital Yeshwanthpur"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png"; }}
                    />
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                      <img 
                        src="/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Tatkshana Ayurveda Hospital/secondary.webp" 
                        alt="Ayurvedic Therapy Room at Tatkshana"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/14.jpg"; }}
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
                My Vaidyam to connect with Tatkshana Ayurveda Hospital today.
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
              Top Ayurveda Programs in <br className="hidden lg:block" /> Tatkshana Ayurveda Hospital
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
                Why Choose <br className="hidden lg:block" /> Tatkshana Ayurveda Hospital
</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Discover a dedicated wellness clinic that brings specialized natural solutions for fertility, detox, and rehabilitation.
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
              Your Healing Journey at <br className="hidden lg:block" /> Tatkshana Ayurveda Hospital
</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A highly structured, traditional recovery pathway guided entirely by senior physicians from pulse diagnostics to complete long-term home health.
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
                  src="/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png"
                  alt="Tatkshana Ayurveda Hospital"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png"; }}
                />
                <h2 className="text-xl font-bold text-white text-center mb-4">Ready to Start Your Wellness Journey at Tatkshana Ayurveda Hospital?</h2>
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
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Wellness Journey at Tatkshana Ayurveda Hospital?</h2>
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
                  src="/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Tatkshana Ayurveda Hospital/main.png"
                  alt="Tatkshana Ayurveda Hospital"
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white/20 transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png"; }}
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
            <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Real stories of healing from our patients.</p>
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
                           Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm md:text-base" style={{ color: "#7F543D" }}>
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
            <p className="text-lg text-foreground/70">Find answers to common queries about treatments at Tatkshana Ayurveda Hospital.</p>
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
                      Tatkshana Ayurveda Hospital<br />
                      45/13, Industrial Suburb, Yeshwanthpur<br />
                      Bengaluru, Karnataka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><Phone className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    +91 989 xxxx xxx</div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><MapPin className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Distance</h3>
                    <ul className="text-foreground/70 leading-relaxed space-y-1" style={{ color: "#7F543D" }}>
                      <li>• Approx. 32 km from Kempegowda International Airport</li>
                      <li>• Approx. 1.5 km from Yesvantpur Junction Railway Station</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2590233425153!2d77.54982927507726!3d13.019170287300577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7100072c7d%3A0xa09d052683dd3b61!2sTatkshana%20Ayurveda%20Hospital!5e0!3m2!1sen!2sin!4v1779694526935!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tatkshana Ayurveda Hospital Location"
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
            src="/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Tatkshana Ayurveda Hospital/main.png"
            alt="Ayurvedic Therapy at Tatkshana"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/3.jpg"; }}
          />
          <div className="absolute inset-0 bg-[#2C4E5A]/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our doctors will guide you towards the perfect treatment program at Tatkshana.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/918722034900?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20Tatkshana%20Ayurveda%20Hospital."
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
