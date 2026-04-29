import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity, ArrowRight, BedDouble, Calendar, ClipboardCheck, ChevronLeft, ChevronRight,
  Droplet, Globe2, Heart, Leaf, MapPin, Pill, ReceiptIndianRupee, Sparkles, Star, Quote,
  Stethoscope, UserCheck, CircleCheck, CheckCircle2, Phone, AlertTriangle, XCircle,
  Brain, HeartPulse, ShieldCheck, Headset, UtensilsCrossed,
  Search, X, ClipboardList
} from "lucide-react";

const galleryImages = [
  "/program-images/migraine-shirodhara.png",
  "/program-images/migraine-nasya.png",
  "/program-images/migraine-doctor.png",
  "/program-images/migraine-lepa.png",
  "/program-images/migraine-yoga.png",
  "/program-images/migraine-diet.png",
];

const quickSummaryRows = [
  ["Program Name", "Ayurveda Treatment for Migraine & Chronic Headaches"],
  ["Duration", "14 to 21 Days"],
  ["Who It Is For", "Individuals suffering from chronic migraines, tension headaches, and severe aura."],
  ["Key Benefit", "Reduces frequency and severity of migraines, balances nervous system."],
  ["Top Locations", "Kerala, Rishikesh, Goa, Bangalore"],
  ["Average Cost", "$2,500 - $4,500 USD"],
  ["Supervised By", "Senior Ayurvedic Physicians"],
  ["Includes", "Accommodation, meals, daily therapies, internal medicines, consultations"],
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
    title: "Virechana (Purgation Therapy)",
    text: "The gold standard for Migraine. It detoxifies the liver and blood to eliminate aggravated Pitta (heat), the primary driver of vascular inflammation and throbbing pain.",
    icon: Droplet,
  },
  {
    title: "Shirodhara (Nervous System Reset)",
    text: "A continuous flow of warm herbal oil on the forehead. It stabilizes the brain's electrical activity, calms the central nervous system, and reduces sensory sensitivity.",
    icon: Activity,
  },
  {
    title: "Nasya (Nasal Administration)",
    text: "Medicated drops through the nostrils that reach the cranial area directly. It clears neurological channels, relieves sinus pressure, and strengthens the nervous system.",
    icon: Sparkles,
  },
  {
    title: "Basti (Medicated Enema)",
    text: "Therapeutic cleansing that grounds Vata dosha in the gut. This prevents the 'upward' movement of nervous energy that triggers the onset of aura and severe headaches.",
    icon: Heart,
  },
  {
    title: "Vamana (Therapeutic Emesis)",
    text: "Controlled elimination of upper-body toxins. Used for patients where migraines are triggered by chronic gastric congestion, acidity, or metabolic imbalances.",
    icon: Leaf,
  },
  {
    title: "Raktamokshana (Blood Purification)",
    text: "A specialized therapy used for acute, high-intensity vascular migraines. It instantly reduces blood toxicity and pressure within the cranial vessels.",
    icon: Stethoscope,
  },
];

const packages = [
  {
    title: "14-Day Neurological Reset",
    duration: "14 Days / 13 Nights",
    description: "Ideal for patients with moderate migraines seeking significant reduction in frequency and intensity. Focuses on Shirodhara and basic detoxification.",
    cost: "From $1,800 USD",
    features: ["Daily Consultation", "Shirodhara & Nasya", "Ayurvedic Diet", "Basic Herbs"],
  },
  {
    title: "21-Day Comprehensive Healing",
    duration: "21 Days / 20 Nights",
    description: "Recommended for chronic, severe migraines with aura. Includes full systemic detox (Panchakarma) to eliminate deep-seated vascular inflammation.",
    cost: "From $2,800 USD",
    features: ["Deep Detox (Virechana)", "Advanced Shirolepa", "Stress Management Yoga", "Long-term Herb Plan", "Post-care support"],
    isPopular: true,
  },
];

const candidatePoints = [
  "Chronic migraine sufferers (15+ days/month) struggling with daily pain",
  "Tension headache and cluster headache patients seeking non-synthetic relief",
  "Individuals experiencing severe visual aura, light sensitivity, or vestibular migraines",
  "Patients whose migraines are triggered by stress, hormonal cycles, or Pitta (heat) imbalance",
  "People looking to safely reduce or eliminate dependency on synthetic painkillers",
  "Individuals seeking a long-term neurological stabilization protocol through Ayurveda",
];

const avoidPoints = [
  "Pregnant women (due to the intensive nature of detox therapies)",
  "People with active brain tumors or intracranial bleeding",
  "Individuals with severe acute neurological emergencies requiring ICU care",
  "Children under 12 without specific pediatric Ayurvedic guidance",
  "People with unmanaged serious mental health conditions",
];

