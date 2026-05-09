import { useState } from "react";
import {
  Calendar, MapPin, Star, Hand, CircleDot, Fingerprint,
  Move, Layers, Wind, Dumbbell, AlignCenter, Brain,
  ArrowUpDown, Waves, FlaskConical, CheckCircle2, Phone,
  Medal, Users, ShieldCheck, HeartPulse, Globe, Sparkles,
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
    name: "Eleanor Vance",
    location: "London, UK",
    condition: "Chronic Back Pain",
    title: "The Most Effective Deep Tissue Massage I've Ever Had.",
    review: "After years of suffering from chronic back pain due to a desk job, the deep tissue massage I received in India was a revelation. The therapist didn't just apply pressure; they seemed to intuitively find the exact fascial restrictions that were causing my pain. I felt a significant release of tension after the first session, and by the end of my retreat, my posture had improved, and the nagging ache was completely gone. The expertise here is unmatched.",
    rating: 5,
    verified: true,
  },
  {
    name: "Marcus Thorne",
    location: "Melbourne, Australia",
    condition: "Sports Injury Recovery",
    title: "Osteopathy That Actually Solved My Biomechanical Issues.",
    review: "I came to India hoping to speed up recovery from a persistent shoulder injury that was keeping me from competing. The Osteopathic approach here was incredibly holistic. Instead of just looking at my shoulder, they evaluated my entire structural balance. Through gentle but precise manipulations, they restored function to my upper back and neck, which immediately took the load off my shoulder. I'm back to training pain-free.",
    rating: 5,
    verified: true,
  },
  {
    name: "Isabella Rossi",
    location: "Rome, Italy",
    condition: "Anxiety & Insomnia",
    title: "Shiatsu Brought Me Back to a State of Profound Calm.",
    review: "I was dealing with severe burnout, anxiety, and sleepless nights. The Shiatsu sessions were transformative. The rhythmic, grounding pressure along my body's meridian lines felt incredibly soothing to my nervous system. After just a few sessions, the constant 'fight or flight' feeling faded, replaced by a deep sense of peace. My sleep quality improved drastically, and I finally felt like I could breathe properly again.",
    rating: 5,
    verified: true,
  },
  {
    name: "Lars Jensen",
    location: "Copenhagen, Denmark",
    condition: "General Stiffness & Poor Posture",
    title: "Thai Massage Improved My Flexibility More Than Years of Stretching.",
    review: "I've always been incredibly stiff, especially in my hips and hamstrings. The traditional Thai massage felt like assisted yoga, but much deeper. The practitioner used their body weight to guide me into stretches I could never achieve on my own, combined with targeted acupressure. It wasn't just relaxing; it was therapeutic. My range of motion has increased remarkably, and my body feels lighter and more aligned.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sarah Mitchell",
    location: "Toronto, Canada",
    condition: "Migraines & TMJ",
    title: "Craniosacral Therapy Was The Gentle Solution I Needed.",
    review: "I was initially skeptical of how such light touch could be effective, but Craniosacral therapy in India completely changed my mind. I had been suffering from frequent migraines and jaw tension. The practitioner's subtle adjustments to my cranial bones and spine seemed to release deep-seated stress patterns. The frequency of my headaches has dropped dramatically, and the constant clenching in my jaw has finally stopped.",
    rating: 5,
    verified: true,
  },
  {
    name: "David O'Connor",
    location: "Dublin, Ireland",
    condition: "Digestive Issues & Fatigue",
    title: "Reflexology Sessions That Balanced My Entire System.",
    review: "I sought out reflexology to help with ongoing digestive sluggishness and general fatigue. The focused pressure on specific zones of my feet was intense but ultimately very relieving. It was fascinating how the therapist could pinpoint areas of imbalance in my body just through my feet. Following the course of treatments, my digestion became much more regular, and my energy levels have noticeably stabilized throughout the day.",
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
        <div id="specialised-therapies" className="text-center mb-12 max-w-3xl mx-auto scroll-mt-24">
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
        <div id="why-india" className="mt-12 md:mt-20 scroll-mt-24">
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

      {/* Floating Quote Button - Pill on desktop, Circle on mobile */}
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

export default TouchBodyworkTherapies;
