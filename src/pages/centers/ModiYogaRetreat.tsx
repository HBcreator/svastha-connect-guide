import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Images,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TrendingUp,
  Users,
  Video,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MarkdownContent from "@/components/MarkdownContent";

type ProgramItem = { title: string; description: string; bullets: string[] };
type CardData = { title: string; description: string; bullets: string[] };
type SectionData = { title: string; description: string; cards: CardData[] };
type JourneyStep = { title: string; description: string; bullets: string[] };
type JourneyData = { title: string; description: string; steps: JourneyStep[] };
type ReviewItem = {
  name: string;
  location: string;
  title: string;
  review: string;
  rating: number;
  verified: boolean;
};
type FAQItem = { question: string; answer: string };
type FounderTeamData = {
  sectionIntro: string;
  founderName: string;
  founderRole: string;
  founderDescription: string;
  leadershipBullets: string[];
  teamTitle: string;
  teamSubtitle: string;
  teamDescription: string;
  teamBullets: string[];
};

const parseProgramFile = (text: string) => {
  const lines = text.split(String.fromCharCode(10)).map((l) => l.replace(/\r/g, "").trim());
  let intro = "";
  const items: ProgramItem[] = [];
  let current: ProgramItem | null = null;
  let inPrograms = false;

  for (const line of lines) {
    if (!line) continue;

    if (line.startsWith("### ")) {
      inPrograms = false;
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      if (current) items.push(current);
      current = { title: line.replace(/\*\*/g, "").trim(), description: "", bullets: [] };
      inPrograms = true;
      continue;
    }

    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "").trim();
      if (current && bullet) current.bullets.push(bullet);
      continue;
    }

    if (!inPrograms) {
      intro = intro ? `${intro} ${line}` : line;
    } else if (current) {
      current.description = current.description ? `${current.description} ${line}` : line;
    }
  }

  if (current) items.push(current);
  return { intro, items };
};

const parseCardSection = (text: string): SectionData => {
  const lines = text.split(String.fromCharCode(10)).map((l) => l.replace(/\r/g, "").trim());
  let title = "";
  let description = "";
  const cards: CardData[] = [];
  let currentCard: CardData | null = null;
  let isHeader = true;

  for (const line of lines) {
    if (!line) continue;

    if (line.startsWith("### ")) {
      title = line.replace("### ", "").trim();
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      isHeader = false;
      if (currentCard) cards.push(currentCard);
      currentCard = { title: line.replace(/\*\*/g, "").trim(), description: "", bullets: [] };
      continue;
    }

    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "").trim();
      if (currentCard && bullet) currentCard.bullets.push(bullet);
      continue;
    }

    if (isHeader) {
      description = description ? `${description} ${line}` : line;
    } else if (currentCard && currentCard.bullets.length === 0) {
      currentCard.description = currentCard.description ? `${currentCard.description} ${line}` : line;
    }
  }

  if (currentCard) cards.push(currentCard);
  return { title, description, cards };
};

const normalizeText = (text: string) =>
  text
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€”/g, "-");

const parseJourneySection = (text: string): JourneyData => {
  const lines = normalizeText(text).split(String.fromCharCode(10)).map((l) => l.replace(/\r/g, "").trim());
  let title = "";
  let description = "";
  const steps: JourneyStep[] = [];
  let current: JourneyStep | null = null;
  let inSteps = false;

  for (const line of lines) {
    if (!line) continue;

    if (line.startsWith("### ")) {
      title = line.replace("### ", "").trim();
      continue;
    }

    const stepMatch = line.match(/^\d+\.\s+\*\*(.+)\*\*$/);
    if (stepMatch) {
      inSteps = true;
      if (current) steps.push(current);
      current = { title: stepMatch[1].trim(), description: "", bullets: [] };
      continue;
    }

    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "").trim();
      if (current && bullet) current.bullets.push(bullet);
      continue;
    }

    if (!inSteps) {
      description = description ? `${description} ${line}` : line;
    } else if (current) {
      current.description = current.description ? `${current.description} ${line}` : line;
    }
  }

  if (current) steps.push(current);
  return { title, description, steps };
};

const parseReviewsFile = (text: string): ReviewItem[] => {
  const normalized = text
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€”/g, "-")
    .replace(/â€“/g, "-")
    .replace(/â­/g, "⭐")
    .replace(/Ã¶/g, "ö");
  const lines = normalized.split(String.fromCharCode(10)).map((l) => l.replace(/\r/g, "").trim());
  const reviews: ReviewItem[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line || line.startsWith("### ")) {
      i += 1;
      continue;
    }

    if (line.includes(" - ")) {
      const [name, ...locParts] = line.split(" - ");
      const location = locParts.join(" - ").trim();
      i += 1;

      const titleLine = lines[i] || "";
      const title = titleLine.replace(/^"+|"+$/g, "").trim();
      i += 1;

      const reviewParts: string[] = [];
      while (i < lines.length && !lines[i].startsWith("Rating:")) {
        if (lines[i]) reviewParts.push(lines[i]);
        i += 1;
      }

      let rating = 5;
      if (i < lines.length && lines[i].startsWith("Rating:")) {
        const m = lines[i].match(/(\d+)\s*\/\s*5/);
        if (m) rating = Number(m[1]);
      }

      reviews.push({
        name: name.trim(),
        location,
        title,
        review: reviewParts.join(" ").trim(),
        rating: Math.max(1, Math.min(5, rating)),
        verified: true,
      });
    }

    i += 1;
  }

  return reviews;
};

