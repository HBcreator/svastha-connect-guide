import {
  Activity, Droplet, Heart, Leaf, Sparkles, Stethoscope,
  ClipboardCheck, Calendar, UserCheck, MapPin, ReceiptIndianRupee,
  BedDouble, UtensilsCrossed, Pill, Brain, ShieldCheck, Globe2,
  CalendarCheck2, Route, Headset, UserCog, AlertTriangle, CircleCheck,
  HeartPulse, TestTube, FileText
} from "lucide-react";

export const galleryImages = [
  "/program-images/hair-loss.png",
  "/program-images/takradhara.png",
  "/program-images/migraine-lepa.png",
  "/program-images/migraine-shirodhara.png",
  "/Treatments-images/Hair Loss.jpg",
  "/program-images/beauty-detox.png",
];

export const benefitsSectionImages = [
  "/program-images/hair-loss.png",
  "/program-images/takradhara.png",
  "/program-images/migraine-lepa.png",
  "/program-images/migraine-shirodhara.png",
];

export const quickSummaryRows = [
  ["Focus Area", "Hair Thinning, Alopecia, Premature Greying, Scalp Health"],
  ["Treatment Duration", "14–21 Days (Required for follicle stimulation)"],
  ["Who It Is For", "Individuals suffering from stress-induced hair loss, chronic shedding, or post-partum hair loss"],
  ["Core Approach", "Shirodhara + Shiro Abhyanga + Nasya + Blood Purification"],
  ["Key Benefit", "Halt chronic hair fall, stimulate new follicle growth, and deeply nourish the scalp"],
  ["Top Locations", "Kerala, Bangalore, Rishikesh"],
  ["Average Cost", "$1,500 – $4,500 USD (all-inclusive)"],
  ["Supervised By", "Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"],
];

export const quickSummaryMobileIcons = {
  "Focus Area": ClipboardCheck,
  "Treatment Duration": Calendar,
  "Who It Is For": UserCheck,
  "Core Approach": Activity,
  "Key Benefit": Sparkles,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
} as const;

export const therapies = [
  {
    title: "Shirodhara (Oil Flowing Therapy)",
    text: "A continuous, rhythmic pouring of warm, medicated herbal oils (like Bhringraj or Brahmi) over the forehead. It profoundly pacifies Pitta and Vata, reducing the stress and heat that cause hair follicle damage.",
    icon: Droplet,
  },
  {
    title: "Shiro Abhyanga (Scalp Massage)",
    text: "Intensive scalp massage using vital marma points. This stimulates local blood circulation, delivering essential nutrients directly to dormant hair roots and strengthening existing follicles.",
    icon: Activity,
  },
  {
    title: "Shirolepa (Herbal Head Pack)",
    text: "Application of a thick paste made from cooling, hair-growth-stimulating herbs like Amla, Shikakai, and Neem. It cools the scalp, treats dandruff, and provides direct nourishment to the roots.",
    icon: Leaf,
  },
  {
    title: "Nasya (Nasal Oil Administration)",
    text: "Instillation of medicated oils through the nasal passages. In Ayurveda, the nose is the gateway to the head. Nasya clears energy channels, balances head-region doshas, and prevents premature greying.",
    icon: Sparkles,
  },
  {
    title: "Raktamokshana / Virechana (Blood Detox)",
    text: "Depending on severity, mild purgation or localized bloodletting (leech therapy) is used to remove deep-seated Pitta toxins (Ama) from the blood, addressing autoimmune or inflammatory alopecia at its source.",
    icon: HeartPulse,
  },
  {
    title: "Keshya Rasayana (Internal Rejuvenation)",
    text: "Customized oral herbal formulations specifically designed as 'Keshya' (hair tonics). These internal medicines correct nutritional deficiencies, balance hormones, and sustain hair growth post-treatment.",
    icon: Pill,
  },
];

