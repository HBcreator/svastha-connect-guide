import PackagePageTemplate, {
  type PackageTherapy, type PackagePhase, type PackageBenefitGroup, type PackagePoint,
  type PackageWhyUsPoint, type PackageInclusionRow, type PackageFaq, type PackageCenter, type PackageReview,
} from "@/components/PackagePageTemplate";
import {
  Activity, Brain, CalendarCheck2, ClipboardCheck, Droplet, Globe2, Headset,
  HeartPulse, Leaf, Pill, ReceiptIndianRupee, Route, ShieldCheck, Sparkles,
  Stethoscope, TrendingUp, UserCog, Users, UtensilsCrossed,
} from "lucide-react";

const galleryImages = [
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/mens-vitality-hero.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Vitality Reset Package.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Stamina and Wellness Package.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Complete Vitality Panchakarma Package.jpg",
];

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Icons/abhyanga-oil-massage.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Icons/chest-oil-massage.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Icons/aromatherapy-oils.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Icons/herbal-preparation.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Icons/facial-massage-spa.jpg",
  "/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/Icons/candlelight-spa.jpg",
];

const therapies: PackageTherapy[] = [
  { title: "Vajikarana Herbs (Vitality Formulations)", text: "A classical regimen of Ashwagandha, Kapikacchu, and Gokshura traditionally used to support stamina, reproductive health, and overall vitality.", icon: Leaf },
  { title: "Abhyanga (Strength-Building Massage)", text: "A warm, full-body oil massage improves circulation and nourishes tissue, supporting sustained physical stamina and energy.", icon: Droplet },
  { title: "Basti (Reproductive Health Support)", text: "A tailored Basti protocol supports the reproductive channels and addresses Vata imbalances linked to stress-related vitality decline.", icon: Activity },
  { title: "Stress Resilience & Pranayama", text: "Structured breathing practices address the chronic stress that is one of the most common contributors to reduced vitality and stamina.", icon: Sparkles },
  { title: "Shirodhara (Stress & Mind Calm)", text: "A continuous warm oil stream calms the nervous system, easing the chronic stress that often underlies reduced vitality and libido.", icon: Stethoscope },
  { title: "Udwarthanam (Fitness & Toning Massage)", text: "A vigorous herbal powder massage improves circulation and muscle tone, supporting physical fitness and sustained stamina.", icon: Pill },
];

