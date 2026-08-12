const fs = require('fs');

const topContent = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

function extractCenters(content) {
    const centers = [];
    const nameRegex = /name:\s*["']([^"']+)["']/g;
    let match;
    while ((match = nameRegex.exec(content)) !== null) {
        centers.push(match[1]);
    }
    return centers;
}

const topNames = extractCenters(topContent);

const userList = [
    "Bharati Ayurved Hospital",
    "Sukhayu Ayurveda & Panchakarma",
    "Swarayu Ayurveda Clinic & Panchakarma",
    "Ayushakti Ayurved Health",
    "Karma Ayurveda Mumbai",
    "SRIAAS – SR Institute of Advanced Ayurvedic Sciences",
    "Thapovan Ayurveda",
    "Somaiya Ayurvihar – Panchakarma",
    "Prof. K.R. Kohli's Ayurveda & Panchakarma (KAPC)",
    "Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai",
    "Aushadhgyan Ayurveda & Wellness",
    "Aayushree Ayurvedic – Polyclinic & Panchakarma",
    "Herbal Hills Ayurvedic Wellness Center",
    "Pravaayu Ayurveda & Panchkarma Clinic",
    "Aradhana Ayurveda Clinic & Panchakarma",
    "Divyamrut Ayurcare",
    "Kerala Ayurveda Multi Speciality Clinic",
    "Ayush Ayurved Panchakarma Center",
    "Shree Ayurved & Panchakarma Hospital",
    "Aatreya Ayurved & Panchakarma Clinic",
    "Ashtang Ayurveda Super Multi Speciality Hospital",
    "Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic",
    "Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center"
];

// Check which exist in TopCenters (fuzzy match too)
const alreadyIn = [];
const missing = [];

for (const name of userList) {
    const found = topNames.find(t => t === name || t.toLowerCase().includes(name.toLowerCase().substring(0, 15)) || name.toLowerCase().includes(t.toLowerCase().substring(0, 15)));
    if (found) {
        alreadyIn.push({ user: name, matched: found });
    } else {
        missing.push(name);
    }
}

console.log(`User's list: ${userList.length} centers`);
console.log(`\nAlready in TopCenters: ${alreadyIn.length}`);
alreadyIn.forEach((c, i) => console.log(`  ${i+1}. ${c.user} (matched: ${c.matched})`));

console.log(`\nMissing (will be added): ${missing.length}`);
missing.forEach((n, i) => console.log(`  ${i+1}. ${n}`));

// Now check which of these have detail pages in src/pages/centers/
console.log(`\n--- Checking detail pages ---`);
const centerFiles = fs.readdirSync('src/pages/centers').filter(f => f.endsWith('.tsx'));
for (const name of missing) {
    const nameSimple = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    let found = centerFiles.find(f => {
        const fSimple = f.toLowerCase().replace(/[^a-z0-9]/g, '');
        return fSimple.includes(nameSimple.substring(0, 10)) || nameSimple.includes(fSimple.substring(0, 10));
    });
    
    // Manual fallbacks for tricky names
    if (!found) {
        if (name.includes("SRIAAS")) found = "SRIAASInstitute.tsx";
        if (name.includes("Prof. K.R. Kohli")) found = "ProfKRKohliAyurveda.tsx";
        if (name.includes("Aushadhgyan")) found = "AushadhgyanAyurveda.tsx";
        if (name.includes("Divyamrut")) found = "DivyamrutAyurcare.tsx";
    }

    console.log(`  ${name}: ${found ? '✅ ' + found : '❌ NOT FOUND'}`);
}