export const candidatePoints = [
  "Experiencing chronic, diffuse hair shedding (Telogen Effluvium)",
  "Struggling with stress-induced or post-partum hair loss",
  "Diagnosed with early-stage Alopecia Areata or male/female pattern baldness",
  "Suffering from severe scalp conditions like chronic dandruff or scalp psoriasis",
  "Noticing premature greying or extreme hair thinning",
  "Seeking a natural, systemic alternative to chemical treatments (like Minoxidil) or painful transplants",
];

export const avoidPoints = [
  "Individuals looking for an overnight 'miracle' cure (Ayurveda requires time for cellular change)",
  "Patients with completely irreversible, late-stage scarring alopecia (cicatricial alopecia) where follicles are permanently destroyed",
  "Those unwilling to modify their diet and lifestyle as prescribed by the Vaidya",
];

export const weekBreakdown = [
  {
    title: "Days 1-5 — Systemic Detoxification & Preparation",
    duration: "Week 1",
    focus: "Clearing blockages and preparing the scalp",
    description: "The program begins by addressing the root internal cause. Through personalized diet adjustments and mild internal cleansing (Snehapana), we loosen the toxins (Ama) blocking the nutrition to your head. Daily scalp massages (Shiro Abhyanga) begin to stimulate local blood flow.",
    bullets: ["In-depth Ayurvedic consultation and Dosha mapping", "Initiation of a Pitta-pacifying, nutrient-rich diet", "Daily Shiro Abhyanga (scalp massage)", "Mild internal detoxification protocols"],
  },
  {
    title: "Days 6-14 — Intensive Nourishment & Follicle Stimulation",
    duration: "Week 2",
    focus: "Reversing hair fall and activating growth",
    description: "This is the core therapeutic phase. Daily Shirodhara treatments calm the nervous system, drastically reducing stress-related hair fall. Shirolepa (herbal packs) and Nasya therapies are administered to cool the scalp, treat any fungal issues, and deliver potent herbs directly to the hair roots.",
    bullets: ["Daily Shirodhara (warm oil flow)", "Nasya therapy (nasal drops for head region balance)", "Shirolepa (cooling herbal scalp masks)", "Targeted stress-relief yoga and meditation"],
  },
  {
    title: "Days 15-21 — Consolidation & Maintenance Strategy",
    duration: "Week 3",
    focus: "Locking in results and long-term planning",
    description: "As hair fall slows down or halts completely, the focus shifts to sustaining the newly stimulated follicles. You will receive customized oral Rasayana (rejuvenative) herbs. The doctors will provide a detailed home-care plan, including diet, lifestyle, and herbal oils to continue the regrowth process over the next 3-6 months.",
    bullets: ["Final localized scalp therapies", "Prescription of internal Keshya (hair) tonics", "Comprehensive home-care and diet plan", "Techniques for ongoing stress management"],
  },
];

export const benefits = {
  physical: [
    "Significant reduction or complete halt in abnormal hair shedding",
    "Stimulation of dormant follicles leading to new hair growth",
    "Improved hair thickness, strength, and overall texture",
    "Deeply cleansed scalp, free from dandruff, itchiness, or inflammation",
    "Prevention of further premature greying",
    "Enhanced blood circulation to the head and neck region",
  ],
  mental: [
    "Profound reduction in stress, anxiety, and mental fatigue",
    "Improved sleep quality and duration",
    "Calmer nervous system, specifically benefiting stress-induced alopecia",
    "Relief from chronic headaches or migraines",
    "Restored confidence and emotional well-being",
  ],
  longTerm: [
    "A purified blood system, reducing overall body inflammation",
    "Balanced hormones and improved digestion",
    "Sustainable, chemical-free hair care routine tailored to your Dosha",
    "Knowledge of trigger foods and lifestyle habits that cause hair loss",
  ],
};

