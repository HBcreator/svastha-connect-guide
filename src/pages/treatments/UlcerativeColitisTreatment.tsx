import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Calendar, MapPin, Star, Droplet, Flame, Leaf, Wind,
  ChevronLeft, ChevronRight, CheckCircle2, UtensilsCrossed, ArrowRight,
  Search, Phone, X, ClipboardList, Activity, Clock
} from "lucide-react";

const coreTherapies = [
  {
    title: "Piccha Basti",
    sanskrit: "Intra-rectal Healing Therapy",
    text: "The most effective and direct treatment. Cooling, healing medicated oils are gently placed in the rectum, offering powerful anti-inflammatory effects that heal ulcers directly.",
    icon: Droplet
  },
  {
    title: "Takradhara",
    sanskrit: "Medicated Buttermilk Stream",
    text: "Medicated buttermilk is continuously streamed over the forehead. Because stress is a major trigger, this calms the entire nervous system and heals the gut via the gut-brain axis.",
    icon: Wind
  },
  {
    title: "Mridu Virechana",
    sanskrit: "Mild Medicated Purgation",
    text: "A very mild and gentle form of purgation using cooling herbs is administered to flush excess Pitta from the system, performed only when the patient is out of an acute flare-up.",
    icon: Flame
  },
  {
    title: "Rakta Prasadana",
    sanskrit: "Blood Purification",
    text: "Specific internal medicines designed to pacify the vitiated Rakta (blood tissue) to stop rectal bleeding and reduce systemic inflammation throughout the body.",
    icon: Activity
  }
];

const dietaryGuidelines = {
  favour: [
    "Pomegranate Juice: Considered one of the best medicines for UC due to its astringent and healing properties.",
    "Medicated Buttermilk (Takra): Processed with digestive herbs, this is a gut-healing nectar in Ayurveda.",
    "Cooked Rice & Mung Soup: A simple, easy-to-digest diet (kitchari) that allows the digestive system to rest.",
    "Coriander & Fennel Water: Water infused with these cooling spices helps to continuously pacify Pitta."
  ],
  avoid: [
    "Raw Vegetables & Salads: Raw foods are too harsh and difficult to break down for an inflamed, ulcerated gut.",
    "Sour & Fermented Foods: Yogurt, pickles, citrus fruits, and tomatoes severely aggravate the condition.",
    "All Spicy Foods: Chillies, garlic, and hot spices must be completely eliminated from the diet.",
    "Inflammatory Triggers: Caffeine, alcohol, and refined sugar are highly inflammatory and must be avoided."
  ]
};

const lifestyleAdjustments = [
  "Stress Management: This is paramount. Practice regular, gentle meditation and deep breathing exercises to keep the mind calm.",
  "Sheetali Pranayama: Practicing the 'cooling breath' technique directly helps to pacify systemic Pitta.",
  "Complete Rest: During an active flare-up, avoid strenuous activity. The body requires its energy to heal the colon lining.",
  "Consistent Routine: Eat meals at the exact same time each day in a peaceful, quiet environment to support Agni (digestive fire)."
];

const packages = [
  {
    name: "14-Day Soothing Relief",
    duration: "14 Days",
    cost: "$1,200 - $2,200 USD",
    focus: "Focuses on immediate relief with cooling diet, Takradhara, and mild Basti to stop bleeding and calm active inflammation.",
    image: "/Treatments-images/Gastroesophageal Reflux Disease Treatment.jpg",
  },
  {
    name: "21-Day Deep Mucosal Healing",
    duration: "21 Days",
    cost: "$2,500 - $4,500 USD",
    focus: "The core protocol. Incorporates intensive Piccha Basti protocols and sustained herbal medicine to significantly repair the colon lining.",
    image: "/Treatments-images/Panchakarma Treatment.jpg",
  },
  {
    name: "28-Day Complete Pitta Pacification",
    duration: "28 - 35+ Days",
    cost: "$3,500 - $6,500+ USD",
    focus: "For severe or refractory cases. A comprehensive program to achieve long-term remission and reset the gut-brain axis.",
    image: "/Treatments-images/Ayurvedic Treatment for Stress.jpg",
  }
];

