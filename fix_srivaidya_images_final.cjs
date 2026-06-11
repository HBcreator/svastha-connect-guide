const fs = require('fs');
const path = 'src/pages/centers/SriVaidyaAyurvedaPanchakarma.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace wrong paths with correct ones
content = content.replace(/\/TOP cneters\/delhi\/Sri Vaidya Ayurveda Panchakarma \(Vasant Kunj\)\/main\.jpeg/g, '/TOP cneters/delhi/Sri Vaidya Ayurveda Panchakarma/image 1.PNG');
content = content.replace(/\/TOP cneters\/delhi\/Sri Vaidya Ayurveda Panchakarma \(Vasant Kunj\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Sri Vaidya Ayurveda Panchakarma/image 2.PNG');

fs.writeFileSync(path, content);
console.log("Sri Vaidya image paths completely fixed!");
