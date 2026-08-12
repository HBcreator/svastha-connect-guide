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
  Clock, ReceiptIndianRupee, CheckCircle2, Sparkles
} from "lucide-react";

const patientReviews = [
  {
    name: "Gerhard Steinberg", location: "Hamburg, Germany", condition: "Post-Stroke Paralysis",
    title: "Ayurveda Restored What Conventional Medicine Had Given Up On.",
    review: "My father suffered a stroke, leaving him with left-sided paralysis. After three months of conventional physiotherapy with minimal improvement, we brought him to India for Pakshaghata rehabilitation. By week four, his speech had improved significantly, and by week seven, he was walking with support. His neurologist in Hamburg acknowledged the recovery as beyond what the conventional prognosis had suggested.",
    rating: 5, verified: true
  },
  {
    name: "Nuala Hennessy", location: "Galway, Ireland", condition: "Motor Function Recovery",
    title: "We Used the 'Golden Period' Wisely With Ayurveda.",
    review: "When my mother had her stroke, her neurologist told us the first few months were a critical window for recovery. The daily Snehana, Svedana, and Shirobasti therapies were administered under close physician supervision. The quality of her recovery justified every hour of the journey from Galway.",
    rating: 5, verified: true
  },
  {
    name: "Isabelle Fontaine", location: "Nice, France", condition: "Hand Function Rehab",
    title: "Ayurveda Gave My Husband Back His Independence.",
    review: "Six weeks after my husband's stroke, his right hand remained non-functional. The program combined Kayaseka warm oil therapy with Matravasti enemas. The Rasayana therapy in the final weeks rebuilt his neurological strength, with a measurable improvement in his grip and speech clarity.",
    rating: 5, verified: true
  },
  {
    name: "Stavros Papadopoulos", location: "Athens, Greece", condition: "Cognitive Recovery",
    title: "This Addressed What European Rehabilitation Did Not.",
    review: "Conventional rehab focused only on physiotherapy, leaving my neurological fatigue unaddressed. The Shirodhara sessions produced a profound neurological calming effect, reducing my anxiety and improving my sleep within one week. The Abhyanga rebuilt muscle tone in a way physiotherapy alone had not.",
    rating: 5, verified: true
  },
  {
    name: "Fionnuala Brennan", location: "Dublin, Ireland", condition: "Full Rehabilitation",
    title: "My Recovery Exceeded Every Expectation.",
    review: "Twelve weeks after my stroke, after Panchakarma and daily Kayaseka therapy, assessments showed improvements my neurologist described as exceptional. I returned home walking independently and speaking clearly. Ayurveda's integrated approach produced outcomes we had stopped believing were possible.",
    rating: 5, verified: true
  }
];

