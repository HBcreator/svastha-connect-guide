import { useState } from "react";
import {
  Calendar, MapPin, Star, Phone, CheckCircle2,
  Medal, Users, ShieldCheck, Globe, Sparkles, BookOpen,
  Leaf, Droplets, Activity, Wind, Stethoscope, ShieldPlus,
  Compass, Waves, Zap, Trees, Mountain, Sun, Palette,
  ChevronLeft, ChevronRight, Search, X, ClipboardList, ChevronDown
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const patientReviews = [
  {
    name: "Thomas Bergmann",
    location: "Stockholm, Sweden",
    condition: "Chronic Back Pain & Sciatica",
    title: "Acupuncture and TCM Gave Me My Mobility Back.",
    review: "After years of relying on strong painkillers for severe sciatica, I turned to TCM in India. The combination of targeted acupuncture and specific herbal decoctions provided relief that I hadn't experienced in a decade. The practitioner explained how the treatments were unblocking stagnant energy pathways. Within three weeks, I was walking pain-free, and I've completely stopped my pain medication.",
    rating: 5,
    verified: true,
  },
  {
    name: "Fatima Al-Zahra",
    location: "Riyadh, Saudi Arabia",
    condition: "Severe Psoriasis",
    title: "Unani Medicine Cleared My Skin from the Inside Out.",
    review: "I had struggled with painful psoriasis flare-ups for most of my adult life. The Unani doctors analyzed my 'Mizaj' (temperament) and prescribed a holistic protocol of dietary changes, herbal blood purifiers, and regimental cupping therapy. It wasn't an overnight fix, but after two months of diligent treatment, my skin is clearer than it has been in 15 years.",
    rating: 5,
    verified: true,
  },
  {
    name: "Dr. Elena Popova",
    location: "St. Petersburg, Russia",
    condition: "Post-Traumatic Stress & Insomnia",
    title: "Sowa-Rigpa Was a Profoundly Grounding Experience.",
    review: "As a medical professional myself, I was intrigued by the Tibetan medical system (Sowa-Rigpa). The pulse diagnosis was remarkably accurate. The herbal pills and gentle physical therapies helped me process deeply held stress that was causing severe insomnia. It felt like a true integration of mind, body, and spiritual healing. I sleep deeply now and feel incredibly centered.",
    rating: 5,
    verified: true,
  },
  {
    name: "James O'Connor",
    location: "Dublin, Ireland",
    condition: "Rheumatoid Arthritis",
    title: "Siddha Medicine Brought Down the Swelling Significantly.",
    review: "The intense joint swelling from my arthritis made daily tasks impossible. The Siddha practitioners in South India used unique herbal-mineral preparations and external therapies that I hadn't seen anywhere else. The treatment was intense, but the results were undeniable. My joint stiffness reduced drastically, and my inflammatory markers in my recent blood test have dropped significantly.",
    rating: 5,
    verified: true,
  },
  {
    name: "Marie Dubois",
    location: "Lyon, France",
    condition: "Chronic Respiratory Infections & Asthma",
    title: "Halotherapy and Ozone Therapy Strengthened My Lungs.",
    review: "Living in a polluted city, I suffered from constant respiratory infections and worsening asthma. The integrative center combined Halotherapy (salt rooms) with systemic Ozone therapy. The salt therapy physically cleared my lungs, while the ozone treatments seemed to supercharge my immune system. I haven't needed my inhaler since returning, and my breathing feels deep and effortless.",
    rating: 5,
    verified: true,
  },
  {
    name: "Kenji Sato",
    location: "Kyoto, Japan",
    condition: "Executive Burnout & High Blood Pressure",
    title: "Forest Bathing and Ayurveda Reset My Nervous System.",
    review: "I was on the verge of a complete breakdown from corporate stress. My retreat combined classical Ayurvedic Panchakarma with structured Forest Bathing (Shinrin-yoku). The sheer immersion in nature, combined with the detoxifying treatments, completely reset my autonomic nervous system. My blood pressure normalized, and I regained a sense of profound inner peace.",
    rating: 5,
    verified: true,
  },
];

const jumpSections = [
  { id: "specialised-therapies", title: "Specialised Therapies" },
  { id: "why-india", title: "Why Choose India" },
  { id: "faq", title: "FAQ" },
  { id: "reviews", title: "Patient Reviews" },
  { id: "consultation", title: "Book Consultation" },
];

const galleryImages = [
  { src: "/Services-images/specialized_main_india.png", alt: "Specialized Alternative Medicine in India" },
  { src: "/Services-images/specialized_homeopathy_india.png", alt: "Holistic Health Consultation" },
  { src: "/Services-images/specialized_naturopathy_india.png", alt: "Natural Healing Therapy" },
  { src: "/Services-images/specialized_acupuncture_india.png", alt: "Acupuncture Session" },
  { src: "/Services-images/specialized_siddha_india.png", alt: "Traditional Siddha Healing" },
  { src: "/Services-images/specialized_unani_india.png", alt: "Unani Medical Practice" },
];

const whyChooseIndia = [
  {
    title: "Global Hub of Ancient Wisdom",
    desc: "India is unique in preserving and officially recognizing multiple medical systems like Siddha, Unani, and Sowa-Rigpa, offering patients a depth of holistic choice found nowhere else.",
    icon: Globe,
  },
  {
    title: "Accredited Excellence",
    desc: "Many of our partner centers are NABH accredited, ensuring that traditional therapies are delivered in a safe, clinical, and hygienic environment by certified medical experts.",
    icon: ShieldCheck,
  },
  {
    title: "Cost-Effective Holistic Care",
    desc: "International patients can access world-class alternative medical systems at a fraction of the cost in their home countries, without compromising on the quality of herbs or expertise.",
    icon: Medal,
  },
  {
    title: "Personalized Protocol Design",
    desc: "Treatments are never generic. Each patient receives a custom-tailored healing journey based on their unique constitution, clinical history, and long-term health goals.",
    icon: Sparkles,
  },
  {
    title: "Deeply Rooted Traditions",
    desc: "These systems are living traditions in India. You receive care from practitioners whose lineages have often practiced these healing arts for generations.",
    icon: BookOpen,
  },
  {
    title: "Serene Healing Locations",
    desc: "From the tranquil foothills of the Himalayas to the lush coastlines of Kerala, the environments themselves are chosen to amplify the therapeutic effects of the medicine.",
    icon: Compass,
  },
];

const faqs = [
  {
    question: "What are Specialized Alternative Medical Systems?",
    answer: "These are comprehensive, standalone systems of medicine like Siddha, Unani, and Sowa-Rigpa that have their own diagnostic tools, pharmacies, and philosophies, offering holistic alternatives to conventional treatments."
  },
  {
    question: "Are these therapies safe for chronic conditions?",
    answer: "Yes, these systems excel at managing chronic, long-term health issues by addressing the root cause rather than just suppressing symptoms. They are highly effective for skin issues, joint pain, and metabolic disorders."
  },
  {
    question: "How do I know which system is right for me?",
    answer: "Our expert consultants help you navigate the choices. During your free consultation, we analyze your health profile to recommend the system—be it Unani, Siddha, or Naturopathy—that aligns best with your needs."
  },
  {
    question: "Can I combine these with my current Western medications?",
    answer: "In most cases, yes. Our doctors are trained to work in an integrative manner. We ensure that the alternative therapies complement your current medical plan safely and effectively."
  },
  {
    question: "What is the typical duration of a treatment program?",
    answer: "While short sessions provide relief, meaningful healing usually requires 14 to 28 days of residential treatment, allowing the body to undergo deep detoxification and reset."
  },
  {
    question: "Are the medicines used natural and safe?",
    answer: "Absolutely. All formulations are plant-based or mineral-based, prepared according to ancient clinical standards and regulated by the Ministry of AYUSH in India for purity and safety."
  }
];

const therapies = [
  {
    name: "Ayurveda",
    icon: Leaf,
    desc: "The 'Science of Life' from ancient India. It focuses on balancing the three biological energies (Vata, Pitta, Kapha) through personalized diets, herbal medicines, and detoxification treatments like Panchakarma.",
    benefits: [
      "Deep detoxification and cellular rejuvenation",
      "Restores hormonal balance and metabolic health",
      "Promotes mental clarity and stress reduction",
    ],
  },
  {
    name: "Traditional Chinese Medicine (TCM)",
    icon: Compass,
    desc: "A holistic system originating in China, utilizing herbal medicine, diet, and lifestyle changes. TCM aims to restore the balance of Yin and Yang and the smooth flow of Qi (energy) through the body's meridians.",
    benefits: [
      "Addresses the root cause of chronic imbalances",
      "Effective for digestive and respiratory disorders",
      "Enhances long-term energy levels and vitality",
    ],
  },
  {
    name: "Acupuncture",
    icon: Activity,
    desc: "A core technique of TCM involving the insertion of fine needles into specific points on the body. This stimulates the nervous system and unblocks energy pathways to relieve pain and treat various physical and mental conditions.",
    benefits: [
      "Immediate and effective chronic pain management",
      "Reduces inflammation and improves circulation",
      "Relieves stress, anxiety, and sleep disorders",
    ],
  },
  {
    name: "Unani Medicine",
    icon: Wind,
    desc: "A Greco-Arabic medical system focused on the balance of four humors (blood, phlegm, yellow bile, and black bile). It uses diet, herbal remedies, and regimental therapies like cupping to maintain health.",
    benefits: [
      "Strong focus on preventive healthcare",
      "Effective for skin, musculoskeletal, and liver disorders",
      "Individualized treatment based on temperament (Mizaj)",
    ],
  },
  {
    name: "Siddha Medicine",
    icon: ShieldPlus,
    desc: "One of the oldest traditional systems from South India, focusing on the 96 principles of human existence. It utilizes unique mineral and metal-based preparations alongside herbs for potent healing.",
    benefits: [
      "Advanced protocols for chronic skin and respiratory issues",
      "Focuses on longevity and anti-aging (Kaya Kalpa)",
      "Strengthens the immune system against infections",
    ],
  },
  {
    name: "Sowa-Rigpa",
    icon: Stethoscope,
    desc: "Commonly known as Amchi or Tibetan medicine, this system integrates Buddhist philosophy with Indian and Chinese medical traditions. It uses pulse diagnosis and herbal pills for holistic healing.",
    benefits: [
      "Highly effective for neurological and stress-related conditions",
      "Gentle yet profound detoxification of internal organs",
      "Promotes emotional balance and spiritual well-being",
    ],
  },
  {
    name: "Hydrotherapy / Aquatic Therapy",
    icon: Droplets,
    desc: "The use of water in various forms (liquid, steam, ice) and temperatures to treat diseases. Techniques include underwater massages, whirlpool baths, and aquatic exercises to improve health.",
    benefits: [
      "Improves blood circulation and lymphatic drainage",
      "Reduces muscle tension and joint inflammation",
      "Accelerates recovery from physical injuries",
    ],
  },
  {
    name: "Balneotherapy",
    icon: Waves,
    desc: "Treatment of diseases by bathing in natural mineral waters or mud. Often practiced at hot springs, it utilizes the chemical and thermal properties of mineral-rich water for therapeutic effects.",
    benefits: [
      "Relieves chronic pain in arthritis and rheumatism",
      "Improves skin conditions like psoriasis and eczema",
      "Induces deep relaxation and reduces nervous tension",
    ],
  },
  {
    name: "Thalassotherapy",
    icon: Waves,
    desc: "The therapeutic use of the ocean, marine climate, and products like seaweed, sand, and seawater. This marine-based therapy infuses the body with vital minerals and trace elements.",
    benefits: [
      "Boosts metabolism and aids in weight management",
      "Natural skin rejuvenation and mineral replenishment",
      "Strengthens the immune and respiratory systems",
    ],
  },
  {
    name: "Halotherapy (Salt Therapy)",
    icon: Wind,
    desc: "A natural therapy involving breathing in pharmaceutical-grade dry salt aerosol within a controlled environment. It is highly beneficial for the respiratory system and skin health.",
    benefits: [
      "Clears mucus and pollutants from the lungs",
      "Reduces symptoms of asthma, allergies, and COPD",
      "Antimicrobial properties help treat acne and dermatitis",
    ],
  },
  {
    name: "Forest Bathing (Shinrin-yoku)",
    icon: Trees,
    desc: "The practice of immersing oneself in a forest environment to take in the atmosphere. This mindful connection with nature is scientifically proven to lower stress hormones and improve well-being.",
    benefits: [
      "Significantly lowers cortisol and blood pressure",
      "Increases 'Natural Killer' (NK) cells for immune defense",
      "Improves mood, focus, and energy levels",
    ],
  },
  {
    name: "Mud Therapy (Pelotherapy)",
    icon: Mountain,
    desc: "Application of various types of therapeutic mud and clay to the body. Mud absorbs toxins, retains moisture, and provides cooling effects, making it a powerful tool in Naturopathy.",
    benefits: [
      "Deeply detoxifies the skin and internal tissues",
      "Reduces inflammation and heat from the body",
      "Effective for joint pain and various skin disorders",
    ],
  },
  {
    name: "Heliotherapy",
    icon: Sun,
    desc: "The use of natural sunlight for the treatment of various medical conditions. Controlled exposure to UV rays helps in vitamin D synthesis and has profound effects on circadian rhythms.",
    benefits: [
      "Essential for bone health and calcium absorption",
      "Treats Seasonal Affective Disorder (SAD) and depression",
      "Improves autoimmune skin conditions like vitiligo",
    ],
  },
  {
    name: "Color Therapy (Chromotherapy)",
    icon: Palette,
    desc: "Uses the visible spectrum of electromagnetic radiation (colors) to balance energy in the body. Different colors are believed to vibrate at frequencies that correspond to specific organs and systems.",
    benefits: [
      "Balances the body's energy centers (Chakras)",
      "Helps regulate mood and emotional responses",
      "Supports the healing of psychosomatic disorders",
    ],
  },
  {
    name: "Ozone Therapy",
    icon: Zap,
    desc: "A medical treatment that uses ozone gas to increase the amount of oxygen in the body. This stimulates the immune system, improves circulation, and has potent anti-pathogenic properties.",
    benefits: [
      "Powerful antibacterial, antifungal, and antiviral effects",
      "Increases oxygen delivery to tissues and cells",
      "Modulates the immune system for better defense",
    ],
  },
];

const SpecializedAlternativeMedicalSystems = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewAutoPlay, setReviewAutoPlay] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const goReviewPrevious = () => setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview((prev) => (prev + 1) % patientReviews.length);

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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Holistic Wellness</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Specialized Alternative Medical Systems in India
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Explore India's world-renowned alternative medical systems, each offering a unique, complete framework for health and healing.
              </p>
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

      {/* Pictography & Gallery Section */}
      <section className="pt-8 md:pt-12 pb-0 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="md:col-span-2 lg:col-span-2 h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-[#d8d0ae]/50">
              <img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {galleryImages.slice(1, 3).map((img, i) => (
                <div key={i} className="h-[142px] md:h-[242px] rounded-3xl overflow-hidden shadow-lg border border-[#d8d0ae]/50">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {galleryImages.slice(3).map((img, i) => (
              <div 
                key={i} 
                className={`h-[150px] md:h-[250px] rounded-3xl overflow-hidden shadow-lg border border-[#d8d0ae]/50 ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-10 md:pt-16 pb-6 md:pb-10 max-w-6xl">

        {/* Section Header */}
        <div id="specialised-therapies" className="text-center mb-12 max-w-3xl mx-auto scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Our Specialised Therapies</h2>
          <p className="text-lg text-[#7F543D]">
            Discover highly structured, evidence-based alternative therapies tailored for physical, mental, and spiritual harmony.
          </p>
        </div>

        {/* Therapy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy, index) => {
            const Icon = therapy.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#d8d0ae] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE8D0] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#335765]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#335765] leading-tight">{therapy.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[#7F543D] leading-relaxed">{therapy.desc}</p>

                {/* Benefits */}
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#335765]/60">Key Benefits</p>
                  <ul className="space-y-1.5">
                    {therapy.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5f4636]">
                        <CheckCircle2 className="h-4 w-4 text-[#335765] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose India Section */}
        <div id="why-india" className="mt-12 md:mt-20 scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Why Choose India for Specialized Alternative Medical Systems?</h2>
            <p className="text-lg text-[#7F543D] max-w-2xl mx-auto">
              India provides a unique ecosystem where deeply traditional medical systems are actively practiced, strictly regulated, and seamlessly integrated into modern wellness infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseIndia.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 md:p-8 border border-[#d8d0ae]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#EDE8D0] flex items-center justify-center mb-6 group-hover:bg-[#335765] transition-colors duration-300 shadow-inner">
                    <Icon className="w-8 h-8 text-[#335765] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#335765] mb-3">{point.title}</h3>
                  <p className="text-[#7F543D] leading-relaxed text-sm md:text-base">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-12 md:mt-20 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#C68D6A] mx-auto mt-4 rounded-full opacity-60"></div>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#d8d0ae]/60 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <AccordionTrigger className="text-left py-5 text-lg font-bold text-[#335765] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#7F543D] text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Patient Stories & Reviews Section */}
        <section id="reviews" className="mt-12 md:mt-20 pt-8 pb-8 md:pt-10 md:pb-12 bg-transparent w-full scroll-mt-24">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
              <div className="w-24 h-1 bg-[#C68D6A] mx-auto mt-4 rounded-full opacity-60"></div>
              <p className="text-base md:text-lg px-4 pt-2" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
            </div>

            <div className="max-w-4xl mx-auto relative px-0 md:px-0">
              {/* Navigation Arrows */}
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
                    {/* SVG Quote Icon */}
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    {/* Review Content */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                        {patientReviews[currentReview].title}
                      </h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                        "{patientReviews[currentReview].review}"
                      </p>
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                        {patientReviews[currentReview].name.charAt(0)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight break-words">
                            {patientReviews[currentReview].name}
                          </h4>
                          {patientReviews[currentReview].verified && (
                            <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-semibold whitespace-nowrap shrink-0 mt-0.5">
                              &#10003; Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm truncate md:whitespace-normal" style={{ color: "#7F543D" }}>
                          {patientReviews[currentReview].location} {patientReviews[currentReview].condition && `- ${patientReviews[currentReview].condition}`}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating Rendering */}
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

              {/* Dots Navigation Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {patientReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentReview(idx);
                      setReviewAutoPlay(false);
                    }}
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

        {/* CTA Section */}
        <section id="consultation" className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white mt-12 md:mt-16 scroll-mt-24">
          <div className="grid md:grid-cols-2">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img
                src="/Services-images/specialized_main_india.png"
                alt="Alternative Medicine Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">
                Book Your Specialized Alternative Medical Systems session in India
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right therapy and the best-matched healing centre for your condition and goals.
              </p>
              <div className="space-y-3 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Specialized%20Alternative%20Medical%20Systems."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button
                  className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20"
                  onClick={() => setQuoteModalOpen(true)}
                >
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

      {/* Floating Quote Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 md:right-6 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:py-3.5 md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap group"
      >
        <Phone size={20} className="md:size-18 -ml-1 md:ml-0" />
        <span className="hidden md:inline tracking-wide">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

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
                  Page Sections
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
                "Jump directly to any section in this page."
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

export default SpecializedAlternativeMedicalSystems;
