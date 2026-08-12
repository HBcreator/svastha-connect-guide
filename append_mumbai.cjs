const fs = require('fs');
const path = require('path');

const userList = [
    { name: "Bharati Ayurved Hospital", city: "Pune, Maharashtra, India", desc: "A prestigious Ayurvedic teaching hospital in Pune offering classical treatments, advanced Panchakarma, and holistic wellness programs integrated with comprehensive medical care." },
    { name: "Sukhayu Ayurveda & Panchakarma", city: "Pune, Maharashtra, India", desc: "A dedicated Ayurvedic clinic in Pune specializing in authentic Panchakarma therapies, herbal treatments, and personalized lifestyle counseling for chronic conditions." },
    { name: "Swarayu Ayurveda Clinic & Panchakarma", city: "Pune, Maharashtra, India", desc: "An expert Ayurvedic center in Pune providing comprehensive wellness solutions, classical detox therapies, and specialized care for metabolic and joint disorders." },
    { name: "Ayushakti Ayurved Health", city: "Mumbai, Maharashtra, India", desc: "A globally recognized Ayurvedic brand in Mumbai known for its proven pulse reading (Nadi Pariksha), deep detox programs, and effective natural remedies for chronic ailments." },
    { name: "Karma Ayurveda Mumbai", city: "Mumbai, Maharashtra, India", desc: "The Mumbai branch of the renowned Karma Ayurveda network, specializing in non-surgical Ayurvedic kidney care, chronic disease management, and customized herbal protocols." },
    { name: "SRIAAS – SR Institute of Advanced Ayurvedic Sciences", city: "Mumbai, Maharashtra, India", desc: "An advanced Ayurvedic institute in Mumbai offering research-backed treatments, classical Panchakarma, and specialized care for lifestyle and neurological disorders." },
    { name: "Thapovan Ayurveda", city: "Mumbai, Maharashtra, India", desc: "A serene Kerala Ayurveda center in Mumbai delivering authentic Panchakarma detox, stress management therapies, and traditional rejuvenation programs." },
    { name: "Somaiya Ayurvihar – Panchakarma", city: "Mumbai, Maharashtra, India", desc: "An institutional Ayurvedic center in Mumbai offering traditional Panchakarma therapies, therapeutic massages, and holistic healthcare supported by academic excellence." },
    { name: "Prof. K.R. Kohli's Ayurveda & Panchakarma (KAPC)", city: "Mumbai, Maharashtra, India", desc: "Led by eminent Ayurvedic physician Prof. K.R. Kohli, this Mumbai center offers expert consultations, classical Panchakarma, and specialized treatments for complex diseases." },
    { name: "Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai", city: "Mumbai, Maharashtra, India", desc: "A highly-rated Ayurvedic clinic in Mumbai providing personalized consultations, herbal medicine, and traditional healing therapies for holistic well-being." },
    { name: "Aushadhgyan Ayurveda & Wellness", city: "Mumbai, Maharashtra, India", desc: "A comprehensive Ayurvedic wellness center in Mumbai combining traditional herbal medicine with lifestyle modifications and classical Panchakarma treatments." },
    { name: "Aayushree Ayurvedic – Polyclinic & Panchakarma", city: "Mumbai, Maharashtra, India", desc: "A well-equipped Ayurvedic polyclinic in Mumbai offering multi-specialty consultations, Panchakarma therapies, and preventive healthcare programs." },
    { name: "Herbal Hills Ayurvedic Wellness Center", city: "Mumbai, Maharashtra, India", desc: "An integrated Ayurvedic wellness center in Mumbai providing herbal therapies, detox programs, and lifestyle consultations for natural healing." },
    { name: "Pravaayu Ayurveda & Panchkarma Clinic", city: "Mumbai, Maharashtra, India", desc: "A specialized clinic in Mumbai offering authentic Panchakarma procedures, customized herbal treatments, and holistic care for chronic diseases." },
    { name: "Aradhana Ayurveda Clinic & Panchakarma", city: "Mumbai, Maharashtra, India", desc: "A trusted Ayurvedic clinic in Mumbai focusing on root-cause healing through traditional Panchakarma therapies, diet counseling, and herbal medicine." },
    { name: "Divyamrut Ayurcare", city: "Mumbai, Maharashtra, India", desc: "A dedicated Ayurvedic center in Mumbai providing specialized care for joint pain, digestive disorders, and metabolic conditions using classical therapies." },
    { name: "Kerala Ayurveda Multi Speciality Clinic", city: "Mumbai, Maharashtra, India", desc: "A Kerala-style multi-specialty Ayurvedic clinic in Mumbai bringing authentic South Indian healing traditions, Panchakarma, and herbal therapies to the city." },
    { name: "Ayush Ayurved Panchakarma Center", city: "Nashik, Maharashtra, India", desc: "A renowned Ayurvedic center in Nashik offering comprehensive Panchakarma therapies, detox programs, and traditional healthcare solutions in a serene environment." },
    { name: "Shree Ayurved & Panchakarma Hospital", city: "Pune, Maharashtra, India", desc: "A comprehensive Ayurvedic hospital in Pune offering inpatient facilities, classical Panchakarma, and specialized treatments for chronic lifestyle disorders." },
    { name: "Aatreya Ayurved & Panchakarma Clinic", city: "Pune, Maharashtra, India", desc: "A dedicated clinic in Pune offering personalized Ayurvedic consultations, authentic Panchakarma therapies, and holistic wellness programs." },
    { name: "Ashtang Ayurveda Super Multi Speciality Hospital", city: "Pune, Maharashtra, India", desc: "A multi-specialty Ayurvedic hospital in Pune integrating traditional healing wisdom with modern diagnostic facilities for comprehensive patient care." },
    { name: "Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic", city: "Nashik, Maharashtra, India", desc: "An authentic Kerala Panchakarma clinic in Nashik offering traditional detox therapies, stress management, and rejuvenation programs." },
    { name: "Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center", city: "Nashik, Maharashtra, India", desc: "A specialized center in Nashik offering classical Panchakarma and traditional Garbh Sanskar (prenatal care) programs for holistic maternal and child wellness." }
];

