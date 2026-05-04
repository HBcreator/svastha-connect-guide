import { 
  Sparkles, 
  Stethoscope, 
  TrendingUp, 
  ReceiptIndianRupee, 
  Leaf, 
  ClipboardCheck, 
  HeartPulse, 
  Brain, 
  Wind, 
  Activity, 
  Droplet, 
  MapPin, 
  Star, 
  Search, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Globe2, 
  CalendarCheck2, 
  Route, 
  Headset, 
  UserCog, 
  UserCheck, 
  Building2, 
  HelpCircle,
  Pill,
  UtensilsCrossed,
  BedDouble
} from "lucide-react";

export const galleryImages = [
  "/program-images/beauty/1.png",
  "/program-images/beauty/2.png",
  "/program-images/beauty/3.png",
  "/program-images/beauty/4.png",
  "/program-images/beauty/5.png",
  "/program-images/beauty/6.png",
];

export const jumpSections = [
  { id: "quick-summary", title: "Quick Summary", icon: ClipboardCheck },
  { id: "program-overview", title: "Program Overview", icon: Activity },
  { id: "therapy-section", title: "Core Therapies", icon: Sparkles },
  { id: "week-breakdown", title: "Week Breakdown", icon: CalendarCheck2 },
  { id: "benefits", title: "Program Benefits", icon: HeartPulse },
  { id: "cost", title: "Program Cost", icon: ReceiptIndianRupee },
  { id: "why-india", title: "Why Choose India", icon: MapPin },
  { id: "why-us", title: "Why Choose Us", icon: ShieldCheck },
  { id: "inclusions", title: "Inclusions", icon: CheckCircle2 },
  { id: "faq", title: "FAQ", icon: HelpCircle },
  { id: "top-centers", title: "Top Centers", icon: Building2 },
];

export const quickSummaryRows = [
  ["Program Name", "Ayurvedic Beauty & Detox Retreat in India"],
  ["Duration", "10–14 Days / 9–13 Nights"],
  ["Ideal For", "Total Body Glow, Blood Purification, Anti-Aging"],
  ["Core Approach", "Udvarthanam + Pizhichil + Mukha Lepam + Internal Detox"],
  ["Key Benefit", "Radiant complexion, body toning, and cellular rejuvenation"],
  ["Top Locations", "Kerala, Bangalore, Goa, Himalayas"],
  ["Average Cost", "$1,800 – $3,000 USD"],
  ["Supervised By", "Senior Ayurvedic Physicians (BAMS / MD)"],
];

export const quickSummaryMobileIcons = {
  "Program Name": ClipboardCheck,
  "Duration": Calendar,
  "Who It Is For": UserCheck,
  "Core Approach": Sparkles,
  "Key Benefit": HeartPulse,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
};

export const therapies = [
  {
    title: "Udvarthanam (Herbal Scrub)",
    icon: Sparkles,
    text: "A deep-tissue massage using herbal powders to exfoliate the skin, improve circulation, and break down subcutaneous fat for body toning."
  },
  {
    title: "Pizhichil (Oil Bath)",
    icon: Droplet,
    text: "A continuous stream of warm medicated oil combined with gentle massage to nourish the skin, lubricate joints, and provide deep cellular hydration."
  },
  {
    title: "Mukha Lepam (Facial Mask)",
    icon: Sparkles,
    text: "Specialized herbal pastes applied to the face to remove deep-seated impurities, reduce pigmentation, and restore natural skin elasticity."
  },
  {
    title: "Ksheeradhara (Medicated Milk Pour)",
    icon: Droplet,
    text: "A rhythmic pouring of medicated milk over the body to cool the system, nourish the skin, and address stress-related skin dullness."
  },
  {
    title: "Navara Mukhabhyanga",
    icon: HeartPulse,
    text: "Facial massage using specialized Navara rice boluses dipped in milk to provide deep nourishment and a youthful lift to facial muscles."
  },
  {
    title: "Virechanam (Blood Purifying Detox)",
    icon: Droplet,
    text: "A controlled therapeutic purgation to clear toxins (Ama) from the liver and blood, which is essential for a clear and glowing complexion."
  }
];

export const candidatePoints = [
  "Individuals seeking a total physical and aesthetic reset",
  "Those with dull, tired skin or uneven skin tone",
  "Professionals looking for anti-aging and stress-relief solutions",
  "People wanting to detoxify their blood and liver for clearer skin",
  "Anyone preparing for a major life event like a wedding or transition",
  "Individuals interested in combining internal health with external beauty"
];

