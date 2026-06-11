const fs = require('fs');

const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const cbpacsPath = 'src/pages/centers/ChBrahmPrakashAyurvedCharakSansthan.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'ChBrahmPrakashAyurvedCharakSansthan');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Ch. Brahm Prakash Ayurved Charak Sansthan');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Ch. Brahm Prakash Ayurved Charak Sansthan');
content = content.replace(/Apollo AyurVAID/g, 'CBPACS');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Khera Dabar, New Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Khera Dabar');
content = content.replace(/4\.3/g, '4.4');
content = content.replace(/170 Reviews/g, '1,500+ Reviews');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)/image 1.jpg');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)/image 2.jpg');
content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Autonomous Government Ayurvedic Medical College and Hospital | 200-Bed Facility');

// Note: This script does a basic skeleton replacement. I will refine the text content via replace_file_content next.
fs.writeFileSync(cbpacsPath, content);
console.log('Copied and replaced!');
