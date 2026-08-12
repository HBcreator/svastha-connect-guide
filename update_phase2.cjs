const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const centersDir = path.join(pagesDir, 'centers');
const appPath = path.join(srcDir, 'App.tsx');

const routesToFix = [
  { oldPath: '/centers/gurugram/itc-grand-bharat', newPath: '/centers/itc-grand-bharat-wellness-retreat-center-delhi-india', comp: 'ITCGrandBharat' },
  { oldPath: '/centers/kerala/niraamaya-retreats-surya-samudra', newPath: '/centers/niraamaya-retreats-surya-samudra-resort-kerala-india', comp: 'NiraamayaRetreatsSuryaSamudra' },
  { oldPath: '/centers/rishikesh/modi-yoga-retreat', newPath: '/centers/modi-yoga-retreat-center-rishikesh-india', comp: 'ModiYogaRetreat' },
  { oldPath: '/centers/rajasthan/amanbagh-heritage-wellness-retreat', newPath: '/centers/amanbagh-heritage-wellness-retreat-resort-rajasthan-india', comp: 'AmanbaghHeritageWellnessRetreat' },
  { oldPath: '/centers/dharamshala/himveda', newPath: '/centers/himveda-heritage-wellness-center-himachal-india', comp: 'HimVeda' },
  { oldPath: '/centers/himachal/sandhya-hot-spring-health-care', newPath: '/centers/sandhya-hot-spring-health-care-hospital-himachal-india', comp: 'SandhyaHotSpringHealthCare' },
  { oldPath: '/centers/dharamshala/ayuskama-ayurveda', newPath: '/centers/ayuskama-ayurveda-center-himachal-india', comp: 'AyuskamaAyurveda' },
  { oldPath: '/centers/kerala/somatheeram', newPath: '/centers/somatheeram-ayurvedic-health-resort-kerala-india', comp: 'Somatheeram' },
  { oldPath: '/centers/kerala/ayursoma', newPath: '/centers/ayursoma-ayurveda-royal-retreat-resort-kerala-india', comp: 'AyurSomaAyurvedaRoyalRetreat' },
  { oldPath: '/centers/kerala/kalari-kovilakom', newPath: '/centers/kalari-kovilakom-ayurveda-hospital-kerala-india', comp: 'KalariKovilakomPalaceForAyurveda' },
  { oldPath: '/centers/kerala/carnoustie-ayurveda-wellness-resort', newPath: '/centers/carnoustie-ayurveda-wellness-resort-kerala-india', comp: 'CarnoustieAyurvedaWellnessResort' },
  { oldPath: '/centers/kerala/the-nattika-beach-resort', newPath: '/centers/the-nattika-beach-resort-kerala-india', comp: 'TheNattikaBeachResort' },
  { oldPath: '/centers/kerala/sitaram-beach-retreat', newPath: '/centers/sitaram-beach-retreat-resort-kerala-india', comp: 'SitaramBeachRetreat' }
];

let appContent = fs.readFileSync(appPath, 'utf-8');
let appChanged = false;

routesToFix.forEach(route => {
  // Find <Route path="oldPath" element={<Comp />} />
  // Replace with <Route path="newPath" element={<Comp />} />\n          <Route path="oldPath" element={<Navigate to="newPath" replace />} />
  const oldLine = `<Route path="${route.oldPath}" element={<${route.comp} />} />`;
  const newLine = `<Route path="${route.newPath}" element={<${route.comp} />} />\n          <Route path="${route.oldPath}" element={<Navigate to="${route.newPath}" replace />} />`;
  
  if (appContent.includes(oldLine)) {
    appContent = appContent.replace(oldLine, newLine);
    appChanged = true;
  } else {
    // try finding it without spaces
    console.log("Could not find exact route:", oldLine);
  }
});

if (appChanged) {
  fs.writeFileSync(appPath, appContent, 'utf-8');
  console.log('App.tsx routes updated');
}


