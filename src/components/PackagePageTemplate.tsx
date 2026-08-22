import { useEffect, useState, type ReactNode, type ComponentType } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  BedDouble,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ClipboardCheck,
  ClipboardList,
  MapPin,
  ReceiptIndianRupee,
  Search,
  Star,
  Stethoscope,
  Phone,
  UserCheck,
  X,
  XCircle,
  type LucideIcon,
} from "lucide-react";

type Icon = LucideIcon | ComponentType<{ className?: string }>;

export type PackageTherapy = { title: string; text: string; icon: Icon };
export type PackagePhase = {
  title: string;
  duration: string;
  focus: string;
  description: string;
  bullets: string[];
};
export type PackageBenefitGroup = { title: string; icon: Icon; items: string[] };
export type PackagePoint = { title: string; text: string; icon: Icon };
export type PackageWhyUsPoint = { title: string; description: string; icon: Icon };
export type PackageInclusionRow = { label: string; details: string; icon: Icon };
export type PackageFaq = { question: string; answer: string };
export type PackageReview = {
  name: string;
  location: string;
  condition: string;
  title: string;
  review: string;
  rating: number;
  verified: boolean;
};
export type PackageCenter = {
  name: string;
  city: string;
  location: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  link: string;
};

export type PackagePageProps = {
  /** e.g. "complete-body-rejuvenation-program-in-india" */
  slug: string;
  /** Full title, e.g. "Complete Body Rejuvenation Program in India" */
  pageTitle: string;
  heroTagline: string;
  heroDescription: string;
  heroRatingText: string;

  galleryImages: string[];

  /** Duration / Ideal For / Top Locations / Avg Cost shown in the summary cards + table */
  summary: {
    duration: string;
    idealFor: string;
    locations: string;
    avgCost: string;
    supervisedBy: string;
    includes: string;
  };

  overviewTitle: string;
  overviewParagraphs: ReactNode[];
  metrics: [
    { value: string; label: string; icon: Icon },
    { value: string; label: string; icon: Icon },
    { value: string; label: string; icon: Icon },
  ];

  therapiesTitle: string;
  therapiesSubtitle: string;
  therapies: PackageTherapy[];

  candidateTitle: string;
  candidatePoints: string[];
  avoidTitle: string;
  avoidPoints: string[];

  phaseSectionTitle: string;
  phaseSectionSubtitle: string;
  phases: PackagePhase[];

  benefitsSectionImages: string[];
  benefitsTitle: string;
  benefitGroups: [PackageBenefitGroup, PackageBenefitGroup, PackageBenefitGroup];

  costTitle: string;
  costSubtitle: string;
  costLength: string;
  costLengthNote: string;
  costBudget: string;
  costBudgetNote: string;
  costPopularTag: string;
  costPopularDesc: string;
  costBanner: string;
  costBannerTag: string;

  whyIndiaTitle: string;
  chooseIndiaPoints: PackagePoint[];

  whyUsTitle: string;
  whyUsSubtitle: string;
  whyUsBadges: string[];
  whyChooseUsPoints: PackageWhyUsPoint[];

  inclusionsTitle: string;
  inclusionsSubtitle: string;
  inclusionStats: { duration: string; stay: string; core: string; care: string };
  inclusionsRows: PackageInclusionRow[];

  ctaTitle: string;
  ctaDescription: string;
  ctaImage: string;
  whatsappNumber?: string;
  whatsappMessage: string;

  faqItems: PackageFaq[];

  topCentersTitle: string;
  topCentersSubtitle: string;
  topCenters: PackageCenter[];

  reviews: PackageReview[];
};

const DEFAULT_WHATSAPP = "918028432737";

