import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity, AlertTriangle, ArrowRight, BedDouble, Brain, Calendar, CalendarCheck2, ChevronLeft, ChevronRight,
  CircleCheck, ClipboardCheck, Droplet, Globe2, HeartPulse, Headset, Leaf, MapPin, Phone, Pill,
  ReceiptIndianRupee, Route, ShieldCheck, Sparkles, Star, Stethoscope, TrendingUp,
  UtensilsCrossed, UserCheck, XCircle, Search, X, ClipboardList, CheckCircle2, HelpCircle, Building2, UserCog
} from "lucide-react";

const imageBase = "/Ayurvedic Programs/Images/Ayurvedic-Weight-Loss-Program-India";
const galleryImages = [`${imageBase}/1.webp`, `${imageBase}/2.webp`, `${imageBase}/3.jpg`, `${imageBase}/4.jpg`, `${imageBase}/5.webp`, `${imageBase}/6.webp`];

const quickRows = [
  ["Program Name", "21-Day Ayurvedic Weight Loss & Metabolism Reset"],
  ["Duration", "21 Days / 20 Nights"],
  ["Who It Is For", "Overweight adults seeking sustainable, natural weight loss"],
  ["Core Approach", "Panchakarma detox + targeted fat-reducing therapies + herbal medicines"],
  ["Key Benefit", "Metabolism correction, fat reduction, digestive reset, hormonal balance"],
  ["Top Locations", "Kerala, Goa, Bangalore"],
  ["Average Cost", "$2,500 - $4,500 USD"],
  ["Supervised By", "Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"],
];

const quickSummaryMobileIcons = {
  "Program Name": ClipboardCheck,
  "Duration": Calendar,
  "Who It Is For": UserCheck,
  "Core Approach": Sparkles,
  "Key Benefit": HeartPulse,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
} as const;

const therapies = [
  ["Udvarthanam", "Herbal Powder Dry Massage", "Supports lymphatic flow, inch loss, skin texture, and metabolic heat.", Sparkles],
  ["Virechana", "Therapeutic Purgation", "A supervised intestinal cleanse for liver function, gut reset, and fat metabolism.", Droplet],
  ["Lekhana Basti", "Fat-Reducing Medicated Enema", "Kapha-reducing Basti therapy for stubborn fat mobilization and colon cleansing.", Activity],
  ["Dhanyamla Dhara", "Warm Medicated Liquid Therapy", "Warm fermented herbal stream therapy used to reduce inflammation and break down Ama.", Leaf],
  ["Abhyanga", "Medicated Oil Massage", "Kapha-balancing massage for circulation, water retention, and stress-driven weight gain.", HeartPulse],
  ["Swedana", "Herbal Steam Therapy", "Medicated steam opens channels, promotes sweating, and supports fat-mobilising therapies.", TrendingUp],
] as const;

const candidatePoints = [
  "Have struggled with weight despite diets and exercise",
  "Experience slow digestion, bloating, or heaviness after meals",
  "Carry abdominal weight linked to Kapha imbalance and Ama accumulation",
  "Have weight gain connected to hypothyroidism, PCOS, or hormonal shifts",
  "Are dealing with metabolic syndrome, pre-diabetes, or high cholesterol",
  "Want weight loss without surgery, appetite suppressants, or crash diets",
];

const avoidPoints = [
  "Pregnant or breastfeeding women",
  "Individuals with severe eating disorders requiring psychiatric care",
  "Patients undergoing active cancer treatment",
  "People with acute infections or fever at arrival",
  "Children under 16 without specific medical guidance",
];

const weeks = [
  {
    title: "Week 1 - Purva Karma (Preparation)",
    duration: "Day 1-7",
    focus: "Metabolic preparation and internal cleansing",
    description: "Assessment, Ayurvedic diet, Abhyanga, Swedana, early Udvarthanam, and herbs begin clearing Ama and reducing bloating.",
    bullets: ["Constitution analysis", "Kapha-pacifying diet", "Abhyanga and Swedana", "Initial Udvarthanam"]
  },
  {
    title: "Week 2 - Pradhana Karma (Core Detox)",
    duration: "Day 8-14",
    focus: "Active fat-reduction and core detox therapies",
    description: "Daily Udvarthanam, Virechana, Lekhana Basti, Dhanyamla Dhara, and supporting therapies target metabolic toxins and stubborn fat.",
    bullets: ["Daily Udvarthanam", "Virechana", "Lekhana Basti", "Dhanyamla Dhara"]
  },
  {
    title: "Week 3 - Paschat Karma (Stabilisation)",
    duration: "Day 15-21",
    focus: "Stabilisation and dietary discipline integration",
    description: "Rasayana support, therapeutic yoga, Agni-building diet, and a home protocol help the metabolic reset continue after travel.",
    bullets: ["Rasayana therapies", "Therapeutic yoga", "Post-program diet plan", "Home herbal protocol"]
  },
] as const;

