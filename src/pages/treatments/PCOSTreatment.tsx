import TreatmentPageTemplate, {
  type TreatmentTherapy,
  type TreatmentPackage,
  type TreatmentReview,
  type TreatmentFaq,
  type TreatmentCenter,
} from "@/components/TreatmentPageTemplate";
import { comboWellnessNature } from "@/data/centerCombos";
import { Droplet, Leaf, Activity, Flame } from "lucide-react";

const therapies: TreatmentTherapy[] = [
  {
    title: "Virechana",
    sanskrit: "Therapeutic Purgation",
    text: "A supervised, medicated cleansing procedure that clears excess Kapha and Ama (toxins) from the system, addressing one of the core imbalances behind irregular ovulation.",
    icon: Droplet,
  },
  {
    title: "Uttar Basti",
    sanskrit: "Reproductive Channel Therapy",
    text: "A specialized medicated therapy targeted at the reproductive channels (Artava Vaha Srotas), helping to nourish reproductive tissue and support cycle regularity.",
    icon: Leaf,
  },
  {
    title: "Udwarthanam",
    sanskrit: "Herbal Powder Massage",
    text: "A vigorous, upward massage using herbal powders stimulates metabolism, supports healthy weight management, and reduces excess Kapha linked to PCOS.",
    icon: Activity,
  },
  {
    title: "Hormonal Herbs",
    sanskrit: "Internal Medicine",
    text: "A tailored regimen of Shatavari, Ashoka, and Lodhra to nourish reproductive tissue, regulate hormonal balance, and support a more regular menstrual cycle.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Hormonal Reset Program",
    duration: "14 Days",
    cost: "$1,300 - $2,300 USD",
    focus: "Focuses on Udwarthanam, dietary correction, and herbal support to kickstart metabolic balance and ease common symptoms like bloating and irregular cycles.",
    image: "/Treatments-images/PCOS/Hormonal Reset Package.jpg",
  },
  {
    name: "21-Day PCOS Detox & Balance",
    duration: "21 Days",
    cost: "$2,600 - $4,600 USD",
    focus: "Incorporates Virechana detoxification and Uttar Basti to clear excess Kapha from the reproductive channels and support more regular ovulation and cycles.",
    image: "/Treatments-images/PCOS/PCOS Detox Balance Package.jpg",
  },
  {
    name: "28-Day Complete Reproductive Wellness Program",
    duration: "28 - 35+ Days",
    cost: "$3,800 - $6,800+ USD",
    focus: "An intensive Panchakarma program for long-standing PCOS, combined insulin resistance, or fertility goals, focusing on deep metabolic and hormonal restoration.",
    image: "/Treatments-images/PCOS/Complete Reproductive Wellness Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Nina",
    location: "Helsinki, Finland",
    condition: "PCOS with Irregular Cycles",
    title: "My Cycle Became Regular For The First Time In Years.",
    review:
      "I had irregular, unpredictable cycles for nearly six years. The Virechana detox followed by Uttar Basti made a real difference. My cycle has been consistently regular for three months running now.",
    rating: 5,
    verified: true,
  },
  {
    name: "Aline",
    location: "Zurich, Switzerland",
    condition: "PCOS-Related Weight Gain",
    title: "The Udwarthanam Massage Genuinely Helped My Metabolism.",
    review:
      "Weight management with PCOS had felt impossible despite diet and exercise. The daily herbal powder massage combined with dietary correction shifted my metabolism in a way nothing else had.",
    rating: 5,
    verified: true,
  },
  {
    name: "Léa",
    location: "Nantes, France",
    condition: "PCOS and Acne",
    title: "My Skin Cleared Up As My Hormones Balanced.",
    review:
      "My hormonal acne was constant and frustrating. As my cycle regulated over the three weeks, my skin cleared up too — something my dermatologist treatments alone had never achieved.",
    rating: 5,
    verified: true,
  },
  {
    name: "Greta",
    location: "Hamburg, Germany",
    condition: "PCOS and Fertility Goals",
    title: "This Program Gave Me Real Hope For Conceiving.",
    review:
      "We had been trying to conceive for over a year with no success. The complete reproductive wellness program addressed my hormonal imbalance directly. My cycles are now regular and predictable for the first time.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ida",
    location: "Copenhagen, Denmark",
    condition: "PCOS and Insulin Resistance",
    title: "My Energy And Cravings Are Completely Different Now.",
    review:
      "Constant sugar cravings and afternoon energy crashes were a daily struggle with my PCOS. The detox and diet correction stabilized my blood sugar noticeably. I feel like a different person day-to-day.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Why does Ayurveda consider PCOS a Kapha-Vata disorder?", answer: "PCOS involves excess Kapha disrupting healthy follicle maturation and metabolism, often combined with Vata irregularity affecting the menstrual cycle. Treatment focuses on clearing this Kapha excess while regulating Vata for a more balanced cycle." },
  { question: "Can Ayurveda help regulate my menstrual cycle?", answer: "Yes, many patients experience more regular cycles as Kapha excess is cleared and the reproductive channels (Artava Vaha Srotas) are nourished through therapies like Uttar Basti and hormonal herbs." },
  { question: "Will this program help with PCOS-related weight gain?", answer: "The Udwarthanam herbal massage and dietary correction are specifically designed to support healthy metabolism and weight management, which are often closely linked to PCOS symptoms." },
  { question: "Is this program safe if I am trying to conceive?", answer: "Many patients undertake this program specifically to support fertility goals. Your physician will review your complete history and adjust the protocol accordingly — always in coordination with your fertility specialist if you are undergoing fertility treatment." },
  { question: "How long before I notice changes in my cycle or symptoms?", answer: "Some patients notice improved digestion and reduced bloating within the first two weeks. Meaningful changes in cycle regularity typically become apparent over one to three cycles following a full program." },
];

