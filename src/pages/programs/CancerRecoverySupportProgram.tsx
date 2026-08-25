import PackagePageTemplate, {
  type PackageTherapy, type PackagePhase, type PackageBenefitGroup, type PackagePoint,
  type PackageWhyUsPoint, type PackageInclusionRow, type PackageFaq, type PackageCenter, type PackageReview,
} from "@/components/PackagePageTemplate";
import { comboClinicalPanchakarma } from "@/data/centerCombos";
import {
  Activity, Brain, CalendarCheck2, ClipboardCheck, Droplet, Globe2, Headset,
  HeartPulse, Leaf, Pill, ReceiptIndianRupee, Route, ShieldCheck, Sparkles,
  Stethoscope, TrendingUp, UserCog, Users, UtensilsCrossed,
} from "lucide-react";

const galleryImages = [
  "/Ayurvedic Programs/Images/Cancer-Recovery-Support-Program-India/cancer-recovery-hero.jpg",
  "/Ayurvedic Programs/Images/Cancer-Recovery-Support-Program-India/Gentle Support Package.jpg",
  "/Ayurvedic Programs/Images/Cancer-Recovery-Support-Program-India/Comfort and Strength Package.jpg",
  "/Ayurvedic Programs/Images/Cancer-Recovery-Support-Program-India/Comprehensive Recovery Panchakarma Package.jpg",
  "/Ayurvedic Programs/Images/Cancer-Recovery-Support-Program-India/family-support-together.jpg",
];

const benefitsSectionImages = galleryImages;

const therapies: PackageTherapy[] = [
  { title: "Gentle Abhyanga", text: "A very gentle, carefully adapted oil massage supports circulation, comfort, and a genuine sense of care during recovery.", icon: Droplet },
  { title: "Ojas-Building Rasayana", text: "A tailored regimen of Guduchi, Ashwagandha, and Amalaki traditionally used to support the body's natural resilience and vital reserves.", icon: Leaf },
  { title: "Basti (Gentle Digestive Support)", text: "A gentle Basti protocol, when appropriate, supports digestive comfort and general wellbeing during the recovery journey.", icon: Activity },
  { title: "Mind-Calming Shirodhara", text: "A gentle, calming warm oil stream supports emotional steadiness and restful sleep during a naturally stressful time.", icon: Sparkles },
  { title: "Gentle Padabhyanga", text: "A soft, careful foot massage offers comfort and supports circulation, adapted to your current strength and sensitivity.", icon: Pill },
  { title: "Nasya (Gentle Nasal Support)", text: "Gentle medicated nasal drops support sinus comfort and general wellbeing throughout the recovery journey.", icon: Stethoscope },
];

