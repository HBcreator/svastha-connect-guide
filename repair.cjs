const fs = require('fs');

const content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const idx_reviews = content.indexOf('reviews: 250,');
const idx_header = content.indexOf('{/* Header */}', idx_reviews);

if (idx_reviews !== -1 && idx_header !== -1) {
    const new_text = `reviews: 250,
      priceRange: "$$",
      image: "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/21.jpg",
      slug: "dhanwanthralaya-ayurveda-speciality-hospital-chennai-india",
    },
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

  return (
    <div className="min-h-screen font-poppins bg-[#E5E7E2] flex flex-col overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">

      `;
    
    // content[...idx_reviews] already has the indentation. 
    // Wait, let's just replace from 'reviews: 250,' exactly up to '{/* Header */}'.
    const final_content = content.substring(0, idx_reviews) + new_text + content.substring(idx_header);
    fs.writeFileSync('src/pages/TopCenters.tsx', final_content, 'utf8');
    console.log("Repaired successfully with correct headers!");
} else {
    console.log("Could not find markers.");
}