// Replace string slugs globally in TopCenters and Region Pages
const replacements = {
  '"gurugram/itc-grand-bharat"': '"itc-grand-bharat-wellness-retreat-center-delhi-india"',
  '"kerala/niraamaya-retreats-surya-samudra"': '"niraamaya-retreats-surya-samudra-resort-kerala-india"',
  '"rishikesh/modi-yoga-retreat"': '"modi-yoga-retreat-center-rishikesh-india"',
  '"rajasthan/amanbagh-heritage-wellness-retreat"': '"amanbagh-heritage-wellness-retreat-resort-rajasthan-india"',
  '"dharamshala/himveda"': '"himveda-heritage-wellness-center-himachal-india"',
  '"himachal/sandhya-hot-spring-health-care"': '"sandhya-hot-spring-health-care-hospital-himachal-india"',
  '"dharamshala/ayuskama-ayurveda"': '"ayuskama-ayurveda-center-himachal-india"',
  '"kerala/somatheeram"': '"somatheeram-ayurvedic-health-resort-kerala-india"',
  '"kerala/ayursoma"': '"ayursoma-ayurveda-royal-retreat-resort-kerala-india"',
  '"kerala/kalari-kovilakom"': '"kalari-kovilakom-ayurveda-hospital-kerala-india"',
  '"kerala/carnoustie-ayurveda-wellness-resort"': '"carnoustie-ayurveda-wellness-resort-kerala-india"',
  '"kerala/the-nattika-beach-resort"': '"the-nattika-beach-resort-kerala-india"',
  '"kerala/sitaram-beach-retreat"': '"sitaram-beach-retreat-resort-kerala-india"'
};

const filesToUpdate = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

filesToUpdate.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  for (const [oldSlug, newSlug] of Object.entries(replacements)) {
    if (content.includes(oldSlug)) {
      content = content.replace(oldSlug, newSlug);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated slugs in ${file}`);
  }
});


// Add Breadcrumbs
const components = [
  { file: 'ITCGrandBharat.tsx', name: 'ITC GRAND BHARAT WELLNESS RETREAT DELHI' },
  { file: 'NiraamayaRetreatsSuryaSamudra.tsx', name: 'NIRAAMAYA RETREATS SURYA SAMUDRA KERALA' },
  { file: 'ModiYogaRetreat.tsx', name: 'MODI YOGA RETREAT RISHIKESH' },
  { file: 'AmanbaghHeritageWellnessRetreat.tsx', name: 'AMANBAGH HERITAGE WELLNESS RETREAT RAJASTHAN' },
  { file: 'HimVeda.tsx', name: 'HIMVEDA HERITAGE WELLNESS CENTER HIMACHAL' },
  { file: 'SandhyaHotSpringHealthCare.tsx', name: 'SANDHYA HOT SPRING HEALTH CARE HOSPITAL HIMACHAL' },
  { file: 'AyuskamaAyurveda.tsx', name: 'AYUSKAMA AYURVEDA CENTER HIMACHAL' },
  { file: 'Somatheeram.tsx', name: 'SOMATHEERAM AYURVEDIC HEALTH RESORT KERALA' },
  { file: 'AyurSomaAyurvedaRoyalRetreat.tsx', name: 'AYURSOMA AYURVEDA ROYAL RETREAT KERALA' },
  { file: 'KalariKovilakomPalaceForAyurveda.tsx', name: 'KALARI KOVILAKOM AYURVEDA HOSPITAL KERALA' },
  { file: 'CarnoustieAyurvedaWellnessResort.tsx', name: 'CARNOUSTIE AYURVEDA WELLNESS RESORT KERALA' },
  { file: 'TheNattikaBeachResort.tsx', name: 'THE NATTIKA BEACH RESORT KERALA' },
  { file: 'SitaramBeachRetreat.tsx', name: 'SITARAM BEACH RETREAT KERALA' }
];

components.forEach(comp => {
  const filePath = path.join(centersDir, comp.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Warning: ${filePath} does not exist`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('Breadcrumb Navigation') || content.includes('Centers</a>') || content.includes('Centers</Link>')) {
    console.log(`Breadcrumb already exists in ${comp.file}`);
    return;
  }

  const breadcrumbCode = `
      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/centers" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              ${comp.name}
            </li>
          </ol>
        </div>
      </nav>
`;

  const navRegex = /(<Navigation[\s\S]*?\/>)/;
  if (navRegex.test(content)) {
    content = content.replace(navRegex, `$1\n${breadcrumbCode}`);
    
    if (!content.includes('ChevronRight')) {
      content = content.replace(/import\s+{([^}]*)}\s+from\s+["']lucide-react["'];/, (match, p1) => {
        return `import { ${p1.trim()}, ChevronRight } from "lucide-react";`;
      });
    }

    if (!content.includes('import { Link }')) {
        content = content.replace(/import\s+{[^}]*}\s+from\s+["']react-router-dom["'];/, (match) => {
            if (match.includes('Link')) return match;
            return match.replace('{', '{ Link, ');
        });
        if (!content.includes('react-router-dom')) {
             content = `import { Link } from "react-router-dom";\n` + content;
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added breadcrumb to ${comp.file}`);
  } else {
    console.log(`Could not find <Navigation /> in ${comp.file}`);
  }
});

console.log("Phase 2 updates completed.");
