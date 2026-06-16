const fs = require('fs');

const path = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';
let content = fs.readFileSync(path, 'utf8');

const target = `              <div className="flex flex-col gap-4">
            </div>
          </div>
        </div>`;

const replacement = `              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#2C4E5A] hover:bg-white/90 font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>`;

content = content.replace(target, replacement);

fs.writeFileSync(path, content);
console.log('Fixed syntax error via Node');
