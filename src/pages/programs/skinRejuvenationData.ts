import {
  Activity, Droplet, Heart, Leaf, Sparkles, Stethoscope,
  ClipboardCheck, Calendar, UserCheck, MapPin, ReceiptIndianRupee,
  BedDouble, UtensilsCrossed, Pill, Brain, ShieldCheck, Globe2,
  CalendarCheck2, Route, Headset, UserCog,
} from "lucide-react";

export const galleryImages = [
  "/program-images/skin-rejuvenation/1.png",
  "/program-images/skin-rejuvenation/2.png",
  "/program-images/skin-rejuvenation/3.png",
  "/program-images/skin-rejuvenation/4.png",
  "/program-images/skin-rejuvenation/5.png",
  "/program-images/skin-rejuvenation/6.png",
];

export const benefitsSectionImages = [
  "/program-images/skin-rejuvenation/1.png",
  "/program-images/skin-rejuvenation/2.png",
  "/program-images/skin-rejuvenation/3.png",
  "/program-images/skin-rejuvenation/4.png",
];

export const quickSummaryRows = [
  ["Focus Area", "Skin Rejuvenation, Anti-Aging, Glow, Detoxification"],
  ["Treatment Duration", "7–14 Days (recommended for optimal cellular renewal)"],
  ["Who It Is For", "Individuals seeking radiant skin, natural anti-aging, or relief from dullness"],
  ["Core Approach", "Mukha Lepam + Navara Mukhabhyanga + Swedana + Internal Detox"],
  ["Key Benefit", "Restored natural radiance, improved skin elasticity, and deep cellular hydration"],
  ["Top Locations", "Kerala, Rishikesh, Goa"],
  ["Average Cost", "$1,500 – $3,500 USD (all-inclusive)"],
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
    title: "Mukha Lepam (Herbal Face Pack)",
    text: "Application of a specialized paste made from rare herbs, sandalwood, and turmeric. Deeply cleanses pores, removes impurities, and imparts a natural glow to the skin.",
    icon: Leaf,
  },
  {
    title: "Navara Mukhabhyanga (Rice Poultice Massage)",
    text: "A luxurious facial massage using small boluses of medicated Navara rice cooked in milk and herbal decoctions. Extremely nourishing and excellent for anti-aging.",
    icon: Sparkles,
  },
  {
    title: "Swedana (Herbal Facial Steam)",
    text: "Gentle steaming with aromatic, skin-healing herbs like rose and chamomile. Opens pores, flushes out trapped toxins, and prepares the skin to absorb nourishing oils.",
    icon: Activity,
  },
  {
    title: "Kumkumadi Tailam Massage",
    text: "Deep tissue facial massage using premium Kumkumadi oil, known as the 'miracle elixir' for skin. Reduces pigmentation, fine lines, and uneven tone.",
    icon: Droplet,
  },
  {
    title: "Virechana (Mild Internal Detox)",
    text: "A gentle purgation therapy to cleanse the liver and blood. Clear skin begins from within, and removing internal toxins is key to a lasting outward glow.",
    icon: Heart,
  },
  {
    title: "Netra Tarpana (Eye Rejuvenation)",
    text: "Bathing the eyes in pure, medicated ghee. Reduces dark circles, relieves eye strain, and brings a bright, youthful sparkle to the eyes.",
    icon: Stethoscope,
  },
];

export const candidatePoints = [
  "Desire a natural, non-invasive alternative to Botox or chemical peels",
  "Experience dull, tired-looking skin or premature aging",
  "Struggle with uneven skin tone, pigmentation, or dark circles",
  "Want to deeply hydrate and nourish dry, mature skin",
  "Are preparing for a special event (like a wedding) and want a radiant glow",
  "Wish to combine a relaxing luxury holiday with authentic wellness",
  "Believe that true beauty and skin health radiate from a cleansed internal system",
];

export const avoidPoints = [
  "Individuals with severe, active cystic acne or open facial wounds",
  "Those with acute contagious skin infections",
  "Patients currently undergoing aggressive chemical peels or laser treatments (requires a waiting period)",
];

