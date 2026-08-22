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
    text: "A continuous stream of warm medicated oil over the forehead calms Rajas (mental agitation) and Vata, quieting racing thoughts and easing the grip of anxious, restless energy.",
    icon: Droplet,
  },
  {
    title: "Abhyanga",
    sanskrit: "Full-Body Oil Massage",
    text: "A slow, grounding full-body massage with warm nervine oils soothes the nervous system, lifts heavy, low-energy Tamas, and restores a sense of physical safety and calm.",
    icon: Activity,
  },
  {
    title: "Nasya",
    sanskrit: "Medhya Nasal Therapy",
    text: "Medicated Brahmi and Bacopa oils administered through the nostrils directly nourish the mind's channels, easing mental fog, low mood, and persistent worry at their root.",
    icon: Leaf,
  },
  {
    title: "Satvavajaya Chikitsa",
    sanskrit: "Mind Counseling Therapy",
    text: "Structured guidance sessions with the Vaidya, combined with Medhya Rasayana herbs like Brahmi and Ashwagandha, gently rebuild emotional resilience and mental clarity (Sattva).",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Emotional Balance Program",
    duration: "14 Days",
    cost: "$1,300 - $2,400 USD",
    focus: "Focuses on Shirodhara, Abhyanga, and a structured daily routine to calm acute anxiety and lift the heaviness of low mood quickly and safely.",
    image: "/Treatments-images/AnxietyDepression/Emotional Balance Package.jpg",
  },
  {
    name: "21-Day Mind-Body Restoration",
    duration: "21 Days",
    cost: "$2,600 - $4,600 USD",
    focus: "Combines Nasya, Medhya Rasayana herbs, and daily counseling sessions to rebuild the nervous system's resilience and restore lasting emotional stability.",
    image: "/Treatments-images/AnxietyDepression/Mind Body Restoration Package.jpg",
  },
  {
    name: "28-Day Deep Mental Wellness Panchakarma",
    duration: "28 - 35+ Days",
    cost: "$3,800 - $6,800+ USD",
    focus: "An intensive Panchakarma program for chronic anxiety or persistent low mood. Combines detoxification with deep Rasayana nourishment for long-term mental resilience.",
    image: "/Treatments-images/AnxietyDepression/Deep Mental Wellness Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Sophie",
    location: "Amsterdam, Netherlands",
    condition: "Generalized Anxiety",
    title: "My Racing Mind Finally Went Quiet.",
    review:
      "I had lived with constant background anxiety for years. The daily Shirodhara sessions were transformative — by the second week my mind felt calm for the first time in a long time, not just distracted.",
    rating: 5,
    verified: true,
  },
  {
    name: "Tobias",
    location: "Berlin, Germany",
    condition: "Depressive Low Mood",
    title: "I Felt Genuinely Lighter, Not Just Numb.",
    review:
      "Antidepressants had numbed me without really helping. The Ayurvedic approach addressed the heaviness directly through Abhyanga and Medhya herbs. I felt genuinely lighter and more present, not sedated.",
    rating: 5,
    verified: true,
  },
  {
    name: "Elin",
    location: "Stockholm, Sweden",
    condition: "Work-Related Anxiety",
    title: "The Counseling Sessions Made The Real Difference.",
    review:
      "The daily Satvavajaya sessions with my Vaidya gave me tools I still use today. Combined with the calming therapies, my constant work anxiety became genuinely manageable within three weeks.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ruben",
    location: "Rotterdam, Netherlands",
    condition: "Chronic Low Mood",
    title: "The Root Cause Was Finally Addressed.",
    review:
      "Years of therapy had helped me cope but never really lift the fog. The Panchakarma program addressed my Kapha-linked low mood directly. My energy and outlook have genuinely shifted since.",
    rating: 5,
    verified: true,
  },
  {
    name: "Klara",
    location: "Prague, Czech Republic",
    condition: "Anxiety and Sleep Disruption",
    title: "Calmer Days And Finally, Restful Nights.",
    review:
      "My anxiety was worst at night, keeping me awake for hours. The combination of Nasya and nervine herbs calmed my evenings completely. I now sleep peacefully and feel steadier through the day too.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "How does Ayurveda understand anxiety and depression?", answer: "Ayurveda frames mental wellbeing through the balance of Sattva (clarity), Rajas (restlessness), and Tamas (heaviness). Anxiety reflects excess Rajas aggravating Vata, while depression reflects excess Tamas aggravating Kapha. Treatment restores Sattva by calming both extremes." },
  { question: "Can this program replace my prescribed medication?", answer: "No. This program is designed to work alongside your existing care, not replace it. Any changes to prescribed medication should always be made gradually and only under the supervision of your treating physician." },
  { question: "Is Shirodhara really effective for anxiety?", answer: "Yes, the continuous warm oil stream has a measurable calming effect on the nervous system and is one of Ayurveda's most established therapies for anxious, racing thoughts." },
  { question: "How soon will I notice a change in my mood or anxiety levels?", answer: "Many patients notice a calmer baseline within the first week of daily therapies. Deeper, more lasting emotional stability typically develops over a full 21 to 28 day program." },
  { question: "Are the herbal formulations safe to take long-term?", answer: "Yes, herbs like Brahmi, Ashwagandha, and Jatamansi have centuries of safe use as nervine tonics. Your physician tailors the formulation and duration to your specific case and any existing medication." },
];

