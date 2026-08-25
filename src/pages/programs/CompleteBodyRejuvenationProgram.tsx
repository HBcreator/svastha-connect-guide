import PackagePageTemplate, {
  type PackageTherapy,
  type PackagePhase,
  type PackageBenefitGroup,
  type PackagePoint,
  type PackageWhyUsPoint,
  type PackageInclusionRow,
  type PackageFaq,
  type PackageCenter,
  type PackageReview,
} from "@/components/PackagePageTemplate";
import { comboLuxuryHeritage } from "@/data/centerCombos";
import {
  Activity, Brain, CalendarCheck2, ClipboardCheck, Droplet, Globe2, Headset,
  HeartPulse, Leaf, Pill, ReceiptIndianRupee, Route, ShieldCheck, Sparkles,
  Stethoscope, TrendingUp, UserCog, Users, UtensilsCrossed,
} from "lucide-react";

const galleryImages = [
  "/Ayurvedic Programs/Images/Complete-Body-Rejuvenation-Program-India/cbr-hero-new.png",
  "/Ayurvedic Programs/Images/Complete-Body-Rejuvenation-Program-India/cbr-herbs.png",
  "/Ayurvedic Programs/Images/Complete-Body-Rejuvenation-Program-India/cbr-yoga.png",
  "/Ayurvedic Programs/Images/Complete-Body-Rejuvenation-Program-India/cbr-panchakarma.png",
  "/Ayurvedic Programs/Images/Complete-Body-Rejuvenation-Program-India/cbr-couple-backwaters.png",
];

const benefitsSectionImages = galleryImages;

const therapies: PackageTherapy[] = [
  { title: "Abhyanga (Full-Body Rasayana Massage)", text: "A daily warm oil massage using Rasayana-grade oils nourishes all seven bodily tissues and restores the skin's natural glow and elasticity.", icon: Droplet },
  { title: "Shirodhara (Mind Renewal Therapy)", text: "A continuous stream of warm medicated oil calms the mind and rejuvenates the nervous system, restoring mental clarity and calm.", icon: Sparkles },
  { title: "Njavara Kizhi (Rice Bolus Therapy)", text: "Warm boluses of medicinal rice simmered in herbal milk deeply nourish muscle tissue and restore youthful strength and tone.", icon: Leaf },
  { title: "Rasayana Herbs (Vitality Formulations)", text: "A tailored regimen of Chyawanprash, Ashwagandha, and Amalaki rebuilds Ojas and supports sustained vitality long after your stay.", icon: Activity },
  { title: "Udwarthanam (Herbal Powder Massage)", text: "A vigorous, dry herbal powder massage stimulates circulation, refines skin texture, and supports healthy metabolism as part of full-body renewal.", icon: Pill },
  { title: "Nasya (Cranial Rejuvenation)", text: "Medicated oils administered through the nostrils cleanse and nourish the head's channels, sharpening mental clarity as part of your overall renewal.", icon: Stethoscope },
];

const phases: PackagePhase[] = [
  {
    title: "Week 1 - Purva Karma (Preparation)",
    duration: "Day 1-7",
    focus: "Preparing the body to absorb deep nourishment",
    description: "Daily Abhyanga, gentle Swedana, and a personalized Rasayana diet mobilize residual toxins and prepare the tissues to fully absorb the rejuvenation therapies ahead.",
    bullets: ["Snehana (oil saturation)", "Swedana (herbal steam)", "Dietary correction", "Initial Vaidya assessment"],
  },
  {
    title: "Week 2 - Rasayana Karma (Deep Nourishment)",
    duration: "Day 8-14",
    focus: "Active tissue-level rejuvenation",
    description: "The core rejuvenation phase. Daily Shirodhara, Njavara Kizhi, and internal Rasayana formulations work together to nourish all seven dhatus and rebuild Ojas.",
    bullets: ["Njavara Kizhi (rice bolus)", "Shirodhara", "Internal Rasayana herbs", "Personalized Abhyanga"],
  },
  {
    title: "Week 3 - Paschat Karma (Integration)",
    duration: "Day 15-21",
    focus: "Sealing in strength and vitality",
    description: "Gentle integration therapies, yoga, and a personalized home-continuity plan ensure your renewed vitality and strength carry forward well beyond your stay in India.",
    bullets: ["Integration therapies", "Yoga and pranayama", "Personalized home-care plan", "Final physician consultation"],
  },
];

const benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup] = [
  {
    title: "Physical Benefits",
    icon: HeartPulse,
    items: [
      "Visibly renewed skin tone, texture, and elasticity",
      "Restored muscle strength and physical stamina",
      "Improved digestion and more efficient metabolism",
      "Deeper, more restorative sleep",
      "Stronger immunity and steadier energy",
      "Reduced signs of age-related physical decline",
    ],
  },
  {
    title: "Mental and Emotional Benefits",
    icon: Brain,
    items: [
      "Sharper mental clarity and focus",
      "A calmer, more resilient nervous system",
      "Reduced chronic stress load",
      "Improved emotional steadiness",
      "A renewed sense of purpose and motivation",
      "Better mind-body awareness carried into daily life",
    ],
  },
  {
    title: "Long-Term Effects",
    icon: Sparkles,
    items: [
      "Sustained vitality that continues for months with compliance",
      "A personalized home-ritual routine for lasting results",
      "Improved resilience to future stress and fatigue",
      "Visible vitality improvements in skin, hair, and energy",
      "Stronger baseline health for healthy aging",
      "Lower likelihood of relapse into low-energy patterns",
    ],
  },
];

const chooseIndiaPoints: PackagePoint[] = [
  { title: "Unmatched Authenticity", text: "Ayurveda originates in India, with stronger treatment lineage, physician depth, and botanical access for genuine Rasayana therapy.", icon: Sparkles },
  { title: "Medical Expertise", text: "Top doctors hold accredited BAMS/MD Ayurveda qualifications with deep experience in classical Rasayana protocols.", icon: Stethoscope },
  { title: "Extraordinary Value", text: "Program costs are typically 60-75% lower than comparable rejuvenation retreats in Western destinations.", icon: ReceiptIndianRupee },
  { title: "Healing Environments", text: "Many centers are set in tropical or mountain ecosystems designed to support rest, renewal, and routine.", icon: Leaf },
  { title: "Integrated Wellness", text: "Yoga, meditation, pranayama, and Rasayana diet are woven into the treatment flow from day one.", icon: Activity },
  { title: "Better Post-Program Continuity", text: "Many centers provide discharge protocols, diet plans, and remote follow-up to sustain your renewed vitality after travel.", icon: ShieldCheck },
];

const whyChooseUsPoints: PackageWhyUsPoint[] = [
  { title: "Verified Medical Standards", description: "Only partner centers with physician-led protocols, safety checks, and treatment quality validation.", icon: ShieldCheck },
  { title: "International Patient Expertise", description: "Dedicated handling for travelers from 40+ countries with clear communication and planning support.", icon: Globe2 },
  { title: "Pre-Travel Doctor Consultation", description: "Case pre-screening before booking helps shortlist the right center and rejuvenation protocol.", icon: CalendarCheck2 },
  { title: "Complete Journey Support", description: "From center selection to arrival coordination, transfers, and check-in flow management.", icon: Route },
  { title: "During-Stay Assistance", description: "On-ground guidance through your full 21-day protocol for smooth continuity and comfort.", icon: Headset },
  { title: "Personalized Rejuvenation Matching", description: "Center mapping based on your vitality goals, budget, travel style, and preferred setting.", icon: UserCog },
];