export const weekBreakdown = [
  {
    title: "Days 1-3 — Internal Cleansing & Preparation",
    duration: "Day 1–3",
    focus: "Toxin loosening and gentle exfoliation",
    description: "The program starts by preparing your skin and body. You'll begin an anti-inflammatory diet. Gentle herbal steam (Swedana) and mild exfoliating scrubs (Udwarthanam) are used to remove dead skin cells and open pores, allowing deeper penetration of the upcoming nourishing therapies.",
    bullets: ["Skin assessment by Ayurvedic doctor", "Gentle Swedana (herbal steam)", "Exfoliating herbal scrubs", "Anti-inflammatory diet initiation"],
  },
  {
    title: "Days 4-8 — Deep Nourishment & Rejuvenation",
    duration: "Day 4–8",
    focus: "Cellular repair and intense hydration",
    description: "The core phase of the retreat. Daily facial massages with potent oils like Kumkumadi Tailam stimulate blood flow and collagen production. Navara Mukhabhyanga (rice poultice massage) deeply nourishes the tissues, smoothing out fine lines and restoring elasticity.",
    bullets: ["Daily Kumkumadi oil massages", "Navara Mukhabhyanga", "Netra Tarpana (eye rejuvenation)", "Stress-relieving Shirodhara"],
  },
  {
    title: "Days 9-14 — Glow Enhancing & Consolidation",
    duration: "Day 9–14",
    focus: "Locking in radiance and home-care preparation",
    description: "The final phase focuses on brightening the complexion. Application of Mukha Lepam (specialized herbal face packs) pulls out deep-seated impurities and leaves the skin glowing. The doctor will provide a personalized home-care regimen to maintain your new radiance.",
    bullets: ["Mukha Lepam (brightening packs)", "Final internal detox (mild)", "Personalized skincare regimen consultation", "Take-home herbal remedies"],
  },
];

export const benefits = {
  physical: [
    "Noticeable reduction in fine lines and premature aging signs",
    "Deeply hydrated, plump, and supple skin texture",
    "Even skin tone with reduced pigmentation and dark spots",
    "Brightened under-eye area and reduced puffiness",
    "Flushed out toxins from the lymphatic system of the face",
    "Natural, healthy, and lasting 'lit-from-within' glow",
  ],
  mental: [
    "Profound relaxation and release of facial tension (jaw, brow)",
    "Significant reduction in stress levels through therapies like Shirodhara",
    "Enhanced self-confidence and self-esteem",
    "Deep, restorative sleep during the retreat",
    "A renewed sense of inner peace and vitality",
  ],
  longTerm: [
    "Improved skin barrier function and resilience against environmental damage",
    "Knowledge of your specific skin 'dosha' and how to care for it",
    "A sustainable, chemical-free home skincare routine",
    "Slower aging process through regular Ayurvedic maintenance",
    "Holistic understanding of how diet impacts your skin health",
  ],
};

export const costComparisonRows = [
  {
    program: "Ayurvedic Skin Rejuvenation Retreat (7–14 Days)",
    category: "Wellness & Beauty",
    cost: "$1,500 – $3,500",
    notes: "Includes luxury accommodation, daily specialized facial therapies, and diet.",
  },
];

export const chooseIndiaPoints = [
  { title: "Authentic Ingredients", text: "Treatments use fresh, unadulterated herbs and rare oils like authentic Kumkumadi that are hard to source globally.", icon: Sparkles },
  { title: "Holistic Approach", text: "Ayurveda treats skin health from the inside out, addressing diet, digestion, and stress, not just the surface.", icon: Heart },
  { title: "Luxurious Settings", text: "Experience world-class hospitality in serene, high-end resorts nestled in nature.", icon: Leaf },
  { title: "Expert Therapists", text: "Therapies are performed by highly trained professionals who understand the intricate marma (vital) points of the face.", icon: Stethoscope },
  { title: "Chemical-Free", text: "100% natural therapies—no harsh chemicals, artificial fragrances, or invasive procedures.", icon: ShieldCheck },
  { title: "Unmatched Value", text: "Combine a luxury vacation with a premium wellness retreat for the price of a high-end spa package in the West.", icon: ReceiptIndianRupee },
];

export const whyChooseUsPoints = [
  { title: "Curated Premium Centers", description: "We partner exclusively with luxury resorts known for their impeccable hygiene, service, and authentic treatments.", icon: ShieldCheck },
  { title: "Personalized Matching", description: "We recommend the perfect retreat based on your specific skin goals and luxury preferences.", icon: UserCog },
  { title: "Seamless Experience", description: "From airport transfers to dietary requests, we coordinate every detail for a stress-free wellness holiday.", icon: Globe2 },
  { title: "Expert Consultation", description: "Pre-travel discussions to ensure the program aligns perfectly with your expectations.", icon: CalendarCheck2 },
  { title: "On-Ground Support", description: "24/7 assistance during your stay in India for complete peace of mind.", icon: Headset },
  { title: "Verified Reviews", description: "We rely on real feedback from international travelers to ensure top-tier quality.", icon: ClipboardCheck },
];

