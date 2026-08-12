const fs = require('fs');
const content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf-8');

const names = [
  'ITC Grand Bharat',
  'Niraamaya Retreats Surya Samudra',
  'Modi Yoga Retreat',
  'Amanbagh Heritage Wellness Retreat',
  'HimVeda Heritage Wellness Center',
  'Sandhya Hot Spring Health Care',
  'Ayuskama Ayurveda',
  'Somatheeram Ayurvedic Health Resort',
  'AyurSoma Ayurveda Royal Retreat',
  'Kalari Kovilakom - The Palace For Ayurveda',
  'Carnoustie Ayurveda & Wellness Resort',
  'The Nattika Beach Resort',
  'Sitaram Beach Retreat'
];

names.forEach(n => {
  // Regex to match: name: "...", slug: "...", location: "..."
  const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`name:\\s*"${escapeRegex(n)}".*?slug:\\s*"([^"]+)".*?location:\\s*"([^"]+)"`, 's');
  
  const match = content.match(pattern);
  if (match) {
    console.log(`${n} | SLUG: ${match[1]} | LOC: ${match[2]}`);
  } else {
    console.log(`${n} | NOT FOUND`);
  }
});
