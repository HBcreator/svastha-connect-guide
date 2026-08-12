import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, ClipboardCheck, ClipboardList, X, Activity, Brain, Leaf, Thermometer, Wind, CircleCheck, AlertTriangle, XCircle, Sparkles, Phone, Search, HeartPulse, TrendingUp, Stethoscope, ReceiptIndianRupee, BedDouble, UtensilsCrossed, Pill, CheckCircle2, HelpCircle, Building2, ArrowRight, ShieldCheck, Globe2, CalendarCheck2, Route, Headset, UserCog, UserCheck, Droplet, Users } from "lucide-react";

const galleryImages = [
  "/program-images/burnout/1.png",
  "/program-images/burnout/2.png",
  "/program-images/burnout/3.png",
  "/program-images/burnout/4.png",
  "/program-images/burnout/5.png",
  "/program-images/burnout/6.png",
];

const chooseIndia = [
  ["Clinical Precision", "Executive health screening combined with classical Ayurvedic diagnostics for biological burnout markers.", Sparkles],
  ["Vaidya-Led Recovery", "Direct supervision by senior physicians who understand the physiological impact of chronic work stress.", Stethoscope],
  ["Neurological Reset", "Therapies specifically selected to repair the HPA axis and restore circadian rhythms.", TrendingUp],
  ["Extraordinary Value", "Access to high-end medical wellness infrastructure at a fraction of Western corporate retreat costs.", ReceiptIndianRupee],
  ["Secluded Sanctuaries", "Privacy-focused resorts offering deep silence and nature-based healing for high-profile professionals.", Leaf],
  ["Strategic Continuity", "Comprehensive post-retreat transition plans for sustained mental resilience in high-pressure environments.", ClipboardCheck]
] as const;

const whyUsPoints = [
  { icon: ShieldCheck, title: "Verified Medical Standards", text: "Only partner centers with physician-led Ayurvedic protocols, safety screening, and treatment quality validation for burnout recovery." },
  { icon: Globe2, title: "International Patient Expertise", text: "Dedicated support for travelers from 40+ countries with clear communication, pre-trip guidance, and planning assistance." },
  { icon: CalendarCheck2, title: "Pre-Travel Doctor Consultation", text: "Ayurvedic physician case review before booking helps shortlist the right center, program, and treatment pathway for your condition." },
  { icon: Route, title: "Complete Journey Support", text: "From center selection to arrival coordination, airport transfers, and check-in flow management — all arranged for you." },
  { icon: Headset, title: "During-Stay Assistance", text: "On-ground guidance through your full burnout recovery protocol for smooth continuity, comfort, and progress tracking." },
  { icon: UserCog, title: "Condition-Based Matching", text: "Personalized center mapping based on your professional demands, metabolic state, budget, and recovery goals." },
];

const inclusions = [
  ["Accommodation", "Private executive suite for 13 to 20 nights as per package tier", BedDouble],
  ["Ayurvedic Meals", "Three daily personalized sattvic meals to balance Vata-Pitta exhaustion", UtensilsCrossed],
  ["Doctor Consultations", "In-depth metabolic and mental health assessments with senior Vaidyas", Stethoscope],
  ["Daily Therapies", "Takradhara, Shirodhara, Abhyanga, Pizhichil, and Basti as prescribed", Activity],
  ["Herbal Medicines", "Premium internal formulations to nourish the nervous system and build Ojas", Pill],
  ["Restorative Sessions", "Individualized yoga nidra, pranayama, and executive health coaching", Brain],
  ["Transition Protocol", "Personalized home-routine, diet, and stress-resilience toolkit for the workplace", ClipboardCheck],
] as const;

