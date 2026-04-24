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
  Search, Phone, X, ClipboardList
} from "lucide-react";

const elements = [
  { name: "Space", sanskrit: "Aakash", icon: Circle },
  { name: "Air", sanskrit: "Vayu", icon: Wind },
  { name: "Fire", sanskrit: "Agni", icon: Flame },
  { name: "Water", sanskrit: "Jal", icon: Droplet },
  { name: "Earth", sanskrit: "Prithvi", icon: Mountain },
];

const doshas = [
  { title: "Vata (Air & Ether)", text: "Governing movement, breathing, and nerve impulses. A balanced Vata is creative and adaptable. Imbalance leads to anxiety, insomnia, and dry skin.", icon: Wind },
  { title: "Pitta (Fire & Water)", text: "Governing metabolism, digestion, and intellect. A balanced Pitta is intelligent and focused. Imbalance causes anger, inflammation, and acidity.", icon: Flame },
  { title: "Kapha (Earth & Water)", text: "Governing structure, immunity, and lubrication. A balanced Kapha is calm and strong. Imbalance results in lethargy, weight gain, and congestion.", icon: Mountain },
];

const trigunas = [
  { name: "Satva", sanskrit: "Clarity & Purity", text: "The state of balance, harmony, and peace.", icon: Sparkles },
  { name: "Rajas", sanskrit: "Action & Passion", text: "The state of movement, ambition, and stimulation.", icon: Zap },
  { name: "Tamas", sanskrit: "Inertia & Darkness", text: "The state of heaviness, dullness, and resistance.", icon: Moon },
];

const dhatus = [
  { name: "Rasa", sanskrit: "Plasma", text: "Derived from digested food, it nourishes every tissue and cell." },
  { name: "Raktha", sanskrit: "Blood", text: "Regarded as the basis for life, it provides physical strength." },
  { name: "Mamsa", sanskrit: "Muscle", text: "Provides physical strength and supports the adipose tissue." },
  { name: "Meda", sanskrit: "Fat", text: "Provides support to the bone tissue and lubricates the body." },
  { name: "Asthi", sanskrit: "Bone", text: "Consists of bone tissue and cartilage, providing structural support." },
  { name: "Majja", sanskrit: "Bone Marrow", text: "Fills up the bone cavities and plays a role in nervous system function." },
  { name: "Sukra", sanskrit: "Reproductive", text: "The essence of all tissues, providing vitality." },
];

const tenFold = ["Prkruthi (Body Constitution)", "Vikruthi (Pathological State)", "Sara (Tissue Vitality)", "Samhanana (Physical Build)", "Pramana (Body Measurement)", "Satmya (Adaptability)", "Satva (Psychic Constitution)", "Aharasakthi (Digestive Capacity)", "Vyayamasakthi (Capacity for Exercise)", "Vayas (Age)"];
const eightFold = ["Nadi (Pulse)", "Jihwa (Tongue)", "Sabda (Voice)", "Sparsa (Skin)", "Drik (Vision)", "Akruthi (General Appearance)", "Muthra (Urine)", "Mala (Stool)"];

const medications = [
  "Kashayam (Herbal Decoctions)", "Choorna (Herbal Powders)", "Vati / Gulika (Tablets/Pills)",
  "Asava & Arishta (Fermented Liquids)", "Ghrita (Medicated Ghee)", "Thaila (Medicated Oils)", "Lepa (Pastes for External Application)"
];

const packages = [
  {
    name: "Preventive Wellness & Detox",
    duration: "7 - 14 Days",
    cost: "$800 - $1,500 USD",
    focus: "A restorative protocol crafted to eliminate accumulated toxins, alleviate physical stress, and recalibrate your natural doshic harmony through gentle therapies.",
    image: "/Program Images/detox_preparation.png",
  },
  {
    name: "Comprehensive Healing",
    duration: "14 - 21 Days",
    cost: "$1,500 - $3,000 USD",
    focus: "An integrated therapeutic approach focused on managing metabolic imbalances, early-stage joint discomfort, and strengthening overall body resilience naturally.",
    image: "/Program Images/detox_core.png",
  },
  {
    name: "Intensive Chronic Care",
    duration: "21 - 28+ Days",
    cost: "$2,500 - $5,000+ USD",
    focus: "A profound cellular rehabilitation regimen specifically structured to address stubborn autoimmune conditions, severe arthritis, and long-term systemic burnout.",
    image: "/Program Images/14-day-retreat.png",
  }
];

