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
    title: "Abhyanga",
    sanskrit: "Targeted Oil Massage",
    text: "A focused warm oil massage around the injury site improves local circulation, eases stiffness, and calms the aggravated Vata that impairs healing.",
    icon: Activity,
  },
  {
    title: "Elakizhi",
    sanskrit: "Herbal Poultice Massage",
    text: "Warm poultices of healing herbs, pressed rhythmically over the injured area, reduce inflammation and support faster tissue recovery.",
    icon: Leaf,
  },
  {
    title: "Basti",
    sanskrit: "Medicated Enema Therapy",
    text: "For chronic joint or ligament injuries, a tailored Basti protocol addresses the underlying Vata imbalance that can slow long-term recovery.",
    icon: Droplet,
  },
  {
    title: "Mamsa-Asthi Rasayana",
    sanskrit: "Tissue Nourishment Herbs",
    text: "A regimen of Ashwagandha, Bala, and Guggulu supports muscle and bone tissue repair, complementing your physiotherapy program.",
    icon: Flame,
  },
];

const packages: TreatmentPackage[] = [
  {
    name: "14-Day Acute Injury Recovery Program",
    duration: "14 Days",
    cost: "$1,300 - $2,300 USD",
    focus: "Focuses on Abhyanga and Elakizhi to reduce inflammation and support the initial healing phase following an acute sports injury.",
    image: "/Treatments-images/SportsInjury/Acute Injury Recovery Package.jpg",
  },
  {
    name: "21-Day Musculoskeletal Rehabilitation",
    duration: "21 Days",
    cost: "$2,600 - $4,600 USD",
    focus: "Combines targeted therapies with tissue-nourishing herbs to support strength rebuilding and mobility during your rehabilitation phase.",
    image: "/Treatments-images/SportsInjury/Musculoskeletal Rehabilitation Package.jpg",
  },
  {
    name: "28-Day Complete Sports Recovery Program",
    duration: "28 - 35+ Days",
    cost: "$3,800 - $6,800+ USD",
    focus: "An intensive program for chronic or recurring sports injuries, combining Basti, deep tissue therapies, and structured rehabilitation support.",
    image: "/Treatments-images/SportsInjury/Complete Sports Recovery Package.jpg",
  },
];

const reviews: TreatmentReview[] = [
  {
    name: "Cian",
    location: "Galway, Ireland",
    condition: "Recurring Hamstring Injury",
    title: "My Recovery Was Faster Than My Physio Expected.",
    review:
      "A recurring hamstring injury had sidelined me for months. The daily Elakizhi poultice massage combined with my physiotherapy accelerated my recovery noticeably — my physio was genuinely surprised at my progress.",
    rating: 5,
    verified: true,
  },
  {
    name: "Saga",
    location: "Gothenburg, Sweden",
    condition: "Chronic Knee Ligament Strain",
    title: "My Knee Finally Feels Stable Again.",
    review:
      "A chronic ligament strain had left my knee unstable for over a year. The targeted Abhyanga and Basti protocol addressed the underlying stiffness that standard physiotherapy alone hadn't fully resolved.",
    rating: 5,
    verified: true,
  },
  {
    name: "Bastian",
    location: "Nuremberg, Germany",
    condition: "Shoulder Injury Recovery",
    title: "I Returned To Training Weeks Ahead Of Schedule.",
    review:
      "My shoulder injury recovery had stalled with conventional treatment alone. The tissue-nourishing herbs and targeted therapies gave my recovery a genuine push, and I was back in training well ahead of my original timeline.",
    rating: 5,
    verified: true,
  },
  {
    name: "Noor",
    location: "Utrecht, Netherlands",
    condition: "Post-Surgery Sports Rehabilitation",
    title: "This Complemented My Physiotherapy Perfectly.",
    review:
      "Following knee surgery, my surgeon recommended I focus on gentle, structured rehabilitation. This program integrated well alongside my physiotherapy, and my mobility improved steadily throughout.",
    rating: 5,
    verified: true,
  },
  {
    name: "Rasmus",
    location: "Odense, Denmark",
    condition: "Chronic Lower Back Strain from Athletics",
    title: "My Lower Back Pain From Training Is Finally Under Control.",
    review:
      "Years of athletics had left my lower back chronically strained. The combination of Basti and targeted massage addressed the deeper Vata imbalance, and my training has been far more comfortable since.",
    rating: 5,
    verified: true,
  },
];

