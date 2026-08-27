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
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-hero-new.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-herbs.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-yoga.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-spa-setup.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-couple-garden.png",
];

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-benefit-1.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-benefit-2.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-benefit-3.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-benefit-4.png",
  "/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-benefit-5.png",
];

const therapies: PackageTherapy[] = [
  { title: "Gentle Abhyanga", text: "A slow, gentle full-body oil massage adapted for age and mobility, easing joint stiffness and calming aggravated Vata without any strain.", icon: Droplet },
  { title: "Basti (Joint & Vata Care)", text: "A gentle, age-appropriate Basti protocol supports joint comfort and mobility, addressing the natural Vata increase that comes with age.", icon: Leaf },
  { title: "Shirodhara (Memory & Sleep Support)", text: "A calming warm oil stream supports mental clarity, memory, and deeper, more restful sleep — common concerns in later life.", icon: Sparkles },
  { title: "Age-Appropriate Rasayana", text: "A gentle regimen of Brahmi, Ashwagandha, and Amalaki supports memory, strength, and immunity, tailored to your current health status.", icon: Activity },
  { title: "Padabhyanga (Foot & Circulation Care)", text: "A gentle, warm-oil foot massage improves circulation, supports balance, and eases the swelling and stiffness common in later life.", icon: Pill },
  { title: "Nasya (Respiratory & Sinus Support)", text: "Gentle medicated nasal drops support clearer breathing and sinus comfort, common concerns that increase with age.", icon: Stethoscope },
];