export const costComparisonRows = [
  {
    program: "Comprehensive Hair & Scalp Restoration (14 Days)",
    category: "Disease-Specific",
    cost: "$1,500 – $2,800",
    notes: "Ideal for moderate hair thinning and scalp issues. Includes daily Shirodhara.",
  },
  {
    program: "Intensive Alopecia & Detox Program (21 Days)",
    category: "Panchakarma Clinical",
    cost: "$2,800 – $4,500",
    notes: "For severe hair loss or autoimmune conditions. Includes deep blood purification.",
  },
];

export const chooseIndiaPoints = [
  {
    title: "Authentic Herbs",
    text: "Access to fresh, potent herbs like Bhringraj, Amalaki, and Brahmi grown in their native environments.",
    icon: Leaf,
  },
  {
    title: "Clinical Expertise",
    text: "Treated by highly qualified Ayurvedic doctors (BAMS/MD) with decades of experience in Trichology.",
    icon: Stethoscope,
  },
  {
    title: "Root-Cause Focus",
    text: "Unlike topical treatments abroad, India offers deep blood purification to stop hair loss permanently.",
    icon: ShieldCheck,
  },
  {
    title: "Cost-Effective",
    text: "Premium 21-day residential care costs less than a fraction of multiple transplant sessions in the West.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Holistic Healing",
    text: "Combines daily scalp therapies with stress-relieving yoga, meditation, and customized diets.",
    icon: Brain,
  },
  {
    title: "World-Class Centers",
    text: "NABH-accredited Ayurvedic hospitals ensuring strict hygiene, quality, and international patient care.",
    icon: Globe2,
  },
];

export const whyChooseUsPoints = [
  {
    title: "Curated Network of Specialists",
    description: "We partner exclusively with NABH-accredited Ayurvedic hospitals that have proven success rates in treating chronic alopecia and hair thinning.",
    icon: ClipboardCheck,
  },
  {
    title: "Free Medical Pre-Assessment",
    description: "Before you travel, our partner doctors review your medical history, scalp condition, and blood reports to ensure Ayurveda is the right path.",
    icon: FileText,
  },
  {
    title: "End-to-End Travel Support",
    description: "From medical visas and airport transfers to dietary translations, we manage your entire itinerary so you can focus purely on healing.",
    icon: Route,
  },
  {
    title: "Post-Treatment Care",
    description: "We arrange follow-up online consultations and ensure your prescribed herbal medicines are shipped to your home country.",
    icon: Headset,
  },
  {
    title: "Transparent, All-Inclusive Pricing",
    description: "No hidden hospital fees or agent commissions. You pay the direct clinical price with zero markup on the retreat packages.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 On-Ground Concierge",
    description: "A dedicated Svastha Global assistant is always reachable for non-medical needs, language translation, or travel adjustments.",
    icon: UserCog,
  },
];

export const inclusionsRows = [
  { label: "Accommodation", details: "14 to 21 nights stay in an AC private room/cottage", icon: BedDouble },
  { label: "Consultations", details: "Initial, daily, and final assessments by Chief Ayurvedic Physician", icon: Stethoscope },
  { label: "Daily Therapies", requireCount: true, details: "2-3 hours of customized therapies (Shirodhara, Shiro Abhyanga, Nasya, Shirolepa)", icon: Activity },
  { label: "Ayurvedic Diet", details: "Customized vegetarian meals (Breakfast, Lunch, Dinner, Teas) balancing your Doshas", icon: UtensilsCrossed },
  { label: "Medicines", details: "All internal and external herbal medicines used during the stay", icon: Pill },
  { label: "Wellness Activities", details: "Daily Yoga and Meditation sessions for stress reduction", icon: Heart },
  { label: "Transfers", details: "Complimentary airport pick-up and drop-off", icon: Route },
];

