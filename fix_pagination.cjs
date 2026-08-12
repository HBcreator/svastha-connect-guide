const fs = require('fs');
let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// The corrupted block looks like this:
//             <Button
//               variant="outline"
//               disabled={currentPage === 1}
//             >
//               Next
//             </Button>

// Let's replace the whole pagination controls block carefully.
const searchStart = '{/* Pagination Controls */}';
const searchEnd = '</section>';

const idxStart = content.indexOf(searchStart);
const idxEnd = content.indexOf(searchEnd, idxStart);

if (idxStart !== -1 && idxEnd !== -1) {
    const replacement = `{/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="rounded-xl border-[#2C4E5A] text-[#2C4E5A] hover:bg-[#2C4E5A] hover:text-white"
            >
              Previous
            </Button>
            
            <div className="flex items-center gap-2 hidden sm:flex">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  onClick={() => setCurrentPage(pageNum)}
                  className={\`w-10 h-10 p-0 rounded-xl font-bold transition-all \${
                    currentPage === pageNum 
                      ? "bg-[#2C4E5A] text-white hover:bg-[#1e363e]" 
                      : "border-[#2C4E5A] text-[#2C4E5A] hover:bg-[#2C4E5A] hover:text-white"
                  }\`}
                >
                  {pageNum}
                </Button>
              ))}
            </div>
            
            {/* Mobile simplified view */}
            <span className="text-sm font-semibold text-foreground/80 sm:hidden">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="rounded-xl border-[#2C4E5A] text-[#2C4E5A] hover:bg-[#2C4E5A] hover:text-white"
            >
              Next
            </Button>
          </div>
        )}
      `;
    
    content = content.substring(0, idxStart) + replacement + content.substring(idxEnd);
    fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
    console.log("Pagination completely fixed via script!");
} else {
    console.log("Could not find pagination block limits.");
}
