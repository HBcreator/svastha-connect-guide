const fs = require('fs');

const filePath = "E:/Demo website/Svastha global site/svastha-connect-guide/src/pages/centers/AushadhgyanAyurveda.tsx";
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Component name
content = content.replace(/SharayuAyurveda/g, "AushadhgyanAyurveda");

// 2. Main titles
content = content.replace(/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai/g, "Aushadhgyan Ayurveda & Wellness Center");
content = content.replace(/Sharayu Ayurveda <br className="hidden md:block" \/> Best Ayurvedic Doctor in Mumbai/g, "Aushadhgyan Ayurveda <br className=\"hidden md:block\" /> & Wellness Center");
content = content.replace(/Sharayu Ayurveda/g, "Aushadhgyan Ayurveda");

// 3. Location and Rating
content = content.replace(/Tardeo/g, "Andheri West");
content = content.replace(/156/g, "97");

// 4. Doctors and info
content = content.replace(/Dr\. Rachana Goragandhi/g, "Expert Vaidyas");

// 5. Image paths
content = content.replace(/\/TOP centers\/mumbai pune nashik\/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai\/image 1\.jpg/g, "/TOP centers/mumbai pune nashik/Aushadhgyan Ayurveda & Wellness Centre/image 1.webp");
content = content.replace(/\/TOP centers\/mumbai pune nashik\/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai\/image 2\.jpg/g, "/TOP centers/mumbai pune nashik/Aushadhgyan Ayurveda & Wellness Centre/image 2.webp");

// 6. Contact and Map
content = content.replace(/Sharayu\+Ayurveda,\+Tardeo,\+Mumbai/g, "Aushadhgyan+Ayurveda,+Andheri+West,+Mumbai");
content = content.replace(/14\+ Years/g, "10+ Years"); // safe fallback

// Write back
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replacements completed successfully.');
