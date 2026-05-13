import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, HeartPulse, Sparkles, Filter, CircleCheck } from "lucide-react";
import { Input } from "@/components/ui/input";

// Comprehensive catalog ensuring optimal internal link density for search engine bots
const treatmentConditions = [
  { name: "Alopecia & Hair Loss", path: "/treatments/alopecia", category: "Dermatological" },
  { name: "Arthritis Pain Management", path: "/treatments/arthritis-treatment", category: "Musculoskeletal" },
  { name: "Autism Spectrum Support", path: "/treatments/autism-treatment", category: "Neurological" },
  { name: "General Ayurveda Protocols", path: "/treatments/ayurveda-treatment", category: "Holistic" },
  { name: "Chronic Back Pain", path: "/treatments/back-pain", category: "Musculoskeletal" },
  { name: "Cervical Spondylosis", path: "/treatments/cervical-spondylosis", category: "Spine & Nerve" },
  { name: "Disc Bulge & Protrusion", path: "/treatments/disc-bulge-protrusion", category: "Spine & Nerve" },
  { name: "Dysmenorrhea & Women's Health", path: "/treatments/dysmenorrhea-treatment", category: "Gynaecological" },
  { name: "Gastroesophageal Reflux (GERD)", path: "/treatments/gastroesophageal-reflux-disease", category: "Gastrointestinal" },
  { name: "Severe Knee Pain & Degeneration", path: "/treatments/knee-pain", category: "Musculoskeletal" },
  { name: "Lumbar Spondylosis", path: "/treatments/lumbar-spondylosis", category: "Spine & Nerve" },
  { name: "Monsoon Rejuvenation (Karkidaka)", path: "/treatments/monsoon-treatment", category: "Seasonal" },
  { name: "Clinical Panchakarma Applications", path: "/treatments/panchakarma-treatment", category: "Holistic" },
  { name: "Parkinson's Disease Care", path: "/treatments/parkinsons-disease-treatment", category: "Neurological" },
  { name: "Post-Natal Restoration Care", path: "/treatments/post-natal-care", category: "Gynaecological" },
  { name: "Psoriasis Epidermal Scaling", path: "/treatments/psoriasis", category: "Dermatological" },
  { name: "Sciatica Nerve Radiation", path: "/treatments/sciatica-treatment", category: "Spine & Nerve" },
  { name: "Sinusitis & Respiratory Congestion", path: "/treatments/sinusitis-treatment", category: "Respiratory" },
  { name: "Somatic Stress & Nervous Tension", path: "/treatments/stress", category: "Psychological" },
  { name: "Post-Stroke Neuromuscular Rehab", path: "/treatments/stroke-treatment", category: "Neurological" },
  { name: "Ulcerative Colitis Care", path: "/treatments/ulcerative-colitis-treatment", category: "Gastrointestinal" },
  { name: "Varicose Ulcers & Vein Health", path: "/treatments/varicose-ulcer", category: "Cardiovascular" },
  { name: "Clinical Weight Loss Therapy", path: "/treatments/weight-loss-treatment", category: "Metabolic" },
];

// Unique extracted categories
const categories = ["All", "Musculoskeletal", "Spine & Nerve", "Neurological", "Dermatological", "Gastrointestinal", "Gynaecological", "Holistic", "Respiratory", "Metabolic", "Psychological", "Cardiovascular", "Seasonal"];

export default function HomeTreatmentsGuide() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter evaluation
  const filteredConditions = treatmentConditions.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="pt-4 pb-4 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Block - Centered Layout */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
            Top Ayurvedic Treatments by MyVaidyam in India
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

        {/* Dynamic Category Pill Filters */}
        <div className="mb-10 w-full overflow-hidden">
          {/* Centered Filter Label at top */}
          <div className="flex justify-center mb-3">
            <span className="text-[11px] sm:text-xs font-bold text-primary/60 flex items-center gap-1.5 uppercase tracking-wider">
              <Filter className="h-3.5 w-3.5" /> Filter Treatments:
            </span>
          </div>

          {/* Two-Row Horizontal Scroll Container */}
          <div className="grid grid-rows-2 grid-flow-col gap-2 overflow-x-auto pb-4 px-4 no-scrollbar scroll-smooth">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredConditions.map((cond) => (
              <Link
                key={cond.name}
                to={cond.path}
                className="p-4 rounded-xl border border-primary/15 bg-white hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-between gap-3 group shadow-xs hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-[#7F543D] uppercase block tracking-wider mb-0.5 group-hover:text-white/70 transition-colors">
                    {cond.category}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-primary group-hover:text-white transition-colors truncate block">
                    {cond.name}
                  </h4>
                </div>

                <div className="h-8 w-8 rounded-lg bg-primary/5 group-hover:bg-white/20 group-hover:text-white text-primary flex items-center justify-center transition-all flex-shrink-0 border border-primary/10 group-hover:border-white/30">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        )}

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
