import TreatmentPageTemplate, {
  type TreatmentTherapy,
  type TreatmentPackage,
  type TreatmentReview,
  type TreatmentFaq,
  type TreatmentCenter,
} from "@/components/TreatmentPageTemplate";
import { comboClinicalPanchakarma } from "@/data/centerCombos";
import { Droplet, Leaf, Activity, Flame } from "lucide-react";

const therapies: TreatmentTherapy[] = [
  {
    title: "Virechana",
    sanskrit: "Therapeutic Purgation",
    text: "A supervised, medicated cleansing procedure clears deep-seated Ama (toxins) from the system, addressing a core factor Ayurveda associates with immune dysregulation.",
    icon: Droplet,
  },
  {
    title: "Basti",
    sanskrit: "Medicated Enema Therapy",
    text: "A structured series of medicated enemas calms aggravated Vata and supports the gut, which Ayurveda considers central to immune balance.",
    icon: Leaf,
  },
  {
    title: "Abhyanga",
    sanskrit: "Full-Body Oil Massage",
    text: "A warm, full-body oil massage calms the nervous system, reduces stress-linked inflammation, and supports the body's natural regulatory processes.",
    icon: Activity,
  },
  {
    title: "Ojas Rasayana",
    sanskrit: "Immune Nourishment",
    text: "A tailored regimen of Guduchi, Ashwagandha, and Amalaki supports the body's natural resilience and helps rebuild depleted Ojas.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "21-Day Ama Detox & Immune Reset",
    duration: "21 Days",
    cost: "$2,700 - $4,800 USD",
    focus: "Focuses on Virechana detoxification and dietary correction to clear Ama accumulation and support the body's natural regulatory balance.",
    image: "/Treatments-images/Autoimmune/Ama Detox Immune Reset Package.jpg",
  },
  {
    name: "28-Day Deep Immune Support Panchakarma",
    duration: "28 Days",
    cost: "$4,200 - $7,200 USD",
    focus: "Combines a structured Basti series with Ojas-building Rasayana herbs to support long-term immune resilience alongside your existing treatment plan.",
    image: "/Treatments-images/Autoimmune/Deep Immune Support Panchakarma Package.jpg",
  },
  {
    name: "35-Day Comprehensive Autoimmune Care Program",
    duration: "35+ Days",
    cost: "$5,800 - $9,800+ USD",
    focus: "An extended, physician-supervised program combining detoxification, Rasayana nourishment, and structured lifestyle correction for comprehensive supportive care.",
    image: "/Treatments-images/Autoimmune/Comprehensive Autoimmune Care Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Saoirse",
    location: "Cork, Ireland",
    condition: "Rheumatoid Arthritis Support",
    title: "My Flare-Ups Are Noticeably Less Frequent Now.",
    review:
      "I came seeking supportive care alongside my rheumatologist's treatment plan. The Virechana detox and daily Abhyanga noticeably reduced how often I experienced flare-ups over the following months.",
    rating: 5,
    verified: true,
  },
  {
    name: "Fabian",
    location: "Cologne, Germany",
    condition: "Autoimmune Thyroid Support",
    title: "My Energy And Overall Wellbeing Genuinely Improved.",
    review:
      "Chronic fatigue from my autoimmune condition had worn me down. The Ojas Rasayana herbs and structured routine gave me noticeably more stable energy, complementing my endocrinologist's ongoing care.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ingrid",
    location: "Reykjavik, Iceland",
    condition: "Psoriatic Condition Support",
    title: "A Genuinely Supportive, Well-Supervised Program.",
    review:
      "I was cautious trying anything outside my dermatologist's care, but the physicians worked transparently with my full medical history. My skin symptoms have been noticeably calmer since completing the program.",
    rating: 5,
    verified: true,
  },
  {
    name: "Mathis",
    location: "Strasbourg, France",
    condition: "Autoimmune Fatigue and Joint Pain",
    title: "My Joint Discomfort Eased More Than I Expected.",
    review:
      "This program never claimed to cure my condition — it focused on supportive, symptom-easing care, and that honesty mattered to me. My joint discomfort and stiffness have genuinely eased since finishing.",
    rating: 5,
    verified: true,
  },
  {
    name: "Wren",
    location: "Cardiff, UK",
    condition: "General Autoimmune Support",
    title: "The Detox Phase Gave Me A Genuine Reset.",
    review:
      "My immune specialist was supportive of me trying complementary care. The structured detox and herbal support gave my body a genuine reset, and I've felt steadier and more resilient in the months since.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Can Ayurveda cure autoimmune diseases?", answer: "No. Autoimmune diseases are complex, chronic conditions with no known cure in any system of medicine. This program provides supportive Ayurvedic care alongside your existing rheumatology, dermatology, or endocrinology treatment, focused on easing symptoms and supporting overall resilience." },
  { question: "Is this program a replacement for my specialist's treatment?", answer: "No, this program is designed purely as complementary, supportive care. You should continue all prescribed medications and specialist follow-ups, and we recommend informing your treating physician about any additional therapies you undertake." },
  { question: "Why does Ayurveda focus on Ama (toxins) for autoimmune conditions?", answer: "Ayurveda associates accumulated Ama with disrupted bodily regulation and inflammation. Detoxification therapies aim to clear this accumulation, supporting the body's natural regulatory balance alongside your medical treatment." },
  { question: "Is Virechana safe for people with autoimmune conditions?", answer: "Yes, when administered by physicians who review your complete medical history and current medications beforehand. The therapy is adapted to your individual health status throughout the program." },
  { question: "How soon might I notice a difference in my symptoms?", answer: "Some patients report improved energy and reduced symptom flare-ups within a few weeks of the program, though individual results vary significantly based on the specific condition and its severity." },
];

