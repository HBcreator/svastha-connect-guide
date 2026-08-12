const fs = require('fs');
const path = require('path');

// Step 1: Scan disk for actual image files in Delhi folder
const baseDir = 'public/TOP centers/delhi';
const folders = fs.readdirSync(baseDir);
const folderImageMap = {};
for (const folder of folders) {
    const fullPath = path.join(baseDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        const files = fs.readdirSync(fullPath);
        const mainImg = files.find(f => f.startsWith('main'));
        if (mainImg) {
            folderImageMap[folder.toLowerCase()] = `/TOP centers/delhi/${folder}/${mainImg}`;
        }
    }
}

// Helper to find image by fuzzy folder name match
function findImage(centerName) {
    const nameClean = centerName.toLowerCase().replace(/[–—]/g, '-');
    for (const [folder, img] of Object.entries(folderImageMap)) {
        if (folder.includes(nameClean.substring(0, 15)) || nameClean.includes(folder.substring(0, 15))) {
            return img;
        }
    }
    // Try shorter match
    for (const [folder, img] of Object.entries(folderImageMap)) {
        if (folder.includes(nameClean.substring(0, 10)) || nameClean.includes(folder.substring(0, 10))) {
            return img;
        }
    }
    return null;
}

// Step 2: Define all 25 Delhi centers with routes from App.tsx
const delhiCenters = [
    { name: "Maharishi Ayurveda Hospital", city: "New Delhi, India", slug: "maharishi-ayurveda-hospital-new-delhi-india", desc: "A premier Ayurvedic hospital in Delhi offering authentic Maharishi Ayurveda treatments including Panchakarma, pulse diagnosis, and holistic wellness programs rooted in Vedic traditions." },
    { name: "Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)", city: "New Delhi, India", slug: "arya-vaidya-sala-delhi-ncr-india", desc: "The Delhi branch of the legendary Kottakkal Arya Vaidya Sala, offering authentic Kerala Ayurvedic treatments, Panchakarma therapies, and classical herbal formulations in the capital city." },
    { name: "TarunVeda Ayurveda Hospital", city: "New Delhi, India", slug: "tarunveda-ayurveda-hospital-new-delhi-india", desc: "A dedicated Ayurvedic hospital in Delhi specializing in classical treatments, Panchakarma detox, chronic disease management, and personalized herbal therapy protocols." },
    { name: "SKK Ayurveda & Panchakarma", city: "New Delhi, India", slug: "skk-ayurveda-and-panchakarma-hospital-new-delhi-india", desc: "A specialized Ayurveda and Panchakarma center in Delhi offering comprehensive detox programs, chronic disease treatments, and rejuvenation therapies guided by experienced practitioners." },
    { name: "Aprasu Ayurvedic Hospital", city: "New Delhi, India", slug: "aprasu-ayurvedic-hospital-north-delhi-india", desc: "A well-established Ayurvedic hospital in North Delhi providing classical Ayurvedic treatments, Panchakarma therapies, and holistic healthcare solutions for chronic and acute conditions." },
    { name: "Sanjeevani Ayurveda", city: "New Delhi, India", slug: "sanjeevani-ayurveda-hospital-new-delhi-india", desc: "A trusted Ayurvedic healthcare center in Delhi offering traditional healing therapies, Panchakarma treatments, and wellness programs designed for urban lifestyle disorders." },
    { name: "Sri Sri Ayurveda Panchakarma Ayurveda Center", city: "New Delhi, India", slug: "sri-sri-ayurveda-panchakarma-center-new-delhi-india", desc: "Founded on the principles of Sri Sri Ravi Shankar, this center offers authentic Panchakarma detox, Ayurvedic consultations, and holistic wellness programs in a serene environment." },
    { name: "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)", city: "New Delhi, India", slug: "kerala-ayurveda-life-panchakarma-clinic-new-delhi-india", desc: "An authentic Kerala-style Ayurvedic clinic in Delhi offering traditional Panchakarma treatments, herbal therapies, and wellness programs by experienced Kerala Ayurveda practitioners." },
    { name: "Apollo AyurVAID Hospitals (Nehru Enclave)", city: "New Delhi, India", slug: "apollo-ayurvaid-life-hospital-new-delhi-india", desc: "Part of the Apollo healthcare network, this AyurVAID center offers evidence-based classical Ayurveda treatments, Panchakarma therapies, and integrated wellness programs." },
    { name: "Aasha Ayurveda", city: "New Delhi, India", slug: "aasha-ayurveda-center-new-delhi-india", desc: "A compassionate Ayurvedic center in Delhi offering personalized treatments, Panchakarma detox programs, and natural healing solutions for a wide range of health conditions." },
    { name: "Karma Ayurveda Hospital", city: "New Delhi, India", slug: "karma-ayurveda-hospital-new-delhi-india", desc: "A specialized Ayurvedic hospital in Delhi focusing on kidney care, chronic disease management, and traditional Ayurvedic treatments with a modern clinical approach." },
    { name: "Nirmal Ayurved & Panchkarm Clinic", city: "New Delhi, India", slug: "nirmal-ayurved-panchkarm-clinic-hospital-new-delhi-india", desc: "A dedicated Ayurvedic clinic in Delhi offering authentic Panchakarma treatments, herbal medicine consultations, and holistic wellness programs for chronic conditions." },
    { name: "AyurNava Kerala Ayurveda Hospital", city: "New Delhi, India", slug: "ayurnava-kerala-ayurveda-hospital-new-delhi-india", desc: "A Kerala-style Ayurveda hospital in Delhi bringing authentic South Indian healing traditions to North India, specializing in Panchakarma and traditional herbal therapies." },
    { name: "Kurias Earth Ayurveda Hospital", city: "New Delhi, India", slug: "kurias-earth-ayurveda-hospital-new-delhi-india", desc: "An Ayurvedic hospital in Delhi combining earth-based natural healing with classical Ayurvedic treatments, offering Panchakarma, herbal therapies, and wellness consultations." },
    { name: "Mirasa Ayurveda", city: "New Delhi, India", slug: "mirasa-ayurveda-hospital-new-delhi-india", desc: "A modern Ayurvedic center in Delhi offering comprehensive treatments, Panchakarma detox, skin and hair care therapies, and personalized wellness programs." },
    { name: "Ayurveda Kendra (Dr. Sudha Asokan)", city: "New Delhi, India", slug: "ayurveda-kendra-hospital-delhi-india", desc: "A renowned Ayurvedic clinic led by Dr. Sudha Asokan, offering expert consultations, classical Ayurvedic treatments, Panchakarma therapies, and holistic health programs in Delhi." },
    { name: "All India Institute of Ayurveda (AIIA)", city: "New Delhi, India", slug: "all-india-institute-of-ayurveda-hospital-new-delhi-india", desc: "India's apex Ayurvedic institution under the Ministry of AYUSH, offering world-class Ayurvedic treatments, research-driven therapies, and Panchakarma programs with government-backed excellence." },
    { name: "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)", city: "New Delhi, India", slug: "ch-brahm-prakash-ayurved-charak-sansthan-hospital-new-delhi-india", desc: "A prestigious government Ayurvedic college and hospital in Delhi offering affordable classical Ayurvedic treatments, Panchakarma, and holistic healthcare with academic excellence." },
    { name: "Sri Vaidya Ayurveda Panchakarma", city: "New Delhi, India", slug: "sri-vaidya-ayurveda-panchkarma-hospital-new-delhi-india", desc: "A trusted Ayurvedic Panchakarma center in Delhi offering authentic detox treatments, herbal consultations, and personalized wellness programs guided by experienced Vaidyas." },
    { name: "Kerala Ayurveda Wellness Clinic – East of Kailash", city: "New Delhi, India", slug: "kerala-ayurveda-wellness-center-new-delhi-india", desc: "An authentic Kerala Ayurveda wellness clinic in East of Kailash, Delhi, offering traditional Panchakarma treatments, therapeutic massages, and holistic healing programs." },
    { name: "Holy Family Hospital – Ayurveda Department", city: "New Delhi, India", slug: "holy-family-ayurveda-hospital-new-delhi-india", desc: "The Ayurveda department of the renowned Holy Family Hospital in Delhi, offering integrated Ayurvedic treatments alongside modern medical care for comprehensive patient wellness." },
    { name: "A & U Tibbia College & Hospital – Panchakarma", city: "New Delhi, India", slug: "a-and-u-tibbia-college-hospital-new-delhi-india", desc: "A historic Unani and Ayurvedic college-hospital in Delhi offering classical Panchakarma treatments, Ayurvedic consultations, and traditional healing therapies at affordable rates." },
    { name: "Kairali The Ayurvedic Healing Village – Delhi NCR", city: "New Delhi, India", slug: "kairali-the-ayurvedic-healing-village-center-new-delhi-india", desc: "The Delhi NCR branch of the famous Kairali Ayurvedic Healing Village, offering premium Panchakarma treatments, wellness packages, and authentic Kerala Ayurvedic therapies." },
    { name: "Sanjivani Ayurvedic Research Institute", city: "Delhi NCR, India", slug: "sanjivani-ayurveda-center-delhi-ncr-india", desc: "A research-oriented Ayurvedic institute in Delhi NCR offering evidence-based traditional treatments, Panchakarma therapies, and clinical research-driven wellness programs." },
    { name: "Sri Sri Tattva Panchakarma – Delhi", city: "New Delhi, India", slug: "sri-sri-tattva-panchkarma-center-new-delhi-india", desc: "A Sri Sri Tattva branded Panchakarma center in Delhi offering authentic Ayurvedic detox treatments, stress management programs, and holistic wellness therapies." },
];