const faqs = [
  ["How is this different from a standard spa holiday?", "This is a medical-grade recovery program led by physicians. It focuses on reversing the physiological markers of burnout, such as cortisol imbalance and digestive shutdown, rather than just providing temporary relaxation."],
  ["Is the retreat completely technology-free?", "We highly encourage a 'Digital Sabbatical.' While devices aren't confiscated, we provide a structured environment that makes disconnecting from work emails and notifications natural and effortless."],
  ["Can I attend if I have professional commitments during the stay?", "To achieve a genuine neurological reset, we recommend total disconnection. However, if essential, we can help select centers with high-speed connectivity for limited use during rest hours."],
  ["What specific therapies address mental exhaustion?", "Takradhara (cooling medicated buttermilk pour) and Shirodhara (warm oil pour) are specifically used to calm the 'overheated' brain and restore sleep patterns disturbed by high-pressure work."],
  ["Is the diet too restrictive for a corporate traveler?", "The diet is nourishing, warm, and flavorful. It is designed to heal the gut (the 'second brain') which is often compromised during burnout. It is not a starvation diet."],
  ["What is the minimum recommended stay?", "14 days is the minimum for a biological reset. 21 days is ideal for deep tissue rejuvenation (Rasayana) and establishing new neuro-pathways for stress resilience."],
  ["Do I need a medical referral?", "No. Our physicians will conduct a thorough assessment upon arrival. However, if you have existing medical reports, sharing them beforehand helps customize your protocol."],
  ["Will I be able to handle the heat of India?", "Most burnout recovery centers are located in hill stations or temperature-controlled premium retreats in Kerala. We match you to centers where climate supports recovery."],
  ["Is the program suitable for teams or just individuals?", "We offer both individual recovery paths and curated 'Executive Leadership Resilience' programs for small corporate groups."],
  ["How do I justify the time away to my organization?", "Burnout is a recognized occupational phenomenon. This program is an investment in your long-term productivity and prevents much longer unplanned medical leaves."],
] as const;

const reviews = [
  ["Marcus Thorne", "London, UK", "From Total Collapse to Strategic Clarity.", "I arrived in a state of chronic sympathetic nervous system dominance, unable to focus or disconnect from my role. After 21 days of Takradhara and physician-led clinical rest, my sleep architecture completely restored and my cognitive fog vanished. The program addressed the biological root of my exhaustion, not just the symptoms. I returned to my MD role in London with a level of strategic calm and mental endurance I hadn't felt in over a decade."],
  ["Elena Rossi", "Milan, Italy", "The Biological Reset Every Executive Needs.", "This isn't just a wellness retreat; it's a necessary biological intervention for high-pressure careers. The Vaidyas identified my Pitta burnout markers immediately and customized a protocol of cooling oils, specialized herbs, and a strict digital sabbatical. The transformation in my nervous system was profound—I felt years of residual corporate stress literally melting away. I left feeling mentally sharp, physically lighter, and equipped with a sustainable toolkit for professional longevity."],
  ["Jean-Pierre Dubois", "Paris, France", "A Profound Unplugging from the Corporate Matrix.", "The digital detox combined with intensive Pizhichil (oil bath) therapies provided the profound unplugging I desperately needed from the corporate matrix. Beyond the physical relaxation, the Ayurvedic transition protocol helped me rebuild my enteric nervous system and gut health. I now have the mental clarity to maintain firm boundaries and manage high-stakes decisions without the accompanying anxiety. It’s an essential reset for anyone in a leadership position."],
  ["Sarah Jenkins", "New York, USA", "Finally, a Program that Understands Professional Exhaustion.", "The clinical team's approach to burnout is both scientific and deeply compassionate. They treated my adrenal fatigue and digestive shutdown as one interconnected neurological problem rather than isolated symptoms. After two weeks of personalized treatments and Sattvic nutrition, my energy levels stabilized and my chronic headaches disappeared. I feel more resilient than ever, with a renewed sense of purpose and the mental space to lead effectively."],
  ["Anders Nielsen", "Stockholm, Sweden", "A Necessary Intervention for Sustainable Performance.", "The rhythmic nature of the Ayurvedic lifestyle was exactly the structure my scattered executive mind required to heal. Somatheeram provided a secluded sanctuary where the HPA-axis regulation could actually take place without external interference. My blood pressure and cortisol levels improved remarkably within just ten days. The doctors’ expertise in burnout-specific Ayurvedic medicine is world-class, making this the best investment I’ve made in my long-term career health."]
] as const;