export const avoidPoints = [
  "Individuals with acute skin infections or open wounds",
  "Those with severe cardiac or respiratory conditions",
  "Patients with active fever or contagious illnesses",
  "Pregnant women (specialized prenatal care is required instead)",
  "Individuals with extremely high blood pressure (until stabilized)"
];

export const weekBreakdown = [
  {
    title: "Phase 1: Internal Cleansing",
    duration: "Day 1-4",
    focus: "Toxin mobilization and blood purification",
    description: "The first phase focuses on preparing the body for detoxification. Through herbal scrubs and internal cleansing, we mobilize stagnant toxins (Ama) from the tissues into the digestive tract for elimination.",
    bullets: ["In-depth physician consultation & Prakriti analysis", "Udvarthanam herbal scrub sessions", "Virechanam (therapeutic purgation) for blood detox", "Light, anti-inflammatory beauty diet initiation"]
  },
  {
    title: "Phase 2: Deep Nourishment",
    duration: "Day 5-9",
    focus: "Skin hydration and cellular rejuvenation",
    description: "Once the body is cleansed, we focus on nourishment. Intensive oil baths and specialized facial treatments provide the building blocks for healthy skin cells and a radiant body glow.",
    bullets: ["Daily Pizhichil (medicated oil bath)", "Mukha Lepam and Navara facial rituals", "Ksheeradhara for nervous system cooling", "Yoga & Meditation for inner radiance"]
  },
  {
    title: "Phase 3: Stabilization & Glow",
    duration: "Day 10-14",
    focus: "Radiance stabilization and home-care planning",
    description: "The final phase stabilizes the results. We focus on enhancing the 'Ojas' (vitality) of the skin and creating a personalized home-care routine to maintain your radiant transformation long after the retreat.",
    bullets: ["Tarpana and eye rejuvenation treatments", "Personalized Ayurvedic beauty toolkit", "Post-retreat diet and lifestyle coaching", "Stabilizing herbal Rasayana formulations"]
  }
];

export const benefits = {
  physical: [
    "Instant and lasting radiant skin glow",
    "Deep detoxification of blood and liver",
    "Improved skin elasticity and body tone",
    "Reduced appearance of fine lines and aging",
    "Elimination of deep-seated metabolic toxins",
    "Enhanced circulation and lymphatic drainage"
  ],
  mental: [
    "Profound sense of relaxation and well-being",
    "Reduced stress-induced facial tension",
    "Improved sleep quality and mental clarity",
    "Boosted self-confidence and body positivity",
    "Greater sense of inner calm and balance"
  ],
  longTerm: [
    "Sustainable tools for Ayurvedic skin care",
    "Better digestive health (the root of beauty)",
    "Slowed biological aging of skin tissues",
    "Personalized understanding of your skin dosha",
    "Strengthened immunity and systemic vitality"
  ]
};

export const benefitsSectionImages = [
  "/program-images/skin-rejuvenation/1.png",
  "/program-images/skin-rejuvenation/2.png",
  "/program-images/skin-rejuvenation/3.png",
  "/program-images/skin-rejuvenation/4.png",
];

export const costComparisonRows = [
  {
    program: "10-Day Beauty & Detox",
    category: "Standard Rejuvenation",
    cost: "$1,800 - $2,500",
    notes: "Ideal for basic glow and blood purification."
  },
  {
    program: "14-Day Full Body Glow",
    category: "Intensive Beauty Retreat",
    cost: "$2,600 - $3,000",
    notes: "Recommended for deep cellular anti-aging."
  }
];

export const chooseIndiaPoints = [
  { icon: Sparkles, title: "Purest Ingredients", text: "Direct access to fresh, potent herbs and oils sourced from local medicinal gardens for maximum efficacy." },
  { icon: Stethoscope, title: "Authentic Vaidyas", text: "Consult with senior doctors who specialize in clinical beauty protocols passed down through generations." },
  { icon: TrendingUp, title: "Holistic Environment", text: "Centers located in pristine environments like Kerala or the Himalayas that naturally support deep healing." },
  { icon: ReceiptIndianRupee, title: "Elite Infrastructure", text: "Luxury wellness facilities at a fraction of the cost of Western medical-spas or cosmetic retreats." },
  { icon: Leaf, title: "Clinical Depth", text: "Not just a spa day; a medical-grade intervention that addresses beauty from the inside out." },
  { icon: ClipboardCheck, title: "Customized Protocols", text: "No one-size-fits-all treatments; every therapy is tailored to your unique skin dosha and goals." }
];

