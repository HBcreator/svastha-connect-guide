import { useState } from "react";
import {
  Calendar, MapPin, Star, Zap, Circle, Gem,
  Music, Activity, Brain, Wind, Fingerprint,
  Waves, Radio, CheckCircle2, Phone,
  Medal, Users, ShieldCheck, HeartPulse, Globe, Sparkles,
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
  { src: "/Services-images/energy_healing_main.png", alt: "Reiki Energy Healing Session India" },
  { src: "/Services-images/chakra_healing.png", alt: "Chakra Balancing Therapy India" },
  { src: "/Services-images/sound_therapy.png", alt: "Sound Bath Therapy with Singing Bowls" },
  { src: "/Services-images/crystal_healing.png", alt: "Crystal Healing Session India" },
  { src: "/Services-images/pranic_healing.png", alt: "Pranic Healing Energy Therapy" },
  { src: "/Services-images/qigong_taichi.png", alt: "Qigong and Tai Chi Practice India" },
];

const whyChooseIndia = [
  {
    title: "Ancient Spiritual Lineage",
    desc: "India is one of the oldest civilisations with deep roots in Prana, Chakra science, and energy medicine — offering authentic healing unavailable elsewhere.",
    icon: Medal,
  },
  {
    title: "Trained Energy Healers",
    desc: "Our practitioners hold internationally recognised certifications in Reiki, Pranic Healing, and Quantum modalities with years of supervised clinical experience.",
    icon: Users,
  },
  {
    title: "Exceptional Value",
    desc: "Access premium energy healing sessions at a fraction of the cost compared to Europe or North America — without compromising on quality or outcomes.",
    icon: ShieldCheck,
  },
  {
    title: "Integrative Wellness",
    desc: "Energy therapies here are seamlessly combined with Ayurveda, Meditation, Yoga Nidra, and Naturopathy for comprehensive mind-body healing.",
    icon: HeartPulse,
  },
  {
    title: "Sacred Healing Environments",
    desc: "Centres are situated in spiritually charged locations — Rishikesh, Kerala, Mysore — that amplify the healing frequency of every session.",
    icon: Globe,
  },
  {
    title: "Personalised Energy Protocols",
    desc: "Every program is tailored to your energetic imbalances, health history, and spiritual goals for maximum therapeutic impact.",
    icon: Sparkles,
  },
];

const faqs = [
  {
    question: "What is energy healing and how does it work scientifically?",
    answer: "Energy healing is based on the principle that the human body has a measurable bioelectric field (the aura or pranic body). Modalities like Reiki and Pranic Healing aim to detect and correct disruptions in this field. Modern biophysics research, including studies on biophotons and the human energy field, increasingly supports the idea that cellular communication is partly electromagnetic — providing a scientific basis for these ancient practices."
  },
  {
    question: "Is energy healing safe alongside conventional medical treatment?",
    answer: "Absolutely. Energy healing is a complementary, non-invasive modality that supports — not replaces — conventional medicine. It has no known negative interactions with medications or treatments. Many oncology and cardiac centres globally now integrate Reiki and Therapeutic Touch as part of patient care to reduce anxiety and support recovery."
  },
  {
    question: "How many sessions will I need before experiencing results?",
    answer: "Many clients report a noticeable shift in clarity, calmness, or reduced pain after just one session. For deeper or chronic concerns — such as persistent stress, emotional trauma, or energy blockages — a series of 4 to 8 sessions over 2 to 4 weeks typically yields the most lasting results. Your practitioner will design a personalised protocol after your initial assessment."
  },
  {
    question: "What is the difference between Reiki and Pranic Healing?",
    answer: "Reiki is a Japanese modality where the practitioner channels universal life energy (Rei-Ki) through gentle hand placement on or above the body to promote healing. Pranic Healing, developed by Master Choa Kok Sui, is a more structured system that actively scans, cleanses, and replenishes the bioplasmic energy body using specific techniques without physical touch. Both are highly effective; the choice depends on your personal preference and specific health goals."
  },
  {
    question: "Can energy healing help with mental health conditions like anxiety or depression?",
    answer: "Research and clinical experience increasingly show that energy therapies significantly reduce cortisol (the stress hormone), activate the parasympathetic nervous system, and improve Heart Rate Variability — all markers of improved mental resilience. Modalities like Biofeedback, Sound Therapy, and Chakra Balancing are particularly effective for anxiety, depression, and burnout when used as part of a broader holistic wellness plan."
  },
  {
    question: "Do I need any specific preparation before an energy healing session?",
    answer: "Minimal preparation is needed. We recommend arriving well-hydrated, wearing comfortable and loose clothing, and refraining from heavy meals for at least two hours beforehand. It is helpful to set a clear intention for your session. After the session, drinking water, resting, and avoiding stimulants like caffeine for a few hours will help your body integrate the healing effectively."
  },
];

