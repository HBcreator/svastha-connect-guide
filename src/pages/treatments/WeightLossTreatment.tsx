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
  Search, Phone, X, ClipboardList, Waves, Droplets, Target, Scale, ShieldAlert
} from "lucide-react";

const coreImbalances = [
  {
    title: "Kapha Dosha Aggravation",
    sanskrit: "Imbalanced Earth & Water",
    text: "The primary dosha implicated in weight gain is Kapha, composed of earth and water elements. When aggravated, it increases the body's heavy, dense, and oily qualities.",
    icon: Mountain
  },
  {
    title: "Weak Digestive Fire",
    sanskrit: "Mandagni",
    text: "When your digestive fire (Agni) is weak, food is not properly digested. This leads to the creation of sticky, metabolic toxins called Ama.",
    icon: Flame
  },
  {
    title: "Excess Fat Tissue",
    sanskrit: "Medo Dhatu",
    text: "Ama clogs the body's channels and disrupts fat tissue metabolism. As a result, the body produces excessive unhealthy fat tissue, leading to obesity.",
    icon: Scale
  }
];

const coreTreatments = [
  {
    title: "Udwarthanam",
    sanskrit: "Herbal Powder Massage",
    text: "A signature Ayurvedic therapy for weight loss. A deep, invigorating massage using dry, coarse herbal powder to break down stubborn subcutaneous fat and tone the skin.",
    icon: Sparkles
  },
  {
    title: "Panchakarma",
    sanskrit: "Basti & Virechana",
    text: "A customized detoxification program utilizing medicated purgation and enemas to effectively eliminate Ama (toxins) and correct deep metabolic function.",
    icon: Droplets
  },
  {
    title: "Abhyanga",
    sanskrit: "Therapeutic Massage",
    text: "A vigorous massage with specific medicated oils containing fat-burning properties to mobilize toxins, improve circulation, and enhance metabolism.",
    icon: Waves
  }
];

const internalHerbs = [
  { name: "Triphala", text: "A powerful combination of three fruits that gently cleanses the colon, improves digestion, and detoxifies the body.", icon: Leaf },
  { name: "Guggulu", text: "Renowned for its fat-scraping properties, it helps in lowering cholesterol and breaking down deep-seated fat tissues.", icon: ShieldAlert },
  { name: "Garcinia Cambogia (Vrikshamla)", text: "Helps to suppress appetite, block fat production, and pacify Kapha dosha effectively.", icon: Target }
];

const dietRules = [
  "Focus on a Kapha-Pacifying Diet: Warm, light, and easily digestible foods. Favor bitter, pungent, and astringent tastes.",
  "Avoid Triggers: Eliminate heavy, cold, sweet, and oily foods that aggravate Kapha and slow down metabolism.",
  "Sip Warm Water: Drinking warm water throughout the day, especially with ginger or lemon, helps flush toxins and boost Agni.",
  "Regular Eating Habits: Avoid overeating, frequent snacking, and sleeping immediately after heavy meals."
];

const packages = [
  {
    name: "14-Day Metabolic Reset",
    duration: "14 Days",
    cost: "$1,500 - $2,500 USD",
    focus: "Focuses on kindling the digestive fire and initiating detoxification through Udwarthanam and targeted Ayurvedic diet.",
    image: "/Treatments-images/weight-loss/pack_1.png",
  },
  {
    name: "21-Day Deep Detox & Sculpt",
    duration: "21 Days",
    cost: "$2,200 - $3,500 USD",
    focus: "A deeper Panchakarma protocol utilizing Virechana and Basti to eliminate deep-seated toxins and accelerate fat loss.",
    image: "/Treatments-images/weight-loss/pack_2.png",
  },
  {
    name: "28-Day Total Transformation",
    duration: "28 Days",
    cost: "$3,000 - $4,800 USD",
    focus: "An intensive, holistic program for significant systemic balancing, sustainable weight loss, and complete metabolic restoration.",
    image: "/Treatments-images/weight-loss/pack_3.png",
  }
];