const weekBreakdown = [
  {
    title: "Week 1 - Purva Karma (Preparation & Pitta Cooling)",
    duration: "Day 1-7",
    focus: "Calming the nervous system and cooling vascular heat",
    description:
      "The first week focuses on preparing the body for deep cleansing. We use cooling herbal applications and gentle oil therapies to reduce the immediate intensity of the migraine and stabilize the nervous system.",
    bullets: ["Shirodhara with cooling oils", "Shirolepa (cooling herbal head pack)", "Abhyanga with Pitta-calming oils", "Pitta-pacifying diet & internal cooling herbs"],
    image: "/program-images/migraine-lepa.png",
  },
  {
    title: "Week 2 - Pradhana Karma (Core Detox & Vascular Cleansing)",
    duration: "Day 8-14",
    focus: "Removing root metabolic toxins (Ama) and Pitta",
    description:
      "This is the core elimination phase. Based on your physician's diagnosis, specialized therapies like Virechana and Nasya are performed to clear the vascular and cranial channels of deep-seated inflammation.",
    bullets: ["Virechana (therapeutic purgation)", "Intensive Nasya therapy", "Shirovasti (medicated oil pooling on head)", "Daily physician monitoring"],
    image: "/program-images/migraine-nasya.png",
  },
  {
    title: "Week 3 - Paschat Karma (Neurological Stabilization & Rejuvenation)",
    duration: "Day 15-21",
    focus: "Strengthening nerves and preventing recurrence",
    description:
      "The final phase focuses on 'Rasayana' or rejuvenation. We stabilize the neurological gains made and provide you with a long-term plan to ensure migraines do not return.",
    bullets: ["Rasayana (rejuvenating) formulations", "Therapeutic Meditation & Yoga for Migraine", "Customized long-term diet plan", "Post-care lifestyle training"],
    image: "/program-images/migraine-yoga.png",
  },
];

const benefits = {
  physical: [
    "Significant reduction in migraine frequency and intensity",
    "Elimination of deep-seated vascular inflammation",
    "Improved digestive fire (Agni) to prevent metabolic triggers",
    "Relief from light and sound sensitivity (Photophobia/Phonophobia)",
    "Reduced dependency on acute pain medications",
  ],
  mental: [
    "Calming of the central nervous system (Prana Vata)",
    "Better sleep quality and reduced insomnia",
    "Enhanced mental clarity and focus after attacks",
    "Reduction in stress and anxiety-related triggers",
    "Improved emotional resilience and neurological stability",
  ],
  longTerm: [
    "Stabilized neurological health and nerve strength",
    "Sustainable lifestyle habits for long-term prevention",
    "Improved overall vitality and energy levels",
    "Reduced systemic heat (Pitta) preventing recurrence",
    "Clearer skin and improved hormonal balance",
  ],
};

const benefitsSectionImages = [
  "/program-images/migraine-shirodhara.png",
  "/program-images/migraine-nasya.png",
  "/program-images/migraine-doctor.png",
  "/program-images/migraine-lepa.png",
  "/program-images/migraine-yoga.png",
  "/program-images/migraine-diet.png",
];

const patientReviews = [
  {
    name: "Gudrun Steinhardt",
    location: "Vienna, Austria",
    condition: "Chronic migraines with aura",
    rating: 5,
    verified: true,
    title: "My Migraine Frequency Has Reduced by Ninety Percent.",
    review: "I had been managing chronic migraines with aura for fifteen years, with my Austrian neurologist having exhausted his preventive options. The Ayurvedic physician in India classified my condition as Ardhavabhedhaka and prescribed a program combining Shirodhara, Shirovasti, and Nasya. The Virechana purgation in week two cleared the excess Pitta driving the inflammation. Three months post-treatment, my episode frequency has reduced from five per month to less than one.",
  },
  {
    name: "Caitlín Doherty",
    location: "Galway, Ireland",
    condition: "Chronic migraines (MIDAS score 42)",
    rating: 5,
    verified: true,
    title: "My First Migraine-Free Week in Three Years.",
    review: "Three years of chronic migraines had compressed my life significantly. My MIDAS disability score was 42 (severely disabling) upon arrival. The Shirodhara session on day four produced a neurological stillness I hadn't felt in years. The Nasya and Virechana protocols addressed the underlying Pitta-Vata imbalance, and my MIDAS score at departure was 11—a reduction my neurologist in Galway described as clinically significant.",
  },
  {
    name: "Marguerite Collet",
    location: "Strasbourg, France",
    condition: "Hormonal migraines",
    rating: 5,
    verified: true,
    title: "My Hormonal Migraines Were Resolved at the Root.",
    review: "My menstrual migraines had been resistant to every prophylactic my French neurologist prescribed. The Ayurvedic physician in India identified the root as Pitta aggravation in the blood. The Virechana purgation cleared the blood toxicity directly, while Shatavari and Ashoka balanced my hormones. For the first time in four years, my menstrual cycle arrived without a migraine.",
  },
  {
    name: "Tijs Van Leeuwen",
    location: "Amsterdam, Netherlands",
    condition: "Vata-Pitta Migraine",
    rating: 5,
    verified: true,
    title: "The Aura Frequency and Attack Severity Have Both Transformed.",
    review: "My migraine with visual aura produced weekly episodes. The physician explained how Vata was producing the aura, while Pitta was amplifying the headache. The Shirovasti therapy addressed the visual imbalance, reducing the aura frequency, while the Nasya treatment addressed the vascular component. Both aspects of my migraine have transformed to a severity I can manage without daily medication.",
  },
  {
    name: "Ingebjørg Halvorsen",
    location: "Trondheim, Norway",
    condition: "MIDAS score 38",
    rating: 5,
    verified: true,
    title: "My MIDAS Score Dropped From 38 to 6 in Just Twenty-One Days.",
    review: "My neurologist used the MIDAS scale to track my condition, which confirmed severe disability. The Ayurvedic program of Shirodhara, Shirolepa (cooling herbal paste), and Nasya targeted my Prana Vata and Sadhaka Pitta simultaneously. The oral formulations addressed the gastric component of my migraine. My MIDAS score at departure was 6 (mild disability)—the lowest it has been in seven years.",
  },
];

