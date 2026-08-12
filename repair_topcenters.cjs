const fs = require('fs');
const content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const anchorStr = 'slug: "dhanwanthralaya-ayurveda-speciality-hospital-chennai-india",\n    },';

const insertBlock = `
  ];

  const staticTreatments = [
    "Ayurveda Treatment", "Panchakarma Treatment", "Sinusitis Treatment", "Autism Treatment", 
    "Weight Loss Treatment", "Monsoon Treatment", "Parkinson's Disease Treatment", "Sciatica Treatment", 
    "Stroke Treatment", "Varicose Ulcer", "Knee Pain", "Post Natal Care", "Cervical Spondylosis", 
    "Psoriasis", "Lumbar Spondylosis", "Gastroesophageal Reflux Disease", "Arthritis Treatment", 
    "Dysmenorrhea Treatment", "Ulcerative Colitis Treatment", "Disc Bulge Protrusion", "Back Pain", 
    "Stress Management", "Alopecia", "Yoga & Meditation", "Detox & Rejuvenation"
  ];
  
  const cities = ["All", ...Array.from(new Set(centers.map(c => c.city).filter(Boolean))).sort()];
  const dynamicTreatments = centers.flatMap(c => c.specialties || []).filter(Boolean);
  const treatments = ["All", ...Array.from(new Set([...staticTreatments, ...dynamicTreatments])).sort()];

  const filteredCenters = useMemo(() => {
    return centers
      .filter((center) => {
        const cityMatch = selectedCity === "All" || center.city === selectedCity;
        return cityMatch;
      })
      .sort((a, b) => {
        if (selectedTreatment !== "All") {
          const aHas = (a.specialties || []).includes(selectedTreatment);
          const bHas = (b.specialties || []).includes(selectedTreatment);
          if (aHas && !bHas) return -1;
          if (!aHas && bHas) return 1;
        }
        if (sortBy === "rating") {
          return (b.rating || 0) - (a.rating || 0);
        } else if (sortBy === "distance") {
          return (a.city || "").localeCompare(b.city || "");
        }
        return 0;
      });
  }, [centers, selectedCity, selectedTreatment, sortBy]);

  const totalPages = Math.ceil(filteredCenters.length / 15) || 1;
  const paginatedCenters = filteredCenters.slice((currentPage - 1) * 15, currentPage * 15);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCountry, selectedCity, selectedTreatment, sortBy]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
`;

if (content.includes(anchorStr)) {
    const parts = content.split(anchorStr);
    const newContent = parts[0] + anchorStr + insertBlock + parts[1];
    fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
    console.log("File successfully repaired!");
} else {
    console.log("Could not find anchor string.");
}
