const fs = require('fs');
const path = 'src/pages/centers/ChBrahmPrakashAyurvedCharakSansthan.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replacements for Dr. Bheema Bhatta and other Apollo references
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'highly qualified specialists');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior specialists');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'expert physicians');
content = content.replace(/Dr\. Deepika Gunawant/g, 'renowned doctors');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'expert faculty members');
content = content.replace(/Apollo Hospitals/g, 'the Government of NCT of Delhi');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'top national health accreditations');
content = content.replace(/NABH-accredited 40-bed/g, 'premier 200-bed');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the vast green campus at Khera Dabar');

// Update About section paragraph that was specifically copied from Apollo
const oldAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Ch. Brahm Prakash Ayurved Charak Sansthan</strong>, Khera Dabar's premier destination for authentic, precision-driven Ayurvedic clinical care and stroke rehabilitation. Backed by the medical excellence of the Government of NCT of Delhi and recognized with top national health accreditations, our premier 200-bed hospital combines classical Vedic wisdom with modern clinical standards. Conveniently located on the vast green campus at Khera Dabar, our hospital provides a highly clean and protocol-driven healing environment. Under the leadership of highly qualified specialists (with over 40 years of experience) and Additional Chief Physician expert physicians, our center is recognized for its therapeutic excellence in chronic neurological diseases, joint disorders, and systemic detoxification.`;

const newAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Ch. Brahm Prakash Ayurved Charak Sansthan</strong>, New Delhi's premier destination for authentic, precision-driven Ayurvedic clinical care. Established under the Ministry of AYUSH and Govt of NCT of Delhi, it stands as the 'AIIMS of Ayurveda'. Spread across an expansive 95-acre pollution-free green campus in Khera Dabar, the institute houses a massive 200-bed hospital, specialized clinical departments, and an Ayurvedic pharmacy. It provides high-quality, classical Ayurvedic treatments with free medicine distribution to the public.`;

content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const oldAbout2 = `As a premier clinical destination, we maintain the highest standards of safety, quality, and medical precision, recording an extraordinary 98% patient satisfaction rate. Our experienced medical team, including Senior Physician renowned doctors and expert faculty members, specializes in treating stroke rehabilitation, Parkinson's disease, osteoarthritis, rheumatoid arthritis, PCOS, nephrotic syndrome, gastrointestinal conditions, and integrative oncology.`;

const newAbout2 = `As a premier clinical destination, we maintain the highest standards of safety and medical precision. Our experienced medical team specializes in treating joint disorders, respiratory conditions, chronic skin diseases, and metabolic issues. We offer extensive Panchakarma detox programs and holistic disease management utilizing authentic classical therapies and dedicated patient care.`;

content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Update Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience authentic classical Ayurvedic treatments at Delhi\'s premier government institution, Ch. Brahm Prakash Ayurved Charak Sansthan, a 200-bed facility in Khera Dabar.');

// Update Contact Section Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Chaudhary+Brahm+Prakash+Ayurved+Charak+Sansthan');

// Update WhatsApp text
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Ch.%20Brahm%20Prakash%20Ayurved%20Charak%20Sansthan');

fs.writeFileSync(path, content);
console.log("Updated CBPACS content successfully!");
