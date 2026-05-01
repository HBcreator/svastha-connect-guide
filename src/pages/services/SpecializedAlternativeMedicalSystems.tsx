import { useState } from "react";
import {
  Calendar, MapPin, Star, Phone, CheckCircle2,
  Medal, Users, ShieldCheck, Globe, Sparkles, BookOpen,
  Leaf, Droplets, Activity, Wind, Stethoscope, ShieldPlus,
  Compass, Waves, Zap, Trees, Mountain, Sun, Palette
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
        <div className="text-center mb-12 max-w-3xl mx-auto">
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
        <div className="mt-12 md:mt-20">
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
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
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

        {/* CTA Section */}
        <section className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white mt-12 md:mt-16">
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

      {/* Floating Quote Button - Pill on desktop, Circle on mobile */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 md:right-6 z-50 bg-[#C68D6A] text-white rounded-full p-3.5 md:py-3.5 md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap group"
      >
        <Phone size={20} className="md:size-18" />
        <span className="hidden md:inline tracking-wide">GET FREE QUOTE</span>
      </button>
    </div>
  );
};

export default SpecializedAlternativeMedicalSystems;
