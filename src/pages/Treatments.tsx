import { useState } from "react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Treatments = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      slug: "ayurveda-treatment",
      category: "Detox & Wellness",
      description: "Experience the ancient science of holistic healing that balances mind, body, and spirit through natural therapies and personalized wellness programs.",
      benefits: ["Complete body rejuvenation", "Natural healing", "Dosha balance", "Improved immunity"],
      image: "/Treatments-images/Ayurveda Treatment.jpg",
    },
    {
      name: "Panchakarma Treatment",
      slug: "panchakarma-treatment",
      category: "Detox & Wellness",
      description: "Deep cleansing detoxification therapy that eliminates toxins through five powerful purification methods for complete body renewal.",
      benefits: ["Deep detoxification", "Enhanced vitality", "Improved digestion", "Mental clarity"],
      image: "/Treatments-images/Panchakarma Treatment.jpg",
    },
    {
      name: "Sinusitis Treatment",
      slug: "sinusitis-treatment",
      category: "Respiratory Care",
      description: "Natural relief from chronic sinus inflammation using herbal therapies and specialized nasal treatments for lasting results.",
      benefits: ["Clears nasal passages", "Reduces inflammation", "Prevents recurrence", "Improves breathing"],
      image: "/Treatments-images/Sinusitis Treatment.jpg",
    },
    {
      name: "Autism Treatment",
      slug: "autism-treatment",
      category: "Neurological Disorders",
      description: "Holistic approach combining Ayurvedic therapies, dietary modifications, and behavioral support for children with autism spectrum disorders.",
      benefits: ["Improved focus", "Better communication", "Reduced anxiety", "Enhanced social skills"],
      image: "/Treatments-images/Autism Treatment.jpg",
    },
    {
      name: "Weight Loss Treatment",
      slug: "weight-loss-treatment",
      category: "Detox & Wellness",
      description: "Sustainable weight management program with personalized diet plans, herbal supplements, and metabolic therapies.",
      benefits: ["Natural weight loss", "Improved metabolism", "Better energy levels", "Long-term results"],
      image: "/Treatments-images/Weight Loss.jpg",
    },
    {
      name: "Monsoon Treatment",
      slug: "monsoon-treatment",
      category: "Detox & Wellness",
      description: "Seasonal rejuvenation program designed to strengthen immunity and prevent monsoon-related ailments through specialized therapies.",
      benefits: ["Boosts immunity", "Prevents infections", "Balances doshas", "Seasonal wellness"],
      image: null,
    },
    {
      name: "Parkinson's Disease Treatment",
      slug: "parkinsons-disease-treatment",
      category: "Neurological Disorders",
      description: "Comprehensive Ayurvedic care to manage Parkinson's symptoms and improve quality of life through herbal medicines and therapies.",
      benefits: ["Reduces tremors", "Improves mobility", "Better muscle control", "Enhanced quality of life"],
      image: null,
    },
    {
      name: "Sciatica Treatment",
      slug: "sciatica-treatment",
      category: "Pain Management",
      description: "Effective nerve pain relief through specialized herbal oils, therapeutic massages, and internal medicines targeting sciatic nerve inflammation.",
      benefits: ["Pain relief", "Improved mobility", "Reduced inflammation", "Prevents recurrence"],
      image: null,
    },
    {
      name: "Stroke Treatment",
      slug: "stroke-treatment",
      category: "Neurological Disorders",
      description: "Post-stroke rehabilitation combining Ayurvedic therapies, physiotherapy, and herbal medications for optimal recovery and prevention.",
      benefits: ["Faster recovery", "Improves motor functions", "Speech improvement", "Prevents recurrence"],
      image: null,
    },
    {
      name: "Varicose Ulcer",
      slug: "varicose-ulcer",
      category: "Pain Management",
      description: "Natural healing for varicose ulcers using specialized herbal dressings, internal medicines, and vascular strengthening therapies.",
      benefits: ["Wound healing", "Reduces swelling", "Improves circulation", "Prevents complications"],
      image: null,
    },
    {
      name: "Knee Pain",
      slug: "knee-pain",
      category: "Pain Management",
      description: "Effective joint care through medicated oil treatments, herbal formulations, and strengthening exercises for lasting knee health.",
      benefits: ["Pain relief", "Improved flexibility", "Cartilage protection", "Enhanced mobility"],
      image: null,
    },
    {
      name: "Post Natal Care",
      slug: "post-natal-care",
      category: "Women's Health",
      description: "Complete postnatal recovery program with specialized massages, nutritional support, and rejuvenation therapies for new mothers.",
      benefits: ["Faster recovery", "Lactation support", "Hormone balance", "Stress relief"],
      image: null,
    },
    {
      name: "Cervical Spondylosis",
      slug: "cervical-spondylosis",
      category: "Pain Management",
      description: "Comprehensive neck and spine care using therapeutic oils, herbal medicines, and specialized treatments for cervical health.",
      benefits: ["Neck pain relief", "Improved flexibility", "Reduces stiffness", "Prevents degeneration"],
      image: null,
    },
    {
      name: "Psoriasis",
      slug: "psoriasis",
      category: "Skin & Hair",
      description: "Natural skin healing through Panchakarma detoxification, herbal applications, and dietary modifications for lasting psoriasis relief.",
      benefits: ["Reduces patches", "Relieves itching", "Prevents flare-ups", "Improves skin texture"],
      image: null,
    },
    {
      name: "Lumbar Spondylosis",
      slug: "lumbar-spondylosis",
      category: "Pain Management",
      description: "Lower back strengthening program with medicated therapies, herbal oils, and lifestyle modifications for spinal health.",
      benefits: ["Back pain relief", "Improved posture", "Increased mobility", "Prevents progression"],
      image: null,
    },
    {
      name: "Gastroesophageal Reflux Disease",
      slug: "gastroesophageal-reflux-disease",
      category: "Digestive Health",
      description: "Natural relief from acid reflux and GERD through Ayurvedic medicines, dietary changes, and digestive fire enhancement.",
      benefits: ["Reduces acidity", "Improves digestion", "Prevents reflux", "Heals esophagus"],
      image: null,
    },
    {
      name: "Arthritis Treatment",
      slug: "arthritis-treatment",
      category: "Pain Management",
      description: "Joint inflammation management with specialized oil treatments, herbal formulations, and pain-relieving therapies.",
      benefits: ["Reduces inflammation", "Pain relief", "Improved joint function", "Better mobility"],
      image: null,
    },
    {
      name: "Dysmenorrhea Treatment",
      slug: "dysmenorrhea-treatment",
      category: "Women's Health",
      description: "Natural relief from painful menstruation through herbal medicines, abdominal therapies, and hormonal balance treatments.",
      benefits: ["Pain relief", "Regular cycles", "Hormonal balance", "Reduced cramping"],
      image: null,
    },
    {
      name: "Ulcerative Colitis Treatment",
      slug: "ulcerative-colitis-treatment",
      category: "Digestive Health",
      description: "Intestinal healing program with herbal medications, dietary protocols, and detoxification therapies for lasting digestive health.",
      benefits: ["Reduces inflammation", "Heals intestinal lining", "Prevents flare-ups", "Improves digestion"],
      image: null,
    },
    {
      name: "Disc Bulge Protrusion",
      slug: "disc-bulge-protrusion",
      category: "Pain Management",
      description: "Non-surgical spinal care with specialized therapies, herbal oils, and strengthening exercises for disc health and pain relief.",
      benefits: ["Pain reduction", "Improved mobility", "Prevents surgery", "Strengthens spine"],
      image: null,
    },
    {
      name: "Back Pain",
      slug: "back-pain",
      category: "Pain Management",
      description: "Comprehensive back care program addressing all types of back pain through therapeutic massages, oils, and herbal medicines.",
      benefits: ["Quick pain relief", "Improved flexibility", "Muscle relaxation", "Long-term solution"],
      image: null,
    },
    {
      name: "Stress",
      slug: "stress",
      category: "Mental Health",
      description: "Holistic stress management combining Ayurvedic therapies, meditation, yoga, and herbal adaptogens for mental peace.",
      benefits: ["Reduces anxiety", "Improves sleep", "Mental clarity", "Emotional balance"],
      image: null,
    },
    {
      name: "Alopecia",
      slug: "alopecia",
      category: "Skin & Hair",
      description: "Natural hair regrowth treatment using herbal oils, scalp therapies, and internal medicines that address root causes of hair loss.",
      benefits: ["Hair regrowth", "Strengthens roots", "Prevents hair fall", "Improves scalp health"],
      image: null,
    },
  ];

  const filteredTreatments = selectedCategory === "All" 
    ? treatments 
    : treatments.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Treatments</h1>
          <p className="text-lg text-white/90">
            Explore traditional healing therapies for mind, body, and spirit
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredTreatments.map((treatment, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
              {treatment.image && (
                <div className="w-full overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-[200px] object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="px-6 pt-6 pb-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-3">{treatment.name}</h3>
                
                <p className="text-foreground mb-4 flex-grow">{treatment.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={() => window.location.href = `/treatments/${treatment.slug}`}
                  className="w-full font-semibold mt-auto"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
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