export const faqItems = [
  {
    question: "Can Ayurveda regrow hair on completely bald patches?",
    answer: "If the hair follicles are completely dead and the scalp is shiny (cicatricial alopecia), regrowth is highly unlikely. However, if the follicles are merely dormant due to stress, poor nutrition, or hormonal imbalance, Ayurvedic treatments like Shirodhara and internal Rasayanas can effectively stimulate new growth.",
  },
  {
    question: "Why do I need a 14-21 day program just for hair loss?",
    answer: "Ayurveda views severe hair loss as a systemic issue, not just a localized scalp problem. It takes a minimum of 14 days to properly detoxify the blood (Rakta Shodhana), balance the Pitta dosha, and deliver sufficient nutrition to the hair roots to halt chronic shedding.",
  },
  {
    question: "Will I have to shave my head for the treatments?",
    answer: "No, shaving the head is not mandatory. Therapies like Shirolepa (herbal paste) and Shirodhara (oil pouring) are highly effective even with existing hair, as the medicated oils and pastes are massaged directly into the scalp and roots.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most patients notice a significant reduction in hair fall by the end of the 21-day program. However, actual new hair growth (sprouting of new follicles) typically becomes visible after 3 to 4 months of continuing the prescribed oral herbs and diet at home.",
  },
  {
    question: "Are there any side effects?",
    answer: "No. The treatments use 100% natural, plant-based oils and herbs. Since the therapy works by balancing your body's natural systems rather than suppressing symptoms with chemicals, there are no adverse side effects.",
  },
  {
    question: "Is the diet strictly vegetarian?",
    answer: "Yes, Ayurvedic hair restoration programs are based on Sattvic (pure) vegetarian principles. A balanced, nutrient-dense diet is crucial for cleansing the body and providing the necessary building blocks for hair keratin.",
  },
  {
    question: "Can I continue my current medication while on this program?",
    answer: "We strongly recommend discussing all current medications during your free pre-assessment. Our doctors will guide you on how to safely integrate or transition from your existing treatments.",
  },
  {
    question: "Are airport transfers included?",
    answer: "Yes, all our partner centers provide complimentary airport transfers to ensure your journey is seamless and stress-free.",
  },
  {
    question: "What should I bring for the treatments?",
    answer: "Loose, comfortable clothing is best for therapy sessions. We provide all necessary toiletries, herbal oils, and hospital-grade linens during your stay.",
  },
  {
    question: "Is there support after I return home?",
    answer: "Absolutely. We arrange follow-up online consultations and coordinate the international shipping of any required herbal Rasayanas to ensure you stay on track with your hair health goals.",
  },
];

export const topAyurvedicCenters = [
  {
    name: "SOUKYA International Holistic Health Centre",
    city: "Bangalore",
    rating: 4.9,
    reviews: 320,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    description: "World-renowned holistic health destination offering premium hair and scalp restoration programs led by Dr. Isaac Mathai.",
    link: "/centers/soukya",
  },
  {
    name: "Somatheeram Ayurveda Village",
    city: "Kovalam",
    rating: 4.8,
    reviews: 415,
    image: "/Center Images/somatheeram/Somatheeram 01.jpg",
    description: "The world's first Ayurveda resort, famous for authentic Panchakarma and highly effective Shirodhara protocols for hair health.",
    link: "/centers/somatheeram",
  },
  {
    name: "Veda5 Ayurveda & Yoga Retreat",
    city: "Rishikesh",
    rating: 4.8,
    reviews: 285,
    image: "/Center Images/veda5/veda5-1.jpg",
    description: "Nestled in the Himalayas, offering a perfect blend of stress-relieving yoga and intensive Ayurvedic hair therapies.",
    link: "/centers/veda5",
  },
  {
    name: "Kairali - The Ayurvedic Healing Village",
    city: "Palakkad",
    rating: 4.7,
    reviews: 190,
    image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
    description: "A specialized hospital-cum-resort focused on chronic conditions, providing tailored herbal scalp treatments.",
    link: "/centers/kairali",
  },
  {
    name: "Kalari Kovilakom (The Palace for Ayurveda)",
    city: "Palakkad",
    rating: 5.0,
    reviews: 120,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    description: "The gold standard of traditional Ayurveda. Offers disciplined, deep-cleansing protocols for severe hair thinning.",
    link: "/centers/kalari-kovilakom",
  },
  {
    name: "Carnoustie Ayurveda & Wellness Resort",
    city: "Mararikulam",
    rating: 4.9,
    reviews: 155,
    image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg",
    description: "Luxury wellness at its best, combining high-end hospitality with clinical scalp nourishment and detox.",
    link: "/centers/carnoustie",
  },
  {
    name: "Ananda in the Himalayas",
    city: "Narendra Nagar",
    rating: 4.9,
    reviews: 340,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    description: "Integrative hair care using Vedic philosophy, modern nutrition, and traditional herbal infusions.",
    link: "/centers/ananda",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bangalore",
    rating: 4.6,
    reviews: 210,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    description: "A reconstructed 18th-century heritage village offering specialized Pitta-balancing hair therapies.",
    link: "/centers/ayurvedagram",
  },
  {
    name: "Athreya Ayurvedic Centre",
    city: "Kottayam",
    rating: 4.8,
    reviews: 175,
    image: "/Center Images/Athreya Ayurvedic Centre/CTA ready.jpg",
    description: "Family-run clinical excellence, known for high-potency herbal medicines and personalized scalp care.",
    link: "/centers/athreya",
  },
];