const patientReviews = [
  {
    name: "Albrecht Winkler", location: "Leipzig, Germany", condition: "Chronic Ulcerative Colitis",
    title: "My Colon Healed and I Discontinued My Steroids.",
    review: "I had been managing my ulcerative colitis with steroids for six years, with worsening side effects. The Ayurvedic physician classified my condition as Pittaja Grahani and prescribed Piccha Basti, which directly soothed the ulcerated colon lining. Within four weeks, my bowel frequency reduced from twelve times daily to just three. My follow-up endoscopy confirmed significant mucosal healing.",
    rating: 5, verified: true
  },
  {
    name: "Deirdre Callahan", location: "Cork, Ireland", condition: "Severe Active UC",
    title: "Bloody Diarrhea and Weight Loss Reversed Without Surgery.",
    review: "My ulcerative colitis had become severe, with bloody diarrhea up to fifteen times daily and debilitating cramps. The Ayurveda treatment addressed it as Raktaja Pravahika. The program of Anuvasan Basti and Piccha Basti enemas, combined with oral herbal formulations, was incredibly effective. After one month, my bowel frequency had reduced by eighty percent, and the blood had virtually ceased.",
    rating: 5, verified: true
  },
  {
    name: "Mathieu Leconte", location: "Lyon, France", condition: "Refractory Colitis",
    title: "Ayurveda Succeeded Where Biologic Therapy Had Not.",
    review: "My ulcerative colitis had been classified as refractory, unresponsive to even biological therapy. The Ayurvedic physician designed a protocol specifically for my condition: a preparatory Snehana phase, followed by Virechana purgation and a sustained Basti program. After twelve weeks, my symptoms had reduced to a level my French gastroenterologist described as clinical remission.",
    rating: 5, verified: true
  },
  {
    name: "Joost Van der Hoeven", location: "Utrecht, Netherlands", condition: "Relapsing UC",
    title: "The Basti Program Broke the Cycle of Relapse.",
    review: "Six years of ulcerative colitis had produced a frustrating pattern of remission followed by inevitable relapse. The Ayurveda Package broke that cycle. The Udumbara Kwatha Basti—a medicated enema using cluster fig decoction—administered over four weeks, reduced my symptoms with a consistency I hadn't experienced in years. The Pitta-pacifying diet has maintained my remission.",
    rating: 5, verified: true
  },
  {
    name: "Sigrid Halvorsen", location: "Stavanger, Norway", condition: "Pancolitis",
    title: "My Endoscopy Confirmed No Ulcers Remaining.",
    review: "For two years, I had been losing weight and suffering from constant bloody stools. I committed to a sustained Ayurveda Package, which began with one month of in-patient Panchakarma followed by an at-home protocol. By month six, my symptoms had ceased entirely. The endoscopic review at twelve months confirmed complete mucosal healing—no ulcers were visible.",
    rating: 5, verified: true
  }
];

const faqItems = [
  { question: "Why does Ayurveda consider UC a Pitta disorder?", answer: "Ulcerative Colitis involves severe inflammation, ulceration, and bleeding. In Ayurveda, these are direct manifestations of an aggravated Pitta dosha (the fire element) which has mixed with the blood (Rakta), literally 'burning' the intestinal lining." },
  { question: "Are raw salads good for Ulcerative Colitis?", answer: "No. While modern diets often push raw foods for health, Ayurveda strongly advises against them during a UC flare. Raw vegetables are rough and difficult to break down, which acts like sandpaper on an already ulcerated and inflamed colon." },
  { question: "Is Basti (enema therapy) painful for an inflamed colon?", answer: "Not at all. The 'Piccha Basti' used for UC is specifically designed to be soothing. It uses cool, thick, and highly healing substances like Yashtimadhu (licorice) oil or cluster fig decoctions that coat the ulcers and provide immediate relief from pain and urgency." },
  { question: "Can stress really trigger a UC flare-up?", answer: "Yes. The gut and brain are intimately connected. Stress severely aggravates both Vata and Pitta doshas. This is why our treatments include Takradhara (buttermilk poured on the forehead) to calm the nervous system alongside treating the gut." },
  { question: "Can Ayurveda treatment stop the bleeding entirely?", answer: "Yes. By cooling the Pitta, pacifying the Rakta (blood tissue), and directly applying healing herbs to the ulcers via Basti, the bleeding and mucous discharge usually subside significantly within the first few weeks of a dedicated protocol." }
];

