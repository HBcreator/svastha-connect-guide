import {
  Activity, ArrowRight, BedDouble, Calendar, ClipboardCheck, ChevronLeft, ChevronRight,
  Droplet, Globe2, Heart, Leaf, MapPin, Pill, ReceiptIndianRupee, Sparkles, Star, Quote,
  Stethoscope, UserCheck, CircleCheck, CheckCircle2, Phone, AlertTriangle, XCircle,
  Brain, HeartPulse, ShieldCheck, Headset, UtensilsCrossed,
  Search, X, ClipboardList
} from "lucide-react";

export const galleryImages = [
  "/Program Images/cervical-gallery-1.png",
  "/Program Images/cervical-gallery-2.png",
  "/Program Images/cervical-gallery-3.png",
  "/Program Images/cervical-gallery-4.png",
  "/Program Images/cervical-gallery-5.png",
  "/Program Images/cervical-gallery-6.png",
];

export const quickSummaryRows = [
  ["Program Name", "Ayurveda Treatment for Cervical Spondylosis"],
  ["Duration", "14 to 21 Days"],
  ["Who It Is For", "Patients with neck stiffness, radiating arm pain, vertigo, or nerve compression."],
  ["Key Benefit", "Restores neck mobility, rebuilds disc health, and relieves nerve pain without surgery."],
  ["Top Locations", "Kerala, Goa, Rishikesh, Bangalore"],
  ["Average Cost", "$2,200 - $4,500 USD"],
  ["Supervised By", "Senior Ayurvedic Orthopedic Specialists"],
  ["Includes", "Accommodation, customized meals, daily therapies, internal medicines, consultations"],
];

export const quickSummaryMobileIcons = {
  "Program Name": ClipboardCheck,
  "Duration": Calendar,
  "Who It Is For": UserCheck,
  "Key Benefit": Sparkles,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
  "Includes": BedDouble,
} as const;

export const therapies = [
  {
    title: "Greeva Basti (Cervical Oil Pooling)",
    text: "The cornerstone therapy. Warm medicated oil is retained over the cervical spine to intensely lubricate joints, relieve nerve compression, and reduce severe muscle spasms.",
    icon: Droplet,
  },
  {
    title: "Pinda Sweda (Herbal Poultice Massage)",
    text: "Warm boluses of herbs or medicated rice (Navarakizhi) are applied to the neck and shoulders. This deeply nourishes degenerated tissues and improves blood circulation.",
    icon: Leaf,
  },
  {
    title: "Nasya (Nasal Administration)",
    text: "Medicated oils administered through the nasal passage directly reach the cranial and cervical nerves, alleviating stiffness, vertigo, and radiating pain in the arms.",
    icon: Activity,
  },
  {
    title: "Abhyanga (Therapeutic Massage)",
    text: "Full-body specialized oil massage focusing on Vata dosha pacification. It relieves overall body tension, improves posture, and prepares the body for deeper detox.",
    icon: Heart,
  },
  {
    title: "Lepam (Herbal Paste Application)",
    text: "Application of potent anti-inflammatory herbal pastes over the cervical region to rapidly reduce acute inflammation and localized pain.",
    icon: Sparkles,
  },
  {
    title: "Virechana (Therapeutic Purgation)",
    text: "Used when systemic inflammation or high Pitta is complicating the condition. It detoxifies the entire body, enhancing the absorption of bone-strengthening herbs.",
    icon: Stethoscope,
  },
];

export const candidatePoints = [
  "Individuals diagnosed with Cervical Spondylosis seeking non-surgical intervention.",
  "Patients experiencing severe neck stiffness, restricted movement, or chronic pain.",
  "Those suffering from radiating pain, tingling, or numbness in the arms and fingers (radiculopathy).",
  "Individuals experiencing spondylosis-induced vertigo, tinnitus, or chronic tension headaches.",
  "Professionals with posture-related chronic cervical issues due to prolonged desk work.",
  "Patients looking to rebuild cervical disc health and avoid reliance on strong painkillers.",
];

