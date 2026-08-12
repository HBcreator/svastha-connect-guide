const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

// 2. Add Breadcrumbs to the 10 components
const components = [
  { file: 'SOUKYACenter.tsx', name: 'SOUKYA INTERNATIONAL HOLISTIC HEALTH CENTER BENGALURU' },
  { file: 'AyurvedaGram.tsx', name: 'AYURVEDAGRAM HERITAGE WELLNESS CENTER BENGALURU' },
  { file: 'ShreyasYogaRetreat.tsx', name: 'SHREYAS YOGA RETREAT BENGALURU' },
  { file: 'VivedaWellnessVillage.tsx', name: 'VIVEDA WELLNESS VILLAGE NASHIK' },
  { file: 'NaadWellness.tsx', name: 'NAAD WELLNESS CENTER SONEPAT' },
  { file: 'FazlaniNaturesNest.tsx', name: 'FAZLANI NATURES NEST WELLNESS CENTER MAHARASHTRA' },
  { file: 'AtmantanWellnessResort.tsx', name: 'ATMANTAN WELLNESS RESORT PUNE' },
  { file: 'ToyamByOrchidHotels.tsx', name: 'TOYAM BY ORCHID HOTELS WELLNESS RESORT PUNE' },
  { file: 'DharanaAtShillim.tsx', name: 'DHARANA AT SHILLIM WELLNESS RETREAT PUNE' },
  { file: 'TheImperialSpaAndWellness.tsx', name: 'THE IMPERIAL SPA AND WELLNESS DELHI' }
];

components.forEach(comp => {
  const filePath = path.join(pagesDir, 'centers', comp.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Warning: ${filePath} does not exist`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if breadcrumb already exists
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

  // Use a regex that matches <Navigation ... /> even if there are > characters inside the props
  const navRegex = /(<Navigation[\s\S]*?\/>)/;
  if (navRegex.test(content)) {
    content = content.replace(navRegex, `$1\n${breadcrumbCode}`);
    
    // Ensure ChevronRight is imported from lucide-react
    if (!content.includes('ChevronRight')) {
      content = content.replace(/import\s+{([^}]*)}\s+from\s+["']lucide-react["'];/, (match, p1) => {
        return `import { ${p1.trim()}, ChevronRight } from "lucide-react";`;
      });
    }

    // Ensure Link is imported from react-router-dom
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

console.log("Done");