const phases: PackagePhase[] = [
  {
    title: "Week 1 - Gentle Assessment & Preparation",
    duration: "Day 1-7",
    focus: "A careful, unhurried start tailored to your health status",
    description: "A thorough physician assessment reviews your full medical history and current mobility before any therapy begins. Days start gently, with light Abhyanga and dietary correction to prepare the body.",
    bullets: ["Comprehensive physician assessment", "Gentle Abhyanga introduction", "Personalized dietary correction", "Mobility and comfort review"],
  },
  {
    title: "Week 2 - Core Rejuvenation & Comfort Care",
    duration: "Day 8-14",
    focus: "Building comfort, mobility, and vitality at a comfortable pace",
    description: "Daily therapies build gradually, combining joint-focused Basti, calming Shirodhara, and Rasayana herbs, always paced to your comfort and energy levels with full physician oversight throughout.",
    bullets: ["Joint-focused Basti", "Shirodhara for sleep and memory", "Rasayana herbal support", "Gentle guided movement"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits", icon: HeartPulse,
    items: ["Reduced joint stiffness and improved comfort", "Better mobility and physical confidence", "Improved digestion and appetite", "Deeper, more restful sleep", "Stronger immunity", "More stable, sustained energy"],
  },
  {
    title: "Mental and Emotional Benefits", icon: Brain,
    items: ["Improved mental clarity and memory support", "A calmer, more settled mind", "Reduced age-related anxiety", "Better emotional steadiness", "Renewed sense of vitality and purpose", "Improved overall mood"],
  },
  {
    title: "Long-Term Effects", icon: Sparkles,
    items: ["A gentle, sustainable home wellness routine", "Improved resilience against age-related decline", "Stronger baseline health for family peace of mind", "Continued mobility and independence support", "Lasting vitality improvements", "A personalized long-term care plan"],
  },
];

const chooseIndiaPoints: PackagePoint[] = [
  { title: "Unmatched Authenticity", text: "Ayurveda originates in India, with deep experience caring for senior guests with genuine expertise and patience.", icon: Sparkles },
  { title: "Age-Appropriate Medical Care", text: "Physicians experienced with senior health needs adapt every therapy to your individual comfort and safety.", icon: Stethoscope },
  { title: "Extraordinary Value", text: "Program costs are typically 55-70% lower than comparable senior wellness retreats in Western destinations.", icon: ReceiptIndianRupee },
  { title: "Comfortable, Accessible Settings", text: "Many partner centers offer accessible rooms and grounds suited to varying mobility levels.", icon: Leaf },
  { title: "Family-Friendly Care", text: "Centers can accommodate accompanying family members who wish to join or support the stay.", icon: Activity },
  { title: "Reassuring Post-Program Continuity", text: "Clear discharge protocols and family-friendly guidance support continued care after travel.", icon: ShieldCheck },
];

const whyChooseUsPoints: PackageWhyUsPoint[] = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols and rigorous safety checks for senior guests.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated handling for senior travelers from 40+ countries with clear, patient communication.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Case pre-screening before booking ensures the right center and pace for your health status.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to airport transfers, coordinated with extra care for comfort.", icon: Route },
  { title: "During-Stay Assistance", description: "Attentive, patient on-ground support throughout your full stay.", icon: Headset },
  { title: "Family Coordination", description: "We help coordinate with accompanying family members throughout the planning and stay.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Comfortable, accessible room or suite for 13 nights", icon: HeartPulse },
  { label: "Meals", details: "Three daily Ayurvedic meals suited to senior digestive needs", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Comprehensive initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Daily Therapies", details: "Gentle Abhyanga, Basti, Shirodhara, and others as prescribed", icon: Activity },
  { label: "Rasayana Medicines", details: "Age-appropriate herbal formulations and medicated oils", icon: Pill },
  { label: "Gentle Movement", details: "Light guided movement suited to individual mobility", icon: Brain },
  { label: "Post-Program Support", details: "Family-friendly diet and continuity guidance for home", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "Is this program safe for someone with existing health conditions?", answer: "Yes, physicians conduct a comprehensive review of your full medical history before designing your personalized protocol, and all therapies are adapted to your current health status." },
  { question: "Can a family member accompany and stay with the guest?", answer: "Yes, most centers can accommodate accompanying family members, either joining the program or staying nearby for support." },
  { question: "What if mobility is limited?", answer: "All therapies are adapted to your mobility level. Many centers offer accessible accommodations, and your physician will tailor the pace of the program accordingly." },
  { question: "Can this help with memory or cognitive concerns?", answer: "Shirodhara and specific Rasayana herbs like Brahmi are traditionally used to support mental clarity and memory. Please share any specific cognitive concerns with your physician during consultation." },
  { question: "How much does this program cost?", answer: "Most reputable centers range from $2,000 to $3,800 USD for the 14-day program, depending on the property and room category." },
  { question: "Is medical documentation required before travel?", answer: "Yes, we recommend sharing your recent medical history and any current medications during the pre-travel consultation so physicians can plan safely." },
  { question: "How gentle are the daily therapies really?", answer: "Very gentle by design. Every therapy is paced to your comfort, with physicians closely monitoring your response throughout the program." },
];

const topCenters: PackageCenter[] = comboClinicalPanchakarma;

const reviews: PackageReview[] = [
  { name: "Gunnar", location: "Oslo, Norway", condition: "Joint Stiffness & Mobility", title: "At 68, I Feel More Mobile Than I Have In Years.", review: "My knee and hip stiffness had gradually limited my walks. The gentle Basti protocol and daily Abhyanga eased that stiffness noticeably. I'm walking further and more comfortably than I have in a decade.", rating: 5, verified: true },
  { name: "Ingeborg", location: "Stockholm, Sweden", condition: "Memory and Sleep Support", title: "My Sleep And Mental Clarity Both Improved.", review: "I had started worrying about my memory and poor sleep. The Shirodhara sessions and Brahmi herbs genuinely helped both. My daughter, who joined me, noticed the difference in my clarity immediately.", rating: 5, verified: true },
  { name: "Aksel", location: "Bergen, Norway", condition: "General Vitality Decline", title: "My Wife And I Both Left Feeling Renewed.", review: "We came together in our seventies, unsure what to expect. The pace was perfectly gentle for both of us, and we both left with noticeably more energy and better mobility.", rating: 5, verified: true },
  { name: "Margit", location: "Helsinki, Finland", condition: "Post-Retirement Wellness Reset", title: "A Thoughtful, Unhurried Program That Respected My Pace.", review: "I appreciated that nothing was rushed. The physicians took real time to understand my health history, and every therapy was adapted carefully. I left feeling genuinely cared for, not just treated.", rating: 5, verified: true },
  { name: "Torvald", location: "Aarhus, Denmark", condition: "Joint Comfort & Immunity", title: "My Immunity And Joint Comfort Improved Together.", review: "I used to catch every seasonal illness and struggled with knee discomfort. Since completing this program, both have genuinely improved, and my family has noticed how much more active I am now.", rating: 5, verified: true },
];

const SeniorCitizensRejuvenationProgram = () => (
  <PackagePageTemplate
    slug="senior-citizens-rejuvenation-program-in-india"
    pageTitle="Ayurveda and Rejuvenation for Senior Citizens Program in India"
    heroTagline="A gentle, unhurried Ayurvedic program designed with the pace and care senior guests deserve."
    heroDescription="Restore mobility, mental clarity, and vitality through age-appropriate classical Ayurvedic care."
    heroRatingText="4.8/5 Excellent Rating"
    galleryImages={galleryImages}
    summary={{
      duration: "14 Days / 13 Nights",
      idealFor: "Senior Citizens (60+), Family Wellness Travel",
      locations: "Bangalore, Kerala, Uttarakhand",
      avgCost: "$2,000 - $3,800 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) experienced in geriatric care",
      includes: "Accommodation, meals, gentle therapies, consultations, medicines",
    }}
    overviewTitle="What Is the Senior Citizens Rejuvenation Program?"
    overviewParagraphs={[
      "This program is a gentle, physician-supervised Ayurvedic protocol designed specifically for the needs and pace of senior guests. It focuses on joint comfort, mental clarity, sleep quality, and sustained vitality, with every therapy carefully adapted to individual health status and mobility.",
      "The 14-day format allows a thorough, unhurried physician assessment followed by a steadily building program of gentle, restorative therapies. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "500+", label: "Senior Guests Cared For", icon: Users },
      { value: "4.8/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "90%", label: "Reported Improved Mobility", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Senior Citizens Rejuvenation"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your health status and comfort level."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "Adults 60 and above seeking gentle, comprehensive rejuvenation",
      "Those experiencing joint stiffness or reduced mobility",
      "Seniors noticing memory or sleep concerns",
      "Anyone wanting a proactive investment in healthy, active aging",
      "Families wishing to accompany a senior loved one on a wellness journey",
      "Guests seeking an unhurried, physician-supervised pace of care",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "People with an active acute illness requiring hospital-level care",
      "Those with unmanaged cardiac conditions without prior physician clearance",
      "Anyone who had major surgery within the last three months",
      "Guests unable to travel safely without appropriate accompanying support",
    ]}
    phaseSectionTitle="The 14-Day Program - Week-by-Week Breakdown"
    phaseSectionSubtitle="A careful, unhurried journey from assessment to renewed comfort and vitality."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Senior Citizens Rejuvenation Program"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Senior Citizens Rejuvenation Program in India"
    costSubtitle="Reflects a gentle, physician-supervised 14-day protocol with full stay inclusions."
    costLength="14 Days"
    costLengthNote="An unhurried, age-appropriate rejuvenation timeline."
    costBudget="$2,000 - $3,800"
    costBudgetNote="Most popular range for reputable, accessible centers."
    costPopularTag="MOST TRUSTED"
    costPopularDesc="Gentle rejuvenation with accommodation, therapies, and family-friendly support."
    costBanner="Most popular - Senior Rejuvenation"
    costBannerTag="Highest demand package"
    whyIndiaTitle="Why Choose India for Senior Rejuvenation?"
    chooseIndiaPoints={chooseIndiaPoints}
    whyUsTitle="Why Choose Us for a Senior Loved One's Journey"
    whyUsSubtitle="Not just booking support - patient, attentive guidance from pre-consultation to post-program continuity."
    whyUsBadges={["Doctor-Screened Centers", "40+ Countries Supported", "Family-Friendly Care"]}
    whyChooseUsPoints={whyChooseUsPoints}
    inclusionsTitle="What Is Included in the 14-Day Package?"
    inclusionsSubtitle="Everything essential for a gentle, supervised rejuvenation and continuity plan."
    inclusionStats={{ duration: "14 Days", stay: "13 Nights", core: "Therapies + Meals", care: "Doctor-Supervised" }}
    inclusionsRows={inclusionsRows}
    ctaTitle="Book Your Senior Citizens Rejuvenation Program"
    ctaDescription="Begin with a no-obligation consultation. We help you choose the right center, pace, and package for your health needs."
    ctaImage="/Ayurvedic Programs/Images/Senior-Citizens-Rejuvenation-Program-India/senior-hero-new.png"
    whatsappMessage="Hi, I want to book a free consultation for the Senior Citizens Rejuvenation Program."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Senior Citizens in India"
    topCentersSubtitle="Handpicked hospitals and retreats experienced in gentle, attentive care for senior guests."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default SeniorCitizensRejuvenationProgram;
