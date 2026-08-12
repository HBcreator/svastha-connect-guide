const fs = require('fs');
const appContent = fs.readFileSync('src/App.tsx', 'utf-8');

const slugs = [
  'kerala/kairali-ayurvedic-healing-village',
  'veda5',
  'rishikesh/yan-cure',
  'soul-vacation-resort-spa-goa-india',
  'swan-yoga-retreat-goa-india',
  'mercure-goa-devaaya-retreat-goa-india',
  'ashiyana-yoga-retreat-village-goa-india',
  'nalanda-retreat-goa-india',
  'uttarakhand/ananda-in-the-himalayas',
  'delhi/namastedwaar',
  'kerala/ayurmana',
  'mysore/chamundi-hill-palace',
  'kerala/kairali-heritage',
  'kerala/agni-ayurvedic-village',
  'kerala/dheemahi-kumarakom',
  'kerala/kumarakom-lake-resort',
  'kerala/nagarjuna-ayurveda-center',
  'kerala/sanjeevanam-ayurveda-hospital',
  'kerala/back-to-roots',
  'kerala/dhathri-ayurveda',
  'kerala/krishnendu-ayurveda-hospital',
  'kerala/athreya-ayurvedic-center',
  'kerala/ayur-bethaniya-ayurveda-hospital',
  'kerala/ayushi-ayurvedic-retreat',
  'idukki/sitaram-mountain-retreat',
  'kochi/akanta-ayurveda-and-yoga-resort',
  'kerala/ideal-ayurvedic-resort'
];

slugs.forEach(slug => {
  // Try to find <Route path="/centers/{slug}" element={<ComponentName />}
  // Or handle missing routes
  const regex = new RegExp(`path="/centers/${slug.replace(/\//g, '\\/')}"\\s+element={<([A-Za-z0-9_]+)`);
  const match = appContent.match(regex);
  if (match) {
    console.log(`${slug} -> ${match[1]}`);
  } else {
    console.log(`${slug} -> NOT FOUND IN APP.TSX`);
  }
});
