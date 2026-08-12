const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// Correct image path mapping for Himalayas centers
// The folder names on disk don't always match what I guessed
const imageFixMap = {
    "Swami Rama Himalayan University Ayurvedic Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Swami Rama Himalayan University/main.webp",
    "Bhole Baba Ayurvedic Hospital & Research Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Bhole Baba Ayurvedic Hospital/main.webp",
    "Mamgain's Ayurveda Clinic & Panchakarma Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Mamgain's Ayurveda Clinic & Panchakarma Center/main.webp",
    "Haritha Ayurveda Academy & Panchakarma Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Haritha Ayurveda Academy & Panchakarma Center/main.webp",
    "KAYAKALP – Himalayan Research Institute of Yoga & Naturopathy": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/KAYAKALP - Himalayan Research Institute of Yoga & Naturopathy/main.webp",
    "Vedic Yoga & Ayurveda Retreat Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vedic Yoga & Ayurveda Retreat Center/main.webp",
    "Vedanjana Yoga & Ayurveda Panchakarma Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vedanjana Yoga & Ayurveda Panchakarma Center/main.webp",
    "Dr. SIBY's Kerala Ayurveda & Panchakarma Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Dr. SIBY's Ayurveda Center/main.webp",
    "Arogyam Panchkarma Center & Ayurvedic Hospital": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/main.webp",
    "Rishikesh Ayurveda Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Rishikesh Ayurveda Center/main.webp",
    "RUDRAMYA – Ayurveda at the Himalayas": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/RUDRAMYA - Ayurveda at the Himalayas/main.webp",
    "Himalaya Sanjeevni Ayurveda": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Himalaya Sanjeevni Ayurveda/main.webp",
    "Naturoville Wellness Resort": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Naturoville Wellness Resort/main.webp",
    "Vihana Retreat": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vihana Retreat/main.webp",
    "Prana Spa & Ayurveda (Holy Prana)": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Prana Spa & Ayurveda (Holy Prana)/main.webp",
    "Moksha Himalaya Spa Resort": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Moksha Himalaya Spa Resort/main.webp",
    "Ayurveda House (Himalayan Ayurveda)": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayurveda House (Himalayan Ayurveda)/main.webp",
    "AyurVAID Kalmatia – Center of Healing, Almora": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/AyurVAID Kalmatia/main.webp",
    "Modi Yoga Retreat": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Modi Yoga Retreat/main.webp",
    "Arogyadham Retreat – Luxury Ayurveda Hotel": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Arogyadham Retreat - Luxury Ayurveda Hotel/main.webp",
    "Ayuskama Ayurveda Clinic & Panchakarma Center": "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Centre/main.webp",
};

let fixCount = 0;
for (const [centerName, correctImage] of Object.entries(imageFixMap)) {
    // Find the center block and fix its image path
    const nameEscaped = centerName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    // Match: name: "CenterName", ... image: "...",
    const regex = new RegExp(`(name:\\s*"${nameEscaped}"[\\s\\S]*?image:\\s*")([^"]*)(")`, 'g');
    const newContent = content.replace(regex, (match, before, oldImage, after) => {
        if (oldImage !== correctImage) {
            fixCount++;
            console.log(`Fixed: ${centerName}`);
            console.log(`  Old: ${oldImage}`);
            console.log(`  New: ${correctImage}`);
        }
        return before + correctImage + after;
    });
    content = newContent;
}

fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
console.log(`\nTotal images fixed: ${fixCount}`);
