const fs = require('fs');
const path = 'src/pages/centers/ChBrahmPrakashAyurvedCharakSansthan.tsx';

let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\/TOP cneters\/delhi\/Ch\. Brahm Prakash Ayurved Charak Sansthan \(Khera Dabar\)\/main\.jpeg/g, '/TOP cneters/delhi/Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)/image 1.jpg');
content = content.replace(/\/TOP cneters\/delhi\/Ch\. Brahm Prakash Ayurved Charak Sansthan \(Khera Dabar\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)/image 2.jpg');

fs.writeFileSync(path, content);
console.log("Image paths fixed successfully!");