const topAyurvedicCenters = [
  {
    name: "Mercure Goa Devaaya Resort – Ayurveda Wellness Centre",
    city: "Goa",
    location: "Goa",
    description: "Step into a sanctuary of healing at the Ayurveda Wellness Centre at Mercure Goa Devaaya Resort, where ancient Ayurvedic wisdom meets tranquil island living. Nestled along the serene backwaters of Divar Island, this wellness retreat offers an immersive experience rooted in authentic Ayurvedic traditions. Guided by experienced Ayurvedic doctors and therapists, the centre delivers personalized therapies designed to restore the natural balance of body, mind, and spirit.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Mercure Goa Devaaya Resort/Thumb.jpg",
    link: "/centers/goa/mercure-goa-devaaya-resort"
  },
  {
    name: "Sanjeevanam Ayurveda Hospital",
    city: "Kochi",
    location: "Kochi",
    description: "Experience the future of holistic healthcare at Sanjeevanam, a pioneering integrative hospital in the heart of Kochi. It masterfully blends the ancient wisdom of Ayurveda with the precision of modern medicine, creating a unique and powerful ecosystem for deep healing. Expect evidence-based care in a modern, professional setting, where your journey to wellness is guided by a multi-disciplinary team of experts.",
    rating: 4.8,
    reviews: 1700,
    image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg",
    link: "/centers/kerala/sanjeevanam-ayurveda-hospital"
  },
  {
    name: "Sitaram Beach Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience the true essence of Ayurveda at Sitaram Beach Retreat, a tranquil wellness sanctuary nestled along the serene coastline of Kerala. Surrounded by lush greenery and the calming presence of the Arabian Sea, this retreat offers an immersive healing environment rooted in authentic Ayurvedic traditions. Sitaram Beach Retreat combines classical Ayurvedic wisdom with modern comfort, delivering personalized treatments designed to restore harmony between body, mind, and spirit. Guided by highly experienced Ayurvedic doctors, each therapy is carefully tailored based on individual health conditions and wellness goals.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sitaram Beach Retreat/Thumb.jpg",
    link: "/centers/kerala/sitaram-beach-retreat"
  },
  {
    name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
    city: "Bangalore",
    location: "Bangalore",
    description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm",
    rating: 4.9,
    reviews: 500,
    image: "/Center Images/SOUKYA/top center Thumb.jpg",
    link: "/centers/bangalore/soukya"
  },
  {
    name: "The Imperial Spa and Wellness",
    city: "Delhi",
    location: "Delhi",
    description: "Step into a world of refined relaxation at The Imperial Spa and Wellness, a luxury wellness destination designed to restore balance, calm, and vitality. Blending timeless healing traditions with modern wellness therapies, the centre offers a peaceful retreat for guests seeking deep rejuvenation of body and mind. From personalized spa rituals to restorative wellness experiences, every treatment is thoughtfully curated by skilled professionals to deliver comfort, renewal, and holistic well-being in an elegant setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/The Imperial Spa & Salon/Thumb.jpg",
    link: "/centers/delhi/the-imperial-spa-and-wellness"
  },
  {
    name: "Ayur Bethaniya Ayurveda Hospital",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in holistic healing at Ayur Bethaniya Ayurveda Hospital, a trusted destination for authentic Ayurveda treatments in the heart of Kerala. Rooted in traditional wisdom and guided by experienced Ayurvedic physicians, the hospital offers personalized therapies designed to restore balance of body, mind, and soul. Set in a calm and healing environment, Ayur Bethaniya combines classical Ayurveda with compassionate care for long-lasting wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayur Bethaniya/CTA.jpg",
    link: "/centers/kerala/ayur-bethaniya-ayurveda-hospital"
  },
  {
    name: "Akanta Ayurveda and Yoga Resort",
    city: "Kochi",
    location: "Kochi",
    description: "Embrace holistic transformation at Akanta Ayurveda & Yoga Cherai, Kerala's exclusive fully-licensed Ayurveda resort harmoniously positioned between the pristine Arabian Sea and tranquil backwaters. As the only yoga retreat center at Cherai Beach licensed as an Ayurvedic hospital, Akanta integrates government-verified Oushadi Clinic medicines with personalized therapeutic protocols.",
    rating: 4.5,
    reviews: 479,
    image: "/Center Images/Akanta Ayurveda and Yoga Resort/thumb.jpg",
    link: "/centers/kochi/akanta-ayurveda-and-yoga-resort"
  },
  {
    name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
    city: "Rishikesh",
    location: "Rishikesh",
    description: "Veda5 is one of India’s most premium Ayurveda & Yoga wellness retreats — combining luxury, nature, and authentic healing. From Himalayan views in Rishikesh to a serene beachfront retreat in Kerala & Goa, Veda5 offers world-class Ayurveda, detox therapies, and holistic rejuvenation.",
    rating: 4.9,
    reviews: 420,
    image: "/Center Images/veda5/veda5-1.jpg",
    link: "/centers/veda5"
  },
  {
    name: "Dharana At Shillim",
    city: "Pune",
    location: "Pune",
    description: "Immerse yourself in a journey of deep wellness at Dharana At Shillim, a tranquil retreat dedicated to holistic healing and mindful living. Surrounded by the serene Sahyadri mountains, the center blends traditional healing wisdom with modern wellness practices to create a truly transformative experience. Guided by experienced practitioners, every program is thoughtfully designed to restore harmony between body, mind, and spirit. From personalized therapies to mindfulness and rejuvenation programs, Dharana At Shillim offers a peaceful sanctuary for those seeking balance, vitality, and long-term well-being.",
    rating: 4.8,
    reviews: 3900,
    image: "/Center Images/Dharana At Shillim/Thumb.jpg",
    link: "/centers/pune/dharana-at-shillim"
  },
  {
    name: "Namaste Dwaar – Countryside Wellness Retreat",
    city: "Delhi",
    location: "Delhi",
    description: "Peaceful farmhouse sanctuary near NCR offering authentic Ayurvedic therapies, farm-fresh sattvic food, and compassionate care.",
    rating: 4.8,
    reviews: 180,
    image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
    link: "/centers/delhi/namastedwaar"
  },
  {
    name: "Kalari Kovilakom - The Palace For Ayurveda",
    city: "Palakkad",
    location: "Palakkad",
    description: "Immerse yourself in the authentic discipline of Ayurveda at Kalari Kovilakom � The Palace For Ayurveda, a globally acclaimed wellness retreat rooted in ancient healing traditions. Set within a restored heritage palace, this unique center follows the classical gurukula system, offering a structured and immersive approach to Ayurvedic care. Guided by experienced Vaidyas, every program is tailored to restore balance, detoxify the body, and promote long-term well-being through time-tested therapies and holistic practices. With a strong focus on Panchakarma and intensive healing programs, Kalari Kovilakom provides a highly personalized wellness journey. From therapeutic treatments and sattvic nutrition to yoga and meditation, every element is carefully designed to support deep rejuvenation of body and mind. Ideal for those seeking serious, results-driven Ayurvedic Healing, the center delivers an environment of discipline, authenticity, and transformative care.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/centers/kerala/kalari-kovilakom"
  },
  {
    name: "Dhathri Ayurveda Hospital & Panchakarma Center",
    city: "Kayamkulam",
    location: "Kayamkulam",
    description: "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma. Expect a deeply healing journey where ancient heritage meets clinical excellence in a tranquil, natural environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
    link: "/centers/kerala/dhathri-ayurveda"
  },
];

