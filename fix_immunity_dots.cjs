const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/programs/ImmunityBoostingDetox.tsx',
];

for (const relPath of files) {
  const filePath = path.join(__dirname, relPath);
  let content = fs.readFileSync(filePath, 'utf8');
  const normalized = content.replace(/\r\n/g, '\n');

  // Find VIEW ALL CENTERS block — it has slightly different indentation in Immunity
  // Pattern: <div className="mt-4 flex justify-center"> ... VIEW ALL CENTERS ... </div>
  const regex = /(\s*)<div className="mt-4 flex justify-center">\s*<Button[\s\S]*?VIEW ALL CENTERS[\s\S]*?<\/Button>\s*<\/div>/;
  
  const match = normalized.match(regex);
  if (!match) {
    console.log(`❌ ${relPath}: Could not find target block`);
    continue;
  }

  const newCode = `      <div className="space-y-6">
        {topCentersTotalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: topCentersTotalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTopCentersSlide(i)}
                className={\`h-1.5 rounded-full transition-all \${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}\`}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-4">
          <Button
            className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
            onClick={() => window.open('/centers', "_blank")}
          >
            VIEW ALL CENTERS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>`;

  const updated = normalized.replace(regex, '\n' + newCode);
  fs.writeFileSync(filePath, updated, 'utf8');
  console.log(`✅ ${relPath}: Added pagination dots`);
}
