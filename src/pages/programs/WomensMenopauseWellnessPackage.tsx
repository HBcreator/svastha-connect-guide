import PackagePageTemplate, {
  type PackageTherapy, type PackagePhase, type PackageBenefitGroup, type PackagePoint,
  type PackageWhyUsPoint, type PackageInclusionRow, type PackageFaq, type PackageCenter, type PackageReview,
} from "@/components/PackagePageTemplate";
import { comboWellnessNature } from "@/data/centerCombos";
import {
  Activity, Brain, CalendarCheck2, ClipboardCheck, Droplet, Globe2, Headset,
  HeartPulse, Leaf, Pill, ReceiptIndianRupee, Route, ShieldCheck, Sparkles,
  Stethoscope, TrendingUp, UserCog, Users, UtensilsCrossed,
} from "lucide-react";

const galleryImages = [
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-hero-new.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-herbs.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-yoga.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-shirodhara-setup.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-tea-garden.png",
];

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-benefit-1.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-benefit-2.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-benefit-3.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-benefit-4.png",
  "/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-benefit-5.png",
];

const therapies: PackageTherapy[] = [
  { title: "Shatavari Hormonal Herbs", text: "A tailored regimen built around Shatavari, traditionally used to support hormonal balance and ease common menopausal symptoms.", icon: Leaf },
  { title: "Shirodhara (Mood & Sleep Support)", text: "A continuous warm oil stream calms hormone-linked mood swings and supports the deeper, more restful sleep many women lose during this transition.", icon: Sparkles },
  { title: "Abhyanga (Hormone-Balancing Massage)", text: "A warm, full-body oil massage eases hot-flash-related tension and supports circulation and skin vitality during hormonal change.", icon: Droplet },
  { title: "Basti (Vata & Bone Health Support)", text: "A gentle Basti protocol addresses the Vata increase common during menopause, supporting joint comfort and long-term bone health.", icon: Activity },
  { title: "Nasya (Headache & Clarity Relief)", text: "Medicated nasal oils ease hormone-linked headaches and mental fog, restoring clearer, calmer days during the transition.", icon: Stethoscope },
  { title: "Udwarthanam (Metabolic Balance Massage)", text: "A herbal powder massage supports healthy metabolism, easing the weight changes many women experience during menopause.", icon: Pill },
];

