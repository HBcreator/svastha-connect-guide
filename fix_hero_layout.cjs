const fs = require('fs');
let content = fs.readFileSync('src/pages/centers/AyurvedaKendraHospital.tsx', 'utf8');

const heroSection = `      {/* Hero Section */}
      <div id="overview" className="bg-[#2C4E5A] text-white py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Ayurveda Kendra</h1>
                <p className="text-xl mb-4 opacity-90">Authentic Kerala Panchakarma | Chronic Disease & Pain Management</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Safdarjung Enclave, Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.6</span>
                  <span className="opacity-90">(1,300+ Reviews)</span>
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

`;

// First remove any existing broken hero section to be safe
content = content.replace(/\{\/\* Hero Section \*\/\}.*?(?=\{\/\* About Section \*\/})/s, '');

// Now insert the correct hero section before the About Section
content = content.replace('{/* About Section */}', heroSection + '      {/* About Section */}');

fs.writeFileSync('src/pages/centers/AyurvedaKendraHospital.tsx', content);
