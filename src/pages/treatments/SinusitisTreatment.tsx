import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Calendar, MapPin, Star, Leaf, HeartPulse, Droplet, Activity,
  ChevronLeft, ChevronRight, Stethoscope, ReceiptIndianRupee, Sparkles, ShieldCheck, Clock,
  Wind, Flame, Mountain, CheckCircle2, Pill, UtensilsCrossed, Zap, Moon, Circle, ArrowRight,
  Search, Phone, X, ClipboardList, Brain, ThermometerSun
} from "lucide-react";

const doshas = [
  { title: "Kapha Dosha", text: "An aggravated Kapha leads to the production of excess, thick mucus (shleshma), which congests the sinus channels and causes heaviness.", icon: Droplet },
  { title: "Vata Dosha", text: "A vitiated Vata obstructs the flow of mucus and prana (life force energy) in the respiratory tract, causing pressure, pain, and tension headaches.", icon: Wind },
  { title: "Ama (Toxins)", text: "Triggered by improper diet, poor digestion, and cold exposure. The ultimate goal is to eliminate this Ama and pacify the doshas.", icon: Activity },
];

const coreTreatments = [
  {
    title: "Nasya Karma",
    sanskrit: "Nasal Therapy",
    text: "The cornerstone of sinusitis treatment. Involves the administration of medicated oils to lubricate passages, expel mucus, and soothe delicate sinus tissues.",
    icon: Droplet
  },
  {
    title: "Swedana",
    sanskrit: "Herbal Steam",
    text: "Inhaling steam infused with decongestant herbs like eucalyptus or mint to melt solidified mucus and provide immediate relief from congestion.",
    icon: ThermometerSun
  },
  {
    title: "Dhoomapana",
    sanskrit: "Medicated Smoking",
    text: "Inhaling the smoke of specific medicinal herbs to dry up excess fluid and reduce Kapha in the sinuses effectively.",
    icon: Wind
  },
  {
    title: "Abhyanga",
    sanskrit: "Full Body Massage",
    text: "Warm, dosha-specific oil massage focusing on the head, face, and neck to calm Vata, improve circulation, and relax the nervous system.",
    icon: Activity
  }
];

const powerfulHerbs = [
  { name: "Trikatu", text: "A blend of Ginger, Black Pepper, and Long Pepper that stimulates digestive fire (Agni), burns Ama, and acts as a natural decongestant.", icon: Flame },
  { name: "Turmeric (Haridra)", text: "Known for potent anti-inflammatory and antiseptic properties, it reduces sinus inflammation and fights infection.", icon: ShieldCheck },
  { name: "Tulsi (Holy Basil)", text: "An excellent herb for respiratory health, Tulsi helps to liquefy phlegm and carries strong antimicrobial properties.", icon: Leaf }
];

const dietRules = [
  "Favor warm, light, and easy-to-digest foods like soups and quinoa.",
  "Include pungent spices like ginger, garlic, and black pepper to break down mucus.",
  "Avoid cold, heavy, oily, and dairy products (milk, yogurt) as they increase Kapha.",
  "Stay hydrated with warm water or herbal teas throughout the day."
];

const lifestyleRules = [
  "Practice Pranayama (Kapalbhati, Bhastrika) for clearing respiratory channels.",
  "Avoid exposure to cold drafts, dust, pollen, and smoke.",
  "Ensure you get adequate, restful sleep in a warm environment.",
  "Avoid daytime sleep, as it can aggravate the Kapha dosha.",
  "Engage in gentle Yoga (Asanas) to maintain healthy circulation and prevent mucus buildup."
];

const packages = [
  {
    name: "7-Day Nasya & Decongestion",
    duration: "7 Days",
    cost: "$600 - $1,000 USD",
    focus: "A focused, short-term protocol utilizing daily Nasya and herbal steam to provide rapid relief from acute congestion and sinus pressure.",
    image: "/Treatments-images/sinusitis_pack_1.png",
  },
  {
    name: "14-Day Comprehensive Relief",
    duration: "14 Days",
    cost: "$1,200 - $2,000 USD",
    focus: "A deeper healing approach targeting chronic sinusitis. Includes full-body therapies to balance Doshas and strengthen respiratory immunity.",
    image: "/Treatments-images/sinusitis_pack_2.png",
  },
  {
    name: "21-Day Chronic Apeenasa Care",
    duration: "21 Days",
    cost: "$1,800 - $3,200 USD",
    focus: "An intensive program for long-standing, severe sinus issues. Complete systemic detoxification to eradicate root causes and rebuild tissue health.",
    image: "/Treatments-images/sinusitis_pack_3.png",
  }
];