export const patientReviews = [
  {
    title: "Halted My Post-Partum Hair Loss Completely",
    review: "Six months after giving birth, my hair was falling out in clumps. My local dermatologist suggested Minoxidil, which I wanted to avoid. The 14-day intensive Shirodhara and Shirolepa program in Kerala not only stopped the shedding by day 10, but the internal herbs they gave me have sparked incredible regrowth over the last 4 months.",
    name: "Sarah Jenkins",
    location: "London, UK",
    condition: "Post-Partum Alopecia",
    rating: 5,
    verified: true,
  },
  {
    title: "Finally Addressed the Root Cause",
    review: "I had suffered from chronic scalp inflammation and thinning hair for years. The Ayurvedic doctors identified it as a severe Pitta imbalance affecting my blood. The blood purification therapies (Virechana) were intense but transformative. My scalp is finally clear, and my hair feels thicker than it has in a decade.",
    name: "Michael R.",
    location: "Sydney, Australia",
    condition: "Chronic Hair Thinning & Scalp Psoriasis",
    rating: 5,
    verified: true,
  },
  {
    title: "The Ultimate Stress Relief and Regrowth",
    review: "My high-stress corporate job was literally making my hair fall out. The 21-day program at Veda5 was a lifesaver. The daily Shiro Abhyanga (scalp massages) and herbal nasal drops (Nasya) completely reset my nervous system. Six months later, my barber even commented on all the new baby hairs growing in.",
    name: "David Chen",
    location: "Singapore",
    condition: "Stress-Induced Hair Loss",
    rating: 5,
    verified: true,
  },
  {
    title: "A Natural Alternative to Transplants",
    review: "I was considering a hair transplant but decided to try Ayurveda first. While it didn't give me the instant results of a transplant, the holistic approach improved my overall health dramatically. The continuous herbal head packs nourished my scalp, and I've seen a 40% improvement in density over the last 8 months.",
    name: "Arun Patel",
    location: "New York, USA",
    condition: "Early Stage Male Pattern Baldness",
    rating: 4,
    verified: true,
  },
  {
    title: "Saved My Confidence",
    review: "Developing Alopecia Areata was devastating. Steroid injections only provided temporary relief. The customized Panchakarma program in India was the turning point. By cleansing my system and providing the right herbal nutrition, the bald patches started filling in naturally. The care and expertise of the doctors were world-class.",
    name: "Elena G.",
    location: "Berlin, Germany",
    condition: "Alopecia Areata",
    rating: 5,
    verified: true,
  },
];
