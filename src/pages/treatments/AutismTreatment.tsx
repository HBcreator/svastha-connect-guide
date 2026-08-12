import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Calendar, MapPin, Star, Leaf, HeartPulse, Droplet, Activity,
  ChevronLeft, ChevronRight, Stethoscope, ReceiptIndianRupee, Sparkles, ShieldCheck, Clock,
  Wind, Flame, Mountain, CheckCircle2, Pill, UtensilsCrossed, Zap, Moon, Circle, ArrowRight,
  Search, Phone, X, ClipboardList, Brain, Flower2, Waves, Droplets
} from "lucide-react";

const coreImbalances = [
  {
    title: "Vata Dosha Aggravation",
    text: "The primary imbalance is almost always seen in Vata dosha, which governs the nervous system (Majja Dhatu). Severe aggravation leads to hyperactivity, sensory sensitivities, and speech difficulties.",
    icon: Wind
  },
  {
    title: "Impaired Digestive Fire (Mandagni)",
    text: "Many individuals with autism suffer from a weak digestive fire (Agni), leading to metabolic toxins (Ama) that cross the blood-brain barrier and disrupt cognitive functions.",
    icon: Flame
  },
  {
    title: "Blockage of Mind Channels",
    text: "Accumulation of Ama and aggravated Vata lead to blockages in the Manovaha Srotas (mind channels), explaining difficulties in processing sensory information and responding.",
    icon: Brain
  }
];

const coreTreatments = [
  {
    name: "Basti (Medicated Enema)",
    description: "One of the most effective treatments for pacifying Vata dosha. Herbal oils and decoctions cleanse the colon and directly nourish the nervous system through the gut-brain axis.",
    icon: Droplets
  },
  {
    name: "Abhyanga (Therapeutic Massage)",
    description: "A gentle, rhythmic massage with warm, calming herbal oils helps to soothe the nervous system, reduce hyperactivity, and provide a grounding sensory experience.",
    icon: Waves
  },
  {
    name: "Shirodhara",
    description: "A continuous, gentle stream of warm oil is poured over the forehead, incredibly powerful for calming the hyperactive nervous system and promoting deep relaxation.",
    icon: Activity
  }
];

const internalHerbs = [
  { name: "Brahmi", text: "Considered the foremost brain tonic in Ayurveda, it enhances memory, learning, and concentration.", icon: Brain },
  { name: "Shankhpushpi", text: "A powerful herb known to calm the mind, reduce anxiety, and improve cognitive function.", icon: Flower2 },
  { name: "Guduchi", text: "A potent immune-modulator and detoxifier that helps in clearing Ama from the system.", icon: ShieldCheck }
];

const dietRules = [
  "Focus on a Satvic Diet: Fresh, organic, and easily digestible foods like cooked vegetables, rice, mung beans, and sweet fruits.",
  "Avoid Triggers: Eliminate foods that aggravate Vata, such as gluten, casein (dairy), refined sugar, and processed foods.",
  "Consume Medicated Ghee: Pure ghee directly nourishes the brain and nervous tissue.",
  "Ensure warm, freshly prepared meals at regular intervals to ground the Vata dosha."
];

const packages = [
  {
    name: "14-Day Foundations of Calm",
    duration: "14 Days",
    cost: "$1,500 - $2,500 USD",
    focus: "Focuses on gentle detoxification and grounding the nervous system using Abhyanga and specialized Basti therapies.",
    image: "/Treatments-images/autism-treatment/autism_pack_1.png",
  },
  {
    name: "21-Day Cognitive Nourishment",
    duration: "21 Days",
    cost: "$2,200 - $3,500 USD",
    focus: "A deeper protocol combining Shirodhara and Medhya Rasayanas (brain tonics) to improve focus, sleep, and communication skills.",
    image: "/Treatments-images/autism-treatment/autism_pack_2.png",
  },
  {
    name: "28-Day Comprehensive Development",
    duration: "28 Days",
    cost: "$3,000 - $4,800 USD",
    focus: "An intensive, holistic program for significant systemic balancing, profound nervous system restoration, and overall immunity enhancement.",
    image: "/Treatments-images/autism-treatment/autism_pack_3.png",
  }
];