export const avoidPoints = [
  "Patients requiring immediate emergency surgery for severe spinal cord compression.",
  "Individuals with active spinal infections or fractures.",
  "Pregnant women (intensive detoxification therapies are contraindicated).",
  "Patients with unmanaged, severe systemic diseases preventing active participation in therapies.",
];

export const weekBreakdown = [
  {
    title: "Week 1 - Snehana & Swedana (Lubrication & Relief)",
    duration: "Day 1-7",
    focus: "Reducing acute pain, stiffness, and inflammation",
    description: "The initial phase focuses on aggressive pain management and relaxing the highly tense cervical muscles. External therapies provide immediate relief and prepare the body for deeper healing.",
    bullets: ["Daily Greeva Basti with specialized oils", "Anti-inflammatory Lepam applications", "Gentle Abhyanga to pacify Vata", "Initiation of bone-strengthening internal herbs"],
    image: "/Program Images/cervical-gallery-1.png",
  },
  {
    title: "Week 2 - Shodhana & Deep Nourishment",
    duration: "Day 8-14",
    focus: "Nerve decompression and tissue regeneration",
    description: "As the acute pain subsides, therapies shift to deeply nourishing the degenerated discs and nerves. This phase addresses the root structural imbalances and radicular symptoms.",
    bullets: ["Intensive Pinda Sweda (Navarakizhi) for tissue repair", "Nasya therapy for nerve strengthening and vertigo relief", "Targeted physiotherapy and postural correction", "Daily physician monitoring and diet adjustments"],
    image: "/Program Images/cervical-gallery-2.png",
  },
  {
    title: "Week 3 - Rasayana (Rejuvenation & Stabilization)",
    duration: "Day 15-21",
    focus: "Strengthening muscles and preventing recurrence",
    description: "The final phase stabilizes the gains. The focus is on building long-term muscular strength to support the cervical spine and instilling lifestyle changes to prevent future degeneration.",
    bullets: ["Rasayana (rejuvenating) herbal formulations", "Therapeutic Yoga specifically for cervical health", "Customized long-term diet and posture plan", "Post-care lifestyle training for desk workers"],
    image: "/Program Images/cervical-gallery-5.png",
  },
];

export const benefits = {
  physical: [
    "Significant reduction in neck pain and muscle stiffness",
    "Restoration of cervical range of motion and mobility",
    "Relief from radiating arm pain, tingling, and numbness",
    "Resolution of associated vertigo and tension headaches",
    "Improved structural health of cervical discs and vertebrae",
  ],
  mental: [
    "Relief from the constant stress of chronic pain",
    "Better sleep quality due to reduced night-time discomfort",
    "Enhanced mental clarity free from heavy pain medication side-effects",
    "Reduced anxiety related to the fear of spinal surgery",
    "Improved overall mood and emotional well-being",
  ],
  longTerm: [
    "Sustainable postural correction and ergonomic awareness",
    "Strengthened neck and shoulder musculature for spinal support",
    "Long-term prevention of further disc degeneration",
    "Reduced dependency on synthetic painkillers or muscle relaxants",
    "Holistic understanding of body mechanics and Vata management",
  ],
};

export const benefitsSectionImages = [
  "/Program Images/cervical-gallery-1.png",
  "/Program Images/cervical-gallery-2.png",
  "/Program Images/cervical-gallery-3.png",
  "/Program Images/cervical-gallery-4.png",
  "/Program Images/cervical-gallery-5.png",
  "/Program Images/cervical-gallery-6.png",
];

export const costComparisonRows = [
  {
    program: "21-Day Cervical Spondylosis Treatment Protocol",
    category: "Orthopedic / Neurological",
    cost: "$2,200 - $4,500",
    notes: "Intensive Greeva Basti, Pinda Sweda & Nasya. Full residential stay included.",
  },
];

