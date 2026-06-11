const fs = require('fs');
const path = 'src/pages/centers/HolyFamilyHospitalAyurvedaDepartment.tsx';

let content = fs.readFileSync(path, 'utf8');

// 1. Replace wrong paths with correct ones
content = content.replace(/\/TOP cneters\/delhi\/Holy Family Hospital – Ayurveda Department \(Okhla\)\/main\.jpeg/g, '/TOP cneters/delhi/Holy Family Hospital – Ayurveda Department/image 1.jfif');
content = content.replace(/\/TOP cneters\/delhi\/Holy Family Hospital – Ayurveda Department \(Okhla\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Holy Family Hospital – Ayurveda Department/image 2.jfif');

// 2. Expand testimonials to 3-4 lines
const newTestimonials = `const testimonials = [
    {
      title: "Exceptional Joint Care",
      review: "The Ayurveda department here is wonderful. The doctors are very patient, thorough, and highly professional in their approach to chronic ailments. The Kati Basti treatment and subsequent oil massages significantly reduced my severe lower back pain within just a few sessions. I appreciate the hospital's high hygiene standards.",
      name: "Sanjay Kumar",
      verified: true,
      location: "New Delhi, India",
      condition: "Lower Back Pain",
      rating: 5
    },
    {
      title: "Holistic Healing Environment",
      review: "Being inside Holy Family gives a profound sense of medical security, while the Ayurveda wing provides deeply authentic and calming traditional therapies. The integration of modern diagnostics with ancient healing techniques is practically flawless. I came in for severe stress and fatigue, and left feeling completely rejuvenated.",
      name: "Meera Reddy",
      verified: true,
      location: "Delhi, India",
      condition: "Stress & Fatigue",
      rating: 5
    },
    {
      title: "Great Relief for Digestion",
      review: "I suffered from chronic acidity and severe digestive distress for years without finding a permanent solution. The detailed Ayurvedic consultation here helped me understand my body type. The prescribed dietary changes along with their authentic herbal medicines have worked absolute wonders for my gut health.",
      name: "Amit Sharma",
      verified: true,
      location: "Okhla, India",
      condition: "Digestive Disorders",
      rating: 4
    },
    {
      title: "Effective Arthritis Management",
      review: "My knee arthritis had reached a point where daily movement was incredibly painful. The classical massage therapies and Janu Basti provided by the exceptionally trained therapists here have given me immense relief. I am now able to walk comfortably without relying on heavy painkillers.",
      name: "Pooja Singh",
      verified: true,
      location: "Noida, India",
      condition: "Knee Arthritis",
      rating: 5
    },
    {
      title: "Professional & Clean",
      review: "The hygiene standards at the Ayurveda department are excellent, exactly as one would expect from a major multispecialty hospital like Holy Family. The Shirodhara session I took for chronic migraines was incredibly relaxing, profoundly calming my nervous system and reducing the frequency of my headaches.",
      name: "Rahul Verma",
      verified: true,
      location: "Delhi, India",
      condition: "Migraines",
      rating: 4
    }
  ];`;

content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);

fs.writeFileSync(path, content);
console.log("Holy Family images fixed and reviews expanded!");