const patientReviews = [
  {
    name: "Josephine Braun", location: "DÃ¼sseldorf, Germany", condition: "Rheumatoid Arthritis",
    title: "India Is Where Ayurveda Livesâ€”As a Real Science of Healing.",
    review: "I had tried Ayurvedic treatments at European spas for years; they were pleasant but ultimately superficial. Traveling to India for an authentic Panchakarma was an entirely different experience. The physician prescribed a 14-day sequence that addressed my rheumatoid arthritis with a measurable reduction in inflammation.",
    rating: 5, verified: true
  },
  {
    name: "Colm Fitzpatrick", location: "Waterford, Ireland", condition: "Chronic Psoriasis",
    title: "Lasting Relief That My Dermatologist Couldn't Provide.",
    review: "I arrived in Kerala managing chronic psoriasis with immunosuppressant medication. The Ayurvedic program, combining Takradhara, Lepam herbal pastes, and a strict diet, addressed my skin with clarity. Six months after returning home, my psoriasis remains at its lowest severity in twelve years.",
    rating: 5, verified: true
  },
  {
    name: "RenÃ©e Fontaine", location: "Bordeaux, France", condition: "Anxiety & Digestive Issues",
    title: "A System That Healed Everything at Once.",
    review: "After two years of anxiety, disrupted sleep, and digestive issues treated separately by conventional medicine, I traveled to India. The Shirodhara, Abhyangam massage, and herbal formulations worked as a single integrated system, recalibrating my nervous system within ten days.",
    rating: 5, verified: true
  },
  {
    name: "Pieter Claes", location: "Brussels, Belgium", condition: "Type 2 Diabetes",
    title: "The Quality of Medical Attention Here is Unparalleled.",
    review: "What struck me most was the quality of medical attention. The doctor invested forty-five minutes in every consultation. The Panchakarma program I underwent for my Type 2 diabetes produced the best HbA1c reading I had recorded in four years.",
    rating: 5, verified: true
  },
  {
    name: "Harriet Lindqvist", location: "Uppsala, Sweden", condition: "Post-Viral Fatigue",
    title: "Traveling to India Was the Best Health Decision of My Life.",
    review: "The physician's pulse diagnosis identified health patterns no blood test had revealed. The 21-day program addressed my post-viral fatigue, hormonal imbalance, and chronic sinusitis simultaneously. I returned to Sweden with an energy I had forgotten was possible.",
    rating: 5, verified: true
  }
];

