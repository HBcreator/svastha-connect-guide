import { useState } from "react";
import {
  Calendar, MapPin, Star, Brain, Eye, Waves,
  Compass, Palette, Music, Move, Zap, HeartPulse,
  Leaf, MessageSquare, Wind, CheckCircle2, Phone,
  Medal, Users, ShieldCheck, Globe, Sparkles, BookOpen,
  HelpCircle, ChevronDown
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
  { src: "/Services-images/mind_body_main.png", alt: "Mindfulness Meditation Session in India" },
  { src: "/Services-images/hypnotherapy_session.png", alt: "Clinical Hypnotherapy Session" },
  { src: "/Services-images/art_therapy_session.png", alt: "Art Therapy Workshop" },
  { src: "/Services-images/music_therapy_india.png", alt: "Music Therapy with Singing Bowls" },
  { src: "/Services-images/dance_movement_therapy.png", alt: "Dance Movement Therapy" },
  { src: "/Services-images/breathwork_pranayama.png", alt: "Breathwork and Pranayama Session" },
];

const whyChooseIndia = [
  {
    title: "Birthplace of Mindfulness",
    desc: "India is the origin of meditation, pranayama, and yogic mind-body sciences — offering you access to practices in their most pure and undiluted form.",
    icon: Medal,
  },
  {
    title: "Globally Trained Practitioners",
    desc: "Our network includes clinical psychologists, certified hypnotherapists, and somatic specialists with international training and decades of practice.",
    icon: Users,
  },
  {
    title: "Unmatched Affordability",
    desc: "Receive world-class mind-body therapy programs at 60–80% lower cost compared to equivalent sessions in Europe, North America, or Australia.",
    icon: ShieldCheck,
  },
  {
    title: "Immersive Retreat Environments",
    desc: "India's wellness centres are set in Himalayan foothills, Kerala backwaters, and serene forest ashrams — environments that naturally amplify inner healing.",
    icon: Globe,
  },
  {
    title: "Integrated Healing Systems",
    desc: "Combine mind-body therapies with Ayurveda, Panchakarma, and classical yoga under one roof for a multi-dimensional transformation unavailable elsewhere.",
    icon: Sparkles,
  },
  {
    title: "Personalised Therapeutic Programs",
    desc: "Every program is individually designed based on your psychological profile, health goals, and duration of stay — not off-the-shelf packages.",
    icon: BookOpen,
  },
];

const faqs = [
  {
    question: "What exactly are mind-body interventions, and how do they work?",
    answer: "Mind-body interventions are evidence-informed therapeutic approaches that harness the connection between your thoughts, emotions, and physical health. Techniques such as mindfulness meditation, hypnotherapy, and somatic experiencing work by activating the parasympathetic nervous system, reducing cortisol levels, and rewiring stress-response patterns to promote lasting psychological and physiological healing."
  },
  {
    question: "Are these therapies backed by scientific evidence?",
    answer: "Yes. Mindfulness-Based Stress Reduction (MBSR), hypnotherapy, EFT, and somatic experiencing have all been studied in peer-reviewed clinical trials. Research published in journals such as JAMA Internal Medicine, The Lancet Psychiatry, and Psychotherapy and Psychosomatics has documented their efficacy for anxiety, depression, PTSD, chronic pain, and stress-related disorders."
  },
  {
    question: "How long should I stay in India for meaningful results?",
    answer: "For general stress relief and wellness, a 7–14 day residential program is highly effective. For deeper conditions such as trauma recovery, chronic anxiety, or burnout, we recommend 21–28 days. The immersive residential format accelerates results far beyond weekly outpatient sessions back home."
  },
  {
    question: "Can these therapies help with clinical anxiety or depression?",
    answer: "Absolutely. Our practitioners are trained to work alongside your existing mental health treatment plan. Mind-body therapies do not replace psychiatric medication but are highly effective as complementary interventions. Many patients report measurable reductions in anxiety and depressive symptoms during their stay."
  },
  {
    question: "Do I need any prior experience with meditation or therapy?",
    answer: "No prior experience is necessary. Every program is designed from the ground up based on your individual starting point. Whether you have never meditated before or have years of practice, your therapist will calibrate the intensity and approach specifically for you."
  },
  {
    question: "Can I combine mind-body therapies with Ayurveda or Panchakarma?",
    answer: "This is one of the greatest advantages of coming to India. Many of our partner centres offer integrated programs where mind-body interventions run alongside Ayurvedic detox, therapeutic yoga, and Panchakarma protocols — creating a comprehensive healing experience that addresses both the mind and the body simultaneously."
  }
];

