import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Treatments = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 15;

  const categories = [
    "All",
    "Detox & Wellness",
    "Neurological Disorders",
    "Pain Management",
    "Digestive Health",
    "Respiratory Care",
    "Skin & Hair",
    "Women's Health",
    "Mental Health",
  ];

  const treatments = [
    {
      name: "Ayurveda Treatment",
      slug: "ayurveda-treatment-in-india",
      category: "Detox & Wellness",
      description: "Experience the ancient science of holistic healing that balances mind, body, and spirit through natural therapies and personalized wellness programs.",
      benefits: ["Complete body rejuvenation", "Natural healing", "Dosha balance", "Improved immunity"],
      image: "/Treatments-images/Ayurveda Treatment.jpg",
    },
    {
      name: "Panchakarma Treatment",
      slug: "panchakarma-treatment-in-india",
      category: "Detox & Wellness",
      description: "Deep cleansing detoxification therapy that eliminates toxins through five powerful purification methods for complete body renewal.",
      benefits: ["Deep detoxification", "Enhanced vitality", "Improved digestion", "Mental clarity"],
      image: "/Treatments-images/Panchakarma Treatment.jpg",
    },
    {
      name: "Sinusitis Treatment",
      slug: "sinusitis-treatment-in-india",
      category: "Respiratory Care",
      description: "Natural relief from chronic sinus inflammation using herbal therapies and specialized nasal treatments for lasting results.",
      benefits: ["Clears nasal passages", "Reduces inflammation", "Prevents recurrence", "Improves breathing"],
      image: "/Treatments-images/Sinusitis Treatment.jpg",
    },
    {
      name: "Asthma Treatment",
      slug: "asthma-treatment-in-india",
      category: "Respiratory Care",
      description: "Clears excess Kapha from the respiratory channels using Vamana, Swedana, and Nasya therapies to restore clear, effortless breathing.",
      benefits: ["Reduces wheezing", "Clears airways", "Strengthens lung capacity", "Fewer flare-ups"],
      image: "/Treatments-images/Asthma/asthma-hero-new.png",
    },
    {
      name: "Fatty Liver Treatment",
      slug: "fatty-liver-treatment-in-india",
      category: "Digestive Health",
      description: "Rekindles Agni and clears excess Kapha using Virechana and Udwarthanam therapies to restore healthier liver function and metabolic balance.",
      benefits: ["Supports liver function", "Reduces fat accumulation", "Improves digestion", "Boosts metabolism"],
      image: "/Treatments-images/FattyLiver/Ayurvedic Treatment for Fatty Liver and Liver Detox.jpg",
    },
    {
      name: "Insomnia Treatment",
      slug: "insomnia-treatment-in-india",
      category: "Mental Health",
      description: "Calms an aggravated Vata dosha with Shirodhara and Padabhyanga therapies to restore deep, natural, uninterrupted sleep.",
      benefits: ["Falls asleep faster", "Deeper sleep quality", "Calms overactive mind", "Restores sleep rhythm"],
      image: "/Treatments-images/Insomnia/insomnia-hero-new.png",
    },
    {
      name: "Anxiety & Depression Support",
      slug: "anxiety-and-depression-treatment-in-india",
      category: "Mental Health",
      description: "Calms restless Rajas and lifts heavy Tamas with Shirodhara, Nasya, and Medhya herbs to restore mental clarity and emotional balance.",
      benefits: ["Calms racing thoughts", "Lifts low mood", "Restores emotional balance", "Reduces stress reactivity"],
      image: "/Treatments-images/AnxietyDepression/anxiety-hero-new.png",
    },
    {
      name: "Multiple Sclerosis Support",
      slug: "multiple-sclerosis-treatment-in-india",
      category: "Neurological Disorders",
      description: "Supportive Ayurvedic care alongside neurology treatment, using Basti and Pizhichil therapies to nourish nerve tissue and ease stiffness and fatigue.",
      benefits: ["Eases stiffness", "Supports energy levels", "Nourishes nerve tissue", "Complements neurology care"],
      image: "/Treatments-images/MultipleSclerosis/ms-hero-new.png",
    },
    {
      name: "PCOS Treatment",
      slug: "pcos-treatment-in-india",
      category: "Women's Health",
      description: "Clears excess Kapha and rekindles metabolic fire using Virechana and Uttar Basti therapies to restore regular cycles and hormonal balance.",
      benefits: ["Regulates menstrual cycle", "Supports healthy weight", "Balances hormones", "Improves skin health"],
      image: "/Treatments-images/PCOS/pcos-hero-new.png",
    },
    {
      name: "Fibromyalgia & Chronic Fatigue",
      slug: "fibromyalgia-chronic-fatigue-treatment-in-india",
      category: "Musculoskeletal",
      description: "Calms widespread Vata aggravation and rebuilds depleted Ojas using Pizhichil and Rasayana herbs to ease pain and restore lasting energy.",
      benefits: ["Eases widespread pain", "Restores energy", "Improves sleep quality", "Rebuilds vitality"],
      image: "/Treatments-images/FibromyalgiaChronicFatigue/fibro-hero-new.png",
    },
    {
      name: "Diabetes Management",
      slug: "diabetes-treatment-in-india",
      category: "Metabolic",
      description: "Rekindles metabolic fire and clears excess Kapha using Udwarthanam and Virechana therapies to support healthier, more stable blood sugar.",
      benefits: ["Supports blood sugar balance", "Aids weight management", "Boosts metabolism", "Complements medical care"],
      image: "/Treatments-images/Diabetes/diabetes-hero-new.png",
    },
    {
      name: "Autoimmune Disease Support",
      slug: "autoimmune-disease-treatment-in-india",
      category: "Detox & Wellness",
      description: "Clears deep-seated Ama and rebuilds Ojas using Virechana and Basti therapies, offering supportive care alongside your specialist treatment.",
      benefits: ["Reduces flare-ups", "Supports resilience", "Eases inflammation", "Complements specialist care"],
      image: "/Treatments-images/Autoimmune/autoimmune-hero-new.png",
    },
    {
      name: "Heart Health & Hypertension",
      slug: "heart-health-hypertension-treatment-in-india",
      category: "Cardiovascular",
      description: "Calms stress-linked Vata-Pitta aggravation with Shirodhara and Hridya herbs to support healthier blood pressure and circulation.",
      benefits: ["Supports healthy BP", "Improves circulation", "Reduces stress", "Complements cardiology care"],
      image: "/Treatments-images/HeartHealth/heart-hero-new.png",
    },
    {
      name: "Sports Injury Recovery",
      slug: "sports-injury-recovery-treatment-in-india",
      category: "Musculoskeletal",
      description: "Calms local Vata aggravation and nourishes muscle and joint tissue with Elakizhi and Abhyanga to speed complete injury recovery.",
      benefits: ["Faster recovery", "Reduces inflammation", "Rebuilds tissue strength", "Complements physiotherapy"],
      image: "/Treatments-images/SportsInjury/sports-hero-new.png",
    },
    {
      name: "Peripheral Neuropathy Treatment",
      slug: "peripheral-neuropathy-treatment-in-india",
      category: "Neurological Disorders",
      description: "Nourishes nerve tissue and calms aggravated Vata using Pizhichil and Padabhyanga therapies to ease numbness and restore sensation.",
      benefits: ["Reduces numbness", "Improves circulation", "Nourishes nerve tissue", "Eases tingling"],
      image: "/Treatments-images/PeripheralNeuropathy/neuropathy-hero-new.png",
    },
    {
      name: "Vertigo Treatment",
      slug: "vertigo-treatment-in-india",
      category: "Neurological Disorders",
      description: "Calms Vata-Pitta imbalance in the head with Shirodhara and Nasya therapies to restore the body's natural sense of balance.",
      benefits: ["Reduces dizzy spells", "Restores balance", "Eases neck tension", "Calms nervous system"],
      image: "/Treatments-images/Vertigo/vertigo-hero-new.png",
    },
    {
      name: "Trigeminal Neuralgia Treatment",
      slug: "trigeminal-neuralgia-treatment-in-india",
      category: "Neurological Disorders",
      description: "Calms severely aggravated Vata in the facial nerve pathway using Nasya and Shirodhara to ease sharp nerve pain episodes.",
      benefits: ["Reduces pain episodes", "Calms facial nerve", "Eases jaw tension", "Complements neurology care"],
      image: "/Treatments-images/TrigeminalNeuralgia/trigeminal-hero-new.png",
    },
    {
      name: "Autism Treatment",
      slug: "autism-treatment-in-india",
      category: "Neurological Disorders",
      description: "Holistic approach combining Ayurvedic therapies, dietary modifications, and behavioral support for children with autism spectrum disorders.",
      benefits: ["Improved focus", "Better communication", "Reduced anxiety", "Enhanced social skills"],
      image: "/Treatments-images/Autism Treatment.jpg",
    },
    {
      name: "Weight Loss Treatment",
      slug: "weight-loss-treatment-in-india",
      category: "Detox & Wellness",
      description: "Sustainable weight management program with personalized diet plans, herbal supplements, and metabolic therapies.",
      benefits: ["Natural weight loss", "Improved metabolism", "Better energy levels", "Long-term results"],
      image: "/Treatments-images/Weight Loss.jpg",
    },
    {
      name: "Monsoon Treatment",
      slug: "monsoon-treatment-in-india",
      category: "Detox & Wellness",
      description: "Seasonal rejuvenation program designed to strengthen immunity and prevent monsoon-related ailments through specialized therapies.",
      benefits: ["Boosts immunity", "Prevents infections", "Balances doshas", "Seasonal wellness"],
      image: "/Treatments-images/Monsoon Treatment.jpg",
    },
    {
      name: "Parkinson's Disease Treatment",
      slug: "parkinsons-disease-treatment-in-india",
      category: "Neurological Disorders",
      description: "Comprehensive Ayurvedic care to manage Parkinson's symptoms and improve quality of life through herbal medicines and therapies.",
      benefits: ["Reduces tremors", "Improves mobility", "Better muscle control", "Enhanced quality of life"],
      image: "/Treatments-images/Parkinson's Treatment.jpg",
    },
    {
      name: "Sciatica Treatment",
      slug: "sciatica-treatment-in-india",
      category: "Pain Management",
      description: "Effective nerve pain relief through specialized herbal oils, therapeutic massages, and internal medicines targeting sciatic nerve inflammation.",
      benefits: ["Pain relief", "Improved mobility", "Reduced inflammation", "Prevents recurrence"],
      image: "/Treatments-images/Sciatica Treatment.jpg",
    },
    {
      name: "Stroke Treatment",
      slug: "stroke-treatment-in-india",
      category: "Neurological Disorders",
      description: "Post-stroke rehabilitation combining Ayurvedic therapies, physiotherapy, and herbal medications for optimal recovery and prevention.",
      benefits: ["Faster recovery", "Improves motor functions", "Speech improvement", "Prevents recurrence"],
      image: "/Treatments-images/Stroke Treatment.jpg",
    },
    {
      name: "Varicose Ulcer",
      slug: "varicose-ulcer-treatment-in-india",
      category: "Pain Management",
      description: "Natural healing for varicose ulcers using specialized herbal dressings, internal medicines, and vascular strengthening therapies.",
      benefits: ["Wound healing", "Reduces swelling", "Improves circulation", "Prevents complications"],
      image: "/Treatments-images/Varicose Veins Treatment.jpg",
    },
    {
      name: "Knee Pain",
      slug: "knee-pain-treatment-in-india",
      category: "Pain Management",
      description: "Effective joint care through medicated oil treatments, herbal formulations, and strengthening exercises for lasting knee health.",
      benefits: ["Pain relief", "Improved flexibility", "Cartilage protection", "Enhanced mobility"],
      image: "/Treatments-images/knee pain treatment.jpg",
    },
    {
      name: "Post Natal Care",
      slug: "post-natal-treatment-in-india",
      category: "Women's Health",
      description: "Complete postnatal recovery program with specialized massages, nutritional support, and rejuvenation therapies for new mothers.",
      benefits: ["Faster recovery", "Lactation support", "Hormone balance", "Stress relief"],
      image: "/Treatments-images/Post Natal Treatment.jpg",
    },
    {
      name: "Cervical Spondylosis",
      slug: "cervical-spondylosis-treatment-in-india",
      category: "Pain Management",
      description: "Comprehensive neck and spine care using therapeutic oils, herbal medicines, and specialized treatments for cervical health.",
      benefits: ["Neck pain relief", "Improved flexibility", "Reduces stiffness", "Prevents degeneration"],
      image: "/Treatments-images/Cervical Spondylosis Treatment.jpg",
    },
    {
      name: "Psoriasis",
      slug: "psoriasis-treatment-in-india",
      category: "Skin & Hair",
      description: "Natural skin healing through Panchakarma detoxification, herbal applications, and dietary modifications for lasting psoriasis relief.",
      benefits: ["Reduces patches", "Relieves itching", "Prevents flare-ups", "Improves skin texture"],
      image: "/Treatments-images/Psoriasis Treatment.jpg",
    },
    {
      name: "Lumbar Spondylosis",
      slug: "lumbar-spondylosis-treatment-in-india",
      category: "Pain Management",
      description: "Lower back strengthening program with medicated therapies, herbal oils, and lifestyle modifications for spinal health.",
      benefits: ["Back pain relief", "Improved posture", "Increased mobility", "Prevents progression"],
      image: "/Treatments-images/Lumbar Spondylosis Treatment.jpg",
    },
    {
      name: "Gastroesophageal Reflux Disease",
      slug: "gastroesophageal-reflux-disease-treatment-in-india",
      category: "Digestive Health",
      description: "Natural relief from acid reflux and GERD through Ayurvedic medicines, dietary changes, and digestive fire enhancement.",
      benefits: ["Reduces acidity", "Improves digestion", "Prevents reflux", "Heals esophagus"],
      image: "/Treatments-images/Gastroesophageal Reflux Disease Treatment.jpg",
    },
    {
      name: "Arthritis Treatment",
      slug: "arthritis-treatment-in-india",
      category: "Pain Management",
      description: "Joint inflammation management with specialized oil treatments, herbal formulations, and pain-relieving therapies.",
      benefits: ["Reduces inflammation", "Pain relief", "Improved joint function", "Better mobility"],
      image: "/Treatments-images/Arthritis treatment.jpg",
    },
    {
      name: "Dysmenorrhea Treatment",
      slug: "dysmenorrhea-treatment-in-india",
      category: "Women's Health",
      description: "Natural relief from painful menstruation through herbal medicines, abdominal therapies, and hormonal balance treatments.",
      benefits: ["Pain relief", "Regular cycles", "Hormonal balance", "Reduced cramping"],
      image: "/Treatments-images/Ayurvedic Treatment for Menstrual Pain.jpg",
    },
    {
      name: "Ulcerative Colitis Treatment",
      slug: "ulcerative-colitis-treatment-in-india",
      category: "Digestive Health",
      description: "Intestinal healing program with herbal medications, dietary protocols, and detoxification therapies for lasting digestive health.",
      benefits: ["Reduces inflammation", "Heals intestinal lining", "Prevents flare-ups", "Improves digestion"],
      image: "/Treatments-images/Ulcerative Colitis Treatment.jpg",
    },
    {
      name: "Disc Bulge Protrusion",
      slug: "disc-bulge-protrusion-treatment-in-india",
      category: "Pain Management",
      description: "Non-surgical spinal care with specialized therapies, herbal oils, and strengthening exercises for disc health and pain relief.",
      benefits: ["Pain reduction", "Improved mobility", "Prevents surgery", "Strengthens spine"],
      image: "/Treatments-images/Ayurvedic Treatment for Disc Bulge.jpg",
    },
    {
      name: "Back Pain",
      slug: "back-pain-treatment-in-india",
      category: "Pain Management",
      description: "Comprehensive back care program addressing all types of back pain through therapeutic massages, oils, and herbal medicines.",
      benefits: ["Quick pain relief", "Improved flexibility", "Muscle relaxation", "Long-term solution"],
      image: "/Treatments-images/Back pain Treatment.jpg",
    },
    {
      name: "Stress",
      slug: "stress-treatment-in-india",
      category: "Mental Health",
      description: "Holistic stress management combining Ayurvedic therapies, meditation, yoga, and herbal adaptogens for mental peace.",
      benefits: ["Reduces anxiety", "Improves sleep", "Mental clarity", "Emotional balance"],
      image: "/Treatments-images/Ayurvedic Treatment for Stress.jpg",
    },
    {
      name: "Alopecia",
      slug: "alopecia-therapy-in-india",
      category: "Skin & Hair",
      description: "Natural hair regrowth treatment using herbal oils, scalp therapies, and internal medicines that address root causes of hair loss.",
      benefits: ["Hair regrowth", "Strengthens roots", "Prevents hair fall", "Improves scalp health"],
      image: "/Treatments-images/Hair Loss.jpg",
    },
  ];

  const filteredTreatments = selectedCategory === "All"
    ? treatments
    : treatments.filter(t => t.category === selectedCategory);

  const totalPages = Math.ceil(filteredTreatments.length / CARDS_PER_PAGE) || 1;
  const paginatedTreatments = filteredTreatments.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurveda treatments in India</h1>
          <p className="text-lg text-white/90">
            Explore traditional healing therapies for mind, body, and spirit
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-3 md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all border-2 text-center flex items-center justify-center min-h-[44px] md:min-h-[auto] ${
                selectedCategory === category
                  ? "bg-[#335765] text-white border-[#335765] shadow-md"
                  : "bg-white text-[#335765] border-[#335765]/10 hover:border-[#335765]/30"
              } ${category === "All" && "col-span-2 md:col-span-1"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {paginatedTreatments.map((treatment, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col text-sm">
              {treatment.image && (
                <div className="w-full overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-[160px] object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="px-5 pt-5 pb-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-primary mb-2">{treatment.name}</h3>

                <p className="text-foreground mb-3 flex-grow text-sm">{treatment.description}</p>

                <div className="mb-3">
                  <h4 className="font-semibold text-foreground mb-1.5 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/ayurveda-treatments/${treatment.slug}`} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="sm" className="w-full font-semibold">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="rounded-xl border-[#335765] text-[#335765] hover:bg-[#335765] hover:text-white"
            >
              Previous
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, startPage + 3);
                if (endPage - startPage < 3) {
                  startPage = Math.max(1, endPage - 3);
                }
                const isMobileVisible = pageNum >= startPage && pageNum <= endPage;

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 md:w-10 md:h-10 p-0 rounded-lg md:rounded-xl font-bold transition-all text-xs md:text-sm
                      ${!isMobileVisible ? "hidden md:inline-flex" : "inline-flex"} justify-center items-center
                      ${
                      currentPage === pageNum
                        ? "bg-[#335765] text-white hover:bg-[#25464c]"
                        : "border-[#335765] text-[#335765] hover:bg-[#335765] hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="rounded-xl border-[#335765] text-[#335765] hover:bg-[#335765] hover:text-white"
            >
              Next
            </Button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts will help you choose the perfect treatment based on your health goals and condition
          </p>
          <Button 
            onClick={() => setQuoteModalOpen(true)}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
          >
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      
      {/* Floating Quote Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 font-semibold"
      >
        <Phone size={20} />
        <span className="hidden md:inline">Get Free Quote</span>
      </button>
    </div>
  );
};

export default Treatments;

