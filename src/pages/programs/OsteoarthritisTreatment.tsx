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
  "/program-images/osteoarthritis-consultation.png",
  "/program-images/osteoarthritis-kizhi.png",
  "/program-images/osteoarthritis-yoga.png",
  "/program-images/synchronized-therapy.png",
  "/program-images/patient-recovery.png",
  "/program-images/takradhara.png"
];

const quickSummaryRows = [
  ["Condition Treated", "Osteoarthritis (Sandhivata) — knee, hip, spine, hands"],
  ["Treatment Duration", "21-28 Days (recommended for full therapeutic benefit)"],
  ["Who It Is For", "Adults with mild to advanced osteoarthritis seeking natural, drug-free relief"],
  ["Core Approach", "Panchakarma detox + targeted joint therapies + herbal medicines"],
  ["Key Benefit", "Pain relief, reduced inflammation, improved mobility, cartilage support"],
  ["Top Locations", "PAN India"],
  ["Average Cost", "$2,500 - $6,000 USD (all-inclusive)"],
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
    title: 'Janu Basti (Knee Oil Pooling Therapy)',
    text: 'A specially designed dough ring is placed around the knee joint and filled with warm, medicated herbal oil. It acts deeply to reduce pain, improve lubrication, and slow cartilage degeneration.',
    icon: Droplet,
  },
  {
    title: 'Abhyanga (Medicated Full-Body Oil Massage)',
    text: 'Daily full-body massage using warm herbal oils specifically chosen for your Vata constitution to improve circulation and nourish joint tissue.',
    icon: Heart,
  },
  {
    title: 'Kizhi (Herbal Pouch Massage)',
    text: 'Warm bundles filled with medicinal herbs, rice, or sand applied rhythmically to joints to reduce swelling and relieve deep muscular tension.',
    icon: Leaf,
  },
  {
    title: 'Pizhichil (Warm Oil Stream Therapy)',
    text: 'A continuous stream of warm medicated oil is poured over the body while being massaged in, exceptional for restoring mobility and relieving chronic stiffness.',
    icon: Activity,
  },
  {
    title: 'Basti (Medicated Enema Therapy)',
    text: 'The most powerful Vata-balancing treatment. Acts systemically to reduce Vata throughout the body and bring relief to multiple affected joints.',
    icon: Sparkles,
  },
  {
    title: 'Swedana (Herbal Steam Therapy)',
    text: 'Targeted or full-body steam using medicinal herbs opens the body\'s channels, loosens deep toxin deposits, and significantly reduces stiffness.',
    icon: Stethoscope,
  }
];

const candidatePoints = [
  "Have been diagnosed with osteoarthritis of the knee, hip, spine, or hands",
  "Experience persistent joint pain, stiffness, or swelling that limits daily activities",
  "Are taking painkillers or anti-inflammatory drugs and want to reduce medication dependence",
  "Have been advised joint replacement surgery and want to explore alternatives first",
  "Are in your 40s, 50s, or 60s seeking both treatment and long-term prevention",
  "Want a clinically supervised program that goes beyond relaxation into genuine medical treatment",
  "Are dealing with related conditions such as obesity or poor circulation that worsen joint health",
  "Have tried modern treatment and want a holistic natural approach",
];

const avoidPoints = [
  "People with active joint infection or septic arthritis",
  "Individuals with complete ligament tears or unhealed fractures in the joint",
  "Patients who are extremely frail or debilitated",
  "Pregnant women",
  "Those who have undergone joint replacement surgery (modified programs may be available)",
];

