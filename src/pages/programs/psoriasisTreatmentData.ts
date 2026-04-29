import {
  Activity, Droplet, Heart, Leaf, Sparkles, Stethoscope,
  ClipboardCheck, Calendar, UserCheck, MapPin, ReceiptIndianRupee,
  BedDouble, UtensilsCrossed, Pill, Brain, ShieldCheck, Globe2,
  CalendarCheck2, Route, Headset, UserCog,
} from "lucide-react";

export const galleryImages = [
  "/program-images/patient-recovery.png",
  "/program-images/psoriasis-main.png",
  "/program-images/synchronized-therapy.png",
  "/program-images/takradhara.png",
  "/program-images/consultation.png",
];

export const benefitsSectionImages = [
  "/program-images/patient-recovery.png",
  "/program-images/psoriasis-main.png",
  "/program-images/synchronized-therapy.png",
  "/program-images/takradhara.png",
];

export const quickSummaryRows = [
  ["Condition Treated", "Psoriasis (Kitibha/Mandalakustha), Eczema, Dermatitis"],
  ["Treatment Duration", "21–28 Days (recommended for deep tissue blood purification)"],
  ["Who It Is For", "Patients with chronic scaling, plaque psoriasis, or recurring skin flare-ups"],
  ["Core Approach", "Raktamokshana + Virechana + Takradhara + Liver Detox"],
  ["Key Benefit", "Reduced scaling, resolved plaques, clear skin, and reduced relapse risk"],
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
    text: "The gold standard for skin disorders. It cleanses the liver and small intestine, removing excessive Pitta and toxins from the blood to stop skin inflammation at the source.",
    icon: Sparkles,
  },
  {
    title: "Takradhara (Medicated Buttermilk Pour)",
    text: "A continuous stream of medicated buttermilk poured over the forehead. This cools the nervous system and Pitta, which is crucial for stress-triggered psoriasis.",
    icon: Droplet,
  },
  {
    title: "Raktamokshana (Blood Purification)",
    text: "Clinical bloodletting therapy (often using leeches) that removes localized toxins and stagnant blood from affected plaques, providing rapid relief from itching and scaling.",
    icon: Activity,
  },
  {
    title: "Abhyanga with Medicated Oils",
    text: "Full-body massage with specific skin-healing oils like 777 oil or Psoria oil to soften plaques, reduce dryness, and improve skin barrier function.",
    icon: Heart,
  },
  {
    title: "Lepanam (Herbal Paste Application)",
    text: "Application of specialized herbal pastes over the affected areas to reduce plaque thickness, soothe itching, and promote healthy skin cell regeneration.",
    icon: Leaf,
  },
  {
    title: "Snehapana (Internal Oleation)",
    text: "Consuming medicated ghee in increasing doses. This lubricates the deep tissues, loosens toxins, and prepares the body for successful Panchakarma detox.",
    icon: Stethoscope,
  },
];

export const candidatePoints = [
  "Have chronic Plaque Psoriasis, Guttate Psoriasis, or Scalp Psoriasis",
  "Experience persistent skin scaling, redness, and intense itching",
  "Have tried topical steroids or biologics without long-term success",
  "Are seeking a natural, drug-free approach to skin healing",
  "Have flare-ups triggered by stress, weather, or diet",
  "Want a supervised program that addresses liver health and blood purification",
  "Have associated joint pain (Psoriatic Arthritis) along with skin issues",
  "Are committed to a 21-28 day intensive clinical protocol for deep remission",
];

export const avoidPoints = [
  "Patients with active systemic infections or high fever",
  "Individuals with severe cardiac conditions or advanced organ failure",
  "Extremely debilitated or underweight patients",
  "Pregnant women (modified post-delivery plans are safer)",
  "Those with uncontrolled active malignancies",
];

