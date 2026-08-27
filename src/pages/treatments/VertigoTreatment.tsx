import TreatmentPageTemplate, {
  type TreatmentTherapy,
  type TreatmentPackage,
  type TreatmentReview,
  type TreatmentFaq,
  type TreatmentCenter,
} from "@/components/TreatmentPageTemplate";
import { comboLuxuryHeritage } from "@/data/centerCombos";
import { Droplet, Leaf, Activity, Flame } from "lucide-react";

const therapies: TreatmentTherapy[] = [
  {
    title: "Shirodhara",
    sanskrit: "Warm Oil Forehead Stream",
    text: "A continuous stream of warm medicated oil over the forehead calms aggravated Vata in the head, easing the disorienting sensation of vertigo at its source.",
    icon: Droplet,
  },
  {
    title: "Nasya",
    sanskrit: "Nasal Therapy",
    text: "Medicated oils administered through the nostrils directly cleanse and balance the channels of the head, supporting the body's natural sense of balance.",
    icon: Leaf,
  },
  {
    title: "Greeva Abhyanga",
    sanskrit: "Neck & Shoulder Oil Massage",
    text: "A focused warm oil massage of the neck and shoulders eases tension and improves circulation to the head, often a contributing factor in vertigo episodes.",
    icon: Activity,
  },
  {
    title: "Vata-Pitta Herbs",
    sanskrit: "Balance-Restoring Formulations",
    text: "A tailored regimen of Brahmi, Jatamansi, and Shankhpushpi calms the nervous system and supports the body's natural equilibrium.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Vertigo Relief Program",
    duration: "14 Days",
    cost: "$1,300 - $2,300 USD",
    focus: "Focuses on Shirodhara and Nasya to calm acute dizziness episodes and provide noticeable relief from disorientation quickly.",
    image: "/Treatments-images/Vertigo/Vertigo Relief Package.jpg",
  },
  {
    name: "21-Day Vestibular Balance Program",
    duration: "21 Days",
    cost: "$2,600 - $4,600 USD",
    focus: "Combines Greeva Abhyanga and balancing herbs to address recurring vertigo and support the body's natural sense of equilibrium long-term.",
    image: "/Treatments-images/Vertigo/Vestibular Balance Package.jpg",
  },
  {
    name: "28-Day Comprehensive Neuro-Balance Panchakarma",
    duration: "28 - 35+ Days",
    cost: "$3,800 - $6,800+ USD",
    focus: "An intensive Panchakarma program for chronic or severe vertigo, combining detoxification with deep Rasayana nourishment for lasting stability.",
    image: "/Treatments-images/Vertigo/Neuro Balance Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Alma",
    location: "Malmo, Sweden",
    condition: "Recurring Vertigo Episodes",
    title: "My Dizzy Spells Have Become Far Less Frequent.",
    review:
      "I had unpredictable vertigo episodes for over two years that left me anxious about daily activities. The Shirodhara and Nasya combination noticeably reduced how often these episodes occurred. Not knowing when the next episode would hit had quietly shrunk my whole life over those two years. I finally feel comfortable making plans again without that constant background worry.",
    rating: 5,
    verified: true,
  },
  {
    name: "Frederik",
    location: "Odense, Denmark",
    condition: "Chronic Dizziness",
    title: "I Finally Feel Steady On My Feet Again.",
    review:
      "Chronic dizziness had made me hesitant to drive or exercise for months. The Greeva Abhyanga and balancing herbs restored a genuine sense of stability I had not felt in a long time. Getting back behind the wheel again was a bigger milestone for me than I expected it to be. I've resumed my regular gym routine without any of the caution I had grown so used to.",
    rating: 5,
    verified: true,
  },
  {
    name: "Iben",
    location: "Aalborg, Denmark",
    condition: "Vertigo with Neck Tension",
    title: "Treating My Neck Tension Solved The Root Problem.",
    review:
      "My physician identified my neck tension as a contributing factor to my vertigo. The focused massage therapy addressed this directly, and my dizzy spells have reduced dramatically since. No previous doctor had connected my neck tightness to the dizziness before this consultation. Addressing that root cause has made a difference no medication ever managed to give me.",
    rating: 5,
    verified: true,
  },
  {
    name: "Casper",
    location: "Aarhus, Denmark",
    condition: "Stress-Related Vertigo",
    title: "Calming My Nervous System Calmed My Vertigo Too.",
    review:
      "My vertigo always worsened during stressful periods at work. The full three-week program addressed both my stress and my balance together, and I've felt remarkably steadier since returning. The physician was clear from day one that treating the stress was just as important as treating the balance issue. Even during a genuinely hectic month back at work, my symptoms haven't returned.",
    rating: 5,
    verified: true,
  },
  {
    name: "Solveig",
    location: "Bergen, Norway",
    condition: "Recurrent Vertigo",
    title: "I Can Finally Trust My Balance Again.",
    review:
      "Years of unpredictable vertigo had eroded my confidence in everyday movement. The comprehensive Panchakarma program has given me lasting stability, and I finally trust my body's balance again. I had stopped doing so many small things, from climbing stairs quickly to turning my head too fast. Getting that quiet confidence back has honestly changed how I move through my whole day.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Why does Ayurveda call vertigo \"Bhrama\"?", answer: "Bhrama describes the disorienting sensation of vertigo, attributed to aggravated Vata, often combined with Pitta, disturbing the channels governing balance in the head. Treatment focuses on calming this imbalance at its source." },
  { question: "Can this program help with recurring vertigo episodes?", answer: "Yes, many patients experience a reduction in the frequency and intensity of vertigo episodes as the underlying Vata-Pitta imbalance is addressed through calming therapies and herbal support." },
  { question: "Is Shirodhara safe for vertigo patients?", answer: "Yes, Shirodhara is one of Ayurveda's most established therapies for balance-related conditions and is generally very well tolerated, though your physician will assess your specific case beforehand." },
  { question: "Should I continue seeing my ENT or neurologist during this program?", answer: "Yes, this program is designed as complementary care. We recommend continuing any prescribed medical evaluation or treatment for vertigo alongside these supportive Ayurvedic therapies." },
  { question: "How soon might I notice a reduction in dizzy spells?", answer: "Many patients notice a calmer, steadier baseline within the first week of daily therapies. More significant, lasting improvement in episode frequency typically develops over a full 21 to 28 day program." },
];

