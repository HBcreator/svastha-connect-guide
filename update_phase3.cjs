const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const centersDir = path.join(pagesDir, 'centers');
const appPath = path.join(srcDir, 'App.tsx');

const routesToFix = [
  { oldSlug: 'kerala/kairali-ayurvedic-healing-village', newSlug: 'kairali-ayurvedic-healing-village-hospital-kerala-india', comp: 'KairaliHealingVillage' },
  { oldSlug: 'veda5', newSlug: 'veda5-ayurveda-yoga-wellness-retreat-center-rishikesh-india', comp: 'Veda5Center' },
  { oldSlug: 'rishikesh/yan-cure', newSlug: 'yan-cure-yoga-retreat-and-ayurveda-center-rishikesh-india', comp: 'YanCureYogaRetreat' },
  { oldSlug: 'soul-vacation-resort-spa-goa-india', newSlug: 'soul-vacation-resort-and-wellness-center-goa-india', comp: 'SoulVacationResort' },
  { oldSlug: 'swan-yoga-retreat-goa-india', newSlug: 'swan-yoga-retreat-and-ayurveda-center-goa-india', comp: 'SWANYogaRetreat' },
  { oldSlug: 'mercure-goa-devaaya-retreat-goa-india', newSlug: 'mercure-goa-devaaya-resort-ayurveda-wellness-center-goa-india', comp: 'MercureGoaDevaayaResort' },
  { oldSlug: 'ashiyana-yoga-retreat-village-goa-india', newSlug: 'ashiyana-yoga-retreat-center-goa-india', comp: 'AshiyanaYogaRetreat' },
  { oldSlug: 'nalanda-retreat-goa-india', newSlug: 'nalanda-retreat-center-goa-india', comp: 'NalandaRetreatGoa' },
  { oldSlug: 'uttarakhand/ananda-in-the-himalayas', newSlug: 'ananda-in-the-himalayas-resort-uttarakhand-india', comp: 'AnandaInTheHimalayas' },
  { oldSlug: 'delhi/namastedwaar', newSlug: 'namaste-dwaar-countryside-wellness-retreat-delhi-india', comp: 'NamasteDwaar' },
  { oldSlug: 'kerala/ayurmana', newSlug: 'ayurmana-ayurveda-hospital-kerala-india', comp: 'AyurmanaCenter' },
  { oldSlug: 'mysore/chamundi-hill-palace', newSlug: 'chamundi-hill-palace-ayurvedic-center-kerala-india', comp: 'ChamundiHillPalace' },
  { oldSlug: 'kerala/kairali-heritage', newSlug: 'kairali-heritage-resort-kerala-india', comp: 'KairaliHeritage' },
  { oldSlug: 'kerala/agni-ayurvedic-village', newSlug: 'agni-ayurvedic-village-resort-kerala-india', comp: 'AgniAyurvedicVillage' },
  { oldSlug: 'kerala/dheemahi-kumarakom', newSlug: 'dheemahi-kumarakom-premium-lakeside-retreat-kerala-india', comp: 'DheemahiKumarakom' },
  { oldSlug: 'kerala/kumarakom-lake-resort', newSlug: 'kumarakom-lake-resort-kerala-india', comp: 'KumarakomLakeResort' },
  { oldSlug: 'kerala/nagarjuna-ayurveda-center', newSlug: 'nagarjuna-ayurveda-center-kerala-india', comp: 'NagarjunaAyurvedaCenter' },
  { oldSlug: 'kerala/sanjeevanam-ayurveda-hospital', newSlug: 'sanjeevanam-ayurveda-hospital-kerala-india', comp: 'SanjeevanamAyurvedaHospital' },
  { oldSlug: 'kerala/back-to-roots', newSlug: 'back-to-roots-ayurveda-retreat-kerala-india', comp: 'BackToRoots' },
  { oldSlug: 'kerala/dhathri-ayurveda', newSlug: 'dhathri-ayurveda-hospital-kerala-india', comp: 'DhathriAyurvedicHospital' },
  { oldSlug: 'kerala/krishnendu-ayurveda-hospital', newSlug: 'krishnendu-ayurveda-hospital-kerala-india', comp: 'KrishnenduAyurvedaHospital' },
  { oldSlug: 'kerala/athreya-ayurvedic-center', newSlug: 'athreya-ayurvedic-center-kerala-india', comp: 'AthreyaAyurvedicCenter' },
  { oldSlug: 'kerala/ayur-bethaniya-ayurveda-hospital', newSlug: 'ayur-bethaniya-ayurveda-hospital-kerala-india', comp: 'AyurBethaniyaAyurvedaHospital' },
  { oldSlug: 'kerala/ayushi-ayurvedic-retreat', newSlug: 'ayushi-ayurvedic-retreat-kerala-india', comp: 'AyushiAyurvedicRetreat' },
  { oldSlug: 'idukki/sitaram-mountain-retreat', newSlug: 'sitaram-mountain-retreat-idukki-india', comp: 'SitaramMountainRetreat' },
  { oldSlug: 'kochi/akanta-ayurveda-and-yoga-resort', newSlug: 'akanta-ayurveda-and-yoga-resort-kochi-india', comp: 'AkantaAyurvedaYogaResort' },
  { oldSlug: 'kerala/ideal-ayurvedic-resort', newSlug: 'ideal-ayurvedic-resort-kerala-india', comp: 'IdealAyurvedicResort' }
];

