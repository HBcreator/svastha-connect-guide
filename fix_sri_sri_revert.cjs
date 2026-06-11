const fs = require('fs');

const path = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix the name override
content = content.replace(
`      if (name.includes("Sri Sri")) {
        name = "Sri Sri Tattva Panchakarma Centre - Delhi";
      }`,
`      if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }
      if (name.includes("Sri Sri Tattva Panchakarma Centre")) {
        name = "Sri Sri Tattva Panchakarma Centre - Delhi";
      }`
);

// 2. Fix the slug mapping
content = content.replace(
`      } else if (name.includes("Sri Sri Tattva")) {
        finalSlug = "sri-sri-tattva-panchakarma-centre-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";`,
`      } else if (name.includes("Sri Sri Ayurveda Panchakarma Ayurveda Center")) {
        finalSlug = "sri-sri-ayurveda-panchakarma-center-new-delhi-india";
        finalRating = 4.1;
        finalReviews = "60+";
      } else if (name.includes("Sri Sri Tattva Panchakarma Centre")) {
        finalSlug = "sri-sri-tattva-panchakarma-centre-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";`
);

// 3. Fix the hardcoded fallback object
const oldObjectRegex = /const SriSriAyurvedaPanchakarmaAyurvedaCenter: DelhiCenter = \{[\s\S]*?\};/;
const newObject = `const SriSriAyurvedaPanchakarmaAyurvedaCenter: DelhiCenter = {
  series: -12,
  name: "Sri Sri Ayurveda Panchakarma Ayurveda Center",
  city: "Jhilmil, Delhi, India",
  description: "An Ayurvedic Panchakarma clinic in Delhi affiliated with the Sri Sri Tattva brand, delivering authentic Ayurvedic therapies in a spiritually aligned, peaceful environment. The center offers personalized Panchakarma detox programs, Abhyanga, Shirodhara, Udwarthanam, herbal steam, and rejuvenation therapies under qualified Ayurvedic doctors. Known for integrating yoga and meditation with clinical Ayurveda, this center appeals to patients from across India and international visitors seeking genuine, protocol-driven Ayurvedic healing in the capital city.",
  rating: 4.1,
  reviews: "60+",
  image: "/Anchor pages/Delhi/images/8.webp",
  slug: "sri-sri-ayurveda-panchakarma-center-new-delhi-india",
};`;

if (oldObjectRegex.test(content)) {
    content = content.replace(oldObjectRegex, newObject);
}

fs.writeFileSync(path, content);
console.log("Successfully reverted Sri Sri Ayurveda Panchakarma Ayurveda Center and correctly mapped Sri Sri Tattva Panchakarma Centre - Delhi");
