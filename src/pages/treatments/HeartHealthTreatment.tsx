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
    text: "A continuous stream of warm medicated oil over the forehead calms the nervous system, easing stress-linked blood pressure elevation at its source.",
    icon: Droplet,
  },
  {
    title: "Abhyanga",
    sanskrit: "Full-Body Oil Massage",
    text: "A slow, rhythmic full-body massage improves circulation and calms an overactive nervous system, supporting healthier blood pressure regulation.",
    icon: Activity,
  },
  {
    title: "Virechana",
    sanskrit: "Therapeutic Purgation",
    text: "A supervised, medicated cleansing procedure clears excess Kapha and Ama, supporting healthier cholesterol and lipid balance over time.",
    icon: Leaf,
  },
  {
    title: "Hridya Rasayana",
    sanskrit: "Heart-Nourishing Herbs",
    text: "A tailored regimen of Arjuna, garlic-based formulations, and Punarnava traditionally used to support healthy circulation and cardiovascular function.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Stress & BP Reset Program",
    duration: "14 Days",
    cost: "$1,300 - $2,400 USD",
    focus: "Focuses on Shirodhara, Abhyanga, and dietary correction to calm the nervous system and support healthier blood pressure patterns quickly.",
    image: "/Treatments-images/HeartHealth/Stress and BP Reset Package.jpg",
  },
  {
    name: "21-Day Cardiovascular Wellness Program",
    duration: "21 Days",
    cost: "$2,700 - $4,700 USD",
    focus: "Combines Virechana detoxification with Hridya Rasayana herbs to support healthier cholesterol levels and long-term cardiovascular function.",
    image: "/Treatments-images/HeartHealth/Cardiovascular Wellness Package.jpg",
  },
  {
    name: "28-Day Comprehensive Heart Health Panchakarma",
    duration: "28 - 35+ Days",
    cost: "$3,900 - $6,900+ USD",
    focus: "An intensive Panchakarma program for long-standing hypertension or cardiovascular risk factors, combining detoxification with sustained lifestyle correction.",
    image: "/Treatments-images/HeartHealth/Comprehensive Heart Health Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Bram",
    location: "Ghent, Belgium",
    condition: "Stress-Related Hypertension",
    title: "My Blood Pressure Readings Are Consistently Lower Now.",
    review:
      "I had struggled with borderline high blood pressure for years, closely linked to work stress. The daily Shirodhara sessions calmed me noticeably, and my readings have stayed consistently lower since the program.",
    rating: 5,
    verified: true,
  },
  {
    name: "Karin",
    location: "Basel, Switzerland",
    condition: "Cardiovascular Wellness",
    title: "My Cholesterol Panel Improved At My Next Check-Up.",
    review:
      "I approached this as complementary care alongside my cardiologist's guidance. My cholesterol panel showed genuine improvement at my follow-up appointment, which my doctor was pleased to see.",
    rating: 5,
    verified: true,
  },
  {
    name: "Torsten",
    location: "Leipzig, Germany",
    condition: "Hypertension Management",
    title: "The Calm I Felt Translated Directly To My Numbers.",
    review:
      "My hypertension was closely tied to chronic stress. The combination of Abhyanga and structured routine gave me a genuine sense of calm, and my home blood pressure monitor reflected that consistently.",
    rating: 5,
    verified: true,
  },
  {
    name: "Marika",
    location: "Tallinn, Estonia",
    condition: "Cardiovascular Risk Support",
    title: "A Thoughtful, Well-Supervised Complementary Program.",
    review:
      "The physicians reviewed my full medical history and coordinated their recommendations sensibly around my existing heart medication. The program felt genuinely safe and well-supervised throughout.",
    rating: 5,
    verified: true,
  },
  {
    name: "Emil",
    location: "Aarhus, Denmark",
    condition: "Stress and Blood Pressure",
    title: "My Doctor Noticed The Difference At My Last Visit.",
    review:
      "I had lived with elevated blood pressure for three years. After completing the program alongside my prescribed medication, my doctor noted my readings were the most stable they'd seen in years.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Can this program replace my blood pressure or heart medication?", answer: "No. This program is designed as complementary, supportive care alongside your existing cardiology treatment. Any changes to prescribed medication must only be made gradually and under the supervision of your treating physician." },
  { question: "Why does Ayurveda link stress so closely to heart health?", answer: "Ayurveda considers aggravated Vata and Pitta, often triggered by chronic stress, as key contributors to elevated blood pressure and cardiovascular strain. Calming therapies aim to address this root imbalance." },
  { question: "Is Virechana safe for people with heart conditions?", answer: "Yes, when administered by physicians who carefully review your complete cardiac history and current medications beforehand. The therapy is adapted to your individual health status and supervised throughout." },
  { question: "Can Ayurveda help support healthy cholesterol levels?", answer: "Many patients experience improved lipid panel results alongside their existing treatment, through a combination of detoxification therapies, dietary correction, and supportive herbal formulations like Arjuna." },
  { question: "How soon might I notice a difference in my blood pressure readings?", answer: "Many patients notice a calmer baseline within the first week of daily therapies. More significant, sustained improvements in blood pressure stability typically develop over a full 21 to 28 day program." },
];

