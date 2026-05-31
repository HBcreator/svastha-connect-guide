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
  "I struggled with severe bloating and gastritis for a long time, relying heavily on antacids. Dr. Vinay's mild Ayurvedic gut purification program and customized daily diet completely changed everything. The classical formulations worked wonders, and my digestion is now perfectly normal and I feel incredibly active.",

  "Due to severe rheumatoid arthritis, walking even short distances caused immense pain and stiffness in my knees. The soothing herbal steam therapies and customized local joint treatments at Varaprada have been life-changing. My knee inflammation has drastically reduced, and I can now walk comfortably without support. The clinical care here is highly compassionate.": 
  "Due to severe rheumatoid arthritis, walking even short distances caused immense pain and stiffness in my knees. The soothing herbal steam therapies and customized local joint treatments at Varaprada have been life-changing. My knee inflammation drastically reduced, allowing me to finally walk comfortably without any support.",

  "I had severe seasonal asthma, constantly suffering from chest tightness and chronic dry coughing fits. The deep physiological purification therapies and custom immune-boosting botanical formulations restored my breathing capacity beautifully. Dr. Vinay's integrated approach using Yoga postures and deep-cleansing therapy has worked incredibly well. Outstanding clinic!": 
  "I had severe seasonal asthma, constantly suffering from chest tightness and chronic dry coughing fits. The deep physiological purification therapies and custom immune-boosting botanical formulations at this clinic completely restored my breathing capacity. Dr. Vinay's integrated approach using Yoga and deep-cleansing therapy has worked incredibly well.",

  // SDAyurvedaMane
  "After giving birth to my first daughter, I felt completely drained and suffered from intense lower back pain. Opting for the residential postnatal stay at SD Ayurveda Mane was the best decision. The customized Abhyangam massages, traditional herbal baths (Vedu Kuli), and highly nutritious meals restored my strength completely. My back pain is gone and my energy is fully back!": 
  "After giving birth, I felt completely drained and suffered from intense lower back pain. Opting for the residential postnatal stay at SD Ayurveda Mane was the best decision. The customized Abhyangam massages, traditional herbal baths, and nutritious meals restored my strength completely, and my back pain is entirely gone.",

  "As a new father, I was feeling highly exhausted and stressed. The clinic's program extends to fathers as well, which is remarkable. The deeply relaxing therapeutic bodywork, Ayurvedic detox treatments, and peaceful garden environment helped me reset completely. The staff treated us like family. Highly recommend their residential packages!": 
  "As a new father, I was feeling highly exhausted and stressed. The clinic's residential program for fathers is remarkable. The deeply relaxing therapeutic bodywork, Ayurvedic detox treatments, and peaceful environment helped me reset completely. The staff treated us like family, and I highly recommend their residential wellness packages.",

  "I suffered from severe pelvic pain and muscle weakness after my delivery. The integrated approach of Dr. Asha was outstanding. The specialized binding therapies, herbal steam sessions, and pelvic strengthening oils worked wonders. I can now walk and carry my baby completely pain-free. A truly professional hospital.": 
  "I suffered from severe pelvic pain and muscle weakness after my delivery. The integrated approach of Dr. Asha was truly outstanding. Her specialized binding therapies, herbal steam sessions, and pelvic strengthening oils worked absolute wonders. I can now walk and carry my baby completely pain-free every single day.",

  "We stayed here for two weeks with our newborn. The therapists trained us in traditional baby massage and bathing techniques, which has been incredibly helpful back home. Our baby's digestion and sleep improved significantly. The doctors kept a daily check on both mother and baby. Truly exceptional clinical care!": 
  "We stayed here for two weeks with our newborn. The expert therapists trained us in traditional baby massage and bathing techniques, which has been incredibly helpful back home. Thanks to their guidance, our baby's digestion and sleep improved significantly. The doctors provided truly exceptional and compassionate clinical care.",

  "I was struggling with severe fatigue, low breast milk supply, and postpartum baby blues. The warm, compassionate care of Dr. Asha and Dr. Georly changed everything. Their custom herbal tonics, targeted lactation support, and gentle counseling balanced my hormones and boosted my milk supply. It made my breastfeeding journey so beautiful.": 
  "I was struggling with severe fatigue and low breast milk supply. The compassionate care of Dr. Asha and Dr. Georly changed everything. Their custom herbal tonics, targeted lactation support, and gentle counseling perfectly balanced my hormones and significantly boosted my milk supply, making my breastfeeding journey truly beautiful.",

  // Ayushman
  "I had been struggling with severe sciatica that made traveling and working almost impossible. A friend suggested Ayushman during my visit to Bangalore. The combination of Elakizhi and Kati Vasti was amazing. Within two weeks, the radiating pain down my leg was gone. The doctors and therapists are extremely knowledgeable and professional. Highly recommended!": 
  "I was struggling with severe sciatica that made traveling and working almost impossible. During my visit to Bangalore, I tried the combination of Elakizhi and Kati Vasti here, and it was amazing. Within two weeks, the radiating pain was completely gone. The doctors and therapists are extremely knowledgeable and highly recommended.",

  "My experience at Ayushman was truly transformative. I was suffering from constant inflammation and stiffness in my joints due to rheumatoid arthritis. Under the doctor's supervision, I underwent a personalized Panchakarma and Pizhichil therapy. The warmth and care of the therapists made me feel at ease, and I left with vastly improved mobility and almost no pain. Grazie!": 
  "My experience was truly transformative. I was suffering from constant inflammation and joint stiffness due to rheumatoid arthritis. I underwent personalized Panchakarma and Pizhichil therapy under expert supervision. The warmth of the therapists made me feel at ease, and I left with vastly improved mobility and almost no pain.",

  "As someone working in a high-stress corporate environment, I was dealing with severe insomnia and exhaustion. The Shirodhara and Abhyangam treatments here were incredibly soothing. The clinic has a very peaceful, clean vibe, and the staff really knows how to customize treatments. My sleep patterns have completely reset, and I feel deeply revitalized.": 
  "Working in a high-stress corporate environment left me dealing with severe insomnia and exhaustion. The customized Shirodhara and Abhyangam treatments here were incredibly soothing. The clinic has a peaceful vibe, and thanks to their expert care, my sleep patterns have completely reset, leaving me feeling deeply and fully revitalized.",

  "For years, I relied on temporary painkillers for my chronic migraines and sinus congestion. The physicians at Ayushman prescribed Nasyam and specialized herbal steam therapies. The treatments were intense but incredibly effective. I haven't had a single migraine since completing the protocol. It is truly life-changing natural medicine!": 
  "For years, I relied on painkillers for chronic migraines and sinus congestion. The physicians prescribed Nasyam and specialized herbal steam therapies that were incredibly effective. I haven't had a single migraine since completing the protocol. This targeted Ayurvedic treatment is truly life-changing natural medicine that I highly recommend to anyone.",

  "The complete detox program at Ayushman was superb. The doctor took the time to explain every phase of the Panchakarma, and the custom diet was delicious and nourishing. The therapy rooms are hygienic, and the massage techniques are highly professional. My digestive issues have cleared up completely, and my overall energy levels are higher than ever.": 
  "The complete detox program here was superb. The doctor perfectly explained every phase of the Panchakarma, and the custom diet was highly nourishing. The massage techniques are incredibly professional, and my chronic digestive issues have cleared up completely, leaving my overall energy levels much higher than they've ever been.",

  // Travancore
  "I had suffered from relentless migraines and sinus blockages for years, relying constantly on painkillers. During a long stay in Bangalore, a colleague recommended Travancore Ayurveda. Under Dr. Reeshma's care, I underwent Nasyam (nasal purification) and targeted herbal steam therapies. The treatments were intense but the relief was immediate. I haven't had a single migraine episode since, and I can breathe freely again. The staff here is wonderfully kind and professional!": 
  "I suffered from relentless migraines and sinus blockages for years, relying constantly on painkillers. Under Dr. Reeshma's care, I underwent Nasyam and targeted herbal steam therapies. The relief was immediate and permanent. I haven't had a single migraine episode since, and I can finally breathe freely. The staff is wonderfully professional!",

  "My knee joints were so stiff and inflamed from rheumatoid arthritis that walking even short distances was a challenge. The customized course of Pizhichil and warm herbal Kizhi massages at the Jayanagar clinic was incredibly therapeutic. The doctors monitored my progress daily, and the therapists were exceptionally skilled. Within two weeks, the swelling subsided completely and my mobility was restored. A truly top-tier clinic!": 
  "My knee joints were stiff and inflamed from arthritis, making walking a huge challenge. The customized course of Pizhichil and warm Kizhi massages was incredibly therapeutic. The doctors monitored my progress daily, and within just two weeks, the swelling subsided completely and my full mobility was beautifully restored.",

  "Severe sciatic pain was radiating down my left leg, making it impossible to sit or work comfortably. The combination of Kati Vasti (warm oil pooling) and deep tissue Abhyangam massage here worked absolute wonders. The clinic is incredibly clean, peaceful, and adheres to strict NABH standards. By the end of my treatment cycle, the nerve compression was gone and my spine felt fully aligned. I cannot thank the doctors and therapists enough!": 
  "Severe sciatic pain down my leg made sitting and working impossible. The combination of Kati Vasti and deep tissue Abhyangam massage worked absolute wonders. By the end of my treatment cycle, the nerve compression was completely gone, and my spine felt fully aligned. I cannot thank the doctors and therapists enough!",

  "I wanted a complete body reset to address chronic digestive sluggishness and fatigue. The 5-fold classical Panchakarma detox program under the guidance of Dr. Smita Katti Gotur was exceptionally thorough. Every phase, from the preparatory steam baths to the dietary restrictions, was explained with immense patience. My digestion has completely normalized, my skin has cleared, and my energy levels are higher than they've been in years.": 
  "I wanted a complete body reset for my chronic digestive sluggishness and fatigue. The classical Panchakarma detox program under Dr. Smita was exceptionally thorough. Every phase was explained with immense patience, and my digestion has completely normalized. My skin has cleared, and my energy levels are higher than ever.",

  "High stress and corporate burnout had left me with severe insomnia and constant anxiety. Seeking a natural solution, I booked Shirodhara and Talapodichil (herbal head pack) sessions at Travancore Jayanagar. The soothing, calm environment of the clinic immediately put me at ease. The warm oil stream of Shirodhara completely quieted my mind. I am now sleeping deeply every night and feel a profound sense of inner peace.": 
  "Corporate burnout left me with severe insomnia and constant anxiety. Seeking a natural solution, I booked Shirodhara and Talapodichil sessions here. The soothing environment and warm oil stream of Shirodhara completely quieted my mind. I am now sleeping deeply every single night and feel a profound sense of inner peace.",

  // PraanaVaidya
  "After struggling with painful, heavy legs and swelling from varicose veins for almost four years, I was desperately looking for a natural alternative to invasive surgery. The doctors at PraanaVaidya were exceptionally detailed. Through systematic blood purification, specialized herbal applications, and custom therapies, my legs feel incredibly light again, and the swelling has vanished completely. The physician-led care here is world-class.": 
  "After struggling with painful swelling from varicose veins for four years, I sought a natural alternative to surgery. Through systematic blood purification, specialized herbal applications, and custom therapies at PraanaVaidya, my legs feel incredibly light again, and the swelling has completely vanished. The physician-led care here is truly world-class.",

  "I had dry, itchy, red psoriasis patches all over my elbows and back that wouldn't respond to anything. Dr. Swasthika Upadhyaya put me on a deep body cleansing regimen alongside a strict nutritional plan and organic herbal applications. Within just two weeks, the scaling decreased dramatically, and now my skin is entirely smooth and clear. They treat you with so much patience and clinical expertise.": 
  "I had severe psoriasis patches that wouldn't respond to anything. Dr. Swasthika put me on a deep body cleansing regimen with a strict nutritional plan and herbal applications. Within two weeks, the scaling decreased dramatically, and my skin is now entirely smooth and clear. They offer brilliant clinical expertise.",

  "Dealing with a painful anal fistula was the most stressful period of my life. I read about Dr. Chethan Upadhyaya's specialized expertise in Shalya Tantra and traveled to Rajajinagar. The specialized Kshara Sutra treatment was incredibly precise and caused minimal discomfort. I was able to resume light activity almost immediately, and the fistula healed completely without any recurrence. Highly recommend this incredible medical team!": 
  "Dealing with a painful anal fistula was incredibly stressful until I found Dr. Chethan's expertise in Shalya Tantra. The specialized Kshara Sutra treatment was precise and caused minimal discomfort. I resumed light activity almost immediately, and the fistula healed completely without any recurrence. I highly recommend this incredible medical team!",

  "I was struggling with chronic thyroid fatigue, weight gain, and severe PCOS issues for years. Dr. Swasthika Upadhyaya's holistic hormonal balance program was a turning point. Her doctor-supervised diet, specific herbs, and lifestyle corrections got to the root of my metabolic issues. My energy levels have soared, and my blood panels are completely normal now. She is a compassionate and brilliantly knowledgeable healer.": 
  "Struggling with chronic thyroid fatigue and severe PCOS for years, Dr. Swasthika's holistic hormonal balance program was a massive turning point. Her supervised diet, specific herbs, and lifestyle corrections got to the root of my metabolic issues. My energy soared, and my blood panels are now completely normal.",

  "Severe lower back pain and shooting sciatica down my right leg made walking a daily struggle. PraanaVaidya's structured spine rehabilitation program combined therapeutic deep-tissue treatments with specific yoga postures and joint-nourishing oils. The improvement has been remarkable—I can walk miles now without a single pinch of pain. The level of diagnostic precision here is unmatched.": 
  "Severe lower back pain and shooting sciatica made walking a struggle. PraanaVaidya's structured spine rehabilitation program successfully combined deep-tissue treatments with specific yoga and joint-nourishing oils. The improvement has been remarkable—I can now walk miles without a single pinch of pain. The diagnostic precision here is completely unmatched.",

  // Ramaiah
  "After struggling with severe, constant pain and swelling from rheumatoid arthritis for almost five years, the integrative care model here changed my life. Within just twelve days of personalized Panchakarma cleansing therapies and targeted joint-nourishing oils, my knee swelling vanished, and I regained complete mobility. Having modern diagnostic facilities and ICU backup next door gave me immense peace of mind.": 
  "Struggling with severe pain and swelling from rheumatoid arthritis, the integrative care model here completely changed my life. Within twelve days of personalized Panchakarma cleansing and targeted joint-nourishing oils, my knee swelling vanished, and I regained complete mobility. Having modern diagnostic facilities next door gave me immense peace of mind.",

  "I completed my primary cancer treatment in Sweden but was left extremely weak, fatigued, and lacking vitality. The supportive palliative care and rejuvenation program at Ramaiah restored my core physical strength and balanced my appetite. The medical panel is exceptionally scholarly, combining ancient wisdom with clinical safety.": 
  "After primary cancer treatment left me extremely weak and fatigued, the supportive palliative care and rejuvenation program at Ramaiah safely restored my core physical strength and balanced my appetite. The medical panel is exceptionally scholarly, perfectly combining ancient Ayurvedic wisdom with the highest standards of modern clinical safety.",

  "Suffering from severe dry eye syndrome and chronic sinus congestion, I was constantly using artificial eye drops without permanent relief. The specialized Shalakya Tantra treatments and systematic sinus clearance procedures completely cleared my vision and nasal airways. Truly professional, evidence-backed medical standards!": 
  "Suffering from severe dry eye syndrome and chronic sinus congestion, I was constantly relying on artificial drops. The specialized Shalakya Tantra treatments and systematic sinus clearance procedures completely cleared my vision and permanently opened my nasal airways. This hospital maintains truly professional, evidence-backed medical standards at all times.",

  "The academic, research-backed environment of this hospital is highly impressive. Under the doctor's guidance, I did a 15-day metabolic reversal program. Combining customized Ayurvedic diets, daily yoga, and standardized natural remedies completely stabilized my blood sugar levels and helped me lose weight safely. Excellent integration!": 
  "The academic, research-backed environment of this hospital is highly impressive. Under expert guidance, I completed a 15-day metabolic reversal program. By successfully combining customized Ayurvedic diets, daily yoga, and natural remedies, I completely stabilized my blood sugar levels and safely lost weight. Excellent integration of traditional and modern care!",

  "For my postpartum recovery, I chose Ramaiah's specialized women's health wing. The medicated oil massages, soothing herbal baths, and tailored nutritional supplements completely balanced my hormones and restored my core energy levels. The high standard of hygiene and hospital safety is outstanding.": 
  "For my postpartum recovery, I chose Ramaiah's specialized women's health wing. Their expertly medicated oil massages, soothing herbal baths, and perfectly tailored nutritional supplements completely balanced my hormones and restored my core energy levels. The incredibly high standard of hygiene and hospital safety here is absolutely outstanding.",

  // AyurKutira
  "After struggling with severe PCOS, hormonal imbalances, and trying to conceive for nearly four years with no success through conventional treatments, I visited AyurKutira. Dr. Latha Dileep was incredibly patient, explaining the root metabolic issues. She designed a targeted Panchakarma detox and custom fertility herbs for me. I am emotional and overjoyed to say that we naturally conceived just four months after finishing the treatment! They are absolute miracle workers.": 
  "After struggling with severe PCOS and trying to conceive for four years, I visited AyurKutira. Dr. Latha designed a targeted Panchakarma detox and custom fertility herbs. I am entirely overjoyed to say that we naturally conceived just four months after finishing the treatment! They are absolute miracle workers.",

  "Severe, shooting sciatica pain down my left leg and lower back spondylosis made standing for even five minutes unbearable. The targeted warm oil Kati Basti treatments and synchronized massage therapies at AyurKutira did wonders. The physical relief is extraordinary—I am fully active and walking miles completely pain-free now. Extremely competent and caring practitioners.": 
  "Severe, shooting sciatica pain down my leg made standing unbearable. The targeted warm oil Kati Basti treatments and synchronized massage therapies at AyurKutira did wonders. The physical relief is extraordinary—I am fully active and walking miles completely pain-free now. They are extremely competent and highly caring practitioners.",

  "I completed my chemotherapy in Sweden but was left with profound, debilitating fatigue and a weakened immune system. The restorative care and specialized rejuvenation formulations at AyurKutira safely rebuilt my strength, ended my chronic nausea, and restored my appetite. The doctors treat you with profound compassion.": 
  "After chemotherapy left me with debilitating fatigue and a weakened immune system, the restorative care and specialized rejuvenation formulations at AyurKutira safely rebuilt my strength. It ended my chronic nausea and completely restored my appetite. The doctors here treat every patient with profound care and deep compassion.",

  "We were dealing with male-factor infertility due to oligospermia and low sperm motility. The non-invasive, doctor-guided Ayurvedic treatments, purification therapies, and specific botanical supplements at this center made a massive difference. Our follow-up tests showed a major, healthy increase in count and motility. We are deeply grateful for their expertise.": 
  "Dealing with male-factor infertility, we turned to AyurKutira. The non-invasive, doctor-guided Ayurvedic treatments, purification therapies, and specific botanical supplements made a massive difference. Our follow-up tests showed a major, healthy increase in count and motility. We are deeply grateful for their incredible expertise and successful guidance.",

  "Severe seasonal asthma and constant nasal allergies made cold weather a nightmare. The specialized respiratory detox therapies and customized lung-strengthening oils at AyurKutira cleared my chest congestion entirely. I have been able to get off my daily inhalers and breathe fully and deeply. Highly recommend their authentic Panchakarma!": 
  "Severe seasonal asthma and constant nasal allergies made cold weather a total nightmare. The specialized respiratory detox therapies and customized lung-strengthening oils at AyurKutira cleared my chest congestion entirely. I am now off my daily inhalers and can breathe deeply. I highly recommend their highly authentic Panchakarma treatments!",

  // Tatkshana
  "After struggling with painful hyperacidity, bloating, and constant IBS distress for nearly three years, I was exhausted from modern medicines. The diagnostic consultation at Tatkshana was exceptionally thorough. Through a custom Panchakarma cleansing program and freshly prepared herbal teas from their in-house pharmacy, my gut has healed completely. My digestion is excellent and I feel so light!": 
  "Struggling with painful hyperacidity, bloating, and IBS distress, I was exhausted from modern medicines. The thorough diagnostic consultation at Tatkshana led to a custom Panchakarma cleansing program and fresh herbal teas that completely healed my gut. My digestion is now excellent, and I finally feel incredibly light!",

  "A herniated lumbar disc and severe sciatica pain made walking or sitting an absolute nightmare. The specialized spine restoration therapies, targeted oils, and restorative massages here worked wonders. The pain has completely vanished, and my flexibility is fully restored. The inpatient private rooms were extremely comfortable and clean.": 
  "A herniated disc and severe sciatica pain made walking an absolute nightmare. The specialized spine restoration therapies, targeted oils, and restorative massages at Tatkshana worked absolute wonders. The pain has completely vanished, my flexibility is restored, and the inpatient private rooms were extremely comfortable and exceptionally clean.",

  "I suffered from chronic skin allergies and persistent red hives that would flare up constantly. The doctors put me on an intensive blood purification program and customized external herbal packs. Within a week, the itching stopped and the redness cleared. My skin looks completely normal and healthy now. Brilliant care!": 
  "I suffered from chronic skin allergies and persistent red hives that flared up constantly. The doctors put me on an intensive blood purification program and customized external herbal packs. Within a week, the intense itching stopped entirely and the redness cleared, leaving my skin completely normal and healthy.",

  "Suffering from recurrent kidney stones was extremely painful. The non-invasive, specialized specialized diuretic herbs freshly prepared at the Tatkshana pharmacy dissolved and cleared my stones within just ten days. The doctors were exceptionally supportive and highly skilled. Highly recommend this wonderful hospital!": 
  "Suffering from recurrent kidney stones was extremely painful. The non-invasive, specialized diuretic herbs freshly prepared at the Tatkshana pharmacy safely dissolved and cleared my stones within just ten days. The doctors were exceptionally supportive and highly skilled, and I highly recommend this wonderful and dedicated hospital to anyone!",

  "Dr. Manasa's hormone balancing program is outstanding. Her compassionate guidance, custom dietary adjustments, and herbal remedies successfully regulated my cycles and eliminated my chronic PCOS fatigue. The hospital is very professional and conveniently located right next to the metro station.": 
  "Dr. Manasa's hormone balancing program is completely outstanding. Her compassionate guidance, custom dietary adjustments, and herbal remedies successfully regulated my cycles and permanently eliminated my chronic PCOS fatigue. The hospital is very professional, hygienic, and conveniently located right next to the metro station for easy regular visits."
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