const UlcerativeColitisTreatment = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const updateTopCentersLayout = () => {
      if (window.innerWidth < 768) {
        setTopCentersPerSlide(1);
        return;
      }
      if (window.innerWidth < 1024) {
        setTopCentersPerSlide(2);
        return;
      }
      setTopCentersPerSlide(3);
    };
    updateTopCentersLayout();
    window.addEventListener("resize", updateTopCentersLayout);
    return () => window.removeEventListener("resize", updateTopCentersLayout);
  }, []);

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  
  useEffect(() => {
    setTopCentersSlide((prev) => prev % topCentersTotalSlides);
  }, [topCentersTotalSlides]);

  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (centerName: string) => {
    setExpandedCenterName((prev) => (prev === centerName ? null : centerName));
  };

  const goReviewPrevious = () => setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview((prev) => (prev + 1) % patientReviews.length);

  const jumpSections = [
    { id: "intro", title: "Intro & Overview" },
    { id: "therapies", title: "Core Ayurvedic Therapies" },
    { id: "diet", title: "Diet & Lifestyle" },
    { id: "cost-duration", title: "Packages, Cost & Duration" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "top-centers", title: "Top Ayurvedic Centers" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins text-left">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">A Holistic Path to Healing the Gut</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Ulcerative Colitis Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">Ayurveda treatment for Ulcerative Colitis is a profound, gentle path that focuses on healing the inflamed gut lining, stopping the bleeding, and achieving long-term remission.</p>
              <div className="space-y-2.5 pt-2">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 Patient Satisfaction</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16 mt-6 md:mt-0">
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
        
        {/* Intro */}
        <section id="intro" className="scroll-mt-24 mb-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/Treatments-images/Ulcerative Colitis Treatment.jpg" 
                alt="Ulcerative Colitis Ayurveda treatment" 
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-[#335765] leading-tight text-center md:text-left">The Fire Within: Pitta Grahani</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                In Ayurveda, Ulcerative Colitis is closely correlated with <strong className="text-[#335765]">Pitta Grahani</strong>. The core problem is a severe aggravation of the Pitta dosha (fire and water elements). The hot, sharp qualities of an imbalanced Pitta cause severe inflammation and ulceration in the colon.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                This fiery nature vitiates the blood tissue (<strong className="text-[#335765]">Rakta Dhatu</strong>), leading to the characteristic bleeding. Our treatments avoid aggressive detoxification, focusing instead on deep, cooling, intra-rectal therapies that heal the ulcers directly at the source.
              </p>
              <div className="pt-2 text-center md:text-left">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Therapies */}
        <section id="therapies" className="scroll-mt-24 space-y-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Core Ayurvedic Therapies for Ulcerative Colitis</h2>
            <p className="text-[#7F543D] text-lg">The treatment protocol is incredibly gentle, prioritizing mucosal healing, cooling the inflammation, and calming the gut-brain axis.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTherapies.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform bg-white">
                  <CardContent className="p-6 md:p-8 text-center flex flex-col items-center h-full">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#EDE8D0] ring-4 ring-[#d8d0ae]/30 shrink-0 mb-6">
                      <Icon className="h-8 w-8 text-[#2F5B5D]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#335765] mb-1">{stage.title}</h3>
                    <p className="text-[#7F543D] mb-4 text-sm font-semibold uppercase tracking-wider">{stage.sanskrit}</p>
                    <p className="text-[#5f4636] leading-relaxed text-sm">
                      {stage.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Diet & Lifestyle */}
        <section id="diet" className="scroll-mt-24 space-y-10">
          <div className="bg-[#335765] text-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 text-left">
              <div className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <UtensilsCrossed className="text-yellow-400 h-8 w-8" />
                  <h3 className="text-2xl font-bold">The Critical Role of Pathya (Diet)</h3>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">Dietary management is <strong>non-negotiable</strong> for healing Ulcerative Colitis. The goal is to eat foods that are cooling, binding, and easy to digest.</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" /> Foods to Favour
                    </h4>
                    <ul className="space-y-2">
                      {dietaryGuidelines.favour.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/90 text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-300 mb-3 flex items-center gap-2">
                      <X className="h-5 w-5" /> Foods to Strictly Avoid
                    </h4>
                    <ul className="space-y-2">
                      {dietaryGuidelines.avoid.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/90 text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative p-8 md:p-12 space-y-6 bg-[#2F5B5D] overflow-hidden flex flex-col justify-center h-full">
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4 text-center md:text-left">
                    <Wind className="text-sky-300 h-8 w-8 drop-shadow-md shrink-0" />
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">Lifestyle Adjustments (Vihara)</h3>
                  </div>
                  <ul className="space-y-4">
                    {lifestyleAdjustments.map((item, i) => {
                      const [title, desc] = item.split(": ");
                      return (
                        <li key={i} className="bg-white/10 p-4 rounded-xl border border-white/20 text-left">
                          <h4 className="font-bold text-white text-base mb-1">{title}</h4>
                          <p className="text-white/80 text-sm">{desc}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Treatment Packages & Cost */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
           <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration For Ulcerative Colitis Treatment in India</h2>
             <p className="text-lg text-[#7F543D]">Select a timeline that matches your healing goals. Each package includes daily physician consultation, prescribed mucosal therapies, and strict dietary management.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
             {packages.map((pkg, idx) => {
               return (
                 <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full bg-white">
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
                   
                   <CardContent className="p-4 md:p-5 flex-grow flex flex-col space-y-3 h-full">
                     <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50 shrink-0">
                       <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                       <span className="font-bold text-[#335765] text-sm">Duration:</span>
                       <span className="font-semibold text-sm">{pkg.duration}</span>
                     </div>
                     <div className="text-sm text-[#5f4636] flex-grow leading-relaxed border-l-[3px] border-[#335765] pl-3 py-1 font-medium text-left">
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
               );
             })}
           </div>
        </section>

      {/* Patient Reviews */}
        <section id="reviews" className="scroll-mt-24 bg-transparent w-full">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
            </div>

            <div className="max-w-4xl mx-auto relative px-0 md:px-0">
              <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
                <button
                  onClick={goReviewPrevious}
                  className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
                <button
                  onClick={goReviewNext}
                  className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
                <CardContent className="p-4 md:p-12 relative text-left">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                        "{patientReviews[currentReview].title}"
                      </h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                        "{patientReviews[currentReview].review}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                        {patientReviews[currentReview].name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight">
                            {patientReviews[currentReview].name}
                          </h4>
                          {patientReviews[currentReview].verified && (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">
                              &#10003; Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                          {patientReviews[currentReview].location} {patientReviews[currentReview].condition && `- ${patientReviews[currentReview].condition}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                        ))}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-[#335765]">
                        {patientReviews[currentReview].rating}.0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-2 mt-8">
                {patientReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    className={`transition-all rounded-full ${currentReview === idx
                        ? "w-8 h-3 bg-[#335765]"
                        : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"
                      }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Centers */}
        <section id="top-centers" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Ulcerative Colitis Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized, gentle care for severe gastrointestinal conditions.</p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersPrevious}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Previous centers"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersNext}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Next centers"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 w-full px-0 md:px-6 lg:px-8 items-stretch">
              {topAyurvedicCenters.slice(topCentersSlide * topCentersPerSlide, topCentersSlide * topCentersPerSlide + topCentersPerSlide).map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                    <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                      <img
                        src={center.image}
                        alt={center.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow text-left">
                      <h3 className="text-lg md:text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex text-left">{center.name}</h3>
                      
                      <div className="flex flex-nowrap items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 md:mt-1 md:mb-4 text-left overflow-hidden">
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
                        <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>
                          {center.description}
                        </p>
                        <button
                          onClick={() => toggleCenterDescription(center.name)}
                          className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block"
                        >
                          {expandedCenterName === center.name ? "Read Less" : "Read More"}
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Link
                          to={center.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap"
                        >
                          View Details
                        </Link>
                        <Button
                          className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs"
                          onClick={() => setQuoteModalOpen(true)}
                        >
                          Get Quote
                        </Button>
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
                  <button
                    key={i}
                    onClick={() => setTopCentersSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`}
                  />
                ))}
              </div>
            )}

            <div className="flex justify-center mt-4">
              <Link
                to="/centers"
                target="_blank"
                rel="noreferrer"
                className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
              >
                VIEW ALL CENTERS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

        {/* Book Consultation CTA */}
        <section className="scroll-mt-24 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full text-left">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img
                src="/Treatments-images/Ulcerative Colitis Treatment.jpg"
                alt="Ulcerative Colitis Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1 text-left">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Ulcerative Colitis Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl text-left">
                Start your journey to long-term mucosal healing and remission. Connect with specialized Ayurvedic gastroenterology centers.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Ulcerative%20Colitis%20Treatment."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>
                  Get Free Consultation Here
                </Button>
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
          <span className="drop-shadow-sm">B</span>
          <span className="drop-shadow-sm">R</span>
          <Search size={16} strokeWidth={3.5} className="drop-shadow-sm" />
          <span className="drop-shadow-sm">W</span>
          <span className="drop-shadow-sm">S</span>
          <span className="drop-shadow-sm">E</span>
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

      {/* Mobile Quote Button to match reference style */}
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
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start mb-3 relative z-10 text-left">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">
                  Program Sections
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"
                title="Close Menu"
              >
                <X className="h-6 w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic text-left">
                "Jump directly to any section in this ulcerative colitis program page."
              </p>
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
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">
                    {section.title}
                  </span>
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

export default UlcerativeColitisTreatment;

