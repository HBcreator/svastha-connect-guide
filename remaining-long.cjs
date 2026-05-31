const fs = require('fs');
const path = require('path');

const dir = 'src/pages/centers';

// Remaining long reviews to fix
const fixes = {
  'DhanwanthralayaAyurvedaSpecialityHospital.tsx': {},
  'VarapradaAyurvedicCenter.tsx': {},
};

// First extract remaining long reviews
['DhanwanthralayaAyurvedaSpecialityHospital.tsx', 'VarapradaAyurvedicCenter.tsx'].forEach(f => {
  const fp = path.join(dir, f);
  const c = fs.readFileSync(fp, 'utf8');
  const regex = /review:\s*(["'])([\s\S]*?)\1/g;
  let m;
  let idx = 0;
  while ((m = regex.exec(c)) !== null) {
    const words = m[2].trim().split(/\s+/).length;
    if (words > 40) {
      console.log('=== ' + f + ' review#' + idx + ' (' + words + ' words) ===');
      console.log(m[2]);
      console.log('');
    }
    idx++;
  }
});