const topAyurvedicCenters = [
  {
    name: "Modi Yoga Retreat",
    city: "Rishikesh",
    description: "Mindful wellness sanctuary for yoga practice, meditation, and holistic rejuvenation amid scenic mountain views and flowing waters.",
    rating: 4.7,
    reviews: 600,
    image: "/Center Images/Modi Yoga Retreat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/rishikesh/modi-yoga-retreat",
  },
  {
    name: "Fazlani Nature's Nest Wellness Centre",
    city: "Mumbai",
    description: "Serene wellness retreat blending time-honored healing with modern therapies for detoxification and sustainable healthy living.",
    rating: 4.7,
    reviews: 0,
    image: "/Center Images/Fazlani Natures Nest/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/maharashtra/fazlani-natures-nest",
  },
  {
    name: "Veda5 – Ayurveda, Yoga & Wellness Retreat",
    city: "Rishikesh",
    description: "One of India's most premium Ayurveda & Yoga retreats combining Himalayan views, world-class therapies, and holistic rejuvenation.",
    rating: 4.9,
    reviews: 420,
    image: "/Center Images/veda5/veda5-1.jpg",
    link: "/top-ayurvedic-centers-in-india/veda5",
  },
  {
    name: "ITC Grand Bharat",
    city: "Gurugram",
    description: "Luxurious all-suite retreat in the Aravalli hills. Royal architecture with personalized Ayurvedic spa and lifestyle wellness.",
    rating: 4.8,
    reviews: 17000,
    image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/gurugram/itc-grand-bharat",
  },
  {
    name: "Kalari Kovilakom - The Palace For Ayurveda",
    city: "Palakkad",
    description: "Globally acclaimed palace retreat following classical gurukula system. Extremely strict, traditional Ayurveda treatments.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/kalari-kovilakom",
  },
  {
    name: "The Nattika Beach Resort",
    city: "Thrissur",
    description: "Award-winning wellness retreat along Kerala's pristine shores. Personalized Ayurvedic therapies and rejuvenation programs.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/The Nattika Beach Resort/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/the-nattika-beach-resort",
  },
  {
    name: "Ayurmana",
    city: "Kerala",
    description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayurmana center/top center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/ayurmana",
  },
  {
    name: "Ayuskama Ayurveda",
    city: "Dharamshala",
    description: "Authentic Ayurvedic wellness center integrating traditional Ayurveda with modern lifestyle. Personalized Panchakarma and healing therapies.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/dharamshala/ayuskama-ayurveda",
  },
  {
    name: "Nalanda Retreat Goa",
    city: "Goa",
    description: "Soulful coastal wellness at Mandrem Beach. Guided yoga, meditation, and Ayurvedic therapies for inner harmony.",
    rating: 4.5,
    reviews: 0,
    image: "/Center Images/Nalanda Retreat Goa/Thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/nalanda-retreat-goa",
  },
  {
    name: "Back to Roots Ayurveda Retreat",
    city: "Idukki",
    description: "NABH-accredited lakeside sanctuary guided by 4th generation Ayurvedic physicians. Classical Panchakarma in pristine nature.",
    rating: 4.9,
    reviews: 100,
    image: "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/kerala/back-to-roots",
  },
  {
    name: "Soul Vacation Resort & Wellness Centre",
    city: "Goa",
    description: "Boutique wellness resort near South Goa beaches. Traditional Ayurvedic principles with modern wellness for deep rejuvenation.",
    rating: 4.8,
    reviews: 500,
    image: "/Center Images/Soul Vacation Resort and Spa/thumb.jpg",
    link: "/top-ayurvedic-centers-in-india/goa/soul-vacation",
  },
  {
    name: "Kairali Heritage Resort",
    city: "Kerala",
    description: "Tranquil 11-acre riverside haven in Kannur. Authentic Ayurvedic & yoga therapies in river-facing cottages.",
    rating: 4.8,
    reviews: 220,
    image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
    link: "/top-ayurvedic-centers-in-india/kerala/kairali-heritage",
  },
];

const quickRows = [
  ["Program Name", "14-21 Day Ayurvedic Burnout Recovery & Neurological Reset"],
  ["Duration", "14–21 Days / 13–20 Nights"],
  ["Who It Is For", "High-performing professionals and executives facing chronic exhaustion"],
  ["Core Approach", "HPA-axis regulation + Nervous system repair + Ojas rejuvenation + Digital Detox"],
  ["Key Benefit", "Cortisol stabilization, cognitive clarity restoration, and deep sleep recovery"],
  ["Top Locations", "Kerala, Rishikesh, Bangalore, Pune"],
  ["Average Cost", "$1,500 – $3,000 USD"],
  ["Supervised By", "Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"],
];

