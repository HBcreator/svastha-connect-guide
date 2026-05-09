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
  Users,
  TrendingUp,
} from "lucide-react";

const galleryImages = [
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/1.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/2.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/3.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/4.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/5.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/6.webp",
];

const quickSummaryRows = [
  ["Condition Treated", "Sciatica (Gridhrasi) — nerve & lower back pain radiating to legs"],
  ["Treatment Duration", "21–28 Days (recommended for complete therapeutic benefit)"],
  ["Who It Is For", "Adults with chronic sciatica, disc herniation-related pain, or nerve compression"],
  ["Core Approach", "Panchakarma detox + targeted nerve therapies + herbal medicines"],
  ["Key Benefit", "Nerve pain relief, reduced compression, restored mobility, surgery avoidance"],
  ["Top Locations", "Kerala, Rishikesh, Dharamshala"],
  ["Average Cost", "$2,500 – $4,500 USD (all-inclusive)"],
  ["Supervised By", "Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"],
];

const quickSummaryMobileIcons = {
  "Condition Treated": ClipboardCheck,
  "Treatment Duration": Calendar,
  "Who It Is For": UserCheck,
  "Core Approach": Activity,
  "Key Benefit": Sparkles,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
} as const;

const therapies = [
  {
    title: "Kati Basti (Lower Back Oil Pooling Therapy)",
    text: "The most targeted treatment for sciatica. A ring of dough is placed on the lower back and filled with warm medicated oil for 30–45 minutes, penetrating deeply into lumbar vertebrae and surrounding nerve tissue.",
    icon: Droplet,
  },
  {
    title: "Basti (Medicated Enema Therapy)",
    text: "The single most effective Ayurvedic treatment for sciatica. Medicated herbal oils and decoctions through the colon pacify Vata at its root, producing systemic nerve-calming effects.",
    icon: Heart,
  },
  {
    title: "Abhyanga (Full-Body Medicated Oil Massage)",
    text: "Daily therapeutic massage using warm Vata-pacifying oils. Improves circulation, releases deep muscular tension around the sciatic nerve, and reduces nerve irritation.",
    icon: Sparkles,
  },
  {
    title: "Elakizhi (Herbal Leaf Pouch Therapy)",
    text: "Warm bundles filled with fresh medicinal leaves applied along the sciatic nerve pathway. Provides intense local relief and significantly decreases radiating leg pain.",
    icon: Leaf,
  },
  {
    title: "Pizhichil (Warm Oil Stream Therapy)",
    text: "Continuous stream of warm medicated oil poured over the body while being simultaneously massaged. Deeply nourishing for the nervous system and effective for chronic sciatic pain.",
    icon: Activity,
  },
  {
    title: "Swedana (Herbal Steam Therapy)",
    text: "Targeted steam therapy using medicinal herbs opens the body's channels, loosens spinal stiffness, and releases the piriformis and lumbar muscles contributing to nerve compression.",
    icon: Stethoscope,
  },
];

const candidatePoints = [
  "Experience shooting or burning pain from your lower back into your leg",
  "Have been diagnosed with a herniated disc, lumbar spinal stenosis, or piriformis syndrome",
  "Struggle with numbness, tingling, or weakness in your leg or foot",
  "Have been taking NSAIDs, nerve pain medications, or steroid injections and want a natural alternative",
  "Have been advised spinal surgery and want to explore a non-surgical path first",
  "Have already had one surgery but continue to experience sciatic pain",
  "Sit for long hours at work and have developed progressive lower back and leg pain",
  "Are between 35 and 65 years old dealing with degenerative spinal changes",
];

const avoidPoints = [
  "Patients with severe cauda equina syndrome requiring emergency surgical intervention",
  "Individuals with complete muscle paralysis or loss of bladder/bowel control due to nerve compression",
  "Those who have undergone spinal surgery within the past three months",
  "Pregnant women (a modified program may be available)",
  "Patients with active spinal infection or tumour",
];

const weekBreakdown = [
  {
    title: "Week 1 - Purva Karma (Preparation)",
    duration: "Day 1–7",
    focus: "Loosening nerve compression, preparing lumbar tissue",
    description:
      "Your program begins with a comprehensive consultation with your Ayurvedic physician, who will review your MRI reports, medical history, and current symptom pattern. Daily Abhyanga begins with specific anti-Vata oils targeted to the lower back and leg pathways. An Ayurvedic diet — warm, easily digestible, Vata-pacifying foods — begins from day one.",
    bullets: ["Abhyanga", "Swedana", "Herbal medicines", "Dietary changes", "Initial Kati Basti"],
  },
  {
    title: "Week 2 - Pradhana Karma (Core Treatment)",
    duration: "Day 8–14",
    focus: "Active nerve decompression and Vata correction",
    description:
      "The most therapeutically intensive phase. Kati Basti is typically performed once or twice daily. The Basti program — a structured sequence of medicated oil and herbal decoction enemas — begins, working at the root level to correct the Vata imbalance driving your nerve pain. Most patients report meaningful reduction in shooting pain by days 10–14.",
    bullets: ["Kati Basti", "Elakizhi", "Basti cycles", "Pizhichil", "Virechana (if prescribed)"],
  },
  {
    title: "Week 3 - Paschat Karma (Rejuvenation)",
    duration: "Day 15–21",
    focus: "Nerve rebuilding, spinal strengthening, mobility restoration",
    description:
      "With acute nerve compression addressed and inflammation significantly reduced, treatment shifts to rebuilding. Rasayana therapies nourish spinal discs, nerve sheaths, and surrounding musculature. Therapeutic yoga begins — specific, spine-safe asanas chosen by your Vaidya.",
    bullets: ["Rasayana therapies", "Nerve-nourishing oils", "Therapeutic yoga", "Basti continuation"],
  },
  {
    title: "Week 4 - Extended Program (Advanced Cases)",
    duration: "Day 22–28",
    focus: "Deeper systemic Vata correction for chronic or severe cases",
    description:
      "For patients with longstanding chronic sciatica, multiple disc involvement, or those who want the most complete possible recovery. The extended week allows for additional Basti cycles that produce profound systemic Vata correction — the foundation of preventing recurrence.",
    bullets: ["Extended Basti cycles", "Additional Elakizhi", "Functional spinal exercises"],
  },
];

