const fs = require('fs');

const pagePath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const nirmalObj = `const NirmalAyurvedPanchkarmClinic: DelhiCenter = {
  series: -6,
  name: "Nirmal Ayurved & Panchkarm Clinic",
  city: "Shahdara, East Delhi, India",
  description:
    "A premier destination for traditional Ayurvedic healthcare led by Dr. Prashant Jain. Known for treating chronic ailments like neurological disorders, autoimmune conditions, infertility, liver cirrhosis, and skin diseases through classical Ayurveda and advanced Panchakarma detoxification. Operates state-of-the-art facilities across Shahdara, Paschim Vihar, and Noida, offering personalized teleconsultations globally.",
  rating: 4.8,
  reviews: "588",
  image: "/TOP cneters/delhi/Nirmal Ayurved & Panchkarm Clinic/image 1.webp",
  slug: "nirmal-ayurved-panchkarm-clinic-hospital-east-delhi-india",
};

`;

if (!content.includes("const NirmalAyurvedPanchkarmClinic")) {
  content = content.replace("const AashaAyurvedaCenter: DelhiCenter = {", nirmalObj + "const AashaAyurvedaCenter: DelhiCenter = {");
}

if (!content.includes("NirmalAyurvedPanchkarmClinic,")) {
  content = content.replace(
    "AashaAyurvedaCenter,",
    "NirmalAyurvedPanchkarmClinic,\n      AashaAyurvedaCenter,"
  );
}

fs.writeFileSync(pagePath, content, 'utf8');
console.log("Delhi centers updated successfully!");