// Step 3: Match each center to its correct image
let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// Check which are already in TopCenters
const existingNames = [];
const nameRegex = /name:\s*["']([^"']+)["']/g;
let match;
while ((match = nameRegex.exec(content)) !== null) {
    existingNames.push(match[1]);
}

const missing = delhiCenters.filter(c => !existingNames.includes(c.name));
console.log(`Already in TopCenters: ${delhiCenters.length - missing.length}`);
console.log(`Missing (will be added): ${missing.length}`);

// Step 4: Build blocks with verified images
let blocks = [];
let imageIssues = 0;
for (const c of missing) {
    let img = findImage(c.name);
    if (!img) {
        console.log(`WARNING: No image found for: ${c.name}`);
        img = "/TOP centers/delhi/placeholder.jpg";
        imageIssues++;
    } else {
        // Verify the file exists
        const fullPath = path.join('public', img);
        if (!fs.existsSync(fullPath)) {
            console.log(`WARNING: Image file missing on disk for: ${c.name} -> ${img}`);
            imageIssues++;
        }
    }
    
    const safeDesc = c.desc.replace(/"/g, '\\"');
    blocks.push(`    {
      name: "${c.name}",
      city: "${c.city}",
      description: "${safeDesc}",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "${img}",
      slug: "${c.slug}",
    },`);
}

const appendString = '\n    // DELHI & NORTH INDIA SUB CENTERS\n' + blocks.join('\n') + '\n';

// Find insertion point
const nextLineIdx = content.indexOf('const staticTreatments = [');
const arrayEndIdx = content.lastIndexOf('];', nextLineIdx);

if (arrayEndIdx !== -1) {
    const newContent = content.substring(0, arrayEndIdx) + appendString + content.substring(arrayEndIdx);
    fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
    console.log(`\nSuccessfully appended ${missing.length} Delhi sub-centers!`);
    if (imageIssues > 0) {
        console.log(`WARNING: ${imageIssues} image issues found. Run check_images.cjs to verify.`);
    }
} else {
    console.log("Failed to find insertion point.");
}
