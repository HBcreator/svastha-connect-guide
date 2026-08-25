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
    text: "A continuous, gentle stream of warm medicated oil poured over the forehead calms an overactive mind, pacifying Vata in the head and inducing deep, natural drowsiness.",
    icon: Droplet,
  },
  {
    title: "Abhyanga",
    sanskrit: "Full-Body Oil Massage",
    text: "A warm, rhythmic full-body massage with grounding oils like sesame calms the nervous system, releases physical tension, and prepares the body for restful sleep.",
    icon: Activity,
  },
  {
    title: "Padabhyanga",
    sanskrit: "Medicated Foot Massage",
    text: "A focused warm-oil massage of the feet before bedtime — one of Ayurveda's oldest bedtime rituals — draws Vata downward and away from an overactive mind.",
    icon: Leaf,
  },
  {
    title: "Nidra Herbs",
    sanskrit: "Sleep-Restoring Formulations",
    text: "A tailored regimen of Ashwagandha, Jatamansi, and Brahmi calms the nervous system and gently restores the body's natural sleep-wake rhythm from within.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Sleep Reset Program",
    duration: "14 Days",
    cost: "$1,200 - $2,200 USD",
    focus: "Focuses on Shirodhara, Padabhyanga, and a structured bedtime routine to break the cycle of restless nights and restore a natural sleep pattern quickly.",
    image: "/Treatments-images/Insomnia/Sleep Reset Package.jpg",
  },
  {
    name: "21-Day Nervous System Restoration",
    duration: "21 Days",
    cost: "$2,400 - $4,400 USD",
    focus: "Combines daily Abhyanga, Shirodhara, and internal Nidra herbs to calm a chronically overstimulated nervous system and rebuild deep, uninterrupted sleep.",
    image: "/Treatments-images/Insomnia/Nervous System Restoration Package.jpg",
  },
  {
    name: "28-Day Chronic Insomnia Panchakarma Program",
    duration: "28 - 35+ Days",
    cost: "$3,600 - $6,600+ USD",
    focus: "An intensive Panchakarma program for long-standing insomnia, anxiety-linked sleeplessness, or dependency on sleep medication. Combines detoxification with deep Rasayana nourishment.",
    image: "/Treatments-images/Insomnia/Chronic Insomnia Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Hannah",
    location: "Bristol, UK",
    condition: "Chronic Insomnia",
    title: "I Slept Eight Hours Without Waking - First Time In Years.",
    review:
      "I had not slept through a full night in over four years. The Shirodhara sessions were extraordinary — by day six I was sleeping deeply, and by the end of the program eight-hour nights felt normal again.",
    rating: 5,
    verified: true,
  },
  {
    name: "Erik",
    location: "Gothenburg, Sweden",
    condition: "Stress-Related Insomnia",
    title: "I Finally Came Off Sleeping Pills.",
    review:
      "I had relied on sleeping pills for three years. The nervous-system-focused protocol, along with the herbal Nidra formulations, gradually rebuilt my natural sleep rhythm. I am completely medication-free now.",
    rating: 5,
    verified: true,
  },
  {
    name: "Camille",
    location: "Lyon, France",
    condition: "Racing Thoughts at Night",
    title: "My Mind Finally Went Quiet At Night.",
    review:
      "My mind used to race the moment my head hit the pillow. The daily Padabhyanga and Shirodhara combination calmed that completely. I now fall asleep within minutes most nights.",
    rating: 5,
    verified: true,
  },
  {
    name: "Daniel",
    location: "Vienna, Austria",
    condition: "Shift-Work Sleep Disruption",
    title: "My Sleep Schedule Is Finally Stable Again.",
    review:
      "Years of shift work had completely broken my sleep cycle. The structured routine and herbal support retrained my body's clock faster than I expected. I sleep on a normal schedule again now.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ingrid",
    location: "Bergen, Norway",
    condition: "Menopause-Related Insomnia",
    title: "The Best Sleep I've Had In A Decade.",
    review:
      "Menopause had wrecked my sleep for years. The Ayurvedic physician addressed it as a Vata imbalance rather than just a symptom to suppress. My sleep quality now is the best it has been in ten years.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Why does Ayurveda treat insomnia as a Vata imbalance?", answer: "Sleep is governed by the smooth, downward flow of Vata. When Vata becomes erratic from stress, overstimulation, or irregular routine, its restless quality disrupts the mind and prevents the body from settling into deep sleep." },
  { question: "Is Shirodhara really effective for insomnia?", answer: "Yes, Shirodhara is one of Ayurveda's most well-documented therapies for sleep disorders. The continuous warm oil stream has a measurable calming effect on the nervous system, often inducing drowsiness during the session itself." },
  { question: "Can this program help me come off sleeping pills?", answer: "Many patients gradually reduce their reliance on sleep medication as their natural sleep rhythm is restored. Any changes to prescribed medication should always be made gradually and under medical supervision." },
  { question: "How quickly will I notice an improvement in my sleep?", answer: "Many patients notice easier, deeper sleep within the first week, as the calming therapies take effect quickly. Long-term stability in sleep patterns typically develops over a full 21 to 28 day program." },
  { question: "Are the herbal sleep formulations safe for long-term use?", answer: "Yes, herbs like Ashwagandha, Jatamansi, and Brahmi have been used safely for centuries to support the nervous system. Your physician will tailor the formulation and duration to your specific case." },
];