const patientReviews = [
  {
    name: "Konrad Hartstein", location: "Leipzig, Germany", condition: "Chronic Sinusitis",
    title: "Resolved in 14 Days—After Four Years of Failed Antibiotics.",
    review: "I had been managing chronic sinusitis with repeated courses of antibiotics for four years, with only temporary relief. The Ayurvedic sinusitis treatment in India was different; the physician saw a deep Vata-Kapha imbalance, not just an infection. The daily Nasya therapy, with its warm medicated oil, was incredible. It softened and expelled congestion that had been trapped for years. By day twelve, my sinuses were completely clear.",
    rating: 5, verified: true
  },
  {
    name: "Aoife McCarthy", location: "Galway, Ireland", condition: "Post-Surgical Sinusitis",
    title: "This Did in One Week What Sinus Surgery Failed to Achieve.",
    review: "I had already undergone endoscopic sinus surgery two years prior with minimal lasting benefit. The Ayurvedic physician explained how Nasya Karma could therapeutically access areas surgery couldn't. The 14-day program of herbal powder Nasya systematically dissolved the blockages, while the Shirodhara sessions addressed the chronic headaches that came with my condition. Both improved beyond anything I had hoped for.",
    rating: 5, verified: true
  },
  {
    name: "Véronique Aubert", location: "Grenoble, France", condition: "Allergic Rhinosinusitis",
    title: "They Treated the Root Cause—Not Just the Symptoms.",
    review: "For six years, my allergic rhinosinusitis was managed with sprays that only controlled symptoms. The Ayurvedic approach in India was the first to identify and treat the root cause—a Kapha and Vata imbalance. The comprehensive program of Nasya therapy, cleansing, and an anti-Kapha diet was so effective that my nasal congestion reduced by eighty percent within just ten days. The Jala Neti technique they taught me has kept my sinuses clear for months.",
    rating: 5, verified: true
  },
  {
    name: "Nico Vandenberghe", location: "Bruges, Belgium", condition: "Sinus Headaches",
    title: "My Brain Fog, Headaches, and Blocked Sinuses—All Gone.",
    review: "I had not understood that my persistent brain fog and tension headaches were a direct result of my chronic sinus blockage. The physician here explained how they were all connected. The Nasya therapy, he explained, works on the nervous system through the nasal passages, addressing all three issues simultaneously. The treatment produced a mental clarity by week two that I hadn't experienced in years.",
    rating: 5, verified: true
  },
  {
    name: "Sigrid Thorvaldsen", location: "Bergen, Norway", condition: "Anosmia (Loss of Smell)",
    title: "Ayurveda Gave Me Back My Sense of Smell.",
    review: "I had almost completely lost my sense of smell over two years of chronic sinusitis, a symptom no specialist in Norway could address. The physician in India treated this as Apeenasa and prescribed a 21-day Nasya Karma program with Brahmi-infused oil. By day fourteen, my sense of smell had partially returned. By the time I left, it had recovered to an extent that moved me to tears.",
    rating: 5, verified: true
  }
];

const faqItems = [
  { question: "Is Nasya therapy painful?", answer: "No, Nasya is not painful. You may feel a slight tingling or mild irritation initially as the medicated oils interact with the inflamed tissues, but it is generally very soothing and provides rapid relief from pressure." },
  { question: "How quickly can I expect results for chronic sinusitis?", answer: "While acute symptoms like congestion and headaches often improve within the first 3 to 5 days of treatment, completely resolving chronic sinusitis usually requires a comprehensive 14 to 21-day protocol." },
  { question: "Can Ayurveda help if I've already had sinus surgery?", answer: "Yes. Many patients turn to Ayurveda after surgery if symptoms return. Ayurvedic therapies like Nasya and Swedana can reach deep sinus cavities to reduce inflammation and prevent future blockages." },
  { question: "Will I need to follow a strict diet after returning home?", answer: "To maintain the benefits, you will be given specific dietary guidelines to follow. Generally, this involves eating warm, easily digestible foods and avoiding heavy, cold, or dairy products that trigger mucus production." },
  { question: "Are the herbal medicines safe to take with my current prescriptions?", answer: "During your initial consultation, the Ayurvedic physician will review all your current medications. Ayurvedic herbs are generally safe, but the doctor will ensure there are no contraindications before prescribing." }
];

