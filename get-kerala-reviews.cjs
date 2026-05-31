const fs = require('fs');
const files = [
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/KottakkalAryaVaidyaSala.tsx',
  'src/pages/centers/RasayanaAyurvedaCentre.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx',
  'src/pages/centers/ChakraAyurvedicResort.tsx',
  'src/pages/centers/DeepanjaliAyurRetreat.tsx',
  'src/pages/centers/MadukkakuzhyAyurveda.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const reviewRegex = /review:\s*(["'`])([\s\S]*?)\1/g;
    let match;
    while ((match = reviewRegex.exec(content)) !== null) {
      if (match[2].length > 250) {
        console.log(JSON.stringify(match[2]) + ': "REWRITTEN VERSION",');
      }
    }
  }
});
