import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Calendar, MapPin, Star, Droplet, Wind, ShieldCheck, Dumbbell,
  ChevronLeft, ChevronRight, CheckCircle2, UtensilsCrossed, ArrowRight,
  Search, Phone, X, ClipboardList, Clock, Sparkles, Brain
} from "lucide-react";

const coreTherapies = [
  {
    title: "Shirodhara",
    sanskrit: "Continuous Medicated Stream",
    text: "A profoundly relaxing therapy where a continuous stream of warm, medicated oil is poured over the forehead. Exceptionally effective for stress-induced hair loss as it calms the nervous system and pacifies Pitta.",
    icon: Droplet
  },
  {
    title: "Shiro Abhyanga",
    sanskrit: "Invigorating Scalp Massage",
    text: "A deep head massage with specific hair-nourishing oils (Thailams). This improves blood circulation to the scalp, strengthens the hair roots, and promotes robust hair growth.",
    icon: Dumbbell
  },
  {
    title: "Shirolepam",
    sanskrit: "Therapeutic Scalp Mask",
    text: "A thick paste made of potent cooling herbs like Amla and Bhringraj is applied directly to the scalp. This deeply nourishes the follicles and neutralizes localized scalp heat.",
    icon: Sparkles
  },
  {
    title: "Nasya Karma",
    sanskrit: "Nasal Administration",
    text: "Administering medicated oils through the nasal passages. This is a powerful therapy that works on the entire head region, balancing the doshas and promoting healthy hair from the root.",
    icon: Brain
  }
];

const dietaryGuidelines = {
  favour: [
    "Nutrient-Dense Foods: Include foods rich in iron, calcium, and protein which directly nourish Asthi Dhatu (bone tissue) and hair.",
    "Cooling Foods: Favour sweet, bitter, and astringent tastes to pacify Pitta. Cucumber, coconut, and leafy greens are excellent.",
    "Healthy Fats: Ghee and sesame oil lubricate the tissues and prevent the dryness that leads to brittle hair and dandruff.",
    "Hydration: Drink plenty of water throughout the day to flush out Ama (toxins) that can block hair follicles."
  ],
  avoid: [
    "Pitta-Aggravating Foods: Strictly avoid excessive consumption of spicy, sour, salty, oily, and fermented foods.",
    "Junk Food: Regular intake of processed and refined foods creates toxins and severely weakens digestion.",
    "Excessive Caffeine: Overuse of caffeine aggravates the nervous system and Vata dosha, leading to dry, thinning hair.",
    "Incompatible Foods (Viruddha Ahara): Avoid mixing dairy with sour fruits or fish, as this creates blood toxicity."
  ]
};

const lifestyleAdjustments = [
  "Stress Management: This is a major culprit. High levels of stress, anger, and anxiety severely aggravate the Pitta dosha. Practice daily meditation.",
  "Irregular Routine: An inconsistent sleep schedule and irregular meal times throw the Vata dosha out of balance. Establish a Dinacharya.",
  "Chemical Exposure: Overuse of harsh chemical shampoos, dyes, and styling products damages the scalp ecosystem. Switch to herbal cleansers.",
  "Gentle Care: Avoid vigorous brushing or tight hairstyles that put physical stress on the hair roots."
];

const packages = [
  {
    name: "14-Day Scalp Rejuvenation",
    duration: "14 Days",
    cost: "$1,200 - $2,200 USD",
    focus: "Perfect for early-stage thinning. Focuses on Shiro Abhyanga and Shirolepam to stimulate blood flow and cool the scalp.",
    image: "/Treatments-images/Panchakarma Treatment.jpg",
  },
  {
    name: "21-Day Deep Follicle Nourishment",
    duration: "21 Days",
    cost: "$2,500 - $4,500 USD",
    focus: "The standard protocol. Adds Nasya and Shirodhara to deeply pacify Vata-Pitta imbalances and reduce stress-induced shedding.",
    image: "/Treatments-images/Ayurveda Treatment.jpg",
  },
  {
    name: "28-Day Comprehensive Regrowth",
    duration: "28 - 35+ Days",
    cost: "$3,500 - $6,500+ USD",
    focus: "For severe Alopecia Areata/Totalis. A deep detox program using blood-purifying therapies and potent Rasayana herbs.",
    image: "/Treatments-images/Post Natal Treatment.jpg",
  }
];

