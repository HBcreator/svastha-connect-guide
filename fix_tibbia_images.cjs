const fs = require('fs');
const path = 'src/pages/centers/AandUTibbiaCollegeHospitalPanchakarma.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace wrong paths with correct ones
content = content.replace(/\/TOP cneters\/delhi\/A & U Tibbia College & Hospital \(Karol Bagh\)\/main\.jpeg/g, '/TOP cneters/delhi/A & U Tibbia College & Hospital – Panchakarma/image 1.webp');
content = content.replace(/\/TOP cneters\/delhi\/A & U Tibbia College & Hospital \(Karol Bagh\)\/secondary\.jpeg/g, '/TOP cneters/delhi/A & U Tibbia College & Hospital – Panchakarma/image 2.webp');

// Just to be absolutely safe, let's also do a generic replace if there's any other variation
content = content.replace(/src="[^"]*main\.jpeg"/g, 'src="/TOP cneters/delhi/A & U Tibbia College & Hospital – Panchakarma/image 1.webp"');
content = content.replace(/src="[^"]*secondary\.jpeg"/g, 'src="/TOP cneters/delhi/A & U Tibbia College & Hospital – Panchakarma/image 2.webp"');

fs.writeFileSync(path, content);
console.log("Tibbia College image paths completely fixed!");
