const fs = require('fs');

let content = fs.readFileSync('src/pages/SouthIndiaCenters.tsx', 'utf8');

const replacements = {
  'indus-valley-ayurvedic-centre-mysore-banglore-india': 'indus-valley-ayurvedic-hospital-mysore-india',
  'bangalore/keva-ayurveda-btm-layout': 'keva-ayurveda-hospital-bengaluru-india',
  'bangalore/jayadev-memorial-rashtrotthana-ayurveda': 'jayadev-memorial-rashtrotthana-ayurveda-hospital-bengaluru-india',
  'bangalore/healing-earth-ayurveda-hospital': 'healing-earth-ayurveda-hospital-bengaluru-india',
  'bangalore/adivaidyam-ayurveda-hospital': 'adivaidyam-ayurveda-hospital-bengaluru-india',
  'bangalore/iaim-healthcare-center': 'iaim-healthcare-hospital-bengaluru-india',
  'bangalore/hlc-ayurveda-and-nature-cure-hospital': 'hlc-ayurveda-and-nature-cure-hospital-bengaluru-india',
  'bangalore/praanavaidya-ayurvedic-hospital': 'praanavaidya-ayurvedic-hospital-bengaluru-india',
  'bangalore/ramaiah-indic-specialty-ayurveda-hospital': 'ramaiah-indic-specialty-ayurveda-hospital-bengaluru-india',
  'bangalore/ayurkutira-panchakarma-centre': 'ayurkutira-panchakarma-hospital-bengaluru-india',
  'bangalore/tatkshana-ayurveda-hospital': 'tatkshana-ayurveda-hospital-bengaluru-india',
  'bangalore/varaprada-ayurvedic-centre': 'varaprada-ayurvedic-hospital-bengaluru-india',
  'bangalore/sd-ayurveda-mane-holistic-wellness-centre': 'sd-ayurveda-mane-holistic-wellness-hospital-bengaluru-india',
  'bangalore/ayushman-ayurveda': 'ayushman-ayurveda-hospital-bengaluru-india',
  'bangalore/travancore-ayurveda-jayanagar': 'travancore-ayurveda-hospital-bengaluru-india',
  'bangalore/kottakkal-arya-vaidya-sala-mahalingapuram': 'kottakkal-arya-vaidya-sala-hospital-bengaluru-india',
  'chennai/ayurillam-home-of-ayurvedic-therapy-centre': 'ayurillam-home-of-ayurvedic-therapy-hospital-chennai-india',
  'chennai/dhanwanthralaya-ayurveda-speciality-hospital': 'dhanwanthralaya-ayurveda-speciality-hospital-chennai-india'
};

for (const [oldSlug, newSlug] of Object.entries(replacements)) {
  content = content.replace(new RegExp('"' + oldSlug + '"', 'g'), '"' + newSlug + '"');
}

fs.writeFileSync('src/pages/SouthIndiaCenters.tsx', content);

let topCentersContent = fs.readFileSync('src/lib/top-centers.ts', 'utf8');
for (const [oldSlug, newSlug] of Object.entries(replacements)) {
  topCentersContent = topCentersContent.replace(new RegExp('"' + oldSlug + '"', 'g'), '"' + newSlug + '"');
}
fs.writeFileSync('src/lib/top-centers.ts', topCentersContent);

console.log('Slugs updated successfully');
