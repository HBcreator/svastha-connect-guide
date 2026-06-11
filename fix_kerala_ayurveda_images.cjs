const fs = require('fs');
const path = 'src/pages/centers/KeralaAyurvedaWellnessClinicEastofKailash.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace wrong paths with correct ones
content = content.replace(/\/TOP cneters\/delhi\/Kerala Ayurveda Wellness Clinic \(East of Kailash\)\/main\.jpeg/g, '/TOP cneters/delhi/Kerala Ayurveda Wellness Clinic – East of Kailash/image 1.webp');
content = content.replace(/\/TOP cneters\/delhi\/Kerala Ayurveda Wellness Clinic \(East of Kailash\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Kerala Ayurveda Wellness Clinic – East of Kailash/image 2.webp');

fs.writeFileSync(path, content);
console.log("Kerala Ayurveda image paths completely fixed!");
