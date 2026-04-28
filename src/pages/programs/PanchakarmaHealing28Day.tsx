import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
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
  "/Program Images/28-day-healing-shirodhara.png",
  "/Program Images/28-day-healing-abhyanga.png",
  "/Program Images/28-day-healing-rasayana.png",
  "/Program Images/28-day-healing-yoga.png",
  "/Program Images/28-day-healing-pizhichil.png",
];

const packages = [
  {
    name: "28-Day Panchakarma Healing and Rejuvenation Program",
    summary: {
      duration: "28 Days / 27 Nights",
      idealFor: "Chronic Healing, Rasayana, Restoration",
      locations: "Kerala, Rishikesh, Goa",
      cost: "$3,500 – $6,000",
    },
    rows: [
      ["Program Name", "28-Day Panchakarma Healing and Rejuvenation Program"],
      ["Duration", "28 Days / 27 Nights"],
      ["Who It Is For", "Adults with chronic conditions, autoimmune disorders, or seeking complete physiological restoration"],
      ["Key Benefit", "Root-cause healing, chronic disease recovery, deep Rasayana nourishment, long-lasting restoration"],
      ["Top Locations", "Kerala, Rishikesh, Mysore"],
      ["Average Cost", "$3,500 – $6,000 USD"],
      ["Supervised By", "Senior Ayurvedic Physicians (Vaidyas) with chronic care specialization"],
      ["Includes", "Accommodation, three Ayurvedic meals, all therapies, medicines, doctor consultations, Rasayana care"],
    ],
    costDetails: {
      length: "28 Days",
      budget: "$3,500 - $6,000",
      description: "Structured detox, recovery, and rejuvenation timeline.",
      budgetNote: "Most popular range for reputable centers and full-stay plans.",
      popularTag: "MOST POPULAR",
      popularDesc: "Panchakarma and disease-focused recovery with accommodation and therapies.",
      rows: [
        ["Program", "28-Day Panchakarma Healing", "Deep Detox", "$3,500 - $6,000", "Maximum restoration"],
      ],
    },
    inclusionDetails: {
      duration: "28 Days",
      stay: "27 Nights",
      care: "Doctor-Supervised",
      rows: [
        { label: "Accommodation", details: "Choice of room categories in authentic Ayurvedic centers.", icon: BedDouble },
        { label: "Ayurvedic Meals", details: "Tailored Sattvic diet (three meals/day) as per physician.", icon: UtensilsCrossed },
        { label: "Clinical Panchakarma", details: "All phases: Purvakarma, Pradhana Karma, and Paschatkarma.", icon: HeartPulse },
        { label: "Rasayana Phase", details: "Full week of classical rejuvenation and rebuilding therapies.", icon: Sparkles },
        { label: "Medical Support", details: "Daily doctor consultations and medication during stay.", icon: Stethoscope },
        { label: "Support Care", details: "Yoga, meditation, and lifestyle correction classes.", icon: Activity },
      ],
    },
    isHighestDemand: true,
  },
  {
    name: "21-Day Panchakarma Healing and Rejuvenation Program",
    summary: {
      duration: "21 Days / 20 Nights",
      idealFor: "Deep Detox, Weight Loss, Stress Relief",
      locations: "Kerala, Karnataka, Goa",
      cost: "$2,800 – $4,500",
    },
    rows: [
      ["Program Name", "21-Day Panchakarma Healing and Rejuvenation Program"],
      ["Duration", "21 Days / 20 Nights"],
      ["Who It Is For", "Individuals seeking deep tissue cleansing, weight management, or intensive stress recovery"],
      ["Key Benefit", "Intensive toxin elimination, improved metabolic rate, and profound mental relaxation"],
      ["Top Locations", "Kerala, Karnataka, Pune"],
      ["Average Cost", "$2,800 – $4,500 USD"],
      ["Supervised By", "Accredited Ayurvedic Doctors and experienced therapy teams"],
      ["Includes", "Accommodation, sattvic meals, daily detox therapies, yoga sessions, and consultations"],
    ],
    costDetails: {
      length: "21 Days",
      budget: "$2,800 - $4,500",
      description: "Intensive physiological cleansing and metabolic reset.",
      budgetNote: "Premium clinical centers with specialized detox protocols.",
      popularTag: "HIGH DEMAND",
      popularDesc: "Balanced detox and weight management with full medical supervision.",
      rows: [
        ["Program", "21-Day Detox Program", "Clinical Cleansing", "$2,800 - $4,500", "Metabolic focus"],
      ],
    },
    inclusionDetails: {
      duration: "21 Days",
      stay: "20 Nights",
      care: "Clinical Focus",
      rows: [
        { label: "Stay", details: "Standard or Deluxe clinical rooms in healing retreats.", icon: BedDouble },
        { label: "Dietary Plan", details: "Clinical detox diet prescribed by the Vaidya.", icon: UtensilsCrossed },
        { label: "Core Therapies", details: "Full suite of Panchakarma detox procedures.", icon: Droplet },
        { label: "Daily Vitals", details: "Regular monitoring of progress and physician checks.", icon: Activity },
        { label: "Wellness", details: "Yoga and Pranayama sessions for metabolic boost.", icon: HeartPulse },
      ],
    },
  },
  {
    name: "14-Day Panchakarma Healing and Rejuvenation Program Retreat",
    summary: {
      duration: "14 Days / 13 Nights",
      idealFor: "General Detox, Energy Boost, Wellness Reset",
      locations: "Rishikesh, Kerala, Bangalore",
      cost: "$1,800 – $3,200",
    },
    rows: [
      ["Program Name", "14-Day Panchakarma Healing and Rejuvenation Program Retreat"],
      ["Duration", "14 Days / 13 Nights"],
      ["Who It Is For", "Busy professionals or wellness seekers needing a reset and basic physiological cleansing"],
      ["Key Benefit", "Boosted energy levels, improved digestion, and physical lightness"],
      ["Top Locations", "Rishikesh, Kerala, Bangalore"],
      ["Average Cost", "$1,800 – $3,200 USD"],
      ["Supervised By", "Qualified Ayurvedic Vaidyas"],
      ["Includes", "Stay, Ayurvedic diet, core Panchakarma therapies, and daily yoga"],
    ],
    costDetails: {
      length: "14 Days",
      budget: "$1,800 - $3,200",
      description: "Efficient wellness reset and digestive recalibration.",
      budgetNote: "Standard resort-style centers and wellness retreats.",
      popularTag: "QUICK RESET",
      popularDesc: "Core therapies and yoga for immediate energy and digestive relief.",
      rows: [
        ["Program", "14-Day Detox Retreat", "Wellness Reset", "$1,800 - $3,200", "Digestive focus"],
      ],
    },
    inclusionDetails: {
      duration: "14 Days",
      stay: "13 Nights",
      care: "Wellness Focus",
      rows: [
        { label: "Retreat Stay", details: "Eco-friendly or wellness-focused resort rooms.", icon: BedDouble },
        { label: "Sattvic Food", details: "Fresh, vegetarian Ayurvedic meals daily.", icon: UtensilsCrossed },
        { label: "Detox Plan", details: "Abhyanga, Shirodhara, and mild cleansing.", icon: Sparkles },
        { label: "Consultation", details: "Initial and final physician assessments.", icon: Stethoscope },
        { label: "Yoga Basics", details: "Group yoga for physical flexibility and mental rest.", icon: Activity },
      ],
    },
  },
  {
    name: "7-Day Ayurvedic Healing and Rejuvenation Program",
    summary: {
      duration: "7 Days / 6 Nights",
      idealFor: "Relaxation, Immunity, Quick Refresh",
      locations: "Pan India",
      cost: "$900 – $1,600",
    },
    rows: [
      ["Program Name", "7-Day Ayurvedic Healing and Rejuvenation Program"],
      ["Duration", "7 Days / 6 Nights"],
      ["Who It Is For", "Travelers or individuals seeking a quick immunity boost and relaxation experience"],
      ["Key Benefit", "Immediate stress relief, skin glow, and enhanced sense of well-being"],
      ["Top Locations", "Goa, Kerala, Rishikesh, Jaipur"],
      ["Average Cost", "$900 – $1,600 USD"],
      ["Supervised By", "Wellness Consultants and Ayurvedic Therapists"],
      ["Includes", "Accommodation, healthy meals, rejuvenation massages, and steam baths"],
    ],
    costDetails: {
      length: "7 Days",
      budget: "$900 - $1,600",
      description: "Short-term immunity boost and deep relaxation stay.",
      budgetNote: "Budget-friendly wellness centers across India.",
      popularTag: "ECONOMY",
      popularDesc: "Introductory Ayurvedic treatments and basic wellness routine.",
      rows: [
        ["Program", "7-Day Rejuvenation", "Quick Refresh", "$900 - $1,600", "Immunity focus"],
      ],
    },
    inclusionDetails: {
      duration: "7 Days",
      stay: "6 Nights",
      care: "Refresh Model",
      rows: [
        { label: "Comfort Stay", details: "Basic to premium wellness rooms.", icon: BedDouble },
        { label: "Healthy Meals", details: "Nutrient-rich vegetarian meals.", icon: UtensilsCrossed },
        { label: "Rejuvenation", details: "Relaxing massages and herbal steam baths.", icon: Sparkles },
        { label: "Wellness Talk", details: "Guidance on Ayurvedic lifestyle and diet.", icon: Brain },
        { label: "Morning Yoga", details: "Gentle yoga and breathing exercises.", icon: Activity },
      ],
    },
  },
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
    title: "Virechana (Therapeutic Purgation)",
    text: "A principal cleansing procedure using medicated herbal preparations to eliminate excess Pitta and deep-seated toxins from the liver, small intestine, and blood. Essential for inflammatory and metabolic conditions.",
    icon: Leaf,
  },
  {
    title: "Basti (Medicated Enema Series)",
    text: "The cornerstone of a 28-day protocol, Basti involves a structured sequence of oil and decoction enemas targeting the colon—the seat of Vata. Effective for joint conditions, neurological issues, and chronic bowel imbalances.",
    icon: Heart,
  },
  {
    title: "Nasya (Cranial Cleansing Therapy)",
    text: "Medicated oils and herbal preparations administered through nasal passages to clear upper channels, support sinus health, improve mental clarity, and address headaches or nervous system imbalances.",
    icon: Sparkles,
  },
  {
    title: "Shirodhara (Neuro-Relaxation Therapy)",
    text: "A continuous warm oil stream on the third-eye point to recalibrate the nervous system. Particularly effective in anxiety, insomnia, burnout, and post-stress recovery phases of the 28-day program.",
    icon: Activity,
  },
  {
    title: "Pizhichil (Oleation Therapy)",
    text: "Warm medicated oil poured continuously over the body by trained therapists. A deeply nourishing procedure used in the restoration phase to strengthen tissues, reduce Vata, and support joint and neuromuscular recovery.",
    icon: Droplet,
  },
  {
    title: "Rasayana (Rejuvenation Protocols)",
    text: "Unique to extended programs, Rasayana therapies in week four use classical herbal formulations to rebuild immunity, nourish deeper tissues (Dhatus), and lock in the detoxification gains achieved in earlier phases.",
    icon: Stethoscope,
  },
];

