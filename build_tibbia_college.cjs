const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const targetPath = 'src/pages/centers/AandUTibbiaCollegeHospitalPanchakarma.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'AandUTibbiaCollegeHospitalPanchakarma');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'A & U Tibbia College & Hospital');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Tibbia College Hospital');
content = content.replace(/Apollo AyurVAID/g, 'Tibbia College');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Karol Bagh, New Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Karol Bagh');
content = content.replace(/4\.3/g, '4.1');
content = content.replace(/170 Reviews/g, '500+ Reviews');

// Image replacements explicitly (avoiding the bug by using regex correctly)
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/A & U Tibbia College & Hospital – Panchakarma/image 1.webp');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/A & U Tibbia College & Hospital – Panchakarma/image 2.webp');

content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Historic Government Ayurveda Institution & Premium Panchakarma Care');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'highly qualified government-appointed Vaidyas');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior professors and Vaidyas');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'expert clinical staff');
content = content.replace(/Dr\. Deepika Gunawant/g, 'traditional medicine specialists');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'Panchakarma experts');
content = content.replace(/Apollo Hospitals/g, 'the Government of Delhi');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'over a century of historic medical excellence');
content = content.replace(/NABH-accredited 40-bed/g, 'large-scale academic and clinical');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the historic Karol Bagh district');

// About section updates
const newAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">A & U Tibbia College & Hospital – Panchakarma</strong>, a highly esteemed historic government institution established in 1921, located in Karol Bagh, New Delhi. As one of the oldest and most prestigious Ayurveda and Unani academic hospitals in India, we provide profound traditional healing therapies backed by immense clinical expertise. We specialize in authentic Panchakarma detoxification, chronic disease management, and holistic lifestyle interventions. By combining academic rigor with extensive patient care, we bring the true essence of ancient Indian medicine to thousands of people seeking affordable and highly effective treatments.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `Our distinguished team of Vaidyas, selected by UPSC, ensure that every treatment is performed with deep knowledge of classical texts and vast practical experience. We hold an exceptional reputation for effectively managing chronic joint pain, neurological conditions, digestive disorders, and metabolic diseases. At Tibbia College's Panchakarma center, you benefit from a comprehensive, tailor-made journey of healing that draws on over a century of clinical heritage and unmatched exposure to diverse medical cases.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience authentic Panchakarma therapies at A & U Tibbia College & Hospital in Karol Bagh, New Delhi. A historic government institution established in 1921 offering expert Ayurveda care.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'A+And+U+Tibbia+College+Karol+Bagh+Delhi');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20A%20and%20U%20Tibbia%20College%20Hospital');

