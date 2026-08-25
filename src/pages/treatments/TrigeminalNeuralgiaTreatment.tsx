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
    title: "Nasya",
    sanskrit: "Nasal Therapy",
    text: "Medicated oils administered through the nostrils directly cleanse and calm the head's channels, addressing aggravated Vata at the root of facial nerve pain.",
    icon: Leaf,
  },
  {
    title: "Shirodhara",
    sanskrit: "Warm Oil Forehead Stream",
    text: "A continuous stream of warm medicated oil over the forehead calms an overstimulated nervous system, easing the intensity of nerve pain episodes.",
    icon: Droplet,
  },
  {
    title: "Mukha Abhyanga",
    sanskrit: "Gentle Facial Oil Massage",
    text: "A careful, gentle warm-oil massage around the face and jaw improves local circulation and soothes the aggravated Vata affecting the facial nerve.",
    icon: Activity,
  },
  {
    title: "Vata-Calming Herbs",
    sanskrit: "Nerve-Soothing Formulations",
    text: "A tailored regimen of Ashwagandha, Bala, and Guduchi calms aggravated Vata and supports the long-term health of the affected nerve pathway.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Facial Nerve Relief Program",
    duration: "14 Days",
    cost: "$1,300 - $2,400 USD",
    focus: "Focuses on Nasya and gentle facial therapies to calm acute nerve pain episodes and provide noticeable relief quickly.",
    image: "/Treatments-images/TrigeminalNeuralgia/Facial Nerve Relief Package.jpg",
  },
  {
    name: "21-Day Vata Pacification Program",
    duration: "21 Days",
    cost: "$2,700 - $4,700 USD",
    focus: "Combines Shirodhara and Mukha Abhyanga with nerve-soothing herbs to address the deeper Vata imbalance behind recurring nerve pain episodes.",
    image: "/Treatments-images/TrigeminalNeuralgia/Vata Pacification Package.jpg",
  },
  {
    name: "28-Day Comprehensive Neuralgia Panchakarma",
    duration: "28 - 35+ Days",
    cost: "$3,900 - $6,900+ USD",
    focus: "An intensive Panchakarma program for chronic or severe trigeminal neuralgia, combining detoxification with deep Rasayana nourishment for lasting relief.",
    image: "/Treatments-images/TrigeminalNeuralgia/Comprehensive Neuralgia Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Margit",
    location: "Vienna, Austria",
    condition: "Trigeminal Neuralgia",
    title: "My Pain Episodes Are Far Less Frequent And Severe.",
    review:
      "Sharp, unpredictable facial pain had disrupted my life for over three years. The daily Nasya and Shirodhara sessions noticeably reduced how often my episodes occurred, and their intensity when they did happen.",
    rating: 5,
    verified: true,
  },
  {
    name: "Jonas",
    location: "Salzburg, Austria",
    condition: "Trigeminal Neuralgia with Jaw Tension",
    title: "The Facial Massage Addressed What Medication Alone Couldn't.",
    review:
      "My neurologist's medication helped somewhat, but the underlying jaw and facial tension remained. The Mukha Abhyanga specifically addressed this, and my overall pain levels have genuinely reduced since.",
    rating: 5,
    verified: true,
  },
  {
    name: "Elsbeth",
    location: "Bern, Switzerland",
    condition: "Chronic Trigeminal Neuralgia",
    title: "This Complemented My Neurology Care Perfectly.",
    review:
      "I approached this as complementary support alongside my neurologist's treatment plan, and coordinated closely with both teams throughout. My pain has been noticeably calmer since completing the full program.",
    rating: 5,
    verified: true,
  },
  {
    name: "Rasmus",
    location: "Aalborg, Denmark",
    condition: "Trigeminal Neuralgia",
    title: "I Can Eat And Speak Without Fear Of Triggering Pain.",
    review:
      "Simple actions like chewing or speaking used to risk triggering sharp pain. After the full three-week program, my sensitivity to these everyday triggers has reduced significantly.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ottilie",
    location: "Munich, Germany",
    condition: "Trigeminal Neuralgia",
    title: "The Comprehensive Program Gave Me Lasting Relief.",
    review:
      "After years of unpredictable flare-ups, I wanted a deeper, more thorough approach. The full Panchakarma program has given me the most lasting relief I've experienced since my diagnosis.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "How does Ayurveda understand trigeminal neuralgia?", answer: "Ayurveda attributes trigeminal neuralgia to aggravated Vata dosha affecting the facial nerve pathway (Shiro-gata Vata). Treatment focuses on calming this aggravation and soothing the affected nerve tissue directly." },
  { question: "Can this program replace my neurologist's medication?", answer: "No. This program is designed as complementary, supportive care alongside your existing neurology treatment. Any changes to prescribed medication must only be made gradually and under the supervision of your treating physician." },
  { question: "Is facial massage safe during a trigeminal neuralgia flare-up?", answer: "Therapies are carefully adapted to your current pain level and sensitivity. Your physician will assess whether direct facial therapy is appropriate at any given time, or adjust the approach accordingly." },
  { question: "What triggers should I avoid during treatment?", answer: "Common triggers include cold wind on the face, very cold or hot foods, and excessive stress. Your physician will provide guidance tailored to your specific triggers during the program." },
  { question: "How soon might I notice fewer or less severe pain episodes?", answer: "Many patients notice a calmer baseline within the first week of daily therapies. More significant, lasting reduction in episode frequency and severity typically develops over a full 21 to 28 day program." },
];

