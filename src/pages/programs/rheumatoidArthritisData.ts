import {
  Activity, Droplet, Heart, Leaf, Sparkles, Stethoscope,
  ClipboardCheck, Calendar, UserCheck, MapPin, ReceiptIndianRupee,
  BedDouble, UtensilsCrossed, Pill, Brain, ShieldCheck, Globe2,
  CalendarCheck2, Route, Headset, UserCog,
} from "lucide-react";

export const galleryImages = [
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/1.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/2.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/3.png",
  "/Program Images/rheumatoid-arthritis.png",
  "/Program Images/28-day-healing-abhyanga.png",
  "/Program Images/28-day-healing-pizhichil.png",
];

export const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/4.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/5.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/6.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/7.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/8.png",
  "/Ayurvedic Programs/Images/Ayurveda-Treatment-RA-India/9.png",
];

export const quickSummaryRows = [
  ["Condition Treated", "Rheumatoid Arthritis (Amavata) — hands, wrists, knees, ankles, feet"],
  ["Treatment Duration", "21–28 Days (recommended for full autoimmune protocol)"],
  ["Who It Is For", "Adults with early to advanced RA seeking natural, root-cause treatment"],
  ["Core Approach", "Ama detox + Panchakarma + targeted anti-inflammatory therapies + herbal medicines"],
  ["Key Benefit", "Reduced inflammation, pain relief, lowered RA markers, restored joint function"],
  ["Top Locations", "PAN India"],
  ["Average Cost", "$2,500 – $4,500 USD (all-inclusive)"],
  ["Supervised By", "Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"],
];

export const quickSummaryMobileIcons = {
  "Condition Treated": ClipboardCheck,
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
    title: "Virechana (Therapeutic Purgation)",
    text: "A powerful Panchakarma detox that eliminates deeply accumulated Ama (metabolic toxins) from the gut and blood, directly addressing the autoimmune inflammatory cascade at its root.",
    icon: Sparkles,
  },
  {
    title: "Basti (Medicated Enema Therapy)",
    text: "The most important Vata-balancing treatment in Ayurveda. Kala Basti sequences systematically correct the immune dysregulation driving rheumatoid inflammation throughout the body.",
    icon: Droplet,
  },
  {
    title: "Valuka Sweda (Hot Sand Fomentation)",
    text: "Warm medicated sand bundles applied to inflamed joints to reduce swelling, relieve stiffness, and improve local circulation — highly effective for RA-affected hands and knees.",
    icon: Activity,
  },
  {
    title: "Abhyanga (Medicated Oil Massage)",
    text: "Daily full-body massage with anti-inflammatory herbal oils chosen for your constitution to reduce systemic Vata aggravation, improve lymphatic drainage, and nourish depleted joint tissue.",
    icon: Heart,
  },
  {
    title: "Patra Pinda Sweda (Leaf Bundle Therapy)",
    text: "Warm poultices filled with medicinal leaves and herbs applied rhythmically to affected joints, providing deep anti-inflammatory action and significant pain relief.",
    icon: Leaf,
  },
  {
    title: "Upanaham (Herbal Poultice Application)",
    text: "Thick anti-inflammatory herbal pastes applied and bandaged onto swollen joints overnight, drawing out inflammation and reducing morning stiffness — a classical RA-specific therapy.",
    icon: Stethoscope,
  },
];

export const candidatePoints = [
  "Have been diagnosed with rheumatoid arthritis (seropositive or seronegative)",
  "Experience persistent joint pain, swelling, or morning stiffness lasting more than 30 minutes",
  "Are on DMARDs, biologics, or corticosteroids and want to explore reducing medication dependence",
  "Have elevated inflammatory markers (CRP, ESR, RF) despite conventional treatment",
  "Are experiencing medication side effects and seeking a gentler, natural therapeutic approach",
  "Want a clinically supervised program that addresses the autoimmune root cause, not just symptoms",
  "Have post-partum RA or early-stage RA and want early intervention before joint damage progresses",
  "Have tried modern treatment without satisfactory results and want an integrative approach",
];

export const avoidPoints = [
  "Patients with active joint infection or septic arthritis",
  "Individuals with severe organ involvement (advanced RA vasculitis, severe lung fibrosis)",
  "Patients who are extremely debilitated or malnourished",
  "Pregnant women (modified programs may be available post-delivery)",
  "Those with active tuberculosis or uncontrolled diabetes",
];

