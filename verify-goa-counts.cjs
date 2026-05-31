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

files.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const regex = /review:\s*(["'])([\s\S]*?)\1/g;
    let m;
    let counts = [];
    while ((m = regex.exec(c)) !== null) {
      counts.push(m[2].trim().split(/\s+/).length);
    }
    console.log(f.split('/').pop() + ' word counts: ' + counts.join(', '));
  }
});