const patientReviews = [
  {
    name: "Dieter Kaufmann", location: "Frankfurt, Germany", condition: "Obesity & Sluggish Metabolism",
    title: "Ayurveda Addressed My Metabolism When Every Diet Had Failed.",
    review: "After fifteen years of yo-yo dieting, I traveled to India. The physician identified a sluggish digestive fire. The Udwarthanam massage and Virechana purgation produced a ten-kilogram reduction in twenty-eight days. The bloating disappeared completely.",
    rating: 5, verified: true
  },
  {
    name: "ClÃ©mence Renard", location: "Paris, France", condition: "PCOS-related Weight Gain",
    title: "Hormonal Weight Gain Finally Addressed at the Root.",
    review: "My PCOS-related weight gain had resisted every approach. The Ayurveda Package combined Panchakarma detox and hormone-balancing herbs into a six-week protocol. I lost eight kilograms, and my menstrual cycle regulated for the first time in five years.",
    rating: 5, verified: true
  },
  {
    name: "CiarÃ¡n Doherty", location: "Dublin, Ireland", condition: "Metabolic Resistance",
    title: "This Approach Broke My Body's Resistance to Weight Loss.",
    review: "My GP described my metabolism as clinically resistant. The program approached this through Lekhana Basti and Udwarthanam. By day ten, my hunger patterns normalized. I lost twelve kilograms over thirty-five days and have maintained the result.",
    rating: 5, verified: true
  },
  {
    name: "Britta Svensson", location: "MalmÃ¶, Sweden", condition: "Cravings & Weight Gain",
    title: "The Ayurvedic Diet Reset My Cravings — No Willpower Required.",
    review: "What surprised me most was that this treatment addressed my food cravings directly. Within ten days of beginning the Kapha-reducing diet and herbal formulations, my desire for processed food diminished effortlessly. I lost nine kilograms in twenty-one days.",
    rating: 5, verified: true
  },
  {
    name: "Ludo Van Pelt", location: "Antwerp, Belgium", condition: "Visceral Fat & High Cholesterol",
    title: "Visceral Fat, High Cholesterol, and Low Energy — All Three Transformed.",
    review: "My physician was managing my visceral fat and high cholesterol with separate medications. Ayurveda treated all as a Kapha-Ama imbalance. The detox sequence produced a fourteen-kilogram reduction over eight weeks. My cholesterol levels are the best in five years.",
    rating: 5, verified: true
  }
];

