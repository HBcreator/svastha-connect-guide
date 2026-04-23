import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Star, Search, X, ClipboardList, Phone, Wind, Sparkles, Activity, Droplets, UtensilsCrossed, ShieldCheck, CheckCircle2, Flame } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const packages = [
  {
    name: "14-Day Cervical Relief Program",
    duration: "14 Days",
    focus:
      "Focused neck pain relief with Greeva Vasti, Abhyanga, and mild detox support to reduce stiffness and radiating pain.",
    image: "/Treatments-images/Cervical Spondylosis Treatment.jpg",
  },
  {
    name: "21-Day Disc Recovery Program",
    duration: "21 Days",
    focus:
      "Comprehensive protocol to calm aggravated Vata, reduce inflammation, and restore cervical mobility with guided therapies and diet.",
    image: "/Treatments-images/Ayurvedic Treatment for Disc Bulge.jpg",
  },
  {
    name: "28-Day Advanced Spine Rejuvenation",
    duration: "28 Days",
    focus:
      "For chronic or recurrent cervical issues. Includes deeper Panchakarma support and rehabilitation-focused care for long-term stability.",
    image: "/Treatments-images/Back pain Treatment.jpg",
  },
];

const patientReviews = [
  {
    name: "Heinrich Muller",
    location: "Hamburg, Germany",
    condition: "Chronic Cervical Pain",
    title: "Seven Years of Neck Pain Resolved in Forty Days.",
    review:
      "My neurologist had advised long-term medication. In India, my program combined Greeva Basti, Nasya, and rice bolus therapies. Arm radiation reduced within two weeks and neck mobility returned steadily.",
    rating: 5,
    verified: true,
  },
  {
    name: "Fiona MacAllister",
    location: "Edinburgh, Scotland",
    condition: "Nerve Compression Symptoms",
    title: "They Relieved Nerve Pain My Specialists Could Not Explain.",
    review:
      "The team identified aggravated Vata in the cervical region and used Ksheerabala-based Greeva Basti with Nasyam. My headaches and radiating pain improved significantly within three weeks.",
    rating: 5,
    verified: true,
  },
  {
    name: "Julien Marchand",
    location: "Bordeaux, France",
    condition: "Disc Degeneration",
    title: "It Was Not Symptom Control, It Was True Functional Recovery.",
    review:
      "The integrated protocol included detox, local therapies, internal herbs, and diet correction. Follow-up reports showed reduced compression markers and I regained confidence in daily movement.",
    rating: 5,
    verified: true,
  },
  {
    name: "Lars Eriksson",
    location: "Stockholm, Sweden",
    condition: "Bilateral Arm Numbness",
    title: "Numbness in Both Arms Improved Without Surgery.",
    review:
      "I came as a final option before surgery. With Panchakarma support, Greeva Basti, and Patra Pinda Sweda, circulation improved and numbness reduced progressively over the program.",
    rating: 5,
    verified: true,
  },
  {
    name: "Aoife Brennan",
    location: "Cork, Ireland",
    condition: "Recurrent Flare-Ups",
    title: "No Major Recurrence After Long-Term Follow-Up.",
    review:
      "My case had repeated flare cycles for years. The physician focused on root-cause Vata correction through Nasya, local oil treatments, posture work, and strict diet routines.",
    rating: 5,
    verified: true,
  },
];

const topAyurvedicCenters = [
  {
    name: "SOUKYA International Holistic Health Centre",
    city: "Bengaluru, Karnataka",
    description:
      "NABH-accredited AYUSH hospital known for personalized cervical rehabilitation protocols, integrated therapies, and physician-led programs.",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/centers/bangalore/soukya",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bengaluru, Karnataka",
    description:
      "Classical Ayurveda center offering structured Vata management and pain-focused care plans for spinal and neck disorders.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/centers/bangalore/ayurvedagram",
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Bengaluru Rural, Karnataka",
    description:
      "Known for combining cervical therapies with therapeutic yoga, posture correction, and lifestyle restoration modules.",
    rating: 4.8,
    reviews: 380,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/centers/udupi/shathayu-ayurveda-yoga-retreat",
  },
  {
    name: "Kairali - The Ayurvedic Healing Village",
    city: "Palakkad, Kerala",
    description:
      "A trusted Kerala destination for authentic Panchakarma and rejuvenation-based spine-care pathways in a healing environment.",
    rating: 4.8,
    reviews: 420,
    image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
    link: "/centers/kerala/kairali-ayurvedic-healing-village",
  },
  {
    name: "Carnoustie Ayurveda Wellness Resort",
    city: "Mararikulam, Kerala",
    description:
      "Premium beachside center with experienced doctors and personalized chronic pain management plans.",
    rating: 4.7,
    reviews: 360,
    image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg",
    link: "/centers/kerala/carnoustie-ayurveda-wellness-resort",
  },
  {
    name: "Somatheeram Ayurveda Village",
    city: "Thiruvananthapuram, Kerala",
    description:
      "Well-established Ayurveda resort for comprehensive healing programs including neck pain and nervous system support therapies.",
    rating: 4.7,
    reviews: 510,
    image: "/Center Images/somatheeram/Somatheeram 01.jpg",
    link: "/centers/kerala/somatheeram",
  },
];

