import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calendar, MapPin, Star, Activity, Droplet, 
  ArrowRight, ChevronLeft, ChevronRight, Search, 
  Phone, X, ClipboardList, Brain, ShieldCheck,
  Clock, ReceiptIndianRupee, CheckCircle2, Sparkles,
  Zap, HeartPulse, UserCheck, Scale, Info
} from "lucide-react";

const patientReviews = [
  {
    name: "Werner Schindler", location: "Stuttgart, Germany", condition: "20-Year Chronic Ulcer",
    title: "A Twenty-Year Non-Healing Ulcerâ€”Healed in 45 Days.",
    review: "My varicose ulcer had been unresponsive to treatment for nearly twenty years. The Jalaukavacharana (leech therapy) sessions drained the impure, stagnant blood, reducing pain and inflammation within the first three sessions. Combined with internal detoxification, the ulcer showed complete healing by day forty-two.",
    rating: 5, verified: true
  },
  {
    name: "Orla Cunningham", location: "Cork, Ireland", condition: "Non-Closing Wound",
    title: "Leech Therapy Achieved What Compression Bandaging Never Could.",
    review: "For eleven months, I managed my chronic varicose ulcer with compression therapy, but achieved no wound closure. The Ayurvedic physician identified impure blood pooling as the root cause. The Jalaukavacharana corrected this by removing the toxic blood. The wound was fully closed within twenty-eight days.",
    rating: 5, verified: true
  },
  {
    name: "AmÃ©lie Dubois", location: "Nantes, France", condition: "Circulatory Recovery",
    title: "They Addressed the Circulationâ€”Not Just the Surface.",
    review: "In France, my ulcer was treated as a surface problem. The Ayurvedic physician treated it as a systemic circulatory disorder. The combination of Siravyadha (venesection), leech therapy, and Lepam herbal paste addressed the cause, not just the symptom. The ulcer healed completely by week six.",
    rating: 5, verified: true
  },
  {
    name: "Pieter Jansen", location: "The Hague, Netherlands", condition: "Post-Surgery Alternative",
    title: "Results My Vascular Surgeon Considered Remarkable.",
    review: "My vascular surgeon had recommended surgery as the only option. I chose to try Ayurveda treatment first. Just six sessions of Jalaukavacharana over forty-five days, combined with herbal poultices and massage, produced complete wound closure. My surgeon described the result as remarkable.",
    rating: 5, verified: true
  },
  {
    name: "SiobhÃ¡n Malone", location: "Galway, Ireland", condition: "Recurrent Ulcers",
    title: "Healedâ€”With No Recurrence in Eighteen Months.",
    review: "The most important outcome was not just healing, but the absence of recurrence. My ulcer had re-opened three times in two years under conventional care. The Ayurveda Package addressed the underlying venous obstruction through Raktamokshana. Eighteen months later, there has been no recurrence.",
    rating: 5, verified: true
  }
];

