const fs = require('fs');
let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const idxStart = content.indexOf('{/* Buttons Container */}');
const idxPagination = content.indexOf('{/* Pagination Controls */}');

if (idxStart !== -1 && idxPagination !== -1) {
    const replacement = `{/* Buttons Container */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          to={center.slug ? \`/centers/\${center.slug}\` : "#"} 
                          className="w-full"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full font-bold py-3 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-xs uppercase tracking-tight"
                          >
                            View Details
                          </Button>
                        </Link>
                        <Button
                          onClick={() => setQuoteModalOpen(true)}
                          className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-3 md:py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 text-xs uppercase tracking-tight"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
        </div>
        
        `;
    
    content = content.substring(0, idxStart) + replacement + content.substring(idxPagination);
    fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
    console.log("JSX repaired and target blank added!");
} else {
    console.log("Could not find markers.", {idxStart, idxPagination});
}