const topAyurvedicCenters = [
  {
    name: "SOUKYA International Holistic Health Centre",
    city: "Bengaluru, Karnataka, India",
    description: "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm. The center offers a holistic approach to wellness with personalized treatments guided by experienced practitioners in a serene environment.",
    rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/centers/bangalore/soukya",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bengaluru, Karnataka, India",
    description: "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village, the center provides personalized therapies guided by experienced Vaidyas and supported by yoga, mindful routines, and sattvic nutrition.",
    rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/centers/bangalore/ayurvedagram",
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Bengaluru Rural, Karnataka, India",
    description: "A serene retreat focused on authentic Ayurveda and yogic living. The center combines classical therapies with guided yoga, meditation, and lifestyle coaching to support detoxification, resilience, and sustainable health improvement.",
    rating: 4.8, reviews: 380, image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg", link: "/centers/udupi/shathayu-ayurveda-yoga-retreat",
  },
  {
    name: "Kairali - The Ayurvedic Healing Village",
    city: "Palakkad, Kerala, India",
    description: "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Panchakarma treatments and traditional healing in a serene, nature-focused environment.",
    rating: 4.8, reviews: 420, image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg", link: "/centers/kerala/kairali-ayurvedic-healing-village",
  },
  {
    name: "Carnoustie Ayurveda Wellness Resort",
    city: "Mararikulam, Kerala, India",
    description: "A premium beachside center known for authentic Panchakarma care, experienced doctors, and personalized recovery-focused plans.",
    rating: 4.7, reviews: 360, image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg", link: "/centers/kerala/carnoustie-ayurveda-wellness-resort",
  },
  {
    name: "Somatheeram Ayurveda Village Resort",
    city: "Thiruvananthapuram, Kerala, India",
    description: "Widely regarded as the world's first Ayurveda resort, providing classical treatments, yoga, and meditation on a beautiful cliff overlooking the Arabian Sea.",
    rating: 4.7, reviews: 510, image: "/Center Images/somatheeram/Somatheeram 01.jpg", link: "/centers/kerala/somatheeram",
  },
];