const topAyurvedicCenters = [
  {
    name: "Naad Wellness",
    city: "Sonepat",
    location: "Sonepat",
    description: "Reconnect with your inner balance at Naad Wellness, a luxury integrative wellness retreat dedicated to holistic healing and mindful living. Inspired by ancient Ayurvedic wisdom and modern therapeutic practices, Naad Wellness offers personalized programs designed to restore harmony between body, mind, and spirit. Set within a tranquil natural environment, the retreat combines expert guidance, therapeutic treatments, and mindful experiences to support long-term health, rejuvenation, and inner transformation. Each wellness journey is carefully curated by experienced practitioners, integrating Ayurveda, yoga, naturopathy, and mindfulness to create sustainable lifestyle changes and deep healing.",
    rating: 4.8,
    reviews: 200,
    image: "/Center Images/Naad Wellness/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/sonepat/naad-wellness"
  },
  {
    name: "SWAN Yoga Retreat & Ayurveda",
    city: "Goa",
    location: "Goa",
    description: "Experience authentic yogic living at SWAN Yoga Retreat & Ayurveda, a peaceful ashram-style wellness centre set in the lush hills of North Goa. Rooted in classical Yoga and Ayurveda, the retreat offers a calm space for healing, mental clarity, and inner growth.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/SWAN Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/swan-yoga-retreat"
  },
  {
    name: "Kumarakom Lake Resort",
    city: "Kumarakom",
    location: "Kumarakom",
    description: "Experience the tranquil charm of Kerala's backwaters at Kumarakom Lake Resort, an award-winning heritage retreat on serene Vembanad Lake. Designed with traditional Kerala architecture, the resort blends luxury with cultural authenticity, offering Ayurvedic wellness, private villas, and peaceful nature-led rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/kumarakom lake resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/kumarakom-lake-resort"
  },
  {
    name: "Athreya Ayurvedic Centre",
    city: "Kerala",
    location: "Kerala",
    description: "Authentic Ayurvedic care with personalized therapies and holistic healing in Kerala.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/athreya-ayurvedic-centre"
  },
  {
    name: "Sitaram Beach Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience the true essence of Ayurveda at Sitaram Beach Retreat, a tranquil wellness sanctuary nestled along the serene coastline of Kerala. Surrounded by lush greenery and the calming presence of the Arabian Sea, this retreat offers an immersive healing environment rooted in authentic Ayurvedic traditions. Sitaram Beach Retreat combines classical Ayurvedic wisdom with modern comfort, delivering personalized treatments designed to restore harmony between body, mind, and spirit. Guided by highly experienced Ayurvedic doctors, each therapy is carefully tailored based on individual health conditions and wellness goals.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sitaram Beach Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/sitaram-beach-retreat"
  },
  {
    name: "Akanta Ayurveda and Yoga Resort",
    city: "Kochi",
    location: "Kochi",
    description: "Embrace holistic transformation at Akanta Ayurveda & Yoga Cherai, Kerala's exclusive fully-licensed Ayurveda resort harmoniously positioned between the pristine Arabian Sea and tranquil backwaters. As the only yoga retreat center at Cherai Beach licensed as an Ayurvedic hospital, Akanta integrates government-verified Oushadi Clinic medicines with personalized therapeutic protocols.",
    rating: 4.5,
    reviews: 479,
    image: "/Center Images/Akanta Ayurveda and Yoga Resort/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kochi/akanta-ayurveda-and-yoga-resort"
  },
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/soukya"
  },
  {
    name: "Sitaram Mountain Retreat",
    city: "Idukki",
    location: "Idukki",
    description: "Discover profound healing amidst the breathtaking hills of Munnar at Sitaram Mountain Retreat, a globally acclaimed sanctuary for authentic Ayurvedic wellness. Carrying forward a remarkable 104-year family legacy in traditional healing, this NABH-accredited retreat seamlessly blends classical Ayurvedic principles with the therapeutic power of pristine mountain nature.",
    rating: 4.8,
    reviews: 928,
    image: "/Center Images/Sitaram Mountain Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/idukki/sitaram-mountain-retreat"
  },
  {
    name: "Ashiyana Yoga Retreat",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in the peaceful essence of yoga and holistic wellness at Ashiyana Yoga Retreat, a globally renowned destination for transformation and self-discovery. Set amidst lush tropical gardens along the serene Mandrem Beach, Ashiyana offers a unique blend of traditional yoga, meditation, and healing therapies. Rooted in authentic yogic philosophy and mindful living, the retreat provides holistic programs guided by experienced teachers and therapists. Each experience is thoughtfully curated to restore harmony in body, mind, and spirit, promoting deep relaxation, inner balance, and long-lasting wellbeing through natural and time-tested practices.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Ashiyana Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/ashiyana-yoga-retreat"
  },
  {
    name: "Nagarjuna Ayurveda Centre",
    city: "Kerala",
    location: "Kerala",
    description: "Nagarjuna Ayurveda Centre is one of India’s most trusted and heritage-rich Ayurvedic healthcare institutions, renowned for its authentic, classical treatment approach. Backed by decades of clinical expertise, the centre follows traditional Ayurvedic principles combined with strict diagnostic protocols to deliver effective, result-oriented therapies.",
    rating: 4.8,
    reviews: 200,
    image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/nagarjuna-ayurveda-centre"
  },
  {
    name: "Ayur Bethaniya Ayurveda Hospital",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in holistic healing at Ayur Bethaniya Ayurveda Hospital, a trusted destination for authentic Ayurveda treatments in the heart of Kerala. Rooted in traditional wisdom and guided by experienced Ayurvedic physicians, the hospital offers personalized therapies designed to restore balance of body, mind, and soul. Set in a calm and healing environment, Ayur Bethaniya combines classical Ayurveda with compassionate care for long-lasting wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayur Bethaniya/CTA.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayur-bethaniya-ayurveda-hospital"
  },
  {
    name: "Dhathri Ayurveda Hospital & Panchakarma Center",
    city: "Kayamkulam",
    location: "Kayamkulam",
    description: "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma. Expect a deeply healing journey where ancient heritage meets clinical excellence in a tranquil, natural environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/dhathri-ayurveda"
  },
];

const faqItems = [
  { question: "Is Ayurvedic weight loss safe?", answer: "Yes, Ayurvedic weight loss is completely natural and safe. It focuses on dietary changes, herbal supplements, and physical therapies without using harsh chemicals, crash diets, or invasive surgeries. It addresses the root cause for sustainable results." },
  { question: "How long does it take to see results?", answer: "While individual results vary, many patients report feeling lighter and more energetic within the first 7-10 days. Measurable weight loss typically becomes significant during 21-day or 28-day intensive Panchakarma programs as deep toxins are eliminated." },
  { question: "Will I gain the weight back after the treatment?", answer: "Unlike fad diets, Ayurveda corrects your metabolism and teaches you a lifestyle suited to your body type (Prakriti). By continuing the recommended dietary habits and routines at home, the weight loss is highly sustainable." },
  { question: "What is Udwarthanam?", answer: "Udwarthanam is a specialized Ayurvedic massage using dry herbal powders. It is vigorously rubbed over the body to break down subcutaneous fat, improve lymphatic drainage, reduce cellulite, and tone the muscles and skin." },
  { question: "Do I need to do heavy workouts during the treatment?", answer: "No. Ayurveda does not recommend exhausting workouts during intense detox therapies. Gentle therapeutic yoga, walking, and specific stretching exercises are usually prescribed to support the therapies without draining your energy." }
];