const candidatePoints = [
  "Manage a chronic condition like autoimmune disease, fibromyalgia, or metabolic syndrome",
  "Require root-cause resolution rather than symptom suppression",
  "Have experienced limited results from conventional medical approaches",
  "Deal with severe, long-standing digestive disorders such as IBS, Crohn's, or colitis",
  "Suffer from complex neurological concerns including chronic pain, neuropathy, or fatigue",
  "Are recovering from sustained burnout, adrenal depletion, or prolonged stress exposure",
  "Seek a comprehensive mind-body reset with measurable clinical outcomes",
  "Want a dedicated healing block with maximum Rasayana and rejuvenation benefit",
];

const avoidPoints = [
  "Women who are pregnant or breastfeeding",
  "Individuals within three months of major surgery or organ procedures",
  "Those undergoing active cancer treatment or in acute illness phases",
  "Children under 18 years without explicit medical recommendation",
  "Persons with severe, unmanaged psychiatric disorders",
  "Individuals who are unable to commit to complete dietary and lifestyle restrictions for the full duration",
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
    title: "Week 3 - Paschat Karma (Restoration)",
    duration: "Day 15-21",
    focus: "Restoration of digestive fire and tissue healing",
    description:
      "Following intense elimination, the body is delicate. Therapies transition to gentle restorative procedures, rebuilding the digestive fire (Agni) and calming the nervous system.",
    bullets: ["Samsarjana Krama (special diet)", "Mild Abhyanga", "Navarakizhi", "Pranayama and rest"],
    image: "/Program Images/14-day-retreat.png",
  },
  {
    title: "Week 4 - Rasayana (Deep Rejuvenation)",
    duration: "Day 22-28",
    focus: "Deep cellular nourishment and immunity building",
    description:
      "The final week focuses on Rasayana (rejuvenation) therapies. Having removed toxins, the body is primed to absorb deep nourishment, ensuring the healing effects last for months or years.",
    bullets: ["Rasayana herbs", "Rejuvenating oils", "Pizhichil", "Yoga and integration planning"],
    image: "/Program Images/28-day-healing.png",
  },
];