const therapies = [
  {
    name: "Reiki",
    icon: Zap,
    desc: "A Japanese energy healing art where a certified practitioner channels universal life force energy (Rei-Ki) through intentional hand placements on or just above the body, dissolving energetic blockages and activating the body's innate self-repair mechanisms.",
    benefits: [
      "Reduces chronic stress, anxiety, and emotional fatigue deeply",
      "Accelerates post-surgical and illness recovery by supporting cellular repair",
      "Promotes profound mental clarity, restful sleep, and emotional equilibrium",
    ],
  },
  {
    name: "Pranic Healing",
    icon: Circle,
    desc: "A highly structured, no-touch energy healing system developed by Master Choa Kok Sui that works directly on the bioplasmic energy body. Practitioners meticulously scan, cleanse, and revitalise the chakras and aura to restore physical and psychological health.",
    benefits: [
      "Accelerates recovery from physical ailments and chronic disease",
      "Clears deeply embedded emotional trauma and negative thought patterns",
      "Strengthens and energises the aura for sustained vitality and protection",
    ],
  },
  {
    name: "Chakra Healing & Balancing",
    icon: Activity,
    desc: "A comprehensive energy therapy that detects and corrects imbalances in the body's seven primary energy centres (chakras). Using crystals, sound, colour, and hands-on techniques, practitioners restore the optimal spin and vitality of each chakra for whole-system health.",
    benefits: [
      "Resolves physical symptoms linked to specific chakra dysfunctions",
      "Restores emotional balance, self-confidence, and creative expression",
      "Enhances intuition, spiritual connection, and overall life-force energy",
    ],
  },
  {
    name: "Crystal Healing",
    icon: Gem,
    desc: "A therapeutic modality that utilises the precise vibrational frequencies of natural gemstones — including amethyst, rose quartz, black tourmaline, and clear quartz — placed on and around the body to absorb negative energies and infuse healing frequencies into the bioenergetic field.",
    benefits: [
      "Absorbs and neutralises stagnant or discordant energies from the body",
      "Amplifies the body's natural healing frequency and immune resilience",
      "Supports emotional release, mental clarity, and spiritual awakening",
    ],
  },
  {
    name: "Sound Therapy / Sound Baths",
    icon: Music,
    desc: "An evidence-informed healing modality using the resonant frequencies of Tibetan singing bowls, crystal bowls, gongs, and tuning forks to induce deep theta brainwave states. Sound waves penetrate cellular tissue, harmonising the nervous system and restoring energetic coherence.",
    benefits: [
      "Induces deep meditative states that repair the nervous system rapidly",
      "Reduces inflammation markers and lowers blood pressure measurably",
      "Releases stored emotional trauma held within the body's tissues",
    ],
  },
  {
    name: "Magnetic Field Therapy",
    icon: Radio,
    desc: "A clinically applied energy therapy using pulsed electromagnetic fields (PEMF) or therapeutic magnets at specific frequencies to enhance cellular metabolism, improve circulation, and modulate the body's own bioelectric healing processes at a deep physiological level.",
    benefits: [
      "Accelerates bone healing, tissue repair, and reduction of inflammation",
      "Improves mitochondrial function and cellular energy production",
      "Effectively reduces chronic pain, arthritis, and neuropathic discomfort",
    ],
  },
  {
    name: "Quantum Healing",
    icon: Sparkles,
    desc: "An advanced integrative healing modality — popularised by Dr. Deepak Chopra — that applies principles of quantum physics and consciousness science to facilitate healing at the level of awareness, belief, and subtle energy, transcending purely physical interventions.",
    benefits: [
      "Addresses the root consciousness causes of chronic illness and patterns",
      "Facilitates profound shifts in perception, mindset, and health beliefs",
      "Integrates mind, body, and spirit for transformative whole-person healing",
    ],
  },
  {
    name: "Qigong",
    icon: Wind,
    desc: "An ancient Chinese system of coordinated posture, movement, breathwork, and meditation that cultivates, balances, and directs the body's vital energy (Qi). Regular Qigong practice builds extraordinary resilience, longevity, and energetic vitality.",
    benefits: [
      "Strengthens immune function and enhances cardiovascular efficiency",
      "Reduces cortisol levels and resolves adrenal fatigue effectively",
      "Builds sustained energy reserves and promotes graceful, healthy aging",
    ],
  },
  {
    name: "Tai Chi",
    icon: Brain,
    desc: "A refined Chinese martial art practised purely as a moving meditation and therapeutic exercise. Its slow, flowing, intentional movements cultivate internal energy (Qi), improve structural balance, and train the mind to sustain a state of alert, peaceful presence.",
    benefits: [
      "Dramatically improves balance, coordination, and fall prevention in all ages",
      "Lowers blood pressure and supports heart health through gentle aerobic activity",
      "Cultivates mental focus, emotional regulation, and sustained inner calm",
    ],
  },
  {
    name: "Therapeutic Touch",
    icon: Fingerprint,
    desc: "A nurse-developed, evidence-based energy therapy in which practitioners use intentional, structured hand movements near the body's energy field to detect imbalances and direct healing energy — widely used in hospital and clinical settings globally to support patient recovery.",
    benefits: [
      "Reduces procedural anxiety and post-operative pain in clinical settings",
      "Promotes relaxation of the nervous system and accelerates wound healing",
      "Particularly effective for end-of-life care and palliative pain management",
    ],
  },
  {
    name: "Biofeedback",
    icon: Waves,
    desc: "A technology-assisted mind-body therapy that uses real-time physiological monitoring — including brainwaves (EEG), heart rate variability, skin conductance, and muscle tension — to teach patients to consciously regulate their autonomic nervous system and stress responses.",
    benefits: [
      "Trains voluntary control over previously unconscious physiological processes",
      "Clinically proven to reduce migraines, hypertension, and chronic pain",
      "Highly effective for ADHD, PTSD, anxiety disorders, and peak performance training",
    ],
  },
  {
    name: "Theta Healing",
    icon: Brain,
    desc: "An advanced meditation-based energy healing technique developed by Vianna Stibal that accesses the theta brainwave state to identify and reprogram limiting subconscious beliefs, resolve emotional blocks, and facilitate spontaneous physical and psychological healing.",
    benefits: [
      "Rapidly identifies and dissolves deep subconscious limiting beliefs",
      "Supports healing of psychosomatic conditions rooted in emotional patterns",
      "Promotes profound spiritual growth, inner peace, and expanded self-awareness",
    ],
  },
];

