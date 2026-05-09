import { useState } from "react";
import {
  Calendar, MapPin, Star, Leaf, Fingerprint, Activity,
  Sprout, Pill, TestTube, CheckCircle2, Phone,
  Medal, Users, ShieldCheck, HeartPulse, Globe, Sparkles,
  Apple, Wind, Droplets, Flower, Flower2, Atom, Hexagon,
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
    name: "William Thornton",
    location: "London, UK",
    condition: "Rheumatoid Arthritis",
    title: "Herbalism and Diet Reduced My Inflammation Drastically.",
    review: "I was reliant on strong immunosuppressants for my arthritis, which came with terrible side effects. The Vaidyas in India created a customized biological protocol using pure, potent herbal extracts and a strict anti-inflammatory diet. Within five weeks, my joint swelling reduced by 80%, and my morning stiffness vanished. My rheumatologist back home was astounded by my latest blood work.",
    rating: 5,
    verified: true,
  },
  {
    name: "Isabella Silva",
    location: "Lisbon, Portugal",
    condition: "Chronic Digestive Issues (IBS)",
    title: "Naturopathy Healed My Gut When Nothing Else Worked.",
    review: "I had suffered from debilitating IBS for years, trying every conventional medication with no success. The naturopathic approach here was completely different. They didn't just treat the symptoms; they used clinical nutrition and hydrotherapy to completely reset my gut microbiome. I am now eating a varied, plant-based diet without any pain or bloating. It has given me my life back.",
    rating: 5,
    verified: true,
  },
  {
    name: "Andreas Müller",
    location: "Munich, Germany",
    condition: "Severe Varicose Veins & Poor Circulation",
    title: "Hirudotherapy Was Incredible for My Circulation.",
    review: "I was initially hesitant about Leech Therapy, but the pain in my legs from varicose veins was unbearable. The clinical application was highly professional and surprisingly painless. The bioactive compounds from the treatment immediately reduced the swelling and congestion in my legs. The heavy, aching feeling is completely gone, and the visible veins have reduced significantly.",
    rating: 5,
    verified: true,
  },
  {
    name: "Priya Patel",
    location: "New Jersey, USA",
    condition: "Hormonal Imbalance (PCOS)",
    title: "Targeted Supplementation Balanced My Hormones.",
    review: "Struggling with PCOS, I felt like my body was working against me. The integrative doctors used Orthomolecular Medicine and targeted dietary supplements to address the specific cellular deficiencies driving my condition. Combined with Ayurvedic herbalism, my cycle has regulated for the first time in ten years, and my energy levels are stable throughout the day. It's a truly personalized approach.",
    rating: 5,
    verified: true,
  },
  {
    name: "Robert MacKay",
    location: "Edinburgh, Scotland",
    condition: "Post-Viral Fatigue",
    title: "Homeopathy Provided Gentle But Profound Healing.",
    review: "After a severe viral infection, I was left with lingering fatigue and brain fog that lasted for months. Conventional doctors told me to just 'wait it out'. The homeopathic treatment I received in India was incredibly detailed. The prescribed remedies were gentle but triggered a deep, sustained return of my energy. My cognitive clarity has returned, and I no longer need afternoon naps.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sophie Laurent",
    location: "Geneva, Switzerland",
    condition: "Chronic Anxiety & Stress",
    title: "Bach Flower Remedies Restored My Emotional Balance.",
    review: "I was looking for a non-pharmaceutical way to manage my high-stress corporate lifestyle. The Bach Flower Remedies prescribed by my therapist worked on such a subtle, vibrational level, yet the impact was huge. I felt a gradual lifting of the constant worry and 'fight or flight' feeling. Coupled with clinical aromatherapy, my nervous system finally feels resilient and calm.",
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
  { src: "/program-images/biological-consultation.png", alt: "Biological and Plant-Based Consultation India" },
  { src: "/program-images/biological-lepam.png", alt: "Natural Herbal Paste Therapy" },
  { src: "/program-images/biological-diet.png", alt: "Specialized Organic Ayurvedic Diet" },
  { src: "/program-images/ra-virechana-detox.png", alt: "Virechana Detox with Plant Medicines" },
  { src: "/program-images/ra-abhyanga.png", alt: "Herbal Oil Abhyanga Therapy" },
  { src: "/program-images/biological-garden-walk.jpg", alt: "Biological Herbal Garden Walk" },
];

