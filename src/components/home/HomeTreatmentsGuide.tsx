import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, HeartPulse, Sparkles, Filter } from "lucide-react";
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
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-primary/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
              <HeartPulse className="h-4 w-4 text-[#7F543D]" />
              <span>Evidence-Based Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Targeted A-Z Clinical Treatments Guide
            </h2>
            <p className="text-xs sm:text-sm text-[#7F543D] mt-2 leading-relaxed">
              Explore custom inpatient therapeutic applications designed for refractory chronic issues. Filter live below to discover specialized protocols.
            </p>
          </div>

          {/* Search box for interactive UX */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40" />
            <Input
              type="text"
              placeholder="Filter condition or term..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2.5 rounded-xl border-primary/20 text-xs sm:text-sm focus-visible:ring-primary"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-primary/40 hover:text-primary"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8">
          <span className="text-xs font-bold text-primary/60 flex items-center gap-1 mr-2">
            <Filter className="h-3 w-3" /> Filter Track:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-xs"
                    : "bg-primary/5 text-primary hover:bg-primary/10 border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Grid mapping */}
        {filteredConditions.length === 0 ? (
          <div className="p-12 text-center bg-primary/5 rounded-2xl border border-primary/10">
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
                className="p-4 rounded-xl border border-primary/10 bg-white hover:bg-primary/5 hover:border-primary/30 transition-all flex items-center justify-between gap-3 group shadow-xs hover:shadow-md"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-[#7F543D] uppercase block tracking-wider mb-0.5">
                    {cond.category}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-primary group-hover:text-primary transition-colors truncate block">
                    {cond.name}
                  </h4>
                </div>

                <div className="h-7 w-7 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center transition-all flex-shrink-0 border border-primary/10">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom Crawlability Anchor Statement */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg border border-primary/10 text-primary flex-shrink-0">
              <Sparkles className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-primary">
                Uncompromising Traditional Preparation
              </h5>
              <p className="text-[11px] sm:text-xs text-[#7F543D]">
                All prescribed herbal oils and internal decoctions are customized fresh to match individual diagnostic parameters.
              </p>
            </div>
          </div>

          <Link
            to="/treatments"
            className="text-xs font-bold text-primary hover:underline whitespace-nowrap self-end sm:self-auto"
          >
            Review Clinical Inclusions List →
          </Link>
        </div>

      </div>
    </section>
  );
}
