import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Droplet, Activity, ShieldPlus, Smile, Compass, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";

// Structured program inventory mapped directly to existing application routes
const programCategories = {
  diseaseSpecific: {
    title: "Disease-Specific Treatment Plans",
    tabLabel: "Disease Specific",
    desc: "Targeted clinical therapeutic interventions targeting precise musculoskeletal, dermatological, and neurological pathoflows.",
    icon: Activity,
    programs: [
      {
        name: "Ayurveda Treatment for Osteoarthritis in India",
        description: "A specialized Ayurvedic protocol designed specifically to manage Osteoarthritis. Focuses on strengthening the joints, reducing inflammation, pain management through authentic therapies like Janu Basti, and restoring mobility through deep tissue nourishment and Vata correction.",
        image: "/Program Images/osteoarthritis.png",
        link: "/ayurvedic-programs/disease-specific/osteoarthritis",
        rating: 4.8,
        reviews: 420,
        tags: ["21-28 Days", "Joint Mobility", "Vata Balance", "Panchakarma"]
      },
      {
        name: "Ayurveda Treatment for Sciatica in India",
        description: "A clinically supervised Ayurvedic program for sciatica (Gridhrasi) combining Kati Basti, Basti therapy, herbal medicines, and therapeutic yoga to relieve nerve compression, reduce shooting pain, and restore mobility — helping many patients avoid spinal surgery.",
        image: "/Ayurvedic Programs/Images/Ayurveda-Treatment-Sciatica-India/1.webp",
        link: "/ayurvedic-programs/disease-specific/sciatica",
        rating: 4.7,
        reviews: 380,
        tags: ["21-28 Days", "Nerve Relief", "Spine Health", "Kati Basti"]
      },
      {
        name: "Ayurveda Treatment for Rheumatoid Arthritis in India",
        description: "A comprehensive Ayurvedic protocol for Rheumatoid Arthritis (Amavata) focusing on deep detoxification to remove 'Ama' (toxins), reducing systemic inflammation, and restoring joint function through specialized therapies like Valuka Sweda, Basti, and clinical diet.",
        image: "/Program Images/rheumatoid-arthritis-clinical.png",
        link: "/ayurvedic-programs/disease-specific/rheumatoid-arthritis-treatment-in-india",
        rating: 4.6,
        reviews: 350,
        tags: ["21-28 Days", "RA Healing", "Detox (Ama)", "Immune Support"]
      },
      {
        name: "Ayurvedic Psoriasis Treatment Program in India",
        description: "A specialized skin-healing protocol targeting Psoriasis and chronic eczema. Focuses on blood purification (Raktamokshana), liver detox (Virechana), and specialized external therapies like Takradhara to achieve deep remission and skin clearance.",
        image: "/Treatments-images/Psoriasis Treatment.jpg",
        link: "/ayurvedic-programs/disease-specific/psoriasis-treatment-in-india",
        rating: 4.8,
        reviews: 290,
        tags: ["21-28 Days", "Skin Repair", "Raktamokshana", "Blood Detox"]
      },
      {
        name: "Ayurveda Treatment for Migraine in India",
        description: "A specialized Ayurvedic protocol for chronic headaches and Migraine. Focuses on balancing the nervous system, reducing vascular inflammation, and detoxifying the sensory organs through therapies like Shirodhara, Nasya, and specialized herbal cooling protocols.",
        image: "/program-images/ra-shirodhara.png",
        link: "/ayurvedic-programs/disease-specific/ayurvedic-treatment-for-migraine-in-india",
        rating: 4.7,
        reviews: 310,
        tags: ["14-21 Days", "Stress Relief", "Nasya Therapy", "Vata-Pitta"]
      },
      {
        name: "Ayurveda Treatment for Cervical Spondylosis in India",
        description: "A specialized Ayurvedic clinical program for Cervical Spondylosis focusing on Griva Basti, Pizhichil, and therapeutic neck strengthening protocols. Designed to relieve nerve compression, reduce stiffness, and restore natural cervical spine alignment without surgical intervention.",
        image: "/Program Images/cervical-spondylosis.png",
        link: "/ayurvedic-programs/disease-specific/cervical-spondylosis-treatment-in-india",
        rating: 4.8,
        reviews: 340,
        tags: ["14-21 Days", "Neck Health", "Griva Basti", "Spine Care"]
      },
    ],
    landingPath: "/ayurvedic-programs/disease-specific",
  },
  detox: {
    title: "Panchakarma & Deep Detox",
    tabLabel: "Panchakarma",
    desc: "Intensive multi-week bio-purification protocols systematically eliminating deep cellular dosha imbalances.",
    icon: Droplet,
    programs: [
      {
        name: "21-Day Panchakarma Detox Program in India",
        description: "A comprehensive 21-day immersive Panchakarma plan designed for wellness tourists seeking a true reset. Experience authentic therapies aimed at deep internal cleansing, stress removal, and overall physical and mental rejuvenation.",
        image: "/Program Images/21-day-detox.png",
        link: "/ayurvedic-programs/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india",
        rating: 4.6,
        reviews: 480,
        tags: ["21 Days", "Full Body Detox", "Vamana/Virechana", "Stress Reset"]
      },
      {
        name: "28-Day Panchakarma Healing Program in India",
        description: "An intensive healing program focused on deep therapeutic cleansing and recovery from chronic ailments. Carefully monitored by expert Vaidyas, this program uses classic Ayurvedic protocols to address root causes of diseases.",
        image: "/Program Images/28-day-healing.png",
        link: "/ayurvedic-programs/panchakarma-healing-programs/28-day-panchakarma-healing-program-in-india",
        rating: 4.7,
        reviews: 320,
        tags: ["28 Days", "Chronic Recovery", "Deep Cleansing", "Clinical Care"]
      },
    ],
    landingPath: "/ayurvedic-programs/panchakarma-detox",
  },
  lifestyle: {
    title: "Lifestyle & Wellness Programs",
    tabLabel: "Lifestyle & Wellness",
    desc: "Curated Ayurvedic programs for preventive health, healthy aging, metabolism support, emotional balance, and long-term vitality.",
    icon: ShieldPlus,
    programs: [
      {
        name: "Anti-Aging Ayurveda Program",
        description: "A physician-guided 21-day anti-aging Ayurveda program focused on deep detox, cellular rejuvenation, skin vitality, metabolic balance, stress recovery, and graceful long-term wellness.",
        image: "/Ayurvedic Programs/Images/Anti-Aging-Ayurveda-Program-India/1.jpg",
        link: "/ayurvedic-programs/lifestyle-and-wellness/anti-aging-ayurveda-program-in-india",
        rating: 4.9,
        reviews: 240,
        tags: ["21 Days", "Anti-Aging", "Cellular Health", "Rasayana"]
      },
      {
        name: "Ayurvedic Weight Loss Program in India",
        description: "A 21-day physician-supervised Ayurvedic weight loss program combining Panchakarma detox, Udvarthanam, Lekhana Basti, herbal medicines, and dosha-specific meals for sustainable metabolism reset.",
        image: "/Ayurvedic Programs/Images/Ayurvedic-Weight-Loss-Program-India/1.webp",
        link: "/ayurvedic-programs/lifestyle-and-wellness/ayurvedic-weight-loss-program-in-india",
        rating: 4.8,
        reviews: 310,
        tags: ["21 Days", "Weight Loss", "Metabolism", "Udvarthanam"]
      },
      {
        name: "Stress Management Ayurveda Retreat",
        description: "A specialized 14-21 day Ayurvedic retreat designed for deep mental relaxation, emotional healing, and stress recovery. Combines Shirodhara, yoga, meditation, and personalized nutrition for international travelers.",
        image: "/program-images/stress-management.png",
        link: "/ayurvedic-programs/lifestyle-and-wellness/stress-management-ayurveda-retreat-in-india",
        rating: 4.8,
        reviews: 180,
        tags: ["14-21 Days", "Stress Relief", "Mental Health", "Shirodhara"]
      },
      {
        name: "Burnout Recovery Program in India",
        description: "A comprehensive 14-21 day recovery protocol designed for high-performing professionals facing chronic exhaustion. Integrates Ayurvedic therapies, stress diagnostics, executive health coaching, and restorative routines to rebuild vitality and mental resilience.",
        image: "/program-images/burnout-recovery.png",
        link: "/ayurvedic-programs/lifestyle-and-wellness/burnout-recovery-program-in-india",
        rating: 4.7,
        reviews: 160,
        tags: ["14-21 Days", "Burnout Recovery", "Executive Health", "Deep Reset"]
      },
      {
        name: "Immunity Boosting Detox Program in India",
        description: "A specialized 14-day Ayurvedic detox program designed to strengthen the immune system, enhance vitality, and restore natural balance. Ideal for health-conscious travelers seeking preventive wellness in India.",
        image: "/program-images/immunity-detox.png",
        link: "/ayurvedic-programs/lifestyle-and-wellness/immunity-boosting-detox-program-in-india",
        rating: 4.8,
        reviews: 155,
        tags: ["14 Days", "Immunity Boost", "Detox", "Preventive Health"]
      },
    ],
    landingPath: "/ayurvedic-programs/lifestyle-and-wellness",
  },
  beauty: {
    title: "Beauty & Rejuvenation Programs",
    tabLabel: "Beauty & Rejuvenation",
    desc: "Experience the ancient secrets of Ayurvedic beauty combining clinical detoxification with specialized therapies to restore natural radiance.",
    icon: Smile,
    programs: [
      {
        name: "Ayurvedic Skin Rejuvenation Therapy in India",
        description: "A holistic clinical program focusing on deep tissue purification and facial rejuvenation through traditional Ayurvedic therapies like Mukha Lepam, Navara Mukhabhyanga, and specialized herbal steam. Designed to restore natural skin glow, improve elasticity, and address chronic skin conditions at the root.",
        image: "/program-images/skin-rejuvenation.png",
        link: "/ayurvedic-programs/beauty-and-rejuvenation/skin-rejuvenation-treatment-in-india",
        rating: 4.9,
        reviews: 245,
        tags: ["7-14 Days", "Skin Glow", "Mukha Lepam", "Detox"]
      },
      {
        name: "Hair Loss Treatment Program in India",
        description: "A specialized Ayurvedic protocol targeting the underlying causes of hair thinning and loss (Khalitya). Combines Shirodhara, Nasya, and scalp-nourishing therapies like Shirolepa and Takradhara with personalized herbal supplements to stimulate follicle growth and restore scalp health.",
        image: "/program-images/hair-loss.png",
        link: "/ayurvedic-programs/beauty-and-rejuvenation/hair-loss-in-india",
        rating: 4.7,
        reviews: 312,
        tags: ["14-21 Days", "Hair Growth", "Shirodhara", "Scalp Health"]
      },
      {
        name: "Ayurvedic Beauty & Detox Retreat in India",
        description: "A comprehensive beauty and rejuvenation program that merges internal detoxification with external pampering. Includes whole-body Udvarthanam (herbal scrub), Pizhichil (oil bath), and specialized beauty rituals to cleanse the blood, tone the body, and refresh the spirit for a radiant transformation.",
        image: "/program-images/beauty-detox.png",
        link: "/ayurvedic-programs/beauty-and-rejuvenation/ayurvedic-beauty-detox-retreat-in-india",
        rating: 4.9,
        reviews: 188,
        tags: ["10-14 Days", "Full Body Detox", "Radiant Glow", "Anti-Aging"]
      },
    ],
    landingPath: "/ayurvedic-programs/beauty-and-rejuvenation",
  },
  integratedRetreat: {
    title: "Integrated Retreat Programs",
    tabLabel: "Integrated Retreat",
    desc: "Experience the absolute synergy of passive classical healing via Ayurveda combined with active somatic disciplines like Yoga and mindfulness.",
    icon: Compass,
    programs: [
      {
        name: "Ayurveda + Yoga Retreat Program",
        description: "A transformative 14-21 day retreat that seamlessly integrates classical Ayurvedic therapies with daily yogic practices. Designed for those seeking deep mental clarity, physical flexibility, and a complete spiritual reset through personalized Shodhana protocols and advanced Hatha Yoga.",
        image: "/Program Images/ayurveda-yoga-retreat.png",
        link: "/ayurvedic-programs/integrated-retreat/ayurveda-yoga-retreat",
        rating: 4.9,
        reviews: 195,
        tags: ["14–21 Days", "Ayurveda + Yoga", "Spiritual Reset", "Holistic Healing"]
      },
      {
        name: "Ayurveda Digital Detox Retreat",
        description: "Specifically designed for corporate leaders and professionals, this 14-21 day program enforces a structured digital sabbatical. Focused on dampening the sympathetic nervous system through cooling Ayurvedic treatments like Shirodhara, Takradhara, and guided forest bathing (Shinrin-yoku) in a serene nature-rich setting.",
        image: "/Program Images/digital-detox-retreat.png",
        link: "/ayurvedic-programs/integrated-retreat/ayurveda-digital-detox",
        rating: 4.8,
        reviews: 142,
        tags: ["14–21 Days", "Digital Detox", "Mindfulness", "Nervous System Recovery"]
      },
    ],
    landingPath: "/ayurvedic-programs/integrated-retreat",
  },
};

