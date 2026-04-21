import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, MapPin, Star, CheckCircle2, Activity, Brain, Sparkles, Droplet, UtensilsCrossed, Pill, Clock, ReceiptIndianRupee, ChevronLeft, ChevronRight, ArrowRight, Phone, Search, X, ClipboardList } from "lucide-react";

const patientReviews = [
  { name: "Wolfram Becker", location: "Stuttgart, Germany", condition: "Monsoon Detox", title: "The World's Best-Kept Healing Secret.", review: "I had always associated the monsoon with travel disruption, not healing. The Karkidaka Chikitsa program in Kerala changed that completely. The physician explained how the cool, humid climate makes the body more receptive to the oil therapies. The daily medicated rice gruel (Karkidaka Kanji) and the Pizhichil warm oil bath systematically cleared an entire year's worth of accumulated toxins. I left feeling lighter, clearer, and with stronger immunity.", rating: 5, verified: true },
  { name: "Maeve Donoghue", location: "Limerick, Ireland", condition: "Preventive Healthcare", title: "A Complete Annual Reset for My Health.", review: "I traveled to Kerala specifically to experience the traditional Karkidaka Chikitsa. The 28-day treatment, following the ancient seasonal regimen, felt like the most logical and complete approach to preventive healthcare I have ever encountered. The sequential therapies, including Virechana and Vasthi, were performed in a precise order. My joint mobility, which had been declining, improved measurably by week three.", rating: 5, verified: true },
  { name: "Geneviève Aumont", location: "Lyon, France", condition: "Seasonal Allergies", title: "My Seasonal Allergies Disappeared—and Haven't Returned in Two Years.", review: "I had suffered from seasonal allergic rhinitis for a decade before undergoing Karkidaka Chikitsa. The monsoon treatment addressed my immune dysregulation at its root through Panchakarma and the daily immunity gruel. That winter, I experienced no allergic episode for the first time in ten years. The Vaidya explained that a successful monsoon cleanse can reset the immune response for subsequent seasons.", rating: 5, verified: true },
  { name: "Rutger Van Hoeve", location: "Rotterdam, Netherlands", condition: "Rheumatoid Arthritis", title: "The Monsoon Rain Outside and the Healing Inside—Both Profound.", review: "Arriving in Kerala during the height of the monsoon created an atmospheric dimension to the healing that I had not anticipated. The program for my rheumatoid arthritis combined Dhara oil stream therapy with an anti-inflammatory diet that eliminated the foods aggravating my Vata-Pitta imbalance. My morning joint stiffness, a daily reality for three years, was almost entirely absent by week four.", rating: 5, verified: true },
  { name: "Ingrid Holmström", location: "Stockholm, Sweden", condition: "Chronic Skin Inflammation", title: "Monsoon Is When Ayurveda Works at Its Deepest.", review: "Every wellness insider I spoke to said the same thing—monsoon is when Ayurveda delivers its most profound results. The body's openness to treatment and the cool temperatures make the intensive therapies more comfortable. My 14-day Karkidaka Chikitsa program reset my digestion, cleared my chronic skin inflammation, and produced an energy and mental clarity that I returned to Stockholm carrying like a physical gift.", rating: 5, verified: true }
];