const benefits = {
  physical: [
    "Complete cellular-level detoxification of chronic toxin accumulations",
    "Measurable reduction in systemic inflammation markers",
    "Significant improvement in chronic digestive disorders including IBS and colitis",
    "Joint pain reduction and improved mobility in arthritic and rheumatic conditions",
    "Skin clarity in persistent dermatological conditions including psoriasis and eczema",
    "Sustainable metabolic recalibration beyond short-program outcomes",
  ],
  mental: [
    "Deep recovery from clinical burnout and adrenal fatigue",
    "Restored nervous system regulation and reduced anxiety load",
    "Sustained improvement in sleep architecture and quality",
    "Enhanced cognitive clarity and long-term mental resilience",
    "Emotional processing and stabilization supported by daily Shirodhara",
    "Stronger mind-body integration sustaining post-program lifestyle shifts",
  ],
  longTerm: [
    "Clinical outcomes frequently sustained for 6–12 months with home protocol compliance",
    "Measurable reductions in dependency on lifestyle medications under supervision",
    "Deeper tissue nourishment via Rasayana week prevents faster relapse compared to shorter formats",
    "Improved biomarkers for metabolic, inflammatory, and immune parameters",
    "Structural lifestyle habit change supported by 28 days of immersive routine",
    "Higher documented satisfaction and repeat-program rates vs 14 or 21-day formats",
  ],
};

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/shirodhara.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/abhyanga.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/basti-therapy.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/rasayana.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/yoga-meditation.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/pizhichil.png",
];

const chooseIndiaPoints = [
  {
    title: "Deepest Classical Lineage",
    text: "India's Ayurvedic tradition spans over 5,000 years. For a 28-day healing program requiring maximum clinical accuracy, Indian Vaidyas trained in traditional lineage schools deliver unmatched depth of diagnosis and treatment.",
    icon: Sparkles,
  },
  {
    title: "Specialist Chronic Care Physicians",
    text: "Senior Ayurvedic doctors in India hold BAMS and MD Ayurveda qualifications with extensive experience managing complex chronic conditions across autoimmune, neurological, and metabolic categories.",
    icon: Stethoscope,
  },
  {
    title: "Maximum Value for Extended Stays",
    text: "A fully supervised 28-day clinical program in India costs 70–80% less than comparable duration programs in Germany, UK, or Australia—without any compromise on physician quality or treatment authenticity.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Dedicated Healing Ecosystems",
    text: "India's top centers in Kerala and Rishikesh are designed specifically for extended therapeutic stays—quiet environments, sattvic food, structured daily routines, and clinical supervision all under one roof.",
    icon: Leaf,
  },
  {
    title: "Comprehensive Integrated Protocol",
    text: "Diet therapy, yoga, pranayama, meditation, and Rasayana herbs are seamlessly woven into the 28-day structure—not offered as optional add-ons but as core clinical components.",
    icon: Activity,
  },
  {
    title: "Strong Discharge and Follow-Up Systems",
    text: "Leading Indian Ayurvedic hospitals provide detailed discharge protocols, home Rasayana plans, and remote physician follow-up to sustain the healing outcomes achieved over 28 days.",
    icon: ShieldCheck,
  },
];

const whyChooseUsPoints = [
  {
    title: "Chronic Condition Expertise",
    description: "We specifically shortlist centers experienced in managing complex and long-standing conditions that benefit from the full 28-day clinical protocol.",
    icon: ShieldCheck,
  },
  {
    title: "Physician Pre-Screening",
    description: "Before any booking, our medical advisors assess your health history to ensure the 28-day format is appropriate and to recommend the right physician profile.",
    icon: CalendarCheck2,
  },
  {
    title: "International Patient Logistics",
    description: "We manage visa documentation support, airport coordination, center check-in, and in-country communication across 40+ source countries.",
    icon: Globe2,
  },
  {
    title: "Full 28-Day Journey Support",
    description: "From departure planning to your final Rasayana consultation, our team provides continuous support throughout your complete healing stay.",
    icon: Route,
  },
  {
    title: "Transparent Clinical Standards",
    description: "All partner centers undergo our verification process covering physician qualifications, therapy safety protocols, treatment documentation, and patient feedback systems.",
    icon: UserCog,
  },
  {
    title: "Post-Program Continuity Planning",
    description: "We coordinate your discharge plan, Rasayana supplement guidance, and remote follow-up consultation to protect and extend your 28-day investment.",
    icon: Headset,
  },
];

