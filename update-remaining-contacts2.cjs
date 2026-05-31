const fs = require('fs');

const notMatched = [
  'src/pages/centers/KottakkalAryaVaidyaSala.tsx',
  'src/pages/centers/Ayurillam.tsx',
  'src/pages/centers/DhanwanthralayaAyurvedaSpecialityHospital.tsx',
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/AryaVaidyaSala.tsx.tsx',
  'src/pages/centers/RasayanaAyurvedaCentre.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx',
  'src/pages/centers/ChakraAyurvedicResort.tsx',
  'src/pages/centers/DeepanjaliAyurRetreat.tsx',
  'src/pages/centers/MadukkakuzhyAyurveda.tsx'
];

for (const path of notMatched) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Replace anything inside a <span> inside the div after a Contact H3
    const spanRegex = /(<h3[^>]*>[^<]*Contact[^<]*<\/h3>\s*<div[^>]*>\s*<span[^>]*>)([\s\S]*?)(<\/span>)/i;
    // Replace nested div format
    const divRegex = /(<h3[^>]*>[^<]*Contact[^<]*<\/h3>\s*<div[^>]*>\s*<div[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>)/i;
    // Replace standard P format
    const pRegex = /(<h3[^>]*>[^<]*Contact[^<]*<\/h3>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/i;
    // Replace direct DIV format
    const directRegex = /(<h3[^>]*>[^<]*Contact[^<]*<\/h3>\s*<div[^>]*>)([\s\S]*?)(<\/div>)/i;

    let matched = false;

    if (spanRegex.test(content)) {
      content = content.replace(spanRegex, '$1+91 989 xxxx xxx$3');
      fs.writeFileSync(path, content);
      console.log('Updated ' + path + ' via spanRegex');
      matched = true;
    } else if (divRegex.test(content)) {
      content = content.replace(divRegex, '$1\n                        +91 989 xxxx xxx\n                      $3');
      fs.writeFileSync(path, content);
      console.log('Updated ' + path + ' via divRegex');
      matched = true;
    } else if (pRegex.test(content)) {
      content = content.replace(pRegex, '$1+91 989 xxxx xxx$3');
      fs.writeFileSync(path, content);
      console.log('Updated ' + path + ' via pRegex');
      matched = true;
    } else if (directRegex.test(content)) {
       content = content.replace(directRegex, '$1+91 989 xxxx xxx$3');
       fs.writeFileSync(path, content);
       console.log('Updated ' + path + ' via directRegex');
       matched = true;
    } 

    if (!matched) {
         console.log('STILL NOT MATCHED in ' + path);
    }
  } else {
    console.log('File not found: ' + path);
  }
}