const topCenters: TreatmentCenter[] = [
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm, with strong clinical protocols for chronic conditions.",
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
    name: "ITC Grand Bharat",
    city: "Gurugram",
    location: "Gurugram",
    description: "Immerse yourself in the grandeur of Indian heritage at ITC Grand Bharat, a luxurious all-suite retreat nestled amidst the serene Aravalli hills.",
    rating: 4.8,
    reviews: 17000,
    image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/gurugram/itc-grand-bharat",
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
    name: "Athreya Ayurvedic Centre",
    city: "Kerala",
    location: "Kerala",
    description: "Authentic Ayurvedic care with personalized therapies and holistic healing in Kerala.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/athreya-ayurvedic-centre",
  },
];

const HeartHealthTreatment = () => (
  <TreatmentPageTemplate
    slug="heart-health-hypertension-treatment-in-india"
    conditionName="Heart Health and Hypertension"
    pageTitle="Heart Health & Hypertension Treatment in India"
    heroTagline="Supportive Ayurvedic Care for a Calmer Heart and Steadier Blood Pressure"
    heroDescription="Ayurveda supports cardiovascular health by calming the nervous system and clearing the imbalances behind elevated blood pressure — working alongside your existing cardiology care."
    heroRatingText="4.7/5 Patient Satisfaction"
    introTitle="The Ayurvedic View of Heart Health (Hridroga)"
    introImage="/Treatments-images/HeartHealth/Ayurvedic Treatment for Heart Health and Hypertension.jpg"
    introImageAlt="Ayurvedic Heart Health and Hypertension Treatment"
    introParagraphs={[
      <>
        Ayurveda associates cardiovascular strain with aggravated <strong className="text-[#335765]">Vata</strong> and <strong className="text-[#335765]">Pitta</strong> disturbing healthy circulation, combined with excess <strong className="text-[#335765]">Kapha</strong> contributing to blocked channels (Srotorodha).
      </>,
      <>
        This program is offered as <strong className="text-[#335765]">supportive care</strong> alongside your existing cardiology treatment, not a replacement. Chronic stress, poor diet, and an erratic lifestyle aggravate these doshas, straining the cardiovascular system over time. Ayurvedic therapies aim to calm this imbalance, supporting healthier blood pressure and circulation alongside your prescribed medical care.
      </>,
    ]}
    therapiesSubtitle="The program focuses on calming stress-linked Vata-Pitta aggravation and clearing Kapha, supporting healthier circulation alongside your cardiology care."
    therapies={therapies}
    dietIntro="Dietary correction supports healthy circulation and helps reduce the strain on the cardiovascular system."
    dietFavour={[
      "Warm, Light Meals: Favour warm, freshly cooked, lightly spiced foods that are easy to digest and gentle on the system.",
      "Heart-Supportive Foods: Garlic, Arjuna bark tea, and leafy greens are traditionally valued for cardiovascular support.",
      "Low-Sodium Cooking: Reducing salt intake supports healthier blood pressure regulation.",
      "Regular Meal Timing: Consistent meal times support steady digestion and reduce metabolic strain.",
    ]}
    dietAvoid={[
      "Excess Salt and Processed Foods: These are closely linked to elevated blood pressure and should be minimized.",
      "Fried and Heavy Foods: These increase Kapha and can contribute to unhealthy cholesterol levels over time.",
      "Excess Caffeine and Alcohol: Both can aggravate Pitta and Vata, straining the cardiovascular system.",
      "Irregular Meals: Inconsistent eating patterns add unnecessary metabolic and digestive stress.",
    ]}
    lifestyleAdjustments={[
      "Manage Stress Daily: Chronic stress is one of the most significant contributors to elevated blood pressure; daily pranayama helps regulate this.",
      "Stay Gently Active: Regular, moderate exercise like walking supports healthy circulation without overexertion.",
      "Prioritize Sleep: Consistent, adequate sleep supports healthy blood pressure regulation.",
      "Avoid Smoking and Excess Alcohol: Both place significant strain on the cardiovascular system.",
    ]}
    packagesSubtitle="Select a timeline that matches your health goals. Each program includes daily physician consultation, prescribed therapies, medicines, and sattvic diet — always alongside your existing cardiology care."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for cardiovascular and stress-related conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/HeartHealth/Ayurvedic Treatment for Heart Health and Hypertension.jpg"
    ctaDescription="Start a conversation about supportive Ayurvedic care for heart health. We help you connect with centers experienced in complementary cardiovascular support."
  />
);

export default HeartHealthTreatment;