const topCenters: TreatmentCenter[] = comboClinicalPanchakarma;

const AutoimmuneTreatment = () => (
  <TreatmentPageTemplate
    slug="autoimmune-disease-treatment-in-india"
    conditionName="Autoimmune Disease"
    pageTitle="Autoimmune Disease Treatment in India"
    heroTagline="Supportive Ayurvedic Care Alongside Your Existing Treatment"
    heroDescription="Ayurveda offers supportive, physician-supervised care that works alongside your existing specialist treatment — clearing Ama, calming inflammation, and supporting your body's natural resilience."
    heroRatingText="4.7/5 Patient Satisfaction"
    introTitle="The Ayurvedic View of Immune Balance"
    introImage="/Treatments-images/Autoimmune/autoimmune-hero-new.png"
    introImageAlt="Ayurvedic Autoimmune Disease Treatment"
    introParagraphs={[
      <>
        Ayurveda associates immune dysregulation with accumulated <strong className="text-[#335765]">Ama</strong> (undigested toxins) combined with weakened <strong className="text-[#335765]">Agni</strong> (metabolic fire) and depleted <strong className="text-[#335765]">Ojas</strong> — the body's core reserve of resilience.
      </>,
      <>
        This program is offered as <strong className="text-[#335765]">supportive care</strong>, not a cure — autoimmune diseases are complex conditions that require ongoing specialist treatment. Ayurvedic therapies aim to clear Ama, calm aggravated doshas, and rebuild Ojas, working alongside your existing medical care to support symptom relief and overall resilience.
      </>,
    ]}
    therapiesSubtitle="The program focuses on clearing Ama and rebuilding Ojas, supporting the body's natural regulatory balance alongside your specialist care."
    therapies={therapies}
    dietIntro="Dietary correction supports Agni and helps reduce the Ama accumulation Ayurveda associates with immune imbalance."
    dietFavour={[
      "Warm, Easily Digestible Foods: Favour warm, freshly cooked, lightly spiced meals that are gentle on digestion.",
      "Anti-Inflammatory Spices: Turmeric, ginger, and cumin support digestion and are traditionally valued for calming inflammation.",
      "Ojas-Building Foods: Warm milk, ghee, and dates support the body's resilience and vital reserves.",
      "Regular Meal Times: A consistent eating schedule supports steady digestion and reduces Ama accumulation.",
    ]}
    dietAvoid={[
      "Processed and Fried Foods: These are difficult to digest and contribute to Ama accumulation.",
      "Excess Dairy and Gluten: Some patients find these aggravate symptoms; your physician can guide individual adjustments.",
      "Cold and Raw Foods: These can weaken Agni and slow digestion, increasing Ama.",
      "Irregular Meals: Inconsistent eating patterns disrupt digestion and can worsen underlying imbalances.",
    ]}
    lifestyleAdjustments={[
      "Prioritize Rest: Adequate rest supports the body's natural regulatory processes and helps manage fatigue.",
      "Manage Stress Actively: Chronic stress is closely linked to immune imbalance; daily pranayama or meditation helps regulate this.",
      "Stay Gently Active: Regular, moderate movement supports circulation and overall resilience without overexertion.",
      "Maintain a Predictable Routine: A stable daily schedule supports the body's natural rhythms and reduces additional stress load.",
    ]}
    packagesSubtitle="Select a timeline that matches your care goals. Each program includes daily physician consultation, prescribed supportive therapies, and sattvic diet — always alongside your existing specialist care."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats experienced in supportive care for chronic autoimmune conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/Autoimmune/autoimmune-hero-new.png"
    ctaDescription="Start a conversation about supportive Ayurvedic care for autoimmune conditions. We help you connect with centers experienced in complementary immune support."
  />
);

export default AutoimmuneTreatment;
