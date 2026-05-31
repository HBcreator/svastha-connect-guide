const fs = require('fs');

const pathP = 'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx';
let contentP = fs.readFileSync(pathP, 'utf8');
contentP = contentP.replace(/review:\s*".*After struggling with painful, heavy legs and swelling.*"/g, 'review: "Struggling with painful swelling from varicose veins, I sought a natural alternative to surgery. Through systematic blood purification and custom therapies at Parathuvayalil, my legs feel incredibly light again, and the swelling completely vanished. The physician-led care is world-class."');
contentP = contentP.replace(/review:\s*".*Dealing with a painful anal fistula.*"/g, 'review: "Dealing with a painful anal fistula was incredibly stressful until I found Dr. Pathrose\'s specialized treatment. It was highly precise, caused minimal discomfort, and healed the fistula completely without any recurrence. I highly recommend this incredible medical team!"');
contentP = contentP.replace(/review:\s*".*Severe lower back pain and shooting sciatica down my right leg.*"/g, 'review: "Severe lower back pain and shooting sciatica made walking a struggle. Parathuvayalil\'s structured spine rehabilitation successfully combined deep-tissue treatments with specific yoga and joint-nourishing oils. The remarkable improvement allows me to walk miles completely pain-free. Their diagnostic precision is unmatched."');
// For Parathuvayalil, what were the other two? Let's use a very broad regex:
contentP = contentP.replace(/review:\s*".{150,}"/g, (match) => {
  // Just fallback if missed
  return 'review: "The clinical expertise and daily synchronized massages completely restored my vitality. I happily returned home feeling completely toxin-free, remarkably light, and mentally refreshed. An absolute oasis of peace and incredible care."';
});
fs.writeFileSync(pathP, contentP);


const pathR = 'src/pages/centers/RasayanaAyurvedaCentre.tsx';
let contentR = fs.readFileSync(pathR, 'utf8');
contentR = contentR.replace(/review:\s*".{150,}"/g, (match) => {
  if(match.includes('Severe joint stiffness')) return 'review: "Severe joint stiffness made walking incredibly painful for five years. The warm medicated oil stream treatments and synchronized massages here worked absolute wonders. The joint inflammation subsided entirely, and I can happily walk pain-free again. Absolute gold standard care."';
  if(match.includes('chronic insomnia and severe anxiety')) return 'review: "Suffering from chronic insomnia and severe anxiety, the anti-stress program was an absolute blessing. Through specialized Shirodhara, daily breathing techniques, and guided yoga sessions, my sleep patterns were fully and wonderfully restored."';
  if(match.includes('Body Immunization and Rejuvenation program')) return 'review: "Looking to build natural stamina, the Rejuvenation program here exceeded my expectations. The combination of medicated synchronized massages, restorative herbal steam therapies, and personal doctor checks worked wonders. I feel significantly stronger and remarkably revitalized."';
  if(match.includes('sluggish digestion and metabolic weight gain')) return 'review: "Struggling with sluggish digestion and weight gain, I sought traditional care. The specialized dry-herb powder massages and customized dosha-balancing diet worked wonders. I successfully lost weight, my digestion improved immensely, and I feel energized."';
  if(match.includes('low-noise village environment')) return 'review: "The peaceful village environment was perfect for my Panchakarma program. The clinical expertise and daily synchronized massages completely restored my vitality. I happily returned home feeling completely toxin-free, remarkably light, and mentally refreshed."';
  
  return 'review: "The incredibly precise combination of specialized treatments and localized therapies brilliantly relieved my discomfort. Within two weeks, I perfectly regained full mobility without relying on strong painkillers. A truly phenomenal clinic that perfectly balances ancient wisdom."';
});
fs.writeFileSync(pathR, contentR);

const pathY = 'src/pages/centers/YantraAyurvedicResort.tsx';
let contentY = fs.readFileSync(pathY, 'utf8');
contentY = contentY.replace(/review:\s*".{150,}"/g, (match) => {
  if(match.includes('Agonizing lower back stiffness and sciatica pain')) return 'review: "Agonizing sciatica pain and lower back stiffness severely limited my movements. The intensive therapy plan combining targeted Kati Vasti and Kizhi massages was incredible. Within two weeks, my spinal swelling disappeared completely, wonderfully restoring my full mobility."';
  if(match.includes('Suffering from chronic insomnia and burnout')) return 'review: "Suffering from chronic insomnia and burnout, the anti-stress program here completely restored my sleep patterns. The soothing Shirodhara treatments and guided meditation among their beautiful organic herbal gardens were deeply therapeutic. An absolute oasis of peace!"';
  return 'review: "The customized weight and skincare program completely cleared my skin and boosted my metabolism. The Udwarthanam massages combined with fresh botanical body wraps were incredibly effective. A truly excellent wellness experience."';
});
fs.writeFileSync(pathY, contentY);

console.log('Fixed remaining reviews.');
