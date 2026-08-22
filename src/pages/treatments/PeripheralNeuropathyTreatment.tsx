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
    title: "Pizhichil",
    sanskrit: "Warm Oil Bath Immersion",
    text: "A continuous, rhythmic pouring of warm medicated oil over the affected limbs deeply nourishes peripheral nerve tissue and eases numbness and tingling.",
    icon: Droplet,
  },
  {
    title: "Basti",
    sanskrit: "Medicated Enema Therapy",
    text: "The primary Panchakarma therapy for Vata disorders, a structured series of medicated enemas addresses the root Vata imbalance behind nerve dysfunction.",
    icon: Leaf,
  },
  {
    title: "Padabhyanga",
    sanskrit: "Focused Foot & Hand Massage",
    text: "A targeted warm-oil massage of the hands and feet, where peripheral neuropathy symptoms are often most pronounced, directly supports local circulation.",
    icon: Activity,
  },
  {
    title: "Majja Rasayana",
    sanskrit: "Nerve Tissue Nourishment",
    text: "A tailored regimen of Ashwagandha, Bala, and Guduchi supports the Majja dhatu (nerve tissue), helping to maintain healthy nerve function over time.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Nerve Relief Program",
    duration: "14 Days",
    cost: "$1,300 - $2,400 USD",
    focus: "Focuses on Padabhyanga and gentle oil therapies to ease numbness, tingling, and discomfort in the hands and feet quickly and safely.",
    image: "/Treatments-images/PeripheralNeuropathy/Nerve Relief Package.jpg",
  },
  {
    name: "21-Day Majja Nourishment Program",
    duration: "21 Days",
    cost: "$2,700 - $4,700 USD",
    focus: "Combines Basti with daily Pizhichil oil bath immersion to nourish nerve tissue deeply and support longer-term symptom management.",
    image: "/Treatments-images/PeripheralNeuropathy/Majja Nourishment Package.jpg",
  },
  {
    name: "28-Day Comprehensive Neuropathy Panchakarma",
    duration: "28 - 35+ Days",
    cost: "$3,900 - $6,900+ USD",
    focus: "An intensive Panchakarma program for long-standing or diabetes-linked peripheral neuropathy, combining detoxification with deep Rasayana nourishment.",
    image: "/Treatments-images/PeripheralNeuropathy/Comprehensive Neuropathy Panchakarma Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Sanna",
    location: "Turku, Finland",
    condition: "Diabetic Peripheral Neuropathy",
    title: "The Numbness In My Feet Has Genuinely Reduced.",
    review:
      "Diabetic neuropathy had left my feet numb and uncomfortable for years. The daily Pizhichil oil bath combined with Padabhyanga noticeably improved sensation and comfort, alongside my ongoing diabetes management.",
    rating: 5,
    verified: true,
  },
  {
    name: "Piet",
    location: "Antwerp, Belgium",
    condition: "Chemotherapy-Induced Neuropathy",
    title: "My Tingling And Discomfort Are Far More Manageable.",
    review:
      "Nerve damage from past chemotherapy had left persistent tingling in my hands. The Basti protocol and nerve-nourishing herbs made a genuine difference to my daily comfort over the three-week program.",
    rating: 5,
    verified: true,
  },
  {
    name: "Greta",
    location: "Vilnius, Lithuania",
    condition: "Idiopathic Peripheral Neuropathy",
    title: "My Doctors Never Found A Clear Cause, But This Helped.",
    review:
      "My neuropathy had no clear diagnosis despite extensive testing. The Ayurvedic approach focused on nourishing my nerve tissue directly, and my symptoms have genuinely improved since completing the program.",
    rating: 5,
    verified: true,
  },
  {
    name: "Konstantin",
    location: "Sofia, Bulgaria",
    condition: "Peripheral Neuropathy with Balance Issues",
    title: "My Balance And Foot Sensation Both Improved.",
    review:
      "Numbness in my feet had started affecting my balance and confidence walking. The comprehensive program improved both my sensation and my stability noticeably over the month.",
    rating: 5,
    verified: true,
  },
  {
    name: "Liene",
    location: "Riga, Latvia",
    condition: "Peripheral Neuropathy",
    title: "I Can Feel My Hands Properly Again.",
    review:
      "Fine motor tasks like buttoning a shirt had become difficult due to numbness in my fingers. After the full Panchakarma program, my hand sensation and dexterity have genuinely improved.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Why does Ayurveda associate peripheral neuropathy with Vata?", answer: "Ayurveda links peripheral nerve function to the Majja dhatu, governed by Vata dosha. When Vata becomes aggravated, often from chronic illness, poor circulation, or nutrient deficiency, it can disrupt nerve signaling, causing numbness and tingling." },
  { question: "Can this program help with diabetes-related neuropathy?", answer: "Yes, many patients with diabetes-related neuropathy use this program as complementary support alongside their diabetes management plan. It is important to continue managing your underlying blood sugar levels as advised by your physician." },
  { question: "Is Pizhichil safe for neuropathy caused by chemotherapy?", answer: "Yes, when administered by physicians who review your complete oncology history beforehand. The therapy is adapted to your individual sensitivity and current health status throughout." },
  { question: "Can Ayurveda reverse nerve damage?", answer: "This program focuses on nourishing nerve tissue and supporting the body's natural regenerative capacity where possible. The extent of improvement varies depending on the underlying cause and severity of the neuropathy." },
  { question: "How soon might I notice a difference in sensation?", answer: "Some patients notice reduced tingling and improved comfort within the first two weeks of daily therapies, though nerve tissue recovery generally develops gradually over a full 21 to 28 day program." },
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
    description: "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/HimVeda/Thumb.jpeg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/himveda",
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