const topAyurvedicCenters = [
  {
    name: "SWAN Yoga Retreat & Ayurveda",
    city: "Goa",
    location: "Goa",
    description: "Experience authentic yogic living at SWAN Yoga Retreat & Ayurveda, a peaceful ashram-style wellness centre set in the lush hills of North Goa. Rooted in classical Yoga and Ayurveda, the retreat offers a calm space for healing, mental clarity, and inner growth.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/SWAN Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/swan-yoga-retreat"
  },
  {
    name: "Carnoustie Ayurveda & Wellness Resort",
    city: "Mararikulam",
    location: "Mararikulam",
    description: "Step into a sanctuary of authentic Ayurvedic Healing at Carnoustie Ayurveda & Wellness Resort, an award-winning beachfront retreat nestled along the serene shores of Marari Beach. Designed to harmonize luxury with traditional wisdom, the resort offers a deeply immersive wellness experience rooted in Ayurveda, Yoga, and Naturopathy. Guided by expert Vaidyas, each program is carefully personalized to balance the body�s doshas and restore holistic well-being. From detoxification therapies to rejuvenation rituals, every treatment is crafted to promote physical vitality, mental clarity, and emotional equilibrium. The tranquil environment�surrounded by lush greenery and the calming Arabian Sea�enhances the healing journey, making it both restorative and transformative. Guests can indulge in signature Panchakarma therapies, therapeutic massages, and integrated healing practices such as Marma therapy and Pranic healing, all designed to detoxify, strengthen immunity, and rejuvenate the body from within.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/carnoustie-ayurveda-wellness-resort"
  },
  {
    name: "Ayuskama Ayurveda",
    city: "Dharamshala",
    location: "Dharamshala",
    description: "Ayuskama Ayurveda ek authentic Ayurvedic wellness center hai jo traditional Ayurveda ko modern lifestyle ke saath integrate karta hai. Yeh center Ayurveda, Panchakarma aur holistic healing therapies par focus karta hai, jahan personalized treatment plans experienced Ayurvedic doctors ke guidance mein design kiye jaate hain. Natural therapies, herbal medicines aur sattvic lifestyle ke through Ayuskama long-term health, detoxification aur overall rejuvenation ko promote karta hai. Yeh center chronic health issues, stress management aur preventive healthcare ke liye ek holistic approach provide karta hai.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/ayuskama-ayurveda"
  },
  {
    name: "Niraamaya Retreats Surya Samudra",
    city: "Kerala",
    location: "Kerala",
    description: "Immerse yourself in the serene beauty of coastal Ayurveda at Niraamaya Retreats Surya Samudra, a luxurious wellness destination on Kerala's pristine shores. Known for authentic therapies and tranquil ocean views, it blends traditional healing with modern comfort for deep rejuvenation.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/niraamaya-retreats-surya-samudra"
  },
  {
    name: "ITC Grand Bharat",
    city: "Gurugram",
    location: "Gurugram",
    description: "Immerse yourself in the grandeur of Indian heritage at ITC Grand Bharat, a luxurious all-suite retreat nestled amidst the serene Aravalli hills. Inspired by India's rich cultural legacy, the retreat blends royal architecture with modern wellness, offering a deeply rejuvenating escape. Each stay is defined by personalized service, spacious suites, and a tranquil environment that encourages slow, mindful living.",
    rating: 4.8,
    reviews: 17000,
    image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/gurugram/itc-grand-bharat"
  },
  {
    name: "Sitaram Mountain Retreat",
    city: "Idukki",
    location: "Idukki",
    description: "Discover profound healing amidst the breathtaking hills of Munnar at Sitaram Mountain Retreat, a globally acclaimed sanctuary for authentic Ayurvedic wellness. Carrying forward a remarkable 104-year family legacy in traditional healing, this NABH-accredited retreat seamlessly blends classical Ayurvedic principles with the therapeutic power of pristine mountain nature.",
    rating: 4.8,
    reviews: 928,
    image: "/Center Images/Sitaram Mountain Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/idukki/sitaram-mountain-retreat"
  },
  {
    name: "Dhathri Ayurveda Hospital & Panchakarma Center",
    city: "Kayamkulam",
    location: "Kayamkulam",
    description: "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma. Expect a deeply healing journey where ancient heritage meets clinical excellence in a tranquil, natural environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/dhathri-ayurveda"
  },
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
    name: "Namaste Dwaar � Countryside Wellness Retreat",
    city: "Delhi",
    location: "Delhi",
    description: "Peaceful farmhouse sanctuary near NCR offering authentic Ayurvedic therapies, farm-fresh sattvic food, and compassionate care.",
    rating: 4.8,
    reviews: 180,
    image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
    link: "/top-ayurvedic-centers-in-india/delhi/namastedwaar"
  },
  {
    name: "Ananda In The Himalayas",
    city: "Uttarakhand",
    location: "Uttarakhand",
    description: "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat nestled in the serene Himalayan foothills. Surrounded by pristine forests and overlooking the Ganges valley, Ananda blends ancient Indian wellness wisdom with modern luxury. Rooted in Ayurveda, Yoga, and Vedanta, Ananda offers highly personalized wellness programs guided by expert physicians and therapists. Each journey is designed to rejuvenate the body, calm the mind, and elevate the spirit�creating lasting transformation through mindful living and natural healing practices.",
    rating: 4.8,
    reviews: 900,
    image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/uttarakhand/ananda-in-the-himalayas"
  },
  {
    name: "Kairali Heritage Resort � Riverside Ayurveda & Wellness Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
    rating: 4.8,
    reviews: 220,
    image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-heritage"
  },
  {
    name: "The Imperial Spa and Wellness",
    city: "Delhi",
    location: "Delhi",
    description: "Step into a world of refined relaxation at The Imperial Spa and Wellness, a luxury wellness destination designed to restore balance, calm, and vitality. Blending timeless healing traditions with modern wellness therapies, the centre offers a peaceful retreat for guests seeking deep rejuvenation of body and mind. From personalized spa rituals to restorative wellness experiences, every treatment is thoughtfully curated by skilled professionals to deliver comfort, renewal, and holistic well-being in an elegant setting.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/The Imperial Spa & Salon/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/delhi/the-imperial-spa-and-wellness"
  },
];