const costComparisonRows = [
  {
    program: "21-Day Migraine Treatment Protocol",
    category: "Neurological/Disease Specific",
    cost: "$2,500 - $4,500",
    notes: "Intensive Shirodhara, Virechana & Shirolepa. Full stay included.",
  },
];

const chooseIndiaPoints = [
  {
    title: "Authentic Clinical Lineage",
    text: "Access to 5,000-year-old protocols specifically for 'Ardhavabhedhaka' (Migraine).",
    icon: Stethoscope,
  },
  {
    title: "Global Medical Hub",
    text: "India is the world capital for authentic Ayurveda with certified clinical hospitals.",
    icon: Globe2,
  },
  {
    title: "Healing Climates",
    text: "Therapeutic environments in Kerala and the Himalayas that naturally cool Pitta.",
    icon: Leaf,
  },
  {
    title: "Specialist Physicians",
    text: "Senior doctors with decades of experience in chronic neurological cases.",
    icon: UserCheck,
  },
  {
    title: "Cost-Effective Care",
    text: "Premium medical hospitality at a fraction of European or US costs.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Holistic Ecosystem",
    text: "Full integration of diet, yoga, and meditation for long-term stabilization.",
    icon: Sparkles,
  },
];

const whyChooseUsPoints = [
  {
    title: "Verified Medical Standards",
    description: "Only partner centers with physician-led protocols, safety checks, and treatment quality validation for neurological cases.",
    icon: ShieldCheck,
  },
  {
    title: "International Patient Expertise",
    description: "Dedicated handling for travelers from 40+ countries with clear clinical communication and logistical planning support.",
    icon: Globe2,
  },
  {
    title: "Pre-Travel Doctor Consultation",
    description: "Case pre-screening before booking helps shortlist the right center and personalized clinical treatment pathway.",
    icon: Calendar,
  },
  {
    title: "Complete Journey Support",
    description: "From center selection to arrival coordination, transfers, and clinical check-in flow management.",
    icon: MapPin,
  },
  {
    title: "During-Stay Assistance",
    description: "On-ground guidance through your full protocol for smooth continuity and comfort.",
    icon: Headset,
  },
  {
    title: "Condition-Based Matching",
    description: "Personalized center mapping based on your migraine type, budget, travel style, and recovery priorities.",
    icon: UserCheck,
  },
];

const jumpSections = [
  { id: "overview", title: "Program Overview" },
  { id: "science", title: "Panchakarma Science" },
  { id: "who-is-it-for", title: "Who Is This For?" },
  { id: "week-breakdown", title: "Weekly Breakdown" },
  { id: "benefits", title: "Program Benefits" },
  { id: "cost", title: "Pricing & Plans" },
  { id: "why-india", title: "Why Choose India" },
  { id: "why-us", title: "Why Choose Us" },
  { id: "inclusions", title: "What's Included" },
  { id: "faq", title: "FAQs" },
  { id: "top-centers", title: "Top Centers" },
  { id: "reviews", title: "Patient Reviews" },
];