const weekBreakdown = [
  { 
    title: 'Week 1 - Purva Karma (Preparation)', 
    duration: 'Day 1-7',
    focus: 'Loosening toxins, preparing joints for deep treatment', 
    description: 'Your program begins with a thorough one-on-one consultation with your Ayurvedic physician, who will assess your joint condition, overall health, and dosha constitution. Daily Abhyanga and Swedana begin to soften deep tissue deposits, improve circulation around the joints, and prepare your body to release toxins. A carefully designed anti-inflammatory Ayurvedic diet begins on day one.', 
    bullets: ['Abhyanga', 'Swedana', 'Dietary modifications', 'Oral herbal medicines', 'Initial Janu Basti'] 
  },
  { 
    title: 'Week 2 - Pradhana Karma (Core Treatment)', 
    duration: 'Day 8-14',
    focus: 'Active detox and targeted joint healing', 
    description: 'This is the most therapeutically intensive phase. Janu Basti is typically performed daily for 30 minutes per knee. Kizhi treatments targeting the hips, lower back, and affected areas bring significant relief. Basti therapy begins — the systematic colon cleansing that works on Vata at its root, producing effects felt throughout the musculoskeletal system.', 
    bullets: ['Janu Basti', 'Kizhi', 'Pizhichil', 'Basti', 'Virechana (if prescribed)', 'Shirodhara'] 
  },
  { 
    title: 'Week 3 - Paschat Karma (Rejuvenation)', 
    duration: 'Day 15-21',
    focus: 'Tissue rebuilding, strengthening, mobility restoration', 
    description: 'With the body now cleansed and the acute inflammation addressed, treatment shifts to rebuilding and strengthening. Rasayana therapies nourish the bone tissue and synovial fluid. Daily therapeutic yoga sessions — gentle, joint-specific movements chosen by your doctor — begin to restore functional mobility.', 
    bullets: ['Rasayana therapies', 'Rejuvenating oils', 'Therapeutic yoga', 'Dietary plan'] 
  },
  { 
    title: 'Week 4 - Extended Recovery (Optional)', 
    duration: 'Day 22-28',
    focus: 'For advanced cases needing deeper systemic treatment', 
    description: 'Patients with more advanced osteoarthritis, multiple joint involvement, or those who wish to achieve the deepest possible therapeutic benefit are recommended the full 28-day program. The additional week allows for extended Basti cycles that produce more profound systemic Vata correction.', 
    bullets: ['Extended Basti cycles', 'Additional Kizhi', 'Functional mobility exercises'] 
  }
];

const benefits = {
  physical: [
    "Significant reduction in chronic joint pain — 60-80% pain reduction reported",
    "Reduced joint inflammation and swelling in knee and hip osteoarthritis",
    "Improved joint lubrication — Basti and Janu Basti address synovial fluid quality",
    "Restored mobility and flexibility — regain functional movement",
    "Slowed cartilage degeneration through strengthened ligaments and tendons",
    "Many patients avoid or delay elective joint replacement surgery",
  ],
  mental: [
    "Relief from the psychological burden of chronic pain",
    "Dramatically improved sleep quality",
    "Reduced anxiety and depression linked to long-term pain conditions",
    "Renewed confidence in daily physical activity",
    "Deep mental relaxation through Shirodhara and meditation sessions",
    "Better mind-body awareness that supports healthier lifestyle choices",
  ],
  longTerm: [
    "Results continue to improve for weeks and months after the program ends",
    "Reduced dependence on NSAIDs and painkillers under medical supervision",
    "Sustained improvement in joint mobility with Ayurvedic diet compliance",
    "Personalised home-care plan including herbal medicines and dietary guidelines",
    "Yoga routine to ensure benefits extend long after return home",
    "Lower relapse risk when post-program diet and routine are followed",
  ],
};