const faqItems = [
  { question: "When is the best time to start Ayurvedic rehabilitation after a stroke?", answer: "The 'Golden Period' for stroke recovery is usually the first 3 to 6 months. However, Ayurveda can significantly help even years after a stroke by nourishing the nervous system and improving muscle tone." },
  { question: "Can Ayurveda help with speech problems (aphasia) caused by stroke?", answer: "Yes. Therapies like Nasya and Shirodhara, combined with specific speech-focused Ayurvedic herbs, can help restore cognitive functions and improve speech clarity by nourishing the brain centers." },
  { question: "Is this treatment safe for patients with high blood pressure?", answer: "Absolutely. In fact, many Ayurvedic stroke programs include blood pressure management. Our physicians monitor your vitals daily and adjust the oils and therapies to ensure they are safe and beneficial." },
  { question: "How long is the recommended stay for full rehabilitation?", answer: "For significant neurological recovery, we recommend a minimum of 21 to 28 days. For more severe cases of paralysis, a 42-day comprehensive program is ideal to ensure sustainable strength and independence." },
  { question: "Can Ayurvedic therapies be combined with conventional physiotherapy?", answer: "Yes, and this is actually highly recommended. Ayurveda treatments like Abhyanga and Kizhi prepare the muscles and nerves, making them more receptive to physiotherapy. Many patients do both simultaneously for accelerated recovery." }
];

