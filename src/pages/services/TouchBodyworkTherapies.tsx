import { useState } from "react";
import {
  Calendar, MapPin, Star, Hand, CircleDot, Fingerprint,
  Move, Layers, Wind, Dumbbell, AlignCenter, Brain,
  ArrowUpDown, Waves, FlaskConical, CheckCircle2, Phone,
  Medal, Users, ShieldCheck, HeartPulse, Globe, Sparkles,
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
  { src: "/Services-images/touch_bodywork_main.png", alt: "Touch and Bodywork Therapy" },
  { src: "/Services-images/acupressure.png", alt: "Acupressure Session" },
  { src: "/Services-images/thai_massage.png", alt: "Thai Massage Stretch" },
  { src: "/Services-images/reflexology.png", alt: "Reflexology Treatment" },
  { src: "/Services-images/shiatsu.png", alt: "Shiatsu Pressure Therapy" },
  { src: "/Services-images/cupping.png", alt: "Cupping Therapy" },
];

const whyChooseIndia = [
  {
    title: "Authentic Lineage",
    desc: "India is the birthplace of many holistic touch therapies, ensuring you receive treatments in their most authentic form.",
    icon: Medal,
  },
  {
    title: "Expert Practitioners",
    desc: "Our therapists are trained in traditional systems and accredited institutions with decades of clinical experience.",
    icon: Users,
  },
  {
    title: "Cost-Effective Quality",
    desc: "Receive world-class therapeutic care at a fraction of the cost compared to Western destinations.",
    icon: ShieldCheck,
  },
  {
    title: "Integrated Healing",
    desc: "Combine touch therapies with Ayurveda, Yoga, and Naturopathy for a comprehensive wellness transformation.",
    icon: HeartPulse,
  },
  {
    title: "Holistic Environments",
    desc: "Retreats are located in serene natural settings that enhance the deep healing and relaxation process.",
    icon: Globe,
  },
  {
    title: "Personalised Care",
    desc: "Treatments are customised based on your unique body constitution (Prakriti) and specific health goals.",
    icon: Sparkles,
  },
];

const faqs = [
  {
    question: "What should I expect during my first touch therapy session?",
    answer: "Your session begins with a brief consultation to understand your health history and goals. Depending on the therapy, you'll be guided through a series of rhythmic pressures, stretches, or targeted touches in a serene, professional environment."
  },
  {
    question: "Are these therapies safe for chronic pain conditions?",
    answer: "Absolutely. Our practitioners are experts in adapting techniques for chronic pain. However, we always recommend a prior consultation to ensure the chosen therapy is perfectly suited to your specific condition."
  },
  {
    question: "Do I need to follow any specific diet during my treatment?",
    answer: "While not always mandatory, following a light, sattvic diet can significantly enhance the detoxification and healing benefits of hands-on therapies. Our advisors can provide specific dietary recommendations."
  },
  {
    question: "How often should I receive these treatments for best results?",
    answer: "For acute issues, a series of 3-5 sessions might be recommended. For general wellness and stress management, a monthly session is ideal. Your therapist will provide a personalised plan during your first visit."
  },
  {
    question: "What is the difference between Deep Tissue and Myofascial Release?",
    answer: "Deep Tissue focuses on the deeper layers of muscle to break down tension, while Myofascial Release targets the connective tissue (fascia) to release restrictions and improve overall structural alignment."
  },
  {
    question: "Can these therapies help with mental stress and anxiety?",
    answer: "Yes, therapies like Shiatsu and Reflexology are specifically designed to calm the nervous system, reduce cortisol levels, and promote profound mental and emotional relaxation."
  }
];

