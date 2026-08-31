import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, HeartPulse, Sparkles, Filter, CircleCheck } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mobile view shows only this many result cards, with a "View All Treatments" button below
const MOBILE_RESULTS_LIMIT = 6;

const treatmentConditions = [
  { name: "Alopecia & Hair Loss", path: "/ayurveda-treatments/alopecia-treatment-in-india", category: "Dermatological" },
  { name: "Arthritis Pain Management", path: "/ayurveda-treatments/arthritis-treatment-in-india", category: "Musculoskeletal" },
  { name: "Autism Spectrum Support", path: "/ayurveda-treatments/autism-treatment-in-india", category: "Neurological" },
  { name: "General Ayurveda Protocols", path: "/ayurveda-treatments/ayurveda-treatment-in-india", category: "Holistic" },
  { name: "Chronic Back Pain", path: "/ayurveda-treatments/back-pain-treatment-in-india", category: "Musculoskeletal" },
  { name: "Cervical Spondylosis", path: "/ayurveda-treatments/cervical-spondylosis-treatment-in-india", category: "Spine & Nerve" },
  { name: "Disc Bulge & Protrusion", path: "/ayurveda-treatments/disc-bulge-protrusion-treatment-in-india", category: "Spine & Nerve" },
  { name: "Dysmenorrhea & Women's Health", path: "/ayurveda-treatments/dysmenorrhea-treatment-in-india", category: "Gynaecological" },
  { name: "Gastroesophageal Reflux (GERD)", path: "/ayurveda-treatments/gastroesophageal-reflux-disease-treatment-in-india", category: "Gastrointestinal" },
  { name: "Severe Knee Pain & Degeneration", path: "/ayurveda-treatments/knee-pain-treatment-in-india", category: "Musculoskeletal" },
  { name: "Lumbar Spondylosis", path: "/ayurveda-treatments/lumbar-spondylosis-treatment-in-india", category: "Spine & Nerve" },
  { name: "Monsoon Rejuvenation (Karkidaka)", path: "/ayurveda-treatments/monsoon-treatment-in-india", category: "Seasonal" },
  { name: "Clinical Panchakarma Applications", path: "/ayurveda-treatments/panchakarma-treatment-in-india", category: "Holistic" },
  { name: "Parkinson's Disease Care", path: "/ayurveda-treatments/parkinsons-disease-treatment-in-india", category: "Neurological" },
  { name: "Post-Natal Restoration Care", path: "/ayurveda-treatments/post-natal-treatment-in-india", category: "Gynaecological" },
  { name: "Psoriasis Epidermal Scaling", path: "/ayurveda-treatments/psoriasis-treatment-in-india", category: "Dermatological" },
  { name: "Sciatica Nerve Radiation", path: "/ayurveda-treatments/sciatica-treatment-in-india", category: "Spine & Nerve" },
  { name: "Sinusitis & Respiratory Congestion", path: "/ayurveda-treatments/sinusitis-treatment-in-india", category: "Respiratory" },
  { name: "Somatic Stress & Nervous Tension", path: "/ayurveda-treatments/stress-treatment-in-india", category: "Psychological" },
  { name: "Post-Stroke Neuromuscular Rehab", path: "/ayurveda-treatments/stroke-treatment-in-india", category: "Neurological" },
  { name: "Ulcerative Colitis Care", path: "/ayurveda-treatments/ulcerative-colitis-treatment-in-india", category: "Gastrointestinal" },
  { name: "Varicose Ulcers & Vein Health", path: "/ayurveda-treatments/varicose-ulcer-treatment-in-india", category: "Cardiovascular" },
  { name: "Clinical Weight Loss Therapy", path: "/ayurveda-treatments/weight-loss-treatment-in-india", category: "Metabolic" },
  { name: "Asthma & Respiratory Care", path: "/ayurveda-treatments/asthma-treatment-in-india", category: "Respiratory" },
  { name: "Insomnia & Sleep Disorders", path: "/ayurveda-treatments/insomnia-treatment-in-india", category: "Psychological" },
  { name: "Anxiety & Depression", path: "/ayurveda-treatments/anxiety-and-depression-treatment-in-india", category: "Psychological" },
  { name: "Multiple Sclerosis Support", path: "/ayurveda-treatments/multiple-sclerosis-treatment-in-india", category: "Neurological" },
  { name: "PCOS & Hormonal Balance", path: "/ayurveda-treatments/pcos-treatment-in-india", category: "Gynaecological" },
  { name: "Fibromyalgia & Chronic Fatigue", path: "/ayurveda-treatments/fibromyalgia-chronic-fatigue-treatment-in-india", category: "Musculoskeletal" },
  { name: "Diabetes Management", path: "/ayurveda-treatments/diabetes-treatment-in-india", category: "Metabolic" },
  { name: "Autoimmune Disease Care", path: "/ayurveda-treatments/autoimmune-disease-treatment-in-india", category: "Holistic" },
  { name: "Heart Health & Hypertension", path: "/ayurveda-treatments/heart-health-hypertension-treatment-in-india", category: "Cardiovascular" },
  { name: "Sports Injury Recovery", path: "/ayurveda-treatments/sports-injury-recovery-treatment-in-india", category: "Musculoskeletal" },
  { name: "Peripheral Neuropathy Care", path: "/ayurveda-treatments/peripheral-neuropathy-treatment-in-india", category: "Neurological" },
  { name: "Vertigo & Balance Disorders", path: "/ayurveda-treatments/vertigo-treatment-in-india", category: "Neurological" },
  { name: "Trigeminal Neuralgia Relief", path: "/ayurveda-treatments/trigeminal-neuralgia-treatment-in-india", category: "Neurological" },
  { name: "Fatty Liver & Liver Detox", path: "/ayurveda-treatments/fatty-liver-treatment-in-india", category: "Metabolic" },
];

