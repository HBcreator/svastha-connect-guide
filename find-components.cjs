const fs = require('fs');
const path = require('path');

const urls = [
  "ayuskama-ayurveda-clinic-and-panchakarma-centre-rishikesh-uttarakhand-india",
  "bhole-baba-ayurvedic-hospital-and-research-centre-ranikhet-uttarakhand-india",
  "mamgain-ayurvedic-clinic-and-panchakarma-centre-rishikesh-uttarakhand-india",
  "haritha-ayurveda-academy-and-panchakarma-center-rishikesh-uttarakhand-india",
  "kayakalp-himalayan-research-institute-of-yoga-and-naturopathy-hospital-himachal-india",
  "vedic-yoga-and-ayurveda-retreat-center-rishikesh-uttarakhand-india",
  "vedanjana-yoga-and-ayurveda-panchakarma-center-rishikesh-uttarakhand-india",
  "dr-siby-ayurveda-center-himachal-india",
  "arogyam-panchkarma-centre-haridwar-himachal-india",
  "rishikesh-ayurveda-center-uttarakhand-india",
  "rudramya-ayurveda-at-the-himalayas-hospital-himachal-india",
  "himalaya-sanjeevni-ayurveda-hospital-dehradun-uttarakhand-india",
  "naturoville-wellness-resort-rishikesh-uttarakhand-india",
  "vihana-retreat-hospital-rishikesh-uttarakhand-india",
  "prana-spa-and-ayurveda-resort-rishikesh-uttarakhand-india",
  "moksha-himalaya-spa-resort-himachal-india",
  "ayurveda-house-himalayan-ayurveda-hospital-himachal-india",
  "ayurvaid-kalmatia-centre-almora-uttarakhand-india",
  "modi-yoga-retreat-hospital-rishikesh-uttarakhand-india",
  "arogyadham-retreat-luxury-ayurveda-hotel-rishikesh-uttarakhand-india"
];

const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const results = [];

for (const url of urls) {
  // Find <Route path="/centers/url" element={<Component />} />
  // Note: the route in App.tsx might just be the last part
  const regex = new RegExp(`path=["']/centers/${url}["'][^>]*element=\\{\\s*<([A-Za-z0-9_]+)`, 'i');
  const match = appContent.match(regex);
  if (match) {
    const componentName = match[1];
    
    // Now find the import for this component to get the file path
    const importRegex = new RegExp(`import\\s+${componentName}\\s+from\\s+["'](.*?)["']`);
    const importMatch = appContent.match(importRegex);
    
    let filePath = 'UNKNOWN';
    if (importMatch) {
      filePath = importMatch[1].replace('./', 'src/').replace('.tsx', '') + '.tsx';
    } else {
      // Just guess the file path based on standard
      filePath = `src/pages/centers/${componentName}.tsx`;
    }
    
    results.push({ url, component: componentName, file: filePath });
  } else {
    results.push({ url, error: 'NOT FOUND IN APP.TSX' });
  }
}

console.log(JSON.stringify(results, null, 2));
