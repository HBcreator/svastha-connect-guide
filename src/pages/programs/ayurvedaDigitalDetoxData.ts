import {
  Activity, Droplet, Heart, Leaf, Sparkles, Stethoscope,
  ClipboardCheck, Calendar, UserCheck, MapPin, ReceiptIndianRupee,
  BedDouble, UtensilsCrossed, Pill, Brain, ShieldCheck, Globe2,
  CalendarCheck2, Route, Headset, UserCog, AlertTriangle, CircleCheck,
  HeartPulse, TestTube, FileText, Wind, Shield, Focus, Moon, Sun, MonitorOff
} from "lucide-react";

export const quickSummaryRows = [
  ["Focus Area", "Digital Fasting, Mental Reset, Nervous System Repair, Screen Detox"],
  ["Treatment Duration", "7–14 Days (Recommended for complete mental reset)"],
  ["Who It Is For", "Professionals experiencing screen fatigue, tech addiction, or burnout"],
  ["Core Approach", "Shirodhara + Mindfulness Meditation + Digital Fasting + Nasya"],
  ["Key Benefit", "Restore cognitive clarity, improve sleep cycles, and reduce anxiety"],
  ["Top Locations", "Kerala, Rishikesh, Goa, Maharashtra"],
  ["Average Cost", "$1,200 – $3,500 USD (all-inclusive)"],
  ["Supervised By", "Ayurvedic Doctors & Certified Mindfulness Coaches"],
];

export const quickSummaryMobileIcons = {
  "Focus Area": MonitorOff,
  "Treatment Duration": Calendar,
  "Who It Is For": UserCheck,
  "Core Approach": Activity,
  "Key Benefit": Sparkles,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
} as const;

export const whatIsProgram = {
  title: "What Is an Ayurveda + Digital Detox Retreat?",
  content: "In our hyper-connected modern world, continuous exposure to screens, notifications, and digital stimuli leads to chronic overstimulation of the nervous system. Ayurveda identifies this as a severe aggravation of Vata dosha in the mind (Prana Vata), resulting in insomnia, brain fog, anxiety, and 'tech neck' posture issues. An Ayurvedic Digital Detox retreat is a structured intervention designed to unplug you from technology and reconnect you with your natural circadian rhythms."
};

export const therapies = [
  {
    title: "Shirodhara (Mind-Calming Therapy)",
    description: "A continuous, gentle stream of warm medicated herbal oil poured over the forehead (third eye). This profoundly relaxes the central nervous system, relieving mental exhaustion, eye strain, and tech-induced insomnia.",
    icon: Droplet,
  },
  {
    title: "Netra Tarpana (Eye Rejuvenation)",
    description: "A specialized therapy for digital eye strain. A well of dough is created around the eyes, filled with medicated ghee. It cools the eyes, improves vision clarity, and soothes the optic nerve overused by screens.",
    icon: Focus,
  },
  {
    title: "Abhyanga (Synchronized Massage)",
    description: "A full-body warm herbal oil massage that grounds excess Vata dosha. It releases tension accumulated from prolonged sitting, specifically targeting the neck, shoulders, and lower back.",
    icon: Activity,
  },
  {
    title: "Nasya (Nasal Cleansing)",
    description: "Administration of herbal oils through the nasal passage. This clears the sinuses, enhances oxygen flow to the brain, and alleviates tension headaches associated with prolonged screen time.",
    icon: Wind,
  },
  {
    title: "Digital Fasting (Technology Abstinence)",
    description: "A complete or partial break from all electronic devices. Devices are securely stored away to eliminate notification anxiety and retrain the brain's dopamine reward system.",
    icon: MonitorOff,
  },
  {
    title: "Mindfulness & Meditation (Dhyana)",
    description: "Guided sessions to help the mind transition from a state of constant distraction to focused awareness. Practices include Trataka (candle gazing) and Yoga Nidra (yogic sleep).",
    icon: Brain,
  },
];

