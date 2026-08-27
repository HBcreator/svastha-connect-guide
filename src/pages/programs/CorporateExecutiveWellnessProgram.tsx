import PackagePageTemplate, {
  type PackageTherapy, type PackagePhase, type PackageBenefitGroup, type PackagePoint,
  type PackageWhyUsPoint, type PackageInclusionRow, type PackageFaq, type PackageCenter, type PackageReview,
} from "@/components/PackagePageTemplate";
import { comboRetreatYoga } from "@/data/centerCombos";
import {
  Activity, Brain, CalendarCheck2, ClipboardCheck, Droplet, Globe2, Headset,
  HeartPulse, Leaf, Pill, ReceiptIndianRupee, Route, ShieldCheck, Sparkles,
  Stethoscope, TrendingUp, UserCog, Users, UtensilsCrossed,
} from "lucide-react";

const galleryImages = [
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/generated-executive-1.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/generated-executive-2.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/generated-executive-3.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/generated-executive-4.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/generated-executive-5.png",
];

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/corp-benefit-1.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/corp-benefit-2.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/corp-benefit-3.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/corp-benefit-4.png",
  "/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/corp-benefit-5.png",
];

const therapies: PackageTherapy[] = [
  { title: "Abhyanga (Stress-Release Massage)", text: "A warm, rhythmic full-body massage releases the physical tension that accumulates from chronic desk-bound stress and long working hours.", icon: Droplet },
  { title: "Shirodhara (Executive Mind Reset)", text: "A continuous stream of warm medicated oil calms an overactive, decision-fatigued mind, restoring genuine mental clarity and focus.", icon: Sparkles },
  { title: "Nadi Pariksha (Pulse-Based Health Screening)", text: "A classical Ayurvedic pulse diagnosis combined with a modern health review gives you a clear picture of your current stress load and imbalance.", icon: Stethoscope },
  { title: "Pranayama & Resilience Training", text: "Structured breathing practices you can take back to the boardroom, designed to build lasting stress resilience, not just temporary relaxation.", icon: Activity },
  { title: "Udwarthanam (Metabolic Reset Massage)", text: "A vigorous herbal powder massage counters the effects of sedentary desk work, boosting circulation and supporting healthy metabolism.", icon: Pill },
  { title: "Basti (Digestive Reset Therapy)", text: "A short, targeted Basti protocol eases chronic stress-linked digestive sluggishness common among high-performing executives.", icon: Leaf },
];

