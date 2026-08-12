const fs = require('fs');
let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// The corrupted code looks like:
//                       {expandedCards.has(index) ? (
//                         <><ChevronUp size={12} /> Read Less</>
//                           to={center.slug ? `/centers/${center.slug}` : "#"} 
//                           className="w-full"

// Let's find this corrupted part
const corruptedStr = `                      {expandedCards.has(index) ? (
                        <><ChevronUp size={12} /> Read Less</>
                          to={center.slug ? \`/centers/\${center.slug}\` : "#"} 
                          className="w-full"`;

const fixStr = `                      {expandedCards.has(index) ? (
                        <><ChevronUp size={12} /> Read Less</>
                      ) : (
                        <><ChevronDown size={12} /> Read More</>
                      )}
                    </button>

                    {/* Tags Section */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-5">
                      {(center.specialties || []).slice(0, 3).map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-[#F0F7F4] text-[#1E7A4D] text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md border border-[#E0EBE6] text-center truncate max-w-full"
                          title={specialty}
                        >
                          {specialty}
                        </span>
                      ))}
                      {(center.specialties?.length || 0) > 3 && (
                        <span className="bg-[#F0F7F4] text-[#1E7A4D] text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md border border-[#E0EBE6] text-center truncate max-w-full">
                          +{center.specialties.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Buttons Container */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          to={center.slug ? \`/centers/\${center.slug}\` : "#"} 
                          className="w-full"`;

if (content.includes(corruptedStr)) {
    content = content.replace(corruptedStr, fixStr);
    fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
    console.log("JSX repaired successfully!");
} else {
    // maybe spacing is different. Use indexOf for flexible slicing
    const startStr = "<><ChevronUp size={12} /> Read Less</>";
    const endStr = "to={center.slug ? `/centers/${center.slug}` : \"#\"}";
    
    const idxStart = content.indexOf(startStr);
    const idxEnd = content.indexOf(endStr, idxStart);
    
    if (idxStart !== -1 && idxEnd !== -1) {
        const replacePart = `                      ) : (
                        <><ChevronDown size={12} /> Read More</>
                      )}
                    </button>

                    {/* Tags Section */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-5">
                      {(center.specialties || []).slice(0, 3).map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-[#F0F7F4] text-[#1E7A4D] text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md border border-[#E0EBE6] text-center truncate max-w-full"
                          title={specialty}
                        >
                          {specialty}
                        </span>
                      ))}
                      {(center.specialties?.length || 0) > 3 && (
                        <span className="bg-[#F0F7F4] text-[#1E7A4D] text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md border border-[#E0EBE6] text-center truncate max-w-full">
                          +{center.specialties.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Buttons Container */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          `;
        const newContent = content.substring(0, idxStart + startStr.length + 1) + replacePart + content.substring(idxEnd);
        fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
        console.log("JSX repaired using substring slicing!");
    } else {
        console.log("Could not find start/end strings.");
    }
}
