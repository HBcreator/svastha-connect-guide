const fs = require('fs');

const filePath = 'e:/website/28 march site update/svastha-connect-guide/src/pages/programs/StressManagementAyurvedaRetreat.tsx';
let fileContent = fs.readFileSync(filePath, 'utf8');

// Add new imports
const newImports = "import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, ClipboardCheck, ClipboardList, X, Activity, Brain, Leaf, Thermometer, Wind, CircleCheck, AlertTriangle, XCircle, Sparkles, Phone, Search, HeartPulse, TrendingUp, Stethoscope, ReceiptIndianRupee, BedDouble, UtensilsCrossed, Pill, CheckCircle2, HelpCircle, Building2, ArrowRight, ShieldCheck, Globe2, CalendarCheck2, Route, Headset, UserCog } from \"lucide-react\";";

fileContent = fileContent.replace(/import { MapPin.* } from "lucide-react";/, newImports);

// Add the state variables for Reviews and Centers
const componentStartMatch = "const StressManagementAyurvedaRetreat = () => {";
const componentStartReplacement = `const chooseIndia = [
  ["Authentic Shirodhara Depth", "Classical oil pouring therapies with clinical technique and traditional formulations.", Sparkles],
  ["Medical Supervision", "Therapies are prescribed by Ayurvedic doctors based on your nervous system and health history.", Stethoscope],
  ["Sustainable Mental Peace", "The goal is nervous system repair, not just temporary relaxation.", TrendingUp],
  ["Extraordinary Value", "A 14-21 day supervised program offers strong clinical depth at a fraction of Western retreat pricing.", ReceiptIndianRupee],
  ["Healing Environment", "Ayurvedic resorts support recovery through nature, routine, fresh food, and deep silence.", Leaf],
  ["Post-Program Continuity", "Diet plans, herbal guidance, yoga routines, and follow-up support help maintain the calm.", ClipboardCheck]
] as const;

const whyUsPoints = [
  { icon: ShieldCheck, title: "Verified Medical Standards", text: "Only partner centers with physician-led Ayurvedic protocols, safety screening, and treatment quality validation for stress management programs." },
  { icon: Globe2, title: "International Patient Expertise", text: "Dedicated support for travelers from 40+ countries with clear communication, pre-trip guidance, and planning assistance." },
  { icon: CalendarCheck2, title: "Pre-Travel Doctor Consultation", text: "Ayurvedic physician case review before booking helps shortlist the right center, program, and treatment pathway for your condition." },
  { icon: Route, title: "Complete Journey Support", text: "From center selection to arrival coordination, airport transfers, and check-in flow management — all arranged for you." },
  { icon: Headset, title: "During-Stay Assistance", text: "On-ground guidance through your full stress management protocol for smooth continuity, comfort, and progress tracking." },
  { icon: UserCog, title: "Condition-Based Matching", text: "Personalized center mapping based on your Prakriti, mental condition (burnout, anxiety, insomnia), budget, and goals." },
];

const inclusions = [
  ["Accommodation", "Private room or suite for 13 to 20 nights as per package tier", BedDouble],
  ["Ayurvedic Meals", "Three daily sattvic meals calibrated to pacify Vata dosha", UtensilsCrossed],
  ["Doctor Consultations", "Initial mental health assessment plus regular Vaidya check-ins", Stethoscope],
  ["Daily Therapies", "Shirodhara, Abhyanga, Swedana, Pizhichil, Nasya as prescribed", Activity],
  ["Herbal Medicines", "Internal formulations and medicated oils during the stay to calm the mind", Pill],
  ["Yoga and Meditation", "Daily breathwork and guided meditation for mental clarity", Brain],
  ["Post-Program Kit", "Personalized diet, herbal guidance, and stress-management routine", ClipboardCheck],
] as const;

const faqs = [
  ["How quickly will I feel relief from stress and anxiety?", "Many guests notice a significant drop in mental chatter and physical tension within the first 3-5 days as the Vata dosha begins to settle."],
  ["Will I be forced to stop using my phone or laptop?", "While a digital detox is highly recommended for maximum benefit, most centers allow device usage in your room. However, reducing screen time is crucial for nervous system recovery."],
  ["Are the therapies painful or uncomfortable?", "No. Stress management therapies like Shirodhara and Abhyanga are deeply relaxing and gentle, designed to soothe the nervous system, not stress it further."],
  ["Is this retreat suitable for severe clinical depression or psychiatric disorders?", "These programs are wellness retreats focused on stress, burnout, and mild anxiety. Severe psychiatric conditions require specialized clinical care, though Ayurveda can be a complementary therapy."],
  ["What kind of food will I be eating?", "You will receive a Sattvic diet—fresh, vegetarian, easily digestible meals designed to nourish the body without stimulating the nervous system."],
  ["How long should I stay for lasting results?", "While 7-day programs offer a good reset, a 14 to 21-day stay is recommended for deep, sustained nervous system repair and long-lasting burnout recovery."],
  ["How much does a stress management retreat cost in India?", "Depending on the center, duration, and room category, packages typically range from $1,800 to $4,500 USD."],
  ["Can I practice intense workouts like HIIT during the retreat?", "Intense physical exertion is usually discouraged. Gentle yoga, walking, and stretching are encouraged to avoid aggravating the nervous system."],
  ["Will I have free time to explore India?", "Retreat schedules are full, but there is designated rest time. Extensive travel during the program is discouraged as it causes fatigue, but you can plan sightseeing before or after."],
  ["How do I maintain the peace when I return to my stressful job?", "Before leaving, the Ayurvedic doctor will provide a personalized Dinacharya (daily routine), diet plan, and breathwork exercises to help you manage stress at home."],
] as const;

const reviews = [
  ["Tobias Reinhardt", "Cologne, Germany", "The Himalayan Silence Did What Two Years of Therapy Could Not.", "I arrived at Ananda in the Himalayas with severe vitality depletion (Ojahksaya). The fourteen-day programme combining Shirodhara, Abhyanga, and Pizhichil therapies produced profound results. My cortisol levels showed a clinically meaningful reduction."],
  ["Ciara Dunphy", "Dublin, Ireland", "Seven Days at a Kerala Stress Retreat — My Nervous System Finally Remembered Peace.", "The AyurYoga Eco-Ashram's daily rhythm—including Pranayama, Abhyanga, and Yoga Nidra—was incredibly therapeutic. My anxiety-driven mind surrendered to the schedule by day three. I returned to Dublin sleeping eight hours for the first time in a year and a half."],
  ["Véronique Pelletier", "Lyon, France", "The Most Awarded Programme Delivered the Most Meaningful Results.", "Kairali's stress management programme exceeded its award-winning reputation. The Vaidya's Nadi Pariksha pulse diagnosis was incredibly precise. The Navarakizhi, Shirodhara, and Elakizhi sessions produced a progressive unwinding of two years of accumulated Vata derangement."],
  ["Rupert Van Damme", "Brussels, Belgium", "Digital Detox, Ayurvedic Therapies, and the Arabian Sea — The Complete Reset.", "SwaSwara delivered a genuine reset of my stress response at the neurological root. The art therapy sessions addressed the emotional dimension of my burnout, while Abhyanga and Shirodhara anchored each day therapeutically. The personalized departure protocol has kept my stress levels managed for five months."],
  ["Annelise Thorvaldsen", "Oslo, Norway", "Thirty Years of Award-Winning Results Delivered.", "Somatheeram's award-winning reputation was immediately clear. The stress management programme combined Panchakarma, Rejuvenation Therapy, and a personalized protocol that the Vaidya adjusted daily. My departure assessment showed a measurable Vata balance I had not recorded in eight years."]
] as const;

const centers = [
  ["SOUKYA International Holistic Health Centre", "Bengaluru, Karnataka, India", "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm.", 4.9, 500, "/Center Images/SOUKYA/top center Thumb.jpg", "/centers/bangalore/soukya"],
  ["AyurvedaGram Heritage Wellness Centre", "Bengaluru, Karnataka, India", "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village with physician-guided therapies and sattvic nutrition.", 4.7, 600, "/Center Images/AyurvedaGram/Thumb.jpg", "/centers/bangalore/ayurvedagram"],
  ["Shathayu Ayurveda Yoga Retreat", "Bengaluru Rural, Karnataka, India", "A serene retreat focused on authentic Ayurveda and yogic living. The center combines classical therapies with guided yoga, meditation, and lifestyle coaching.", 4.8, 380, "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg", "/centers/udupi/shathayu-ayurveda-yoga-retreat"],
  ["Kairali - The Ayurvedic Healing Village", "Palakkad, Kerala, India", "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Panchakarma treatments and traditional healing in a serene, nature-focused environment.", 4.8, 420, "/Center Images/Ananda in the Himalayas/Thumb.jpg", "/centers/kerala/kairali-ayurvedic-healing-village"],
  ["Carnoustie Ayurveda Wellness Resort", "Mararikulam, Kerala, India", "A premium beachside center known for authentic Panchakarma care, experienced doctors, and personalized recovery-focused plans.", 4.7, 360, "/Center Images/Carnoustie Ayurveda/Thumb.jpg", "/centers/kerala/carnoustie-ayurveda-wellness-resort"],
  ["Somatheeram Ayurveda Village Resort", "Thiruvananthapuram, Kerala, India", "Widely regarded as the world's first Ayurveda resort, providing classical treatments, yoga, and meditation on a beautiful cliff overlooking the Arabian Sea.", 4.7, 510, "/Center Images/Atmantan Wellness Resort/Thumb.jpg", "/centers/kerala/somatheeram"],
  ["AyurSoma Ayurveda Royal Retreat", "Thiruvananthapuram, Kerala, India", "Traditional Kerala Ayurveda in a calm retreat format with physician supervision, therapeutic routines, and rejuvenation support.", 4.8, 300, "/Center Images/AyurSoma Ayurveda/Thumb.jpg", "/centers/kerala/ayursoma"],
  ["Niraamaya Retreats Surya Samudra", "Kovalam, Kerala, India", "Cliffside wellness destination offering curated Ayurvedic therapies, restorative routines, and immersive coastal healing experiences.", 4.6, 280, "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg", "/centers/kerala/niraamaya-retreats-surya-samudra"],
  ["Kalari Kovilakom Palace for Ayurveda", "Palakkad, Kerala, India", "A globally recognized palace-turned-retreat providing extremely strict, traditional, and authentic Ayurvedic treatments in a deeply spiritual setting.", 4.8, 240, "/Center Images/Kalari Kovilakom/Thumb.jpg", "/centers/kerala/kalari-kovilakom"]
] as const;

const GridSection = ({ title, items }: { title: string; items: typeof chooseIndia }) => (
  <section id="why-india" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14">
    <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
      <CardContent className="p-6 md:p-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">{title}</h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.map(([a, b, Icon]) => {
            const ItemIcon = Icon as React.ElementType;
            return (
            <div key={a as string} className="rounded-lg border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                  <ItemIcon className="h-4 w-4 text-[#335765]" />
                </span>
                <p className="font-semibold text-[#335765]">{a as string}</p>
              </div>
              <p className="text-sm text-[#7F543D] mt-2">{b as string}</p>
            </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  </section>
);

const WhyUsSection = () => (
  <section id="why-us" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]" style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}>
    <div className="text-center mb-7 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Why Choose Us for Ayurvedic Stress Management</h2>
      <p className="text-[#7F543D] mt-2 max-w-xl mx-auto">Not just booking support — structured guidance from pre-consultation to post-program continuity.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["Doctor-Screened Centers", "40+ Countries Supported", "End-to-End Assistance"].map((tag) => (
          <span key={tag} className="rounded-full border border-[#d9cfae] bg-white/70 px-4 py-1 text-sm font-medium text-[#335765]">{tag}</span>
        ))}
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {whyUsPoints.map((item, idx) => {
        const Icon = item.icon as React.ElementType;
        return (
          <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm border border-[#d7dcca] hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F6EF] ring-1 ring-green-200">
                <Icon className="h-5 w-5 text-[#1E7A4D]" />
              </span>
              <p className="font-semibold text-[#335765]">{idx + 1}. {item.title}</p>
            </div>
            <p className="text-sm text-[#7F543D] leading-relaxed">{item.text}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const InclusionsSection = () => (
  <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold text-[#335765]">What Is Included in the 14 to 21-Day Package?</h2>
      <p className="text-[#7F543D]">Everything essential for a supervised mental reset and continuity plan.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
        <p className="text-lg font-bold text-[#335765] mt-1">14–21 Days</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p>
        <p className="text-lg font-bold text-[#335765] mt-1">13–20 Nights</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Core Inclusions</p>
        <p className="text-lg font-bold text-[#335765] mt-1">Therapies + Meals</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Care Model</p>
        <p className="text-lg font-bold text-[#335765] mt-1">Doctor-Supervised</p>
      </div>
    </div>
    <Card className="shadow-sm border-[#dfe7e2]">
      <CardContent className="p-3 md:p-0">
        <div className="md:hidden grid gap-2">
          {inclusions.map(([label, details, Icon]) => {
            const IncIcon = Icon as React.ElementType;
            return (
            <div key={label as string} className="rounded-xl border border-[#d8d0ae] px-3 py-3 bg-white">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                  <IncIcon className="h-4 w-4 text-[#335765]" />
                </span>
                <p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{label as string}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#7F543D] font-semibold break-words">{details as string}</p>
            </div>
            );
          })}
        </div>

        <div className="hidden md:block overflow-auto">
          <table className="w-full text-sm min-w-[680px]">
            <thead className="bg-[#F5F8F6] text-[#335765]">
              <tr>
                <th className="text-left p-3 font-semibold">Inclusion</th>
                <th className="text-left p-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {inclusions.map(([label, details, Icon]) => {
                const IncIcon = Icon as React.ElementType;
                return (
                <tr key={label as string} className="border-t bg-white">
                  <td className="p-3 font-medium text-[#3D4B4C]">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                        <IncIcon className="h-4 w-4 text-[#335765]" />
                      </span>
                      <span>{label as string}</span>
                    </div>
                  </td>
                  <td className="p-3 text-[#7F543D]">{details as string}</td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    <div className="rounded-xl border border-[#88a7ad] border-l-4 border-l-[#335765] bg-[#E7F0F1] px-4 py-4 md:px-5 md:py-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0">
          <Globe2 className="h-5 w-5 text-[#335765]" />
        </div>
        <div>
          <p className="text-[#214348] font-bold">Optional Add-ons</p>
          <p className="text-sm text-[#335765] leading-relaxed mt-1">
            Airport transfers, body composition testing, cooking classes, sightseeing on rest days, extended stay, and couples programs can be arranged based on center availability.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CTA = ({ onQuote }: { onQuote: () => void }) => <section className="overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl"><div className="grid md:grid-cols-2"><div className="relative h-[220px] md:h-auto overflow-hidden md:order-2"><img src="/program-images/stress/shirodhara.png" alt="Book Ayurvedic Stress Management program" className="w-full h-full object-cover" /></div><div className="p-8 md:p-10 space-y-5"><h2 className="text-3xl font-bold">Book Your Stress Management Ayurveda Session in India</h2><p>Begin with a no-obligation consultation. We help you choose the right center, dates, and package.</p><a href="https://wa.me/918028432737" target="_blank" rel="noreferrer" className="block bg-white text-[#335765] text-center rounded-xl py-3 font-bold">WhatsApp Us Now<br /><span className="underline">+91 80 2843 2737</span></a><Button onClick={onQuote} className="w-full bg-[#E6EEE8] text-[#335765] hover:bg-white font-bold">Get Free Consultation Here</Button></div></div></section>;

const FAQSection = () => (
  <section id="faq" className="scroll-mt-24 !mt-8 md:!mt-14">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
    </div>
    <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
      {faqs.map(([q, a], idx) => (
        <AccordionItem key={q as string} value={\`faq-\${idx}\`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
          <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{q as string}</AccordionTrigger>
          <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{a as string}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

const CentersSection = ({ navigate, onQuote }: any) => {
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);
  const [topCentersVisible, setTopCentersVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setTopCentersVisible(1);
      else if (window.innerWidth < 1024) setTopCentersVisible(2);
      else setTopCentersVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topCentersTotalSlides = Math.max(1, centers.length - topCentersVisible + 1);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const toggleCenterDescription = (name: string) => setExpandedCenterName(prev => prev === name ? null : name);
  const visibleTopCenters = centers.slice(topCentersSlide, topCentersSlide + topCentersVisible);

  return (
    <section id="top-centers" className="scroll-mt-24 !mt-10 md:!mt-16 space-y-8">
      <div className="text-center space-y-2 md:space-y-3 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers in India</h2>
        <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked hospitals and retreats with specialized care for stress management programs.</p>
      </div>
      
      <div className="relative group flex items-center justify-center">
        <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
          <button
            onClick={goTopCentersPrevious}
            className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
            aria-label="Previous centers"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
          <button
            onClick={goTopCentersNext}
            className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
            aria-label="Next centers"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 w-full px-0 md:px-6 lg:px-8 items-stretch">
          {visibleTopCenters.map(([name, city, description, rating, reviewsCount, image, link]) => (
            <div key={name as string} className="flex h-full w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                  <img
                    src={image as string}
                    alt={name as string}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex text-left">{name as string}</h3>
                  
                  <div className="flex flex-nowrap items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 md:mt-1 md:mb-4 text-left overflow-hidden">
                    <div className="flex items-center gap-1.5 shrink min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="text-[12px] md:text-[13px] font-semibold truncate" title={city as string}>{city as string}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                      <span className="text-[12px] md:text-[13px] font-bold text-[#335765]">{rating as number} ({reviewsCount as number})</span>
                    </div>
                  </div>

                  <div className="relative mb-3 flex-grow text-left">
                    <p className={\`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 \${expandedCenterName === name ? "" : "line-clamp-3"}\`}>
                      {description as string}
                    </p>
                    <button
                      onClick={() => toggleCenterDescription(name as string)}
                      className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block"
                    >
                      {expandedCenterName === name ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Button
                      variant="outline"
                      onClick={() => window.open(link as string, "_blank")}
                      className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap"
                    >
                      View Details
                    </Button>
                    <Button
                      className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs"
                      onClick={onQuote}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {topCentersTotalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: topCentersTotalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTopCentersSlide(i)}
                className={\`h-1.5 rounded-full transition-all \${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}\`}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-4">
          <Button
            className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
            onClick={() => window.open('/centers', "_blank")}
          >
            VIEW ALL CENTERS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = ({ review, setReview }: { review: number; setReview: (n: number) => void }) => (
  <section id="reviews" className="scroll-mt-24 pt-8 pb-8 md:pt-10 md:pb-12 bg-transparent w-full">
    <div className="container mx-auto px-4 max-w-6xl text-left">
      <div className="text-center mb-6 md:mb-8 space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
        <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
      </div>

      <div className="max-w-4xl mx-auto relative px-0 md:px-0">
        <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
          <button
            onClick={() => setReview((review - 1 + reviews.length) % reviews.length)}
            className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
          <button
            onClick={() => setReview((review + 1) % reviews.length)}
            className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
            aria-label="Next review"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>

        <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
          <CardContent className="p-4 md:p-12 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-[#335765]/20 mb-3 md:mb-4">
                <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                  {reviews[review][2] as string}
                </h3>
                <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                  "{reviews[review][3] as string}"
                </p>
              </div>

              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                  {(reviews[review][0] as string).charAt(0)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base md:text-xl font-semibold text-[#335765]">
                      {reviews[review][0] as string}
                    </h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                      &#10003; Verified
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-[#7F543D] mb-1">{reviews[review][1] as string}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />)}
                    <span className="text-xs md:text-sm font-bold text-[#335765] ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const StressManagementAyurvedaRetreat = () => {`;

fileContent = fileContent.replace(componentStartMatch, componentStartReplacement);

// Add the state for review
const navigateMatch = "const navigate = useNavigate();";
const navigateReplacement = `const navigate = useNavigate();
  const [review, setReview] = useState(0);`;

fileContent = fileContent.replace(navigateMatch, navigateReplacement);

// Add the components inside the main tag
const endMainMatch = "</main>";
const endMainReplacement = `        <GridSection title="Why Choose India for Ayurvedic Stress Management?" items={chooseIndia} />
        <WhyUsSection />
        <InclusionsSection />
        <CTA onQuote={() => setQuoteModalOpen(true)} />
        <FAQSection />
        <CentersSection navigate={navigate} onQuote={() => setQuoteModalOpen(true)} />
        <ReviewsSection review={review} setReview={setReview} />
      </main>`;

fileContent = fileContent.replace(endMainMatch, endMainReplacement);

fs.writeFileSync(filePath, fileContent);
console.log('Successfully appended remaining sections.');
