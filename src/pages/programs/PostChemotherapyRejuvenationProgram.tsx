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
  "/Ayurvedic Programs/Images/Post-Chemotherapy-Rejuvenation-Program-India/post-chemo-hero.jpg",
  "/Ayurvedic Programs/Images/Post-Chemotherapy-Rejuvenation-Program-India/Gentle Recovery Package.jpg",
  "/Ayurvedic Programs/Images/Post-Chemotherapy-Rejuvenation-Program-India/Strength Rebuilding Package.jpg",
  "/Ayurvedic Programs/Images/Post-Chemotherapy-Rejuvenation-Program-India/Complete Rejuvenation Panchakarma Package.jpg",
  "/Ayurvedic Programs/Images/Post-Chemotherapy-Rejuvenation-Program-India/gentle-hope-journey.jpg",
];

const benefitsSectionImages = galleryImages;

const therapies: PackageTherapy[] = [
  { title: "Gentle Abhyanga", text: "A very gentle, low-pressure oil massage, carefully adapted to post-chemotherapy sensitivity, supports circulation and gentle comfort.", icon: Droplet },
  { title: "Immune-Supportive Rasayana", text: "A tailored regimen of Guduchi, Ashwagandha, and Amalaki traditionally used to support the body's natural resilience during recovery.", icon: Leaf },
  { title: "Nasya (Gentle Nasal Therapy)", text: "Gentle medicated nasal drops support sinus comfort and general wellbeing, adapted carefully to your current sensitivity.", icon: Sparkles },
  { title: "Digestive Support Therapy", text: "Gentle dietary and herbal support helps rebuild appetite and digestive comfort, often affected during and after chemotherapy.", icon: Activity },
  { title: "Gentle Shirodhara", text: "A soft, low-intensity warm oil stream offers gentle calm for the mind and support for sleep during a physically demanding recovery period.", icon: Stethoscope },
  { title: "Gentle Padabhyanga", text: "A soft, careful foot massage supports circulation and offers gentle comfort, adapted to your current level of sensitivity.", icon: Pill },
];

