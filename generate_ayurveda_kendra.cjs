const fs = require('fs');

let content = fs.readFileSync('src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx', 'utf8');

// 1. Rename Component Name First
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, "AyurvedaKendraHospital");

// 2. Title & Navigation
content = content.replace(/Apollo AyurVAID Hospitals/g, "Ayurveda Kendra");
content = content.replace(/Apollo AyurVAID Nehru Enclave/g, "Ayurveda Kendra Delhi");

// 3. Hero Details
content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, "Authentic Kerala Panchakarma | Chronic Disease & Pain Management");
content = content.replace(/Nehru Enclave, New Delhi, India/g, "Safdarjung Enclave, Delhi, India");
content = content.replace(/>4\.3</g, ">4.6<");
content = content.replace(/\(170 Reviews\)/g, "(2,200+ Reviews)");

// 5. Authentic Ayurvedic Excellence
content = content.replace(/Authentic Ayurvedic Excellence <br className="hidden lg:block" \/>\s*at Ayurveda Kendra/g, 'Authentic Ayurvedic Excellence <br className="hidden lg:block" />\n                  at Ayurveda Kendra');
content = content.replace(/Welcome to <strong className="font-bold text-\[#2C4E5A\]">Ayurveda Kendra<\/strong>[\s\S]*?(?=<\/p>)/, "Welcome to <strong className=\"font-bold text-[#2C4E5A]\">Ayurveda Kendra</strong>, Delhi's most authentic and internationally acclaimed Kerala Ayurveda center. Established in 1990 by Dr. Sudha Asokan, a third-generation Ayurvedic physician with over 40 years of clinical experience, our NABH and ISO-certified center brings the true healing essence of Kerala to the capital. We specialize in non-surgical cures for slip disc, paralysis, arthritis, spondylitis, and post-polio syndrome.");
content = content.replace(/<p>[\s\S]*?AyurVAID is India's first[\s\S]*?(?=<\/p>)/, "<p>\n                      With a dedicated 16-bed inpatient residential facility and an in-house GMP-certified medicine manufacturing unit in Kerala, Ayurveda Kendra ensures the highest standards of purity and care. Patients from all six inhabited continents have experienced transformative healing through our strict adherence to classical protocols, customized Ayurvedic diets, and personalized yoga sessions.");

// 6. Top Ayurveda Programs
content = content.replace(/Top Ayurveda Programs in Ayurveda Kendra/g, 'Top Ayurveda Programs in Ayurveda Kendra');
const oldProgramsStr = `    {
      title: "Precision Stroke Rehabilitation",
      description: "A specialized inpatient program addressing the crucial 'Golden Window' post-stroke. Combines targeted Panchakarma (like Shirobasti, Nasya) with neuro-rehabilitation exercises to accelerate motor recovery and speech improvement.",
      icon: <Activity className="h-6 w-6 text-white" />
    },
    {
      title: "Autoimmune & Arthritis Management",
      description: "Protocol-driven interventions for Rheumatoid Arthritis, Ankylosing Spondylitis, and SLE. Uses deep tissue detox and immunomodulatory herbs to reduce inflammation markers and restore joint mobility without steroids.",
      icon: <Droplet className="h-6 w-6 text-white" />
    },
    {
      title: "Metabolic & PCOS Reversal",
      description: "A comprehensive evidence-based program for PCOS, Type 2 Diabetes, and obesity. Integrates cellular detox (Virechana), customized dietetics, and metabolic-correcting herbs to address root hormonal imbalances.",
      icon: <Heart className="h-6 w-6 text-white" />
    },
    {
      title: "Integrative Oncology Support",
      description: "Complementary Ayurvedic care to manage the side effects of chemotherapy/radiation, improve quality of life, boost immunity, and support long-term remission in cancer survivors.",
      icon: <ShieldCheck className="h-6 w-6 text-white" />
    },
    {
      title: "Neurological & Spine Care",
      description: "Advanced conservative management for Parkinson's, Sciatica, and severe Lumbar Spondylosis. Utilizes specialized Kati Basti, Kati Pichu, and nerve-nourishing therapies to avoid surgical interventions.",
      icon: <Sparkles className="h-6 w-6 text-white" />
    },
    {
      title: "Psoriasis & Skin Disorders",
      description: "Systemic blood purification protocols using Takradhara, specific Vamana therapies, and potent Ayurvedic formulations to manage chronic psoriasis, eczema, and severe dermatitis.",
      icon: <Leaf className="h-6 w-6 text-white" />
    }`;
const newProgramsStr = `    {
      title: "Spine & Joint Care",
      description: "Advanced non-surgical management for Slip Disc, Sciatica, Arthritis, and Spondylitis. Utilizes specialized Kati Basti, Kati Pichu, and deep-tissue therapies to relieve nerve compression and restore mobility.",
      icon: <Activity className="h-6 w-6 text-white" />
    },
    {
      title: "Neurological Rehabilitation",
      description: "Comprehensive care for Paralysis, Parkinson's, and Post-Polio Syndrome. Combines targeted Panchakarma (like Shirobasti, Nasya) with nerve-nourishing therapies to accelerate motor recovery.",
      icon: <Droplet className="h-6 w-6 text-white" />
    },
    {
      title: "Respiratory Health",
      description: "Authentic therapies for Asthma, Sinusitis, and chronic respiratory disorders. Uses deep tissue detox, Nasya, and immunomodulatory herbs to clear airways and build lung capacity.",
      icon: <Heart className="h-6 w-6 text-white" />
    },
    {
      title: "Mental Health & Stress",
      description: "Soothing therapies including Shirodhara and Njavarakizhi to treat Insomnia, Anxiety, and Depression, helping to calm the nervous system and promote deep restorative sleep.",
      icon: <ShieldCheck className="h-6 w-6 text-white" />
    },
    {
      title: "Skin & Autoimmune Care",
      description: "Systemic blood purification protocols using Takradhara, Virechana, and potent Ayurvedic formulations to manage Psoriasis, Eczema, and Autoimmune disorders effectively.",
      icon: <Sparkles className="h-6 w-6 text-white" />
    },
    {
      title: "Panchakarma Detoxification",
      description: "Complete body purification following strict classical Kerala protocols. Includes Vamana, Virechana, Basti, and Nasya to eliminate deep-seated toxins and rejuvenate cellular health.",
      icon: <Leaf className="h-6 w-6 text-white" />
    }`;
content = content.replace(oldProgramsStr, newProgramsStr);

// 7. Why Choose
const oldFeaturesStr = `    {
      title: "Precision Ayurveda Protocols",
      description: "We don't rely on guesswork. Every treatment is backed by rigorous clinical data and standard operating procedures (SOPs).",
      icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "NABH Accredited Hospital",
      description: "Operating at the highest national standards of clinical governance, hygiene, and patient safety.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Apollo Hospitals Integration",
      description: "Combining the ancient wisdom of Ayurveda with the trusted medical infrastructure of the Apollo Hospital network.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Exceptional Outcomes",
      description: "A highly trusted center with a 4.3 Google rating from successful patient recoveries.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    }`;
const newFeaturesStr = `    {
      title: "Dr. Sudha Asokan's Legacy",
      description: "Benefit from the expertise of a third-generation Ayurvedic physician with over 40 years of profound clinical experience.",
      icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Authentic Kerala Heritage",
      description: "True to its roots, offering uncompromised, classical Kerala Panchakarma therapies using genuine herbal formulations.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "In-house GMP Pharmacy",
      description: "Ensuring the highest purity and efficacy with our own GMP-certified Ayurvedic medicine manufacturing unit located in Kerala.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Global Recognition",
      description: "A highly trusted NABH & ISO certified center that has successfully treated patients from all six inhabited continents.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    }`;
content = content.replace(oldFeaturesStr, newFeaturesStr);

// 10. Reviews / Patient Stories
const oldReviewsStr = `    {
      id: 1,
      name: "Ravi Kumar",
      location: "New Delhi",
      text: "I was suffering from severe sciatica for years. The personalized Kati Basti and precision care at AyurVAID gave me a new lease on life. The doctors are highly analytical.",
      rating: 5
    },
    {
      id: 2,
      name: "Elena M.",
      location: "UK",
      text: "The stroke rehabilitation program here is phenomenal. The integration of Ayurveda with modern parameters helped my father recover his speech and mobility faster than expected.",
      rating: 5
    },
    {
      id: 3,
      name: "Sneha P.",
      location: "Gurgaon",
      text: "Treated my PCOS here. Unlike other places, they focus on metabolic correction. The inpatient facility is spotless, and the food is perfectly customized.",
      rating: 5
    }`;
const newReviewsStr = `    {
      id: 1,
      name: "Raman Sharma",
      location: "Delhi",
      text: "Dr. Sudha Asokan's treatment for my Slip Disc was life-changing. I was advised surgery, but the specialized Kati Basti and authentic Kerala massages completely healed my back pain.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael T.",
      location: "USA",
      text: "Traveled from the US for my arthritis treatment. The 16-bed inpatient facility is incredibly comfortable, and the deep-tissue detox therapies brought back mobility I thought I had lost forever.",
      rating: 5
    },
    {
      id: 3,
      name: "Priyanka S.",
      location: "Gurugram",
      text: "The best place for genuine Kerala Ayurveda in North India. I underwent a 14-day Panchakarma detox here, and the purity of their in-house manufactured medicines makes a huge difference.",
      rating: 5
    },
    {
      id: 4,
      name: "Amit V.",
      location: "Noida",
      text: "My father suffered a paralytic attack and we brought him here for rehabilitation. The Shirobasti and nerve treatments under Dr. Sudha's guidance showed miraculous results in just a month.",
      rating: 5
    },
    {
      id: 5,
      name: "Sarah J.",
      location: "UK",
      text: "A truly authentic healing experience. The staff is highly professional, and the Njavarakizhi treatment completely cured my chronic insomnia and anxiety. Highly recommended for holistic wellness.",
      rating: 5
    }`;
content = content.replace(oldReviewsStr, newReviewsStr);

// 11. FAQ
const oldFaqStr = `    {
      question: "What is Precision Ayurveda?",
      answer: "Precision Ayurveda at AyurVAID means using exact, measurable clinical protocols to diagnose and treat diseases. It combines traditional Ayurvedic Nadi Pariksha with modern blood work and imaging to track the root cause and measure outcomes objectively."
    },
    {
      question: "Are your treatments covered by health insurance?",
      answer: "Yes, as a NABH-accredited hospital, our inpatient treatments are covered by most major health insurance providers. We also offer cashless hospitalization facilities for eligible policies."
    },
    {
      question: "Do you have inpatient (admission) facilities?",
      answer: "Yes, we have a fully equipped 40-bed inpatient facility with different room categories, 24/7 nursing care, an Ayurvedic diet kitchen, and dedicated therapy rooms."
    },
    {
      question: "Is AyurVAID only for chronic diseases?",
      answer: "While we specialize in chronic and severe diseases (like stroke, arthritis, and cancer support), we also offer comprehensive preventive health checkups, detox programs, and stress management therapies."
    },
    {
      question: "How is the diet managed during inpatient stay?",
      answer: "Diet is considered medicine in our protocol. Our clinical dietitians and Vaidyas prescribe a specific 'Pathya' (Sattvic) diet for each patient, which is freshly prepared in our customized Ayurvedic kitchen."
    }`;
const newFaqStr = `    {
      question: "Who leads the treatments at Ayurveda Kendra?",
      answer: "Treatments are led by Dr. Sudha Asokan, a third-generation Ayurvedic physician with over 40 years of clinical experience. She holds a BAMS from Kottakkal and an MD from Trivandrum, bringing unparalleled expertise in classical Kerala Ayurveda."
    },
    {
      question: "Does Ayurveda Kendra have its own medicines?",
      answer: "Yes, Ayurveda Kendra operates an in-house GMP-certified medicine manufacturing unit in Kerala. This ensures the highest standards of purity, authenticity, and efficacy in all the herbal oils and medicines used in our therapies."
    },
    {
      question: "Do you provide inpatient admission facilities?",
      answer: "Absolutely. We have a dedicated 16-bed inpatient residential facility equipped with comfortable rooms, offering an immersive healing environment with customized Ayurvedic diets and personalized yoga sessions upon request."
    },
    {
      question: "What conditions do you specialize in treating?",
      answer: "We specialize in non-surgical cures for chronic conditions such as Slip Disc, Paralysis, Arthritis, Spondylitis, Asthma, Sciatica, and Post-Polio Syndrome, using authentic Kerala Panchakarma therapies."
    },
    {
      question: "Are your therapies authentic Kerala Ayurveda?",
      answer: "Yes, we are known as Delhi's most authentic Kerala Ayurveda center. Our therapies strictly adhere to classical protocols, and our therapists are highly trained in traditional Kerala Panchakarma techniques."
    }`;
content = content.replace(oldFaqStr, newFaqStr);

// 12. Contact Information
// Update address
content = content.replace(/First Floor, F-block, 1, Ring Rd, Nehru Enclave, Kalkaji, New Delhi, Delhi 110019/g, "B-5/99, Safdarjung Enclave, New Delhi, Delhi 110029");
// Update Map Location
content = content.replace(/https:\/\/www\.google\.com\/maps\/embed\?pb=!1m18!1m12!1m3!1d3505\.03001874288!2d77\.25032541162981!3d28\.5388151874797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13\.1!3m3!1m2!1s0x390ce3d280b54bd3%3A0xc39f2130e61d80be!2sApollo%20AyurVAID%20Hospitals!5e0!3m2!1sen!2sin!4v1716964205001!5m2!1sen!2sin/g, "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6095593855734!2d77.19561081508083!3d28.55145158244983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce271b0b53465%3A0x67399db27e1f7c32!2sAyurveda%20Kendra!5e0!3m2!1sen!2sin!4v1716964205001!5m2!1sen!2sin");
// Distance & Transit
content = content.replace(/Approx\. 300m from Nehru Enclave Metro Station/g, "Approx. 800m from Green Park Metro Station");
content = content.replace(/15 km from IGI Airport/g, "12 km from IGI Airport");

// 13. Images
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/image 1\.webp/g, '/TOP cneters/delhi/Ayurveda Kendra (Dr. Sudha Asokan)/image 1.jfif');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/image 2\.webp/g, '/TOP cneters/delhi/Ayurveda Kendra (Dr. Sudha Asokan)/image 2.jfif');

fs.writeFileSync('src/pages/centers/AyurvedaKendraHospital.tsx', content);
