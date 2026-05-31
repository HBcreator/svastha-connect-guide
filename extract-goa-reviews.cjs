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
    let reviews = [];
    while ((m = regex.exec(c)) !== null) {
      reviews.push(m[2]);
    }
    console.log('--- ' + f.split('/').pop() + ' ---');
    reviews.forEach((r, i) => {
      console.log(i + ': ' + r.substring(0, 70) + '...');
    });
  } else {
    console.log('MISSING: ' + f);
  }
});