export default function HomeProgramsSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof programCategories>("diseaseSpecific");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleCategoryChange = (key: keyof typeof programCategories) => {
    setSelectedCategory(key);
  };

  const currentCategoryData = programCategories[selectedCategory];
  const programs = currentCategoryData.programs;

  return (
    <section className="pt-4 pb-4 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-3 border border-primary/10">
            <Sparkles className="h-3.5 w-3.5 text-[#7F543D]" />
            <span>Curated Medical & Wellness Packages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Explore All-Inclusive Program Frameworks
          </h2>
          <p className="text-sm sm:text-base text-[#7F543D] mt-3 leading-relaxed">
            Select a specialized track below to review fully structured inpatient clinical regimens complete with personalized continuous monitoring.
          </p>
        </div>

        {/* Dynamic Category Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 max-w-6xl mx-auto mb-10">
          {(Object.keys(programCategories) as Array<keyof typeof programCategories>).map((key) => {
            const cat = programCategories[key];
            const Icon = cat.icon;
            const isSelected = selectedCategory === key;

            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`flex items-center justify-center gap-2 px-3 sm:px-5 py-3.5 rounded-xl font-bold text-[11px] sm:text-sm transition-all border last:col-span-2 lg:last:col-span-1 h-full ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-md scale-[1.02]"
                    : "bg-white text-primary/80 border-primary/10 hover:bg-white/80 hover:text-primary hover:border-primary/20"
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-[#F0E68C]" : "text-primary/60"}`} />
                <span className="leading-tight">{cat.tabLabel || cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Full Grid Framework */}
        <div className="max-w-6xl mx-auto w-full">
          {/* Program Cards Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
            {programs.map((prog, idx) => (
              <div
                key={`${prog.name}-${idx}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left"
              >
                {/* Image Section */}
                <Link 
                  to={prog.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] overflow-hidden block shrink-0"
                >
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </Link>

                {/* Content Section */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow text-left">
                  <Link to={prog.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-base sm:text-lg font-bold text-[#2C4E5A] mb-2 leading-tight min-h-[2.5rem] flex items-start hover:text-[#FF7A28] transition-colors">
                      {prog.name}
                    </h3>
                  </Link>

                  {/* Rating Row Only */}
                  <div className="flex items-center justify-between mb-3 shrink-0">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                      <span className="text-xs font-black text-[#2C4E5A]">({prog.rating} rating)</span>
                    </div>
                  </div>

                  {/* Tags Row */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5 shrink-0">
                    {prog.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#E5E7E2]/60 text-[#2C4E5A] text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground/80 mb-5 line-clamp-3 flex-grow font-light">
                    {prog.description}
                  </p>

                  {/* Buttons Container */}
                  <div className="mt-auto pt-3 border-t border-border/50 shrink-0">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={prog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#E0E5DF] hover:bg-[#FF7A28] hover:text-white active:bg-[#FF7A28] active:text-white text-[#2C4E5A] font-bold py-3 sm:py-3.5 rounded-xl transition-all duration-300 text-xs flex items-center justify-center text-center"
                      >
                        View Details
                      </Link>
                      <Button
                        onClick={() => setQuoteModalOpen(true)}
                        className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 hover:scale-[1.02] text-xs h-auto border-none"
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

      </div>

      {/* Quote Request Modal integrated directly within the framework */}
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </section>
  );
}