const EnergyAndSpiritualHealing = () => {
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
                Energy & Spiritual Healing Treatments in India
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Ancient and modern energy therapies that restore vibrational balance, clear blockages, and ignite deep healing at the level of body, mind, and spirit.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg pt-2">
                <span className="inline-flex items-center gap-2.5 text-white">
                  <MapPin className="h-5 w-5 text-sky-300" />
                  <span>PAN India</span>
                </span>
                <span className="inline-flex items-center gap-2.5 text-white">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 Client Satisfaction</span>
                </span>
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
            Explore our comprehensive range of energy and spiritual healing treatments — each rooted in time-tested traditions and guided by certified expert practitioners.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">
              Why Choose India for Energy & Spiritual Healing?
            </h2>
            <p className="text-lg text-[#7F543D] max-w-2xl mx-auto">
              India uniquely combines an unbroken lineage of energy science with modern clinical standards, making it the world's most complete destination for vibrational healing.
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
                src="/Services-images/energy_healing_main.png"
                alt="Energy healing consultation India"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">
                Book Your Energy Healing Session in India
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Begin with a complimentary no-obligation consultation. Our advisors will identify the right energy healing modality and connect you with the most suitable certified practitioner for your specific goals and health profile.
              </p>
              <div className="space-y-3 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Energy%20%26%20Spiritual%20Healing%20Treatments%20in%20India."
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

      {/* Floating Quote Button */}
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

export default EnergyAndSpiritualHealing;