const parseInsuranceInfo = (text: string) => {
  const lines = text.split(String.fromCharCode(10)).map((l) => l.replace(/\r/g, "").trim());
  let intro = "";
  const coverage: string[] = [];
  const payment: string[] = [];
  let international = "";
  let section: "none" | "coverage" | "payment" | "international" = "none";

  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith("### ")) continue;

    if (line.startsWith("**") && line.endsWith("**")) {
      const t = line.replace(/\*\*/g, "").toLowerCase();
      if (t.includes("insurance")) section = "coverage";
      else if (t.includes("payment")) section = "payment";
      else if (t.includes("international")) section = "international";
      else section = "none";
      continue;
    }

    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "").trim();
      if (section === "coverage") coverage.push(bullet);
      if (section === "payment") payment.push(bullet);
      continue;
    }

    if (section === "none") {
      intro = intro ? `${intro} ${line}` : line;
    } else if (section === "international") {
      international = international ? `${international} ${line}` : line;
    }
  }

  return { intro, coverage, payment, international };
};

const parseFAQText = (text: string): FAQItem[] => {
  const lines = text.split(String.fromCharCode(10)).map((l) => l.replace(/\r/g, "").trim());
  const items: FAQItem[] = [];
  let current: FAQItem | null = null;

  for (const line of lines) {
    if (!line || line.startsWith("### ")) continue;

    if (line.startsWith("**") && line.endsWith("**")) {
      if (current) items.push(current);
      current = { question: line.replace(/\*\*/g, "").trim(), answer: "" };
      continue;
    }

    if (current) current.answer = current.answer ? `${current.answer} ${line}` : line;
  }

  if (current) items.push(current);
  return items;
};

const parseContactInfo = (text: string) => {
  const lines = text
    .replace(/â€“/g, "-")
    .replace(/mob/g, "")
    .split(String.fromCharCode(10))
    .map((l) => l.replace(/\r/g, "").trim());
  const address: string[] = [];
  const distances: string[] = [];
  let transportation = "";
  let section: "none" | "address" | "distances" | "transport" = "none";

  for (const line of lines) {
    if (!line || line.startsWith("### ")) continue;
    if (line.startsWith("**") && line.endsWith("**")) {
      const t = line.replace(/\*\*/g, "").toLowerCase();
      if (t.includes("address")) section = "address";
      else if (t.includes("distance")) section = "distances";
      else if (t.includes("transportation")) section = "transport";
      else section = "none";
      continue;
    }

    if (section === "address") {
      address.push(line);
    } else if (section === "distances" && line.startsWith("*")) {
      distances.push(line.replace(/^\*+\s*/, "").trim());
    } else if (section === "transport") {
      transportation = transportation ? `${transportation} ${line}` : line;
    }
  }

  return { address, distances, transportation };
};

const parseFounderTeamInfo = (text: string): FounderTeamData => {
  const lines = text
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€”/g, "-")
    .split(String.fromCharCode(10))
    .map((l) => l.replace(/\r/g, "").trim())
    .filter(Boolean);

  const result: FounderTeamData = {
    sectionIntro: "",
    founderName: "Founder",
    founderRole: "Founder",
    founderDescription: "",
    leadershipBullets: [],
    teamTitle: "Our Holistic Wellness Team",
    teamSubtitle: "",
    teamDescription: "",
    teamBullets: [],
  };

  let current: "none" | "intro" | "founder" | "leadership" | "team" = "intro";
  let founderRoleSet = false;
  let teamSubtitleSet = false;

  for (const line of lines) {
    if (line.startsWith("### ")) continue;

    if (line.startsWith("**") && line.endsWith("**")) {
      const title = line.replace(/\*\*/g, "").trim();
      if (title.toLowerCase().includes("leadership")) {
        current = "leadership";
      } else if (title.toLowerCase().includes("holistic wellness team")) {
        current = "team";
        result.teamTitle = title;
      } else {
        current = "founder";
        result.founderName = title;
      }
      continue;
    }

    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "").trim();
      if (current === "leadership") result.leadershipBullets.push(bullet);
      if (current === "team") result.teamBullets.push(bullet);
      continue;
    }

    if (current === "intro") {
      result.sectionIntro = result.sectionIntro ? `${result.sectionIntro} ${line}` : line;
    } else if (current === "founder") {
      if (!founderRoleSet) {
        result.founderRole = line;
        founderRoleSet = true;
      } else {
        result.founderDescription = result.founderDescription ? `${result.founderDescription} ${line}` : line;
      }
    } else if (current === "team") {
      if (!teamSubtitleSet) {
        result.teamSubtitle = line;
        teamSubtitleSet = true;
      } else {
        result.teamDescription = result.teamDescription ? `${result.teamDescription} ${line}` : line;
      }
    }
  }

  return result;
};

const hashTitle = (title: string) =>
  title
    .toLowerCase()
    .split("")
    .reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);

const createUniqueIconOrder = (titles: string[], poolSize: number) => {
  const used = new Set<number>();
  return titles.map((title) => {
    let idx = hashTitle(title) % poolSize;
    let attempts = 0;
    while (used.has(idx) && attempts < poolSize) {
      idx = (idx + 1) % poolSize;
      attempts += 1;
    }
    used.add(idx);
    return idx;
  });
};

const wellnessIconByIndex = (index: number) => {
  const cls = "h-4 w-4 md:h-5 md:w-5 text-green-700";
  switch (index % 10) {
    case 0: return <Leaf className={cls} />;
    case 1: return <Sparkles className={cls} />;
    case 2: return <Heart className={cls} />;
    case 3: return <Activity className={cls} />;
    case 4: return <Users className={cls} />;
    case 5: return <TrendingUp className={cls} />;
    case 6: return <ShieldCheck className={cls} />;
    case 7: return <MapPin className={cls} />;
    case 8: return <Star className={cls} />;
    default: return <Calendar className={cls} />;
  }
};