export const weekBreakdown = [
  {
    title: "Week 1 — Snehana & Preparation",
    duration: "Day 1–7",
    focus: "Toxin loosening and internal lubrication",
    description: "The program begins with internal oleation (Snehapana) where medicated ghee is consumed to reach the deep layers of the skin. This loosens the 'Visha' (toxins) embedded in the tissues. External Abhyanga and steam also begin to soften the plaques and prepare the body for the main purification phase.",
    bullets: ["Pulse diagnosis & Skin assessment", "Snehapana (medicated ghee intake)", "Gentle Abhyanga", "Medicated steam bath", "Anti-Pitta dietary protocol"],
  },
  {
    title: "Week 2 — Shodhana (Main Purification)",
    duration: "Day 8–14",
    focus: "Core detoxification and blood purification",
    description: "This is the most intensive week. Virechana (therapeutic purgation) is performed to flush toxins out via the GI tract. If localized plaques are severe, Raktamokshana (leech therapy) may be performed. The skin begins to shed old plaques and new, healthier skin starts to appear as the blood is purified.",
    bullets: ["Virechana (core detox)", "Raktamokshana (bloodletting if needed)", "Takradhara for stress relief", "Medicated herbal pastes (Lepanam)", "Clinical monitoring of skin repair"],
  },
  {
    title: "Week 3 — Shamana & Rejuvenation",
    duration: "Day 15–21",
    focus: "Skin barrier repair and immune rebalancing",
    description: "After detox, the focus shifts to healing the skin barrier. External therapies like Takradhara and specialized herbal baths continue to cool the body. Internal medicines are changed to Rasayanas (rejuvenatives) that prevent the recurrence of toxins and help re-establish a healthy immune response.",
    bullets: ["Takradhara (cooling therapy)", "Kashaya Dhara (herbal decoction pour)", "Skin-healing Rasayana herbs", "Therapeutic yoga & meditation", "Home-care diet education"],
  },
  {
    title: "Week 4 — Consolidation (Recommended)",
    duration: "Day 22–28",
    focus: "Deep tissue stability and long-term remission",
    description: "For patients with long-standing or widespread psoriasis, a 4th week is crucial. It allows the new skin layers to fully stabilize and the liver to reach peak detox performance. You will receive a personalized 3-month home kit and a strict dietary plan to maintain clear skin indefinitely.",
    bullets: ["Extended Takradhara cycles", "Skin stabilization therapies", "Final Vaidya consultation", "3-month home-care plan preparation"],
  },
];

export const benefits = {
  physical: [
    "Significant reduction in skin scaling and plaque thickness",
    "Complete resolution or major relief from persistent itching",
    "Improved skin texture and restoration of natural skin color",
    "Detoxification of the liver and purification of the blood",
    "Reduced dependence on topical steroids and immunosuppressants",
    "Improved digestion and metabolic function",
  ],
  mental: [
    "Relief from the social anxiety and self-consciousness of psoriasis",
    "Deep mental cooling and stress reduction via Takradhara",
    "Improved sleep quality due to reduced night-time itching",
    "Renewed confidence in physical appearance and social interaction",
    "Better emotional resilience against flare-up triggers",
    "Clearer mind and improved focus",
  ],
  longTerm: [
    "Significantly reduced risk of frequent flare-ups",
    "Sustained skin clarity when following the post-detox diet",
    "Personalized home-care kit with herbal skin oils and tonics",
    "Knowledge of personal triggers to prevent future episodes",
    "Possible remission for months or years after the full protocol",
    "Ongoing support for maintenance through remote follow-ups",
  ],
};

export const costComparisonRows = [
  {
    program: "Ayurvedic Psoriasis Treatment Program (21–28 Days)",
    category: "Disease-Specific",
    cost: "$2,500 – $4,500",
    notes: "Deep blood purification, skin repair, and immune modulation",
  },
];