const faqItems = [
  {
    question: "How long does Ayurvedic treatment for cervical spondylosis usually take?",
    answer:
      "Most patients require 14 to 28 days depending on symptom severity, disc degeneration, and nerve involvement. Chronic cases may need longer follow-up care.",
  },
  {
    question: "Which therapies are most effective for cervical spondylosis?",
    answer:
      "Greeva Vasti, Nasya, Patra Pinda Sweda, Abhyanga, and selected Panchakarma therapies are commonly used. The exact plan is personalized after physician evaluation.",
  },
  {
    question: "Can Ayurveda help avoid surgery in cervical spondylosis cases?",
    answer:
      "Many patients report strong pain reduction and functional recovery without surgery, especially when treated early. Final surgical decisions should be made with your treating specialists.",
  },
  {
    question: "Is this treatment safe for international patients?",
    answer:
      "Yes, when done at qualified centers under supervision. Programs include diagnosis, daily monitoring, medicines, and recovery guidelines tailored for travelers.",
  },
  {
    question: "Will I need to continue medicines after returning home?",
    answer:
      "In many cases, yes for a short maintenance phase. You may receive herbal medicines, diet guidance, and posture-exercise protocols to sustain long-term improvement.",
  },
];

const CervicalSpondylosis = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 768) setTopCentersPerSlide(1);
      else if (window.innerWidth < 1024) setTopCentersPerSlide(2);
      else setTopCentersPerSlide(3);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const topCentersTotalSlides = Math.ceil(topAyurvedicCenters.length / topCentersPerSlide);
  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (centerName: string) => setExpandedCenterName((prev) => (prev === centerName ? null : centerName));

  const goReviewPrevious = () => setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview((prev) => (prev + 1) % patientReviews.length);

  const jumpSections = [
    { id: "intro", title: "Intro & Overview" },
    { id: "ayurvedic-view", title: "Ayurvedic Perspective" },
    { id: "therapies", title: "Core Therapies" },
    { id: "diet-lifestyle", title: "Diet & Lifestyle" },
    { id: "cost-duration", title: "Packages & Cost" },
    { id: "reviews", title: "Patient Reviews" },
    { id: "top-centers", title: "Top Centers" },
    { id: "faq", title: "FAQs" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Neck Pain Recovery</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Cervical Spondylosis Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">A Holistic Path to Neck Pain Relief. Restore flexibility and comfort naturally through authentic Ayurveda.</p>
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
        
        {/* ── INTRO & OVERVIEW ─────────────────────────────── */}
        <section id="intro" className="scroll-mt-24 mb-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/Treatments-images/Cervical Spondylosis Treatment.jpg"
                alt="Ayurvedic Cervical Spondylosis Care"
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] xl:whitespace-nowrap font-bold text-[#335765] leading-tight text-center md:text-left">Targeted Cervical Pain Relief</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg text-center md:text-left">
                Cervical spondylosis is a degenerative condition that causes neck pain, stiffness, and radiating discomfort. Ayurveda identifies this as <span className="font-bold text-[#335765]">Greeva Sandhigata Vata</span> — an imbalance that affects the neck joints.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg text-center md:text-left">
                Our approach focuses on calming aggravated Vata, improving circulation, and nourishing the cervical vertebrae to restore pain-free mobility and long-term stability.
              </p>
              <div className="pt-2 flex justify-center md:justify-start">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── AYURVEDIC VIEW ───────────────────────────────── */}
        <section id="ayurvedic-view" className="scroll-mt-24">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">The Ayurvedic Perspective</h2>
            <div className="flex items-center justify-center gap-3 text-[#7F543D]">
              <div className="h-px w-12 bg-[#7F543D]/30" />
              <p className="text-lg italic font-medium tracking-wide">Greeva Sandhigata Vata — Root Cause Healing</p>
              <div className="h-px w-12 bg-[#7F543D]/30" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Vata Imbalance Card */}
            <div className="bg-[#335765] rounded-2xl p-6 md:p-8 shadow-sm border border-[#335765]/10 text-white relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 opacity-10 group-hover:scale-110 transition-transform duration-500 text-white">
                <Wind className="h-40 w-40" />
              </div>
              <div className="relative z-10 text-left">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Wind className="h-6 w-6 text-sky-300" />
                  </div>
                  The Vata Dosha
                </h3>
                <p className="text-white/80 leading-relaxed text-base mb-6">
                  Aggravated Vata dries out the cartilage and synovial fluid in the neck joints, leading to depletion of bone tissue (Asthi Dhatu) and chronic pain.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-sky-300 uppercase tracking-widest mb-1">Impact</p>
                    <p className="text-sm font-medium">Tissue Depletion</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-sky-300 uppercase tracking-widest mb-1">Symptoms</p>
                    <p className="text-sm font-medium">Stiffness & Pain</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ama & Agni Card */}
            <div className="bg-[#7F543D] rounded-2xl p-6 md:p-8 shadow-sm border border-[#7F543D]/10 text-white relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 opacity-10 group-hover:scale-110 transition-transform duration-500 text-white">
                <Flame className="h-40 w-40" />
              </div>
              <div className="relative z-10 text-left">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Flame className="h-6 w-6 text-orange-300" />
                  </div>
                  Ama & Agni
                </h3>
                <p className="text-white/80 leading-relaxed text-base mb-6">
                  The accumulation of metabolic toxins (Ama) blocks channels, worsening inflammation. Restoring digestive fire (Agni) is crucial for nutrient absorption and healing.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-1">Cause</p>
                    <p className="text-sm font-medium">Blocked Channels</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-1">Goal</p>
                    <p className="text-sm font-medium">Detox & Rejuvenate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE THERAPIES ───────────────────────────────── */}
        <section id="therapies" className="scroll-mt-24">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Core Ayurvedic Therapies</h2>
            <p className="text-[#7F543D] text-lg max-w-2xl mx-auto">Specialized treatments that provide direct and profound relief to the cervical region.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Greeva Vasti", 
                subtitle: "Localized Oil Therapy", 
                icon: Droplets, 
                desc: "Medicated warm oil is retained on the neck to deeply lubricate joints, nourish nerves, and relieve chronic stiffness.",
                bg: "bg-[#F8F4E7]", border: "border-[#d8d0ae]"
              },
              { 
                title: "Patra Pinda Sweda", 
                subtitle: "Herbal Bolus Massage", 
                icon: Sparkles, 
                desc: "Rhythmic application of warm herbal poultices to reduce inflammation, pain, and muscle spasms in the shoulders.",
                bg: "bg-[#EDE8D0]", border: "border-[#c9c1a5]"
              },
              { 
                title: "Nasya Karma", 
                subtitle: "Nasal Administration", 
                icon: Activity, 
                desc: "Medicated oils administered through nasal passages to nourish cervical nerves and provide relief from radiating pain.",
                bg: "bg-[#F3EFE0]", border: "border-[#dfd8c2]"
              },
              { 
                title: "Nadi Sweda", 
                subtitle: "Targeted Herbal Steam", 
                icon: Wind, 
                desc: "Localized herbal steam that helps medicated oils penetrate deeper, relaxing stiff neck muscles and improving circulation.",
                bg: "bg-[#F9F7F0]", border: "border-[#e5e0cf]"
              }
            ].map((item, i) => (
              <Card key={i} className={`border shadow-sm ${item.bg} ${item.border} hover:shadow-md transition-shadow group text-left`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-12 w-12 rounded-xl bg-white/50 flex items-center justify-center border border-white/80 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-[#335765]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#335765] leading-tight">{item.title}</h4>
                      <p className="text-[10px] font-bold text-[#7F543D] uppercase tracking-wider">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#7F543D] leading-relaxed line-clamp-4">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── DIET & LIFESTYLE ─────────────────────────────── */}
        <section id="diet-lifestyle" className="scroll-mt-24">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Diet & Lifestyle Care</h2>
            <p className="text-[#7F543D] text-lg max-w-2xl mx-auto">Sustainable recovery through mindful daily habits and Vata-pacifying nutrition.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Diet Card */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-16 w-16 rounded-2xl bg-[#335765]/10 flex items-center justify-center">
                  <UtensilsCrossed className="h-9 w-9 text-[#335765]" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Ayurvedic Diet (Ahara)</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Vata-Pacifying Foods", text: "Eat warm, moist, and nourishing foods like soups, stews, and well-cooked grains." },
                  { title: "Nourishing Fats", text: "Include high-quality ghee in your diet for internal lubrication of the joints." },
                  { title: "Foods to Avoid", text: "Strictly avoid cold drinks, raw salads, and crunchy processed snacks that aggravate Vata." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#335765]/10 shadow-sm hover:shadow-md transition-shadow text-left">
                    <div className="mt-1 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[#335765] text-sm">{item.title}</p>
                      <p className="text-xs text-[#7F543D] leading-relaxed mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle Card */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-16 w-16 rounded-2xl bg-[#7F543D]/10 flex items-center justify-center">
                  <ClipboardList className="h-9 w-9 text-[#7F543D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Lifestyle Care (Vihara)</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Mind Your Posture", text: "Keep screens at eye level and maintain a neutral spine while working or using mobile devices." },
                  { title: "Therapeutic Breaks", text: "Avoid sitting for long hours; stretch your neck and shoulders every 30-45 minutes." },
                  { title: "Proper Support", text: "Use a thin, soft pillow that supports the natural curve of your neck during sleep." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#7F543D]/10 shadow-sm hover:shadow-md transition-shadow text-left">
                    <div className="mt-1 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[#335765] text-sm">{item.title}</p>
                      <p className="text-xs text-[#7F543D] leading-relaxed mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SUGGESTED PACKAGES ─────────────────────────── */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Suggested Packages, Cost & Duration</h2>
            <p className="text-[#7F543D] text-lg italic">Personalized cervical care durations to suit your recovery goals. Each package includes daily physician consultation and prescribed therapies.</p>
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

                <CardContent className="p-4 md:p-5 flex-grow flex flex-col space-y-3 bg-white h-full text-left">
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

        {/* ── PATIENT REVIEWS ────────────────────────────── */}
        <section id="reviews" className="scroll-mt-24 bg-transparent w-full">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
              <p className="text-base md:text-lg px-4 text-[#7F543D]">Hear from our patients about their cervical spondylosis recovery journeys.</p>
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
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">{patientReviews[currentReview].title}</h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6 text-[#7F543D]">"{patientReviews[currentReview].review}"</p>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 text-left">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                        {patientReviews[currentReview].name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1 text-left">
                          <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight">{patientReviews[currentReview].name}</h4>
                          {patientReviews[currentReview].verified && (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">
                              &#10003; Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm text-[#7F543D]">
                          {patientReviews[currentReview].location} - {patientReviews[currentReview].condition}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                        ))}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-[#335765]">{patientReviews[currentReview].rating}.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-2 mt-8">
                {patientReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#335765]" : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"}`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TOP CENTERS ────────────────────────────────── */}
        <section id="top-centers" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Cervical Spondylosis</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto text-center">Handpicked centers with specialized spine care protocols and experienced physician teams.</p>
          </div>

          <div className="relative group flex items-center justify-center">
            <div className="absolute left-1 md:-left-8 z-20 top-[110px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersPrevious} className="bg-white/80 hover:bg-white text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765] active:scale-95"><ChevronLeft className="h-4 w-4 md:h-6 md:w-6" /></button>
            </div>
            <div className="absolute right-1 md:-right-8 z-20 top-[110px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersNext} className="bg-white/80 hover:bg-white text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765] active:scale-95"><ChevronRight className="h-4 w-4 md:h-6 md:w-6" /></button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 w-full items-stretch px-0 md:px-4">
              {topAyurvedicCenters.slice(topCentersSlide * topCentersPerSlide, topCentersSlide * topCentersPerSlide + topCentersPerSlide).map((center, idx) => (
                <div key={`${center.name}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                    <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                      <img src={center.image} alt={center.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>

                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow text-left">
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
                        <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>{center.description}</p>
                        <button onClick={() => toggleCenterDescription(center.name)} className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block">{expandedCenterName === center.name ? "Read Less" : "Read More"}</button>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Link to={center.link} target="_blank" rel="noreferrer" className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap">View Details</Link>
                        <Button onClick={() => setQuoteModalOpen(true)} className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs">Get Quote</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
        </section>

        {/* ── FAQs ────────────────────────────────────────── */}
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

        {/* ── BOOK CTA ────────────────────────────────────── */}
        <section className="scroll-mt-24 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img src="/Treatments-images/Cervical Spondylosis Treatment.jpg" alt="Cervical Spondylosis treatment consultation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1 text-left">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Cervical Spondylosis Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Cervical%20Spondylosis%20Treatment."
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

      {/* Floating Elements */}
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

      <button
        onClick={() => setIsJumpModalOpen(true)}
        className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Search size={18} className="-ml-1" />
        <span>BROWSE</span>
      </button>

      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Phone size={18} className="-ml-1" />
        <span className="hidden md:inline">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

      {/* Jump Modal */}
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

            <div className="flex items-center gap-2.5 p-2.5 bg-white/10 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-sky-300 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/80 leading-relaxed italic">
                Navigate directly to any treatment stage or program detail below.
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5 text-left">
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

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default CervicalSpondylosis;
