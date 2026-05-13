import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Stethoscope, MapPin, ChevronRight, Search, X } from "lucide-react";

// ── DATA ──────────────────────────────────────────────────────────────────────

// 12 conditions → perfect 4 col × 3 row grid
const conditionsList = [
  { name: "Burnout & Chronic Stress",       path: "/ayurvedic-programs/lifestyle-and-wellness/burnout-recovery-program-in-india",           tag: "Highly Requested", desc: "Reset exhausted adrenal function and restore deep, restorative sleep cycles.",                     keywords: "stress fatigue exhaustion adrenal burnout" },
  { name: "Rheumatoid Arthritis Care",      path: "/ayurvedic-programs/disease-specific/rheumatoid-arthritis-treatment-in-india",           tag: "Specialized",      desc: "Reduce chronic joint inflammation and restore pain-free mobility naturally.",                       keywords: "arthritis joint inflammation rheumatoid auto-immune" },
  { name: "Sciatica & Back Pain",           path: "/ayurvedic-programs/disease-specific/sciatica",                                          tag: "Clinical Protocol", desc: "Relieve compressed sciatic nerve pain and lumbar disc pressure with targeted therapies.",           keywords: "sciatica back pain lumbar nerve spine" },
  { name: "Psoriasis & Skin Detox",         path: "/ayurvedic-programs/disease-specific/psoriasis-treatment-in-india",                      tag: "Specialized",      desc: "Calm chronic epidermal flare-ups through deep blood purification and cooling Takradhara.",          keywords: "psoriasis skin scaling dermatology eczema" },
  { name: "Migraine & Neuro Relief",        path: "/ayurvedic-programs/disease-specific/ayurvedic-treatment-for-migraine-in-india",         tag: "Targeted",         desc: "Soothe hyper-excited cranial pathways using therapeutic Shirodhara and Nasya protocols.",           keywords: "migraine headache neuro vascular cranial" },
  { name: "Cervical Spondylosis Care",      path: "/ayurvedic-programs/disease-specific/cervical-spondylosis-treatment-in-india",           tag: "Clinical Protocol", desc: "Relieve neck stiffness, nerve tingling, and disc degeneration with localized Greeva Basti.",        keywords: "cervical neck spondylosis spine disc" },
  { name: "Immunity Boosting Detox",        path: "/ayurvedic-programs/lifestyle-and-wellness/immunity-boosting-detox-program-in-india",    tag: "Popular",          desc: "Strengthen adaptive immune defense with intestinal cleansing and Ojas-building internal tonics.",   keywords: "immunity detox immune boost gut infection" },
  { name: "Sustainable Weight Loss",        path: "/ayurvedic-programs/lifestyle-and-wellness/ayurvedic-weight-loss-program-in-india",      tag: "Popular",          desc: "Mobilize visceral fat without crash by rebalancing digestive fire through Udwarthanam therapy.",    keywords: "weight loss obesity fat metabolism slimming" },
  { name: "Anti-Aging Rejuvenation",        path: "/ayurvedic-programs/lifestyle-and-wellness/anti-aging-ayurveda-program-in-india",        tag: "Luxury Care",      desc: "Arrest oxidative cellular decline and replenish structural tissue vitality using Rasayana.",        keywords: "aging rasayana rejuvenation skin longevity" },
  { name: "Osteoarthritis & Joint Care",    path: "/ayurvedic-programs/disease-specific/osteoarthritis",                                    tag: "Clinical Protocol", desc: "Lubricate degraded cartilage and restore joint shock-absorption with Pizhichil oil streaming.",     keywords: "osteoarthritis knee joint cartilage degenerative" },
  { name: "Stress Management Retreat",      path: "/ayurvedic-programs/lifestyle-and-wellness/stress-management-ayurveda-retreat-in-india", tag: "Mental Calm",      desc: "Uncouple chronic somatic tension and rebuild emotional resilience through nature immersion.",        keywords: "stress anxiety mental calm nervous insomnia sleep" },
  { name: "Skin Rejuvenation Therapy",      path: "/ayurvedic-programs/beauty-and-rejuvenation/skin-rejuvenation-treatment-in-india",       tag: "Beauty Focus",     desc: "Target pigmentation, wrinkles, and dull tone via systemic purification and herbal nourishing packs.", keywords: "skin glow pigmentation wrinkle beauty face" },
];

