import TreatmentPageTemplate, {
  type TreatmentTherapy,
  type TreatmentPackage,
  type TreatmentReview,
  type TreatmentFaq,
  type TreatmentCenter,
} from "@/components/TreatmentPageTemplate";
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
      "I had unpredictable vertigo episodes for over two years that left me anxious about daily activities. The Shirodhara and Nasya combination noticeably reduced how often these episodes occurred.",
    rating: 5,
    verified: true,
  },
  {
    name: "Frederik",
    location: "Odense, Denmark",
    condition: "Chronic Dizziness",
    title: "I Finally Feel Steady On My Feet Again.",
    review:
      "Chronic dizziness had made me hesitant to drive or exercise for months. The Greeva Abhyanga and balancing herbs restored a genuine sense of stability I had not felt in a long time.",
    rating: 5,
    verified: true,
  },
  {
    name: "Iben",
    location: "Aalborg, Denmark",
    condition: "Vertigo with Neck Tension",
    title: "Treating My Neck Tension Solved The Root Problem.",
    review:
      "My physician identified my neck tension as a contributing factor to my vertigo. The focused massage therapy addressed this directly, and my dizzy spells have reduced dramatically since.",
    rating: 5,
    verified: true,
  },
  {
    name: "Casper",
    location: "Aarhus, Denmark",
    condition: "Stress-Related Vertigo",
    title: "Calming My Nervous System Calmed My Vertigo Too.",
    review:
      "My vertigo always worsened during stressful periods at work. The full three-week program addressed both my stress and my balance together, and I've felt remarkably steadier since returning.",
    rating: 5,
    verified: true,
  },
  {
    name: "Solveig",
    location: "Bergen, Norway",
    condition: "Recurrent Vertigo",
    title: "I Can Finally Trust My Balance Again.",
    review:
      "Years of unpredictable vertigo had eroded my confidence in everyday movement. The comprehensive Panchakarma program has given me lasting stability, and I finally trust my body's balance again.",
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

const topCenters: TreatmentCenter[] = [
  {
    name: "HimVeda Heritage Wellness Centre",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/HimVeda/Thumb.jpeg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/himveda",
  },
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm.",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/soukya",
  },
  {
    name: "Ananda In The Himalayas",
    city: "Uttarakhand",
    location: "Uttarakhand",
    description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat rooted in Ayurveda, Yoga, and Vedanta, guided by expert physicians.",
    rating: 4.8,
    reviews: 900,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/uttarakhand/ananda-in-the-himalayas",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "Immerse yourself in the authentic spirit of Ayurveda at AyurvedaGram Heritage Wellness Centre, offering holistic therapies guided by experienced Vaidyas within a serene heritage village.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/ayurvedagram",
  },
  {
    name: "Indus Valley Ayurvedic Centre",
    city: "Mysore",
    location: "Mysore",
    description: "Indus Valley Ayurvedic Centre (IVAC) is a luxury Ayurvedic Healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/mysore/indus-valley-ayurvedic-centre",
  },
  {
    name: "Sandhya Hot Spring Health Care",
    city: "Manikaran",
    location: "Manikaran",
    description: "Immerse yourself in the healing power of natural hot springs at Sandhya Hot Spring Health Care, blending traditional healing practices with geothermal therapy.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/himachal/sandhya-hot-spring-health-care",
  },
  {
    name: "Amanbagh Heritage Wellness Retreat",
    city: "Alwar",
    location: "Alwar",
    description: "Step into a sanctuary of timeless elegance at Amanbagh, a luxurious retreat surrounded by the rugged beauty of Rajasthan's Aravalli hills, offering deep rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Amanbagh/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/rajasthan/amanbagh-heritage-wellness-retreat",
  },
  {
    name: "Athreya Ayurvedic Centre",
    city: "Kerala",
    location: "Kerala",
    description: "Authentic Ayurvedic care with personalized therapies and holistic healing in Kerala.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/athreya-ayurvedic-centre",
  },
  {
    name: "Ashiyana Yoga Retreat",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in the peaceful essence of yoga and holistic wellness at Ashiyana Yoga Retreat, set amidst lush tropical gardens along the serene Mandrem Beach.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Ashiyana Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/ashiyana-yoga-retreat",
  },
  {
    name: "ITC Grand Bharat",
    city: "Gurugram",
    location: "Gurugram",
    description: "Immerse yourself in the grandeur of Indian heritage at ITC Grand Bharat, a luxurious all-suite retreat nestled amidst the serene Aravalli hills.",
    rating: 4.8,
    reviews: 17000,
    image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/gurugram/itc-grand-bharat",
  },
];

const VertigoTreatment = () => (
  <TreatmentPageTemplate
    slug="vertigo-treatment-in-india"
    conditionName="Vertigo"
    pageTitle="Vertigo Treatment in India"
    heroTagline="A Natural Path Back to Steady, Confident Balance"
    heroDescription="Ayurveda treats vertigo at its root, calming the Vata-Pitta imbalance behind disorienting dizziness and restoring the body's natural sense of equilibrium."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of Vertigo (Bhrama)"
    introImage="/Treatments-images/Vertigo/Ayurvedic Treatment for Vertigo.jpg"
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
    ctaImage="/Treatments-images/Vertigo/Ayurvedic Treatment for Vertigo.jpg"
    ctaDescription="Start your journey back to steady, confident balance. We help you connect with the top Ayurvedic centers specialized in neurological and balance care."
  />
);

export default VertigoTreatment;
