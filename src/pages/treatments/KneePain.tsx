import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Calendar, MapPin, Star, CheckCircle2, Droplet, Wind,
  Leaf, Clock, ArrowRight, Search, Phone, X, ChevronLeft,
  ChevronRight, ClipboardList, Sparkles, Activity, UtensilsCrossed,
  ShieldCheck
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────── */

const patientReviews = [
  {
    name: "Thomas Bergmann", location: "Munich, Germany", condition: "Osteoarthritis",
    title: "Fifteen Years of Knee Pain—Resolved Without Surgery.",
    review: "My orthopedic specialist in Germany had recommended knee replacement surgery after fifteen years of progressive osteoarthritis. I chose to try Ayurveda instead. The 60-day program, which included Janu Basti and internal Rasayana herbs, was incredible. My pain has reduced by nearly ninety percent, and my mobility has fully returned.",
    rating: 5, verified: true
  },
  {
    name: "Margaret O'Brien", location: "Dublin, Ireland", condition: "Sports Injury",
    title: "Janu Basti Did What Three Years of Physiotherapy Could Not.",
    review: "After a sports injury, I managed my chronic knee pain with physiotherapy for three years with minimal progress. The Ayurvedic physician identified accumulated Ama (toxins) as the root cause. The Janu Basti treatment relieved the stiffness within the first week, and combined with Panchakarma detoxification, I was walking completely pain-free by week five.",
    rating: 5, verified: true
  },
  {
    name: "François Lecomte", location: "Lyon, France", condition: "Knee Inflammation",
    title: "They Treated the Root Cause—Not Just the Inflammation.",
    review: "In France, my knee condition was managed entirely with temporary cortisone injections. The Ayurvedic physician prescribed Virechana (therapeutic purgation) to eliminate systemic toxins, followed by Pinda Sweda. Internal formulations of Ashwagandha and Shallaki reduced the cartilage inflammation over six weeks, and I have not required any further injections.",
    rating: 5, verified: true
  },
  {
    name: "Annika Johansson", location: "Gothenburg, Sweden", condition: "Stage-3 Degeneration",
    title: "Avoided Knee Replacement Surgery—Results Confirmed by My Specialist.",
    review: "My rheumatologist had recommended surgery for my stage-three knee degeneration. I underwent a forty-five-day Ayurveda Package instead. The Janu Basti sessions restored lubrication, while Guggulu-based herbs worked to rebuild cartilage. Upon my return, my specialist confirmed a measurable improvement in my joint space—an outcome he described as unexpected.",
    rating: 5, verified: true
  },
  {
    name: "Ciarán Walsh", location: "Limerick, Ireland", condition: "Chronic Knee Pain",
    title: "Pain-Free for the First Time in Eight Years.",
    review: "Eight years of chronic knee pain had forced me to give up running entirely. The Ayurvedic physician diagnosed a Vata-Kapha imbalance and prescribed a program of Dhara, Lepa (herbal paste), and specific dietary corrections. The swelling subsided within thirty days, and by day fifty, I had resumed light jogging—something I had not done in nearly a decade.",
    rating: 5, verified: true
  },
];