const WeightLossTreatment = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const topCentersTotalSlides = Math.max(1, topAyurvedicCenters.length - topCentersPerSlide + 1);
  
  useEffect(() => {
    setTopCentersSlide((prev) => prev >= topCentersTotalSlides ? 0 : prev);
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
    { id: "imbalances", title: "Core Imbalances" },
    { id: "treatments", title: "Restoring Metabolic Fire" },
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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Sustainable Metabolic Reset</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Weight Loss Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">A Holistic Path to a Balanced Body. Ayurveda focuses on correcting your metabolism and eliminating toxins naturally.</p>
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

      <main className="container mx-auto px-4 pt-8 pb-4 md:pt-12 md:pb-6 max-w-6xl space-y-16 md:space-y-20 relative">

        {/* Optimized Top Image & Intro */}
        <section id="intro" className="scroll-mt-24 mb-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/Treatments-images/weight-loss/hero.png" 
                alt="Weight Loss Treatment in India" 
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-[#335765] leading-tight">A Refreshingly Wise & Sustainable Approach</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                In a world of quick-fix diets and temporary solutions, Ayurveda offers a sustainable approach to weight management. It is not about starvation or extreme exercise.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Ayurveda treatment for weight loss is a holistic science of rebalancing the body from within. It focuses on correcting your metabolism, eliminating deep-seated toxins, and creating a natural, healthy weight.
              </p>
              <div className="pt-2">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Imbalances */}
        <section id="imbalances" className="scroll-mt-24 space-y-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Understanding the Core Imbalances</h2>
            <p className="text-[#7F543D] text-lg">Ayurveda views obesity (Sthaulya Roga) as a serious imbalance of the doshas and body tissues.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreImbalances.map((imbalance, idx) => {
              const Icon = imbalance.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform">
                  <CardContent className="p-6 md:p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE8D0] ring-4 ring-[#d8d0ae]/30 shrink-0">
                        <Icon className="h-6 w-6 text-[#2F5B5D]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#335765] leading-tight">{imbalance.title}</h3>
                    </div>
                    <p className="text-[#7F543D] mb-3 text-sm font-semibold uppercase tracking-wider">{imbalance.sanskrit}</p>
                    <p className="text-[#5f4636] leading-relaxed text-sm">
                      {imbalance.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Restoring Metabolic Fire</h2>
            <p className="text-sm md:text-base text-[#7F543D]">Instead of counting calories, Ayurveda focuses on kindling the digestive fire (Agni) and eliminating toxins (Ama).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-0">
            {coreTreatments.map((treatment, idx) => (
              <div key={idx} className="bg-[#335765] rounded-3xl p-6 md:p-8 text-white hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <treatment.icon size={120} strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{treatment.title}</h3>
                  <p className="text-xs md:text-sm font-semibold text-[#D19A71] uppercase tracking-wider mb-4">{treatment.sanskrit}</p>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">{treatment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Treatment Packages & Cost */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
           <div className="text-center max-w-3xl mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration For Weight Loss Treatment in India</h2>
             <p className="text-lg text-[#7F543D]">Select a timeline that matches your weight loss goals. Each package includes daily physician consultation, prescribed therapies, medicines, and diet.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 items-stretch px-4 md:px-0">
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
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight">
                            {patientReviews[currentReview].name}
                          </h4>
                          {patientReviews[currentReview].verified && (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Weight Loss Treatment in India</h2>
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

            <div className="overflow-hidden w-full relative">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${topCentersSlide * (100 / topCentersPerSlide)}%)` }}
              >
                {topAyurvedicCenters.map((center, idx) => (
                  <div key={`${center.name}-${idx}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3 h-auto">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left h-full">
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
                            target="_blank"
                            rel="noreferrer"
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
                to="/top-ayurvedic-centers-in-india"
                target="_blank"
                rel="noreferrer"
                className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
              >
                VIEW ALL CENTERS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
                src="/Treatments-images/weight-loss/hero.png"
                alt="Weight Loss Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Weight Loss Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your transformation.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20a%20Weight%20Loss%20program."
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

export default WeightLossTreatment;


