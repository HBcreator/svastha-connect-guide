const fs = require('fs');

const pages = [
  'AryaVaidyaSala.tsx',
  'TarunVedaAyurvedaHospital.tsx',
  'SKKAyurvedaPanchakarma.tsx',
  'AprasuAyurvedicHospital.tsx',
  'SanjeevaniAyurveda.tsx',
  'SriSriAyurvedaPanchakarmaAyurvedaCenter.tsx',
  'KeralaAyurvedaLifeAyurvedaPanchakarmaClinic.tsx',
  'ApolloAyurVAIDHospitalsNehruEnclave.tsx'
];

for (let page of pages) {
  const path = `src/pages/centers/${page}`;
  if (fs.existsSync(path)) {
    const content = fs.readFileSync(path, 'utf8');
    const breadcrumbMatch = content.match(/<ol ref=\{breadcrumbRef\}.*?>[\s\S]*?(<li className="text-primary\/90 font-black shrink-0">)([\s\S]*?)(<\/li>)/);
    if (breadcrumbMatch) {
      console.log(`Page: ${page}\nBreadcrumb: ${breadcrumbMatch[2].trim()}\n`);
    } else {
      console.log(`Page: ${page} - No breadcrumb found\n`);
    }
  } else {
    console.log(`Page: ${page} not found!\n`);
  }
}