const benefitGroups = [
  ["Physical Benefits", HeartPulse, ["Measurable weight and inch loss", "Reduced bloating and abdominal heaviness", "Support for visceral fat reduction", "Improved digestion and bowel regularity", "Firmer skin texture from Udvarthanam", "Reduced joint load and better mobility"]],
  ["Mental and Emotional Benefits", Brain, ["Improved energy as Ama reduces", "Clearer thinking and lower mental fog", "Better sleep quality", "Reduced emotional eating patterns", "More confidence with a structured lifestyle plan", "Better mind-body awareness around food"]],
  ["Long-Term Effects", Sparkles, ["Corrected metabolic pattern", "Personalized diet, herbs, yoga, and Dinacharya", "Continued results after the stay", "Lower obesity-linked risk factors", "Healthier appetite signals", "Sustainable habits without crash dieting"]],
] as const;

const chooseIndia = [
  ["Authentic Udvarthanam Depth", "Classical herbal powder massage with clinical technique and traditional formulations.", Sparkles],
  ["Medical Supervision", "Therapies are prescribed by Ayurvedic doctors based on metabolism and health history.", Stethoscope],
  ["Sustainable Results", "The goal is metabolic correction, not temporary restriction-based weight loss.", TrendingUp],
  ["Extraordinary Value", "A 21-day supervised program offers strong clinical depth at a fraction of Western wellness pricing.", ReceiptIndianRupee],
  ["Healing Environment", "Ayurvedic resorts support recovery through nature, routine, fresh food, and stress reduction.", Leaf],
  ["Post-Program Continuity", "Diet plans, herbal guidance, yoga routines, and follow-up support help maintain the reset.", ClipboardCheck],
] as const;

const inclusions = [
  ["Accommodation", "Private room or suite for 20 nights as per package tier", BedDouble],
  ["Ayurvedic Meals", "Three daily meals calibrated to dosha and treatment phase", UtensilsCrossed],
  ["Doctor Consultations", "Initial assessment plus regular Vaidya check-ins", Stethoscope],
  ["Daily Therapies", "Udvarthanam, Abhyanga, Swedana, Dhanyamla Dhara, Virechana, Lekhana Basti as prescribed", Activity],
  ["Herbal Medicines", "Internal formulations and medicated oils during the stay", Pill],
  ["Yoga and Meditation", "Daily sessions for Kapha reduction and metabolic activation", Brain],
  ["Post-Program Kit", "Personalized diet, herbal guidance, yoga routine, and Dinacharya plan", ClipboardCheck],
] as const;

const faqs = [
  ["How much weight can I realistically lose in 21 days?", "Many guests notice measurable weight and inch loss during the stay, often with continued reduction after returning home. Exact results depend on constitution, starting weight, medical history, and adherence."],
  ["Will I be hungry during the program?", "No. This is not a starvation diet. Meals are warm, nourishing, dosha-specific, and designed to support fat metabolism while keeping the body stable."],
  ["Is it suitable for PCOS, thyroid issues, or metabolic syndrome?", "Many guests choose this program for hormone-linked or metabolism-linked weight gain. Suitability must be confirmed by the Ayurvedic physician."],
  ["How much does the 21-day program cost in India?", "For this page, the program range is $2,500 to $4,500 USD for reputable centers, depending on room category, location, therapies, and season."],
  ["Can I exercise during the program?", "Light yoga, walking, and pranayama are usually encouraged. Intense exercise may be avoided during active detox phases."],
  ["Will I regain weight after going home?", "The goal is to reduce rebound risk by correcting digestion, routine, and metabolic patterns. Following the post-program protocol is important."],
] as const;