const StrokeTreatment = () => {
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
    { id: "therapies", title: "Core Therapies" },
    { id: "stages", title: "Recovery Stages" },
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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Neurological Rehabilitation</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Stroke Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">Restore Function & Rebuild Life. Ancient Ayurvedic neuro-rehabilitation for faster, deeper recovery.</p>
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
                src="/Treatments-images/Stroke Treatment.jpg" 
                alt="Ayurvedic Stroke Recovery" 
                className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/40 to-transparent" />
            </div>
            <div className="space-y-8 order-2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[2.6rem] font-bold text-[#335765] leading-tight">Pakshaghata: More Than Just Paralysis</h2>
                <div className="space-y-5 text-[#7F543D] text-lg md:text-[1.1rem] leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                  <p>
                    A stroke, or <strong>Pakshaghata</strong> in Ayurveda, is a severe disruption of the Vata dosha that blocks the body's channels (srotas).
                  </p>
                  <p>
                    While modern medicine handles the acute phase, Ayurveda focuses on the <strong>rehabilitation journey</strong>—nourishing damaged nerves and restoring the flow of prana to paralyzed limbs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="h-12 md:h-14 bg-[#335765] hover:bg-[#25464c] text-white font-bold text-lg rounded-xl shadow-xl px-10 transition-all active:scale-95" onClick={() => setQuoteModalOpen(true)}>
                  Start Your Recovery Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Root Cause / Goals */}
        <section id="root-cause" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">The Science of Neuro-Healing</h2>
            <p className="text-lg text-[#7F543D]">Ayurvedic rehabilitation targets the root neurological damage to restore muscle tone and cognitive function.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-[#d8d0ae] bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="flex flex-col h-full space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-[#335765]/10 flex items-center justify-center group-hover:bg-[#335765] transition-colors duration-500">
                  <Brain className="h-7 w-7 text-[#335765] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Vata & Majja Dhatu</h3>
                <p className="text-[#7F543D] leading-relaxed">
                  Stroke violently disrupts blood and prana flow. We focus on pacifying aggravated Vata to stop further nerve damage and intensely nourish the <strong>Majja Dhatu</strong> (nervous tissue).
                </p>
              </div>
            </Card>
            <Card className="p-8 border-[#d8d0ae] bg-[#F8F4E7] hover:shadow-2xl transition-all duration-500 group">
              <div className="flex flex-col h-full space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-[#335765]/10 flex items-center justify-center group-hover:bg-[#335765] transition-colors duration-500">
                  <Activity className="h-7 w-7 text-[#335765] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Integrated Physio-Ayur</h3>
                <p className="text-[#7F543D] leading-relaxed">
                  By combining modern physiotherapy to retrain muscles with Ayurvedic therapies to heal nerves from within, we achieve a synergistic effect for much faster recovery.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Core Therapies Section */}
        <section id="therapies" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#335765]">Core Ayurvedic Therapies</h2>
            <p className="text-lg text-[#7F543D]">Specific Panchakarma protocols renowned for their profound effect on the central nervous system.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Basti", sanskrit: "Medicated Enema", text: "The most effective treatment for Vata. Nourishes nerves directly via the colon-nerve pathway.", icon: Droplet },
              { title: "Nasya Karma", sanskrit: "Nasal Therapy", text: "Direct pathway to the brain. Administers oils to nourish brain cells and restore motor functions.", icon: Sparkles },
              { title: "Shirodhara", sanskrit: "Oil Streaming", text: "Continuous warm oil on the forehead. Calms the brain and promotes deep neurological healing.", icon: Brain },
              { title: "Pizhichil", sanskrit: "Oil Bath Massage", text: "Known as the 'king of treatments.' Highly effective for relieving post-stroke muscle rigidity.", icon: Activity },
              { title: "Abhyanga", sanskrit: "Full-Body Massage", text: "Synchronized massage with nervine-strengthening oils to improve circulation and muscle tone.", icon: ShieldCheck },
              { title: "Swedana", sanskrit: "Herbal Steam", text: "Medicated steam bath to loosen stiffness and open blocked channels (srotas).", icon: Droplet },
            ].map((therapy, idx) => {
              const Icon = therapy.icon;
              return (
                <Card key={idx} className="shadow-md border-[#d8d0ae] hover:-translate-y-1 transition-transform bg-white">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE8D0] mb-4">
                      <Icon className="h-6 w-6 text-[#2F5B5D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#335765]">{therapy.title}</h3>
                    <p className="text-[#7F543D] mb-2 text-xs font-semibold uppercase tracking-wider">{therapy.sanskrit}</p>
                    <p className="text-[#5f4636] leading-relaxed text-xs">
                      {therapy.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Recovery Stages */}
        <section id="stages" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-[#335765]">The Recovery Roadmap</h2>
            <p className="text-lg text-[#7F543D]">Our rehabilitation process unfolds in three systematic phases for safe and sustainable results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Detox & Open Channels", sanskrit: "POORVAKARMA", text: "Focuses on clearing metabolic toxins (Ama) and opening blocked neurological pathways.", icon: Droplet },
              { title: "Nerve Nourishment", sanskrit: "PRADHANAKARMA", text: "The core healing phase using Basti and Nasya to directly nourish the damaged nervous tissues.", icon: Brain },
              { title: "Strength & Stability", sanskrit: "PASCHATKARMA", text: "Focuses on muscle retraining, speech therapy, and preventing future neurological events.", icon: ShieldCheck }
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
             <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-3">Suggested Packages, Cost & Duration For Stroke Treatment in India</h2>
             <p className="text-lg text-[#7F543D]">Choose a recovery timeline based on the severity of the stroke and individual goals. Includes integrated physiotherapy.</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
             {[
               { name: "21-Day Recovery Plan", duration: "21 Days", cost: "$2,800 - $3,500 USD", focus: "Focuses on reducing stiffness and regaining basic motor functions. Ideal for mild strokes.", image: "/stroke_pack1.png" },
               { name: "28-Day Intensive Healing", duration: "28 Days", cost: "$3,500 - $4,800 USD", focus: "Deep nerve nourishment and intensive physiotherapy. Best for moderate hemiplegia.", image: "/stroke_pack2.png" },
               { name: "42-Day Comprehensive Rehab", duration: "42 Days", cost: "$5,200 - $7,500 USD", focus: "Long-term rehabilitation for severe paralysis. Focuses on full independence and strength.", image: "/stroke_pack3.png" }
             ].map((pkg, idx) => (
               <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full bg-white">
                 <div className="relative h-40 md:h-44 overflow-hidden shrink-0">
                   <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                      <Button onClick={() => setQuoteModalOpen(true)} className="w-full h-11 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base rounded-xl shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                        Get a Free Quote
                      </Button>
                    </div>
                  </CardContent>
               </Card>
             ))}
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
                          <h4 className="text-base md:text-xl font-semibold text-[#335765]">
                            {patientReviews[currentReview].name}
                          </h4>
                          {patientReviews[currentReview].verified && (
                            <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">
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
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Stroke Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for stroke and neurological rehabilitation.</p>
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
                src="/stroke_hero_intro.png"
                alt="Stroke Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
               <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Stroke Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20a%20Stroke%20program."
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
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
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

export default StrokeTreatment;


