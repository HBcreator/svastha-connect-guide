import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  AlertTriangle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  MapPin,
  Star,
  XCircle,
  HeartPulse,
  Brain,
  Sparkles,
  ClipboardCheck,
  ArrowRight,
  Phone,
  ClipboardList,
  X,
  Search,
  Globe,
  Activity,
  Wind,
  Leaf,
  Heart,
  Target,
  Shield,
  IndianRupee,
} from "lucide-react";

import {
  quickSummaryRows,
  quickSummaryMobileIcons,
  whatIsProgram,
  therapies,
  candidatePoints,
  avoidPoints,
  weekBreakdown,
  benefits,
  benefitsSectionImages,
  costComparisonRows,
  chooseIndiaPoints,
  whyChooseUsPoints,
  inclusionsRows,
  faqItems,
  topAyurvedicCenters,
  patientReviews,
  jumpSections,
} from "./ayurvedaYogaRetreatData";

const galleryImages = [
  "/Program Images/ayurveda-yoga-gallery-1.png",
  "/Program Images/ayurveda-yoga-gallery-2.png",
  "/Program Images/ayurveda-yoga-gallery-3.png",
  "/Program Images/ayurveda-yoga-gallery-4.png",
  "/Program Images/ayurveda-yoga-gallery-5.png",
  "/Program Images/ayurveda-yoga-gallery-6.png",
];

