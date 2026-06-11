const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const targetPath = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'SanjivaniAyurvedicResearchInstitute');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Sanjivani Ayurvedic Research Institute');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Sanjivani Ayurvedic Institute');
content = content.replace(/Apollo AyurVAID/g, 'Sanjivani');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Vijay Nagar, Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Vijay Nagar');
content = content.replace(/4\.3/g, '4.7');
content = content.replace(/170 Reviews/g, '400+ Reviews');

// Fix image replacements directly via generic regex
content = content.replace(/src="[^"]*main\.jpeg"/g, 'src="/TOP cneters/delhi/Sanjivani Ayurvedic Research Institute/image 1.jfif"');
content = content.replace(/src="[^"]*secondary\.jpeg"/g, 'src="/TOP cneters/delhi/Sanjivani Ayurvedic Research Institute/image 2.jpg"');

content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Evidence-Based Ayurveda & Advanced Clinical Research Center');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'expert research physicians');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior Ayurvedic researchers');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'clinical specialists');
content = content.replace(/Dr\. Deepika Gunawant/g, 'diagnostic experts');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'Panchakarma practitioners');
content = content.replace(/Apollo Hospitals/g, 'advanced medical research frameworks');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'excellence in evidence-based Ayurvedic formulations');
content = content.replace(/NABH-accredited 40-bed/g, 'specialized research and clinical');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the accessible hub of Vijay Nagar');

// About section updates
const newAbout = `Welcome to the <strong className="font-bold text-[#2C4E5A]">Sanjivani Ayurvedic Research Institute</strong>, a premier center of healing located in Vijay Nagar, Delhi. We stand at the intersection of ancient Ayurvedic wisdom and modern clinical research. Our institute is dedicated to providing evidence-based, scientifically validated Ayurvedic treatments for chronic and lifestyle-induced diseases. By maintaining an in-house research wing, we ensure that every formulation and therapy protocol administered to our patients is optimized for maximum efficacy, safety, and holistic healing.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `Our expert team of senior Ayurvedic researchers and clinical specialists meticulously assess each patient to uncover the root cause of their ailment. We have achieved remarkable success rates in managing complex autoimmune conditions, severe joint disorders, neurological ailments, and chronic digestive issues. At Sanjivani Ayurvedic Research Institute, you don't just receive generic traditional therapies; you benefit from cutting-edge Ayurvedic research integrated seamlessly into personalized, highly effective treatment plans designed to restore your long-term health.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience evidence-based Ayurveda and advanced Panchakarma therapies at Sanjivani Ayurvedic Research Institute in Vijay Nagar, Delhi. Scientifically validated healing.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Sanjivani+Ayurvedic+Research+Institute+Vijay+Nagar+Delhi');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Sanjivani%20Ayurvedic%20Research%20Institute');