const faqItems: TreatmentFaq[] = [
  { question: "Can this program replace physiotherapy for my sports injury?", answer: "No. This program is designed as complementary care alongside your physiotherapy and sports medicine treatment, not a replacement. We recommend coordinating with your physiotherapist throughout." },
  { question: "Is this suitable for acute injuries or only chronic ones?", answer: "Both. The 14-day program is designed for acute, recent injuries, while the longer programs support chronic or recurring musculoskeletal issues alongside ongoing rehabilitation." },
  { question: "Why does Ayurveda focus on Vata for sports injuries?", answer: "Ayurveda associates injury sites with local Vata aggravation, which can impair circulation and slow the body's natural healing processes. Targeted therapies aim to calm this and support faster, more complete recovery." },
  { question: "Can professional athletes use this program?", answer: "Yes, many athletes use this as a complementary recovery protocol alongside their team's medical and physiotherapy staff, particularly for accelerating recovery between competitive seasons." },
  { question: "How soon might I notice improved mobility or reduced pain?", answer: "Many patients notice reduced inflammation and improved comfort within the first week of daily therapies, though full recovery timelines depend on the specific injury and its severity." },
];

const topCenters: TreatmentCenter[] = [
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm, with strong clinical protocols for musculoskeletal recovery.",
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
    name: "Sandhya Hot Spring Health Care",
    city: "Manikaran",
    location: "Manikaran",
    description: "Immerse yourself in the healing power of natural hot springs at Sandhya Hot Spring Health Care, blending traditional healing practices with geothermal therapy.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/himachal/sandhya-hot-spring-health-care",
  },
];

const SportsInjuryTreatment = () => (
  <TreatmentPageTemplate
    slug="sports-injury-recovery-treatment-in-india"
    conditionName="Sports Injury"
    pageTitle="Sports Injury Recovery Treatment in India"
    heroTagline="A Natural Path to Faster, More Complete Recovery"
    heroDescription="Ayurveda supports sports injury recovery by calming local Vata aggravation and nourishing muscle and joint tissue — working alongside your physiotherapy to speed a complete return to activity."
    heroRatingText="4.8/5 Patient Satisfaction"
    introTitle="The Ayurvedic View of Injury Recovery"
    introImage="/Treatments-images/SportsInjury/Ayurvedic Treatment for Sports Injury Recovery.jpg"
    introImageAlt="Ayurvedic Sports Injury Recovery Treatment"
    introParagraphs={[
      <>
        In Ayurveda, an injury site is understood to develop localized <strong className="text-[#335765]">Vata</strong> aggravation, which can impair circulation and slow the body's natural repair of <strong className="text-[#335765]">Mamsa</strong> (muscle) and <strong className="text-[#335765]">Asthi</strong> (bone and joint) tissue.
      </>,
      <>
        Overexertion, incomplete rest, or repeated strain allow this local Vata imbalance to persist, contributing to lingering stiffness, slow healing, or recurring injury. Ayurveda addresses this directly through targeted therapies that calm Vata, improve local circulation, and nourish tissue — working alongside your physiotherapy for a faster, more complete recovery.
      </>,
    ]}
    therapiesSubtitle="The program focuses on calming local Vata aggravation and nourishing muscle and joint tissue, supporting your physiotherapy for a faster recovery."
    therapies={therapies}
    dietIntro="Dietary correction supports tissue repair and helps calm the Vata aggravation that can slow recovery."
    dietFavour={[
      "Warm, Protein-Rich Foods: Favour warm, well-cooked meals with adequate protein to support tissue repair.",
      "Healthy Fats: Ghee and sesame oil support tissue lubrication and calm Vata aggravation at the injury site.",
      "Anti-Inflammatory Spices: Turmeric and ginger support the body's natural healing response.",
      "Regular Meal Timing: Consistent meal times support steady energy for the recovery process.",
    ]}
    dietAvoid={[
      "Cold and Raw Foods: These aggravate Vata and can slow local circulation and healing.",
      "Processed and Fried Foods: These are difficult to digest and can increase inflammation.",
      "Excess Caffeine: Stimulants can increase Vata's erratic quality, potentially slowing tissue recovery.",
      "Alcohol: Alcohol can interfere with tissue repair and should be minimized during active recovery.",
    ]}
    lifestyleAdjustments={[
      "Follow Guided Rest: Adequate rest in the initial recovery phase is essential before gradually resuming activity.",
      "Keep the Area Warm: Warmth supports circulation and calms Vata aggravation at the injury site.",
      "Progress Gradually: Follow your physiotherapist's guidance on gradually increasing activity to avoid re-injury.",
      "Prioritize Sleep: Quality sleep is when the body does most of its tissue repair work.",
    ]}
    packagesSubtitle="Select a timeline that matches your recovery goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet — designed to complement your physiotherapy."
    packages={packages}
    reviews={reviews}
    topCentersSubtitle="Handpicked hospitals and retreats with specialized care for musculoskeletal recovery and rehabilitation."
    topCenters={topCenters}
    faqItems={faqItems}
    ctaImage="/Treatments-images/SportsInjury/Ayurvedic Treatment for Sports Injury Recovery.jpg"
    ctaDescription="Start your journey to faster, more complete recovery. We help you connect with the top Ayurvedic centers specialized in musculoskeletal rehabilitation."
  />
);

export default SportsInjuryTreatment;
