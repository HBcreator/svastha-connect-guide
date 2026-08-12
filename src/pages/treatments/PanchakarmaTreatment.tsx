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
  Search, Phone, X, ClipboardList, Brain
} from "lucide-react";

const physicalBenefits = [
  "Deeply purifies the body by eliminating accumulated toxins (Ama).",
  "Restores the digestive fire (Agni), improving metabolism and nutrient absorption.",
  "Strengthens the immune system and builds resistance to illness.",
  "Rejuvenates all body tissues, slowing the aging process.",
  "Provides lasting relief from chronic conditions like arthritis, migraines, and digestive issues.",
  "Helps in healthy weight management by correcting metabolic function."
];

const mentalBenefits = [
  "Calms the entire nervous system, profoundly reducing stress and anxiety.",
  "Improves sleep quality and helps manage insomnia.",
  "Enhances mental clarity, focus, and concentration.",
  "Helps release stored emotional baggage, leading to greater emotional stability.",
  "Promotes a deep sense of inner peace and grounds the mind from overthinking.",
  "Enhances self-awareness and fosters a more positive, balanced outlook on life."
];

const spiritualBenefits = [
  { title: "Deep Inner Cleansing", text: "Removes physical and emotional toxins, helping the soul feel lighter." },
  { title: "Restores Pranic Flow", text: "Clears blockages in energy channels (Nadis) for free flow of Prana." },
  { title: "Improved Meditation", text: "A cleansed and balanced body enhances focus and stillness." },
  { title: "Spiritual Upliftment", text: "Aligns body, mind, and spiritâ€”bringing a sense of oneness." }
];

const threeStages = [
  {
    title: "Preparatory Phase",
    sanskrit: "Poorvakarma",
    text: "Prepares the body for deep cleansing via Snehana (oleation) and Swedana (therapeutic steam) to loosen and move toxins towards the digestive tract.",
    icon: Droplet
  },
  {
    title: "Main Cleansing Phase",
    sanskrit: "Pradhanakarma",
    text: "The active detoxification stage. Specific core therapies (the 'Five Actions') are performed to expel the accumulated Ama from your body.",
    icon: Activity
  },
  {
    title: "Post-Treatment Care",
    sanskrit: "Paschatkarma",
    text: "Focuses on rejuvenation. It involves a restorative diet, gentle lifestyle adjustments, and rebuilding strength and immunity.",
    icon: Leaf
  }
];

const packages = [
  {
    name: "14-Day Essential Shodhana",
    duration: "14 Days",
    cost: "$1,200 - $2,200 USD",
    focus: "A foundational cleanse designed to flush out superficial toxins, restore digestive vitality (Agni), and alleviate daily stress, leaving you with renewed energy and mental clarity.",
    image: "/Treatments-images/panchakarma_pack_1.png",
  },
  {
    name: "21-Day Authentic Panchakarma",
    duration: "21 Days",
    cost: "$2,500 - $4,500 USD",
    focus: "The classical, full-spectrum detoxification protocol. Experience profound cellular purification that tackles deep-seated chronic conditions, resets metabolic pathways, and boosts long-term immunity.",
    image: "/Treatments-images/panchakarma_pack_2.png",
  },
  {
    name: "28-Day Intensive Rasayana",
    duration: "28 - 35 Days",
    cost: "$3,500 - $6,500+ USD",
    focus: "An immersive healing journey for severe chronic imbalances. It combines rigorous toxin elimination with advanced Rasayana (rejuvenative) therapies to completely rebuild and fortify your bodily tissues.",
    image: "/Treatments-images/panchakarma_pack_3.png",
  }
];

