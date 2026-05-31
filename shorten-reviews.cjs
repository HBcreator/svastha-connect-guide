const fs = require('fs');

const files = [
  'src/pages/centers/PraanaVaidyaAyurvedicHospital.tsx',
  'src/pages/centers/RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'src/pages/centers/AyurKutiraPanchakarmaCentre.tsx',
  'src/pages/centers/TatkshanaAyurvedaHospital.tsx',
  'src/pages/centers/VarapradaAyurvedicCenter.tsx',
  'src/pages/centers/SDAyurvedaManeHolisticWellnessCentre.tsx',
  'src/pages/centers/AyushmanAyurveda.tsx',
  'src/pages/centers/TravancoreAyurvedaJayanagar.tsx'
];

let shortenedCount = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    let fileChanged = false;
    
    // We want to find the review string: review: "...",
    content = content.replace(/review:\s*(["'`])([\s\S]*?)\1/g, (match, quote, reviewText) => {
      if (reviewText.length > 200) {
        fileChanged = true;
        // Truncate to roughly 180 chars, find the last space
        let truncated = reviewText.substring(0, 180);
        let lastSpace = truncated.lastIndexOf(' ');
        if (lastSpace > 120) {
           truncated = truncated.substring(0, lastSpace);
        }
        // Remove trailing punctuation before adding ...
        truncated = truncated.replace(/[\.,\s]+$/, '');
        return 'review: ' + quote + truncated + '...' + quote;
      }
      return match;
    });
    
    if (fileChanged) {
        fs.writeFileSync(file, content);
        console.log('Shortened reviews in ' + file);
        shortenedCount++;
    }
  } else {
    console.log('File not found: ' + file);
  }
});

console.log('Total files shortened: ' + shortenedCount);