const whyChooseIndia = [
  {
    title: "Deep Botanical Heritage",
    desc: "India possesses one of the world's most diverse medicinal flora and a 5,000-year-old unbroken tradition of applying plant intelligence to human healing.",
    icon: Medal,
  },
  {
    title: "Expert Ayurvedic Pharmacologists",
    desc: "Treatments are guided by expert Vaidyas who deeply understand pharmacognosy, herb-herb interactions, and precise dosages for biological therapies.",
    icon: Users,
  },
  {
    title: "Pure, Authentic Sourcing",
    desc: "Premium centres source wild-crafted, organic herbs directly from the Himalayas and Kerala's forests, ensuring maximum therapeutic potency without chemical contamination.",
    icon: ShieldCheck,
  },
  {
    title: "Holistic Integration",
    desc: "Plant-based therapies are never given in isolation; they are integrated with diet, detox (Panchakarma), and lifestyle changes for comprehensive healing.",
    icon: HeartPulse,
  },
  {
    title: "Nature-Immersed Healing Environments",
    desc: "Therapy centres are located in lush, oxygen-rich environments—away from urban pollution—allowing the body to heal in resonance with nature.",
    icon: Globe,
  },
  {
    title: "Bio-Individualised Formulations",
    desc: "There are no 'one-size-fits-all' herbal protocols. Every plant-based medicine is custom-formulated based on your unique metabolic and genetic constitution (Prakriti).",
    icon: Sparkles,
  },
];

const faqs = [
  {
    question: "What exactly are Biological and Plant-Based Therapies?",
    answer: "These therapies utilise whole plants, organic extracts, specialized diets, and natural biological compounds to stimulate the body's self-healing mechanisms. Unlike synthetic pharmaceuticals that often suppress symptoms, biological therapies aim to restore cellular function, balance the microbiome, and detoxify tissues safely and naturally."
  },
  {
    question: "Are Ayurvedic herbal medicines safe?",
    answer: "Yes, when prescribed by a qualified Ayurvedic doctor and sourced from reputed, certified pharmacies. Premium centers in India adhere to strict quality control, testing for heavy metals and purity. Because these therapies use whole-plant synergy rather than isolated chemical compounds, they are generally much better tolerated by the body with minimal side effects."
  },
  {
    question: "How long does it take for natural plant-based therapies to show results?",
    answer: "While some therapies (like herbal pain relief applications) offer immediate relief, deep biological healing—such as reversing chronic inflammation, balancing hormones, or detoxifying organs—requires time. Most patients see significant improvements within 3 to 6 weeks of dedicated treatment, with continued benefits unfolding over several months."
  },
  {
    question: "Can I continue my regular allopathic medication while taking herbal treatments?",
    answer: "In most cases, yes. Integrative Ayurvedic doctors are trained to manage treatments alongside allopathic medicines to avoid contraindications. It is crucial to disclose all current medications during your consultation. Over time, as your health improves through biological therapies, your primary physician may reduce your conventional medication dosage."
  },
  {
    question: "Is the food provided during treatment also plant-based?",
    answer: "Yes. Food is considered the primary medicine in Ayurveda. You will be prescribed a highly specific, organic, and predominantly plant-based diet tailored to your condition. The diet is designed to be easily digestible, anti-inflammatory, and deeply nourishing to support the herbal therapies."
  },
  {
    question: "What conditions respond best to Biological and Herbal therapies?",
    answer: "These therapies are highly effective for chronic, lifestyle, and autoimmune conditions that conventional medicine struggles to cure. This includes Rheumatoid Arthritis, Psoriasis, Eczema, IBS, chronic fatigue, hormonal imbalances (PCOS, Thyroid issues), and metabolic disorders like Type 2 Diabetes and obesity."
  },
];