const therapies = [
  {
    name: "Acupressure",
    icon: Hand,
    desc: "A traditional healing art that uses precise finger pressure on specific energy points to release tension and activate the body's innate self-healing mechanisms.",
    benefits: [
      "Relieves chronic pain and muscle tension without medication",
      "Improves blood circulation and strengthens immune response",
      "Reduces stress, anxiety, and promotes deep relaxation",
    ],
  },
  {
    name: "Reflexology",
    icon: CircleDot,
    desc: "A specialised therapy based on the principle that reflex zones on the hands, feet, and ears correspond to every organ and system in the body, promoting systemic healing through targeted pressure.",
    benefits: [
      "Detoxifies the body by stimulating the lymphatic system",
      "Eases tension headaches and improves sleep quality",
      "Enhances organ function and overall nervous system response",
    ],
  },
  {
    name: "Shiatsu",
    icon: Fingerprint,
    desc: "Originating from Japan, Shiatsu applies rhythmic finger and palm pressure along the body's meridian pathways to balance the flow of vital energy (Ki) and restore physical harmony.",
    benefits: [
      "Corrects postural imbalances and relieves joint stiffness",
      "Boosts energy levels and alleviates chronic fatigue",
      "Supports emotional well-being and reduces anxiety",
    ],
  },
  {
    name: "Thai Massage",
    icon: Move,
    desc: "An ancient therapeutic system combining assisted yoga stretches, rhythmic compression, and acupressure along energy lines (Sen) to improve flexibility, energy flow, and structural balance.",
    benefits: [
      "Increases flexibility and range of motion in muscles and joints",
      "Relieves back pain and corrects structural alignment issues",
      "Energises the body and sharpens mental clarity",
    ],
  },
  {
    name: "Deep Tissue Massage",
    icon: Layers,
    desc: "A targeted technique that applies sustained, firm pressure to reach deeper layers of muscle and fascia, breaking down adhesions and relieving chronic muscular tension effectively.",
    benefits: [
      "Breaks down scar tissue and reduces chronic muscle pain",
      "Lowers blood pressure and promotes healthier circulation",
      "Speeds recovery from sports injuries and repetitive strain",
    ],
  },
  {
    name: "Myofascial Release",
    icon: Wind,
    desc: "A hands-on therapy that applies gentle, sustained pressure to the myofascial connective tissue, releasing restrictions that cause pain, postural dysfunction, and limited mobility.",
    benefits: [
      "Eliminates deep-seated pain caused by fascial restrictions",
      "Restores natural posture and improves biomechanical function",
      "Reduces inflammation and relieves fibromyalgia symptoms",
    ],
  },
  {
    name: "Osteopathy",
    icon: Dumbbell,
    desc: "A holistic manual medicine approach that diagnoses and treats musculoskeletal dysfunction by mobilising bones, joints, and soft tissues to restore structural balance and healthy nerve function.",
    benefits: [
      "Relieves back, neck, and joint pain without surgery or drugs",
      "Improves nerve function and supports organ health",
      "Strengthens the body's long-term self-healing capacity",
    ],
  },
  {
    name: "Chiropractic Care",
    icon: AlignCenter,
    desc: "A precise clinical discipline focused on correcting spinal misalignments through controlled adjustments to restore proper nervous system function and natural biomechanical balance.",
    benefits: [
      "Eliminates nerve interference causing pain and headaches",
      "Improves spinal mobility and corrects posture over time",
      "Enhances overall body function and immune resilience",
    ],
  },
  {
    name: "Craniosacral Therapy",
    icon: Brain,
    desc: "An exceptionally gentle bodywork approach that detects and corrects subtle imbalances in the craniosacral rhythm — the flow of cerebrospinal fluid — to release deep-rooted tension patterns.",
    benefits: [
      "Relieves migraines, chronic headaches, and TMJ disorders",
      "Reduces stress and anxiety stored in the nervous system",
      "Supports recovery from trauma, concussions, and neurological issues",
    ],
  },
  {
    name: "Rolfing (Structural Integration)",
    icon: ArrowUpDown,
    desc: "A systematic form of deep connective tissue manipulation designed to realign the body's fascial structure so it stands tall, moves freely, and functions efficiently within the field of gravity.",
    benefits: [
      "Permanently improves posture and full-body alignment",
      "Resolves chronic pain patterns from long-term postural strain",
      "Enhances athletic performance and heightens body awareness",
    ],
  },
  {
    name: "Bowen Therapy",
    icon: Waves,
    desc: "A subtle yet profoundly effective bodywork technique using precise rolling moves over muscles and connective tissue at specific points, sending neurological signals that prompt the body to reset and heal.",
    benefits: [
      "Provides effective pain relief for musculoskeletal injuries",
      "Balances the autonomic nervous system and reduces stress",
      "Safe and suitable for all ages, including children and the elderly",
    ],
  },
  {
    name: "Cupping Therapy (Hijama)",
    icon: FlaskConical,
    desc: "An ancient healing practice using specially designed cups to create negative pressure on the skin, drawing blood to the surface to stimulate circulation, reduce inflammation, and clear stagnant tissue.",
    benefits: [
      "Relieves muscle soreness, back pain, and joint stiffness",
      "Improves blood flow and accelerates natural detoxification",
      "Reduces inflammation and supports respiratory health",
    ],
  },
];

const TouchBodyworkTherapies = () => {
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
                Touch &amp; Bodywork Therapies in India
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Ancient hands-on healing traditions that restore balance, release tension, and rejuvenate the body through therapeutic touch.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg pt-2">
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
            Explore our comprehensive range of touch and bodywork treatments — each rooted in ancient wisdom, guided by expert practitioners.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4">Why Choose India for Touch & Bodywork Therapies?</h2>
            <p className="text-lg text-[#7F543D] max-w-2xl mx-auto">
              India offers a unique blend of ancient wisdom and modern clinical standards, making it the premier destination for holistic healing.
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
                src="/Treatments-images/ayurvedic_treatment_hero.png"
                alt="Therapy consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">
                Book Your Therapy Session in India
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right therapy and the best-matched healing centre for your condition and goals.
              </p>
              <div className="space-y-3 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Touch%20%26%20Bodywork%20Therapies."
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

export default TouchBodyworkTherapies;
