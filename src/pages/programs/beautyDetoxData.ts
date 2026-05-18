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
    name: "Somatheeram Ayurvedic Health Resort",
    city: "Kerala",
    location: "Kerala",
    description: "World's first Ayurveda retreat offering authentic treatments with German precision and serene beachside location.",
    rating: 4.9,
    reviews: 320,
    image: "/Center Images/somatheeram/Somatheeram 01.jpg",
    link: "/centers/kerala/somatheeram"
  },
  {
    name: "Shreyas Yoga Retreat (Nelamangala)",
    city: "Bangalore",
    location: "Bangalore",
    description: "Experience a serene blend of traditional yoga philosophy and luxury wellness at Shreyas Yoga Retreat in Nelamangala, near Bangalore. Set within lush gardens and peaceful countryside, Shreyas offers an authentic yogic lifestyle rooted in ancient Indian traditions. The retreat focuses on holistic wellbeing through classical Hatha Yoga, meditation, Ayurveda therapies, and mindful living practices guided by experienced teachers. Each wellness journey is thoughtfully designed to nurture physical vitality, mental clarity, and emotional balance. With personalized programs, organic cuisine, and a tranquil environment, Shreyas provides a rejuvenating sanctuary for guests seeking deep relaxation, inner growth, and sustainable wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shreyas Yoga Retreat/thumb.jpg",
    link: "/centers/bangalore/shreyas-yoga-retreat"
  },
  {
    name: "Kalari Kovilakom - The Palace For Ayurveda",
    city: "Palakkad",
    location: "Palakkad",
    description: "Immerse yourself in the authentic discipline of Ayurveda at Kalari Kovilakom � The Palace For Ayurveda, a globally acclaimed wellness retreat rooted in ancient healing traditions. Set within a restored heritage palace, this unique center follows the classical gurukula system, offering a structured and immersive approach to Ayurvedic care. Guided by experienced Vaidyas, every program is tailored to restore balance, detoxify the body, and promote long-term well-being through time-tested therapies and holistic practices. With a strong focus on Panchakarma and intensive healing programs, Kalari Kovilakom provides a highly personalized wellness journey. From therapeutic treatments and sattvic nutrition to yoga and meditation, every element is carefully designed to support deep rejuvenation of body and mind. Ideal for those seeking serious, results-driven Ayurvedic healing, the center delivers an environment of discipline, authenticity, and transformative care.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/centers/kerala/kalari-kovilakom"
  },
  {
    name: "Toyam By Orchid Hotels",
    city: "Pune",
    location: "Pune",
    description: "Escape into nature at Toyam by Orchid Hotels, a serene wellness retreat near Pune designed for holistic healing and relaxation. The center offers personalized Ayurvedic therapies, Panchakarma detox programs, yoga, and meditation guided by experienced wellness experts. Surrounded by tranquil landscapes and luxury accommodations, Toyam provides the perfect environment to restore balance, rejuvenate the body, and experience authentic wellness.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Toyam By Orchid Hotels/Thumb.jpg",
    link: "/centers/pune/toyam-by-orchid-hotels"
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
  {
    name: "Ideal Ayurvedic Resort",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on a tranquil hillside in Chowara village, just a short walk from Kovalam beach, Ideal Ayurvedic Resort is a 'Green Leaf' certified sanctuary surrounded by 15 acres of lush coconut groves. Authentic, physician-led Ayurveda is practiced with heartfelt dedication — from classical Panchakarma to personalized healing programs — in one of Kerala's most genuinely non-commercialized healing environments.",
    rating: 4.5,
    reviews: 400,
    image: "/Center Images/Ideal Ayurvedic Resort/Thumb.jpg",
    link: "/centers/kerala/ideal-ayurvedic-resort"
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
    name: "Sitaram Beach Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience the true essence of Ayurveda at Sitaram Beach Retreat, a tranquil wellness sanctuary nestled along the serene coastline of Kerala. Surrounded by lush greenery and the calming presence of the Arabian Sea, this retreat offers an immersive healing environment rooted in authentic Ayurvedic traditions. Sitaram Beach Retreat combines classical Ayurvedic wisdom with modern comfort, delivering personalized treatments designed to restore harmony between body, mind, and spirit. Guided by highly experienced Ayurvedic doctors, each therapy is carefully tailored based on individual health conditions and wellness goals.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sitaram Beach Retreat/Thumb.jpg",
    link: "/centers/kerala/sitaram-beach-retreat"
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
    name: "Yan Cure Yoga Retreat & Ayurveda Centre",
    city: "Rishikesh",
    location: "Rishikesh",
    description: "Yan Cure Yoga Retreat & Ayurveda Centre mein aap paayenge yoga, Ayurveda aur holistic healing ka perfect sangam. Yeh centre ek shaant aur prakritik environment mein sthit hai, jahan traditional Ayurvedic therapies aur yogic practices ke zariye body, mind aur soul ko balance kiya jaata hai. Experienced Ayurvedic doctors aur certified yoga instructors ke guidance mein, Yan Cure personalized treatment programs offer karta hai jo detoxification, stress relief aur overall rejuvenation par focus karte hain. Yahan ki healing therapies ancient wisdom aur modern wellness approaches ka ek powerful combination hain, jo long-term health aur inner peace ko promote karti hain.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp",
    link: "/centers/rishikesh/yan-cure"
  },
];

export const patientReviews = [
  ["Isabella Rossi", "Milan, Italy", "A Radiant Transformation", "I came for the beauty but left with a new sense of health. The 14-day retreat was life-changing. My skin hasn't looked this clear and bright since my twenties. The combination of internal detox and the wonderful oil baths was beyond my expectations. I feel like a completely new person!"],
  ["Dr. James Watson", "London, UK", "Clinical Excellence in Beauty", "As a medical professional, I was impressed by the scientific approach to beauty. The physicians at SOUKYA are exceptional. They addressed my skin inflammation by treating my gut health first. The results are visible and sustainable. Highly recommended for those seeking true rejuvenation."],
  ["Camille Laurent", "Paris, France", "The Ultimate Luxury Retreat", "Carnoustie provided the perfect sanctuary. The therapists are skilled, the oils are pure, and the environment is pure heaven. My body feels toned, my skin is glowing, and I've never felt more relaxed. It's the best investment I've made in my well-being this year."],
  ["Sarah Jenkins", "New York, USA", "Beyond My Expectations", "The 12-day program was exactly what I needed to reset. My skin feels incredibly soft and the natural products used were so much better than anything I've tried in the US. The attention to detail and care from the staff made me feel like royalty throughout my stay."],
  ["Hiroshi Tanaka", "Tokyo, Japan", "Precision and Wisdom", "A very professional medical team that combines Japanese-like precision with ancient Indian wisdom. The detox results were clearly visible on my skin and I felt much lighter and more energetic. This was my first time in India, and it certainly won't be my last."],
];
