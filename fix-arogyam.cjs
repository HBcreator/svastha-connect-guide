const fs = require('fs');

const path = 'src/pages/centers/ArogyamPanchkarmaCenterAyurvedicHospital.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the duplicate image in the specific section
const match = content.match(/<img\s+src="\/TOP cneters\/himalayas-rishikesh-uttarakhand-north-east\/Arogyam Panchkarma Center & Ayurvedic Hospital\/main\.JPG"\s+alt="Arogyam Panchkarma Center & Ayurvedic Hospital"\s+className="rounded-\[2rem\] w-full object-cover shadow-2xl border-4 border-white\/20 aspect-\[4\/3\] translate-y-8"/);

if (match) {
    content = content.replace(match[0], match[0].replace('main.JPG', 'secondary.webp'));
} else {
    console.log("Could not find the exact match for the second image, please check the source manually.");
}

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed image duplicates in ArogyamPanchkarmaCenterAyurvedicHospital.tsx");