const quickSummaryMobileIcons = {
  "Program Name": ClipboardCheck,
  "Duration": Calendar,
  "Who It Is For": UserCheck,
  "Core Approach": Sparkles,
  "Key Benefit": HeartPulse,
  "Top Locations": MapPin,
  "Average Cost": ReceiptIndianRupee,
  "Supervised By": Stethoscope,
} as const;

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
      <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Why Choose Us for Burnout Recovery</h2>
      <p className="text-[#7F543D] mt-2 max-w-xl mx-auto">More than a getaway — we provide a clinically-supervised biological intervention for high-performance leaders.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["Executive-Focused Protocols", "Strict Medical Privacy", "High-End Corporate Comfort"].map((tag) => (
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
      <p className="text-[#7F543D]">Every element curated for deep cognitive rest and metabolic repair.</p>
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
        <p className="text-lg font-bold text-[#335765] mt-1">Executive Care Plan</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Privacy</p>
        <p className="text-lg font-bold text-[#335765] mt-1">Private Suites</p>
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
          <CircleCheck className="h-5 w-5 text-[#335765]" />
        </div>
        <div>
          <p className="text-[#214348] font-bold">Important Notice</p>
          <p className="text-sm text-[#335765] leading-relaxed mt-1">
            All treatments and dietary plans are strictly supervised by qualified Ayurvedic doctors. Specific therapies may vary based on your individual medical profile and response to the program.
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
          src="/program-images/burnout/2.png"
          alt="Ayurvedic burnout consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
      </div>
      <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
        <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Burnout Recovery Program in India</h2>
        <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
          Begin with a confidential case review. We help you choose the right retreat for deep mental restoration and neurological reset.
        </p>
        <div className="space-y-3 mt-4 max-w-xl">
          <a
            href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20private%20consultation%20for%20the%20Burnout%20Recovery%20program."
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
            aria-label="WhatsApp Executive Support"
          >
            <span className="text-xs md:text-sm font-semibold leading-tight uppercase tracking-wider">WhatsApp Executive Support</span>
            <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
          </a>
          <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={onQuote}>
            Get Free Consultation
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

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersVisible));
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const toggleCenterDescription = (name: string) => setExpandedCenterName(prev => prev === name ? null : name);
  const visibleTopCenters = topAyurvedicCenters.slice(topCentersSlide * topCentersVisible, topCentersSlide * topCentersVisible + topCentersVisible);

  return (
    <section id="top-centers" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-6">
      <div className="text-center space-y-2 md:space-y-3 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers for Burnout Recovery Program in India</h2>
        <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked resorts with strict privacy and specialized burnout recovery protocols.</p>
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
          {visibleTopCenters.map((center) => (
            <div key={center.name} className="flex h-full w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="pt-2 px-3 pb-3 md:pt-3 md:px-4 md:pb-4 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-lg font-bold text-[#335765] leading-tight min-h-[2.6rem] md:min-h-[3.5rem] items-start flex text-left">{center.name}</h3>

                  <div className="flex flex-nowrap items-center justify-between w-full gap-x-2 mt-1.5 mb-3.5 md:mt-1 md:mb-4 text-left overflow-hidden">
                    <div className="flex items-center gap-1.5 shrink min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="text-[12px] md:text-[13px] font-semibold truncate" title={center.city}>{center.city}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                      <span className="text-[12px] md:text-[13px] font-bold text-[#335765]">{center.rating} ({center.reviews})</span>
                    </div>
                  </div>

                  <div className="relative mb-3 flex-grow text-left">
                    <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>
                      {center.description}
                    </p>
                    <button
                      onClick={() => toggleCenterDescription(center.name)}
                      className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block"
                    >
                      {expandedCenterName === center.name ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Button
                      variant="outline"
                      onClick={() => window.open(center.link, "_blank")}
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
  <section id="reviews" className="scroll-mt-24 pt-2 pb-8 md:pt-4 md:pb-12 bg-transparent w-full">
    <div className="container mx-auto px-4 max-w-6xl text-left">
      <div className="text-center mb-6 md:mb-8 space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
        <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from leaders who reclaimed their health and clarity</p>
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

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-1">
                    <h4 className="text-sm md:text-xl font-bold text-[#335765] leading-tight">
                      {reviews[review][0] as string}
                    </h4>
                    <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold whitespace-nowrap border border-green-200">
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

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setReview(idx)}
              className={`transition-all rounded-full ${review === idx
                ? "w-8 h-3 bg-[#335765]"
                : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"
                }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const candidatePoints = [
  "Executives and leaders facing chronic work-related exhaustion",
  "Individuals experiencing 'Digital Fatigue' and inability to unplug",
  "Those with sleep disorders or insomnia linked to professional pressure",
  "Professionals feeling a loss of cognitive focus or persistent 'brain fog'",
  "High-performers with stress-driven physical signs like headaches or gut issues",
  "Leaders seeking a proactive mental reset to sustain high performance",
];

const avoidPoints = [
  "Individuals with acute clinical depression requiring psychiatric care",
  "Those with contagious infections or active high fever",
  "Patients requiring immediate emergency medical or surgical intervention",
  "Individuals unwilling to participate in a Digital Sabbatical protocol",
  "Children under 18 (unless specifically cleared for academic stress)",
];

const benefitGroups = [
  ["Physical Benefits", HeartPulse, ["Deep restoration of sleep architecture", "Reduced systemic cortisol and inflammation", "Rebalanced gut-brain axis and Agni", "Relief from stress-induced physical tension", "Improved metabolic vitality and Ojas", "Stabilized autonomic nervous system"]],
  ["Mental and Emotional Benefits", Brain, ["Elimination of cognitive fog and fatigue", "Enhanced emotional resilience to pressure", "Restoration of strategic clarity and focus", "Lower levels of occupational anxiety", "Improved mindfulness and executive presence", "Higher threshold for professional stress"]],
  ["Long-Term Effects", Sparkles, ["Sustained mental resilience in leadership", "Established workplace stress-management tools", "Continued biological repair via Rasayana herbs", "Reduced risk of burnout-related leave", "Personalized toolkit for executive longevity", "Healthier balance with technology and work"]],
] as const;

const weeks = [
  {
    title: "Week 1 - Neurological Preparation",
    duration: "Day 1-7",
    focus: "Calming the overactive nervous system and HPA-axis",
    description: "The first phase focuses on slowing down. Through cooling oil therapies and a digital sabbatical, we dampen the fight-or-flight response and prepare the body for deeper biological repair.",
    bullets: ["Physician consultation & metabolic assessment", "Digital Sabbatical initiation", "Shirodhara & Abhyanga treatments", "Guided Yoga Nidra sessions"]
  },
  {
    title: "Week 2 - Core Biological Reset",
    duration: "Day 8-14",
    focus: "Intensive repair of cognitive and tissue exhaustion",
    description: "This is the core detox and repair phase. Intensive therapies like Takradhara and Pizhichil target the neurological heat of burnout, while Basti therapies begin repairing the vital gut-brain axis.",
    bullets: ["Intensive Takradhara or Pizhichil", "Basti (Gut-Brain Axis repair)", "Nerve-nourishing Medhya Rasayanas", "Sustained silence & nature immersion"]
  },
  {
    title: "Week 3 - Strategic Resilience",
    duration: "Day 15-21",
    focus: "Cognitive clarity and workplace transition planning",
    description: "The final phase stabilizes the nervous system. We focus on restoring focus and creating a personalized resilience plan to ensure the recovery continues long after you return to the workplace.",
    bullets: ["Matra Basti for long-term stability", "Executive health coaching & diet plan", "Personalized Workplace Transition Toolkit", "Post-program Rasayana support"]
  },
] as const;

const therapies = [
  ["Takradhara", "Cooling Buttermilk Pour", "A continuous stream of medicated buttermilk over the forehead to calm the overactive nervous system and restore sleep.", Sparkles],
  ["Shirodhara", "Rhythmic Oil Therapy", "Warm medicated oil poured on the 'third eye' to regulate the HPA-axis and reduce chronic mental fatigue.", Brain],
  ["Pizhichil", "The Royal Oil Bath", "A combination of oil massage and heat therapy that provides deep muscle relaxation and neurological repair.", Activity],
  ["Abhyanga", "Therapeutic Full-Body Massage", "Warm oils specifically chosen to pacify Vata and Pitta, reducing cortisol levels and physical tension.", HeartPulse],
  ["Basti", "Gut-Brain Axis Protocol", "Medicated enema therapies to clear metabolic toxins (Ama) and restore the enteric nervous system balance.", Droplet],
  ["Yoga Nidra", "Restorative Psychic Sleep", "Guided deep-relaxation sessions designed to achieve the equivalent of several hours of deep sleep in 30 minutes.", Wind],
] as const;

const QuickSummary = () => (
  <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
    <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
    <Card className="border-[#d8d0ae] bg-white shadow-sm">
      <CardContent className="p-4 md:p-6 space-y-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[["Duration", "14–21 Days / 13–20 Nights"], ["Ideal For", "Burnout, Executive Fatigue"], ["Top Locations", "PAN India"], ["Avg Cost", "$1,500 - $3,000"]].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">{label}</p>
              <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-2 md:hidden">
          {quickRows.map((row, idx) => (
            <div key={row[0]} className={`rounded-xl border border-[#d8d0ae] px-3 py-3 ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}>
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                  {(() => { const Icon = (quickSummaryMobileIcons as any)[row[0]] || ClipboardCheck; return <Icon className="h-4 w-4 text-[#335765]" />; })()}
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
);

const Overview = ({ onQuote }: { onQuote: () => void }) => (
  <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8">
    <div className="grid gap-10 md:gap-12">
      <Card className="h-full shadow-sm">
        <CardContent className="p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is the Ayurvedic Burnout Recovery Program in India?</h2>
          <p className="text-[#7F543D] leading-relaxed text-justify md:text-left text-sm md:text-base">The 14-21 Day Ayurvedic Burnout Recovery Program in India is a specialized medical intervention designed to reverse the physiological markers of chronic stress and professional exhaustion. Unlike a standard spa retreat, this program focuses on repairing the neuro-endocrine axis and restoring 'Ojas'—the vital energy responsible for mental and physical immunity.</p>
          <p className="text-[#7F543D] leading-relaxed text-justify md:text-left text-sm md:text-base">Through a combination of cooling therapies like Takradhara, nervous system tonics (Medhya Rasayanas), and structured routines, the program dampens the overactive 'fight-or-fight' response. It addresses the root cause of burnout—Vata-Pitta imbalance and metabolic toxin (Ama) accumulation—to rebuild cognitive endurance.</p>
          <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
            In Ayurveda, burnout is recognized as <em>Ojahksaya</em> (depletion of vitality) combined with <em>Manasika Shrama</em> (mental fatigue).{" "}
            <button type="button" onClick={onQuote} className="underline underline-offset-4 decoration-2 font-bold uppercase hover:text-[#7F543D] transition-colors">CONTACT</button>{" "}
            Svastha Global to connect with India's most secluded and clinically advanced recovery retreats.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const PointCard = ({ title, points, positive = false }: { title: string; points: string[]; positive?: boolean }) => (
  <Card className={`h-full bg-white shadow-sm border-2 ${positive ? "border-green-100" : "border-red-50"}`}>
    <CardContent className="p-6 md:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${positive ? "bg-green-50 ring-1 ring-green-200" : "bg-red-50 ring-1 ring-red-100"}`}>
          {positive ? <CircleCheck className="h-5 w-5 text-green-700" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
        </span>
        <h2 className="text-2xl font-bold text-[#335765]">{title}</h2>
      </div>
      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
            <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${positive ? "bg-white ring-1 ring-green-300" : "bg-white ring-1 ring-red-200"}`}>
              {positive
                ? <CircleCheck className="h-3.5 w-3.5 text-green-700" />
                : <XCircle className="h-3.5 w-3.5 text-red-600" />}
            </span>
            <span className="text-[15px] font-medium">{p}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const TherapySection = () => (
  <Card id="therapy-section" className="scroll-mt-24 h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
    <CardContent className="p-6 md:p-8">
      {/* Metrics Section */}
      <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8 md:mb-10">
        <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 flex items-center justify-center mb-2 md:mb-3">
            <Users className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
          </div>
          <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">1600+</div>
          <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Patients</div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-2 md:mb-3">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
          </div>
          <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">4.7/5</div>
          <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Patient Satisfaction Metrics</div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 md:mb-3">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
          </div>
          <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">96%</div>
          <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">Clinical Result / Outcome Index</div>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4 text-center uppercase tracking-wide">The Science of Burnout Recovery</h2>
      <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto font-medium">
        Our clinical protocol combines advanced neuro-calmative therapies with metabolic detoxification to achieve a total biological reset.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {therapies.map(([name, sub, text, Icon]) => (
          <div key={name} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition group">
            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0 group-hover:bg-[#335765] group-hover:text-white transition-colors">
                <Icon className="h-5 w-5 text-[#2F5B5D] group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-[#335765] leading-snug">
                <span className="block">{name}</span>
                <span className="block text-xs uppercase tracking-wider text-[#7F543D]">{sub}</span>
              </h3>
            </div>
            <p className="text-sm text-[#7F543D] leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const WeeksSection = () => (
  <section id="week-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
    <div className="text-center mb-7">
      <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 14 to 21-Day Program - Week-by-Week Breakdown</h2>
      <p className="text-[#7F543D] mt-2 font-medium">A physician-led journey from neurological silence to executive resilience.</p>
    </div>
    <Accordion type="single" collapsible className="space-y-4">
      {weeks.map((week, i) => (
        <AccordionItem
          key={week.title}
          value={`week-${i}`}
          className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-[#335765]"
        >
          <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
            <div className="text-left">
              <p className="text-lg font-bold text-[#335765]">{week.title}</p>
              <p className="text-sm text-[#8C765E] font-medium">{week.duration} — <span className="text-[#7F543D]">{week.focus}</span></p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-1 pb-6">
            <div>
              <p className="text-[#7F543D] mb-4 leading-relaxed text-[15px]">{week.description}</p>
              <p className="font-semibold text-[#335765] mb-2.5">Phase Highlights</p>
              <ul className="space-y-2.5 text-sm text-[#7F543D]">
                {week.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 leading-relaxed font-medium">
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
);

const BenefitsSection = () => {
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

  const benefitsVisibleImages = Array.from({ length: benefitsVisibleCards }, (_, idx) => {
    const imageIndex = (benefitsImageIndex + idx) % galleryImages.length;
    return { src: galleryImages[imageIndex], key: `${galleryImages[imageIndex]}-${benefitsImageIndex}-${idx}` };
  });

  return (
    <section id="benefits" className="scroll-mt-24 !mt-6 md:!mt-10">
      <div className="mb-7 md:mb-8">
        <div className="relative">
          <button
            onClick={() => setBenefitsImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md border-2 border-[#335765]/10"
            aria-label="Previous benefits image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={() => setBenefitsImageIndex((prev) => (prev + 1) % galleryImages.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md border-2 border-[#335765]/10"
            aria-label="Next benefits image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="overflow-hidden px-10 md:px-14">
            {/* Mobile: single slide */}
            <div className="md:hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${benefitsImageIndex * 100}%)` }}
              >
                {galleryImages.map((image, idx) => (
                  <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                    <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                      <img src={image} alt="Burnout recovery benefit" className="w-full h-32 md:h-40 object-cover rounded-lg" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: grid of 4 */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {benefitsVisibleImages.map((image) => (
                  <div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-[#335765]/10 hover:border-[#335765]/30 transition-all">
                    <img src={image.src} alt="Burnout recovery benefit" className="w-full h-28 md:h-32 object-cover rounded-lg" loading="lazy" />
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

      <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of the Ayurvedic Burnout Recovery Program</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {benefitGroups.map(([title, Icon, items]) => (
          <Card key={title} className="bg-[#F9FAF9] border-none shadow-sm hover:shadow-lg transition group">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] group-hover:bg-[#335765] transition-colors">
                  <Icon className="h-5 w-5 text-[#335765] group-hover:text-white" />
                </span>
                <h3 className="text-lg font-bold text-[#335765] leading-tight">{title}</h3>
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#7F543D] leading-relaxed">
                    <span className="mt-1.5 h-1 w-2 shrink-0 rounded-full bg-[#335765]/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const CostSection = () => (
  <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 space-y-6">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#335765]">Cost of Ayurvedic Burnout Recovery in India</h2>
      <p className="mt-2 text-[#7F543D]">A 14 to 21-day physician-led neurological reset including accommodation, specialized therapies, meals, and medicines.</p>
    </div>
    <Card className="border-[#d8d0ae] bg-white shadow-sm">
      <CardContent className="p-5 md:p-6 space-y-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
            <p className="mt-2 text-2xl font-bold text-[#335765]">14–21 Days</p>
            <p className="mt-1 text-sm text-[#6F6B5C]">Executive recovery and biological reset timeline.</p>
          </div>
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
            <p className="mt-2 text-2xl font-bold text-[#335765]">$1,500 - $3,000</p>
            <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for luxury medical retreats.</p>
          </div>
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                <Sparkles className="h-5 w-5 text-[#335765]" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#335765]">MOST POPULAR</p>
            </div>
            <p className="mt-1 text-sm text-[#6F6B5C]">Premium executive care with private suite and neurological protocols.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
            <p className="font-semibold text-[#335765]">Most popular - Ayurvedic burnout recovery</p>
            <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">Highest demand package</span>
          </div>
          <div className="md:hidden p-3 space-y-2 bg-white">
            <div className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p>
              <p className="mt-1 text-sm text-[#7F543D] font-semibold">14-21 Day Burnout Recovery Program</p>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Category</p><p className="text-sm text-[#7F543D] font-semibold">Neurological Reset &amp; Ojas Recovery</p></div>
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p><p className="text-sm text-[#7F543D] font-semibold">$1,500 - $3,000</p></div>
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p><p className="text-sm text-[#7F543D] font-semibold">Highest demand, long stay, full package</p></div>
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
                  <td className="p-3 font-medium text-[#3D4B4C]">14-21 Day Burnout Recovery Program</td>
                  <td className="p-3 text-[#7F543D]">Neurological Reset &amp; Ojas Recovery</td>
                  <td className="p-3 text-[#7F543D]">$1,500 - $3,000</td>
                  <td className="p-3 text-[#7F543D]">Highest demand, long stay, full package</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);

const BurnoutRecoveryProgram = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [review, setReview] = useState(0);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const jumpSections = [
    { id: "quick-summary", title: "Quick Summary", icon: ClipboardList },
    { id: "program-overview", title: "Program Overview", icon: Activity },
    { id: "therapy-section", title: "Science of Recovery", icon: Sparkles },
    { id: "week-breakdown", title: "Week Breakdown", icon: CalendarCheck2 },
    { id: "benefits", title: "Benefits", icon: HeartPulse },
    { id: "cost", title: "Program Cost", icon: ReceiptIndianRupee },
    { id: "why-india", title: "Why Choose India", icon: MapPin },
    { id: "why-us", title: "Why Choose Us", icon: ShieldCheck },
    { id: "inclusions", title: "Inclusions", icon: CheckCircle2 },
    { id: "faq", title: "FAQ", icon: HelpCircle },
    { id: "top-centers", title: "Top Centers", icon: Building2 },
    { id: "reviews", title: "Patient Reviews", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins text-left">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80 font-semibold">Corporate Wellness Programs</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Ayurvedic Burnout Recovery Program in India</h1>
              <p className="text-lg md:text-xl text-white/90 font-medium">A medical-grade 14 to 21-day neurological reset for high-performance professionals.</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>4.7/5 Excellent Rating</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button
                className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-bold shadow-lg"
                onClick={() => setQuoteModalOpen(true)}
              >
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-12 md:space-y-16">
        {/* Gallery */}
        <section id="gallery" className="scroll-mt-24 mb-0">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Program Gallery for Burnout Recovery in India</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Burnout recovery program" className="w-full h-[260px] md:h-[460px] object-cover" />
            <button
              onClick={() => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setSelectedImage((selectedImage + 1) % galleryImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] opacity-100 shadow-md transition hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>



        <QuickSummary />
        <Overview onQuote={() => setQuoteModalOpen(true)} />
        <TherapySection />

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 !mt-8 md:!mt-12 items-stretch">
          <PointCard title="Who Is This Program For?" points={candidatePoints} positive />
          <PointCard title="Who Should Avoid This Program" points={avoidPoints} />
        </div>

        <WeeksSection />
        <BenefitsSection />
        <CostSection />

        {/* Reusable Sections */}
        <GridSection title="Why Choose India for Professional Burnout Recovery?" items={chooseIndia} />
        <WhyUsSection />
        <InclusionsSection />
        <CTA onQuote={() => setQuoteModalOpen(true)} />
        <FAQSection />
        <CentersSection navigate={navigate} onQuote={() => setQuoteModalOpen(true)} />
        <ReviewsSection review={review} setReview={setReview} />
      </main>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button - matching SOUKYA design */}
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

      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />

        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">
                  Program Sections
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"
                title="Close Menu"
              >
                <X className="h-6 w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">
                "Jump directly to any section in this program page."
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => jumpToSection(section.id)}
                className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">
                    {section.title}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                  <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default BurnoutRecoveryProgram;