const topAyurvedicCenters = [
  {
    name: "HimVeda Heritage Wellness Centre",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala. HimVeda is dedicated to authentic Ayurvedic Healing, combining classical therapies with nature-centric living for holistic well-being. Rooted in traditional Ayurvedic principles, HimVeda offers personalized treatments guided by experienced Ayurvedic doctors and skilled therapists. Each wellness program is carefully designed to restore balance to the body, mind, and spirit, supporting long-term health through natural, time-tested healing practices in a calm mountain setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/HimVeda/Thumb.jpeg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/himveda"
  },
  {
    name: "Shreyas Yoga Retreat (Nelamangala)",
    city: "Bangalore",
    location: "Bangalore",
    description: "Experience a serene blend of traditional yoga philosophy and luxury wellness at Shreyas Yoga Retreat in Nelamangala, near Bangalore. Set within lush gardens and peaceful countryside, Shreyas offers an authentic yogic lifestyle rooted in ancient Indian traditions. The retreat focuses on holistic wellbeing through classical Hatha Yoga, meditation, Ayurveda therapies, and mindful living practices guided by experienced teachers. Each wellness journey is thoughtfully designed to nurture physical vitality, mental clarity, and emotional balance. With personalized programs, organic cuisine, and a tranquil environment, Shreyas provides a rejuvenating sanctuary for guests seeking deep relaxation, inner growth, and sustainable wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shreyas Yoga Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/shreyas-yoga-retreat"
  },
  {
    name: "Ideal Ayurvedic Resort",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on a tranquil hillside in Chowara village, just a short walk from Kovalam beach, Ideal Ayurvedic Resort is a 'Green Leaf' certified sanctuary surrounded by 15 acres of lush coconut groves. Authentic, physician-led Ayurveda is practiced with heartfelt dedication — from classical Panchakarma to personalized healing programs — in one of Kerala's most genuinely non-commercialized healing environments.",
    rating: 4.5,
    reviews: 400,
    image: "/Center Images/Ideal Ayurvedic Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ideal-ayurvedic-resort"
  },
  {
    name: "Yan Cure Yoga Retreat & Ayurveda Centre",
    city: "Rishikesh",
    location: "Rishikesh",
    description: "Yan Cure Yoga Retreat & Ayurveda Centre mein aap paayenge yoga, Ayurveda aur holistic healing ka perfect sangam. Yeh centre ek shaant aur prakritik environment mein sthit hai, jahan traditional Ayurvedic therapies aur yogic practices ke zariye body, mind aur soul ko balance kiya jaata hai. Experienced Ayurvedic doctors aur certified yoga instructors ke guidance mein, Yan Cure personalized treatment programs offer karta hai jo detoxification, stress relief aur overall rejuvenation par focus karte hain. Yahan ki healing therapies ancient wisdom aur modern wellness approaches ka ek powerful combination hain, jo long-term health aur inner peace ko promote karti hain.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp",
    link: "/top-ayurvedic-centers-in-india/rishikesh/yan-cure"
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
    name: "Agni Ayurvedic Village Resort",
    city: "Kerala",
    location: "Kerala",
    description: "A tranquil wellness hideaway in the heart of Kerala, Agni Ayurvedic Village Resort blends ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it’s a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies. Expect genuine care, nurturing treatments, and an atmosphere that feels like coming home to yourself.",
    rating: 4.7,
    reviews: 190,
    image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/agni-ayurvedic-village"
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
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Udupi",
    location: "Udupi",
    description: "Immerse yourself in a serene coastal sanctuary dedicated to authentic Ayurvedic Healing and yogic living. Shathayu Ayurveda Yoga Retreat blends classical Ayurvedic therapies with structured yoga programs, offering a holistic pathway to detoxification, rejuvenation, and lifestyle transformation. Guided by experienced Vaidyas and yoga practitioners, the retreat emphasizes personalized treatment protocols in a peaceful, nature-rich environment—ideal for deep restoration of body and mind.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/udupi/shathayu-ayurveda-yoga-retreat"
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
    name: "Kalari Kovilakom - The Palace For Ayurveda",
    city: "Palakkad",
    location: "Palakkad",
    description: "Immerse yourself in the authentic discipline of Ayurveda at Kalari Kovilakom � The Palace For Ayurveda, a globally acclaimed wellness retreat rooted in ancient healing traditions. Set within a restored heritage palace, this unique center follows the classical gurukula system, offering a structured and immersive approach to Ayurvedic care. Guided by experienced Vaidyas, every program is tailored to restore balance, detoxify the body, and promote long-term well-being through time-tested therapies and holistic practices. With a strong focus on Panchakarma and intensive healing programs, Kalari Kovilakom provides a highly personalized wellness journey. From therapeutic treatments and sattvic nutrition to yoga and meditation, every element is carefully designed to support deep rejuvenation of body and mind. Ideal for those seeking serious, results-driven Ayurvedic Healing, the center delivers an environment of discipline, authenticity, and transformative care.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/kalari-kovilakom"
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
];

const faqItems = [
  { question: "How does Leech Therapy (Jalaukavacharana) help heal an ulcer?", answer: "Leeches remove stagnant, deoxygenated blood and toxins from the affected area. Their saliva contains natural anticoagulants and anti-inflammatory substances that improve micro-circulation, allowing fresh, oxygenated blood to reach the wound and promote tissue regeneration." },
  { question: "Is Ayurveda treatment painful for varicose ulcers?", answer: "Therapies like Lepam and Virechana are very soothing. Leech therapy is surprisingly painless; most patients only feel a tiny prick. The overall focus is on reducing pain and inflammation immediately." },
  { question: "Will the ulcer return after Ayurveda treatment?", answer: "Ayurveda addresses the root cause (blood impurity and venous obstruction). By combining blood purification with lifestyle and dietary changes, the risk of recurrence is significantly lower compared to surface treatments." },
  { question: "How long does it typically take for a chronic ulcer to close?", answer: "Depending on the size and duration of the ulcer, most patients see significant healing within 14 to 21 days. Complete closure of even long-standing ulcers is usually achieved within a 28 to 42-day comprehensive program." },
  { question: "Are there any dietary restrictions during the treatment?", answer: "Yes. To prevent blood impurities (Rakta Dushti), you must avoid excessively salty, sour, and spicy foods. A high-fiber diet is essential to prevent constipation, which otherwise increases pressure on the leg veins." }
];

const VaricoseUlcer = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  const topCentersTotalSlides = Math.ceil(topAyurvedicCenters.length / topCentersPerSlide);

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

  const jumpSections = [
    { id: "intro", title: "Overview" },
    { id: "root-cause", title: "The Root Cause" },
    { id: "causes", title: "Risk Factors" },
    { id: "therapies", title: "Core Therapies" },
    { id: "why-india", title: "Why India?" },
    { id: "lifestyle", title: "Diet & Lifestyle" },
    { id: "cost-duration", title: "Packages & Cost" },
    { id: "reviews", title: "Patient Stories" },
    { id: "top-centers", title: "Top Centers" },
    { id: "faq", title: "FAQ" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  const goReviewPrevious = () => {
    setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  };

  const goReviewNext = () => {
    setCurrentReview((prev) => (prev + 1) % patientReviews.length);
  };

  const goTopCentersPrevious = () => {
    setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  };

  const goTopCentersNext = () => {
    setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  };

  const toggleCenterDescription = (name: string) => {
    setExpandedCenterName(expandedCenterName === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-[#E5EFEC] font-poppins overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Circulation & Healing</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Varicose Ulcer Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">Heal Naturally & Restore Mobility. Advanced Ayurvedic vascular care for deep-seated ulcers and vein health.</p>
              <div className="space-y-2.5 pt-2">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.8/5 Patient Satisfaction</span>
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

      <main className="container mx-auto px-4 max-w-6xl pb-10 md:pb-12 pt-8 md:pt-10 space-y-14 md:space-y-16">
        
        {/* Intro Section */}
        <section id="intro" className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group order-1">
              <img 
                src="/Treatments-images/Varicose Veins Treatment.jpg" 
                alt="Ayurvedic Varicose Treatment" 
                className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/40 to-transparent" />
            </div>
            <div className="space-y-8 order-2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[2.6rem] font-bold text-[#335765] leading-tight">Siraja Granthi: The Science of Vein Health</h2>
                <div className="space-y-5 text-[#7F543D] text-lg md:text-[1.1rem] leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                  <p>
                    In Ayurveda, varicose veins are known as <strong>Siraja Granthi</strong>. This condition is not just a cosmetic concern; it is a sign of deep-seated circulatory imbalances.
                  </p>
                  <p>
                    Our approach in India focuses on the root causeâ€”purifying the blood (Rakta Shodhana), restoring the natural flow of energy, and healing the damaged vascular channels.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="h-12 md:h-14 bg-[#335765] hover:bg-[#25464c] text-white font-bold text-lg rounded-xl shadow-xl px-10 transition-all active:scale-95" onClick={() => setQuoteModalOpen(true)}>
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Root Cause Section */}
        <section id="root-cause" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">The Dosha Imbalance</h2>
            <p className="text-lg text-[#7F543D]">Varicose ulcers occur when the balance of Vata, Pitta, and Rakta is severely disrupted.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Vata Dosha", text: "Governs circulation. Imbalance causes dryness and pressure, weakening the vein valves and causing blood to pool.", icon: Activity },
              { title: "Rakta Dhatu", text: "Impure blood (Rakta Dushti) becomes thick, contributing to poor circulation, stagnation, and eventually ulcers.", icon: Droplet },
              { title: "Pitta Dosha", text: "When imbalanced, it triggers inflammation, burning sensations, and skin discoloration over the veins.", icon: Zap }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-[#d8d0ae] bg-white hover:shadow-2xl transition-all duration-500 group text-center">
                <div className="h-14 w-14 rounded-2xl bg-[#335765]/10 flex items-center justify-center group-hover:bg-[#335765] transition-colors duration-500 mx-auto mb-6">
                  <item.icon className="h-7 w-7 text-[#335765] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#335765] mb-4">{item.title}</h3>
                <p className="text-[#7F543D] leading-relaxed text-sm">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Risk Factors / Causes */}
        <section id="causes" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-[#335765]">Why Do Veins Weaken?</h2>
            <p className="text-lg text-[#7F543D]">Several dietary and lifestyle factors contribute to the development of Siraja Granthi.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Prolonged Standing", icon: UserCheck },
              { title: "Obesity", icon: Scale },
              { title: "Lack of Movement", icon: Activity },
              { title: "Chronic Constipation", icon: ShieldCheck },
              { title: "Improper Diet", icon: Sparkles },
              { title: "Hormonal Changes", icon: HeartPulse },
              { title: "Hereditary Factors", icon: Info },
              { title: "Sedentary Lifestyle", icon: Clock }
            ].map((cause, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#d8d0ae] text-center space-y-3 shadow-sm hover:shadow-md transition-all">
                <div className="h-10 w-10 bg-[#335765]/5 rounded-full flex items-center justify-center mx-auto">
                  <cause.icon className="h-5 w-5 text-[#335765]" />
                </div>
                <p className="font-bold text-[#335765] text-sm leading-tight">{cause.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Therapies Section */}
        <section id="therapies" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#335765]">Core Ayurvedic Therapies</h2>
            <p className="text-lg text-[#7F543D]">Specialized treatments designed to purify blood and restore vascular integrity.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rakta Mokshana",
                sanskrit: "Leech Therapy",
                text: "The 'gold standard' for varicose veins. Medicinal leeches remove stagnant blood, relieve pressure, and inject anti-inflammatory substances.",
                icon: Droplet
              },
              {
                title: "Virechana",
                sanskrit: "Medicated Purgation",
                text: "A detox phase that purifies the blood (Rakta Shodhana) and pacifies Pitta, improving overall circulation throughout the body.",
                icon: Activity
              },
              {
                title: "Lepam",
                sanskrit: "Herbal Paste",
                text: "Cooling pastes of sandalwood, turmeric, and manjistha are applied to reduce pain, inflammation, and skin discoloration.",
                icon: Sparkles
              }
            ].map((therapy, idx) => {
              const Icon = therapy.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform bg-white">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#EDE8D0] ring-4 ring-[#d8d0ae]/30 shrink-0 mb-6">
                      <Icon className="h-8 w-8 text-[#2F5B5D]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#335765] mb-1">{therapy.title}</h3>
                    <p className="text-[#7F543D] mb-4 text-sm font-semibold uppercase tracking-wider">{therapy.sanskrit}</p>
                    <p className="text-[#5f4636] leading-relaxed text-sm">
                      {therapy.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why India? Section */}
        <section id="why-india" className="scroll-mt-24 bg-[#335765] rounded-[2.5rem] p-6 md:p-14 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 md:space-y-6 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">Why Choose India for Vascular Recovery?</h2>
              <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                India is the global epicenter for authentic Leech Therapy (Jalaukavacharana) and specialized blood-cleansing protocols that are often unavailable or imitatively practiced elsewhere.
              </p>
              <ul className="space-y-3 md:space-y-4 text-left inline-block lg:block">
                {[
                  "Unmatched expertise in classical bloodletting.",
                  "Access to fresh, high-potency medicinal herbs.",
                  "Integrated programs including Yoga & Sattvic diet.",
                  "Significantly more affordable than Western clinical care."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-sky-300 shrink-0 mt-0.5" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 w-full max-w-md mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Circulation-Boosting Results</h3>
              <div className="space-y-4 md:space-y-6 text-center">
                <div className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-sky-300">85%+</p>
                  <p className="text-[10px] md:text-sm uppercase tracking-wider text-white/60">Pain Relief Success Rate</p>
                </div>
                <div className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-sky-300">14-21 Days</p>
                  <p className="text-[10px] md:text-sm uppercase tracking-wider text-white/60">Visible Healing Period</p>
                </div>
                <Button onClick={() => setQuoteModalOpen(true)} className="w-full h-11 md:h-12 bg-white text-[#335765] hover:bg-sky-50 font-bold text-base md:text-lg rounded-xl shadow-xl transition-all">
                  Get My Treatment Plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Diet & Lifestyle */}
        <section id="lifestyle" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">The Holistic Daily Ritual</h2>
            <p className="text-[#7F543D] text-lg">Maintaining vascular health requires more than just therapy; it demands a dedicated lifestyle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#d8d0ae] bg-white overflow-hidden flex flex-col shadow-lg">
              <div className="bg-[#F8F4E7] p-6 border-b border-[#d8d0ae]">
                <h3 className="text-2xl font-bold text-[#335765] flex items-center gap-3">
                  <Sparkles className="text-[#335765]" /> Healing Diet
                </h3>
              </div>
              <CardContent className="p-8 space-y-6 flex-grow">
                <div className="space-y-4">
                  <h4 className="font-bold text-[#335765] flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" /> Favour (High Fiber)
                  </h4>
                  <p className="text-[#7F543D] leading-relaxed text-sm">
                    Whole grains, leafy greens, pomegranates, and root vegetables support blood health and prevent constipation.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-[#335765] flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" /> Avoid (Inflammatory)
                  </h4>
                  <p className="text-[#7F543D] leading-relaxed text-sm">
                    Excessively spicy, salty, sour, and deep-fried foods vitiate the blood. Reduce non-vegetarian intake.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#d8d0ae] bg-[#335765] text-white overflow-hidden flex flex-col shadow-lg">
              <div className="bg-white/10 p-6 border-b border-white/20">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Activity className="text-sky-300" /> Lifestyle Rituals
                </h3>
              </div>
              <CardContent className="p-8 space-y-6 flex-grow">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Elevate Legs</h4>
                    <p className="text-white/70 text-sm">Rest with legs above heart level to assist venous return flow.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Gentle Yoga</h4>
                    <p className="text-white/70 text-sm">Viparita Karani (Legs-up-wall) is vital for improving leg circulation.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Move Often</h4>
                    <p className="text-white/70 text-sm">Avoid prolonged standing. Take frequent breaks to sit and stretch.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Suggested Packages */}
        <section id="cost-duration" className="scroll-mt-24 space-y-8">
           <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-3">Suggested Packages, Cost & Duration For Varicose Ulcer Treatment in India</h2>
             <p className="text-lg text-[#7F543D]">Choose a treatment timeline based on the size and severity of the ulcer and circulatory health.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
             {[
               { name: "14-Day Initial Detox", duration: "14 Days", cost: "$1,800 - $2,500 USD", focus: "Focuses on immediate pressure relief using Leech Therapy and basic blood cleansing.", image: "/varicose_pack1.png" },
               { name: "21-Day Intensive Healing", duration: "21 Days", cost: "$2,800 - $3,800 USD", focus: "Multiple bloodletting sessions and intensive wound care. Best for chronic moderate ulcers.", image: "/varicose_pack2.png" },
               { name: "28-Day Comprehensive Recovery", duration: "28 Days", cost: "$3,800 - $5,200 USD", focus: "Full systemic purification and tissue regeneration to prevent future ulcer recurrence.", image: "/varicose_pack3.png" }
             ].map((pkg, idx) => (
               <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full bg-white">
                 <div className="relative h-40 md:h-44 overflow-hidden shrink-0">
                   <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                     <Button onClick={() => setQuoteModalOpen(true)} className="w-full h-11 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base rounded-xl shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                       Get a Free Quote
                     </Button>
                   </div>
                 </CardContent>
               </Card>
             ))}
           </div>
        </section>

        {/* Patient Reviews */}
        <section id="reviews" className="scroll-mt-24 bg-transparent w-full">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Real outcomes from patients who found relief through Ayurvedic vascular care.</p>
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

              <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-4 md:p-12 relative">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4 italic">
                        {patientReviews[currentReview].title}
                      </h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6 font-medium" style={{ color: "#7F543D" }}>
                        "{patientReviews[currentReview].review}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase shadow-md">
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
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
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
                      <span className="text-xs md:text-sm font-black text-[#335765]">
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
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Centers */}
        <section id="top-centers" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Varicose Ulcer Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized expertise in Leech Therapy and chronic wound healing.</p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersPrevious}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersNext}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
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

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto px-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-2xl px-6 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-bold text-[#335765] hover:no-underline py-6 transition-all hover:text-[#25464c] [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-6 text-base md:text-[17px] font-medium">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Book Consultation CTA */}
        <section className="scroll-mt-24 w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img
                src="/Treatments-images/Varicose Veins Treatment.jpg"
                alt="Varicose Ulcer Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Varicose Ulcer Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Experience the power of authentic Jalaukavacharana and blood purification. We help you choose the right center and timeline for your recovery.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Varicose%20Ulcer%20treatment."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-[#335765]">+91 80 2843 2737</span>
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
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex flex-col items-end">
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

      {/* Quote Button (Mobile & Desktop) */}
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
        className={`fixed inset-0 z-[100] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />

        <div
          className={`relative w-full max-sm:w-[90%] max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-[#335765]/20 via-[#335765] to-[#335765]/20" />

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

export default VaricoseUlcer;