const phases: PackagePhase[] = [
  {
    title: "Phase 1 - Assessment & Detox Preparation",
    duration: "Day 1-4",
    focus: "Understanding your stress load and preparing to release it",
    description: "A private Vaidya consultation and pulse-based health screening map your current stress patterns and imbalances, followed by gentle detox-preparation therapies to begin clearing accumulated tension.",
    bullets: ["Nadi Pariksha health screening", "Private Vaidya consultation", "Gentle Abhyanga and Swedana", "Personalized stress-reset plan"],
  },
  {
    title: "Phase 2 - Core Reset & Resilience Training",
    duration: "Day 5-10",
    focus: "Deep stress release and building lasting resilience",
    description: "Daily Shirodhara and targeted therapies release deep-seated tension, while structured Pranayama and resilience coaching give you practical tools to sustain your reset once you're back at work.",
    bullets: ["Daily Shirodhara", "Executive Pranayama training", "Rasayana herbal support", "Take-home resilience plan"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits", icon: HeartPulse,
    items: ["Released chronic muscular and postural tension", "Improved sleep quality within days", "More stable energy without relying on caffeine", "Better digestion and reduced stress-related discomfort", "Lower resting stress markers", "Improved posture from reduced desk-bound strain"],
  },
  {
    title: "Mental and Emotional Benefits", icon: Brain,
    items: ["Genuinely sharper focus and decision-making clarity", "Reduced chronic stress reactivity", "A calmer baseline under pressure", "Better emotional regulation in high-stakes situations", "Renewed sense of control and perspective", "Reduced decision fatigue"],
  },
  {
    title: "Long-Term Effects", icon: Sparkles,
    items: ["Practical resilience tools for ongoing work stress", "A sustainable personal wellness routine", "Reduced risk of burnout recurrence", "Improved leadership presence and composure", "Better work-life boundary awareness", "Lasting perspective shift on managing pressure"],
  },
];

const chooseIndiaPoints: PackagePoint[] = [
  { title: "Unmatched Authenticity", text: "Ayurveda originates in India, giving access to genuine treatment lineage and physician depth unavailable elsewhere.", icon: Sparkles },
  { title: "Time-Efficient Format", text: "The 10-day format is specifically designed for executives who cannot take a month away from work.", icon: CalendarCheck2 },
  { title: "Extraordinary Value", text: "Program costs are typically 60-70% lower than comparable executive wellness retreats in Europe or the US.", icon: ReceiptIndianRupee },
  { title: "Business-Friendly Locations", text: "Centers near Delhi NCR and Bangalore allow easy combination with existing business travel.", icon: Leaf },
  { title: "Discreet, Professional Care", text: "Centers are experienced in hosting high-profile executives with complete discretion.", icon: ShieldCheck },
  { title: "Better Post-Program Continuity", text: "Structured take-home plans help you sustain your reset once back at your desk.", icon: Route },
];

const whyChooseUsPoints: PackageWhyUsPoint[] = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols and quality validation.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated handling for executives from 40+ countries with clear, efficient communication.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Case pre-screening before booking helps shortlist the right center and protocol for your schedule.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to transfers, coordinated around tight executive schedules.", icon: Route },
  { title: "During-Stay Assistance", description: "A single point of contact throughout your stay for any request or adjustment.", icon: Headset },
  { title: "Confidential Matching", description: "Center and room category matched to your privacy and scheduling requirements.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Private room or suite for 9 nights", icon: HeartPulse },
  { label: "Meals", details: "Three daily Ayurvedic meals suited to a stress-reset protocol", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial pulse-based screening plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Daily Therapies", details: "Abhyanga, Shirodhara, and others as prescribed", icon: Activity },
  { label: "Rasayana Medicines", details: "Herbal formulations and medicated oils during stay", icon: Pill },
  { label: "Resilience Training", details: "Structured Pranayama and stress-management coaching", icon: Brain },
  { label: "Take-Home Plan", details: "A practical continuity plan for sustaining results at work", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "How is this different from a standard burnout recovery program?", answer: "This program is a shorter, structured reset (10 days) built specifically for currently-functioning executives seeking proactive stress management, rather than a longer clinical recovery protocol for those already experiencing burnout." },
  { question: "Can I keep working remotely during this program?", answer: "We strongly advise against it. The program requires genuine disconnection to be effective. Most days involve therapies plus rest, making sustained work difficult." },
  { question: "Is 10 days really enough time to see results?", answer: "Yes, for a stress-reset and resilience-building format. Many executives notice significantly reduced tension and clearer focus within the first week." },
  { question: "Can this be arranged for a small executive team together?", answer: "Yes, many centers can accommodate small groups of executives on a similar schedule, while keeping each person's therapy plan individually personalized." },
  { question: "What is the average cost of this program?", answer: "Most reputable centers range from $2,600 to $4,800 USD for the 10-day format, depending on the property and room category." },
  { question: "Can I extend the program if I want a longer reset?", answer: "Yes, many guests choose to extend to a fuller 14 or 21-day program once they experience the initial benefits — your Vaidya can adjust this on arrival." },
  { question: "Do centers offer business-friendly amenities like private workspaces?", answer: "Some centers offer quiet, private spaces for occasional essential communication, though the program is designed to minimize work engagement for best results." },
];

const topCenters: PackageCenter[] = comboRetreatYoga;

const reviews: PackageReview[] = [
  { name: "Frederik", location: "Copenhagen, Denmark", condition: "Executive Stress Reset", title: "I Returned To Work Actually Focused, Not Just Rested.", review: "As a CEO, I couldn't justify a month away. This 10-day format fit my schedule and genuinely reset my stress response, not just gave me a tan. My team noticed the difference in my first week back.", rating: 5, verified: true },
  { name: "Anneliese", location: "Frankfurt, Germany", condition: "Decision Fatigue", title: "My Decision-Making Clarity Came Back Fast.", review: "Constant high-stakes decisions had left me mentally foggy. The Shirodhara and pulse screening gave my physician real insight into my imbalance, and my clarity returned within the first week.", rating: 5, verified: true },
  { name: "Jussi", location: "Helsinki, Finland", condition: "Chronic Work Stress", title: "The Resilience Training Was The Real Value For Me.", review: "The massages were wonderful, but the Pranayama resilience training was what I actually took home and still use daily. My stress reactivity at work has genuinely changed.", rating: 5, verified: true },
  { name: "Odette", location: "Brussels, Belgium", condition: "Executive Burnout Prevention", title: "A Smart, Proactive Investment Before I Burned Out.", review: "I could feel burnout approaching and wanted to act before it hit. This structured reset addressed exactly that window — I left with tools, not just temporary relief.", rating: 5, verified: true },
  { name: "Lachlan", location: "Melbourne, Australia", condition: "Travel-Related Executive Stress", title: "Perfect Length For A Business Trip Extension.", review: "I extended a business trip to Bangalore by 10 days for this. The location made it easy to justify, and the program itself completely reset my energy and focus for the following quarter.", rating: 5, verified: true },
];

const CorporateExecutiveWellnessProgram = () => (
  <PackagePageTemplate
    slug="corporate-executive-wellness-program-in-india"
    pageTitle="Corporate Executive Wellness Program in India"
    heroTagline="A structured, time-efficient reset for high-performing executives who cannot afford weeks away."
    heroDescription="Rebuild stress resilience and mental clarity through a focused, physician-led Ayurvedic program."
    heroRatingText="4.8/5 Excellent Rating"
    galleryImages={galleryImages}
    summary={{
      duration: "10 Days / 9 Nights",
      idealFor: "Executives, Entrepreneurs, High-Performers",
      locations: "Gurugram, Bangalore, Rajasthan",
      avgCost: "$2,600 - $4,800 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) with stress-management specialization",
      includes: "Accommodation, meals, therapies, consultations, medicines, resilience training",
    }}
    overviewTitle="What Is the Corporate Executive Wellness Program?"
    overviewParagraphs={[
      "This program is a focused, physician-supervised Ayurvedic reset designed specifically for executives and high-performers who need genuine stress recovery but cannot take weeks away from work. It targets the physical tension, mental fatigue, and stress reactivity that build up from chronic high-pressure decision-making.",
      "The 10-day format is deliberately compact, combining detox preparation, deep-release therapies, and practical resilience training you can sustain long after you return to work. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "350+", label: "Executives Hosted", icon: Users },
      { value: "4.8/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "92%", label: "Reported Improved Focus", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Corporate Executive Wellness"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your stress profile and schedule."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "High-performing executives and entrepreneurs managing chronic stress",
      "Leaders wanting a structured reset without a long absence from work",
      "People noticing stress-linked sleep, digestive, or focus issues",
      "Anyone wanting to proactively prevent burnout before it fully sets in",
      "Executives already combining a business trip to India",
      "Company-sponsored wellness benefit participants",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "People with an active acute illness requiring hospital-level care",
      "Pregnant women without prior physician clearance",
      "Anyone who had major surgery within the last three months",
      "People with unmanaged serious medical conditions requiring urgent treatment",
    ]}
    phaseSectionTitle="The 10-Day Program - Phase-by-Phase Breakdown"
    phaseSectionSubtitle="A compact, focused journey from assessment to a sustainable resilience plan."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Corporate Executive Wellness Program"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Corporate Executive Wellness Program in India"
    costSubtitle="Reflects a compact, physician-supervised 10-day executive reset with full stay inclusions."
    costLength="10 Days"
    costLengthNote="A time-efficient, focused reset timeline."
    costBudget="$2,600 - $4,800"
    costBudgetNote="Most popular range for reputable business-friendly centers."
    costPopularTag="MOST REQUESTED"
    costPopularDesc="Compact stress-reset with accommodation, therapies, and resilience training."
    costBanner="Most popular - Executive Wellness"
    costBannerTag="Highest demand package"
    whyIndiaTitle="Why Choose India for Executive Wellness?"
    chooseIndiaPoints={chooseIndiaPoints}
    whyUsTitle="Why Choose Us for Your Executive Reset"
    whyUsSubtitle="Not just booking support - structured, discreet guidance from pre-consultation to post-program continuity."
    whyUsBadges={["Doctor-Screened Centers", "40+ Countries Supported", "Confidential Matching"]}
    whyChooseUsPoints={whyChooseUsPoints}
    inclusionsTitle="What Is Included in the 10-Day Package?"
    inclusionsSubtitle="Everything essential for a focused, supervised executive reset."
    inclusionStats={{ duration: "10 Days", stay: "9 Nights", core: "Therapies + Resilience Training", care: "Doctor-Supervised" }}
    inclusionsRows={inclusionsRows}
    ctaTitle="Book Your Corporate Executive Wellness Program"
    ctaDescription="Begin with a confidential, no-obligation consultation. We help you choose the right center and dates around your schedule."
    ctaImage="/Ayurvedic Programs/Images/Corporate-Executive-Wellness-Program-India/generated-executive-1.png"
    whatsappMessage="Hi, I want to book a free consultation for the Corporate Executive Wellness Program."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Executive Wellness in India"
    topCentersSubtitle="Handpicked, business-friendly centers with discreet, physician-led executive wellness programs."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default CorporateExecutiveWellnessProgram;