const therapies = [
  {
    name: "Naturopathy",
    icon: Wind,
    desc: "A holistic medical system that emphasizes the body's intrinsic ability to heal itself. Using non-invasive natural treatments such as hydrotherapy, clinical nutrition, and lifestyle counseling, Naturopathy addresses the root causes of illness rather than just masking symptoms.",
    benefits: [
      "Activates the body's innate self-healing and immune responses",
      "Focuses on disease prevention through sustainable lifestyle shifts",
      "Treats the whole person — body, mind, and spirit — for lasting health",
    ],
  },
  {
    name: "Homeopathy",
    icon: Droplets,
    desc: "Based on the principle of 'Similia Similibus Curentur' (like cures like), Homeopathy uses highly diluted natural substances to trigger a healing response. It is a safe, gentle, and effective system for treating acute and chronic conditions without toxic side effects.",
    benefits: [
      "Provides a non-toxic and side-effect-free healing alternative",
      "Highly effective for pediatric, geriatric, and pregnancy-related care",
      "Individualised treatment based on unique physical and emotional symptoms",
    ],
  },
  {
    name: "Herbalism (Phytotherapy)",
    icon: Sprout,
    desc: "The clinical application of plant-derived medicines to support physiological function. Our phytotherapy protocols use whole-plant extracts rather than isolated chemicals, ensuring a synergistic effect that is both potent and biocompatible with human biology.",
    benefits: [
      "Corrects systemic imbalances using concentrated plant intelligence",
      "Supports organ detoxification and metabolic optimization naturally",
      "Lower risk of dependency or pharmaceutical interactions when managed by experts",
    ],
  },
  {
    name: "Aromatherapy",
    icon: Flower,
    desc: "Therapeutic use of premium, clinical-grade essential oils extracted from medicinal plants. These volatile compounds are inhaled or applied topically to modulate the limbic system, reduce inflammation, and enhance overall emotional and physical well-being.",
    benefits: [
      "Directly influences the nervous system to reduce stress and anxiety",
      "Possesses potent natural antimicrobial and anti-inflammatory properties",
      "Improves sleep quality, hormonal balance, and respiratory function",
    ],
  },
  {
    name: "Bach Flower Remedies",
    icon: Flower2,
    desc: "A unique system of 38 flower essences developed by Dr. Edward Bach. These dilute extracts work on a vibrational level to balance negative emotional states—such as fear, uncertainty, and loneliness—which are often the underlying causes of physical disease.",
    benefits: [
      "Gently restores emotional equilibrium and mental resilience",
      "Safe for all ages and compatible with any other medical treatment",
      "Helps resolve psychosomatic patterns rooted in emotional trauma",
    ],
  },
  {
    name: "Orthomolecular Medicine",
    icon: Atom,
    desc: "The practice of optimizing health by providing the exact concentrations of substances naturally present in the body, such as vitamins, minerals, amino acids, and enzymes. It focuses on 'correcting the molecules' to resolve cellular deficiencies and chronic illness.",
    benefits: [
      "Addresses the cellular and molecular root of degenerative diseases",
      "Optimizes brain function, energy production, and DNA repair",
      "Provides high-potency nutritional support tailored to genetic needs",
    ],
  },
  {
    name: "Dietary Supplements Therapy",
    icon: Pill,
    desc: "Targeted clinical supplementation using bioactive nutrients to bridge nutritional gaps caused by modern lifestyles and depleted soils. This therapy enhances the body's biochemical efficiency and strengthens the immune barrier against environmental stressors.",
    benefits: [
      "Replenishes critical micronutrient stores needed for vital organ function",
      "Enhances cellular antioxidant capacity and reduces oxidative stress",
      "Supports sustained energy, bone density, and cardiovascular health",
    ],
  },
  {
    name: "Apitherapy",
    icon: Hexagon,
    desc: "The medicinal use of products from the honeybee, including honey, propolis, royal jelly, and bee venom. Rich in enzymes and unique biological compounds, Apitherapy is used clinically to treat autoimmune issues, chronic pain, and wound healing.",
    benefits: [
      "Contains powerful natural antibiotics and immune-modulators",
      "Effectively reduces inflammation in joints and soft tissues",
      "Accelerates tissue regeneration and manages chronic skin conditions",
    ],
  },
  {
    name: "Hirudotherapy (Leech Therapy)",
    icon: Activity,
    desc: "The application of medicinal leeches to specific areas of the body. Leech saliva contains over 100 bioactive substances, including anticoagulants and vasodilators, that purify the blood, improve micro-circulation, and reduce localized venous congestion.",
    benefits: [
      "Improves blood flow and oxygenation to stagnant or damaged tissues",
      "Significantly reduces pain and swelling in arthritic and varicose veins",
      "Flushes out localized biological toxins through controlled micro-bleeding",
    ],
  },
];

const BiologicalNaturalTherapies = () => {
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
                Biological &amp; Natural/Plant-Based Therapies in India
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Harness the healing intelligence of nature through plant-based and biological therapies rooted in India's rich herbal heritage.
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

      {/* Gallery Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
            Explore our comprehensive range of biological and plant-based treatments — each rooted in time-tested Ayurvedic traditions and guided by expert pharmacologists.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">
              Why Choose India for Biological and Natural Plant-Based Therapies?
            </h2>
            <p className="text-lg text-[#7F543D] max-w-2xl mx-auto">
              India uniquely combines an unbroken lineage of herbal science with modern clinical standards, making it the world's most complete destination for natural healing.
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
                src="/program-images/biological-consultation.png"
                alt="Biological Plant Based Therapy Consultation India"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">
                Book Your Biological & Natural/Plant-Based Therapy Session in India
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Begin with a complimentary no-obligation consultation. Our medical advisors will identify the right biological therapies and connect you with the most suitable certified practitioner for your health profile.
              </p>
              <div className="space-y-3 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Biological%20and%20Natural%20Plant-Based%20Therapies%20in%20India."
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

export default BiologicalNaturalTherapies;
