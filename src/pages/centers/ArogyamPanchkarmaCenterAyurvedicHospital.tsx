import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, ChevronRight, Building2, Leaf, Users, Award, ShieldCheck, TreePine, Phone, MessageCircle, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, ChevronLeft, Globe, Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function ArogyamPanchkarmaCenterAyurvedicHospital() {
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
      title: "Pulse & Nadi Assessment",
      description: "Undergoing an initial detailed health consultation and traditional pulse diagnosis (Nadi Pariksha) with Dr. Vipul Sharma to assess constitution (Prakriti) and current imbalances.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Customized Herbal Selection",
      description: "Formulating chemical-free, hormone-free, and steroid-free organic herbal decoctions and creating a tailored Ayurvedic diet plan.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Preparatory Snehana & Swedana",
      description: "Beginning internal and external oil lubrication, combined with specialized steam baths to mobilize deep-seated bodily toxins.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Core Shodhana Purification",
      description: "Administering custom-tailored Panchakarma therapies like Vamana, Virechana, or customized herbal Basti based on clinical requirements.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Naturopathic Accents",
      description: "Integrating complementary drugless treatments such as hydrotherapy, magnetotherapy, or acupressure to build system-wide immunity.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Rasayana Rejuvenation",
      description: "Receiving long-term dietary plans, lifestyle guidance, and natural health blue-prints to sustain wellness at home.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];

  const testimonials = [
    {
      title: "Clear skin after years of struggle",
      review: "I suffered from severe psoriasis for almost a decade and tried all kinds of modern treatments with little success. The specialized skin program at Arogyam completely changed my life.",
      name: "Bernard Stan",
      verified: true,
      location: "Marseille, France",
      condition: "Chronic Psoriasis & Skin Care",
      rating: 5
    },
    {
      title: "Highly professional Ayurvedic hospital",
      review: "The 14-day Panchakarma detox program was excellent. The hospital has top-class facilities, and Dr. Sharma is a highly qualified expert. The therapy sessions were done with great care.",
      name: "Zoltan Kovacs",
      verified: true,
      location: "Budapest, Hungary",
      condition: "14 Days Complete Panchakarma",
      rating: 5
    },
    {
      title: "Significant relief from joint stiffness",
      review: "I came to Arogyam suffering from severe knee joint pain and stiffness. The customized therapeutic treatments, warm herbal poultice massages, and specific oil therapies gave me incredible relief.",
      name: "Kieran O'Reilly",
      verified: true,
      location: "Dublin, Ireland",
      condition: "Joint Pain & Arthritis Care",
      rating: 5
    },
    {
      title: "Wonderful care for women's health",
      review: "The PCOS and fertility wellness program at Arogyam is outstanding. The holistic combination of detox therapies, targeted diet guidelines, and natural herbal formulations helped restore my body's balance.",
      name: "Anouk Hyung",
      verified: true,
      location: "Antwerp, Belgium",
      condition: "Infertility & Metabolic Reset",
      rating: 5
    },
    {
      title: "Deeply purifying naturopathy and detox",
      review: "My experience at Arogyam was exceptional. Combining traditional Panchakarma with naturopathic treatments like hydrotherapy and acupressure felt very complete.",
      name: "Marta Strom",
      verified: true,
      location: "Gothenburg, Sweden",
      condition: "Naturopathy & Detoxification",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "What clinical specializations does Arogyam focus on?",
      answer: "We specialize in traditional Ayurvedic solutions for chronic skin disorders (like Psoriasis, Vitiligo, eczema), joint care, metabolic disorders, infertility, PCOD, hair loss, and holistic detoxification."
    },
    {
      question: "Where is the hospital located and what facilities are available?",
      answer: "Our hospital is located in Mehatpur, Una, on the Himachal-Punjab border. The facility is fully equipped with inpatient (IPD) and outpatient (OPD) facilities, diagnostic rooms, dedicated Panchakarma chambers, and a naturopathy section."
    },
    {
      question: "Are the herbal medicines chemical-free?",
      answer: "Yes. All medicines and herbal formulations used at Arogyam are 100% natural and prepared without chemicals, hormones, steroids, or synthetic additives."
    },
    {
      question: "Who supervises the treatments and clinical diagnostics?",
      answer: "All programs are directly supervised by Dr. Vipul Sharma, holding a BAMS from Dayanand Ayurvedic College, advanced Panchakarma certifications from Kerala, an MD in Bio-Medicines, and a Ph.D."
    },
    {
      question: "How do I reach the center in Mehatpur, Una?",
      answer: "The closest main railway station is Una Himachal Railway Station (UHL), located about 10 km away. The nearest international airport is Chandigarh International Airport (IXC), which is approximately 130 km away."
    }
  ];

  const programs = [
    {
      title: "7 to 28 Days Classic Panchakarma",
      description: "Complete biological cleansing and detoxification including Vamana, Virechana, Basti, Nasya, and Raktamokshana to eliminate toxins and restore balance.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Chronic Skin & Hair Care",
      description: "Specialized Ayurvedic protocols designed to address chronic skin diseases such as Psoriasis, Vitiligo, eczema, and hair loss from the root.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Joint & Arthritis Relief",
      description: "Therapeutic oil pooling, herbal poultice massage, and custom decoctions to treat rheumatoid arthritis, gout, sciatica, and joint stiffness.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Infertility & Women's Health",
      description: "Holistic detoxification, customized diet plans, and natural herbal therapies to support fertility and manage PCOS/PCOD imbalances.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Lifestyle & Diabetes Management",
      description: "Integrative therapies combining dietary charts, herbal remedies, and lifestyle routines to manage metabolic disorders and diabetes.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Naturopathy & Acupressure",
      description: "Complementary drugless healing modalities including hydrotherapy, magnetotherapy, and targeted acupressure to boost immunity.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];

  const whyChooseUs = [
    {
      title: "Founder's Academic Expertise",
      description: "Led by Dr. Vipul Sharma, holding BAMS, an MD in Bio-Medicines, and a Ph.D., providing a deeply scientific approach to traditional Ayurveda.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Advanced Kerala Training",
      description: "Dr. Vipul Sharma holds advanced certifications in Panchakarma and specialized classical therapies completed directly in Kerala.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Established since 2007",
      description: "Over 18+ years of dedicated clinical experience in treating chronic skin, joint, and reproductive disorders in Northern India.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Fully Equipped Hospital",
      description: "Offers complete IPD and OPD facilities, diagnostic rooms, dedicated therapy chambers, and naturopathy sections.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Border Highway Connectivity",
      description: "Located right on the Una-Nangal Highway in Mehatpur, offering easy accessibility for patients from Himachal, Punjab, and neighboring regions.",
      icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Pure Herbal Formulations",
      description: "Strictly utilizes 100% natural, chemical-free, hormone-free, and steroid-free formulations for all internal and external therapies.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
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
    document.title = "Arogyam Panchkarma Center & Ayurvedic Hospital | Una Himachal";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Experience authentic Ayurvedic Panchakarma, chronic skin care (psoriasis/vitiligo), joint relief, and natural wellness under Dr. Vipul Sharma. Foundations since 2007.");

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
              Arogyam Panchkarma Center & Ayurvedic Hospital Himachal
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Arogyam Panchkarma Center & Ayurvedic Hospital</h1>
                <p className="text-xl mb-4 opacity-90">Traditional Ayurvedic Panchakarma & Chronic Disease Management Since 2007</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Haridwar, Himachal Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(110 Reviews)</span>
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
                at Arogyam Panchkarma Center & Ayurvedic Hospital
</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="text-left space-y-8">
                <div className="space-y-6 text-base md:text-xl leading-relaxed text-foreground/80 text-left" style={{ color: "#7F543D" }}>
                  <p>
                    Welcome to <strong className="font-bold text-[#2C4E5A]">Arogyam Panchkarma Center & Ayurvedic Hospital</strong>, a premier alternative medicine hospital located in Mehatpur, Una district, Himachal Pradesh. Established in 2007 by Dr. Vipul Sharma, our facility combines classical Ayurvedic Panchakarma, diagnostic expertise, and natural drugless treatments to support full-body recovery and wellness.
                  </p>
                  
                  <div className="lg:hidden py-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/50 aspect-[16/10]">
                        <img 
                          src="/TOP cneters/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/secondary.webp" 
                          alt="Arogyam Panchkarma Center & Ayurvedic Hospital grounds and view"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    Situated conveniently on the Una-Nangal Highway, the hospital offers comprehensive inpatient (IPD) and outpatient (OPD) care. We focus heavily on chronic and acute disorders, particularly joint pain, rheumatoid arthritis, reproductive imbalances, infertility, and chronic skin conditions like Psoriasis and Vitiligo.
                  </p>

                  <p>
                    Each patient receives a customized diagnostic plan under Dr. Sharma's direct supervision. By integrating traditional detoxification therapies with tailored Saatvic diet charts, naturopathic hydrotherapy, and acupressure, Arogyam helps patients activate their body's innate healing potential without relying on chemicals or steroids.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2C4E5A]/20 to-[#C68D6A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                    <img 
                      src="/TOP cneters/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/main.JPG" 
                      alt="Arogyam Panchkarma Center & Ayurvedic Hospital"
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
                        src="/TOP cneters/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/secondary.webp" 
                        alt="Arogyam Panchkarma Center Therapy Space"
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
                Your journey to authentic healing and balance begins with a single step.{" "}
                <span 
                  className="text-[#2C4E5A] underline cursor-pointer hover:text-[#2C4E5A]/80 font-bold"
                  onClick={() => setQuoteModalOpen}
                >
                  CONTACT 
                </span>{" "}
                My Vaidyam to connect with Arogyam Panchkarma Center & Ayurvedic Hospital today.
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
              Top Ayurveda Programs in <br className="hidden lg:block" /> Arogyam Panchkarma Center & Ayurvedic Hospital
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
                Why Choose <br className="hidden lg:block" /> Arogyam Panchkarma Center & Ayurvedic Hospital
</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Experience authentic Ayurvedic treatments, advanced clinical specializations, and naturopathic care under the expert direction of Dr. Vipul Sharma.
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
              Your Healing Journey at <br className="hidden lg:block" /> Arogyam Panchkarma Center & Ayurvedic Hospital
</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A systematic approach of yoga, meditation, and traditional purification to harmonize your physical body, breath, and awareness.
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
                  src="/TOP cneters/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/main.JPG"
                  alt="Arogyam Panchkarma Center & Ayurvedic Hospital"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                />
                <h2 className="text-xl font-bold text-white text-center mb-4">Ready to Start Your Wellness Journey at Arogyam?</h2>
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
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Wellness Journey at Arogyam?</h2>
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
                  src="/TOP cneters/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/main.JPG"
                  alt="Arogyam Panchkarma Center & Ayurvedic Hospital"
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
            <p className="text-lg text-foreground/70">Find answers to common queries about treatments and clinical services at Arogyam.</p>
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
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Center Address</h3>
                    <div className="text-foreground/70 leading-relaxed space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                      <p>Arogyam Tower, Una-Nangal Highway, Opposite Police Station, Mehatpur, District Una, Himachal Pradesh</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><Phone className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Contact Details</h3>
                    <div className="text-foreground/70 leading-relaxed space-y-1.5" style={{ color: "#7F543D" }}>
                      <div>+91 989 xxxx xxx</div>
                      
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><MapPin className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Distance & Transit</h3>
                    <ul className="text-foreground/70 leading-relaxed space-y-1.5" style={{ color: "#7F543D" }}>
                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Approx. 10 km from Una Himachal Railway Station</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Approx. 130 km from Chandigarh International Airport</span>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7333447.253783441!2d72.41503887297377!3d26.171137415811945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949f3edc62c27%3A0xb928111491814333!2sAarogyam%20Yoga%20and%20Panchakarma%20Center!5e0!3m2!1sen!2sin!4v1780496170481!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arogyam Panchkarma Center & Ayurvedic Hospital Location"
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
            src="/TOP cneters/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/main.JPG"
            alt="Arogyam Panchkarma Center & Ayurvedic Hospital"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/3.jpg"; }}
          />
          <div className="absolute inset-0 bg-[#2C4E5A]/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation. Our dedicated practitioners will guide you towards the perfect treatment or wellness program at Arogyam.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/919805038733?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20Arogyam%20Panchkarma%20Center%20%26%20Ayurvedic%20Hospital."
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