const topAyurvedicCenters = [
  {
    name: "SOUKYA International Holistic Health Centre",
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
    name: "Kairali - The Ayurvedic Healing Village",
    city: "Palakkad, Kerala, India",
    description:
      "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Panchakarma treatments and traditional healing in a serene, nature-focused environment.",
    rating: 4.8,
    reviews: 420,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/centers/kerala/kairali-ayurvedic-healing-village",
  },
  {
    name: "Carnoustie Ayurveda Wellness Resort",
    city: "Mararikulam, Kerala, India",
    description:
      "A premium beachside center known for authentic Panchakarma care, experienced doctors, and personalized recovery-focused plans.",
    rating: 4.7,
    reviews: 360,
    image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg",
    link: "/centers/kerala/carnoustie-ayurveda-wellness-resort",
  },
  {
    name: "Somatheeram Ayurveda Village Resort",
    city: "Thiruvananthapuram, Kerala, India",
    description:
      "Widely regarded as the world's first Ayurveda resort, providing classical treatments, yoga, and meditation on a beautiful cliff overlooking the Arabian Sea.",
    rating: 4.7,
    reviews: 510,
    image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
    link: "/centers/kerala/somatheeram",
  },
  {
    name: "AyurSoma Ayurveda Royal Retreat",
    city: "Thiruvananthapuram, Kerala, India",
    description:
      "Traditional Kerala Ayurveda in a calm retreat format with physician supervision, therapeutic routines, and rejuvenation support.",
    rating: 4.8,
    reviews: 300,
    image: "/Center Images/AyurSoma Ayurveda/Thumb.jpg",
    link: "/centers/kerala/ayursoma",
  },
  {
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kovalam, Kerala, India",
    description:
      "Cliffside wellness destination offering curated Ayurvedic therapies, restorative routines, and immersive coastal healing experiences.",
    rating: 4.6,
    reviews: 280,
    image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
    link: "/centers/kerala/niraamaya-retreats-surya-samudra",
  },
  {
    name: "Kalari Kovilakom Palace for Ayurveda",
    city: "Palakkad, Kerala, India",
    description:
      "A globally recognized palace-turned-retreat providing extremely strict, traditional, and authentic Ayurvedic treatments in a deeply spiritual setting.",
    rating: 4.8,
    reviews: 240,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/centers/kerala/kalari-kovilakom",
  },
];

