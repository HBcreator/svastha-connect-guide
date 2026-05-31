const fs = require('fs');
const files = [
  'src/pages/centers/Veda5WellnessRetreat.tsx',
  'src/pages/centers/AyurvedicNaturalHealthCentre.tsx',
  'src/pages/centers/AyurTouchAyurvedicHealthcare.tsx',
  'src/pages/centers/YashrajAyurvedaClinic.tsx',
  'src/pages/centers/SreeShantiWellness.tsx',
  'src/pages/centers/NaturalTouchAyurveda.tsx',
  'src/pages/centers/KAREHealth.tsx'
];

let longReviews = [];
files.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const regex = /review:\s*(["'])([\s\S]*?)\1/g;
    let m;
    while ((m = regex.exec(c)) !== null) {
      if (m[2].trim().split(/\s+/).length > 40) {
        longReviews.push({ file: f, text: m[2] });
      }
    }
  }
});
fs.writeFileSync('long-goa-reviews.json', JSON.stringify(longReviews, null, 2));
console.log('Saved ' + longReviews.length + ' long reviews.');