export const candidatePoints = [
  "Experiencing chronic 'screen fatigue', dry eyes, or tech-neck pain",
  "Struggling with notification anxiety or phantom vibration syndrome",
  "Suffering from disrupted sleep cycles or chronic insomnia due to blue light",
  "Feeling emotionally drained, distracted, or unable to focus deeply",
  "Seeking a structured environment to break unhealthy social media habits",
];

export const avoidPoints = [
  "Individuals whose jobs require 24/7 on-call availability without any backup",
  "Those unwilling to temporarily surrender their smartphones or laptops",
  "People looking for a fast-paced tourist holiday rather than an introspective retreat",
];

export const weekBreakdown = [
  {
    week: "Phase 1",
    title: "The Disconnect & Withdrawal",
    focus: "Surrendering devices and managing initial tech-withdrawal anxiety.",
    points: [
      "Consultation and personalized dosha assessment",
      "Secure storage of all digital devices (Digital Fasting initiation)",
      "Grounding Abhyanga massages to calm the shocked nervous system",
      "Gentle evening nature walks and tech-free socialization",
    ],
  },
  {
    week: "Phase 2",
    title: "Deep Nervous System Repair",
    focus: "Intensive therapies to soothe the mind and heal physical strain.",
    points: [
      "Daily Shirodhara treatments for profound mental relaxation",
      "Netra Tarpana sessions to treat chronic digital eye strain",
      "Yoga therapies targeting neck, shoulder, and spinal alignment",
      "Dopamine reset through silence periods and mindful eating",
    ],
  },
  {
    week: "Phase 3",
    title: "Reconnection & Integration",
    focus: "Building healthy technological boundaries for daily life.",
    points: [
      "Cognitive behavioral workshops on mindful technology use",
      "Gradual, intentional re-introduction to essential devices (optional)",
      "Prescription of daily Ayurvedic routines (Dinacharya) for home",
      "Final consultation to establish a sustainable work-life balance plan",
    ],
  },
];

export const benefits = {
  physical: [
    "Significant relief from 'tech-neck', shoulder, and upper back tension",
    "Restored eye health, reduced redness, and relief from dry eye syndrome",
    "Improved posture and spinal alignment through targeted yoga",
    "Deeply rested nervous system leading to lowered cortisol levels",
  ],
  mental: [
    "Enhanced attention span and return of deep cognitive focus",
    "Breaking the cycle of dopamine addiction linked to social media",
    "Profound relief from background anxiety and mental chatter",
    "Restoration of deep, uninterrupted REM sleep cycles",
  ],
  longTerm: [
    "Establishment of sustainable, mindful relationships with technology",
    "Increased real-world presence and better interpersonal connections",
    "Tools to prevent future digital burnout in high-stress environments",
  ],
};

export const benefitsSectionImages = [
  "/program-images/digital-detox/1.png",
  "/program-images/digital-detox/2.png",
  "/program-images/digital-detox/3.png",
  "/program-images/digital-detox/4.png",
];

export const costComparisonRows = [
  {
    program: "Essential Digital Detox & De-stress (7 Days)",
    category: "Preventative",
    cost: "$1,200 – $2,000",
    notes: "Ideal for a quick mental reset. Includes basic Ayurvedic therapies and device-free zones.",
  },
  {
    program: "Comprehensive Mind Repair & Detox (14 Days)",
    category: "Intensive Healing",
    cost: "$2,200 – $3,500",
    notes: "For chronic tech burnout. Includes daily Shirodhara, Netra Tarpana, and deep counseling.",
  },
];

