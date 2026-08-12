import re

with open('src/pages/TopCenters.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# We know lines around 1313 have:
#       reviews: 250,

# Let's find "reviews: 250," and the next "return ("
idx_reviews = content.find("reviews: 250,")
idx_return = content.find("return (", idx_reviews)

if idx_reviews != -1 and idx_return != -1:
    # We will replace everything between "reviews: 250," and "return ("
    # to perfectly close the object, the array, and add the pagination hooks.
    
    new_text = """reviews: 250,
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

  """
    
    final_content = content[:idx_reviews] + new_text + content[idx_return:]
    
    with open('src/pages/TopCenters.tsx', 'w', encoding='utf-8') as f:
        f.write(final_content)
    print("Repaired successfully!")
else:
    print("Could not find markers.")