let appContent = fs.readFileSync(appPath, 'utf-8');
let appChanged = false;

routesToFix.forEach(route => {
  const oldLine = \`<Route path="/centers/\${route.oldSlug}" element={<\${route.comp} />} />\`;
  const newLine = \`<Route path="/centers/\${route.newSlug}" element={<\${route.comp} />} />\\n          <Route path="/centers/\${route.oldSlug}" element={<Navigate to="/centers/\${route.newSlug}" replace />} />\`;
  
  if (appContent.includes(oldLine)) {
    appContent = appContent.replace(oldLine, newLine);
    appChanged = true;
  } else {
    console.log("Could not find exact route:", oldLine);
  }
});

if (appChanged) {
  fs.writeFileSync(appPath, appContent, 'utf-8');
  console.log('App.tsx routes updated');
}

// Global String Replacements
const replacements = {};
routesToFix.forEach(r => replacements[\`"\${r.oldSlug}"\`] = \`"\${r.newSlug}"\`);

// Edge case for App.tsx which had some long slugs manually added before (like ananda-in-the-himalayas-uttarakhand-india)
// Those might still be around and point to the wrong old ones. We'll ignore it for now as redirect works.

const filesToUpdate = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

filesToUpdate.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  for (const [oldStr, newStr] of Object.entries(replacements)) {
    if (content.includes(oldStr)) {
      content = content.replace(new RegExp(oldStr, 'g'), newStr);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(\`Updated slugs in \${file}\`);
  }
});

// Breadcrumbs
const breadcrumbComponents = [
  { comp: 'KairaliHealingVillage', name: 'KAIRALI AYURVEDIC HEALING VILLAGE KERALA' },
  { comp: 'Veda5Center', name: 'VEDA5 AYURVEDA YOGA WELLNESS RETREAT CENTER RISHIKESH' },
  { comp: 'YanCureYogaRetreat', name: 'YAN CURE YOGA RETREAT & AYURVEDA CENTER RISHIKESH' },
  { comp: 'SoulVacationResort', name: 'SOUL VACATION RESORT & WELLNESS CENTER GOA' },
  { comp: 'SWANYogaRetreat', name: 'SWAN YOGA RETREAT & AYURVEDA CENTER GOA' },
  { comp: 'MercureGoaDevaayaResort', name: 'MERCURE GOA DEVAAYA RESORT GOA' },
  { comp: 'AshiyanaYogaRetreat', name: 'ASHIYANA YOGA RETREAT CENTER GOA' },
  { comp: 'NalandaRetreatGoa', name: 'NALANDA RETREAT CENTER GOA' },
  { comp: 'AnandaInTheHimalayas', name: 'ANANDA IN THE HIMALAYAS RESORT UTTARAKHAND' },
  { comp: 'NamasteDwaar', name: 'NAMASTE DWAAR COUNTRYSIDE WELLNESS RETREAT DELHI' },
  { comp: 'AyurmanaCenter', name: 'AYURMANA AYURVEDA HOSPITAL KERALA' },
  { comp: 'ChamundiHillPalace', name: 'CHAMUNDI HILL PALACE AYURVEDIC CENTER KERALA' },
  { comp: 'KairaliHeritage', name: 'KAIRALI HERITAGE RESORT KERALA' },
  { comp: 'AgniAyurvedicVillage', name: 'AGNI AYURVEDIC VILLAGE RESORT KERALA' },
  { comp: 'DheemahiKumarakom', name: 'DHEEMAHI KUMARAKOM LAKESIDE RETREAT KERALA' },
  { comp: 'KumarakomLakeResort', name: 'KUMARAKOM LAKE RESORT KERALA' },
  { comp: 'NagarjunaAyurvedaCenter', name: 'NAGARJUNA AYURVEDA CENTER KERALA' },
  { comp: 'SanjeevanamAyurvedaHospital', name: 'SANJEEVANAM AYURVEDA HOSPITAL KERALA' },
  { comp: 'BackToRoots', name: 'BACK TO ROOTS AYURVEDA RETREAT KERALA' },
  { comp: 'DhathriAyurvedicHospital', name: 'DHATHRI AYURVEDA HOSPITAL KERALA' },
  { comp: 'KrishnenduAyurvedaHospital', name: 'KRISHNENDU AYURVEDA HOSPITAL KERALA' },
  { comp: 'AthreyaAyurvedicCenter', name: 'ATHREYA AYURVEDIC CENTER KERALA' },
  { comp: 'AyurBethaniyaAyurvedaHospital', name: 'AYUR BETHANIYA AYURVEDA HOSPITAL KERALA' },
  { comp: 'AyushiAyurvedicRetreat', name: 'AYUSHI AYURVEDIC RETREAT KERALA' },
  { comp: 'SitaramMountainRetreat', name: 'SITARAM MOUNTAIN RETREAT IDUKKI' },
  { comp: 'AkantaAyurvedaYogaResort', name: 'AKANTA AYURVEDA AND YOGA RESORT KOCHI' },
  { comp: 'IdealAyurvedicResort', name: 'IDEAL AYURVEDIC RESORT KERALA' }
];

const componentFilesMap = {
  'KairaliHealingVillage': 'KairaliHealingVillage.tsx',
  'Veda5Center': 'Veda5Center.tsx',
  'YanCureYogaRetreat': 'YanCureYogaRetreat.tsx',
  'SoulVacationResort': 'SoulVacationResort.tsx',
  'SWANYogaRetreat': 'SWANYogaRetreat.tsx',
  'MercureGoaDevaayaResort': 'MercureGoaDevaayaResort.tsx',
  'AshiyanaYogaRetreat': 'AshiyanaYogaRetreat.tsx',
  'NalandaRetreatGoa': 'NalandaRetreatGoa.tsx',
  'AnandaInTheHimalayas': 'AnandaInTheHimalayas.tsx',
  'NamasteDwaar': 'NamasteDwaar.tsx',
  'AyurmanaCenter': 'AyurmanaCenter.tsx',
  'ChamundiHillPalace': 'ChamundiHillPalace.tsx',
  'KairaliHeritage': 'KairaliHeritage.tsx',
  'AgniAyurvedicVillage': 'AgniAyurvedicVillage.tsx',
  'DheemahiKumarakom': 'DheemahiKumarakom.tsx',
  'KumarakomLakeResort': 'KumarakomLakeResort.tsx',
  'NagarjunaAyurvedaCenter': 'NagarjunaAyurvedaCenter.tsx',
  'SanjeevanamAyurvedaHospital': 'SanjeevanamAyurvedaHospital.tsx',
  'BackToRoots': 'BackToRoots.tsx',
  'DhathriAyurvedicHospital': 'DhathriAyurvedicHospital.tsx',
  'KrishnenduAyurvedaHospital': 'KrishnenduAyurvedaHospital.tsx',
  'AthreyaAyurvedicCenter': 'AthreyaAyurvedicCenter.tsx',
  'AyurBethaniyaAyurvedaHospital': 'AyurBethaniyaAyurvedaHospital.tsx',
  'AyushiAyurvedicRetreat': 'AyushiAyurvedicRetreat.tsx',
  'SitaramMountainRetreat': 'SitaramMountainRetreat.tsx',
  'AkantaAyurvedaYogaResort': 'AkantaAyurvedaYogaResort.tsx',
  'IdealAyurvedicResort': 'IdealAyurvedicResort.tsx'
};

breadcrumbComponents.forEach(comp => {
  const file = componentFilesMap[comp.comp];
  if (!file) return;

  const filePath = path.join(centersDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(\`Warning: \${filePath} does not exist\`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('Breadcrumb Navigation') || content.includes('Centers</a>') || content.includes('Centers</Link>')) {
    console.log(\`Breadcrumb already exists in \${file}\`);
    return;
  }

  const breadcrumbCode = \`
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
              \${comp.name}
            </li>
          </ol>
        </div>
      </nav>
\`;

  const navRegex = /(<Navigation[\\s\\S]*?\\/>)/;
  if (navRegex.test(content)) {
    content = content.replace(navRegex, \`$1\\n\${breadcrumbCode}\`);
    
    if (!content.includes('ChevronRight')) {
      content = content.replace(/import\\s+{([^}]*)}\\s+from\\s+["']lucide-react["'];/, (match, p1) => {
        return \`import { \${p1.trim()}, ChevronRight } from "lucide-react";\`;
      });
    }

    if (!content.includes('import { Link }')) {
        content = content.replace(/import\\s+{[^}]*}\\s+from\\s+["']react-router-dom["'];/, (match) => {
            if (match.includes('Link')) return match;
            return match.replace('{', '{ Link, ');
        });
        if (!content.includes('react-router-dom')) {
             content = \`import { Link } from "react-router-dom";\\n\` + content;
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(\`Added breadcrumb to \${file}\`);
  } else {
    console.log(\`Could not find <Navigation /> in \${file}\`);
  }
});

console.log("Phase 3 updates completed.");
