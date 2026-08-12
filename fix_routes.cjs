const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf-8');

const replacements = [
  // Ayurvedagram
  {
    old: '<Route path="/centers/bangalore/ayurvedagram" element={<AyurvedaGram />} />\n          <Route path="/centers/ayurvedagram-heritage-wellness-center-bangalore-india" element={<Navigate to="/centers/bangalore/ayurvedagram" replace />} />',
    new: '<Route path="/centers/ayurvedagram-heritage-wellness-center-bangalore-india" element={<AyurvedaGram />} />\n          <Route path="/centers/bangalore/ayurvedagram" element={<Navigate to="/centers/ayurvedagram-heritage-wellness-center-bangalore-india" replace />} />'
  },
  // Naad
  {
    old: '<Route path="/centers/naad-wellness-center-sonepat-delhi-india" element={<Navigate to="/centers/sonepat/naad-wellness" replace />} />',
    new: '<Route path="/centers/naad-wellness-center-sonepat-delhi-india" element={<NaadWellness />} />'
  },
  {
    old: '<Route path="/centers/sonepat/naad-wellness" element={<NaadWellness />} />',
    new: '<Route path="/centers/sonepat/naad-wellness" element={<Navigate to="/centers/naad-wellness-center-sonepat-delhi-india" replace />} />'
  },
  // Imperial
  {
    old: '<Route path="/centers/the-imperial-spa-and-wellness-delhi-india" element={<Navigate to="/centers/delhi/the-imperial-spa-and-wellness" replace />} />',
    new: '<Route path="/centers/the-imperial-spa-and-wellness-delhi-india" element={<TheImperialSpaAndWellness />} />'
  },
  {
    old: '<Route path="/centers/delhi/the-imperial-spa-and-wellness" element={<TheImperialSpaAndWellness />} />',
    new: '<Route path="/centers/delhi/the-imperial-spa-and-wellness" element={<Navigate to="/centers/the-imperial-spa-and-wellness-delhi-india" replace />} />'
  },
  // Fazlani
  {
    old: '<Route path="/centers/maharashtra/fazlani-natures-nest" element={<FazlaniNaturesNest />} />',
    new: '<Route path="/centers/maharashtra/fazlani-natures-nest" element={<Navigate to="/centers/fazlani-natures-nest-wellness-center-mumbai-india" replace />} />'
  },
  // Atmantan
  {
    old: '<Route path="/centers/pune/atmantan-wellness-resort" element={<AtmantanWellnessResort />} />',
    new: '<Route path="/centers/pune/atmantan-wellness-resort" element={<Navigate to="/centers/atmantan-wellness-resort-pune-india" replace />} />'
  },
  // Toyam
  {
    old: '<Route path="/centers/pune/toyam-by-orchid-hotels" element={<ToyamByOrchidHotels />} />',
    new: '<Route path="/centers/pune/toyam-by-orchid-hotels" element={<Navigate to="/centers/toyam-by-orchid-hotels-wellness-resort-pune-india" replace />} />'
  },
  // Viveda
  {
    old: '<Route path="/centers/maharashtra/viveda-wellness-village" element={<VivedaWellnessVillage />} />',
    new: '<Route path="/centers/maharashtra/viveda-wellness-village" element={<Navigate to="/centers/viveda-wellness-village-mumbai-india" replace />} />'
  },
  // Dharana
  {
    old: '<Route path="/centers/pune/dharana-at-shillim" element={<DharanaAtShillim />} />',
    new: '<Route path="/centers/pune/dharana-at-shillim" element={<Navigate to="/centers/dharana-at-shillim-wellness-retreat-pune-india" replace />} />'
  }
];

let replaced = 0;
for (const rep of replacements) {
  if (content.includes(rep.old)) {
    content = content.replace(rep.old, rep.new);
    replaced++;
  } else {
    console.log("Could not find:", rep.old);
  }
}

fs.writeFileSync(appPath, content, 'utf-8');
console.log(`Successfully replaced ${replaced} out of ${replacements.length} rules in App.tsx`);