const topAyurvedicCenters = [
  {
    name: "Toyam By Orchid Hotels",
    city: "Pune",
    location: "Pune",
    description: "Escape into nature at Toyam by Orchid Hotels, a serene wellness retreat near Pune designed for holistic healing and relaxation. The center offers personalized Ayurvedic therapies, Panchakarma detox programs, yoga, and meditation guided by experienced wellness experts. Surrounded by tranquil landscapes and luxury accommodations, Toyam provides the perfect environment to restore balance, rejuvenate the body, and experience authentic wellness.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Toyam By Orchid Hotels/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/pune/toyam-by-orchid-hotels"
  },
  {
    name: "HimVeda Heritage Wellness Centre",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala. HimVeda is dedicated to authentic Ayurvedic Healing, combining classical therapies with nature-centric living for holistic well-being. Rooted in traditional Ayurvedic principles, HimVeda offers personalized treatments guided by experienced Ayurvedic doctors and skilled therapists. Each wellness program is carefully designed to restore balance to the body, mind, and spirit, supporting long-term health through natural, time-tested healing practices in a calm mountain setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/HimVeda/Thumb.jpeg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/himveda"
  },
  {
    name: "Fazlani Nature's Nest Wellness Centre",
    city: "Mumbai",
    location: "Mumbai",
    description: "Reconnect with nature and restore your well-being at Fazlani Nature's Nest, a serene wellness retreat set amidst lush greenery and tranquil landscapes. This holistic wellness centre blends time-honored natural healing traditions with modern therapeutic practices to help guests achieve balance in body, mind, and spirit. Guided by experienced wellness professionals, the centre offers personalized programs designed to promote detoxification, relaxation, and sustainable healthy living. From therapeutic treatments and mindful wellness therapies to nourishing cuisine and rejuvenating experiences, Fazlani Nature's Nest provides a peaceful environment where guests can unwind, heal, and rediscover vitality through nature-inspired wellness.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Fazlani Natures Nest/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/maharashtra/fazlani-natures-nest"
  },
  {
    name: "SWAN Yoga Retreat & Ayurveda",
    city: "Goa",
    location: "Goa",
    description: "Experience authentic yogic living at SWAN Yoga Retreat & Ayurveda, a peaceful ashram-style wellness centre set in the lush hills of North Goa. Rooted in classical Yoga and Ayurveda, the retreat offers a calm space for healing, mental clarity, and inner growth.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/SWAN Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/swan-yoga-retreat"
  },
  {
    name: "Amanbagh Heritage Wellness Retreat",
    city: "Alwar",
    location: "Alwar",
    description: "Step into a sanctuary of timeless elegance at Amanbagh, a luxurious retreat inspired by Mughal architecture and surrounded by the rugged beauty of Rajasthan's Aravalli hills. Once a royal hunting lodge, Amanbagh now offers a serene wellness haven for deep rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Amanbagh/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/rajasthan/amanbagh-heritage-wellness-retreat"
  },
  {
    name: "ITC Grand Bharat",
    city: "Gurugram",
    location: "Gurugram",
    description: "Immerse yourself in the grandeur of Indian heritage at ITC Grand Bharat, a luxurious all-suite retreat nestled amidst the serene Aravalli hills. Inspired by India's rich cultural legacy, the retreat blends royal architecture with modern wellness, offering a deeply rejuvenating escape. Each stay is defined by personalized service, spacious suites, and a tranquil environment that encourages slow, mindful living.",
    rating: 4.8,
    reviews: 17000,
    image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/gurugram/itc-grand-bharat"
  },
  {
    name: "Indus Valley Ayurvedic Centre",
    city: "Mysore",
    location: "Mysore",
    description: "Indus Valley Ayurvedic Centre (IVAC) is a luxury Ayurvedic Healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards through personalized programs for body, mind, and spirit.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/mysore/indus-valley-ayurvedic-centre"
  },
  {
    name: "Sanjeevanam Ayurveda Hospital",
    city: "Kochi",
    location: "Kochi",
    description: "Experience the future of holistic healthcare at Sanjeevanam, a pioneering integrative hospital in the heart of Kochi. It masterfully blends the ancient wisdom of Ayurveda with the precision of modern medicine, creating a unique and powerful ecosystem for deep healing. Expect evidence-based care in a modern, professional setting, where your journey to wellness is guided by a multi-disciplinary team of experts.",
    rating: 4.8,
    reviews: 1700,
    image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/sanjeevanam-ayurveda-hospital"
  },
  {
    name: "Kairali � The Ayurvedic Healing Village",
    city: "Palakkad",
    location: "Palakkad",
    description: "Kairali � The Ayurvedic Healing Village ek world-renowned wellness destination hai jo authentic Ayurveda, Panchakarma aur holistic healing par focus karta hai. Lush green surroundings ke beech sthit, yeh NABH-accredited retreat traditional Ayurvedic wisdom ko modern comfort ke saath blend karta hai. Yahan personalized treatment plans, experienced vaidyas aur sattvic lifestyle ke through long-term health, detox aur rejuvenation par kaam kiya jata hai.",
    rating: 4.9,
    reviews: 280,
    image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-ayurvedic-healing-village"
  },
  {
    name: "Chamundi Hill Palace Ayurvedic Resort",
    city: "Mysore",
    location: "Mysore",
    description: "A heritage-inspired Ayurvedic resort offering authentic therapies and a serene healing experience.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Chamundi Hill Palace/CTA.jpg",
    link: "/top-ayurvedic-centers-in-india/mysore/chamundi-hill-palace"
  },
  {
    name: "Ayurmana",
    city: "Kerala",
    location: "Kerala",
    description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayurmana center/top center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayurmana"
  },
  {
    name: "AyurSoma Ayurveda Royal Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience world-class Ayurvedic Healing at AyurSoma, a premium royal retreat in Kovalam. Combining traditional wisdom with royal luxury, our sanctuary offers authentic Panchakarma, rejuvenation therapies, and personalized wellness programs guided by seasoned Vaidyas in a stunning beachfront setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/AyurSoma Ayurveda/Photo gallery/img 1.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayursoma"
  },
];