const topCenters: TreatmentCenter[] = [
  {
    name: "HimVeda Heritage Wellness Centre",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala, offering personalized treatments guided by experienced Ayurvedic doctors.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/HimVeda/Thumb.jpeg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/himveda",
  },
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/soukya",
  },
  {
    name: "Ananda In The Himalayas",
    city: "Uttarakhand",
    location: "Uttarakhand",
    description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat nestled in the serene Himalayan foothills. Rooted in Ayurveda, Yoga, and Vedanta, Ananda offers highly personalized wellness programs guided by expert physicians.",
    rating: 4.8,
    reviews: 900,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/uttarakhand/ananda-in-the-himalayas",
  },
  {
    name: "Ashiyana Yoga Retreat",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in the peaceful essence of yoga and holistic wellness at Ashiyana Yoga Retreat, set amidst lush tropical gardens along the serene Mandrem Beach, offering a unique blend of traditional yoga, meditation, and healing therapies.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Ashiyana Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/ashiyana-yoga-retreat",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "Immerse yourself in the authentic spirit of Ayurveda at AyurvedaGram Heritage Wellness Centre, a globally recognized destination for traditional Ayurvedic Healing, offering holistic therapies guided by experienced Vaidyas.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/AyurvedaGram/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/ayurvedagram",
  },
  {
    name: "Sandhya Hot Spring Health Care",
    city: "Manikaran",
    location: "Manikaran",
    description: "Immerse yourself in the healing power of natural hot springs at Sandhya Hot Spring Health Care, a serene wellness retreat known for its therapeutic mineral-rich waters, blending traditional healing with geothermal therapy.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/himachal/sandhya-hot-spring-health-care",
  },
  {
    name: "Indus Valley Ayurvedic Centre",
    city: "Mysore",
    location: "Mysore",
    description: "Indus Valley Ayurvedic Centre (IVAC) is a luxury Ayurvedic Healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards through personalized programs for body, mind, and spirit.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/mysore/indus-valley-ayurvedic-centre",
  },
  {
    name: "Amanbagh Heritage Wellness Retreat",
    city: "Alwar",
    location: "Alwar",
    description: "Step into a sanctuary of timeless elegance at Amanbagh, a luxurious retreat inspired by Mughal architecture and surrounded by the rugged beauty of Rajasthan's Aravalli hills, offering a serene wellness haven for deep rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Amanbagh/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/rajasthan/amanbagh-heritage-wellness-retreat",
  },
  {
    name: "Ayurmana",
    city: "Kerala",
    location: "Kerala",
    description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayurmana center/top center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayurmana",
  },
  {
    name: "ITC Grand Bharat",
    city: "Gurugram",
    location: "Gurugram",
    description: "Immerse yourself in the grandeur of Indian heritage at ITC Grand Bharat, a luxurious all-suite retreat nestled amidst the serene Aravalli hills, offering a deeply rejuvenating escape.",
    rating: 4.8,
    reviews: 17000,
    image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/gurugram/itc-grand-bharat",
  },
];