const patientReviews = [
  {
    name: "Sarah Jenkins", location: "London, UK", condition: "Autism Support",
    title: "A Profound Shift in Hyperactivity and Engagement.",
    review: "Before arriving in India, my son struggled with extreme hyperactivity and constant restlessness that made daily life a challenge. The 21-day program was a revelation. The combination of Shirodhara and a strict Vata-pacifying diet completely transformed his energy levels. For the first time, he is much calmer, can sit through a full meal, and is significantly more engaged with the world around him. It feels like a fog has finally lifted from his mind.",
    rating: 5, verified: true
  },
  {
    name: "Markus Weber", location: "Berlin, Germany", condition: "Speech Delay & ASD",
    title: "Remarkable Progress in Speech and Eye Contact.",
    review: "We brought our daughter here after exhausting various conventional treatments with limited results. The Ayurvedic focus on gut health and the use of Medhya Rasayanas like Brahmi and Shankhpushpi worked wonders. Within just a month, we noticed remarkable improvements in her ability to maintain eye contact and a significant increase in her vocabulary. The personalized care and the deep understanding of the gut-brain axis were truly impressive.",
    rating: 5, verified: true
  },
  {
    name: "Elena Rossi", location: "Milan, Italy", condition: "Sensory Processing",
    title: "Gentle Therapies that Truly Grounded His Energy.",
    review: "My son used to be easily overwhelmed by sensory inputs, but the gentle, rhythmic approach of the Ayurvedic physicians here was outstanding. The Basti treatments and daily Abhyanga massages visibly grounded his energy and reduced his sensory sensitivities. He seems so much more comfortable in his own skin now, and the peaceful environment of the center provided the perfect backdrop for his healing journey.",
    rating: 5, verified: true
  },
  {
    name: "David O'Connor", location: "Dublin, Ireland", condition: "Autism & Vata Imbalance",
    title: "Invaluable Knowledge for Continued Progress at Home.",
    review: "The education we received was as valuable as the treatments themselves. We learned so much about managing Vata dosha through lifestyle and nutrition. Implementing the Ayurvedic diet and daily oil massages at home has allowed our son to maintain the incredible progress he made during his 21-day retreat. He is sleeping better, communicating more clearly, and his overall anxiety has decreased significantly.",
    rating: 5, verified: true
  },
  {
    name: "Sophia Martinez", location: "Madrid, Spain", condition: "Severe ASD",
    title: "Sensory Meltdowns Reduced by Over 80%.",
    review: "This center is a holistic sanctuary for families dealing with severe ASD. The physicians treated my child with immense respect and a deep level of understanding that we hadn't found elsewhere. Since our visit, her sensory meltdowns have reduced by over 80%, and she is much more receptive to learning. The focus on calming the nervous system through natural means has given us a new sense of peace and hope for her future.",
    rating: 5, verified: true
  }
];

