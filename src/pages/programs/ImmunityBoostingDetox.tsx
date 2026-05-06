import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, ClipboardCheck, ClipboardList, Activity, Brain, Leaf, Wind, CircleCheck, AlertTriangle, XCircle, Sparkles, HeartPulse, TrendingUp, Stethoscope, ReceiptIndianRupee, BedDouble, UtensilsCrossed, Pill, CheckCircle2, ShieldCheck, Globe2, CalendarCheck2, Route, Headset, UserCog, UserCheck, Droplet, ArrowRight, Building2, HelpCircle, Search, Phone, X } from "lucide-react";

const galleryImages = [
  "/program-images/immunity/1.png",
  "/program-images/immunity/2.png",
  "/program-images/immunity/3.png",
  "/program-images/immunity/4.png",
  "/program-images/immunity/5.png",
  "/program-images/immunity/6.png",
];

const chooseIndia = [
  ["Authentic Panchakarma", "Access to traditional, uncompromised detox methods in their birthplace.", Sparkles],
  ["Vaidya-Led Care", "Treatment guided by highly qualified Ayurvedic physicians with deep expertise in immunology.", Stethoscope],
  ["Pure Herbal Medicines", "Utilization of fresh, potent herbs and authentic formulations native to the Indian subcontinent.", Leaf],
  ["Incredible Value", "Access to world-class medical wellness infrastructure at highly competitive international rates.", ReceiptIndianRupee],
  ["Healing Environments", "Retreats located in pristine nature, from the backwaters of Kerala to the Himalayan foothills.", MapPin],
  ["Holistic Integration", "Seamless combining of Ayurveda, therapeutic Yoga, and mindful nutrition for total body reset.", Activity]
] as const;

const whyUsPoints = [
  { icon: ShieldCheck, title: "Verified Medical Standards", text: "Only partner centers with physician-led Ayurvedic protocols, safety screening, and treatment quality validation for detoxification." },
  { icon: Globe2, title: "International Patient Expertise", text: "Dedicated support for travelers from 40+ countries with clear communication, pre-trip guidance, and planning assistance." },
  { icon: CalendarCheck2, title: "Pre-Travel Doctor Consultation", text: "Ayurvedic physician case review before booking helps shortlist the right center, program, and treatment pathway for your condition." },
  { icon: Route, title: "Complete Journey Support", text: "From center selection to arrival coordination, airport transfers, and check-in flow management — all arranged for you." },
  { icon: Headset, title: "During-Stay Assistance", text: "On-ground guidance through your full detox protocol for smooth continuity, comfort, and progress tracking." },
  { icon: UserCog, title: "Condition-Based Matching", text: "Personalized center mapping based on your specific health goals, metabolic state, budget, and wellness preferences." },
];

const inclusions = [
  ["Accommodation", "Private suite for 13 nights in a premium wellness center", BedDouble],
  ["Ayurvedic Meals", "Customized detoxifying and nourishing daily sattvic meals", UtensilsCrossed],
  ["Doctor Consultations", "Detailed pulse diagnosis and daily health monitoring by senior Vaidyas", Stethoscope],
  ["Daily Therapies", "Abhyanga, Udwarthanam, Virechanam, and Nasya as prescribed", Activity],
  ["Herbal Medicines", "Specific formulations to boost Agni (digestion) and build Ojas (immunity)", Pill],
  ["Restorative Sessions", "Daily therapeutic yoga, pranayama, and meditation", Brain],
  ["Transition Protocol", "Post-retreat diet and lifestyle guidelines to maintain robust immunity", ClipboardCheck],
] as const;

