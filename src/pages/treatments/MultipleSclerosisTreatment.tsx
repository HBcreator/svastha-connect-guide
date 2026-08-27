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
    title: "Basti",
    sanskrit: "Medicated Enema Therapy",
    text: "Considered the primary Panchakarma therapy for Vata-Majjavaha Srotas disorders. A structured series of medicated oil and decoction enemas calms deep-seated Vata and supports nerve tissue function.",
    icon: Droplet,
  },
  {
    title: "Abhyanga (Bala Taila)",
    sanskrit: "Strengthening Oil Massage",
    text: "A full-body massage with Bala-infused oils, chosen specifically for their nerve and muscle strengthening properties, supports mobility and gently maintains muscular strength.",
    icon: Activity,
  },
  {
    title: "Pizhichil",
    sanskrit: "Warm Oil Bath Immersion",
    text: "A continuous, rhythmic pouring of warm medicated oil over the entire body by multiple therapists, deeply nourishing the nervous system and easing stiffness and fatigue.",
    icon: Leaf,
  },
  {
    title: "Majja Rasayana",
    sanskrit: "Nerve Tissue Nourishment",
    text: "A tailored regimen of Ashwagandha, Bala, and Shatavari specifically supports the Majja dhatu (nerve tissue), helping to maintain nerve function and overall vitality.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "21-Day Neuro-Support Program",
    duration: "21 Days",
    cost: "$2,800 - $5,000 USD",
    focus: "Focuses on Abhyanga, gentle Basti, and supportive herbs to ease fatigue and stiffness while supporting day-to-day mobility and comfort.",
    image: "/Treatments-images/MultipleSclerosis/Neuro Support Package.jpg",
  },
  {
    name: "28-Day Majja Dhatu Rejuvenation",
    duration: "28 Days",
    cost: "$4,200 - $7,200 USD",
    focus: "Combines a structured Basti series with daily Pizhichil oil bath immersion to deeply nourish nerve tissue and support long-term symptom management.",
    image: "/Treatments-images/MultipleSclerosis/Majja Dhatu Rejuvenation Package.jpg",
  },
  {
    name: "35-Day Intensive Neurological Panchakarma",
    duration: "35+ Days",
    cost: "$5,800 - $9,800+ USD",
    focus: "An extended, physician-supervised program for more advanced cases, combining detoxification, Rasayana nourishment, and continuous physiotherapy-integrated care.",
    image: "/Treatments-images/MultipleSclerosis/Intensive Neurological Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Anneke",
    location: "Utrecht, Netherlands",
    condition: "Relapsing-Remitting MS",
    title: "My Fatigue and Stiffness Are Genuinely More Manageable.",
    review:
      "I came seeking supportive care alongside my neurologist's treatment plan. The daily Pizhichil oil bath noticeably eased my stiffness and fatigue, and I left with a home routine that has kept those improvements going. The physicians stayed in close contact with my neurology team throughout, which reassured me completely. Months later, I'm still doing the home oil routine and the difference is easy to feel.",
    rating: 5,
    verified: true,
  },
  {
    name: "Magnus",
    location: "Oslo, Norway",
    condition: "MS-Related Fatigue",
    title: "My Energy Levels Improved More Than I Expected.",
    review:
      "Chronic fatigue was my biggest daily struggle. The Basti series combined with Bala oil massage gave me noticeably more stable energy through the day. My physiotherapist has noticed the difference too. The team paced the whole program around my energy levels, never pushing beyond what felt safe. I now get through my afternoons without the crash I used to dread every single day.",
    rating: 5,
    verified: true,
  },
  {
    name: "Delphine",
    location: "Brussels, Belgium",
    condition: "MS Mobility Support",
    title: "A Genuinely Supportive, Well-Supervised Program.",
    review:
      "I was cautious about trying anything outside my neurology care, but the team worked transparently alongside my medical history throughout. The supportive therapies eased my stiffness without any adverse effects. They asked for my full medical file before starting anything and reviewed it carefully with me. That level of caution is exactly what made me trust the whole process.",
    rating: 5,
    verified: true,
  },
  {
    name: "Callum",
    location: "Edinburgh, UK",
    condition: "Secondary Progressive MS",
    title: "My Quality Of Life Has Genuinely Improved.",
    review:
      "This program never claimed to cure my MS — it focused on supportive, symptom-easing care, and that honesty mattered to me. The daily oil therapies have measurably improved my comfort and daily function. Every session was adapted to how I was actually feeling that day, not a fixed rigid routine. Simple daily tasks that had become difficult are noticeably easier for me now.",
    rating: 5,
    verified: true,
  },
  {
    name: "Freja",
    location: "Aarhus, Denmark",
    condition: "MS-Related Muscle Stiffness",
    title: "The Warm Oil Therapies Eased Stiffness I'd Lived With For Years.",
    review:
      "Years of stiffness had become my new normal. The combination of Bala Abhyanga and Pizhichil noticeably loosened that tension within the first two weeks. My physiotherapy sessions have felt easier ever since. I honestly didn't expect such a noticeable physical change in such a short program. My physiotherapist back home even asked what I had changed, the improvement was that obvious.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Can Ayurveda cure Multiple Sclerosis?", answer: "No. Multiple Sclerosis is a chronic autoimmune neurological condition with no known cure in any system of medicine. This program provides supportive Ayurvedic care alongside your existing neurology treatment, focused on easing stiffness, fatigue, and supporting overall quality of life." },
  { question: "Is this program a replacement for my neurologist's treatment?", answer: "No, this program is designed purely as complementary, supportive care. You should continue all prescribed medications and neurology follow-ups, and we recommend informing your neurologist about any additional therapies you undertake." },
  { question: "Why does Ayurveda focus on the Majja dhatu (nerve tissue) for MS?", answer: "Ayurveda associates neurological function with the Majja dhatu, governed by Vata. Supportive therapies aim to nourish this tissue and calm aggravated Vata, which may help ease associated stiffness and fatigue." },
  { question: "Is Pizhichil oil bath safe for MS patients?", answer: "Yes, when administered by physicians familiar with your full medical history and current mobility level. The therapy is adapted to your comfort and physical capability throughout the program." },
  { question: "How soon might I notice a difference in fatigue or stiffness?", answer: "Some patients report easier movement and reduced fatigue within the first two weeks of daily therapies, though individual results vary significantly based on disease stage and overall health." },
];

