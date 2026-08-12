const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const baseDir = 'public/TOP centers/delhi';
const folders = fs.readdirSync(baseDir);

// Build map: folder name -> full image path with actual extension
const folderImageMap = {};
for (const folder of folders) {
    const fullPath = path.join(baseDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        const files = fs.readdirSync(fullPath);
        const mainImg = files.find(f => f.startsWith('main'));
        if (mainImg) {
            folderImageMap[folder] = `/TOP centers/delhi/${folder}/${mainImg}`;
        }
    }
}

// Exact manual mapping for the 12 broken ones
const exactFixes = {
    "Nirmal Ayurved & Panchkarm Clinic": folderImageMap["Nirmal Ayurved & Panchkarm Clinic"],
    "Kurias Earth Ayurveda Hospital": folderImageMap["Kurias Earth Ayurveda Hospital"],
    "Mirasa Ayurveda": folderImageMap["mirasa ayurveda"],
    "Ayurveda Kendra (Dr. Sudha Asokan)": folderImageMap["Ayurveda Kendra (Dr. Sudha Asokan)"],
    "All India Institute of Ayurveda (AIIA)": folderImageMap["All India Institute of Ayurveda (AIIA)"],
    "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)": folderImageMap["Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)"],
    "Sri Vaidya Ayurveda Panchakarma": folderImageMap["Sri Vaidya Ayurveda Panchakarma"],
    "Holy Family Hospital – Ayurveda Department": folderImageMap["Holy Family Hospital - Ayurveda Department"],
    "A & U Tibbia College & Hospital – Panchakarma": folderImageMap["A & U Tibbia College & Hospital - Panchakarma"],
    "Kairali The Ayurvedic Healing Village – Delhi NCR": folderImageMap["Kairali The Ayurvedic Healing Village - Delhi NCR"],
    "Sanjivani Ayurvedic Research Institute": folderImageMap["Sanjivani Ayurvedic Research Institute"],
    "Sri Sri Tattva Panchakarma – Delhi": folderImageMap["Sri Sri Tattva Panchakarma Centre - Delhi"],
};

console.log("Available disk folders:");
for (const [k, v] of Object.entries(folderImageMap)) {
    console.log(`  ${k} -> ${v}`);
}

let fixCount = 0;
for (const [centerName, correctImage] of Object.entries(exactFixes)) {
    if (!correctImage) {
        console.log(`\nWARNING: Still no image for: ${centerName}`);
        continue;
    }
    // Verify file exists
    const fullPath = path.join('public', correctImage);
    if (!fs.existsSync(fullPath)) {
        console.log(`\nWARNING: File not found: ${fullPath}`);
        continue;
    }
    
    const nameEscaped = centerName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(name:\\s*"${nameEscaped}"[\\s\\S]*?image:\\s*")([^"]*)(")`, 'g');
    content = content.replace(regex, (match, before, oldImage, after) => {
        if (oldImage !== correctImage) {
            fixCount++;
            console.log(`\nFixed: ${centerName}`);
            console.log(`  Old: ${oldImage}`);
            console.log(`  New: ${correctImage}`);
        }
        return before + correctImage + after;
    });
}

fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
console.log(`\nTotal images fixed: ${fixCount}`);