const topCenters: TreatmentCenter[] = comboClinicalPanchakarma;

const TrigeminalNeuralgiaTreatment = () => (
  <TreatmentPageTemplate
    slug="trigeminal-neuralgia-treatment-in-india"
    conditionName="Trigeminal Neuralgia"
    pageTitle="Trigeminal Neuralgia Treatment in India"
    heroTagline="A Natural Path to Calmer, More Comfortable Days"
    heroDescription="Ayurveda treats trigeminal neuralgia by calming the aggravated Vata behind sharp facial nerve pain, working alongside your neurology care for lasting comfort."
    heroRatingText="4.7/5 Patient Satisfaction"
    introTitle="The Ayurvedic View of Facial Nerve Pain"
    introImage="/Treatments-images/TrigeminalNeuralgia/trigeminal-hero-new.png"
    introImageAlt="Ayurvedic Trigeminal Neuralgia Treatment"
    introParagraphs={[
      <>
        Ayurveda associates the sharp, shooting pain of trigeminal neuralgia with severely aggravated <strong className="text-[#335765]">Vata dosha</strong> affecting the facial nerve pathway, sometimes described as <strong className="text-[#335765]">Shiro-gata Vata</strong> (Vata localized in the head).
      </>,
      <>
        This program is offered as <strong className="text-[#335765]">supportive care</strong> alongside your existing neurology treatment. Cold exposure, stress, and an overstimulated nervous system can intensify this Vata aggravation, triggering sharp pain episodes. Ayurvedic therapies aim to calm this aggravation directly, easing pain intensity and frequency alongside your prescribed medical care.
      </>,
    ]}
    therapiesSubtitle="The program focuses on calming aggravated Vata in the facial nerve pathway, supporting reduced pain intensity and frequency alongside your neurology care."
    therapies={therapies}
    dietIntro="Dietary correction supports Vata balance and helps reduce sensitivity to common pain triggers."
    dietFavour={[
      "Warm, Soft Foods: Favour warm, soft, easily chewable foods that minimize strain on the jaw and face.",
      "Grounding Meals: Warm, well-cooked, mildly spiced foods help calm aggravated Vata.",
      "Herbal Teas: Ashwagandha and chamomile tea support a calm nervous system.",
      "Regular Meal Timing: Consistent meal times support steady nervous system regulation.",
    ]}
    dietAvoid={[
      "Very Cold or Very Hot Foods: Extreme temperatures can trigger or worsen nerve pain episodes.",
      "Hard or Chewy Foods: These can strain the jaw and trigger pain in sensitive individuals.",
      "Excess Caffeine: Stimulants can increase Vata's erratic quality and nervous system sensitivity.",
      "Spicy or Acidic Foods: These can be a trigger for some patients and should be introduced cautiously.",
    ]}
    lifestyleAdjustments={[
      "Protect the Face from Cold Wind: Cold exposure to the face is a common trigger and should be minimized.",
      "Manage Stress Actively: Stress is closely linked to trigeminal neuralgia flare-ups; daily pranayama helps regulate this.",
      "Gentle Facial Care: Avoid vigorous touching or rubbing of trigger areas during flare-ups.",
      "Maintain a Predictable Routine: A stable daily schedule is calming to Vata and reduces overall nervous system sensitivity.",
    ]}
    packagesSubtitle="Select a timeline that matches your care goals. Each program includes daily physician consultation, prescribed therapies, medicines, and sattvic diet — always alongside your existing neurology care."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats experienced in supportive care for chronic facial nerve pain."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/TrigeminalNeuralgia/trigeminal-hero-new.png"
    ctaDescription="Start a conversation about supportive Ayurvedic care for facial nerve pain. We help you connect with centers experienced in complementary neurological support."
  />
);

export default TrigeminalNeuralgiaTreatment;
