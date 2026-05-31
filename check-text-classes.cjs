const fs = require('fs');
const files = [
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/RasayanaAyurvedaCentre.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx',
  'src/pages/centers/ChakraAyurvedicResort.tsx',
  'src/pages/centers/DeepanjaliAyurRetreat.tsx',
  'src/pages/centers/MadukkakuzhyAyurveda.tsx'
];
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const match = c.match(/className="space-y-6[^"]*"/);
  console.log(f.split('/').pop() + ' -> ' + (match ? match[0] : 'Not Found'));
});