const faqItems = [
  { question: "Can Ayurveda cure knee pain permanently?", answer: "Ayurveda addresses the root cause of knee pain — aggravated Vata dosha and accumulated Ama — rather than just masking symptoms. With the right program, patients experience long-lasting and often permanent relief, especially from degenerative conditions like osteoarthritis." },
  { question: "What is Janu Vasti and how does it help?", answer: "Janu Vasti is the cornerstone Ayurvedic therapy for knee pain. A dough ring is placed around the knee and filled with warm medicated oil. This deeply lubricates the joint, nourishes cartilage, relieves pain and stiffness, and strengthens surrounding tissues — all without any invasive procedures." },
  { question: "How long does the treatment program take?", answer: "A 21-day program provides foundational relief. A 45-day program offers deep healing for chronic conditions. Severe degeneration or cases avoiding surgery benefit most from a 60-day intensive program. Your Vaidya will recommend the optimal duration based on your assessment." },
  { question: "Is Ayurvedic knee treatment an alternative to surgery?", answer: "Many patients who were advised knee replacement surgery have avoided it through Ayurveda treatment. Results confirmed by conventional specialists include measurable improvements in joint space and significant reduction in pain. However, the outcome depends on the stage of degeneration and individual health." },
  { question: "What conditions does Ayurvedic knee treatment address?", answer: "Ayurvedic knee treatment is effective for Osteoarthritis (Janu Sandhigata Vata), Rheumatoid Arthritis (Amavata), post-injury chronic pain, ligament degeneration, cartilage wear, and general joint stiffness and inflammation." },
];

const therapies = [
  {
    title: "Janu Vasti",
    subtitle: "The Knee Oil Pool",
    icon: Droplet,
    benefits: [
      "Deeply lubricates the knee joint",
      "Nourishes cartilage, ligaments & tendons",
      "Immediately soothes pain and stiffness",
      "Strengthens the entire knee structure",
    ],
    desc: "A ring of dough is placed around the knee and warm, medicated anti-inflammatory oil is retained within it. The cornerstone of Ayurvedic knee care.",
    bg: "#F8F4E7",
    border: "#d8d0ae",
  },
  {
    title: "Patra Pinda Sweda",
    subtitle: "Elakizhi — Herbal Bolus",
    icon: Leaf,
    benefits: [
      "Reduces inflammation and swelling",
      "Relieves deep-seated pain",
      "Improves local circulation",
      "Relaxes tight muscles around the knee",
    ],
    desc: "Poultices made from fresh anti-inflammatory leaves are fried in medicated oil and applied to the knee — highly effective for pain and swelling.",
    bg: "#EDE8D0",
    border: "#d8d0ae",
  },
  {
    title: "Abhyanga & Swedana",
    subtitle: "Oil Massage + Herbal Steam",
    icon: Wind,
    benefits: [
      "Relaxes muscles surrounding the knee",
      "Improves blood and lymphatic circulation",
      "Allows oil to penetrate deeper tissues",
      "Relieves stiffness and cracking sounds",
    ],
    desc: "A gentle Vata-pacifying oil massage followed by localized herbal steam (Nadi Sweda) to open channels and drive healing oil deep into joint tissues.",
    bg: "#F8F4E7",
    border: "#d8d0ae",
  },
];

