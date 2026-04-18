import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link, useNavigate } from "react-router-dom";
import { Activity, AlertTriangle, Brain, Calendar, ChevronLeft, ChevronRight, CircleCheck, HeartPulse, Leaf, MapPin, ReceiptIndianRupee, ShieldCheck, Sparkles, Star, XCircle, Droplet, ArrowRight, Search, Phone, X, ClipboardList, BedDouble, UtensilsCrossed, Stethoscope, Pill, ClipboardCheck, CheckCircle2, HelpCircle, Building2 } from "lucide-react";

const galleryImages = [
  "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/1.jpg",
  "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/2.jpg",
  "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/3.webp",
  "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/4.jpg",
  "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/5.png",
  "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/6.webp",
];

const quickSummaryRows = [
  ["Program Name", "21-Day Anti-Aging Ayurveda Rejuvenation Program"],
  ["Duration", "21 Days / 20 Nights"],
  ["Who It Is For", "Adults seeking vitality, graceful aging, and preventive wellness"],
  ["Key Benefit", "Cellular rejuvenation, stress reset, skin vitality, and metabolic balance"],
  ["Top Locations", "Kerala, Goa, Bangalore"],
  ["Average Cost", "$2,500 - $4,500 USD"],
  ["Supervised By", "Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"],
  ["Includes", "Accommodation, meals, therapies, consultations, and medicines"],
];

const antiAgingTherapies = [
  {
    title: "Abhyanga (Rejuvenating Oil Massage)",
    text: "Daily full-body massage with Rasayana oils to reduce dryness, support elasticity, improve circulation, and nourish deeper tissues.",
    icon: HeartPulse,
  },
  {
    title: "Shirodhara (Forehead Oil Flow Therapy)",
    text: "A continuous warm oil stream over the forehead to calm the nervous system, improve sleep quality, reduce stress load, and support mental clarity.",
    icon: Brain,
  },
  {
    title: "Pizhichil (Royal Oil Bath Therapy)",
    text: "Continuous warm medicated oil flow with synchronized massage to nourish tissues, reduce Vata-driven degeneration, and restore vitality.",
    icon: Droplet,
  },
  {
    title: "Navarakizhi (Medicated Rice Pouch Therapy)",
    text: "Warm herbal rice bolus therapy used to improve tissue density, muscle tone, skin quality, and overall physical rejuvenation.",
    icon: Leaf,
  },
  {
    title: "Shiroabhyanga and Nasya",
    text: "Head massage plus nasal oil therapy to nourish sensory channels, support cognitive function, and improve mind-body balance.",
    icon: Activity,
  },
  {
    title: "Mukhalepam (Ayurvedic Facial Rejuvenation)",
    text: "Fresh herbal facial applications to improve skin texture, glow, tone evenness, and visible anti-aging outcomes.",
    icon: Sparkles,
  },
];

const candidatePoints = [
  "Adults (approximately 38-70) noticing visible and energetic signs of aging",
  "People with low energy, poor recovery, or reduced mental sharpness",
  "Skin concerns such as dryness, fine lines, dullness, and loss of elasticity",
  "Chronic stress load and sleep disruption accelerating perceived aging",
  "Wellness travellers seeking medically supervised rejuvenation, not just spa relaxation",
  "Preventive health investors focused on long-term vitality and graceful aging",
];

const avoidPoints = [
  "Very high toxic load may require complete Panchakarma detox first",
  "Pregnant women (only modified protocols if physician-approved)",
  "Patients with active fever or acute infection during travel period",
  "Individuals with severe psychiatric conditions needing ongoing clinical supervision",
];

