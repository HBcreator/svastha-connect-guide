const fs = require('fs');

// Fix DelhiNorthIndiaRegionCenters.tsx
const path1 = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content1 = fs.readFileSync(path1, 'utf8');

const target1 = `      if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      }
      city = city`;

const replacement1 = `      if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      }
      if (name.includes("Sanjivani")) {
        name = "Sanjeevani Ayurveda Center";
      }
      const description = cleanMarkdownText(parts[3]);
      const ratingCell = cleanMarkdownText(parts[4]);
      let city = cleanMarkdownText(parts[5]).replace(/\\s+/g, " ").trim();
      city = city.replace(/\\s*Delhi India$/i, ", India");
      if (!/India$/i.test(city)) {
        city = \`\${city}, India\`;
      }
      city = city`;

content1 = content1.replace(target1, replacement1);
fs.writeFileSync(path1, content1);
console.log('Fixed path1');

// Fix SanjivaniAyurvedicResearchInstitute.tsx
const path2 = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

// Breadcrumb
const target2a = `Sanjeevani Ayurveda Centre in Delhi NCR`;
const replacement2a = `Sanjeevani Ayurveda Center in Delhi NCR`;
content2 = content2.replace(target2a, replacement2a);

// Hero title
const target2b = `<h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Sanjivani Ayurvedic Research Institute</h1>`;
const replacement2b = `<h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Sanjeevani Ayurveda Center</h1>`;
content2 = content2.replace(target2b, replacement2b);

fs.writeFileSync(path2, content2);
console.log('Fixed path2');
