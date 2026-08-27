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
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/generated-rehab-1.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/generated-rehab-2.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/generated-rehab-3.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/generated-rehab-4.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/generated-rehab-5.png",
];

const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/rehab-benefit-1.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/rehab-benefit-2.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/rehab-benefit-3.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/rehab-benefit-4.png",
  "/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/rehab-benefit-5.png",
];

const therapies: PackageTherapy[] = [
  { title: "Gentle Abhyanga", text: "A carefully adapted oil massage, avoiding the surgical site as needed, supports circulation and eases compensatory muscle tension.", icon: Droplet },
  { title: "Basti (Joint & Mobility Support)", text: "A tailored Basti protocol supports joint comfort and mobility, particularly valuable following orthopedic surgery.", icon: Leaf },
  { title: "Tissue-Nourishing Rasayana", text: "A regimen of Ashwagandha, Bala, and Guggulu supports tissue repair and healing, complementing your surgeon's rehabilitation plan.", icon: Activity },
  { title: "Physiotherapy-Integrated Care", text: "Gentle, guided movement is coordinated alongside your prescribed physiotherapy to support a safe, steady return to mobility.", icon: Sparkles },
  { title: "Elakizhi (Herbal Poultice Massage)", text: "Warm herbal poultices, applied around (not on) the surgical site, reduce inflammation and support faster localized healing.", icon: Pill },
  { title: "Restorative Shirodhara", text: "A calming warm oil stream supports restful sleep and emotional steadiness during a physically demanding recovery period.", icon: Stethoscope },
];