// Unique extracted categories
const categories = ["All", "Musculoskeletal", "Spine & Nerve", "Neurological", "Dermatological", "Gastrointestinal", "Gynaecological", "Holistic", "Respiratory", "Metabolic", "Psychological", "Cardiovascular", "Seasonal"];

export default function HomeTreatmentsGuide() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Track mobile viewport (below Tailwind's sm breakpoint, 640px) to trim result cards
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 640);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Filter evaluation
  const filteredConditions = treatmentConditions.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Mobile only shows the first 5 results — "View All Treatments" button covers the rest
  const visibleConditions = isMobile ? filteredConditions.slice(0, MOBILE_RESULTS_LIMIT) : filteredConditions;

  return (
    <section className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Block - Centered Layout */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
            Top Ayurveda treatments by My Vaidyam in India
          </h2>
          <p className="text-sm md:text-base text-[#7F543D] leading-relaxed mb-8">
            Explore custom inpatient therapeutic applications designed for refractory chronic issues. Filter live below to discover specialized protocols.
          </p>

          {/* Centered Search box */}
          <div className="relative w-full max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
            <Input
              type="text"
              placeholder="Search treatment or medical condition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-6 rounded-2xl border-primary/20 bg-white text-sm focus-visible:ring-[#FF7A28]/40 shadow-md"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-primary/40 hover:text-primary"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Filters */}
        <div className="mb-5 sm:mb-10 w-full overflow-hidden">
          {/* Centered Filter Label at top */}
          <div className="flex justify-center mb-3">
            <span className="text-[11px] sm:text-xs font-bold text-primary/60 flex items-center gap-1.5 uppercase tracking-wider">
              <Filter className="h-3.5 w-3.5" /> Filter Treatments:
            </span>
          </div>

          {/* Mobile: compact single dropdown — no horizontal scrolling needed */}
          <div className="sm:hidden px-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm font-bold text-primary bg-white border border-primary/15 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Desktop: Two-Row Horizontal Scroll Container */}
          <div className="hidden sm:grid grid-rows-2 grid-flow-col gap-2 overflow-x-auto pb-4 px-4 no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border whitespace-nowrap shrink-0 h-full flex items-center justify-center ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-primary/70 hover:bg-primary/5 border-primary/10 hover:border-primary/20 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Dynamic Interactive Grid mapping */}
        {filteredConditions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-primary/10 shadow-sm">
            <p className="text-sm font-bold text-primary">No exact treatment condition matching your live query.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="text-xs font-bold text-secondary-foreground underline mt-2 inline-block"
            >
              Reset all live search filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {visibleConditions.map((cond) => (
              <Link
                key={cond.name}
                to={cond.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-4 rounded-xl border border-primary/15 bg-white hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-between gap-1.5 sm:gap-3 group shadow-xs hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-[#7F543D] uppercase block tracking-wider mb-0.5 group-hover:text-white/70 transition-colors">
                    {cond.category}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-primary group-hover:text-white transition-colors truncate block">
                    {cond.name}
                  </h4>
                </div>

                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-primary/5 group-hover:bg-white/20 group-hover:text-white text-primary flex items-center justify-center transition-all flex-shrink-0 border border-primary/10 group-hover:border-white/30">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile-only: link straight to the full treatments directory */}
        <Link
          to="/ayurveda-treatments"
          className="sm:hidden mt-6 w-full bg-primary text-white font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 shadow-md"
        >
          View All Treatments <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Important Notice Section - Synced with Sciatica Page Style */}
        <div className="mt-12 rounded-xl border border-[#88a7ad] border-l-4 border-l-primary bg-[#E7F0F1] px-5 py-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0">
              <CircleCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-[#214348] font-bold text-sm">Important Notice</p>
              <p className="text-sm text-primary leading-relaxed mt-1">
                All treatments and dietary plans are strictly supervised by qualified Ayurvedic doctors. Specific therapies may vary based on your individual medical profile and response to the program.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