const patientReviews = [
  {
    name: "Albrecht Schumann", location: "Hannover, Germany", condition: "Rheumatoid Arthritis",
    title: "The Five Actions of Panchakarma Did What Years of Medication Could Not.",
    review: "I travelled to India for Panchakarma after rheumatoid arthritis had progressively limited my mobility for three years. The three-phase protocolâ€”preparation, main therapies, and recoveryâ€”was administered with a clinical precision I had not expected. By the twenty-first day, my inflammatory markers had reduced measurably, and my joint mobility had improved to a degree my rheumatologist in Hannover found genuinely remarkable.",
    rating: 5, verified: true
  },
  {
    name: "SinÃ©ad O'Halloran", location: "Limerick, Ireland", condition: "Panchakarma Detox",
    title: "Authentic Panchakarma in India â€” Nothing Else Compares.",
    review: "I had experienced so-called Panchakarma at spas in Europe, which were pleasant but had no clinical effect. Arriving in India for the classical program revealed the difference immediately. The Vaidya's hour-long assessment and the inclusion of the internal medicated ghee (Snehana) phaseâ€”often omitted elsewhereâ€”produced results in my digestion, sleep, and skin that I could feel accumulating day by day.",
    rating: 5, verified: true
  },
  {
    name: "NadÃ¨ge Leconte", location: "Toulouse, France", condition: "Chronic Fatigue",
    title: "It Cleared What Conventional Medicine Could Not Even Name.",
    review: "I arrived in India with chronic fatigue and brain fog that had lingered since a viral illness. The Panchakarma physician identified significant Ama (toxin) accumulation and a Vata imbalance. The Nasya nasal therapy cleared my cognitive fog within a week, and the Basti sequence addressed my gut health systematically. I left with an energy I hadn't experienced in two years.",
    rating: 5, verified: true
  },
  {
    name: "Anders Holmgren", location: "Gothenburg, Sweden", condition: "Psoriasis",
    title: "The Three-Phase Protocol Is What Makes It Genuinely Effective.",
    review: "What distinguishes authentic Panchakarma in India is the rigorous three-phase structure. The program I completed followed all three phases with clinical discipline, and the therapies were individually selected based on my constitution, not a standard package. As a result, my psoriasis, which had been worsening for two years, cleared by eighty percent.",
    rating: 5, verified: true
  },
  {
    name: "Miroslava HorÃ¡kovÃ¡", location: "Prague, Czech Republic", condition: "Type 2 Diabetes",
    title: "This Changed My Understanding of What Healing Actually Means.",
    review: "I came to India managing Type 2 diabetes, obesity, and hypertension with multiple medications. The Ayurvedic physician's integrated approach treated all three as expressions of a single underlying imbalance. The Panchakarma detoxification, combined with a prescriptive diet and daily Yoga, reduced my fasting glucose, blood pressure, and waist measurement across twenty-one days with results I could track daily.",
    rating: 5, verified: true
  }
];

const faqItems = [
  { question: "How often should you do Panchakarma?", answer: "The ideal frequency is highly personalized. For general wellness, once a year (especially during seasonal changes) is highly beneficial. For chronic conditions, an intensive initial program followed by maintenance every six months is recommended." },
  { question: "Are there any side effects?", answer: "When performed correctly under qualified supervision, it is extremely safe. You may temporarily experience mild fatigue, headaches, or emotional release as toxins are flushed. These are positive signs of deep healing." },
  { question: "Who is an ideal candidate for Panchakarma?", answer: "Individuals with chronic issues not responding to conventional treatment, people experiencing burnout or high stress, and anyone seeking a deep, holistic cleanse or natural anti-aging vitality." },
  { question: "Who should be cautious?", answer: "It is not recommended for pregnant women, young children, or individuals who are extremely weak or debilitated. A thorough consultation with an Ayurvedic doctor is always essential." },
  { question: "What makes Panchakarma more than just a detox?", answer: "Unlike short-term cleanses that can be harsh, Panchakarma is a gentle, systematic therapy that works in harmony with your body. It resets your body's innate intelligence, allowing it to heal itself from chronic ailments." }
];

