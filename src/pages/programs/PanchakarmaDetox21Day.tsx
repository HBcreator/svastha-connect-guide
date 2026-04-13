import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity,
  AlertTriangle,
  Brain,
  CalendarCheck2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Droplet,
  Globe2,
  Headset,
  Heart,
  HeartPulse,
  Leaf,
  MapPin,
  ReceiptIndianRupee,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserCog,
  UserCheck,
  XCircle,
} from "lucide-react";

const galleryImages = [
  "/Program Images/21-day-detox.png",
  "/Program Images/detox_preparation.png",
  "/Program Images/detox_core.png",
  "/Program Images/14-day-retreat.png",
  "/Program Images/28-day-healing.png",
];

const quickSummaryRows = [
  ["Program Name", "21-Day Panchakarma Detox and Rejuvenation"],
  ["Duration", "21 Days / 20 Nights"],
  ["Who It Is For", "Adults (25-65) seeking detox, chronic condition recovery, or wellness reset"],
  ["Key Benefit", "Full body detox, mental clarity, chronic condition relief, anti-aging"],
  ["Top Locations", "Kerala, Rishikesh, Goa"],
  ["Average Cost", "$2,500 - $4,500 USD"],
  ["Supervised By", "Qualified Ayurvedic Doctors (Vaidyas)"],
  ["Includes", "Accommodation, meals, therapies, consultations, medicines"],
];

const therapies = [
  {
    title: "Vamana (Therapeutic Emesis)",
    text: "Controlled cleansing of the upper digestive tract, used for chronic congestion, respiratory concerns, and select skin conditions.",
    icon: Droplet,
  },
  {
    title: "Virechana (Purgation Therapy)",
    text: "Herbal cleansing of intestines and liver; commonly used for acidity, inflammation, and Pitta-dominant conditions.",
    icon: Leaf,
  },
  {
    title: "Basti (Medicated Enema)",
    text: "Deep colon cleansing with herbal oils and decoctions, often used in Vata-related patterns like joint, nerve, or bowel issues.",
    icon: HeartPulse,
  },
  {
    title: "Nasya (Nasal Therapy)",
    text: "Medicated oils through the nostrils for sinus support, headache relief, and better upper-channel balance.",
    icon: Sparkles,
  },
  {
    title: "Raktamokshana (Blood Purification)",
    text: "A selective therapy used in specific inflammatory and dermatological indications under physician supervision.",
    icon: Stethoscope,
  },
  {
    title: "Shirodhara (Mind-Body Reset)",
    text: "A steady stream of warm medicated oil on the forehead to support deep relaxation, sleep quality, and nervous system calm.",
    icon: Activity,
  },
];

const candidatePoints = [
  "Feel chronically tired despite sleeping well",
  "Struggle with persistent stress, anxiety, or burnout",
  "Have skin conditions like psoriasis, eczema, or acne not fully responsive to conventional care",
  "Manage obesity, high cholesterol, or metabolic disorders",
  "Experience frequent digestive issues such as bloating, acidity, or IBS",
  "Want to prevent chronic disease and invest in long-term health",
  "Are in midlife and want a full mind-body reset",
  "Have tried modern treatment and want a holistic natural approach",
];

const avoidPoints = [
  "Pregnant women",
  "People who had major surgery in the last three months",
  "People with active cancer or severe acute illness",
  "Children under 16 without specific medical guidance",
  "People with unmanaged serious mental health conditions",
];

