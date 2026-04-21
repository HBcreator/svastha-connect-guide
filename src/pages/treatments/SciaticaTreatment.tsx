import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calendar, MapPin, Star, Activity, Droplet, 
  ArrowRight, ChevronLeft, ChevronRight, Search, 
  Phone, X, ClipboardList, Brain, ShieldCheck,
  Clock, ReceiptIndianRupee
} from "lucide-react";

const patientReviews = [
  {
    name: "James Hartley", location: "Manchester, UK", condition: "Chronic Sciatica",
    title: "Three Years of Sciatica Pain — Gone in 21 Days.",
    review: "My NHS consultant had tried everything, but nothing provided lasting relief for my sciatica. The Gridhrasi Chikitsa protocol in India, which combined Kati Basti with Panchakarma detox, addressed the root Vata imbalance completely. My follow-up showed nerve conduction improvements that were better than expected.",
    rating: 5, verified: true
  },
  {
    name: "Sophie Brennan", location: "Dublin, Ireland", condition: "Sciatic Nerve Pain",
    title: "Ayurveda Succeeded Where Conventional Treatment Failed.",
    review: "My sciatica had made simple tasks like driving and sleeping impossible. My neurologist supported an Ayurvedic approach, and the 18-day program combining Abhyanga, Swedana, and herbal therapy gave me 80% pain relief by the second week. My physiotherapist was genuinely surprised at my dramatic improvement.",
    rating: 5, verified: true
  },
  {
    name: "Robert Fleming", location: "Toronto, Canada", condition: "Disc Compression",
    title: "I Avoided Spinal Surgery Thanks to This Program.",
    review: "My orthopedic surgeon had already discussed surgical intervention for the nerve compression. I requested three months to try Ayurvedic treatment first. The Kati Basti therapy, combined with Panchakarma and daily yoga, reduced my pain so dramatically that surgery is now completely off the table.",
    rating: 5, verified: true
  }
];

const faqItems = [
  { question: "What is the recommended duration for Sciatica treatment?", answer: "For acute pain, a 14-day program is effective. However, for chronic sciatica or cases involving disc compression, a 21 to 28-day intensive program is recommended to ensure deep nerve nourishment and long-term stability." },
  { question: "Can Ayurveda help avoid spinal surgery for Sciatica?", answer: "Yes, in many cases. Ayurvedic therapies like Kati Basti and Basti reduce inflammation and nourish the spinal discs, often relieving nerve compression enough to avoid surgical intervention. We recommend a consultation with our Vaidyas to assess your case." },
  { question: "What therapies are most effective for nerve pain?", answer: "Kati Vasti (localized oil pooling), Patra Pinda Sweda (herbal poultice), and Basti (medicated enema) are the gold-standard therapies. They directly target the Vata imbalance and provide both immediate pain relief and long-term healing." },
  { question: "Is this treatment suitable for older patients?", answer: "Absolutely. Ayurvedic treatments are non-invasive and gentle. We personalize the intensity of the massage and the temperature of the oils to suit the age and strength of the patient, ensuring a safe and comfortable healing experience." }
];

const topAyurvedicCenters = [
  {
    name: "SOUKYA International Holistic Health Centre",
    city: "Bengaluru, Karnataka, India",
    description: "India's first NABH-accredited hospital integrating Ayurveda and Yoga. Highly specialized in spinal health and nerve-related recovery.",
    rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/centers/bangalore/soukya",
  },
  {
    name: "AyurvedaGram Heritage Wellness Centre",
    city: "Bengaluru, Karnataka, India",
    description: "Traditional Ayurvedic healing in a tranquil heritage village. Excellent for chronic pain management and Vata-pacifying programs.",
    rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/centers/bangalore/ayurvedagram",
  },
  {
    name: "Carnoustie Ayurveda Wellness Resort",
    city: "Mararikulam, Kerala, India",
    description: "Premium beachside center specializing in authentic Panchakarma and recovery-focused plans for nerve disorders.",
    rating: 4.7, reviews: 360, image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg", link: "/centers/kerala/carnoustie-ayurveda-wellness-resort",
  },
  {
    name: "Agni Ayurvedic Village",
    city: "Mumbai, Maharashtra, India",
    description: "A premier destination for authentic Ayurveda. Specializing in chronic back pain and neuromuscular disorders with a high success rate.",
    rating: 4.8, reviews: 420, image: "/Center Images/Agni - Ayurvedic Village/CTA-bottom.jpg", link: "/centers/mumbai/agni-ayurvedic-village",
  },
  {
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kovalam, Kerala, India",
    description: "Award-winning wellness retreat offering specialized Vata-pacifying treatments and spine health programs in a luxury setting.",
    rating: 4.9, reviews: 280, image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg", link: "/centers/kerala/niraamaya-surya-samudra",
  },
  {
    name: "Ananda in the Himalayas",
    city: "Rishikesh, Uttarakhand, India",
    description: "World-renowned wellness destination. Their 'Physiotherapy and Ayurveda' integration is world-class for spinal rehabilitation.",
    rating: 4.9, reviews: 850, image: "/Center Images/Ananda in the Himalayas/Thumb.jpg", link: "/centers/rishikesh/ananda-in-the-himalayas",
  }
];