export const chooseIndiaPoints = [
  {
    title: "Authentic Clinical Lineage",
    text: "Access to ancient protocols specifically designed for 'Grivasthambha' and joint degeneration.",
    icon: Stethoscope,
  },
  {
    title: "Global Medical Hub",
    text: "India is the world capital for authentic Ayurveda with certified clinical hospitals.",
    icon: Globe2,
  },
  {
    title: "Healing Climates",
    text: "Therapeutic environments in Kerala and the Himalayas that naturally aid Vata pacification.",
    icon: Leaf,
  },
  {
    title: "Specialist Physicians",
    text: "Senior Ayurvedic orthopedic experts with decades of experience in spine care.",
    icon: UserCheck,
  },
  {
    title: "Cost-Effective Care",
    text: "Premium medical hospitality and intensive daily therapies at a fraction of Western costs.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Holistic Ecosystem",
    text: "Full integration of diet, specialized yoga, and therapies for long-term spine health.",
    icon: Sparkles,
  },
];

export const whyChooseUsPoints = [
  {
    title: "Verified Medical Standards",
    description: "Only partner centers with physician-led protocols, safety checks, and treatment quality validation for orthopedic cases.",
    icon: ShieldCheck,
  },
  {
    title: "International Patient Expertise",
    description: "Dedicated handling for travelers from 40+ countries with clear clinical communication and logistical planning support.",
    icon: Globe2,
  },
  {
    title: "Pre-Travel Doctor Consultation",
    description: "Case pre-screening based on MRI/X-rays before booking helps shortlist the right center and personalized clinical pathway.",
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
    description: "Personalized center mapping based on the severity of your spondylosis, budget, travel style, and recovery priorities.",
    icon: UserCheck,
  },
];

