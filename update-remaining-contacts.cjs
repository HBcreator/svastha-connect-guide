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
  'src/pages/centers/MadukkakuzhyAyurveda.tsx',
  'src/pages/centers/SreeShantiWellness.tsx'
];

for (const path of notMatched) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Replace anything inside a <span> inside the div
    const spanRegex = /(<h3[^>]*>(?:Contact Numbers|Contact Details)<\/h3>\s*<div[^>]*>\s*<span[^>]*>)([\s\S]*?)(<\/span>)/;
    // Replace text where there's just a raw number inside a tag (like <p...>... <br/> ...</p>)
    const genericNumberRegex = /(<h3[^>]*>(?:Contact Numbers|Contact Details)<\/h3>\s*<[^>]+>\s*)([+]?[\d\s\-\/\(\)]+)(\s*<\/[^>]+>)/;

    if (spanRegex.test(content)) {
      content = content.replace(spanRegex, '$1+91 989 xxxx xxx$3');
      fs.writeFileSync(path, content);
      console.log('Updated ' + path + ' via spanRegex');
    } else if (genericNumberRegex.test(content)) {
      content = content.replace(genericNumberRegex, '$1+91 989 xxxx xxx$3');
      fs.writeFileSync(path, content);
      console.log('Updated ' + path + ' via genericNumberRegex');
    } else {
        // Fallback: manually find the number and replace it
        // We know it's right after Contact Details
        const h3Index = content.indexOf('Contact Details</h3>') !== -1 ? content.indexOf('Contact Details</h3>') : content.indexOf('Contact Numbers</h3>');
        if (h3Index !== -1) {
            let snippet = content.substring(h3Index, h3Index + 400);
            // Replace any phone number looking thing with +91 989 xxxx xxx
            let newSnippet = snippet.replace(/(?:\+91|0[1-9][0-9]{1,4})[\s\-]?\d{3,4}[\s\-]?\d{3,4}(?:[\s\-\/]+\+91[\s\-]?\d{5}[\s\-]?\d{5})?/g, '+91 989 xxxx xxx');
            content = content.substring(0, h3Index) + newSnippet + content.substring(h3Index + 400);
            fs.writeFileSync(path, content);
            console.log('Updated ' + path + ' via regex fallback');
        } else {
             console.log('NOTHING FOUND in ' + path);
        }
    }
  }
}
