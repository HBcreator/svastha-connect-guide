const fs = require('fs');

const urls = [
  "maharishi-ayurveda-hospital-shalimar-bagh-new-delhi-india",
  "arya-vaidya-sala-research-centre-and-ayurvedia-hospital-karkardooma-east-delhi-india",
  "tarunveda-ayurveda-hospital-dwarka-new-delhi-india",
  "skk-ayurveda-and-panchakarma-hospital-janak-puri-new-delhi-india",
  "aprasu-ayurvedic-hospital-rohini-north-delhi-india",
  "sanjeevani-ayurveda-hospital-dwarka-new-delhi-india",
  "sri-sri-ayurveda-panchakarma-ayurveda-center-hospital-jhilmil-new-delhi-india",
  "kerala-ayurveda-life-ayurveda-panchakarma-clinic-hospital-green-park-new-delhi-india",
  "apollo-ayurvaid-life-hospital-nehru-enclave-new-delhi-india"
];

const appContent = fs.readFileSync('src/App.tsx', 'utf8');

for (const url of urls) {
  // Find <Route path="/centers/url" element={<Component />} />
  const regex = new RegExp(`path=["']/centers/${url}["'][^>]*element=\\{\\s*<([A-Za-z0-9_]+)`, 'i');
  const match = appContent.match(regex);
  
  if (!match) {
    console.log("NOT FOUND IN APP.TSX: " + url);
    continue;
  }
  
  const componentName = match[1];
  
  // Find file path
  const importRegex = new RegExp(`import\\s+${componentName}\\s+from\\s+["'](.*?)["']`);
  const importMatch = appContent.match(importRegex);
  
  let filePath = '';
  if (importMatch) {
    filePath = importMatch[1].replace('./', 'src/').replace('.tsx', '') + '.tsx';
  } else {
    filePath = `src/pages/centers/${componentName}.tsx`;
  }
  
  if (!fs.existsSync(filePath)) {
    console.log("FILE NOT FOUND: " + filePath);
    continue;
  }
  
  let c = fs.readFileSync(filePath, 'utf8');
  
  // Extract H1 text
  const h1Match = c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match) {
    console.log("NO H1 FOUND: " + filePath);
    continue;
  }
  let centerName = h1Match[1].replace(/<[^>]*>?/gm, '').trim(); 
  
  const replaceH2InSection = (sectionId, newHeading) => {
    const sectionRegex = new RegExp(`(id="${sectionId}"[\\s\\S]*?<h2[^>]*>)([\\s\\S]*?)(</h2>)`, 'i');
    c = c.replace(sectionRegex, (match, p1, p2, p3) => {
      const tagPrefix = `<h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>`;
      return p1.replace(/<h2[^>]*>/i, tagPrefix) + `\n${newHeading}\n` + p3;
    });
  };

  replaceH2InSection('about', `                Authentic Ayurvedic Excellence <br className="hidden lg:block" />\n                at ${centerName}`);
  replaceH2InSection('programs', `              Top Ayurveda Programs in <br className="hidden lg:block" /> ${centerName}`);
  replaceH2InSection('why-choose', `                Why Choose <br className="hidden lg:block" /> ${centerName}`);
  replaceH2InSection('process', `              Your Healing Journey at <br className="hidden lg:block" /> ${centerName}`);
  
  fs.writeFileSync(filePath, c);
  console.log("PROCESSED: " + filePath);
}
