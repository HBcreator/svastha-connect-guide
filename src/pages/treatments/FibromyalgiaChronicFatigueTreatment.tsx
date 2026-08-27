import TreatmentPageTemplate, {
  type TreatmentTherapy,
  type TreatmentPackage,
  type TreatmentReview,
  type TreatmentFaq,
  type TreatmentCenter,
} from "@/components/TreatmentPageTemplate";
import { comboClassicKerala } from "@/data/centerCombos";
import { Droplet, Leaf, Activity, Flame } from "lucide-react";

const therapies: TreatmentTherapy[] = [
  {
    title: "Abhyanga",
    sanskrit: "Full-Body Oil Massage",
    text: "A warm, rhythmic full-body massage with grounding oils calms aggravated Vata across the whole body, easing widespread muscular tenderness and stiffness.",
    icon: Activity,
  },
  {
    title: "Pizhichil",
    sanskrit: "Warm Oil Bath Immersion",
    text: "A continuous, gentle pouring of warm medicated oil over the entire body deeply nourishes fatigued tissue and calms the nervous system's heightened pain response.",
    icon: Droplet,
  },
  {
    title: "Basti",
    sanskrit: "Medicated Enema Therapy",
    text: "The primary Panchakarma therapy for Vata disorders, a structured series of medicated enemas addresses the root Vata imbalance behind widespread pain and fatigue.",
    icon: Leaf,
  },
  {
    title: "Ojas Rasayana",
    sanskrit: "Vital Energy Restoration",
    text: "A tailored regimen of Ashwagandha, Shatavari, and Guduchi rebuilds Ojas — the body's core reserve of vitality — restoring sustainable energy from within.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Pain & Fatigue Relief Program",
    duration: "14 Days",
    cost: "$1,300 - $2,400 USD",
    focus: "Focuses on Abhyanga and gentle Basti to ease widespread muscular tenderness and provide noticeable relief from persistent fatigue quickly.",
    image: "/Treatments-images/FibromyalgiaChronicFatigue/Pain and Fatigue Relief Package.jpg",
  },
  {
    name: "21-Day Ojas Restoration Program",
    duration: "21 Days",
    cost: "$2,700 - $4,700 USD",
    focus: "Combines daily Pizhichil oil bath with Ojas-building Rasayana herbs to rebuild the body's vital energy reserves and support lasting symptom relief.",
    image: "/Treatments-images/FibromyalgiaChronicFatigue/Ojas Restoration Package.jpg",
  },
  {
    name: "28-Day Deep Vata Panchakarma Program",
    duration: "28 - 35+ Days",
    cost: "$3,900 - $6,900+ USD",
    focus: "An intensive Panchakarma program for long-standing fibromyalgia or chronic fatigue, combining detoxification with deep Rasayana nourishment for lasting vitality.",
    image: "/Treatments-images/FibromyalgiaChronicFatigue/Deep Vata Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Wanda",
    location: "Krakow, Poland",
    condition: "Fibromyalgia",
    title: "My Widespread Pain Is Genuinely More Manageable Now.",
    review:
      "I had lived with pain all over my body for six years. The daily Pizhichil oil bath eased my tenderness noticeably within the first week, and my energy has stayed more stable since finishing the program. The warmth of the oil therapy reached places that years of physical therapy never touched. Some days are still harder than others, but the baseline pain has genuinely dropped.",
    rating: 5,
    verified: true,
  },
  {
    name: "Anton",
    location: "Riga, Latvia",
    condition: "Chronic Fatigue Syndrome",
    title: "I Have Real Energy Again, Not Just Caffeine.",
    review:
      "Chronic fatigue had made basic daily tasks exhausting for years. The Ojas Rasayana herbs combined with Abhyanga rebuilt my energy gradually but consistently. I feel like myself again for the first time in years. The physician never rushed the process, which I actually appreciated after being pushed too hard by previous treatments. I can now get through a full day without needing to lie down halfway through.",
    rating: 5,
    verified: true,
  },
  {
    name: "Marit",
    location: "Trondheim, Norway",
    condition: "Fibromyalgia with Sleep Disruption",
    title: "Better Sleep Finally Eased My Pain Too.",
    review:
      "My pain and poor sleep fed into each other constantly. The calming therapies improved my sleep within days, and as my sleep improved, my pain sensitivity noticeably reduced as well. Breaking that cycle was something years of separate sleep and pain treatments never managed to do. It's been a genuinely different quality of life since I started sleeping properly again.",
    rating: 5,
    verified: true,
  },
  {
    name: "Joost",
    location: "Eindhoven, Netherlands",
    condition: "Chronic Fatigue Syndrome",
    title: "The Root Cause Was Finally Addressed.",
    review:
      "Years of tests never found a clear answer for my fatigue. The Ayurvedic approach addressed my depleted Ojas directly rather than just managing symptoms. My stamina has genuinely improved since the program. Having a framework that finally made sense of my symptoms was almost as valuable as the treatment itself. I no longer plan my whole week around how tired I might feel.",
    rating: 5,
    verified: true,
  },
  {
    name: "Livia",
    location: "Bucharest, Romania",
    condition: "Fibromyalgia",
    title: "I Can Do Daily Activities Without Dreading The Pain.",
    review:
      "Simple tasks like grocery shopping used to leave me in pain for days. The full Panchakarma program has noticeably reduced my flare-ups, and I feel far more capable in my daily life now. The care team taught me to recognise early warning signs before a flare fully set in. Errands that used to require days of recovery now barely register as effort.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "How does Ayurveda understand fibromyalgia and chronic fatigue?", answer: "Ayurveda attributes both conditions to aggravated Vata dosha spreading through the body's tissues, combined with depleted Ojas — the body's core reserve of vital energy. Treatment focuses on calming Vata and rebuilding Ojas together." },
  { question: "Can this program help if my diagnosis was purely based on ruling out other conditions?", answer: "Yes, many patients arrive after a diagnosis of exclusion. The program focuses on your actual symptoms — widespread pain and persistent fatigue — regardless of how the underlying diagnosis was reached." },
  { question: "Will I need to stop my current pain medication?", answer: "No, this program works alongside your existing care. Any changes to prescribed medication should always be made gradually and only under the supervision of your treating physician." },
  { question: "How soon might I notice a reduction in pain or improvement in energy?", answer: "Many patients notice reduced tenderness and steadier energy within the first two weeks of daily therapies. More significant, lasting changes typically develop over a full 21 to 28 day program." },
  { question: "Are the Ojas-building herbs safe for long-term use?", answer: "Yes, herbs like Ashwagandha, Shatavari, and Guduchi have centuries of safe traditional use as restorative tonics. Your physician tailors the formulation to your specific case and any existing medication." },
];

const topCenters: TreatmentCenter[] = comboClassicKerala;

const FibromyalgiaChronicFatigueTreatment = () => (
  <TreatmentPageTemplate
    slug="fibromyalgia-chronic-fatigue-treatment-in-india"
    conditionName="Fibromyalgia and Chronic Fatigue"
    pageTitle="Fibromyalgia & Chronic Fatigue Treatment in India"
    heroTagline="A Natural Path to Less Pain and Real, Lasting Energy"
    heroDescription="Ayurveda treats fibromyalgia and chronic fatigue at their root, calming widespread Vata imbalance and rebuilding the body's core reserves of vital energy."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of Fibromyalgia & Chronic Fatigue"
    introImage="/Treatments-images/FibromyalgiaChronicFatigue/fibro-hero-new.png"
    introImageAlt="Ayurvedic Fibromyalgia and Chronic Fatigue Treatment"
    introParagraphs={[
      <>
        In Ayurveda, fibromyalgia and chronic fatigue are understood through widespread <strong className="text-[#335765]">Vata</strong> aggravation combined with depleted <strong className="text-[#335765]">Ojas</strong> — the body's core reserve of vitality that governs immunity, strength, and resilience.
      </>,
      <>
        Chronic stress, poor sleep, and an erratic lifestyle allow Vata to spread through the tissues, causing widespread tenderness and pain, while Ojas is gradually depleted, leaving persistent, unrelenting fatigue. Ayurveda addresses both together — calming the nervous system while rebuilding the body's vital reserves from within.
      </>,
    ]}
    therapiesSubtitle="The treatment focuses on calming widespread Vata aggravation while rebuilding Ojas, restoring both comfort and sustainable energy."
    therapies={therapies}
    dietIntro="Dietary correction is essential to calm Vata and rebuild the body's depleted energy reserves."
    dietFavour={[
      "Warm, Unctuous Foods: Favour warm, ghee-rich, well-cooked meals that are deeply grounding and nourishing.",
      "Nourishing Proteins: Include nuts, dates, and warm milk, traditionally considered supportive for rebuilding Ojas.",
      "Regular Meal Times: A consistent eating schedule supports stable energy throughout the day.",
      "Warm Herbal Teas: Ashwagandha and ginger tea support digestion and gentle energy restoration.",
    ]}
    dietAvoid={[
      "Cold and Raw Foods: These aggravate Vata and can worsen pain sensitivity and fatigue.",
      "Excess Caffeine: Stimulants create short-term energy spikes that worsen long-term fatigue and Vata imbalance.",
      "Skipping Meals: Irregular eating destabilizes energy levels and aggravates Vata further.",
      "Processed and Fried Foods: These are difficult to digest and can increase fatigue and inflammation.",
    ]}
    lifestyleAdjustments={[
      "Pace Your Activity: Gentle, consistent movement is better than intense bursts followed by crashes.",
      "Prioritize Warmth: Keeping the body warm, especially joints and extremities, helps calm aggravated Vata.",
      "Protect Your Sleep: Consistent, adequate rest is essential for rebuilding Ojas and managing pain sensitivity.",
      "Reduce Overstimulation: A calm, predictable daily routine prevents further Vata aggravation from sensory overload.",
    ]}
    packagesSubtitle="Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for chronic pain and fatigue conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/FibromyalgiaChronicFatigue/fibro-hero-new.png"
    ctaDescription="Start your journey to less pain and real, lasting energy. We help you connect with the top Ayurvedic centers specialized in chronic pain and fatigue care."
  />
);

export default FibromyalgiaChronicFatigueTreatment;
