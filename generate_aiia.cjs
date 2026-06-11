const fs = require('fs');

let template = fs.readFileSync('src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx', 'utf8');

// Replace Component Name
template = template.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'AllIndiaInstituteOfAyurveda');

// Replace Title and subtitle
template = template.replace(/Apollo AyurVAID Hospitals/g, 'All India Institute of Ayurveda (AIIA)');
template = template.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Apex Institute under Ministry of AYUSH | 200-Bed Tertiary Care Hospital');

// Replace Location and Rating
template = template.replace(/Nehru Enclave, New Delhi, India/g, 'Sarita Vihar, New Delhi, India');
template = template.replace(/>4\.3</g, '>4.1<');
template = template.replace(/\(170 Reviews\)/g, '(1,000+ Reviews)');

// Replace Breadcrumb
template = template.replace(/Apollo AyurVAID Hospital New Delhi/g, 'All India Institute of Ayurveda (AIIA)');

// Replace Image Paths
template = template.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/All India Institute of Ayurveda (AIIA)/image 1.webp');
template = template.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/All India Institute of Ayurveda (AIIA)/image 2.webp');

// Replace Phone
template = template.replace(/\+91 989 xxxx xxx/g, '+91 11 2695 0401');

// Replace WhatsApp Link (just generic)
template = template.replace(/Apollo%20AyurVAID%20Nehru%20Enclave/g, 'All%20India%20Institute%20of%20Ayurveda');

// Replace Meta Tags
template = template.replace(/Apollo AyurVAID Hospital Nehru Enclave Delhi \| Precision Ayurveda & Rehab/g, 'All India Institute of Ayurveda (AIIA) Sarita Vihar Delhi');
template = template.replace(/Experience authentic Precision Ayurveda, stroke rehabilitation, and joint care under Dr\. Bheema Bhatta at the NABH-accredited, 40-bed Apollo AyurVAID Hospital in Nehru Enclave, New Delhi\./g, 'Experience authentic Ayurveda at the All India Institute of Ayurveda (AIIA) in Sarita Vihar, New Delhi. An apex institute under the Ministry of AYUSH.');

// Replace About Content
template = template.replace(/Welcome to <strong className="font-bold text-\[#2C4E5A\]">Apollo AyurVAID Hospitals<\/strong>.*?integrative oncology\./s, `Welcome to <strong className="font-bold text-[#2C4E5A]">All India Institute of Ayurveda (AIIA)</strong>, established under the Ministry of AYUSH, Government of India, as an apex institute for Ayurveda. Located in Sarita Vihar, New Delhi, it serves as a bridge between traditional Ayurvedic wisdom and modern diagnostic science. The institute boasts a state-of-the-art 200-bed hospital, intensive care units, and a dedicated Panchakarma facility.</p>
                  
                  <div className="lg:hidden py-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/50 aspect-[16/10]">
                        <img 
                          src="/TOP cneters/delhi/All India Institute of Ayurveda (AIIA)/image 2.webp" 
                          alt="AIIA accommodation"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp"; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    Recognized globally, AIIA conducts cutting-edge research, clinical validation, and offers tertiary care across diverse specializations. As a premier clinical destination, we maintain the highest standards of safety, quality, and medical precision. Our experienced medical team specializes in treating stroke rehabilitation, osteoarthritis, rheumatoid arthritis, PCOS, gastrointestinal conditions, and integrative medicine.`);

template = template.replace(/Apollo AyurVAID Hospitals today\./g, 'AIIA today.');
template = template.replace(/at Apollo AyurVAID\?/g, 'at AIIA?');
template = template.replace(/at Apollo AyurVAID\./g, 'at AIIA.');

// Map Address Replacement
template = template.replace(/Apollo AyurVAID Hospitals<br \/>\s*R2, Outer Ring Road, Pocket 40\/203, Nehru Enclave, Kalkaji<br \/>\s*New Delhi, Delhi, India/g, 'All India Institute of Ayurveda (AIIA)<br />Mathura Road, Gautam Puri, Sarita Vihar<br />New Delhi, Delhi, India');

// Map Transit Replacement
template = template.replace(/Approx\. 500 meters from Nehru Enclave Metro Station \(Magenta Line\) \/ Nehru Place Metro Station \(Violet Line\)/g, 'Approx. 1.2 km from Sarita Vihar Metro Station (Violet Line)');

template = template.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'All+India+Institute+of+Ayurveda+Sarita+Vihar+New+Delhi');

// Write the file
fs.writeFileSync('src/pages/centers/AllIndiaInstituteOfAyurveda.tsx', template);
