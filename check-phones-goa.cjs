const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';
const files = ['Veda5WellnessRetreat.tsx','AyurvedicNaturalHealthCentre.tsx','AyurTouchAyurvedicHealthcare.tsx','YashrajAyurvedaClinic.tsx','SreeShantiWellness.tsx','NaturalTouchAyurveda.tsx','KAREHealth.tsx'];

files.forEach(f => {
  const fp = path.join(dir, f);
  const c = fs.readFileSync(fp, 'utf8');
  
  // Find all phone number patterns
  const phoneRegex = /(\+91[^<"\n]{3,40})/g;
  let m;
  const phones = [];
  while ((m = phoneRegex.exec(c)) !== null) {
    const num = m[1].trim();
    // Skip URLs
    if (num.includes('http') || num.includes('embed')) continue;
    phones.push(num);
  }
  
  // Also find "xxx" patterns
  const hasPlaceholder = c.includes('xxxx') || c.includes('xxx xxx');
  
  console.log(f);
  console.log('  phones found: ' + (phones.length > 0 ? phones.join(' | ') : 'NONE'));
  console.log('  has placeholder (xxx): ' + hasPlaceholder);
  console.log('');
});