const topAyurvedicCenters = [
  { name: "Kairali - The Ayurvedic Healing Village", city: "Palakkad, Kerala, India", description: "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Karkidaka Chikitsa and Panchakarma treatments in a serene, nature-focused environment ideal for monsoon healing.", rating: 4.8, reviews: 420, image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg", link: "/centers/kerala/kairali-ayurvedic-healing-village" },
  { name: "Somatheeram Ayurveda Village Resort", city: "Thiruvananthapuram, Kerala, India", description: "Widely regarded as the world's first Ayurveda resort, providing classical monsoon treatments, yoga, and meditation on a beautiful cliff overlooking the Arabian Sea.", rating: 4.7, reviews: 510, image: "/Center Images/somatheeram/Somatheeram 01.jpg", link: "/centers/kerala/somatheeram" },
  { name: "Carnoustie Ayurveda Wellness Resort", city: "Mararikulam, Kerala, India", description: "A premium beachside center known for authentic Karkidaka Chikitsa, experienced doctors, and personalized monsoon recovery-focused plans.", rating: 4.7, reviews: 360, image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg", link: "/centers/kerala/carnoustie-ayurveda-wellness-resort" },
  { name: "SOUKYA International Holistic Health Centre", city: "Bengaluru, Karnataka, India", description: "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm with personalized monsoon treatment programs.", rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/centers/bangalore/soukya" },
  { name: "AyurvedaGram Heritage Wellness Centre", city: "Bengaluru, Karnataka, India", description: "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles, offering authentic monsoon cleansing programs guided by experienced Vaidyas.", rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/centers/bangalore/ayurvedagram" },
  { name: "Shathayu Ayurveda Yoga Retreat", city: "Bengaluru Rural, Karnataka, India", description: "A serene retreat combining classical monsoon therapies with guided yoga, meditation, and lifestyle coaching to support detoxification and sustainable health improvement.", rating: 4.8, reviews: 380, image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg", link: "/centers/udupi/shathayu-ayurveda-yoga-retreat" }
];

const faqItems = [
  { question: "When is the best time for Karkidaka Chikitsa?", answer: "The ideal time is during Karkidakam, the Malayalam month corresponding to mid-July to mid-August. This is when the body's pores are most open, humidity is high, and Ayurvedic treatments penetrate deepest into the tissues. However, monsoon treatments in Kerala are available from June through August." },
  { question: "How long should a monsoon treatment program be?", answer: "A minimum of 14 days is recommended to experience meaningful benefits. The classical protocol is 21 days, which allows for all three phases—preparation, main therapies, and rejuvenation—to be completed. For chronic conditions, a 28-day program is ideal." },
  { question: "What is Karkidaka Kanji and why is it important?", answer: "Karkidaka Kanji is a special medicinal rice gruel prepared with Njavara rice and a combination of potent herbs. It is consumed daily during the program and is specifically designed to be easy to digest, kindle the digestive fire (Agni), boost immunity, and provide deep cellular nourishment during the cleanse." },
  { question: "Who should avoid monsoon Ayurvedic treatment?", answer: "Pregnant women, individuals with acute fever or infections, and those who are extremely weak or debilitated should consult a physician before undergoing treatment. A thorough Ayurvedic consultation is always the first step to determine your suitability for specific therapies." },
  { question: "Why is monsoon the most effective time for Ayurvedic treatment?", answer: "Ayurveda explains that during the monsoon, the body's channels (srotas) are naturally soft and open, the skin's pores are dilated, and Vata dosha is in a state of imbalance making it highly responsive to treatment. Herbal oils penetrate deeper into the tissues, and the cool, humid climate makes intensive oil therapies far more comfortable and effective than in other seasons." }
];

const physicalBenefits = [
  "Boosts the immune response (Ojas), making you resistant to infections and illness.",
  "Eliminates deep-seated toxins (Ama), purifying the blood and leaving you light and energetic.",
  "Pacifies Vata Dosha, providing profound relief from joint pain, stiffness, and backache.",
  "Strengthens and tones the body, improving muscle strength and physical endurance.",
  "Ideal time to treat chronic conditions like arthritis, skin ailments, and digestive disorders.",
  "The body's open channels (srotas) absorb herbal oils deeper, making every therapy more effective."
];

const mentalBenefits = [
  "Therapies like Shirodhara calm the nervous system and profoundly reduce stress and anxiety.",
  "Improves sleep quality and helps manage insomnia and mental fatigue.",
  "The Rasayana effect nourishes tissues, improves skin lustre, and slows the ageing process.",
  "Enhances mental clarity, focus, and a deep sense of inner peace and well-being.",
  "Releases stored emotional tension, leading to greater emotional stability and positivity.",
  "The cool monsoon climate makes intensive therapies more comfortable and restorative."
];

const whatToExpect = [
  { title: "Personalised Panchakarma", icon: Droplet, text: "Abhyanga (oil massage), Pizhichil (warm oil bath), Kizhi (herbal poultices), and Shirodhara (forehead oil stream) — each tailored to your constitution." },
  { title: "Karkidaka Kanji", icon: UtensilsCrossed, text: "A special medicinal rice gruel made with Njavara rice and potent herbs — easy to digest, it kindles Agni and provides deep nourishment." },
  { title: "Customised Pathya Diet", icon: Sparkles, text: "A warm, fresh, easy-to-digest Ayurvedic diet plan supports the detox process and ensures the right nourishment throughout the program." },
  { title: "Internal Herbal Rasayanas", icon: Pill, text: "Specific Ayurvedic herbal formulations prescribed by the physician support the rejuvenation process from within, at the cellular level." }
];

const packages = [
  {
    name: "14-Day Karkidaka Essentials",
    duration: "14 Days",
    cost: "$900 - $1,800 USD",
    focus: "A foundational monsoon cleanse. Flush accumulated toxins, rekindle digestive fire (Agni), and build immunity with daily medicated oil therapies and Karkidaka Kanji.",
    image: "/Treatments-images/monsoon_pack_1.png",
  },
  {
    name: "21-Day Authentic Monsoon Cleanse",
    duration: "21 Days",
    cost: "$1,800 - $3,500 USD",
    focus: "The classical Karkidaka Chikitsa protocol. Full Panchakarma therapies, medicinal diet, and Rasayana medicines for deep cellular purification and long-term immunity.",
    image: "/Treatments-images/monsoon_pack_2.png",
  },
  {
    name: "28-Day Intensive Rasayana",
    duration: "28 - 35 Days",
    cost: "$2,800 - $5,500+ USD",
    focus: "An immersive healing journey for chronic conditions like arthritis and skin ailments. Combines intensive detoxification with advanced Rasayana rejuvenation therapies.",
    image: "/Treatments-images/monsoon_pack_3.png",
  }
];

const MonsoonTreatment = () => {
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
    { id: "benefits", title: "Holistic Benefits" },
    { id: "what-to-expect", title: "What to Expect" },
    { id: "cost-duration", title: "Packages, Cost & Duration" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "top-centers", title: "Top Ayurvedic Centers" },
    { id: "faq", title: "Frequently Asked Questions" },
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
    fetch("/content/Treatments/Monsoon Treatment.txt")
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

      // 1. ### Headings (Subheadings) - Dark color like "Benefits of Karkidaka Chikitsa"
      if (line.startsWith("### ")) {
        const text = line.replace(/^### /, "");
        elements.push(
          <h3 key={key++} className="text-2xl font-bold text-primary mt-6 mb-3">
            {processInlineFormatting(text)}
          </h3>
        );
      }
      // 2. **Long text** (>30 chars) - Large Blue Heading
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
      // 4. **Short text** (<30 chars) - Bold/Section heading
      else if (line.match(/^\*\*(.+)\*\*$/)) {
        const text = line.replace(/^\*\*|\*\*$/g, "");
        elements.push(
          <h4 key={key++} className="text-lg font-semibold text-primary mt-4 mb-2">
            {processInlineFormatting(text)}
          </h4>
        );
      }
      // 5. Bullet points with * - Brown colored dots
      else if (line.match(/^\*\s+/)) {
        const text = line.replace(/^\*\s+/, "");
        elements.push(
          <li key={key++} className="text-base leading-relaxed ml-6 mb-2 flex items-start" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      }
      // 6. Bullet points with - - Brown colored dots
      else if (line.match(/^-\s+/)) {
        const text = line.replace(/^-\s+/, "");
        elements.push(
          <li key={key++} className="text-base leading-relaxed ml-6 mb-2 flex items-start" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      }
      // 8. Regular paragraphs - Brown text color
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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Karkidaka Chikitsa</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Monsoon Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">The most potent time for Ayurvedic healing. Detoxify, rejuvenate, and build immunity during Kerala's sacred monsoon season.</p>
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

        {/* Intro & Image Section */}
        <section id="intro" className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img src="/Treatments-images/monsoon_hero.png" alt="Monsoon Ayurvedic Treatment in Kerala" className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-[#335765] leading-tight">The Sacred Season for Healing</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">In Kerala, the monsoon season (Karkidakam) is not just a change in weather — it is the most sacred and potent time for healing. <em>Karkidaka Chikitsa</em> is a time-honoured Ayurvedic rejuvenation program designed to detoxify, boost immunity, and restore vitality.</p>
              <p className="text-[#7F543D] leading-relaxed text-lg">During the monsoon, the body's channels (<em>srotas</em>) are soft and open. The skin's pores are receptive, allowing herbal oils to penetrate deeper into tissues — making detoxification <strong>exceptionally effective</strong> compared to any other time of year.</p>
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
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Benefits of Karkidaka Chikitsa</h2>
            <p className="text-[#7F543D] text-lg">A complete reset for body, mind, and spirit — uniquely amplified by the monsoon season's healing energy.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8F4E7] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae]">
              <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center gap-2"><Activity className="text-[#7F543D]" /> Physical Restoration</h3>
              <div className="space-y-3">
                {physicalBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                    <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                    <p className="font-medium text-[#335765] text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#EDE8D0] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae]">
              <h3 className="text-2xl font-bold text-[#335765] mb-6 flex items-center gap-2"><Brain className="text-[#7F543D]" /> Mental & Spiritual Wellbeing</h3>
              <div className="space-y-3">
                {mentalBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                    <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                    <p className="font-medium text-[#335765] text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section id="what-to-expect" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">What to Expect During Karkidaka Chikitsa</h2>
            <p className="text-[#7F543D] text-lg">A holistic experience that includes four essential components, each working in harmony to detoxify and rejuvenate.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform">
                  <div className="p-6 text-center flex flex-col items-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#EDE8D0] ring-4 ring-[#d8d0ae]/30 shrink-0 mb-4">
                      <Icon className="h-8 w-8 text-[#2F5B5D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#335765] mb-3">{item.title}</h3>
                    <p className="text-[#5f4636] leading-relaxed text-sm">{item.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Suggested Packages */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost &amp; Duration</h2>
            <p className="text-lg text-[#7F543D]">Choose a timeline that matches your wellness goals. Each package includes daily physician consultation, prescribed therapies, Karkidaka Kanji, medicines, and sattvic diet.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full">
                <div className="relative h-40 md:h-44 overflow-hidden shrink-0">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/95 to-transparent flex items-end p-4 md:p-5">
                    <h3 className="text-xl md:text-[1.35rem] font-bold text-white leading-tight">{pkg.name}</h3>
                  </div>
                </div>
                <div className="p-4 md:p-5 flex-grow flex flex-col space-y-3 bg-white h-full">
                  <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                    <span className="font-bold text-[#335765] text-sm">Duration:</span>
                    <span className="font-semibold text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50">
                    <ReceiptIndianRupee className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                    <span className="font-bold text-[#335765] text-sm">Est. Cost:</span>
                    <span className="font-semibold text-sm">{pkg.cost}</span>
                  </div>
                  <div className="text-sm text-[#5f4636] flex-grow leading-relaxed border-l-[3px] border-[#335765] pl-3 py-1 font-medium">{pkg.focus}</div>
                  <div className="mt-auto pt-1.5">
                    <Button onClick={() => setQuoteModalOpen(true)} className="w-full h-11 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base rounded-xl shadow-md transition-all duration-300 group-hover:scale-[1.02]">Get a Free Quote</Button>
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
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from patients who experienced the transformational power of Karkidaka Chikitsa</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
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
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base md:text-xl font-semibold text-[#335765]">{patientReviews[currentReview].name}</h4>
                        {patientReviews[currentReview].verified && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">&#10003; Verified</span>}
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked centers specialising in authentic Karkidaka Chikitsa monsoon treatments.</p>
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
                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
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
                        <Link to={center.link} className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg text-xs flex items-center justify-center">View Details</Link>
                        <Button className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg text-xs" onClick={() => setQuoteModalOpen(true)}>Get Quote</Button>
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
              <Button className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg flex items-center gap-2 text-base group" onClick={() => navigate('/centers')}>
                VIEW ALL CENTERS <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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

        {/* Book CTA */}
        <section className="mt-14 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img src="/Treatments-images/monsoon_hero.png" alt="Book Monsoon Treatment" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Monsoon Treatment in India</h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">Begin with a no-obligation consultation. We help you choose the right Kerala center, dates, and Karkidaka Chikitsa package for your condition and budget.</p>
              <div className="space-y-3 max-w-xl">
                <a href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Monsoon%20Treatment." target="_blank" rel="noreferrer" className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition">
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

      {/* Desktop BROWSE */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button onClick={() => setIsJumpModalOpen(true)} className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter">
          <span>B</span><span>R</span><Search size={16} strokeWidth={3.5} /><span>W</span><span>S</span><span>E</span>
        </button>
      </div>
      <button onClick={() => setIsJumpModalOpen(true)} className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95">
        <Search size={18} className="-ml-1" /><span>BROWSE</span>
      </button>
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
              <div><div className="flex items-center gap-2 mb-1"><div className="h-px w-6 bg-white/30" /><span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span></div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight text-white">Treatment Sections</h2>
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

export default MonsoonTreatment;
