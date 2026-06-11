const fs = require('fs');

const pagePath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Remove the custom Nirmal object definition
content = content.replace(/const NirmalAyurvedPanchkarmClinic: DelhiCenter = \{[\s\S]*?\};\s*const AashaAyurvedaCenter: DelhiCenter = \{/, "const AashaAyurvedaCenter: DelhiCenter = {");

// 2. Remove the array entry
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
      
      if (name === "Nirmal Ayurved & Panchkarm Clinic") {
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

content = content.replace(oldReturn, newReturn);

fs.writeFileSync(pagePath, content, 'utf8');
console.log("Fixed duplicate card and updated markdown parsing logic!");
