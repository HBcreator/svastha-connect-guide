const fs = require('fs');
const path = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let content = fs.readFileSync(path, 'utf8');

// Fix ReferenceError for Sanjivani
content = content.replace(
`      if (name.includes("Sanjivani")) {
        name = "Sanjivani Ayurvedic Research Institute";
        city = "Dwarka Sector 13, Delhi, India";
      }`,
`      if (name.includes("Sanjivani")) {
        name = "Sanjivani Ayurvedic Research Institute";
      }`
);

fs.writeFileSync(path, content);
console.log("Fixed Sanjivani ReferenceError!");
