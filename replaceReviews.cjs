const fs = require('fs');
let content = fs.readFileSync('./src/pages/programs/OsteoarthritisTreatment.tsx', 'utf-8');

const newReviews = "const patientReviews = [\n" +
  "  {\n" +
  "    name: 'David Thompson',\n" +
  "    location: 'Manchester, UK',\n" +
  "    title: 'I Canceled My Knee Replacement Surgery!',\n" +
  "    review: 'My surgeon told me a knee replacement was inevitable. As a last resort, I came to India for a 21-day Ayurvedic program. The specialized Janu Basti and herbal poultice massages were incredible. My pain has reduced by 80%, and my surgeon has agreed to postpone the surgery indefinitely.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Klaus Richter',\n" +
  "    location: 'Munich, Germany',\n" +
  "    title: 'My Mornings are Mine Again',\n" +
  "    review: 'For years, the first hour of my day was a painful battle against morning stiffness. The daily Abhyanga and Pizhichil therapy were a revelation. By the second week, I was waking up and walking with freedom.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Sarah Jenkins',\n" +
  "    location: 'New York, USA',\n" +
  "    title: 'Lasting Relief from Back Pain',\n" +
  "    review: 'Years of sitting at a desk had left me with chronic lower back pain. The 14-day spine care program with Kati Vasti was the first thing that provided deep, lasting relief. The doctors taught me simple yoga stretches I can do at my desk.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Isabelle Dubois',\n" +
  "    location: 'Paris, France',\n" +
  "    title: 'Back to Gardening Again',\n" +
  "    review: 'My hip osteoarthritis had forced me to give up gardening. After a 21-day program including specialized oil therapies and yoga, I have regained so much mobility. I am back in my garden, and couldn\\'t be more grateful.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'William O\\'Connor',\n" +
  "    location: 'Dublin, Ireland',\n" +
  "    title: 'Gentle and Effective',\n" +
  "    review: 'I was worried that at 80, treatments might be too intense. I couldn\\'t have been more wrong. The gentle, highly effective program provided immense comfort, and I am now taking my daily walks with significantly less pain.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Marco Rossi',\n" +
  "    location: 'Rome, Italy',\n" +
  "    title: 'Natural Alternative to Painkillers',\n" +
  "    review: 'I was tired of the side effects of long-term painkillers. Ayurveda offered a natural solution. The detoxification and nourishing oil therapies managed my pain more effectively than any pill ever did.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Kenji Tanaka',\n" +
  "    location: 'Kyoto, Japan',\n" +
  "    title: 'Neck and Shoulders Feel Free',\n" +
  "    review: 'My cervical spondylosis caused constant neck stiffness. The Greeva Basti treatment was a game-changer, completely relaxing deep-seated tension in my neck and shoulders. I feel a freedom I haven\\'t had in years.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Chloe Nguyen',\n" +
  "    location: 'Sydney, Australia',\n" +
  "    title: 'Cracking and Popping Vanished',\n" +
  "    review: 'The constant cracking and popping sound in my knees was worrying. The focus on deeply lubricating the joints has been incredible. The cracking has vanished, and my knees feel strong and stable.',\n" +
  "    rating: 5,\n" +
  "    verified: true,\n" +
  "  }\n" +
  "];";

content = content.replace(/const patientReviews = [\s\S]*?];/, newReviews);
fs.writeFileSync('./src/pages/programs/OsteoarthritisTreatment.tsx', content, 'utf-8');
console.log("Reviews fixed!");