const topCenters: TreatmentCenter[] = comboRetreatYoga;

const MultipleSclerosisTreatment = () => (
  <TreatmentPageTemplate
    slug="multiple-sclerosis-treatment-in-india"
    conditionName="Multiple Sclerosis"
    pageTitle="Multiple Sclerosis Treatment in India"
    heroTagline="Supportive Ayurvedic Care for Living Well With MS"
    heroDescription="Ayurveda offers supportive, physician-supervised care alongside your existing neurology treatment — nourishing nerve tissue, easing stiffness and fatigue, and supporting your quality of life."
    heroRatingText="4.7/5 Patient Satisfaction"
    introTitle="The Ayurvedic View of Nerve Health (Majja Dhatu)"
    introImage="/Treatments-images/MultipleSclerosis/ms-hero-new.png"
    introImageAlt="Ayurvedic Multiple Sclerosis Treatment"
    introParagraphs={[
      <>
        Ayurveda associates neurological function with the <strong className="text-[#335765]">Majja dhatu</strong> (nerve tissue), which is governed by <strong className="text-[#335765]">Vata dosha</strong> — the subtle energy responsible for all movement and communication in the body.
      </>,
      <>
        This program is offered as <strong className="text-[#335765]">supportive care</strong>, not a cure — Multiple Sclerosis is a complex autoimmune condition that requires ongoing neurological treatment. Ayurvedic therapies aim to calm aggravated Vata, nourish nerve tissue, and ease common symptoms like fatigue and stiffness, working alongside your existing medical care to support day-to-day comfort and quality of life.
      </>,
    ]}
    therapiesSubtitle="The program focuses on calming Vata and nourishing the Majja dhatu, supporting mobility, comfort, and energy alongside your ongoing neurology care."
    therapies={therapies}
    dietIntro="Dietary correction supports Vata balance and helps maintain steady energy and nerve tissue nourishment."
    dietFavour={[
      "Warm, Unctuous Foods: Favour warm, ghee-rich, well-cooked meals that are grounding and easy to digest.",
      "Nerve-Nourishing Foods: Include warm milk, nuts, and dates, which are traditionally considered supportive for Majja dhatu.",
      "Regular Meal Times: A consistent eating schedule helps stabilize energy levels throughout the day.",
      "Warm Herbal Teas: Ginger and ashwagandha tea support digestion and gentle nervous system nourishment.",
    ]}
    dietAvoid={[
      "Cold and Raw Foods: Cold, dry, or raw foods aggravate Vata and can worsen stiffness and fatigue.",
      "Excess Caffeine: Stimulants can increase Vata's erratic quality and disrupt energy stability.",
      "Irregular Meals: Skipping meals or inconsistent eating times destabilizes energy and aggravates Vata.",
      "Processed and Fried Foods: These are difficult to digest and can increase fatigue over time.",
    ]}
    lifestyleAdjustments={[
      "Gentle, Regular Movement: Light, physiotherapist-approved movement supports mobility without overexertion.",
      "Prioritize Warmth: Keeping the body warm, especially the extremities, helps calm aggravated Vata.",
      "Protect Rest Time: Adequate rest between activities helps manage fatigue, a common MS symptom.",
      "Maintain a Predictable Routine: A stable daily schedule is calming to Vata and supports steady energy.",
    ]}
    packagesSubtitle="Select a timeline that matches your care goals. Each program includes daily physician consultation, prescribed supportive therapies, and sattvic diet — always alongside your existing neurology care."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats experienced in supportive care for chronic neurological conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/MultipleSclerosis/ms-hero-new.png"
    ctaDescription="Start a conversation about supportive Ayurvedic care for MS. We help you connect with centers experienced in complementary neurological support."
  />
);

export default MultipleSclerosisTreatment;
