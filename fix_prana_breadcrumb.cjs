const fs = require('fs');
const path = 'src/pages/centers/PranaSpaAyurveda.tsx';
let content = fs.readFileSync(path, 'utf8');

// The file got completely broken around the breadcrumb.
// Let's find the breadcrumb `ol` tag and the `Hero Section`.
const regex = /(<ol ref=\{breadcrumbRef\}.*?>)[\s\S]*?(<h1)/m;

const replacement = `$1
            <li className="flex items-center gap-2 shrink-0">
              <a href="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <a href="/centers" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              Prana Spa & Ayurveda Resort Rishikesh Uttarakhand
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="bg-[#2C4E5A] text-white py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                $2`;

content = content.replace(regex, replacement);

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed breadcrumb!");