const phases: PackagePhase[] = [
  {
    title: "Week 1 - Assessment & Foundation",
    duration: "Day 1-7",
    focus: "Understanding your vitality profile and preparing the body",
    description: "A private consultation reviews your health history, stress levels, and vitality concerns, followed by gentle preparatory therapies and dietary correction to support the program ahead.",
    bullets: ["Private Vaidya consultation", "Vitality and stress assessment", "Gentle Abhyanga introduction", "Personalized dietary plan"],
  },
  {
    title: "Week 2 - Core Vitality Building",
    duration: "Day 8-14",
    focus: "Active stamina and reproductive health support",
    description: "Daily Basti, Vajikarana herbal formulations, and stress-resilience training work together to rebuild stamina and support reproductive health.",
    bullets: ["Basti for reproductive support", "Vajikarana herbal formulations", "Daily Pranayama training", "Personalized take-home plan"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits", icon: HeartPulse,
    items: ["Improved physical stamina and energy", "Better circulation and tissue nourishment", "Support for reproductive health parameters", "Improved sleep quality", "Reduced stress-related physical tension", "More stable, sustained energy through the day"],
  },
  {
    title: "Mental and Emotional Benefits", icon: Brain,
    items: ["Reduced chronic stress load", "Improved confidence and vitality", "Better focus and mental clarity", "Reduced performance-related anxiety", "A calmer, more resilient nervous system", "Renewed sense of overall wellbeing"],
  },
  {
    title: "Long-Term Effects", icon: Sparkles,
    items: ["A sustainable vitality-support routine to take home", "Continued stamina improvements with compliance", "Better long-term stress resilience", "Support for reproductive wellness goals", "Improved overall quality of life", "Lasting confidence and vitality"],
  },
];

const chooseIndiaPoints: PackagePoint[] = [
  { title: "Unmatched Authenticity", text: "Ayurveda originates in India, with deep classical expertise in Vajikarana (vitality) therapy specifically.", icon: Sparkles },
  { title: "Specialized Men's Health Physicians", text: "Vaidyas with specific experience in male vitality and reproductive health guide your personalized protocol.", icon: Stethoscope },
  { title: "Extraordinary Value", text: "Program costs are typically 55-70% lower than comparable men's wellness retreats in Western destinations.", icon: ReceiptIndianRupee },
  { title: "Healing Environments", text: "Many centers are set in calm, restorative settings designed to support genuine stress relief and vitality.", icon: Leaf },
  { title: "Integrated Wellness", text: "Yoga, pranayama, and a vitality-supportive diet are woven into the treatment flow from day one.", icon: Activity },
  { title: "Discreet, Professional Care", text: "Centers are experienced in handling sensitive health goals with complete discretion.", icon: ShieldCheck },
];

const whyChooseUsPoints: PackageWhyUsPoint[] = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols and men's health specialization.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated handling for men traveling from 40+ countries with clear, discreet communication.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Case pre-screening before booking ensures the right center and protocol for your goals.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to arrival coordination and transfers.", icon: Route },
  { title: "During-Stay Assistance", description: "Discreet, attentive on-ground support throughout your full stay.", icon: Headset },
  { title: "Goal-Based Matching", description: "Center and protocol matched to your specific vitality and wellness goals.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Private room or suite for 13 nights", icon: HeartPulse },
  { label: "Meals", details: "Three daily vitality-supportive Ayurvedic meals", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Daily Therapies", details: "Abhyanga, Basti, and others as prescribed", icon: Activity },
  { label: "Vajikarana Herbs", details: "Classical vitality formulations and medicated oils", icon: Pill },
  { label: "Pranayama Training", details: "Daily guided breathing and stress-resilience sessions", icon: Brain },
  { label: "Post-Program Support", details: "Diet guidance and continuity protocol for home", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "What does Vajikarana mean, and how does it relate to fertility?", answer: "Vajikarana is a classical branch of Ayurveda specifically focused on vitality, stamina, and reproductive health, using herbs and therapies traditionally used to support male reproductive wellness." },
  { question: "Can this program help if we are trying to conceive?", answer: "Many men undertake this program specifically to support fertility goals. Your physician will review your complete history and tailor the protocol accordingly, ideally in coordination with your fertility specialist if you are undergoing fertility treatment." },
  { question: "Is stress really connected to vitality and stamina?", answer: "Yes, chronic stress is one of the most common contributors Ayurveda identifies in reduced vitality. The Pranayama and stress-resilience components directly address this root factor." },
  { question: "Is this program discreet?", answer: "Yes, partner centers are experienced in handling sensitive health goals with complete discretion and professionalism throughout your stay." },
  { question: "How much does this program cost?", answer: "Most reputable centers range from $2,200 to $4,200 USD for the 14-day program, depending on the property and room category." },
  { question: "How soon might I notice improved energy or stamina?", answer: "Many men notice improved energy within the first week of daily therapies. More significant, lasting vitality improvements typically develop over the full 14-day program." },
];

const topCenters: PackageCenter[] = [
  { name: "SOUKYA - Dr. Mathai's International Holistic Health Centre", city: "Bangalore", location: "Bangalore", description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm.", rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/top-ayurvedic-centers-in-india/bangalore/soukya" },
  { name: "AyurvedaGram Heritage Wellness Centre", city: "Bangalore", location: "Bangalore", description: "Immerse yourself in the authentic spirit of Ayurveda at AyurvedaGram Heritage Wellness Centre, offering holistic therapies guided by experienced Vaidyas.", rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/top-ayurvedic-centers-in-india/bangalore/ayurvedagram" },
  { name: "Indus Valley Ayurvedic Centre", city: "Mysore", location: "Mysore", description: "Indus Valley Ayurvedic Centre (IVAC) is a luxury Ayurvedic Healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards.", rating: 4.8, reviews: 500, image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg", link: "/top-ayurvedic-centers-in-india/mysore/indus-valley-ayurvedic-centre" },
  { name: "Athreya Ayurvedic Centre", city: "Kerala", location: "Kerala", description: "Authentic Ayurvedic care with personalized therapies and holistic healing in Kerala.", rating: 4.8, reviews: 500, image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg", link: "/top-ayurvedic-centers-in-india/kerala/athreya-ayurvedic-centre" },
  { name: "Ananda In The Himalayas", city: "Uttarakhand", location: "Uttarakhand", description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat rooted in Ayurveda, Yoga, and Vedanta.", rating: 4.8, reviews: 900, image: "/Center Images/Ananda in the Himalayas/Thumb.jpg", link: "/top-ayurvedic-centers-in-india/uttarakhand/ananda-in-the-himalayas" },
  { name: "ITC Grand Bharat", city: "Gurugram", location: "Gurugram", description: "Immerse yourself in the grandeur of Indian heritage at ITC Grand Bharat, a luxurious all-suite retreat nestled amidst the serene Aravalli hills.", rating: 4.8, reviews: 17000, image: "/Center Images/ITC Grand Bharat/Thumb.jpg", link: "/top-ayurvedic-centers-in-india/gurugram/itc-grand-bharat" },
];

const reviews: PackageReview[] = [
  { name: "Bastiaan", location: "Rotterdam, Netherlands", condition: "Fertility Support", title: "This Gave Us Real Hope On Our Fertility Journey.", review: "My wife and I had been trying to conceive for over a year. The Vajikarana protocol addressed my vitality directly, complementing our fertility specialist's guidance. We're hopeful in a way we hadn't felt in months.", rating: 5, verified: true },
  { name: "Mattias", location: "Gothenburg, Sweden", condition: "Chronic Fatigue and Low Stamina", title: "My Energy And Stamina Both Genuinely Improved.", review: "Years of desk work and stress had left my stamina noticeably reduced. The Abhyanga and herbal formulations rebuilt my energy steadily, and I finished the program feeling stronger than I had in years.", rating: 5, verified: true },
  { name: "Corin", location: "Bristol, UK", condition: "Stress-Related Vitality Decline", title: "Addressing My Stress Changed Everything Else.", review: "I hadn't realized how much chronic stress was affecting my vitality until the Pranayama training addressed it directly. My overall energy and confidence improved noticeably by the end of the program.", rating: 5, verified: true },
  { name: "Piet", location: "Antwerp, Belgium", condition: "General Vitality & Wellness", title: "A Discreet, Genuinely Effective Program.", review: "I appreciated how professionally and discreetly the whole process was handled. The physicians took real time to understand my goals, and my vitality and stamina both improved meaningfully.", rating: 5, verified: true },
  { name: "Soren", location: "Odense, Denmark", condition: "Reproductive Health Support", title: "My Follow-Up Results Showed Real Improvement.", review: "My physician recommended this alongside ongoing monitoring. My follow-up results showed genuine improvement, and I felt noticeably more energetic and resilient throughout the process.", rating: 5, verified: true },
];

const MensFertilityVitalityWellnessProgram = () => (
  <PackagePageTemplate
    slug="mens-fertility-vitality-wellness-program-in-india"
    pageTitle="Men's Fertility, Vitality & Wellness Program in India"
    heroTagline="A discreet, physician-led Ayurvedic path to rebuilding stamina, vitality, and reproductive wellness."
    heroDescription="Restore energy and vitality through classical Vajikarana therapy and stress-resilience training."
    heroRatingText="4.7/5 Excellent Rating"
    galleryImages={galleryImages}
    summary={{
      duration: "14 Days / 13 Nights",
      idealFor: "Vitality, Stamina, Reproductive Wellness Support",
      locations: "Bangalore, Mysore, Kerala",
      avgCost: "$2,200 - $4,200 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) specializing in Vajikarana and men's health",
      includes: "Accommodation, meals, therapies, consultations, medicines",
    }}
    overviewTitle="What Is the Men's Fertility, Vitality & Wellness Program?"
    overviewParagraphs={[
      "This program is a physician-supervised Ayurvedic protocol built around classical Vajikarana therapy — the branch of Ayurveda specifically focused on vitality, stamina, and reproductive wellness. It addresses chronic stress, low energy, and vitality decline through a structured combination of herbs and therapies.",
      "The 14-day format allows time for a thorough assessment followed by daily therapies and Vajikarana herbal support tailored to your specific goals. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "300+", label: "Men Supported", icon: Users },
      { value: "4.7/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "89%", label: "Reported Improved Vitality", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Men's Fertility, Vitality & Wellness"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your vitality profile and goals."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "Men seeking support for fertility or reproductive health goals",
      "Those experiencing low energy, stamina, or vitality decline",
      "Men with stress-related reduction in overall wellbeing",
      "Anyone wanting a proactive, natural approach to vitality support",
      "Couples seeking complementary support alongside fertility treatment",
      "Men wanting discreet, physician-led care for sensitive health goals",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "People with an active acute illness requiring hospital-level care",
      "Anyone who had major surgery within the last three months",
      "People with unmanaged serious medical conditions requiring urgent treatment",
      "Guests unable to share complete medical history beforehand",
    ]}
    phaseSectionTitle="The 14-Day Program - Week-by-Week Breakdown"
    phaseSectionSubtitle="From assessment to rebuilt vitality, stamina, and confidence."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Men's Fertility, Vitality & Wellness Program"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Men's Fertility, Vitality & Wellness Program in India"
    costSubtitle="Reflects a physician-supervised 14-day Vajikarana protocol with full stay inclusions."
    costLength="14 Days"
    costLengthNote="A focused vitality and stamina-rebuilding timeline."
    costBudget="$2,200 - $4,200"
    costBudgetNote="Most popular range for reputable men's wellness centers."
    costPopularTag="MOST REQUESTED"
    costPopularDesc="Comprehensive vitality support with accommodation and therapies."
    costBanner="Most popular - Vitality & Wellness"
    costBannerTag="Highest demand package"
    whyIndiaTitle="Why Choose India for Vitality & Wellness?"
    chooseIndiaPoints={chooseIndiaPoints}
    whyUsTitle="Why Choose Us for Your Vitality Journey"
    whyUsSubtitle="Not just booking support - discreet, structured guidance from pre-consultation to post-program continuity."
    whyUsBadges={["Doctor-Screened Centers", "40+ Countries Supported", "Discreet Professional Care"]}
    whyChooseUsPoints={whyChooseUsPoints}
    inclusionsTitle="What Is Included in the 14-Day Package?"
    inclusionsSubtitle="Everything essential for a supervised vitality and wellness protocol."
    inclusionStats={{ duration: "14 Days", stay: "13 Nights", core: "Therapies + Meals", care: "Doctor-Supervised" }}
    inclusionsRows={inclusionsRows}
    ctaTitle="Book Your Men's Fertility, Vitality & Wellness Program"
    ctaDescription="Begin with a confidential, no-obligation consultation. We help you choose the right center, dates, and package for your goals."
    ctaImage="/Ayurvedic Programs/Images/Mens-Fertility-Vitality-Wellness-Program-India/mens-vitality-hero.jpg"
    whatsappMessage="Hi, I want to book a free consultation for the Men's Fertility, Vitality & Wellness Program."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Vitality & Wellness in India"
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for men's vitality and reproductive health."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default MensFertilityVitalityWellnessProgram;