const therapiesList = [
  { name: "Authentic Panchakarma",            path: "/services/panchakarma",                                                  desc: "Full-body bio-purification and cellular elimination protocols.",              keywords: "panchakarma detox purification five karma cleanse" },
  { name: "Traditional Ayurveda",             path: "/services/ayurveda",                                                     desc: "Root cause diagnosis driven by personalized body dosha alignment.",         keywords: "ayurveda dosha vata pitta kapha herbs traditional" },
  { name: "Yoga & Meditation Interventions",  path: "/services/yoga-meditation",                                              desc: "Therapeutic breathing and mindfulness integration for stress.",             keywords: "yoga meditation pranayama mindfulness breathing stress" },
  { name: "Touch & Bodywork Therapies",       path: "/services/touch-and-bodywork-therapies-in-india",                        desc: "Abhyanga, Shirodhara, and specialized external herbal massage protocols.",  keywords: "abhyanga shirodhara massage bodywork touch oil therapy" },
  { name: "Biological & Plant Therapies",     path: "/services/biological-and-natural-plant-based-therapies-in-india",        desc: "Fresh organic internal formulations and pharmacy preparations.",           keywords: "herbs plants botanical formulation organic pharmacy natural" },
  { name: "Mind-Body & Energy Interventions", path: "/services/mind-body-interventions-therapies-in-india",                   desc: "Deep relaxation and emotional release frameworks.",                        keywords: "mind body energy chakra relaxation emotional pranic" },
];

const regionsList = [
  { name: "Kerala Ayurvedic Sanctuaries",    path: "/kerala-ayurvedic-centers-and-hospitals",                                                       desc: "Birthplace of Ayurveda with tranquil backwaters and lush healing climate.",               keywords: "kerala backwaters beach south classical traditional" },
  { name: "Himalayas & Rishikesh Retreats",  path: "/himalayas-rishikesh-uttarakhand-north-east-ayurvedic-centers-and-hospitals",                    desc: "High-altitude pure spiritual mountain air and premium wellness havens.",                  keywords: "himalayas rishikesh mountain uttarakhand spiritual altitude yoga" },
  { name: "Goa Seaside Wellness Resorts",    path: "/goa-ayurvedic-centers-and-hospitals",                                                           desc: "Beachside luxurious recovery combining traditional treatments and ocean breeze.",         keywords: "goa beach seaside ocean resort luxury coastal" },
  { name: "Bangalore & South India Hubs",    path: "/centers/bangalore-hyderabad-chennai-south-india-ayurvedic-centers-and-hospitals",               desc: "State-of-the-art accredited clinical institutions and organic farm retreats.",           keywords: "bangalore hyderabad chennai south clinical hospital farm organic" },
  { name: "Mumbai, Pune & West India",       path: "/mumbai-pune-nashik-west-india-ayurvedic-centers-and-hospitals",                                 desc: "Easily accessible premium holistic hospitals and eco-villages.",                         keywords: "mumbai pune nashik west india accessible city eco village" },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

/** Score relevance of an item against the query (higher = more relevant) */
function scoreItem(item: { name: string; tag?: string; desc?: string; keywords?: string }, query: string): number {
  if (!query.trim()) return 1; // no query → all equally relevant
  const q = query.toLowerCase();
  const name = item.name.toLowerCase();
  const tag = (item.tag || "").toLowerCase();
  const desc = (item.desc || "").toLowerCase();
  const kw = (item.keywords || "").toLowerCase();

  if (name === q) return 100;
  if (name.startsWith(q)) return 80;
  if (name.includes(q)) return 60;
  if (tag.includes(q)) return 40;
  if (desc.includes(q)) return 30;
  if (kw.includes(q)) return 20;

  // Partial word match across keywords
  const words = q.split(/\s+/);
  const allText = `${name} ${tag} ${desc} ${kw}`;
  const matchCount = words.filter((w) => w.length > 1 && allText.includes(w)).length;
  if (matchCount > 0) return matchCount * 10;

  return 0; // no match → still shown, score = 0 (sorted to end)
}

/** Smart sort: keeps ALL items, moves best matches to top */
function smartSort<T extends { name: string; tag?: string; desc?: string; keywords?: string }>(
  list: T[],
  query: string
): T[] {
  if (!query.trim()) return list;
  return [...list].sort((a, b) => scoreItem(b, query) - scoreItem(a, query));
}

// ── SEARCH BAR sub-component ──────────────────────────────────────────────────

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  hint: string;
}

