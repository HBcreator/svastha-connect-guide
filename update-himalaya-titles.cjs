const fs = require('fs');

const replacements = {
  // Himalaya
  "Himalayan Hospital – SRHU Ayurveda Centre": "Swami Rama Himalayan University Ayurvedic Center",
  "Ayuskama Ayurveda Clinic & Panchakarma Centre (Rishikesh)": "Ayuskama Ayurveda Clinic & Panchakarma Center",
};

const filesToProcess = [
  "public/Anchor pages/Himalayan/savastha_himalaya_centers.md",
  "src/pages/HimalayasRishikeshUttarakhandNorthEastCenters.tsx",
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