// Step 1: Scan images
const baseDir = 'public/TOP centers/mumbai pune nashik';
const folders = fs.readdirSync(baseDir);
const folderImageMap = {};
for (const folder of folders) {
    const fullPath = path.join(baseDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        const files = fs.readdirSync(fullPath);
        const mainImg = files.find(f => f.startsWith('main'));
        if (mainImg) {
            folderImageMap[folder.toLowerCase()] = `/TOP centers/mumbai pune nashik/${folder}/${mainImg}`;
        }
    }
}

function findImage(centerName) {
    const nameClean = centerName.toLowerCase().replace(/[–—'’]/g, '-').replace(/ & /g, ' and ');
    
    // Direct or contains match
    for (const [folder, img] of Object.entries(folderImageMap)) {
        if (folder.includes(nameClean.substring(0, 15)) || nameClean.includes(folder.substring(0, 15))) {
            return img;
        }
    }
    return "/TOP centers/mumbai pune nashik/placeholder.webp";
}

// Step 2: Get exact slugs from App.tsx
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
function findSlug(centerName) {
    const lines = appContent.split('\n');
    const nameClean = centerName.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const line of lines) {
        if (line.includes('<Route path="/centers/')) {
            const pathMatch = line.match(/path="\/centers\/([^"]+)"/);
            const componentMatch = line.match(/element={<([^ ]+) \/>}/);
            
            if (pathMatch && componentMatch) {
                const compSimple = componentMatch[1].toLowerCase();
                if (compSimple.includes(nameClean.substring(0, 10)) || nameClean.includes(compSimple.substring(0, 10))) {
                    return pathMatch[1];
                }
            }
        }
    }
    // Hardcoded fallbacks if fuzzy fails
    if (centerName.includes("Ayushakti")) return "ayushakti-ayurved-health-center-mumbai-india";
    if (centerName.includes("Karma Ayurveda Mumbai")) return "karma-ayurveda-clinic-mumbai-india";
    if (centerName.includes("Prof. K.R. Kohli")) return "prof-kr-kohlis-ayurveda-and-panchakarma-center-mumbai-india";
    if (centerName.includes("Sharayu")) return "sharayu-ayurveda-best-ayurvedic-doctor-in-mumbai-india";
    if (centerName.includes("SRIAAS")) return "sriaas-sr-institute-of-advanced-ayurvedic-sciences-mumbai-india";
    if (centerName.includes("Somaiya")) return "somaiya-ayurvihar-panchakarma-center-mumbai-india";
    if (centerName.includes("Thapovan")) return "thapovan-ayurveda-center-mumbai-india";
    if (centerName.includes("Bharati")) return "bharati-ayurved-hospital-pune-india";
    if (centerName.includes("Swarayu")) return "swarayu-ayurveda-clinic-and-panchakarma-center-pune-india";
    if (centerName.includes("Sukhayu")) return "sukhayu-ayurveda-and-panchakarma-center-pune-india";
    if (centerName.includes("Kerala Ayurveda Multi")) return "kerala-ayurveda-clinic-mumbai-india";
    if (centerName.includes("Aushadhgyan")) return "aushadhgyan-ayurveda-and-wellness-center-mumbai-india";
    if (centerName.includes("Aayushree")) return "aayushree-ayurvedic-polyclinic-and-panchakarma-center-mumbai-india";
    if (centerName.includes("Herbal Hills")) return "herbal-hills-ayurveda-mumbai-india";
    if (centerName.includes("Pravaayu")) return "pravaayu-ayurveda-mumbai-india";
    if (centerName.includes("Aradhana")) return "aradhana-ayurveda-mumbai-india";
    if (centerName.includes("Divyamrut")) return "divyamrut-ayurcare-mumbai-india";
    if (centerName.includes("Ayush Ayurved")) return "ayush-ayurved-panchakarma-center-nashik-india";
    if (centerName.includes("Shree Ayurved &")) return "shree-ayurved-hospital-pune-india";
    if (centerName.includes("Aatreya")) return "aatreya-ayurved-clinic-pune-india";
    if (centerName.includes("Ashtang")) return "ashtang-ayurveda-hospital-pune-india";
    if (centerName.includes("Ayushman Bhava")) return "ayushman-bhava-ayurveda-clinic-nashik-india";
    if (centerName.includes("Shree Vishwavallabh")) return "shree-vishwavallabh-ayurvedic-center-nashik-india";

    return "unknown-slug-mumbai";
}

