import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, ClipboardCheck, ClipboardList, X, Activity, Brain, Leaf, Thermometer, Wind, CircleCheck, AlertTriangle, XCircle, Sparkles, Phone, Search, HeartPulse, TrendingUp, Stethoscope, ReceiptIndianRupee, BedDouble, UtensilsCrossed, Pill, CheckCircle2, HelpCircle, Building2, ArrowRight, ShieldCheck, Globe2, CalendarCheck2, Route, Headset, UserCog } from "lucide-react";

const galleryImages = [
  "/program-images/stress/shirodhara.png",
  "/program-images/stress/yoga.png",
  "/program-images/stress/luxury-room.png",
  "/program-images/stress/consultation.png",
  "/program-images/stress/diet.png",
  "/program-images/stress/relaxation.png"
];

const jumpSections = [
  { id: "gallery", title: "Gallery" },
  { id: "quick-summary", title: "Quick Summary" },
  { id: "program-overview", title: "Program Overview" },
  { id: "week-breakdown", title: "Week-by-Week Breakdown" },
  { id: "benefits", title: "Benefits" },
  { id: "cost", title: "Cost in India" },
  { id: "why-india", title: "Why Choose India?" },
  { id: "why-us", title: "Why Choose Svastha?" },
  { id: "inclusions", title: "What's Included" },
  { id: "faq", title: "FAQs" },
  { id: "top-centers", title: "Top Ayurvedic Centers" },
  { id: "reviews", title: "Patient Reviews" }
];

const quickRows = [
  ["Program Name", "14-21 Day Stress Management & Emotional Wellness Retreat"],
  ["Duration", "14–21 Days / 13–20 Nights"],
  ["Who It Is For", "Individuals suffering from anxiety, sleep disorders, and occupational stress."],
  ["Core Approach", "Manas Chikitsa (Ayurvedic Psychiatry) + Medhya Rasayana + Neurological therapies."],
  ["Key Benefit", "Cortisol reduction, neurological reset, and emotional resilience."],
  ["Top Locations", "Kerala, Rishikesh, Goa, Himalayas"],
  ["Average Cost", "$1,800 – $4,500 USD"],
  ["Supervised By", "Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"]
];

const quickSummaryMobileIcons = {
  "Program Name": ClipboardCheck,
  "Duration": Calendar,
  "Who It Is For": Brain,
  "Core Approach": Stethoscope,
  "Key Benefit": Sparkles,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": UserCog,
};

const therapies = [
  ["Shirodhara", "Third Eye Pouring", "Continuous pouring of warm medicated oil over the forehead to pacify Vata, calm the central nervous system, and induce deep mental relaxation.", Brain],
  ["Abhyanga", "Ayurvedic Massage", "Full-body massage with warm herbal oils to release physical tension, improve circulation, and ground nervous energy.", Activity],
  ["Nasya", "Nasal Therapy", "Administration of medicated oils through the nasal passages to clear the mind, relieve mental blockages, and improve oxygenation.", Wind],
  ["Swedana", "Herbal Steam", "Medicated steam therapy to open pores, release deeply held physical and emotional toxins, and relax muscles.", Thermometer],
  ["Meditation & Pranayama", "Breathwork", "Guided practices to regulate breathing, lower cortisol levels, and cultivate a peaceful state of mind.", Brain],
  ["Sattvic Diet", "Mind-Calming Food", "A purely vegetarian, easily digestible diet designed to nourish the body without stimulating the nervous system.", Leaf]
];

const candidatePoints = [
  "Individuals suffering from chronic stress, burnout, or high anxiety.",
  "People experiencing sleep disturbances, insomnia, or mental fatigue.",
  "Executives and professionals needing a profound mental reset.",
  "Those seeking natural, holistic methods to manage emotional overwhelm.",
  "Individuals wanting to disconnect from technology and reconnect with themselves."
];

const avoidPoints = [
  "Individuals with severe, unmanaged psychiatric disorders requiring acute clinical care.",
  "Those looking for a typical beach holiday with alcohol and parties (retreats are strictly wellness-focused).",
  "People unwilling to follow a structured routine, digital detox, and vegetarian diet."
];