const phases: PackagePhase[] = [
  {
    title: "Week 1 - Assessment & Hormonal Groundwork",
    duration: "Day 1-7",
    focus: "Understanding your symptoms and preparing the body",
    description: "A private consultation maps your specific menopausal symptoms — hot flashes, mood changes, sleep disruption, or joint discomfort — before beginning gentle preparatory therapies and dietary correction.",
    bullets: ["Private Vaidya consultation", "Symptom-specific assessment", "Gentle Abhyanga introduction", "Hormone-supportive dietary plan"],
  },
  {
    title: "Week 2 - Core Hormonal Balance & Comfort",
    duration: "Day 8-14",
    focus: "Active symptom relief and hormonal support",
    description: "Daily Shirodhara, targeted Basti, and Shatavari-based herbal formulations work together to ease symptoms and support your body's natural hormonal transition.",
    bullets: ["Daily Shirodhara", "Basti for Vata and bone health", "Shatavari herbal formulations", "Personalized take-home plan"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits", icon: HeartPulse,
    items: ["Reduced frequency and intensity of hot flashes", "Improved sleep quality", "Better joint comfort and mobility", "Improved skin tone and hydration", "More stable energy throughout the day", "Support for long-term bone health"],
  },
  {
    title: "Mental and Emotional Benefits", icon: Brain,
    items: ["Reduced mood swings and irritability", "A calmer, more stable emotional baseline", "Improved mental clarity and focus", "Reduced menopause-related anxiety", "Renewed confidence and sense of self", "Better overall emotional resilience"],
  },
  {
    title: "Long-Term Effects", icon: Sparkles,
    items: ["A sustainable hormonal-support routine to take home", "Improved long-term bone and joint health", "Continued symptom relief with compliance", "A healthier relationship with this life stage", "Lasting vitality and confidence", "Reduced reliance on symptom-only management"],
  },
];

const chooseIndiaPoints: PackagePoint[] = [
  { title: "Unmatched Authenticity", text: "Ayurveda originates in India, with deep traditional expertise in women's hormonal health across every life stage.", icon: Sparkles },
  { title: "Specialized Women's Health Physicians", text: "Vaidyas with specific experience in menopausal and hormonal care guide your personalized protocol.", icon: Stethoscope },
  { title: "Extraordinary Value", text: "Program costs are typically 55-70% lower than comparable women's wellness retreats in Western destinations.", icon: ReceiptIndianRupee },
  { title: "Healing Environments", text: "Many centers are set in calm, restorative settings designed to support genuine rest and hormonal balance.", icon: Leaf },
  { title: "Integrated Wellness", text: "Yoga, meditation, and a hormone-supportive diet are woven into the treatment flow from day one.", icon: Activity },
  { title: "Better Post-Program Continuity", text: "Discharge protocols and diet plans help sustain your hormonal balance after you return home.", icon: ShieldCheck },
];

const whyChooseUsPoints: PackageWhyUsPoint[] = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols and women's health specialization.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated handling for women travelers from 40+ countries with clear, sensitive communication.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Case pre-screening before booking ensures the right center and protocol for your symptoms.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to arrival coordination and transfers.", icon: Route },
  { title: "During-Stay Assistance", description: "Attentive, discreet on-ground support throughout your full stay.", icon: Headset },
  { title: "Symptom-Based Matching", description: "Center and protocol matched to your specific menopausal symptoms and goals.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Private room or suite for 13 nights", icon: HeartPulse },
  { label: "Meals", details: "Three daily hormone-supportive Ayurvedic meals", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Daily Therapies", details: "Abhyanga, Shirodhara, Basti, and others as prescribed", icon: Activity },
  { label: "Hormonal Herbs", details: "Shatavari-based formulations and medicated oils", icon: Pill },
  { label: "Yoga and Meditation", details: "Daily guided sessions integrated into the program", icon: Brain },
  { label: "Post-Program Support", details: "Diet guidance and continuity protocol for home", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "Can this program help with hot flashes and night sweats?", answer: "Many women experience noticeably reduced frequency and intensity of hot flashes as Shatavari-based herbs and calming therapies address the underlying hormonal imbalance." },
  { question: "Is this suitable for perimenopause, or only full menopause?", answer: "Yes, this program is designed for both perimenopausal and menopausal symptoms, with your physician tailoring the protocol to your specific stage and symptoms." },
  { question: "Can I continue my hormone replacement therapy during this program?", answer: "Yes. Please share your complete medication history during consultation so your physician can design a protocol that works safely alongside your existing treatment." },
  { question: "How does this program support bone health?", answer: "The Basti protocol and specific Rasayana herbs are traditionally used to support Vata balance and long-term bone and joint health during the hormonal changes of menopause." },
  { question: "What is the average cost of this program?", answer: "Most reputable centers range from $2,200 to $4,200 USD for the 14-day program, depending on the property and room category." },
  { question: "How soon might I notice symptom relief?", answer: "Many women notice improved sleep and mood within the first week. More significant symptom relief typically develops over the full 14-day program and the weeks following." },
];

const topCenters: PackageCenter[] = comboWellnessNature;

const reviews: PackageReview[] = [
  { name: "Marit", location: "Bergen, Norway", condition: "Menopausal Hot Flashes", title: "My Hot Flashes Reduced By More Than Half.", review: "I was having hot flashes multiple times a day for two years. The Shatavari-based herbs and daily Abhyanga reduced them dramatically within the two weeks, and the improvement has held since.", rating: 5, verified: true },
  { name: "Henriette", location: "Copenhagen, Denmark", condition: "Menopausal Mood Swings", title: "I Feel Like Myself Again Emotionally.", review: "Unpredictable mood swings had strained my relationships. The Shirodhara sessions calmed that reactivity noticeably, and I left feeling emotionally steady for the first time in over a year.", rating: 5, verified: true },
  { name: "Ottilie", location: "Hamburg, Germany", condition: "Menopausal Sleep Disruption", title: "I'm Finally Sleeping Through The Night Again.", review: "Night sweats had disrupted my sleep for months. The combination of herbal support and calming therapies genuinely resolved this — I'm sleeping seven hours uninterrupted again.", rating: 5, verified: true },
  { name: "Perpetua", location: "Dublin, Ireland", condition: "Joint Discomfort During Menopause", title: "My Joint Stiffness Has Noticeably Eased.", review: "New joint stiffness had appeared alongside my other menopausal symptoms. The Basti therapy addressed this directly, and my mobility and comfort have both genuinely improved.", rating: 5, verified: true },
  { name: "Wilhelmina", location: "Amsterdam, Netherlands", condition: "Complete Menopause Wellness", title: "A Genuinely Holistic Approach That Actually Worked.", review: "I had tried various supplements with little effect. This physician-led, comprehensive approach addressed my hot flashes, mood, and sleep together — and delivered results none of my previous attempts had.", rating: 5, verified: true },
];

const WomensMenopauseWellnessPackage = () => (
  <PackagePageTemplate
    slug="womens-menopause-wellness-package-in-india"
    pageTitle="Women's Menopause Wellness Package in India"
    heroTagline="A physician-led Ayurvedic path to easing hot flashes, mood swings, and sleep disruption during menopause."
    heroDescription="Restore hormonal balance and comfort through classical Ayurvedic women's health care."
    heroRatingText="4.8/5 Excellent Rating"
    galleryImages={galleryImages}
    summary={{
      duration: "14 Days / 13 Nights",
      idealFor: "Perimenopause & Menopause Symptom Relief",
      locations: "Bangalore, Kerala, Goa",
      avgCost: "$2,200 - $4,200 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) specializing in women's hormonal health",
      includes: "Accommodation, meals, therapies, consultations, medicines",
    }}
    overviewTitle="What Is the Women's Menopause Wellness Package?"
    overviewParagraphs={[
      "This package is a physician-supervised Ayurvedic protocol designed specifically to ease the symptoms of perimenopause and menopause — hot flashes, mood swings, sleep disruption, and joint discomfort — by supporting the body's natural hormonal transition rather than only managing symptoms.",
      "The 14-day format allows time for a thorough assessment of your specific symptoms, followed by daily therapies and Shatavari-based herbal support tailored to your needs. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "450+", label: "Women Supported", icon: Users },
      { value: "4.8/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "91%", label: "Reported Reduced Symptoms", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Women's Menopause Wellness"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your specific menopausal symptoms."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "Women experiencing perimenopausal or menopausal symptoms",
      "Those with frequent hot flashes or night sweats",
      "Women noticing mood swings, anxiety, or emotional volatility",
      "Those experiencing menopause-related sleep disruption",
      "Women wanting to proactively support long-term bone and joint health",
      "Anyone seeking a natural, physician-led complement to their care",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "People with an active acute illness requiring hospital-level care",
      "Anyone who had major surgery within the last three months",
      "People with unmanaged serious medical conditions requiring urgent treatment",
      "Guests unable to share complete medical and medication history beforehand",
    ]}
    phaseSectionTitle="The 14-Day Program - Week-by-Week Breakdown"
    phaseSectionSubtitle="From symptom assessment to genuine hormonal balance and comfort."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Women's Menopause Wellness Package"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Women's Menopause Wellness Package in India"
    costSubtitle="Reflects a physician-supervised 14-day hormonal balance protocol with full stay inclusions."
    costLength="14 Days"
    costLengthNote="A focused hormonal-balance and symptom-relief timeline."
    costBudget="$2,200 - $4,200"
    costBudgetNote="Most popular range for reputable women's wellness centers."
    costPopularTag="MOST REQUESTED"
    costPopularDesc="Comprehensive hormonal support with accommodation and therapies."
    costBanner="Most popular - Menopause Wellness"
    costBannerTag="Highest demand package"
    whyIndiaTitle="Why Choose India for Menopause Wellness?"
    chooseIndiaPoints={chooseIndiaPoints}
    whyUsTitle="Why Choose Us for Your Menopause Wellness Journey"
    whyUsSubtitle="Not just booking support - sensitive, structured guidance from pre-consultation to post-program continuity."
    whyUsBadges={["Doctor-Screened Centers", "40+ Countries Supported", "Women's Health Specialists"]}
    whyChooseUsPoints={whyChooseUsPoints}
    inclusionsTitle="What Is Included in the 14-Day Package?"
    inclusionsSubtitle="Everything essential for a supervised hormonal-balance and comfort protocol."
    inclusionStats={{ duration: "14 Days", stay: "13 Nights", core: "Therapies + Meals", care: "Doctor-Supervised" }}
    inclusionsRows={inclusionsRows}
    ctaTitle="Book Your Women's Menopause Wellness Package"
    ctaDescription="Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your symptoms."
    ctaImage="/Ayurvedic Programs/Images/Womens-Menopause-Wellness-Package-India/menopause-hero-new.png"
    whatsappMessage="Hi, I want to book a free consultation for the Women's Menopause Wellness Package."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Menopause Wellness in India"
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for women's hormonal health."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default WomensMenopauseWellnessPackage;