const reviews = [
  ["Oskar Breitmann", "Cologne, Germany", "The Metabolic Education Was the Real Gift.", "The Udwarthanam herbal massage and Virechana addressed my sluggish metabolism at the root. I lost eight kilograms and have maintained the result with the home protocol."],
  ["Simone Leconte", "Montpellier, France", "PCOS-Related Weight Gain Finally Addressed at the Root.", "The program combined Panchakarma, hormonal balancing herbs, and a customized diet into a coherent protocol. My cycle regulated and my energy transformed."],
  ["Niall Sheridan", "Dublin, Ireland", "Belly Fat, High Cholesterol, and Low Energy - All Addressed Together.", "Lekhana Basti, Swedana, and a Pitta-balancing diet plan worked in genuine synergy. My waist reduced, cholesterol improved, and my energy returned."],
  ["Elspeth Dunbar", "Glasgow, UK", "This Approach Succeeded Where 15 Years of Diets Failed.", "The Ayurvedic program broke my cycle of losing and regaining weight by addressing the metabolic root cause. My digestion transformed within ten days."],
] as const;

const centers = [
  ["SOUKYA International Holistic Health Centre", "Bengaluru, Karnataka, India", "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm.", 4.9, 500, "/Center Images/SOUKYA/top center Thumb.jpg", "/centers/bangalore/soukya"],
  ["AyurvedaGram Heritage Wellness Centre", "Bengaluru, Karnataka, India", "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village with physician-guided therapies and sattvic nutrition.", 4.7, 600, "/Center Images/AyurvedaGram/Thumb.jpg", "/centers/bangalore/ayurvedagram"],
  ["Shathayu Ayurveda Yoga Retreat", "Bengaluru Rural, Karnataka, India", "A serene retreat focused on authentic Ayurveda and yogic living. The center combines classical therapies with guided yoga, meditation, and lifestyle coaching.", 4.8, 380, "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg", "/centers/udupi/shathayu-ayurveda-yoga-retreat"],
  ["Kairali - The Ayurvedic Healing Village", "Palakkad, Kerala, India", "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Panchakarma treatments and traditional healing in a serene, nature-focused environment.", 4.8, 420, "/Center Images/Ananda in the Himalayas/Thumb.jpg", "/centers/kerala/kairali-ayurvedic-healing-village"],
  ["Carnoustie Ayurveda Wellness Resort", "Mararikulam, Kerala, India", "A premium beachside center known for authentic Panchakarma care, experienced doctors, and personalized recovery-focused plans.", 4.7, 360, "/Center Images/Carnoustie Ayurveda/Thumb.jpg", "/centers/kerala/carnoustie-ayurveda-wellness-resort"],
  ["Somatheeram Ayurveda Village Resort", "Thiruvananthapuram, Kerala, India", "Widely regarded as the world's first Ayurveda resort, providing classical treatments, yoga, and meditation on a beautiful cliff overlooking the Arabian Sea.", 4.7, 510, "/Center Images/Atmantan Wellness Resort/Thumb.jpg", "/centers/kerala/somatheeram"],
  ["AyurSoma Ayurveda Royal Retreat", "Thiruvananthapuram, Kerala, India", "Traditional Kerala Ayurveda in a calm retreat format with physician supervision, therapeutic routines, and rejuvenation support.", 4.8, 300, "/Center Images/AyurSoma Ayurveda/Thumb.jpg", "/centers/kerala/ayursoma"],
  ["Niraamaya Retreats Surya Samudra", "Kovalam, Kerala, India", "Cliffside wellness destination offering curated Ayurvedic therapies, restorative routines, and immersive coastal healing experiences.", 4.6, 280, "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg", "/centers/kerala/niraamaya-retreats-surya-samudra"],
  ["Kalari Kovilakom Palace for Ayurveda", "Palakkad, Kerala, India", "A globally recognized palace-turned-retreat providing extremely strict, traditional, and authentic Ayurvedic treatments in a deeply spiritual setting.", 4.8, 240, "/Center Images/Kalari Kovilakom/Thumb.jpg", "/centers/kerala/kalari-kovilakom"]
] as const;