const phases: PackagePhase[] = [
  {
    title: "Week 1 - Careful Assessment & Gentle Start",
    duration: "Day 1-7",
    focus: "A cautious, surgeon-cleared start tailored to your recovery stage",
    description: "A thorough review of your surgical history and current recovery status, with your surgeon's clearance, guides a careful introduction to gentle therapies that avoid the surgical site as needed.",
    bullets: ["Comprehensive surgical history review", "Gentle Abhyanga (site-adapted)", "Initial mobility assessment", "Continuous physician monitoring"],
  },
  {
    title: "Week 2 - Mobility Rebuilding & Strength Support",
    duration: "Day 8-14",
    focus: "Gradual, well-monitored rebuilding of mobility and strength",
    description: "Therapies progress carefully, combining joint-focused Basti, tissue-nourishing Rasayana herbs, and physiotherapy-integrated guided movement to rebuild strength and mobility safely.",
    bullets: ["Joint-focused Basti", "Tissue-nourishing Rasayana herbs", "Guided physiotherapy-integrated movement", "Personalized home-continuity plan"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits", icon: HeartPulse,
    items: ["Improved circulation supporting tissue healing", "Reduced compensatory muscle tension", "Gradual mobility and strength rebuilding", "Improved joint comfort", "Better sleep quality during recovery", "Support for overall physical resilience"],
  },
  {
    title: "Mental and Emotional Benefits", icon: Brain,
    items: ["Reduced recovery-related anxiety", "A calmer, more supported emotional state", "Improved motivation during rehabilitation", "Better emotional resilience", "A genuine sense of being cared for", "Renewed confidence in physical recovery"],
  },
  {
    title: "Long-Term Effects", icon: Sparkles,
    items: ["A sustainable home mobility routine", "Continued strength rebuilding with compliance", "Reduced risk of compensatory injury patterns", "A supportive complement to physiotherapy", "Improved overall recovery outcomes", "Lasting confidence in physical activity"],
  },
];

const chooseIndiaPoints: PackagePoint[] = [
  { title: "Unmatched Authenticity", text: "Ayurveda originates in India, with deep classical experience supporting post-surgical tissue repair and mobility.", icon: Sparkles },
  { title: "Surgeon-Aware Physicians", text: "Vaidyas experienced in coordinating gentle Ayurvedic support alongside surgical rehabilitation plans.", icon: Stethoscope },
  { title: "Extraordinary Value", text: "Program costs are typically 55-70% lower than comparable rehabilitation retreats in Western destinations.", icon: ReceiptIndianRupee },
  { title: "Calm, Restorative Environments", text: "Centers are set in peaceful surroundings designed to support genuine, unhurried recovery.", icon: Leaf },
  { title: "Physiotherapy-Integrated Care", text: "Gentle guided movement is coordinated alongside your prescribed physiotherapy throughout.", icon: Activity },
  { title: "Coordinated Continuity", text: "Structured take-home guidance supports continued recovery alongside your ongoing physiotherapy.", icon: ShieldCheck },
];

const whyChooseUsPoints: PackageWhyUsPoint[] = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols experienced in post-surgical supportive care.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated, careful handling for travelers from 40+ countries.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Careful case pre-screening, requiring your surgeon's clearance before booking.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to transfers, coordinated with extra care and comfort.", icon: Route },
  { title: "During-Stay Assistance", description: "Attentive on-ground support throughout your full stay.", icon: Headset },
  { title: "Careful, Personalized Matching", description: "Center and pace matched carefully to your specific surgery type and recovery stage.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Comfortable, accessible room or suite for 13 nights", icon: HeartPulse },
  { label: "Meals", details: "Three daily tissue-repair-supportive Ayurvedic meals", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Thorough initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Gentle Therapies", details: "Site-adapted Abhyanga, Basti, and others as prescribed", icon: Activity },
  { label: "Rasayana Medicines", details: "Tissue-nourishing herbal formulations and medicated oils", icon: Pill },
  { label: "Guided Movement", details: "Physiotherapy-integrated, gentle guided movement", icon: Brain },
  { label: "Post-Program Support", details: "Diet and mobility guidance coordinated with your surgical team", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "How soon after surgery can I start this program?", answer: "This depends entirely on your surgery type and your surgeon's clearance — typically a minimum of four to six weeks post-surgery, but always confirmed by your treating surgeon before booking." },
  { question: "Do I need my surgeon's clearance before joining?", answer: "Yes, this is required for every guest. We ask you to share your surgical history and current recovery status, and obtain your surgeon's clearance before any therapy begins." },
  { question: "Does this replace my prescribed physiotherapy?", answer: "No. This program is designed to complement your prescribed physiotherapy, not replace it. We recommend continuing any physiotherapy plan alongside this program." },
  { question: "Is this suitable for orthopedic surgery specifically, or general surgery too?", answer: "This program supports recovery from both orthopedic surgeries (joint, spine) and general surgical recovery, with therapies adapted specifically to your surgery type." },
  { question: "What is the average cost of this program?", answer: "Most reputable centers range from $2,200 to $4,200 USD for the 14-day program, depending on the property and level of individualized care required." },
  { question: "How gentle are the therapies around my surgical site?", answer: "Very gentle and carefully adapted. Physicians avoid the surgical site directly as needed and closely monitor your comfort and healing progress throughout." },
];

const topCenters: PackageCenter[] = comboRetreatYoga;

const reviews: PackageReview[] = [
  { name: "Torbjorn", location: "Bergen, Norway", condition: "Post-Knee Surgery Rehabilitation", title: "My Mobility Progressed Faster Than My Surgeon Expected.", review: "Six weeks after knee surgery, with my surgeon's clearance, I began this program alongside my physiotherapy. My mobility progressed noticeably faster than expected, and my surgeon was pleased at my follow-up.", rating: 5, verified: true },
  { name: "Henrike", location: "Bremen, Germany", condition: "Post-Spinal Surgery Recovery", title: "The Gentle Basti Therapy Eased My Recovery Significantly.", review: "Recovery from spinal surgery had left me stiff and anxious about movement. The joint-focused Basti therapy, combined with guided movement, eased my stiffness and rebuilt my confidence steadily.", rating: 5, verified: true },
  { name: "Amalie", location: "Copenhagen, Denmark", condition: "Post-Abdominal Surgery Recovery", title: "A Genuinely Careful, Well-Coordinated Recovery Program.", review: "The physicians coordinated closely with my surgeon's guidelines throughout. Every therapy avoided my surgical site appropriately, and my overall recovery felt genuinely supported and safe.", rating: 5, verified: true },
  { name: "Bo", location: "Malmo, Sweden", condition: "Post-Shoulder Surgery Rehabilitation", title: "My Shoulder Mobility Improved Alongside My Physiotherapy.", review: "This complemented my physiotherapy perfectly rather than competing with it. The tissue-nourishing herbs and gentle massage noticeably supported my shoulder's healing and range of motion.", rating: 5, verified: true },
  { name: "Wiebke", location: "Hamburg, Germany", condition: "Post-Surgery General Recovery", title: "I Left Stronger And More Confident Than I Arrived.", review: "I was nervous about traveling so soon after surgery, but the careful, surgeon-cleared approach reassured me completely. I left noticeably stronger, more mobile, and far more confident in my recovery.", rating: 5, verified: true },
];

const PostSurgeryRehabilitationProgram = () => (
  <PackagePageTemplate
    slug="post-surgery-rehabilitation-program-in-india"
    pageTitle="Post-Surgery Rehabilitation Program in India"
    heroTagline="Gentle, physician-supervised Ayurvedic support to rebuild mobility and strength after surgery — always alongside your surgeon's guidance."
    heroDescription="Supportive rehabilitation for mobility, comfort, and gradual strength rebuilding."
    heroRatingText="4.8/5 Patient Satisfaction"
    galleryImages={galleryImages}
    summary={{
      duration: "14 Days / 13 Nights",
      idealFor: "Post-Surgical Supportive Rehabilitation",
      locations: "Bangalore, Mysore, Kerala",
      avgCost: "$2,200 - $4,200 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) coordinating with your surgical team",
      includes: "Accommodation, meals, gentle therapies, consultations, medicines",
    }}
    overviewTitle="What Is the Post-Surgery Rehabilitation Program?"
    overviewParagraphs={[
      "This program provides gentle, physician-supervised Ayurvedic support for mobility, comfort, and gradual strength rebuilding after surgery. It complements, and never replaces, your prescribed physiotherapy, always requiring your treating surgeon's clearance before beginning.",
      "The 14-day format allows a careful, gradual pace, beginning with a cautious assessment and building steadily as your body responds. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "250+", label: "Guests Supported", icon: Users },
      { value: "4.8/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "90%", label: "Reported Improved Mobility", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Post-Surgery Rehabilitation"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your surgery type and surgeon's guidance."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "Those recovering from orthopedic surgery, with surgeon clearance",
      "Guests recovering from general abdominal or other surgery",
      "Those seeking gentle support alongside prescribed physiotherapy",
      "Guests wanting a structured, unhurried space to rebuild mobility",
      "Family members wishing to accompany and support the guest",
      "Anyone prioritizing genuinely gentle, physician-supervised care",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "Anyone within the first four to six weeks post-surgery without surgeon clearance",
      "Guests without clearance from their treating surgeon",
      "People with active surgical site infection or unmanaged complications",
      "Anyone unable to share complete surgical history and current status",
    ]}
    phaseSectionTitle="The 14-Day Program - Week-by-Week Breakdown"
    phaseSectionSubtitle="A careful, gradual journey from gentle assessment to rebuilt mobility and strength."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Post-Surgery Rehabilitation Program"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Post-Surgery Rehabilitation Program in India"
    costSubtitle="Reflects a gentle, physician-supervised 14-day supportive rehabilitation protocol with full stay inclusions."
    costLength="14 Days"
    costLengthNote="A careful, gradual supportive rehabilitation timeline."
    costBudget="$2,200 - $4,200"
    costBudgetNote="Reflects individualized, surgeon-coordinated care."
    costPopularTag="SUPPORTIVE CARE"
    costPopularDesc="Gentle, physiotherapy-integrated rehabilitation with full stay inclusions."
    costBanner="Supportive Care - Post-Surgery Rehabilitation"
    costBannerTag="Requires surgeon clearance"
    whyIndiaTitle="Why Choose India for Post-Surgery Rehabilitation?"
    chooseIndiaPoints={chooseIndiaPoints}
    whyUsTitle="Why Choose Us for Your Rehabilitation Journey"
    whyUsSubtitle="Not just booking support - careful, coordinated guidance from pre-consultation to post-program continuity."
    whyUsBadges={["Doctor-Screened Centers", "Surgeon Coordination", "Physiotherapy-Integrated Care"]}
    whyChooseUsPoints={whyChooseUsPoints}
    inclusionsTitle="What Is Included in the 14-Day Package?"
    inclusionsSubtitle="Everything essential for a gentle, supervised supportive rehabilitation protocol."
    inclusionStats={{ duration: "14 Days", stay: "13 Nights", core: "Gentle Therapies + Meals", care: "Doctor-Supervised" }}
    inclusionsRows={inclusionsRows}
    ctaTitle="Book Your Post-Surgery Rehabilitation Program"
    ctaDescription="Begin with a careful, no-obligation consultation. We help you understand what's needed, including surgeon clearance, before booking."
    ctaImage="/Ayurvedic Programs/Images/Post-Surgery-Rehabilitation-Program-India/generated-rehab-1.png"
    whatsappMessage="Hi, I want to book a free consultation for the Post-Surgery Rehabilitation Program."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Post-Surgery Rehabilitation in India"
    topCentersSubtitle="Handpicked hospitals and retreats experienced in gentle, physician-coordinated post-surgical rehabilitation."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default PostSurgeryRehabilitationProgram;
