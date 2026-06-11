const fs = require('fs');
let content = fs.readFileSync('src/pages/DelhiNorthIndiaRegionCenters.tsx', 'utf8');

if (!content.includes('"All India Institute of Ayurveda (AIIA)": "Sarita Vihar, New Delhi, India"')) {
  content = content.replace(
    '"Ayurveda Kendra (Dr. Sudha Asokan)": "Safdarjung Enclave, Delhi, India",',
    '"Ayurveda Kendra (Dr. Sudha Asokan)": "Safdarjung Enclave, Delhi, India",\n  "All India Institute of Ayurveda (AIIA)": "Sarita Vihar, New Delhi, India",'
  );
}

if (!content.includes('let finalRating = rating;')) {
  content = content.replace('let finalReviews = reviews;', 'let finalReviews = reviews;\n      let finalRating = rating;');
  content = content.replace('rating,\n        reviews: finalReviews,', 'rating: finalRating,\n        reviews: finalReviews,');
}

if (!content.includes('name.includes("All India Institute")')) {
  const replacement = `} else if (name.includes("All India Institute")) {
        finalSlug = "all-india-institute-of-ayurveda-aiia-hospital-sarita-vihar-new-delhi-india";
        finalReviews = "1,000+";
        finalRating = 4.1;
      }`;
  content = content.replace('} else if (name.includes("Ayurveda Kendra")) {', replacement + ' else if (name.includes("Ayurveda Kendra")) {');
}

fs.writeFileSync('src/pages/DelhiNorthIndiaRegionCenters.tsx', content);
