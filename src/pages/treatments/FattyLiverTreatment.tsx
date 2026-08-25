import TreatmentPageTemplate, {
  type TreatmentTherapy,
  type TreatmentPackage,
  type TreatmentReview,
  type TreatmentFaq,
  type TreatmentCenter,
} from "@/components/TreatmentPageTemplate";
import { comboRetreatYoga } from "@/data/centerCombos";
import { Droplet, Leaf, Activity, Flame } from "lucide-react";

const therapies: TreatmentTherapy[] = [
  {
    title: "Virechana",
    sanskrit: "Therapeutic Purgation",
    text: "A supervised, medicated cleansing procedure clears excess Kapha and Ama (toxins) from the liver and digestive channels, addressing a core cause of fat accumulation.",
    icon: Droplet,
  },
  {
    title: "Udwarthanam",
    sanskrit: "Herbal Powder Massage",
    text: "A vigorous, upward massage using dry herbal powders stimulates metabolism and helps reduce excess Meda (fat tissue) linked to fatty liver.",
    icon: Activity,
  },
  {
    title: "Liver-Supportive Herbs",
    sanskrit: "Bhumyamalaki & Kalmegh",
    text: "A tailored regimen of Bhumyamalaki, Kalmegh, and Kutki — classical hepatoprotective herbs traditionally used to support healthy liver tissue and function.",
    icon: Leaf,
  },
  {
    title: "Agni-Kindling Therapy",
    sanskrit: "Digestive Fire Restoration",
    text: "Personalized dietary correction and digestive herbs restore Agni (metabolic fire), addressing the root cause that allows fat to accumulate in the liver.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Liver Detox & Reset Program",
    duration: "14 Days",
    cost: "$1,300 - $2,300 USD",
    focus: "Focuses on Udwarthanam, dietary correction, and liver-supportive herbs to kickstart metabolic balance and ease early-stage fatty liver symptoms.",
    image: "/Treatments-images/FattyLiver/Liver Detox Reset Package.jpg",
  },
  {
    name: "21-Day Metabolic Liver Restoration",
    duration: "21 Days",
    cost: "$2,600 - $4,600 USD",
    focus: "Incorporates Virechana detoxification alongside daily Udwarthanam to clear excess Kapha and rekindle Agni for improved long-term liver function.",
    image: "/Treatments-images/FattyLiver/Metabolic Liver Restoration Package.jpg",
  },
  {
    name: "28-Day Comprehensive Hepatic Panchakarma",
    duration: "28 - 35+ Days",
    cost: "$3,800 - $6,800+ USD",
    focus: "An intensive Panchakarma program for long-standing or advanced fatty liver, combining detoxification with sustained dietary and herbal metabolic support.",
    image: "/Treatments-images/FattyLiver/Comprehensive Hepatic Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Mattias",
    location: "Malmo, Sweden",
    condition: "Non-Alcoholic Fatty Liver",
    title: "My Liver Enzyme Levels Are Back To Normal.",
    review:
      "A routine scan flagged fatty liver two years ago. The Virechana detox and dietary correction noticeably improved my energy within three weeks, and my follow-up liver enzyme tests came back normal.",
    rating: 5,
    verified: true,
  },
  {
    name: "Greta",
    location: "Innsbruck, Austria",
    condition: "Fatty Liver with Weight Concerns",
    title: "My Weight And Liver Health Both Improved Together.",
    review:
      "My doctor linked my fatty liver directly to my weight. The daily Udwarthanam massage and metabolic reset diet helped me lose weight steadily while directly supporting my liver recovery.",
    rating: 5,
    verified: true,
  },
  {
    name: "Joachim",
    location: "Basel, Switzerland",
    condition: "Fatty Liver and Digestive Sluggishness",
    title: "My Digestion Feels Completely Different Now.",
    review:
      "Constant bloating and sluggish digestion turned out to be linked to my fatty liver. The Agni-kindling therapy and herbal formulations resolved both issues together within the three-week program.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ingrid",
    location: "Bergen, Norway",
    condition: "Fatty Liver Prevention",
    title: "A Proactive Reset Before Things Got Worse.",
    review:
      "My scan showed early-stage fatty changes, and I wanted to act before it progressed further. The comprehensive program gave me a clear, structured path back to healthy liver function.",
    rating: 5,
    verified: true,
  },
  {
    name: "Radek",
    location: "Brno, Czech Republic",
    condition: "Fatty Liver and Fatigue",
    title: "My Chronic Fatigue Lifted As My Liver Health Improved.",
    review:
      "I had unexplained fatigue for over a year before fatty liver was identified as the cause. The liver-supportive herbs and detox protocol restored my energy levels significantly by the end of the program.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Why does Ayurveda link fatty liver to Kapha and Agni?", answer: "Ayurveda attributes fatty liver to weakened Agni (metabolic fire) combined with excess Kapha, which allows Meda (fat tissue) to accumulate in the liver. Treatment focuses on rekindling Agni and clearing this excess Kapha." },
  { question: "Can this program reverse non-alcoholic fatty liver disease?", answer: "Many patients experience meaningful improvement in liver function markers as excess Kapha is cleared and Agni is restored, though results vary depending on the stage and underlying cause. This program works well alongside your physician's ongoing monitoring." },
  { question: "Is Virechana safe for someone with liver concerns?", answer: "Yes, when administered by physicians who review your complete liver function history beforehand. The therapy is specifically designed to support liver detoxification and is adapted to your individual health status." },
  { question: "Will I need to change my diet permanently?", answer: "Your physician will provide a structured post-program diet plan. Many of the dietary principles — reducing fried and processed foods, favouring bitter greens and warm meals — are recommended as a sustainable long-term lifestyle." },
  { question: "How soon might I notice an improvement in my liver health?", answer: "Many patients notice improved energy and digestion within the first two weeks. Meaningful improvement in liver function markers typically becomes apparent over a full 21 to 28 day program combined with sustained dietary discipline." },
];