const benefitsSectionImages = [
  "/program-images/osteoarthritis-consultation.png",
  "/program-images/osteoarthritis-kizhi.png",
  "/program-images/osteoarthritis-yoga.png",
  "/program-images/synchronized-therapy.png",
  "/program-images/patient-recovery.png",
  "/program-images/psoriasis-main.png",
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
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in the serene beauty of coastal Ayurveda at Niraamaya Retreats Surya Samudra, a luxurious wellness destination on Kerala's pristine shores. Known for authentic therapies and tranquil ocean views, it blends traditional healing with modern comfort for deep rejuvenation.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
    link: "/centers/kerala/niraamaya-retreats-surya-samudra"
  },
  {
    name: "Namaste Dwaar – Countryside Wellness Retreat",
    city: "Delhi",
    location: "Delhi",
    description: "Peaceful farmhouse sanctuary near NCR offering authentic Ayurvedic therapies, farm-fresh sattvic food, and compassionate care.",
    rating: 4.8,
    reviews: 180,
    image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
    link: "/centers/delhi/namastedwaar"
  },
  {
    name: "Ayurmana",
    city: "Kerala",
    location: "Kerala",
    description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayurmana center/top center thumb.jpg",
    link: "/centers/kerala/ayurmana"
  },
  {
    name: "Ayur Bethaniya Ayurveda Hospital",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in holistic healing at Ayur Bethaniya Ayurveda Hospital, a trusted destination for authentic Ayurvedic treatments in the heart of Kerala. Rooted in traditional wisdom and guided by experienced Ayurvedic physicians, the hospital offers personalized therapies designed to restore balance of body, mind, and soul. Set in a calm and healing environment, Ayur Bethaniya combines classical Ayurveda with compassionate care for long-lasting wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayur Bethaniya/CTA.jpg",
    link: "/centers/kerala/ayur-bethaniya-ayurveda-hospital"
  },
  {
    name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
    rating: 4.8,
    reviews: 220,
    image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
    link: "/centers/kerala/kairali-heritage"
  },
  {
    name: "The Nattika Beach Resort",
    city: "Thrissur",
    location: "Thrissur",
    description: "Immerse yourself in the tranquil essence of Ayurveda at The Nattika Beach Resort, an award-winning wellness retreat set along the pristine shores of Kerala. Rooted in authentic Ayurvedic traditions and guided by highly experienced physicians, Nattika offers a harmonious blend of healing, relaxation, and rejuvenation. Surrounded by lush greenery and the calming Arabian Sea, the resort provides personalized therapies designed to restore balance in body, mind, and spirit—ensuring a deeply transformative and lasting wellness experience.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/The Nattika Beach Resort/Thumb.jpg",
    link: "/centers/kerala/the-nattika-beach-resort"
  },
  {
    name: "AyurSoma Ayurveda Royal Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience world-class Ayurvedic healing at AyurSoma, a premium royal retreat in Kovalam. Combining traditional wisdom with royal luxury, our sanctuary offers authentic Panchakarma, rejuvenation therapies, and personalized wellness programs guided by seasoned Vaidyas in a stunning beachfront setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/AyurSoma Ayurveda/Photo gallery/img 1.jpg",
    link: "/centers/kerala/ayursoma"
  },
  {
    name: "HimVeda Heritage Wellness Centre",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala. HimVeda is dedicated to authentic Ayurvedic healing, combining classical therapies with nature-centric living for holistic well-being. Rooted in traditional Ayurvedic principles, HimVeda offers personalized treatments guided by experienced Ayurvedic doctors and skilled therapists. Each wellness program is carefully designed to restore balance to the body, mind, and spirit, supporting long-term health through natural, time-tested healing practices in a calm mountain setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/HimVeda/Thumb.jpeg",
    link: "/centers/dharamshala/himveda"
  },
  {
    name: "Ayuskama Ayurveda",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Ayuskama Ayurveda ek authentic Ayurvedic wellness center hai jo traditional Ayurveda ko modern lifestyle ke saath integrate karta hai. Yeh center Ayurveda, Panchakarma aur holistic healing therapies par focus karta hai, jahan personalized treatment plans experienced Ayurvedic doctors ke guidance mein design kiye jaate hain. Natural therapies, herbal medicines aur sattvic lifestyle ke through Ayuskama long-term health, detoxification aur overall rejuvenation ko promote karta hai. Yeh center chronic health issues, stress management aur preventive healthcare ke liye ek holistic approach provide karta hai.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
    link: "/centers/dharamshala/ayuskama-ayurveda"
  },
  {
    name: "Ananda In The Himalayas",
    city: "Uttarakhand",
    location: "Uttarakhand",
    description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat nestled in the serene Himalayan foothills. Surrounded by pristine forests and overlooking the Ganges valley, Ananda blends ancient Indian wellness wisdom with modern luxury. Rooted in Ayurveda, Yoga, and Vedanta, Ananda offers highly personalized wellness programs guided by expert physicians and therapists. Each journey is designed to rejuvenate the body, calm the mind, and elevate the spirit—creating lasting transformation through mindful living and natural healing practices.",
    rating: 4.8,
    reviews: 900,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/centers/uttarakhand/ananda-in-the-himalayas"
  },
];