const benefits = {
  physical: [
    "Significant and lasting reduction in shooting, burning sciatic pain",
    "Reduced compression around the sciatic nerve — allowing natural healing",
    "Improved mobility and walking ability — return to normal daily activity",
    "Decreased or eliminated numbness and tingling in the leg and foot",
    "Strengthened lumbar and spinal muscles that protect the nerve long-term",
    "Many patients successfully avoid spinal surgery after completing the program",
  ],
  mental: [
    "Freedom from the constant psychological burden of chronic nerve pain",
    "Dramatically improved sleep quality — nerve pain is a leading cause of sleep disruption",
    "Restored confidence in movement — reclaim normal life",
    "Reduced anxiety and depression that commonly accompany long-term pain",
    "Deep mental relaxation through Shirodhara and meditation sessions",
    "Better mind-body awareness that supports healthier lifestyle choices",
  ],
  longTerm: [
    "Results continue to deepen for weeks after returning home",
    "Reduced dependence on pain medications and anti-inflammatory drugs",
    "Personalised post-program plan — dietary guidelines, yoga routine, herbal medicines",
    "With proper lifestyle maintenance, many patients remain pain-free for years",
    "Yoga routine to ensure benefits extend long after return home",
    "Lower relapse risk when post-program diet and routine are followed",
  ],
};

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/1.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/2.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/3.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/4.webp",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/5.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/6.webp",
];

const chooseIndiaPoints = [
  {
    title: "Deepest Nerve Healing Available",
    text: "Basti therapy works at a physiological depth that no Western treatment comes close to for Vata correction.",
    icon: Sparkles,
  },
  {
    title: "Medical Expertise",
    text: "India's leading centers treat sciatica as a serious medical condition with daily monitoring by qualified physicians.",
    icon: Stethoscope,
  },
  {
    title: "Surgery Avoidance Is Realistic",
    text: "Many international patients postpone or permanently avoid surgery after completing a full Ayurvedic program.",
    icon: ShieldCheck,
  },
  {
    title: "Unbeatable Value",
    text: "Spinal surgery costs $15,000–$50,000 abroad. A 21-day Ayurvedic program costs $2,500–$5,000 all-inclusive.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Healing Environment",
    text: "Kerala's warm climate is specifically beneficial for Vata conditions. Rest, clean air, and nourishing food support nerve recovery.",
    icon: Leaf,
  },
  {
    title: "Better Post-Program Continuity",
    text: "Centers provide discharge protocols, herbal medicine kits, diet plans, and remote follow-up to maintain results.",
    icon: Activity,
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
    description: "Case pre-screening and MRI review before booking to shortlist the right center and treatment pathway.",
    icon: CalendarCheck2,
  },
  {
    title: "Complete Journey Support",
    description: "From center selection to arrival coordination, transfers, and check-in flow management.",
    icon: Route,
  },
  {
    title: "During-Stay Assistance",
    description: "On-ground guidance through your full 21–28 day protocol for smooth continuity and comfort.",
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
    name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
    city: "Rishikesh",
    location: "Rishikesh",
    description: "Veda5 is one of India’s most premium Ayurveda & Yoga wellness retreats — combining luxury, nature, and authentic healing. From Himalayan views in Rishikesh to a serene beachfront retreat in Kerala & Goa, Veda5 offers world-class Ayurveda, detox therapies, and holistic rejuvenation.",
    rating: 4.9,
    reviews: 420,
    image: "/Center Images/veda5/veda5-1.jpg",
    link: "/centers/veda5"
  },
  {
    name: "The Imperial Spa and Wellness",
    city: "Delhi",
    location: "Delhi",
    description: "Step into a world of refined relaxation at The Imperial Spa and Wellness, a luxury wellness destination designed to restore balance, calm, and vitality. Blending timeless healing traditions with modern wellness therapies, the centre offers a peaceful retreat for guests seeking deep rejuvenation of body and mind. From personalized spa rituals to restorative wellness experiences, every treatment is thoughtfully curated by skilled professionals to deliver comfort, renewal, and holistic well-being in an elegant setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/The Imperial Spa & Salon/Thumb.jpg",
    link: "/centers/delhi/the-imperial-spa-and-wellness"
  },
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/centers/bangalore/soukya"
  },
  {
    name: "Kumarakom Lake Resort",
    city: "Kumarakom",
    location: "Kumarakom",
    description: "Experience the tranquil charm of Kerala's backwaters at Kumarakom Lake Resort, an award-winning heritage retreat on serene Vembanad Lake. Designed with traditional Kerala architecture, the resort blends luxury with cultural authenticity, offering Ayurvedic wellness, private villas, and peaceful nature-led rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/kumarakom lake resort/Thumb.jpg",
    link: "/centers/kerala/kumarakom-lake-resort"
  },
  {
    name: "Nalanda Retreat Goa",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in a soulful coastal wellness experience at Nalanda Retreat Goa, a serene beachside sanctuary blending yoga, Ayurveda, and holistic healing. Nestled along the tranquil shores of Mandrem Beach, Nalanda offers a transformative escape where ocean rhythms meet ancient wellness traditions. Rooted in mindful living and personalized care, the retreat features guided yoga sessions, meditation practices, and Ayurvedic therapies designed to restore balance and inner harmony.",
    rating: 4.5,
    reviews: 500,
    image: "/Center Images/Nalanda Retreat Goa/Thumb.jpg",
    link: "/centers/goa/nalanda-retreat-goa"
  },
  {
    name: "Dharana At Shillim",
    city: "Pune",
    location: "Pune",
    description: "Immerse yourself in a journey of deep wellness at Dharana At Shillim, a tranquil retreat dedicated to holistic healing and mindful living. Surrounded by the serene Sahyadri mountains, the center blends traditional healing wisdom with modern wellness practices to create a truly transformative experience. Guided by experienced practitioners, every program is thoughtfully designed to restore harmony between body, mind, and spirit. From personalized therapies to mindfulness and rejuvenation programs, Dharana At Shillim offers a peaceful sanctuary for those seeking balance, vitality, and long-term well-being.",
    rating: 4.8,
    reviews: 3900,
    image: "/Center Images/Dharana At Shillim/Thumb.jpg",
    link: "/centers/pune/dharana-at-shillim"
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "Immerse yourself in the authentic spirit of Ayurveda at AyurvedaGram Heritage Wellness Centre, a globally recognized destination for traditional Ayurvedic healing. Rooted in classical Ayurvedic principles and set within a serene heritage village, AyurvedaGram offers holistic therapies guided by experienced Vaidyas. Each treatment is personalized to restore balance of body, mind, and spirit, promoting long-lasting wellness through time-tested natural healing practices.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/centers/bangalore/ayurvedagram"
  },
  {
    name: "Chamundi Hill Palace Ayurvedic Resort",
    city: "Mysore",
    location: "Mysore",
    description: "A heritage-inspired Ayurvedic resort offering authentic therapies and a serene healing experience.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Chamundi Hill Palace/CTA.jpg",
    link: "/centers/mysore/chamundi-hill-palace"
  },
  {
    name: "Mercure Goa Devaaya Resort – Ayurveda Wellness Centre",
    city: "Goa",
    location: "Goa",
    description: "Step into a sanctuary of healing at the Ayurveda Wellness Centre at Mercure Goa Devaaya Resort, where ancient Ayurvedic wisdom meets tranquil island living. Nestled along the serene backwaters of Divar Island, this wellness retreat offers an immersive experience rooted in authentic Ayurvedic traditions. Guided by experienced Ayurvedic doctors and therapists, the centre delivers personalized therapies designed to restore the natural balance of body, mind, and spirit.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Mercure Goa Devaaya Resort/Thumb.jpg",
    link: "/centers/goa/mercure-goa-devaaya-resort"
  },
  {
    name: "Agni Ayurvedic Village Resort",
    city: "Kerala",
    location: "Kerala",
    description: "A tranquil wellness hideaway in the heart of Kerala, Agni Ayurvedic Village Resort blends ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it’s a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies. Expect genuine care, nurturing treatments, and an atmosphere that feels like coming home to yourself.",
    rating: 4.7,
    reviews: 190,
    image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
    link: "/centers/kerala/agni-ayurvedic-village"
  },
  {
    name: "Back to Roots Ayurveda Retreat",
    city: "Idukki",
    location: "Idukki",
    description: "Rediscover the roots of true healing at this serene lakeside sanctuary in Idukki. Guided by the wisdom of 4th generation Ayurvedic physicians, this NABH-accredited retreat offers authentic, classical Panchakarma in a pristine natural setting. Expect a deeply personal journey where the focus is on pure, undiluted Ayurveda.",
    rating: 4.9,
    reviews: 100,
    image: "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
    link: "/centers/kerala/back-to-roots"
  },
  {
    name: "Sanjeevanam Ayurveda Hospital",
    city: "Kochi",
    location: "Kochi",
    description: "Experience the future of holistic healthcare at Sanjeevanam, a pioneering integrative hospital in the heart of Kochi. It masterfully blends the ancient wisdom of Ayurveda with the precision of modern medicine, creating a unique and powerful ecosystem for deep healing. Expect evidence-based care in a modern, professional setting, where your journey to wellness is guided by a multi-disciplinary team of experts.",
    rating: 4.8,
    reviews: 1700,
    image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg",
    link: "/centers/kerala/sanjeevanam-ayurveda-hospital"
  },
];