const weeks = [
  {
    title: "Week 1: Decompression & Detoxification",
    duration: "Days 1–7",
    focus: "Physical unwinding and initial Vata pacification",
    description: "The first week focuses on disconnecting from daily stressors and beginning the physical detox. Gentle therapies loosen tension, while the body adapts to the Sattvic diet and routine.",
    bullets: ["Daily Abhyanga massage", "Introduction to Pranayama", "Digital detox initiation", "Mild herbal cleansing"]
  },
  {
    title: "Week 2: Deep Nervous System Reset",
    duration: "Days 8–14",
    focus: "Profound mental relaxation and emotional clearing",
    description: "As the body relaxes, the focus shifts to the mind. Intensive therapies like Shirodhara calm the central nervous system, lowering cortisol and improving sleep architecture.",
    bullets: ["Daily Shirodhara sessions", "Guided deep meditation", "Therapeutic yoga", "Nerve-nourishing herbs"]
  },
  {
    title: "Week 3: Rejuvenation & Resilience (Optional Extended)",
    duration: "Days 15–21",
    focus: "Building mental strength and sustaining balance",
    description: "The optional third week is for cementing the benefits. Rasayana (rejuvenation) therapies are introduced to strengthen the nervous system against future stress, ensuring long-lasting resilience.",
    bullets: ["Rasayana therapies", "Advanced breathwork", "Lifestyle integration planning", "Continued Shirodhara/Pizhichil"]
  }
];

const benefitGroups = [
  ["Physical Benefits", HeartPulse, [
    "Reduced muscle tension and physical fatigue",
    "Lowered blood pressure and improved heart rate variability",
    "Restored natural sleep patterns and deeper rest",
    "Enhanced digestion and relief from stress-induced gut issues"
  ]],
  ["Mental Benefits", Brain, [
    "Significant reduction in anxiety and racing thoughts",
    "Improved focus, mental clarity, and memory",
    "Emotional stability and a renewed sense of purpose",
    "Deeply calmed nervous system (Vata pacification)"
  ]],
  ["Long-Term Effects", Sparkles, [
    "Greater resilience to future life stressors",
    "Sustainable mindfulness and breathing techniques",
    "Personalized diet and lifestyle plan for home",
    "Reduced dependency on sleep aids or stress medications"
  ]]
];