// Step 3: Append to TopCenters.tsx
let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// Ensure we don't duplicate
const existingNames = [];
const nameRegex = /name:\s*["']([^"']+)["']/g;
let match;
while ((match = nameRegex.exec(content)) !== null) {
    existingNames.push(match[1]);
}

const missing = userList.filter(c => !existingNames.includes(c.name));

let blocks = [];
for (const c of missing) {
    let img = findImage(c.name);
    let slug = findSlug(c.name);
    const safeDesc = c.desc.replace(/"/g, '\\"');
    
    blocks.push(`    {
      name: "${c.name}",
      city: "${c.city}",
      description: "${safeDesc}",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "${img}",
      slug: "${slug}",
    },`);
}

const appendString = '\n    // MUMBAI, PUNE, NASHIK & WEST INDIA SUB CENTERS\n' + blocks.join('\n') + '\n';

const nextLineIdx = content.indexOf('const staticTreatments = [');
const arrayEndIdx = content.lastIndexOf('];', nextLineIdx);

if (arrayEndIdx !== -1) {
    const newContent = content.substring(0, arrayEndIdx) + appendString + content.substring(arrayEndIdx);
    fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
    console.log(`\nSuccessfully appended ${missing.length} Mumbai/Pune/Nashik sub-centers!`);
} else {
    console.log("Failed to find insertion point.");
}
