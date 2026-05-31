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

let replacedCount = 0;

for (const path of files) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    const before = content;
    
    // Reduce intro paragraph Text Size to text-base on mobile
    content = content.replace(/className="space-y-6 text-lg md:text-xl/g, 'className="space-y-6 text-base md:text-xl');

    if (before !== content) {
       fs.writeFileSync(path, content);
       console.log('Applied text-size fix to ' + path);
       replacedCount++;
    } else {
       console.log('Already fully configured (or not found): ' + path);
    }
  } else {
    console.log('File not found: ' + path);
  }
}

console.log('Total files modified: ' + replacedCount);