const medicalIconByIndex = (index: number) => {
  const cls = "h-4 w-4 md:h-5 md:w-5 text-blue-700";
  switch (index % 10) {
    case 0: return <Stethoscope className={cls} />;
    case 1: return <ShieldCheck className={cls} />;
    case 2: return <Activity className={cls} />;
    case 3: return <TrendingUp className={cls} />;
    case 4: return <Heart className={cls} />;
    case 5: return <Sparkles className={cls} />;
    case 6: return <Users className={cls} />;
    case 7: return <MapPin className={cls} />;
    case 8: return <Star className={cls} />;
    default: return <Calendar className={cls} />;
  }
};

const whyChooseIconForTitle = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("location") || t.includes("ganga") || t.includes("sanctuary")) return <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (t.includes("integrated") || t.includes("approach") || t.includes("mind-body")) return <Activity className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (t.includes("luxury") || t.includes("five-star")) return <Star className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (t.includes("physician") || t.includes("expert") || t.includes("team")) return <Users className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (t.includes("yoga")) return <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (t.includes("cuisine") || t.includes("gourmet")) return <Leaf className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (t.includes("philosophy") || t.includes("swasthyam")) return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  return <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
};

export default function ModiYogaRetreat() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [soukyaStyleVideoIndex, setSoukyaStyleVideoIndex] = useState(0);
  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [facilitiesData, setFacilitiesData] = useState<SectionData | null>(null);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [patientReviews, setPatientReviews] = useState<ReviewItem[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [currentAward, setCurrentAward] = useState(0);
  const [maxAwardIndex, setMaxAwardIndex] = useState(0);
  const [insuranceIntro, setInsuranceIntro] = useState("");
  const [insuranceCoverage, setInsuranceCoverage] = useState<string[]>([]);
  const [paymentOptions, setPaymentOptions] = useState<string[]>([]);
  const [internationalInsuranceInfo, setInternationalInsuranceInfo] = useState("");
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [contactTransportation, setContactTransportation] = useState("");
  const [founderTeamData, setFounderTeamData] = useState<FounderTeamData | null>(null);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<ProgramItem[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<ProgramItem[]>([]);
  const [whyChooseData, setWhyChooseData] = useState<SectionData | null>(null);
  const [journeyData, setJourneyData] = useState<JourneyData | null>(null);

  useEffect(() => {
    const loadList = async (path: string, setter: (items: string[]) => void) => {
      try {
        const res = await fetch(encodeURI(path));
        const text = await res.text();
        const items = text
          .split(String.fromCharCode(10))
          .map((line) => line.replace(/\r/g, "").trim())
          .filter(Boolean);
        setter(items);
      } catch {
        setter([]);
      }
    };

    loadList("/Center Images/Modi Yoga Retreat/Photo Gallery/Photo Gallery Links.txt", setImages);
    loadList("/Center Videos/Modi Yoga Retreat/Video Gallery Links.txt", setVideos);
    loadList("/Center Videos/Modi Yoga Retreat/Testimonies/Testimonies Links.txt", setTestimonialVideos);
    loadList("/Center Images/Modi Yoga Retreat/Facilities/Facilities Links.txt", setFacilityImages);
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Modi Yoga Retreat/Wellness Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseProgramFile(text);
        setWellnessIntro(parsed.intro);
        setWellnessPrograms(parsed.items);
      })
      .catch(() => {
        setWellnessIntro("");
        setWellnessPrograms([]);
      });

    fetch("/content/Top Centers/Modi Yoga Retreat/Medical Treatment Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseProgramFile(text);
        setMedicalIntro(parsed.intro);
        setMedicalPrograms(parsed.items);
      })
      .catch(() => {
        setMedicalIntro("");
        setMedicalPrograms([]);
      });

    fetch("/content/Top Centers/Modi Yoga Retreat/Why Choose Modi Yoga Retreat.txt")
      .then((res) => res.text())
      .then((text) => setWhyChooseData(parseCardSection(text)))
      .catch(() => setWhyChooseData(null));

    fetch("/content/Top Centers/Modi Yoga Retreat/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => setJourneyData(parseJourneySection(text)))
      .catch(() => setJourneyData(null));

    fetch("/content/Top Centers/Modi Yoga Retreat/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => setFacilitiesData(parseCardSection(text)))
      .catch(() => setFacilitiesData(null));

    fetch("/content/Top Centers/Modi Yoga Retreat/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => setPatientReviews(parseReviewsFile(text)))
      .catch(() => setPatientReviews([]));

    fetch("/content/Top Centers/Modi Yoga Retreat/Insurance & Payment Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseInsuranceInfo(text);
        setInsuranceIntro(parsed.intro);
        setInsuranceCoverage(parsed.coverage);
        setPaymentOptions(parsed.payment);
        setInternationalInsuranceInfo(parsed.international);
      })
      .catch(() => {
        setInsuranceIntro("");
        setInsuranceCoverage([]);
        setPaymentOptions([]);
        setInternationalInsuranceInfo("");
      });

    fetch("/content/Top Centers/Modi Yoga Retreat/Frequently Asked Questions.txt")
      .then((res) => res.text())
      .then((text) => setFaqItems(parseFAQText(text)))
      .catch(() => setFaqItems([]));

    fetch("/content/Top Centers/Modi Yoga Retreat/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseContactInfo(text);
        setContactAddress(parsed.address);
        setContactDistances(parsed.distances);
        setContactTransportation(parsed.transportation);
      })
      .catch(() => {
        setContactAddress([]);
        setContactDistances([]);
        setContactTransportation("");
      });

    fetch("/content/Top Centers/Modi Yoga Retreat/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => setFounderTeamData(parseFounderTeamInfo(text)))
      .catch(() => setFounderTeamData(null));
  }, []);

  useEffect(() => {
    if (showVideoGallery || !isAutoPlaying || images.length <= 1) return;
    const id = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [showVideoGallery, isAutoPlaying, images.length]);

  useEffect(() => {
    setSelectedImage((prev) => (images.length ? Math.min(prev, images.length - 1) : 0));
  }, [images.length]);

  useEffect(() => {
    setSelectedVideo((prev) => (videos.length ? Math.min(prev, videos.length - 1) : 0));
  }, [videos.length]);

  useEffect(() => {
    setSoukyaStyleVideoIndex((prev) => (videos.length ? Math.min(prev, videos.length - 1) : 0));
  }, [videos.length]);

  useEffect(() => {
    setSelectedTestimonialVideo((prev) => (testimonialVideos.length ? Math.min(prev, testimonialVideos.length - 1) : 0));
  }, [testimonialVideos.length]);

  useEffect(() => {
    setCurrentFacilityImage((prev) => (facilityImages.length ? Math.min(prev, facilityImages.length - 1) : 0));
  }, [facilityImages.length]);

  useEffect(() => {
    if (facilityImages.length <= 1 || facilityLightboxOpen) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityImages.length, facilityLightboxOpen]);

  useEffect(() => {
    setCurrentReview((prev) => (patientReviews.length ? Math.min(prev, patientReviews.length - 1) : 0));
  }, [patientReviews.length]);

  useEffect(() => {
    if (patientReviews.length <= 1) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % patientReviews.length);
    }, 6000);
    return () => clearInterval(id);
  }, [patientReviews.length]);

  useEffect(() => {
    const updateAwardBounds = () => {
      const isMobile = window.innerWidth < 768;
      const newMax = isMobile ? awards.length - 1 : Math.max(0, awards.length - 3);
      setMaxAwardIndex(newMax);
      setCurrentAward((prev) => Math.min(prev, newMax));
    };
    updateAwardBounds();
    window.addEventListener("resize", updateAwardBounds);
    return () => window.removeEventListener("resize", updateAwardBounds);
  }, []);

  useEffect(() => {
    if (maxAwardIndex < 1) return;
    const id = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % (maxAwardIndex + 1));
    }, 3500);
    return () => clearInterval(id);
  }, [maxAwardIndex]);

  useEffect(() => {
    if (isJumpModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isJumpModalOpen]);

  const thumbnailImages = useMemo(() => {
    if (!images.length) return [];
    const start = selectedImage;
    const max = Math.min(5, images.length);
    return Array.from({ length: max }, (_, i) => images[(start + i) % images.length]);
  }, [images, selectedImage]);

  const topVideoThumbPosters = useMemo(() => {
    if (!videos.length) return [];
    if (!images.length) return Array.from({ length: videos.length }, () => videoPoster);
    return videos.map((_, idx) => images[(idx * 3) % images.length]);
  }, [videos, images]);

  const wellnessIconOrder = useMemo(
    () => createUniqueIconOrder(wellnessPrograms.map((p) => p.title), 10),
    [wellnessPrograms]
  );

  const medicalIconOrder = useMemo(
    () => createUniqueIconOrder(medicalPrograms.map((p) => p.title), 10),
    [medicalPrograms]
  );

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const getFacilityIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("accommodation") || t.includes("suite") || t.includes("room")) return <Heart className="h-5 w-5 text-white" />;
    if (t.includes("spa") || t.includes("wellness") || t.includes("therapy")) return <Sparkles className="h-5 w-5 text-white" />;
    if (t.includes("yoga") || t.includes("meditation")) return <Activity className="h-5 w-5 text-white" />;
    if (t.includes("restaurant") || t.includes("cuisine")) return <Leaf className="h-5 w-5 text-white" />;
    if (t.includes("pool") || t.includes("ghat")) return <MapPin className="h-5 w-5 text-white" />;
    if (t.includes("fitness") || t.includes("gym")) return <TrendingUp className="h-5 w-5 text-white" />;
    if (t.includes("library") || t.includes("lounge")) return <Star className="h-5 w-5 text-white" />;
    if (t.includes("business") || t.includes("event")) return <Users className="h-5 w-5 text-white" />;
    return <ShieldCheck className="h-5 w-5 text-white" />;
  };

  const goToPreviousReview = () => {
    if (patientReviews.length === 0) return;
    setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  };

  const goToNextReview = () => {
    if (patientReviews.length === 0) return;
    setCurrentReview((prev) => (prev + 1) % patientReviews.length);
  };

  const selectReview = (idx: number) => setCurrentReview(idx);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ));

  const awards = [
    {
      image: encodeURI("/Center Images/Modi Yoga Retreat/Award/Award 1 ( Traveller Review Award 2026).webp"),
      title: "Tripadvisor Travelers' Choice 2025",
      description: "Recognized by global travelers for consistently outstanding wellness hospitality.",
    },
    {
      image: encodeURI("/Center Images/Modi Yoga Retreat/Award/Award 2 (Global Future Design Awards 2020 ).png"),
      title: "IF Design Recognition",
      description: "Celebrated for design excellence and thoughtful guest-centered retreat planning.",
    },
    {
      image: encodeURI("/Center Images/Modi Yoga Retreat/Award/Award 3 (NABH).png"),
      title: "NABH Accredited",
      description: "Certified for high standards in patient safety, quality, and healthcare operations.",
    },
    {
      image: encodeURI("/Center Images/Modi Yoga Retreat/Award/Award 4 (World Spa Awards & GlobalSpa Awards).png"),
      title: "World Spa Awards Winner 2025",
      description: "Honored for premium spa and integrated wellness experiences at international level.",
    },
  ];

  const goToPreviousAward = () => {
    setCurrentAward((prev) => (prev - 1 + (maxAwardIndex + 1)) % (maxAwardIndex + 1));
  };

  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1) % (maxAwardIndex + 1));
  };

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Modi" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const offset = 80;
      const bodyTop = document.body.getBoundingClientRect().top;
      const elementTop = element.getBoundingClientRect().top;
      const top = elementTop - bodyTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 250);
  };

  const videoPoster = "/Center Images/Modi Yoga Retreat/Thumb.jpg";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/top-ayurvedic-centers-in-india" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              MODI YOGA RETREAT RISHIKESH
            </li>
          </ol>
        </div>
      </nav>


      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Modi Yoga Retreat</h1>
                <p className="text-xl mb-4 opacity-90">
                  A serene riverside retreat blending traditional yoga, mindfulness, and holistic wellness for deep rejuvenation.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Rishikesh, Uttarakhand, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.7</span>
                  <span className="opacity-90">(600+ reviews)</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 pt-12 pb-2 max-w-full" id="gallery">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
              <Button
                variant={!showVideoGallery ? "default" : "secondary"}
                size="lg"
                onClick={() => setShowVideoGallery(false)}
                className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"}`}
              >
                Photo Gallery
              </Button>
              <Button
                variant={showVideoGallery ? "default" : "secondary"}
                size="lg"
                onClick={() => setShowVideoGallery(true)}
                className={`flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"}`}
              >
                <Video className="h-4 w-4 md:h-6 md:w-6" />
                Video Gallery
              </Button>
            </div>
          </div>

          {!showVideoGallery ? (
            <>
              {images.length > 0 ? (
                <>
                  <div
                    className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    <img
                      src={images[selectedImage]}
                      alt={`Modi Yoga Retreat ${selectedImage + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <button
                      onClick={goToPrevious}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                    {isAutoPlaying && (
                      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Auto
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 mb-6">
                    {thumbnailImages[0] && (
                      <div
                        className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                        onClick={() => {
                          const idx = images.indexOf(thumbnailImages[0]);
                          setSelectedImage(idx);
                          setLightboxImage(idx);
                          setLightboxOpen(true);
                        }}
                      >
                        <img
                          src={thumbnailImages[0]}
                          alt="Modi Yoga Retreat"
                          className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    )}

                    <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                      {thumbnailImages.slice(1, 5).map((img, idx) => {
                        const actualIndex = images.indexOf(img);
                        const isLastImage = idx === Math.max(0, thumbnailImages.slice(1, 5).length - 1);
                        return (
                          <div
                            key={idx}
                            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                            onClick={() => {
                              setSelectedImage(actualIndex);
                              setLightboxImage(actualIndex);
                              setLightboxOpen(true);
                            }}
                          >
                            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                              <img
                                src={img}
                                alt={`Modi Yoga Retreat ${actualIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                              {isLastImage && (
                                <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/40">
                                  <Button
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowFullGallery(true);
                                    }}
                                    className="bg-white text-primary hover:bg-white/95 hover:scale-105 font-semibold text-xs md:text-sm px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform"
                                  >
                                    <Images className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                                    <span className="hidden sm:inline">Show Full Gallery</span>
                                    <span className="sm:hidden">Gallery</span>
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-primary/20 bg-white p-8 text-center text-primary/70">
                  Photo gallery not available yet.
                </div>
              )}
            </>
          ) : (
            <>
              {videos.length > 0 ? (
                <>
                  <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video mb-8">
                    <video key={selectedVideo} poster={videoPoster} controls controlsList="nodownload" preload="metadata" className="w-full h-full object-cover">
                      <source src={videos[selectedVideo]} type="video/mp4" />
                    </video>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      Video {selectedVideo + 1} / {videos.length}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {videos.map((video, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedVideo(idx)}
                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-2 ring-primary" : ""}`}
                      >
                        <video poster={topVideoThumbPosters[idx] || videoPoster} muted preload="metadata" className="w-full h-full object-cover">
                          <source src={video} type="video/mp4" />
                        </video>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-primary/20 bg-white p-8 text-center text-primary/70">
                  Video gallery not available yet.
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 pb-2 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
              <MarkdownContent
                contentPath="/content/Top Centers/Modi Yoga Retreat/Main Content.txt"
                h3ClassName="text-xl sm:text-2xl md:text-2xl font-semibold text-primary leading-snug"
                titleClassName="text-2xl sm:text-3xl md:text-3xl font-semibold text-primary border-b-2 border-primary/20 pb-2"
                onLinkClick={(action) => {
                  if (action === "quote") {
                    setQuoteModalOpen(true);
                  }
                }}
              />
            </CardContent>
          </Card>

          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="wellness">
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">600+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.7/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Average Rating</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">98%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Success Rate</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Wellness Programs</h2>
              <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto px-4" style={{ color: "#7F543D" }}>
                {wellnessIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wellnessPrograms.map((p, idx) => (
                <AccordionItem
                  key={idx}
                  value={`wellness-${idx}`}
                  className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-green-700">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-700">
                        {wellnessIconByIndex(wellnessIconOrder[idx] ?? idx)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {p.description}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-green-600 mt-1">&#10003;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-700 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Medical Programs</h2>
              <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto px-4" style={{ color: "#7F543D" }}>
                {medicalIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalPrograms.map((p, idx) => (
                <AccordionItem
                  key={idx}
                  value={`medical-${idx}`}
                  className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-blue-700">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-700">
                        {medicalIconByIndex(medicalIconOrder[idx] ?? idx)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {p.description}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-blue-600 mt-1">&#10003;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Video Gallery Section */}
          <div className="mb-12" id="videos">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Video Gallery of Modi Yoga Retreat
              </h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Discover the peaceful atmosphere and holistic wellness journey at Modi Yoga Retreat through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    {videos[soukyaStyleVideoIndex] && (
                      <video
                        key={videos[soukyaStyleVideoIndex]}
                        src={videos[soukyaStyleVideoIndex]}
                        poster={videoPoster}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              {videos.length > 1 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                  <button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Previous video"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev + 1) % videos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Next video"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              )}

              {videos.length > 1 && (
                <div className="flex md:hidden items-center justify-between mt-4 px-6">
                  <Button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev + 1) % videos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Next
                  </Button>
                </div>
              )}

              {videos.length > 1 && (
                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSoukyaStyleVideoIndex(index)}
                      className={`transition-all ${index === soukyaStyleVideoIndex
                        ? "w-8 h-3 bg-primary"
                        : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                        } rounded-full`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {whyChooseData?.title || "Why Choose Modi Yoga Retreat"}
              </h2>
              {whyChooseData?.description && (
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                  {whyChooseData.description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(whyChooseData?.cards || []).map((it, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary"
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          {whyChooseIconForTitle(it.title)}
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-primary leading-tight flex-1 min-h-[2rem] md:min-h-[2.5rem] flex items-center">
                          {it.title}
                        </h3>
                      </div>

                      {it.description && (
                        <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                          {it.description}
                        </p>
                      )}

                      {it.bullets.length > 0 && (
                        <ul className="list-none pl-0 space-y-1.5">
                          {it.bullets.slice(0, 3).map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1">&#10003;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12" id="testimonial-videos">
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Modi Yoga Retreat
              </h2>
              <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
              <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
                Watch inspiring stories of recovery and wellness from our global family of guests.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative bg-black">
                    {testimonialVideos[selectedTestimonialVideo]?.includes("youtube.com") ||
                    testimonialVideos[selectedTestimonialVideo]?.includes("youtu.be") ? (
                      <iframe
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={testimonialVideos[selectedTestimonialVideo]}
                        title="Modi Yoga Retreat Testimonial Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={testimonialVideos[selectedTestimonialVideo]}
                        className="w-full h-full object-contain"
                        controls
                        playsInline
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              {testimonialVideos.length > 1 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                  <button
                    onClick={() => setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              )}

              {testimonialVideos.length > 1 && (
                <div className="flex md:hidden items-center justify-between mt-4 px-6">
                  <Button
                    onClick={() => setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Next
                  </Button>
                </div>
              )}

              {testimonialVideos.length > 1 && (
                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                  {testimonialVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTestimonialVideo(index)}
                      className={`transition-all ${
                        index === selectedTestimonialVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      } rounded-full`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {journeyData?.title || "Treatment Process & Patient Journey"}
              </h2>
              {journeyData?.description && (
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                  {journeyData.description}
                </p>
              )}
            </div>

            <div className="max-w-4xl mx-auto">
              {(journeyData?.steps || []).map((step, idx) => {
                const isLast = idx === (journeyData?.steps.length || 0) - 1;
                return (
                  <div key={idx} className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                        {idx + 1}
                      </div>
                      {!isLast && <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>}
                    </div>

                    <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4 md:p-6">
                        <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                          {idx + 1}
                        </div>
                        <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                          </div>
                          <h3 className="text-base md:text-xl font-bold text-primary leading-tight">{step.title}</h3>
                        </div>
                        {step.description && (
                          <p className="text-xs md:text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                            {step.description}
                          </p>
                        )}
                        {step.bullets.length > 0 && (
                          <ul className="space-y-2">
                            {step.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                                <span className="text-primary mt-1">&#10003;</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/Modi Yoga Retreat/CTA mid.jpg"
                    alt="Modi Yoga Retreat"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
                    Take the first step toward holistic healing. Our team will guide you with personalized plans tailored to your needs.
                  </p>
                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-[#2F5B63] hover:bg-[#234A50] text-white"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-2 border-[#2F5B63] text-[#2F5B63]"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2" style={{ color: "#7F543D" }}>
                    <Phone className="h-4 w-4 text-red-600" />
                    <a href="tel:+918028432737" className="underline hover:text-primary">Call us: +91 80 2843 2737</a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-primary mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-base md:text-lg mb-6" style={{ color: "#7F543D" }}>
                    Take the first step toward holistic healing. Our team will guide you with personalized plans tailored to your needs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className="rounded-full px-6" onClick={() => setQuoteModalOpen(true)}>
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-6" onClick={() => setQuoteModalOpen(true)}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center gap-2" style={{ color: "#7F543D" }}>
                    <Phone className="h-5 w-5 text-red-600" />
                    <a href="tel:+918028432737" className="underline hover:text-primary">Call us: +91 80 2843 2737</a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Modi Yoga Retreat/CTA mid.jpg"
                    alt="Modi Yoga Retreat"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12" id="facilities">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {facilitiesData?.title || "Facilities & Amenities"}
              </h2>
              {facilitiesData?.description && (
                <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>
                  {facilitiesData.description}
                </p>
              )}
            </div>

            <div className="max-w-7xl mx-auto relative mb-10">
              <button
                onClick={() => setCurrentFacilityImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous facility image"
                disabled={facilityImages.length === 0}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={() => setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length)}
                className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next facility image"
                disabled={facilityImages.length === 0}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="overflow-hidden px-10 md:px-12">
                <div className="md:hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentFacilityImage * 100}%)` }}>
                    {facilityImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => {
                            setFacilityLightboxImage(index);
                            setFacilityLightboxOpen(true);
                          }}
                        >
                          <img src={image} alt={`Modi Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${Math.min(currentFacilityImage, Math.max(0, facilityImages.length - 5)) * 20}%)` }}
                  >
                    {facilityImages.map((image, index) => (
                      <div key={index} className="w-1/5 flex-shrink-0 px-2">
                        <div
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => {
                            setFacilityLightboxImage(index);
                            setFacilityLightboxOpen(true);
                          }}
                        >
                          <img src={image} alt={`Modi Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {facilityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFacilityImage(index)}
                    className={`transition-all ${index === currentFacilityImage ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                    aria-label={`Go to facility image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(facilitiesData?.cards || []).map((card, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                        {getFacilityIcon(card.title)}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1 min-h-[2.5rem] flex items-center">
                        {card.title}
                      </h3>
                    </div>

                    {card.description && (
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                        {card.description}
                      </p>
                    )}

                    {card.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {card.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                            <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Designed for Comfort, Safety, and Deep Healing</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Every facility at Modi Yoga Retreat is thoughtfully curated to support your complete mind-body wellness journey in a serene riverside environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 rounded-3xl p-4 md:p-10" style={{ backgroundColor: "#EDE8D0" }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {founderTeamData?.sectionIntro || "Vision-led leadership supported by an experienced multidisciplinary wellness team"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div
                      className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square"
                      style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/Modi Yoga Retreat/Founder/Founder.jfif"
                          alt="Founder - Modi Yoga Retreat"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        {founderTeamData?.founderName || "Founder Leadership"}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        {founderTeamData?.founderRole || "Integrative Wellness Visionary"}
                      </p>
                      <p className="text-xs md:text-sm mt-1 text-primary/70">Founder & Strategic Guide</p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    {founderTeamData?.founderDescription || "The retreat is shaped by a clear vision of combining authentic yoga traditions, clinical wellness, and luxury hospitality in one coherent healing ecosystem."}
                  </p>

                  <div className="pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2">Leadership Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {(founderTeamData?.leadershipBullets.length ? founderTeamData.leadershipBullets : ["Integrated Wellness", "Patient-Centered Care", "Service Excellence"]).map((item, idx) => (
                        <span key={idx} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">{item}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div
                      className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square"
                      style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/Modi Yoga Retreat/Founder/team.jpg"
                          alt="Modi Yoga Retreat Team"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        {founderTeamData?.teamTitle || "Expert Wellness Team"}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        {founderTeamData?.teamSubtitle || "Physicians, Therapists, Yoga & Nutrition Experts"}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    {founderTeamData?.teamDescription || "Our multidisciplinary team collaborates closely to deliver personalized programs through Ayurveda, naturopathy, yoga, therapies, and guided lifestyle care."}
                  </p>

                  <div className="pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2">Team Strengths</p>
                    {founderTeamData?.teamBullets.length ? (
                      <ul className="space-y-2">
                        {founderTeamData.teamBullets.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                            <span className="text-primary mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>{item.replace(/\*\*/g, "")}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Personalized Protocols</span>
                        <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Holistic Monitoring</span>
                        <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Compassionate Support</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12" id="reviews">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                Hear from our guests about their transformational wellness journeys
              </p>
            </div>

            <div className="relative">
              <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <CardContent className="p-4 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    {patientReviews.length > 0 && (
                      <>
                        <div className="text-primary/20 mb-3 md:mb-4">
                          <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                        </div>

                        <div className="mb-4 md:mb-6">
                          <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">{patientReviews[currentReview].title}</h3>
                          <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                            "{patientReviews[currentReview].review}"
                          </p>
                        </div>

                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                            {patientReviews[currentReview].name.charAt(0)}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-base md:text-xl font-semibold text-primary">{patientReviews[currentReview].name}</h4>
                              {patientReviews[currentReview].verified && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                                  &#10003; Verified
                                </span>
                              )}
                            </div>
                            <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                              {patientReviews[currentReview].location}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3">
                          {renderStars(patientReviews[currentReview].rating)}
                          <span className="text-xs md:text-sm font-semibold text-primary">{patientReviews[currentReview].rating}.0</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-6">
                <button
                  onClick={goToPreviousReview}
                  className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
                <button
                  onClick={goToNextReview}
                  className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              {patientReviews.length > 1 && (
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Auto
                </div>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {patientReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => selectReview(idx)}
                  className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mb-12" id="awards">
            <div className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards and Media</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                Recognition of Modi Yoga Retreat for service quality, wellness excellence, and trusted care standards.
              </p>
            </div>

            <div className="relative group max-w-5xl mx-auto">
              <div className="overflow-hidden px-4 md:px-10">
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentAward * 100}%)` }}
                  >
                    {awards.map((award, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                          <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2">{award.title}</h4>
                            <p className="text-sm italic line-clamp-4" style={{ color: "#7F543D" }}>
                              "{award.description}"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentAward * (100 / 3)}%)` }}
                  >
                    {awards.map((award, i) => (
                      <div key={i} className="w-1/3 flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                          <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 md:mb-6 p-4 md:p-6 flex items-center justify-center overflow-hidden">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-xl font-bold text-primary mb-3">{award.title}</h4>
                            <p className="text-base italic" style={{ color: "#7F543D" }}>
                              "{award.description}"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={goToPreviousAward}
                className="absolute left-8 md:-left-4 top-[57%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                aria-label="Previous award"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={goToNextAward}
                className="absolute right-8 md:-right-4 top-[57%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                aria-label="Next award"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="flex justify-center gap-2 mt-8">
                {awards.slice(0, maxAwardIndex + 1).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentAward(i)}
                    className={`transition-all duration-300 ${i === currentAward ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                    aria-label={`Go to award ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12" id="insurance">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Info</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {insuranceIntro || "Flexible payment support and clear guidance for your wellness journey."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Insurance Coverage</h3>
                  </div>
                  <ul className="space-y-3">
                    {insuranceCoverage.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                        <span className="text-primary mt-1">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                  </div>
                  <ul className="space-y-3">
                    {paymentOptions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                        <span className="text-primary mt-1">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {internationalInsuranceInfo && (
              <Card className="mt-6 bg-primary/5 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">For International Patients</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                        {internationalInsuranceInfo}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mb-12" id="faq">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                Find answers to common questions about your stay, treatment, and wellness planning
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx + 1}`}
                  className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                    <span className="text-lg font-semibold text-primary text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 bg-white">
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="mb-12 border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl" id="contact">
            <CardContent className="p-5 md:p-8">
              <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/10 pb-4">Contact Information</h2>
              <div className="grid gap-8 md:grid-cols-[1fr_1.35fr] lg:gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Address</h4>
                      <p className="flex flex-col space-y-0.5 text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                        {contactAddress.map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {contactDistances.length > 0 && (
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Distance from Major Locations</h4>
                        <ul className="space-y-2 text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                          {contactDistances.map((distance, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{distance}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:-mt-16 self-start">
                  <div className="rounded-2xl bg-white/70 p-1 shadow-lg border-2 border-primary/20 overflow-hidden">
                    <div className="rounded-xl overflow-hidden">
                      <div className="relative w-full aspect-[800/600]">
                        <iframe
                          title="Modi Yoga Retreat Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0488029964013!2d78.28608927369545!3d30.092788616281908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e00c2450ab5%3A0x4b6d1f14f700cfbd!2sModi%20Yoga%20Retreat!5e0!3m2!1sen!2sin!4v1775838008021!5m2!1sen!2sin"
                          className="absolute inset-0 h-full w-full"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {contactTransportation && (
                <div className="mt-10 p-5 md:p-8 bg-primary/5 rounded-2xl border-l-4 border-l-primary shadow-inner">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <ShieldCheck className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-center md:text-left w-full">
                      <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">Transportation Services</h4>
                      <p className="text-sm md:text-base leading-relaxed text-justify md:text-left md:pr-4" style={{ color: "#7F543D" }}>
                        {contactTransportation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#234A50" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/Modi Yoga Retreat/CTA bottom.jpg"
                    alt="Modi Yoga Retreat"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">
                    Begin Your Holistic Healing Journey at Modi Yoga Retreat
                  </h2>
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-white text-primary hover:bg-white/90 text-sm sm:text-base"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500 text-sm sm:text-base"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-white/90 text-sm">
                    <Phone className="h-4 w-4 text-red-400" />
                    <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Begin Your Holistic Healing Journey at Modi Yoga Retreat
                  </h2>
                  <p className="text-base md:text-lg mb-6 text-white/90 leading-relaxed">
                    Step into a serene riverside sanctuary where yoga, integrative therapies, and mindful luxury come together to support your complete well-being.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="rounded-full bg-white text-primary hover:bg-white/90 px-6"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 px-6"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-white/90">
                    <Phone className="h-5 w-5 text-red-400" />
                    <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                  </div>
                </div>

                <div>
                  <img
                    src="/Center Images/Modi Yoga Retreat/CTA bottom.jpg"
                    alt="Modi Yoga Retreat"
                    className="w-full h-auto rounded-2xl shadow-2xl border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFullGallery && (
        <div
          className="fixed inset-0 bg-[#EDE8D0]/80 backdrop-blur-sm z-50 overflow-auto"
          onClick={() => setShowFullGallery(false)}
        >
          <div className="container mx-auto px-4 py-10" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex items-center justify-center mb-4 pl-16 md:pl-0">
              <Button onClick={() => setShowFullGallery(false)} className="absolute left-0 bg-white text-primary hover:bg-white/90">
                Back
              </Button>
              <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">
                Modi Yoga Retreat Gallery
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full cursor-pointer"
                  style={{ paddingBottom: "75%" }}
                  onClick={() => {
                    setLightboxImage(i);
                    setLightboxOpen(true);
                  }}
                >
                  <img src={img} alt={`Modi Yoga Retreat ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
          <button
            onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Modi Yoga Retreat</div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={images[lightboxImage]}
                alt={`Modi Yoga Retreat ${lightboxImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Previous
              </Button>
              <Button
                onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {facilityLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
          <button
            onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Modi Yoga Retreat Facilities & Amenities</div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              {facilityImages[facilityLightboxImage] && (
                <img
                  src={facilityImages[facilityLightboxImage]}
                  alt={`Modi Facility ${facilityLightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <button
                onClick={() => setFacilityLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Previous
              </Button>
              <Button
                onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Search size={18} className="-ml-1" />
          <span>BROWSE</span>
        </button>
      )}

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Phone size={18} className="-ml-1" />
          <span className="hidden md:inline">GET FREE QUOTE</span>
          <span className="md:hidden">QUOTE</span>
        </button>
      )}

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
          <button
            onClick={() => setIsJumpModalOpen(true)}
            className="bg-[#2F5B63] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
          >
            <span>B</span>
            <span>R</span>
            <Search size={16} strokeWidth={3.5} />
            <span>W</span>
            <span>S</span>
            <span>E</span>
          </button>
        </div>
      )}

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
          <div className="p-4 pb-4 bg-[#2F5B63] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[24px] font-extrabold leading-tight tracking-tight text-white whitespace-nowrap">
                  Sections of Modi
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"
                title="Close Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <Search className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">
                "Directly navigate to any section on this page."
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FCFBF7]">
            {jumpSections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => jumpToSection(section.id)}
                className="w-full text-left rounded-xl border-2 border-primary/10 bg-white hover:border-primary hover:shadow-md transition-all p-4 group"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-primary text-sm leading-snug truncate">{section.title}</span>
                  </div>
                  <span className="text-primary/60 group-hover:text-primary">{">"}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}

