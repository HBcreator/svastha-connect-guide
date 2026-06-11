const fs = require('fs');

const pagePath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Remove the custom Nirmal object definition entirely if it exists.
content = content.replace(/const NirmalAyurvedPanchkarmClinic: DelhiCenter = \{[\s\S]*?\};\s*const AashaAyurvedaCenter: DelhiCenter = \{/, "const AashaAyurvedaCenter: DelhiCenter = {");

// 2. Remove the array entry for NirmalAyurvedPanchkarmClinic from baseCenters
content = content.replace(/NirmalAyurvedPanchkarmClinic,\s*AashaAyurvedaCenter,/, "AashaAyurvedaCenter,");

// 3. Update the parseCentersFromMarkdown to intercept Nirmal
const oldReturn = `      return {
        series,
        name,
        city,
        description,
        rating,
        reviews,
        image,
      };`;
const newReturn = `      let finalSlug = undefined;
      let finalReviews = reviews;
      
      if (name.includes("Nirmal Ayurved")) {
        finalSlug = "nirmal-ayurved-panchkarm-clinic-hospital-east-delhi-india";
        finalReviews = "588";
      }
      
      return {
        series,
        name,
        city,
        description,
        rating,
        reviews: finalReviews,
        image,
        ...(finalSlug ? { slug: finalSlug } : {})
      };`;

if (content.includes(oldReturn)) {
    content = content.replace(oldReturn, newReturn);
    console.log("Applied markdown parser fix successfully.");
} else {
    console.log("Could not find the exact return block. Maybe it's already modified?");
}

fs.writeFileSync(pagePath, content, 'utf8');