const weekBreakdown = [
  {
    title: "Week 1 - Purification and Preparation",
    duration: "Day 1-7",
    focus: "Detox foundation before deep rejuvenation",
    description:
      "Daily Abhyanga, Swedana, guided anti-inflammatory diet, and physician-led cleansing support to prepare tissues for Rasayana absorption.",
    bullets: ["Abhyanga and steam", "Digestive reset", "Personalized diet", "Initial herbal support"],
  },
  {
    title: "Week 2 - Core Rasayana Rejuvenation",
    duration: "Day 8-14",
    focus: "Cellular nourishment and visible renewal",
    description:
      "Structured Pizhichil, Shirodhara, Navarakizhi, and anti-aging herbal medicines are used to improve skin vitality, reduce stress load, and rebuild tissue quality.",
    bullets: ["Pizhichil and Navarakizhi", "Daily Shirodhara", "Rasayana medicines", "Sleep and stress restoration"],
  },
  {
    title: "Week 3 - Ojas Building and Integration",
    duration: "Day 15-21",
    focus: "Long-term vitality and continuity planning",
    description:
      "Final phase strengthens Ojas with restorative therapies, yoga, meditation, and a physician-made home protocol for sustained anti-aging outcomes.",
    bullets: ["Ojas-focused therapies", "Yoga and pranayama", "Home-care protocol", "Long-term lifestyle plan"],
  },
];

const benefits = {
  physical: [
    "Improved skin glow, elasticity, and hydration from inside-out nourishment",
    "Better muscle tone and reduced body heaviness",
    "Reduced joint stiffness and Vata-related dryness",
    "Improved metabolic rhythm and digestive fire",
    "Healthier hair quality and scalp nourishment",
    "Visible vitality with better daily stamina",
  ],
  mental: [
    "Lower stress load and improved emotional calm",
    "Deeper sleep quality and better recovery",
    "Improved concentration and memory support",
    "Reduced irritability from nervous system reset",
    "More stable mood and mental resilience",
    "Higher mind-body awareness for sustainable habits",
  ],
  longTerm: [
    "Benefits can continue for months with compliance",
    "Improved immune resilience through Ojas restoration",
    "Lower relapse into fatigue and burnout patterns",
    "Sustainable lifestyle upgrades post-program",
    "Better hormonal and stress adaptation over time",
    "Long-term graceful-aging support beyond cosmetic outcomes",
  ],
};

const costComparisonRows = [
  {
    program: "21-Day Anti-Aging Ayurveda Program",
    category: "Rasayana Rejuvenation",
    cost: "$2,500 - $4,500",
    notes: "Most popular, long stay, full package",
  },
];

const chooseIndiaPoints = [
  {
    title: "The Original Science of Cellular Rejuvenation",
    text: "Rasayana is not inspired by anti-aging science — it predates modern anti-aging science by five millennia. The Charaka Samhita documents specific Rasayana protocols that modern research is now confirming possess genuine antioxidant and cellular regeneration properties.",
    icon: Sparkles,
  },
  {
    title: "Medicines You Cannot Get Anywhere Else",
    text: "Freshly prepared Rasayana formulations require specific medicinal plants, precise preparation methods, and the knowledge of lineage-trained pharmacists. This combination exists authentically only in India.",
    icon: Leaf,
  },
  {
    title: "A Complete Luxury Experience With Clinical Depth",
    text: "India's finest Ayurvedic resorts combine genuine medical treatment with architecture, cuisine, natural settings, and service levels that rival the best wellness destinations anywhere in the world.",
    icon: HeartPulse,
  },
  {
    title: "Extraordinary Value",
    text: "A medically supervised 21-day anti-aging Rasayana program at one of India's best luxury resorts costs a fraction of a comparable program at a Swiss or Austrian medical wellness facility.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "The Healing Environment Is Part of the Program",
    text: "Kerala's lush forests, clean coastal air, warm humidity, and the presence of the medicinal plants used in your treatment growing in the surrounding landscape support the healing in profound ways.",
    icon: MapPin,
  },
  {
    title: "Highly Specialized Physicians",
    text: "Unlike standard wellness spas, India's leading centers employ doctors specifically trained in Rasayana Chikitsa, ensuring your age-reversal protocol is guided by genuine clinical expertise.",
    icon: ShieldCheck,
  },
];