export const whyChooseUsPoints = [
  { icon: ShieldCheck, title: "Verified Elite Centers", description: "We only partner with NABH-accredited centers that maintain the highest standards of hygiene and clinical expertise." },
  { icon: Globe2, title: "End-to-End Concierge", description: "From flight coordination to airport transfers and translation support, we handle every detail of your journey." },
  { icon: CalendarCheck2, title: "Medical Pre-Screening", description: "Complimentary doctor review of your skin health and goals before you book to ensure the perfect center match." },
  { icon: Route, title: "Seamless Experience", description: "Our dedicated on-ground support ensures your transition from arrival to treatment is effortless and stress-free." },
  { icon: Headset, title: "24/7 On-Ground Support", description: "Our team in India is available round-the-clock to assist with any immediate needs during your treatment stay." },
  { icon: UserCheck, title: "Verified Patient Reviews", description: "We rely on real feedback from international travelers to ensure top-tier quality and consistent clinical outcomes." }
];

export const inclusionsRows = [
  { label: "Accommodation", details: "Luxury private suite or garden cottage for the duration of stay", icon: BedDouble },
  { label: "Consultations", details: "Daily medical reviews and final lifestyle planning session", icon: Stethoscope },
  { label: "Therapies", details: "2-3 hours of daily personalized beauty and detox treatments", icon: Activity },
  { label: "Diet", details: "Personalized anti-inflammatory beauty menu (breakfast, lunch, dinner)", icon: UtensilsCrossed },
  { label: "Medicines", details: "All internal herbal formulations prescribed during the stay", icon: Pill },
  { label: "Wellness", details: "Daily Yoga, Meditation, and Breathwork sessions", icon: Wind }
];

export const faqItems = [
  { question: "How is this different from a regular spa facial?", answer: "An Ayurvedic Beauty Retreat is a medical-grade detox. While spas treat the surface, we use therapies like Virechanam to purify the blood and Pizhichil to nourish deep tissues, ensuring a glow that comes from true internal health." },
  { question: "Is 10 days enough to see a difference?", answer: "Yes. Within 10 days, the skin's cell turnover cycle is significantly stimulated, and systemic inflammation is reduced. You will notice a visible difference in skin tone, texture, and overall energy levels." },
  { question: "Will I lose weight during the detox?", answer: "While not specifically a weight loss program, the detoxification and Udvarthanam (herbal scrub) treatments often lead to a reduction in water retention and fat breakdown, resulting in a more toned body." },
  { question: "Can I do this if I have sensitive skin?", answer: "Absolutely. Our physicians carefully select cooling and soothing oils (like coconut or medicated milk-based oils) specifically for sensitive or Pitta-prone skin." },
  { question: "What is the best time of year to visit?", answer: "The monsoon season (June-August) is traditionally best for Ayurveda, but our premium centers offer a perfectly controlled environment for beauty retreats year-round." },
  { question: "Is this retreat suitable for men?", answer: "Yes, Ayurveda is gender-neutral. We have specialized protocols for men's skin health, focusing on deep tissue detoxification and metabolic balance for a healthy, clear complexion." },
  { question: "What should I pack for the retreat?", answer: "We provide herbal bath kits and treatment wear. You only need to pack comfortable cotton clothing, light footwear, and any specific personal medical reports or medications you use." },
  { question: "Can I extend my stay if I want better results?", answer: "Absolutely. Many guests extend their 10-day program to 14 or 21 days for deeper cellular rejuvenation and a more comprehensive internal detox process." },
  { question: "Is the diet strictly vegetarian?", answer: "Yes, authentic Ayurvedic clinical detox involves a sattvic vegetarian diet. This is essential to minimize toxins (Ama) and maximize the body's digestive and healing capacity." },
  { question: "Will I have free time for sightseeing?", answer: "We recommend resting during the intensive detox phase. However, light local excursions can be arranged in the final stabilization phase of your program." }
];