const topCenters: TreatmentCenter[] = comboWellnessNature;

const PCOSTreatment = () => (
  <TreatmentPageTemplate
    slug="pcos-treatment-in-india"
    conditionName="PCOS"
    pageTitle="PCOS Treatment in India"
    heroTagline="A Natural Path to Regular Cycles and Hormonal Balance"
    heroDescription="Ayurveda treats PCOS at its root, clearing the metabolic imbalance behind irregular cycles and restoring natural hormonal balance from within."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of PCOS (Artava Dushti)"
    introImage="/Treatments-images/PCOS/pcos-hero-new.png"
    introImageAlt="Ayurvedic PCOS and Hormonal Balance Treatment"
    introParagraphs={[
      <>
        In Ayurveda, PCOS is understood as <strong className="text-[#335765]">Artava Dushti</strong> — a vitiation of reproductive tissue caused primarily by excess <strong className="text-[#335765]">Kapha dosha</strong>, often combined with irregular <strong className="text-[#335765]">Vata</strong> affecting the menstrual cycle.
      </>,
      <>
        Sedentary habits, heavy or sugary foods, and stress allow Kapha and Ama (toxins) to accumulate, weakening Agni (metabolic fire) and disrupting healthy follicle maturation. This shows up as irregular cycles, weight gain, and hormonal symptoms. Ayurveda restores this balance by clearing excess Kapha and rekindling Agni, addressing the root cause rather than only managing symptoms.
      </>,
    ]}
    therapiesSubtitle="The treatment focuses on clearing excess Kapha, rekindling metabolic fire (Agni), and nourishing the reproductive tissue for regular, balanced cycles."
    therapies={therapies}
    dietIntro="Dietary correction is essential to reduce Kapha, rekindle Agni, and support hormonal balance from within."
    dietFavour={[
      "Warm, Light Meals: Favour warm, freshly cooked, lightly spiced foods that are easy to digest and support metabolism.",
      "Bitter and Astringent Foods: Include bitter gourd, leafy greens, and legumes, which help balance excess Kapha.",
      "Warming Spices: Turmeric, cumin, and ginger support digestion and help reduce Kapha-related sluggishness.",
      "Regular Meal Timing: Consistent meal times support stable blood sugar and healthier metabolic rhythm.",
    ]}
    dietAvoid={[
      "Sugar and Refined Carbohydrates: These aggravate Kapha and worsen insulin resistance commonly linked to PCOS.",
      "Dairy and Heavy Foods: Excess dairy and fried foods increase Kapha and can worsen weight and hormonal symptoms.",
      "Cold Drinks and Ice Cream: Cold foods slow digestion and increase Kapha accumulation.",
      "Irregular Eating and Late-Night Snacking: These disrupt metabolic rhythm and worsen hormonal imbalance.",
    ]}
    lifestyleAdjustments={[
      "Move Daily: Regular, brisk movement like walking or yoga is one of the most effective ways to balance Kapha and support metabolism.",
      "Prioritize Sleep: Consistent, adequate sleep supports healthy hormone regulation.",
      "Manage Stress Actively: Chronic stress disrupts hormonal balance; daily pranayama or meditation helps regulate this.",
      "Avoid Daytime Sleep: Long daytime naps increase Kapha and can worsen sluggish metabolism.",
    ]}
    packagesSubtitle="Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for gynaecological and hormonal conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/PCOS/pcos-hero-new.png"
    ctaDescription="Start your journey to regular cycles and hormonal balance. We help you connect with the top Ayurvedic centers specialized in women's health."
  />
);

export default PCOSTreatment;
