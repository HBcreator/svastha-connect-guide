const fs = require('fs');
const path = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content = fs.readFileSync(path, 'utf8');

const target = `      if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      const reviewsMatch = ratingCell.match(/\\(([^)]+)\\)/);`;

const replacement = `      if (name.includes("Tibbia College")) {
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
      city = city
        .replace(/\\s+,/g, ",")
        .replace(/,\\s*,/g, ", ")
        .replace(/\\s{2,}/g, " ")
        .replace(/,\\s*India$/i, ", India")
        .trim();
      if (LOCATION_OVERRIDE_BY_CENTER[name]) {
        city = LOCATION_OVERRIDE_BY_CENTER[name];
      }

      const ratingMatch = ratingCell.match(/\\d+(?:\\.\\d+)?/);
      const reviewsMatch = ratingCell.match(/\\(([^)]+)\\)/);`;

content = content.replace(target, replacement);
fs.writeFileSync(path, content);
console.log('Fixed cards logic!');