export const topAyurvedicCenters = [
  ["SOUKYA International Holistic Health Centre", "Bengaluru, Karnataka", "India's premier holistic health centre, renowned for its royal treatments and high-profile international clientele.", 4.9, 500, "/Center Images/SOUKYA/top center Thumb.jpg", "/centers/bangalore/soukya"],
  ["Carnoustie Ayurveda Wellness Resort", "Mararikulam, Kerala", "A luxury beachside retreat specializing in clinical detoxification and high-end beauty rituals for a radiant transformation.", 4.7, 360, "/Center Images/Carnoustie Ayurveda/Thumb.jpg", "/centers/kerala/carnoustie-ayurveda-wellness-resort"],
  ["Ananda in the Himalayas", "Narendra Nagar, Uttarakhand", "A world-class destination spa combining ancient Ayurveda with modern international wellness for ultimate rejuvenation.", 4.9, 450, "/Center Images/Ananda in the Himalayas/Thumb.jpg", "/centers/uttarakhand/ananda-in-the-himalayas"],
  ["Somatheeram Ayurveda Village", "Kovalam, Kerala", "The world's first Ayurveda village, offering traditional treatments in a peaceful seaside environment with decades of clinical expertise.", 4.8, 420, "/Center Images/somatheeram/Somatheeram 01.jpg", "/centers/kerala/somatheeram"],
  ["AyurvedaGram Heritage Wellness Center", "Bengaluru, Karnataka", "Experience healing in a heritage setting with reconstructed antique houses and highly authentic clinical protocols.", 4.7, 280, "/Center Images/AyurvedaGram/Thumb.jpg", "/centers/bangalore/ayurvedagram"],
  ["Kairali - The Ayurvedic Healing Village", "Palakkad, Kerala", "A unique retreat designed as a traditional village, focusing on holistic health through deep-rooted Ayurvedic traditions.", 4.8, 310, "/Center Images/The Ayurvedic Healing Village/Base image.jpg", "/centers/kerala/kairali"],
  ["Atmantan Wellness Resort", "Mulshi, Maharashtra", "A contemporary luxury wellness destination offering integrated Ayurvedic programs overlooking the serene Mulshi Lake.", 4.9, 240, "/Center Images/Atmantan Wellness Resort/Thumb.jpg", "/centers/maharashtra/atmantan"],
  ["Viveda Wellness Village", "Nashik, Maharashtra", "A luxury integrated wellness retreat offering personalized Ayurvedic beauty and rejuvenation programs in a serene environment.", 4.9, 320, "/Center Images/Viveda Wellness Village/Thumb.jpg", "/centers/nashik/viveda"],
  ["Niraamaya Retreats Surya Samudra", "Kovalam, Kerala", "A Relais & Châteaux property offering breathtaking sea views and world-class Ayurvedic clinical beauty therapies.", 4.8, 220, "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg", "/centers/kerala/niraamaya"],
];

export const patientReviews = [
  ["Isabella Rossi", "Milan, Italy", "A Radiant Transformation", "I came for the beauty but left with a new sense of health. The 14-day retreat was life-changing. My skin hasn't looked this clear and bright since my twenties. The combination of internal detox and the wonderful oil baths was beyond my expectations. I feel like a completely new person!"],
  ["Dr. James Watson", "London, UK", "Clinical Excellence in Beauty", "As a medical professional, I was impressed by the scientific approach to beauty. The physicians at SOUKYA are exceptional. They addressed my skin inflammation by treating my gut health first. The results are visible and sustainable. Highly recommended for those seeking true rejuvenation."],
  ["Camille Laurent", "Paris, France", "The Ultimate Luxury Retreat", "Carnoustie provided the perfect sanctuary. The therapists are skilled, the oils are pure, and the environment is pure heaven. My body feels toned, my skin is glowing, and I've never felt more relaxed. It's the best investment I've made in my well-being this year."],
  ["Sarah Jenkins", "New York, USA", "Beyond My Expectations", "The 12-day program was exactly what I needed to reset. My skin feels incredibly soft and the natural products used were so much better than anything I've tried in the US. The attention to detail and care from the staff made me feel like royalty throughout my stay."],
  ["Hiroshi Tanaka", "Tokyo, Japan", "Precision and Wisdom", "A very professional medical team that combines Japanese-like precision with ancient Indian wisdom. The detox results were clearly visible on my skin and I felt much lighter and more energetic. This was my first time in India, and it certainly won't be my last."],
];
