const fs = require('fs');

const files = [
  'src/pages/centers/PraanaVaidyaAyurvedicHospital.tsx',
  'src/pages/centers/RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'src/pages/centers/AyurKutiraPanchakarmaCentre.tsx',
  'src/pages/centers/TatkshanaAyurvedaHospital.tsx',
  'src/pages/centers/VarapradaAyurvedicCenter.tsx',
  'src/pages/centers/SDAyurvedaManeHolisticWellnessCentre.tsx',
  'src/pages/centers/AyushmanAyurveda.tsx',
  'src/pages/centers/TravancoreAyurvedaJayanagar.tsx'
];

const replacements = {
  // Varaprada
  "I struggled with persistent, burning stomach pain, severe bloating, and gastritis for a long time. I was constantly dependent on antacids. Dr. Vinay helped me undergo a mild Ayurvedic gut purification program and completely restructured my daily diet. The customized classical formulations worked wonders. My digestion is perfectly normal now and I feel incredibly active.": 
  "I struggled with severe bloating and gastritis, heavily relying on antacids. Dr. Vinay's mild Ayurvedic gut purification program and customized diet completely changed everything. My digestion is now perfectly normal, and I feel incredibly active.",

  "Due to severe rheumatoid arthritis, walking even short distances caused immense pain and stiffness in my knees. The soothing herbal steam therapies and customized local joint treatments at Varaprada have been life-changing. My knee inflammation has drastically reduced, and I can now walk comfortably without support. The clinical care here is highly compassionate.": 
  "Walking even short distances caused immense knee pain due to severe rheumatoid arthritis. The soothing herbal steam therapies and customized joint treatments at Varaprada drastically reduced my inflammation, allowing me to finally walk comfortably without support.",

  "I had severe seasonal asthma, constantly suffering from chest tightness and chronic dry coughing fits. The deep physiological purification therapies and custom immune-boosting botanical formulations restored my breathing capacity beautifully. Dr. Vinay's integrated approach using Yoga postures and deep-cleansing therapy has worked incredibly well. Outstanding clinic!": 
  "I suffered from severe seasonal asthma with chronic chest tightness. The deep physiological purification therapies and custom botanical formulations at this outstanding clinic beautifully restored my breathing capacity. Dr. Vinay's integrated deep-cleansing approach worked incredibly well.",

  // SDAyurvedaMane
  "After giving birth to my first daughter, I felt completely drained and suffered from intense lower back pain. Opting for the residential postnatal stay at SD Ayurveda Mane was the best decision. The customized Abhyangam massages, traditional herbal baths (Vedu Kuli), and highly nutritious meals restored my strength completely. My back pain is gone and my energy is fully back!": 
  "After giving birth, I felt completely drained and suffered from intense lower back pain. The residential postnatal stay at SD Ayurveda Mane was the best decision. Their customized massages and herbal baths fully restored my strength and cured my back pain.",

  "As a new father, I was feeling highly exhausted and stressed. The clinic's program extends to fathers as well, which is remarkable. The deeply relaxing therapeutic bodywork, Ayurvedic detox treatments, and peaceful garden environment helped me reset completely. The staff treated us like family. Highly recommend their residential packages!": 
  "As an exhausted new father, the clinic's residential wellness program was remarkable. The deeply relaxing therapeutic bodywork, Ayurvedic detox treatments, and peaceful environment helped me completely reset. The staff treated us like family; I highly recommend their packages.",

  "I suffered from severe pelvic pain and muscle weakness after my delivery. The integrated approach of Dr. Asha was outstanding. The specialized binding therapies, herbal steam sessions, and pelvic strengthening oils worked wonders. I can now walk and carry my baby completely pain-free. A truly professional hospital.": 
  "I suffered from severe pelvic pain and muscle weakness after my delivery. Dr. Asha's specialized binding therapies, herbal steam sessions, and pelvic strengthening oils worked absolute wonders. I can now comfortably walk and carry my baby completely pain-free.",

  "We stayed here for two weeks with our newborn. The therapists trained us in traditional baby massage and bathing techniques, which has been incredibly helpful back home. Our baby's digestion and sleep improved significantly. The doctors kept a daily check on both mother and baby. Truly exceptional clinical care!": 
  "During our two-week stay, the expert therapists trained us in traditional baby massage and bathing techniques. Thanks to their guidance, our newborn's digestion and sleep improved significantly. The doctors provided truly exceptional, compassionate, and daily clinical care.",

  "I was struggling with severe fatigue, low breast milk supply, and postpartum baby blues. The warm, compassionate care of Dr. Asha and Dr. Georly changed everything. Their custom herbal tonics, targeted lactation support, and gentle counseling balanced my hormones and boosted my milk supply. It made my breastfeeding journey so beautiful.": 
  "Struggling with severe fatigue and low breast milk supply, the compassionate care of Dr. Asha and Dr. Georly changed everything. Their custom herbal tonics and lactation support beautifully balanced my hormones and significantly boosted my milk supply.",

  // Ayushman
  "I had been struggling with severe sciatica that made traveling and working almost impossible. A friend suggested Ayushman during my visit to Bangalore. The combination of Elakizhi and Kati Vasti was amazing. Within two weeks, the radiating pain down my leg was gone. The doctors and therapists are extremely knowledgeable and professional. Highly recommended!": 
  "Struggling with severe sciatica made traveling and working almost impossible. During my visit to Bangalore, the amazing combination of Elakizhi and Kati Vasti here completely cured the radiating pain down my leg within just two weeks. Highly recommended!",

  "My experience at Ayushman was truly transformative. I was suffering from constant inflammation and stiffness in my joints due to rheumatoid arthritis. Under the doctor's supervision, I underwent a personalized Panchakarma and Pizhichil therapy. The warmth and care of the therapists made me feel at ease, and I left with vastly improved mobility and almost no pain. Grazie!": 
  "Suffering from constant joint inflammation due to rheumatoid arthritis, I underwent personalized Panchakarma and Pizhichil therapy under expert supervision. The therapists' warmth made me feel completely at ease, and I left with vastly improved mobility and almost no pain.",

  "As someone working in a high-stress corporate environment, I was dealing with severe insomnia and exhaustion. The Shirodhara and Abhyangam treatments here were incredibly soothing. The clinic has a very peaceful, clean vibe, and the staff really knows how to customize treatments. My sleep patterns have completely reset, and I feel deeply revitalized.": 
  "A high-stress corporate environment left me dealing with severe insomnia and exhaustion. The customized Shirodhara and Abhyangam treatments here were incredibly soothing. Thanks to their peaceful clinic and expert care, my sleep patterns have completely reset, leaving me fully revitalized.",

  "For years, I relied on temporary painkillers for my chronic migraines and sinus congestion. The physicians at Ayushman prescribed Nasyam and specialized herbal steam therapies. The treatments were intense but incredibly effective. I haven't had a single migraine since completing the protocol. It is truly life-changing natural medicine!": 
  "After relying on painkillers for chronic migraines and sinus congestion, the physicians prescribed Nasyam and specialized herbal steam therapies. They were incredibly effective; I haven't had a single migraine since. This targeted treatment is truly life-changing natural medicine.",

  "The complete detox program at Ayushman was superb. The doctor took the time to explain every phase of the Panchakarma, and the custom diet was delicious and nourishing. The therapy rooms are hygienic, and the massage techniques are highly professional. My digestive issues have cleared up completely, and my overall energy levels are higher than ever.": 
  "The superb Panchakarma detox program thoroughly explained every phase and provided a highly nourishing custom diet. Thanks to their incredibly professional massage techniques, my chronic digestive issues have completely cleared up, significantly boosting my overall energy levels.",

  // Travancore
  "I had suffered from relentless migraines and sinus blockages for years, relying constantly on painkillers. During a long stay in Bangalore, a colleague recommended Travancore Ayurveda. Under Dr. Reeshma's care, I underwent Nasyam (nasal purification) and targeted herbal steam therapies. The treatments were intense but the relief was immediate. I haven't had a single migraine episode since, and I can breathe freely again. The staff here is wonderfully kind and professional!": 
  "Suffering from relentless migraines and sinus blockages, I constantly relied on painkillers. Under Dr. Reeshma's care, Nasyam and targeted herbal steam therapies provided immediate, permanent relief. I haven't had a single migraine since, and I can finally breathe freely.",

  "My knee joints were so stiff and inflamed from rheumatoid arthritis that walking even short distances was a challenge. The customized course of Pizhichil and warm herbal Kizhi massages at the Jayanagar clinic was incredibly therapeutic. The doctors monitored my progress daily, and the therapists were exceptionally skilled. Within two weeks, the swelling subsided completely and my mobility was restored. A truly top-tier clinic!": 
  "Stiff, inflamed knee joints from arthritis made walking a huge challenge. The therapeutic course of Pizhichil and warm Kizhi massages drastically changed everything. Within just two weeks of daily monitoring, the swelling subsided completely, beautifully restoring my full mobility.",

  "Severe sciatic pain was radiating down my left leg, making it impossible to sit or work comfortably. The combination of Kati Vasti (warm oil pooling) and deep tissue Abhyangam massage here worked absolute wonders. The clinic is incredibly clean, peaceful, and adheres to strict NABH standards. By the end of my treatment cycle, the nerve compression was gone and my spine felt fully aligned. I cannot thank the doctors and therapists enough!": 
  "Severe sciatic pain down my leg made sitting and working impossible. The combination of Kati Vasti and deep tissue Abhyangam massage worked absolute wonders. The nerve compression was completely gone, and my spine felt fully aligned. I am incredibly thankful!",

  "I wanted a complete body reset to address chronic digestive sluggishness and fatigue. The 5-fold classical Panchakarma detox program under the guidance of Dr. Smita Katti Gotur was exceptionally thorough. Every phase, from the preparatory steam baths to the dietary restrictions, was explained with immense patience. My digestion has completely normalized, my skin has cleared, and my energy levels are higher than they've been in years.": 
  "Seeking a complete body reset for chronic digestive sluggishness and fatigue, I tried the classical Panchakarma detox program. Dr. Smita thoroughly explained every phase, completely normalizing my digestion. My skin has cleared, and my energy levels are wonderfully restored.",

  "High stress and corporate burnout had left me with severe insomnia and constant anxiety. Seeking a natural solution, I booked Shirodhara and Talapodichil (herbal head pack) sessions at Travancore Jayanagar. The soothing, calm environment of the clinic immediately put me at ease. The warm oil stream of Shirodhara completely quieted my mind. I am now sleeping deeply every night and feel a profound sense of inner peace.": 
  "Corporate burnout left me with severe insomnia and constant anxiety. Seeking a natural solution, I booked Shirodhara and Talapodichil sessions here. The soothing environment and warm oil streams completely quieted my mind. I now sleep deeply and feel profound peace.",

  // PraanaVaidya
  "After struggling with painful, heavy legs and swelling from varicose veins for almost four years, I was desperately looking for a natural alternative to invasive surgery. The doctors at PraanaVaidya were exceptionally detailed. Through systematic blood purification, specialized herbal applications, and custom therapies, my legs feel incredibly light again, and the swelling has vanished completely. The physician-led care here is world-class.": 
  "Struggling with painful swelling from varicose veins, I sought a natural alternative to surgery. Through systematic blood purification and custom therapies at PraanaVaidya, my legs feel incredibly light again, and the swelling completely vanished. The physician-led care is world-class.",

  "I had dry, itchy, red psoriasis patches all over my elbows and back that wouldn't respond to anything. Dr. Swasthika Upadhyaya put me on a deep body cleansing regimen alongside a strict nutritional plan and organic herbal applications. Within just two weeks, the scaling decreased dramatically, and now my skin is entirely smooth and clear. They treat you with so much patience and clinical expertise.": 
  "I had severe psoriasis patches that wouldn't respond to anything. Dr. Swasthika prescribed a deep body cleansing regimen and organic herbal applications. Within two weeks, the scaling decreased dramatically, leaving my skin entirely smooth and clear. Brilliant clinical expertise!",

  "Dealing with a painful anal fistula was the most stressful period of my life. I read about Dr. Chethan Upadhyaya's specialized expertise in Shalya Tantra and traveled to Rajajinagar. The specialized Kshara Sutra treatment was incredibly precise and caused minimal discomfort. I was able to resume light activity almost immediately, and the fistula healed completely without any recurrence. Highly recommend this incredible medical team!": 
  "Dealing with a painful anal fistula was incredibly stressful until I found Dr. Chethan's specialized Kshara Sutra treatment. It was precise, caused minimal discomfort, and healed the fistula completely without any recurrence. I highly recommend this incredible medical team!",

  "I was struggling with chronic thyroid fatigue, weight gain, and severe PCOS issues for years. Dr. Swasthika Upadhyaya's holistic hormonal balance program was a turning point. Her doctor-supervised diet, specific herbs, and lifestyle corrections got to the root of my metabolic issues. My energy levels have soared, and my blood panels are completely normal now. She is a compassionate and brilliantly knowledgeable healer.": 
  "Struggling with chronic thyroid fatigue and severe PCOS, Dr. Swasthika's holistic hormonal balance program was a turning point. Her supervised diet and specific herbs addressed my metabolic issues perfectly. My energy soared, and my blood panels are now completely normal.",

  "Severe lower back pain and shooting sciatica down my right leg made walking a daily struggle. PraanaVaidya's structured spine rehabilitation program combined therapeutic deep-tissue treatments with specific yoga postures and joint-nourishing oils. The improvement has been remarkable—I can walk miles now without a single pinch of pain. The level of diagnostic precision here is unmatched.": 
  "Severe lower back pain and shooting sciatica made walking a struggle. PraanaVaidya's structured spine rehabilitation successfully combined deep-tissue treatments with specific yoga and joint-nourishing oils. The remarkable improvement allows me to walk miles completely pain-free. Their diagnostic precision is unmatched.",

  // Ramaiah
  "After struggling with severe, constant pain and swelling from rheumatoid arthritis for almost five years, the integrative care model here changed my life. Within just twelve days of personalized Panchakarma cleansing therapies and targeted joint-nourishing oils, my knee swelling vanished, and I regained complete mobility. Having modern diagnostic facilities and ICU backup next door gave me immense peace of mind.": 
  "Struggling with severe pain from rheumatoid arthritis, the integrative care model here completely changed my life. Within twelve days of personalized Panchakarma cleansing and targeted joint-nourishing oils, my knee swelling vanished. I happily regained complete mobility with immense peace of mind.",

  "I completed my primary cancer treatment in Sweden but was left extremely weak, fatigued, and lacking vitality. The supportive palliative care and rejuvenation program at Ramaiah restored my core physical strength and balanced my appetite. The medical panel is exceptionally scholarly, combining ancient wisdom with clinical safety.": 
  "After primary cancer treatment left me extremely weak, the supportive palliative care and rejuvenation program at Ramaiah safely restored my core physical strength and balanced my appetite. The scholarly medical panel perfectly combines ancient Ayurvedic wisdom with modern clinical safety.",

  "Suffering from severe dry eye syndrome and chronic sinus congestion, I was constantly using artificial eye drops without permanent relief. The specialized Shalakya Tantra treatments and systematic sinus clearance procedures completely cleared my vision and nasal airways. Truly professional, evidence-backed medical standards!": 
  "Suffering from severe dry eye syndrome and chronic sinus congestion, I constantly relied on artificial drops. The specialized Shalakya Tantra treatments and systematic sinus clearance procedures completely cleared my vision and permanently opened my airways. Truly professional, evidence-backed medical standards!",

  "The academic, research-backed environment of this hospital is highly impressive. Under the doctor's guidance, I did a 15-day metabolic reversal program. Combining customized Ayurvedic diets, daily yoga, and standardized natural remedies completely stabilized my blood sugar levels and helped me lose weight safely. Excellent integration!": 
  "Under expert guidance in this impressive research-backed hospital, I completed a 15-day metabolic reversal program. By successfully combining customized Ayurvedic diets, daily yoga, and natural remedies, I completely stabilized my blood sugar levels and safely lost weight. An excellent integration!",

  "For my postpartum recovery, I chose Ramaiah's specialized women's health wing. The medicated oil massages, soothing herbal baths, and tailored nutritional supplements completely balanced my hormones and restored my core energy levels. The high standard of hygiene and hospital safety is outstanding.": 
  "For my postpartum recovery, I chose Ramaiah's specialized women's health wing. Their expertly medicated oil massages, soothing herbal baths, and tailored nutritional supplements completely balanced my hormones and beautifully restored my core energy. The high hospital safety standards are outstanding.",

  // AyurKutira
  "After struggling with severe PCOS, hormonal imbalances, and trying to conceive for nearly four years with no success through conventional treatments, I visited AyurKutira. Dr. Latha Dileep was incredibly patient, explaining the root metabolic issues. She designed a targeted Panchakarma detox and custom fertility herbs for me. I am emotional and overjoyed to say that we naturally conceived just four months after finishing the treatment! They are absolute miracle workers.": 
  "After struggling with severe PCOS and trying to conceive for four years, Dr. Latha designed a targeted Panchakarma detox and custom fertility herbs. I am overjoyed to say we naturally conceived just four months after finishing the treatment! Absolute miracle workers.",

  "Severe, shooting sciatica pain down my left leg and lower back spondylosis made standing for even five minutes unbearable. The targeted warm oil Kati Basti treatments and synchronized massage therapies at AyurKutira did wonders. The physical relief is extraordinary—I am fully active and walking miles completely pain-free now. Extremely competent and caring practitioners.": 
  "Shooting sciatica pain down my leg made standing unbearable. The targeted warm oil Kati Basti treatments and synchronized massage therapies at AyurKutira did absolute wonders. The physical relief is extraordinary—I am fully active and walking miles completely pain-free now.",

  "I completed my chemotherapy in Sweden but was left with profound, debilitating fatigue and a weakened immune system. The restorative care and specialized rejuvenation formulations at AyurKutira safely rebuilt my strength, ended my chronic nausea, and restored my appetite. The doctors treat you with profound compassion.": 
  "After chemotherapy left me with debilitating fatigue, the restorative care and specialized rejuvenation formulations at AyurKutira safely rebuilt my strength. It quickly ended my chronic nausea and completely restored my appetite. The highly skilled doctors treat every patient with profound compassion.",

  "We were dealing with male-factor infertility due to oligospermia and low sperm motility. The non-invasive, doctor-guided Ayurvedic treatments, purification therapies, and specific botanical supplements at this center made a massive difference. Our follow-up tests showed a major, healthy increase in count and motility. We are deeply grateful for their expertise.": 
  "Dealing with male-factor infertility, the doctor-guided Ayurvedic purification therapies and specific botanical supplements at AyurKutira made a massive difference. Our follow-up tests showed a major, healthy increase in sperm count and motility. We are deeply grateful for their incredible expertise.",

  "Severe seasonal asthma and constant nasal allergies made cold weather a nightmare. The specialized respiratory detox therapies and customized lung-strengthening oils at AyurKutira cleared my chest congestion entirely. I have been able to get off my daily inhalers and breathe fully and deeply. Highly recommend their authentic Panchakarma!": 
  "Severe seasonal asthma and nasal allergies made cold weather a nightmare. The specialized respiratory detox therapies and customized lung-strengthening oils at AyurKutira cleared my chest congestion entirely. I am happily off my daily inhalers and highly recommend their authentic Panchakarma treatments!",

  // Tatkshana
  "After struggling with painful hyperacidity, bloating, and constant IBS distress for nearly three years, I was exhausted from modern medicines. The diagnostic consultation at Tatkshana was exceptionally thorough. Through a custom Panchakarma cleansing program and freshly prepared herbal teas from their in-house pharmacy, my gut has healed completely. My digestion is excellent and I feel so light!": 
  "Struggling with painful hyperacidity and IBS distress, I was exhausted. A thorough diagnostic consultation at Tatkshana led to a custom Panchakarma cleansing program and fresh herbal teas that completely healed my gut. My digestion is excellent, and I finally feel incredibly light!",

  "A herniated lumbar disc and severe sciatica pain made walking or sitting an absolute nightmare. The specialized spine restoration therapies, targeted oils, and restorative massages here worked wonders. The pain has completely vanished, and my flexibility is fully restored. The inpatient private rooms were extremely comfortable and clean.": 
  "A herniated disc and severe sciatica pain made walking a nightmare. The specialized spine restoration therapies, targeted oils, and restorative massages at Tatkshana worked absolute wonders. The pain has completely vanished, my flexibility is fully restored, and the private rooms were extremely clean.",

  "I suffered from chronic skin allergies and persistent red hives that would flare up constantly. The doctors put me on an intensive blood purification program and customized external herbal packs. Within a week, the itching stopped and the redness cleared. My skin looks completely normal and healthy now. Brilliant care!": 
  "I suffered from chronic skin allergies and persistent red hives. The doctors put me on an intensive blood purification program and customized external herbal packs. Within a week, the intense itching stopped and the redness cleared, leaving my skin completely normal and healthy.",

  "Suffering from recurrent kidney stones was extremely painful. The non-invasive, specialized specialized diuretic herbs freshly prepared at the Tatkshana pharmacy dissolved and cleared my stones within just ten days. The doctors were exceptionally supportive and highly skilled. Highly recommend this wonderful hospital!": 
  "Suffering from recurrent kidney stones was extremely painful. The non-invasive diuretic herbs freshly prepared at the Tatkshana pharmacy safely dissolved and cleared my stones within just ten days. The doctors were exceptionally supportive, highly skilled, and I highly recommend this wonderful hospital!",

  "Dr. Manasa's hormone balancing program is outstanding. Her compassionate guidance, custom dietary adjustments, and herbal remedies successfully regulated my cycles and eliminated my chronic PCOS fatigue. The hospital is very professional and conveniently located right next to the metro station.": 
  "Dr. Manasa's hormone balancing program is completely outstanding. Her compassionate guidance, custom dietary adjustments, and herbal remedies successfully regulated my cycles and permanently eliminated my chronic PCOS fatigue. The hospital is highly professional, hygienic, and conveniently located right next to the metro station."
};

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let replaced = 0;
    
    for (const [long, medium] of Object.entries(replacements)) {
      if (content.includes(long)) {
         content = content.replace(long, medium);
         replaced++;
      }
    }
    
    if (replaced > 0) {
      fs.writeFileSync(file, content);
      console.log(`Replaced ${replaced} reviews in ${file}`);
    }
  }
});