export const chooseIndiaPoints = [
  { title: "Home of Skin Science", text: "Ayurveda's 'Kustha Roga' protocols have successfully managed psoriasis for millennia with documented clinical success.", icon: Sparkles },
  { title: "Specialized Vaidyas", text: "India hosts the world's most experienced doctors specializing in non-steroidal, root-cause skin healing.", icon: Stethoscope },
  { title: "Holistic Environment", text: "Centers in Kerala and coastal Karnataka provide the humid, therapeutic air that supports skin hydration during detox.", icon: Leaf },
  { title: "Cost Efficiency", text: "All-inclusive residential programs cost a fraction of outpatient biological treatments in the West.", icon: ReceiptIndianRupee },
  { title: "Integrated Wellness", text: "Yoga and meditation are built-in to manage the stress-skin connection effectively.", icon: Activity },
  { title: "Home Care Support", text: "Get access to specialized Ayurvedic skin oils and herbs that are difficult to find outside India.", icon: ShieldCheck },
];

export const whyChooseUsPoints = [
  { title: "Doctor-Verified Centers", description: "We only partner with centers that have a proven track record in clinical skin treatment.", icon: ShieldCheck },
  { title: "Medical Report Pre-Screening", description: "Share your skin photos and reports for a free doctor's assessment before you travel.", icon: CalendarCheck2 },
  { title: "Global Patient Support", description: "Personalized assistance for international patients from booking to arrival and beyond.", icon: Globe2 },
  { title: "Transparent Pricing", description: "Clear, all-inclusive packages with no hidden costs for medicines or extra therapies.", icon: ReceiptIndianRupee },
  { title: "On-Ground Coordination", description: "Our team ensures your treatment protocol is being followed smoothly throughout your stay.", icon: Route },
  { title: "Long-Term Continuity", description: "Remote follow-up support to help you manage your skin health after returning home.", icon: Headset },
];

export const inclusionsRows = [
  { label: "Accommodation", details: "Private room/suite for 20–27 nights as per selection", icon: BedDouble },
  { label: "Skin-Healing Meals", details: "Three daily Pitta-pacifying organic meals personalized to your condition", icon: UtensilsCrossed },
  { label: "Vaidya Consultations", details: "Initial pulse diagnosis plus regular clinical reviews by skin specialists", icon: Stethoscope },
  { label: "Core Therapies", details: "Virechana, Takradhara, Raktamokshana, Lepanam, and Snehapana as prescribed", icon: Activity },
  { label: "Herbal Medicines", details: "All internal blood purifiers and external skin-healing oils included", icon: Pill },
  { label: "Stress Management", details: "Daily guided yoga and meditation to address the stress-psoriasis link", icon: Brain },
  { label: "Post-Program Plan", details: "Detailed diet plan, home-care kit, and 3 months of follow-up guidance", icon: ClipboardCheck },
];