const weekBreakdown = [
  {
    title: "Week 1 - Purva Karma (Preparation)",
    duration: "Day 1-7",
    focus: "Preparing the body for deep detox",
    description:
      "Daily Abhyanga, Swedana, personalized diet, and internal oleation are used to mobilize stored toxins and prepare elimination pathways.",
    bullets: ["Snehana (oil massage)", "Swedana (herbal steam)", "Dietary adjustments", "Herbal medicines"],
    image: "/Program Images/detox_preparation.png",
  },
  {
    title: "Week 2 - Pradhana Karma (Core Detox)",
    duration: "Day 8-14",
    focus: "Active toxin elimination",
    description:
      "This is the core cleansing phase. Based on constitution and diagnosis, physicians prescribe Virechana, Basti, Nasya, and sometimes Vamana, plus supportive therapies.",
    bullets: ["Virechana", "Basti", "Nasya or Vamana (as prescribed)", "Shirodhara and Abhyanga"],
    image: "/Program Images/detox_core.png",
  },
  {
    title: "Week 3 - Paschat Karma (Rejuvenation)",
    duration: "Day 15-21",
    focus: "Restoration and integration",
    description:
      "Rasayana care rebuilds strength and immunity. Yoga, meditation, and home-care planning help sustain benefits after travel.",
    bullets: ["Rasayana therapies", "Rejuvenating oils", "Light restorative diet", "Yoga and meditation"],
    image: "/Program Images/14-day-retreat.png",
  },
];

const benefits = {
  physical: [
    "Deep cellular detoxification from tissues and organs",
    "Improved digestion with lower bloating and acidity",
    "Reduced inflammation and joint discomfort",
    "Clearer skin in chronic dermatological patterns",
    "Metabolic reset supporting healthy weight management",
    "Stronger immunity and stable energy",
  ],
  mental: [
    "Reduction in chronic stress and anxiety load",
    "Better sleep quality from early stages",
    "Improved clarity, focus, and emotional stability",
    "Nervous system recovery support in burnout",
  ],
  longTerm: [
    "Benefits often continue for months with compliance",
    "Improved health behavior patterns post-program",
    "Reduced dependence on some lifestyle medications under medical supervision",
    "Visible vitality improvements in skin, hair, and energy",
  ],
};

const chooseIndiaPoints = [
  {
    title: "Unmatched Authenticity",
    text: "Ayurveda originates in India, with stronger treatment lineage, physician depth, and botanical access.",
  },
  {
    title: "Medical Expertise",
    text: "Top doctors hold accredited BAMS/MD Ayurveda qualifications with high-volume chronic care experience.",
  },
  {
    title: "Extraordinary Value",
    text: "Program costs are typically 70-80% lower than many Western destinations for comparable durations.",
  },
  {
    title: "Healing Environments",
    text: "Many centers are designed for recovery in tropical or mountain ecosystems that support rest and routine.",
  },
  {
    title: "Integrated Wellness",
    text: "Yoga, meditation, pranayama, and diet are usually embedded into treatment flow.",
  },
  {
    title: "Better Post-Program Continuity",
    text: "Many centers provide discharge protocols, diet plans, and remote follow-up to maintain results after travel.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Verified Medical Standards",
    description: "Only partner centers with physician-led protocols, safety checks, and treatment quality validation.",
    icon: ShieldCheck,
  },
  {
    title: "International Patient Expertise",
    description: "Dedicated handling for travelers from 40+ countries with clear communication and planning support.",
    icon: Globe2,
  },
  {
    title: "Pre-Travel Doctor Consultation",
    description: "Case pre-screening before booking helps shortlist the right center and treatment pathway.",
    icon: CalendarCheck2,
  },
  {
    title: "Complete Journey Support",
    description: "From center selection to arrival coordination, transfers, and check-in flow management.",
    icon: Route,
  },
  {
    title: "During-Stay Assistance",
    description: "On-ground guidance through your full 21-day protocol for smooth continuity and comfort.",
    icon: Headset,
  },
  {
    title: "Condition-Based Matching",
    description: "Personalized center mapping based on health goals, budget, travel style, and recovery priorities.",
    icon: UserCog,
  },
];

