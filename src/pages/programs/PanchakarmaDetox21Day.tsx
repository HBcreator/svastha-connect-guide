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
  BedDouble,
  CalendarCheck2,
  Calendar,
  ClipboardCheck,
  ClipboardList,
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
  Pill,
  ReceiptIndianRupee,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Quote,
  Stethoscope,
  Phone,
  UserCog,
  UserCheck,
  UtensilsCrossed,
  X,
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

const quickSummaryMobileIcons = {
  "Program Name": ClipboardCheck,
  "Duration": Calendar,
  "Who It Is For": UserCheck,
  "Key Benefit": Sparkles,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
  "Includes": BedDouble,
} as const;

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
    icon: Heart,
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
    "More emotional resilience during daily work and family pressures",
    "Better mind-body awareness that supports healthier lifestyle choices",
  ],
  longTerm: [
    "Benefits often continue for months with compliance",
    "Improved health behavior patterns post-program",
    "Reduced dependence on some lifestyle medications under medical supervision",
    "Visible vitality improvements in skin, hair, and energy",
    "More stable digestion, sleep, and energy rhythms over time",
    "Lower relapse risk when post-program diet and routine are followed",
  ],
};

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/21-Day-Panchakarma-Detox-Program-India/Icons/panchkarma.jpg",
  "/Ayurvedic Programs/Images/21-Day-Panchakarma-Detox-Program-India/Icons/Ayurveda treatements .jpg",
  "/Ayurvedic Programs/Images/21-Day-Panchakarma-Detox-Program-India/Icons/Basti (Medicated Enema.jpg",
  "/Ayurvedic Programs/Images/21-Day-Panchakarma-Detox-Program-India/Icons/Nasya (Nasal Therapy.jpg",
  "/Ayurvedic Programs/Images/21-Day-Panchakarma-Detox-Program-India/Icons/Raktamokshana (Blood Purification).webp",
  "/Ayurvedic Programs/Images/21-Day-Panchakarma-Detox-Program-India/Icons/Shirodhara (Mind-Body Reset).jpg",
];

const chooseIndiaPoints = [
  {
    title: "Unmatched Authenticity",
    text: "Ayurveda originates in India, with stronger treatment lineage, physician depth, and botanical access.",
    icon: Sparkles,
  },
  {
    title: "Medical Expertise",
    text: "Top doctors hold accredited BAMS/MD Ayurveda qualifications with high-volume chronic care experience.",
    icon: Stethoscope,
  },
  {
    title: "Extraordinary Value",
    text: "Program costs are typically 70-80% lower than many Western destinations for comparable durations.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Healing Environments",
    text: "Many centers are designed for recovery in tropical or mountain ecosystems that support rest and routine.",
    icon: Leaf,
  },
  {
    title: "Integrated Wellness",
    text: "Yoga, meditation, pranayama, and diet are usually embedded into treatment flow.",
    icon: Activity,
  },
  {
    title: "Better Post-Program Continuity",
    text: "Many centers provide discharge protocols, diet plans, and remote follow-up to maintain results after travel.",
    icon: ShieldCheck,
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
    link: "/centers/bangalore/soukya",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bengaluru, Karnataka, India",
    description:
      "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village, the center provides personalized therapies guided by experienced Vaidyas and supported by yoga, mindful routines, and sattvic nutrition.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/centers/bangalore/ayurvedagram",
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Bengaluru Rural, Karnataka, India",
    description:
      "A serene retreat focused on authentic Ayurveda and yogic living. The center combines classical therapies with guided yoga, meditation, and lifestyle coaching to support detoxification, resilience, and sustainable health improvement.",
    rating: 4.8,
    reviews: 380,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/centers/udupi/shathayu-ayurveda-yoga-retreat",
  },
  {
    name: "Ananda in the Himalayas",
    city: "Rishikesh, Uttarakhand, India",
    description:
      "A renowned destination for integrative wellness with physician-led Ayurveda, yoga, and meditation programs in a serene Himalayan setting.",
    rating: 4.8,
    reviews: 420,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/centers",
  },
  {
    name: "Carnoustie Ayurveda Wellness Resort",
    city: "Mararikulam, Kerala, India",
    description:
      "A premium beachside center known for authentic Panchakarma care, experienced doctors, and personalized recovery-focused plans.",
    rating: 4.7,
    reviews: 360,
    image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg",
    link: "/centers",
  },
  {
    name: "Atmantan Wellness Resort",
    city: "Mulshi, Maharashtra, India",
    description:
      "A modern wellness retreat blending Ayurvedic therapies with lifestyle medicine, fitness, and nutrition in a scenic hill location.",
    rating: 4.7,
    reviews: 510,
    image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
    link: "/centers",
  },
  {
    name: "AyurSoma Ayurveda Royal Retreat",
    city: "Thiruvananthapuram, Kerala, India",
    description:
      "Traditional Kerala Ayurveda in a calm retreat format with physician supervision, therapeutic routines, and rejuvenation support.",
    rating: 4.8,
    reviews: 300,
    image: "/Center Images/AyurSoma Ayurveda/Thumb.jpg",
    link: "/centers",
  },
  {
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kovalam, Kerala, India",
    description:
      "Cliffside wellness destination offering curated Ayurvedic therapies, restorative routines, and immersive coastal healing experiences.",
    rating: 4.6,
    reviews: 280,
    image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
    link: "/centers",
  },
  {
    name: "Nalanda Retreat Goa",
    city: "Goa, India",
    description:
      "A focused Ayurvedic recovery center with personalized therapies, detox protocols, and supportive care for international wellness travelers.",
    rating: 4.7,
    reviews: 260,
    image: "/Center Images/Nalanda Retreat Goa/Thumb.jpg",
    link: "/centers",
  },
];

