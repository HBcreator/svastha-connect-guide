import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity,
  Award,
  Building2,
  Brain,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Droplet,
  FileSearch,
  Globe,
  Heart,
  HeartPulse,
  Home,
  Hospital,
  Images,
  Leaf,
  MapPin,
  MessageCircle,
  MessageCircleHeart,
  Pill,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TreePine,
  TrendingUp,
  Utensils,
  UserCheck,
  Users,
  Video,
  X,
} from "lucide-react";

export default function SitaramMountainRetreat() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedCenterVideo, setSelectedCenterVideo] = useState(0);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [programs, setPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyIntro, setWhyIntro] = useState("");
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ number: number; title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilityCards, setFacilityCards] = useState<{ title: string; bullets: string[] }[]>([]);
  const [teamIntro, setTeamIntro] = useState("");
  const [founderName, setFounderName] = useState("");
  const [founderRole, setFounderRole] = useState("");
  const [founderBio, setFounderBio] = useState("");
  const [founderExpertise, setFounderExpertise] = useState<string[]>([]);
  const [teamGroups, setTeamGroups] = useState<{ title: string; description: string; items: string[] }[]>([]);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [patientReviews, setPatientReviews] = useState<
    { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[]
  >([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);

  const [insuranceIntro, setInsuranceIntro] = useState("");
  const [insuranceBullets, setInsuranceBullets] = useState<string[]>([]);
  const [paymentBullets, setPaymentBullets] = useState<string[]>([]);
  const [internationalText, setInternationalText] = useState("");

  const [faqItems, setFaqItems] = useState<{ question: string; answer: string }[]>([]);

  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactPhones, setContactPhones] = useState<string[]>([]);
  const [contactEmails, setContactEmails] = useState<string[]>([]);
  const [contactWebsite, setContactWebsite] = useState("");
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");

  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);
  const [isAwardMobile, setIsAwardMobile] = useState(false);

  const awards = [
    {
      title: "NABH Accreditation",
      description: "Recognized for hospital-grade safety standards and trusted clinical governance that strengthen authentic Ayurvedic Healing.",
      image: "/Center Images/Sitaram Mountain Retreat/Awards/Award 1 (NABH-accredited hospital, ).png",
    },
    {
      title: "Trusted by a Global Community",
      description: "Celebrated by international guests for consistent outcomes, compassionate care, and a restorative mountain retreat experience.",
      image: "/Center Images/Sitaram Mountain Retreat/Awards/Award 2 (trust of our global community).webp",
    },
    {
      title: "Global Wellness Credibility",
      description: "A mark of confidence earned through ethical practice, experienced physicians, and a long-standing family legacy in Ayurveda.",
      image: "/Center Images/Sitaram Mountain Retreat/Awards/Award 3 ( trust of our global community).jpg",
    },
  ];

  const [maxAwardIndex, setMaxAwardIndex] = useState(awards.length - 1);

  const centerVideoRef = useRef<HTMLVideoElement>(null);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  const sitaramMapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6636861628144!2d77.05118267407826!3d10.044586172267895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799797a09a5dd%3A0x7cf358041633a26d!2sSitaram%20Mountain%20Retreat%20-%20Ayurvedic%20Retreat%20at%20Munnar!5e0!3m2!1sen!2sin!4v1771331440666!5m2!1sen!2sin";

  const founderImage = "/Center Images/Sitaram Mountain Retreat/Founder/Founder.jpg";
  const teamImage = "/Center Images/Sitaram Mountain Retreat/Founder/team.jpg";

  useEffect(() => {
    fetch("/Center Images/Sitaram Mountain Retreat/Photo Gallery/Photo Gallery Links.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setImages(lines);
      })
      .catch((err) => console.error("Error loading Sitaram photo links:", err));

    fetch("/Center Videos/Sitaram Mountain Retreat/Video Gallery Links.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setVideos(lines);
      })
      .catch((err) => console.error("Error loading Sitaram video links:", err));

    fetch("/Center Videos/Sitaram Mountain Retreat/YT-links for testimonies.txt")
      .then((res) => res.text())
      .then((text) => {
        const srcRegex = /src=\"([^\"]+)\"/g;
        const urls: string[] = [];
        let match: RegExpExecArray | null;
        while ((match = srcRegex.exec(text)) !== null) {
          urls.push(match[1]);
        }
        setTestimonialVideos(urls);
      })
      .catch((err) => console.error("Error loading Sitaram testimonial video links:", err));

    fetch("/Center Images/Sitaram Mountain Retreat/Facilities/Facilities Links.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setFacilityImages(lines);
      })
      .catch((err) => console.error("Error loading Sitaram facilities image links:", err));
  }, []);

  useEffect(() => {
    const el = testimonialSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTestimonialsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Wellness Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inPrograms = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inPrograms = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inPrograms = true;
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
            continue;
          }
          if (!inPrograms) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }
        if (current) items.push(current);
        setWellnessIntro(intro);
        setPrograms(items);
      })
      .catch((err) => console.error("Error loading Sitaram wellness content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Medical Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inPrograms = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inPrograms = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inPrograms = true;
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
            continue;
          }
          if (!inPrograms) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }
        if (current) items.push(current);
        setMedicalIntro(intro);
        setMedicalPrograms(items);
      })
      .catch((err) => console.error("Error loading Sitaram medical content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Insurance & Payment Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const ins: string[] = [];
        const pay: string[] = [];
        let intl = "";
        let section: "intro" | "ins" | "pay" | "intl" = "intro";
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            section = "intro";
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("insurance")) {
              section = "ins";
              continue;
            }
            if (t.includes("payment")) {
              section = "pay";
              continue;
            }
            if (t.includes("international")) {
              section = "intl";
              continue;
            }
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "ins") ins.push(bullet);
            else if (section === "pay") pay.push(bullet);
            continue;
          }
          if (section === "intro") intro = intro ? `${intro} ${line}` : line;
          else if (section === "intl") intl = intl ? `${intl} ${line}` : line;
        }
        setInsuranceIntro(intro);
        setInsuranceBullets(ins);
        setPaymentBullets(pay);
        setInternationalText(intl);
      })
      .catch((err) => console.error("Error loading Sitaram insurance content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Frequently Asked Questions.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { question: string; answer: string }[] = [];
        let currentQ = "";
        let currentA = "";
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            if (currentQ) items.push({ question: currentQ, answer: currentA });
            currentQ = line.slice(2, -2).replace(/^\d+\.\s*/, "");
            currentA = "";
            continue;
          }
          currentA = currentA ? `${currentA} ${line}` : line;
        }
        if (currentQ) items.push({ question: currentQ, answer: currentA });
        setFaqItems(items);
      })
      .catch((err) => console.error("Error loading Sitaram FAQs:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let section: "none" | "address" | "phones" | "emails" | "website" | "distances" | "transport" = "none";
        const addr: string[] = [];
        const phones: string[] = [];
        const emails: string[] = [];
        const dists: string[] = [];
        let site = "";
        let transport = "";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            section = "none";
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("address")) {
              section = "address";
              continue;
            }
            if (t.includes("phone")) {
              section = "phones";
              continue;
            }
            if (t.includes("email")) {
              section = "emails";
              continue;
            }
            if (t.includes("website")) {
              section = "website";
              continue;
            }
            if (t.includes("distance")) {
              section = "distances";
              continue;
            }
            if (t.includes("transportation")) {
              section = "transport";
              continue;
            }
          }

          if (section === "address") {
            const cleaned = line.replace(/<br\s*\/?\s*>/gi, "").trim();
            if (cleaned) addr.push(cleaned);
            continue;
          }
          if (section === "phones") {
            if (/^\*/.test(line)) phones.push(line.replace(/^\*+\s*/, ""));
            else if (line) phones.push(line);
            continue;
          }
          if (section === "emails") {
            if (/^\*/.test(line)) emails.push(line.replace(/^\*+\s*/, ""));
            else if (line) emails.push(line);
            continue;
          }
          if (section === "website") {
            site = site ? `${site} ${line}` : line;
            continue;
          }
          if (section === "distances") {
            if (line.startsWith("*")) dists.push(line.replace(/^\*+\s*/, ""));
            continue;
          }
          if (section === "transport") {
            transport = transport ? `${transport} ${line}` : line;
            continue;
          }
        }

        setContactAddress(addr);
        setContactPhones(phones);
        setContactEmails(emails);
        setContactWebsite(site);
        setContactDistances(dists);
        setTransportText(transport);
      })
      .catch((err) => console.error("Error loading Sitaram contact info:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Why Choose Sitaram.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inSection = false;

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inSection = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inSection = true;
            continue;
          }

          if (!inSection) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            if (line.startsWith("*")) {
              const bullet = line.replace(/^\*+\s*/, "");
              current.bullets.push(bullet);
            } else {
              current.description = current.description ? `${current.description} ${line}` : line;
            }
          }
        }

        if (current) items.push(current);
        setWhyIntro(intro);
        setWhyItems(items);
      })
      .catch((err) => console.error("Error loading Sitaram why-choose content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        let fName = "";
        let fRole = "";
        const fBioParts: string[] = [];
        const expertise: string[] = [];
        const groups: { title: string; description: string; items: string[] }[] = [];

        let section: "intro" | "founder" | "expertise" | "team" = "intro";
        const teamDescParts: string[] = [];
        const teamItems: string[] = [];

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;

          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2);
            if (!fName) {
              fName = t;
              section = "founder";
              continue;
            }
            if (/leadership\s*&\s*expertise/i.test(t)) {
              section = "expertise";
              continue;
            }
            if (/our expert medical team/i.test(t)) {
              section = "team";
              continue;
            }
          }

          if (section === "intro") {
            intro = intro ? `${intro} ${line}` : line;
            continue;
          }

          if (section === "founder") {
            if (!fRole) {
              fRole = line;
              continue;
            }
            fBioParts.push(line);
            continue;
          }

          if (section === "expertise") {
            if (line.startsWith("*")) {
              expertise.push(line.replace(/^\*+\s*/, ""));
            }
            continue;
          }

          if (section === "team") {
            if (line.startsWith("*")) {
              teamItems.push(line.replace(/^\*+\s*/, ""));
            } else {
              teamDescParts.push(line);
            }
          }
        }

        if (teamDescParts.length > 0 || teamItems.length > 0) {
          groups.push({
            title: "Our Expert Medical Team",
            description: teamDescParts.join(" "),
            items: teamItems,
          });
        }

        setTeamIntro(intro);
        setFounderName(fName);
        setFounderRole(fRole);
        setFounderBio(fBioParts.join(" "));
        setFounderExpertise(expertise);
        setTeamGroups(groups);
        setCurrentTeamSlide(0);
      })
      .catch((err) => console.error("Error loading Sitaram founder/team content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const steps: { number: number; title: string; description: string; bullets: string[] }[] = [];
        let current: { number: number; title: string; description: string; bullets: string[] } | null = null;
        const stepRegex = /^(\d+)\.\s+\*\*(.+?)\*\*/;
        let inSection = false;

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inSection = false;
            continue;
          }

          if (
            !inSection &&
            line.startsWith("**") &&
            line.endsWith("**") &&
            line.toLowerCase().includes("treatment process")
          ) {
            continue;
          }

          const match = line.match(stepRegex);
          if (match) {
            if (current) steps.push(current);
            current = { number: parseInt(match[1], 10), title: match[2], description: "", bullets: [] };
            inSection = true;
            continue;
          }

          if (!inSection) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            if (line.startsWith("*")) {
              const bullet = line.replace(/^\*+\s*/, "");
              current.bullets.push(bullet);
            } else {
              current.description = current.description ? `${current.description} ${line}` : line;
            }
          }
        }

        if (current) steps.push(current);
        setTreatmentIntro(intro);
        setTreatmentSteps(steps);
      })
      .catch((err) => console.error("Error loading Sitaram treatment process content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const introCollected: string[] = [];
        const cards: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        let seenHeading = false;
        let inCards = false;

        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            seenHeading = true;
            continue;
          }
          if (!seenHeading) continue;

          if (line.startsWith("**") && line.endsWith("**")) {
            inCards = true;
            if (current) cards.push(current);
            current = { title: line.slice(2, -2), bullets: [] };
            continue;
          }

          if (!inCards) {
            introCollected.push(line);
            continue;
          }

          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
          }
        }
        if (current) cards.push(current);
        setFacilitiesIntro(introCollected.join(" "));
        setFacilityCards(cards);
      })
      .catch((err) => console.error("Error loading Sitaram facilities content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Sitaram Mountain Retreat/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[] = [];
        let current: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean } | null = null;
        let idCounter = 1;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (!line || line.startsWith("###")) continue;

          const nameMatch = line.match(/^\*\*(.+?)\*\*$/);
          if (nameMatch && !line.includes("Rating:")) {
            if (current) items.push(current);
            const fullStr = nameMatch[1];
            const parts = fullStr.split(" - ");
            const name = parts[0] || "";
            const location = parts[1] || "";
            current = { id: idCounter++, name, location, condition: "", title: "", review: "", rating: 5, verified: true };
            continue;
          }

          if (current && line.startsWith('*"') && line.endsWith('"*')) {
            current.title = line.slice(2, -2);
            continue;
          }

          if (current && line.includes("Rating:")) {
            const ratingMatch = line.match(/\((\d+)\//);
            if (ratingMatch) {
              current.rating = parseInt(ratingMatch[1]);
            }
            continue;
          }

          if (current && line && !line.startsWith("**") && !line.startsWith("*")) {
            current.review = current.review ? current.review + " " + line : line;
          }
        }
        if (current) items.push(current);
        setPatientReviews(items);
        setCurrentReview(0);
        setIsReviewAutoPlaying(true);
      })
      .catch((err) => console.error("Error loading Sitaram reviews:", err));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    if (!isAutoPlaying) return;
    if (showVideoGallery) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, showVideoGallery]);

  useEffect(() => {
    if (facilityLightboxOpen) return;
    if (facilityImages.length === 0) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityImages.length, facilityLightboxOpen]);

  useEffect(() => {
    const videoElement = centerVideoRef.current;
    if (!videoElement) return;

    videoElement.volume = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              videoElement.muted = true;
              videoElement.play();
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [selectedCenterVideo]);

  useEffect(() => {
    if (!isReviewAutoPlaying || patientReviews.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % patientReviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, patientReviews.length]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const newMax = mobile ? awards.length - 1 : 2;
      setMaxAwardIndex(newMax);
      setCurrentAward((prev) => (prev > newMax ? 0 : prev));
      setIsAwardMobile(mobile);
      setIsAwardAutoPlaying(mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [awards.length]);

  useEffect(() => {
    if (!isAwardAutoPlaying || !isAwardMobile) return;
    const id = setInterval(() => {
      setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [isAwardAutoPlaying, isAwardMobile, maxAwardIndex]);

  const goToPreviousAward = () => {
    setIsAwardAutoPlaying(true);
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setIsAwardAutoPlaying(true);
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

  const goToPreviousReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev - 1 + patientReviews.length) % patientReviews.length);
  };

  const goToNextReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev + 1) % patientReviews.length);
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setLightboxImage((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  useEffect(() => {
    if (!showFullGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowFullGallery(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFullGallery]);

  const goToPrevious = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(true);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(true);
  };

  const thumbnailImages = images.slice(0, 5);

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why", title: "Why Choose Sitaram" },
    { id: "testimonial-videos", title: "Testimonials" },
    { id: "process", title: "Treatment Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team" },
    { id: "reviews", title: "Patient Stories" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "FAQs" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsJumpModalOpen(false);
  };

  const iconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("panchakarma")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("stress") || s.includes("mental") || s.includes("burnout")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("anti-aging") || s.includes("rejuvenation") || s.includes("rasayana")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("weight") || s.includes("metabolism")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("immunity") || s.includes("recovery") || s.includes("post-illness")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("beauty") || s.includes("skin") || s.includes("radiance")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("women") || s.includes("harmony")) return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("couples") || s.includes("connect")) return <Users className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("sleep") || s.includes("insomnia") || s.includes("swapna")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("digital")) return <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("week") || s.includes("day") || s.includes("7") || s.includes("10")) return <Calendar className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("panchakarma") || s.includes("detox")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("weight")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("diabetes")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("stress") || s.includes("sleep") || s.includes("anxiety")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("arthritis") || s.includes("pain") || s.includes("spine") || s.includes("back")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("immunity") || s.includes("rejuvenation") || s.includes("autoimmune")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("gastro") || s.includes("digest") || s.includes("ibs") || s.includes("ibd") || s.includes("gerd")) return <Pill className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("respiratory")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("neuro") || s.includes("migraine") || s.includes("stroke")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("women") || s.includes("pcos") || s.includes("infertility")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("skin") || s.includes("psoriasis") || s.includes("eczema")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("fertility") || s.includes("conception")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  const whyIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    const cls = "h-6 w-6 text-primary group-hover:text-white transition-colors";
    if (s.includes("mountain") || s.includes("munnar") || s.includes("high") || s.includes("altitude")) return <MapPin className={cls} />;
    if (s.includes("physician") || s.includes("doctor") || s.includes("guided") || s.includes("hospital") || s.includes("clinical")) return <Hospital className={cls} />;
    if (s.includes("legacy") || s.includes("pharmaceutical") || s.includes("pharmacy") || s.includes("100") || s.includes("century")) return <Award className={cls} />;
    if (s.includes("accredited") || s.includes("nabh") || s.includes("certification") || s.includes("green")) return <ShieldCheck className={cls} />;
    if (s.includes("autoimmune") || s.includes("immunity")) return <HeartPulse className={cls} />;
    if (s.includes("scientific") || s.includes("evidence")) return <TrendingUp className={cls} />;
    if (s.includes("plan") || s.includes("unique") || s.includes("tailored") || s.includes("personal")) return <UserCheck className={cls} />;
    if (s.includes("holistic") || s.includes("yoga")) return <Leaf className={cls} />;
    if (s.includes("experience") || s.includes("environment") || s.includes("sanctuary")) return <Home className={cls} />;
    return <Heart className={cls} />;
  };

  const buildTestimonialSrc = (base: string) => {
    const sep = base.includes("?") ? "&" : "?";
    return `${base}${sep}autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`;
  };

  const treatmentIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("consultation") || s.includes("diagnosis") || s.includes("analysis") || s.includes("assessment")) {
      return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("blueprint") || s.includes("protocol") || s.includes("design") || s.includes("plan")) {
      return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("daily") && (s.includes("healing") || s.includes("treatment") || s.includes("care"))) {
      return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("cuisine") || s.includes("nutrition") || s.includes("meals") || s.includes("diet") || s.includes("food")) {
      return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("mindful") || s.includes("living") || s.includes("wellness") || s.includes("walk") || s.includes("nature") || s.includes("cloud")) {
      return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("journey home") || s.includes("follow") || s.includes("guidance") || s.includes("empower")) {
      return <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  const getFacilityIcon = (title: string) => {
    const t = title.toLowerCase();
    return t.includes("ayurveda") || t.includes("treatment") ? <Droplet className="h-7 w-7 text-white" />
      : t.includes("doctor") || t.includes("physician") ? <Stethoscope className="h-7 w-7 text-white" />
        : t.includes("room") || t.includes("suite") || t.includes("accommodation") ? <Building2 className="h-7 w-7 text-white" />
          : t.includes("restaurant") || t.includes("dining") || t.includes("meal") || t.includes("cuisine") ? <Utensils className="h-7 w-7 text-white" />
            : t.includes("pool") || t.includes("swimming") ? <Activity className="h-7 w-7 text-white" />
              : t.includes("beach") || t.includes("location") || t.includes("mountain") || t.includes("sanctuary") ? <MapPin className="h-7 w-7 text-white" />
                : t.includes("hospitality") || t.includes("service") ? <Sparkles className="h-7 w-7 text-white" />
                  : t.includes("nature") || t.includes("garden") || t.includes("yoga") || t.includes("meditation") ? <TreePine className="h-7 w-7 text-white" />
                    : t.includes("award") || t.includes("ambiance") || t.includes("accredited") ? <Globe className="h-7 w-7 text-white" />
                      : <ShieldCheck className="h-7 w-7 text-white" />;
  };

  const renderInlineBold = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const regex = /\*\*(.*?)\*\*/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
      parts.push(
        <strong key={match.index} className="font-semibold text-primary">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.substring(lastIndex));
    return parts.length > 0 ? parts : text;
  };

  const nextTeam = () => {
    if (teamGroups.length === 0) return;
    setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
  };

  const prevTeam = () => {
    if (teamGroups.length === 0) return;
    setCurrentTeamSlide((prev) => (prev - 1 + teamGroups.length) % teamGroups.length);
  };

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
              SITARAM MOUNTAIN RETREAT IDUKKI
            </li>
          </ol>
        </div>
      </nav>


      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitaram Mountain Retreat</h1>
                <p className="text-xl mb-4 opacity-90">Authentic Ayurvedic Wellness Sanctuary</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Munnar, Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(928+ reviews)</span>
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

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12" id="gallery">
            <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <Button
                  variant={!showVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowVideoGallery(false)}
                  className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                    }`}
                >
                  <Images className="h-4 w-4 md:h-6 md:w-6 mr-2" />
                  Photo Gallery
                </Button>
                <Button
                  variant={showVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowVideoGallery(true)}
                  className={`flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                    }`}
                >
                  <Video className="h-4 w-4 md:h-6 md:w-6" />
                  Video Gallery
                </Button>
              </div>
            </div>

            {!showVideoGallery ? (
              <>
                {images.length > 0 && (
                  <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                    <img
                      src={images[selectedImage]}
                      alt={`Sitaram Mountain Retreat ${selectedImage + 1}`}
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

                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-black/80 transition-all"
                    >
                      <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
                      {isAutoPlaying ? "Auto" : "Manual"}
                    </button>
                  </div>
                )}

                {thumbnailImages.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-3 md:gap-3">
                    <div
                      className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                      onClick={() => {
                        setSelectedImage(0);
                        setLightboxImage(0);
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={thumbnailImages[0]}
                        alt="Sitaram Mountain Retreat 1"
                        className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                      {thumbnailImages.slice(1, 5).map((img, idx) => {
                        const actualIndex = images.indexOf(img);
                        const isLastImage = idx === 3;
                        return (
                          <div
                            key={img}
                            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                            onClick={() => {
                              if (actualIndex >= 0) {
                                setSelectedImage(actualIndex);
                                setLightboxImage(actualIndex);
                              }
                              setLightboxOpen(true);
                            }}
                          >
                            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                              <img
                                src={img}
                                alt={`Sitaram Mountain Retreat ${idx + 2}`}
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
                )}

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
                        <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">Sitaram Gallery</div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img, i) => (
                          <div
                            key={img}
                            className="relative w-full cursor-pointer"
                            style={{ paddingBottom: "75%" }}
                            onClick={() => {
                              setLightboxImage(i);
                              setLightboxOpen(true);
                            }}
                          >
                            <img src={img} alt={`Sitaram Mountain Retreat ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {lightboxOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm"
                    onClick={() => setLightboxOpen(false)}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
                      }}
                      className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                      aria-label="Previous"
                      disabled={images.length === 0}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage((prev) => (prev + 1) % images.length);
                      }}
                      className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                      aria-label="Next"
                      disabled={images.length === 0}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                      <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Sitaram Mountain Retreat</div>
                      <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                        {images[lightboxImage] && (
                          <img
                            src={images[lightboxImage]}
                            alt={`Sitaram Mountain Retreat ${lightboxImage + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                        <button
                          onClick={() => setLightboxOpen(false)}
                          className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                          aria-label="Close">X</button>
                      </div>
                      <div className="flex md:hidden items-center justify-between mt-4">
                        <Button
                          onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                          className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                          disabled={images.length === 0}
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
                          className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                          disabled={images.length === 0}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black rounded-xl overflow-hidden shadow-lg">
                  {videos[selectedVideo] ? (
                    <video
                      key={videos[selectedVideo]}
                      src={videos[selectedVideo]}
                      controls
                      className="w-full aspect-video"
                      playsInline
                    />
                  ) : (
                    <div className="w-full aspect-video flex items-center justify-center text-white/70">No videos available</div>
                  )}
                </div>
                <div className="space-y-3">
                  {videos.map((v, idx) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVideo(idx)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${idx === selectedVideo
                        ? "border-primary bg-primary/5 shadow"
                        : "border-primary/20 bg-white hover:border-primary/40"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          <Video className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-bold text-primary">Video {idx + 1}</div>
                          <div className="text-sm text-muted-foreground">Tap to play</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Card className="mb-12" id="content">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
              <MarkdownContent
                contentPath="/content/Top Centers/Sitaram Mountain Retreat/main content.txt"
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

          <div className="mb-12 rounded-3xl p-6 md:p-6 lg:p-12" style={{ backgroundColor: "#EDE8D0" }} id="wellness">
            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">928+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.8/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Average Rating</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">96%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Success Rate</div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 mb-4" style={{ borderColor: "#1A428A" }}>
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {wellnessIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {programs.map((p, idx) => (
                <AccordionItem
                  key={idx}
                  value={`prog-${idx}`}
                  className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-[#1A428A]">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2"
                        style={{ borderColor: "#1A428A" }}
                      >
                        {iconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    {p.description && (
                      <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                        {p.description}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {p.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-green-600 mt-1 flex-shrink-0">&#10003;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mb-12 rounded-3xl p-6 md:p-6 lg:p-12" style={{ backgroundColor: "#EDE8D0" }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-orange-500 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {medicalIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalPrograms.map((p, idx) => (
                <AccordionItem
                  key={idx}
                  value={`med-${idx}`}
                  className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-orange-500">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-orange-500">
                        {medicalIconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    {p.description && (
                      <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                        {p.description}
                      </p>
                    )}
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

          <div className="mb-12" id="videos">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Sitaram Mountain Retreat</h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene mountain sanctuary and healing environment of Sitaram Mountain Retreat through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    <video
                      ref={centerVideoRef}
                      key={videos[selectedCenterVideo]}
                      src={videos[selectedCenterVideo]}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                    />
                  </div>
                </CardContent>
              </Card>

              {videos.length > 1 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                  <button
                    onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Previous video"
                    disabled={videos.length === 0}
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Next video"
                    disabled={videos.length === 0}
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              )}

              {videos.length > 1 && (
                <div className="flex md:hidden items-center justify-between mt-4 px-6">
                  <Button
                    onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                    disabled={videos.length === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                    disabled={videos.length === 0}
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
                      onClick={() => setSelectedCenterVideo(index)}
                      className={`transition-all ${index === selectedCenterVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-12" id="why">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Why Choose Sitaram Mountain Retreat for Your Healing Journey</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {whyIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyItems.map((it, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          {whyIconForTitle(it.title)}
                        </div>
                        <h3 className="text-lg font-bold text-primary">{it.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>{it.description}</p>
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

          <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Sitaram Mountain Retreat
              </h2>
              <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
              <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
                Watch inspiring stories of recovery and wellness from our global family of patients.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    {testimonialVideos.length > 0 && (
                      <iframe
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={buildTestimonialSrc(testimonialVideos[selectedTestimonialVideo])}
                        title="Sitaram Testimonial Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                <button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Previous testimonial"
                  disabled={testimonialVideos.length === 0}
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Next testimonial"
                  disabled={testimonialVideos.length === 0}
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="flex md:hidden items-center justify-between mt-4 px-6">
                <Button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  disabled={testimonialVideos.length === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  disabled={testimonialVideos.length === 0}
                >
                  Next
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {testimonialVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTestimonialVideo(index)}
                    className={`transition-all ${index === selectedTestimonialVideo
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      } rounded-full`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process &amp; Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {treatmentIntro}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((s, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                      {s.number}
                    </div>
                    {idx < treatmentSteps.length - 1 && (
                      <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                    )}
                  </div>

                  <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                    <CardContent className="p-4 md:p-6">
                      <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {s.number}
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-12 md:pl-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {treatmentIconForTitle(s.title)}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-primary pr-2">{s.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                        {s.description}
                      </p>
                      {s.bullets && s.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1">&#10003;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12" id="cta-mid">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/Sitaram Mountain Retreat/mid CTA.jpg"
                    alt="Sitaram Mountain Retreat"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
                    Take the first step toward holistic healing. Our expert team will guide you with personalized plans tailored to your unique needs.
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
                    <button
                      type="button"
                      className="underline hover:text-primary"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      Call us
                    </button>
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
                    <button
                      type="button"
                      className="underline hover:text-primary"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      Call us
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Sitaram Mountain Retreat/mid CTA.jpg"
                    alt="Sitaram Mountain Retreat"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12" id="facilities">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities &amp; Amenities</h2>
              <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>
                {facilitiesIntro}
              </p>
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
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentFacilityImage * 100}%)` }}
                  >
                    {facilityImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => {
                            setFacilityLightboxImage(index);
                            setFacilityLightboxOpen(true);
                          }}
                        >
                          <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${Math.min(currentFacilityImage, facilityImages.length - 5) * 20}%)` }}
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
                          <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
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
              {facilityCards.map((card, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                        {getFacilityIcon(card.title)}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">{card.title}</h3>
                    </div>

                    <ul className="space-y-2">
                      {card.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder &amp; Team Info</h1>
              {teamIntro && (
                <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                  {teamIntro}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                <CardContent className="p-4 md:p-8 h-full md:h-[480px] flex flex-col">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div
                      className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square"
                      style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img src={founderImage} alt="Founder" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founderName || "Founder"}</h3>
                      {founderRole && <p className="text-xs md:text-sm mt-1 text-primary/70">{founderRole}</p>}
                    </div>
                  </div>

                  {founderBio && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {founderBio}
                    </p>
                  )}

                  {founderExpertise.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-primary/10 mt-auto">
                      <p className="text-xs font-semibold text-primary mb-2">Leadership &amp; Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {founderExpertise.map((e, i) => (
                          <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="relative">
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                  <CardContent className="p-4 md:p-8 h-full md:h-[480px] md:overflow-y-auto">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div
                        className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square"
                        style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                          <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug break-words whitespace-normal">
                          {teamGroups[currentTeamSlide]?.title || "Our Expert Medical Team"}
                        </h3>
                      </div>
                    </div>

                    {teamGroups[currentTeamSlide]?.description && (
                      <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                        {teamGroups[currentTeamSlide].description}
                      </p>
                    )}

                    <ul className="space-y-2.5">
                      {(teamGroups[currentTeamSlide]?.items || []).map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">&bull;</span>
                          <span>{renderInlineBold(it)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {teamGroups.length > 1 && (
                  <>
                    <button
                      onClick={prevTeam}
                      className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                      aria-label="Previous team card"
                    >
                      <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                    </button>
                    <button
                      onClick={nextTeam}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                      aria-label="Next team card"
                    >
                      <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {patientReviews.length > 0 && (
            <div className="mb-12" id="reviews">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories &amp; Reviews</h2>
                <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                  Hear from our patients about their transformational healing journeys
                </p>
              </div>

              <div className="relative">
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                  <CardContent className="p-4 md:p-12">
                    <div className="max-w-4xl mx-auto">
                      <div className="text-primary/20 mb-3 md:mb-4">
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>

                      <div className="mb-4 md:mb-6">
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">
                          {patientReviews[currentReview].title}
                        </h3>
                        <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                          &quot;{patientReviews[currentReview].review}&quot;
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
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">&#10003; Verified</span>
                            )}
                          </div>
                          <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                            {patientReviews[currentReview].location}{" "}
                            {patientReviews[currentReview].condition && ` - ${patientReviews[currentReview].condition}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(patientReviews[currentReview].rating)}
                        <span className="text-xs md:text-sm font-semibold text-primary">{patientReviews[currentReview].rating}.0</span>
                      </div>
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

                {isReviewAutoPlaying && (
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
                    onClick={() => {
                      setIsReviewAutoPlaying(true);
                      setCurrentReview(idx);
                    }}
                    className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"}`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-12" id="awards">
            <div className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards and Media</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                Recognition of our standards of care, trusted legacy, and the outcomes our guests experience in the Munnar hills
              </p>
            </div>

            <div className="relative group max-w-5xl mx-auto">
              <div className="overflow-hidden px-4 md:px-10">
                <div className="md:hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentAward * 100}%)` }}>
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
                            <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">{award.title}</h4>
                            <p className="text-sm italic line-clamp-3" style={{ color: "#7F543D" }}>
                              "{award.description}"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentAward * (100 / 3)}%)` }}>
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

              {isAwardMobile && (
                <>
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
                </>
              )}

              <div className="flex justify-center gap-2 mt-8">
                {awards.slice(0, maxAwardIndex + 1).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAwardAutoPlaying(true);
                      setCurrentAward(i);
                    }}
                    className={`transition-all duration-300 ${i === currentAward ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                    aria-label={`Go to award ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {insuranceBullets.length > 0 && (
            <div className="mb-12" id="insurance">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance &amp; Payment Info</h2>
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                  {insuranceIntro}
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
                      {insuranceBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">&#10003;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Pill className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                    </div>
                    <ul className="space-y-3">
                      {paymentBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">&#10003;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {internationalText && (
                <Card className="mt-6 bg-primary/5 border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">For International Patients</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                          {internationalText}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {faqItems.length > 0 && (
            <div className="mb-12" id="faq">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <MessageCircleHeart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                  Find answers to common questions about treatments, facilities, and your healing journey
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
                {faqItems.map((it, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500 transition-colors">
                      <span className="text-lg font-semibold text-primary text-left">{it.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 bg-white">
                      <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                        {it.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {contactAddress.length > 0 && (
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
                          {contactAddress
                            .filter((l) => l.trim() !== "")
                            .map((l, i) => (
                              <span key={i}>{l}</span>
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
                            {contactDistances.map((d, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {contactPhones.length > 0 && (
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-primary mb-1">Phone</h4>
                          <ul className="space-y-1 text-sm md:text-base" style={{ color: "#7F543D" }}>
                            {contactPhones.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {contactEmails.length > 0 && (
                      <div className="flex items-start gap-4">
                        <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-primary mb-1">Email</h4>
                          <ul className="space-y-1 text-sm md:text-base" style={{ color: "#7F543D" }}>
                            {contactEmails.map((e, i) => (
                              <li key={i}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {contactWebsite && (
                      <div className="flex items-start gap-4">
                        <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-primary mb-1">Website</h4>
                          <p className="text-sm md:text-base" style={{ color: "#7F543D" }}>
                            {contactWebsite}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:-mt-16 self-start">
                    <div className="rounded-2xl bg-white/70 p-1 shadow-lg border-2 border-primary/20 overflow-hidden">
                      <div className="rounded-xl overflow-hidden">
                        <div className="relative w-full aspect-[800/600]">
                          <iframe
                            title="Sitaram Mountain Retreat Map"
                            src={sitaramMapSrc}
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

                {transportText && (
                  <div className="mt-10 p-5 md:p-8 bg-primary/5 rounded-2xl border-l-4 border-l-primary shadow-inner">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <ShieldCheck className="h-7 w-7 text-primary" />
                      </div>
                      <div className="text-center md:text-left w-full">
                        <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">Transportation Services</h4>
                        <div className="max-w-none w-full">
                          <p
                            className="text-sm md:text-base leading-relaxed text-justify md:text-left md:pr-4"
                            style={{ color: "#7F543D" }}
                          >
                            {transportText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#234A50" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/Sitaram Mountain Retreat/bottom CTA.jpg"
                    alt="Sitaram Mountain Retreat"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-bold text-white text-center mb-4">Begin Your Holistic Healing Journey at Sitaram Mountain Retreat</h2>
                  <div className="space-y-3">
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
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Begin Your Holistic Healing Journey at Sitaram Mountain Retreat</h2>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      className="rounded-full px-6 bg-white text-primary hover:bg-white/90"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-6 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Sitaram Mountain Retreat/bottom CTA.jpg"
                    alt="Sitaram Mountain Retreat"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {facilityLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
          <button
            onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Previous"
            disabled={facilityImages.length === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Next"
            disabled={facilityImages.length === 0}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Sitaram Mountain Retreat</div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              {facilityImages[facilityLightboxImage] && (
                <img
                  src={facilityImages[facilityLightboxImage]}
                  alt={`Facility ${facilityLightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <button
                onClick={() => setFacilityLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close">X</button>
            </div>

            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                disabled={facilityImages.length === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                disabled={facilityImages.length === 0}
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
            className="bg-[#2F5B63] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
          >
            <span className="drop-shadow-sm">B</span>
            <span className="drop-shadow-sm">R</span>
            <Search size={16} strokeWidth={3.5} className="drop-shadow-sm" />
            <span className="drop-shadow-sm">W</span>
            <span className="drop-shadow-sm">S</span>
            <span className="drop-shadow-sm">E</span>
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

            <div className="flex justify-between items-start mb-3 relative z-10 gap-3">
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[22px] md:text-[26px] font-extrabold leading-tight tracking-tight whitespace-normal break-words text-white">
                  Sections of Sitaram
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50 flex-shrink-0"
                title="Close Menu"
              >
                <X className="h-6 w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Directly navigate to any section on this page."</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5 custom-scrollbar">
            {jumpSections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => jumpToSection(section.id)}
                className="w-full group relative bg-white hover:bg-[#2F5B63] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">
                      {(idx + 1).toString().padStart(2, "0")}
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

          <div className="p-4 text-center border-t border-primary/5 bg-[#F9F8F4]">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-primary/20" />
              <div className="w-2 h-2 rounded-full border border-primary/30" />
              <div className="w-8 h-[1px] bg-primary/20" />
            </div>
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] select-none">Holistic Healing Sanctuary</p>
          </div>
        </div>
      </div>
    </div>
  );
}