export const chooseIndiaPoints = [
  {
    title: "Authentic Tranquility",
    description: "Retreats located in serene environments—from Himalayan foothills to Kerala backwaters—naturally encouraging disconnection.",
    icon: Leaf,
  },
  {
    title: "Ancient Wisdom",
    description: "Ayurveda has managed sensory overload (Indriya Atiyoga) for millennia, long before the digital age.",
    icon: Brain,
  },
  {
    title: "Holistic Integration",
    description: "Combines clinical Ayurvedic treatments with traditional Yoga and meditation for a complete mind-body reset.",
    icon: HeartPulse,
  },
  {
    title: "Cost-Effective Luxury",
    description: "Experience premium, world-class wellness hospitality at highly competitive global rates.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Digital-Free Zones",
    description: "Many centers enforce strict no-wi-fi and no-phone policies in public spaces to support your fasting.",
    icon: MonitorOff,
  },
  {
    title: "Expert Guidance",
    description: "Care administered by highly trained Vaidyas (Ayurvedic doctors) and experienced spiritual masters.",
    icon: Stethoscope,
  },
];

export const whyChooseUsPoints = [
  {
    title: "Curated Detox Centers",
    description: "We strictly partner with retreats that offer genuine offline experiences and clinical-grade Ayurvedic therapies.",
    icon: ClipboardCheck,
  },
  {
    title: "Pre-Retreat Assessment",
    description: "Our doctors evaluate your stress levels and specific physical symptoms (like eye strain) before you travel.",
    icon: FileText,
  },
  {
    title: "Seamless Travel Management",
    description: "From the moment you land, we handle logistics so you can surrender your phone without worry.",
    icon: Route,
  },
  {
    title: "Post-Treatment Care",
    description: "We arrange follow-up online consultations to help you maintain mindful tech habits at home.",
    icon: Headset,
  },
  {
    title: "Transparent, All-Inclusive Pricing",
    description: "No hidden hospital fees or agent commissions. You pay the direct clinical price.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 On-Ground Concierge",
    description: "While you are disconnected, your family can reach our dedicated assistant for emergencies.",
    icon: UserCog,
  },
];

export const inclusionsRows = [
  { label: "Accommodation", details: "7 to 14 nights stay in a serene, nature-immersed room (TV-free)", icon: BedDouble },
  { label: "Consultations", details: "Initial, daily, and final assessments by Chief Ayurvedic Physician", icon: Stethoscope },
  { label: "Daily Therapies", details: "Customized Ayurvedic treatments (Shirodhara, Abhyanga, Netra Tarpana)", icon: Activity },
  { label: "Ayurvedic Diet", details: "Customized vegetarian/Sattvic meals to balance Vata dosha", icon: UtensilsCrossed },
  { label: "Wellness Activities", details: "Daily Yoga, Meditation, and nature walks", icon: Heart },
  { label: "Medicines", details: "All internal herbal supplements prescribed during the stay", icon: Pill },
  { label: "Transfers", details: "Complimentary airport pick-up and drop-off", icon: Route },
];