const inclusionsRows = [
  { label: "Accommodation", details: "Private room or suite for 20–27 nights (as per package tier)", icon: BedDouble },
  { label: "Meals", details: "Three daily Ayurvedic meals personalised to Vata-pacifying dietary protocol", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial assessment plus daily or alternate-day monitoring by your Vaidya", icon: Stethoscope },
  { label: "Daily Therapies", details: "Kati Basti, Elakizhi, Abhyanga, Basti, Pizhichil, Swedana — as prescribed", icon: Activity },
  { label: "Ayurvedic Medicines", details: "All internal formulations and external medicated oils included", icon: Pill },
  { label: "Yoga and Meditation", details: "Daily therapeutic yoga — specifically for spinal health and nerve recovery", icon: Brain },
  { label: "Post-Program Support", details: "Personalised diet plan, herbal medicine supply, home yoga routine", icon: ClipboardCheck },
];

const costComparisonRows = [
  {
    program: "21–28 Day Sciatica Treatment",
    category: "Disease-Specific",
    cost: "$2,500 - $6,000",
    notes: "Nerve & back pain relief, full package",
  },
];

const faqItems = [
  { question: 'Can Ayurveda permanently cure sciatica?', answer: 'For many patients, yes — particularly when sciatica is caused by a herniated disc, piriformis syndrome, or functional spinal imbalances. Ayurvedic treatment corrects the Vata imbalance and tissue environment that allowed nerve compression to develop. Many patients remain pain-free for years after completing the program.' },
  { question: 'How quickly will I notice results?', answer: 'Many patients experience reduced pain and improved sleep within the first 7–10 days. The Basti program, which intensifies in week two, produces noticeable systemic nerve calming by days 12–15. By week three, the majority report substantially improved mobility and reduced leg symptoms.' },
  { question: 'I have an MRI showing disc herniation. Can I still do this program?', answer: 'Yes. The majority of international patients have imaging evidence of disc herniation. Your Ayurvedic physician will review your MRI before designing your treatment plan. The goal is to reduce inflammation and nerve compression to the point where natural healing restores function.' },
  { question: 'Is this program safe if I am currently on nerve pain medications?', answer: 'Yes. You should never stop your medications abruptly. Your Ayurvedic physician will review your current medication list and design a treatment plan that works safely alongside them. Many patients find their medication requirements reduce naturally as pain levels decrease.' },
  { question: 'Will I be able to fly to India with sciatica?', answer: 'Long flights can be uncomfortable. We advise booking business or premium economy when possible, using lumbar support, and walking the aisle regularly. Many patients fly 10–15 hours to reach India — the therapeutic benefits make the journey worthwhile.' },
  { question: 'How much does 21–28 day sciatica treatment cost in India?', answer: 'All-inclusive costs typically range from $2,500 to $5,000 USD for mid-range to premium centers. Luxury retreats may be $6,000–$8,500+. Compared to spinal surgery costs ($15,000–$50,000 abroad), this represents exceptional value.' },
  { question: 'Is Basti (enema therapy) uncomfortable?', answer: 'Basti is very well-tolerated. Patients typically experience warmth and release during treatment. The colon is highly absorbent and the medicated oils produce a profound calming and grounding effect throughout the body.' },
  { question: 'Can I combine treatment with yoga in Rishikesh?', answer: 'Yes — for sciatica, this is particularly powerful. Many patients spend the first two weeks at a Kerala resort for deep clinical treatment, then move to Rishikesh for therapeutic yoga integration. Our team can design multi-location programs.' },
  { question: 'Can I travel back home immediately after the 21 days?', answer: 'Yes, but we recommend 2-3 days of light activity in India before your long-haul flight. This helps your body stabilize after the intensive detox and ensures a more comfortable journey home.' },
  { question: 'What is the risk of the sciatic pain returning?', answer: 'If the post-program lifestyle plan (Pathya) and recommended exercises are followed, the risk of recurrence is very low. Most patients who achieve results in the 28-day program maintain them for several years.' }
];

const patientReviews = [
  {
    name: 'Caroline Bauer',
    location: 'Zurich, Switzerland',
    condition: 'Chronic sciatic nerve pain',
    title: 'The Electric Shock Pain Is Finally Gone!',
    review: 'For three years, I lived with shooting, electric shock pain, unable to sit through a meal or sleep more than two hours. After a 23-day Ayurvedic program, the Kati Basti and Abhyanga Swedana sessions were deeply targeted. By day eighteen, the electric shock sensation had completely stopped.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Thomas Eriksson',
    location: 'Stockholm, Sweden',
    condition: 'Career-threatening sciatica',
    title: 'I Can Drive Again After Two Years',
    review: 'As a long-distance truck driver, sciatica was destroying my career. I underwent a 28-day residential Panchakarma program. The combination of Dhanyamla Dhara, medicated steam, and internal herbal kashayam worked progressively. By the final week, I was doing guided yoga with almost no pain.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Fatima Al-Rashidi',
    location: 'Dubai, UAE',
    condition: 'L4-L5 disc herniation',
    title: 'Avoided Spinal Surgery — Twice Recommended!',
    review: 'Two neurosurgeons recommended spinal surgery for my L4-L5 disc. After a 26-day Ayurvedic program, the Kala Basti combined with Patrapotali Swedana gave me relief I hadn\'t felt in four years. My follow-up MRI showed measurable reduction in disc inflammation. Surgery is now completely off the table.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Gregory Fontaine',
    location: 'Montreal, Canada',
    condition: 'Severe mobility loss',
    title: 'From a Wheelchair to Walking Freely',
    review: 'My sciatica had progressed so badly that I was using a wheelchair for long distances. A 28-day intensive program was my last hope. The Sarvangadhara warm oil treatment and Navarakizhi rice bolus therapy rebuilt my lower body strength week by week. I walked unassisted through the airport on my way home.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Priya Nambiar',
    location: 'Kuala Lumpur, Malaysia',
    condition: 'Sleep-disrupting nerve pain',
    title: 'Finally Slept Through the Night After 18 Months',
    review: 'Chronic sciatica had completely stolen my sleep. I would wake up multiple times every night with searing pain. The physician diagnosed a combined Vata-Kapha imbalance and prescribed Virechana detox followed by daily Elakizhi massage. From day ten onwards, I began sleeping through the night.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Stefan Kowalski',
    location: 'Warsaw, Poland',
    condition: 'Herniated disc with nerve compression',
    title: 'My Back Surgeon Is Genuinely Surprised',
    review: 'After decades as a construction engineer, my spine gave out with a herniated disc. My surgeon gave me a 60% chance of recovery even with surgery. The Kati Basti and Guggulu herbal medicines addressed the root inflammation. My post-treatment MRI showed disc improvement, and my surgeon called the result remarkable.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Ngozi Adeyemi',
    location: 'Abuja, Nigeria',
    condition: 'Failed conventional treatment',
    title: 'Worth Every Hour of the Journey to India',
    review: 'Traveling from Nigeria felt daunting, but fourteen months of failed sciatica treatment left me no choice. My 22-day program included Abhyanga Swedana and Basti therapy. I was able to discontinue all my painkillers by day twelve. The long journey was absolutely worth it.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Isabella Russo',
    location: 'Rome, Italy',
    condition: 'Professional yoga instructor',
    title: 'Ayurveda Gave Me My Active Life Back',
    review: 'As a yoga instructor, sciatica was professionally devastating. After a 27-day stay, the Pizhichil synchronized warm oil therapy and targeted Greeva Basti transformed my recovery. I returned to teaching full classes within two weeks of coming home.',
    rating: 5,
    verified: true,
  },
  {
    name: 'William Ashford',
    location: 'Auckland, New Zealand',
    condition: 'Three years of chronic pain',
    title: 'Three Weeks That Undid Three Years of Suffering',
    review: 'I had tried everything my healthcare system offered. The detailed initial consultation was unlike any I\'d ever had. The Patra Pinda Swedana and internal Dashamoola herbal medicines worked brilliantly. I am pain-free for the first time since 2021.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Mei-Ling Zhao',
    location: 'Singapore',
    condition: 'Prolapsed disc nerve pain',
    title: 'My Neurologist Called It an Unexpectedly Rapid Recovery',
    review: 'Sciatic nerve pain from a prolapsed disc had left me unable to climb stairs or sit at my desk. The Kati Basti and Basti Karma herbal enema therapy specifically targeted my nerve compression. My follow-up neurological assessment showed nerve conduction improvement beyond what my doctor anticipated.',
    rating: 5,
    verified: true,
  },
];

const SciaticaTreatment = () => {
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
    const updateBenefitsVisibleCards = () => {
      if (window.innerWidth < 768) { setBenefitsVisibleCards(1); return; }
      if (window.innerWidth < 1024) { setBenefitsVisibleCards(2); return; }
      setBenefitsVisibleCards(4);
    };
    updateBenefitsVisibleCards();
    window.addEventListener("resize", updateBenefitsVisibleCards);
    return () => window.removeEventListener("resize", updateBenefitsVisibleCards);
  }, []);

  useEffect(() => {
    const updateTopCentersLayout = () => {
      if (window.innerWidth < 768) { setTopCentersPerSlide(1); setTopCentersMobileView(true); return; }
      if (window.innerWidth < 1024) { setTopCentersPerSlide(2); setTopCentersMobileView(false); return; }
      setTopCentersPerSlide(3); setTopCentersMobileView(false);
    };
    updateTopCentersLayout();
    window.addEventListener("resize", updateTopCentersLayout);
    return () => window.removeEventListener("resize", updateTopCentersLayout);
  }, []);

  const goToPrevious = () => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToNext = () => setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  const goBenefitsPrevious = () => setBenefitsImageIndex((prev) => (prev - 1 + benefitsSectionImages.length) % benefitsSectionImages.length);
  const goBenefitsNext = () => setBenefitsImageIndex((prev) => (prev + 1) % benefitsSectionImages.length);

  const benefitsVisibleImages = Array.from({ length: benefitsVisibleCards }, (_, idx) => {
    const imageIndex = (benefitsImageIndex + idx) % benefitsSectionImages.length;
    return { src: benefitsSectionImages[imageIndex], key: `${benefitsSectionImages[imageIndex]}-${benefitsImageIndex}-${idx}` };
  });
  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  const visibleTopCenters = topAyurvedicCenters.slice(topCentersSlide * topCentersPerSlide, topCentersSlide * topCentersPerSlide + topCentersPerSlide);

  useEffect(() => { setTopCentersSlide((prev) => prev % topCentersTotalSlides); }, [topCentersTotalSlides]);

  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (centerName: string) => { setExpandedCenterName((prev) => (prev === centerName ? null : centerName)); };
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Ayurveda Treatment for Sciatica in India</h1>
              <p className="text-lg md:text-xl text-white/90">Permanent nerve & back pain relief with physician-led Ayurvedic care.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>Kerala, Rishikesh, Dharamshala</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.7/5 Excellent Relief Index</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-semibold" onClick={() => setQuoteModalOpen(true)}>
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-20 md:space-y-24">
        <section id="gallery" className="scroll-mt-24 mb-0">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Program Gallery for Sciatica Treatment in India</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Sciatica treatment program" className="w-full h-[260px] md:h-[460px] object-cover" />
            <button onClick={goToPrevious} className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition" aria-label="Previous image"><ChevronLeft className="h-6 w-6" /></button>
            <button onClick={goToNext} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition" aria-label="Next image"><ChevronRight className="h-6 w-6" /></button>
          </div>
        </section>

        <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">21–28 Days</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Nerve Pain, Back Pain</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Top Locations</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Kerala, Rishikesh, Dharamshala</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">$2,500 – $6,000</p>
                </div>
              </div>

              <div className="grid gap-2 md:hidden">
                {quickSummaryRows.map((row, idx) => (
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
                <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is Ayurvedic Treatment for Sciatica?</h2>
                <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">
                  Sciatica is one of the most debilitating pain conditions a person can experience. That sharp, burning sensation that starts deep in your lower back and shoots through your buttock, down the back of your thigh, and sometimes all the way to your foot. In Ayurveda, sciatica is known as <em>Gridhrasi</em> — a disorder rooted in the aggravation of Vata dosha, the body's governing energy for movement, nerve signals, and lower-body function.
                </p>
                <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
                  The 21–28 day Ayurvedic sciatica treatment program directly targets root causes — not just the symptoms — using deeply penetrating therapies, internal herbal medicines, and personalised lifestyle protocols.{" "}
                  <button type="button" onClick={() => setQuoteModalOpen(true)} className="underline underline-offset-4 decoration-2 font-bold uppercase hover:text-[#7F543D] transition-colors">CONTACT</button>{" "}
                  Svastha Global to connect with the best of authentic <span className="italic">Ayurveda</span> in India.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
            <CardContent className="p-6 md:p-8">
              {/* Metrics Section */}
              <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8 md:mb-10">
                <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 flex items-center justify-center mb-2 md:mb-3">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">850+</div>
                  <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Patients</div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-2 md:mb-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">4.7/5</div>
                  <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Patient Satisfaction Metrics</div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 md:mb-3">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">96%</div>
                  <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Clinical Result / Outcome Index</div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4 text-center">Core Ayurvedic Therapies for Sciatica</h2>
              <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">Your Vaidya prescribes the right combination based on your nerve condition, dosha constitution, and treatment response.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {therapies.map((item) => {
                  const titleMatch = item.title.match(/^([^()]+)\s*\(([^)]+)\)$/);
                  const mainTitle = titleMatch ? titleMatch[1].trim() : item.title;
                  const subTitle = titleMatch ? `(${titleMatch[2].trim()})` : "";
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0"><Icon className="h-5 w-5 text-[#2F5B5D]" /></div>
                        <h3 className="font-semibold text-[#335765] leading-snug"><span className="block">{mainTitle}</span>{subTitle && <span className="block">{subTitle}</span>}</h3>
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
                <div className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200"><CircleCheck className="h-5 w-5 text-green-700" /></span><h2 className="text-2xl font-bold text-[#335765]">Who Is This Program For?</h2></div>
                <ul className="space-y-3">{candidatePoints.map((point) => (<li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-green-300"><CircleCheck className="h-3.5 w-3.5 text-green-700" /></span><span>{point}</span></li>))}</ul>
              </CardContent>
            </Card>
            <Card className="h-full border-green-300 bg-white shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200"><AlertTriangle className="h-5 w-5 text-[#335765]" /></span><h3 className="text-2xl font-bold text-[#335765]">Who Should Avoid This Program</h3></div>
                <ul className="space-y-3">{avoidPoints.map((point) => (<li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-300"><XCircle className="h-3.5 w-3.5 text-red-600" /></span><span>{point}</span></li>))}</ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="week-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
          <div className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 21–28 Day Treatment Program — Week by Week</h2>
            <p className="text-[#7F543D] mt-2">A structured three-phase clinical approach — every phase has a specific therapeutic purpose.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {weekBreakdown.map((week, idx) => (
              <AccordionItem key={week.title} value={`week-${idx}`} className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-green-500">
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
                  <div className="text-left"><p className="text-lg font-bold text-[#335765]">{week.title}</p><p className="text-sm text-[#8C765E]">{week.duration} - {week.focus}</p></div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-6">
                  <div>
                    <p className="text-[#7F543D] mb-4 leading-relaxed">{week.description}</p>
                    <p className="font-semibold text-[#335765] mb-2.5">Key Therapies</p>
                    <ul className="space-y-2.5 text-sm text-[#7F543D]">{week.bullets.map((bullet) => (<li key={bullet} className="flex items-start gap-2.5 leading-relaxed"><CircleCheck className="h-4 w-4 mt-0.5 text-green-600 shrink-0" /><span>{bullet}</span></li>))}</ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="benefits" className="scroll-mt-24 !mt-6 md:!mt-10">
          <div className="mb-7 md:mb-8">
            <div className="relative">
              <button onClick={goBenefitsPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md" aria-label="Previous benefits image"><ChevronLeft className="h-7 w-7" /></button>
              <button onClick={goBenefitsNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md" aria-label="Next benefits image"><ChevronRight className="h-7 w-7" /></button>
              <div className="overflow-hidden px-10 md:px-14">
                <div className="md:hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${benefitsImageIndex * 100}%)` }}>
                    {benefitsSectionImages.map((image, idx) => (<div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5"><div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]"><img src={image} alt="Sciatica treatment visual" className="w-full h-28 object-cover rounded-lg" loading="lazy" /></div></div>))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {benefitsVisibleImages.map((image) => (<div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-primary/10 hover:border-primary/30 transition-all"><img src={image.src} alt="Sciatica treatment visual" className="w-full h-24 md:h-28 object-cover rounded-lg" loading="lazy" /></div>))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {benefitsSectionImages.map((_, idx) => (<button key={`benefits-dot-${idx}`} onClick={() => setBenefitsImageIndex(idx)} aria-label={`Go to benefits image ${idx + 1}`} className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#335765]" : "w-2.5 bg-[#C7D1C9]"}`} />))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of Ayurvedic Sciatica Treatment</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition"><CardContent className="p-6"><div className="flex items-center gap-3 mb-4"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]"><HeartPulse className="h-5 w-5 text-[#2F5B5D]" /></span><h3 className="font-bold text-[#335765]">Physical Benefits</h3></div><ul className="space-y-2 text-sm text-[#7F543D]">{benefits.physical.map((item) => <li key={item}>- {item}</li>)}</ul></CardContent></Card>
            <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition"><CardContent className="p-6"><div className="flex items-center gap-3 mb-4"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]"><Brain className="h-5 w-5 text-[#2F5B5D]" /></span><h3 className="font-bold text-[#335765]">Mental and Emotional Benefits</h3></div><ul className="space-y-2 text-sm text-[#7F543D]">{benefits.mental.map((item) => <li key={item}>- {item}</li>)}</ul></CardContent></Card>
            <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition"><CardContent className="p-6"><div className="flex items-center gap-3 mb-4"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]"><Sparkles className="h-5 w-5 text-[#2F5B5D]" /></span><h3 className="font-bold text-[#335765]">Long-Term Effects</h3></div><ul className="space-y-2 text-sm text-[#7F543D]">{benefits.longTerm.map((item) => <li key={item}>- {item}</li>)}</ul></CardContent></Card>
          </div>
        </section>

        <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 mb-12 md:mb-16 space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765]">Cost of Ayurvedic Sciatica Treatment in India</h2>
            <p className="mt-2 text-[#7F543D]">World-class Ayurvedic care for sciatica at a fraction of what equivalent treatment would cost abroad.</p>
          </div>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-5 md:p-6 space-y-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center"><p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p><p className="mt-2 text-2xl font-bold text-[#335765]">21–28 Days</p><p className="mt-1 text-sm text-[#6F6B5C]">Structured nerve recovery and Vata correction timeline.</p></div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center"><p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p><p className="mt-2 text-2xl font-bold text-[#335765]">$2,500 - $6,000</p><p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for reputable centers and full-stay plans.</p></div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center"><div className="flex items-center justify-center gap-3 mb-2"><div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0"><Sparkles className="h-5 w-5 text-[#335765]" /></div><p className="text-xl md:text-2xl font-bold text-[#335765]">MOST POPULAR</p></div><p className="mt-1 text-sm text-[#6F6B5C]">Sciatica-focused recovery with accommodation and therapies.</p></div>
              </div>
              <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left"><p className="font-semibold text-[#335765]">Disease-Specific — Sciatica Treatment</p><span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">High demand package</span></div>
                <div className="md:hidden p-3 space-y-2 bg-white">
                  {costComparisonRows.map((row) => (<div key={row.program} className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]"><p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p><p className="mt-1 text-sm text-[#7F543D] font-semibold break-words">{row.program}</p><div className="mt-3 grid grid-cols-1 gap-2"><div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Category</p><p className="text-sm text-[#7F543D] font-semibold">{row.category}</p></div><div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p><p className="text-sm text-[#7F543D] font-semibold">{row.cost}</p></div><div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p><p className="text-sm text-[#7F543D] font-semibold break-words">{row.notes}</p></div></div></div>))}
                </div>
                <div className="hidden md:block overflow-auto">
                  <table className="w-full text-sm min-w-[680px]"><thead className="bg-[#F5F8F6] text-[#335765]"><tr><th className="text-left p-3 font-semibold">Program</th><th className="text-left p-3 font-semibold">Category</th><th className="text-left p-3 font-semibold">Cost</th><th className="text-left p-3 font-semibold">Notes</th></tr></thead><tbody>{costComparisonRows.map((row) => (<tr key={row.program} className="border-t bg-white"><td className="p-3 font-medium text-[#3D4B4C]">{row.program}</td><td className="p-3 text-[#7F543D]">{row.category}</td><td className="p-3 text-[#7F543D]">{row.cost}</td><td className="p-3 text-[#7F543D]">{row.notes}</td></tr>))}</tbody></table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="why-india" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14">
          <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full"><CardContent className="p-6 md:p-8 space-y-6"><h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">Why Choose India for Sciatica Treatment?</h2><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{chooseIndiaPoints.map((item) => { const Icon = item.icon; return (<div key={item.title} className="rounded-lg border border-[#d9cfae] p-4 bg-white hover:shadow-md transition"><div className="flex items-center gap-2.5"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]"><Icon className="h-4.5 w-4.5 text-[#335765]" /></span><p className="font-semibold text-[#335765]">{item.title}</p></div><p className="text-sm text-[#7F543D] mt-2">{item.text}</p></div>); })}</div></CardContent></Card>
        </section>

        <section id="why-us" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]" style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}>
          <div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl font-bold text-[#335765] mb-3">Why Choose Us for Sciatica Treatment</h2><p className="text-[#7F543D]">Not just booking support - structured guidance from pre-consultation to post-program continuity.</p></div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5"><span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">Doctor-Screened Centers</span><span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">40+ Countries Supported</span><span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">MRI Review Support</span></div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">{whyChooseUsPoints.map((point, idx) => { const Icon = point.icon; return (<div key={point.title} className="bg-white rounded-2xl p-4 border border-[#d7dcca] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"><div className="flex items-center gap-3 mb-3"><span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F6EF] ring-1 ring-green-200"><Icon className="h-5 w-5 text-[#1E7A4D]" /></span><p className="text-sm font-bold text-[#335765]">{idx + 1}. {point.title}</p></div><p className="text-sm leading-relaxed text-[#5C5E52]">{point.description}</p></div>); })}</div>
        </section>

        <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
          <div className="text-center space-y-2"><h2 className="text-3xl font-bold text-[#335765]">What Is Included in the Treatment Package?</h2><p className="text-[#7F543D]">Everything essential for a supervised nerve recovery and continuity plan.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center"><p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p><p className="text-lg font-bold text-[#335765] mt-1">21–28 Days</p></div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center"><p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p><p className="text-lg font-bold text-[#335765] mt-1">20–27 Nights</p></div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center"><p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Core Inclusions</p><p className="text-lg font-bold text-[#335765] mt-1">Therapies + Meals</p></div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center"><p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Care Model</p><p className="text-lg font-bold text-[#335765] mt-1">Doctor-Supervised</p></div>
          </div>
          <Card className="shadow-sm border-[#dfe7e2]">
            <CardContent className="p-3 md:p-0">
              <div className="md:hidden grid gap-2">{inclusionsRows.map((row) => { const Icon = row.icon; return (<div key={row.label} className="rounded-xl border border-[#d8d0ae] px-3 py-3 bg-white"><div className="flex items-center gap-2.5"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]"><Icon className="h-4 w-4 text-[#335765]" /></span><p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{row.label}</p></div><p className="mt-2 text-sm leading-relaxed text-[#7F543D] font-semibold break-words">{row.details}</p></div>); })}</div>
              <div className="hidden md:block overflow-auto"><table className="w-full text-sm min-w-[680px]"><thead className="bg-[#F5F8F6] text-[#335765]"><tr><th className="text-left p-3 font-semibold">Inclusion</th><th className="text-left p-3 font-semibold">Details</th></tr></thead><tbody>{inclusionsRows.map((row) => { const Icon = row.icon; return (<tr key={row.label} className="border-t"><td className="p-3 font-medium text-[#3D4B4C]"><div className="flex items-center gap-2.5"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]"><Icon className="h-4 w-4 text-[#335765]" /></span><span>{row.label}</span></div></td><td className="p-3 text-[#7F543D]">{row.details}</td></tr>); })}</tbody></table></div>
            </CardContent>
          </Card>
          <div className="rounded-xl border border-[#88a7ad] border-l-4 border-l-[#335765] bg-[#E7F0F1] px-4 py-4 md:px-5 md:py-4"><div className="flex items-start gap-3"><div className="mt-1 shrink-0"><CircleCheck className="h-5 w-5 text-[#335765]" /></div><div><p className="text-[#214348] font-bold">Important Notice</p><p className="text-sm text-[#335765] leading-relaxed mt-1">All treatments and dietary plans are strictly supervised by qualified Ayurvedic doctors. Specific therapies may vary based on your individual medical profile and response to the program.</p></div></div></div>
        </section>

        <section id="consultation" className="scroll-mt-24 !mt-6 md:!mt-10 overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2"><img src="/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/1.webp" alt="Sciatica treatment consultation" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" /></div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Sciatica Treatment Program</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.</p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%20Sciatica%20treatment%20program." target="_blank" rel="noreferrer" className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition" aria-label="WhatsApp Us Now"><span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span><span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span></a>
                <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>Get Free Consultation Here</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 !mt-8 md:!mt-14">
          <div className="text-center mb-10"><h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2></div>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
            {faqItems.map((item, idx) => (<AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all"><AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{item.question}</AccordionTrigger><AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{item.answer}</AccordionContent></AccordionItem>))}
          </Accordion>
        </section>

        <section id="top-centers" className="scroll-mt-24 !mt-10 md:!mt-16 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4"><h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers for Sciatica Treatment in India</h2><p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for sciatica treatment programs.</p></div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2"><button onClick={goTopCentersPrevious} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Previous centers"><ChevronLeft className="h-4 w-4 md:h-6 md:w-6" /></button></div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2"><button onClick={goTopCentersNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Next centers"><ChevronRight className="h-4 w-4 md:h-6 md:w-6" /></button></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 w-full px-0 md:px-6 lg:px-8 items-stretch">
              {visibleTopCenters.map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                    <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0"><img src={center.image} alt={center.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" /></div>
                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex text-left">{center.name}</h3>
                      <div className="flex flex-nowrap items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 md:mt-1 md:mb-4 text-left overflow-hidden"><div className="flex items-center gap-1.5 shrink min-w-0"><MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" /><span className="text-[12px] md:text-[13px] font-semibold truncate" title={center.city}>{center.city}</span></div><div className="flex items-center gap-1 shrink-0 whitespace-nowrap"><Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" /><span className="text-[12px] md:text-[13px] font-bold text-[#335765]">({center.rating} rating)</span></div></div>
                      <div className="relative mb-3 flex-grow text-left"><p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>{center.description}</p><button onClick={() => toggleCenterDescription(center.name)} className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block">{expandedCenterName === center.name ? "Read Less" : "Read More"}</button></div>
                      <div className="grid grid-cols-2 gap-3 mt-auto"><Link to={center.link} className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap">View Details</Link><Button className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs" onClick={() => setQuoteModalOpen(true)}>Get Quote</Button></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {topCentersTotalSlides > 1 && (<div className="flex justify-center gap-2 mt-4">{Array.from({ length: topCentersTotalSlides }).map((_, i) => (<button key={i} onClick={() => setTopCentersSlide(i)} className={`h-1.5 rounded-full transition-all ${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`} />))}</div>)}
            <div className="flex justify-center mt-4"><Button className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group" onClick={() => navigate('/centers')}>VIEW ALL CENTERS<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></div>
          </div>
        </section>
      </main>

      <section id="reviews" className="scroll-mt-24 pt-8 pb-8 md:pt-10 md:pb-12 bg-transparent w-full">
        <div className="container mx-auto px-4 max-w-6xl text-left">
          <div className="text-center mb-6 md:mb-8 space-y-3"><h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2><p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p></div>
          <div className="max-w-4xl mx-auto relative px-0 md:px-0">
            <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20"><button onClick={goReviewPrevious} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Previous review"><ChevronLeft className="h-4 w-4 md:h-6 md:w-6" /></button></div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20"><button onClick={goReviewNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Next review"><ChevronRight className="h-4 w-4 md:h-6 md:w-6" /></button></div>
            <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-4 md:p-12 relative">
                <div className="max-w-4xl mx-auto">
                  <div className="text-[#335765]/20 mb-3 md:mb-4"><svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg></div>
                  <div className="mb-4 md:mb-6"><h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">{patientReviews[currentReview].title}</h3><p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>"{patientReviews[currentReview].review}"</p></div>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">{patientReviews[currentReview].name.charAt(0)}</div>
                    <div className="flex-1 min-w-0"><div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-1 overflow-visible"><h4 className="text-sm md:text-xl font-bold text-[#335765] leading-tight">{patientReviews[currentReview].name}</h4>{patientReviews[currentReview].verified && (<span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold whitespace-nowrap border border-green-200">&#10003; Verified</span>)}</div><p className="text-[10px] md:text-sm leading-snug" style={{ color: "#7F543D" }}>{patientReviews[currentReview].location} {patientReviews[currentReview].condition && `- ${patientReviews[currentReview].condition}`}</p></div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3"><div className="flex gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />))}</div><span className="text-xs md:text-sm font-semibold text-[#335765]">{patientReviews[currentReview].rating}.0</span></div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center gap-2 mt-8">{patientReviews.map((_, idx) => (<button key={idx} onClick={() => { setCurrentReview(idx); setReviewAutoPlay(false); }} className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#335765]" : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"}`} aria-label={`Go to review ${idx + 1}`} />))}</div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button onClick={() => setIsJumpModalOpen(true)} className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter">
          <span className="drop-shadow-sm">B</span><span className="drop-shadow-sm">R</span><Search size={16} strokeWidth={3.5} className="drop-shadow-sm" /><span className="drop-shadow-sm">W</span><span className="drop-shadow-sm">S</span><span className="drop-shadow-sm">E</span>
        </button>
      </div>

      {/* Mobile BROWSE button */}
      <button onClick={() => setIsJumpModalOpen(true)} className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Search size={18} className="-ml-1" /><span>BROWSE</span></button>

      <button onClick={() => setQuoteModalOpen(true)} className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Phone size={18} className="-ml-1" /><span className="hidden md:inline">GET FREE QUOTE</span><span className="md:hidden">QUOTE</span></button>

      <div className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />
        <div className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5"><div className="flex items-center gap-2 mb-1"><div className="h-px w-6 bg-white/30" /><span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span></div><h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Program Sections</h2></div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50" title="Close Menu"><X className="h-6 w-6 transition-transform" /></button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm"><ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" /><p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section in this program page."</p></div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10"><div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200"><span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span></div><span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">{section.title}</span></div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200"><ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" /></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SciaticaTreatment;