const topCenters: TreatmentCenter[] = comboRetreatYoga;

const FattyLiverTreatment = () => (
  <TreatmentPageTemplate
    slug="fatty-liver-treatment-in-india"
    conditionName="Fatty Liver"
    pageTitle="Fatty Liver & Liver Detox Treatment in India"
    heroTagline="A Natural Path to a Healthier, Lighter Liver"
    heroDescription="Ayurveda treats fatty liver at its root, rekindling metabolic fire and clearing the excess that accumulates in liver tissue — restoring healthier liver function from within."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of Fatty Liver"
    introImage="/Treatments-images/FattyLiver/Ayurvedic Treatment for Fatty Liver and Liver Detox.jpg"
    introImageAlt="Ayurvedic Fatty Liver and Liver Detox Treatment"
    introParagraphs={[
      <>
        In Ayurveda, the liver is closely linked to <strong className="text-[#335765]">Ranjaka Pitta</strong>, the subtype of Pitta responsible for metabolic and blood-related function, and to <strong className="text-[#335765]">Agni</strong>, the body's digestive fire.
      </>,
      <>
        When Agni weakens from heavy foods, sedentary habits, or excess alcohol, undigested <strong className="text-[#335765]">Ama</strong> (toxins) accumulate and aggravate Kapha, allowing Meda (fat tissue) to build up in the liver. Ayurveda addresses this by clearing excess Kapha and Ama while rekindling Agni, restoring the liver's natural metabolic balance.
      </>,
    ]}
    therapiesSubtitle="The treatment focuses on clearing excess Kapha and Ama while rekindling Agni, supporting the liver's natural ability to metabolize fat."
    therapies={therapies}
    dietIntro="Dietary correction is essential to rekindle Agni and reduce the Kapha excess linked to fat accumulation in the liver."
    dietFavour={[
      "Warm, Light Meals: Favour warm, freshly cooked, lightly spiced foods that are easy to digest and support liver function.",
      "Bitter Greens: Include bitter gourd, fenugreek leaves, and other bitter vegetables, traditionally valued for liver support.",
      "Buttermilk and Light Proteins: Spiced buttermilk and light, easily digestible proteins support digestion without overloading the liver.",
      "Regular Meal Timing: Consistent meal times support steady digestion and reduce Ama accumulation.",
    ]}
    dietAvoid={[
      "Fried and Oily Foods: These directly increase Kapha and place additional metabolic strain on the liver.",
      "Alcohol: Alcohol is a direct aggravator of liver imbalance and should be minimized or avoided during treatment.",
      "Refined Sugar and Processed Foods: These worsen Kapha excess and contribute to further fat accumulation.",
      "Heavy Dairy and Late-Night Meals: These slow digestion and increase Ama, worsening the underlying imbalance.",
    ]}
    lifestyleAdjustments={[
      "Move Daily: Regular, brisk movement like walking is one of the most effective ways to reduce Kapha and support liver health.",
      "Avoid Daytime Sleep: Daytime naps increase Kapha and can worsen metabolic sluggishness.",
      "Limit Alcohol Completely: Complete or near-complete avoidance of alcohol is essential for liver recovery.",
      "Maintain a Healthy Weight: Gradual, sustainable weight management directly supports reduced fat accumulation in the liver.",
    ]}
    packagesSubtitle="Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for metabolic and liver health conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/FattyLiver/Ayurvedic Treatment for Fatty Liver and Liver Detox.jpg"
    ctaDescription="Start your journey to a healthier liver. We help you connect with the top Ayurvedic centers specialized in metabolic and liver health care."
  />
);

export default FattyLiverTreatment;
