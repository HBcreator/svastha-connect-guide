const fs = require('fs');
let content = fs.readFileSync('src/pages/centers/AllIndiaInstituteOfAyurveda.tsx', 'utf8');

// Fix paths
content = content.replace(/\/TOP cneters\/delhi\/All India Institute of Ayurveda \(AIIA\) \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/All India Institute of Ayurveda (AIIA)/image 1.webp');
content = content.replace(/\/TOP cneters\/delhi\/All India Institute of Ayurveda \(AIIA\) \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/All India Institute of Ayurveda (AIIA)/image 2.webp');

fs.writeFileSync('src/pages/centers/AllIndiaInstituteOfAyurveda.tsx', content);
