const fs = require('fs');
let content = fs.readFileSync('src/pages/centers/AyurvedaKendraHospital.tsx', 'utf8');

const corrupted = `                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Ayurveda Kendra</h1>
                  className="bg-white text-[#2C4E5A] hover:bg-white/90 font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >`;

const fixed = `                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Ayurveda Kendra</h1>
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
                >`;

content = content.replace(corrupted, fixed);
fs.writeFileSync('src/pages/centers/AyurvedaKendraHospital.tsx', content);