const topCenters: TreatmentCenter[] = comboLuxuryHeritage;

const InsomniaTreatment = () => (
  <TreatmentPageTemplate
    slug="insomnia-treatment-in-india"
    conditionName="Insomnia"
    pageTitle="Insomnia & Sleep Disorder Treatment in India"
    heroTagline="A Natural Path Back to Deep, Restorative Sleep"
    heroDescription="Ayurveda treats insomnia at its root, calming an overactive nervous system and restoring the body's natural sleep rhythm — so falling asleep, and staying asleep, becomes effortless again."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of Insomnia (Anidra)"
    introImage="/Treatments-images/Insomnia/insomnia-hero-new.png"
    introImageAlt="Ayurvedic Insomnia and Sleep Disorder Treatment"
    introParagraphs={[
      <>
        In Ayurveda, insomnia is understood as <strong className="text-[#335765]">Anidra</strong> — a disturbance of the mind caused by an aggravated <strong className="text-[#335765]">Vata dosha</strong>, the subtle energy that governs the nervous system and all movement in the body.
      </>,
      <>
        Chronic stress, screen overstimulation, irregular routines, and an overactive mind allow Vata to become erratic, disrupting its natural downward, settling quality at night. The result is difficulty falling asleep, frequent waking, or sleep that never feels restorative. Ayurveda calms this imbalance directly, restoring the mind's natural ability to rest.
      </>,
    ]}
    therapiesSubtitle="The treatment focuses on calming an overactive Vata dosha and settling the nervous system, restoring deep, uninterrupted sleep."
    therapies={therapies}
    dietIntro="Dietary correction is essential to calm Vata dosha and prevent the restlessness that keeps the mind overactive at night."
    dietFavour={[
      "Warm Milk & Nutmeg: A cup of warm milk with a pinch of nutmeg or ashwagandha before bed is a classical Ayurvedic sleep aid.",
      "Grounding, Warm Meals: Favour warm, cooked, mildly spiced meals earlier in the evening rather than late, heavy dinners.",
      "Herbal Teas: Chamomile, brahmi, or tulsi tea in the evening helps calm the mind before bedtime.",
      "Regular Meal Timing: Eating dinner at a consistent, early hour supports the body's natural sleep-wake rhythm.",
    ]}
    dietAvoid={[
      "Caffeine and Stimulants: Avoid tea, coffee, and caffeinated drinks from early afternoon onward.",
      "Screens Before Bed: Bright screens and stimulating content close to bedtime keep Vata and the mind overstimulated.",
      "Heavy or Spicy Late Dinners: Rich, spicy, or very late meals disturb digestion and disrupt the settling process at night.",
      "Irregular Sleep Times: An inconsistent bedtime confuses the body's natural circadian rhythm and aggravates Vata.",
    ]}
    lifestyleAdjustments={[
      "Keep a Fixed Sleep Schedule: Going to bed and waking at the same time daily is one of the most powerful Vata-calming habits.",
      "Digital Curfew: Switch off screens at least 45 minutes before bed to allow the nervous system to settle.",
      "Warm Oil Foot Massage: A short self-massage of the feet with warm sesame oil before bed is a classical bedtime ritual.",
      "Avoid Daytime Napping: Long daytime naps confuse the sleep-wake cycle and can worsen night-time restlessness.",
    ]}
    packagesSubtitle="Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for sleep and nervous system disorders."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/Insomnia/insomnia-hero-new.png"
    ctaDescription="Start your journey to deep, effortless sleep. We help you connect with the top Ayurvedic centers specialized in nervous system and sleep care."
  />
);

export default InsomniaTreatment;
