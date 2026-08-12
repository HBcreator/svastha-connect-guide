const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const delhiFilePath = path.join(srcDir, 'DelhiNorthIndiaRegionCenters.tsx');

const content = fs.readFileSync(delhiFilePath, 'utf-8');

// The file has an array of manual centers added to the baseCenters:
// namasteDwaarCenter, naadWellnessCenter, imperialSpaCenter, itcGrandBharatCenter, amanbaghCenter, maharishiAyurvedaHospitalCenter, AryaVaidyaSala, TarunVedaAyurvedaHospital, SKKAyurvedaPanchakarma, AprasuAyurvedicHospital, SanjeevaniAyurveda, SriSriAyurvedaPanchakarmaAyurvedaCenter, KeralaAyurvedaLifeAyurvedaPanchakarmaClinic, ApolloAyurVAIDHospitalsNehruEnclave
// Total 14 manual centers.
const manualCentersCount = 14;

// Now let's parse the markdown file exactly as the component does
const mdPath = path.join(__dirname, 'public', 'Anchor pages', 'Delhi', 'savastha_delhi 25_centers .md');
let mdCentersCount = 0;
let mdCenterNames = [];

if (fs.existsSync(mdPath)) {
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const lines = mdContent.split('\n').map(line => line.trim()).filter(line => /^\|\s*\*\*\d+\*\*/.test(line));
  
  lines.forEach(line => {
    const parts = line.split('|').map(p => p.trim());
    if (parts.length >= 6) {
      const name = parts[2].replace(/\*\*/g, "").replace(/\\([.#-])/g, "$1").replace(/\s+/g, " ").trim();
      mdCenterNames.push(name);
    }
  });
  mdCentersCount = mdCenterNames.length;
}

// prioritizeTopCenters removes duplicates by name (case-insensitive) usually.
// Let's get the names of the 14 manual centers manually to check for overlaps
const manualNames = [
  "Namaste Dwaar – Countryside Wellness Retreat",
  "Naad Wellness",
  "The Imperial Spa and Wellness",
  "ITC Grand Bharat",
  "Amanbagh Heritage Wellness Retreat",
  "Maharishi Ayurveda Hospital",
  "Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)",
  "Tarunveda Ayurveda Hospital",
  "SKK Ayurveda & Panchakarma",
  "Aprasu Ayurvedic Hospital",
  "Sanjeevani Ayurveda",
  "Sri Sri Ayurveda Panchakarma Ayurveda Center",
  "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)",
  "Apollo AyurVAID Hospitals (Nehru Enclave)"
];

let finalSet = new Set();
manualNames.forEach(n => finalSet.add(n.toLowerCase()));
let overlapCount = 0;

mdCenterNames.forEach(n => {
  if (finalSet.has(n.toLowerCase())) {
    overlapCount++;
  }
  finalSet.add(n.toLowerCase());
});

console.log(`Manual Centers: ${manualCentersCount}`);
console.log(`Markdown Centers: ${mdCentersCount}`);
console.log(`Overlaps: ${overlapCount}`);
console.log(`Exact Final Rendered Count for Delhi: ${finalSet.size}`);