const inclusionsRows: PackageInclusionRow[] = [
  { label: "Accommodation", details: "Private room or suite for 20 nights (as per package tier)", icon: HeartPulse },
  { label: "Meals", details: "Three daily Ayurvedic meals personalized by constitution and Rasayana phase", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Initial assessment plus daily or alternate-day physician review", icon: Stethoscope },
  { label: "Daily Therapies", details: "Abhyanga, Shirodhara, Njavara Kizhi, and others as prescribed", icon: Activity },
  { label: "Rasayana Medicines", details: "Herbal formulations and medicated oils during stay", icon: Pill },
  { label: "Yoga and Meditation", details: "Daily guided sessions integrated into the rejuvenation plan", icon: Brain },
  { label: "Post-Program Support", details: "Diet guidance and continuity protocol for home", icon: ClipboardCheck },
];

const faqItems: PackageFaq[] = [
  { question: "Do I need a specific health condition to join this program?", answer: "No. Unlike a disease-focused treatment, this program is designed for anyone seeking comprehensive whole-body renewal, whether or not you have a specific diagnosis." },
  { question: "How much does a 21-day rejuvenation program cost in India?", answer: "Most reputable mid-range and premium programs range from $2,800 to $5,200 USD, while luxury options can exceed $6,500." },
  { question: "What is Rasayana therapy, exactly?", answer: "Rasayana refers to a category of classical Ayurvedic therapies and formulations specifically designed to nourish body tissue, rebuild vitality (Ojas), and support healthy aging." },
  { question: "Is this suitable for someone in their 30s, or is it mainly for older adults?", answer: "This program is genuinely suitable for any adult wanting proactive, comprehensive renewal — many guests in their 30s and 40s join specifically to invest in long-term vitality before age-related decline sets in." },
  { question: "How is this different from a Panchakarma detox program?", answer: "Panchakarma detox focuses on elimination of toxins as the primary goal. This program emphasizes deep tissue nourishment and Rasayana rejuvenation, with a lighter detox preparation phase." },
  { question: "Will I see visible changes in my skin and energy?", answer: "Many guests report visibly improved skin tone and noticeably higher energy by the end of the second week, with results continuing to build through the final week and beyond." },
  { question: "Can I combine this program with sightseeing in India?", answer: "We recommend keeping the 21-day program itself free of other commitments for the best results, and exploring India before or after your program." },
  { question: "What is the best time of year for this program?", answer: "October to March offers the most comfortable climate across most regions, though many centers operate excellent programs year-round." },
];

const topCenters: PackageCenter[] = comboLuxuryHeritage;

const reviews: PackageReview[] = [
  {
    name: "Beatrix", location: "Vienna, Austria", condition: "Complete Body Rejuvenation",
    title: "I Feel Ten Years Younger - Genuinely.",
    review: "I turned 45 and wanted to invest in myself properly. The daily Abhyanga and Njavara Kizhi transformed my skin and energy within two weeks. Friends have asked what changed — I tell them everything did.",
    rating: 5, verified: true,
  },
  {
    name: "Soren", location: "Aarhus, Denmark", condition: "Vitality and Energy Reset",
    title: "My Energy Has Never Been This Consistent.",
    review: "I run a demanding business and my energy had been declining for years. The Rasayana herbs and structured routine gave me steady, sustained energy I haven't felt since my twenties.",
    rating: 5, verified: true,
  },
  {
    name: "Marguerite", location: "Lyon, France", condition: "Post-Illness General Recovery",
    title: "A Genuine, Comprehensive Reset After A Hard Year.",
    review: "After a difficult year of illness, I needed more than rest — I needed real rebuilding. This program's tissue-level approach restored my strength and vitality far more completely than I expected.",
    rating: 5, verified: true,
  },
  {
    name: "Nikolai", location: "Helsinki, Finland", condition: "Healthy Aging Investment",
    title: "The Best Investment I've Made In My Own Health.",
    review: "I approached this as a proactive investment in aging well, not a reaction to any problem. The physician-led approach and daily Shirodhara left me calmer, sharper, and visibly more vital by the end.",
    rating: 5, verified: true,
  },
  {
    name: "Isolde", location: "Munich, Germany", condition: "Skin and Vitality Renewal",
    title: "My Skin And My Sleep Both Transformed.",
    review: "I came mainly for my skin, which had lost its glow from years of stress. What surprised me was how much better I slept and how much calmer I felt by week three. A truly complete renewal.",
    rating: 5, verified: true,
  },
  {
    name: "Callan", location: "Wellington, New Zealand", condition: "Complete Body Rejuvenation",
    title: "Three Weeks That Reset My Entire Baseline.",
    review: "I travelled the furthest of anyone I met at the center, and it was worth every hour of flying. The structured 21-day protocol rebuilt my strength and stamina in a way no gym program ever had.",
    rating: 5, verified: true,
  },
];

const CompleteBodyRejuvenationProgram = () => (
  <PackagePageTemplate
    slug="complete-body-rejuvenation-program-in-india"
    pageTitle="Complete Body Rejuvenation Program in India"
    heroTagline="A comprehensive Ayurvedic renewal for anyone wanting to feel genuinely revitalized — no diagnosis required, just deep, classical restoration."
    heroDescription="Rebuild vitality from within through classical Rasayana therapy."
    heroRatingText="4.8/5 Excellent Rating"
    galleryImages={galleryImages}
    summary={{
      duration: "21 Days / 20 Nights",
      idealFor: "Complete Renewal, Anti-Aging, Vitality",
      locations: "Kerala, Rishikesh, Goa",
      avgCost: "$2,800 - $5,200 USD",
      supervisedBy: "Senior Ayurvedic Physicians (Vaidyas) specializing in Rasayana therapy",
      includes: "Accommodation, meals, therapies, consultations, medicines",
    }}
    overviewTitle="What Is the Complete Body Rejuvenation Program?"
    overviewParagraphs={[
      "This program is a classical, physician-supervised Rasayana protocol designed for comprehensive whole-body renewal — not tied to any specific disease or diagnosis. It nourishes all seven bodily tissues (dhatus), rebuilds Ojas (the body's vital reserve), and slows the natural effects of age-related decline through deeply restorative therapies.",
      "The 21-day format allows sufficient time to move from initial preparation through deep tissue-level nourishment and full integration. Contact Svastha Global to connect with the best of authentic Ayurveda in India.",
    ]}
    metrics={[
      { value: "600+", label: "Guests Rejuvenated", icon: Users },
      { value: "4.8/5", label: "Patient Satisfaction Metrics", icon: Sparkles },
      { value: "95%", label: "Reported Increased Vitality", icon: TrendingUp },
    ]}
    therapiesTitle="Signature Therapies for Complete Body Rejuvenation"
    therapiesSubtitle="Your Vaidya prescribes the combination below based on your constitution and rejuvenation goals."
    therapies={therapies}
    candidateTitle="Who Is This Program For?"
    candidatePoints={[
      "Adults of any age seeking a genuine, comprehensive whole-body reset",
      "Those noticing early signs of fatigue, dull skin, or declining stamina",
      "People rebuilding general strength after a demanding period of life",
      "Wellness travelers who want more than detox — full tissue-level renewal",
      "Anyone wanting a proactive investment in long-term vitality and healthy aging",
      "Guests without a specific disease diagnosis who still want deep restoration",
    ]}
    avoidTitle="Who Should Avoid This Program"
    avoidPoints={[
      "People with an active acute illness requiring hospital-level care",
      "Pregnant women without prior physician clearance",
      "Anyone who had major surgery within the last three months",
      "People with unmanaged serious medical conditions requiring urgent treatment",
    ]}
    phaseSectionTitle="The 21-Day Program - Week-by-Week Breakdown"
    phaseSectionSubtitle="Preparation, deep nourishment, and integration in one coherent Rasayana journey."
    phases={phases}
    benefitsSectionImages={benefitsSectionImages}
    benefitsTitle="Benefits of the Complete Body Rejuvenation Program"
    benefitGroups={benefitGroups}
    costTitle="Cost of the Complete Body Rejuvenation Program in India"
    costSubtitle="Reflects a full 21-day Rasayana protocol with physician supervision and complete stay inclusions."
    costLength="21 Days"
    costLengthNote="Complete tissue-level rejuvenation timeline."
    costBudget="$2,800 - $5,200"
    costBudgetNote="Most popular range for reputable centers and full-stay plans."
    costPopularTag="MOST POPULAR"
    costPopularDesc="Comprehensive Rasayana rejuvenation with accommodation and therapies."
    costBanner="Most popular - Complete Body Rejuvenation"
    costBannerTag="Highest demand package"
    whyIndiaTitle="Why Choose India for Rasayana Rejuvenation?"
    chooseIndiaPoints={chooseIndiaPoints}
    whyUsTitle="Why Choose Us for Your Rejuvenation Journey"
    whyUsSubtitle="Not just booking support - structured guidance from pre-consultation to post-program continuity."
    whyUsBadges={["Doctor-Screened Centers", "40+ Countries Supported", "End-to-End Assistance"]}
    whyChooseUsPoints={whyChooseUsPoints}
    inclusionsTitle="What Is Included in the 21-Day Package?"
    inclusionsSubtitle="Everything essential for a supervised rejuvenation and continuity plan."
    inclusionStats={{ duration: "21 Days", stay: "20 Nights", core: "Therapies + Meals", care: "Doctor-Supervised" }}
    inclusionsRows={inclusionsRows}
    ctaTitle="Book Your Complete Body Rejuvenation Program"
    ctaDescription="Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your rejuvenation goals."
    ctaImage="/Ayurvedic Programs/Images/Complete-Body-Rejuvenation-Program-India/cbr-hero-new.png"
    whatsappMessage="Hi, I want to book a free consultation for the Complete Body Rejuvenation Program."
    faqItems={faqItems}
    topCentersTitle="Top Ayurvedic Centers for Complete Body Rejuvenation in India"
    topCentersSubtitle="Handpicked hospitals and retreats with specialized Rasayana rejuvenation programs."
    topCenters={topCenters}
    reviews={reviews}
  />
);

export default CompleteBodyRejuvenationProgram;