export const faqItems = [
  { question: "Is this program effective for Scalp Psoriasis?", answer: "Yes. Ayurvedic treatments like Takradhara (medicated buttermilk pour) and specialized herbal head packs are extremely effective for Scalp Psoriasis. They cool the scalp, reduce scaling, and address the inflammation without the side effects of coal tar shampoos or steroid lotions." },
  { question: "How long will the results last?", answer: "Ayurvedic results for psoriasis are known for their longevity because the treatment addresses the root cause (blood toxins and Pitta imbalance). If the post-program diet and lifestyle (Pathya) are followed correctly, many patients enjoy months or even years of clear skin." },
  { question: "Can I do this if I am currently on Biologics?", answer: "Yes. Many patients come to India because they want to taper off biologics or steroids. Our doctors will design a supportive protocol that works alongside your current medication, helping you transition safely to natural management." },
  { question: "What is Raktamokshana and is it painful?", answer: "Raktamokshana is clinical blood purification. In psoriasis, leeches (Jalaukavacharana) are often used on stubborn plaques. It is a painless, highly controlled procedure that removes 'stagnant' toxins and provides almost immediate relief from itching." },
  { question: "Why is 21-28 days recommended for Psoriasis?", answer: "Skin cell turnover takes roughly 28 days. A full Ayurvedic protocol synchronized with this cycle allows for complete blood detoxification followed by the growth of a healthy, stable skin layer. Shorter programs may only provide temporary relief." },
  { question: "Is the diet very restrictive?", answer: "The diet focuses on Pitta-pacifying foods. You will be asked to avoid very spicy, sour (fermented), and salty foods, as well as incompatible combinations like milk and fish. The centers provide delicious, healthy meals that make following the diet easy." },
  { question: "Will the psoriasis come back after I leave?", answer: "Psoriasis is a chronic condition, but its recurrence depends on 'Ama' (toxin) accumulation. By following the personalized home-care kit and dietary guidelines provided at discharge, you can keep the toxins at bay and maintain skin clarity." },
  { question: "Does the program help with Psoriatic Arthritis?", answer: "Absolutely. The detox procedures (Virechana) and internal medicines also reduce joint inflammation. We can add specific joint therapies like Janu Basti if joint involvement is a major concern." },
  { question: "Are the herbal oils safe for sensitive skin?", answer: "Yes. Ayurvedic oils are 100% natural and prepared using traditional methods. They are specifically chosen based on your skin's sensitivity and the type of psoriasis you have." },
  { question: "What is the success rate of this program?", answer: "While individual results vary, over 80% of patients report significant visible improvement in skin clarity and a massive reduction in itching after a 21-28 day clinical protocol in India." },
];

export const topAyurvedicCenters = [
  { name: "SOUKYA International Holistic Health Centre", city: "Bengaluru, Karnataka, India", description: "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm.", rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/centers/bangalore/soukya" },
  { name: "AyurvedaGram Heritage Wellness Centre", city: "Bengaluru, Karnataka, India", description: "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles with personalized therapies.", rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/centers/bangalore/ayurvedagram" },
  { name: "Nagarjuna Ayurveda Centre", city: "Kalady, Kerala, India", description: "A heritage Ayurvedic hospital with decades of clinical experience in treating chronic and autoimmune skin conditions.", rating: 4.7, reviews: 310, image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg", link: "/centers/kerala/nagarjuna-ayurveda-centre" },
  { name: "Krishnendu Ayurveda Hospital", city: "Chingoli, Kerala, India", description: "A traditional hospital known for disease-specific Panchakarma protocols and successful skin-healing cases.", rating: 4.8, reviews: 290, image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg", link: "/centers/kerala/krishnendu-ayurveda-hospital" },
  { name: "Carnoustie Ayurveda Wellness Resort", city: "Mararikulam, Kerala, India", description: "A premium beachside center known for authentic skin-care Panchakarma and experienced Vaidyas.", rating: 4.7, reviews: 360, image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg", link: "/centers/kerala/carnoustie-ayurveda-wellness-resort" },
];

export const patientReviews = [
  { name: "Sarah Jenkins", location: "London, UK", title: "My Psoriasis is 90% Clear After 28 Days. Truly Life-Changing.", review: "I had plaque psoriasis for 12 years and tried everything in the UK. The Ayurvedic doctor in India used Snehapana ghee followed by Virechana detox. The Takradhara was so relaxing. By week 4, my skin was smooth and the scaling had stopped. It's been 6 months and my skin is still clear.", rating: 5, verified: true },
  { name: "David Miller", location: "New York, USA", title: "Finally Found Relief from Scalp Psoriasis and Itching.", review: "The scalp psoriasis was embarrassing and painful. The clinical leech therapy and head packs worked like magic. The doctors were very knowledgeable and the environment was so peaceful. I finally feel confident again.", rating: 5, verified: true },
  { name: "Anka Müller", location: "Berlin, Germany", title: "Biologics Tapered Successfully with Ayurvedic Support.", review: "I wanted to stop biologics due to side effects. The Ayurvedic team worked with me through a 21-day detox. The Pitta-reducing diet and Raktamokshana kept my flare-ups under control. I'm now managing my skin naturally with just Ayurvedic oils and herbs.", rating: 5, verified: true },
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