const AyurvedicWeightLossProgramIndia = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [review, setReview] = useState(0);
  const [expandedCenter, setExpandedCenter] = useState<string | null>(null);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const jumpSections = [
    { id: "quick-summary", title: "Quick Summary", icon: ClipboardList },
    { id: "program-overview", title: "Program Overview", icon: Activity },
    { id: "benefits", title: "Benefits", icon: HeartPulse },
    { id: "cost", title: "Cost & Packages", icon: ReceiptIndianRupee },
    { id: "why-india", title: "Why Choose India", icon: MapPin },
    { id: "why-us", title: "Why Choose Us", icon: ShieldCheck },
    { id: "inclusions", title: "Inclusions", icon: CheckCircle2 },
    { id: "consultation", title: "Consultation", icon: Stethoscope },
    { id: "faq", title: "FAQ", icon: HelpCircle },
    { id: "top-centers", title: "Top Centers", icon: Building2 },
    { id: "reviews", title: "Patient Reviews", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurvedic Programs</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Ayurvedic Weight Loss Program in India</h1>
              <p className="text-lg md:text-xl text-white/90">21-day metabolism reset and full body detox with physician-led Ayurveda.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>Kerala, Goa, Bangalore</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.8/5 Excellent Rating</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button
                className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-semibold"
                onClick={() => setQuoteModalOpen(true)}
              >
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-20 md:space-y-24">
        <section id="gallery" className="scroll-mt-24 mb-0">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Ayurvedic Treatment and Program Gallery</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Ayurvedic weight loss program" className="w-full h-[260px] md:h-[460px] object-cover" />
            <button
              onClick={() => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setSelectedImage((selectedImage + 1) % galleryImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <QuickSummary />
        <Overview onQuote={() => setQuoteModalOpen(true)} />
        <TherapySection />
        <div className="grid lg:grid-cols-2 gap-8 items-stretch !mt-6 md:!mt-10">
          <PointCard title="Who Is This Program For?" points={candidatePoints} positive />
          <PointCard title="Who Should Avoid This Program" points={avoidPoints} />
        </div>
        <WeeksSection />
        <BenefitsSection />
        <CostSection />
        <GridSection title="Why Choose India for Ayurvedic Weight Loss?" items={chooseIndia} />
        <WhyUsSection />
        <InclusionsSection />
        <CTA onQuote={() => setQuoteModalOpen(true)} />
        <FAQSection />
        <CentersSection navigate={navigate} onQuote={() => setQuoteModalOpen(true)} expanded={expandedCenter} setExpanded={setExpandedCenter} />
      </main>

      <ReviewsSection review={review} setReview={setReview} />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button - matching SOUKYA design */}
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

      <button onClick={() => setQuoteModalOpen(true)} className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap">
        <Phone size={18} /><span className="hidden md:inline">GET FREE QUOTE</span><span className="md:hidden">QUOTE</span>
      </button>

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
                      {(idx + 1).toString().padStart(2, '0')}
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

const QuickSummary = () => (
  <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
    <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
    <Card className="border-[#d8d0ae] bg-white shadow-sm">
      <CardContent className="p-4 md:p-6 space-y-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[["Duration", "21 Days / 20 Nights"], ["Ideal For", "Weight Loss, Metabolism Reset"], ["Top Locations", "Kerala, Goa, Bangalore"], ["Avg Cost", "$2,500 - $4,500"]].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">{label}</p>
              <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-2 md:hidden">
          {quickRows.map((row, idx) => (
            <div key={row[0]} className={`rounded-xl border border-[#d8d0ae] px-3 py-3 ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}>
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                  {(() => { const Icon = quickSummaryMobileIcons[row[0] as keyof typeof quickSummaryMobileIcons] || ClipboardCheck; return <Icon className="h-4 w-4 text-[#335765]" />; })()}
                </span>
                <p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{row[0]}</p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[#7F543D] break-words font-semibold">{row[1]}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:block overflow-auto rounded-xl border border-[#d8d0ae]">
          <table className="w-full text-sm min-w-[680px]">
            <tbody>
              {quickRows.map((row, idx) => (
                <tr key={row[0]} className={idx === 0 ? "bg-[#EDE8D0]" : "border-t"}>
                  <td className="p-3 font-semibold text-[#3D4B4C] w-[240px]">{row[0]}</td>
                  <td className="p-3 text-[#7F543D]">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </section>
);

const Overview = ({ onQuote }: { onQuote: () => void }) => (
  <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8">
    <div className="grid gap-10 md:gap-12">
      <Card className="h-full shadow-sm">
        <CardContent className="p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is the Ayurvedic Weight Loss Program?</h2>
          <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">The 21-Day Ayurvedic Weight Loss Program in India corrects metabolic dysfunction, clears Ama, rebalances Kapha, and rebuilds digestive fire so the body can process food into energy rather than stored fat.</p>
          <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">You receive warm Ayurvedic meals, physician-supervised therapies, herbal medicines, and a daily routine designed to reset digestion, lymphatic flow, hormonal communication, and fat metabolism.</p>
          <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
            In Ayurveda, obesity is known as <em>Sthoulya Roga</em> — a condition rooted in Kapha imbalance, weak Agni, and metabolic toxin accumulation.{" "}
            <button type="button" onClick={onQuote} className="underline underline-offset-4 decoration-2 font-bold uppercase hover:text-[#7F543D] transition-colors">CONTACT</button>{" "}
            Svastha Global to connect with the best of authentic <span className="italic">Ayurveda</span> in India.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const TherapySection = () => (
  <Card className="h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
    <CardContent className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-[#335765] mb-3 text-center">Understanding Weight Loss Through Ayurveda</h2>
      <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        The protocol clears Ama, restores Agni, opens Srotas, and rebalances Kapha.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {therapies.map(([name, sub, text, Icon]) => (
          <div key={name} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0">
                <Icon className="h-5 w-5 text-[#2F5B5D]" />
              </div>
              <h3 className="font-semibold text-[#335765] leading-snug">
                <span className="block">{name}</span>
                <span className="block">({sub})</span>
              </h3>
            </div>
            <p className="text-sm text-[#7F543D]">{text}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const PointCard = ({ title, points, positive = false }: { title: string; points: string[]; positive?: boolean }) => (
  <Card className="h-full border-green-300 bg-white shadow-sm">
    <CardContent className="p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
          {positive ? <CircleCheck className="h-5 w-5 text-green-700" /> : <AlertTriangle className="h-5 w-5 text-[#335765]" />}
        </span>
        <h2 className="text-2xl font-bold text-[#335765]">{title}</h2>
      </div>
      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
            <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${positive ? "bg-white ring-1 ring-green-300" : "bg-red-50 ring-1 ring-red-300"}`}>
              {positive
                ? <CircleCheck className="h-3.5 w-3.5 text-green-700" />
                : <XCircle className="h-3.5 w-3.5 text-red-600" />}
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const WeeksSection = () => (
  <section id="week-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
    <div className="text-center mb-7">
      <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 21-Day Program - Week-by-Week Breakdown</h2>
      <p className="text-[#7F543D] mt-2">Preparation, detox, and stabilisation in one physician-led journey.</p>
    </div>
    <Accordion type="single" collapsible className="space-y-4">
      {weeks.map((week, i) => (
        <AccordionItem
          key={week.title}
          value={`week-${i}`}
          className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-green-500"
        >
          <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
            <div className="text-left">
              <p className="text-lg font-bold text-[#335765]">{week.title}</p>
              <p className="text-sm text-[#8C765E] font-medium">{week.duration} — <span className="text-[#7F543D]">{week.focus}</span></p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-1 pb-6">
            <div>
              <p className="text-[#7F543D] mb-4 leading-relaxed">{week.description}</p>
              <p className="font-semibold text-[#335765] mb-2.5">Key Therapies</p>
              <ul className="space-y-2.5 text-sm text-[#7F543D]">
                {week.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 leading-relaxed">
                    <CircleCheck className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

const BenefitsSection = () => {
  const [benefitsImageIndex, setBenefitsImageIndex] = useState(0);
  const [benefitsVisibleCards, setBenefitsVisibleCards] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) { setBenefitsVisibleCards(1); return; }
      if (window.innerWidth < 1024) { setBenefitsVisibleCards(2); return; }
      setBenefitsVisibleCards(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const benefitsVisibleImages = Array.from({ length: benefitsVisibleCards }, (_, idx) => {
    const imageIndex = (benefitsImageIndex + idx) % galleryImages.length;
    return { src: galleryImages[imageIndex], key: `${galleryImages[imageIndex]}-${benefitsImageIndex}-${idx}` };
  });

  return (
    <section id="benefits" className="scroll-mt-24 !mt-6 md:!mt-10">
      <div className="mb-7 md:mb-8">
        <div className="relative">
          <button
            onClick={() => setBenefitsImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md"
            aria-label="Previous benefits image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={() => setBenefitsImageIndex((prev) => (prev + 1) % galleryImages.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md"
            aria-label="Next benefits image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="overflow-hidden px-10 md:px-14">
            {/* Mobile: single slide */}
            <div className="md:hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${benefitsImageIndex * 100}%)` }}
              >
                {galleryImages.map((image, idx) => (
                  <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                    <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                      <img src={image} alt="Ayurvedic weight loss benefit" className="w-full h-28 object-cover rounded-lg" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: grid of 4 */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {benefitsVisibleImages.map((image) => (
                  <div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-primary/10 hover:border-primary/30 transition-all">
                    <img src={image.src} alt="Ayurvedic weight loss benefit" className="w-full h-24 md:h-28 object-cover rounded-lg" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {galleryImages.map((_, idx) => (
            <button
              key={`benefits-dot-${idx}`}
              onClick={() => setBenefitsImageIndex(idx)}
              aria-label={`Go to benefits image ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#335765]" : "w-2.5 bg-[#C7D1C9]"}`}
            />
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of the 21-Day Ayurvedic Weight Loss Program</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {benefitGroups.map(([title, Icon, items]) => (
          <Card key={title} className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                  <Icon className="h-5 w-5 text-[#2F5B5D]" />
                </span>
                <h3 className="font-bold text-[#335765]">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#7F543D]">
                {items.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const CostSection = () => (
  <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 space-y-6">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#335765]">Cost of Ayurvedic Weight Loss Treatment in India</h2>
      <p className="mt-2 text-[#7F543D]">A 21-day physician-supervised program with accommodation, therapies, meals, and medicines.</p>
    </div>
    <Card className="border-[#d8d0ae] bg-white shadow-sm">
      <CardContent className="p-5 md:p-6 space-y-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
            <p className="mt-2 text-2xl font-bold text-[#335765]">21 Days</p>
            <p className="mt-1 text-sm text-[#6F6B5C]">Structured detox, recovery, and rejuvenation timeline.</p>
          </div>
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
            <p className="mt-2 text-2xl font-bold text-[#335765]">$2,500 - $4,500</p>
            <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for reputable centers and full-stay plans.</p>
          </div>
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                <Sparkles className="h-5 w-5 text-[#335765]" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#335765]">MOST POPULAR</p>
            </div>
            <p className="mt-1 text-sm text-[#6F6B5C]">Weight loss and metabolism reset with full accommodation and therapies.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
            <p className="font-semibold text-[#335765]">Most popular - Ayurvedic weight loss</p>
            <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">Highest demand package</span>
          </div>
          <div className="md:hidden p-3 space-y-2 bg-white">
            <div className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p>
              <p className="mt-1 text-sm text-[#7F543D] font-semibold">21-Day Ayurvedic Weight Loss Program</p>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Category</p><p className="text-sm text-[#7F543D] font-semibold">Weight Loss &amp; Metabolism Reset</p></div>
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p><p className="text-sm text-[#7F543D] font-semibold">$2,500 - $4,500</p></div>
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p><p className="text-sm text-[#7F543D] font-semibold">Highest demand, long stay, full package</p></div>
              </div>
            </div>
          </div>
          <div className="hidden md:block overflow-auto">
            <table className="w-full text-sm min-w-[680px]">
              <thead className="bg-[#F5F8F6] text-[#335765]">
                <tr>
                  <th className="text-left p-3 font-semibold">Program</th>
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-left p-3 font-semibold">Cost</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-white">
                  <td className="p-3 font-medium text-[#3D4B4C]">21-Day Ayurvedic Weight Loss Program</td>
                  <td className="p-3 text-[#7F543D]">Weight Loss &amp; Metabolism Reset</td>
                  <td className="p-3 text-[#7F543D]">$2,500 - $4,500</td>
                  <td className="p-3 text-[#7F543D]">Highest demand, long stay, full package</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);

const GridSection = ({ title, items }: { title: string; items: typeof chooseIndia }) => (
  <section id="why-india" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14">
    <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
      <CardContent className="p-6 md:p-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">{title}</h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.map(([a, b, Icon]) => (
            <div key={a} className="rounded-lg border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                  <Icon className="h-4 w-4 text-[#335765]" />
                </span>
                <p className="font-semibold text-[#335765]">{a}</p>
              </div>
              <p className="text-sm text-[#7F543D] mt-2">{b}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>
);

const whyUsPoints = [
  { icon: ShieldCheck, title: "Verified Medical Standards", text: "Only partner centers with physician-led Ayurvedic protocols, safety screening, and treatment quality validation for weight loss programs." },
  { icon: Globe2, title: "International Patient Expertise", text: "Dedicated support for travelers from 40+ countries with clear communication, pre-trip guidance, and planning assistance." },
  { icon: CalendarCheck2, title: "Pre-Travel Doctor Consultation", text: "Ayurvedic physician case review before booking helps shortlist the right center, program, and treatment pathway for your condition." },
  { icon: Route, title: "Complete Journey Support", text: "From center selection to arrival coordination, airport transfers, and check-in flow management — all arranged for you." },
  { icon: Headset, title: "During-Stay Assistance", text: "On-ground guidance through your full 21-day weight loss protocol for smooth continuity, comfort, and progress tracking." },
  { icon: UserCog, title: "Condition-Based Matching", text: "Personalized center mapping based on your Prakriti, metabolic condition (PCOS, hypothyroidism), budget, and weight loss goals." },
];

const WhyUsSection = () => (
  <section id="why-us" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]" style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}>
    <div className="text-center mb-7 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Why Choose Us for Ayurvedic Weight Loss</h2>
      <p className="text-[#7F543D] mt-2 max-w-xl mx-auto">Not just booking support — structured guidance from pre-consultation to post-program continuity.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["Doctor-Screened Centers", "40+ Countries Supported", "End-to-End Assistance"].map((tag) => (
          <span key={tag} className="rounded-full border border-[#d9cfae] bg-white/70 px-4 py-1 text-sm font-medium text-[#335765]">{tag}</span>
        ))}
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {whyUsPoints.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm border border-[#d7dcca] hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F6EF] ring-1 ring-green-200">
                <Icon className="h-5 w-5 text-[#1E7A4D]" />
              </span>
              <p className="font-semibold text-[#335765]">{idx + 1}. {item.title}</p>
            </div>
            <p className="text-sm text-[#7F543D] leading-relaxed">{item.text}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const InclusionsSection = () => (
  <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold text-[#335765]">What Is Included in the 21-Day Package?</h2>
      <p className="text-[#7F543D]">Everything essential for a supervised weight-loss reset and continuity plan.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
        <p className="text-lg font-bold text-[#335765] mt-1">21 Days</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p>
        <p className="text-lg font-bold text-[#335765] mt-1">20 Nights</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Core Inclusions</p>
        <p className="text-lg font-bold text-[#335765] mt-1">Therapies + Meals</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Care Model</p>
        <p className="text-lg font-bold text-[#335765] mt-1">Doctor-Supervised</p>
      </div>
    </div>
    <Card className="shadow-sm border-[#dfe7e2]">
      <CardContent className="p-3 md:p-0">
        <div className="md:hidden grid gap-2">
          {inclusions.map(([label, details, Icon]) => (
            <div key={label as string} className="rounded-xl border border-[#d8d0ae] px-3 py-3 bg-white">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                  <Icon className="h-4 w-4 text-[#335765]" />
                </span>
                <p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{label as string}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#7F543D] font-semibold break-words">{details as string}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:block overflow-auto">
          <table className="w-full text-sm min-w-[680px]">
            <thead className="bg-[#F5F8F6] text-[#335765]">
              <tr>
                <th className="text-left p-3 font-semibold">Inclusion</th>
                <th className="text-left p-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {inclusions.map(([label, details, Icon]) => (
                <tr key={label as string} className="border-t bg-white">
                  <td className="p-3 font-medium text-[#3D4B4C]">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                        <Icon className="h-4 w-4 text-[#335765]" />
                      </span>
                      <span>{label as string}</span>
                    </div>
                  </td>
                  <td className="p-3 text-[#7F543D]">{details as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    <div className="rounded-xl border border-[#88a7ad] border-l-4 border-l-[#335765] bg-[#E7F0F1] px-4 py-4 md:px-5 md:py-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0">
          <Globe2 className="h-5 w-5 text-[#335765]" />
        </div>
        <div>
          <p className="text-[#214348] font-bold">Optional Add-ons</p>
          <p className="text-sm text-[#335765] leading-relaxed mt-1">
            Airport transfers, body composition testing, cooking classes, sightseeing on rest days, extended stay, and couples programs can be arranged based on center availability.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CTA = ({ onQuote }: { onQuote: () => void }) => <section className="overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl"><div className="grid md:grid-cols-2"><div className="relative h-[220px] md:h-auto overflow-hidden md:order-2"><img src={`${imageBase}/1.webp`} alt="Book Ayurvedic weight loss program" className="w-full h-full object-cover" /></div><div className="p-8 md:p-10 space-y-5"><h2 className="text-3xl font-bold">Book Your Ayurvedic Weight Loss Program</h2><p>Begin with a no-obligation consultation. We help you choose the right center, dates, and package.</p><a href="https://wa.me/918028432737" target="_blank" rel="noreferrer" className="block bg-white text-[#335765] text-center rounded-xl py-3 font-bold">WhatsApp Us Now<br /><span className="underline">+91 80 2843 2737</span></a><Button onClick={onQuote} className="w-full bg-[#E6EEE8] text-[#335765] hover:bg-white font-bold">Get Free Consultation Here</Button></div></div></section>;
const FAQSection = () => (
  <section id="faq" className="scroll-mt-24 !mt-8 md:!mt-14">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
    </div>
    <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
      {faqs.map(([q, a], idx) => (
        <AccordionItem key={q as string} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
          <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{q as string}</AccordionTrigger>
          <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{a as string}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);
const CentersSection = ({ navigate, onQuote }: any) => {
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);
  const [topCentersVisible, setTopCentersVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setTopCentersVisible(1);
      else if (window.innerWidth < 1024) setTopCentersVisible(2);
      else setTopCentersVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topCentersTotalSlides = Math.max(1, centers.length - topCentersVisible + 1);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const toggleCenterDescription = (name: string) => setExpandedCenterName(prev => prev === name ? null : name);
  const visibleTopCenters = centers.slice(topCentersSlide, topCentersSlide + topCentersVisible);

  return (
    <section id="top-centers" className="scroll-mt-24 !mt-10 md:!mt-16 space-y-8">
      <div className="text-center space-y-2 md:space-y-3 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
        <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for weight loss programs.</p>
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
          {visibleTopCenters.map(([name, city, description, rating, reviewsCount, image, link]) => (
            <div key={name as string} className="flex h-full w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                  <img
                    src={image as string}
                    alt={name as string}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex text-left">{name as string}</h3>
                  
                  <div className="flex flex-nowrap items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 md:mt-1 md:mb-4 text-left overflow-hidden">
                    <div className="flex items-center gap-1.5 shrink min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="text-[12px] md:text-[13px] font-semibold truncate" title={city as string}>{city as string}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                      <span className="text-[12px] md:text-[13px] font-bold text-[#335765]">{rating as number} ({reviewsCount as number})</span>
                    </div>
                  </div>

                  <div className="relative mb-3 flex-grow text-left">
                    <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === name ? "" : "line-clamp-3"}`}>
                      {description as string}
                    </p>
                    <button
                      onClick={() => toggleCenterDescription(name as string)}
                      className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block"
                    >
                      {expandedCenterName === name ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Button
                      variant="outline"
                      onClick={() => navigate(link as string)}
                      className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap"
                    >
                      View Details
                    </Button>
                    <Button
                      className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs"
                      onClick={onQuote}
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
  );
};
const ReviewsSection = ({ review, setReview }: { review: number; setReview: (n: number) => void }) => (
  <section id="reviews" className="scroll-mt-24 pt-8 pb-8 md:pt-10 md:pb-12 bg-transparent w-full">
    <div className="container mx-auto px-4 max-w-6xl text-left">
      <div className="text-center mb-6 md:mb-8 space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
        <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
      </div>

      <div className="max-w-4xl mx-auto relative px-0 md:px-0">
        <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
          <button
            onClick={() => setReview((review - 1 + reviews.length) % reviews.length)}
            className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
          <button
            onClick={() => setReview((review + 1) % reviews.length)}
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
                  {reviews[review][2] as string}
                </h3>
                <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                  "{reviews[review][3] as string}"
                </p>
              </div>

              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                  {(reviews[review][0] as string).charAt(0)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base md:text-xl font-semibold text-[#335765]">
                      {reviews[review][0] as string}
                    </h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                      &#10003; Verified
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-[#7F543D] mb-1">{reviews[review][1] as string}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />)}
                    <span className="text-xs md:text-sm font-bold text-[#335765] ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default AyurvedicWeightLossProgramIndia;