const inclusionsRows = [
  { label: "Accommodation", details: "Private room or suite (as per package) for 20-27 nights", icon: BedDouble },
  { label: "Ayurvedic Meals", details: "Three daily meals personalised to your constitution and treatment phase", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial assessment plus regular check-ins with your Vaidya throughout the program", icon: Stethoscope },
  { label: "Daily Therapies", details: "Janu Basti, Kizhi, Abhyanga, Pizhichil, Basti, Swedana - as prescribed", icon: Activity },
  { label: "Herbal Medicines", details: "All internal and external Ayurvedic medicines and medicated oils", icon: Pill },
  { label: "Yoga and Meditation", details: "Daily guided sessions tailored to joint health and mobility", icon: Brain },
  { label: "Post-Program Kit", details: "Personalised diet plan, herbal medicines, and home yoga routine for continued healing", icon: ClipboardCheck },
];

const costComparisonRows = [
  {
    program: "Ayurveda Treatment for Osteoarthritis (21-28 Days)",
    category: "Disease-Specific",
    cost: "$2,500 - $6,000",
    notes: "Chronic disease patients, joint pain and mobility",
  },
];

const faqItems = [
  { question: 'Can Ayurveda actually treat osteoarthritis, or is it only for mild pain?', answer: 'Ayurvedic treatment is effective across a wide spectrum of osteoarthritis severity. Clinical studies have documented measurable improvement in pain scores, joint mobility, and body weight following structured Panchakarma programs. It significantly reduces pain and slows further degeneration.' },
  { question: 'How long does it take to see results?', answer: 'Many patients notice reduced stiffness and improved sleep within the first 7-10 days. Significant pain relief and improved mobility are typically observed by week two. The most complete transformation develops fully over the 21-28 day program and continues to improve after returning home.' },
  { question: 'Will I be able to walk and move during the treatment program?', answer: 'Yes. The program is not bed-rest based. Light walking, gentle yoga, and moderate daily movement are actively encouraged from day one.' },
  { question: 'Can this program help me avoid knee replacement surgery?', answer: 'For many patients, yes. Surveys from leading Indian Ayurvedic centers report that a significant proportion of patients who undergo full structured programs avoid elective joint replacement surgery for extended periods.' },
  { question: 'Do I need to stop my current medications before starting?', answer: 'No. You should never stop prescribed medications without guidance from your treating doctor at home. Your Ayurvedic physician will create a plan that works safely alongside them.' },
  { question: 'Is it safe for patients with high blood pressure or diabetes?', answer: 'Yes. These are common co-morbidities. Your Ayurvedic physician will monitor your vitals daily and adjust the oils and diet to ensure the treatment is safe for your cardiac and metabolic profile.' },
  { question: 'What makes Janu Basti different from conventional physical therapy?', answer: 'While PT focuses on muscle strength, Janu Basti uses medicated oils to nourish the joint at a cellular level, improving synovial fluid quality and reducing bone-on-bone friction naturally.' },
  { question: 'Will the weather in India affect my joint pain?', answer: 'Warm, dry weather is ideal for osteoarthritis. We recommend visiting centers in regions that avoid extreme cold or dampness during your stay to maximize the Vata-pacifying effects of the treatment.' },
  { question: 'Can I travel alone with limited mobility?', answer: 'Yes. Most partner centers are fully equipped to assist patients with mobility issues. They provide wheelchair assistance and nursing staff to help you with daily routines during your recovery.' },
  { question: 'Does international health insurance cover this treatment?', answer: 'Many premium insurers now cover "Alternative Medicine". While you typically pay upfront, the centers provide all necessary medical documentation and NABH accreditation certificates for your reimbursement claim.' }
];

const patientReviews = [
  {
    name: "Margaret Collins",
    location: "Toronto, Canada",
    title: "My Doctor Called It a Miracle!",
    review: "I had suffered from severe osteoarthritis in both hips for over six years. After a 24-day Ayurvedic program, the Kati Basti and Abhyanga sessions genuinely transformed my condition. The physician identified a deep Vata aggravation and designed a personalized herbal diet. I returned home walking without my cane for the first time in years.",
    rating: 5,
    verified: true,
  },
  {
    name: "Hans Mueller",
    location: "Berlin, Germany",
    title: "28 Days That Changed My Life.",
    review: "Osteoarthritis had forced me into early retirement from my carpentry work, as my hands were constantly swollen and stiff. I chose a 28-day Panchakarma package, and the Pinda Sweda therapy on my hands was unlike anything I had experienced. By week three, the swelling had visibly reduced, and I can now hold my tools again.",
    rating: 5,
    verified: true,
  },
  {
    name: "Susan Hartley",
    location: "Sydney, Australia",
    title: "From a Skeptic to a True Believer.",
    review: "Thirty years of osteoarthritis and a history of failed medications made me doubtful. But after 21 days of Janu Basti, medicated oil therapies, and a strict herbal diet, my morning stiffness has almost completely disappeared. The doctors explained each treatment clearly every day.",
    rating: 5,
    verified: true,
  },
  {
    name: "Robert Flanagan",
    location: "Dublin, Ireland",
    title: "I Avoided Knee Replacement Surgery at 58.",
    review: "My orthopedic specialist had already scheduled my knee replacement surgery. As a final attempt at a natural solution, I booked a 21-day program, and it was the best decision of my life. The Janu Basti with warm medicated ghee and daily Abhyanga massage worked beautifully together.",
    rating: 5,
    verified: true,
  },
  {
    name: "Yuki Tanaka",
    location: "Osaka, Japan",
    title: "My Joints Feel 20 Years Younger.",
    review: "Living with osteoarthritis in my spine and knees made daily life exhausting. I visited India for a 27-day residential program, and the personalized Panchakarma cleanse, followed by Greeva Basti for my spine, was deeply therapeutic. My physiotherapist later noticed significant flexibility improvement.",
    rating: 5,
    verified: true,
  },
  {
    name: "Patricia Moreau",
    location: "Lyon, France",
    title: "Finally - Real Relief After Years of Pain.",
    review: "I had tried everything: physiotherapy, cortisone injections, and anti-inflammatory drugs. During my 25-day Ayurvedic stay, the doctor diagnosed excess Vata and Ama in my joints. The Virechana detox, followed by Janu Basti and Upanaham herbal poultices, was highly targeted and effective.",
    rating: 5,
    verified: true,
  },
  {
    name: "Michael Okafor",
    location: "Lagos, Nigeria",
    title: "A Complete Transformation in Just 3 Weeks.",
    review: "At 52, severe osteoarthritis was limiting everything in my life. I booked a 21-day program after extensive research, and the combination of Navarakizhi, specialized yoga sessions, and Ayurvedic nutrition was incredibly powerful. By day fifteen, I was sleeping through the night without pain.",
    rating: 5,
    verified: true,
  },
  {
    name: "Elena Petrov",
    location: "Moscow, Russia",
    title: "Worth Traveling Halfway Across the World For.",
    review: "I decided to try a 28-day program in India, and the warm climate itself was therapeutic. The medical team designed a complete Panchakarma protocol with Kizhi massages and internal herbal medicines that dramatically reduced my joint inflammation and improved daily comfort.",
    rating: 5,
    verified: true,
  },
  {
    name: "James Whitfield",
    location: "Houston, USA",
    title: "My Knees Are Thanking India!",
    review: "As a former marathon runner, osteoarthritis in both knees was devastating. I spent 26 days in an Ayurvedic center, and the Janu Basti oil pooling treatment combined with Patrapinda Sweda leaf massage was unlike anything Western medicine had offered me. I regained near-full motion.",
    rating: 5,
    verified: true,
  },
  {
    name: "Amelia van der Berg",
    location: "Amsterdam, Netherlands",
    title: "Gentle, Natural, and Genuinely Effective.",
    review: "I was hesitant about traveling to India alone at age 64, but my 23-day osteoarthritis program was exceptional. Daily Abhyanga, Janu Basti, and medicated steam therapy with guided yoga were gentle and effective. My pain reduced significantly and my posture improved.",
    rating: 5,
    verified: true,
  }
];

const OsteoarthritisTreatment = () => {
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Ayurveda Treatment for Osteoarthritis in India</h1>
              <p className="text-lg md:text-xl text-white/90">Restore joint health naturally with physician-led Ayurvedic care.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Program Gallery for Osteoarthritis Treatment in India</h2>
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

        <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">21-28 Days</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Joint Pain, Mobility, Recovery</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Top Locations</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">PAN India</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">$2,500 - $6,000</p>
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

        <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-14 md:space-y-16">
          <div className="grid gap-10 md:gap-12">
            <Card className="h-full shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is Ayurvedic Treatment for Osteoarthritis?</h2>
                <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">
                  If you have been living with persistent joint pain, morning stiffness, swollen knees, or reduced mobility — and conventional treatments have offered only temporary relief — Ayurvedic treatment for osteoarthritis in India may offer you something that modern medicine often cannot: a genuine path to healing the root cause, not just masking the symptoms. Osteoarthritis — known in Ayurveda as <em>Sandhivata</em> — occurs when the protective cartilage between your joints gradually wears down.
                </p>
                <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
                  The 21-28 day Ayurvedic treatment program works to reduce inflammation at its source, nourish and rebuild damaged joint tissue, restore lubrication to the affected joints, and rebalance the Vata dosha.{" "}
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
              {/* Metrics Section */}
              <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8 md:mb-10">
                <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 flex items-center justify-center mb-2 md:mb-3">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">1500+</div>
                  <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Patients</div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-2 md:mb-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">4.8/5</div>
                  <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Patient Satisfaction Metrics</div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 md:mb-3">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">95%</div>
                  <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Clinical Result / Outcome Index</div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4 text-center">Core Ayurvedic Therapies for Osteoarthritis</h2>
              <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Your Vaidya prescribes the right combination based on your joint condition, dosha constitution, and treatment response.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 21-28 Day Treatment Program — Week by Week</h2>
            <p className="text-[#7F543D] mt-2">A structured three-phase clinical approach — every phase has a specific therapeutic purpose.</p>
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

          <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of Ayurvedic Osteoarthritis Treatment</h2>
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
            <h2 className="text-3xl font-bold text-[#335765]">Cost of Ayurvedic Osteoarthritis Treatment in India</h2>
            <p className="mt-2 text-[#7F543D]">
              India offers world-class Ayurvedic care for osteoarthritis at a fraction of what equivalent treatment would cost abroad.
            </p>
          </div>

          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-5 md:p-6 space-y-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">21-28 Days</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Structured detox, recovery, and rejuvenation timeline.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">$2,500 - $6,000</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for reputable centers and full-stay plans.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                      <Sparkles className="h-5 w-5 text-[#335765]" />
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-[#335765]">DISEASE-SPECIFIC</p>
                  </div>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Designed for chronic disease patients with focus on joint pain and mobility.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
                  <p className="font-semibold text-[#335765]">Most popular - Disease-Specific Program</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">Why Choose India for Osteoarthritis Treatment?</h2>
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
            <h2 className="text-3xl font-bold text-[#335765] mb-3">Why Choose Us for Osteoarthritis Treatment</h2>
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
            <h2 className="text-3xl font-bold text-[#335765]">What Is Included in the Treatment Package?</h2>
            <p className="text-[#7F543D]">Everything essential for a supervised treatment, recovery, and long-term continuity plan.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
              <p className="text-lg font-bold text-[#335765] mt-1">21-28 Days</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p>
              <p className="text-lg font-bold text-[#335765] mt-1">20-27 Nights</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Core Inclusions</p>
              <p className="text-lg font-bold text-[#335765] mt-1">Therapies + Meals + Medicines</p>
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
                alt="21-day Panchakarma consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Osteoarthritis Treatment Program</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%2021-day%20Panchakarma%20program."
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers for Osteoarthritis Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for 21-day detox programs.</p>
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

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-1 overflow-visible">
                        <h4 className="text-sm md:text-xl font-bold text-[#335765] leading-tight">
                          {patientReviews[currentReview].name}
                        </h4>
                        {patientReviews[currentReview].verified && (
                          <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold whitespace-nowrap border border-green-200">
                            &#10003; Verified
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] md:text-sm leading-snug" style={{ color: "#7F543D" }}>
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

export default OsteoarthritisTreatment;