export const faqItems = [
  {
    question: "Will I have absolutely no access to my phone?",
    answer: "During the 'Digital Fasting' phase, devices are secured in a designated safe. However, in case of urgent emergencies, our concierge team and the retreat center can always be reached by your family, and you can access your phone if absolutely necessary. The goal is mindful disconnection, not imprisonment.",
  },
  {
    question: "Can I bring my laptop for a little bit of work?",
    answer: "We strongly advise against it to achieve the full benefits of the nervous system reset. The entire program is designed to break the cycle of continuous screen engagement. Most centers have strict no-screens policies in public areas.",
  },
  {
    question: "What will I do all day without my devices?",
    answer: "Your day will be rich with Ayurvedic therapies, yoga, meditation, mindful walks, reading physical books, and connecting with nature and fellow guests. Many participants find they actually lack enough time in the day once they immerse in the therapies.",
  },
  {
    question: "How long does it take to see benefits?",
    answer: "Most participants report an initial phase of 'withdrawal' anxiety for the first 2-3 days, followed by a profound sense of calm, significantly better sleep, and mental clarity by day 5-7.",
  },
  {
    question: "Are the Ayurvedic treatments painful?",
    answer: "Not at all. Digital Detox therapies like Shirodhara and Abhyanga are deeply relaxing and non-invasive. They are designed to soothe the nervous system and relieve physical tension.",
  },
  {
    question: "Is this program suitable for solo travelers?",
    answer: "Absolutely. Most of our guests are solo travelers looking for a safe, serene, and supportive environment to reset. The communal dining and group yoga sessions provide opportunities for tech-free social interaction.",
  },
  {
    question: "What kind of yoga is practiced during the retreat?",
    answer: "The yoga sessions are typically focused on Hatha or Restorative Yoga, which emphasizes gentle stretching, spinal alignment, and nervous system relaxation, rather than intense physical exertion.",
  },
  {
    question: "Can I follow a specific diet if I have allergies?",
    answer: "Yes. Our doctors and nutritionists coordinate with the kitchen to ensure your Sattvic (pure) diet is customized to your dosha needs and any specific food allergies or dietary restrictions you may have.",
  },
  {
    question: "Are there any recreational activities other than yoga?",
    answer: "Yes, depending on the location, activities include guided nature walks, bird watching, organic gardening workshops, Ayurvedic cooking classes, and cultural performances—all designed to be enjoyed without a screen.",
  },
  {
    question: "How do I communicate with my family in case of an emergency?",
    answer: "Before you surrender your phone, we provide you with the retreat's emergency contact numbers to give to your family. Our on-ground team is also available 24/7 to relay any urgent messages immediately.",
  },
];

export const topAyurvedicCenters = [
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
    name: "Dheemahi Kumarakom – Premium Lakeside Retreat",
    city: "Kumarakom",
    location: "Kumarakom",
    description: "Nestled on the serene banks of Lake Vembanad, Dheemahi Kumarakom is a premium NABH-accredited sanctuary for authentic healing. Rooted in over 90 years of family heritage, this retreat masterfully blends deep-rooted Ayurvedic wisdom with modern luxury, offering personalized care in a tranquil lakeside haven.",
    rating: 4.9,
    reviews: 150,
    image: "/Center Images/Dheemahi Ayurvedic Centre/center dp.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/dheemahi-kumarakom"
  },
  {
    name: "Yan Cure Yoga Retreat & Ayurveda Centre",
    city: "Rishikesh",
    location: "Rishikesh",
    description: "Yan Cure Yoga Retreat & Ayurveda Centre mein aap paayenge yoga, Ayurveda aur holistic healing ka perfect sangam. Yeh centre ek shaant aur prakritik environment mein sthit hai, jahan traditional Ayurvedic therapies aur yogic practices ke zariye body, mind aur soul ko balance kiya jaata hai. Experienced Ayurvedic doctors aur certified yoga instructors ke guidance mein, Yan Cure personalized treatment programs offer karta hai jo detoxification, stress relief aur overall rejuvenation par focus karte hain. Yahan ki healing therapies ancient wisdom aur modern wellness approaches ka ek powerful combination hain, jo long-term health aur inner peace ko promote karti hain.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp",
    link: "/top-ayurvedic-centers-in-india/rishikesh/yan-cure"
  },
  {
    name: "The Nattika Beach Resort",
    city: "Thrissur",
    location: "Thrissur",
    description: "Immerse yourself in the tranquil essence of Ayurveda at The Nattika Beach Resort, an award-winning wellness retreat set along the pristine shores of Kerala. Rooted in authentic Ayurvedic traditions and guided by highly experienced physicians, Nattika offers a harmonious blend of healing, relaxation, and rejuvenation. Surrounded by lush greenery and the calming Arabian Sea, the resort provides personalized therapies designed to restore balance in body, mind, and spirit—ensuring a deeply transformative and lasting wellness experience.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/The Nattika Beach Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/the-nattika-beach-resort"
  },
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
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in the serene beauty of coastal Ayurveda at Niraamaya Retreats Surya Samudra, a luxurious wellness destination on Kerala's pristine shores. Known for authentic therapies and tranquil ocean views, it blends traditional healing with modern comfort for deep rejuvenation.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/niraamaya-retreats-surya-samudra"
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
    name: "Dhathri Ayurveda Hospital & Panchakarma Center",
    city: "Kayamkulam",
    location: "Kayamkulam",
    description: "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma. Expect a deeply healing journey where ancient heritage meets clinical excellence in a tranquil, natural environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/dhathri-ayurveda"
  },
  {
    name: "Nagarjuna Ayurveda Centre",
    city: "Kerala",
    location: "Kerala",
    description: "Nagarjuna Ayurveda Centre is one of India’s most trusted and heritage-rich Ayurvedic healthcare institutions, renowned for its authentic, classical treatment approach. Backed by decades of clinical expertise, the centre follows traditional Ayurvedic principles combined with strict diagnostic protocols to deliver effective, result-oriented therapies.",
    rating: 4.8,
    reviews: 200,
    image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/nagarjuna-ayurveda-centre"
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
    name: "Sanjeevanam Ayurveda Hospital",
    city: "Kochi",
    location: "Kochi",
    description: "Experience the future of holistic healthcare at Sanjeevanam, a pioneering integrative hospital in the heart of Kochi. It masterfully blends the ancient wisdom of Ayurveda with the precision of modern medicine, creating a unique and powerful ecosystem for deep healing. Expect evidence-based care in a modern, professional setting, where your journey to wellness is guided by a multi-disciplinary team of experts.",
    rating: 4.8,
    reviews: 1700,
    image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/sanjeevanam-ayurveda-hospital"
  },
];