const AnxietyDepressionTreatment = () => (
  <TreatmentPageTemplate
    slug="anxiety-and-depression-treatment-in-india"
    conditionName="Anxiety and Depression"
    pageTitle="Anxiety & Depression Treatment in India"
    heroTagline="A Natural Path Back to Calm, Clarity, and Emotional Balance"
    heroDescription="Ayurveda treats anxiety and depression at their root, calming an overactive mind and lifting emotional heaviness — restoring balance to both body and mind."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of Anxiety & Depression"
    introImage="/Treatments-images/AnxietyDepression/Ayurvedic Treatment for Anxiety and Depression.jpg"
    introImageAlt="Ayurvedic Anxiety and Depression Treatment"
    introParagraphs={[
      <>
        In Ayurveda, mental wellbeing depends on the balance of three qualities of mind: <strong className="text-[#335765]">Sattva</strong> (clarity), <strong className="text-[#335765]">Rajas</strong> (restlessness), and <strong className="text-[#335765]">Tamas</strong> (heaviness or inertia).
      </>,
      <>
        Anxiety arises when excess Rajas aggravates Vata, creating restless, racing thoughts and physical unease. Depression arises when excess Tamas aggravates Kapha, creating heaviness, low energy, and a dulled sense of motivation. Ayurveda restores Sattva by calming both extremes, addressing the mind and nervous system together rather than treating symptoms in isolation.
      </>,
    ]}
    therapiesSubtitle="The treatment focuses on calming Rajas and lifting Tamas, restoring Sattva — mental clarity, emotional steadiness, and calm."
    therapies={therapies}
    dietIntro="Dietary correction supports a calm nervous system and helps prevent the extremes of restlessness and heaviness that disturb the mind."
    dietFavour={[
      "Warm, Grounding Meals: Favour warm, freshly cooked, mildly spiced foods like khichdi and soups that are easy to digest and calming to Vata.",
      "Healthy Fats: Ghee and sesame oil in daily cooking nourish the nervous system and support mental stability.",
      "Herbal Teas: Brahmi, tulsi, and chamomile tea calm the mind and support emotional steadiness through the day.",
      "Regular Meal Timing: Eating at consistent times supports a stable mood and a calmer nervous system.",
    ]}
    dietAvoid={[
      "Excess Caffeine: Limit coffee and energy drinks, which can worsen anxious, racing thoughts.",
      "Heavy, Processed Foods: Fried and processed foods increase Tamas, worsening low energy and heaviness.",
      "Skipping Meals: Irregular eating destabilizes blood sugar and can worsen anxiety symptoms.",
      "Excess Alcohol: Alcohol disrupts both Rajas and Tamas balance and can worsen sleep and mood over time.",
    ]}
    lifestyleAdjustments={[
      "Practice Daily Pranayama: Gentle breathing exercises like Nadi Shodhana calm an overactive nervous system quickly and safely.",
      "Get Morning Sunlight: Ten to fifteen minutes of natural morning light supports mood-regulating hormones and a stable body clock.",
      "Keep a Consistent Routine: A predictable daily schedule is deeply calming to an anxious or depressed mind.",
      "Stay Gently Active: Regular, moderate movement like walking lifts Tamas-linked heaviness without overstimulating Vata.",
    ]}
    packagesSubtitle="Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for mental and emotional wellbeing."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/AnxietyDepression/Ayurvedic Treatment for Anxiety and Depression.jpg"
    ctaDescription="Start your journey to calm, clarity, and emotional balance. We help you connect with the top Ayurvedic centers specialized in mental wellness."
  />
);

export default AnxietyDepressionTreatment;