export const jumpSections = [
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

export const inclusionsRows = [
  { label: "Ergonomic Accommodation", details: "Private rooms or suites designed for orthopedic comfort, supporting spinal rest for the duration of your stay.", icon: BedDouble },
  { label: "Bone-Healing Diet", details: "Anti-inflammatory, Vata-pacifying Ayurvedic diet rich in calcium and natural lubricants.", icon: UtensilsCrossed },
  { label: "Orthopedic Reviews", details: "Initial structural assessment plus regular physician reviews to track mobility and pain reduction.", icon: Stethoscope },
  { label: "Intensive Therapies", details: "Daily sessions including Greeva Basti, Pinda Sweda, Nasya, and targeted therapeutic massages.", icon: Activity },
  { label: "Internal Medicines", details: "Customized herbal decoctions and tablets aimed at tissue regeneration and nerve health.", icon: Pill },
  { label: "Therapeutic Yoga", details: "Guided sessions focused on safe neck stretches, postural correction, and strengthening the cervical spine.", icon: Brain },
  { label: "Post-Care Continuity", details: "Personalized ergonomic guidelines and herbal maintenance plan for preventing future flare-ups.", icon: ClipboardCheck },
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
    link: "/top-ayurvedic-centers-in-india/bangalore/soukya"
  },
  {
    name: "Viveda Wellness Village",
    city: "Nashik",
    location: "Nashik",
    description: "Immerse yourself in a transformative wellness retreat at Viveda Wellness Village, an integrated wellness destination nestled in the serene surroundings of Trimbakeshwar near Nashik. Designed to reconnect individuals with nature and holistic living, Viveda blends ancient Indian healing sciences with modern wellness practices for complete mind-body rejuvenation. Surrounded by the tranquil landscapes of the Sahyadri ranges, the retreat offers personalized wellness programs guided by experienced practitioners. Guests experience a combination of Ayurveda, naturopathy, yoga, meditation, and therapeutic spa treatments that promote detoxification, stress relief, and long-term vitality.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Viveda Wellness Village/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/maharashtra/viveda-wellness-village"
  },
  {
    name: "Sitaram Mountain Retreat",
    city: "Idukki",
    location: "Idukki",
    description: "Discover profound healing amidst the breathtaking hills of Munnar at Sitaram Mountain Retreat, a globally acclaimed sanctuary for authentic Ayurvedic wellness. Carrying forward a remarkable 104-year family legacy in traditional healing, this NABH-accredited retreat seamlessly blends classical Ayurvedic principles with the therapeutic power of pristine mountain nature.",
    rating: 4.8,
    reviews: 928,
    image: "/Center Images/Sitaram Mountain Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/idukki/sitaram-mountain-retreat"
  },
  {
    name: "Toyam By Orchid Hotels",
    city: "Pune",
    location: "Pune",
    description: "Escape into nature at Toyam by Orchid Hotels, a serene wellness retreat near Pune designed for holistic healing and relaxation. The center offers personalized Ayurvedic therapies, Panchakarma detox programs, yoga, and meditation guided by experienced wellness experts. Surrounded by tranquil landscapes and luxury accommodations, Toyam provides the perfect environment to restore balance, rejuvenate the body, and experience authentic wellness.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Toyam By Orchid Hotels/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/pune/toyam-by-orchid-hotels"
  },
  {
    name: "Fazlani Nature's Nest Wellness Centre",
    city: "Mumbai",
    location: "Mumbai",
    description: "Reconnect with nature and restore your well-being at Fazlani Nature's Nest, a serene wellness retreat set amidst lush greenery and tranquil landscapes. This holistic wellness centre blends time-honored natural healing traditions with modern therapeutic practices to help guests achieve balance in body, mind, and spirit. Guided by experienced wellness professionals, the centre offers personalized programs designed to promote detoxification, relaxation, and sustainable healthy living. From therapeutic treatments and mindful wellness therapies to nourishing cuisine and rejuvenating experiences, Fazlani Nature's Nest provides a peaceful environment where guests can unwind, heal, and rediscover vitality through nature-inspired wellness.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Fazlani Natures Nest/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/maharashtra/fazlani-natures-nest"
  },
  {
    name: "Dharana At Shillim",
    city: "Pune",
    location: "Pune",
    description: "Immerse yourself in a journey of deep wellness at Dharana At Shillim, a tranquil retreat dedicated to holistic healing and mindful living. Surrounded by the serene Sahyadri mountains, the center blends traditional healing wisdom with modern wellness practices to create a truly transformative experience. Guided by experienced practitioners, every program is thoughtfully designed to restore harmony between body, mind, and spirit. From personalized therapies to mindfulness and rejuvenation programs, Dharana At Shillim offers a peaceful sanctuary for those seeking balance, vitality, and long-term well-being.",
    rating: 4.8,
    reviews: 3900,
    image: "/Center Images/Dharana At Shillim/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/pune/dharana-at-shillim"
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "Immerse yourself in the authentic spirit of Ayurveda at AyurvedaGram Heritage Wellness Centre, a globally recognized destination for traditional Ayurvedic healing. Rooted in classical Ayurvedic principles and set within a serene heritage village, AyurvedaGram offers holistic therapies guided by experienced Vaidyas. Each treatment is personalized to restore balance of body, mind, and spirit, promoting long-lasting wellness through time-tested natural healing practices.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/ayurvedagram"
  },
  {
    name: "Kairali – The Ayurvedic Healing Village",
    city: "Palakkad",
    location: "Palakkad",
    description: "Kairali – The Ayurvedic Healing Village ek world-renowned wellness destination hai jo authentic Ayurveda, Panchakarma aur holistic healing par focus karta hai. Lush green surroundings ke beech sthit, yeh NABH-accredited retreat traditional Ayurvedic wisdom ko modern comfort ke saath blend karta hai. Yahan personalized treatment plans, experienced vaidyas aur sattvic lifestyle ke through long-term health, detox aur rejuvenation par kaam kiya jata hai.",
    rating: 4.9,
    reviews: 280,
    image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-ayurvedic-healing-village"
  },
  {
    name: "Naad Wellness",
    city: "Sonepat",
    location: "Sonepat",
    description: "Reconnect with your inner balance at Naad Wellness, a luxury integrative wellness retreat dedicated to holistic healing and mindful living. Inspired by ancient Ayurvedic wisdom and modern therapeutic practices, Naad Wellness offers personalized programs designed to restore harmony between body, mind, and spirit. Set within a tranquil natural environment, the retreat combines expert guidance, therapeutic treatments, and mindful experiences to support long-term health, rejuvenation, and inner transformation. Each wellness journey is carefully curated by experienced practitioners, integrating Ayurveda, yoga, naturopathy, and mindfulness to create sustainable lifestyle changes and deep healing.",
    rating: 4.8,
    reviews: 200,
    image: "/Center Images/Naad Wellness/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/sonepat/naad-wellness"
  },
  {
    name: "Ayurmana",
    city: "Kerala",
    location: "Kerala",
    description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayurmana center/top center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayurmana"
  },
  {
    name: "Ayushi Ayurvedic Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience the essence of authentic Ayurveda at Ayushi Ayurvedic Retreat, a peaceful destination dedicated to holistic healing and natural wellness. Rooted in classical Ayurvedic principles, the retreat offers personalized therapies designed to restore balance of body, mind, and spirit.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayushi Ayurvedic Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayushi-ayurvedic-retreat"
  },
  {
    name: "Krishnendu Ayurveda Hospital",
    city: "Alappuzha",
    location: "Alappuzha",
    description: "Immerse yourself in over 100 years of healing wisdom at Krishnendu, a NABH-accredited hospital in the serene backwaters of Alleppey. Guided by the fourth generation of a renowned physician family, this sanctuary masterfully blends a rich heritage with modern clinical excellence. Expect an authentic and personalized healing journey in a professional and tranquil environment.",
    rating: 4.9,
    reviews: 1500,
    image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/krishnendu-ayurveda-hospital"
  },
];

