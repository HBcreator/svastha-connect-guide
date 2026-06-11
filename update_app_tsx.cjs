const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const imports = `import MirasaAyurvedaHospital from "./pages/centers/MirasaAyurvedaHospital.tsx";
import AyurvedaKendraHospital from "./pages/centers/AyurvedaKendraHospital.tsx";
import AllIndiaInstituteOfAyurveda from "./pages/centers/AllIndiaInstituteOfAyurveda.tsx";
`;

if (!content.includes('MirasaAyurvedaHospital')) {
  content = content.replace('const queryClient = new QueryClient();', imports + '\nconst queryClient = new QueryClient();');
}

const routes = `          <Route path="/centers/mirasa-ayurveda-hospital-new-delhi-india" element={<MirasaAyurvedaHospital />} />
          <Route path="/centers/ayurveda-kendra-hospital-safdarjung-delhi-india" element={<AyurvedaKendraHospital />} />
          <Route path="/centers/all-india-institute-of-ayurveda-aiia-hospital-sarita-vihar-new-delhi-india" element={<AllIndiaInstituteOfAyurveda />} />
`;

if (!content.includes('/centers/mirasa-ayurveda-hospital-new-delhi-india')) {
  content = content.replace('<Route path="/centers/maharishi-ayurveda-hospital-new-delhi-india" element={<MaharishiAyurvedaHospital />}/>', '<Route path="/centers/maharishi-ayurveda-hospital-new-delhi-india" element={<MaharishiAyurvedaHospital />}/>\n' + routes);
}

fs.writeFileSync('src/App.tsx', content);