const topAyurvedicCenters = [
  {
    name: "Amanbagh Heritage Wellness Retreat",
    city: "Alwar",
    location: "Alwar",
    description: "Step into a sanctuary of timeless elegance at Amanbagh, a luxurious retreat inspired by Mughal architecture and surrounded by the rugged beauty of Rajasthan's Aravalli hills. Once a royal hunting lodge, Amanbagh now offers a serene wellness haven for deep rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Amanbagh/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/rajasthan/amanbagh-heritage-wellness-retreat"
  },
  {
    name: "Fazlani Nature's Nest Wellness Centre",
    city: "Mumbai",
    location: "Mumbai",
    description: "Reconnect with nature and restore your well-being at Fazlani Nature's Nest, a serene wellness retreat set amidst lush greenery and tranquil landscapes. This holistic wellness centre blends time-honored natural healing traditions with modern therapeutic practices to help guests achieve balance in body, mind, and spirit. Guided by experienced wellness professionals, the centre offers personalized programs designed to promote detoxification, relaxation, and sustainable healthy living. From therapeutic treatments and mindful wellness therapies to nourishing cuisine and rejuvenating experiences, Fazlani Nature's Nest provides a peaceful environment where guests can unwind, heal, and rediscover vitality through nature-inspired wellness.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Fazlani Natures Nest/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/maharashtra/fazlani-natures-nest"
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
    name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
    rating: 4.8,
    reviews: 220,
    image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-heritage"
  },
  {
    name: "Dharana At Shillim",
    city: "Pune",
    location: "Pune",
    description: "Immerse yourself in a journey of deep wellness at Dharana At Shillim, a tranquil retreat dedicated to holistic healing and mindful living. Surrounded by the serene Sahyadri mountains, the center blends traditional healing wisdom with modern wellness practices to create a truly transformative experience. Guided by experienced practitioners, every program is thoughtfully designed to restore harmony between body, mind, and spirit. From personalized therapies to mindfulness and rejuvenation programs, Dharana At Shillim offers a peaceful sanctuary for those seeking balance, vitality, and long-term well-being.",
    rating: 4.8,
    reviews: 3900,
    image: "/Center Images/Dharana At Shillim/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/pune/dharana-at-shillim"
  },
  {
    name: "Nalanda Retreat Goa",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in a soulful coastal wellness experience at Nalanda Retreat Goa, a serene beachside sanctuary blending yoga, Ayurveda, and holistic healing. Nestled along the tranquil shores of Mandrem Beach, Nalanda offers a transformative escape where ocean rhythms meet ancient wellness traditions. Rooted in mindful living and personalized care, the retreat features guided yoga sessions, meditation practices, and Ayurvedic therapies designed to restore balance and inner harmony.",
    rating: 4.5,
    reviews: 500,
    image: "/Center Images/Nalanda Retreat Goa/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/nalanda-retreat-goa"
  },
  {
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in the serene beauty of coastal Ayurveda at Niraamaya Retreats Surya Samudra, a luxurious wellness destination on Kerala's pristine shores. Known for authentic therapies and tranquil ocean views, it blends traditional healing with modern comfort for deep rejuvenation.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/niraamaya-retreats-surya-samudra"
  },
  {
    name: "Ayuskama Ayurveda",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Ayuskama Ayurveda ek authentic Ayurvedic wellness center hai jo traditional Ayurveda ko modern lifestyle ke saath integrate karta hai. Yeh center Ayurveda, Panchakarma aur holistic healing therapies par focus karta hai, jahan personalized treatment plans experienced Ayurvedic doctors ke guidance mein design kiye jaate hain. Natural therapies, herbal medicines aur sattvic lifestyle ke through Ayuskama long-term health, detoxification aur overall rejuvenation ko promote karta hai. Yeh center chronic health issues, stress management aur preventive healthcare ke liye ek holistic approach provide karta hai.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/ayuskama-ayurveda"
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
    name: "Dhathri Ayurveda Hospital & Panchakarma Center",
    city: "Kayamkulam",
    location: "Kayamkulam",
    description: "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma. Expect a deeply healing journey where ancient heritage meets clinical excellence in a tranquil, natural environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/dhathri-ayurveda"
  },
  {
    name: "AyurSoma Ayurveda Royal Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience world-class Ayurvedic Healing at AyurSoma, a premium royal retreat in Kovalam. Combining traditional wisdom with royal luxury, our sanctuary offers authentic Panchakarma, rejuvenation therapies, and personalized wellness programs guided by seasoned Vaidyas in a stunning beachfront setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/AyurSoma Ayurveda/Photo gallery/img 1.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayursoma"
  },
  {
    name: "Back to Roots Ayurveda Retreat",
    city: "Idukki",
    location: "Idukki",
    description: "Rediscover the roots of true healing at this serene lakeside sanctuary in Idukki. Guided by the wisdom of 4th generation Ayurvedic physicians, this NABH-accredited retreat offers authentic, classical Panchakarma in a pristine natural setting. Expect a deeply personal journey where the focus is on pure, undiluted Ayurveda.",
    rating: 4.9,
    reviews: 100,
    image: "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/back-to-roots"
  },
];