const patientReviews = [
  {
    name: "Berthold Schwarz", location: "Düsseldorf, Germany", condition: "Alopecia Areata",
    title: "My Alopecia Areata Patches Have Fully Regrown.",
    review: "For two years, my dermatologist managed my alopecia areata with steroid injections that only provided temporary regrowth. The Ayurvedic physician in India classified my condition as Indralupta and prescribed Panchakarma to clear the underlying dosha imbalance. By week six, new hair eruption was visible across every patch, and by month three, I had full regrowth.",
    rating: 5, verified: true
  },
  {
    name: "Aisling Connolly", location: "Dublin, Ireland", condition: "Alopecia Totalis",
    title: "Hair is Returning After Alopecia Totalis.",
    review: "Complete scalp hair loss had followed an autoimmune flare. The Ayurvedic physician identified deep blood toxicity as the root cause and prescribed blood-purifying decoctions and medicated milk enema therapy. Tiny hair eruptions began appearing within fifteen days, and by month four, I had visible regrowth covering the majority of my scalp.",
    rating: 5, verified: true
  },
  {
    name: "Camille Lefevre", location: "Lyon, France", condition: "Female Pattern Thinning",
    title: "My Hair Thinning Was Halted and Partially Reversed.",
    review: "My progressive female pattern hair thinning had been worsening for three years, and Minoxidil had failed to produce any regrowth. The physician prescribed a protocol combining Shiro Abhyanga scalp massage with Rasayana rejuvenating formulations. The assessment at two months showed a measurable improvement in my hair density, particularly at the crown.",
    rating: 5, verified: true
  },
  {
    name: "Lasse Bergström", location: "Stockholm, Sweden", condition: "Male Pattern Hair Loss",
    title: "Results My Dermatologist Could Not Match.",
    review: "I had used Finasteride for male pattern hair loss for two years with limited benefit. The Ayurvedic physician identified a Pitta-Vata combined presentation and prescribed Shodhana cleansing treatments. The oral herbal therapy, using herbs like Bhringaraj and Amalaki, produced a significant reduction in my percentage of scalp hair loss, without a single adverse effect.",
    rating: 5, verified: true
  },
  {
    name: "Orla Dempsey", location: "Cork, Ireland", condition: "Post-Partum Hair Loss",
    title: "Ayurveda Rebuilt What Pregnancy Had Depleted.",
    review: "My severe post-partum hair loss had progressed beyond typical shedding. The Ayurvedic physician identified deep tissue depletion (Dhatu Kshaya) as the root cause. The Rasayana rebuilding program, alongside daily Shiro Abhyanga scalp massage, restored my follicular nutrition systematically. The hair loss reduced noticeably from week three.",
    rating: 5, verified: true
  }
];

const faqItems = [
  { question: "Why does Ayurveda associate hair loss with bone health?", answer: "In Ayurveda, hair (Kesha) is considered a secondary product (mala) of bone tissue (Asthi Dhatu). Therefore, if your bone tissue is depleted of nutrients like calcium and minerals, your hair will directly suffer and thin out. We treat the roots internally." },
  { question: "What is the most common cause of hair loss in Ayurveda?", answer: "An aggravation of the Pitta dosha (the fire element) is the leading cause. Excessive body heat, often driven by stress or a spicy/sour diet, literally 'burns out' the hair follicles, leading to premature thinning and greying." },
  { question: "Can Ayurveda treatment regrow hair in bald patches?", answer: "Yes, conditions like Alopecia Areata (Indralupta) respond exceptionally well to Ayurveda treatment. By clearing blood toxicity and balancing the doshas through deep Panchakarma detoxification, the dormant hair follicles can be reactivated." },
  { question: "Are topical oils enough to stop hair fall?", answer: "No. While specialized oils like Bhringraj oil are excellent for nourishing the scalp, severe hair loss requires internal medication to balance the hormones and purify the blood. Ayurveda always combines internal medicine with external therapies." },
  { question: "How does stress cause hair loss?", answer: "Stress severely aggravates the nervous system and increases Pitta (heat) and Vata (dryness) in the head region. This disrupts blood flow to the scalp and starves the follicles of nutrition. Therapies like Shirodhara are specifically designed to reverse this." }
];

