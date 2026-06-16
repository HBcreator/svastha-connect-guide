const fs = require('fs');

const path = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';
let content = fs.readFileSync(path, 'utf8');

const target = `                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Dwarka Sector 13, Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.7</span>
                  <span className="opacity-90">(400+ Reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
        <div className="container mx-auto px-4 max-w-7xl">`;

const replacement = `                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Dwarka Sector 13, Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.7</span>
                  <span className="opacity-90">(400+ Reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
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
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">`;

content = content.replace(target, replacement);

fs.writeFileSync(path, content);
console.log('Fixed syntax error cleanly via Node');
