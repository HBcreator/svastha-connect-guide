const fs = require('fs');

let content = fs.readFileSync('src/pages/centers/GoaSianSpa.tsx', 'utf8');

const target = `                      <img 
                        src="/Anchor pages/Goa centers/Goa Sian Spa/image 2.jpg" 
                        alt="Goa Sian Spa Ayurvedic treatment space"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  CONTACT`;

const replacement = `                      <img 
                        src="/Anchor pages/Goa centers/Goa Sian Spa/image 2.jpg" 
                        alt="Goa Sian Spa Ayurvedic treatment space"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 text-center border-t border-[#2C4E5A]/10 mt-12">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2C4E5A] leading-relaxed">
                Your journey to renewed health begins with a single step.{" "}
                <span 
                  className="text-[#2C4E5A] underline cursor-pointer hover:text-[#2C4E5A]/80 font-bold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  CONTACT`;

if (content.includes('alt="Goa Sian Spa Ayurvedic treatment space"')) {
    let startIdx = content.indexOf('alt="Goa Sian Spa Ayurvedic treatment space"');
    let searchSegment = content.substring(startIdx - 150, startIdx + 200);
    console.log("Found segment around alt:", searchSegment);
    
    // Manual replacement using indices
    let imgStart = content.indexOf('<img', startIdx - 150);
    let onClickStart = content.indexOf('onClick={() => setQuoteModalOpen(true)}', startIdx);
    
    if (imgStart !== -1 && onClickStart !== -1) {
        let before = content.substring(0, imgStart);
        let after = content.substring(onClickStart);
        
        let newContent = before + replacement.substring(0, replacement.indexOf('onClick={')) + after;
        fs.writeFileSync('src/pages/centers/GoaSianSpa.tsx', newContent);
        console.log("Successfully fixed syntax.");
    } else {
        console.log("Could not find start or end index.");
    }
}