const therapies = [
  {
    name: "Mindfulness Meditation",
    icon: Brain,
    desc: "A structured awareness practice that trains your attention to remain anchored in the present moment. Rooted in ancient contemplative traditions and now validated by neuroscience, mindfulness meditation physically reshapes neural pathways associated with stress, emotional regulation, and cognitive clarity.",
    benefits: [
      "Clinically proven to reduce anxiety, depression, and chronic stress",
      "Improves attention span, working memory, and decision-making",
      "Lowers blood pressure and strengthens immune function",
    ],
  },
  {
    name: "Vipassana Meditation",
    icon: Eye,
    desc: "One of the oldest meditation techniques from India, Vipassana means 'seeing things as they truly are.' This intensive silent practice develops penetrating self-observation skills, allowing practitioners to dissolve deeply conditioned mental patterns and experience profound psychological liberation.",
    benefits: [
      "Dissolves deeply rooted emotional and behavioural patterns",
      "Cultivates equanimity and resilience against life stressors",
      "Produces lasting structural changes in the brain's prefrontal cortex",
    ],
  },
  {
    name: "Hypnotherapy",
    icon: Waves,
    desc: "A clinically validated therapeutic modality that uses guided relaxation and focused concentration to access the subconscious mind. Unlike stage hypnosis, clinical hypnotherapy is a precise tool used by trained psychologists to reprogram limiting beliefs, overcome phobias, and accelerate behavioural change.",
    benefits: [
      "Highly effective for smoking cessation, weight management, and phobias",
      "Reduces chronic pain perception without pharmacological intervention",
      "Accelerates recovery from trauma, grief, and post-traumatic stress",
    ],
  },
  {
    name: "Guided Imagery",
    icon: Compass,
    desc: "A powerful psycho-therapeutic technique where a trained facilitator leads you through carefully designed mental visualisations that activate your body's innate healing responses. Used extensively in integrative oncology, pain management, and pre-surgical preparation worldwide.",
    benefits: [
      "Measurably reduces pre-operative anxiety and accelerates post-surgical healing",
      "Strengthens immune cell activity through directed mental focus",
      "Improves sleep quality and reduces dependency on sleep medications",
    ],
  },
  {
    name: "Art Therapy",
    icon: Palette,
    desc: "A professionally facilitated creative process where drawing, painting, sculpture, and other art forms become vehicles for emotional exploration and psychological healing. Art therapy bypasses the verbal mind, allowing access to feelings and memories that traditional talk therapy cannot easily reach.",
    benefits: [
      "Unlocks and processes suppressed emotions safely through creative expression",
      "Highly effective for trauma survivors, including childhood and combat trauma",
      "Reduces symptoms of PTSD, anxiety, and emotional numbness",
    ],
  },
  {
    name: "Music Therapy",
    icon: Music,
    desc: "A clinical discipline that uses sound frequencies, rhythm, and melodic structures to influence neurological and emotional states. In India, music therapy integrates classical Raga therapy — a system where specific melodic scales are prescribed for specific conditions — with modern psychoacoustic science.",
    benefits: [
      "Reduces cortisol levels and activates the parasympathetic nervous system",
      "Improves cognitive function in neurological conditions including dementia",
      "Alleviates depression, isolation, and emotional distress in chronic illness",
    ],
  },
  {
    name: "Dance/Movement Therapy",
    icon: Move,
    desc: "A body-centred psychotherapeutic approach that uses expressive movement as a pathway to emotional integration and healing. Facilitated by certified therapists, sessions allow participants to process stored trauma, release muscular armouring, and reconnect with embodied vitality.",
    benefits: [
      "Releases trauma stored in the body's muscular and fascial systems",
      "Improves body image, self-esteem, and physical confidence",
      "Enhances emotional expression and interpersonal connection skills",
    ],
  },
  {
    name: "EFT (Emotional Freedom Technique)",
    icon: Zap,
    desc: "Often called 'tapping,' EFT combines elements of cognitive behavioural therapy with acupressure stimulation on specific meridian points. This evidence-based technique rapidly reduces the emotional charge attached to traumatic memories, phobias, and chronic stress patterns.",
    benefits: [
      "Rapidly reduces anxiety, panic attacks, and specific phobias",
      "Lowers cortisol by up to 43% in a single session (peer-reviewed data)",
      "Effective self-help tool that patients can continue practising at home",
    ],
  },
  {
    name: "Somatic Experiencing",
    icon: HeartPulse,
    desc: "Developed by Dr. Peter Levine, Somatic Experiencing is a body-oriented approach to resolving trauma and stress disorders. Rather than revisiting traumatic narratives, this method gently guides the nervous system to complete interrupted survival responses and discharge trapped activation energy.",
    benefits: [
      "Resolves PTSD and complex trauma without re-traumatisation",
      "Restores natural nervous system regulation and vagal tone",
      "Effective for unexplained chronic pain, fibromyalgia, and conversion disorders",
    ],
  },
  {
    name: "Autogenic Training",
    icon: Leaf,
    desc: "A systematic self-relaxation method developed by German psychiatrist Johannes Schultz. Through a series of structured mental exercises focusing on warmth, heaviness, and calm, practitioners learn to voluntarily influence their autonomic nervous system — reducing blood pressure, heart rate, and muscular tension.",
    benefits: [
      "Clinically effective for insomnia, hypertension, and tension headaches",
      "Empowers patients with a lifelong self-regulation skill for stress management",
      "Reduces psychosomatic symptoms including IBS, migraines, and chronic fatigue",
    ],
  },
  {
    name: "Neuro-Linguistic Programming (NLP)",
    icon: MessageSquare,
    desc: "A psychological approach that analyses and restructures the language patterns, mental models, and behavioural strategies that shape how you perceive and respond to the world. NLP practitioners use precise techniques to rapidly shift limiting beliefs, resolve internal conflicts, and install empowering cognitive frameworks.",
    benefits: [
      "Rapidly resolves phobias, performance anxiety, and limiting beliefs",
      "Improves communication skills, leadership presence, and interpersonal dynamics",
      "Enhances goal-setting clarity and accelerates personal achievement",
    ],
  },
  {
    name: "Breathwork (Pranayama-Based Therapy)",
    icon: Wind,
    desc: "India's most ancient and scientifically validated mind-body intervention. Therapeutic breathwork programs in India draw from classical Pranayama systems — Nadi Shodhana, Bhramari, Kapalabhati — combined with modern techniques like Holotropic Breathwork to produce profound shifts in consciousness, emotional release, and autonomic balance.",
    benefits: [
      "Activates the vagus nerve, immediately reducing anxiety and stress response",
      "Improves respiratory function and increases blood oxygen saturation",
      "Facilitates deep emotional catharsis and expanded states of awareness",
    ],
  },
];

const MindBodyInterventions = () => {
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
                Mind-Body Interventions Therapies in India
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Scientifically backed approaches that bridge the mind and body connection for profound, lasting healing and inner harmony.
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
            Explore our comprehensive range of mind-body interventions — each grounded in clinical evidence, delivered by internationally trained practitioners.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Why Choose India for Mind-Body Interventions?</h2>
            <p className="text-lg text-[#7F543D] max-w-2xl mx-auto">
              India offers an unparalleled combination of ancient contemplative wisdom and modern clinical expertise, making it the world's premier destination for transformative mind-body healing.
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
                src="/Services-images/mind_body_main.png"
                alt="Mind-body therapy consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">
                Book Your Mind-Body Interventions Therapy Session in India
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right therapy and the best-matched healing centre for your condition and goals.
              </p>
              <div className="space-y-3 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Mind-Body%20Interventions%20Therapies."
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

export default MindBodyInterventions;