export const patientReviews = [
  {
    name: "Michael T.",
    location: "USA",
    condition: "Severe Tech Burnout",
    rating: 5,
    verified: true,
    title: "I finally slept through the night",
    review: "As a software developer, my screen time was 14+ hours a day. I came here with chronic insomnia and eye strain. The 10-day detox completely reset my brain. Giving up my phone was hard for two days, but the Shirodhara treatments melted my anxiety away. I feel like a new person.",
  },
  {
    name: "Sarah J.",
    location: "UK",
    condition: "Notification Anxiety",
    rating: 5,
    verified: true,
    title: "A life-changing mental reset",
    review: "I didn't realize how addicted I was to checking emails until I couldn't. The doctors were amazing, the Ayurvedic food was delicious, and the guided meditations helped me find a peace I haven't felt in a decade. Highly recommend it to anyone feeling overwhelmed by modern life.",
  },
  {
    name: "David L.",
    location: "Australia",
    condition: "Chronic Fatigue",
    rating: 5,
    verified: true,
    title: "Exactly what my nervous system needed",
    review: "The combination of nature, no Wi-Fi, and intensive Ayurvedic massages healed my back pain and brain fog. The retreat environment is incredibly supportive. I've learned how to establish healthy digital boundaries that I'm taking back home.",
  },
  {
    name: "Elena M.",
    location: "Germany",
    condition: "Stress & Insomnia",
    rating: 4,
    verified: true,
    title: "Beautiful and deeply relaxing",
    review: "The first few days without my phone were tough, but the daily yoga and Netra Tarpana (eye treatments) were miraculous. My eyes are no longer red, and I sleep much deeper. India is truly the best place for this kind of authentic healing.",
  },
  {
    name: "James R.",
    location: "Canada",
    condition: "Executive Burnout",
    rating: 5,
    verified: true,
    title: "The best investment in my health",
    review: "I was on the verge of a breakdown from being 'always on' for work. Svastha helped me find a premium retreat where I could disconnect safely. The therapies are world-class, and the digital fasting protocol genuinely works.",
  },
];

export const jumpSections = [
  { id: "program-overview", title: "Program Overview" },
  { id: "week-breakdown", title: "Step-by-Step Breakdown" },
  { id: "benefits", title: "Key Benefits" },
  { id: "cost", title: "Cost & Packages" },
  { id: "why-india", title: "Why India?" },
  { id: "top-centers", title: "Top Centers" },
  { id: "reviews", title: "Patient Stories" },
];
