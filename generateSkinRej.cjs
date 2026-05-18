const fs = require('fs');

const psoriasisPath = 'e:/Demo website/Svastha global site/svastha-connect-guide/src/pages/programs/PsoriasisTreatmentProgram.tsx';
const skinRejPath = 'e:/Demo website/Svastha global site/svastha-connect-guide/src/pages/programs/SkinRejuvenation.tsx';

let content = fs.readFileSync(psoriasisPath, 'utf8');

// Replace imports
content = content.replace(/psoriasisTreatmentData/g, 'skinRejuvenationData');

// Replace component name
content = content.replace(/PsoriasisTreatmentProgram/g, 'SkinRejuvenation');

// Replace text content
content = content.replace(/Psoriasis Treatment/g, 'Skin Rejuvenation');
content = content.replace(/Psoriasis/g, 'Skin Rejuvenation');
content = content.replace(/psoriasis/g, 'skin rejuvenation');

// Replace specific Hero section
const heroStart = content.indexOf('{/* Hero Section */}');
const heroEnd = content.indexOf('</section>', heroStart) + 10;

const newHero = `      {/* Hero Section - EXACT SCIATICA STYLE */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurvedic Programs</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Ayurvedic Skin Rejuvenation Therapy in India</h1>
              <p className="text-lg md:text-xl text-white/90">Restore your natural radiance with physician-led Ayurvedic care.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>Kerala, Rishikesh, Goa</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 Excellent Rating</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-semibold" onClick={() => setQuoteModalOpen(true)}>
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>`;

content = content.substring(0, heroStart) + newHero + content.substring(heroEnd);

// Fix CTA image
content = content.replace(/\/Treatments-images\/Skin Rejuvenation\.jpg/g, '/program-images/skin-rejuvenation.png');

fs.writeFileSync(skinRejPath, content);
console.log('Successfully generated SkinRejuvenation.tsx');
