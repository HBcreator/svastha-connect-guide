const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const baseDir = 'public/TOP centers/mumbai pune nashik';
const folders = fs.readdirSync(baseDir);

// Build map: folder name -> full image path with actual extension
const folderImageMap = {};
for (const folder of folders) {
    const fullPath = path.join(baseDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        const files = fs.readdirSync(fullPath);
        const mainImg = files.find(f => f.startsWith('main'));
        if (mainImg) {
            folderImageMap[folder] = `/TOP centers/mumbai pune nashik/${folder}/${mainImg}`;
        }
    }
}

// Exact manual mapping for the 23 Mumbai centers
const exactFixes = {
    "Aatreya Ayurved & Panchakarma Clinic": folderImageMap["Aatreya Ayurved & Panchakarma Clinic"],
    "Aayushree Ayurvedic – Polyclinic & Panchakarma": folderImageMap["Aayushree Ayurvedic - Polyclinic & Panchakarma Center"],
    "Aradhana Ayurveda Clinic & Panchakarma": folderImageMap["Aradhana Ayurveda Clinic & Panchakarma Center"],
    "Ashtang Ayurveda Super Multi Speciality Hospital": folderImageMap["Ashtang Ayurveda Super Multi Speciality Hospital"],
    "Aushadhgyan Ayurveda & Wellness": folderImageMap["Aushadhgyan Ayurveda & Wellness Centre"],
    "Ayush Ayurved Panchakarma Center": folderImageMap["Ayush Ayurved Panchakarma Center"],
    "Ayushakti Ayurved Health": folderImageMap["Ayushakti Ayurved Health Centre"],
    "Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic": folderImageMap["Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic"],
    "Bharati Ayurved Hospital": folderImageMap["Bharati Ayurved Hospital"],
    "Divyamrut Ayurcare": folderImageMap["Divyamrut Ayurcare"],
    "Herbal Hills Ayurvedic Wellness Center": folderImageMap["Herbal Hills Ayurvedic Wellness Center"],
    "Karma Ayurveda Mumbai": folderImageMap["karma ayurveda mumbai"],
    "Kerala Ayurveda Multi Speciality Clinic": folderImageMap["Kerala Ayurveda Multi Speciality Clinic"],
    "Pravaayu Ayurveda & Panchkarma Clinic": folderImageMap["Pravaayu Ayurveda & Panchkarma Clinic"],
    "Prof. K.R. Kohli's Ayurveda & Panchakarma (KAPC)": folderImageMap["Prof. K.R. Kohli's Ayurveda & Panchakarma Centre (KAPC)"],
    "Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai": folderImageMap["Sharayu Ayurveda - Best Ayurvedic Doctor in Mumbai"],
    "Shree Ayurved & Panchakarma Hospital": folderImageMap["Shree Ayurved & Panchakarma Hospital"],
    "Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center": folderImageMap["Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center"],
    "Somaiya Ayurvihar – Panchakarma": folderImageMap["Somaiya Ayurvihar - Panchakarma Centre"],
    "SRIAAS – SR Institute of Advanced Ayurvedic Sciences": folderImageMap["SRIAAS - SR Institute of Advanced Ayurvedic Sciences"],
    "Sukhayu Ayurveda & Panchakarma": folderImageMap["Sukhayu Ayurveda & Panchakarma Centre"],
    "Swarayu Ayurveda Clinic & Panchakarma": folderImageMap["Swarayu Ayurveda Clinic & Panchakarma Centre"],
    "Thapovan Ayurveda": folderImageMap["Thapovan Ayurveda"],
};

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
            console.log(`Fixed: ${centerName}`);
            console.log(`  Old: ${oldImage}`);
            console.log(`  New: ${correctImage}`);
        }
        return before + correctImage + after;
    });
}

fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
console.log(`\nTotal images fixed: ${fixCount}`);
