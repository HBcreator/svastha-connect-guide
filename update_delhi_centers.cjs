const fs = require('fs');

const updates = [
  {
    page: 'AryaVaidyaSala.tsx',
    oldSlug: /arya-vaidya-sala-ayurvedic-hospital-and-research-center-east-delhi-india/g,
    newSlug: 'arya-vaidya-sala-ayurvedic-hospital-and-research-center-new-delhi-india',
    oldBreadcrumb: /Arya Vaidya Sala - Ayurvedic Hospital & Research Center Karkardooma East Delhi/g,
    newBreadcrumb: 'Arya Vaidya Sala - Ayurvedic Hospital & Research Center New Delhi'
  },
  {
    page: 'TarunVedaAyurvedaHospital.tsx',
    oldSlug: /tarunveda-ayurveda-hospital-dwarka-new-delhi-india/g,
    newSlug: 'tarunveda-ayurveda-hospital-new-delhi-india',
    oldBreadcrumb: /Tarunveda Ayurveda Hospital Dwarka New Delhi/g,
    newBreadcrumb: 'Tarunveda Ayurveda Hospital New Delhi'
  },
  {
    page: 'SKKAyurvedaPanchakarma.tsx',
    oldSlug: /skk-ayurveda-and-panchakarma-hospital-janak-puri-new-delhi-india/g,
    newSlug: 'skk-ayurveda-and-panchakarma-hospital-new-delhi-india',
    oldBreadcrumb: /SKK Ayurveda Panchakarma and Janak Puri New Delhi/g,
    newBreadcrumb: 'SKK Ayurveda Panchakarma New Delhi'
  },
  {
    page: 'AprasuAyurvedicHospital.tsx',
    oldSlug: /aprasu-ayurvedic-hospital-rohini-north-delhi-india/g,
    newSlug: 'aprasu-ayurvedic-hospital-new-delhi-india',
    oldBreadcrumb: /Aprasu Ayurveda Hospital Rohini North Delhi/g,
    newBreadcrumb: 'Aprasu Ayurveda Hospital New Delhi'
  },
  {
    page: 'SanjeevaniAyurveda.tsx',
    oldSlug: /sanjeevani-ayurveda-hospital-dwarka-new-delhi-india/g,
    newSlug: 'sanjeevani-ayurveda-hospital-new-delhi-india',
    oldBreadcrumb: /Sanjeevani Ayurveda Dwarka New Delhi/g,
    newBreadcrumb: 'Sanjeevani Ayurveda New Delhi'
  },
  {
    page: 'SriSriAyurvedaPanchakarmaAyurvedaCenter.tsx',
    oldSlug: /sri-sri-ayurveda-panchakarma-ayurveda-center-hospital-jhilmil-new-delhi-india/g,
    newSlug: 'sri-sri-ayurveda-panchakarma-ayurveda-center-hospital-new-delhi-india',
    oldBreadcrumb: /Sri Sri Ayurveda Panchakarma Ayurveda Center Jhilmil New Delhi/g,
    newBreadcrumb: 'Sri Sri Ayurveda Panchakarma Ayurveda Center New Delhi'
  },
  {
    page: 'KeralaAyurvedaLifeAyurvedaPanchakarmaClinic.tsx',
    oldSlug: /kerala-ayurveda-life-ayurveda-panchakarma-clinic-hospital-green-park-new-delhi-india/g,
    newSlug: 'kerala-ayurveda-life-ayurveda-panchakarma-clinic-hospital-new-delhi-india',
    oldBreadcrumb: /Kerala Ayurveda Life \(Ayurveda Panchakarma Clinic\) Green Park New Delhi/g,
    newBreadcrumb: 'Kerala Ayurveda Life (Ayurveda Panchakarma Clinic) New Delhi'
  },
  {
    page: 'ApolloAyurVAIDHospitalsNehruEnclave.tsx',
    oldSlug: /apollo-ayurvaid-life-hospital-nehru-enclave-new-delhi-india/g,
    newSlug: 'apollo-ayurvaid-life-hospital-new-delhi-india',
    oldBreadcrumb: /Apollo AyurVAID Hospital Nehru Enclave New Delhi/g,
    newBreadcrumb: 'Apollo AyurVAID Hospital New Delhi'
  }
];

let appPath = 'src/App.tsx';
let cardPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';

let appContent = fs.readFileSync(appPath, 'utf8');
let cardContent = fs.readFileSync(cardPath, 'utf8');

for (let update of updates) {
  // Update App.tsx
  appContent = appContent.replace(update.oldSlug, update.newSlug);
  
  // Update DelhiNorthIndiaRegionCenters.tsx
  cardContent = cardContent.replace(update.oldSlug, update.newSlug);
  
  // Update Breadcrumb in Individual Page
  let pagePath = `src/pages/centers/${update.page}`;
  if (fs.existsSync(pagePath)) {
    let pageContent = fs.readFileSync(pagePath, 'utf8');
    pageContent = pageContent.replace(update.oldBreadcrumb, update.newBreadcrumb);
    fs.writeFileSync(pagePath, pageContent, 'utf8');
  }
}

fs.writeFileSync(appPath, appContent, 'utf8');
fs.writeFileSync(cardPath, cardContent, 'utf8');

console.log("All links and breadcrumbs simplified!");
