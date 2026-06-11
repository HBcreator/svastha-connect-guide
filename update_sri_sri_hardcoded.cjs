const fs = require('fs');

const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

const oldObjectRegex = /const SriSriAyurvedaPanchakarmaAyurvedaCenter: DelhiCenter = \{[\s\S]*?\};/;

const newObject = `const SriSriAyurvedaPanchakarmaAyurvedaCenter: DelhiCenter = {
  series: -12,
  name: "Sri Sri Tattva Panchakarma Centre - Delhi",
  city: "Dwarka Sector 19, New Delhi, India",
  description:
    "An Ayurvedic Panchakarma clinic in Delhi affiliated with the Sri Sri Tattva brand, delivering authentic Ayurvedic therapies in a spiritually aligned, peaceful environment. The center offers personalized Panchakarma detox programs, Abhyanga, Shirodhara, Udwarthanam, herbal steam, and rejuvenation therapies under qualified Ayurvedic doctors. Known for integrating yoga and meditation with clinical Ayurveda, this center appeals to patients from across India and international visitors seeking genuine, protocol-driven Ayurvedic healing in the capital city.",
  rating: 4.6,
  reviews: "250+",
  image: "/Anchor pages/Delhi/images/8.webp",
  slug: "sri-sri-tattva-panchakarma-centre-new-delhi-india",
};`;

if (oldObjectRegex.test(centersContent)) {
    centersContent = centersContent.replace(oldObjectRegex, newObject);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx hardcoded Sri Sri object updated!");
} else {
    console.log("Could not find SriSriAyurvedaPanchakarmaAyurvedaCenter object.");
}