export const weekBreakdown = [
  {
    title: "Week 1 — Purva Karma (Preparation & Ama Assessment)",
    duration: "Day 1–7",
    focus: "Digestive correction, toxin loosening, baseline assessment",
    description: "Your program begins with a comprehensive pulse diagnosis (Nadi Pariksha) and detailed constitution assessment by your Ayurvedic physician. The first week focuses on Deepana-Pachana — correcting digestive fire (Agni) to stop further Ama production. Internal herbal medicines begin immediately. Daily Abhyanga and Swedana prepare the body for deeper detoxification by loosening deeply embedded toxins from joint tissue.",
    bullets: ["Nadi Pariksha & Prakriti assessment", "Deepana-Pachana (digestive correction)", "Abhyanga with anti-inflammatory oils", "Swedana (herbal steam)", "Oral herbal formulations (Guggulu, Rasna, Ashwagandha)"],
  },
  {
    title: "Week 2 — Pradhana Karma (Core Detoxification)",
    duration: "Day 8–14",
    focus: "Active Ama elimination, systemic detox, inflammation reduction",
    description: "This is the most therapeutically intensive phase. Virechana (therapeutic purgation) is administered to eliminate accumulated Ama from the blood and gut. Basti therapy begins with a structured Kala Basti sequence — the cornerstone of RA treatment in Ayurveda. Valuka Sweda and Patra Pinda Sweda target the most affected joints daily, producing measurable reduction in swelling and pain.",
    bullets: ["Virechana (therapeutic purgation)", "Kala Basti sequence", "Valuka Sweda", "Patra Pinda Sweda", "Upanaham (overnight herbal poultice)", "Anti-inflammatory diet protocol"],
  },
  {
    title: "Week 3 — Paschat Karma (Immune Modulation & Rejuvenation)",
    duration: "Day 15–21",
    focus: "Immune rebalancing, tissue repair, mobility restoration",
    description: "With the body now significantly detoxified and inflammation reduced, treatment shifts to Rasayana (rejuvenation) and immune modulation. Specialised herbal formulations rebuild depleted joint tissue and recalibrate the dysregulated immune response. Gentle therapeutic yoga sessions — specifically designed for RA patients — begin restoring functional mobility and joint confidence.",
    bullets: ["Rasayana (rejuvenation therapy)", "Immune-modulating herbal medicines", "Therapeutic yoga for joint mobility", "Continued Basti cycles", "Dietary optimisation"],
  },
  {
    title: "Week 4 — Extended Protocol (For Advanced Cases)",
    duration: "Day 22–28",
    focus: "Deeper immune correction for long-standing or severe RA",
    description: "Patients with long-standing RA, multiple joint involvement, or high inflammatory markers are strongly recommended the full 28-day program. The additional week allows completion of extended Basti cycles that produce more profound systemic Vata-Ama correction, and consolidation of Rasayana therapies for sustained remission.",
    bullets: ["Extended Basti cycles", "Advanced Rasayana protocols", "Functional mobility training", "Discharge planning and home-care kit preparation"],
  },
];

export const benefits = {
  physical: [
    "Significant reduction in joint pain, swelling, and morning stiffness",
    "Measurable decrease in inflammatory markers (CRP, ESR, Rheumatoid Factor)",
    "Restored joint mobility and grip strength in hands and wrists",
    "Reduced dependence on NSAIDs, corticosteroids, and DMARDs under medical guidance",
    "Slowed disease progression and prevention of further joint deformity",
    "Improved overall energy levels and resolution of RA-related fatigue",
  ],
  mental: [
    "Relief from the chronic psychological burden of autoimmune disease",
    "Dramatically improved sleep quality — reduced night pain",
    "Reduced anxiety and depression commonly associated with long-term RA",
    "Renewed confidence in daily physical activities and self-care",
    "Deep mental relaxation through Shirodhara and guided meditation",
    "Improved emotional resilience and positive health outlook",
  ],
  longTerm: [
    "Results continue to improve for weeks and months after the program",
    "Sustained remission possible when post-program diet and routine are followed",
    "Personalised home-care kit with herbal medicines and dietary guidelines",
    "Yoga and Pranayama routine for ongoing immune regulation",
    "Many patients achieve significant medication reduction under rheumatologist supervision",
    "Lower relapse risk with Ayurvedic diet and lifestyle compliance",
  ],
};

export const costComparisonRows = [
  {
    program: "Ayurveda Treatment for Rheumatoid Arthritis (21–28 Days)",
    category: "Disease-Specific",
    cost: "$2,500 – $4,500",
    notes: "Autoimmune & joint patients, inflammation & joint repair",
  },
];

export const chooseIndiaPoints = [
  { title: "Birthplace of Amavata Science", text: "Rheumatoid arthritis has been classified and treated as 'Amavata' in Ayurveda for over 2,000 years — India offers unmatched clinical depth.", icon: Sparkles },
  { title: "Expert Vaidyas", text: "Top physicians hold accredited BAMS/MD qualifications with extensive experience treating autoimmune joint conditions.", icon: Stethoscope },
  { title: "Extraordinary Value", text: "Complete 21–28 day residential programs cost 70–80% less than comparable Western integrative medicine destinations.", icon: ReceiptIndianRupee },
  { title: "Healing Environments", text: "Centers are situated in therapeutic climates — Kerala, Rishikesh, Karnataka — that support immune recovery and deep rest.", icon: Leaf },
  { title: "Integrated Approach", text: "Yoga, meditation, pranayama, and anti-inflammatory diet are embedded into the treatment protocol from day one.", icon: Activity },
  { title: "Post-Program Continuity", text: "Discharge protocols include herbal medicines, diet plans, and remote follow-up to sustain remission after returning home.", icon: ShieldCheck },
];

