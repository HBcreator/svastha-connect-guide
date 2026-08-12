const fs = require('fs');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const target1 = 'const cities = ["All", ...Array.from(new Set(centers.map(c => c.city).filter(Boolean))).sort()];';
const replacement1 = `
  const REGION_MAPPING = {
    "Kerala Region": ["Kerala", "Alappuzha", "Chazhur", "Ezhakkaranadu", "Idukki", "Kalady", "Kanjirappally", "Kannur", "Kayamkulam", "Kochi", "Kottakkal", "Kovalam", "Kumarakom", "Mararikulam", "Nattika", "Palakkad", "Perumbavoor", "Thrissur"],
    "Goa Region": ["Goa", "Anjuna", "Arambol", "Arpora", "Ashvem", "Assagao", "Calangute", "Canacona", "Candolim", "Colva", "Mandrem", "Mapusa", "Morjim", "Nerul", "Orlim", "Ponda", "Porvorim"],
    "Delhi & North India": ["Delhi", "Gurugram", "Sonepat", "Alwar"],
    "Himalayas, Rishikesh, Uttarakhand & North East": ["Himalaya", "Rishikesh", "Uttarakhand", "Dehradun", "Almora", "Haridwar", "Dharamshala", "Manikaran", "Himachal Pradesh", "Ranikhet"],
    "Mumbai, Pune, Nashik & West India": ["Mumbai", "Pune", "Nashik", "Maharashtra"],
    "Bangalore, Hyderabad, Chennai & South India": ["Bangalore", "Bengaluru", "Chennai", "Tamil Nadu", "Karnataka", "Telangana", "Coimbatore", "Mysore", "Udupi"]
  };

  const getRegionForCenter = (cityStr: string) => {
    const loc = (cityStr || "").toLowerCase();
    for (const [region, keywords] of Object.entries(REGION_MAPPING)) {
      if (keywords.some(kw => loc.includes(kw.toLowerCase()))) {
        return region;
      }
    }
    return "Other";
  };

  const cities = ["All", "Kerala Region", "Goa Region", "Delhi & North India", "Himalayas, Rishikesh, Uttarakhand & North East", "Mumbai, Pune, Nashik & West India", "Bangalore, Hyderabad, Chennai & South India"];
`;

if (content.includes(target1)) {
    content = content.replace(target1, replacement1.trim());
} else {
    console.log("Could not find target1");
}

const target2 = `const cityMatch = selectedCity === "All" || center.city === selectedCity;`;
const replacement2 = `const cityMatch = selectedCity === "All" || getRegionForCenter(center.city) === selectedCity;`;

if (content.includes(target2)) {
    content = content.replace(target2, replacement2);
} else {
    console.log("Could not find target2");
}

fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
console.log("Successfully updated TopCenters.tsx filters.");