const topAyurvedicCenters = [
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bengaluru, Karnataka, India",
    description:
      "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm. The center offers a holistic approach to wellness with personalized treatments guided by experienced practitioners in a serene environment.",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    slug: "bangalore/soukya",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bengaluru, Karnataka, India",
    description:
      "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village, the center provides personalized therapies guided by experienced Vaidyas and supported by yoga, mindful routines, and sattvic nutrition.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    slug: "bangalore/ayurvedagram",
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Bengaluru Rural, Karnataka, India",
    description:
      "A serene retreat focused on authentic Ayurveda and yogic living. The center combines classical therapies with guided yoga, meditation, and lifestyle coaching to support detoxification, resilience, and sustainable health improvement.",
    rating: 4.8,
    reviews: 380,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    slug: "udupi/shathayu-ayurveda-yoga-retreat",
  },
];

const inclusionsRows = [
  ["Accommodation", "Private room or suite for 20 nights (as per package tier)"],
  ["Meals", "Three daily Ayurvedic meals personalized by constitution and treatment phase"],
  ["Doctor Consultations", "Initial assessment plus daily or alternate-day physician review"],
  ["Daily Therapies", "Abhyanga, Shirodhara, Basti, Virechana, Kizhi, and others as prescribed"],
  ["Ayurvedic Medicines", "Herbal medicines and medicated oils during stay"],
  ["Yoga and Meditation", "Daily guided sessions integrated into the healing plan"],
  ["Post-Program Support", "Diet guidance and continuity protocol for home"],
];

const faqItems = [
  {
    question: "Is Panchakarma safe for international visitors with no prior Ayurveda experience?",
    answer:
      "Yes. The 21-day format is commonly used for first-time guests. A Vaidya assesses your case before prescribing therapy.",
  },
  {
    question: "How much does a 21-day Panchakarma cost in India?",
    answer:
      "Most reputable mid-range and premium programs are around $2,000 to $4,500 USD, while luxury options can exceed $6,000.",
  },
  {
    question: "Is Panchakarma painful?",
    answer:
      "Most therapies are relaxing. Some elimination days can feel physically intense, but this is usually temporary and supervised.",
  },
  {
    question: "What is the best time of year to visit India for Panchakarma?",
    answer:
      "October to March is generally preferred for climate comfort and high center availability, though many centers run year-round.",
  },
  {
    question: "Can Panchakarma help with arthritis, psoriasis, or burnout?",
    answer:
      "These are common reasons people choose a 21-day protocol. Suitability depends on your medical profile and physician assessment.",
  },
  {
    question: "Do I need Hindi or prior Ayurveda knowledge?",
    answer:
      "No. International centers usually provide English-speaking doctors, therapists, and coordinators.",
  },
  {
    question: "How soon will I feel effects?",
    answer:
      "Many people notice better sleep and calm in week one, with deeper physical shifts becoming clearer from days 10-14 onward.",
  },
  {
    question: "Can I combine Panchakarma with travel in India?",
    answer:
      "Keep travel minimal during treatment. It is better to explore before or after the clinical program.",
  },
];