const inclusionsRows = [
  { label: "Quiet Accommodation", details: "Low-light optimized private rooms or suites designed to support neurological rest for 20 nights", icon: BedDouble },
  { label: "Trigger-Free Meals", details: "Anti-inflammatory, Pitta-pacifying Ayurvedic diet designed to eliminate vascular migraine triggers", icon: UtensilsCrossed },
  { label: "Neurological Reviews", details: "Initial neurological assessment plus regular physician reviews to track trigger reduction", icon: Stethoscope },
  { label: "Migraine Protocols", details: "Intensive Shirodhara, Nasya, Shirovasti, and cooling Shirolepa (herbal head packs)", icon: Activity },
  { label: "Vascular Stabilizers", details: "Internal herbal formulations and medicated oils targeted at neurological and vascular stability", icon: Pill },
  { label: "Sensory Grounding", details: "Guided yoga and pranayama focused on Vagus nerve stimulation and stress-trigger management", icon: Brain },
  { label: "Post-Care Continuity", details: "Personalized guide for managing environmental and dietary triggers after returning home", icon: ClipboardCheck },
];

const topCenters = [
  {
    name: "SOUKYA International Holistic Health Centre",
    city: "Bengaluru, Karnataka, India",
    description: "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm. Exceptional for neurological recovery.",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/centers/bangalore/soukya",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bengaluru, Karnataka, India",
    description: "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/centers/bangalore/ayurvedagram",
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Bengaluru Rural, Karnataka, India",
    description: "A serene retreat focused on authentic Ayurveda and yogic living. The center combines classical therapies with guided yoga and meditation.",
    rating: 4.8,
    reviews: 380,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/centers/bangalore/shathayu",
  },
  {
    name: "Kairali - The Ayurvedic Healing Village",
    city: "Palakkad, Kerala, India",
    description: "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Panchakarma treatments and traditional healing.",
    rating: 4.8,
    reviews: 420,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/centers/kerala/kairali-ayurvedic-healing-village",
  },
  {
    name: "Carnoustie Ayurveda Wellness Resort",
    city: "Mararikulam, Kerala, India",
    description: "A premium beachside center known for authentic Panchakarma care, experienced doctors, and personalized recovery-focused plans.",
    rating: 4.7,
    reviews: 360,
    image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg",
    link: "/centers/kerala/carnoustie-ayurveda-wellness-resort",
  },
  {
    name: "Somatheeram Ayurveda Village Resort",
    city: "Thiruvananthapuram, Kerala, India",
    description: "Widely regarded as the world's first Ayurveda resort, providing classical treatments, yoga, and meditation on a beautiful cliff.",
    rating: 4.7,
    reviews: 510,
    image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
    link: "/centers/kerala/somatheeram",
  },
  {
    name: "AyurSoma Ayurveda Royal Retreat",
    city: "Thiruvananthapuram, Kerala, India",
    description: "Traditional Kerala Ayurveda in a calm retreat format with physician supervision, therapeutic routines, and rejuvenation support.",
    rating: 4.8,
    reviews: 300,
    image: "/Center Images/AyurSoma Ayurveda/Thumb.jpg",
    link: "/centers/kerala/ayursoma",
  },
  {
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kovalam, Kerala, India",
    description: "Cliffside wellness destination offering curated Ayurvedic therapies, restorative routines, and immersive coastal healing experiences.",
    rating: 4.6,
    reviews: 280,
    image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
    link: "/centers/kerala/niraamaya-retreats-surya-samudra",
  },
  {
    name: "Kalari Kovilakom Palace for Ayurveda",
    city: "Palakkad, Kerala, India",
    description: "A globally recognized palace-turned-retreat providing extremely strict, traditional, and authentic Ayurvedic treatments.",
    rating: 4.8,
    reviews: 240,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/centers/kerala/kalari-kovilakom",
  },
];