export default function PackagePageTemplate({
  slug,
  pageTitle,
  heroTagline,
  heroDescription,
  heroRatingText,
  galleryImages,
  summary,
  overviewTitle,
  overviewParagraphs,
  metrics,
  therapiesTitle,
  therapiesSubtitle,
  therapies,
  candidateTitle,
  candidatePoints,
  avoidTitle,
  avoidPoints,
  phaseSectionTitle,
  phaseSectionSubtitle,
  phases,
  benefitsSectionImages,
  benefitsTitle,
  benefitGroups,
  costTitle,
  costSubtitle,
  costLength,
  costLengthNote,
  costBudget,
  costBudgetNote,
  costPopularTag,
  costPopularDesc,
  costBanner,
  costBannerTag,
  whyIndiaTitle,
  chooseIndiaPoints,
  whyUsTitle,
  whyUsSubtitle,
  whyUsBadges,
  whyChooseUsPoints,
  inclusionsTitle,
  inclusionsSubtitle,
  inclusionStats,
  inclusionsRows,
  ctaTitle,
  ctaDescription,
  ctaImage,
  whatsappNumber = DEFAULT_WHATSAPP,
  whatsappMessage,
  faqItems,
  topCentersTitle,
  topCentersSubtitle,
  topCenters,
  reviews,
}: PackagePageProps) {
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
    const update = () => {
      if (window.innerWidth < 768) return setBenefitsVisibleCards(1);
      if (window.innerWidth < 1024) return setBenefitsVisibleCards(2);
      setBenefitsVisibleCards(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) return setTopCentersPerSlide(1);
      if (window.innerWidth < 1024) return setTopCentersPerSlide(2);
      setTopCentersPerSlide(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goToPrevious = () => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToNext = () => setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  const goBenefitsPrevious = () => setBenefitsImageIndex((prev) => (prev - 1 + benefitsSectionImages.length) % benefitsSectionImages.length);
  const goBenefitsNext = () => setBenefitsImageIndex((prev) => (prev + 1) % benefitsSectionImages.length);

  const benefitsVisibleImages = Array.from({ length: benefitsVisibleCards }, (_, idx) => {
    const imageIndex = (benefitsImageIndex + idx) % benefitsSectionImages.length;
    return { src: benefitsSectionImages[imageIndex], key: `${benefitsSectionImages[imageIndex]}-${benefitsImageIndex}-${idx}` };
  });

  const topCentersTotalSlides = Math.max(1, Math.ceil(topCenters.length / topCentersPerSlide));
  const visibleTopCenters = topCenters.slice(topCentersSlide * topCentersPerSlide, topCentersSlide * topCentersPerSlide + topCentersPerSlide);

  useEffect(() => {
    setTopCentersSlide((prev) => prev % topCentersTotalSlides);
  }, [topCentersTotalSlides]);

  const goTopCentersPrevious = () => setTopCentersSlide((prev) => (prev - 1 + topCentersTotalSlides) % topCentersTotalSlides);
  const goTopCentersNext = () => setTopCentersSlide((prev) => (prev + 1) % topCentersTotalSlides);
  const toggleCenterDescription = (centerName: string) => setExpandedCenterName((prev) => (prev === centerName ? null : centerName));

  const goReviewPrevious = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goReviewNext = () => setCurrentReview((prev) => (prev + 1) % reviews.length);

  const jumpSections = [
    { id: "gallery", title: "Gallery" },
    { id: "quick-summary", title: "Quick Summary" },
    { id: "program-overview", title: "Program Overview" },
    { id: "phase-breakdown", title: phaseSectionTitle },
    { id: "benefits", title: "Benefits" },
    { id: "cost", title: "Cost in India" },
    { id: "why-india", title: "Why Choose India" },
    { id: "why-us", title: "Why Choose Us" },
    { id: "inclusions", title: "Package Inclusions" },
    { id: "consultation", title: "Book Consultation" },
    { id: "faq", title: "FAQ" },
    { id: "top-centers", title: "Top Centers" },
    { id: "reviews", title: "Patient Reviews" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
    }, 250);
  };

  const quickSummaryRows: [string, string][] = [
    ["Program Name", pageTitle],
    ["Duration", summary.duration],
    ["Who It Is For", summary.idealFor],
    ["Top Locations", summary.locations],
    ["Average Cost", summary.avgCost],
    ["Supervised By", summary.supervisedBy],
    ["Includes", summary.includes],
  ];
  const quickSummaryIcons: Icon[] = [ClipboardCheck, Calendar, UserCheck, MapPin, ReceiptIndianRupee, Stethoscope, BedDouble];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#335765] text-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80">Ayurveda Packages</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{pageTitle}</h1>
              <p className="text-lg md:text-xl text-white/90">{heroTagline}</p>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base md:text-lg leading-none">
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <MapPin className="h-5 w-5 text-sky-300" />
                    <span>PAN India</span>
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-white">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>{heroRatingText}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[430px] lg:w-[520px] md:ml-auto md:justify-self-end md:translate-x-8 lg:translate-x-16">
              <Button className="w-full h-12 rounded-xl bg-white text-[#335765] hover:bg-white/90 font-semibold" onClick={() => setQuoteModalOpen(true)}>
                <Calendar className="mr-2 h-4 w-4" /> Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-6 pb-2 md:pt-8 md:pb-4 max-w-6xl space-y-20 md:space-y-24">
        <section id="gallery" className="scroll-mt-24 mb-0">
          <div className="flex items-center justify-center mb-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">Program Gallery for {pageTitle}</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={galleryImages[selectedImage]} alt={pageTitle} className="w-full h-[260px] md:h-[460px] object-cover" />
            <button onClick={goToPrevious} className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] shadow-md transition" aria-label="Previous image">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={goToNext} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-[#335765] shadow-md transition" aria-label="Next image">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section id="quick-summary" className="scroll-mt-24 !mt-6 md:!mt-8 pt-0 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#335765] mb-4 text-center">Quick Summary - Everything You Need to Know</h2>
          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">{summary.duration}</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Ideal For</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">{summary.idealFor}</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Top Locations</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">{summary.locations}</p>
                </div>
                <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] p-3">
                  <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Avg Cost</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-[#335765]">{summary.avgCost}</p>
                </div>
              </div>

              <div className="grid gap-2 md:hidden">
                {quickSummaryRows.map((row, idx) => {
                  const Icon = quickSummaryIcons[idx] || ClipboardCheck;
                  return (
                    <div key={row[0]} className={`rounded-xl border border-[#d8d0ae] px-3 py-3 ${idx === 0 ? "bg-[#EDE8D0]" : "bg-white"}`}>
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          <Icon className="h-4 w-4 text-[#335765]" />
                        </span>
                        <p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{row[0]}</p>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-[#7F543D] break-words font-semibold">{row[1]}</p>
                    </div>
                  );
                })}
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

        <section id="program-overview" className="scroll-mt-24 !mt-6 md:!mt-8 space-y-14 md:space-y-16">
          <div className="grid gap-10 md:gap-12">
            <Card className="h-full shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-[#335765] text-center md:text-left leading-tight">{overviewTitle}</h2>
                {overviewParagraphs.map((para, i) => (
                  <p key={i} className={i === 0 ? "text-[#7F543D] leading-relaxed text-justify md:text-left" : "text-[#5f4636] leading-relaxed font-semibold text-lg text-justify md:text-left"}>
                    {para}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="h-full shadow-sm !mt-6 md:!mt-10 border-[#d8d0ae] bg-[#EDE8D0]">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8 md:mb-10">
                {metrics.map((m, i) => {
                  const Icon = m.icon;
                  const bg = ["bg-green-50", "bg-yellow-50", "bg-blue-50"][i];
                  const fg = ["text-green-600", "text-yellow-500 fill-yellow-500", "text-blue-600"][i];
                  return (
                    <div key={i} className="bg-white rounded-xl md:rounded-2xl p-2.5 md:p-6 shadow-sm border border-[#d8d0ae]/30 flex flex-col items-center justify-center text-center">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${bg} flex items-center justify-center mb-2 md:mb-3`}>
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${fg}`} />
                      </div>
                      <div className="text-[16px] md:text-3xl font-black text-[#335765] mb-0.5 md:mb-1">{m.value}</div>
                      <div className="text-[9px] md:text-sm font-medium text-[#7F543D] leading-[1.1] md:leading-tight">{m.label}</div>
                    </div>
                  );
                })}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#335765] mb-4 text-center">{therapiesTitle}</h2>
              <p className="text-[#7F543D] leading-relaxed mb-6 text-center max-w-3xl mx-auto">{therapiesSubtitle}</p>
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
                      <p className="text-sm text-[#7F543D]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch !mt-6 md:!mt-10">
            <Card className="h-full border-green-300 bg-white shadow-sm">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 ring-1 ring-green-200">
                    <CircleCheck className="h-5 w-5 text-green-700" />
                  </span>
                  <h2 className="text-2xl font-bold text-[#335765]">{candidateTitle}</h2>
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
                    <XCircle className="h-5 w-5 text-[#335765]" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#335765]">{avoidTitle}</h3>
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

        <section id="phase-breakdown" className="scroll-mt-24 !mt-6 md:!mt-10 rounded-3xl p-6 md:p-10 border border-[#e5dfc1]" style={{ backgroundColor: "#EDE8D0" }}>
          <div className="text-center mb-7">
            <h2 className="text-2xl md:text-3xl font-bold text-[#335765]">{phaseSectionTitle}</h2>
            <p className="text-[#7F543D] mt-2">{phaseSectionSubtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {phases.map((phase, idx) => (
              <AccordionItem key={phase.title} value={`phase-${idx}`} className="overflow-hidden bg-white rounded-xl px-4 md:px-6 border border-green-100 data-[state=open]:border-green-500">
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-orange-500 [&>svg]:shrink-0">
                  <div className="text-left">
                    <p className="text-lg font-bold text-[#335765]">{phase.title}</p>
                    <p className="text-sm text-[#8C765E]">{phase.duration} - {phase.focus}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-6">
                  <div>
                    <p className="text-[#7F543D] mb-4 leading-relaxed">{phase.description}</p>
                    <p className="font-semibold text-[#335765] mb-2.5">Key Experiences</p>
                    <ul className="space-y-2.5 text-sm text-[#7F543D]">
                      {phase.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 leading-relaxed">
                          <CircleCheck className="h-4 w-4 mt-0.5 text-green-600 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="benefits" className="scroll-mt-24 !mt-6 md:!mt-10">
          <div className="mb-7 md:mb-8">
            <div className="relative">
              <button onClick={goBenefitsPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md" aria-label="Previous benefits image">
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button onClick={goBenefitsNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#335765] shadow-md" aria-label="Next benefits image">
                <ChevronRight className="h-7 w-7" />
              </button>

              <div className="overflow-hidden px-10 md:px-14">
                <div className="md:hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${benefitsImageIndex * 100}%)` }}>
                    {benefitsSectionImages.map((image, idx) => (
                      <div key={`benefit-mobile-${idx}`} className="w-full flex-shrink-0 px-1.5">
                        <div className="bg-white rounded-xl p-2 shadow-sm border border-[#d6decf]">
                          <img src={image} alt="Program benefits visual" className="w-full h-28 object-cover rounded-lg" loading="lazy" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {benefitsVisibleImages.map((image) => (
                      <div key={image.key} className="rounded-xl bg-white p-2 shadow-lg border border-primary/10 hover:border-primary/30 transition-all">
                        <img src={image.src} alt="Program benefits visual" className="w-full h-24 md:h-28 object-cover rounded-lg" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {benefitsSectionImages.map((_, idx) => (
                <button key={`benefits-dot-${idx}`} onClick={() => setBenefitsImageIndex(idx)} aria-label={`Go to benefits image ${idx + 1}`} className={`h-2.5 rounded-full transition-all ${idx === benefitsImageIndex ? "w-8 bg-[#335765]" : "w-2.5 bg-[#C7D1C9]"}`} />
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#335765] mb-6 text-center">{benefitsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {benefitGroups.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.title} className="bg-[#F9FAF9] border-none hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE8D0] ring-1 ring-[#d8d0ae]">
                        <Icon className="h-5 w-5 text-[#2F5B5D]" />
                      </span>
                      <h3 className="font-bold text-[#335765]">{group.title}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-[#7F543D]">
                      {group.items.map((item) => <li key={item}>- {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="cost" className="scroll-mt-24 !mt-6 md:!mt-10 mb-12 md:mb-16 space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765]">{costTitle}</h2>
            <p className="mt-2 text-[#7F543D]">{costSubtitle}</p>
          </div>

          <Card className="border-[#d8d0ae] bg-white shadow-sm">
            <CardContent className="p-5 md:p-6 space-y-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Program Length</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">{costLength}</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">{costLengthNote}</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#7F543D] font-semibold">Typical Budget</p>
                  <p className="mt-2 text-2xl font-bold text-[#335765]">{costBudget}</p>
                  <p className="mt-1 text-sm text-[#6F6B5C]">{costBudgetNote}</p>
                </div>
                <div className="rounded-2xl border border-[#d9cfae] bg-[#F8F4E7] p-4 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <p className="text-xl md:text-2xl font-bold text-[#335765]">{costPopularTag}</p>
                  </div>
                  <p className="mt-1 text-sm text-[#6F6B5C]">{costPopularDesc}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9cfae] overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 bg-[#EFE8CB] px-4 py-3 text-center sm:text-left">
                  <p className="font-semibold text-[#335765]">{costBanner}</p>
                  <span className="inline-flex items-center rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">{costBannerTag}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="why-india" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14">
          <Card className="h-full shadow-sm border-[#d8d0ae] bg-[#EDE8D0] w-full">
            <CardContent className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#335765] text-center">{whyIndiaTitle}</h2>
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
                      <p className="text-sm text-[#7F543D] mt-2">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="why-us" className="scroll-mt-24 !mt-6 md:!mt-10 mb-10 md:mb-14 rounded-3xl p-6 md:p-10 border border-[#e0d9b7]" style={{ background: "linear-gradient(180deg, #EFE8CB 0%, #E9E2C4 100%)" }}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#335765] mb-3">{whyUsTitle}</h2>
            <p className="text-[#7F543D]">{whyUsSubtitle}</p>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {whyUsBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#335765] border border-[#d9cfaa]">{badge}</span>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {whyChooseUsPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-white rounded-2xl p-4 border border-[#d7dcca] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
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

        <section id="inclusions" className="scroll-mt-24 !mt-8 md:!mt-9 mb-10 md:mb-14 space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#335765]">{inclusionsTitle}</h2>
            <p className="text-[#7F543D]">{inclusionsSubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Duration</p>
              <p className="text-lg font-bold text-[#335765] mt-1">{inclusionStats.duration}</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Stay</p>
              <p className="text-lg font-bold text-[#335765] mt-1">{inclusionStats.stay}</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Core Inclusions</p>
              <p className="text-lg font-bold text-[#335765] mt-1">{inclusionStats.core}</p>
            </div>
            <div className="rounded-xl border border-[#d9cfae] bg-[#F8F4E7] px-4 py-3 text-center">
              <p className="text-[13px] uppercase tracking-[0.12em] text-[#7F543D] font-bold">Care Model</p>
              <p className="text-lg font-bold text-[#335765] mt-1">{inclusionStats.care}</p>
            </div>
          </div>
          <Card className="shadow-sm border-[#dfe7e2]">
            <CardContent className="p-3 md:p-0">
              <div className="md:hidden grid gap-2">
                {inclusionsRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="rounded-xl border border-[#d8d0ae] px-3 py-3 bg-white">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4E7] border border-[#d9cfae]">
                          <Icon className="h-4 w-4 text-[#335765]" />
                        </span>
                        <p className="text-[15px] uppercase tracking-[0.12em] text-[#335765] font-extrabold">{row.label}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#7F543D] font-semibold break-words">{row.details}</p>
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
                  All treatments and dietary plans are strictly supervised by qualified Ayurvedic doctors. Specific therapies may vary based on your individual profile and response to the program.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="consultation" className="scroll-mt-24 !mt-6 md:!mt-10 overflow-hidden bg-[#335765] rounded-3xl text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[220px] md:h-auto overflow-hidden md:order-2">
              <img src={ctaImage} alt={`${pageTitle} consultation`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#335765]/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-12 space-y-6 flex flex-col justify-center md:order-1">
              <h2 className="text-2xl md:text-[2.05rem] font-bold leading-tight">{ctaTitle}</h2>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">{ctaDescription}</p>
              <div className="space-y-3 mt-4 max-w-xl">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl bg-white text-[#335765] hover:bg-white/90 h-14 md:h-16 flex flex-col items-center justify-center transition"
                  aria-label="WhatsApp Us Now"
                >
                  <span className="text-xs md:text-sm font-semibold leading-tight">WhatsApp Us Now</span>
                  <span className="text-sm md:text-base font-bold leading-tight mt-0.5 underline text-primary">+91 80 2843 2737</span>
                </a>
                <Button className="w-full h-11 md:h-12 bg-[#D19A71] hover:bg-[#C18A61] text-white font-bold text-base md:text-lg rounded-xl shadow-lg border-2 border-white/20" onClick={() => setQuoteModalOpen(true)}>
                  Get Free Consultation Here
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 !mt-8 md:!mt-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#335765]">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3 max-w-5xl mx-auto">
            {faqItems.map((item, idx) => (
              <AccordionItem key={item.question} value={`faq-${idx}`} className="border border-[#d5dfd8] bg-white rounded-xl px-5 shadow-sm overflow-hidden hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#335765] hover:no-underline py-5 [&>svg]:text-orange-500">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#7F543D] leading-relaxed pb-5 text-base md:text-[17px]">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="top-centers" className="scroll-mt-24 !mt-10 md:!mt-16 space-y-8">
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">{topCentersTitle}</h2>
            <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">{topCentersSubtitle}</p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute left-2 md:-left-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersPrevious} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Previous centers">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute right-2 md:-right-8 z-20 top-[130px] md:top-1/2 -translate-y-1/2">
              <button onClick={goTopCentersNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Next centers">
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 w-full px-0 md:px-6 lg:px-8 items-stretch">
              {visibleTopCenters.map((center, idx) => (
                <div key={`${center.name}-${topCentersSlide}-${idx}`} className="flex h-full w-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                    <div className="relative aspect-[16/9] md:aspect-[18/9] overflow-hidden shrink-0">
                      <img src={center.image} alt={center.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
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
                          <span className="text-[12px] md:text-[13px] font-bold text-[#335765]">({center.rating} rating)</span>
                        </div>
                      </div>

                      <div className="relative mb-3 flex-grow text-left">
                        <p className={`text-xs md:text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCenterName === center.name ? "" : "line-clamp-3"}`}>{center.description}</p>
                        <button onClick={() => toggleCenterDescription(center.name)} className="mt-1 text-[10px] font-bold text-[#335765] hover:underline block">
                          {expandedCenterName === center.name ? "Read Less" : "Read More"}
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <Link to={center.link} target="_blank" rel="noreferrer" className="w-full bg-white border-2 border-[#335765]/20 text-[#335765] active:bg-[#335765] active:text-white md:hover:bg-[#335765] md:hover:text-white font-bold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap">
                          View Details
                        </Link>
                        <Button className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-bold h-10 rounded-lg shadow-sm text-xs" onClick={() => setQuoteModalOpen(true)}>
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
                  <button key={i} onClick={() => setTopCentersSlide(i)} className={`h-1.5 rounded-full transition-all ${i === topCentersSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`} />
                ))}
              </div>
            )}

            <div className="flex justify-center mt-4">
              <Link to="/top-ayurvedic-centers-in-india" target="_blank" rel="noreferrer" className="bg-[#FF7A28] hover:bg-[#E66917] text-white font-bold px-8 py-3 h-auto rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 text-base tracking-wide group">
                VIEW ALL CENTERS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section id="reviews" className="scroll-mt-24 pt-8 pb-8 md:pt-10 md:pb-12 bg-transparent w-full">
        <div className="container mx-auto px-4 max-w-6xl text-left">
          <div className="text-center mb-6 md:mb-8 space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
          </div>

          <div className="max-w-4xl mx-auto relative px-0 md:px-0">
            <div className="absolute inset-y-0 left-0 flex items-center translate-x-4 md:-translate-x-6 z-20">
              <button onClick={goReviewPrevious} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Previous review">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-4 md:translate-x-6 z-20">
              <button onClick={goReviewNext} className="bg-white/70 hover:bg-white/90 text-[#335765] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#335765]" aria-label="Next review">
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
                    <h3 className="text-lg md:text-2xl font-bold text-[#335765] mb-2 md:mb-4">{reviews[currentReview].title}</h3>
                    <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>"{reviews[currentReview].review}"</p>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#335765] text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0 uppercase">
                      {reviews[currentReview].name.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-1">
                        <h4 className="text-base md:text-xl font-bold text-[#335765] leading-tight truncate">{reviews[currentReview].name}</h4>
                        {reviews[currentReview].verified && (
                          <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold whitespace-nowrap border border-green-200">&#10003; Verified</span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-[#7F543D] mb-1">
                        {reviews[currentReview].location} {reviews[currentReview].condition && `- ${reviews[currentReview].condition}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < reviews[currentReview].rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-[#335765]">{reviews[currentReview].rating}.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentReview(idx)} className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#335765]" : "w-3 h-3 bg-gray-300 hover:bg-[#335765]/50"}`} aria-label={`Go to review ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button onClick={() => setIsJumpModalOpen(true)} className="bg-[#335765] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter">
          <span className="drop-shadow-sm">B</span>
          <span className="drop-shadow-sm">R</span>
          <Search size={16} strokeWidth={3.5} className="drop-shadow-sm" />
          <span className="drop-shadow-sm">W</span>
          <span className="drop-shadow-sm">S</span>
          <span className="drop-shadow-sm">E</span>
        </button>
      </div>

      <button onClick={() => setIsJumpModalOpen(true)} className="md:hidden fixed bottom-6 left-4 z-50 bg-[#335765] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap">
        <Search size={18} className="-ml-1" />
        <span>BROWSE</span>
      </button>

      <button onClick={() => setQuoteModalOpen(true)} className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap">
        <Phone size={18} className="-ml-1" />
        <span className="hidden md:inline">GET FREE QUOTE</span>
        <span className="md:hidden">QUOTE</span>
      </button>

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
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50" title="Close Menu">
                <X className="h-6 w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section in this {slug.replace(/-/g, " ")} page."</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#335765] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">{section.title}</span>
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
}
