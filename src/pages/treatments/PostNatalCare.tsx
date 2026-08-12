import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calendar, MapPin, Star, Baby, Heart, Sparkles, Wind, 
  CheckCircle2, Droplet, UtensilsCrossed, ShieldCheck, 
  ClipboardList, Activity, Clock, ArrowRight, Search, 
  Phone, X, ChevronLeft, ChevronRight
} from "lucide-react";

/* â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const patientReviews = [
  {
    name: "Elena Marchetti", location: "Milan, Italy", condition: "Postpartum Recovery",
    title: "My Body and Mind Both Healed Completely.",
    review: "After a difficult delivery, I was left with extreme fatigue, back pain, and postpartum anxiety. The Ayurvedic physician diagnosed a depletion of my vital energy (Ojas) and a severe Vata aggravation. The Sutika Paricharya protocol, which included Abhyanga and Kati Basti, was incredible. Within thirty days, my energy had fully returned, and my back pain had resolved completely.",
    rating: 5, verified: true
  },
  {
    name: "SinÃ©ad Brennan", location: "Cork, Ireland", condition: "Hormonal Balance",
    title: "This Restored What Six Months of Rest Could Not.",
    review: "Six months after delivery, I was still experiencing hair fall and persistent fatigue. The Ayurvedic physician identified a deep tissue (Dhatu) depletion. The Navara Kizhi massage nourished my muscles, while the Dashamoola herbs restored my hormonal balance. By the end of the forty-day program, my hair fall had stopped, and my strength had fully returned.",
    rating: 5, verified: true
  },
  {
    name: "Ingrid Svensson", location: "Stockholm, Sweden", condition: "Emotional Exhaustion",
    title: "They Rebuilt My Body From the Inside Out.",
    review: "Postnatal care in Sweden focused on checkups, but the deeper depletion I feltâ€”emotional exhaustion and weak digestionâ€”was left unaddressed. The Ayurvedic approach was different. The daily Bala Taila Abhyanga (oil massage) and the medicated herbal gruel (Yavagu) restored my digestive strength. By week five, I felt stronger than I had even before my pregnancy.",
    rating: 5, verified: true
  },
  {
    name: "Camille Fontaine", location: "Bordeaux, France", condition: "Postpartum Depression",
    title: "My Postpartum Depression Liftedâ€”Without a Single Antidepressant.",
    review: "My obstetrician had recommended antidepressants for my postpartum depression. I chose to try Ayurveda first. The physician identified an aggravated Vata in my nervous system as the root cause. The Shirodhara sessions produced a profound sense of calm from the very first sitting. Combined with nervine tonics like Brahmi and Ashwagandha, my mood stabilized completely within three weeks.",
    rating: 5, verified: true
  },
  {
    name: "Aoife Gallagher", location: "Galway, Ireland", condition: "Complete Rejuvenation",
    title: "A Recovery That Made My Second Pregnancy Effortless.",
    review: "After my first delivery, inadequate recovery left me feeling physically weakened. I underwent a comprehensive Sutika Paricharya program in India between my pregnancies. The protocol, which included Pizhichil and Rasayana therapy, rebuilt my depleted tissues and digestive fire. As a result, my second pregnancy was healthier, and my delivery was smoother.",
    rating: 5, verified: true
  },
];

const topAyurvedicCenters = [
  {
    name: "Atmantan Wellness Resort",
    city: "Pune",
    location: "Pune",
    description: "Set amidst the peaceful Sahyadri hills overlooking Mulshi Lake, Atmantan Wellness Resort is a luxury wellness retreat designed to restore balance and vitality. The resort blends traditional healing systems such as Ayurveda and yoga with modern wellness therapies to support holistic health. Guided by experienced wellness experts, guests can enjoy personalized programs focused on detox, stress relief, fitness, and lifestyle improvement. With serene surroundings, nourishing wellness cuisine, and integrated therapies, Atmantan provides a rejuvenating space for relaxation, healing, and long-term wellbeing.",
    rating: 4.7,
    reviews: 500,
    image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/pune/atmantan-wellness-resort"
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
    name: "Viveda Wellness Village",
    city: "Nashik",
    location: "Nashik",
    description: "Immerse yourself in a transformative wellness retreat at Viveda Wellness Village, an integrated wellness destination nestled in the serene surroundings of Trimbakeshwar near Nashik. Designed to reconnect individuals with nature and holistic living, Viveda blends ancient Indian healing sciences with modern wellness practices for complete mind-body rejuvenation. Surrounded by the tranquil landscapes of the Sahyadri ranges, the retreat offers personalized wellness programs guided by experienced practitioners. Guests experience a combination of Ayurveda, naturopathy, yoga, meditation, and therapeutic spa treatments that promote detoxification, stress relief, and long-term vitality.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Viveda Wellness Village/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/maharashtra/viveda-wellness-village"
  },
  {
    name: "Ayurmana",
    city: "Kerala",
    location: "Kerala",
    description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayurmana center/top center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayurmana"
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
    name: "Sandhya Hot Spring Health Care",
    city: "Manikaran",
    location: "Manikaran",
    description: "Immerse yourself in the healing power of natural hot springs at Sandhya Hot Spring Health Care, a serene wellness retreat known for its therapeutic mineral-rich waters. Surrounded by tranquil landscapes, the center blends traditional healing practices with the restorative benefits of geothermal therapy. Rooted in holistic wellness principles, Sandhya offers personalized treatments designed to detoxify the body, relieve stress, and rejuvenate the mind.",
    rating: 4.6,
    reviews: 500,
    image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/himachal/sandhya-hot-spring-health-care"
  },
  {
    name: "Shathayu Ayurveda Yoga Retreat",
    city: "Udupi",
    location: "Udupi",
    description: "Immerse yourself in a serene coastal sanctuary dedicated to authentic Ayurvedic Healing and yogic living. Shathayu Ayurveda Yoga Retreat blends classical Ayurvedic therapies with structured yoga programs, offering a holistic pathway to detoxification, rejuvenation, and lifestyle transformation. Guided by experienced Vaidyas and yoga practitioners, the retreat emphasizes personalized treatment protocols in a peaceful, nature-rich environment—ideal for deep restoration of body and mind.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/udupi/shathayu-ayurveda-yoga-retreat"
  },
  {
    name: "Shreyas Yoga Retreat (Nelamangala)",
    city: "Bangalore",
    location: "Bangalore",
    description: "Experience a serene blend of traditional yoga philosophy and luxury wellness at Shreyas Yoga Retreat in Nelamangala, near Bangalore. Set within lush gardens and peaceful countryside, Shreyas offers an authentic yogic lifestyle rooted in ancient Indian traditions. The retreat focuses on holistic wellbeing through classical Hatha Yoga, meditation, Ayurveda therapies, and mindful living practices guided by experienced teachers. Each wellness journey is thoughtfully designed to nurture physical vitality, mental clarity, and emotional balance. With personalized programs, organic cuisine, and a tranquil environment, Shreyas provides a rejuvenating sanctuary for guests seeking deep relaxation, inner growth, and sustainable wellness.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Shreyas Yoga Retreat/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/bangalore/shreyas-yoga-retreat"
  },
  {
    name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
    city: "Kerala",
    location: "Kerala",
    description: "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
    rating: 4.8,
    reviews: 220,
    image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-heritage"
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
    name: "Akanta Ayurveda and Yoga Resort",
    city: "Kochi",
    location: "Kochi",
    description: "Embrace holistic transformation at Akanta Ayurveda & Yoga Cherai, Kerala's exclusive fully-licensed Ayurveda resort harmoniously positioned between the pristine Arabian Sea and tranquil backwaters. As the only yoga retreat center at Cherai Beach licensed as an Ayurvedic hospital, Akanta integrates government-verified Oushadi Clinic medicines with personalized therapeutic protocols.",
    rating: 4.5,
    reviews: 479,
    image: "/Center Images/Akanta Ayurveda and Yoga Resort/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kochi/akanta-ayurveda-and-yoga-resort"
  },
  {
    name: "Ashiyana Yoga Retreat",
    city: "Goa",
    location: "Goa",
    description: "Immerse yourself in the peaceful essence of yoga and holistic wellness at Ashiyana Yoga Retreat, a globally renowned destination for transformation and self-discovery. Set amidst lush tropical gardens along the serene Mandrem Beach, Ashiyana offers a unique blend of traditional yoga, meditation, and healing therapies. Rooted in authentic yogic philosophy and mindful living, the retreat provides holistic programs guided by experienced teachers and therapists. Each experience is thoughtfully curated to restore harmony in body, mind, and spirit, promoting deep relaxation, inner balance, and long-lasting wellbeing through natural and time-tested practices.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Ashiyana Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/ashiyana-yoga-retreat"
  },
];

const faqItems = [
  { question: "When is the best time to start Ayurvedic postnatal care?", answer: "Ideally, treatments should begin within the first week after a normal delivery. For C-section deliveries, we typically wait about 2 weeks until the surgical wound has healed, focusing initially on light treatments and specific diet." },
  { question: "Can I undergo these treatments if I had a C-section?", answer: "Yes, definitely. While deep abdominal massages are avoided initially, other therapies like head and limb Abhyanga, Shirodhara, and specialized postnatal diets are highly beneficial for C-section recovery and lactation." },
  { question: "Does the Ayurvedic diet affect my breast milk?", answer: "Yes, and in a very positive way. The Ayurvedic postnatal diet (Pathya) includes galactagogues like fenugreek, fennel, and shattered herbs that naturally enhance both the quality and quantity of breast milk while improving the mother's digestion." },
  { question: "Are the oils used safe for the baby during bonding?", answer: "We use only traditional, edible-grade herbal oils like Dhanwantharam Tailam and Bala Tailam. These are completely natural and safe for skin-to-skin contact with your baby during breastfeeding and bonding." },
  { question: "How long is the full Soothika Paricharya program?", answer: "While foundational relief can be felt in 14 days, the classical Ayurvedic period for complete recovery is 42 days (Soothika Kala). This 6-week window is considered essential for the body to fully return to its pre-pregnancy state." },
];

const suggestedPackages = [
  {
    name: "Foundational Healing",
    duration: "14 Days",
    focus: "Initial Vata-pacification, uterine cleansing, and rekindling digestive fire.",
    image: "/Treatments-images/post_natal_pack_1.png",
  },
  {
    name: "Comprehensive Recovery",
    duration: "28 Days",
    focus: "Deep tissue rejuvenation, muscle strengthening, and hormonal balance restoration.",
    image: "/Treatments-images/Post Natal Treatment.jpg",
  },
  {
    name: "Sacred Motherhood Program",
    duration: "42 Days",
    focus: "Complete 6-week Soothika Paricharya for long-term health and mental wellness.",
    image: "/Treatments-images/ayurvedic_treatment_hero.png",
  },
];

const PostNatalCare = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) { setTopCentersPerSlide(1); return; }
      if (window.innerWidth < 1024) { setTopCentersPerSlide(2); return; }
      setTopCentersPerSlide(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  useEffect(() => { setTopCentersSlide(p => p % topCentersTotalSlides); }, [topCentersTotalSlides]);

  const goReviewPrevious = () => setCurrentReview(p => (p - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview(p => (p + 1) % patientReviews.length);
  const goTopCentersPrevious = () => setTopCentersSlide(p => (p - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide(p => (p + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (n: string) => setExpandedCenterName(p => p === n ? null : n);

  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const jumpSections = [
    { id: "intro", title: "Intro & Overview" },
    { id: "ayurvedic-view", title: "Ayurvedic View" },
    { id: "benefits", title: "Benefits of Care" },
    { id: "components", title: "Core Components" },
    { id: "cost-duration", title: "Packages & Cost" },
    { id: "reviews", title: "Patient Stories" },
    { id: "top-centers", title: "Top Centers" },
    { id: "faq", title: "FAQs" },
  ];
  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 80;
      const pos = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section â€” same style as Panchakarma Treatment */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Traditional Motherhood Care</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Post Natal Care Treatment in India</h1>
              <p className="text-lg md:text-xl text-white/90">Nurture Your Recovery Naturally. Experience authentic Ayurvedic care for a healthy transition into motherhood.</p>
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

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-14 md:space-y-16">
        
        {/* â”€â”€ INTRO & OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="intro" className="scroll-mt-24 mb-0">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/Treatments-images/Post Natal Treatment.jpg" 
                alt="Ayurvedic Post-Natal Care" 
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-[#335765] leading-tight">A Holistic Path to Mother's Recovery</h2>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                The postpartum period, or the 42 days following delivery, is a critical window for healing. Ayurveda offers <span className="font-bold text-[#335765]">Soothika Paricharya</span> — a specialized regimen practiced with deep reverence in India.
              </p>
              <p className="text-[#7F543D] leading-relaxed text-lg">
                Childbirth leaves the mother's body in a delicate state, compared to an "empty vessel." Our holistic approach focuses on nurturing the new mother, restoring her strength, and laying the foundation for her long-term health and well-being.
              </p>
              <div className="pt-2">
                <Button onClick={() => setQuoteModalOpen(true)} className="h-11 md:h-12 bg-[#335765] hover:bg-[#2F5B5D] text-white font-bold text-base md:text-lg rounded-xl shadow-lg px-8 transition-all">
                  Start Your Healing Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── AYURVEDIC VIEW (Soothika Paricharya) ─────────── */}
        <section id="ayurvedic-view" className="scroll-mt-24">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">The Ayurvedic View of Post-Natal Care</h2>
            <div className="flex items-center justify-center gap-3 text-[#7F543D]">
              <div className="h-px w-12 bg-[#7F543D]/30" />
              <p className="text-lg italic font-medium tracking-wide">Soothika Paricharya — Sacred Motherhood Recovery</p>
              <div className="h-px w-12 bg-[#7F543D]/30" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Vata Imbalance Card */}
            <div className="bg-[#335765] rounded-2xl p-6 md:p-8 shadow-sm border border-[#335765]/10 text-white relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 opacity-10 group-hover:scale-110 transition-transform duration-500 text-white">
                <Wind className="h-40 w-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Wind className="h-6 w-6 text-sky-300" />
                  </div>
                  The Vata Imbalance
                </h3>
                <p className="text-white/80 leading-relaxed text-base mb-6">
                  Childbirth is a powerful downward movement (Apana Vata). This leaves the body feeling empty, weak, and susceptible to the cold, dry qualities of Vata.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-sky-300 uppercase tracking-widest mb-1">State</p>
                    <p className="text-sm font-medium">Empty & Vulnerable</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-sky-300 uppercase tracking-widest mb-1">Impact</p>
                    <p className="text-sm font-medium">Depleted Vitality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agni Card */}
            <div className="bg-[#7F543D] rounded-2xl p-6 md:p-8 shadow-sm border border-[#7F543D]/10 text-white relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 opacity-10 group-hover:scale-110 transition-transform duration-500 text-white">
                <Sparkles className="h-40 w-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Sparkles className="h-6 w-6 text-orange-300" />
                  </div>
                  The Role of Agni
                </h3>
                <p className="text-white/80 leading-relaxed text-base mb-6">
                  Simultaneously, the mother's digestive fire, or Agni, becomes extremely weak. The primary goal is to pacify Vata and rekindle this internal fire.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-1">Metabolism</p>
                    <p className="text-sm font-medium">Rekindling Agni</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-1">Goal</p>
                    <p className="text-sm font-medium">Optimal Absorption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ BENEFITS OF TREATMENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="benefits" className="scroll-mt-24">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Benefits of Soothika Paricharya</h2>
            <p className="text-[#7F543D] text-lg max-w-2xl mx-auto">Comprehensive recovery for the mind and body during the sacred transition to motherhood.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Physical Rejuvenation */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-16 w-16 rounded-2xl bg-[#335765]/10 flex items-center justify-center">
                  <Activity className="h-9 w-9 text-[#335765]" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Physical Rejuvenation</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Restores Uterine Health", text: "Helps the uterus shrink back to normal size and prevents future gynecological issues." },
                  { title: "Strengthens Muscles & Joints", text: "Relieves backache, hip pain, and joint stiffness common after delivery." },
                  { title: "Enhances Lactation", text: "Specific herbs and diet promote a healthy and abundant supply of breast milk." },
                  { title: "Boosts Immunity", text: "Replenishes vital energy (Ojas), making the mother strong and resilient." }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#335765]/10 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mt-1 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[#335765] text-sm">{benefit.title}</p>
                      <p className="text-xs text-[#7F543D] leading-relaxed mt-0.5">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mental & Emotional Support */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-16 w-16 rounded-2xl bg-[#7F543D]/10 flex items-center justify-center">
                  <Heart className="h-9 w-9 text-[#7F543D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#335765]">Mental & Emotional Support</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Prevents Postpartum Depression", text: "Calming therapies and warm oil massages pacify Vata to prevent anxiety and mood swings." },
                  { title: "Promotes Deep Rest", text: "Shirodhara and Abhyanga calm the nervous system for restorative rest." },
                  { title: "Facilitates Bonding", text: "A calm, nourished mother is better able to bond with her newborn." },
                  { title: "Emotional Balance", text: "Grounding therapies help navigate the immense emotional transformation." }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#7F543D]/10 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mt-1 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[#335765] text-sm">{benefit.title}</p>
                      <p className="text-xs text-[#7F543D] leading-relaxed mt-0.5">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ CORE COMPONENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="components" className="scroll-mt-24">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Core Components of Care</h2>
            <p className="text-[#7F543D] text-lg max-w-2xl mx-auto">A multi-faceted approach to complete postnatal recovery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Traditional Therapies", 
                subtitle: "Abhyanga & Vethu Kuli", 
                icon: Droplet, 
                desc: "Therapeutic warm oil massages followed by herbal baths (Vethu Kuli) to relieve pain and purify the body.",
                bg: "bg-[#F8F4E7]", border: "border-[#d8d0ae]"
              },
              { 
                title: "Healing Diet", 
                subtitle: "Pathya (Regimen)", 
                icon: UtensilsCrossed, 
                desc: "Warm, moist, and easy-to-digest foods like rice gruel and ghee, infused with spices like ginger and turmeric.",
                bg: "bg-[#EDE8D0]", border: "border-[#c9c1a5]"
              },
              { 
                title: "Herbal Medicines", 
                subtitle: "Arishtas & Tonics", 
                icon: ShieldCheck, 
                desc: "Internal formulations like Dashamularishta and Jeerakarishta to cleanse the uterus and balance hormones.",
                bg: "bg-[#F3EFE0]", border: "border-[#dfd8c2]"
              },
              { 
                title: "Lifestyle Care", 
                subtitle: "Vihara (Practices)", 
                icon: ClipboardList, 
                desc: "Abdominal binding, adequate rest, and staying warm to protect the body from Vata aggravation.",
                bg: "bg-[#F9F7F0]", border: "border-[#e5e0cf]"
              }
            ].map((item, i) => (
              <Card key={i} className={`border shadow-sm ${item.bg} ${item.border} hover:shadow-md transition-shadow group`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-12 w-12 rounded-xl bg-white/50 flex items-center justify-center border border-white/80 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-[#335765]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#335765] leading-tight">{item.title}</h4>
                      <p className="text-[10px] font-bold text-[#7F543D] uppercase tracking-wider">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#7F543D] leading-relaxed line-clamp-4">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* â”€â”€ SUGGESTED PACKAGES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="cost-duration" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#335765]">Suggested Packages, Cost & Duration For Post Natal Care Treatment in India</h2>
            <p className="text-[#7F543D] text-lg italic">Personalized postnatal care durations to suit your recovery needs. Each package includes daily physician consultation, prescribed therapies, and specialized nutrition.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {suggestedPackages.map((pkg, idx) => (
              <Card key={idx} className="group overflow-hidden border-[#d8d0ae] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full">
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

        {/* â”€â”€ PATIENT REVIEWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="reviews" className="scroll-mt-24 bg-transparent w-full">
          <div className="container mx-auto px-4 max-w-6xl text-left">
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories &amp; Reviews</h2>
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

              <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
                <CardContent className="p-4 md:p-12 relative">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-[#335765]/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                        {patientReviews[currentReview].title}
                      </h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                        "{patientReviews[currentReview].review}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                        {patientReviews[currentReview].name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight">
                            {patientReviews[currentReview].name}
                          </h4>
                          {patientReviews[currentReview].verified && (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">
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
                      <span className="text-xs md:text-sm font-semibold text-[#335765]">
                        {patientReviews[currentReview].rating}.0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* â”€â”€ TOP CENTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="top-centers" className="scroll-mt-24 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurveda Centers for Post Natal Care Treatment in India</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for Ayurveda postnatal programs.</p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersPrevious}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Previous centers"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button
                onClick={goTopCentersNext}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Next centers"
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

                    <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow text-left">
                      <h3 className="text-lg md:text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex">{center.name}</h3>
                      
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
                          className="w-full bg-white border-2 border-[#335765]/10 text-[#335765] font-bold h-10 rounded-xl flex items-center justify-center text-xs hover:bg-[#335765]/5 transition-all"
                        >
                          View Details
                        </Link>
                        <Button
                          onClick={() => setQuoteModalOpen(true)}
                          className="w-full bg-[#335765] text-white font-bold h-10 rounded-xl text-xs hover:bg-[#2F5B5D] transition-all"
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

          <div className="flex justify-center mt-8">
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
        </section>

        {/* â”€â”€ FAQs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="faq" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto px-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* â”€â”€ BOOK CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="scroll-mt-24 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#335765] text-white">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img
                src="/Treatments-images/Post Natal Treatment.jpg"
                alt="Post Natal Care Treatment consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1 text-left">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Post Natal Care Treatment Program in India</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                Begin with a no-obligation consultation. We help you find the best care tailored to your needs.
              </p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20a%20Post%20Natal%20Care%20program."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>
                  Get Free Consultation Here
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Elements */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end text-left">
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

      <button
        onClick={() => setIsJumpModalOpen(true)}
        className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Search size={18} className="-ml-1" />
        <span>BROWSE</span>
      </button>

      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Phone size={18} className="-ml-1" />
        <span className="hidden md:inline">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

      {/* Jump Modal */}
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

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5 text-left">
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

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default PostNatalCare;