function TabSearchBar({ value, onChange, placeholder, hint }: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
      {/* Search Input */}
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-primary/20 bg-primary/5
                     text-sm text-primary placeholder:text-primary/40 font-medium
                     focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40
                     transition-all"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-primary/15
                       flex items-center justify-center hover:bg-primary/25 transition-colors"
          >
            <X className="h-3 w-3 text-primary" />
          </button>
        )}
      </div>

      {/* Right-side hint text */}
      <p className="text-xs text-[#7F543D]/80 sm:max-w-[220px] leading-relaxed flex-shrink-0">
        {hint}
      </p>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function MedicalFinder() {
  const [activeTab, setActiveTab] = useState<"conditions" | "therapies" | "regions">("conditions");
  const [condSearch, setCondSearch] = useState("");
  const [therapySearch, setTherapySearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");
  const navigate = useNavigate();

  // Smart-sorted lists (always full length, relevance order)
  const sortedConditions = useMemo(() => smartSort(conditionsList, condSearch), [condSearch]);
  const sortedTherapies  = useMemo(() => smartSort(therapiesList,  therapySearch), [therapySearch]);
  const sortedRegions    = useMemo(() => smartSort(regionsList,    regionSearch), [regionSearch]);

  // Whether any item has a meaningful match score
  const hasCondMatch   = condSearch.trim()   ? scoreItem(sortedConditions[0],  condSearch)   > 0 : true;
  const hasTherapyMatch= therapySearch.trim()? scoreItem(sortedTherapies[0],   therapySearch)> 0 : true;
  const hasRegionMatch = regionSearch.trim() ? scoreItem(sortedRegions[0],     regionSearch) > 0 : true;

  return (
    <section className="w-full px-4 pt-16 pb-0">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-primary/10 w-full overflow-hidden">

        {/* ── Header Row ── */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-5 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2.5">
            <Search className="h-5 w-5 text-[#F0E68C]" />
            <h3 className="font-bold text-base sm:text-xl tracking-wide">
              Your Treatment and Therapy Navigator
            </h3>
          </div>
        </div>

        {/* ── Tab Switcher ── */}
        <div className="grid grid-cols-3 border-b border-primary/10 bg-primary/5 p-1.5 sm:p-2 gap-1 sm:gap-2">
          {(["conditions", "therapies", "regions"] as const).map((tab) => {
            const isActive = activeTab === tab;
            const Icon     = tab === "conditions" ? Activity : tab === "therapies" ? Stethoscope : MapPin;
            const label    = tab === "conditions" ? "Search by Condition" : tab === "therapies" ? "Search by Therapy" : "Preferred Region";
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 sm:py-4 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200
                            flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 border-2 ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-md"
                    : "text-primary/70 bg-white border-primary/10 hover:text-primary hover:border-primary/30"
                }`}
              >
                <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${isActive ? "text-[#F0E68C]" : "text-primary/60"}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Tab Content ── */}
        <div className="p-6 sm:p-8">

          {/* ════ TAB 1 : CONDITIONS ════ */}
          {activeTab === "conditions" && (
            <div>
              <TabSearchBar
                value={condSearch}
                onChange={setCondSearch}
                placeholder="e.g. arthritis, stress, psoriasis, weight loss…"
                hint="Search across 12+ conditions. Showing closest matches first — all results always visible."
              />

              {/* Subtle "best match" indicator when query active */}
              {condSearch.trim() && (
                <p className="text-[11px] text-primary/60 mb-3 font-medium">
                  {hasCondMatch
                    ? `Showing best matches for "${condSearch}" — all 12 cards displayed`
                    : `No exact match for "${condSearch}" — showing all related conditions`}
                </p>
              )}

              {/* 4 col × 3 row grid — ALWAYS all 12 cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {sortedConditions.map((item, idx) => {
                  const score = scoreItem(item, condSearch);
                  const isHighlighted = condSearch.trim() && score > 0 && idx < 4;
                  return (
                    <button
                      key={item.name}
                      onClick={() => navigate(item.path)}
                      className={`group relative p-4 rounded-xl border transition-all duration-200 text-center
                                  shadow-sm hover:shadow-lg hover:-translate-y-0.5
                                  flex flex-col items-center gap-2.5
                                  ${isHighlighted
                                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                                    : "border-primary/15 bg-white hover:bg-primary hover:border-primary"
                                  }`}
                    >
                      {/* Best Match badge */}
                      {isHighlighted && (
                        <span className="absolute -top-2 -right-2 text-[9px] font-black bg-primary text-white px-1.5 py-0.5 rounded-full shadow">
                          Best Match
                        </span>
                      )}

                      {/* Tag */}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block transition-colors
                                        ${isHighlighted
                                          ? "bg-primary text-white"
                                          : "bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white"
                                        }`}>
                        {item.tag}
                      </span>

                      {/* Heading */}
                      <h4 className={`font-bold text-sm sm:text-base leading-snug transition-colors
                                      ${isHighlighted ? "text-primary" : "text-primary group-hover:text-white"}` }>
                        {item.name}
                      </h4>

                      {/* One-line description */}
                      <p className={`text-xs sm:text-sm leading-relaxed line-clamp-2 transition-colors flex-1
                                     ${isHighlighted ? "text-[#7F543D]" : "text-[#7F543D]/80 group-hover:text-white/80"}`}>
                        {item.desc}
                      </p>

                      {/* Visit Page Label */}
                      <div className="flex justify-center mt-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-lg border transition-all
                                          ${isHighlighted 
                                            ? "bg-primary/10 border-primary text-primary" 
                                            : "bg-primary/5 border-primary/10 text-primary group-hover:bg-white/20 group-hover:border-white/40 group-hover:text-white"}`}>
                          Visit Page
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-primary/80">
                <span>Don't see your specific medical condition listed?</span>
                <Button onClick={() => navigate("/treatments")} variant="link" className="p-0 h-auto font-bold text-primary hover:text-primary/80 underline">
                  View All 23+ Clinical Conditions Guide →
                </Button>
              </div>
            </div>
          )}

          {/* ════ TAB 2 : THERAPIES ════ */}
          {activeTab === "therapies" && (
            <div>
              <TabSearchBar
                value={therapySearch}
                onChange={setTherapySearch}
                placeholder="e.g. panchakarma, yoga, massage, herbs…"
                hint="Search 6 core therapy modalities. Closest match shown first — all always visible."
              />

              {therapySearch.trim() && (
                <p className="text-[11px] text-primary/60 mb-3 font-medium">
                  {hasTherapyMatch
                    ? `Showing best matches for "${therapySearch}"`
                    : `No exact match for "${therapySearch}" — showing all therapy frameworks`}
                </p>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedTherapies.map((item, idx) => {
                  const score = scoreItem(item, therapySearch);
                  const isHighlighted = therapySearch.trim() && score > 0 && idx === 0;
                  return (
                    <button
                      key={item.name}
                      onClick={() => navigate(item.path)}
                      className={`group relative p-5 rounded-xl border transition-all duration-200 text-center
                                  shadow-sm hover:shadow-lg hover:-translate-y-0.5
                                  flex flex-col items-center justify-between gap-3
                                  ${isHighlighted
                                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                                    : "border-primary/15 bg-white hover:bg-primary hover:border-primary"
                                  }`}
                    >
                      {isHighlighted && (
                        <span className="absolute -top-2 -right-2 text-[9px] font-black bg-primary text-white px-1.5 py-0.5 rounded-full shadow">
                          Best Match
                        </span>
                      )}
                      <div>
                        <h4 className={`font-bold text-base mb-2 transition-colors
                                        ${isHighlighted ? "text-primary" : "text-primary group-hover:text-white"}` }>
                          {item.name}
                        </h4>
                        <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed transition-colors
                                       ${isHighlighted ? "text-[#7F543D]" : "text-[#7F543D]/90 group-hover:text-white/80"}`}>
                          {item.desc}
                        </p>
                      </div>
                      {/* Visit Page Label */}
                      <div className="flex justify-center mt-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-lg border transition-all
                                          ${isHighlighted 
                                            ? "bg-primary/10 border-primary text-primary" 
                                            : "bg-primary/5 border-primary/10 text-primary group-hover:bg-white/20 group-hover:border-white/40 group-hover:text-white"}`}>
                          Visit Page
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-primary/80">
                <span>Looking for specific treatment applications?</span>
                <Button onClick={() => navigate("/services")} variant="link" className="p-0 h-auto font-bold text-primary hover:text-primary/80 underline">
                  View Complete Range of Ayurvedic Modalities →
                </Button>
              </div>
            </div>
          )}

          {/* ════ TAB 3 : REGIONS ════ */}
          {activeTab === "regions" && (
            <div>
              <TabSearchBar
                value={regionSearch}
                onChange={setRegionSearch}
                placeholder="e.g. kerala, himalayas, goa, beach, mountain…"
                hint="Search by region name, city, or environment type. All regions always shown."
              />

              {regionSearch.trim() && (
                <p className="text-[11px] text-primary/60 mb-3 font-medium">
                  {hasRegionMatch
                    ? `Showing best matches for "${regionSearch}"`
                    : `No exact match for "${regionSearch}" — showing all available regions`}
                </p>
              )}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedRegions.map((item, idx) => {
                  const score = scoreItem(item, regionSearch);
                  const isHighlighted = regionSearch.trim() && score > 0 && idx === 0;
                  return (
                    <button
                      key={item.name}
                      onClick={() => navigate(item.path)}
                      className={`group relative p-5 rounded-xl border transition-all duration-200 text-center
                                  shadow-sm hover:shadow-lg hover:-translate-y-0.5
                                  flex flex-col items-center justify-between gap-3
                                  ${isHighlighted
                                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                                    : "border-primary/15 bg-white hover:bg-primary hover:border-primary"
                                  }`}
                    >
                      {isHighlighted && (
                        <span className="absolute -top-2 -right-2 text-[9px] font-black bg-primary text-white px-1.5 py-0.5 rounded-full shadow">
                          Best Match
                        </span>
                      )}
                      <div className="flex flex-col items-center w-full">
                        <MapPin className={`h-5 w-5 mb-2 transition-colors
                                            ${isHighlighted ? "text-[#7F543D]" : "text-[#7F543D] group-hover:text-white/70"}`} />
                        <h4 className={`font-bold text-base sm:text-lg mb-2 text-center transition-colors
                                        ${isHighlighted ? "text-primary" : "text-primary group-hover:text-white"}` }>
                          {item.name}
                        </h4>
                        <p className={`text-sm line-clamp-2 leading-relaxed transition-colors
                                       ${isHighlighted ? "text-[#7F543D]" : "text-[#7F543D]/90 group-hover:text-white/80"}`}>
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Visit Page Label */}
                      <div className="flex justify-center mt-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-lg border transition-all
                                          ${isHighlighted 
                                            ? "bg-primary/10 border-primary text-primary" 
                                            : "bg-primary/5 border-primary/10 text-primary group-hover:bg-white/20 group-hover:border-white/40 group-hover:text-white"}`}>
                          Visit Page
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-primary/80">
                <span>Want to view all authenticated centers simultaneously?</span>
                <Button onClick={() => navigate("/centers")} variant="link" className="p-0 h-auto font-bold text-primary hover:text-primary/80 underline">
                  Browse All India Top Centers Directory →
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