const AyurvedaYogaRetreat = () => {
  const navigate = useNavigate();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [benefitsImageIndex, setBenefitsImageIndex] = useState(0);
  const [benefitsVisibleCards, setBenefitsVisibleCards] = useState(4);
  const [topCentersSlide, setTopCentersSlide] = useState(0);
  const [topCentersPerSlide, setTopCentersPerSlide] = useState(3);
  const [expandedCenterName, setExpandedCenterName] = useState<string | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  useEffect(() => {
    const updateBenefitsVisibleCards = () => {
      if (window.innerWidth < 768) {
        setBenefitsVisibleCards(1);
        return;
      }
      if (window.innerWidth < 1024) {
        setBenefitsVisibleCards(2);
        return;
      }
      setBenefitsVisibleCards(4);
    };
    updateBenefitsVisibleCards();
    window.addEventListener("resize", updateBenefitsVisibleCards);
    
    const updateTopCentersLayout = () => {
      if (window.innerWidth < 768) {
        setTopCentersPerSlide(1);
        return;
      }
      if (window.innerWidth < 1024) {
        setTopCentersPerSlide(2);
        return;
      }
      setTopCentersPerSlide(3);
    };
    updateTopCentersLayout();
    window.addEventListener("resize", updateTopCentersLayout);

    return () => {
      window.removeEventListener("resize", updateBenefitsVisibleCards);
      window.removeEventListener("resize", updateTopCentersLayout);
    }
  }, []);

  const goToPrevious = () => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToNext = () => setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  const goBenefitsPrevious = () => setBenefitsImageIndex((prev) => (prev - 1 + benefitsSectionImages.length) % benefitsSectionImages.length);
  const goBenefitsNext = () => setBenefitsImageIndex((prev) => (prev + 1) % benefitsSectionImages.length);

  const topCentersTotalSlides = Math.max(1, Math.ceil(topAyurvedicCenters.length / topCentersPerSlide));
  const visibleTopCenters = topAyurvedicCenters.slice(
    topCentersSlide * topCentersPerSlide,
    topCentersSlide * topCentersPerSlide + topCentersPerSlide
  );

  useEffect(() => {
    setTopCentersSlide((prev) => prev % topCentersTotalSlides);
  }, [topCentersTotalSlides]);

  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);

  const toggleCenterDescription = (centerName: string) => {
    setExpandedCenterName((prev) => (prev === centerName ? null : centerName));
  };

  const goReviewPrevious = () => setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  const goReviewNext = () => setCurrentReview((prev) => (prev + 1) % patientReviews.length);

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
    const imageIndex = (benefitsImageIndex + idx) % benefitsSectionImages.length;
    return {
      src: benefitsSectionImages[imageIndex],
      key: `${benefitsSectionImages[imageIndex]}-${benefitsImageIndex}-${idx}`,
    };
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins flex flex-col">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero Section - EXACT SCIATICA STYLE */}
        <section className="bg-[#335765] text-white py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurvedic Programs</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Ayurveda + Yoga Retreat Program in India</h1>
                <p className="text-lg md:text-xl text-white/90">Find harmony and balance through the perfect union of ancient healing sciences.</p>
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
                <Button className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]" onClick={() => setQuoteModalOpen(true)}>
                  <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-20 md:space-y-24">
          {/* 1. Program Gallery */}
          <section id="gallery" className="scroll-mt-24 mb-0">
            <div className="flex items-center justify-center mb-5 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Program Gallery for Ayurveda + Yoga Retreat in India</h2>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img src={galleryImages[selectedImage]} alt="Ayurveda and Yoga retreat program gallery" className="w-full h-[260px] md:h-[460px] object-cover" />
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

          {/* 2. Quick Summary */}
          <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
            <Card className="border-[#d8d0ae] bg-white shadow-sm">
              <CardContent className="p-4 md:p-6 space-y-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                    <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                    <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">14–21 Days</p>
                  </div>
                  <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                    <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Best Locations</p>
                    <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Rishikesh, Kerala</p>
                  </div>
                  <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                    <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                    <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">Stress & Burnout</p>
                  </div>
                  <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                    <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                    <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">$1,500 - $4,500</p>
                  </div>
                </div>

                <div className="grid gap-2 md:hidden">
                  {quickSummaryRows.map((row, idx) => (
                    <div
                      key={row[0]}
                      className={`rounded-xl border border-[#d8d0ae] px-3 py-3 ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          {(() => {
                            const Icon = quickSummaryMobileIcons[row[0] as keyof typeof quickSummaryMobileIcons] || ClipboardCheck;
                            return <Icon className="h-4 w-4 text-[#335765]" />;
                          })()}
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
                      {quickSummaryRows.map((row, idx) => (
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

          {/* 3. Program Overview */}
          <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-14 md:space-y-16">
            <div className="grid gap-10 md:gap-12">
              <Card className="h-full shadow-sm">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">{whatIsProgram.title}</h2>
                  <p className="text-[#7F543D] leading-relaxed text-justify md:text-left">
                    {whatIsProgram.content}
                  </p>
                  <p className="text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left">
                    Our 14–21 day retreat focuses on deep detoxification and spiritual nourishment. This dual approach clears stagnant toxins from the physical body, while specialized yoga flows and meditation practices address the stress-mind connection, aiming for long-term vitality.{" "}
                    <button
                      type="button"
                      onClick={() => setQuoteModalOpen(true)}
                      className="underline underline-offset-4 decoration-2 font-bold uppercase hover:text-[#7F543D] transition-colors"
                    >
                      CONTACT
                    </button>{" "}
                    Svastha Global to connect with the best of authentic <span className="italic">Ayurveda and Yoga</span> in India.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 4. Core Ayurvedic Therapies */}
            <Card className="h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#335765] mb-3 text-center">Core Therapies in Ayurveda + Yoga Retreat</h2>
                <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                  Your Vaidya and Yoga Master prescribe the precise combination of these practices based on your body type, dosha constitution, and wellness goals.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {therapies.map((item) => {
                    const titleMatch = item.title.match(/^([^()]+)\s*\(([^)]+)\)$/);
                    const mainTitle = titleMatch ? titleMatch[1].trim() : item.title;
                    const subTitle = titleMatch ? `(${titleMatch[2].trim()})` : "";
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-xl border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae] shrink-0">
                            <Icon className="h-5 w-5 text-[#2F5B5D]" />
                          </div>
                          <h3 className="font-semibold text-[#335765] leading-snug">
                            <span className="block">{mainTitle}</span>
                            {subTitle && <span className="block">{subTitle}</span>}
                          </h3>
                        </div>
                        <p className="text-sm text-[#7F543D]">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* 5 & 6. Who Is This For & Avoid */}
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
                    {candidatePoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-green-300">
                          <CircleCheck className="h-3.5 w-3.5 text-green-700" />
                        </span>
                        <span>{point}</span>
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
                    <h3 className="text-2xl font-bold text-[#335765]">Who Should Avoid This Program</h3>
                  </div>
                  <ul className="space-y-3">
                    {avoidPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[#7F543D] leading-relaxed">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-300">
                          <XCircle className="h-3.5 w-3.5 text-red-600" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 7. Week Breakdown */}
          <section id="week-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-7">
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Ayurveda + Yoga Retreat — Step by Step</h2>
              <p className="text-[#7F543D] mt-2">A highly structured holistic approach for deep mental repair and physical rejuvenation.</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {weekBreakdown.map((week, idx) => (
                <AccordionItem
                  key={week.title}
                  value={`week-${idx}`}
                  className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-green-500"
                >
                  <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
                    <div className="text-left">
                      <p className="text-lg font-bold text-[#335765]">{week.week}: {week.title}</p>
                      <p className="text-sm text-[#8C765E]">{week.focus}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-6">
                    <div>
                      <p className="font-semibold text-[#335765] mb-2.5">Key Focus Areas</p>
                      <ul className="space-y-2.5 text-sm text-[#7F543D]">
                        {week.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 leading-relaxed">
                            <CircleCheck className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* 8. Benefits */}
          <section id="benefits" className="scroll-mt-24 !mt-6 md:!mt-10">
            <div className="mb-7 md:mb-8">
              <div className="relative">
                <button
                  onClick={goBenefitsPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md"
                  aria-label="Previous benefits image"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  onClick={goBenefitsNext}
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
                      {benefitsSectionImages.map((image, idx) => (
                        <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                          <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                            <img
                              src={image}
                              alt="Ayurveda Yoga Retreat benefits visual"
                              className="w-full h-28 object-cover rounded-lg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      {benefitsVisibleImages.map((image) => (
                        <div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-primary/10 hover:border-primary/30 transition-all">
                          <img
                            src={image.src}
                            alt="Ayurveda Yoga Retreat benefits visual"
                            className="w-full h-24 md:h-28 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-2">
                {benefitsSectionImages.map((_, idx) => (
                  <button
                    key={`benefits-dot-${idx}`}
                    onClick={() => setBenefitsImageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#335765]" : "w-2.5 bg-[#C7D1C9]"
                      }`}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">Benefits of Ayurveda + Yoga Retreat</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                      <HeartPulse className="h-5 w-5 text-[#2F5B5D]" />
                    </span>
                    <h3 className="font-bold text-[#335765]">Physical Benefits</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#7F543D]">
                    {benefits.physical.map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                      <Brain className="h-5 w-5 text-[#2F5B5D]" />
                    </span>
                    <h3 className="font-bold text-[#335765]">Mental and Emotional Benefits</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#7F543D]">
                    {benefits.mental.map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                      <Sparkles className="h-5 w-5 text-[#2F5B5D]" />
                    </span>
                    <h3 className="font-bold text-[#335765]">Long-Term Effects</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#7F543D]">
                    {benefits.longTerm.map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 9. Cost */}
          <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 mb-12 md:mb-16 space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#335765]">Cost of Ayurveda + Yoga Retreat in India</h2>
              <p className="mt-2 text-[#7F543D]">
                India offers world-class holistic care at a fraction of what equivalent premium wellness resorts cost abroad.
              </p>
            </div>

            <Card className="border-[#d8d0ae] bg-white shadow-sm">
              <CardContent className="p-5 md:p-6 space-y-5">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
                    <p className="mt-2 text-2xl font-bold text-[#335765]">14–21 Days</p>
                    <p className="mt-1 text-sm text-[#6F6B5C]">Optimal time for deep tissue detox and flexibility gains.</p>
                  </div>
                  <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
                    <p className="mt-2 text-2xl font-bold text-[#335765]">$1,500 - $4,500</p>
                    <p className="mt-1 text-sm text-[#6F6B5C]">All-inclusive luxury and premium options.</p>
                  </div>
                  <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#d9cfae] shrink-0">
                        <Sparkles className="h-5 w-5 text-[#335765]" />
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-[#335765]">ALL INCLUSIVE</p>
                    </div>
                    <p className="mt-1 text-sm text-[#6F6B5C]">Covers food, stay, yoga, and Ayurvedic therapies.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
                    <p className="font-semibold text-[#335765]">Most popular - Integrated Yoga & Ayurveda Package</p>
                    <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
                      Best value for wellness seekers
                    </span>
                  </div>
                  <div className="md:hidden p-3 space-y-2 bg-white">
                    {costComparisonRows.map((row) => (
                      <div key={row.program} className="rounded-xl border border-[#d8d0ae] p-3 bg-[#FFFEFA]">
                        <p className="text-[13px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">Program</p>
                        <p className="mt-1 text-sm text-[#7F543D] font-semibold break-words">{row.program}</p>
                        <div className="mt-3 grid grid-cols-1 gap-2">
                          <div>
                            <p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Cost</p>
                            <p className="text-sm text-[#7F543D] font-semibold">{row.cost}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.1em] text-[#335765] font-extrabold">Notes</p>
                            <p className="text-sm text-[#7F543D] font-semibold break-words">{row.notes}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
                        {costComparisonRows.map((row) => (
                          <tr key={row.program} className="border-t bg-white">
                            <td className="p-3 font-medium text-[#3D4B4C]">{row.program}</td>
                            <td className="p-3 text-[#7F543D]">{row.category}</td>
                            <td className="p-3 text-[#7F543D]">{row.cost}</td>
                            <td className="p-3 text-[#7F543D]">{row.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 10. Why India */}
          <section id="why-india" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14">
            <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
              <CardContent className="p-6 md:p-8 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">Why Choose India for Ayurveda & Yoga?</h2>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {chooseIndiaPoints.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-lg border border-[#d9cfae] p-4 bg-white hover:shadow-md transition">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                            <Icon className="h-4.5 w-4.5 text-[#335765]" />
                          </span>
                          <p className="font-semibold text-[#335765]">{item.title}</p>
                        </div>
                        <p className="text-sm text-[#7F543D] mt-2">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 11. Why Choose Us */}
          <section
            id="why-us"
            className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]"
            style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#335765] mb-3">Why Choose Us for Your Treatment Journey</h2>
              <p className="text-[#7F543D]">
                Complete holistic support for your wellness journey, from medical assessment to post-program integration.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">Curated Centers</span>
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">Global Patient Care</span>
              <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">Expert Shortlisting</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {whyChooseUsPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="bg-white rounded-2xl p-4 border border-[#d7dcca] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F6EF] ring-1 ring-green-200">
                        <Icon className="h-5 w-5 text-[#1E7A4D]" />
                      </span>
                      <p className="text-sm font-bold text-[#335765]">{idx + 1}. {point.title}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-[#5C5E52]">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 12. Inclusions */}
          <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-[#335765]">What Is Included in the Retreat Package?</h2>
              <p className="text-[#7F543D]">Everything essential for deep mind-body healing and spiritual renewal.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
                <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p>
                <p className="text-lg font-bold text-[#335765] mt-1">14–21 Nights</p>
              </div>
              <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
                <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Care</p>
                <p className="text-lg font-bold text-[#335765] mt-1">Master-Led</p>
              </div>
              <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
                <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Diet</p>
                <p className="text-lg font-bold text-[#335765] mt-1">Sattvic / Organic</p>
              </div>
              <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
                <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Sessions</p>
                <p className="text-lg font-bold text-[#335765] mt-1">Daily Yoga</p>
              </div>
            </div>
            <Card className="shadow-sm border-[#dfe7e2]">
              <CardContent className="p-3 md:p-0">
                <div className="hidden md:block overflow-auto">
                  <table className="w-full text-sm min-w-[680px]">
                    <thead className="bg-[#F5F8F6] text-[#335765]">
                      <tr>
                        <th className="text-left p-3 font-semibold">Inclusion</th>
                        <th className="text-left p-3 font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inclusionsRows.map((row) => {
                        const Icon = row.icon;
                        return (
                          <tr key={row.label} className="border-t">
                            <td className="p-3 font-medium text-[#3D4B4C]">
                              <div className="flex items-center gap-2.5">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                                  <Icon className="h-4 w-4 text-[#335765]" />
                                </span>
                                <span>{row.label}</span>
                              </div>
                            </td>
                          <td className="p-3 text-[#7F543D]">{row.details}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile View for Inclusions */}
                <div className="md:hidden divide-y divide-border">
                  {inclusionsRows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <div key={row.label} className="flex items-start gap-3 p-4">
                        <Icon className="h-5 w-5 text-[#335765] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">
                            {row.label}
                          </p>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {row.details}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Complete Care Continuity Card */}
            <div className="bg-[#F1F7F8] border border-[#335765]/10 border-l-4 border-l-[#335765] rounded-xl p-5 flex items-start gap-4 mt-6 shadow-sm">
              <Globe className="h-6 w-6 text-[#335765] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#335765] text-lg md:text-xl">Complete Care Continuity</h3>
                <p className="text-[#5C5E52] text-sm md:text-base mt-1.5 leading-relaxed">
                  Airport transfers via premium fleet, pre-arrival dietary guidelines, on-ground concierge support, and post-retreat health maintenance plans.
                </p>
              </div>
            </div>
          </section>

          {/* 13. Consultation CTA */}
          <section id="consultation" className="scroll-mt-24 !mt-6 md:!mt-10 overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
                <img
                  src="/Program Images/ayurveda-yoga-gallery-4.png"
                  alt="Ayurvedic Yoga Retreat consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
                <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">Book Your Ayurveda + Yoga Retreat in India</h2>
                <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                  Begin your holistic journey today. We help you select the premium retreat center best suited for your wellness goals and comfort.
                </p>
                <div className="space-y-3 mt-4 max-w-xl">
                  <a
                    href="https://wa.me/918028432737?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%20Ayurveda Yoga Retreat%20program."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  >
                    <span className="text-xs md:text-sm font-semibold leading-tight text-primary uppercase">WhatsApp Us Now</span>
                    <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                  </a>
                  <Button className="w-full h-11 md:h-12 bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* 14. FAQ Section */}
          <section id="faq" className="scroll-mt-24 !mt-6 md:!mt-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
              <p className="text-[#7F543D] mt-2 font-medium">Common queries about the Ayurveda + Yoga Retreat in India.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-xl bg-white shadow-sm overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 text-left font-bold text-[#335765] hover:no-underline hover:bg-[#F8F4E7]/50 transition-all">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-[#7F543D] leading-relaxed border-t bg-[#F9FAF9]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* 15. Top Centers */}
          <section id="top-centers" className="scroll-mt-24 !mt-10 md:!mt-16 space-y-8">
            <div className="text-center space-y-2 md:space-y-3 px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Top Ayurvedic Centers for Ayurveda & Yoga Retreat in India</h2>
              <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">Handpicked resorts and ashrams offering authentic retreats.</p>
            </div>
            <div className="relative group flex items-center justify-center">
              {/* Navigation Arrows */}
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
                {visibleTopCenters.map((center, idx) => (
                  <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
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
                            <span className="text-[12px] md:text-[13px] font-semibold truncate" title={center.location}>{center.location}</span>
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
                          <Link
                            to={center.link}
                            target="_blank"
                            className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap"
                          >
                            View Details
                          </Link>
                          <Button
                            onClick={() => setQuoteModalOpen(true)}
                            className="w-full bg-[#335765] text-white hover:bg-[#2A4854] font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap"
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
                  onClick={() => window.open('/centers', '_blank')}
                >
                  VIEW ALL CENTERS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* 16. Patient Stories */}
      <section id="reviews" className="scroll-mt-24 py-12 md:py-20 bg-transparent w-full">
        <div className="container mx-auto px-4 max-w-6xl text-left">
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
          </div>

          <div className="max-w-4xl mx-auto relative px-0 md:px-0">
            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
              <button
                onClick={goReviewPrevious}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
              <button
                onClick={goReviewNext}
                className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <Card className="border-2 border-[#335765]/20 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-4 md:p-12 relative">
                <div className="max-w-4xl mx-auto">
                  {/* SVG Quote Icon */}
                  <div className="text-[#335765]/20 mb-3 md:mb-4">
                    <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Review Content */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">
                      {patientReviews[currentReview].title}
                    </h3>
                    <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                      "{patientReviews[currentReview].review}"
                    </p>
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                      {patientReviews[currentReview].name.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-1">
                        <h4 className="text-base md:text-xl font-bold text-[#335765] leading-tight truncate">
                          {patientReviews[currentReview].name}
                        </h4>
                        {patientReviews[currentReview].verified && (
                          <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold whitespace-nowrap border border-green-200">
                            &#10003; Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-[#7F543D] mb-1">
                        {patientReviews[currentReview].location} {patientReviews[currentReview].condition && `- ${patientReviews[currentReview].condition}`}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating Rendering */}
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < patientReviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-[#335765]">
                      {patientReviews[currentReview].rating}.0
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {patientReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#335765]" : "w-3 h-3 bg-[#335765]/20 hover:bg-[#335765]/40"}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Desktop Vertical BROWSE Button */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button onClick={() => setIsJumpModalOpen(true)} className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter">
          <span className="drop-shadow-sm">B</span><span className="drop-shadow-sm">R</span><Search size={16} strokeWidth={3.5} className="drop-shadow-sm" /><span className="drop-shadow-sm">W</span><span className="drop-shadow-sm">S</span><span className="drop-shadow-sm">E</span>
        </button>
      </div>

      {/* Mobile BROWSE button */}
      <button onClick={() => setIsJumpModalOpen(true)} className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Search size={18} className="-ml-1" /><span>BROWSE</span></button>

      <button onClick={() => setQuoteModalOpen(true)} className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Phone size={18} className="-ml-1" /><span className="hidden md:inline">GET FREE QUOTE</span><span className="md:hidden">QUOTE</span></button>

      <div className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />
        <div className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          <div className="p-4 pb-4 bg-[#335765] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5"><div className="flex items-center gap-2 mb-1"><div className="h-px w-6 bg-white/30" /><span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span></div><h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Program Sections</h2></div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50" title="Close Menu"><X className="h-6 w-6 transition-transform" /></button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm"><ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" /><p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section in this program page."</p></div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10"><div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200"><span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span></div><span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">{section.title}</span></div>
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

export default AyurvedaYogaRetreat;