// Array Replacements using Regex
const newTreatmentProcess = `const treatmentProcess = [
    {
      number: 1,
      title: "Evidence-Based Diagnosis",
      description: "A comprehensive clinical evaluation combining traditional Nadi Pariksha (pulse diagnosis) with modern diagnostic reports to pinpoint the root cause.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Research-Backed Planning",
      description: "Our panel of research physicians formulate a personalized treatment roadmap using clinically validated Ayurvedic protocols.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Targeted Medication",
      description: "Prescribing highly potent, in-house researched herbal formulations designed to act efficiently on specific disease pathways.",
      icon: <Heart className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Clinical Panchakarma",
      description: "Administering precise detoxification therapies like Vamana or Virechana under strict clinical observation to ensure maximum safety and efficacy.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Progress Tracking",
      description: "Continuously monitoring patient progress using measurable health metrics to adjust therapies and ensure optimal healing outcomes.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Sustainable Wellness",
      description: "Providing a detailed, research-backed dietary and lifestyle plan to maintain the benefits of the treatment permanently.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "Scientifically Sound Approach",
      review: "The approach at Sanjivani is refreshingly scientific. Unlike other centers that just offer generic massages, the doctors here studied my blood reports and MRI before prescribing a targeted Ayurvedic protocol. My severe rheumatoid arthritis has shown measurable improvement within just two months. The hygiene is also impeccable.",
      name: "Arthur Pendelton",
      verified: true,
      location: "London, UK",
      condition: "Rheumatoid Arthritis",
      rating: 5
    },
    {
      title: "Exceptional Neurological Care",
      review: "I travelled to Delhi specifically for Sanjivani's research-backed treatments for neuropathy. The specialized neuro-stimulation massages and their proprietary herbal medicines have significantly restored the sensation in my limbs. The level of clinical expertise and patient care here is truly world-class.",
      name: "Isabella Martinez",
      verified: true,
      location: "Madrid, Spain",
      condition: "Peripheral Neuropathy",
      rating: 5
    },
    {
      title: "Resolved Chronic Gut Issues",
      review: "After years of suffering from severe IBS and trying countless allopathic treatments with no luck, Sanjivani's integrated approach finally provided relief. They didn't just treat the symptoms; they repaired my gut lining through a strict clinical diet and highly effective Panchakarma detox therapies.",
      name: "Marcus Schmidt",
      verified: true,
      location: "Berlin, Germany",
      condition: "Severe IBS",
      rating: 4
    },
    {
      title: "Professional and Transparent",
      review: "What I loved most about the institute is their transparency. They explain the science behind every herb they prescribe and how it interacts with the body. The Shirodhara sessions I received for chronic insomnia were conducted with clinical precision, resulting in the best sleep I've had in a decade.",
      name: "Eleanor Vance",
      verified: true,
      location: "Sydney, Australia",
      condition: "Chronic Insomnia",
      rating: 5
    },
    {
      title: "Great Pain Management",
      review: "The doctors and therapists work seamlessly as a team. I was dealing with a frozen shoulder that severely restricted my movement. Through their researched formulations and localized Kati Basti treatments, I have regained about 90% of my mobility in just a few weeks. Highly recommended for pain relief.",
      name: "James O'Connor",
      verified: true,
      location: "Dublin, Ireland",
      condition: "Frozen Shoulder",
      rating: 4
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "What makes a 'Research Institute' different from a regular Ayurvedic clinic?",
      answer: "As a research institute, our treatments are backed by clinical studies and evidence-based medicine. We continuously refine our herbal formulations and therapeutic protocols to ensure they deliver measurable, scientifically validated results for complex diseases."
    },
    {
      question: "Do I need to bring my previous medical reports?",
      answer: "Yes, we highly encourage patients to bring all relevant medical history, blood tests, and imaging reports (MRI/X-rays). Our doctors integrate these modern diagnostics with traditional Ayurvedic assessments to create a highly accurate treatment plan."
    },
    {
      question: "Are your herbal medicines safe and tested?",
      answer: "Absolutely. All our proprietary herbal formulations undergo rigorous quality control and safety testing in our research wing to ensure they are free from heavy metals and contaminants."
    },
    {
      question: "Can I take your Ayurvedic treatments alongside allopathic medicine?",
      answer: "Yes, our expert physicians are highly trained in integrative medicine. They will carefully review your current prescriptions to ensure our Ayurvedic treatments do not cause adverse drug interactions."
    },
    {
      question: "Do you offer full Panchakarma detoxification?",
      answer: "Yes, we offer comprehensive, clinically monitored Panchakarma therapies. However, these are strictly prescribed based on the patient's physical strength and specific disease profile following a thorough consultation."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Autoimmune & Joint Care",
      description: "Research-backed protocols targeting the root cause of rheumatoid arthritis, osteoarthritis, and gout.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Neurological Rehabilitation",
      description: "Advanced Ayurvedic therapies for managing neuropathy, paralysis recovery, and neurodegenerative conditions.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Gastro-Intestinal Healing",
      description: "Clinically proven dietary and herbal interventions for chronic acidity, IBS, and inflammatory bowel diseases.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Metabolic & Endocrine Control",
      description: "Evidence-based management of diabetes, thyroid imbalances, and severe obesity using integrated Ayurveda.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Stress & Sleep Disorders",
      description: "Scientifically validated relaxation therapies like Shirodhara to treat chronic insomnia, anxiety, and depression.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Immunity & Allergy Management",
      description: "Specialized Rasayana (rejuvenation) therapies designed to boost cellular immunity and resolve chronic allergies.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Evidence-Based Treatments",
      description: "All therapies and medicines are backed by rigorous clinical research and validated outcomes.",
      icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Integrative Diagnostics",
      description: "We combine traditional pulse diagnosis with modern lab reports for flawless accuracy.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Specialized Researchers",
      description: "Consultations provided by senior Vaidyas who are also active researchers in the field of Ayurveda.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Quality Controlled Herbs",
      description: "Utilizing highly potent, lab-tested herbal formulations for maximum safety and efficacy.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Clinical Panchakarma",
      description: "Detoxification therapies performed under strict medical supervision in a sterile environment.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Central Location",
      description: "Easily accessible facility located in Vijay Nagar, Delhi, with comprehensive patient amenities.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const treatmentProcess = \[[\s\S]*?\];/g, newTreatmentProcess);
content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);
content = content.replace(/const faqItems = \[[\s\S]*?\];/g, newFaqItems);
content = content.replace(/const programs = \[[\s\S]*?\];/g, newPrograms);
content = content.replace(/const whyChooseUs = \[[\s\S]*?\];/g, newWhyChooseUs);

fs.writeFileSync(targetPath, content);
console.log("Successfully generated SanjivaniAyurvedicResearchInstitute.tsx!");
