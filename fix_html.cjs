const fs = require('fs');
const file = 'src/pages/centers/AyurvedaKendraHospital.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `<img 
                          src="/TOP centers/delhi/Ayurveda Kendra (Dr. Sudha Asokan)/image 2.jfif" 
                          alt="Ayurveda Kendra accommodation"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}

              <div className="flex flex-col gap-8 order-first lg:order-last">`;

const fixedStr = `<img 
                          src="/TOP centers/delhi/Ayurveda Kendra (Dr. Sudha Asokan)/image 2.jfif" 
                          alt="Ayurveda Kendra accommodation"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    As a premier clinical destination, we maintain the highest standards of safety, quality, and medical precision, recording an extraordinary 98% patient satisfaction rate. Our experienced medical team, including Senior Physician Dr. Deepika Gunawant and Dr. Jairam S. Nair, specializes in treating stroke rehabilitation, Parkinson's disease, osteoarthritis, rheumatoid arthritis, PCOS, nephrotic syndrome, gastrointestinal conditions, and integrative oncology.
                  </p>

                  <p className="mt-6">
                    We take pride in our in-house Ayurvedic pharmacy, where we prepare classical formulations using pristine herbs sourced from the dense forests of Kerala. This ensures that every medicine prescribed adheres to the strictest parameters of purity and efficacy. Our residential facilities provide a deeply healing atmosphere with dedicated meditation zones, organic sattvic meals, and serene surroundings that amplify the therapeutic process.
                  </p>

                  <p className="mt-6">
                    Beyond just treating the symptoms, Ayurveda Kendra emphasizes total mind-body rejuvenation. Our comprehensive Panchakarma detox programs are precisely customized after a thorough Nadi Pariksha (pulse diagnosis). With a deep commitment to the ancient Ayurvedic scriptures, we offer a true sanctuary where patients from across the globe find profound, long-lasting wellness and a renewed zest for life.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 order-first lg:order-last">`;

content = content.replace(targetStr, fixedStr);
fs.writeFileSync(file, content);
console.log("Fixed HTML!");