const chooseIndia = [
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

const CTA = ({ onQuote }: { onQuote: () => void }) => (
  <section id="consultation" className="scroll-mt-24 !mt-6 md:!mt-10 overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl">
    <div className="grid md:grid-cols-2 gap-0">
      <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
        <img
          src="/program-images/stress/shirodhara.png"
          alt="Ayurvedic stress management consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
      </div>
      <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
        <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Stress Management Ayurveda Retreat in India</h2>
        <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
          Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your mental well-being and budget.
        </p>
        <div className="space-y-3 mt-4 max-w-xl">
          <a
            href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%20Stress%20Management%20Ayurveda%20retreat."
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
            aria-label="WhatsApp Us Now"
          >
            <span className="text-xs md:text-sm font-semibold leading-tight uppercase tracking-wider">WhatsApp Us Now</span>
            <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
          </a>
          <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={onQuote}>
            Get Free Consultation Here
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section id="faq" className="scroll-mt-24 !mt-8 md:!mt-14">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
    </div>
    <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
      {faqs.map(([q, a], idx) => (
        <AccordionItem key={q as string} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
          <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{q as string}</AccordionTrigger>
          <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{a as string}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

const CentersSection = ({ navigate, onQuote }: { navigate: (path: string) => void, onQuote: () => void }) => {
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
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers for Stress Management in India</h2>
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
                    <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === name ? "" : "line-clamp-3"}`}>
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
                className={`h-1.5 rounded-full transition-all ${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`}
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
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-1">
                    <h4 className="text-base md:text-xl font-semibold text-[#335765] leading-tight">
                      {reviews[review][0] as string}
                    </h4>
                    <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap border border-green-200">
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

const StressManagementAyurvedaRetreat = () => {
  const navigate = useNavigate();
  const [review, setReview] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  
  const [benefitsImageIndex, setBenefitsImageIndex] = useState(0);
  const [benefitsVisibleCards, setBenefitsVisibleCards] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) { setBenefitsVisibleCards(1); return; }
      if (window.innerWidth < 1024) { setBenefitsVisibleCards(2); return; }
      setBenefitsVisibleCards(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goToNext = () => setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  const goToPrevious = () => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }, 250);
  };

  const benefitsVisibleImages = Array.from({ length: benefitsVisibleCards }, (_, idx) => {
    const imageIndex = (benefitsImageIndex + idx) % galleryImages.length;
    return { src: galleryImages[imageIndex], key: `${galleryImages[imageIndex]}-${benefitsImageIndex}-${idx}` };
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurvedic Programs</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Stress Management Ayurveda Retreat in India</h1>
              <p className="text-lg md:text-xl text-white/90">Deep mental relaxation, emotional healing, and nervous system rejuvenation through authentic Ayurveda.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 Excellent Rating</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button
                className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-semibold"
                onClick={() => setQuoteModalOpen(true)}
              >
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-20 md:space-y-24">
        {/* Gallery Section */}
        <section id="gallery" className="scroll-mt-24 mb-0">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Program Gallery for Stress and anxiety Treatment in India</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Stress and anxiety treatment program" className="w-full h-[260px] md:h-[460px] object-cover transition-all duration-500" />
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        {/* Quick Summary */}
        <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">14–21 Days / 13–20 Nights</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Anxiety, Stress, Burnout</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Top Locations</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Kerala, Rishikesh, Goa</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">$1,800 - $4,500</p>
                </div>
              </div>

              <div className="grid gap-2 md:hidden">
                {quickRows.map((row, idx) => (
                  <div key={row[0]} className={`rounded-xl border border-[#d8d0ae] px-3 py-3 ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}>
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                        {(() => { const Icon = quickSummaryMobileIcons[row[0] as keyof typeof quickSummaryMobileIcons] || ClipboardCheck; return <Icon className="h-4 w-4 text-[#335765]" />; })()}
                      </span>
                      <p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{row[0]}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#7F543D] break-words font-semibold">{row[1]}</p>
                  </div>
                ))}
              </div>

              <div className="hidden md:block overflow-auto rounded-xl border border-[#d8d0ae]">
                <table className="w-full text-sm min-w-[680px]">
                  <tbody>
                    {quickRows.map((row, idx) => (
                      <tr key={row[0]} className={idx === 0 ? "bg-[#EDE8D0]" : "border-t"}>
                        <td className="p-3 font-semibold text-[#3D4B4C] w-[240px]">{row[0]}</td>
                        <td className="p-3 text-[#7F543D]">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Overview Section */}
        <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8">
          <div className="grid gap-10 md:gap-12">
            <Card className="h-full shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is the Ayurvedic Stress Management Retreat?</h2>
                <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">The 14 to 21-Day Ayurvedic Stress Management Retreat in India is designed to deeply relax the central nervous system, clear emotional blockages, and restore balance to the mind and body. It addresses the root causes of burnout and anxiety through ancient Ayurvedic principles.</p>
                <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">You receive warm Ayurvedic meals, physician-supervised therapies like Shirodhara and Abhyanga, calming herbal medicines, and a daily routine including yoga and meditation, all tailored to pacify aggravated Vata and reset your emotional equilibrium.</p>
                <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
                  In Ayurveda, stress and anxiety are primarily manifestations of <em>Vata dosha</em> imbalance, affecting the nervous system and mental clarity.{" "}
                  <button type="button" onClick={() => setQuoteModalOpen(true)} className="underline underline-offset-4 decoration-2 font-bold uppercase hover:text-[#7F543D] transition-colors">CONTACT</button>{" "}
                  Svastha Global to connect with the best of authentic <span className="italic">Ayurveda</span> in India.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Therapies Section */}
        <Card className="h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#335765] mb-3 text-center">Understanding Stress & Anxiety Through Ayurveda</h2>
            <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The protocol pacifies Vata, nourishes the nervous system, clears mental Ama, and restores emotional grounding.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {therapies.map(([name, sub, text, Icon]) => {
                const TherapyIcon = Icon as React.ElementType;
                return (
                  <div key={name as string} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0">
                        <TherapyIcon className="h-5 w-5 text-[#2F5B5D]" />
                      </div>
                      <h3 className="font-semibold text-[#335765] leading-snug">
                        <span className="block">{name}</span>
                        <span className="block">({sub})</span>
                      </h3>
                    </div>
                    <p className="text-sm text-[#7F543D]">{text}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Candidate / Avoid Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch !mt-6 md:!mt-10">
          <Card className="h-full border-green-300 bg-white shadow-sm">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
                  <CircleCheck className="h-5 w-5 text-green-700" />
                </span>
                <h2 className="text-2xl font-bold text-[#335765]">Who Is This Program For?</h2>
              </div>
              <ul className="space-y-3">
                {candidatePoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-green-300">
                      <CircleCheck className="h-3.5 w-3.5 text-green-700" />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="h-full border-green-300 bg-white shadow-sm">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
                  <AlertTriangle className="h-5 w-5 text-[#335765]" />
                </span>
                <h2 className="text-2xl font-bold text-[#335765]">Who Should Avoid This Program</h2>
              </div>
              <ul className="space-y-3">
                {avoidPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-300">
                      <XCircle className="h-3.5 w-3.5 text-red-600" />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Week Breakdown Section */}
        <section id="week-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
          <div className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 14 to 21-Day Program - Week-by-Week Breakdown</h2>
            <p className="text-[#7F543D] mt-2">Decompression, deep reset, and rejuvenation in one physician-led journey.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {weeks.map((week, i) => (
              <AccordionItem
                key={week.title}
                value={`week-${i}`}
                className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-green-500"
              >
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
                  <div className="text-left">
                    <p className="text-lg font-bold text-[#335765]">{week.title}</p>
                    <p className="text-sm text-[#8C765E] font-medium">{week.duration} — <span className="text-[#7F543D]">{week.focus}</span></p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-6">
                  <div>
                    <p className="text-[#7F543D] mb-4 leading-relaxed">{week.description}</p>
                    <p className="font-semibold text-[#335765] mb-2.5">Key Therapies</p>
                    <ul className="space-y-2.5 text-sm text-[#7F543D]">
                      {week.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 leading-relaxed">
                          <CircleCheck className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="scroll-mt-24 !mt-6 md:!mt-10">
          <div className="mb-7 md:mb-8">
            <div className="relative">
              <button
                onClick={() => setBenefitsImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md"
                aria-label="Previous benefits image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                onClick={() => setBenefitsImageIndex((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md"
                aria-label="Next benefits image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>

              <div className="overflow-hidden px-10 md:px-14">
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${benefitsImageIndex * 100}%)` }}
                  >
                    {galleryImages.map((image, idx) => (
                      <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                        <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                          <img src={image} alt="Ayurvedic stress retreat benefit" className="w-full h-28 object-cover rounded-lg" loading="lazy" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {benefitsVisibleImages.map((image) => (
                      <div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-primary/10 hover:border-primary/30 transition-all">
                        <img src={image.src} alt="Ayurvedic stress retreat benefit" className="w-full h-24 md:h-28 object-cover rounded-lg" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={`benefits-dot-${idx}`}
                  onClick={() => setBenefitsImageIndex(idx)}
                  aria-label={`Go to benefits image ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#335765]" : "w-2.5 bg-[#C7D1C9]"}`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of the 14 to 21-Day Ayurvedic Stress Management Retreat</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {benefitGroups.map(([title, Icon, items]) => {
              const BenefitIcon = Icon as React.ElementType;
              return (
                <Card key={title as string} className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                        <BenefitIcon className="h-5 w-5 text-[#2F5B5D]" />
                      </span>
                      <h3 className="font-bold text-[#335765]">{title as string}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-[#7F543D]">
                      {(items as string[]).map((item) => <li key={item}>- {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Cost Section */}
        <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765]">Cost of Ayurvedic Stress Management Treatment in India</h2>
            <p className="mt-2 text-[#7F543D]">A 14 to 21-day physician-supervised program with accommodation, therapies, meals, and medicines.</p>
          </div>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-5 md:p-6 space-y-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">14–21 Days</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Structured decompression and rejuvenation timeline.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">$1,800 - $4,500</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for reputable centers and full-stay plans.</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                      <Sparkles className="h-5 w-5 text-[#335765]" />
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-[#335765]">MOST POPULAR</p>
                  </div>
                  <p className="mt-1 text-sm text-[#6F6B5C]">14-Day Stress Relief Retreat with full accommodation and therapies.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
                  <p className="font-semibold text-[#335765]">Most popular - Ayurvedic Stress Management</p>
                  <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">Highest demand package</span>
                </div>
                
                <div className="md:hidden p-3 space-y-2 bg-white">
                  <div className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
                    <p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p>
                    <p className="mt-1 text-sm text-[#7F543D] font-semibold">14-Day Stress Management Retreat</p>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Category</p><p className="text-sm text-[#7F543D] font-semibold">Mental Health &amp; Relaxation</p></div>
                      <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p><p className="text-sm text-[#7F543D] font-semibold">$1,800 - $3,000</p></div>
                      <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p><p className="text-sm text-[#7F543D] font-semibold">Short stay, deep nervous system reset</p></div>
                    </div>
                  </div>
                  
                  <div className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
                    <p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p>
                    <p className="mt-1 text-sm text-[#7F543D] font-semibold">21-Day Deep Healing Retreat</p>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Category</p><p className="text-sm text-[#7F543D] font-semibold">Mental Health &amp; Relaxation</p></div>
                      <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p><p className="text-sm text-[#7F543D] font-semibold">$2,500 - $4,500</p></div>
                      <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p><p className="text-sm text-[#7F543D] font-semibold">Extended stay, chronic burnout recovery</p></div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block overflow-auto">
                  <table className="w-full text-sm min-w-[680px]">
                    <thead className="bg-[#F5F8F6] text-[#335765]">
                      <tr>
                        <th className="text-left p-3 font-semibold">Program</th>
                        <th className="text-left p-3 font-semibold">Category</th>
                        <th className="text-left p-3 font-semibold">Cost</th>
                        <th className="text-left p-3 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t bg-white">
                        <td className="p-3 font-medium text-[#3D4B4C]">14-Day Stress Management Retreat</td>
                        <td className="p-3 text-[#7F543D]">Mental Health &amp; Relaxation</td>
                        <td className="p-3 text-[#7F543D]">$1,800 - $3,000</td>
                        <td className="p-3 text-[#7F543D]">Short stay, deep nervous system reset</td>
                      </tr>
                      <tr className="border-t bg-white">
                        <td className="p-3 font-medium text-[#3D4B4C]">21-Day Deep Healing Retreat</td>
                        <td className="p-3 text-[#7F543D]">Mental Health &amp; Relaxation</td>
                        <td className="p-3 text-[#7F543D]">$2,500 - $4,500</td>
                        <td className="p-3 text-[#7F543D]">Extended stay, chronic burnout recovery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

              <GridSection title="Why Choose India for Ayurvedic Stress Management?" items={chooseIndia} />
        <WhyUsSection />
        <InclusionsSection />
        <CTA onQuote={() => setQuoteModalOpen(true)} />
        <FAQSection />
        <CentersSection navigate={navigate} onQuote={() => setQuoteModalOpen(true)} />
        <ReviewsSection review={review} setReview={setReview} />
      </main>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
        >
          <span className="drop-shadow-sm">B</span>
          <span className="drop-shadow-sm">R</span>
          <Search size={16} strokeWidth={3.5} className="drop-shadow-sm" />
          <span className="drop-shadow-sm">W</span>
          <span className="drop-shadow-sm">S</span>
          <span className="drop-shadow-sm">E</span>
        </button>
      </div>

      {/* Mobile BROWSE button */}
      <button
        onClick={() => setIsJumpModalOpen(true)}
        className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Search size={18} className="-ml-1" />
        <span>BROWSE</span>
      </button>

      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
      >
        <Phone size={18} className="-ml-1" />
        <span className="hidden md:inline">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

      {/* Jump Modal */}
      <div className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />
        
        <div className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Program Sections</h2>
              </div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50" title="Close Menu"><X className="h-6 w-6 transition-transform" /></button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm"><ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" /><p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section in this program page."</p></div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10"><div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200"><span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, '0')}</span></div><span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">{section.title}</span></div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200"><ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" /></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StressManagementAyurvedaRetreat;