const faqItems = [
  { question: "Is Ayurvedic treatment in India safe for international patients?", answer: "Yes. Svastha Global partners only with reputable, NABH-accredited centers that employ highly qualified BAMS/MD doctors and follow strict hygiene protocols." },
  { question: "How long does an Ayurvedic treatment program take?", answer: "Minimum effective programs start at 7 days for wellness, but chronic conditions usually require 14 to 28 days for deep healing and sustained results." },
  { question: "Are the herbal medicines safe and heavy-metal free?", answer: "Absolutely. We ensure that our partner centers use certified, laboratory-tested authentic medicines prepared under strict safety guidelines." },
  { question: "What kind of diet is provided during the treatment?", answer: "A personalized, purely vegetarian (sattvic) diet is provided. It is tailored to your dosha and specific health condition to act as 'food as medicine'." },
  { question: "Can Ayurveda cure chronic diseases like arthritis or psoriasis?", answer: "Ayurveda aims to manage and often reverse chronic conditions by treating the root causeâ€”balancing doshas and removing toxins (Ama)â€”rather than just suppressing symptoms." }
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

const AyurvedaTreatment = () => {
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
    { id: "intro", title: "Intro & Philosophy" },
    { id: "principles", title: "Foundational Principles" },
    { id: "diagnosis", title: "Diagnosis & Medication" },
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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Holistic Wellness</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Ayurvedic Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">A Holistic Path to Wellness. Experience the ancient 'Science of Life' through deeply personalized, authentic healing protocols.</p>
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

        {/* Optimized Top Image & Intro */}
        <section id="intro" className="scroll-mt-24 mb-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/Treatments-images/ayurvedic_treatment_hero.png"
                alt="Ayurvedic Treatment in India"
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] xl:whitespace-nowrap font-bold text-[#335765] leading-tight">The Ancient Ayurveda Science</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Ayurveda is one of India's most treasured gifts to the world. It is not merely a system for treating illness but a profound philosophy for living a long, healthy, and balanced life.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Rooted in the belief that true health is a state of harmony between the body, mind, and spirit, Ayurvedic treatment offers a deeply personalized path to wellness. At Svastha Global, we connect you with the heart of this timeless wisdom.
              </p>
              <div className="pt-2">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Foundational Principles */}
        <section id="principles" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">The Foundational Principles</h2>
            <p className="text-[#7F543D] text-lg">The entire science of Ayurveda is built upon a few core concepts that explain the universe and our place within it.</p>
          </div>

          <div className="space-y-12">
            {/* Elements */}
            <div>
              <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center justify-center gap-2 text-center">
                <Sparkles className="text-[#7F543D] shrink-0" /> The Five Great Elements (Panchamahabhutas)
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {elements.map((el) => {
                  const Icon = el.icon;
                  return (
                    <div key={el.name} className="flex flex-col items-center bg-[#F8F4E7] p-4 rounded-xl border border-[#d8d0ae] min-w-[120px] shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-inner mb-3 text-[#335765]">
                        <Icon size={24} />
                      </div>
                      <span className="font-bold text-[#335765]">{el.name}</span>
                      <span className="text-sm text-[#7F543D] italic">{el.sanskrit}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Doshas */}
            <div>
              <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center justify-center gap-2 text-center">
                <Activity className="text-[#7F543D] shrink-0" /> The Three Doshas: Your Unique Constitution
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {doshas.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-xl border border-[#d9cfae] p-6 bg-white hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0">
                          <Icon className="h-6 w-6 text-[#2F5B5D]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#335765]">{item.title}</h4>
                      </div>
                      <p className="text-sm text-[#7F543D] leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Trigunas */}
              <div className="bg-[#EDE8D0] rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#335765] mb-6 text-center md:text-left">The Three Mental Qualities (Trigunas)</h3>
                <div className="space-y-4">
                  {trigunas.map((guna) => {
                    const Icon = guna.icon;
                    return (
                      <div key={guna.name} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
                        <div className="mt-1 text-[#335765]"><Icon size={20} /></div>
                        <div>
                          <p className="font-bold text-[#335765]">{guna.name} <span className="font-normal text-[#7F543D] italic">({guna.sanskrit})</span></p>
                          <p className="text-sm text-[#7F543D] mt-1">{guna.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sapta Dhatus */}
              <div className="bg-[#F8F4E7] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae]">
                <h3 className="text-2xl font-bold text-[#335765] mb-6 text-center md:text-left">The Seven Body Tissues (Sapta Dhatus)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dhatus.map((dhatu) => (
                    <div key={dhatu.name} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                      <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#335765] text-sm">{dhatu.name} <span className="font-normal text-[#7F543D]">({dhatu.sanskrit})</span></p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#7F543D] mt-4 italic text-center">The health of your dhatus is a direct reflection of your overall well-being.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis & Medication */}
        <section id="diagnosis" className="scroll-mt-24 space-y-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">The Art of Ayurvedic Diagnosis</h2>
            <p className="text-[#7F543D] text-lg">An Ayurvedic physician does not just look at your symptoms; they evaluate you as a whole person through sophisticated traditional methods.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md border-[#d8d0ae]">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="text-[#335765] h-8 w-8" />
                  <h3 className="text-2xl font-bold text-[#335765]">The 10-Fold Examination</h3>
                </div>
                <p className="text-[#7F543D] mb-4 text-sm font-semibold uppercase tracking-wider">Dasavidha Pareeksha</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tenFold.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#5f4636] text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#335765]" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md border-[#d8d0ae]">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="text-[#335765] h-8 w-8" />
                  <h3 className="text-2xl font-bold text-[#335765]">The 8-Fold Examination</h3>
                </div>
                <p className="text-[#7F543D] mb-4 text-sm font-semibold uppercase tracking-wider">Ashtasthana Pareeksha</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {eightFold.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#5f4636] text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#335765]" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#335765] text-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Pill className="text-sky-300 h-8 w-8" />
                  <h3 className="text-2xl font-bold">Forms of Medications</h3>
                </div>
                <p className="text-white/80 leading-relaxed">Ayurvedic medicines are primarily derived from natural sources like herbs, minerals, and metals. Prepared in various forms for maximum potency.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {medications.map((med, i) => (
                    <span key={i} className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm">
                      {med}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative p-8 md:p-12 space-y-6 bg-[#2F5B5D] overflow-hidden flex flex-col justify-center h-full">
                <div className="absolute inset-0 z-0">
                  <img src="/Program Images/ayurvedic_diet.png" alt="Ayurvedic Diet" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#2F5B5D]/85" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163032]/80 to-transparent" />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <UtensilsCrossed className="text-yellow-400 h-8 w-8 drop-shadow-md" />
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">Diet: Food as Medicine</h3>
                  </div>
                  <p className="text-white/95 leading-relaxed text-lg italic drop-shadow-sm font-medium">
                    "In Ayurveda, your diet is your first medicine."
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm">
                    The focus is never a one-size-fits-all approach. Your diet is tailored to your specific dosha to strengthen your digestive fire (Agni) and consume foods that bring your body back into balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Treatment Packages & Cost */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration For Ayurvedic Treatment in India</h2>
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Ayurvedic Treatment in India</h2>
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
                src="/Treatments-images/ayurvedic_treatment_hero.png"
                alt="Ayurvedic Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Ayurvedic Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20an%20Ayurveda%20Treatment%20program."
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

export default AyurvedaTreatment;