const PeripheralNeuropathyTreatment = () => (
  <TreatmentPageTemplate
    slug="peripheral-neuropathy-treatment-in-india"
    conditionName="Peripheral Neuropathy"
    pageTitle="Peripheral Neuropathy Treatment in India"
    heroTagline="A Natural Path to Restoring Feeling and Comfort"
    heroDescription="Ayurveda treats peripheral neuropathy by calming aggravated Vata and directly nourishing nerve tissue — easing numbness, tingling, and discomfort in the hands and feet."
    heroRatingText="4.7/5 Patient Satisfaction"
    introTitle="The Ayurvedic View of Nerve Health (Majja Dhatu)"
    introImage="/Treatments-images/PeripheralNeuropathy/Ayurvedic Treatment for Peripheral Neuropathy.jpg"
    introImageAlt="Ayurvedic Peripheral Neuropathy Treatment"
    introParagraphs={[
      <>
        Ayurveda associates peripheral nerve function with the <strong className="text-[#335765]">Majja dhatu</strong> (nerve tissue), governed by <strong className="text-[#335765]">Vata dosha</strong> — the subtle energy responsible for all sensation and movement in the body.
      </>,
      <>
        Diabetes, chronic illness, poor circulation, or nutrient deficiency can aggravate Vata in the peripheral channels, disrupting nerve signaling and causing numbness, tingling, or discomfort, most often in the hands and feet. Ayurveda addresses this by calming aggravated Vata and directly nourishing nerve tissue, supporting improved sensation and comfort over time.
      </>,
    ]}
    therapiesSubtitle="The treatment focuses on calming Vata and nourishing the Majja dhatu, supporting improved sensation and comfort in the hands and feet."
    therapies={therapies}
    dietIntro="Dietary correction supports Vata balance and nerve tissue nourishment."
    dietFavour={[
      "Warm, Unctuous Foods: Favour warm, ghee-rich, well-cooked meals that are grounding and nourishing.",
      "Nerve-Nourishing Foods: Include warm milk, nuts, and dates, traditionally considered supportive for Majja dhatu.",
      "B-Vitamin Rich Foods: Whole grains and leafy greens support healthy nerve function.",
      "Regular Meal Times: A consistent eating schedule supports steady energy and digestion.",
    ]}
    dietAvoid={[
      "Cold and Raw Foods: These aggravate Vata and can worsen numbness and circulation.",
      "Excess Sugar: Especially important for diabetes-linked neuropathy, as elevated blood sugar can worsen nerve symptoms.",
      "Processed and Fried Foods: These are difficult to digest and can increase inflammation.",
      "Excess Alcohol: Alcohol can worsen nerve symptoms and should be minimized.",
    ]}
    lifestyleAdjustments={[
      "Keep Extremities Warm: Warmth supports circulation in the hands and feet and calms aggravated Vata.",
      "Gentle, Regular Movement: Light activity supports circulation without overexertion.",
      "Protect Sensitive Areas: Take care to avoid injury in areas with reduced sensation.",
      "Manage Underlying Conditions: Continue managing diabetes or other underlying causes as advised by your physician.",
    ]}
    packagesSubtitle="Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for nerve and circulation-related conditions."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/PeripheralNeuropathy/Ayurvedic Treatment for Peripheral Neuropathy.jpg"
    ctaDescription="Start your journey to restoring feeling and comfort. We help you connect with the top Ayurvedic centers specialized in nerve health care."
  />
);

export default PeripheralNeuropathyTreatment;