const phases: PackagePhase[] = [
  {
    title: "Week 1 - Careful Assessment & Gentle Introduction",
    duration: "Day 1-7",
    focus: "A cautious, physician-led start tailored to your recovery stage",
    description: "A thorough review of your complete oncology history and current health status guides an extremely gentle introduction to therapies, always working within your oncologist's clearance and guidance.",
    bullets: ["Comprehensive oncology history review", "Very gentle Abhyanga introduction", "Digestive comfort support", "Continuous physician monitoring"],
  },
  {
    title: "Week 2-3 - Gradual Strength & Comfort Building",
    duration: "Day 8-21",
    focus: "Gradual, well-monitored rebuilding of strength and comfort",
    description: "Therapies gradually build in a carefully monitored way, combining gentle Rasayana herbs and supportive therapies to help rebuild strength, appetite, and general wellbeing at a pace your body can genuinely sustain.",
    bullets: ["Gradual Rasayana herbal support", "Gentle Nasya as tolerated", "Continued digestive support", "Personalized home-continuity plan"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits", icon: HeartPulse,
    items: ["Gentle support for post-treatment fatigue", "Improved appetite and digestive comfort", "Support for skin and tissue comfort", "Improved sleep quality", "Gradual strength rebuilding", "General physical comfort support"],
  },
  {
    title: "Mental and Emotional Benefits", icon: Brain,
    items: ["A calmer, more supported emotional state", "Reduced treatment-related anxiety", "Improved sense of care and being supported", "Better emotional resilience", "A gentle space for genuine rest", "Renewed sense of hope and vitality"],
  },
  {
    title: "Long-Term Effects", icon: Sparkles,
    items: ["A sustainable, gentle home wellness routine", "Continued strength-rebuilding with compliance", "Ongoing digestive and appetite support", "A supportive complement to medical follow-up care", "Improved overall quality of life", "A foundation for continued recovery"],
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
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols experienced in gentle, supportive post-treatment care.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated, compassionate handling for travelers from 40+ countries.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Careful case pre-screening, requiring your oncologist's clearance before booking.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to transfers, coordinated with extra care and comfort.", icon: Route },
  { title: "During-Stay Assistance", description: "Attentive, compassionate on-ground support throughout your full stay.", icon: Headset },
  { title: "Careful, Personalized Matching", description: "Center and pace matched carefully to your specific recovery stage and needs.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Private, comfortable room or suite for 20 nights", icon: HeartPulse },
  { label: "Meals", details: "Three daily gentle, digestion-friendly Ayurvedic meals", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Thorough initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Gentle Therapies", details: "Very gentle Abhyanga, Nasya, and others as tolerated and prescribed", icon: Activity },
  { label: "Supportive Herbs", details: "Immune-supportive Rasayana formulations", icon: Pill },
  { label: "Gentle Movement", details: "Light guided movement suited to your energy level", icon: Brain },
  { label: "Post-Program Support", details: "Diet guidance and continuity protocol coordinated with your medical team", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "Is this program a cancer treatment?", answer: "No. This program does not treat cancer. It provides gentle, supportive Ayurvedic care to support comfort and general wellbeing after chemotherapy has been completed, always alongside your ongoing oncology care." },
  { question: "Do I need my oncologist's clearance before joining?", answer: "Yes, this is required. We ask all guests to share their current oncology status and obtain their treating oncologist's clearance before beginning any therapy." },
  { question: "How gentle are the therapies really?", answer: "Extremely gentle by design. Every therapy is carefully adapted to your current sensitivity and energy level, with physicians closely monitoring your response throughout." },
  { question: "Can this help with post-chemotherapy fatigue and appetite loss?", answer: "Many guests find the gentle Rasayana herbs and digestive support therapies helpful for general comfort, fatigue, and appetite, though individual results vary and should be discussed with your physician." },
  { question: "What is the average cost of this program?", answer: "Most reputable centers range from $3,000 to $5,500 USD for the 21-day program, depending on the property and level of care required." },
  { question: "Should I continue my oncology follow-up appointments during this program?", answer: "Yes, absolutely. This program is designed to complement, never replace, your ongoing oncology monitoring and follow-up care." },
];

const topCenters: PackageCenter[] = comboWellnessNature;

const reviews: PackageReview[] = [
  { name: "Beata", location: "Warsaw, Poland", condition: "Post-Chemotherapy Recovery Support", title: "This Gentle Care Was Exactly What My Body Needed.", review: "After finishing chemotherapy, I felt depleted in a way I hadn't expected. This program's gentle pace, with my oncologist's clearance, gave my body genuine space to rebuild strength and comfort.", rating: 5, verified: true },
  { name: "Henrikke", location: "Trondheim, Norway", condition: "Post-Treatment Fatigue Support", title: "My Appetite And Energy Slowly Came Back.", review: "My appetite had barely returned since treatment ended. The gentle digestive support therapies helped it come back gradually, and my energy improved alongside it over the three weeks.", rating: 5, verified: true },
  { name: "Lucienne", location: "Geneva, Switzerland", condition: "Post-Chemotherapy Comfort Support", title: "I Felt Genuinely Cared For, Not Just Treated.", review: "The physicians reviewed my full oncology history carefully and coordinated everything with real caution. I felt genuinely cared for throughout, and left with more comfort and strength than I arrived with.", rating: 5, verified: true },
  { name: "Roswitha", location: "Salzburg, Austria", condition: "Post-Treatment Recovery", title: "A Truly Gentle, Well-Supervised Recovery Space.", review: "I was nervous about trying anything new after treatment, but the extreme gentleness and constant physician monitoring reassured me completely. My comfort and general wellbeing improved steadily.", rating: 5, verified: true },
  { name: "Dagny", location: "Stavanger, Norway", condition: "Post-Chemotherapy Rejuvenation", title: "A Genuinely Supportive Complement To My Medical Care.", review: "My oncologist supported me trying this alongside my follow-up care. The gentle Rasayana herbs and calm environment gave me space to recover at my own pace, with real medical oversight throughout.", rating: 5, verified: true },
];

const PostChemotherapyRejuvenationProgram = () => (
  <PackagePageTemplate
    slug="post-chemotherapy-rejuvenation-program-in-india"
    pageTitle="Post-Chemotherapy Rejuvenation Program in India"
    heroTagline="Gentle, physician-supervised Ayurvedic support to help rebuild comfort and strength after chemotherapy — always alongside your oncology care."
    heroDescription="Supportive rejuvenation for comfort, appetite, and gradual strength rebuilding."
    heroRatingText="4.8/5 Patient Satisfaction"
    galleryImages={galleryImages}
    summary={{
      duration: "21 Days / 20 Nights",
      idealFor: "Post-Chemotherapy Supportive Recovery",
      locations: "Bangalore, Kerala, Dharamshala",
      avgCost: "$3,000 - $5,500 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) coordinating with your oncology team",
      includes: "Accommodation, meals, gentle therapies, consultations, medicines",
    }}
    overviewTitle="What Is the Post-Chemotherapy Rejuvenation Program?"
    overviewParagraphs={[
      "This program provides gentle, physician-supervised Ayurvedic support for comfort, appetite, and gradual strength rebuilding after chemotherapy has been completed. It does not treat cancer — it offers supportive care that works alongside your ongoing oncology follow-up, always requiring your treating oncologist's clearance.",
      "The 21-day format allows a careful, unhurried pace, beginning with an extremely gentle introduction and building gradually as your body responds. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "200+", label: "Guests Supported", icon: Users },
      { value: "4.8/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "88%", label: "Reported Improved Comfort", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Post-Chemotherapy Rejuvenation"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your recovery stage and oncologist's guidance."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "Those who have completed chemotherapy and have oncologist clearance",
      "Guests seeking gentle support for post-treatment fatigue or appetite loss",
      "Those wanting compassionate, unhurried space to rebuild strength",
      "Guests seeking a supportive complement to ongoing oncology follow-up",
      "Family members wishing to accompany and support the guest",
      "Anyone prioritizing genuinely gentle, physician-supervised care",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "Anyone currently undergoing active chemotherapy or radiation treatment",
      "Guests without clearance from their treating oncologist",
      "People with unmanaged acute complications requiring hospital-level care",
      "Anyone unable to share complete oncology history and current status",
    ]}
    phaseSectionTitle="The 21-Day Program - Week-by-Week Breakdown"
    phaseSectionSubtitle="A careful, gradual journey from gentle introduction to rebuilt comfort and strength."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Post-Chemotherapy Rejuvenation Program"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Post-Chemotherapy Rejuvenation Program in India"
    costSubtitle="Reflects a gentle, physician-supervised 21-day supportive care protocol with full stay inclusions."
    costLength="21 Days"
    costLengthNote="A careful, unhurried supportive recovery timeline."
    costBudget="$3,000 - $5,500"
    costBudgetNote="Reflects extended physician supervision and gentle, individualized care."
    costPopularTag="SUPPORTIVE CARE"
    costPopularDesc="Gentle, physician-coordinated rejuvenation alongside your oncology follow-up."
    costBanner="Supportive Care - Post-Chemotherapy Rejuvenation"
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
    ctaTitle="Book Your Post-Chemotherapy Rejuvenation Program"
    ctaDescription="Begin with a compassionate, no-obligation consultation. We help you understand what's needed, including oncologist clearance, before booking."
    ctaImage="/Ayurvedic Programs/Images/Post-Chemotherapy-Rejuvenation-Program-India/post-chemo-hero.jpg"
    whatsappMessage="Hi, I want to book a free consultation for the Post-Chemotherapy Rejuvenation Program."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Post-Chemotherapy Support in India"
    topCentersSubtitle="Handpicked hospitals and retreats experienced in gentle, physician-coordinated supportive recovery care."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default PostChemotherapyRejuvenationProgram;