const quickRows = [
  ["Program Name", "14-Day Ayurvedic Immunity Boosting Detox"],
  ["Duration", "14 Days / 13 Nights"],
  ["Who It Is For", "Individuals looking to strengthen natural defenses, detoxify, and restore vitality"],
  ["Core Approach", "Ojas enhancement + Ama (toxin) elimination + Rasayana therapies"],
  ["Key Benefit", "Enhanced immune response, deep cellular detox, and metabolic balance"],
  ["Top Locations", "PAN India"],
  ["Average Cost", "$1,200 – $2,500 USD"],
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

const candidatePoints = [
  "Individuals prone to frequent colds, allergies, or recurrent infections",
  "Those experiencing unexplained chronic fatigue and low energy levels",
  "People recovering from prolonged illness or intensive medical treatments",
  "Individuals with sluggish metabolism or chronic digestive issues",
  "Professionals seeking a preventive health reset in a pristine environment",
  "Anyone looking to naturally delay aging and boost vitality (Rasayana)",
];

const avoidPoints = [
  "Individuals with active infectious diseases or acute high fever",
  "Those currently undergoing intensive treatments like chemotherapy",
  "Patients requiring immediate surgical or emergency medical care",
  "Pregnant women (deep detox protocols are generally contraindicated)",
  "Children under 16 (unless specifically prescribed by a Vaidya)",
];

const benefitGroups = [
  ["Physical Benefits", HeartPulse, ["Elimination of metabolic toxins (Ama)", "Enhanced respiratory and digestive function", "Improved cellular metabolism and energy", "Stronger resistance to seasonal infections", "Deep tissue nourishment and repair", "Balanced immune system response"]],
  ["Mental and Emotional Benefits", Brain, ["Reduction in stress-induced immune suppression", "Improved mental clarity and focus", "Stabilization of mood and energy crashes", "Enhanced emotional resilience", "Better quality of restorative sleep", "Renewed sense of vitality and lightness"]],
  ["Long-Term Effects", Sparkles, ["Sustained high-level natural immunity", "Slower biological aging (Rasayana effect)", "Personalized preventive health toolkit", "Greater resilience against environmental toxins", "Long-lasting metabolic efficiency", "Continued building of protective Ojas"]],
] as const;

const weeks = [
  {
    title: "Week 1 - Detoxification & Channel Clearing",
    duration: "Day 1-7",
    focus: "Eliminating deep-seated toxins and preparing the body for nourishment",
    description: "The first phase focuses on breaking down Ama (toxins) and clearing the Srotas (micro-channels). Through internal oleation, herbal powder massages, and therapeutic purgation, the body's internal environment is purified.",
    bullets: ["Pulse diagnosis & metabolic assessment", "Deep tissue massages & herbal steam", "Virechanam (gut cleansing)", "Anti-inflammatory Ayurvedic diet"]
  },
  {
    title: "Week 2 - Rejuvenation & Immunity Building",
    duration: "Day 8-14",
    focus: "Nourishing the tissues and building Ojas (vitality)",
    description: "Once the body is cleansed, the focus shifts to deep nourishment. This phase utilizes specific Rasayana (rejuvenating) herbs and therapies like Njavarakizhi to rebuild tissue strength, enhance cellular immunity, and stabilize energy levels.",
    bullets: ["Njavarakizhi (nourishing rice massage)", "Rasayana herbal formulations", "Restorative yoga & pranayama", "Personalized post-detox health plan"]
  },
] as const;

const therapies = [
  ["Udwarthanam", "Herbal Powder Massage", "A stimulating dry massage using medicinal powders to improve lymphatic drainage and break down toxic buildup.", Activity],
  ["Virechanam", "Therapeutic Purgation", "A core Panchakarma therapy that clears excess Pitta and toxins from the gut, purifying the blood.", Droplet],
  ["Njavarakizhi", "Nourishing Rice Bolus", "A deeply rejuvenating treatment using medicated rice and milk to nourish tissues and build physical stamina.", Sparkles],
  ["Abhyanga", "Therapeutic Full-Body Massage", "Warm oils specifically chosen to boost immunity, improve circulation, and expel toxins from peripheral tissues.", HeartPulse],
  ["Swedanam", "Herbal Steam Therapy", "Opens the micro-channels (Srotas) to flush out deeply embedded impurities through sweat.", Wind],
  ["Nasya", "Nasal Administration", "Clears the respiratory pathways, establishing a critical first line of defense against airborne pathogens.", Leaf],
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
      <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Why Choose Us for Immunity Detox</h2>
      <p className="text-[#7F543D] mt-2 max-w-xl mx-auto">More than a getaway — we provide a clinically-supervised biological intervention for deep health restoration.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["Physician-Led Protocols", "Strict Medical Standards", "Premium Care Environments"].map((tag) => (
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
  <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 space-y-5">
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold text-[#335765]">What Is Included in the 14-Day Package?</h2>
      <p className="text-[#7F543D]">Every element curated for deep systemic detox and immunity enhancement.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
        <p className="text-lg font-bold text-[#335765] mt-1">14 Days</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p>
        <p className="text-lg font-bold text-[#335765] mt-1">13 Nights</p>
      </div>
      <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
        <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Core Inclusions</p>
        <p className="text-lg font-bold text-[#335765] mt-1">Full Clinical Plan</p>
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
          <Globe2 className="h-5 w-5 text-[#335765]" />
        </div>
        <div>
          <p className="text-[#214348] font-bold">Complete Care Continuity</p>
          <p className="text-sm text-[#335765] leading-relaxed mt-1">
            Airport transfers via premium fleet, pre-arrival dietary guidelines, on-ground concierge support, and post-retreat health maintenance plans.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const QuickSummary = () => (
  <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
    <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
    <Card className="border-[#d8d0ae] bg-white shadow-sm">
      <CardContent className="p-4 md:p-6 space-y-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[["Duration", "14 Days / 13 Nights"], ["Ideal For", "Low Immunity, Toxin Buildup"], ["Top Locations", "PAN India"], ["Avg Cost", "$1,200 - $2,500"]].map(([label, value]) => (
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
          <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">What Is the Ayurvedic Immunity Boosting Detox Program in India?</h2>
          <p className="text-[#7F543D] leading-relaxed text-justify md:text-left text-sm md:text-base">The 14-Day Ayurvedic Immunity Boosting Detox Program in India is a comprehensive health reset designed to flush out deep-seated toxins (Ama) and fortify the body's natural defense mechanisms (Ojas). Unlike generic wellness retreats, this program offers a personalized, clinical approach to strengthening the immune system against recurrent infections, fatigue, and environmental stressors.</p>
          <p className="text-[#7F543D] leading-relaxed text-justify md:text-left text-sm md:text-base">Through traditional Panchakarma detoxification techniques and immune-modulating therapies, the program clears metabolic pathways. It addresses the root cause of low immunity by balancing the doshas and optimizing digestion (Agni), which is the foundation of long-term health in Ayurveda.</p>
          <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
            In Ayurveda, robust immunity is closely tied to <em>Ojas</em> (the essential vital energy of all bodily tissues).{" "}
            <button type="button" onClick={onQuote} className="underline underline-offset-4 decoration-2 font-bold uppercase hover:text-[#7F543D] transition-colors">CONTACT</button>{" "}
            Svastha Global to find the perfect luxury medical retreat in India to begin your journey toward robust health and vitality.
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
      <h2 className="text-2xl font-bold text-[#335765] mb-3 text-center uppercase tracking-wide">The Science of Immunity & Detoxification</h2>
      <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto font-medium">
        Our clinical protocol utilizes powerful Panchakarma techniques to expel deep-seated Ama (toxins) followed by potent Rasayana (rejuvenation) therapies to build lasting immunity.
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
      <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">The 14-Day Program - Week-by-Week Breakdown</h2>
      <p className="text-[#7F543D] mt-2 font-medium">A structured medical journey from systemic detoxification to cellular rejuvenation.</p>
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
            <div className="md:hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${benefitsImageIndex * 100}%)` }}
              >
                {galleryImages.map((image, idx) => (
                  <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                    <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                      <img src={image} alt="Detox benefit" className="w-full h-32 md:h-40 object-cover rounded-lg" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {benefitsVisibleImages.map((image) => (
                  <div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-[#335765]/10 hover:border-[#335765]/30 transition-all">
                    <img src={image.src} alt="Detox benefit" className="w-full h-28 md:h-32 object-cover rounded-lg" loading="lazy" />
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

      <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of the Ayurvedic Immunity Boosting Detox Program</h2>
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
      <h2 className="text-3xl font-bold text-[#335765]">Cost of Ayurvedic Immunity Boosting Detox in India</h2>
      <p className="mt-2 text-[#7F543D]">A 14-day physician-led medical detox including premium accommodation, daily therapies, meals, and specialized medicines.</p>
    </div>
    <Card className="border-[#d8d0ae] bg-white shadow-sm">
      <CardContent className="p-5 md:p-6 space-y-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
            <p className="mt-2 text-2xl font-bold text-[#335765]">14 Days</p>
            <p className="mt-1 text-sm text-[#6F6B5C]">Ideal timeline for complete systemic detox.</p>
          </div>
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
            <p className="mt-2 text-2xl font-bold text-[#335765]">$1,200 - $2,500</p>
            <p className="mt-1 text-sm text-[#6F6B5C]">Most popular range for luxury medical retreats.</p>
          </div>
          <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                <Sparkles className="h-5 w-5 text-[#335765]" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#335765]">MOST POPULAR</p>
            </div>
            <p className="mt-1 text-sm text-[#6F6B5C]">Comprehensive preventive health care with private suite.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
            <p className="font-semibold text-[#335765]">Most popular - Immunity Boosting Detox</p>
            <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">Highest demand package</span>
          </div>
          <div className="md:hidden p-3 space-y-2 bg-white">
            <div className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p>
              <p className="mt-1 text-sm text-[#7F543D] font-semibold">14-Day Immunity Boosting Detox</p>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Category</p><p className="text-sm text-[#7F543D] font-semibold">Ama Cleansing & Ojas Building</p></div>
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p><p className="text-sm text-[#7F543D] font-semibold">$1,200 - $2,500</p></div>
                <div><p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p><p className="text-sm text-[#7F543D] font-semibold">Highest demand preventive health package</p></div>
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
                  <td className="p-3 font-medium text-[#3D4B4C]">14-Day Immunity Boosting Detox</td>
                  <td className="p-3 text-[#7F543D]">Ama Cleansing & Ojas Building</td>
                  <td className="p-3 text-[#7F543D]">$1,200 - $2,500</td>
                  <td className="p-3 text-[#7F543D]">Highest demand preventive health package</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);

const faqs = [
  ["How is an Ayurvedic detox different from a juice cleanse?", "Ayurvedic detox (Panchakarma) works at a cellular level using medicated oils and purgation to draw out deep-seated toxins (Ama) from tissues, whereas juice cleanses often only impact superficial digestion and can aggravate Vata dosha."],
  ["Why is a minimum of 14 days required for immunity boosting?", "It takes about 7 days to fully detach and mobilize deep-seated toxins through oleation and heat. The second week focuses on eliminating these toxins and rebuilding the tissues (Rasayana) to stabilize your immune response."],
  ["Is the program safe if I have a history of allergies or autoimmune issues?", "Yes, Ayurveda views allergies and autoimmune conditions as an overactive immune response caused by Ama. This program safely clears the Ama and modulates the immune system. However, specific protocols will be customized by your Vaidya upon assessment."],
  ["Will I experience weakness or fatigue during the detox?", "You may experience mild fatigue during the first few days as toxins are mobilized. However, because the Ayurvedic approach uses nourishing oils and a supportive diet, severe weakness is prevented, and energy levels surge in the second week."],
  ["What kind of diet will I follow during the program?", "You will follow a Sattvic, anti-inflammatory diet. This usually includes warm, easily digestible meals like Kitchari, cooked vegetables, and specific herbal broths designed to rest the digestive fire (Agni) while providing nourishment."],
  ["Can I combine this detox with a sightseeing holiday in India?", "We strongly advise against strenuous travel during the 14-day detox. Your body will be undergoing deep repair and requires rest. Sightseeing should be planned before the program or well after the transition phase."],
  ["Are the herbal medicines used safe and regulated?", "Absolutely. We only partner with NABH-accredited centers that use classically prepared, rigorously tested, and authentic Ayurvedic medicines sourced from their own medicinal gardens or trusted pharmaceutical facilities."],
  ["How soon will I notice a difference in my health?", "Most guests report a significant improvement in digestion, sleep quality, and mental clarity by the end of the first week. The true immunity-boosting effects become apparent in the months following the retreat, as you experience fewer seasonal illnesses."],
  ["Do I need to undergo all Panchakarma therapies?", "No. A senior Ayurvedic physician will evaluate your Dosha, metabolic state, and strength (Bala). They will only prescribe the specific therapies—such as Virechanam or Nasya—that are safe and effective for your unique constitution."],
  ["How do I maintain the benefits after returning home?", "The program concludes with a personalized 'Transition Protocol'. You will receive specific dietary guidelines, daily routines (Dinacharya), and Rasayana herbs to continue building your immunity (Ojas) in your home environment."],
] as const;

const reviews = [
  ["Elena Volkov", "Moscow, Russia", "A Complete Transformation of My Health", "After struggling with recurrent respiratory infections every winter and feeling a total lack of vitality, I decided to try authentic Ayurveda in India. The 14-day immunity detox was an intense but deeply healing journey that cleared my systemic congestion. The Nasya treatments specifically addressed my chronic sinus issues, while the Rasayana herbs rebuilt my strength from within. I've returned to Moscow feeling remarkably resilient, energetic, and most importantly, I haven't caught a single cold since my return."],
  ["James Harrington", "Sydney, Australia", "The Ultimate Preventive Health Reset", "I arrived at the center feeling constantly sluggish, inflamed, and metabolically exhausted from my high-stress lifestyle in Sydney. The doctors immediately identified my sluggish Agni (digestive fire) as the root cause of my low immunity. Through a strict but surprisingly delicious Sattvic diet and targeted therapies like Udwarthanam, I shed the toxic inflammation I didn't even realize I was carrying. My energy levels are now off the charts, and I feel a profound sense of physical and mental lightness."],
  ["Dr. Sarah Lin", "Toronto, Canada", "Clinical Precision with Holistic Care", "As a practitioner of Western medicine, I was thoroughly impressed by the clinical precision and diagnostic depth of the Ayurvedic physicians. The pulse diagnosis was remarkably accurate in pinpointing my specific digestive and immune imbalances. I found the Njavarakizhi (rice bolus) massages in the second week to be incredibly nourishing for my nervous system. This program offers a true cellular reset that complements modern medical understanding with ancient holistic wisdom."],
  ["Lars Nilsson", "Oslo, Norway", "Deep Cellular Repair in a Beautiful Setting", "The tranquil environment in Kerala provided the perfect backdrop for the deep biological repair my body desperately needed. I was completely exhausted from years of corporate stress, which had manifested as constant low-grade fevers and frequent illnesses. The therapeutic purgation (Virechanam) followed by specialized rejuvenation herbs completely rebooted my immune system. It is undoubtedly the most significant and rewarding investment I have ever made in my personal health and longevity."],
  ["Sophia Martinez", "Madrid, Spain", "Rebuilt My Defenses from the Ground Up", "I was in a cycle of catching every virus circulating in my office, which left me feeling constantly drained and vulnerable. The Vaidyas explained how my Ojas (vital energy) had been depleted by poor routines and environmental toxins. The daily rhythmic oil massages combined with a complete digital detox allowed my body to finally enter a state of deep repair. I feel significantly stronger, my digestion is perfect, and my immune system finally feels bulletproof against external stressors."]
] as const;

const centers = [
  ["SOUKYA International Holistic Health Centre", "Bengaluru, Karnataka, India", "India's first NABH-accredited AYUSH hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm.", 4.9, 500, "/Center Images/SOUKYA/top center Thumb.jpg", "/centers/bangalore/soukya"],
  ["Ananda in the Himalayas", "Narendra Nagar, Uttarakhand, India", "A world-renowned luxury destination spa located in the Himalayan foothills, focusing on Ayurveda, Yoga and Vedanta for total mental reset.", 4.9, 450, "/Center Images/Ananda in the Himalayas/Thumb.jpg", "/centers/uttarakhand/ananda-in-the-himalayas"],
  ["AyurvedaGram Heritage Wellness Centre", "Bengaluru, Karnataka, India", "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a tranquil heritage village with physician-guided therapies.", 4.7, 600, "/Center Images/AyurvedaGram/Thumb.jpg", "/centers/bangalore/ayurvedagram"],
  ["Kairali - The Ayurvedic Healing Village", "Palakkad, Kerala, India", "A world-renowned Ayurvedic village set in a lush landscape, offering authentic Panchakarma treatments for deep professional reset.", 4.8, 420, "/Center Images/Ananda in the Himalayas/Thumb.jpg", "/centers/kerala/kairali-ayurvedic-healing-village"],
  ["Carnoustie Ayurveda Wellness Resort", "Mararikulam, Kerala, India", "A premium beachside center known for authentic executive wellness care, experienced doctors, and personalized recovery plans.", 4.7, 360, "/Center Images/Carnoustie Ayurveda/Thumb.jpg", "/centers/kerala/carnoustie-ayurveda-wellness-resort"],
  ["Somatheeram Ayurveda Village Resort", "Thiruvananthapuram, Kerala, India", "The world's first Ayurveda resort, providing classical treatments for burnout on a beautiful cliff overlooking the Arabian Sea.", 4.7, 510, "/Center Images/Atmantan Wellness Resort/Thumb.jpg", "/centers/kerala/somatheeram"],
  ["AyurSoma Ayurveda Royal Retreat", "Thiruvananthapuram, Kerala, India", "Traditional Kerala Ayurveda in a royal retreat format with premium physician supervision and rejuvenation support.", 4.8, 300, "/Center Images/AyurSoma Ayurveda/Thumb.jpg", "/centers/kerala/ayursoma"],
  ["Atmantan Wellness Resort", "Mulshi, Maharashtra, India", "A luxury wellness destination overlooking the Sahyadri mountains, specializing in integrated medical wellness for corporate stress.", 4.8, 290, "/Center Images/Atmantan Wellness Resort/Thumb.jpg", "/centers/pune/atmantan-wellness-resort"],
  ["Kalari Kovilakom Palace for Ayurveda", "Palakkad, Kerala, India", "A globally recognized palace-turned-retreat providing strict, traditional, and authentic Ayurvedic treatments for total life reset.", 4.8, 240, "/Center Images/Kalari Kovilakom/Thumb.jpg", "/centers/kerala/kalari-kovilakom"]
] as const;

const CTA = ({ onQuote }: { onQuote: () => void }) => (
  <section id="consultation" className="scroll-mt-24 !mt-6 md:!mt-10 overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl">
    <div className="grid md:grid-cols-2 gap-0">
      <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
        <img
          src="/program-images/immunity/4.png"
          alt="Ayurvedic immunity consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
      </div>
      <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
        <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Immunity Boosting Detox Program in India</h2>
        <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
          Begin with a confidential case review. We help you choose the right retreat for deep cellular detox and immune system restoration.
        </p>
        <div className="space-y-3 mt-4 max-w-xl">
          <a
            href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20private%20consultation%20for%20the%20Immunity%20Boosting%20Detox%20program."
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
            aria-label="WhatsApp Executive Support"
          >
            <span className="text-xs md:text-sm font-semibold leading-tight uppercase tracking-wider">WhatsApp Medical Support</span>
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

  const topCentersTotalSlides = Math.max(1, centers.length - topCentersVisible + 1);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const toggleCenterDescription = (name: string) => setExpandedCenterName(prev => prev === name ? null : name);
  const visibleTopCenters = centers.slice(topCentersSlide, topCentersSlide + topCentersVisible);

  return (
    <section id="top-centers" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-6">
      <div className="text-center space-y-2 md:space-y-3 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers for Immunity Boosting Detox Program in India</h2>
        <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked Ayurvedic resorts offering authentic clinical detox and highest medical standards.</p>
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

      <div className="mt-4 flex justify-center">
          <Button
            className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group"
            onClick={() => window.open('/centers', "_blank")}
          >
            VIEW ALL CENTERS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
    </section>
  );
};

const ReviewsSection = ({ review, setReview }: { review: number; setReview: (n: number) => void }) => (
  <section id="reviews" className="scroll-mt-24 pt-2 pb-8 md:pt-4 md:pb-12 bg-transparent w-full">
    <div className="container mx-auto px-4 max-w-6xl text-left">
      <div className="text-center mb-6 md:mb-8 space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
        <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from international guests who restored their natural immunity</p>
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
      </div>
    </div>
  </section>
);

const ImmunityBoostingDetox = () => {
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
    { id: "therapy-section", title: "Science of Recovery", icon: Brain },
    { id: "week-breakdown", title: "Week-by-Week", icon: Calendar },
    { id: "benefits", title: "Benefits", icon: HeartPulse },
    { id: "cost", title: "Cost & Packages", icon: ReceiptIndianRupee },
    { id: "why-india", title: "Why India", icon: MapPin },
    { id: "why-us", title: "Why Us", icon: ShieldCheck },
    { id: "inclusions", title: "Inclusions", icon: CheckCircle2 },
    { id: "consultation", title: "Consultation", icon: Stethoscope },
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
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80 font-semibold">Preventive Health Programs</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Immunity Boosting Detox Program in India</h1>
              <p className="text-lg md:text-xl text-white/90 font-medium">A specialized 14-day Ayurvedic detox to strengthen your natural defense and restore vitality.</p>
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
                className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-bold shadow-lg"
                onClick={() => setQuoteModalOpen(true)}
              >
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-8 pb-12 max-w-6xl space-y-12">
        {/* Gallery Section */}
        <section id="gallery" className="scroll-mt-24 mb-0">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Program Gallery for Immunity Boosting Detox in India</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt="Immunity boosting detox program" className="w-full h-[260px] md:h-[460px] object-cover" />
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
        <GridSection title="Why Choose India for Immunity Boosting Detox?" items={chooseIndia} />
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

export default ImmunityBoostingDetox;
