const fs = require('fs');

const f = 'src/pages/centers/YashrajAyurvedaClinic.tsx';

const replacements = {
  'Severe neck stiffness and chronic lower back strain had made my daily routine painful. Under Dr. Raju Bhusnar\'s guidance, I underwent a comprehensive joint therapy program involving targeted herbal oil poolings and intensive massage. The personalized care and traditional protocols completely relieved the deep tissue tension. I can move freely now and sleep without discomfort. Highly professional.': 'Severe neck stiffness made my routine incredibly painful. Under Dr. Bhusnar\'s guidance, I successfully underwent a comprehensive joint therapy program involving targeted herbal poolings. The traditional protocols completely relieved my tissue tension. I beautifully move freely and sleep perfectly.',
  'Corporate stress had left me mentally drained and dealing with persistent insomnia. Yashraj Clinic provided a perfect sanctuary in Calangute. The calming head oil therapies (Shirodhara), specialized breathing exercises, and physician consultations completely restored my nervous system. I returned home with a profound sense of peace and a fully normalized sleep cycle.': 'Corporate stress left me mentally drained with persistent insomnia. Yashraj Clinic provided a perfect sanctuary. The calming Shirodhara, specialized breathing exercises, and physician consultations completely restored my nervous system. I joyfully returned home with a profound sense of total peace.',
  'I spent two weeks undergoing a complete Panchakarma detox under the close supervision of Dr. Raju Bhusnar. The customized clinical schedule combined warm synchronized oil massages and targeted biological purification. The attention to detail and authentic medical standards were exceptional. I feel completely rejuvenated, light, and full of physical energy.': 'I successfully spent two weeks undergoing a complete Panchakarma detox under Dr. Bhusnar\'s close supervision. The customized clinical schedule perfectly combined warm synchronized oil massages and biological purification. The attention to detail was absolutely exceptional. I perfectly feel completely rejuvenated.',
  'Persistent bloating, sluggish metabolism, and fatigue had troubled me for a year. The clinic customized a highly rigorous gut-cleansing program and a personalized Ayurvedic nutritional diet plan. Not only did my digestion completely normalize, but my energy levels also skyrocketed. Dr. Raju\'s deep medical diagnostic knowledge and patient-first approach are absolute.': 'Persistent bloating and fatigue greatly troubled me. The clinic successfully customized a highly rigorous gut-cleansing program and personalized diet plan. My digestion completely normalized and my energy perfectly skyrocketed. Dr. Raju\'s deep diagnostic knowledge and patient-first approach are absolutely outstanding.',
  'I traveled to Goa specifically to seek treatment for male reproductive health from Dr. Raju Bhusnar, who is highly recommended in this field. His clinical diagnosis was extremely thorough, and the custom herbs and therapeutic programs completely revitalized my systemic vitality. The discretion, professionalism, and medical excellence of the entire clinic are highly commendable.': 'I traveled specifically to successfully seek male reproductive health treatment from Dr. Bhusnar. His thorough clinical diagnosis, custom herbs, and highly therapeutic programs completely revitalized my systemic vitality. The absolute discretion, professionalism, and medical excellence of the clinic are commendable.'
};

if (fs.existsSync(f)) {
  let c = fs.readFileSync(f, 'utf8');

  for (const [long, short] of Object.entries(replacements)) {
    c = c.replace(long, short);
  }

  c = c.replace(/isReviewAutoPlaying,\s*setIsReviewAutoPlaying\]\s*=\s*useState\(true\);/, 'isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(false);');

  c = c.replace(/className="(.*?text-foreground\/80.*?)"/g, (match, classes) => {
    let newClasses = classes;
    newClasses = newClasses.replace(/text-justify md:text-left/g, 'text-left');
    newClasses = newClasses.replace(/text-justify hyphens-auto/g, 'text-left');
    newClasses = newClasses.replace(/text-center/g, 'text-left');
    newClasses = newClasses.replace(/text-lg md:text-xl/g, 'text-base md:text-xl');
    return 'className="' + newClasses + '"';
  });

  fs.writeFileSync(f, c);
  console.log('Fixed Yashraj');
}