export const inclusionsRows = [
  { label: "Accommodation", details: "Premium private room/villa in a luxury wellness resort", icon: BedDouble },
  { label: "Glow-Enhancing Diet", details: "Three daily gourmet, dosha-balancing meals designed for skin health", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial skin assessment and regular progress check-ins", icon: Stethoscope },
  { label: "Daily Spa Therapies", details: "Mukhabhyanga, Swedana, Mukha Lepam, Shirodhara as prescribed", icon: Activity },
  { label: "Natural Skincare", details: "All premium oils and herbal pastes used during treatments", icon: Pill },
  { label: "Yoga & Mindfulness", details: "Daily gentle yoga and meditation sessions in beautiful settings", icon: Brain },
];

export const faqItems = [
  { question: "Is this program suitable for sensitive skin?", answer: "Yes, absolutely. Ayurvedic treatments are customized. If you have sensitive or Rosacea-prone skin (Pitta dominant), the doctor will use cooling herbs like sandalwood, aloe vera, and rose, avoiding any heating or abrasive treatments." },
  { question: "Will I have a 'peeling' phase like with chemical peels?", answer: "No. Ayurvedic rejuvenation is gentle and non-invasive. You will not experience harsh peeling, redness, or downtime. Instead, your skin will gradually become softer, brighter, and more hydrated day by day." },
  { question: "How is this different from a regular spa facial?", answer: "A regular spa facial primarily cleanses the surface. Ayurvedic rejuvenation goes much deeper. It involves internal detoxification (to purify the blood), stress-reduction therapies (like Shirodhara), and the use of highly potent, medicated herbal oils that penetrate deep tissue layers." },
  { question: "Can I wear makeup during the retreat?", answer: "We highly recommend letting your skin 'breathe' during the program. Since you will be receiving daily oil treatments and herbal masks, avoiding makeup helps the skin fully absorb the nutrients and detoxify properly." },
  { question: "Are the oils used greasy or pore-clogging?", answer: "No. The oils used, such as Kumkumadi Tailam, are specifically formulated for the face. They are deeply nourishing but non-comedogenic (won't clog pores) and are absorbed well into the skin, especially after herbal steaming." },
  { question: "Is this only for women?", answer: "Not at all. Ayurvedic skin rejuvenation is highly beneficial for men as well. Men's skin often suffers from shaving irritation, sun damage, and stress, all of which are effectively addressed by these therapies." },
  { question: "How soon can I see results?", answer: "Most patients notice a visible 'glow' and improved hydration by Day 4 or 5. By the end of a 14-day program, the skin texture is significantly smoother, and fine lines appear softened due to deep cellular nourishment." },
  { question: "Do I need to continue Ayurvedic products after the retreat?", answer: "To maintain the results, we recommend a simple Ayurvedic skincare routine. Your doctor will provide a personalized home-care kit including facial oils and herbal washes tailored to your specific skin type." },
  { question: "Is the internal detox (Virechana) mandatory for skin glow?", answer: "While external therapies provide immediate results, internal detox is highly recommended for long-lasting radiance. It purifies the blood and liver, ensuring that your skin remains clear and healthy from the root level." },
  { question: "Can this program help with dark circles?", answer: "Yes. Specific therapies like Netra Tarpana (eye rejuvenation) and gentle marma point massages around the eyes help improve circulation, reduce strain, and lighten dark circles effectively." },
];

export const topAyurvedicCenters = [
  { name: "SOUKYA International Holistic Health Centre", city: "Bengaluru, Karnataka", description: "A favorite among international royalty. Offers unparalleled luxury and highly personalized, authentic Ayurvedic skin therapies on a stunning organic estate.", rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/centers/bangalore/soukya" },
  { name: "Ananda in the Himalayas", city: "Rishikesh, Uttarakhand", description: "World-renowned luxury destination spa offering bespoke Ayurvedic beauty and wellness programs with breathtaking views of the Himalayas.", rating: 4.9, reviews: 850, image: "/Center Images/Ananda in the Himalayas/Thumb.jpg", link: "/centers/rishikesh/ananda" },
  { name: "Carnoustie Ayurveda Wellness Resort", city: "Mararikulam, Kerala", description: "An award-winning luxury retreat offering intensive anti-aging and beauty programs right on the pristine beaches of Kerala.", rating: 4.8, reviews: 420, image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg", link: "/centers/kerala/carnoustie-ayurveda-wellness-resort" },
  { name: "Nagarjuna Ayurveda Centre", city: "Kalady, Kerala", description: "A heritage Ayurvedic hospital with decades of clinical experience in treating chronic skin conditions and providing deep rejuvenation.", rating: 4.7, reviews: 310, image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg", link: "/centers/kerala/nagarjuna-ayurveda-centre" },
  { name: "AyurvedaGram Heritage Wellness Centre", city: "Bengaluru, Karnataka", description: "A globally recognized destination for traditional Ayurvedic healing, set in a reconstructed 18th-century heritage village.", rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/centers/bangalore/ayurvedagram" },
  { name: "Krishnendu Ayurveda Hospital", city: "Chingoli, Kerala", description: "A traditional hospital known for its authentic clinical skin-care protocols and successful anti-aging therapies.", rating: 4.8, reviews: 290, image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg", link: "/centers/kerala/krishnendu-ayurveda-hospital" },
  { name: "Kairali Heritage", city: "Palakkad, Kerala", description: "A unique retreat offering deep-rooted skin rejuvenation amidst lush greenery and traditional Kerala architecture.", rating: 4.8, reviews: 340, image: "/Center Images/Kairali Heritage/Kairali Heritage-02.jpeg", link: "/centers/kerala/kairali" },
  { name: "Somatheeram Ayurveda Village", city: "Chowara, Kerala", description: "The world's first Ayurveda resort, providing beachside wellness and expert-led skin glow programs for international travelers.", rating: 4.7, reviews: 480, image: "/Center Images/somatheeram/Somatheeram 01.jpg", link: "/centers/kerala/somatheeram" },
  { name: "Viveda Wellness Village", city: "Nashik, Maharashtra", description: "A luxury integrated wellness retreat offering personalized Ayurvedic beauty and rejuvenation programs in a serene environment.", rating: 4.9, reviews: 320, image: "/Center Images/Viveda Wellness Village/Thumb.jpg", link: "/centers/nashik/viveda" },
];

export const patientReviews = [
  { name: "Elena Rostova", location: "Moscow, Russia", title: "My Skin Has Never Looked This Radiant. Truly Life-Changing.", review: "I came to Kerala looking for an alternative to Botox. The daily Navara massages and the Kumkumadi oil treatments completely transformed my skin texture. The fine lines around my eyes softened remarkably. It was a luxurious, deeply healing experience that went far beyond just surface beauty. The doctors were so attentive to my specific skin concerns.", rating: 5, verified: true },
  { name: "Claire Dubois", location: "Paris, France", title: "A Complete Reset for My Skin and Mind. 10 Days of Pure Bliss.", review: "The stress of city life had made my skin dull and tired. This 10-day retreat was magic. The combination of the internal detox diet and the external herbal face packs brought back a glow I haven't seen in a decade. I felt lighter, my mind was clearer, and my skin felt deeply hydrated and supple. The environment was incredibly peaceful and supportive.", rating: 5, verified: true },
  { name: "Jessica Palmer", location: "Sydney, Australia", title: "Beautiful Facilities and Incredible Therapists. Exceeded All Expectations.", review: "The attention to detail was amazing. Every herbal paste was freshly prepared just for me using organic ingredients. The therapists have such a healing touch and deep knowledge of marma points. Beyond just my skin glowing, I felt a deep sense of peace that I carried back home with me. It was the perfect wellness holiday I needed.", rating: 5, verified: true },
  { name: "Sophie Van der Berg", location: "Amsterdam, Netherlands", title: "Natural Anti-Aging at its Best. My Skin Feels 5 Years Younger.", review: "I was skeptical about natural treatments for aging, but this program proved me wrong. The rice poultice massages were so nourishing. By the end of my 14-day stay, my skin elasticity had visibly improved. No needles, no chemicals, just pure Ayurvedic wisdom. I've already booked my return trip for next year!", rating: 5, verified: true },
  { name: "Isabella Martinez", location: "Madrid, Spain", title: "Gone are the Dark Circles and Tired Look. Highly Recommended.", review: "Working long hours had taken a toll on my face. The Netra Tarpana and facial detox treatments were incredible. My dark circles are almost gone, and my skin looks vibrant again. The diet was delicious and I never felt hungry. It's a holistic rejuvenation that everyone should experience at least once.", rating: 5, verified: true },
];

export const jumpSections = [
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