const topAyurvedicCenters = [
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
    name: "Sandhya Hot Spring Health Care",
    city: "Manikaran",
    location: "Manikaran",
    description: "Immerse yourself in the healing power of natural hot springs at Sandhya Hot Spring Health Care, a serene wellness retreat known for its therapeutic mineral-rich waters. Surrounded by tranquil landscapes, the center blends traditional healing practices with the restorative benefits of geothermal therapy. Rooted in holistic wellness principles, Sandhya offers personalized treatments designed to detoxify the body, relieve stress, and rejuvenate the mind.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/himachal/sandhya-hot-spring-health-care"
  },
  {
    name: "Ayuskama Ayurveda",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Ayuskama Ayurveda ek authentic Ayurvedic wellness center hai jo traditional Ayurveda ko modern lifestyle ke saath integrate karta hai. Yeh center Ayurveda, Panchakarma aur holistic healing therapies par focus karta hai, jahan personalized treatment plans experienced Ayurvedic doctors ke guidance mein design kiye jaate hain. Natural therapies, herbal medicines aur sattvic lifestyle ke through Ayuskama long-term health, detoxification aur overall rejuvenation ko promote karta hai. Yeh center chronic health issues, stress management aur preventive healthcare ke liye ek holistic approach provide karta hai.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/ayuskama-ayurveda"
  },
  {
    name: "Athreya Ayurvedic Centre",
    city: "Kerala",
    location: "Kerala",
    description: "Authentic Ayurvedic care with personalized therapies and holistic healing in Kerala.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/athreya-ayurvedic-centre"
  },
  {
    name: "Nalanda Retreat Goa",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in a soulful coastal wellness experience at Nalanda Retreat Goa, a serene beachside sanctuary blending yoga, Ayurveda, and holistic healing. Nestled along the tranquil shores of Mandrem Beach, Nalanda offers a transformative escape where ocean rhythms meet ancient wellness traditions. Rooted in mindful living and personalized care, the retreat features guided yoga sessions, meditation practices, and Ayurvedic therapies designed to restore balance and inner harmony.",
    rating: 4.5,
    reviews: 500,
    image: "/Center Images/Nalanda Retreat Goa/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/nalanda-retreat-goa"
  },
  {
    name: "Ayushi Ayurvedic Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Experience the essence of authentic Ayurveda at Ayushi Ayurvedic Retreat, a peaceful destination dedicated to holistic healing and natural wellness. Rooted in classical Ayurvedic principles, the retreat offers personalized therapies designed to restore balance of body, mind, and spirit.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayushi Ayurvedic Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayushi-ayurvedic-retreat"
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
    name: "Ananda In The Himalayas",
    city: "Uttarakhand",
    location: "Uttarakhand",
    description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat nestled in the serene Himalayan foothills. Surrounded by pristine forests and overlooking the Ganges valley, Ananda blends ancient Indian wellness wisdom with modern luxury. Rooted in Ayurveda, Yoga, and Vedanta, Ananda offers highly personalized wellness programs guided by expert physicians and therapists. Each journey is designed to rejuvenate the body, calm the mind, and elevate the spirit—creating lasting transformation through mindful living and natural healing practices.",
    rating: 4.8,
    reviews: 900,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/uttarakhand/ananda-in-the-himalayas"
  },
  {
    name: "Ashiyana Yoga Retreat",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in the peaceful essence of yoga and holistic wellness at Ashiyana Yoga Retreat, a globally renowned destination for transformation and self-discovery. Set amidst lush tropical gardens along the serene Mandrem Beach, Ashiyana offers a unique blend of traditional yoga, meditation, and healing therapies. Rooted in authentic yogic philosophy and mindful living, the retreat provides holistic programs guided by experienced teachers and therapists. Each experience is thoughtfully curated to restore harmony in body, mind, and spirit, promoting deep relaxation, inner balance, and long-lasting wellbeing through natural and time-tested practices.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Ashiyana Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/ashiyana-yoga-retreat"
  },
  {
    name: "Back to Roots Ayurveda Retreat",
    city: "Idukki",
    location: "Idukki",
    description: "Rediscover the roots of true healing at this serene lakeside sanctuary in Idukki. Guided by the wisdom of 4th generation Ayurvedic physicians, this NABH-accredited retreat offers authentic, classical Panchakarma in a pristine natural setting. Expect a deeply personal journey where the focus is on pure, undiluted Ayurveda.",
    rating: 4.9,
    reviews: 100,
    image: "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/back-to-roots"
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
    name: "Krishnendu Ayurveda Hospital",
    city: "Alappuzha",
    location: "Alappuzha",
    description: "Immerse yourself in over 100 years of healing wisdom at Krishnendu, a NABH-accredited hospital in the serene backwaters of Alleppey. Guided by the fourth generation of a renowned physician family, this sanctuary masterfully blends a rich heritage with modern clinical excellence. Expect an authentic and personalized healing journey in a professional and tranquil environment.",
    rating: 4.9,
    reviews: 1500,
    image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/krishnendu-ayurveda-hospital"
  },
];