const topCenters: TreatmentCenter[] = comboLuxuryHeritage;

const VertigoTreatment = () => (
  <TreatmentPageTemplate
    slug="vertigo-treatment-in-india"
    conditionName="Vertigo"
    pageTitle="Vertigo Treatment in India"
    heroTagline="A Natural Path Back to Steady, Confident Balance"
    heroDescription="Ayurveda treats vertigo at its root, calming the Vata-Pitta imbalance behind disorienting dizziness and restoring the body's natural sense of equilibrium."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of Vertigo (Bhrama)"
    introImage="/Treatments-images/Vertigo/vertigo-hero-new.png"
    introImageAlt="Ayurvedic Vertigo Treatment"
    introParagraphs={[
      <>
        In Ayurveda, vertigo is understood as <strong className="text-[#335765]">Bhrama</strong> — a disorienting disturbance caused by aggravated <strong className="text-[#335765]">Vata</strong>, often combined with <strong className="text-[#335765]">Pitta</strong>, disturbing the subtle channels that govern balance in the head.
      </>,
      <>
        Stress, poor circulation, neck tension, and an erratic lifestyle allow this imbalance to persist, triggering episodes of dizziness, spinning sensations, or unsteadiness. Ayurveda calms this disturbance directly through therapies that pacify Vata and Pitta in the head, restoring the body's natural, confident sense of balance.
      </>,
    ]}
    therapiesSubtitle="The treatment focuses on calming Vata-Pitta imbalance in the head, restoring the body's natural sense of balance and equilibrium."
    therapies={therapies}
    dietIntro="Dietary correction helps calm Vata-Pitta imbalance and supports steadier energy through the day."
    dietFavour={[
      "Warm, Grounding Meals: Favour warm, freshly cooked, mildly spiced foods that are calming to Vata.",
      "Regular Meal Timing: Skipping meals can trigger dizziness; consistent eating times help maintain stability.",
      "Cooling, Balancing Foods: Include coconut water and light, fresh foods that soothe aggravated Pitta.",
      "Adequate Hydration: Consistent hydration throughout the day supports stable blood pressure and balance.",
    ]}
    dietAvoid={[
      "Skipping Meals: Low blood sugar from skipped meals is a common trigger for dizziness.",
      "Excess Caffeine: Stimulants can aggravate Vata and worsen the erratic quality behind vertigo.",
      "Sudden Temperature Changes: Very hot or cold foods and drinks can aggravate Pitta imbalance.",
      "Excess Salt: High salt intake can affect fluid balance and worsen certain types of vertigo.",
    ]}
    lifestyleAdjustments={[
      "Move Slowly and Deliberately: Avoid sudden head movements or quick changes in position, especially during flare-ups.",
      "Manage Stress Daily: Stress is a common trigger; daily pranayama helps calm the nervous system.",
      "Maintain a Consistent Routine: A predictable daily schedule is calming to Vata and reduces triggers.",
      "Address Neck Tension: Gentle neck stretches and warmth help ease tension that can contribute to vertigo.",
    ]}
    packagesSubtitle="Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for balance and neurological conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/Vertigo/vertigo-hero-new.png"
    ctaDescription="Start your journey back to steady, confident balance. We help you connect with the top Ayurvedic centers specialized in neurological and balance care."
  />
);

export default VertigoTreatment;