// Array Replacements using Regex
const newTreatmentProcess = `const treatmentProcess = [
    {
      number: 1,
      title: "Clinical OPD Consultation",
      description: "A detailed clinical assessment by our expert government Vaidyas to diagnose your condition based on classical Ayurvedic parameters.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Prescriptive Therapy Planning",
      description: "Our senior doctors design a specific treatment roadmap involving Panchakarma therapies and authentic herbal formulations.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Purvakarma (Preparation)",
      description: "Preparing the body using warm medicated oils (Snehana) and herbal steam (Swedana) to loosen deep-seated toxins.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Pradhana Karma (Detox)",
      description: "Administering core Panchakarma procedures like Basti or Nasya under the strict supervision of experienced academic faculty.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Post-Detox Care",
      description: "Paschatkarma therapies focusing on recovery, immunity strengthening, and tissue nourishment using Rasayana herbs.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Dietary Guidance",
      description: "Providing a customized Ayurvedic diet chart and daily routine guidelines to sustain health and prevent disease recurrence.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "Exceptional Traditional Care",
      review: "The clinical expertise at this historic institution is simply unparalleled. The doctors are incredibly knowledgeable and the Panchakarma treatments drastically reduced my chronic back pain. It is amazing to experience such authentic, profound healing in the heart of Delhi.",
      name: "Emma Richardson",
      verified: true,
      location: "London, UK",
      condition: "Chronic Backache",
      rating: 5
    },
    {
      title: "Genuine Ayurvedic Healing",
      review: "I travelled specifically to undergo treatment at Tibbia College due to its century-old legacy. The deep diagnostic skills of the Vaidyas and the sheer authenticity of the therapies provided immense relief for my severe arthritis. Highly recommended for genuine Ayurveda.",
      name: "Marcus Weber",
      verified: true,
      location: "Berlin, Germany",
      condition: "Severe Arthritis",
      rating: 5
    },
    {
      title: "Effective Neurological Support",
      review: "The Shirodhara and specialized massage therapies I received here were exceptionally helpful for my ongoing migraine and stress issues. The doctors take the time to deeply understand your body constitution before prescribing any treatment protocol.",
      name: "Sarah O'Connor",
      verified: true,
      location: "Dublin, Ireland",
      condition: "Migraines & Stress",
      rating: 4
    },
    {
      title: "Excellent Panchakarma Detox",
      review: "Undergoing a full Panchakarma detox at a government hospital with such a rich history was a unique and highly beneficial experience. The therapists are skilled, and I felt completely rejuvenated and lighter after completing the rigorous two-week program.",
      name: "James Chen",
      verified: true,
      location: "Vancouver, Canada",
      condition: "Full Body Detox",
      rating: 4
    },
    {
      title: "Affordable and High Quality",
      review: "Finding such high-quality, authentic Ayurvedic care that doesn't compromise on clinical standards is rare. The herbal medications and diet plans provided by the senior doctors completely resolved my long-standing digestive and gut health issues.",
      name: "Elena Rossi",
      verified: true,
      location: "Rome, Italy",
      condition: "Digestive Issues",
      rating: 5
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "What makes A & U Tibbia College & Hospital unique?",
      answer: "Established in 1921, it is one of India's oldest and most prestigious government institutions, offering unparalleled clinical expertise and authentic treatments rooted in over a century of academic and medical heritage."
    },
    {
      question: "Are the doctors fully qualified?",
      answer: "Yes, our hospital is staffed by highly experienced Vaidyas, many of whom are senior academic professors appointed through rigorous government selection processes (UPSC)."
    },
    {
      question: "How can I book a Panchakarma treatment?",
      answer: "You must first consult with our Ayurvedic doctors in the OPD. Based on their detailed diagnosis of your condition, they will prescribe and schedule the appropriate Panchakarma therapies."
    },
    {
      question: "Do you treat international patients?",
      answer: "Yes, we welcome patients from all over the world who seek genuine, classical Ayurvedic treatments and holistic healing at an esteemed historical institution."
    },
    {
      question: "Where is the hospital located?",
      answer: "We are centrally located in Karol Bagh, New Delhi, making it easily accessible via public transport, including the nearby metro station."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Classical Panchakarma",
      description: "Comprehensive bodily purification therapies to eliminate deep-seated toxins, conducted under expert academic supervision.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Chronic Joint Care",
      description: "Targeted therapies like Kati Basti and Janu Basti for severe backache, sciatica, and osteoarthritis management.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Neurological & Stress Disorders",
      description: "Calming treatments including Shirodhara and Nasya to alleviate anxiety, insomnia, paralysis recovery, and migraines.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Gastrointestinal Health",
      description: "Ayurvedic management of hyperacidity, IBS, and chronic constipation through targeted diet and herbal formulations.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Metabolic Disease Management",
      description: "Holistic lifestyle and therapeutic interventions to manage conditions like diabetes and obesity naturally.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Respiratory Immunity",
      description: "Specialized Ayurvedic management for asthma, chronic cough, sinusitis, and post-viral recovery.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Century-Old Legacy",
      description: "Established in 1921, carrying an unmatched historical reputation in traditional Indian medicine.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Expert Government Faculty",
      description: "Consultations provided by highly qualified senior professors and UPSC-selected medical officers.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Vast Clinical Experience",
      description: "Treating thousands of complex cases annually gives our doctors unparalleled practical expertise.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Classical Treatment Protocols",
      description: "Strict adherence to ancient Ayurvedic texts ensuring pure, unadulterated healing methodologies.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Cost-Effective Care",
      description: "As a premier government hospital, we offer high-quality treatments that are accessible and affordable.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Central Karol Bagh Location",
      description: "Situated in the heart of Delhi, offering excellent connectivity for both local and international patients.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const treatmentProcess = \[[\s\S]*?\];/g, newTreatmentProcess);
content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);
content = content.replace(/const faqItems = \[[\s\S]*?\];/g, newFaqItems);
content = content.replace(/const programs = \[[\s\S]*?\];/g, newPrograms);
content = content.replace(/const whyChooseUs = \[[\s\S]*?\];/g, newWhyChooseUs);

fs.writeFileSync(targetPath, content);
console.log("Successfully generated AandUTibbiaCollegeHospitalPanchakarma.tsx!");
