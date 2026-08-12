const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const anchorDir = path.join(__dirname, 'public', 'Anchor pages');

function extractFromTsx(fileName) {
  const filePath = path.join(srcDir, fileName);
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const regex = /name:\s*["']([^"']+)["']/g;
  const centers = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const name = match[1].trim();
    if (name.length > 5 && !name.includes('Sort') && !name.includes('Price')) {
      centers.push(name);
    }
  }
  return centers;
}

function parseMarkdownCenters(folderName, fileName) {
  const filePath = path.join(anchorDir, folderName, fileName);
  if (!fs.existsSync(filePath)) return [];
  const mdContent = fs.readFileSync(filePath, 'utf-8');
  
  const lines = mdContent.split("\n").map(line => line.trim()).filter(line => /^\|\s*\*\*\d+\*\*/.test(line));
  const centers = lines.map(line => {
    const parts = line.split("|").map(p => p.trim());
    if (parts.length >= 6) {
      return parts[2].replace(/\*\*/g, "").replace(/\\([.#-])/g, "$1").replace(/\s+/g, " ").trim();
    }
    return null;
  }).filter(c => c !== null);
  
  return centers;
}

// 1. Get Top Centers exactly
const topCenters = Array.from(new Set(extractFromTsx('TopCenters.tsx')));

function getStats(regionName, manualCount, markdownFolder, markdownFile) {
  const mdCenters = parseMarkdownCenters(markdownFolder, markdownFile);
  
  // Need to know manual names. We will extract all names from TSX and take first manualCount.
  // Wait, extractFromTsx gets ALL names in the TSX (including other components if any).
  // This is an approximation. Let's just use my exact counts from earlier for manual names.
}

// We know the manual names for each from code:
const delhiManualNames = [
  "Namaste Dwaar – Countryside Wellness Retreat", "Naad Wellness", "The Imperial Spa and Wellness", "ITC Grand Bharat", "Amanbagh Heritage Wellness Retreat", "Maharishi Ayurveda Hospital", "Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)", "Tarunveda Ayurveda Hospital", "SKK Ayurveda & Panchakarma", "Aprasu Ayurvedic Hospital", "Sanjeevani Ayurveda", "Sri Sri Ayurveda Panchakarma Ayurveda Center", "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)", "Apollo AyurVAID Hospitals (Nehru Enclave)"
];

const himalayasManualNames = [
  "Ananda in the Himalayas", "Ayuskama Ayurveda and Panchakarma Center", "HimVeda – Kangra's First Ayurvedic Hospital", "Yan Cure Yoga Retreat and Ayurveda Centre", "Sandhya Resort and Spa", "Modi Yoga Retreat", "Veda5 Ayurveda & Yoga Retreat (Rishikesh)",
  "Sattva Retreat", "Vana Wellness Retreat", "Aarogyam Suites", "Tattwaa Yogashala", "Yoga Niketan Ashram", "Rishikesh Yogpeeth", "Osho Ganga Dham", "Parmarth Niketan"
];

const mumbaiManualNames = [
  "Agni Ayurvedic Village", "Fazlani Nature's Nest", "Viveda Wellness Village", "Dharana At Shillim", "Toyam By Orchid Hotels", "Atmantan Wellness Resort",
  "Nimba Nature Cure Village", "The Leela Palace Udaipur Wellness Spa", "Gitanjali Ayurveda", "Ayurvedic Village (Palghar)", "Kare Ayurveda and Yoga Retreat", "Four Seasons Spa (Mumbai)", "Kaya Kalp - The Royal Spa (ITC Grand Chola)", "The Oberoi Spa (Mumbai)"
];

function calculateFinal(region, manualNames, mdFolder, mdFile) {
    const mdCenters = parseMarkdownCenters(mdFolder, mdFile);
    
    // Deduplicate logic just added to React:
    const manualSet = new Set(manualNames.map(c => c.toLowerCase().trim()));
    const uniqueMd = mdCenters.filter(c => !manualSet.has(c.toLowerCase().trim()));
    
    const finalAllCenters = [...manualNames, ...uniqueMd];
    
    let mainCount = 0;
    let subCount = 0;
    
    finalAllCenters.forEach(center => {
        // Find if center exists in Top 52
        const isMain = topCenters.some(tc => tc.toLowerCase() === center.toLowerCase());
        if (isMain) mainCount++;
        else subCount++;
    });
    
    console.log(`\n=== ${region} ===`);
    console.log(`Total Centers on Page: ${finalAllCenters.length}`);
    console.log(`Main Centers (Top 52): ${mainCount}`);
    console.log(`Sub Centers: ${subCount}`);
}

calculateFinal('Delhi NCR', delhiManualNames, 'Delhi', 'savastha_delhi 25_centers .md');
// For Himalayas we need the exact markdown file:
calculateFinal('Himalayas/Rishikesh', himalayasManualNames, 'Himalayan', 'savastha_himalaya_centers.md');
// For Mumbai:
calculateFinal('Mumbai/Pune', mumbaiManualNames, 'mumbai', 'savastha_mumbai_centers-updated.md');

