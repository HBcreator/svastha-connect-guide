const fs = require('fs');
const path = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';

let content = fs.readFileSync(path, 'utf8');

// Fix the map query string specifically
content = content.replace(
    'src="https://maps.google.com/maps?q=Vijay+Nagar+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"',
    'src="https://maps.google.com/maps?q=Sanjeevani+Ayurveda+Dwarka+Sector+13+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"'
);

fs.writeFileSync(path, content);
console.log("Map iframe successfully updated to Dwarka Sector 13!");