const whyChooseUsPoints = [
  {
    title: "Premium Center Access",
    description: "Every partner center is personally assessed for physician expertise in Rasayana, treatment authenticity, accommodation quality, and international guest standards.",
    icon: ShieldCheck,
  },
  {
    title: "Free Personalised Pre-Travel Consultation",
    description: "Speak with a Rasayana specialist physician before booking to design a program matched to your specific aging concerns and constitution.",
    icon: Brain,
  },
  {
    title: "40+ Countries Served",
    description: "We have curated Ayurveda journeys for wellness travellers from the UK, USA, Germany, Switzerland, Australia, UAE, and beyond.",
    icon: MapPin,
  },
  {
    title: "Complete Luxury Trip Management",
    description: "From business class airport transfers to preferred room selection and pre-arrival program briefings — every detail is handled.",
    icon: Activity,
  },
  {
    title: "Bespoke Program Design",
    description: "For guests seeking an entirely personalised experience, we work with our physicians to design a program built specifically around your health history and rejuvenation goals.",
    icon: Star,
  },
  {
    title: "Post-Program Continuity Care",
    description: "Our commitment doesn't end when you fly home. We help arrange follow-up consultations and ensure your prescribed Rasayana medicines are available to sustain your results.",
    icon: Calendar,
  },
];

