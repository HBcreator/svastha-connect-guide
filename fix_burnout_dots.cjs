const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/programs/BurnoutRecoveryProgram.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the old button div and replace
const oldCode = `      <div className="mt-4 flex justify-center">
        <Button
          className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
          onClick={() => window.open('/centers', "_blank")}
        >
          VIEW ALL CENTERS
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>`;

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

// Normalize line endings for search
const normalizedContent = content.replace(/\r\n/g, '\n');
const normalizedOld = oldCode.replace(/\r\n/g, '\n');

if (normalizedContent.includes(normalizedOld)) {
  const updated = normalizedContent.replace(normalizedOld, newCode);
  fs.writeFileSync(filePath, updated, 'utf8');
  console.log('✅ Successfully added pagination dots to BurnoutRecoveryProgram.tsx');
} else {
  // Try to find the relevant section
  const idx = normalizedContent.indexOf('mt-4 flex justify-center');
  if (idx !== -1) {
    console.log('Found at index:', idx);
    console.log('Context:', normalizedContent.substring(idx - 20, idx + 200));
  } else {
    console.log('❌ Could not find target text. Searching for VIEW ALL CENTERS...');
    const idx2 = normalizedContent.indexOf('VIEW ALL CENTERS');
    console.log('VIEW ALL CENTERS at:', idx2);
    if (idx2 !== -1) console.log('Context:', normalizedContent.substring(idx2 - 200, idx2 + 100));
  }
}