export const faqItems = [
  { question: "Can Ayurveda help avoid cervical spine surgery?", answer: "Yes, in many cases. Unless there is a severe medical emergency (like severe cord compression), Ayurveda offers excellent conservative management. Therapies like Greeva Basti and Pinda Sweda relieve nerve compression, reduce inflammation, and strengthen the supporting muscles, which often negates the need for surgery." },
  { question: "What exactly is Greeva Basti?", answer: "Greeva Basti is a specialized therapy where a dough ring is placed on the back of the neck over the cervical vertebrae. Warm, medicated herbal oil is poured and retained inside this ring. This deeply lubricates the joints, nourishes the intervertebral discs, and relieves muscle spasms and nerve pain." },
  { question: "How long should I stay for Cervical Spondylosis treatment?", answer: "For significant, long-lasting relief and structural improvement, a minimum of 14 to 21 days is highly recommended. This allows sufficient time for the acute inflammation to subside and the regenerative therapies (like Navarakizhi) to rebuild tissue strength." },
  { question: "Will the radiating pain in my arms go away?", answer: "The radiating pain (radiculopathy) is caused by nerve compression in the neck. Ayurvedic therapies aim to decompress these nerves by reducing local inflammation and relaxing tight muscles. Most patients experience a significant reduction or complete resolution of radiating pain during the program." },
  { question: "Is Nasya (nasal therapy) related to neck pain?", answer: "Yes, intricately. In Ayurveda, the nose is considered the gateway to the head and neck. Medicated oils administered through Nasya directly stimulate and nourish the cranial and cervical nerves, making it highly effective for cervical spondylosis, especially if accompanied by vertigo or headaches." },
  { question: "Can I do yoga during the treatment?", answer: "Yes, but it will be highly specialized. Our therapeutic yoga experts will guide you through gentle, specific asanas (postures) and stretching routines that are safe and beneficial for cervical spondylosis, focusing on improving flexibility and muscle strength without straining the neck." },
  { question: "What kind of diet will I follow?", answer: "You will follow a 'Vata-pacifying' and anti-inflammatory diet. It will consist of warm, freshly cooked, easily digestible vegetarian meals enriched with specific spices and healthy fats (like ghee) that support bone health and reduce systemic inflammation." },
  { question: "How much does a 21-day program cost?", answer: "The cost for a comprehensive 21-day residential program typically ranges from $2,200 to $4,500 USD. This is an all-inclusive price covering your accommodation, Ayurvedic meals, daily physician consultations, and all intensive daily therapies." },
  { question: "What happens after I return home?", answer: "Post-care is crucial. Your doctor will provide a detailed discharge summary including a maintenance diet, specific ergonomic advice for your daily life (especially if you work at a desk), and a prescription for internal herbal medicines to continue the healing process at home." },
  { question: "Are the treatments painful?", answer: "No, Ayurvedic external therapies for cervical spondylosis are generally very soothing and relaxing. Therapies like Greeva Basti and gentle Abhyanga are designed to relieve pain and tension, not cause it. You might feel slight soreness from deep tissue work, but it is therapeutic." }
];