const phases: PackagePhase[] = [
  {
    title: "Week 1 - Careful Assessment & Gentle Foundation",
    duration: "Day 1-7",
    focus: "A cautious, physician-led start tailored to your recovery stage",
    description: "A thorough review of your complete medical history and current oncology status guides an extremely gentle introduction to therapies, always working within your oncologist's clearance and ongoing guidance.",
    bullets: ["Comprehensive medical history review", "Very gentle Abhyanga introduction", "Emotional and comfort support", "Continuous physician monitoring"],
  },
  {
    title: "Week 2-3 - Gradual Comfort & Resilience Building",
    duration: "Day 8-21",
    focus: "Gradual, well-monitored support for comfort and resilience",
    description: "Therapies build gradually and carefully, combining gentle Rasayana herbs, calming Shirodhara, and supportive care to help rebuild comfort and general resilience at a pace suited entirely to you.",
    bullets: ["Gradual Rasayana herbal support", "Shirodhara for emotional steadiness", "Continued gentle digestive support", "Personalized home-continuity plan"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits", icon: HeartPulse,
    items: ["Gentle support for treatment-related fatigue", "Improved sleep quality", "Support for digestive comfort", "General physical comfort support", "Gradual energy rebuilding", "Support for overall physical resilience"],
  },
  {
    title: "Mental and Emotional Benefits", icon: Brain,
    items: ["A calmer, more supported emotional state", "Reduced anxiety during a stressful time", "Improved sense of being genuinely cared for", "Better emotional resilience", "A gentle space for real rest", "Renewed sense of hope and connection"],
  },
  {
    title: "Long-Term Effects", icon: Sparkles,
    items: ["A sustainable, gentle home wellness routine", "Continued resilience-building with compliance", "Ongoing comfort and emotional support", "A supportive complement to medical follow-up care", "Improved overall quality of life", "A foundation for continued recovery"],
  },
];

const chooseIndiaPoints: PackagePoint[] = [
  { title: "Unmatched Authenticity", text: "Ayurveda originates in India, with deep classical experience in gentle, supportive recovery care.", icon: Sparkles },
  { title: "Oncology-Aware Physicians", text: "Vaidyas experienced in coordinating gentle Ayurvedic support alongside oncology treatment plans.", icon: Stethoscope },
  { title: "Extraordinary Value", text: "Program costs are typically 50-65% lower than comparable supportive recovery retreats in Western destinations.", icon: ReceiptIndianRupee },
  { title: "Calm, Restorative Environments", text: "Centers are set in peaceful surroundings designed to support genuine, unhurried rest.", icon: Leaf },
  { title: "Gentle, Integrated Care", text: "Yoga, meditation, and dietary support are woven in at a pace suited to your recovery stage.", icon: Activity },
  { title: "Coordinated Continuity", text: "Structured take-home guidance supports continued recovery alongside your ongoing medical follow-up.", icon: ShieldCheck },
];

const whyChooseUsPoints: PackageWhyUsPoint[] = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols experienced in gentle, supportive care.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated, compassionate handling for travelers and their families from 40+ countries.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Careful case pre-screening, requiring your treating oncologist's clearance before booking.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to transfers, coordinated with extra care and comfort.", icon: Route },
  { title: "During-Stay Assistance", description: "Attentive, compassionate on-ground support throughout your full stay.", icon: Headset },
  { title: "Careful, Personalized Matching", description: "Center and pace matched carefully to your specific recovery stage and needs.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Private, comfortable room or suite for 20 nights", icon: HeartPulse },
  { label: "Meals", details: "Three daily gentle, digestion-friendly Ayurvedic meals", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Thorough initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Gentle Therapies", details: "Very gentle Abhyanga, Shirodhara, and others as tolerated and prescribed", icon: Activity },
  { label: "Supportive Herbs", details: "Ojas-building Rasayana formulations", icon: Pill },
  { label: "Gentle Movement", details: "Light guided movement suited to your energy level", icon: Brain },
  { label: "Post-Program Support", details: "Diet guidance and continuity protocol coordinated with your medical team", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "Does this program treat or cure cancer?", answer: "No. This program does not treat or cure cancer in any way. It provides gentle, supportive Ayurvedic care focused on comfort, resilience, and general wellbeing, always alongside your ongoing oncology treatment and care team." },
  { question: "Do I need my oncologist's clearance before joining?", answer: "Yes, this is required for every guest. We ask you to share your current oncology status and obtain clearance from your treating oncologist before any therapy begins." },
  { question: "Is this suitable for someone currently undergoing active cancer treatment?", answer: "This program is generally designed for guests in remission or between active treatment phases, always with oncologist guidance on timing. Please discuss your specific situation during consultation." },
  { question: "How gentle are the therapies really?", answer: "Extremely gentle by design. Every therapy is carefully adapted to your current sensitivity and energy level, with physicians closely monitoring your response throughout the entire program." },
  { question: "What is the average cost of this program?", answer: "Most reputable centers range from $3,200 to $5,800 USD for the 21-day program, depending on the property and level of individualized care required." },
  { question: "Can family members stay with the guest during this program?", answer: "Yes, most centers can accommodate accompanying family members, either joining supportive activities or staying nearby for comfort and support." },
];

const topCenters: PackageCenter[] = comboClinicalPanchakarma;

const reviews: PackageReview[] = [
  { name: "Aurelie", location: "Lyon, France", condition: "Cancer Recovery Support (in remission)", title: "This Gave Me Space To Genuinely Rest And Heal.", review: "I came in remission, still emotionally and physically depleted from the whole journey. This gentle program, coordinated with my oncologist, gave me genuine space to rebuild comfort and calm.", rating: 5, verified: true },
  { name: "Sieglinde", location: "Graz, Austria", condition: "Post-Treatment Emotional Support", title: "The Emotional Support Was As Valuable As The Physical Care.", review: "The Shirodhara sessions calmed an anxiety I had been carrying since diagnosis. Being cared for so gently, with real medical oversight, helped me emotionally as much as physically.", rating: 5, verified: true },
  { name: "Rosalind", location: "Edinburgh, UK", condition: "Cancer Recovery Support", title: "A Genuinely Compassionate, Well-Supervised Program.", review: "Every step felt careful and considered. The physicians reviewed my full history thoroughly and never rushed anything. I left with more comfort and resilience than I arrived with.", rating: 5, verified: true },
  { name: "Bettina", location: "Zurich, Switzerland", condition: "Post-Treatment Comfort Support", title: "My Family Felt Reassured By How Careful The Team Was.", review: "My daughter accompanied me and was reassured by how thoroughly the physicians coordinated with my oncologist. The gentle care genuinely improved my comfort and outlook.", rating: 5, verified: true },
  { name: "Marguerite", location: "Brussels, Belgium", condition: "Cancer Recovery Support", title: "A Supportive Complement To My Ongoing Medical Care.", review: "I was clear this wasn't a treatment, just gentle support — and that's exactly what I received. My energy, sleep, and general sense of wellbeing all genuinely improved.", rating: 5, verified: true },
];

const CancerRecoverySupportProgram = () => (
  <PackagePageTemplate
    slug="cancer-recovery-support-program-in-india"
    pageTitle="Cancer Recovery Support Program in India"
    heroTagline="Gentle, physician-supervised Ayurvedic support for comfort and resilience during recovery — always alongside your oncology care."
    heroDescription="Supportive care for comfort, emotional steadiness, and gradual resilience building."
    heroRatingText="4.8/5 Patient Satisfaction"
    galleryImages={galleryImages}
    summary={{
      duration: "21 Days / 20 Nights",
      idealFor: "Cancer Recovery & Remission Supportive Care",
      locations: "Bangalore, Kerala, Dharamshala",
      avgCost: "$3,200 - $5,800 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) coordinating with your oncology team",
      includes: "Accommodation, meals, gentle therapies, consultations, medicines",
    }}
    overviewTitle="What Is the Cancer Recovery Support Program?"
    overviewParagraphs={[
      "This program provides gentle, physician-supervised Ayurvedic support for comfort, emotional steadiness, and general resilience during cancer recovery. It does not treat or cure cancer — it offers compassionate supportive care that works alongside your ongoing oncology treatment, always requiring your treating oncologist's clearance.",
      "The 21-day format allows a careful, unhurried pace, beginning with an extremely gentle introduction and building gradually as your body and mind respond. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "180+", label: "Guests Supported", icon: Users },
      { value: "4.8/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "87%", label: "Reported Improved Comfort", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Cancer Recovery Support"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your recovery stage and oncologist's guidance."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "Those in remission or between treatment phases, with oncologist clearance",
      "Guests seeking gentle support for treatment-related fatigue",
      "Those wanting compassionate, unhurried space to rebuild comfort",
      "Guests seeking emotional and physical support alongside medical care",
      "Family members wishing to accompany and support the guest",
      "Anyone prioritizing genuinely gentle, physician-supervised care",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "Anyone currently undergoing active cancer treatment without oncologist guidance on timing",
      "Guests without clearance from their treating oncologist",
      "People with unmanaged acute complications requiring hospital-level care",
      "Anyone unable to share complete medical history and current status",
    ]}
    phaseSectionTitle="The 21-Day Program - Week-by-Week Breakdown"
    phaseSectionSubtitle="A careful, gradual journey from gentle introduction to rebuilt comfort and resilience."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Cancer Recovery Support Program"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Cancer Recovery Support Program in India"
    costSubtitle="Reflects a gentle, physician-supervised 21-day supportive care protocol with full stay inclusions."
    costLength="21 Days"
    costLengthNote="A careful, unhurried supportive recovery timeline."
    costBudget="$3,200 - $5,800"
    costBudgetNote="Reflects extended physician supervision and gentle, individualized care."
    costPopularTag="SUPPORTIVE CARE"
    costPopularDesc="Gentle, physician-coordinated support alongside your oncology follow-up."
    costBanner="Supportive Care - Cancer Recovery Support"
    costBannerTag="Requires oncologist clearance"
    whyIndiaTitle="Why Choose India for Supportive Recovery Care?"
    chooseIndiaPoints={chooseIndiaPoints}
    whyUsTitle="Why Choose Us for Your Recovery Journey"
    whyUsSubtitle="Not just booking support - careful, compassionate guidance from pre-consultation to post-program continuity."
    whyUsBadges={["Doctor-Screened Centers", "Oncologist Coordination", "Compassionate Care"]}
    whyChooseUsPoints={whyChooseUsPoints}
    inclusionsTitle="What Is Included in the 21-Day Package?"
    inclusionsSubtitle="Everything essential for a gentle, supervised supportive recovery protocol."
    inclusionStats={{ duration: "21 Days", stay: "20 Nights", core: "Gentle Therapies + Meals", care: "Doctor-Supervised" }}
    inclusionsRows={inclusionsRows}
    ctaTitle="Book Your Cancer Recovery Support Program"
    ctaDescription="Begin with a compassionate, no-obligation consultation. We help you understand what's needed, including oncologist clearance, before booking."
    ctaImage="/Ayurvedic Programs/Images/Cancer-Recovery-Support-Program-India/cancer-recovery-hero.jpg"
    whatsappMessage="Hi, I want to book a free consultation for the Cancer Recovery Support Program."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Cancer Recovery Support in India"
    topCentersSubtitle="Handpicked hospitals and retreats experienced in gentle, physician-coordinated supportive recovery care."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default CancerRecoverySupportProgram;