const SinusitisTreatment = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const updateTopCentersLayout = () => {
      if (window.innerWidth < 768) {
        setTopCentersPerSlide(1);
        setTopCentersMobileView(true);
        return;
      }
      if (window.innerWidth < 1024) {
        setTopCentersPerSlide(2);
        setTopCentersMobileView(false);
        return;
      }
      setTopCentersPerSlide(3);
      setTopCentersMobileView(false);
    };
    updateTopCentersLayout();
    window.addEventListener("resize", updateTopCentersLayout);
    return () => window.removeEventListener("resize", updateTopCentersLayout);
  }, []);

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  
  useEffect(() => {
    setTopCentersSlide((prev) => prev % topCentersTotalSlides);
  }, [topCentersTotalSlides]);

  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (centerName: string) => {
    setExpandedCenterName((prev) => (prev === centerName ? null : centerName));
  };

  const goReviewPrevious = () => setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview((prev) => (prev + 1) % patientReviews.length);

  const jumpSections = [
    { id: "intro", title: "Intro & Overview" },
    { id: "treatments", title: "Core Treatments & Herbs" },
    { id: "lifestyle", title: "Diet & Lifestyle" },
    { id: "cost-duration", title: "Packages, Cost & Duration" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "top-centers", title: "Top Ayurvedic Centers" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Respiratory Health</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Sinusitis Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">A Natural Path to Clear Breathing. Eliminate root causes of congestion and restore balance through authentic Ayurveda.</p>
              <div className="space-y-2.5 pt-2">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 Patient Satisfaction</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button
                className="w-full h-14 rounded-xl bg-white text-[#335765] hover:bg-[#EDE8D0] hover:scale-[1.02] transition-all font-bold text-lg shadow-lg"
                onClick={() => setQuoteModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-14 md:space-y-16">
        
        {/* Intro */}
        <section id="intro" className="scroll-mt-24 mb-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-full min-h-[300px] md:min-h-[450px]">
              <img 
                src="/Treatments-images/sinusitis-treatment/sinusitis-treatment.jpg" 
                alt="Ayurvedic Treatment for Sinusitis" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="space-y-6 text-center md:text-left flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] xl:whitespace-nowrap font-bold text-[#335765] leading-tight">Beyond the Symptoms</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                While modern medicine often focuses on managing symptoms, Ayurveda goes deeper to address the root cause of the issue. Known as Pinas, sinusitis is seen as a result of an imbalance in the body’s fundamental energies.
              </p>
              <div className="space-y-4 text-left flex-grow">
                {doshas.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 bg-[#F8F4E7] p-4 rounded-xl border border-[#d8d0ae]">
                      <div className="mt-1 text-[#335765]"><Icon size={20} /></div>
                      <div>
                        <p className="font-bold text-[#335765]">{item.title}</p>
                        <p className="text-sm text-[#7F543D] mt-1">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pt-2 mt-auto">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all w-fit">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments & Herbs Section */}
        <section id="treatments" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Core Ayurvedic Therapies</h2>
            <p className="text-[#7F543D] text-lg">Powerful and specific therapies designed to cleanse the sinus channels, reduce inflammation, and restore natural balance.</p>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTreatments.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform">
                    <CardContent className="p-5 text-center flex flex-col items-center">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE8D0] ring-4 ring-[#d8d0ae]/30 shrink-0 mb-5">
                        <Icon className="h-7 w-7 text-[#2F5B5D]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#335765] mb-1">{stage.title}</h3>
                      <p className="text-[#7F543D] mb-3 text-xs font-semibold uppercase tracking-wider">{stage.sanskrit}</p>
                      <p className="text-[#5f4636] leading-relaxed text-sm">
                        {stage.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#335765]/20">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: 'url("/Treatments-images/sinusitis_herbs_bg.png")' }} 
              />
              <div className="absolute inset-0 bg-[#335765]/90 z-10" />
              
              <div className="relative z-20 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-3 text-center text-white">
                  <Leaf className="text-[#EDE8D0] h-8 w-8" /> Powerful Herbs for Sinus Relief
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {powerfulHerbs.map((herb, idx) => {
                    const HerbIcon = herb.icon;
                    return (
                      <div key={idx} className="bg-[#F8F4E7]/95 p-6 rounded-2xl border border-[#d8d0ae]/50 shadow-lg hover:-translate-y-1 transition-all flex flex-col backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-[#335765]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            <HerbIcon className="text-[#335765] h-5 w-5" />
                          </div>
                          <h4 className="font-bold text-lg text-[#335765] leading-tight">{herb.name}</h4>
                        </div>
                        <p className="text-[#7F543D] text-sm leading-relaxed font-medium">{herb.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diet & Lifestyle Section */}
        <section id="lifestyle" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Diet & Lifestyle: Your Role in Healing</h2>
            <p className="text-[#7F543D] text-lg">Ayurveda emphasizes that true healing requires active participation. Ahara (Diet) and Vihara (Lifestyle) are critical components.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8F4E7] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae]">
              <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center gap-2">
                <UtensilsCrossed className="text-[#7F543D]" /> Dietary Guidelines
              </h3>
              <div className="space-y-3">
                {dietRules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                    <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                    <p className="font-medium text-[#335765] text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#EDE8D0] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae]">
              <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center gap-2">
                <Activity className="text-[#7F543D]" /> Lifestyle Adjustments
              </h3>
              <div className="space-y-3">
                {lifestyleRules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                    <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                    <p className="font-medium text-[#335765] text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Treatment Packages & Cost */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
           <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration</h2>
             <p className="text-lg text-[#7F543D]">Select a timeline that matches your wellness goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
             {packages.map((pkg, idx) => {
               return (
                 <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full">
                   <div className="relative h-40 md:h-44 overflow-hidden shrink-0">
                     <img 
                       src={pkg.image} 
                       alt={pkg.name} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/95 to-transparent flex items-end p-4 md:p-5">
                        <h3 className="text-xl md:text-[1.35rem] font-bold text-white leading-tight">{pkg.name}</h3>
                     </div>
                   </div>
                   
                   <CardContent className="p-4 md:p-5 flex-grow flex flex-col space-y-3 bg-white h-full">
                     <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50 shrink-0">
                       <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                       <span className="font-bold text-[#335765] text-sm">Duration:</span>
                       <span className="font-semibold text-sm">{pkg.duration}</span>
                     </div>
                     <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50 shrink-0">
                       <ReceiptIndianRupee className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                       <span className="font-bold text-[#335765] text-sm">Est. Cost:</span>
                       <span className="font-semibold text-sm">{pkg.cost}</span>
                     </div>
                     <div className="text-sm text-[#5f4636] flex-grow leading-relaxed border-l-[3px] border-[#335765] pl-3 py-1 font-medium">
                       {pkg.focus}
                     </div>
                     <div className="mt-auto shrink-0 pt-1.5">
                       <Button 
                         onClick={() => setQuoteModalOpen(true)} 
                         className="w-full h-11 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base rounded-xl shadow-md transition-all duration-300 group-hover:scale-[1.02]"
                       >
                         Get a Free Quote
                       </Button>
                     </div>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
        </section>

      {/* Patient Reviews */}
        <section id="reviews" className="scroll-mt-24 bg-transparent w-full">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
            </div>

            <div className="max-w-4xl mx-auto relative px-0 md:px-0">
              <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
                <button
                  onClick={goReviewPrevious}
                  className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
                <button
                  onClick={goReviewNext}
                  className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
                <CardContent className="p-4 md:p-12 relative">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                        {patientReviews[currentReview].title}
                      </h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                        "{patientReviews[currentReview].review}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                        {patientReviews[currentReview].name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-[#335765]">
                            {patientReviews[currentReview].name}
                          </h4>
                          {patientReviews[currentReview].verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                              &#10003; Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                          {patientReviews[currentReview].location} {patientReviews[currentReview].condition && `- ${patientReviews[currentReview].condition}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                        ))}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-[#335765]">
                        {patientReviews[currentReview].rating}.0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-2 mt-8">
                {patientReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    className={`transition-all rounded-full ${currentReview === idx
                        ? "w-8 h-3 bg-[#335765]"
                        : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"
                      }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Centers */}
        <section id="top-centers" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for Ayurveda programs.</p>
          </div>
          <div className="relative group flex items-center justify-center">
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
              {topAyurvedicCenters.slice(topCentersSlide * topCentersPerSlide, topCentersSlide * topCentersPerSlide + topCentersPerSlide).map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
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
                          <span className="text-[12px] md:text-[13px] font-semibold truncate" title={center.city}>{center.city}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                          <span className="text-[12px] md:text-[13px] font-bold text-[#335765]">{center.rating} ({center.reviews})</span>
                        </div>
                      </div>

                      <div className="relative mb-3 flex-grow text-left">
                        <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>
                          {center.description}
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
                          to={center.link}
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
        </section>

        {/* FAQs */}
        <section id="faq" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto px-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Book Consultation CTA */}
        <section className="scroll-mt-24 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img
                src="/Treatments-images/sinusitis-treatment/sinusitis-treatment.jpg"
                alt="Sinusitis Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Sinusitis Program</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20a%20Sinusitis%20program."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>
                  Get Free Consultation Here
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button */}
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

      {/* Mobile BROWSE button */}
      <button
        onClick={() => setIsJumpModalOpen(true)}
        className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Search size={18} className="-ml-1" />
        <span>BROWSE</span>
      </button>

      {/* Mobile Quote Button to match reference style */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Phone size={18} className="-ml-1" />
        <span className="hidden md:inline">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

      {/* Jump to Section Modal */}
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
                  Program Sections
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
                "Jump directly to any section in this program page."
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
    </div>
  );
};

export default SinusitisTreatment;
