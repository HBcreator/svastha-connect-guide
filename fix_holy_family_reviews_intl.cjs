const fs = require('fs');
const path = 'src/pages/centers/HolyFamilyHospitalAyurvedaDepartment.tsx';

let content = fs.readFileSync(path, 'utf8');

const newTestimonials = `const testimonials = [
    {
      title: "Exceptional Joint Care",
      review: "The Ayurveda department here is wonderful. The doctors are very patient, thorough, and highly professional in their approach to chronic ailments. The Kati Basti treatment and subsequent oil massages significantly reduced my severe lower back pain within just a few sessions. I appreciate the hospital's high hygiene standards.",
      name: "Sarah Jenkins",
      verified: true,
      location: "London, UK",
      condition: "Lower Back Pain",
      rating: 5
    },
    {
      title: "Holistic Healing Environment",
      review: "Being inside Holy Family gives a profound sense of medical security, while the Ayurveda wing provides deeply authentic and calming traditional therapies. The integration of modern diagnostics with ancient healing techniques is practically flawless. I came in for severe stress and fatigue, and left feeling completely rejuvenated.",
      name: "Michael Torres",
      verified: true,
      location: "California, USA",
      condition: "Stress & Fatigue",
      rating: 5
    },
    {
      title: "Great Relief for Digestion",
      review: "I suffered from chronic acidity and severe digestive distress for years without finding a permanent solution. The detailed Ayurvedic consultation here helped me understand my body type. The prescribed dietary changes along with their authentic herbal medicines have worked absolute wonders for my gut health.",
      name: "Elena Rostova",
      verified: true,
      location: "Moscow, Russia",
      condition: "Digestive Disorders",
      rating: 4
    },
    {
      title: "Effective Arthritis Management",
      review: "My knee arthritis had reached a point where daily movement was incredibly painful. The classical massage therapies and Janu Basti provided by the exceptionally trained therapists here have given me immense relief. I am now able to walk comfortably without relying on heavy painkillers.",
      name: "David Chen",
      verified: true,
      location: "Toronto, Canada",
      condition: "Knee Arthritis",
      rating: 5
    },
    {
      title: "Professional & Clean",
      review: "The hygiene standards at the Ayurveda department are excellent, exactly as one would expect from a major multispecialty hospital like Holy Family. The Shirodhara session I took for chronic migraines was incredibly relaxing, profoundly calming my nervous system and reducing the frequency of my headaches.",
      name: "Sophie Laurent",
      verified: true,
      location: "Paris, France",
      condition: "Migraines",
      rating: 4
    }
  ];`;

content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);

fs.writeFileSync(path, content);
console.log("Holy Family reviews updated with international names!");
