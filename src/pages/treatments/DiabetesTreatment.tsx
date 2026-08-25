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
    title: "Udwarthanam",
    sanskrit: "Herbal Powder Massage",
    text: "A vigorous, upward massage using dry herbal powders stimulates metabolism, reduces excess Kapha and Meda (fat tissue), and supports healthy blood sugar regulation.",
    icon: Activity,
  },
  {
    title: "Virechana",
    sanskrit: "Therapeutic Purgation",
    text: "A supervised, medicated cleansing procedure clears excess Kapha and Ama (toxins) that impair Agni, addressing a core imbalance behind impaired glucose metabolism.",
    icon: Droplet,
  },
  {
    title: "Basti",
    sanskrit: "Medicated Enema Therapy",
    text: "A tailored Basti protocol supports healthy digestion and metabolic function, complementing dietary correction in managing Kapha-type Madhumeha.",
    icon: Leaf,
  },
  {
    title: "Madhumeha Herbs",
    sanskrit: "Glucose-Balancing Formulations",
    text: "A regimen of Gymnema, Guduchi, and bitter gourd-based formulations traditionally used to support healthy blood sugar levels and metabolic balance.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Blood Sugar Reset Program",
    duration: "14 Days",
    cost: "$1,300 - $2,300 USD",
    focus: "Focuses on Udwarthanam, dietary correction, and Madhumeha herbs to kickstart metabolic balance and support healthier blood sugar patterns.",
    image: "/Treatments-images/Diabetes/Blood Sugar Reset Package.jpg",
  },
  {
    name: "21-Day Metabolic Balance Program",
    duration: "21 Days",
    cost: "$2,600 - $4,600 USD",
    focus: "Incorporates Virechana detoxification alongside daily Udwarthanam to clear excess Kapha and rekindle Agni for improved long-term metabolic function.",
    image: "/Treatments-images/Diabetes/Metabolic Balance Package.jpg",
  },
  {
    name: "28-Day Comprehensive Diabetes Panchakarma",
    duration: "28 - 35+ Days",
    cost: "$3,800 - $6,800+ USD",
    focus: "An intensive Panchakarma program for long-standing diabetes management, combining detoxification with sustained dietary and herbal metabolic support.",
    image: "/Treatments-images/Diabetes/Comprehensive Diabetes Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Henrik",
    location: "Malmo, Sweden",
    condition: "Type 2 Diabetes",
    title: "My Blood Sugar Readings Are The Most Stable They've Been In Years.",
    review:
      "I had struggled with fluctuating blood sugar for over five years despite medication. The dietary correction and Udwarthanam massage noticeably stabilized my readings within three weeks, alongside my existing treatment.",
    rating: 5,
    verified: true,
  },
  {
    name: "Petra",
    location: "Ljubljana, Slovenia",
    condition: "Pre-Diabetes Management",
    title: "I Reversed My Pre-Diabetes Diagnosis With This Program.",
    review:
      "My doctor had flagged pre-diabetic blood sugar levels. The metabolic reset program, combined with the dietary changes I learned, brought my levels back into a healthy range at my follow-up test.",
    rating: 5,
    verified: true,
  },
  {
    name: "Milo",
    location: "Vienna, Austria",
    condition: "Type 2 Diabetes with Weight Concerns",
    title: "My Weight And Blood Sugar Both Improved Together.",
    review:
      "Managing my weight alongside diabetes had felt like an uphill battle. The comprehensive program addressed both together — I lost weight steadily and my blood sugar control improved noticeably over the month.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ana",
    location: "Zagreb, Croatia",
    condition: "Type 2 Diabetes",
    title: "My Energy Crashes After Meals Are Finally Gone.",
    review:
      "I used to feel exhausted after every meal due to my blood sugar spikes. The herbal formulations and dietary correction have made my energy far more stable throughout the day.",
    rating: 5,
    verified: true,
  },
  {
    name: "Dominik",
    location: "Bratislava, Slovakia",
    condition: "Type 2 Diabetes",
    title: "My Doctor Was Impressed With My Latest HbA1c Results.",
    review:
      "I approached this program to complement my existing medical care, not replace it. My physician was genuinely impressed with my improved HbA1c results at my most recent check-up.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Why does Ayurveda call diabetes \"Madhumeha\"?", answer: "Madhumeha describes a Kapha-type metabolic disorder where impaired Agni (metabolic fire) and excess Kapha disrupt healthy glucose regulation. Treatment focuses on rekindling Agni and clearing excess Kapha to support healthier metabolic function." },
  { question: "Can this program replace my diabetes medication or insulin?", answer: "No. This program is designed as complementary, supportive care alongside your existing medical treatment. Any changes to prescribed medication or insulin must only be made gradually and under the supervision of your treating physician." },
  { question: "Can Ayurveda genuinely help manage Type 2 diabetes?", answer: "Many patients experience improved blood sugar stability and metabolic markers alongside their existing treatment plan, through a combination of detoxification therapies, dietary correction, and supportive herbal formulations." },
  { question: "Is this program suitable for pre-diabetes as well?", answer: "Yes, this program is often used by patients seeking to address pre-diabetic blood sugar patterns proactively, alongside guidance from their physician." },
  { question: "How long before I notice changes in my blood sugar readings?", answer: "Many patients notice more stable energy and glucose readings within the first two weeks. Meaningful, sustained metabolic improvements typically develop over a full 21 to 28 day program combined with ongoing dietary discipline." },
];

