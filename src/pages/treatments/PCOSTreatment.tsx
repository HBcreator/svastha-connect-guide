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

const topCenters: TreatmentCenter[] = [
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
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm with high-volume clinical care experience.",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/soukya",
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
    name: "HimVeda Heritage Wellness Centre",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala, offering personalized treatments guided by experienced doctors.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/HimVeda/Thumb.jpeg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/himveda",
  },
  {
    name: "Indus Valley Ayurvedic Centre",
    city: "Mysore",
    location: "Mysore",
    description: "Indus Valley Ayurvedic Centre (IVAC) is a luxury Ayurvedic Healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards for personalized programs.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/mysore/indus-valley-ayurvedic-centre",
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
    name: "Amanbagh Heritage Wellness Retreat",
    city: "Alwar",
    location: "Alwar",
    description: "Step into a sanctuary of timeless elegance at Amanbagh, a luxurious retreat surrounded by the rugged beauty of Rajasthan's Aravalli hills, offering a serene wellness haven for deep rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Amanbagh/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/rajasthan/amanbagh-heritage-wellness-retreat",
  },
  {
    name: "Ananda In The Himalayas",
    city: "Uttarakhand",
    location: "Uttarakhand",
    description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat guided by expert physicians and therapists, rooted in Ayurveda, Yoga, and Vedanta.",
    rating: 4.8,
    reviews: 900,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/uttarakhand/ananda-in-the-himalayas",
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

const PCOSTreatment = () => (
  <TreatmentPageTemplate
    slug="pcos-treatment-in-india"
    conditionName="PCOS"
    pageTitle="PCOS Treatment in India"
    heroTagline="A Natural Path to Regular Cycles and Hormonal Balance"
    heroDescription="Ayurveda treats PCOS at its root, clearing the metabolic imbalance behind irregular cycles and restoring natural hormonal balance from within."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Root Cause of PCOS (Artava Dushti)"
    introImage="/Treatments-images/PCOS/Ayurvedic Treatment for PCOS and Hormonal Balance.jpg"
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
    ctaImage="/Treatments-images/PCOS/Ayurvedic Treatment for PCOS and Hormonal Balance.jpg"
    ctaDescription="Start your journey to regular cycles and hormonal balance. We help you connect with the top Ayurvedic centers specialized in women's health."
  />
);

export default PCOSTreatment;
