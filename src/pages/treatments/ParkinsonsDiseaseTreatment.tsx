import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, MapPin, Star, CheckCircle2, Activity, Brain, Sparkles, Droplet, Clock, ReceiptIndianRupee, ArrowRight, Zap, Trash2, Sun, Smile, ChevronLeft, ChevronRight, Search, X, ClipboardList, Phone } from "lucide-react";

const patientReviews = [
  { name: "Bernhard Schäfer", location: "Cologne, Germany", condition: "Kampavata Program", title: "Ayurveda Gave My Father Back His Independence.", review: "My father's Parkinson's medication was becoming less effective. We traveled to India for the classical Kampavata treatment, and the 28-day Panchakarma program addressed the neurological degeneration at a deep level. His resting tremor reduced measurably by week three, and the herbal formulations improved his motor function in a way that his own neurologist in Cologne acknowledged as clinically significant.", rating: 5, verified: true },
  { name: "Eileen Callahan", location: "Dublin, Ireland", condition: "Parkinson's Management", title: "Slowing the Progression and Restoring His Dignity.", review: "My husband's Parkinson's was progressing faster than expected. The 42-day Ayurveda Package in India produced measurable improvements in both his motor and non-motor symptoms. The Sarvanga Pathrapinda Sweda and Shiro Lepa therapies were particularly effective for his rigidity and sleep quality. He returned to Dublin walking more steadily than he had in two years.", rating: 5, verified: true },
  { name: "Hélène Marchand", location: "Bordeaux, France", condition: "Neurological Care", title: "A Complementary Approach That Made His Medication More Effective.", review: "The Ayurveda treatment offered a complementary approach, using Panchakarma and classical herbs like Mucuna pruriens. The combination allowed her existing medication to work more effectively at the same dose. Her resting hand tremor, which had been worsening for eighteen months, showed a visible reduction by week four.", rating: 5, verified: true },
  { name: "Jan Vermeer", location: "Utrecht, Netherlands", condition: "Vata Imbalance", title: "My Quality of Life Has Been Completely Restored.", review: "The Shirodhara sessions had a profound neurological calming effect that reduced my tremor and anxiety simultaneously, while the Nasya and Abhyanga improved my muscle rigidity. I returned home with significantly better balance and a restorative sleep cycle.", rating: 5, verified: true },
  { name: "Catriona MacLeod", location: "Edinburgh, UK", condition: "Early-Stage Parkinson's", title: "Ayurveda Gave Us Hope and a Clear Strategy.", review: "My father received an early-stage Parkinson's diagnosis, and his neurologist supported Ayurveda as a complementary approach. The Kampavata program he underwent addressed the Vata degeneration before it could progress further. His motor scores had remained stable in a way that was better than statistically expected.", rating: 5, verified: true }
];