const faqs = [
  { question: "Can Ayurveda permanently cure migraines?", answer: "Ayurveda focuses on resolving the root metabolic and neurological imbalances (usually Vata and Pitta doshas) that trigger migraines. While we don't use the word 'cure' lightly, most patients experience a drastic, long-term reduction in the frequency and intensity of their migraines, often eliminating the need for daily pain medication." },
  { question: "How long is the recommended treatment program?", answer: "For chronic migraines, a minimum of 14 days is recommended to allow the detox and neurological reset therapies (like Shirodhara) to take full effect. A 21-day program provides the most comprehensive, long-lasting results." },
  { question: "What is Shirodhara and does it hurt?", answer: "Shirodhara involves gently pouring a continuous stream of warm, medicated oil over the forehead (the 'third eye' area). It is completely painless and actually profoundly relaxing. It works directly to soothe the central nervous system and relieve vascular tension." },
  { question: "Is the diet very restrictive during the treatment?", answer: "The diet is an integral part of the medicine. It is typically a plant-based, easy-to-digest Ayurvedic diet customized to cool excess Pitta and ground Vata. While it restricts inflammatory foods like caffeine, alcohol, and processed sugars, it is highly nourishing and delicious." },
  { question: "Can I stop my current migraine medications?", answer: "Do not stop your current medications abruptly. Our Ayurvedic physicians will review your medical history and manage an integrative approach. As your condition improves with the natural therapies, they will guide you on how to safely taper off synthetic medications." },
  { question: "What causes migraines according to Ayurveda?", answer: "Ayurveda classifies migraines primarily as 'Ardhavabhedhaka'. It is typically caused by aggravated Vata dosha pushing Pitta (heat) into the subtle channels of the head and neck, resulting in inflammation, throbbing pain, and sensory sensitivity." },
  { question: "Will I have treatments every day?", answer: "Yes, you will typically receive 1.5 to 2 hours of active therapy daily. This is often split into a morning session (like Abhyanga massage) and an afternoon session (like Nasya or Shirodhara), followed by rest." },
  { question: "Is Nasya (nasal therapy) uncomfortable?", answer: "Nasya involves administering specific herbal oils or juices into the nasal passages. While it may feel slightly unfamiliar or tingly at first, it is highly effective for clearing sinus congestion and reducing pressure headaches. Our practitioners are very gentle." },
  { question: "How much does a 14-day migraine program cost in India?", answer: "Costs vary depending on the luxury level of the center. A 14-day comprehensive program at a premium certified Ayurvedic hospital typically ranges from $1,800 to $2,800 USD, which includes accommodation, customized meals, daily doctor consultations, and all therapies." },
  { question: "Will I get post-treatment support when I return home?", answer: "Yes. Before you leave, your physician will provide a detailed lifestyle, diet, and herbal medicine plan. Most of our partner centers also offer follow-up online consultations to ensure your healing journey continues seamlessly at home." }
];