export const whyChooseUsPoints = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols, safety checks, and treatment quality validation.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated handling for travelers from 40+ countries with clear communication and planning support.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Case pre-screening with your medical reports helps shortlist the right center and treatment pathway.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to arrival coordination, transfers, and check-in flow management.", icon: Route },
  { title: "During-Stay Assistance", description: "On-ground guidance through your full treatment protocol for smooth continuity and comfort.", icon: Headset },
  { title: "Condition-Based Matching", description: "Personalised center mapping based on RA severity, budget, travel preferences, and recovery goals.", icon: UserCog },
];

export const inclusionsRows = [
  { label: "Accommodation", details: "Private room or suite (as per package) for 20–27 nights", icon: BedDouble },
  { label: "Ayurvedic Meals", details: "Three daily anti-inflammatory meals personalised to your constitution and RA condition", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial Nadi Pariksha assessment plus regular check-ins with your Vaidya throughout", icon: Stethoscope },
  { label: "Daily Therapies", details: "Virechana, Basti, Valuka Sweda, Abhyanga, Patra Pinda Sweda, Upanaham — as prescribed", icon: Activity },
  { label: "Herbal Medicines", details: "All internal and external Ayurvedic medicines including Guggulu, Rasna, and medicated oils", icon: Pill },
  { label: "Yoga & Meditation", details: "Daily guided sessions specifically designed for autoimmune joint conditions", icon: Brain },
  { label: "Post-Program Kit", details: "Personalised diet plan, herbal medicines, yoga routine, and remote follow-up support", icon: ClipboardCheck },
];

export const faqItems = [
  { question: "Can Ayurveda actually treat rheumatoid arthritis, or does it only manage symptoms?", answer: "Ayurvedic treatment for RA goes beyond symptom management. The classical Amavata protocol — combining Virechana detox, Basti therapy, and immune-modulating Rasayana herbs — addresses the autoimmune root cause by eliminating Ama (metabolic toxins) and rebalancing the immune system. Clinical studies have documented measurable reductions in CRP, ESR, and Rheumatoid Factor following structured Panchakarma programs." },
  { question: "Will I need to stop my current RA medications before starting?", answer: "No. You should never stop prescribed medications without guidance from your treating rheumatologist. Your Ayurvedic physician will design a protocol that works safely alongside your current medications. Many patients subsequently achieve medically supervised dose reductions after completing the program." },
  { question: "How soon will I see results from the Ayurvedic RA treatment?", answer: "Most patients notice reduced morning stiffness and improved energy within the first 7–10 days. Significant pain relief and visible reduction in joint swelling are typically observed by week two. The most complete transformation — including measurable improvements in blood markers — develops over the full 21–28 day program and continues to improve for weeks after returning home." },
  { question: "Is this program suitable for seronegative rheumatoid arthritis?", answer: "Yes. Ayurvedic treatment does not depend solely on serological markers for diagnosis. The Vaidya uses Nadi Pariksha (pulse diagnosis) and comprehensive clinical assessment to identify the specific Amavata presentation — whether Vata-predominant, Kapha-predominant, or mixed — and designs a targeted protocol accordingly." },
  { question: "Can post-partum rheumatoid arthritis be treated with Ayurveda?", answer: "Yes, and this is one of the strongest applications. Conventional RA medications are often contraindicated during breastfeeding. Ayurvedic protocols offer a complete treatment pathway that is safe for lactating mothers, using herbal medicines and external therapies that do not affect breast milk. Several patients have achieved confirmed remission through this approach." },
];

export const topAyurvedicCenters = [
  { name: "SOUKYA International Holistic Health Centre", city: "Bengaluru, Karnataka, India", description: "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm.", rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/centers/bangalore/soukya" },
  { name: "AyurvedaGram Heritage Wellness Centre", city: "Bengaluru, Karnataka, India", description: "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles with personalized therapies.", rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/centers/bangalore/ayurvedagram" },
  { name: "Shathayu Ayurveda Yoga Retreat", city: "Bengaluru Rural, Karnataka, India", description: "A serene retreat focused on authentic Ayurveda and yogic living with classical therapies and lifestyle coaching.", rating: 4.8, reviews: 380, image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg", link: "/centers/udupi/shathayu-ayurveda-yoga-retreat" },
  { name: "Kairali - The Ayurvedic Healing Village", city: "Palakkad, Kerala, India", description: "A world-renowned Ayurvedic village offering authentic Panchakarma treatments in a lush, nature-focused environment.", rating: 4.8, reviews: 420, image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg", link: "/centers/kerala/kairali-ayurvedic-healing-village" },
  { name: "Carnoustie Ayurveda Wellness Resort", city: "Mararikulam, Kerala, India", description: "A premium beachside center known for authentic Panchakarma care, experienced doctors, and recovery-focused plans.", rating: 4.7, reviews: 360, image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg", link: "/centers/kerala/carnoustie-ayurveda-wellness-resort" },
  { name: "Somatheeram Ayurveda Village Resort", city: "Thiruvananthapuram, Kerala, India", description: "World's first Ayurveda resort providing classical treatments, yoga, and meditation overlooking the Arabian Sea.", rating: 4.7, reviews: 510, image: "/Center Images/somatheeram/Somatheeram 01.jpg", link: "/centers/kerala/somatheeram" },
  { name: "Kalari Kovilakom Palace for Ayurveda", city: "Palakkad, Kerala, India", description: "A palace-turned-retreat providing strict, traditional, and authentic Ayurvedic treatments in a spiritual setting.", rating: 4.8, reviews: 240, image: "/Center Images/Kalari Kovilakom/Thumb.jpg", link: "/centers/kerala/kalari-kovilakom" },
  { name: "Nagarjuna Ayurveda Centre", city: "Kalady, Kerala, India", description: "A heritage Ayurvedic hospital with decades of clinical experience in treating chronic and autoimmune conditions.", rating: 4.7, reviews: 310, image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg", link: "/centers/kerala/nagarjuna-ayurveda-centre" },
  { name: "Krishnendu Ayurveda Hospital", city: "Chingoli, Kerala, India", description: "A traditional hospital known for disease-specific Panchakarma protocols supervised by experienced Vaidyas.", rating: 4.8, reviews: 290, image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg", link: "/centers/kerala/krishnendu-ayurveda-hospital" },
];

export const patientReviews = [
  { name: "Eberhard Hoffmann", location: "Stuttgart, Germany", title: "Amavata Treatment in India — My Rheumatologist's Results Were Undeniable.", review: "I was managing my rheumatoid arthritis with Methotrexate, but with significant side effects. The Ayurvedic physician classified my condition as Amavata and prescribed digestive correction, followed by Virechana purgation and a Kala Basti medicated enema sequence. My rheumatoid factor reduced from 78 IU/ml to 16 IU/ml in six weeks — a result my German rheumatologist described as clinically remarkable.", rating: 5, verified: true },
  { name: "Muireann O'Callaghan", location: "Dublin, Ireland", title: "Morning Stiffness Gone — Biologics Reduced — Ayurveda Delivered What Medicine Could Not.", review: "My most debilitating symptom was two hours of morning joint stiffness. The Ayurvedic programme addressed it as Sandhistabdhata through dietary therapy, herbal steam, and specific oral formulations. By week four, my morning stiffness had resolved entirely. My rheumatologist in Ireland then made the first reduction in my biological therapy dosage in three years.", rating: 5, verified: true },
  { name: "Pascale Girard", location: "Lyon, France", title: "CRP and ESR Normalised in Six Weeks — Ayurveda Did What Two Years of Medication Had Not.", review: "My inflammatory markers (CRP and ESR) had been elevated for two years despite conventional therapy. The Ayurvedic treatment used the classical Shodhana purification protocol. At my six-week departure bloodwork, my CRP had reduced significantly and my ESR had normalised for the first time in two years. My rheumatologist requested the full protocol from the Vaidya.", rating: 5, verified: true },
  { name: "Pieter Meijer", location: "Amsterdam, Netherlands", title: "Seronegative RA Addressed Through Ayurveda When Conventional Medicine Had No Answer.", review: "My seronegative RA left my Dutch rheumatologist with an uncertain treatment path. The Ayurvedic physician used Nadi Pariksha (pulse diagnosis) to identify a Vata-Kapha Amavata presentation. The prescribed Panchakarma programme addressed my pain, swelling, and fatigue simultaneously. By week six, my pain scores across all affected joints had reduced by seventy-five percent.", rating: 5, verified: true },
  { name: "Fionnuala MacSweeney", location: "Cork, Ireland", title: "Post-Partum Rheumatoid Arthritis — Resolved Through Ayurveda Without Affecting Breastfeeding.", review: "I developed severe RA after delivery, but conventional medications were contraindicated during breastfeeding. The Ayurvedic programme in India offered a complete protocol safe for lactating mothers. My RA test titre reduced from 160 IU/ml to normal range by month four. Complete remission was confirmed, all without a single analgesic and without interrupting breastfeeding.", rating: 5, verified: true },
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