const whyIndiaPoints = [
  {
    title: "Specialized & Authentic Therapies",
    text: "Localized treatments like Janu Vasti are practiced with an authenticity and expertise in India that is hard to find elsewhere.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Vaidyas",
    text: "Receive care from physicians who have a deep, generational understanding of musculoskeletal disorders.",
    icon: Activity,
  },
  {
    title: "Potent Herbal Formulations",
    text: "India provides access to fresh, high-quality herbs used to prepare the potent oils and internal medicines crucial for healing.",
    icon: Leaf,
  },
  {
    title: "Holistic Healing Ecosystem",
    text: "Centers integrate therapies with customized diet, therapeutic yoga, and a peaceful environment — accelerating recovery.",
    icon: Sparkles,
  },
];

const dietFavour = [
  "Warm, moist, easy-to-digest foods — soups, stews, well-cooked grains",
  "Healthy fats like ghee and sesame oil to lubricate the joints",
  "Anti-inflammatory spices: turmeric, ginger, and garlic",
];

const dietAvoid = [
  "Cold, dry, processed, and fried foods",
  "Foods that aggravate Vata: raw salads, crackers, carbonated drinks",
];

const lifestyleTips = [
  { label: "Maintain Healthy Weight", text: "Every extra pound puts four pounds of pressure on the knees." },
  { label: "Gentle Exercise", text: "Swimming, cycling, and specific yoga asanas strengthen without straining the joint." },
  { label: "Correct Posture", text: "Be mindful while sitting and standing to avoid undue stress on the knees." },
  { label: "Stay Warm", text: "Protect knees from cold drafts — coldness aggravates Vata and increases pain." },
];

const kneePainPackages = [
  {
    name: "21-Day Foundational Relief",
    duration: "21 Days",
    focus: "A targeted introductory program to reduce acute pain, flush out superficial Ama (toxins), and restore basic joint lubrication through daily Janu Vasti and Abhyanga therapies.",
    image: "/Treatments-images/knee_pain_pack_1.png",
  },
  {
    name: "45-Day Deep Healing Program",
    duration: "45 Days",
    focus: "The classical, comprehensive protocol. Combines Janu Vasti, Patra Pinda Sweda, Panchakarma detoxification, and internal Rasayana herbs to deeply rebuild cartilage and restore full mobility.",
    image: "/Treatments-images/knee_pain_pack_2.png",
  },
  {
    name: "60-Day Intensive Restoration",
    duration: "60 Days",
    focus: "For severe or long-standing degeneration. An immersive program with advanced Basti sequences, Guggulu-based herbal formulations, therapeutic yoga, and diet corrections for lasting, measurable results.",
    image: "/Treatments-images/knee_pain_pack_3.png",
  },
];

/* ─── COMPONENT ─────────────────────────────────────── */