const MigraineTreatment = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);
  const [benefitsImageIndex, setBenefitsImageIndex] = useState(0);

  const nextReview = () => setCurrentReviewIndex((prev) => (prev + 1) % patientReviews.length);
  const prevReview = () => setCurrentReviewIndex((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);

  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const topCentersTotalSlides = Math.max(1, Math.ceil(topCenters.length / topCentersPerSlide));

  useEffect(() => {
    const updateTopCentersLayout = () => {
      if (window.innerWidth < 768) {
        setTopCentersPerSlide(1);
        return;
      }
      if (window.innerWidth < 1024) {
        setTopCentersPerSlide(2);
        return;
      }
      setTopCentersPerSlide(3);
    };
    updateTopCentersLayout();
    window.addEventListener("resize", updateTopCentersLayout);
    return () => window.removeEventListener("resize", updateTopCentersLayout);
  }, []);

  const visibleTopCenters = topCenters.slice(
    topCentersSlide * topCentersPerSlide,
    topCentersSlide * topCentersPerSlide + topCentersPerSlide
  );

  useEffect(() => {
    setTopCentersSlide((prev) => prev % topCentersTotalSlides);
  }, [topCentersTotalSlides]);

  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);

  const jumpToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsJumpModalOpen(false);
    }
  };

  const toggleCenterDescription = (name: string) => {
    setExpandedCenterName(expandedCenterName === name ? null : name);
  };

  const goBenefitsPrevious = () => setBenefitsImageIndex((prev) => (prev - 1 + benefitsSectionImages.length) % benefitsSectionImages.length);
  const goBenefitsNext = () => setBenefitsImageIndex((prev) => (prev + 1) % benefitsSectionImages.length);

  const benefitsVisibleImages = [
    { src: benefitsSectionImages[benefitsImageIndex], key: `benefit-${benefitsImageIndex}` },
    { src: benefitsSectionImages[(benefitsImageIndex + 1) % benefitsSectionImages.length], key: `benefit-${(benefitsImageIndex + 1) % benefitsSectionImages.length}` },
    { src: benefitsSectionImages[(benefitsImageIndex + 2) % benefitsSectionImages.length], key: `benefit-${(benefitsImageIndex + 2) % benefitsSectionImages.length}` },
    { src: benefitsSectionImages[(benefitsImageIndex + 3) % benefitsSectionImages.length], key: `benefit-${(benefitsImageIndex + 3) % benefitsSectionImages.length}` },
  ];

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % patientReviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Disease Specific Program</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ayurveda Treatment for Migraine in India
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                A specialized clinical protocol designed to address the root neurological and vascular causes of chronic Migraine through authentic Ayurvedic therapies.
              </p>
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

      {/* Gallery Section */}
      <section className="pt-8 md:pt-12 pb-0 bg-background" id="gallery">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="md:col-span-2 lg:col-span-2 h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-[#d8d0ae]/50">
              <img
                src={galleryImages[0]}
                alt="Ayurveda Migraine Treatment India"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {galleryImages.slice(1, 3).map((img, i) => (
                <div key={i} className="h-[142px] md:h-[242px] rounded-3xl overflow-hidden shadow-lg border border-[#d8d0ae]/50">
                  <img
                    src={img}
                    alt={`Migraine Therapy ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {galleryImages.slice(3).map((img, i) => (
              <div
                key={i}
                className={`h-[150px] md:h-[250px] rounded-3xl overflow-hidden shadow-lg border border-[#d8d0ae]/50 ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <img
                  src={img}
                  alt={`Migraine Therapy ${i + 3}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 pt-10 md:pt-16 pb-6 md:pb-10 max-w-6xl space-y-16">
        
        {/* Quick Summary Section */}
        <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">14 to 21 Days</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Migraine, Stress, Aura</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Top Locations</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Kerala, Rishikesh, Goa</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">$2,500 - $4,500</p>
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
                          const Icon = (quickSummaryMobileIcons as any)[row[0]] || ClipboardCheck;
                          return <Icon className="h-4 w-4 text-[#335765]" />;
                        })()}
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

        {/* Program Overview Section */}
        <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-14 md:space-y-16">
          <div className="grid gap-10 md:gap-12">
            <Card className="h-full shadow-sm border-[#d8d0ae]/60">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is the Ayurveda Migraine Treatment Program?</h2>
                <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">
                  This program is a clinical, physician-supervised Ayurvedic protocol specifically engineered to resolve the neurological and vascular imbalances that trigger chronic migraines. It is not a temporary relief session; it is a deep-reaching clinical process that addresses the root cause of the pain by cooling the blood (Pitta) and grounding the nervous system (Vata). The treatment integrates internal herbal formulations, intensive detoxification, and specialized external therapies to provide a life-changing reduction in migraine frequency and intensity.
                </p>
                <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
                  The 14 to 21-day format is designed to allow the body to pass through the essential stages of preparation, detoxification, and neurological stabilization.{" "}
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
        </section>

        {/* Understanding Panchakarma - The Science Behind It */}
        <section id="panchakarma-science" className="scroll-mt-24 !mt-6 md:!mt-10">
          <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-3 text-center">Understanding Panchakarma - The Science of Migraine Relief</h2>
              <p className="text-[#7F543D] leading-relaxed mb-8 text-center max-w-3xl mx-auto font-medium">
                Not all five therapies are given to every patient. Our senior physicians prescribe a personalized combination of these clinical protocols based on your specific migraine triggers and constitution.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {therapies.map((item) => {
                  const titleMatch = item.title.match(/^([^()]+)\s*\(([^)]+)\)$/);
                  const mainTitle = titleMatch ? titleMatch[1].trim() : item.title;
                  const subTitle = titleMatch ? `(${titleMatch[2].trim()})` : "";
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-[#d9cfae] p-5 bg-white hover:shadow-md transition duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-[#335765]" />
                        </div>
                        <h3 className="font-bold text-[#335765] leading-tight text-lg">
                          <span className="block">{mainTitle}</span>
                          {subTitle && <span className="block text-sm text-[#7F543D]/80 font-semibold">{subTitle}</span>}
                        </h3>
                      </div>
                      <p className="text-sm text-[#7F543D] leading-relaxed font-medium">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Week-by-Week Breakdown */}
        <section id="week-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
          <div className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 21-Day Program - Week-by-Week Breakdown</h2>
            <p className="text-[#7F543D] mt-2">Preparation, elimination, and rejuvenation in one coherent physician-led journey.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {weekBreakdown.map((week, idx) => (
              <AccordionItem
                key={week.title}
                value={`week-${idx}`}
                className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-green-500 shadow-sm"
              >
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
                  <div className="text-left">
                    <p className="text-lg font-bold text-[#335765]">{week.title}</p>
                    <p className="text-sm text-[#8C765E]">{week.duration} - {week.focus}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-6">
                  <div>
                    <p className="text-[#7F543D] mb-4 leading-relaxed font-medium">{week.description}</p>
                    <p className="font-semibold text-[#335765] mb-2.5">Key Therapies</p>
                    <ul className="space-y-2.5 text-sm text-[#7F543D]">
                      {week.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 leading-relaxed font-bold text-[#335765]">
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

        <section id="who-is-it-for" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch !mt-6 md:!mt-10">
            <Card className="h-full border-green-300 bg-white shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
                    <CircleCheck className="h-5 w-5 text-green-700" />
                  </span>
                  <h2 className="text-2xl font-bold text-[#335765]">Who Is This Program For?</h2>
                </div>
                <ul className="space-y-3">
                  {candidatePoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed font-medium">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-green-300">
                        <CircleCheck className="h-3.5 w-3.5 text-green-700" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full border-red-200 bg-white shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-100">
                    <AlertTriangle className="h-5 w-5 text-[#335765]" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#335765]">Who Should Avoid This Program</h3>
                </div>
                <ul className="space-y-3">
                  {avoidPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed font-medium">
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

        <section id="benefits" className="scroll-mt-24 !mt-6 md:!mt-10">
          <div className="mb-7 md:mb-8">
            <div className="relative">
              <button
                onClick={goBenefitsPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md"
                aria-label="Previous benefits image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                onClick={goBenefitsNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md"
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
                            alt="Migraine benefits visual"
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
                          alt="Migraine benefits visual"
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
                  className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#335765]" : "w-2.5 bg-[#C7D1C9]"
                    }`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of the Ayurveda Migraine Program</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                    <HeartPulse className="h-5 w-5 text-[#2F5B5D]" />
                  </span>
                  <h3 className="font-bold text-[#335765]">Physical Benefits</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#7F543D] font-medium">
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
                  <h3 className="font-bold text-[#335765]">Mental and Emotional Benefits</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#7F543D] font-medium">
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
                  <h3 className="font-bold text-[#335765]">Long-Term Effects</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#7F543D] font-medium">
                  {benefits.longTerm.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 mb-12 md:mb-16 space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765]">Cost of the Ayurveda Migraine Treatment in India</h2>
            <p className="mt-2 text-[#7F543D]">
              A 21-day clinical program remains the gold standard for achieving long-term neurological stabilization and preventing migraine recurrence.
            </p>
          </div>

          <Card className="border-[#d8d0ae] bg-white shadow-sm rounded-3xl overflow-hidden">
            <CardContent className="p-5 md:p-6 space-y-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">21 Days</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Structured detox, recovery, and neurological reset timeline.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">$2,500 - $4,500</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for reputable clinical centers and full-stay plans.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                      <Sparkles className="h-5 w-5 text-[#335765]" />
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-[#335765]">MOST POPULAR</p>
                  </div>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Clinical migraine protocols with expert physician supervision.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
                  <p className="font-semibold text-[#335765]">Most popular - Migraine Treatment</p>
                  <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
                    Highest demand package
                  </span>
                </div>
                <div className="md:hidden p-3 space-y-2 bg-white">
                  {costComparisonRows.map((row) => (
                    <div key={row.program} className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
                      <p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p>
                      <p className="mt-1 text-sm text-[#7F543D] font-semibold break-words">{row.program}</p>

                      <div className="mt-3 grid grid-cols-1 gap-2">
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Category</p>
                          <p className="text-sm text-[#7F543D] font-semibold">{row.category}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p>
                          <p className="text-sm text-[#7F543D] font-semibold">{row.cost}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p>
                          <p className="text-sm text-[#7F543D] font-semibold break-words">{row.notes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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

        <section id="why-india" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14">
          <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">Why Choose India for Migraine Treatment?</h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {chooseIndiaPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-lg border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          <Icon className="h-4.5 w-4.5 text-[#335765]" />
                        </span>
                        <p className="font-semibold text-[#335765]">{item.title}</p>
                      </div>
                      <p className="text-sm text-[#7F543D] mt-2 font-medium">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          id="why-us"
          className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]"
          style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-3">Why Choose Us for Migraine Recovery</h2>
            <p className="text-[#7F543D] font-medium">
              Not just booking support - we provide medical advocacy and structured guidance from your first consultation to post-program care.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#335765] border border-[#d9cfaa]">Expert-Screened Centers</span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#335765] border border-[#d9cfaa]">International Patient Support</span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#335765] border border-[#d9cfaa]">Medical Concierge Services</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {whyChooseUsPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="bg-white rounded-2xl p-4 border border-[#d7dcca] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F6EF] ring-1 ring-green-200">
                      <Icon className="h-5 w-5 text-[#1E7A4D]" />
                    </span>
                    <p className="text-sm font-bold text-[#335765]">{idx + 1}. {point.title}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[#5C5E52] font-medium">{point.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#335765]">What Is Included in the Migraine Recovery Package?</h2>
            <p className="text-[#7F543D] font-medium">Everything essential for a supervised detox, recovery, and continuity plan.</p>
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
          <Card className="shadow-sm border-[#dfe7e2] rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-3 md:p-0">
              <div className="md:hidden grid gap-2 p-3">
                {inclusionsRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="rounded-xl border border-[#d8d0ae] px-3 py-3 bg-white">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          <Icon className="h-4 w-4 text-[#335765]" />
                        </span>
                        <p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{row.label}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#7F543D] font-semibold break-words">{row.details}</p>
                    </div>
                  )
                })}
              </div>

              <div className="hidden md:block overflow-auto">
                <table className="w-full text-sm min-w-[680px]">
                  <thead className="bg-[#F5F8F6] text-[#335765]">
                    <tr>
                      <th className="text-left p-4 font-bold text-base">Inclusion</th>
                      <th className="text-left p-4 font-bold text-base">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inclusionsRows.map((row) => {
                      const Icon = row.icon;
                      return (
                        <tr key={row.label} className="border-t border-[#f0f0f0]">
                          <td className="p-4 font-bold text-[#335765]">
                            <div className="flex items-center gap-3">
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                                <Icon className="h-4.5 w-4.5 text-[#335765]" />
                              </span>
                              <span>{row.label}</span>
                            </div>
                          </td>
                          <td className="p-4 text-[#7F543D] font-medium text-base">{row.details}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-2xl border border-[#88a7ad] border-l-4 border-l-[#335765] bg-[#E7F0F1] px-4 py-4 md:px-5 md:py-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <CircleCheck className="h-5 w-5 text-[#335765]" />
              </div>
              <div>
                <p className="text-[#214348] font-bold">Important Notice</p>
                <p className="text-sm text-[#335765] leading-relaxed mt-1 font-medium">
                  All treatments and dietary plans are strictly supervised by qualified Ayurvedic doctors. Specific therapies may vary based on your individual medical profile and response to the program.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA moved here */}
        <section className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white mt-12 md:mt-16">
          <div className="grid md:grid-cols-2">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img src="/program-images/migraine-doctor.png" alt="Migraine Ayurveda Consultation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">
                Book Your Migraine Ayurveda Treatment Program in India
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Start your journey towards a migraine-free life. Speak with our medical advisors to customize your healing protocol at India's top Ayurvedic centers.
              </p>
              <div className="space-y-3 max-w-xl">
                <a href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Migraine%20Treatment%20in%20India." target="_blank" rel="noreferrer" className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition">
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button onClick={() => setQuoteModalOpen(true)} className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20">
                  Get Free Consultation Here
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="scroll-mt-24 !mt-12 md:!mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#C68D6A] mx-auto mt-4 rounded-full opacity-60"></div>
          </div>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Top Ayurvedic Centers - EXACT PANCHAKARMA STYLE */}
        <section id="top-centers" className="scroll-mt-24 !mt-10 md:!mt-16 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers for Migraine</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for neurological treatments.</p>
          </div>
          <div className="relative group flex items-center justify-center">
            {/* Navigation Arrows - centered on image for mobile, centered on card for desktop */}
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
              {visibleTopCenters.map((center, idx) => (
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

        {/* Patient Stories & Reviews - EXACT PANCHAKARMA STYLE */}
        <section id="reviews" className="scroll-mt-24 pt-16 pb-16 md:pt-24 md:pb-24 bg-transparent w-full">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
            </div>

            <div className="max-w-4xl mx-auto relative px-0 md:px-0">
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center -translate-x-2 md:-translate-x-6 z-20">
                <button
                  onClick={prevReview}
                  className="bg-white/80 hover:bg-white text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765] active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center translate-x-2 md:translate-x-6 z-20">
                <button
                  onClick={nextReview}
                  className="bg-white/80 hover:bg-white text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765] active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
                <CardContent className="px-8 py-6 md:p-12 relative">
                  <div className="max-w-4xl mx-auto">
                    {/* SVG Quote Icon */}
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    {/* Review Content */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4 leading-tight">
                        {patientReviews[currentReviewIndex].title}
                      </h3>
                      <p className="text-[14px] md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                        "{patientReviews[currentReviewIndex].review}"
                      </p>
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-sm md:text-xl font-bold flex-shrink-0 uppercase">
                        {patientReviews[currentReviewIndex].name.charAt(0)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 overflow-visible">
                          <h4 className="text-sm md:text-xl font-bold text-[#335765] whitespace-nowrap">
                            {patientReviews[currentReviewIndex].name}
                          </h4>
                          {patientReviews[currentReviewIndex].verified && (
                            <span className="bg-green-100 text-green-700 text-[9px] md:text-xs px-1.5 py-0.5 rounded-full font-bold flex-shrink-0 whitespace-nowrap border border-green-200">
                              &#10003; Verified
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] md:text-sm leading-snug" style={{ color: "#7F543D" }}>
                          {patientReviews[currentReviewIndex].location} {patientReviews[currentReviewIndex].condition && `- ${patientReviews[currentReviewIndex].condition}`}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating Rendering */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReviewIndex].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                        ))}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-[#335765]">
                        {patientReviews[currentReviewIndex].rating}.0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dots Navigation Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {patientReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewIndex(idx)}
                    className={`transition-all rounded-full ${currentReviewIndex === idx
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

      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Phone size={18} className="-ml-1" />
        <span className="hidden md:inline">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

      {/* Navigation Modal */}
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
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Program Sections</h2>
              </div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section in this program page."</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">{section.title}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>




    </div>
  );
};

export default MigraineTreatment;