const Alopecia = () => {
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
            {/* Left-aligned hero content on all screens */}
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">A Holistic Path to Healthy Hair</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Alopecia Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">Ayurveda offers a powerful approach that goes beyond topical solutions to nourish the roots, balance the body's energies, and promote strong, healthy hair growth from within.</p>
              
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
                src="/Treatments-images/Hair Loss.jpg" 
                alt="Ayurvedic Alopecia Treatment" 
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            {/* Center-aligned on mobile, left on desktop */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-[#335765] leading-tight">The Dosha Imbalance (Khalitya)</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                In Ayurveda, severe hair loss is often referred to as <strong className="text-[#335765]">Khalitya</strong> or <strong className="text-[#335765]">Indralupta</strong>. It is primarily driven by an excess of <strong className="text-[#335765]">Pitta dosha</strong> (the fire element) in the body.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                The heat of an aggravated Pitta, often fueled by stress or poor diet, literally "burns out" the hair follicles leading to premature thinning and balding. Simultaneously, a Vata imbalance creates a dry, flaky scalp. Our Ayurvedic protocols cool the system, purify the blood, and deeply nourish the roots.
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
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Core Ayurvedic Therapies</h2>
            <p className="text-[#7F543D] text-lg">Targeted treatments designed to cool Pitta heat, stimulate follicular blood flow, and provide essential nutrients to the scalp.</p>
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
                <p className="text-white/80 leading-relaxed mb-6">Hair is an indicator of internal health. A cooling, Pitta-pacifying diet is essential to halt active hair fall.</p>
                
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
                  {/* Fixed mobile alignment for header */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4 text-center md:text-left">
                    <Sparkles className="text-sky-300 h-8 w-8 drop-shadow-md shrink-0" />
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
             <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration For Alopecia Treatment in India</h2>
             <p className="text-lg text-[#7F543D]">Select a timeline that matches your healing goals. Each package includes daily physician consultation, targeted scalp therapies, and herbal formulations.</p>
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
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients who successfully halted their hair loss and achieved regrowth</p>
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Alopecia Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals providing deep cellular detoxification and authentic scalp therapies.</p>
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
                to="/top-ayurvedic-centers-in-india"
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
                src="/Treatments-images/Hair Loss.jpg"
                alt="Alopecia Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1 text-left">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Alopecia Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl text-left">
                Stop active shedding and stimulate new growth. Connect with India's top Ayurvedic dermatological experts.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Alopecia%20Treatment."
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
                "Jump directly to any section in this alopecia program page."
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

export default Alopecia;