const PanchakarmaDetox21Day = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToNext = () => setSelectedImage((prev) => (prev + 1) % galleryImages.length);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#3B5B5D] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurvedic Programs</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">21-Day Panchakarma Detox Program in India</h1>
              <p className="text-lg md:text-xl text-white/90">Complete full body detox and rejuvenation with physician-led care.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>Kerala, Rishikesh, Goa</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.8/5 average</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button
                className="w-full h-12 rounded-xl bg-white text-[#2F5B63] hover:bg-white/90 font-semibold"
                onClick={() => setQuoteModalOpen(true)}
              >
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-6xl space-y-20 md:space-y-24">
        <section id="gallery" className="scroll-mt-24 mb-2 md:mb-4">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3B5B5D]">Ayurvedic Treatment and Program Gallery</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Panchakarma program" className="w-full h-[260px] md:h-[460px] object-cover" />
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 text-[#2F5B63] opacity-0 group-hover:opacity-100 transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 text-[#2F5B63] opacity-0 group-hover:opacity-100 transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section className="scroll-mt-24 -mt-20 md:-mt-24 pt-1 md:pt-2 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B5B5D] mb-4">Quick Summary - Everything You Need to Know</h2>
          <Card>
            <CardContent className="p-0 overflow-auto">
              <table className="w-full text-sm min-w-[680px]">
                <tbody>
                  {quickSummaryRows.map((row, idx) => (
                    <tr key={row[0]} className={idx === 0 ? "bg-[#EDE8D0]" : "border-t"}>
                      <td className="p-3 font-semibold text-[#3D4B4C] w-[240px]">{row[0]}</td>
                      <td className="p-3 text-[#7F543D]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>
        <section className="scroll-mt-24 -mt-28 md:-mt-32 space-y-14 md:space-y-16">
          <div className="grid gap-10 md:gap-12">
            <Card className="h-full shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#3B5B5D]">What Is the 21-Day Panchakarma Detox Program?</h2>
                <p className="text-[#7F543D] leading-relaxed">
                  This program is a structured, physician-supervised Ayurvedic detox protocol designed for full-system cleansing, recovery, and rejuvenation. It is not a spa format; it is a clinical wellness process personalized by constitution and health condition. Panchakarma means "five actions" and refers to core elimination therapies used to remove deep toxic load (Ama), restore organ function, and improve long-term vitality.
                </p>
                <p className="text-[#7F543D] leading-relaxed">
                  The 21-day format is widely used because it can complete the three classical stages: preparation, core elimination, and restoration.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="h-full shadow-sm mt-10 md:mt-12 border-[#d8d0ae] bg-[#EDE8D0]">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#3B5B5D] mb-3 text-center">Understanding Panchakarma - The Science Behind It</h2>
              <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Not all five therapies are given to every guest. Your doctor prescribes the combination based on diagnosis and tolerance.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {therapies.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EDE8D0] mb-3">
                        <Icon className="h-5 w-5 text-[#2F5B63]" />
                      </div>
                      <h3 className="font-semibold text-[#3B5B5D] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#7F543D]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch mt-10 md:mt-12">
            <Card className="h-full border-green-300 bg-white shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
                    <CircleCheck className="h-5 w-5 text-green-700" />
                  </span>
                  <h2 className="text-2xl font-bold text-[#2F5B63]">Who Is This Program For?</h2>
                </div>
                <ul className="space-y-3">
                  {candidatePoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-green-300">
                        <CircleCheck className="h-3.5 w-3.5 text-green-700" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full border-green-300 bg-white shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
                    <AlertTriangle className="h-5 w-5 text-[#2F5B63]" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#2F5B63]">Who Should Avoid This Program</h3>
                </div>
                <ul className="space-y-3">
                  {avoidPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-300">
                        <XCircle className="h-3.5 w-3.5 text-red-600" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="scroll-mt-24 mt-12 md:mt-16 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
          <div className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3B5B5D]">The 21-Day Program - Week-by-Week Breakdown</h2>
            <p className="text-[#7F543D] mt-2">Preparation, elimination, and rejuvenation in one coherent physician-led journey.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {weekBreakdown.map((week, idx) => (
              <AccordionItem
                key={week.title}
                value={`week-${idx}`}
                className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-green-500"
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="text-left">
                    <p className="text-lg font-bold text-[#3B5B5D]">{week.title}</p>
                    <p className="text-sm text-[#8C765E]">{week.duration} - {week.focus}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-6">
                  <div>
                    <p className="text-[#7F543D] mb-4 leading-relaxed">{week.description}</p>
                    <p className="font-semibold text-[#3B5B5D] mb-2.5">Key Therapies</p>
                    <ul className="space-y-2.5 text-sm text-[#7F543D]">
                      {week.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 leading-relaxed">
                          <CircleCheck className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="scroll-mt-24 mt-12 md:mt-16">
          <h2 className="text-3xl font-bold text-[#3B5B5D] mb-6 text-center">Benefits of the 21-Day Panchakarma Detox</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                    <HeartPulse className="h-5 w-5 text-[#2F5B5D]" />
                  </span>
                  <h3 className="font-bold text-[#3B5B5D]">Physical Benefits</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#7F543D]">
                  {benefits.physical.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                    <Brain className="h-5 w-5 text-[#2F5B5D]" />
                  </span>
                  <h3 className="font-bold text-[#3B5B5D]">Mental and Emotional Benefits</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#7F543D]">
                  {benefits.mental.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                    <Sparkles className="h-5 w-5 text-[#2F5B5D]" />
                  </span>
                  <h3 className="font-bold text-[#3B5B5D]">Long-Term Effects</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#7F543D]">
                  {benefits.longTerm.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="scroll-mt-24 mt-12 md:mt-16 mb-12 md:mb-16 space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#3B5B5D]">Cost of the 21-Day Panchakarma in India</h2>
            <p className="mt-2 text-[#7F543D]">
              Most guests choose this duration for a full detox cycle, physician supervision, and a complete stay package in India.
            </p>
          </div>

          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-5 md:p-6 space-y-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
                  <p className="mt-2 text-2xl font-bold text-[#3B5B5D]">21 Days</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Structured detox, recovery, and rejuvenation timeline.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
                  <p className="mt-2 text-2xl font-bold text-[#3B5B5D]">$2,500 - $4,500</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for reputable centers and full-stay plans.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                      <ReceiptIndianRupee className="h-5 w-5 text-[#2F5B63]" />
                    </div>
                    <p className="text-lg font-bold text-[#3B5B5D]">Most Popular</p>
                  </div>
                  <p className="mt-3 text-sm text-[#6F6B5C]">Panchakarma and disease-focused recovery with accommodation and therapies.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-[#EFE8CB] px-4 py-3">
                  <p className="font-semibold text-[#3B5B5D]">Most popular - Panchakarma & disease</p>
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#2F5B63]">
                    Highest demand package
                  </span>
                </div>
                <div className="overflow-auto">
                  <table className="w-full text-sm min-w-[680px]">
                    <thead className="bg-[#F5F8F6] text-[#3B5B5D]">
                      <tr>
                        <th className="text-left p-3 font-semibold">Program</th>
                        <th className="text-left p-3 font-semibold">Category</th>
                        <th className="text-left p-3 font-semibold">Cost</th>
                        <th className="text-left p-3 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t bg-white">
                        <td className="p-3 font-medium text-[#3D4B4C]">21-Day Panchakarma Detox</td>
                        <td className="p-3 text-[#7F543D]">Panchakarma Detox</td>
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

        <section className="scroll-mt-24 mt-10 md:mt-14 mb-10 md:mb-14">
          <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
            <CardContent className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3B5B5D] text-center">Why Choose India for Panchakarma?</h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {chooseIndiaPoints.map((item) => (
                  <div key={item.title} className="rounded-lg border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                    <p className="font-semibold text-[#3B5B5D]">{item.title}</p>
                    <p className="text-sm text-[#7F543D] mt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          className="scroll-mt-24 mt-10 md:mt-14 mb-10 md:mb-14 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]"
          style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#3B5B5D] mb-3">Why Choose Us for 21 Day Panchakarma</h2>
            <p className="text-[#7F543D]">
              Not just booking support - structured guidance from pre-consultation to post-program continuity.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#2F5B63] border border-[#d9cfaa]">Doctor-screened centers</span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#2F5B63] border border-[#d9cfaa]">40+ countries supported</span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#2F5B63] border border-[#d9cfaa]">End-to-end assistance</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {whyChooseUsPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
              <div
                key={point.title}
                className="bg-white rounded-2xl px-4 py-4 border border-[#d7dcca] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F6EF] ring-1 ring-green-200">
                    <Icon className="h-5 w-5 text-[#1E7A4D]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#2F5B63]">{idx + 1}. {point.title}</p>
                    <p className="text-sm leading-relaxed text-[#5C5E52] mt-1">{point.description}</p>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </section>

        <section className="scroll-mt-24 mt-10 md:mt-14 mb-10 md:mb-14 space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#3B5B5D]">What Is Included in the 21-Day Package?</h2>
            <p className="text-[#7F543D]">Everything essential for a supervised detox, recovery, and continuity plan.</p>
          </div>
          <Card className="shadow-sm border-[#dfe7e2]">
            <CardContent className="p-0 overflow-auto">
              <table className="w-full text-sm min-w-[680px]">
                <thead className="bg-[#F5F8F6] text-[#3B5B5D]">
                  <tr>
                    <th className="text-left p-3 font-semibold">Inclusion</th>
                    <th className="text-left p-3 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {inclusionsRows.map((row) => (
                    <tr key={row[0]} className="border-t">
                      <td className="p-3 font-medium text-[#3D4B4C]">{row[0]}</td>
                      <td className="p-3 text-[#7F543D]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <p className="text-sm text-[#8C765E] text-center">Optional add-ons: airport transfers, local sightseeing, extended stay, and couples programs.</p>
        </section>

        <section className="scroll-mt-24 mt-10 md:mt-14 mb-10 md:mb-14 relative overflow-hidden rounded-3xl bg-[#2F5B63] text-white p-5 md:p-8">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -left-6 -bottom-10 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-7 items-stretch">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-[2.05rem] font-bold leading-tight">Book Your 21-Day Panchakarma Program</h2>
              <p className="mt-3 text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-5 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%2021-day%20Panchakarma%20program."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#2F5B63] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-base font-bold leading-tight mt-0.5 underline">+91 80 2843 2737</span>
                </a>
                <Button className="w-full h-12 bg-white text-[#2F5B63] hover:bg-white/90 font-semibold" onClick={() => setQuoteModalOpen(true)}>
                  Get Free Consultation Here
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl min-h-[220px] md:min-h-[420px]">
              <img
                src="/Program Images/21-day-detox.png"
                alt="21-day Panchakarma consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f444b]/50 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 mt-10 md:mt-14">
          <h2 className="text-3xl font-bold text-[#3B5B5D] mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
            {faqItems.map((item, idx) => (
              <AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#3B5B5D] hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-5">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="scroll-mt-24 mt-12 md:mt-16 mb-10 md:mb-14">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B5B5D]">Our Top Ayurvedic Center in India</h2>
          </div>
          <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topAyurvedicCenters.map((center) => (
              <div key={center.slug} className="flex items-start">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full">
                  <div className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2 leading-tight line-clamp-1 min-h-[1.6rem]">
                      {center.name}
                    </h3>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5 text-[#7F543D]">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold">{center.city}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-black text-[#3D4B4C]">{center.rating}</span>
                        <span className="text-xs font-semibold text-[#7F543D]">({center.reviews})</span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed md:leading-[1.5] text-[#7F543D] mb-2 line-clamp-6">
                      {center.description}
                    </p>
                    <span className="inline-flex text-xs font-semibold text-primary w-fit mb-2">Read More</span>

                    <div className="mt-auto pt-3 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          className="w-full font-bold py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                          onClick={() => navigate(`/centers/${center.slug}`)}
                        >
                          View Details
                        </Button>
                        <Button
                          onClick={() => setQuoteModalOpen(true)}
                          className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 hover:scale-[1.02] text-sm"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              className="bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-semibold px-8 py-6 rounded-xl"
              onClick={() => navigate("/centers")}
            >
              View More
            </Button>
          </div>
        </section>

      </main>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default PanchakarmaDetox21Day;
