const fs = require('fs');

const replacements = {
  // Himalaya
  "Himalayan Hospital – SRHU Ayurveda Center": "Swami Rama Himalayan University Ayurvedic Center",
  "Ayuskama Ayurveda Clinic & Panchakarma Center (Rishikesh)": "Ayuskama Ayurveda Clinic & Panchakarma Center",
  "AyurVAID Kalmatia – Center of Healing, Almora": "AyurVAID Kalmatia – Center of Healing, Almora",
  
  // Delhi
  "Arya Vaidya Sala – Research Center & Ayurvedic Hospital (Delhi)": "Arya Vaidya Sala Research Center And Ayruveda Hospital",
  "TarunVeda Ayurveda Hospital": "Tarunveda Ayurveda Hospital",
};

const filesToProcess = [
  "public/Anchor pages/Himalayan/savastha_himalaya_centers.md",
  "public/Anchor pages/Delhi/savastha_delhi 25_centers .md",
  "src/pages/HimalayasRishikeshUttarakhandNorthEastCenters.tsx",
  "src/pages/DelhiNorthIndiaRegionCenters.tsx"
];

for (const filePath of filesToProcess) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [oldName, newName] of Object.entries(replacements)) {
      if (content.includes(oldName)) {
        content = content.replace(new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newName);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
}
