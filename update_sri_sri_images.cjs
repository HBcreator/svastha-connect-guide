const fs = require('fs');
const path = 'src/pages/centers/SriSriAyurvedaPanchakarmaAyurvedaCenter.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\/TOP cneters\/delhi\/Sri Sri Ayurveda Panchakarma Ayurveda Center\/main\.jpg/g, '/TOP cneters/delhi/Sri Sri Ayurveda Panchakarma Ayurveda Center/main.webp');
content = content.replace(/\/TOP cneters\/delhi\/Sri Sri Ayurveda Panchakarma Ayurveda Center\/secondary\.jpg/g, '/TOP cneters/delhi/Sri Sri Ayurveda Panchakarma Ayurveda Center/secondary.webp');

fs.writeFileSync(path, content, 'utf8');
console.log("Updated extensions!");