const topCenters: TreatmentCenter[] = comboLuxuryHeritage;

const DiabetesTreatment = () => (
  <TreatmentPageTemplate
    slug="diabetes-treatment-in-india"
    conditionName="Diabetes"
    pageTitle="Diabetes Treatment in India"
    heroTagline="Supportive Ayurvedic Care for Healthier Blood Sugar Balance"
    heroDescription="Ayurveda supports diabetes management by rekindling metabolic fire and clearing the imbalance behind impaired glucose regulation — working alongside your existing medical care."
    heroRatingText="4.7/5 Patient Satisfaction"
    introTitle="The Ayurvedic View of Diabetes (Madhumeha)"
    introImage="/Treatments-images/Diabetes/diabetes-hero-new.png"
    introImageAlt="Ayurvedic Diabetes Treatment"
    introParagraphs={[
      <>
        In Ayurveda, diabetes is classified under <strong className="text-[#335765]">Madhumeha</strong>, a Kapha-type metabolic disorder linked to impaired <strong className="text-[#335765]">Agni</strong> (metabolic fire) and excess <strong className="text-[#335765]">Kapha</strong> and Meda dhatu (fat tissue).
      </>,
      <>
        This program is offered as <strong className="text-[#335765]">supportive care</strong> alongside your existing medical treatment, not a replacement. Sedentary habits, heavy or sugary foods, and stress weaken Agni and allow Ama (toxins) to accumulate, disrupting healthy glucose metabolism. Ayurvedic therapies aim to rekindle Agni and clear excess Kapha, supporting more stable blood sugar patterns alongside your prescribed care.
      </>,
    ]}
    therapiesSubtitle="The program focuses on rekindling Agni and clearing excess Kapha, supporting healthier metabolic function alongside your medical treatment."
    therapies={therapies}
    dietIntro="Dietary correction is essential to rekindle Agni and reduce the Kapha excess linked to impaired glucose metabolism."
    dietFavour={[
      "Warm, Light Meals: Favour warm, freshly cooked, lightly spiced foods that are easy to digest and support metabolism.",
      "Bitter Foods: Include bitter gourd, fenugreek, and leafy greens, traditionally valued for supporting healthy blood sugar.",
      "High-Fiber Foods: Whole grains and legumes support steadier blood sugar and improved digestion.",
      "Regular Meal Timing: Consistent meal times support stable blood sugar and healthier metabolic rhythm.",
    ]}
    dietAvoid={[
      "Sugar and Refined Carbohydrates: These directly aggravate Kapha and disrupt healthy glucose regulation.",
      "Heavy, Fried Foods: These are difficult to digest and further weaken Agni.",
      "Excess Dairy: Heavy dairy products can increase Kapha and worsen metabolic sluggishness.",
      "Irregular Eating and Late-Night Snacking: These disrupt metabolic rhythm and destabilize blood sugar.",
    ]}
    lifestyleAdjustments={[
      "Move Daily: Regular, brisk movement like walking is one of the most effective ways to support healthy glucose metabolism.",
      "Maintain Consistent Meal Times: Regular eating patterns support more stable blood sugar throughout the day.",
      "Prioritize Sleep: Consistent, adequate sleep supports healthy metabolic and hormonal regulation.",
      "Manage Stress Actively: Chronic stress affects blood sugar regulation; daily pranayama or meditation helps manage this.",
    ]}
    packagesSubtitle="Select a timeline that matches your health goals. Each program includes daily physician consultation, prescribed therapies, medicines, and sattvic diet — always alongside your existing medical care."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for metabolic and lifestyle conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/Diabetes/diabetes-hero-new.png"
    ctaDescription="Start a conversation about supportive Ayurvedic care for diabetes. We help you connect with centers experienced in complementary metabolic care."
  />
);

export default DiabetesTreatment;