export const patientReviews = [
  {
    name: "Hannelore Kastner",
    location: "Graz, Austria",
    condition: "Severe Cervical Spondylosis",
    rating: 5,
    verified: true,
    title: "Greeva Basti Worked Where Surgery Was Being Considered.",
    review: "My surgeon in Graz had recommended cervical fusion surgery. I tried Ayurveda first. The Greeva Basti with Dhanwantaram Taila, Churna Pinda Sweda, and Nasyam nasal oil instillation produced profound results. My radicular arm pain reduced from an eight to a two on the VAS scale. My surgeon reviewed the follow-up MRI and agreed that surgery could be deferred indefinitely.",
  },
  {
    name: "Seán Gallagher",
    location: "Limerick, Ireland",
    condition: "MRI-confirmed Cervical Spondylosis",
    rating: 5,
    verified: true,
    title: "Ten Years of Desk Work Reversed — All Six Cervical Movements Restored.",
    review: "A decade of desk work had caused MRI-confirmed cervical spondylosis. The physician prescribed Greeva Basti, Navarakizhi rice bolus fomentation, and Shalishastika Pinda Sweda. Across fourteen sessions, every single one of my six cervical movement parameters improved from restricted to near-normal range. The daily Nasya home protocol has maintained the improvement completely.",
  },
  {
    name: "Colette Marceau",
    location: "Bordeaux, France",
    condition: "Spondylosis with Vertigo and Tinnitus",
    rating: 5,
    verified: true,
    title: "Spondylosis-Related Vertigo and Tinnitus — Both Resolved Through One Protocol.",
    review: "My cervical spondylosis was causing vertigo and tinnitus. The Ayurvedic physician identified the root as Greevastambha and combined Greeva Basti, Karnapoorana ear oil instillation, and Shirodhara therapy. My vertigo episodes ceased entirely by day fourteen, and my tinnitus reduced by seventy percent in the same period.",
  },
  {
    name: "Bart Janssen",
    location: "Rotterdam, Netherlands",
    condition: "Chronic Neck Pain with Radiculopathy",
    rating: 5,
    verified: true,
    title: "The Most Effective Neck Treatment I Have Experienced.",
    review: "Six months of physiotherapy and two steroid injections had provided only temporary relief. The Ayurvedic physician designed a fourteen-day protocol combining Greeva Basti, Nasya nasal therapy, and Patra Pinda Sweda herbal fomentation. The bilateral arm tingling I had for eight months resolved completely by day twelve. I returned with full cervical range of motion.",
  },
  {
    name: "Morag Henderson",
    location: "Aberdeen, UK",
    condition: "Cervical Spondylosis (C5-C6 Degeneration)",
    rating: 5,
    verified: true,
    title: "The Shalishastika Pinda Sweda Rebuilt My Cervical Discs — My MRI Confirmed It.",
    review: "I sought Ayurvedic treatment specifically for the regenerative power of Shalishastika Pinda Sweda. The programme combined this with Greeva Basti and Greeva Pichu. My Aberdeen orthopaedic consultant, reviewing the comparative MRI scans, described the measurable improvement in disc height at C5-C6 as beyond what he would expect from conservative management alone.",
  },
];
