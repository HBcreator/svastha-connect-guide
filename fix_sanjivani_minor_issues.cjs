const fs = require('fs');
const path = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';

let content = fs.readFileSync(path, 'utf8');

// 1. Fix Kalkaji address
content = content.replace('R2, Outer Ring Road, Pocket 40/203, Vijay Nagar, Kalkaji<br />', 'R2, Outer Ring Road, Pocket 40/203, Vijay Nagar<br />');

// 2. Fix the Map Iframe to show Delhi instead of Nagpur
content = content.replace('q=Sanjivani+Ayurvedic+Research+Institute+Vijay+Nagar+Delhi', 'q=Vijay+Nagar+Delhi');

// 3. Fix the image extension from .jfif to .jpg
content = content.replace(/image 1\.jfif/g, 'image 1.jpg');

fs.writeFileSync(path, content);
console.log("Fixed Sanjivani Ayurvedic Research Institute!");