const PanchakarmaTreatment = () => {
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
    { id: "benefits", title: "Holistic Benefits" },
    { id: "stages", title: "The Three Stages" },
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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Deep Detoxification</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Panchakarma Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">A Journey to Deep Rejuvenation. Cleanse your body and mind at the deepest cellular level.</p>
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
                src="/Treatments-images/panchakarma_hero.png"
                alt="Panchakarma Treatment in India"
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-[#335765] leading-tight">More Than Just a Detox</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Panchakarma, the crown jewel of Ayurvedic medicine, is one of India's most profound healing gifts to the world. It offers a vast array of benefits that extend far beyond a simple physical cleanse.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Unlike short-term cleanses that can be harsh on the body, Panchakarma is a gentle, systematic therapy that resets your body's innate intelligence, allowing it to heal itself from chronic ailments and return to a state of vibrant health.
              </p>
              <div className="pt-2">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">The Holistic Benefits</h2>
            <p className="text-[#7F543D] text-lg">Panchakarma provides a complete reset for your entire systemâ€”physical, mental, and spiritual.</p>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Physical Benefits */}
              <div className="bg-[#F8F4E7] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae]">
                <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center gap-2">
                  <Activity className="text-[#7F543D]" /> Physical Restoration
                </h3>
                <div className="space-y-3">
                  {physicalBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                      <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                      <p className="font-medium text-[#335765] text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mental Benefits */}
              <div className="bg-[#EDE8D0] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae]">
                <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center gap-2">
                  <Brain className="text-[#7F543D]" /> Mental Clarity
                </h3>
                <div className="space-y-3">
                  {mentalBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                      <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                      <p className="font-medium text-[#335765] text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spiritual Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center justify-center gap-2 text-center">
                <Sparkles className="text-[#7F543D] shrink-0" /> Spiritual Upliftment
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {spiritualBenefits.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#d9cfae] p-5 bg-white hover:shadow-md transition-all text-center">
                    <h4 className="text-base font-bold text-[#335765] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#7F543D] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Three Stages */}
        <section id="stages" className="scroll-mt-24 space-y-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">The 3 Stages of Panchakarma</h2>
            <p className="text-[#7F543D] text-lg">A true Panchakarma treatment is a carefully managed process that unfolds in three phases to safely and effectively cleanse the body.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {threeStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform">
                  <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#EDE8D0] ring-4 ring-[#d8d0ae]/30 shrink-0 mb-6">
                      <Icon className="h-8 w-8 text-[#2F5B5D]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#335765] mb-1">{stage.title}</h3>
                    <p className="text-[#7F543D] mb-4 text-sm font-semibold uppercase tracking-wider">{stage.sanskrit}</p>
                    <p className="text-[#5f4636] leading-relaxed text-sm">
                      {stage.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Suggested Treatment Packages & Cost */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration For Panchakarma Treatment in India</h2>
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Panchakarma Centers in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for Ayurveda packages.</p>
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
                src="/Treatments-images/panchakarma_hero.png"
                alt="Panchakarma Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Panchakarma Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20a%20Panchakarma%20program."
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

export default PanchakarmaTreatment;