const inclusionsRows = [
  { label: "Accommodation", details: "Private room or suite for 20 nights (as per package tier)", icon: BedDouble },
  { label: "Meals", details: "Three daily Ayurvedic meals personalized by constitution and treatment phase", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Daily Therapies", details: "Abhyanga, Shirodhara, Basti, Virechana, Kizhi, and others as prescribed", icon: Activity },
  { label: "Ayurvedic Medicines", details: "Herbal medicines and medicated oils during stay", icon: Pill },
  { label: "Yoga and Meditation", details: "Daily guided sessions integrated into the healing plan", icon: Brain },
  { label: "Post-Program Support", details: "Diet guidance and continuity protocol for home", icon: ClipboardCheck },
];

const costComparisonRows = [
  {
    program: "21-Day Panchakarma Detox",
    category: "Panchakarma Detox",
    cost: "$2,500 - $4,500",
    notes: "Highest demand, long stay, full package",
  },
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

const patientReviews = [
  {
    name: "Maximilian Vogt",
    location: "Stuttgart, Germany",
    condition: "Chronic fatigue and digestive recovery",
    title: "21 Days That Undid Years of Damage - Worth Every Dollar.",
    review:
      "I enrolled in the 21-Day Panchakarma Detox after years of fatigue and digestive issues. Daily Vaidya consultations adjusted treatment to my response. By week three, I experienced full-body detox, better mental clarity, and visible reduction in inflammation.",
    rating: 5,
    verified: true,
  },
  {
    name: "Vivienne Lacroix",
    location: "Paris, France",
    condition: "Burnout recovery",
    title: "Three Weeks in Kerala That Reversed Two Years of Burnout.",
    review:
      "The physician-supervised Panchakarma protocol addressed root causes of stress. Anti-aging therapies, prescribed detox diet, and consistent monitoring improved skin clarity and mental sharpness. Everything was structured and transparent.",
    rating: 5,
    verified: true,
  },
  {
    name: "Cormac Hennessy",
    location: "Galway, Ireland",
    condition: "Chronic condition wellness reset",
    title: "The Most Structured and Effective Health Investment I Have Made.",
    review:
      "The 21-day format in Rishikesh was highly personalized and medically confident. Vaidya supervision, daily plans, medicines, and meals removed every obstacle and kept my focus entirely on healing and continuity.",
    rating: 5,
    verified: true,
  },
  {
    name: "Nora Steinberg",
    location: "Zurich, Switzerland",
    condition: "Mental clarity and recovery",
    title: "Mental Clarity Returned by Week Two - I Had Forgotten That Feeling.",
    review:
      "I joined for brain fog and chronic recovery support. By day fourteen, clarity improved significantly. The team monitored progress daily and adjusted therapies carefully. The value compared to Europe was exceptional.",
    rating: 5,
    verified: true,
  },
  {
    name: "Graham Whitfield",
    location: "Leeds, UK",
    condition: "Energy and metabolic recovery",
    title: "At 58, This Programme Gave Me Back Energy I Had Written Off.",
    review:
      "The program design matched my needs for long-term condition management. Over three weeks, my energy rose steadily and my routine became sustainable. The all-inclusive setup made logistics stress-free.",
    rating: 5,
    verified: true,
  },
  {
    name: "Astrid Magnusson",
    location: "Oslo, Norway",
    condition: "Complete rejuvenation",
    title: "Kerala Ayurveda at Its Most Authentic - 21 Days of Renewal.",
    review:
      "Pulse diagnosis on day one and personalized sequencing made the process clear and purposeful. Mental clarity returned early, physical lightness followed, and the full package felt practical for international patients.",
    rating: 5,
    verified: true,
  },
];

const PanchakarmaDetox21Day = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [benefitsImageIndex, setBenefitsImageIndex] = useState(0);
  const [benefitsVisibleCards, setBenefitsVisibleCards] = useState(4);
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewAutoPlay, setReviewAutoPlay] = useState(true);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateBenefitsVisibleCards = () => {
      if (window.innerWidth < 768) {
        setBenefitsVisibleCards(1);
        return;
      }
      if (window.innerWidth < 1024) {
        setBenefitsVisibleCards(2);
        return;
      }
      setBenefitsVisibleCards(4);
    };
    updateBenefitsVisibleCards();
    window.addEventListener("resize", updateBenefitsVisibleCards);
    return () => window.removeEventListener("resize", updateBenefitsVisibleCards);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBenefitsImageIndex((prev) => (prev + 1) % benefitsSectionImages.length);
    }, 3000);
    return () => clearInterval(timer);
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

  useEffect(() => {
    if (!reviewAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % patientReviews.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [reviewAutoPlay]);

  const goToPrevious = () => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToNext = () => setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  const goBenefitsPrevious = () => setBenefitsImageIndex((prev) => (prev - 1 + benefitsSectionImages.length) % benefitsSectionImages.length);
  const goBenefitsNext = () => setBenefitsImageIndex((prev) => (prev + 1) % benefitsSectionImages.length);

  const benefitsVisibleImages = Array.from({ length: benefitsVisibleCards }, (_, idx) => {
    const imageIndex = (benefitsImageIndex + idx) % benefitsSectionImages.length;
    return {
      src: benefitsSectionImages[imageIndex],
      key: `${benefitsSectionImages[imageIndex]}-${benefitsImageIndex}-${idx}`,
    };
  });
  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  const visibleTopCenters = topAyurvedicCenters.slice(
    topCentersSlide * topCentersPerSlide,
    topCentersSlide * topCentersPerSlide + topCentersPerSlide
  );

  useEffect(() => {
    setTopCentersSlide((prev) => prev % topCentersTotalSlides);
  }, [topCentersTotalSlides]);

  useEffect(() => {
    if (!topCentersMobileView) return;
    const timer = setInterval(() => {
      setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
    }, 3600);
    return () => clearInterval(timer);
  }, [topCentersMobileView, topCentersTotalSlides]);

  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (centerName: string) => {
    setExpandedCenterName((prev) => (prev === centerName ? null : centerName));
  };
  const goReviewPrevious = () => setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview((prev) => (prev + 1) % patientReviews.length);

  const jumpSections = [
    { id: "gallery", title: "Gallery" },
    { id: "quick-summary", title: "Quick Summary" },
    { id: "program-overview", title: "Program Overview" },
    { id: "week-breakdown", title: "Week-by-Week Breakdown" },
    { id: "benefits", title: "Benefits" },
    { id: "cost", title: "Cost in India" },
    { id: "why-india", title: "Why Choose India" },
    { id: "why-us", title: "Why Choose Us" },
    { id: "inclusions", title: "Package Inclusions" },
    { id: "consultation", title: "Book Consultation" },
    { id: "faq", title: "FAQ" },
    { id: "top-centers", title: "Top Centers" },
    { id: "reviews", title: "Patient Reviews" },
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
                    <span>4.8/5 Excellent Rating</span>
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

      <main className="container mx-auto px-4 pt-6 pb-32 md:pt-8 md:pb-16 max-w-6xl space-y-20 md:space-y-24">
        <section id="gallery" className="scroll-mt-24 mb-0">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3B5B5D]">Ayurvedic Treatment and Program Gallery</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Panchakarma program" className="w-full h-[260px] md:h-[460px] object-cover" />
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#2F5B63] opacity-100 shadow-md transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#2F5B63] opacity-100 shadow-md transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B5B5D] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#3B5B5D]">21 Days / 20 Nights</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#3B5B5D]">Detox, Recovery, Reset</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Top Locations</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#3B5B5D]">Kerala, Rishikesh, Goa</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#3B5B5D]">$2,500 - $4,500</p>
                </div>
              </div>

              <div className="grid gap-2 md:hidden">
                {quickSummaryRows.map((row, idx) => (
                  <div
                    key={row[0]}
                    className={`rounded-xl border border-[#d8d0ae] px-3 py-3 ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                        {(() => {
                          const Icon = quickSummaryMobileIcons[row[0] as keyof typeof quickSummaryMobileIcons] || ClipboardCheck;
                          return <Icon className="h-4 w-4 text-[#2F5B63]" />;
                        })()}
                      </span>
                      <p className="text-[15px] uppercase tracking-[0.12em] text-[#2F5B63] font-extrabold">{row[0]}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#7F543D] break-words font-semibold">{row[1]}</p>
                  </div>
                ))}
              </div>

              <div className="hidden md:block overflow-auto rounded-xl border border-[#d8d0ae]">
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
              </div>
            </CardContent>
          </Card>
        </section>
        <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-14 md:space-y-16">
          <div className="grid gap-10 md:gap-12">
            <Card className="h-full shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#3B5B5D]">What Is the 21-Day Panchakarma Detox Program?</h2>
                <p className="text-[#7F543D] leading-relaxed">
                  This program is a structured, physician-supervised Ayurvedic detox protocol designed for full-system cleansing, recovery, and rejuvenation. It is not a spa format; it is a clinical wellness process personalized by constitution and health condition. Panchakarma means "five actions" and refers to core elimination therapies used to remove deep toxic load (Ama), restore organ function, and improve long-term vitality.
                </p>
                <p className="text-[#5f4636] leading-relaxed font-semibold text-lg">
                  The 21-day format is widely used because it can complete the three classical stages: preparation, core elimination, and restoration.{" "}
                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(true)}
                    className="underline underline-offset-4 decoration-2 font-bold uppercase hover:text-[#7F543D] transition-colors"
                  >
                    CONTACT
                  </button>{" "}
                  Svastha Global to connect with the best of authentic <span className="italic">Ayurveda</span> in India.
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
                  const titleMatch = item.title.match(/^([^()]+)\s*\(([^)]+)\)$/);
                  const mainTitle = titleMatch ? titleMatch[1].trim() : item.title;
                  const subTitle = titleMatch ? `(${titleMatch[2].trim()})` : "";
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0">
                          <Icon className="h-5 w-5 text-[#2F5B5D]" />
                        </div>
                        <h3 className="font-semibold text-[#3B5B5D] leading-snug">
                          <span className="block">{mainTitle}</span>
                          {subTitle && <span className="block">{subTitle}</span>}
                        </h3>
                      </div>
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

        <section id="week-breakdown" className="scroll-mt-24 mt-12 md:mt-16 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
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
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
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

        <section id="benefits" className="scroll-mt-24 mt-12 md:mt-16">
          <div className="mb-7 md:mb-8">
            <div className="relative">
              <button
                onClick={goBenefitsPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#2F5B63] shadow-md"
                aria-label="Previous benefits image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                onClick={goBenefitsNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#2F5B63] shadow-md"
                aria-label="Next benefits image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>

              <div className="overflow-hidden px-10 md:px-14">
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${benefitsImageIndex * 100}%)` }}
                  >
                    {benefitsSectionImages.map((image, idx) => (
                      <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                        <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                          <img
                            src={image}
                            alt="Panchakarma benefits visual"
                            className="w-full h-28 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {benefitsVisibleImages.map((image) => (
                      <div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-primary/10 hover:border-primary/30 transition-all">
                        <img
                          src={image.src}
                          alt="Panchakarma benefits visual"
                          className="w-full h-24 md:h-28 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {benefitsSectionImages.map((_, idx) => (
                <button
                  key={`benefits-dot-${idx}`}
                  onClick={() => setBenefitsImageIndex(idx)}
                  aria-label={`Go to benefits image ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#2F5B63]" : "w-2.5 bg-[#C7D1C9]"
                    }`}
                />
              ))}
            </div>
          </div>

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
        <section id="cost" className="scroll-mt-24 mt-12 md:mt-16 mb-12 md:mb-16 space-y-6">
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
                    <p className="text-xl md:text-2xl font-bold text-[#3B5B5D]">MOST POPULAR</p>
                  </div>
                  <p className="mt-3 text-sm text-[#6F6B5C]">Panchakarma and disease-focused recovery with accommodation and therapies.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-[#EFE8CB] px-4 py-3">
                  <p className="font-semibold text-[#3B5B5D]">Most popular - Panchakarma & disease</p>
                  <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
                    Highest demand package
                  </span>
                </div>
                <div className="md:hidden p-3 space-y-2 bg-white">
                  {costComparisonRows.map((row) => (
                    <div key={row.program} className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
                      <p className="text-[13px] uppercase tracking-[0.12em] text-[#2F5B63] font-extrabold">Program</p>
                      <p className="mt-1 text-sm text-[#7F543D] font-semibold break-words">{row.program}</p>

                      <div className="mt-3 grid grid-cols-1 gap-2">
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#2F5B63] font-extrabold">Category</p>
                          <p className="text-sm text-[#7F543D] font-semibold">{row.category}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#2F5B63] font-extrabold">Cost</p>
                          <p className="text-sm text-[#7F543D] font-semibold">{row.cost}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#2F5B63] font-extrabold">Notes</p>
                          <p className="text-sm text-[#7F543D] font-semibold break-words">{row.notes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden md:block overflow-auto">
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
                      {costComparisonRows.map((row) => (
                        <tr key={row.program} className="border-t bg-white">
                          <td className="p-3 font-medium text-[#3D4B4C]">{row.program}</td>
                          <td className="p-3 text-[#7F543D]">{row.category}</td>
                          <td className="p-3 text-[#7F543D]">{row.cost}</td>
                          <td className="p-3 text-[#7F543D]">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="why-india" className="scroll-mt-24 mt-10 md:mt-14 mb-10 md:mb-14">
          <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
            <CardContent className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3B5B5D] text-center">Why Choose India for Panchakarma?</h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {chooseIndiaPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-lg border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          <Icon className="h-4.5 w-4.5 text-[#2F5B63]" />
                        </span>
                        <p className="font-semibold text-[#3B5B5D]">{item.title}</p>
                      </div>
                      <p className="text-sm text-[#7F543D] mt-2">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          id="why-us"
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
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#2F5B63] border border-[#d9cfaa]">Doctor-Screened Centers</span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#2F5B63] border border-[#d9cfaa]">40+ Countries Supported</span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#2F5B63] border border-[#d9cfaa]">End-to-End Assistance</span>
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
              )
            })}
          </div>
        </section>

        <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#3B5B5D]">What Is Included in the 21-Day Package?</h2>
            <p className="text-[#7F543D]">Everything essential for a supervised detox, recovery, and continuity plan.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
              <p className="text-lg font-bold text-[#3B5B5D] mt-1">21 Days</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p>
              <p className="text-lg font-bold text-[#3B5B5D] mt-1">20 Nights</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Core Inclusions</p>
              <p className="text-lg font-bold text-[#3B5B5D] mt-1">Therapies + Meals</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Care Model</p>
              <p className="text-lg font-bold text-[#3B5B5D] mt-1">Doctor-Supervised</p>
            </div>
          </div>
          <Card className="shadow-sm border-[#dfe7e2]">
            <CardContent className="p-3 md:p-0">
              <div className="md:hidden grid gap-2">
                {inclusionsRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="rounded-xl border border-[#d8d0ae] px-3 py-3 bg-white">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          <Icon className="h-4 w-4 text-[#2F5B63]" />
                        </span>
                        <p className="text-[15px] uppercase tracking-[0.12em] text-[#2F5B63] font-extrabold">{row.label}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#7F543D] font-semibold break-words">{row.details}</p>
                    </div>
                  )
                })}
              </div>

              <div className="hidden md:block overflow-auto">
                <table className="w-full text-sm min-w-[680px]">
                  <thead className="bg-[#F5F8F6] text-[#3B5B5D]">
                    <tr>
                      <th className="text-left p-3 font-semibold">Inclusion</th>
                      <th className="text-left p-3 font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inclusionsRows.map((row) => {
                      const Icon = row.icon;
                      return (
                        <tr key={row.label} className="border-t">
                          <td className="p-3 font-medium text-[#3D4B4C]">
                            <div className="flex items-center gap-2.5">
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                                <Icon className="h-4 w-4 text-[#2F5B63]" />
                              </span>
                              <span>{row.label}</span>
                            </div>
                          </td>
                          <td className="p-3 text-[#7F543D]">{row.details}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-xl border border-[#88a7ad] border-l-4 border-l-[#2F5B63] bg-[#E7F0F1] px-4 py-4 md:px-5 md:py-4">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/70 border border-[#b8c9cc]">
                <Globe2 className="h-4.5 w-4.5 text-[#2F5B63]" />
              </span>
              <div>
                <p className="text-lg font-bold text-[#2F5B63] leading-tight">For International Patients</p>
                <p className="mt-1 text-sm md:text-[15px] text-[#7F543D] leading-relaxed">
                  Optional add-ons: airport transfers, local sightseeing, extended stay, and couples programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-6 md:gap-8">
          <section id="consultation" className="scroll-mt-24 relative overflow-hidden rounded-3xl bg-[#2F5B63] text-white p-5 pb-8 md:p-8">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -left-6 -bottom-10 w-44 h-44 rounded-full bg-white/10" />
            </div>
            {/* Mobile layout: image on top, content below */}
            <div className="relative md:hidden flex flex-col gap-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl h-[220px]">
                <img
                  src="/Program Images/21-day-detox.png"
                  alt="21-day Panchakarma consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f444b]/50 via-transparent to-transparent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight">Book Your 21-Day Panchakarma Program</h2>
                <p className="mt-3 text-white/90 text-sm leading-relaxed">
                  Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
                </p>
                <div className="space-y-3 mt-5">
                  <a
                    href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%2021-day%20Panchakarma%20program."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-xl bg-white text-[#2F5B63] hover:bg-white/90 h-14 flex flex-col items-center justify-center transition"
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
            </div>
            {/* Desktop layout: side by side */}
            <div className="relative hidden md:grid md:grid-cols-2 gap-7 items-stretch max-w-5xl mx-auto">
              <div className="flex flex-col justify-center">
                <h2 className="text-[2.05rem] font-bold leading-tight">Book Your 21-Day Panchakarma Program</h2>
                <p className="mt-3 text-white/90 max-w-xl">
                  Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
                </p>
                <div className="space-y-3 mt-5 max-w-xl">
                  <a
                    href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%2021-day%20Panchakarma%20program."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-xl bg-white text-[#2F5B63] hover:bg-white/90 h-16 flex flex-col items-center justify-center transition"
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
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl min-h-[420px]">
                <img
                  src="/Program Images/21-day-detox.png"
                  alt="21-day Panchakarma consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f444b]/50 via-transparent to-transparent" />
              </div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#3B5B5D] mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
              {faqItems.map((item, idx) => (
                <AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#3B5B5D] hover:no-underline [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-[#7F543D] leading-relaxed pb-5">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

        <section id="top-centers" className="scroll-mt-24">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B5B5D]">Our Top Ayurvedic Center in India</h2>
          </div>
          <div className="relative">
            <button
              onClick={goTopCentersPrevious}
              className="absolute left-1 md:-left-12 top-[44%] -translate-y-1/2 z-20 inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white text-[#2F5B63] shadow-lg border border-[#d6decf]"
              aria-label="Previous centers"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goTopCentersNext}
              className="absolute right-1 md:-right-12 top-[44%] -translate-y-1/2 z-20 inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white text-[#2F5B63] shadow-lg border border-[#d6decf]"
              aria-label="Next centers"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="grid items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleTopCenters.map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full h-full">
                    <div className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden">
                      <img
                        src={center.image}
                        alt={center.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-[#2C4E5A] mb-2 leading-tight line-clamp-1 min-h-[1.75rem]">
                        {center.name}
                      </h3>

                      <div className="flex items-center justify-between mb-3 min-h-[1.5rem]">
                        <div className="flex items-center gap-1.5 text-[#7F543D]">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-semibold line-clamp-1">{center.city}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-black text-[#3D4B4C]">{center.rating}</span>
                          <span className="text-xs font-semibold text-[#7F543D]">({center.reviews})</span>
                        </div>
                      </div>

                      <p
                        className={`text-sm leading-relaxed md:leading-[1.5] text-[#7F543D] mb-2 ${expandedCenterName === center.name
                          ? ""
                          : "line-clamp-3 leading-[1.35rem] h-[4.05rem] overflow-hidden"
                          }`}
                      >
                        {center.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleCenterDescription(center.name)}
                        className="inline-flex text-xs font-semibold text-primary w-fit mb-2 hover:underline"
                      >
                        {expandedCenterName === center.name ? "Read Less" : "Read More"}
                      </button>

                      <div className="mt-auto pt-3 border-t border-border/50">
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant="outline"
                            className="w-full font-bold py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                            onClick={() => navigate(center.link)}
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
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: topCentersTotalSlides }).map((_, idx) => (
              <button
                key={`top-centers-dot-${idx}`}
                onClick={() => setTopCentersSlide(idx)}
                aria-label={`Go to center slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${idx === topCentersSlide ? "w-7 bg-[#2F5B63]" : "w-2.5 bg-[#C7D1C9]"}`}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base md:text-lg px-8 py-6 rounded-xl"
              onClick={() => navigate("/centers")}
            >
              VIEW ALL CENTERS -&gt;
            </Button>
          </div>
        </section>
        </div>

        <section id="reviews" className="scroll-mt-24 mt-10 md:mt-14 mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
              Hear from our patients about their transformational healing journeys
            </p>
          </div>

          <div className="relative">
            <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="text-primary/20 mb-3 md:mb-4">
                    <Quote className="w-8 h-8 md:w-12 md:h-12" />
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">
                      {patientReviews[currentReview].title}
                    </h3>
                    <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                      "{patientReviews[currentReview].review}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                      {patientReviews[currentReview].name.charAt(0)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base md:text-xl font-semibold text-primary">
                          {patientReviews[currentReview].name}
                        </h4>
                        {patientReviews[currentReview].verified && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                            &#10003; Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                        {patientReviews[currentReview].location} - {patientReviews[currentReview].condition}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                    {Array.from({ length: patientReviews[currentReview].rating }).map((_, idx) => (
                      <Star key={`review-star-${idx}`} className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs md:text-sm font-semibold text-primary">{patientReviews[currentReview].rating}.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-6">
              <button
                onClick={goReviewPrevious}
                className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
              <button
                onClick={goReviewNext}
                className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            {reviewAutoPlay && (
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Auto
              </div>
            )}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {patientReviews.map((_, idx) => (
              <button
                key={`review-dot-${idx}`}
                onClick={() => setCurrentReview(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${idx === currentReview ? "w-7 bg-[#2F5B63]" : "w-2.5 bg-[#C7D1C9]"}`}
              />
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button - matching SOUKYA design */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="bg-[#2F5B63] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
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
        className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
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

          <div className="p-4 pb-4 bg-[#2F5B63] text-white relative overflow-hidden">
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
                className="w-full group relative bg-white hover:bg-[#2F5B63] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl"
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

export default PanchakarmaDetox21Day;