const KneePain = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) { setTopCentersPerSlide(1); return; }
      if (window.innerWidth < 1024) { setTopCentersPerSlide(2); return; }
      setTopCentersPerSlide(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  useEffect(() => { setTopCentersSlide(p => p % topCentersTotalSlides); }, [topCentersTotalSlides]);

  const goReviewPrevious = () => setCurrentReview(p => (p - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview(p => (p + 1) % patientReviews.length);
  const goTopCentersPrevious = () => setTopCentersSlide(p => (p - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide(p => (p + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (n: string) => setExpandedCenterName(p => p === n ? null : n);

  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const jumpSections = [
    { id: "intro", title: "Intro & Overview" },
    { id: "ayurvedic-view", title: "Ayurvedic View of Knee Pain" },
    { id: "therapies", title: "Core Ayurvedic Therapies" },
    { id: "why-india", title: "Why Choose India" },
    { id: "diet-lifestyle", title: "Diet & Lifestyle" },
    { id: "cost-duration", title: "Packages, Cost & Duration" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "top-centers", title: "Top Ayurveda Centers" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];
  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 80;
      const pos = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurvedic Joint Care</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Knee Pain Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">Heal Your Knees Naturally. Restore mobility and eliminate pain through ancient Ayurvedic wisdom.</p>
              <div className="space-y-2.5 pt-2">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.8/5 Patient Satisfaction</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button
                className="w-full h-14 rounded-xl bg-white text-[#335765] hover:bg-[#EDE8D0] hover:scale-[1.02] transition-all font-bold text-lg shadow-lg"
                onClick={() => setQuoteModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-14 md:space-y-16">

        {/* ── INTRO SECTION ───────────────────────────────── */}
        <section id="intro" className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/Treatments-images/knee pain treatment.jpg"
                alt="Ayurvedic Knee Pain Treatment in India"
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-[#335765] leading-tight">
                A Holistic Path to Mobility
              </h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Knee pain is one of the most common ailments that severely impacts quality of life. While conventional medicine often relies on painkillers and surgery, Ayurveda offers a holistic, safe, and powerful alternative.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Ayurveda treatment for knee pain goes beyond temporary relief — it focuses on healing the <strong className="text-[#335765]">root cause</strong>, reducing inflammation, strengthening the joint, and restoring pain-free mobility for the long term.
              </p>
              <div className="pt-2">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── AYURVEDIC VIEW (Janu Sandhigata Vata) ───────── */}
        <section id="ayurvedic-view" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">The Ayurvedic View of Knee Pain</h2>
            <p className="text-[#7F543D] text-lg italic">Janu Sandhigata Vata — "Janu" (Knee) + "Sandhi" (Joint) + "Vata" (Dosha)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: explanation */}
            <div className="bg-[#F8F4E7] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae] space-y-5">
              <h3 className="text-xl font-bold text-[#335765] flex items-center gap-2">
                <Wind className="text-[#7F543D] h-5 w-5" /> The Role of Vata Dosha
              </h3>
              <p className="text-[#7F543D] text-sm leading-relaxed">
                The primary culprit behind knee pain is an aggravated <strong>Vata dosha</strong>. Vata is naturally dry, light, and cold. When it becomes imbalanced — due to age, diet, or injury — it accumulates in the joints, causing:
              </p>
              <div className="space-y-3">
                {[
                  { label: "Degeneration", text: "Dries out the lubricating synovial fluid (Shleshaka Kapha), causing increased friction between bones." },
                  { label: "Pain", text: "The dry, mobile nature of Vata causes sharp, pricking, and often debilitating pain." },
                  { label: "Stiffness", text: "Leads to stiffness and a cracking or popping sound (crepitus) during movement." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#d8d0ae]">
                    <CheckCircle2 className="text-green-600 shrink-0 h-5 w-5 mt-0.5" />
                    <p className="text-sm text-[#335765] leading-relaxed">
                      <strong>{item.label}:</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Ama / Amavata */}
            <div className="bg-[#EDE8D0] rounded-2xl p-6 md:p-8 shadow-sm border border-[#d8d0ae] space-y-5">
              <h3 className="text-xl font-bold text-[#335765] flex items-center gap-2">
                <Sparkles className="text-[#7F543D] h-5 w-5" /> The Role of Ama (Toxins)
              </h3>
              <p className="text-[#7F543D] text-sm leading-relaxed">
                In some cases, the buildup of metabolic toxins (<strong>Ama</strong>) in the joints leads to inflammation — a condition known as <strong>Amavata</strong> (Rheumatoid Arthritis) — which also severely affects the knee joints.
              </p>
              <div className="bg-white rounded-xl p-4 border border-[#d8d0ae] mt-4">
                <p className="text-[#335765] font-bold text-sm mb-2">Two Distinct Patterns of Knee Disease:</p>
                <div className="space-y-2 text-sm text-[#7F543D]">
                  <div className="flex gap-2 items-start">
                    <span className="font-bold text-[#335765] shrink-0">1.</span>
                    <p><strong className="text-[#335765]">Janu Sandhigata Vata</strong> — Degenerative (Osteoarthritis): dry, crepitus, loss of cartilage. Treated primarily with oleation and nourishment.</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="font-bold text-[#335765] shrink-0">2.</span>
                    <p><strong className="text-[#335765]">Amavata</strong> — Inflammatory (Rheumatoid): swollen, hot, painful joints. Treated with detoxification (Panchakarma) first.</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#7F543D] italic mt-2">A qualified Vaidya will identify your pattern and design your treatment accordingly.</p>
            </div>
          </div>
        </section>

        {/* ── CORE THERAPIES ──────────────────────────────── */}
        <section id="therapies" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Core Ayurvedic Therapies</h2>
            <p className="text-[#7F543D] text-lg">Ayurveda is renowned for its powerful, localized therapies that provide direct and profound relief to the knee joint.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {therapies.map((t) => {
              const Icon = t.icon;
              return (
                <Card key={t.title} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform">
                  <CardContent className="p-6 md:p-7 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE8D0] ring-4 ring-[#d8d0ae]/30 shrink-0">
                        <Icon className="h-6 w-6 text-[#2F5B5D]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#335765] mb-0.5">{t.title}</h3>
                        <p className="text-[#7F543D] text-[10px] font-semibold uppercase tracking-wider leading-tight">{t.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[#5f4636] text-sm leading-relaxed mb-4 flex-grow">{t.desc}</p>
                    <div className="space-y-2">
                      {t.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2 bg-[#F8F4E7] p-2.5 rounded-lg border border-[#d8d0ae]">
                          <CheckCircle2 className="text-green-600 shrink-0 h-4 w-4 mt-0.5" />
                          <p className="text-xs font-medium text-[#335765] leading-relaxed">{b}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ── WHY INDIA ────────────────────────────────────── */}
        <section id="why-india" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Why Choose India for Knee Pain Treatment?</h2>
            <p className="text-[#7F543D] text-lg">India offers an unmatched combination of authentic therapies, expert practitioners, and holistic healing environments.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {whyIndiaPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-[#d9cfae] p-5 bg-white hover:shadow-md transition-all text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE8D0] mb-4">
                    <Icon className="h-6 w-6 text-[#2F5B5D]" />
                  </div>
                  <h4 className="text-base font-bold text-[#335765] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#7F543D] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── DIET & LIFESTYLE ─────────────────────────────── */}
        <section id="diet-lifestyle" className="scroll-mt-24">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Diet & Lifestyle for Lasting Relief</h2>
            <p className="text-[#7F543D] text-lg">Lasting relief from knee pain requires a supportive diet and lifestyle alongside clinical therapies.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Diet */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#335765] flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 text-[#7F543D]" /> Ayurvedic Diet (Ahara)
              </h3>
              <div className="bg-[#F8F4E7] rounded-2xl p-5 border border-[#d8d0ae]">
                <p className="text-sm font-bold text-[#335765] mb-3 uppercase tracking-wider">✅ Foods to Favour</p>
                <div className="space-y-2">
                  {dietFavour.map((f) => (
                    <div key={f} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-[#d8d0ae]">
                      <CheckCircle2 className="text-green-600 shrink-0 h-4 w-4 mt-0.5" />
                      <p className="text-sm text-[#335765] leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#EDE8D0] rounded-2xl p-5 border border-[#d8d0ae]">
                <p className="text-sm font-bold text-[#335765] mb-3 uppercase tracking-wider">❌ Foods to Avoid</p>
                <div className="space-y-2">
                  {dietAvoid.map((f) => (
                    <div key={f} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-[#d8d0ae]">
                      <span className="text-red-400 shrink-0 font-bold text-sm mt-0.5">✗</span>
                      <p className="text-sm text-[#335765] leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lifestyle */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#335765] flex items-center gap-2">
                <Activity className="h-5 w-5 text-[#7F543D]" /> Lifestyle Adjustments (Vihara)
              </h3>
              <div className="space-y-3">
                {lifestyleTips.map((tip) => (
                  <div key={tip.label} className="bg-white rounded-xl p-4 border border-[#d8d0ae] shadow-sm hover:shadow-md transition-all">
                    <p className="font-bold text-[#335765] text-sm mb-1">{tip.label}</p>
                    <p className="text-sm text-[#7F543D] leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PACKAGES SECTION ─────────────────────────────── */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration For Knee Pain Treatment in India</h2>
            <p className="text-lg text-[#7F543D]">Select a program timeline that matches your condition. Each package includes daily physician consultation, prescribed therapies, herbal medicines, and a customised diet.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {kneePainPackages.map((pkg, idx) => (
              <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full">
                <div className="relative h-40 md:h-44 overflow-hidden shrink-0">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/95 to-transparent flex items-end p-4 md:p-5">
                    <h3 className="text-xl md:text-[1.35rem] font-bold text-white leading-tight">{pkg.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4 md:p-5 flex-grow flex flex-col space-y-3 bg-white h-full">
                  <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50 shrink-0">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                    <span className="font-bold text-[#335765] text-sm">Duration:</span>
                    <span className="font-semibold text-sm">{pkg.duration}</span>
                  </div>
                  <div className="text-sm text-[#5f4636] flex-grow leading-relaxed border-l-[3px] border-[#335765] pl-3 py-1 font-medium">
                    {pkg.focus}
                  </div>
                  <div className="mt-auto shrink-0 pt-1.5">
                    <Button
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full h-11 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base rounded-xl shadow-md transition-all duration-300 group-hover:scale-[1.02]"
                    >
                      Get a Free Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Patient Reviews */}
        <section id="reviews" className="scroll-mt-24 bg-transparent w-full">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories &amp; Reviews</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from patients who reclaimed pain-free movement through Ayurvedic knee care</p>
            </div>
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
                <button onClick={goReviewPrevious} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Previous review">
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
                <button onClick={goReviewNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Next review">
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>
              <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
                <CardContent className="p-4 md:p-12 relative">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg>
                    </div>
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">{patientReviews[currentReview].title}</h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>&#34;{patientReviews[currentReview].review}&#34;</p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                        {patientReviews[currentReview].name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight">{patientReviews[currentReview].name}</h4>
                          {patientReviews[currentReview].verified && (<span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">&#10003; Verified</span>)}
                        </div>
                        <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>{patientReviews[currentReview].location} {patientReviews[currentReview].condition && `- ${patientReviews[currentReview].condition}`}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (<Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />))}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-[#335765]">{patientReviews[currentReview].rating}.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center gap-2 mt-8">
                {patientReviews.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentReview(idx)}
                    className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#335765]" : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"}`}
                    aria-label={`Go to review ${idx + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Ayurveda Centers */}
        <section id="top-centers" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Knee Pain Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized Janu Vasti and joint-care programs.</p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersPrevious} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Previous centers">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Next centers">
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-0 md:px-6 lg:px-8 items-stretch">
              {topAyurvedicCenters.slice(topCentersSlide * topCentersPerSlide, topCentersSlide * topCentersPerSlide + topCentersPerSlide).map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                    <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                      <img src={center.image} alt={center.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex text-left">{center.name}</h3>
                      <div className="flex flex-nowrap items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 overflow-hidden">
                        <div className="flex items-center gap-1.5 shrink min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span className="text-[12px] md:text-[13px] font-semibold truncate" title={center.city}>{center.city}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                          <span className="text-[12px] md:text-[13px] font-bold text-[#335765]">{center.rating} ({center.reviews})</span>
                        </div>
                      </div>
                      <div className="relative mb-3 flex-grow text-left">
                        <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>{center.description}</p>
                        <button onClick={() => toggleCenterDescription(center.name)} className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block">
                          {expandedCenterName === center.name ? "Read Less" : "Read More"}
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Link to={center.link} target="_blank" rel="noreferrer" className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center">View Details</Link>
                        <Button className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs" onClick={() => setQuoteModalOpen(true)}>Get Quote</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {topCentersTotalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: topCentersTotalSlides }).map((_, i) => (
                  <button key={i} onClick={() => setTopCentersSlide(i)} className={`h-1.5 rounded-full transition-all ${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`} />
                ))}
              </div>
            )}
            <div className="flex justify-center mt-4">
              <Link to="/top-ayurvedic-centers-in-india" target="_blank" rel="noreferrer" className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group">
                VIEW ALL CENTERS <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto px-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Book CTA */}
        <section className="scroll-mt-24 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img src="/Treatments-images/knee pain treatment.jpg" alt="Book Knee Pain Treatment" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Knee Pain Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">Begin with a no-obligation consultation. We help you choose the right center, program duration, and therapies for your condition and budget.</p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Knee%20Pain%20Treatment." target="_blank" rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition" aria-label="WhatsApp Us Now">
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>Get Free Consultation Here</Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
        >
          <span>B</span><span>R</span><Search size={16} strokeWidth={3.5} /><span>W</span><span>S</span><span>E</span>
        </button>
      </div>

      {/* Mobile BROWSE button */}
      <button
        onClick={() => setIsJumpModalOpen(true)}
        className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Search size={18} className="-ml-1" />
        <span>BROWSE</span>
      </button>

      {/* Mobile Quote Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Phone size={18} className="-ml-1" />
        <span className="hidden md:inline">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

      {/* Jump to Section Modal */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />
        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={e => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Page Sections</h2>
              </div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section in this page."</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => jumpToSection(section.id)}
                className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">{section.title}</span>
                </div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                  <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KneePain;


