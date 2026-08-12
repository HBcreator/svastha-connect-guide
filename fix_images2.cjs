const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// Now let's get the EXACT correct paths by scanning actual files on disk
const baseDir = 'public/TOP centers/himalayas-rishikesh-uttarakhand-north-east';
const folders = fs.readdirSync(baseDir);

// Build a map of folder -> actual main image file
const folderImageMap = {};
for (const folder of folders) {
    const fullPath = path.join(baseDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        const files = fs.readdirSync(fullPath);
        const mainImg = files.find(f => f.startsWith('main'));
        if (mainImg) {
            folderImageMap[folder] = `/TOP centers/himalayas-rishikesh-uttarakhand-north-east/${folder}/${mainImg}`;
        }
    }
}

console.log("Available folders and their main images:");
for (const [folder, img] of Object.entries(folderImageMap)) {
    console.log(`  ${folder} -> ${img}`);
}

// Exact fix map based on the broken analysis
const fixes = {
    "Ayuskama Ayurveda Clinic & Panchakarma Center": folderImageMap["Ayuskama Ayurveda Clinic & Panchakarma Centre"],
    "KAYAKALP – Himalayan Research Institute of Yoga & Naturopathy": folderImageMap["KAYAKALP – Himalayan Research Institute of Yoga & Naturopathy"] || folderImageMap["KAYAKALP - Himalayan Research Institute of Yoga & Naturopathy"],
    "Vedic Yoga & Ayurveda Retreat Center": folderImageMap["Vedic Yoga & Ayurveda Retreat Center"],
    "Dr. SIBY's Kerala Ayurveda & Panchakarma Center": folderImageMap["Dr. SIBY's Ayurveda Center"],
    "Arogyam Panchkarma Center & Ayurvedic Hospital": folderImageMap["Arogyam Panchkarma Center & Ayurvedic Hospital"],
    "Rishikesh Ayurveda Center": folderImageMap["Rishikesh Ayurveda Center"],
    "RUDRAMYA – Ayurveda at the Himalayas": folderImageMap["RUDRAMYA – Ayurveda at the Himalayas"] || folderImageMap["RUDRAMYA - Ayurveda at the Himalayas"],
    "Naturoville Wellness Resort": folderImageMap["Naturoville Wellness Resort"],
    "Vihana Retreat": folderImageMap["Vihana Retreat"],
    "Ayurveda House (Himalayan Ayurveda)": folderImageMap["Ayurveda House (Himalayan Ayurveda)"],
    "Arogyadham Retreat – Luxury Ayurveda Hotel": folderImageMap["Arogyadham Retreat – Luxury Ayurveda Hotel"] || folderImageMap["Arogyadham Retreat - Luxury Ayurveda Hotel"],
};

let fixCount = 0;
for (const [centerName, correctImage] of Object.entries(fixes)) {
    if (!correctImage) {
        console.log(`\nWARNING: No image found for ${centerName}`);
        continue;
    }
    const nameEscaped = centerName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(name:\\s*"${nameEscaped}"[\\s\\S]*?image:\\s*")([^"]*)(")`, 'g');
    const newContent = content.replace(regex, (match, before, oldImage, after) => {
        if (oldImage !== correctImage) {
            fixCount++;
            console.log(`\nFixed: ${centerName}`);
            console.log(`  Old: ${oldImage}`);
            console.log(`  New: ${correctImage}`);
        }
        return before + correctImage + after;
    });
    content = newContent;
}

fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
console.log(`\n\nTotal images fixed: ${fixCount}`);