const topAyurvedicCenters = [
  {
    name: "Agni Ayurvedic Village Resort",
    city: "Kerala",
    location: "Kerala",
    description: "A tranquil wellness hideaway in the heart of Kerala, Agni Ayurvedic Village Resort blends ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it�s a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies. Expect genuine care, nurturing treatments, and an atmosphere that feels like coming home to yourself.",
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
    name: "Atmantan Wellness Resort",
    city: "Pune",
    location: "Pune",
    description: "Set amidst the peaceful Sahyadri hills overlooking Mulshi Lake, Atmantan Wellness Resort is a luxury wellness retreat designed to restore balance and vitality. The resort blends traditional healing systems such as Ayurveda and yoga with modern wellness therapies to support holistic health. Guided by experienced wellness experts, guests can enjoy personalized programs focused on detox, stress relief, fitness, and lifestyle improvement. With serene surroundings, nourishing wellness cuisine, and integrated therapies, Atmantan provides a rejuvenating space for relaxation, healing, and long-term wellbeing.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/pune/atmantan-wellness-resort"
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
    name: "Ananda In The Himalayas",
    city: "Uttarakhand",
    location: "Uttarakhand",
    description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat nestled in the serene Himalayan foothills. Surrounded by pristine forests and overlooking the Ganges valley, Ananda blends ancient Indian wellness wisdom with modern luxury. Rooted in Ayurveda, Yoga, and Vedanta, Ananda offers highly personalized wellness programs guided by expert physicians and therapists. Each journey is designed to rejuvenate the body, calm the mind, and elevate the spirit�creating lasting transformation through mindful living and natural healing practices.",
    rating: 4.8,
    reviews: 900,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/uttarakhand/ananda-in-the-himalayas"
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
    name: "Dheemahi Kumarakom � Premium Lakeside Retreat",
    city: "Kumarakom",
    location: "Kumarakom",
    description: "Nestled on the serene banks of Lake Vembanad, Dheemahi Kumarakom is a premium NABH-accredited sanctuary for authentic healing. Rooted in over 90 years of family heritage, this retreat masterfully blends deep-rooted Ayurvedic wisdom with modern luxury, offering personalized care in a tranquil lakeside haven.",
    rating: 4.9,
    reviews: 150,
    image: "/Center Images/Dheemahi Ayurvedic Centre/center dp.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/dheemahi-kumarakom"
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Udupi",
    location: "Udupi",
    description: "Immerse yourself in a serene coastal sanctuary dedicated to authentic Ayurvedic Healing and yogic living. Shathayu Ayurveda Yoga Retreat blends classical Ayurvedic therapies with structured yoga programs, offering a holistic pathway to detoxification, rejuvenation, and lifestyle transformation. Guided by experienced Vaidyas and yoga practitioners, the retreat emphasizes personalized treatment protocols in a peaceful, nature-rich environment�ideal for deep restoration of body and mind.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/udupi/shathayu-ayurveda-yoga-retreat"
  },
  {
    name: "Kalari Kovilakom - The Palace For Ayurveda",
    city: "Palakkad",
    location: "Palakkad",
    description: "Immerse yourself in the authentic discipline of Ayurveda at Kalari Kovilakom ? The Palace For Ayurveda, a globally acclaimed wellness retreat rooted in ancient healing traditions. Set within a restored heritage palace, this unique center follows the classical gurukula system, offering a structured and immersive approach to Ayurvedic care. Guided by experienced Vaidyas, every program is tailored to restore balance, detoxify the body, and promote long-term well-being through time-tested therapies and holistic practices. With a strong focus on Panchakarma and intensive healing programs, Kalari Kovilakom provides a highly personalized wellness journey. From therapeutic treatments and sattvic nutrition to yoga and meditation, every element is carefully designed to support deep rejuvenation of body and mind. Ideal for those seeking serious, results-driven Ayurvedic Healing, the center delivers an environment of discipline, authenticity, and transformative care.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/kalari-kovilakom"
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

const faqItems = [
  { question: "How does Ayurveda manage Parkinson's tremors?", answer: "Ayurveda views tremors as an aggravation of Vata dosha. Management involves Vata-pacifying oils like Dhanwantharam, therapies like Shirodhara to calm the nervous system, and herbs like Kapikachhu (a natural L-Dopa source) to support dopamine levels." },
  { question: "Can Ayurveda be taken alongside conventional medication?", answer: "Yes, Ayurveda is often used as a complementary therapy. It can help make existing medications more effective and manage side effects. Always consult with your neurologist and an Ayurvedic physician for a coordinated care plan." },
  { question: "What is the recommended duration for Parkinson's treatment?", answer: "A minimum of 21 days is typically required for meaningful results. For more advanced stages or long-term stabilization, a 28 to 42-day program is often recommended to complete all stages of detox and rejuvenation." },
  { question: "Are the results of Ayurveda treatment permanent?", answer: "Parkinson's is a progressive condition. While Ayurveda can significantly slow the progression and improve symptoms, maintenance is key. Regular follow-ups, a Vata-balancing diet, and lifestyle adjustments are essential to sustain the gains." },
  { question: "What are the specific therapies used for muscle rigidity?", answer: "Abhyanga (warm oil massage), Pizhichil (pouring of oil), and specialized Basti (medicated enemas) are highly effective in reducing muscle stiffness and improving joint mobility." }
];

const neurologicalBenefits = [
  { text: "Pacifies aggravated Vata dosha, the root cause of tremors and rigidity.", icon: Zap },
  { text: "Nourishes the Majja Dhatu (nervous tissue) and strengthens the brain-muscle connection.", icon: Brain },
  { text: "Eliminates Ama (metabolic toxins) and clears neurological pathways.", icon: Trash2 },
  { text: "Supports natural dopamine production through traditional herbs like Kapikachhu.", icon: Sun },
  { text: "Improves motor coordination, balance, and overall physical mobility.", icon: Activity },
  { text: "Reduces stress and promotes deep relaxation for the central nervous system.", icon: Smile }
];

const treatmentStages = [
  {
    title: "Vata Pacification (Shodhana)",
    focus: "Eliminating Toxins & Calming Vata",
    description: "The initial phase focuses on clearing Ama (toxins) and pacifying the erratic Vata energy through gentle therapies and digestive support.",
    therapies: ["Abhyanga (Herbal Oil Massage)", "Pizhichil (Oil Bath)", "Deepan/Pachana (Digestive Support)"],
    image: "/Treatments-images/parkinsons_stage_1.png"
  },
  {
    title: "Deep Nourishment (Brimhana)",
    focus: "Nervous Tissue Rejuvenation",
    description: "Focused on Basti (medicated enemas) and Nasya to directly nourish the brain and nervous system (Majja Dhatu).",
    therapies: ["Medicated Basti", "Nasya Karma", "Shirodhara"],
    image: "/Treatments-images/parkinsons_stage_2.png"
  },
  {
    title: "Stabilization (Rasayana)",
    focus: "Long-term Management & Vitality",
    description: "The final phase uses intensive Rasayana (rejuvenating) herbs like Kapikachhu and Ashwagandha to sustain neurological health.",
    therapies: ["Shirobasti", "Rasayana Intake", "Specialized Vata Diet"],
    image: "/Treatments-images/parkinsons_stage_3.png"
  }
];

const treatmentPackages = [
  {
    name: "Stability & Balance Program",
    duration: "14 Days",
    cost: "₹1,25,000 - ₹1,65,000",
    focus: "Symptom management, tremor reduction, and initial Vata balancing.",
    image: "/Treatments-images/parkinsons_pack_1.png"
  },
  {
    name: "Neurological Recovery Program",
    duration: "21 Days",
    cost: "₹1,85,000 - ₹2,45,000",
    focus: "Deep tissue nourishment, intensive Basti protocols, and improved motor control.",
    image: "/Treatments-images/parkinsons_pack_2.png"
  },
  {
    name: "Intensive Rejuvenation Program",
    duration: "28 Days",
    cost: "₹2,60,000 - ₹3,50,000",
    focus: "Complete Majja Dhatu reset, long-term stabilization, and maximum mobility gains.",
    image: "/Treatments-images/parkinsons_pack_3.png"
  }
];

const ParkinsonsDiseaseTreatment = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [currentReview, setCurrentReview] = useState(0);
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) { setTopCentersPerSlide(1); setTopCentersMobileView(true); return; }
      if (window.innerWidth < 1024) { setTopCentersPerSlide(2); setTopCentersMobileView(false); return; }
      setTopCentersPerSlide(3); setTopCentersMobileView(false);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  useEffect(() => { setTopCentersSlide((p) => p % topCentersTotalSlides); }, [topCentersTotalSlides]);

  const goTopCentersPrev = () => setTopCentersSlide((p) => (p - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((p) => (p + 1) % topCentersTotalSlides);
  const toggleCenter = (name: string) => setExpandedCenterName((p) => (p === name ? null : name));
  const goReviewPrev = () => setCurrentReview((p) => (p - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview((p) => (p + 1) % patientReviews.length);

  const jumpSections = [
    { id: "intro", title: "Intro & Overview" },
    { id: "benefits", title: "Neurological Benefits" },
    { id: "process", title: "Treatment Journey" },
    { id: "cost-duration", title: "Packages & Cost" },
    { id: "reviews", title: "Patient Stories" },
    { id: "top-centers", title: "Top Centers" },
    { id: "faq", title: "FAQs" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const pos = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }, 250);
  };

  useEffect(() => {
    fetch("/content/Treatments/Parkinson's Treatment.txt")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  const renderContent = () => {
    if (!content) return null;

    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Empty line - add spacing
      if (!line) {
        elements.push(<div key={key++} className="h-4"></div>);
        continue;
      }

      // 1. ### Headings (Subheadings) - Dark primary color, bold
      if (line.startsWith("### ")) {
        const text = line.replace(/^### /, "");
        elements.push(
          <h3 key={key++} className="text-2xl font-bold text-primary mt-6 mb-3">
            {processInlineFormatting(text)}
          </h3>
        );
      }
      // 2. **Long text** (>30 chars) - Large Blue Heading with border
      else if (line.match(/^\*\*(.+)\*\*$/) && line.replace(/\*\*/g, "").length > 30) {
        const text = line.replace(/^\*\*|\*\*$/g, "");
        elements.push(
          <h2 key={key++} className="text-3xl font-bold text-primary border-b-2 border-primary/20 pb-2 mt-8 mb-4">
            {processInlineFormatting(text)}
          </h2>
        );
      }
      // 3. Numbered sections: 1. **text**
      else if (line.match(/^\d+\.\s+\*\*(.+)\*\*/)) {
        const match = line.match(/^(\d+\.\s+)\*\*(.+)\*\*/);
        if (match) {
          const [, number, text] = match;
          elements.push(
            <h4 key={key++} className="text-xl font-semibold text-primary/80 mt-6 mb-3">
              {number}{processInlineFormatting(text)}
            </h4>
          );
        }
      }
      // 4. **Short text** (<30 chars) - Bold/Section heading, dark primary
      else if (line.match(/^\*\*(.+)\*\*$/)) {
        const text = line.replace(/^\*\*|\*\*$/g, "");
        elements.push(
          <h4 key={key++} className="text-lg font-semibold text-primary mt-4 mb-2">
            {processInlineFormatting(text)}
          </h4>
        );
      }
      // 5. Bullet points with * - Brown colored dots and text
      else if (line.match(/^\*\s+/)) {
        const text = line.replace(/^\*\s+/, "");
        elements.push(
          <li key={key++} className="text-base leading-relaxed ml-6 mb-2 flex items-start" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      }
      // 6. Bullet points with - - Brown colored dots and text
      else if (line.match(/^-\s+/)) {
        const text = line.replace(/^-\s+/, "");
        elements.push(
          <li key={key++} className="text-base leading-relaxed ml-6 mb-2 flex items-start" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      }
      // 7. Regular paragraphs - Brown text color
      else {
        elements.push(
          <p key={key++} className="text-base leading-relaxed mb-4" style={{ color: '#7F543D' }}>
            {processInlineFormatting(line)}
          </p>
        );
      }
    }

    return <>{elements}</>;
  };

  const processInlineFormatting = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    const regex = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1]) {
        parts.push(
          <strong key={keyCounter++} className="font-bold italic">
            {match[1]}
          </strong>
        );
      } else if (match[2]) {
        parts.push(
          <strong key={keyCounter++} className="font-bold">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        parts.push(
          <em key={keyCounter++} className="italic">
            {match[3]}
          </em>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Kampavata Chikitsa</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Parkinson's Disease Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">A holistic Ayurvedic approach to managing Parkinson's — reducing tremors, improving mobility, and enhancing quality of life through time-tested therapies.</p>
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

      <main className="container mx-auto px-4 max-w-6xl pb-12 md:pb-16 pt-12 md:pt-16 space-y-20 md:space-y-28">

        {/* Intro Section */}
        <section id="intro" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl order-1">
              <img
                src="/Treatments-images/parkinsons_hero_image.png"
                alt="Ayurvedic Neurological Support"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/40 to-transparent" />
            </div>
            <div className="space-y-8 order-2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[2.6rem] font-bold text-[#335765] leading-tight">Kampavata: More Than Just a Neurological Condition</h2>
                <div className="space-y-5 text-[#7F543D] text-lg md:text-[1.1rem] leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                  <p>
                    In Ayurveda, Parkinson's is recognized as <strong>Kampavata</strong> — a condition primarily driven by a severe aggravation of the <strong>Vata dosha</strong>. Vata, the energy governing all movement and nerve impulses, becomes erratic, leading to the characteristic tremors and rigidity.
                  </p>
                  <p>
                    Our treatment approach focuses on restoring the <strong>Majja Dhatu</strong> (nervous tissue) and clearing obstructive toxins (Ama). By calming the erratic Vata energy and nourishing the brain, we aim to slow the condition's progression and significantly enhance physical mobility.
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setQuoteModalOpen(true)}
                className="h-14 px-10 bg-[#335765] hover:bg-[#25464c] text-white font-bold text-lg rounded-xl shadow-xl transition-all active:scale-95"
              >
                Start Your Healing Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="scroll-mt-24">
          <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Holistic Neurological Benefits</h2>
            <p className="text-[#7F543D] text-lg">A multi-faceted approach to restore neurological balance and improve your quality of life.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neurologicalBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="border-[#d8d0ae]/50 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="p-6 flex gap-5">
                    <div className="mt-1 shrink-0">
                      <Icon className="h-7 w-7 text-[#2F5B5D] stroke-[1.5]" />
                    </div>
                    <p className="text-[#5f4636] font-medium leading-relaxed text-[15px] md:text-base">{benefit.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Treatment Process / Stages */}
        <section id="process" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">The Therapeutic Journey</h2>
            <p className="text-[#7F543D] text-lg">Our structured management plan moves through three critical phases of detoxification and nourishment.</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {treatmentStages.map((stage, idx) => (
              <div key={idx} className="group relative">
                {idx !== treatmentStages.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-[#335765]/20 to-transparent hidden md:block" />
                )}
                <div className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-[#335765] text-white flex items-center justify-center text-2xl font-bold shadow-xl relative z-10 mx-auto md:mx-0">
                    {idx + 1}
                  </div>
                  <Card className="overflow-hidden border-[#d8d0ae] shadow-md hover:shadow-xl transition-all duration-500">
                    <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr]">
                      <div className="p-6 md:p-8 space-y-4 order-2 md:order-1">
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold text-[#335765]">{stage.title}</h3>
                          <p className="text-[#7F543D] font-bold text-sm uppercase tracking-wider">{stage.focus}</p>
                        </div>
                        <p className="text-[#5f4636] leading-relaxed">{stage.description}</p>
                        <div className="pt-2">
                          <h4 className="text-sm font-bold text-[#335765] mb-3 uppercase tracking-widest text-center md:text-left">Key Therapies</h4>
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {stage.therapies.map((therapy, tIdx) => (
                              <span key={tIdx} className="px-3 py-1.5 bg-[#EDE8D0]/50 text-[#335765] text-sm font-bold rounded-lg border border-[#d8d0ae]">
                                {therapy}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative h-48 md:h-full min-h-[200px] md:min-h-[220px] overflow-hidden border-b md:border-b-0 md:border-l border-[#d8d0ae]/30 order-1 md:order-2">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#335765]/20 to-transparent" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Packages */}
        <section id="cost-duration" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Suggested Packages, Cost & Duration For Parkinson's Disease Treatment in India</h2>
            <p className="text-[#7F543D] text-lg">Comprehensive programs tailored to the severity of symptoms and individual goals.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {treatmentPackages.map((pkg, idx) => (
              <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/95 to-transparent flex items-end p-5">
                    <h3 className="text-xl font-bold text-white leading-tight">{pkg.name}</h3>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col space-y-4 bg-white h-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50">
                      <Clock className="h-5 w-5 text-[#335765]" />
                      <span className="font-bold text-[#335765] text-sm">Duration:</span>
                      <span className="font-semibold text-sm">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="text-sm text-[#5f4636] flex-grow leading-relaxed border-l-[3px] border-[#335765] pl-3 py-1 font-medium italic">
                    "{pkg.focus}"
                  </div>
                  <div className="mt-auto pt-4">
                    <Button
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold rounded-xl shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      Get a Free Quote <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>


      </main>

      {/* Patient Reviews */}
      <div className="container mx-auto px-4 max-w-6xl py-8">
        <section id="reviews" className="scroll-mt-24 bg-transparent w-full">
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories &amp; Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Real-world outcomes from patients who underwent our neurological recovery programs.</p>
          </div>
          <div className="max-w-4xl mx-auto relative px-0 md:px-0">
            <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
              <button onClick={goReviewPrev} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"><ChevronLeft className="h-4 w-4 md:h-6 md:w-6" /></button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
              <button onClick={goReviewNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"><ChevronRight className="h-4 w-4 md:h-6 md:w-6" /></button>
            </div>
            <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-4 md:p-12 relative">
                <div className="max-w-4xl mx-auto">
                  <div className="text-[#335765]/20 mb-3 md:mb-4"><svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg></div>
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">{patientReviews[currentReview].title}</h3>
                    <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>"{patientReviews[currentReview].review}"</p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">{patientReviews[currentReview].name.charAt(0)}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                        <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight">{patientReviews[currentReview].name}</h4>
                        {patientReviews[currentReview].verified && <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">&#10003; Verified</span>}
                      </div>
                      <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>{patientReviews[currentReview].location}{patientReviews[currentReview].condition && ` - ${patientReviews[currentReview].condition}`}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />)}</div>
                    <span className="text-xs md:text-sm font-semibold text-[#335765]">{patientReviews[currentReview].rating}.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center gap-2 mt-8">
              {patientReviews.map((_, idx) => <button key={idx} onClick={() => setCurrentReview(idx)} className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#335765]" : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"}`} />)}
            </div>
          </div>
        </section>

        {/* Top Centers */}
        <section id="top-centers" className="scroll-mt-24 space-y-8 mt-14">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Parkinson's Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked centers specializing in Parkinson's care and Vata-pacifying rehabilitation.</p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersPrev} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"><ChevronLeft className="h-4 w-4 md:h-6 md:w-6" /></button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"><ChevronRight className="h-4 w-4 md:h-6 md:w-6" /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-0 md:px-6 lg:px-8 items-stretch">
              {topAyurvedicCenters.slice(topCentersSlide * topCentersPerSlide, topCentersSlide * topCentersPerSlide + topCentersPerSlide).map((center, idx) => (
                <div key={`${center.name}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full">
                    <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                      <img src={center.image} alt={center.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow text-left">
                      <h3 className="text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] flex items-start">{center.name}</h3>
                      <div className="flex items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 overflow-hidden">
                        <div className="flex items-center gap-1.5 min-w-0"><MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" /><span className="text-[12px] font-semibold truncate">{center.city}</span></div>
                        <div className="flex items-center gap-1 shrink-0"><Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /><span className="text-[12px] font-bold text-[#335765]">{center.rating} ({center.reviews})</span></div>
                      </div>
                      <div className="relative mb-3 flex-grow">
                        <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>{center.description}</p>
                        <button onClick={() => toggleCenter(center.name)} className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block">{expandedCenterName === center.name ? "Read Less" : "Read More"}</button>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Link to={center.link} target="_blank" rel="noreferrer" className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg text-xs flex items-center justify-center transition-all">View Details</Link>
                        <Button className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg text-xs shadow-sm" onClick={() => setQuoteModalOpen(true)}>Get Quote</Button>
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
                {Array.from({ length: topCentersTotalSlides }).map((_, i) => <button key={i} onClick={() => setTopCentersSlide(i)} className={`h-1.5 rounded-full transition-all ${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`} />)}
              </div>
            )}
            <div className="flex justify-center mt-4">
              <Link
                to="/top-ayurvedic-centers-in-india"
                target="_blank"
                rel="noreferrer"
                className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base group"
              >
                VIEW ALL CENTERS <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 mt-14">
          <div className="text-center mb-10"><h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2></div>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto px-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Book Your Program CTA */}
        <section className="mt-14 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img src="/Treatments-images/parkinsons_hero_image.png" alt="Book Parkinson's Program" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1 text-left">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Parkinson's Disease Treatment Program in India</h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">Begin with a no-obligation consultation. We help you choose the right center, dates, and management plan for your specific condition and budget.</p>
              <div className="space-y-3 max-w-xl">
                <a href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Parkinson's%20Treatment." target="_blank" rel="noreferrer" className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition shadow-lg">
                  <span className="text-xs md:text-sm font-semibold">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>Get Free Consultation Here</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop BROWSE Button */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button onClick={() => setIsJumpModalOpen(true)} className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter">
          <span>B</span><span>R</span><Search size={16} strokeWidth={3.5} /><span>W</span><span>S</span><span>E</span>
        </button>
      </div>

      {/* Mobile BROWSE button */}
      <button onClick={() => setIsJumpModalOpen(true)} className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95">
        <Search size={18} className="-ml-1" /><span>BROWSE</span>
      </button>

      {/* Mobile Quote Button */}
      <button onClick={() => setQuoteModalOpen(true)} className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95">
        <Phone size={18} className="-ml-1" /><span className="hidden md:inline">GET FREE QUOTE</span><span className="md:hidden">QUOTE</span>
      </button>

      {/* Jump Modal */}
      <div className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />
        <div className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-1"><div className="h-px w-6 bg-white/30" /><span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span></div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight text-white">Page Sections</h2>
              </div>
              <button onClick={() => setIsJumpModalOpen(false)} className="p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all border border-white/10"><X className="h-6 w-6" /></button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10"><ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" /><p className="text-[11px] text-white/70 italic">"Jump directly to any section in this page."</p></div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center"><span className="text-xs font-black text-primary group-hover:text-white">{(idx + 1).toString().padStart(2, "0")}</span></div>
                  <span className="text-sm font-bold text-primary group-hover:text-white text-left">{section.title}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkinsonsDiseaseTreatment;


