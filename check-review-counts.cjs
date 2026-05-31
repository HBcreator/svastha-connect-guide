const fs = require('fs');
const files = [
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/AryaVaidyaSala.tsx.tsx',
  'src/pages/centers/RasayanaAyurvedaCentre.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx',
  'src/pages/centers/ChakraAyurvedicResort.tsx',
  'src/pages/centers/DeepanjaliAyurRetreat.tsx',
  'src/pages/centers/MadukkakuzhyAyurveda.tsx'
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
    console.log(f.split('/').pop() + ' review word counts: ' + counts.join(', '));
  }
});
