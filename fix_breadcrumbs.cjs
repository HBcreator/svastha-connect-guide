const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const centersDir = path.join(pagesDir, 'centers');

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

breadcrumbComponents.forEach(comp => {
  const filename = comp.comp + '.tsx';
  const filePath = path.join(centersDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log('File not found: ' + filename);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('Breadcrumb Navigation') || content.includes('Centers</Link>')) {
    return;
  }

  const breadcrumbCode = '\n      {/* Breadcrumb Navigation */}\n' +
    '      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">\n' +
    '        <div className="container mx-auto px-4 max-w-6xl">\n' +
    '          <ol className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">\n' +
    '            <li className="flex items-center gap-2 shrink-0">\n' +
    '              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">\n' +
    '                Home\n' +
    '              </Link>\n' +
    '              <ChevronRight className="h-3 w-3 text-primary/20" />\n' +
    '            </li>\n' +
    '            <li className="flex items-center gap-2 shrink-0">\n' +
    '              <Link to="/centers" className="text-primary/50 hover:text-primary transition-colors">\n' +
    '                Centers\n' +
    '              </Link>\n' +
    '              <ChevronRight className="h-3 w-3 text-primary/20" />\n' +
    '            </li>\n' +
    '            <li className="text-primary/90 font-black shrink-0">\n' +
    '              ' + comp.name + '\n' +
    '            </li>\n' +
    '          </ol>\n' +
    '        </div>\n' +
    '      </nav>\n';

  // Use a regex that allows ANY characters inside the tag, specifically `>` from arrow functions
  const navRegex = /(<Navigation[\s\S]*?\/>)/;
  
  if (navRegex.test(content)) {
    content = content.replace(navRegex, '$1' + breadcrumbCode);

    if (!content.includes('ChevronRight')) {
      content = content.replace(/import\s+{([^}]+)}\s+from\s+["']lucide-react["'];/, 'import { $1, ChevronRight } from "lucide-react";');
    }

    if (!content.includes('import { Link }')) {
      if (content.includes('react-router-dom')) {
        content = content.replace(/import\s+{([^}]+)}\s+from\s+["']react-router-dom["'];/, 'import { Link, $1 } from "react-router-dom";');
      } else {
        content = 'import { Link } from "react-router-dom";\n' + content;
      }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Added breadcrumb to ' + filename);
  } else {
      console.log('Navigation not found in ' + filename);
  }
});

console.log("Breadcrumb injection completed.");
