const fs = require('fs');
let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const targetStr = `<div className="flex items-center gap-2 hidden sm:flex">
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
            </span>`;

const replaceStr = `<div className="flex items-center gap-1.5 md:gap-2">
              {(() => {
                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, startPage + 3);
                if (endPage - startPage < 3) {
                  startPage = Math.max(1, endPage - 3);
                }
                return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => setCurrentPage(pageNum)}
                    className={\`w-8 h-8 md:w-10 md:h-10 p-0 rounded-lg md:rounded-xl font-bold transition-all text-xs md:text-sm \${
                      currentPage === pageNum 
                        ? "bg-[#2C4E5A] text-white hover:bg-[#1e363e]" 
                        : "border-[#2C4E5A] text-[#2C4E5A] hover:bg-[#2C4E5A] hover:text-white"
                    }\`}
                  >
                    {pageNum}
                  </Button>
                ));
              })()}
            </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
    console.log("Pagination updated successfully.");
} else {
    console.log("Could not find the target string to replace.");
}
