const fs = require('fs');

const files = [
  "src/pages/centers/AyuskamaAyurvedaClinicPanchakarmaCentre.tsx",
  "src/pages/centers/BholeBabaAyurvedicHospitalResearchCentre.tsx",
  "src/pages/centers/MamgainAyurvedaClinicPanchakarmaCentre.tsx",
  "src/pages/centers/HarithaAyurvedaAcademyPanchakarmaCenter.tsx",
  "src/pages/centers/KAYAKALPHimalayanResearchInstituteofYogaNaturopathy.tsx",
  "src/pages/centers/VedicYogaAyurvedaRetreatCentre.tsx",
  "src/pages/centers/VedanjanaYogaAyurvedaPanchakarmaCentre.tsx",
  "src/pages/centers/DrSIBYAyurvedaCenter.tsx",
  "src/pages/centers/ArogyamPanchkarmaCentreAyurvedicHospital.tsx",
  "src/pages/centers/RishikeshAyurvedaCenter.tsx",
  "src/pages/centers/RUDRAMYAAyurvedaattheHimalayas.tsx",
  "src/pages/centers/HimalayaSanjeevniAyurveda.tsx",
  "src/pages/centers/NaturovilleWellnessResort.tsx",
  "src/pages/centers/VihanaRetreat.tsx",
  "src/pages/centers/PranaSpaAyurveda.tsx",
  "src/pages/centers/MokshaHimalayaSpaResort.tsx",
  "src/pages/centers/AyurvedaHouseHimalayanAyurveda.tsx",
  "src/pages/centers/AyurVAIDKalmatia.tsx",
  "src/pages/centers/ModiYogaRetreatRishikesh.tsx",
  "src/pages/centers/ArogyadhamRetreatLuxuryAyurvedaHotel.tsx"
];

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.log("NOT FOUND: " + f);
    return;
  }
  let c = fs.readFileSync(f, 'utf8');
  
  // 1. Extract H1 text
  const h1Match = c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match) {
    console.log("NO H1 FOUND: " + f);
    return;
  }
  let centerName = h1Match[1].replace(/<[^>]*>?/gm, '').trim(); // Remove any internal tags like <br>

  // Helper to replace the first H2 in a given section ID
  const replaceH2InSection = (sectionId, newHeading) => {
    const sectionRegex = new RegExp(`(id="${sectionId}"[\\s\\S]*?<h2[^>]*>)([\\s\\S]*?)(</h2>)`, 'i');
    c = c.replace(sectionRegex, (match, p1, p2, p3) => {
      // Rebuild the h2 tag with the correct classes and inline style
      const tagPrefix = `<h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>`;
      return p1.replace(/<h2[^>]*>/i, tagPrefix) + `\n${newHeading}\n` + p3;
    });
  };

  replaceH2InSection('about', `                Authentic Ayurvedic Excellence <br className="hidden lg:block" />\n                at ${centerName}`);
  replaceH2InSection('programs', `              Top Ayurveda Programs in <br className="hidden lg:block" /> ${centerName}`);
  replaceH2InSection('why-choose', `                Why Choose <br className="hidden lg:block" /> ${centerName}`);
  replaceH2InSection('process', `              Your Healing Journey at <br className="hidden lg:block" /> ${centerName}`);
  
  fs.writeFileSync(f, c);
  console.log("PROCESSED: " + f);
});
