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
    name: "Shreyas Yoga Retreat (Nelamangala)",
    city: "Bangalore",
    location: "Bangalore",
    description: "Experience a serene blend of traditional yoga philosophy and luxury wellness at Shreyas Yoga Retreat in Nelamangala, near Bangalore. Set within lush gardens and peaceful countryside, Shreyas offers an authentic yogic lifestyle rooted in ancient Indian traditions. The retreat focuses on holistic wellbeing through classical Hatha Yoga, meditation, Ayurveda therapies, and mindful living practices guided by experienced teachers. Each wellness journey is thoughtfully designed to nurture physical vitality, mental clarity, and emotional balance. With personalized programs, organic cuisine, and a tranquil environment, Shreyas provides a rejuvenating sanctuary for guests seeking deep relaxation, inner growth, and sustainable wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shreyas Yoga Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/shreyas-yoga-retreat"
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
    name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
    rating: 4.8,
    reviews: 220,
    image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-heritage"
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
    name: "Ideal Ayurvedic Resort",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on a tranquil hillside in Chowara village, just a short walk from Kovalam beach, Ideal Ayurvedic Resort is a 'Green Leaf' certified sanctuary surrounded by 15 acres of lush coconut groves. Authentic, physician-led Ayurveda is practiced with heartfelt dedication — from classical Panchakarma to personalized healing programs — in one of Kerala's most genuinely non-commercialized healing environments.",
    rating: 4.5,
    reviews: 400,
    image: "/Center Images/Ideal Ayurvedic Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ideal-ayurvedic-resort"
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
    name: "Akanta Ayurveda and Yoga Resort",
    city: "Kochi",
    location: "Kochi",
    description: "Embrace holistic transformation at Akanta Ayurveda & Yoga Cherai, Kerala's exclusive fully-licensed Ayurveda resort harmoniously positioned between the pristine Arabian Sea and tranquil backwaters. As the only yoga retreat center at Cherai Beach licensed as an Ayurvedic hospital, Akanta integrates government-verified Oushadi Clinic medicines with personalized therapeutic protocols.",
    rating: 4.5,
    reviews: 479,
    image: "/Center Images/Akanta Ayurveda and Yoga Resort/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kochi/akanta-ayurveda-and-yoga-resort"
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
    name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
    city: "Rishikesh",
    location: "Rishikesh",
    description: "Veda5 is one of India’s most premium Ayurveda & Yoga wellness retreats — combining luxury, nature, and authentic healing. From Himalayan views in Rishikesh to a serene beachfront retreat in Kerala & Goa, Veda5 offers world-class Ayurveda, detox therapies, and holistic rejuvenation.",
    rating: 4.9,
    reviews: 420,
    image: "/Center Images/veda5/veda5-1.jpg",
    link: "/top-ayurvedic-centers-in-india/veda5"
  },
];

export const patientReviews = [
  { name: "Sarah Jenkins", location: "London, UK", title: "My Psoriasis is 90% Clear After 28 Days. Truly Life-Changing.", review: "I had plaque psoriasis for 12 years and tried everything in the UK. The Ayurvedic doctor in India used Snehapana ghee followed by Virechana detox. The Takradhara was so relaxing. By week 4, my skin was smooth and the scaling had stopped. It's been 6 months and my skin is still clear.", rating: 5, verified: true },
  { name: "David Miller", location: "New York, USA", title: "Finally Found Relief from Scalp Psoriasis and Itching.", review: "The scalp psoriasis was embarrassing and painful. The clinical leech therapy and head packs worked like magic. The doctors were very knowledgeable and the environment was so peaceful. I finally feel confident again.", rating: 5, verified: true },
  { name: "Anka Müller", location: "Berlin, Germany", title: "Biologics Tapered Successfully with Ayurvedic Support.", review: "I wanted to stop biologics due to side effects. The Ayurvedic team worked with me through a 21-day detox. The Pitta-reducing diet and Raktamokshana kept my flare-ups under control. I'm now managing my skin naturally with just Ayurvedic oils and herbs.", rating: 5, verified: true },
  { name: "Michael Chen", location: "Sydney, Australia", title: "A World-Class Approach to Chronic Guttate Psoriasis.", review: "I've struggled with severe guttate psoriasis for years. The 28-day program was a revelation. The combination of Takradhara for my stress levels and Virechana for internal cleansing made a visible difference by the second week. The personalized herbal diet was easy to follow, and the expertise in skin conditions is unmatched. My skin hasn't felt this healthy in a decade.", rating: 5, verified: true },
  { name: "Elena Rossi", location: "Milan, Italy", title: "Incredible Healing and Immediate Relief from Itching.", review: "After multiple failed steroid treatments in Europe, I tried the authentic Ayurvedic approach. The Raktamokshana therapy provided immediate relief from the constant itching. The Vaidya's assessment of my Pitta-Vata imbalance was incredibly accurate. I left with a clear home-care plan and a sense of physical lightness I haven't felt in years. Highly recommended for chronic cases.", rating: 5, verified: true },
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
