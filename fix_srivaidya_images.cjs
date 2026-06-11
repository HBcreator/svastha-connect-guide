const fs = require('fs');
const path = 'src/pages/centers/SriVaidyaAyurvedaPanchakarma.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace .jpg with .PNG
content = content.replace(/\/TOP cneters\/delhi\/Sri Vaidya Ayurveda Panchakarma\/image 1\.jpg/g, '/TOP cneters/delhi/Sri Vaidya Ayurveda Panchakarma/image 1.PNG');
content = content.replace(/\/TOP cneters\/delhi\/Sri Vaidya Ayurveda Panchakarma\/image 2\.jpg/g, '/TOP cneters/delhi/Sri Vaidya Ayurveda Panchakarma/image 2.PNG');

fs.writeFileSync(path, content);
console.log("Sri Vaidya image extensions fixed!");