const inclusionsRows = [
  { label: "Accommodation", details: "Private luxury room, suite, or villa (as per package) for 20 nights", icon: BedDouble },
  { label: "Meals", details: "Three daily Ojas-building, Rasayana-supporting meals — seasonal, organic, freshly prepared", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial assessment plus daily physician interaction and treatment review", icon: Stethoscope },
  { label: "Daily Therapies", details: "Abhyanga, Pizhichil, Navarakizhi, Shirodhara, Nasya, Mukhalepam — as prescribed", icon: Activity },
  { label: "Rasayana Medicines", details: "Freshly prepared and classical formulations — all included", icon: Pill },
  { label: "Yoga & Meditation", details: "Daily sessions — Yoga Nidra, pranayama, and guided meditation", icon: Brain },
  { label: "Post-Program Protocol", details: "Personalised longevity plan — herbal medicine supply, diet guidelines, daily routine", icon: ClipboardCheck },
];

const topAyurvedicCenters = [
  {
    name: "SOUKYA International Holistic Health Centre",
    city: "Bengaluru, Karnataka, India",
    description: "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm. The center offers a holistic approach to wellness with personalized treatments guided by experienced practitioners in a serene environment.",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/centers/bangalore/soukya",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bengaluru, Karnataka, India",
    description: "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village, the center provides personalized therapies guided by experienced Vaidyas and supported by yoga, mindful routines, and sattvic nutrition.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/centers/bangalore/ayurvedagram",
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Bengaluru Rural, Karnataka, India",
    description: "A serene retreat focused on authentic Ayurveda and yogic living. The center combines classical therapies with guided yoga, meditation, and lifestyle coaching to support detoxification, resilience, and sustainable health improvement.",
    rating: 4.8,
    reviews: 380,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/centers/udupi/shathayu-ayurveda-yoga-retreat",
  },
  {
    name: "Kairali - The Ayurvedic Healing Village",
    city: "Palakkad, Kerala, India",
    description: "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Panchakarma treatments and traditional healing in a serene, nature-focused environment.",
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
    description: "Widely regarded as the world's first Ayurveda resort, providing classical treatments, yoga, and meditation on a beautiful cliff overlooking the Arabian Sea.",
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
    description: "A globally recognized palace-turned-retreat providing extremely strict, traditional, and authentic Ayurvedic treatments in a deeply spiritual setting.",
    rating: 4.8,
    reviews: 240,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/centers/kerala/kalari-kovilakom",
  },
];

const faqItems = [
  {
    question: "What makes this program different from an Ayurvedic spa experience?",
    answer: "Everything. An Ayurvedic spa offers relaxation treatments inspired by Ayurvedic principles. This program is a medically supervised Rasayana Chikitsa — a clinical system of cellular rejuvenation prescribed and monitored by qualified physicians (BAMS / MD Ayurveda), using freshly prepared classical herbal medicines, and following treatment protocols documented in Ayurveda's original texts. The depth of physiological change it produces is categorically different from a spa experience, however luxurious.",
  },
  {
    question: "Will I actually see visible anti-aging results?",
    answer: "Yes — and they will be visible to others, not just to you. Improved skin quality, luminosity, and elasticity are among the most consistently reported visible outcomes of the program. By the end of 21 days, most patients look noticeably well-rested, their skin has improved in texture and glow, and the physical vitality they carry is apparent. These visible changes reflect genuine cellular renewal occurring beneath the surface.",
  },
  {
    question: "How is this different from anti-aging treatments available in my home country?",
    answer: "Anti-aging treatments in Western countries primarily work on the surface — injectables, laser treatments, topical products — or focus on a single biological mechanism. The Rasayana program works systemically, addressing the metabolic, hormonal, neurological, and cellular dimensions of aging simultaneously. It also nourishes and rebuilds rather than simply targeting wrinkles or volume loss. The results are visible but the process is fundamentally different — and for many patients, far more satisfying.",
  },
  {
    question: "I am in my 50s going through menopause. Is this program appropriate for me?",
    answer: "This program is exceptionally well-suited for women in perimenopause and menopause. Rasayana therapy — particularly formulations containing Shatavari, Ashwagandha, and Amalaki — directly supports hormonal balance, reduces hot flushes, improves sleep, restores skin hydration and elasticity, and addresses the fatigue and cognitive changes that many women experience during this transition. Many of our international guests specifically choose this timing.",
  },
  {
    question: "How much does the 21-day anti-aging program cost in India?",
    answer: "Costs range from approximately $3,500 to $8,500 USD at premium and luxury centers, with ultra-luxury private villa programs available from $10,000–$15,000+. All-inclusive pricing covers accommodation, all meals, daily therapies, herbal medicines, and physician consultations. Compared to the cumulative cost of Western anti-aging procedures — injectables, lasers, supplements — over a 12-month period, this represents extraordinary value alongside far more profound results.",
  },
  {
    question: "How long do the results last?",
    answer: "The cellular changes initiated during the 21-day program continue developing for 8–12 weeks after you return home. With the personalised post-program protocol — herbal medicines, diet, and daily practices — many patients sustain and even build upon their results for years. Annual or biannual programs are recommended for sustained anti-aging benefit and are the approach taken by most of our returning international guests.",
  },
  {
    question: "Can my partner join me for this program?",
    answer: "Absolutely — and we would encourage it. Couples programs are available at most of our luxury partner centers, allowing two people to share the experience while each receiving entirely personalised medical treatment and therapies. Many couples describe the 21-day program as one of the most transformative shared experiences of their lives.",
  },
  {
    question: "Do I need any prior knowledge of Ayurveda?",
    answer: "None at all. Many of our most enthusiastic guests arrived knowing very little about Ayurveda and left deeply committed to it as a lifelong practice. Your physician and wellness coordinator will guide you through everything — the philosophy, the therapies, the diet, and the lifestyle recommendations — in a way that is clear, accessible, and genuinely fascinating.",
  },
  {
    question: "What is Ojas, and why does building it matter?",
    answer: "Ojas is Ayurveda's concept of the refined vital essence — the product of perfect digestion and complete tissue nourishment. It is the physical substrate of immunity, vitality, emotional resilience, skin luminosity, and the quality of presence that we associate with a truly healthy person. As we age, stress, poor diet, and toxic accumulation deplete Ojas — which is why we lose the vitality and radiance of youth. Building Ojas through Rasayana therapy is the most fundamental thing you can do to restore youthful vitality — and it is simply not available through any other system of medicine.",
  },
  {
    question: "How do I start?",
    answer: "The first step is a free, no-obligation consultation with our Ayurveda wellness team. Share your age, your primary concerns — skin, energy, sleep, hormonal changes, cognitive vitality — your preferred location, and your travel timing. We will match you with the right center, connect you with a specialist physician for a pre-travel consultation, and handle every detail of your journey from that point.",
  },
];

const patientReviews = [
  {
    name: "Sophia Carmichael",
    location: "London, United Kingdom",
    condition: "Hormonal imbalance",
    title: "This Programme Doesn't Pamper You; It Heals You at a Cellular Level.",
    review: "I booked the 21-Day Anti-Aging program after years of hormonal imbalance. The Vaidya's consultation was incredibly thorough, identifying a deep Vata-Pitta disruption. The daily Abhyanga and Nasya therapy began visibly shifting my skin texture by week two. By day 21, the fine lines had softened, my sleep was deep and uninterrupted, and my energy felt genuinely restored, not masked.",
    rating: 5,
    verified: true,
  },
  {
    name: "Rafael Hoffmann",
    location: "Zürich, Switzerland",
    condition: "Systemic inflammation",
    title: "This Achieved in 21 Days What Supplements Couldn't in Three Years.",
    review: "As an integrative medicine physician, I approached this program with clinical skepticism. That dissolved by day ten. The sequential Virechana and Basti therapies cleared the systemic inflammation I had been managing with nutraceuticals for years. My joint mobility improved measurably, and the mental fog I had normalized as ageing simply lifted.",
    rating: 5,
    verified: true,
  },
  {
    name: "Naomi Laurent",
    location: "Paris, France",
    condition: "Exhaustion",
    title: "I Left With a Completely New Relationship With My Body.",
    review: "After two decades in fashion, stress and irregular eating had left me exhausted. The 21-Day program addressed everything simultaneously. The Shirodhara sessions calmed my overactive nervous system in a way no spa treatment ever had. By week three, my skin had a luminosity that my own aesthetician in Paris immediately noticed. The Vaidya's knowledge is encyclopedic.",
    rating: 5,
    verified: true,
  },
  {
    name: "James Whitmore",
    location: "Sydney, Australia",
    condition: "Fatigue & slow metabolism",
    title: "The Most Intelligent Investment I Have Made in My Health.",
    review: "At 58, I had accepted that fatigue and a slowing metabolism were just part of ageing. The 21-Day Anti-Aging Panchakarma dismantled that belief entirely. The combination of Kati Basti for my spine and Udvartana massage for metabolic stimulation produced results I did not anticipate. My morning stiffness disappeared by day fourteen, and I lost 4.2 kg of accumulated metabolic waste.",
    rating: 5,
    verified: true,
  },
  {
    name: "Elena Vasquez",
    location: "Madrid, Spain",
    condition: "Perimenopause",
    title: "Ayurveda Gave Me Back the Version of Myself I Thought Was Gone Forever.",
    review: "Perimenopause had accelerated visible ageing in a way no luxury skincare could address. This 21-Day program was the finest health decision of my life. The treatment, centered on Uttara Basti and Shatavari-based Rasayana therapies, rebalanced my endocrine system from within. By week two, my hot flashes had reduced by nearly half. This doesn't promise youth; it restores vitality, which is far more valuable.",
    rating: 5,
    verified: true,
  },
  {
    name: "Haruto Nakamura",
    location: "Tokyo, Japan",
    condition: "Sleep issues & aging",
    title: "The Science Behind the Tradition is What Convinced Me.",
    review: "The cumulative toll of extensive work travel had aged me visibly. The 21-Day Longevity program was structured with the precision I needed. The daily Njavara Kizhi rice bolus therapy rebuilt my tissue strength and skin tone. The Vaidya's clinical attentiveness, adjusting my herbs mid-program, set the experience apart. My sleep architecture normalized for the first time in six years.",
    rating: 5,
    verified: true,
  },
  {
    name: "Isabelle Moreau",
    location: "Montreal, Canada",
    condition: "Inflammatory skin condition",
    title: "Nothing I Have Spent on Wellness Has Come Close to These 21 Days.",
    review: "I have done silent retreats, cryotherapy, and IV drip programs. This 21-Day Anti-Aging Ayurveda program surpassed all of them—not because it was luxurious, but because it was genuinely curative. My Pitta-dominant constitution had driven years of inflammatory skin conditions. The Takradhara and cooling herbal compresses began reducing my rosacea within ten days.",
    rating: 5,
    verified: true,
  },
  {
    name: "David Okonkwo",
    location: "Lagos, Nigeria",
    condition: "Deep depletion",
    title: "I Arrived Exhausted at 52. I Left Feeling—and Looking—42.",
    review: "Years of high-pressure executive travel had left my body in a state of deep depletion. The Pizhichil—warm medicated oil poured continuously over the body—is the most profoundly therapeutic experience I have encountered globally. My blood pressure stabilized within the first week, and my annual physical confirmed my biological age had genuinely shifted.",
    rating: 5,
    verified: true,
  },
  {
    name: "Astrid Lindqvist",
    location: "Stockholm, Sweden",
    condition: "Adrenal fatigue",
    title: "My Body Finally Got the Deep Rest It Had Demanded for a Decade.",
    review: "I enrolled in the 21-Day program following a diagnosis of adrenal fatigue. The Vaidya's methodical approach was brilliant; the first week focused entirely on calming my nervous system before any active detox began. The Shirodhara with warm Brahmi oil and Pada Abhyanga foot therapy rebuilt my parasympathetic function safely. By week three, the persistent brain fog had fully cleared.",
    rating: 5,
    verified: true,
  },
  {
    name: "Catherine Bouchard",
    location: "Geneva, Switzerland",
    condition: "Structural aging",
    title: "This Programme Redefined What Ageing Well Actually Means.",
    review: "I was not prepared to feel structurally younger. The 21-Day Cellular Rejuvenation program began with a comprehensive pulse assessment that identified imbalances no Western diagnostic had ever surfaced. The Vaidya prescribed Ksheerabala oil treatments and an Ojas-building protocol. My posture improved, my digestion became effortless, and even my thinning hair showed new growth by day 21.",
    rating: 5,
    verified: true,
  },
];

const AntiAgingAyurvedaProgramIndia = () => {
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
  const [reviewAutoPlay, setReviewAutoPlay] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

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
    const updateBenefitsVisibleCards = () => {
      if (window.innerWidth < 768) setBenefitsVisibleCards(1);
      else if (window.innerWidth < 1024) setBenefitsVisibleCards(2);
      else setBenefitsVisibleCards(4);
    };
    updateBenefitsVisibleCards();
    window.addEventListener("resize", updateBenefitsVisibleCards);
    return () => window.removeEventListener("resize", updateBenefitsVisibleCards);
  }, []);

  const totalBenefitSlides = Math.max(1, galleryImages.length - benefitsVisibleCards + 1);
  const goBenefitsPrevious = () => setBenefitsImageIndex((prev) => (prev - 1 + totalBenefitSlides) % totalBenefitSlides);
  const goBenefitsNext = () => setBenefitsImageIndex((prev) => (prev + 1) % totalBenefitSlides);

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  const visibleTopCenters = topAyurvedicCenters.slice(
    topCentersSlide * topCentersPerSlide,
    topCentersSlide * topCentersPerSlide + topCentersPerSlide
  );

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

  const benefitsVisibleImages = Array.from({ length: benefitsVisibleCards }, (_, idx) => {
    const imageIndex = (benefitsImageIndex + idx) % galleryImages.length;
    return {
      src: galleryImages[imageIndex],
      key: `${galleryImages[imageIndex]}-${benefitsImageIndex}-${idx}`,
    };
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">
                Lifestyle & Wellness
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Anti-Aging Ayurveda Program in India
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                21-day physician-led cellular rejuvenation and graceful aging support.
              </p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>Kerala, Goa, Bangalore</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.8/5 Average Rating</span>
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

      <main className="container mx-auto px-4 pt-6 pb-10 md:pt-8 md:pb-14 max-w-6xl space-y-12 md:space-y-14">
        <section id="gallery" className="scroll-mt-24">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Ayurvedic Treatment and Program Gallery</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Anti-aging Ayurveda program" className="w-full h-[260px] md:h-[460px] object-cover" />
            <button
              onClick={() => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setSelectedImage((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">21 Days / 20 Nights</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Healthy Aging, Rejuvenation</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Top Locations</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Kerala, Goa, Bangalore</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">$2,500 - $4,500</p>
                </div>
              </div>

              <div className="hidden md:block overflow-auto">
                <table className="w-full text-sm min-w-[680px]">
                  <tbody>
                    {quickSummaryRows.map((row, idx) => (
                      <tr key={row[0]} className={`border-t ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}>
                        <td className="p-3 font-semibold text-[#335765]">{row[0]}</td>
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
                <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is the 21-Day Anti-Aging Ayurveda Program?</h2>
                <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">
                  This is a physician-supervised cellular rejuvenation protocol rooted in Rasayana Chikitsa. It is not a spa-only format; it combines purification, tissue nourishment, herbal medicines, restorative therapies, and lifestyle correction to support visible and biological anti-aging outcomes.
                </p>
                <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
                  The 21-day structure is clinically essential because rejuvenation therapies work best after purification. It allows preparation, deep rejuvenation, and Ojas-building integration in one complete cycle. <button type="button" onClick={() => setQuoteModalOpen(true)} className="font-bold underline text-[#7F543D] hover:text-orange-500 transition-colors uppercase decoration-2 underline-offset-4">CONTACT</button> Svastha Global to connect with the best of authentic Ayurveda in India.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#335765] mb-3 text-center">Understanding Anti-Aging Ayurveda - The Science Behind It</h2>
              <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Aging accelerates when Agni weakens, Ama accumulates, Ojas depletes, and Vata rises. Rasayana protocols are designed to reverse this internal pattern through purification and deep nourishment.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {antiAgingTherapies.map((item) => {
                  const titleMatch = item.title.match(/^([^()]+)\s*\(([^)]+)\)$/);
                  const mainTitle = titleMatch ? titleMatch[1].trim() : item.title;
                  const subTitle = titleMatch ? `(${titleMatch[2].trim()})` : "";
                  return (
                    <div key={item.title} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0">
                          <item.icon className="h-5 w-5 text-[#2F5B5D]" />
                        </div>
                        <h3 className="font-semibold text-[#335765] leading-snug">
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

          <div className="grid lg:grid-cols-2 gap-8 items-stretch !mt-6 md:!mt-10">
            <Card className="h-full border-green-300 bg-white shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
                    <CircleCheck className="h-5 w-5 text-green-700" />
                  </span>
                  <h2 className="text-2xl font-bold text-[#335765]">Who Is This Program For?</h2>
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
                    <AlertTriangle className="h-5 w-5 text-[#335765]" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#335765]">Who Should Avoid This Program</h3>
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

          <Card className="!mt-5 md:!mt-8 border-[#d8d0ae] bg-[#EDE8D0]">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 21-Day Program - Week-by-Week Breakdown</h2>
                <p className="text-[#7F543D] mt-2">Preparation, rejuvenation, and integration in one physician-led journey.</p>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {weekBreakdown.map((week, idx) => (
                  <AccordionItem key={week.title} value={`week-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden">
                    <AccordionTrigger className="text-left hover:no-underline py-5 [&>svg]:text-orange-500 [&>svg]:h-5 [&>svg]:w-5">
                      <div className="space-y-1 text-left">
                        <h3 className="text-xl font-bold text-[#335765]">{week.title}</h3>
                        <p className="text-[#7F543D] text-base">{week.duration} - {week.focus}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <p className="text-[#7F543D] leading-relaxed mb-4">{week.description}</p>
                      <ul className="space-y-2">
                        {week.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-[#7F543D]">
                            <CircleCheck className="h-4 w-4 mt-0.5 text-[#2F5B5D] shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

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
                      {galleryImages.map((image, idx) => (
                        <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                          <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                            <img
                              src={image}
                              alt="Anti-Aging benefits visual"
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
                            alt="Anti-Aging benefits visual"
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
                {Array.from({ length: totalBenefitSlides }).map((_, idx) => (
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

            <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of the 21-Day Anti-Aging Ayurveda Program</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                      <HeartPulse className="h-5 w-5 text-[#2F5B5D]" />
                    </span>
                    <h3 className="font-bold text-[#335765]">Physical Benefits</h3>
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
                    <h3 className="font-bold text-[#335765]">Mental and Emotional Benefits</h3>
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
                    <h3 className="font-bold text-[#335765]">Long-Term Effects</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#7F543D]">
                    {benefits.longTerm.map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 mb-12 md:mb-16 space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#335765]">Cost of the 21-Day Anti-Aging Ayurveda Program in India</h2>
              <p className="mt-2 text-[#7F543D]">
                Most guests choose this range for complete rejuvenation under physician supervision.
              </p>
            </div>

            <Card className="border-[#d8d0ae] bg-white shadow-sm">
              <CardContent className="p-5 md:p-6 space-y-5">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
                    <p className="mt-2 text-2xl font-bold text-[#335765]">21 Days</p>
                    <p className="mt-1 text-sm text-[#6F6B5C]">Structured rejuvenation timeline.</p>
                  </div>
                  <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
                    <p className="mt-2 text-2xl font-bold text-[#335765]">$2,500 - $4,500</p>
                    <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for full-stay plans.</p>
                  </div>
                  <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                        <Sparkles className="h-5 w-5 text-[#335765]" />
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-[#335765]">MOST POPULAR</p>
                    </div>
                    <p className="mt-1 text-sm text-[#6F6B5C]">Anti-aging and vitality-focused recovery with accommodation and therapies.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
                    <p className="font-semibold text-[#335765]">Most popular - Anti-Aging Rejuvenation </p>
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
            <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
              <CardContent className="p-6 md:p-8 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">Why Choose India for Anti-Aging Treatment?</h2>
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
            className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]"
            style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#335765] mb-3">Why Choose Us for Anti-Aging Treatment</h2>
              <p className="text-[#7F543D]">
                Not just booking support - structured guidance from pre-consultation to post-program continuity.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">Doctor-Screened Centers</span>
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">40+ Countries Supported</span>
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">End-to-End Assistance</span>
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
                    <p className="text-sm leading-relaxed text-[#5C5E52]">{point.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-[#335765]">What Is Included in the 21-Day Package?</h2>
              <p className="text-[#7F543D]">Everything essential for a supervised Rasayana rejuvenation program.</p>
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
                                  <Icon className="h-4 w-4 text-[#335765]" />
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
            <div className="rounded-xl border border-[#88a7ad] border-l-4 border-l-[#335765] bg-[#E7F0F1] px-4 py-4 md:px-5 md:py-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <CircleCheck className="h-5 w-5 text-[#335765]" />
                </div>
                <div>
                  <p className="text-[#214348] font-bold">Important Notice</p>
                  <p className="text-sm text-[#335765] leading-relaxed mt-1">
                    All treatments and dietary plans are strictly supervised by qualified Ayurvedic doctors. Specific therapies may vary based on your individual medical profile and response to the program.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="consultation" className="scroll-mt-24 !mt-6 md:!mt-10 overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
                <img
                  src="/Program Images/21-day-detox.png"
                  alt="21-day Anti-Aging consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
              </div>
              <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
                <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your 21-Day Anti-Aging Program</h2>
                <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                  Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your cellular rejuvenation.
                </p>
                <div className="space-y-3 mt-4 max-w-xl">
                  <a
                    href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%2021-day%20Anti-Aging%20program."
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

          <section id="faq" className="scroll-mt-24 !mt-8 md:!mt-14">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
              {faqItems.map((item, idx) => (
                <AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section id="top-centers" className="scroll-mt-24 !mt-10 md:!mt-16 space-y-8">
            <div className="text-center space-y-2 md:space-y-3 px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
              <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for Rasayana programs.</p>
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
        </section>
      </main>

      <section id="reviews" className="scroll-mt-24 pt-8 pb-8 md:pt-10 md:pb-12 bg-transparent w-full">
        <div className="container mx-auto px-4 max-w-6xl text-left">
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
          </div>

          <div className="max-w-4xl mx-auto relative px-0 md:px-0">
            {/* Navigation Arrows */}
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
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base md:text-xl font-semibold text-[#335765]">
                          {patientReviews[currentReview].name}
                        </h4>
                        {patientReviews[currentReview].verified && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
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
                  onClick={() => {
                    setCurrentReview(idx);
                    setReviewAutoPlay(false);
                  }}
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

export default AntiAgingAyurvedaProgramIndia;
