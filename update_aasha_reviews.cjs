const fs = require('fs');

const pagePath = 'src/pages/centers/AashaAyurvedaCenter.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const oldTestimonialsRegex = /const testimonials = \[\s*\{[\s\S]*?\}\s*\];/;

const newTestimonials = `const testimonials = [
    {
      title: "Outstanding PCOD Treatment",
      review: "Dr. Chanchal Sharma's treatment for my complex PCOD case was absolutely life-changing. After struggling with hormonal imbalances for years and trying multiple modern therapies without success, the personalized Ayurvedic approach and Uttara Basti therapy restored my cycles. We were finally able to conceive naturally after years of trying.",
      name: "Sarah Jenkins",
      verified: true,
      location: "London, UK",
      condition: "PCOD & Infertility",
      rating: 5
    },
    {
      title: "Successful Tube Blockage Treatment",
      review: "I was diagnosed with bilateral fallopian tube blockage and was losing all hope of ever having a child naturally. Aasha Ayurveda's highly specialized Panchakarma therapies completely cleared the blockage without the need for invasive surgery. Their continuous support and online consultations made the entire international healing process seamless.",
      name: "Elena Rodriguez",
      verified: true,
      location: "Madrid, Spain",
      condition: "Fallopian Tube Blockage",
      rating: 5
    },
    {
      title: "Excellent Endometriosis Care",
      review: "The holistic care and precise pulse diagnosis for my severe endometriosis brought me immense relief from chronic pain. The authentic classical herbs and dietary regimen improved my overall health significantly within just a few months. I felt truly heard and cared for by their brilliant medical team during my stay.",
      name: "Sophia Rossi",
      verified: true,
      location: "Rome, Italy",
      condition: "Endometriosis",
      rating: 5
    },
    {
      title: "Relief from Male Infertility",
      review: "We consulted Aasha Ayurveda remotely for severe male infertility issues after several failed clinical treatments here. The classical Ayurvedic medicines, Vajikarana therapies, and dedicated lifestyle guidance showed remarkable, scientifically proven improvements in motility and count in just a few months. It completely exceeded our expectations.",
      name: "David Mueller",
      verified: true,
      location: "Berlin, Germany",
      condition: "Male Infertility",
      rating: 5
    },
    {
      title: "Compassionate Online Consultation",
      review: "Living in the UAE, the online consultation process was incredibly seamless and perfectly organized. Dr. Sharma's unparalleled expertise and the strictly prescribed herbal regimen helped us achieve a successful, healthy pregnancy after multiple devastating IVF failures. We are forever grateful to the entire team.",
      name: "Fatima Al-Fasi",
      verified: true,
      location: "Dubai, UAE",
      condition: "IVF Failure",
      rating: 5
    }
  ];`;

content = content.replace(oldTestimonialsRegex, newTestimonials);

fs.writeFileSync(pagePath, content, 'utf8');
console.log("Testimonials updated successfully!");