const inclusionsRows = [
  { label: "Accommodation", details: "Private room or suite for 27 nights with dedicated clinical care environment (as per package tier)", icon: BedDouble },
  { label: "Meals", details: "Three daily physician-prescribed Ayurvedic meals aligned to your constitution, treatment phase, and Rasayana requirements", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Daily physician review across all four weeks, with protocol adjustments based on treatment response", icon: Stethoscope },
  { label: "Daily Therapeutic Procedures", details: "Abhyanga, Shirodhara, Basti sequence, Virechana, Pizhichil, Navarakizhi, Nasya, and Rasayana sessions as clinically prescribed", icon: Activity },
  { label: "Ayurvedic Medicines", details: "Classical herbal formulations, medicated oils, Rasayana preparations, and supporting medicines throughout all four program phases", icon: Pill },
  { label: "Yoga and Pranayama", details: "Daily physician-integrated sessions tailored to support detox phases and the final Rasayana week", icon: Brain },
  { label: "Discharge and Home Protocol", details: "Comprehensive post-program diet plan, Rasayana continuation guide, and follow-up consultation scheduling", icon: ClipboardCheck },
];

const costComparisonRows = [
  {
    program: "28-Day Panchakarma Healing",
    category: "Extended Healing Program",
    cost: "$3,500 – $6,000",
    notes: "Maximum duration, full Rasayana week, chronic condition recovery",
  },
];

const faqItems = [
  {
    question: "Why is 28 days considered the optimal Panchakarma duration for chronic conditions?",
    answer:
      "A 28-day program allows all three classical Panchakarma phases—Purvakarma preparation, Pradhana Karma core elimination, and Paschat Karma restoration—plus a dedicated Rasayana week. This fourth phase is what genuinely distinguishes a 28-day protocol from shorter formats.",
  },
  {
    question: "How much does a 28-day Panchakarma Healing Program cost in India?",
    answer:
      "Well-supervised programs in Kerala or Rishikesh range from $3,500 to $6,000 USD for mid-range to premium centers. Luxury heritage retreats may exceed this. The cost typically includes accommodation, all meals, medicines, and physician consultations.",
  },
  {
    question: "What conditions respond particularly well to the 28-day format?",
    answer:
      "Autoimmune conditions, fibromyalgia, chronic IBS, metabolic syndrome, psoriasis, long-term burnout, and neurological conditions like neuropathy or chronic pain tend to show more significant outcomes in 28-day programs compared to shorter formats.",
  },
  {
    question: "Is it safe to undergo a 28-day Panchakarma without prior Ayurveda experience?",
    answer:
      "Yes. The program is medically supervised from day one. The physician assesses your baseline health and progressively introduces therapies based on your constitution and tolerance. No prior Ayurveda knowledge is required.",
  },
  {
    question: "What is the Rasayana week and why does it matter?",
    answer:
      "Rasayana refers to classical Ayurvedic rejuvenation protocols. Week four is dedicated to rebuilding deeper body tissues (Dhatus) using herbal formulations, nourishing oils, and supportive therapies. This phase significantly increases how long the detox results are sustained after you return home.",
  },
  {
    question: "What is the best time of year for a 28-day Panchakarma in India?",
    answer:
      "October through March is preferred for international visitors due to favorable climate and high center availability. However, Kerala centers often recommend the monsoon season (June–August) as traditionally considered the most effective period for Panchakarma.",
  },
  {
    question: "How different is a 28-day program from a 21-day program?",
    answer:
      "The primary difference is the addition of a complete Rasayana (rejuvenation) week. In 21-day programs, restoration is partial. The 28-day format allows the body to fully recover from the elimination phase and receive deep tissue nourishment before discharge.",
  },
  {
    question: "Can I reduce my dependency on medications through this program?",
    answer:
      "Some patients experience reduced medication requirements under physician supervision following a 28-day program, particularly for lifestyle-related conditions. This is always managed in coordination with your treating physician at home.",
  },
];

const patientReviews = [
  {
    name: "Walther Brinkmann",
    location: "Cologne, Germany",
    condition: "Autoimmune condition",
    title: "Twenty-Eight Days That Rebuilt My Health From the Ground Up.",
    review: "I committed to a twenty-eight day programme for my autoimmune condition. The three-phase protocol—including Snehana oleation, followed by Virechana, Basti, and Nasya procedures, and concluding with Rasayana rejuvenation—produced a daily transformation. My departure tests showed the most significant reduction in chronic inflammation markers my physician in Cologne had seen in three years.",
    rating: 5,
    verified: true,
  },
  {
    name: "Assumpta Brennan",
    location: "Cork, Ireland",
    condition: "IBS and gut issues",
    title: "The Only Duration That Delivers Complete Results.",
    review: "A seven-day Panchakarma in Europe was superficial; this 28-day commitment was profound. It allowed for a full Purvakarma preparation before the main procedures. My IBS, which had been unmanaged for four years, resolved within the Basti sequence of the third week. The Paschatkarma restoration in the final days embedded changes I still feel nine months later.",
    rating: 5,
    verified: true,
  },
  {
    name: "Delphine Aubert",
    location: "Toulouse, France",
    condition: "Burnout and fatigue",
    title: "Week One Prepared Me. Week Two Transformed Me. Week Three Rebuilt Me. Week Four Sustained It.",
    review: "The twenty-eight day programme unfolded in a clear progression. The first week of Snehana prepared my tissues. The second week of Virechana and Basti released toxins, bringing a physical lightness I had never experienced. The third week's Navarakizhi and Rasayana herbs rebuilt my system, returning my energy and mental clarity daily.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sander Hoekstra",
    location: "Utrecht, Netherlands",
    condition: "Metabolic Syndrome",
    title: "The Only Programme That Addressed My Metabolic Syndrome Comprehensively.",
    review: "My metabolic syndrome was being managed by four separate medications. The physician designed a 28-day Panchakarma programme to address the common root. The Lekhana Basti, Virechana, and Udwarthanam herbal massage produced measurable improvements in all four parameters. My Dutch physician noted the best results in blood pressure, glucose, and triglycerides he had seen in two years.",
    rating: 5,
    verified: true,
  },
  {
    name: "Brigid Connolly",
    location: "Galway, Ireland",
    condition: "Fibromyalgia and anxiety",
    title: "The Most Significant Health Decision of My Life.",
    review: "I arrived with fibromyalgia, anxiety, chronic fatigue, and severe gut issues. The physician identified a single deep Vata-Ama imbalance and designed a 28-day programme. The Snehana phase reduced my joint pain, the Basti sequence normalised my gut, and the Shirodhara sessions dissolved my anxiety. I returned home with four conditions measurably improved and one integrated home protocol.",
    rating: 5,
    verified: true,
  },
];

const PanchakarmaHealing28Day = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  const [selectedCostIndex, setSelectedCostIndex] = useState(0);
  const [selectedInclusionIndex, setSelectedInclusionIndex] = useState(0);
  const [benefitsImageIndex, setBenefitsImageIndex] = useState(0);
  const [benefitsVisibleCards, setBenefitsVisibleCards] = useState(4);
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewAutoPlay, setReviewAutoPlay] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const currentPackage = packages[selectedPackageIndex];
  const currentCostPackage = packages[selectedCostIndex];
  const currentInclusionPackage = packages[selectedInclusionIndex];

  const goPackageNext = () => setSelectedPackageIndex((prev) => (prev + 1) % packages.length);
  const goPackagePrevious = () => setSelectedPackageIndex((prev) => (prev - 1 + packages.length) % packages.length);

  const goCostNext = () => setSelectedCostIndex((prev) => (prev + 1) % packages.length);
  const goCostPrevious = () => setSelectedCostIndex((prev) => (prev - 1 + packages.length) % packages.length);

  const goInclusionNext = () => setSelectedInclusionIndex((prev) => (prev + 1) % packages.length);
  const goInclusionPrevious = () => setSelectedInclusionIndex((prev) => (prev - 1 + packages.length) % packages.length);

  // Auto-rotate for main gallery disabled as per user request
  /*
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);
  */

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

  // Auto-rotate for benefits images disabled as per user request
  /* 
  useEffect(() => {
    const timer = setInterval(() => {
      setBenefitsImageIndex((prev) => (prev + 1) % benefitsSectionImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  */

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

  // Auto-rotate for reviews disabled as per user request
  /*
  useEffect(() => {
    if (!reviewAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % patientReviews.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [reviewAutoPlay]);
  */

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

  // Auto-rotate for top centers in mobile view disabled as per user request
  /*
  useEffect(() => {
    if (!topCentersMobileView) return;
    const timer = setInterval(() => {
      setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
    }, 3600);
    return () => clearInterval(timer);
  }, [topCentersMobileView, topCentersTotalSlides]);
  */

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

      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurvedic Programs</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">28-Day Panchakarma Healing and Rejuvenation Program in India</h1>
              <p className="text-lg md:text-xl text-white/90">A four-week physician-led Ayurvedic healing protocol designed for chronic condition recovery, deep cellular restoration, and Rasayana rejuvenation.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>Kerala, Rishikesh, Goa</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 Excellent Rating</span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">28-Day Panchakarma Healing and Rejuvenation — Program Gallery</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Panchakarma program" className="w-full h-[260px] md:h-[460px] object-cover" />
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section id="quick-summary" className="scroll-mt-24 !mt-3 md:!mt-4 pt-0 pb-0">
          <h2 className="text-lg md:text-xl font-bold text-[#335765] mb-3 text-center">
            {currentPackage.name} - Quick Overview
          </h2>

          <Card className="border-[#d8d0ae] bg-white shadow-lg relative overflow-hidden max-w-5xl mx-auto">
            {currentPackage.isHighestDemand && (
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-[#FF7A00] text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-bl-lg shadow-sm">
                  Highest demand
                </div>
              </div>
            )}

            <CardContent className="p-2.5 md:p-4 space-y-3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="rounded-lg border border-[#d9cfae] bg-[#F8F4E7] p-1.5 md:p-2">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#7F543D] font-bold">Duration</p>
                  <p className="text-xs md:text-[13px] font-semibold text-[#335765]">{currentPackage.summary.duration}</p>
                </div>
                <div className="rounded-lg border border-[#d9cfae] bg-[#F8F4E7] p-1.5 md:p-2">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#7F543D] font-bold">Ideal For</p>
                  <p className="text-xs md:text-[13px] font-semibold text-[#335765] leading-tight line-clamp-1">{currentPackage.summary.idealFor}</p>
                </div>
                <div className="rounded-lg border border-[#d9cfae] bg-[#F8F4E7] p-1.5 md:p-2">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#7F543D] font-bold">Locations</p>
                  <p className="text-xs md:text-[13px] font-semibold text-[#335765]">{currentPackage.summary.locations}</p>
                </div>
                <div className="rounded-lg border border-[#d9cfae] bg-[#F8F4E7] p-1.5 md:p-2">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="text-xs md:text-[13px] font-semibold text-[#335765]">{currentPackage.summary.cost}</p>
                </div>
              </div>

              {/* Mobile Table View */}
              <div className="grid gap-1.5 md:hidden">
                {currentPackage.rows.map((row, idx) => (
                  <div
                    key={row[0]}
                    className={`rounded-lg border border-[#d8d0ae] px-3 py-1.5 ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                        {(() => {
                          const Icon = quickSummaryMobileIcons[row[0] as keyof typeof quickSummaryMobileIcons] || ClipboardCheck;
                          return <Icon className="h-3 w-3 text-[#335765]" />;
                        })()}
                      </span>
                      <p className="text-[10px] uppercase tracking-wider text-[#335765] font-extrabold">{row[0]}</p>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#7F543D] font-medium pl-0.5">{row[1]}</p>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-hidden rounded-xl border border-[#d8d0ae]">
                <table className="w-full text-xs lg:text-[13px]">
                  <tbody>
                    {currentPackage.rows.map((row, idx) => (
                      <tr key={row[0]} className={`${idx === 0 ? "bg-[#EDE8D0]" : "bg-white border-t border-[#d8d0ae]/30"}`}>
                        <td className="p-1.5 lg:p-2 font-bold text-[#3D4B4C] w-[180px] border-r border-[#d8d0ae]/20">{row[0]}</td>
                        <td className="p-1.5 lg:p-2 text-[#7F543D] font-medium leading-relaxed">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Slider Buttons */}
          <div className="mt-5 md:mt-6 flex items-center justify-center gap-3 md:gap-6 px-2 md:px-4">
            <button
              onClick={goPackagePrevious}
              className="flex-1 md:flex-none relative flex items-center justify-center px-6 py-2.5 md:px-10 md:py-3 bg-white text-[#335765] border border-[#d8d0ae] rounded-full font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all active:scale-95 text-[11px] md:text-sm min-w-[145px] md:min-w-[200px]"
            >
              <ChevronLeft className="absolute left-2 md:left-4 h-4 w-4" />
              <span>Previous Packages</span>
            </button>
            
            {/* Dots Indicator */}
            <div className="hidden xs:flex items-center gap-1.5 justify-center">
              {packages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${idx === selectedPackageIndex ? "bg-[#335765] w-4" : "bg-[#d8d0ae]"}`}
                />
              ))}
            </div>

            <button
              onClick={goPackageNext}
              className="flex-1 md:flex-none relative flex items-center justify-center px-6 py-2.5 md:px-10 md:py-3 bg-white text-[#335765] border border-[#d8d0ae] rounded-full font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all active:scale-95 text-[11px] md:text-sm min-w-[145px] md:min-w-[200px]"
            >
              <span>More Packages</span>
              <ChevronRight className="absolute right-2 md:right-4 h-4 w-4" />
            </button>
          </div>
        </section>

        <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-14 md:space-y-16">
          <div className="grid gap-10 md:gap-12">
            <Card className="h-full shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is the 28-Day Panchakarma Healing Program?</h2>
                <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">
                  The 28-Day Panchakarma Healing Program is a physician-supervised, four-phase clinical protocol designed specifically for individuals dealing with chronic health conditions, persistent physiological imbalances, or those who require more than detox—they require genuine healing. Unlike shorter formats, this program does not conclude with elimination. It includes a dedicated week of Rasayana (classical rejuvenation), ensuring the body is not just cleansed but rebuilt at a cellular level.
                </p>
                <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
                  The 28-day duration is the minimum recommended by classical Ayurvedic texts for addressing deep-rooted Ama (toxin accumulations) in chronic cases. With four full weeks, the program completes all classical stages plus Rasayana—the phase most programs omit.{" "}
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

          <Card className="h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#335765] mb-3 text-center">Understanding Panchakarma - The Science Behind It</h2>
              <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                In a 28-day format, the physician has sufficient time to sequence therapies across all four phases with precision. The extended duration enables deeper Basti series, more complete elimination, and a full Rasayana restoration—each procedure building on the last.
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
        </section>

        <section id="week-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
          <div className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 28-Day Program - Week-by-Week Breakdown</h2>
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
                    <p className="text-lg font-bold text-[#335765]">{week.title}</p>
                    <p className="text-sm text-[#8C765E]">{week.duration} - {week.focus}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-6">
                  <div>
                    <p className="text-[#7F543D] mb-4 leading-relaxed">{week.description}</p>
                    <p className="font-semibold text-[#335765] mb-2.5">Key Therapies</p>
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
                  className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#335765]" : "w-2.5 bg-[#C7D1C9]"
                    }`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of the 28-Day Panchakarma Healing</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Cost of the {currentCostPackage.costDetails.length} Program in India</h2>
            <p className="mt-2 text-[#7F543D] text-sm md:text-base">
              {currentCostPackage.costDetails.description} Most guests choose this for a comprehensive healing experience.
            </p>
          </div>

          <Card className="border-[#d8d0ae] bg-white shadow-lg max-w-5xl mx-auto overflow-hidden">
            <CardContent className="p-4 md:p-6 space-y-5">
              <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3 text-center">
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-[#7F543D] font-bold">Program Length</p>
                  <p className="mt-1 text-xl md:text-2xl font-bold text-[#335765]">{currentCostPackage.costDetails.length}</p>
                  <p className="mt-0.5 text-[11px] md:text-xs text-[#6F6B5C] leading-tight">{currentCostPackage.costDetails.description}</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3 text-center">
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-[#7F543D] font-bold">Typical Budget</p>
                  <p className="mt-1 text-xl md:text-2xl font-bold text-[#335765]">{currentCostPackage.costDetails.budget}</p>
                  <p className="mt-0.5 text-[11px] md:text-xs text-[#6F6B5C] leading-tight">{currentCostPackage.costDetails.budgetNote}</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white ring-1 ring-[#d9cfae]">
                      <Sparkles className="h-4 w-4 text-[#335765]" />
                    </div>
                    <p className="text-lg md:text-xl font-bold text-[#335765] uppercase">{currentCostPackage.costDetails.popularTag}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] md:text-xs text-[#6F6B5C] leading-tight">{currentCostPackage.costDetails.popularDesc}</p>
                </div>
              </div>

              <div className="rounded-xl border border-[#d9cfae] overflow-hidden shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-[#EDE8D0] px-4 py-2.5 text-center sm:text-left">
                  <p className="font-bold text-[#335765] text-sm md:text-base">{currentCostPackage.name}</p>
                  {currentCostPackage.isHighestDemand && (
                    <span className="inline-flex items-center rounded-full bg-[#FF7A00] px-2.5 py-0.5 text-[10px] md:text-xs font-bold text-white shadow-sm">
                      Highest demand package
                    </span>
                  )}
                </div>

                {/* Mobile View */}
                <div className="md:hidden p-3 space-y-2 bg-white">
                  {currentCostPackage.costDetails.rows.map((row, idx) => (
                    <div key={idx} className="rounded-lg border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
                      <div className="grid grid-cols-2 gap-y-2 text-[11px] md:text-xs">
                        <div className="col-span-2">
                          <p className="uppercase tracking-wider text-[#335765] font-extrabold mb-0.5">Program</p>
                          <p className="text-sm text-[#7F543D] font-bold">{row[1]}</p>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-[#335765] font-extrabold mb-0.5">Category</p>
                          <p className="text-sm text-[#7F543D] font-semibold">{row[2]}</p>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-[#335765] font-extrabold mb-0.5">Cost</p>
                          <p className="text-sm text-[#7F543D] font-bold">{row[3]}</p>
                        </div>
                        <div className="col-span-2 border-t border-[#d8d0ae]/30 pt-2 mt-1">
                          <p className="uppercase tracking-wider text-[#335765] font-extrabold mb-0.5">Notes</p>
                          <p className="text-sm text-[#7F543D] font-medium leading-relaxed">{row[4]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F8F4E7] text-[#335765] border-b border-[#d9cfae]">
                      <tr>
                        <th className="text-left p-3 font-bold uppercase tracking-wider text-[11px]">Program</th>
                        <th className="text-left p-3 font-bold uppercase tracking-wider text-[11px]">Category</th>
                        <th className="text-left p-3 font-bold uppercase tracking-wider text-[11px]">Cost</th>
                        <th className="text-left p-3 font-bold uppercase tracking-wider text-[11px]">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#d9cfae]/30 bg-white">
                      {currentCostPackage.costDetails.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-3 font-bold text-[#3D4B4C]">{row[1]}</td>
                          <td className="p-3 text-[#7F543D] font-semibold">{row[2]}</td>
                          <td className="p-3 text-[#7F543D] font-bold">{row[3]}</td>
                          <td className="p-3 text-[#7F543D] font-medium leading-relaxed">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Slider Buttons */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-6 px-2 md:px-4">
            <button
              onClick={goCostPrevious}
              className="flex-1 md:flex-none relative flex items-center justify-center px-6 py-3 md:px-12 md:py-4 bg-white text-[#335765] border border-[#d8d0ae] rounded-full font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all active:scale-95 text-[11px] md:text-base min-w-[145px] md:min-w-[220px]"
            >
              <ChevronLeft className="absolute left-2 md:left-5 h-4 w-4 md:h-5 md:w-5" />
              <span>Previous Packages</span>
            </button>
            
            <div className="hidden xs:flex items-center gap-1.5 justify-center">
              {packages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === selectedCostIndex ? "bg-[#335765] w-5" : "bg-[#d8d0ae]"}`}
                />
              ))}
            </div>

            <button
              onClick={goCostNext}
              className="flex-1 md:flex-none relative flex items-center justify-center px-6 py-3 md:px-12 md:py-4 bg-white text-[#335765] border border-[#d8d0ae] rounded-full font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all active:scale-95 text-[11px] md:text-base min-w-[145px] md:min-w-[220px]"
            >
              <span>More Packages</span>
              <ChevronRight className="absolute right-2 md:right-5 h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </section>

        <section id="why-india" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14">
          <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
            <CardContent className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">Why Choose India for Panchakarma?</h2>
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
            <h2 className="text-3xl font-bold text-[#335765] mb-3">Why Choose Svastha Global for Your 28-Day Healing Program</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">What Is Included in the {currentInclusionPackage.inclusionDetails.duration} Package?</h2>
            <p className="text-[#7F543D] text-sm md:text-base">Everything essential for a supervised detox, recovery, and continuity plan.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-3 py-2 text-center">
              <p className="text-[11px] uppercase tracking-wider text-[#7F543D] font-bold">Duration</p>
              <p className="text-base md:text-lg font-bold text-[#335765] mt-0.5">{currentInclusionPackage.inclusionDetails.duration}</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-3 py-2 text-center">
              <p className="text-[11px] uppercase tracking-wider text-[#7F543D] font-bold">Stay</p>
              <p className="text-base md:text-lg font-bold text-[#335765] mt-0.5">{currentInclusionPackage.inclusionDetails.stay}</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-3 py-2 text-center">
              <p className="text-[11px] uppercase tracking-wider text-[#7F543D] font-bold">Inclusions</p>
              <p className="text-base md:text-lg font-bold text-[#335765] mt-0.5">Therapies + Meals</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-3 py-2 text-center">
              <p className="text-[11px] uppercase tracking-wider text-[#7F543D] font-bold">Care Model</p>
              <p className="text-base md:text-lg font-bold text-[#335765] mt-0.5">{currentInclusionPackage.inclusionDetails.care}</p>
            </div>
          </div>
          <Card className="shadow-lg border-[#dfe7e2] max-w-5xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              {/* Mobile View */}
              <div className="md:hidden grid gap-2 p-3 bg-slate-50/30">
                {currentInclusionPackage.inclusionDetails.rows.map((row, idx) => {
                  const Icon = row.icon;
                  return (
                    <div key={idx} className="rounded-xl border border-[#d8d0ae] px-4 py-3 bg-white shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          <Icon className="h-4 w-4 text-[#335765]" />
                        </span>
                        <p className="text-[13px] uppercase tracking-wider text-[#335765] font-extrabold">{row.label}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#7F543D] font-medium pl-1">{row.details}</p>
                    </div>
                  );
                })}
              </div>

              {/* Desktop View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#F8F4E7] text-[#335765] border-b border-[#d9cfae]">
                    <tr>
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-xs w-[220px]">Inclusion</th>
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-xs">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d9cfae]/30 bg-white">
                    {currentInclusionPackage.inclusionDetails.rows.map((row, idx) => {
                      const Icon = row.icon;
                      return (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 font-bold text-[#3D4B4C] border-r border-[#d9cfae]/20">
                            <div className="flex items-center gap-3">
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                                <Icon className="h-4 w-4 text-[#335765]" />
                              </span>
                              <span>{row.label}</span>
                            </div>
                          </td>
                          <td className="p-4 text-[#7F543D] font-medium leading-relaxed">{row.details}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Slider Buttons */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-6 px-2 md:px-4">
            <button
              onClick={goInclusionPrevious}
              className="flex-1 md:flex-none relative flex items-center justify-center px-6 py-3 md:px-12 md:py-4 bg-white text-[#335765] border border-[#d8d0ae] rounded-full font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all active:scale-95 text-[11px] md:text-base min-w-[145px] md:min-w-[220px]"
            >
              <ChevronLeft className="absolute left-2 md:left-5 h-4 w-4 md:h-5 md:w-5" />
              <span>Previous Packages</span>
            </button>
            
            <div className="hidden xs:flex items-center gap-1.5 justify-center">
              {packages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === selectedInclusionIndex ? "bg-[#335765] w-5" : "bg-[#d8d0ae]"}`}
                />
              ))}
            </div>

            <button
              onClick={goInclusionNext}
              className="flex-1 md:flex-none relative flex items-center justify-center px-6 py-3 md:px-12 md:py-4 bg-white text-[#335765] border border-[#d8d0ae] rounded-full font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all active:scale-95 text-[11px] md:text-base min-w-[145px] md:min-w-[220px]"
            >
              <span>More Packages</span>
              <ChevronRight className="absolute right-2 md:right-5 h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
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
                alt="28-day Panchakarma consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Begin Your 28-Day Healing Journey</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                A senior Svastha Global advisor will review your health profile, recommend the right center and physician match, and walk you through what to expect across all four phases of your healing program.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%2028-day%20Panchakarma%20program."
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
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for 28-day detox programs.</p>
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


      </main>

      <section id="reviews" className="scroll-mt-24 pt-8 pb-8 md:pt-10 md:pb-12 bg-transparent w-full">
        <div className="container mx-auto px-4 max-w-6xl text-left">
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
          </div>

          <div className="max-w-4xl mx-auto relative px-0 md:px-0">
            {/* Navigation Arrows - Exact Agni style */}
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
                  {/* SVG Quote Icon exactly like Agni */}
                  <div className="text-[#335765]/20 mb-3 md:mb-4">
                    <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Review Content */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                      {patientReviews[currentReview].title}
                    </h3>
                    <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                      "{patientReviews[currentReview].review}"
                    </p>
                  </div>

                  {/* Reviewer Info */}
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

                  {/* Star Rating Rendering */}
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

                  {/* Auto-rotate indicator removed as per user request */}
                  {/* reviewAutoPlay && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Auto
                    </div>
                  ) */}
                </div>
              </CardContent>
            </Card>

            {/* Dots Navigation Navigation */}
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

export default PanchakarmaHealing28Day;

