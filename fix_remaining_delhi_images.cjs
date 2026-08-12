const fs = require('fs');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const imageFixMap = {
    "Nirmal Ayurved & Panchkarm Clinic": "/Anchor pages/Delhi/images/12.jpg",
    "Kurias Earth Ayurveda Hospital": "/Anchor pages/Delhi/images/14.jpg",
    "Mirasa Ayurveda": "/Anchor pages/Delhi/images/15.webp",
    "Ayurveda Kendra (Dr. Sudha Asokan)": "/Anchor pages/Delhi/images/16.webp",
    "All India Institute of Ayurveda (AIIA)": "/Anchor pages/Delhi/images/17.webp",
    "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)": "/Anchor pages/Delhi/images/18.webp",
    "Sri Vaidya Ayurveda Panchakarma": "/Anchor pages/Delhi/images/19.jpg",
    "Holy Family Hospital – Ayurveda Department": "/Anchor pages/Delhi/images/21.webp",
    "A & U Tibbia College & Hospital – Panchakarma": "/Anchor pages/Delhi/images/22.webp",
    "Kairali The Ayurvedic Healing Village – Delhi NCR": "/Anchor pages/Delhi/images/23.webp",
    "Sanjivani Ayurvedic Research Institute": "/Anchor pages/Delhi/images/24.jpg",
    "Sri Sri Tattva Panchakarma – Delhi": "/Anchor pages/Delhi/images/25.webp",
};

let fixCount = 0;
for (const [centerName, correctImage] of Object.entries(imageFixMap)) {
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
console.log(`\nTotal remaining images fixed: ${fixCount}`);
