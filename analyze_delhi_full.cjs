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
    "Maharishi Ayurveda Hospital",
    "Arya Vaidya Sala - Ayurvedic Hospital & Research Center",
    "TarunVeda Ayurveda Hospital",
    "SKK Ayurveda & Panchakarma",
    "Aprasu Ayurvedic Hospital",
    "Sanjeevani Ayurveda",
    "Sri Sri Ayurveda Panchakarma Ayurveda Center",
    "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)",
    "Apollo AyurVAID Hospitals (Nehru Enclave)",
    "Aasha Ayurveda",
    "Karma Ayurveda Hospital",
    "Nirmal Ayurved & Panchkarm Clinic",
    "AyurNava Kerala Ayurveda Hospital",
    "Kurias Earth Ayurveda Hospital",
    "Mirasa Ayurveda",
    "Ayurveda Kendra (Dr. Sudha Asokan)",
    "All India Institute of Ayurveda (AIIA)",
    "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)",
    "Sri Vaidya Ayurveda Panchakarma",
    "Kerala Ayurveda Wellness Clinic – East of Kailash",
    "Holy Family Hospital – Ayurveda Department",
    "A & U Tibbia College & Hospital – Panchakarma",
    "Kairali The Ayurvedic Healing Village – Delhi NCR",
    "Sanjivani Ayurvedic Research Institute",
    "Sri Sri Tattva Panchakarma – Delhi",
];

// Check which exist in TopCenters (fuzzy match too)
const alreadyIn = [];
const missing = [];

for (const name of userList) {
    // Try exact match first
    const found = topNames.find(t => t === name || t.toLowerCase().includes(name.toLowerCase().substring(0, 20)) || name.toLowerCase().includes(t.toLowerCase().substring(0, 20)));
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
    const found = centerFiles.find(f => {
        const fSimple = f.toLowerCase().replace(/[^a-z0-9]/g, '');
        return fSimple.includes(nameSimple.substring(0, 12)) || nameSimple.includes(fSimple.substring(0, 12));
    });
    console.log(`  ${name}: ${found ? '✅ ' + found : '❌ NOT FOUND'}`);
}
