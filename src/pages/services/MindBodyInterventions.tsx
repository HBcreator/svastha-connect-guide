import { useState } from "react";
import {
  Calendar, MapPin, Star, Brain, Eye, Waves,
  Compass, Palette, Music, Move, Zap, HeartPulse,
  Leaf, MessageSquare, Wind, CheckCircle2, Phone,
  Medal, Users, ShieldCheck, Globe, Sparkles, BookOpen,
  HelpCircle, ChevronDown, ChevronLeft, ChevronRight, Search, X, ClipboardList
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
    name: "Oliver Harrison",
    location: "Sydney, Australia",
    condition: "Work-Related Burnout",
    title: "Mindfulness Meditation Rewired My Response to Stress.",
    review: "I was operating on empty for years, constantly reacting to every work email with extreme anxiety. The residential mindfulness program in India gave me the tools to finally pause. It wasn't just about sitting quietly; the practitioners taught me how to actively regulate my nervous system. I now have a daily practice that keeps me grounded, and my blood pressure has returned to completely normal levels without medication.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sophia Martinez",
    location: "Madrid, Spain",
    condition: "Complex PTSD",
    title: "Somatic Experiencing Was the Breakthrough I Needed.",
    review: "Talk therapy had taken me as far as it could, but my body was still holding onto years of trauma. The Somatic Experiencing sessions here were life-changing. Instead of reliving painful memories, my therapist helped me gently release the 'stuck' energy in my physical body. For the first time in my adult life, I feel safe in my own skin. The chronic muscle tension I carried for decades is finally gone.",
    rating: 5,
    verified: true,
  },
  {
    name: "Lucas van der Berg",
    location: "Amsterdam, Netherlands",
    condition: "Severe Insomnia & Phobias",
    title: "Clinical Hypnotherapy Addressed the Root of My Fears.",
    review: "I came to India desperate for a solution to severe insomnia and a crippling fear of flying. The hypnotherapy sessions were not at all what you see on TV—they were deeply clinical and profoundly relaxing. My therapist helped me access the subconscious loops keeping me awake and afraid. After six sessions, I was sleeping through the night, and I actually enjoyed my flight back home. It feels like a miracle.",
    rating: 5,
    verified: true,
  },
  {
    name: "Amina Al-Fayed",
    location: "Dubai, UAE",
    condition: "Grief & Emotional Numbness",
    title: "Art Therapy Helped Me Express What Words Could Not.",
    review: "Following a sudden loss, I had completely shut down emotionally. I couldn't speak about it without dissociating. The Art Therapy program bypassed my logical brain entirely. Through painting and clay work with my facilitator, I was able to externalize the heavy grief I was carrying. It was an incredibly cathartic process that allowed me to finally begin mourning and, eventually, start healing.",
    rating: 5,
    verified: true,
  },
  {
    name: "David Kim",
    location: "Seoul, South Korea",
    condition: "Panic Attacks",
    title: "EFT Tapping Has Given Me Control Over My Anxiety.",
    review: "I used to suffer from sudden, debilitating panic attacks that made it hard to function in my high-pressure job. Learning EFT (Emotional Freedom Technique) in India gave me a tangible tool I could use anywhere. The combination of cognitive reframing and acupressure rapidly dials down my anxiety before it spirals. I haven't had a full-blown panic attack since I completed the program three months ago.",
    rating: 5,
    verified: true,
  },
  {
    name: "Emma Watson",
    location: "Toronto, Canada",
    condition: "Chronic Fatigue Syndrome",
    title: "Therapeutic Breathwork Restored My Vitality.",
    review: "My energy levels were so low that just getting out of bed was a struggle. The integrated Breathwork and Pranayama therapy rebuilt my stamina from the ground up. The practitioners didn't just teach me breathing exercises; they taught me how to optimize oxygen absorption to heal at a cellular level. I feel like my battery has finally been recharged after years of running on 10%.",
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
        <div id="specialised-therapies" className="text-center mb-12 max-w-3xl mx-auto scroll-mt-24">
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
        <div id="why-india" className="mt-12 md:mt-20 scroll-mt-24">
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

export default MindBodyInterventions;

