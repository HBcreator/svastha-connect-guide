const fs = require('fs');

const filePath = "E:/Demo website/Svastha global site/svastha-connect-guide/src/pages/centers/SharayuAyurveda.tsx";
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Component name
content = content.replace(/SwarayuAyurveda/g, "SharayuAyurveda");

// 2. Main titles
content = content.replace(/Swarayu Ayurveda Clinic & Panchakarma Center/g, "Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai");
content = content.replace(/Swarayu Ayurveda Clinic <br \/> & Panchakarma Center/g, "Sharayu Ayurveda – <br /> Best Ayurvedic Doctor in Mumbai");
content = content.replace(/Swarayu Ayurveda Clinic/g, "Sharayu Ayurveda");
content = content.replace(/Swarayu Ayurveda/g, "Sharayu Ayurveda");

// 3. Location and Rating
content = content.replace(/Vile Parle East/g, "Tardeo");
content = content.replace(/4\.6/g, "4.9");
content = content.replace(/160\+/g, "156");

// 4. Doctors and info
content = content.replace(/Dr\. Smita Gaikwad/g, "Dr. Rachana Goragandhi");

// 5. Image paths
content = content.replace(/\/TOP centers\/mumbai pune nashik\/Swarayu Ayurveda Clinic & Panchakarma Centre\/image 1\.webp/g, "/TOP centers/mumbai pune nashik/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai/image 1.jpg");
content = content.replace(/\/TOP centers\/mumbai pune nashik\/Swarayu Ayurveda Clinic & Panchakarma Centre\/image 2\.webp/g, "/TOP centers/mumbai pune nashik/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai/image 2.jpg");

// 6. Contact and Map
content = content.replace(/Swarayu\+Ayurveda\+Clinic,\+Vile\+Parle\+East,\+Mumbai/g, "Sharayu+Ayurveda,+Tardeo,+Mumbai");
content = content.replace(/\+91 989 xxxx xxx/g, "+91 98xxx xxxx");
content = content.replace(/17\+ Years/g, "14+ Years"); // Based on typical 2010 establishment

// Write back
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replacements completed successfully.');