const SciaticaTreatment = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [topCentersMobileView, setTopCentersMobileView] = useState(false);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  const topCentersTotalSlides = Math.ceil(topAyurvedicCenters.length / topCentersPerSlide);

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

  const jumpSections = [
    { id: "intro", title: "Overview" },
    { id: "root-cause", title: "The Root Cause" },
    { id: "stages", title: "Therapeutic Journey" },
    { id: "cost-duration", title: "Packages & Cost" },
    { id: "reviews", title: "Patient Stories" },
    { id: "top-centers", title: "Top Centers" },
    { id: "faq", title: "FAQ" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  const goReviewPrevious = () => {
    setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  };

  const goReviewNext = () => {
    setCurrentReview((prev) => (prev + 1) % patientReviews.length);
  };

  const goTopCentersPrevious = () => {
    setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  };

  const goTopCentersNext = () => {
    setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  };

  const toggleCenterDescription = (name: string) => {
    setExpandedCenterName(expandedCenterName === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-[#E5EFEC] font-poppins overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Nerve Pain Relief</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Sciatica Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">Relieve Nerve Pain and Restore Mobility. Cleanse your body and mind with authentic Ayurvedic care.</p>
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

      <main className="container mx-auto px-4 max-w-6xl pb-10 md:pb-12 pt-8 md:pt-10 space-y-14 md:space-y-16">
        
        {/* Intro Section */}
        <section id="intro" className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group order-1">
              <img 
                src="/sciatica_intro.png" 
                alt="Ayurvedic Sciatica Treatment" 
                className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/40 to-transparent" />
            </div>
            <div className="space-y-8 order-2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[2.6rem] font-bold text-[#335765] leading-tight">Gridhrasi: More Than Just a Nerve Pain</h2>
                <div className="space-y-5 text-[#7F543D] text-lg md:text-[1.1rem] leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                  <p>
                    Sciatica, known as <strong>Gridhrasi</strong> in Ayurveda, is a debilitating condition where sharp, shooting pain radiates from the lower back down to the leg. The name comes from "Gridhra" (vulture), reflecting the characteristic gait of the patient.
                  </p>
                  <p>
                    While conventional medicine often focuses on managing the symptoms, Ayurveda seeks to address the <strong>root cause</strong>—the deep-seated imbalance of Vata that constricts the nerve pathways.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="h-12 md:h-14 bg-[#335765] hover:bg-[#25464c] text-white font-bold text-lg rounded-xl shadow-xl px-10 transition-all active:scale-95" onClick={() => setQuoteModalOpen(true)}>
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dosha & Root Cause Section */}
        <section id="root-cause" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">The Root of Gridhrasi</h2>
            <p className="text-lg text-[#7F543D]">Ayurveda identifies sciatica as a profound imbalance of the Doshas, obstructing the natural flow of energy.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-[#d8d0ae] bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="flex flex-col h-full space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-[#335765]/10 flex items-center justify-center group-hover:bg-[#335765] transition-colors duration-500">
                  <Activity className="h-7 w-7 text-[#335765] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Aggravated Vata Dosha</h3>
                <p className="text-[#7F543D] leading-relaxed">
                  Vata governs the nervous system. Improper posture, cold diet, or excessive strain causes Vata to become erratic, leading to sharp, throbbing pain and stiffness in the sciatic nerve.
                </p>
              </div>
            </Card>
            <Card className="p-8 border-[#d8d0ae] bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="flex flex-col h-full space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-[#335765]/10 flex items-center justify-center group-hover:bg-[#335765] transition-colors duration-500">
                  <Droplet className="h-7 w-7 text-[#335765] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Blockage by Kapha & Ama</h3>
                <p className="text-[#7F543D] leading-relaxed">
                  The buildup of metabolic toxins (Ama) and Kapha can create physical blockages around the nerve. This obstructs the flow of Vata, intensifying inflammation and pain.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Therapeutic Journey Section */}
        <section id="stages" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-[#335765]">The Therapeutic Journey</h2>
            <p className="text-lg text-[#7F543D]">A true Sciatica treatment is a carefully managed process that unfolds in three phases to safely and effectively heal the nerves.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pain Relief & Preparation",
                sanskrit: "POORVAKARMA",
                text: "The initial phase focuses on reducing acute inflammation and loosening metabolic toxins (Ama) through localized heat and oil therapies.",
                icon: Droplet
              },
              {
                title: "Main Healing Phase",
                sanskrit: "PRADHANAKARMA",
                text: "The core detoxification stage. Specific therapies like Kati Vasti and Basti are used to directly nourish the sciatic nerve and expel root imbalances.",
                icon: Activity
              },
              {
                title: "Stabilization & Strength",
                sanskrit: "PASCHATKARMA",
                text: "Focuses on long-term recovery. It involves restorative herbs (Rasayanas), gentle Yoga, and posture correction to prevent recurrence.",
                icon: ShieldCheck
              }
            ].map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform bg-white">
                  <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
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

        {/* Suggested Packages */}
        <section id="cost-duration" className="scroll-mt-24 space-y-8">
           <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-3">Suggested Packages, Cost & Duration</h2>
             <p className="text-lg text-[#7F543D]">Select a timeline that matches your recovery goals. Each package includes daily physician consultation, prescribed therapies, medicines, and sattvic diet.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
             {[
               {
                 name: "14-Day Relief Program",
                 duration: "14 Days",
                 cost: "$1,100 - $1,800 USD",
                 focus: "Focuses on acute pain management and initial detoxification to restore mobility and reduce inflammation.",
                 image: "/sciatica_pack1.png"
               },
               {
                 name: "21-Day Healing Journey",
                 duration: "21 Days",
                 cost: "$1,800 - $3,200 USD",
                 focus: "Deep nerve nourishment and spine health. Tackles root cause imbalances to provide long-term recovery.",
                 image: "/sciatica_pack2.png"
               },
               {
                 name: "28-Day Intensive Recovery",
                 duration: "28 Days",
                 cost: "$2,800 - $4,500 USD",
                 focus: "Comprehensive spinal rehabilitation for chronic cases. Combines deep cleansing with intensive strengthening.",
                 image: "/kati_vasti.png"
               }
             ].map((pkg, idx) => {
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
                   
                   <CardContent className="p-4 md:p-5 flex-grow flex flex-col space-y-3 bg-white h-full">
                     <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50 shrink-0">
                       <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                       <span className="font-bold text-[#335765] text-sm">Duration:</span>
                       <span className="font-semibold text-sm">{pkg.duration}</span>
                     </div>
                     <div className="flex items-center gap-2.5 text-[#7F543D] bg-[#F8F4E7] px-3 py-2 rounded-lg border border-[#d8d0ae]/50 shrink-0">
                       <ReceiptIndianRupee className="h-4 w-4 md:h-5 md:w-5 text-[#335765]" />
                       <span className="font-bold text-[#335765] text-sm">Est. Cost:</span>
                       <span className="font-semibold text-sm">{pkg.cost}</span>
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

              <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-4 md:p-12 relative">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4 italic">
                        {patientReviews[currentReview].title}
                      </h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6 font-medium" style={{ color: "#7F543D" }}>
                        "{patientReviews[currentReview].review}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase shadow-md">
                        {patientReviews[currentReview].name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base md:text-xl font-bold text-[#335765]">
                            {patientReviews[currentReview].name}
                          </h4>
                          {patientReviews[currentReview].verified && (
                            <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
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
                      <span className="text-xs md:text-sm font-black text-[#335765]">
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
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Centers */}
        <section id="top-centers" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for sciatica and nerve health.</p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersPrevious}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersNext}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
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
              <Button
                className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
                onClick={() => navigate('/centers')}
              >
                VIEW ALL CENTERS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto px-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-2xl px-6 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-bold text-[#335765] hover:no-underline py-6 transition-all hover:text-[#25464c] [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-6 text-base md:text-[17px] font-medium">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Book Consultation CTA */}
        <section className="scroll-mt-24 w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img
                src="/sciatica_intro.png"
                alt="Sciatica Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Sciatica Treatment Program</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20a%20Sciatica%20program."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-[#335765]">+91 80 2843 2737</span>
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
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex flex-col items-end">
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

      {/* Quote Button (Mobile & Desktop) */}
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
        className={`fixed inset-0 z-[100] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />

        <div
          className={`relative w-full max-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-[#335765]/20 via-[#335765] to-[#335765]/20" />

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
                className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-[#335765]/20 hover:border-[#335765] flex items-center justify-between shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-[#335765]/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-[#335765] group-hover:text-white transition-all duration-200">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-[#335765] group-hover:text-white transition-all duration-200 text-left">
                    {section.title}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                  <ChevronRight className="h-3.5 w-3.5 text-[#335765] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
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

export default SciaticaTreatment;
