const fs = require('fs');

const urls = [
  "sri-sri-ayurveda-hospital-bengaluru-india",
  "adyant-ayurveda-hospital-bengaluru-india",
  "vydehi-ayurveda-hospital-bengaluru-india",
  "keva-ayurveda-hospital-bengaluru-india",
  "jayadev-memorial-rashtrotthana-ayurveda-hospital-bengaluru-india",
  "healing-earth-ayurveda-hospital-bengaluru-india",
  "adivaidyam-ayurveda-hospital-bengaluru-india",
  "iaim-healthcare-center-hospital-bengaluru-india",
  "hlc-ayurveda-and-nature-cure-hospital-bengaluru-india",
  "praana-vaidya-ayurvedic-hospital-bengaluru-india",
  "ramaiah-indic-specialty-ayurveda-hospital-bengaluru-india",
  "ayurkutira-panchakarma-center-hospital-bengaluru-india",
  "tatkshana-ayurveda-hospital-bengaluru-india",
  "varaprada-ayurvedic-center-hospital-bengaluru-india",
  "sd-ayurveda-mane-holistic-wellness-center-hospital-bengaluru-india",
  "ayushman-ayurveda-hospital-bengaluru-india",
  "travancore-ayurveda-hospital-bengaluru-india",
  "kottakkal-arya-vaidya-sala-hospital-bengaluru-india",
  "ayurillam-hospital-bengaluru-india",
  "dhanwanthralaya-ayurveda-hospital-bengaluru-india"
];

const appContent = fs.readFileSync('src/App.tsx', 'utf8');

for (const url of urls) {
  // Try exact match first
  let regex = new RegExp(`path=["']/centers/${url}["'][^>]*element=\\{\\s*<([A-Za-z0-9_]+)`, 'i');
  let match = appContent.match(regex);
  
  if (!match) {
    // some bangalore links might be chennai links in App.tsx (from previous history, some were chennai-india instead of bengaluru-india).
    // Let's do a loose match based on the beginning of the slug
    const looseUrl = url.split('-bengaluru-india')[0].split('-hospital')[0];
    regex = new RegExp(`path=["']/centers/${looseUrl}[^"']*["'][^>]*element=\\{\\s*<([A-Za-z0-9_]+)`, 'i');
    match = appContent.match(regex);
    if (!match) {
        console.log("NOT FOUND IN APP.TSX: " + url);
        continue;
    }
  }
  
  const componentName = match[1];
  
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