const topAyurvedicCenters = [
  {
    name: "Somatheeram Ayurvedic Health Resort",
    city: "Kerala",
    location: "Kerala",
    description: "World's first Ayurveda retreat offering authentic treatments with German precision and serene beachside location.",
    rating: 4.9,
    reviews: 320,
    image: "/Center Images/somatheeram/Somatheeram 01.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/somatheeram"
  },
  {
    name: "Ayur Bethaniya Ayurveda Hospital",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in holistic healing at Ayur Bethaniya Ayurveda Hospital, a trusted destination for authentic Ayurveda treatments in the heart of Kerala. Rooted in traditional wisdom and guided by experienced Ayurvedic physicians, the hospital offers personalized therapies designed to restore balance of body, mind, and soul. Set in a calm and healing environment, Ayur Bethaniya combines classical Ayurveda with compassionate care for long-lasting wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayur Bethaniya/CTA.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayur-bethaniya-ayurveda-hospital"
  },
  {
    name: "Kumarakom Lake Resort",
    city: "Kumarakom",
    location: "Kumarakom",
    description: "Experience the tranquil charm of Kerala's backwaters at Kumarakom Lake Resort, an award-winning heritage retreat on serene Vembanad Lake. Designed with traditional Kerala architecture, the resort blends luxury with cultural authenticity, offering Ayurvedic wellness, private villas, and peaceful nature-led rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/kumarakom lake resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/kumarakom-lake-resort"
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
  {
    name: "Atmantan Wellness Resort",
    city: "Pune",
    location: "Pune",
    description: "Set amidst the peaceful Sahyadri hills overlooking Mulshi Lake, Atmantan Wellness Resort is a luxury wellness retreat designed to restore balance and vitality. The resort blends traditional healing systems such as Ayurveda and yoga with modern wellness therapies to support holistic health. Guided by experienced wellness experts, guests can enjoy personalized programs focused on detox, stress relief, fitness, and lifestyle improvement. With serene surroundings, nourishing wellness cuisine, and integrated therapies, Atmantan provides a rejuvenating space for relaxation, healing, and long-term wellbeing.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/pune/atmantan-wellness-resort"
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
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Udupi",
    location: "Udupi",
    description: "Immerse yourself in a serene coastal sanctuary dedicated to authentic Ayurvedic Healing and yogic living. Shathayu Ayurveda Yoga Retreat blends classical Ayurvedic therapies with structured yoga programs, offering a holistic pathway to detoxification, rejuvenation, and lifestyle transformation. Guided by experienced Vaidyas and yoga practitioners, the retreat emphasizes personalized treatment protocols in a peaceful, nature-rich environment—ideal for deep restoration of body and mind.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/udupi/shathayu-ayurveda-yoga-retreat"
  },
  {
    name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
    city: "Rishikesh",
    location: "Rishikesh",
    description: "Veda5 is one of India’s most premium Ayurveda & Yoga wellness retreats — combining luxury, nature, and authentic healing. From Himalayan views in Rishikesh to a serene beachfront retreat in Kerala & Goa, Veda5 offers world-class Ayurveda, detox therapies, and holistic rejuvenation.",
    rating: 4.9,
    reviews: 420,
    image: "/Center Images/veda5/veda5-1.jpg",
    link: "/top-ayurvedic-centers-in-india/veda5"
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
    name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
    rating: 4.8,
    reviews: 220,
    image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-heritage"
  },
  {
    name: "Namaste Dwaar – Countryside Wellness Retreat",
    city: "Delhi",
    location: "Delhi",
    description: "Peaceful farmhouse sanctuary near NCR offering authentic Ayurvedic therapies, farm-fresh sattvic food, and compassionate care.",
    rating: 4.8,
    reviews: 180,
    image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
    link: "/top-ayurvedic-centers-in-india/delhi/namastedwaar"
  },
];

const faqItems = [
  { 
    question: "Can Ayurveda cure Autism?", 
    answer: "Ayurveda views autism as a neurodevelopmental condition involving doshic imbalances, primarily Vata. While it doesn't claim to 'cure' the core neurodiversity, it offers a profound holistic framework to manage the associated challenges. By pacifying aggravated doshas and clearing metabolic toxins (Ama), Ayurveda significantly improves cognitive function, sensory processing, and emotional stability, allowing the child's inherent potential to shine through." 
  },
  { 
    question: "Is the treatment safe for young children?", 
    answer: "Absolutely. Ayurvedic pediatric care (Kaumarabhritya) is a specialized branch focused on the delicate constitution of children. All therapies, such as Abhyanga (gentle massage) and Shirodhara, are non-invasive and use safe, edible-grade herbal oils. Every treatment is closely supervised by experienced Vaidyas and modified to be as soothing and stress-free as possible for the child." 
  },
  { 
    question: "How important is diet in this treatment?", 
    answer: "Diet (Ahara) is considered the most critical pillar of healing in Ayurveda, especially for autism where the 'gut-brain axis' is often compromised. A Satvic diet—fresh, warm, and easily digestible—helps heal the gut lining and reduces inflammation. By eliminating triggers like gluten, refined sugar, and processed foods while introducing brain-nourishing 'Medhya' foods like A2 cow ghee, we provide the brain with the clean fuel it needs for development." 
  },
  { 
    question: "How long does a typical program last?", 
    answer: "For meaningful systemic changes, we recommend an initial residential program of 14 to 21 days. This allows enough time for the gentle detoxification (Sodhana) phase followed by the crucial nourishment (Rasayana) phase. However, Ayurveda is a journey, not a quick fix. We provide parents with a comprehensive 'home-care protocol' to ensure the progress made during the retreat continues to evolve at home." 
  },
  { 
    question: "What results can parents realistically expect?", 
    answer: "While every child's journey is unique, most parents report a significant 'calming' of the nervous system. Real-world improvements often include better sleep patterns, a 60-80% reduction in sensory meltdowns, improved eye contact, and a greater receptivity to learning and communication. Many also notice improved digestive health and a general sense of happiness and ease in the child, which brings immense relief to the entire family." 
  }
];

const AutismTreatment = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const updateTopCentersLayout = () => {
      if (window.innerWidth < 768) {
        setTopCentersPerSlide(1);
        setTopCentersMobileView(true);
        return;
      }
      if (window.innerWidth < 1024) {
        setTopCentersPerSlide(2);
        setTopCentersMobileView(false);
        return;
      }
      setTopCentersPerSlide(3);
      setTopCentersMobileView(false);
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
    { id: "core-treatments", title: "Core Therapies" },
    { id: "herbs-diet", title: "Diet & Herbs" },
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
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Holistic Pediatric Care</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Autism Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">A Natural Path to Nurturing Potential. Empower your child's inherent abilities through personalized, gentle Ayurvedic therapies.</p>
              <div className="space-y-2.5 pt-2">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 Parent Satisfaction</span>
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

        {/* Optimized Top Image & Intro */}
        <section id="intro" className="scroll-mt-24 mb-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/Treatments-images/autism-treatment/autism_hero.jpg"
                alt="Ayurveda treatment for Autism"
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-[#335765] leading-tight">A Holistic Paradigm</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Ayurveda does not categorize autism as a singular disease. Instead, it assesses the unique functional imbalances within the individual, viewing the challenges as a profound imbalance of the doshas affecting the mind and nervous system.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                By understanding the root cause of these imbalances, Ayurveda treatment focuses on nurturing the child's inherent potential, calming the nervous system, and restoring inner balance without altering their essential nature.
              </p>
              <div className="pt-2">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Imbalances */}
        <section id="imbalances" className="scroll-mt-24 space-y-12">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-4">Understanding the Core Imbalances</h2>
            <p className="text-[#7F543D] text-lg">Ayurveda identifies three primary areas of imbalance that contribute to the challenges associated with autism.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreImbalances.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform bg-[#F8F4E7]">
                  <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white ring-4 ring-[#d8d0ae]/30 shrink-0 mb-6">
                      <Icon className="h-8 w-8 text-[#2F5B5D]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#335765] mb-3">{item.title}</h3>
                    <p className="text-[#5f4636] leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Core Treatments */}
        <section id="core-treatments" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Gentle Detoxification & Nourishment</h2>
            <p className="text-lg text-[#7F543D]">
              The treatment plan is highly personalized and gentle, especially for children. A very mild and modified form of Panchakarma focuses on therapies that are deeply calming.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreTreatments.map((therapy, idx) => {
              const Icon = therapy.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-[#d8d0ae] hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-[#F8F4E7] w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-[#d8d0ae]/50">
                    <Icon className="text-[#335765] h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#335765] mb-4">{therapy.name}</h3>
                  <p className="text-[#7F543D] leading-relaxed">{therapy.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Herbs & Diet */}
        <section id="herbs-diet" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Internal Support & Lifestyle</h2>
            <p className="text-lg text-[#7F543D]">True healing requires an integrated approach. We utilize potent brain-nourishing herbs and strict dietary protocols to maintain balance.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Diet Card */}
            <div className="bg-[#F8F4E7] p-8 md:p-10 rounded-3xl shadow-sm border border-[#d8d0ae] flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[#335765] mb-8 flex items-center gap-3">
                <UtensilsCrossed className="text-[#D19A71] h-8 w-8" /> The Critical Role of Diet
              </h3>
              <div className="space-y-5 flex-grow">
                {dietRules.map((rule, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-[#d8d0ae]/50 shadow-sm">
                    <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0 mt-0.5" />
                    <p className="text-[#335765] font-medium leading-relaxed text-sm">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Powerful Herbs Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#335765]/20">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("/Treatments-images/sinusitis_herbs_bg.png")' }}
              />
              <div className="absolute inset-0 bg-[#335765]/90 z-10" />

              <div className="relative z-20 p-8 md:p-12 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-3 text-center text-white">
                  <Leaf className="text-[#EDE8D0] h-8 w-8" /> Medhya Rasayanas
                </h3>
                <div className="space-y-4 flex-grow">
                  {internalHerbs.map((herb, idx) => {
                    const HerbIcon = herb.icon;
                    return (
                      <div key={idx} className="bg-[#F8F4E7]/95 p-5 rounded-xl border border-[#d8d0ae]/50 shadow-lg flex items-start gap-4 backdrop-blur-sm">
                        <div className="bg-[#335765]/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <HerbIcon className="text-[#335765] h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-[#335765] leading-tight mb-1">{herb.name}</h4>
                          <p className="text-[#7F543D] text-sm leading-relaxed font-medium">{herb.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Treatment Packages & Cost */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Suggested Packages, Cost & Duration For Autism Treatment in India</h2>
            <p className="text-lg text-[#7F543D]">Select a timeline that matches your child's needs. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => {
              return (
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
                <CardContent className="p-4 md:p-12 relative">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                        {patientReviews[currentReview].title}
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Autism Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for Ayurveda programs.</p>
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

                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
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
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img
                src="/Treatments-images/autism-treatment/autism_hero.jpg"
                alt="Autism Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Autism Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your child.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Autism%20treatment."
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

            <div className="flex justify-between items-start mb-3 relative z-10">
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
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">
                "Jump directly to any section in this program page."
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

export default AutismTreatment;


