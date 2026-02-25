import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  MapPin,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Images,
  Video,
  Users,
  TrendingUp,
  Heart,
  Droplet,
  Brain,
  Sparkles,
  Activity,
  HeartPulse,
  UserCheck,
  ShieldCheck,
  Home,
  Pill,
  ClipboardList,
  FileSearch,
  Utensils,
  Phone,
  MessageCircle,
  MessageCircleHeart,
  Stethoscope,
  Building2,
  Globe,
  TreePine,
  Search,
  X,
  Award,
} from "lucide-react";

export default function AthreyaAyurvedicCentre() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const founderImage = "/Center Images/Athreya Ayurvedic Centre/Founder/Foudner.jpg";
  const teamImage = "/Center Images/Athreya Ayurvedic Centre/Founder/Team.jpg";

  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedCenterVideo, setSelectedCenterVideo] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  const centerGalleryVideoRef = useRef<HTMLVideoElement>(null);

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
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);

  const [teamIntro, setTeamIntro] = useState("");
  const [founder, setFounder] = useState<{ name: string; degrees: string[]; role: string; description: string } | null>(null);
  const [founderExpertise, setFounderExpertise] = useState<string[]>([]);
  const [teamGroups, setTeamGroups] = useState<{ title: string; description: string; items: string[] }[]>([]);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [isTeamAutoPlaying, setIsTeamAutoPlaying] = useState(true);

  const [testimonials, setTestimonials] = useState<
    { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[]
  >([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);

  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);
  const [isAwardMobile, setIsAwardMobile] = useState(true);

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

  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  const testimonialVideos = ["https://www.youtube.com/embed/uB1IzLhZhX4"];

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Athreya" },
    { id: "testimonial-videos", title: "Testimonials" },
    { id: "process", title: "Treatment Process" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "founder", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards and Media" },
    { id: "insurance", title: "Insurance & Payment Info" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of any floating header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTestimonialsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (testimonialSectionRef.current) {
      observer.observe(testimonialSectionRef.current);
    }

    return () => {
      if (testimonialSectionRef.current) {
        observer.unobserve(testimonialSectionRef.current);
      }
    };
  }, []);

  const awards = [
    {
      title: "Tripadvisor Travelers’ Choice 2023",
      description: "Recognized by travelers for consistently excellent experiences.",
      image: "/Center Images/Athreya Ayurvedic Centre/Awards/Award 1.webp",
    },
    {
      title: "NABH Accredited Facility",
      description: "Patient safety and quality of care aligned to NABH standards.",
      image: "/Center Images/Athreya Ayurvedic Centre/Awards/Award 2.webp",
    },
    {
      title: "Tripadvisor Certificate of Excellence",
      description: "A long-standing mark of guest satisfaction and trust.",
      image: "/Center Images/Athreya Ayurvedic Centre/Awards/Award 3 Trip advisor.webp",
    },
  ];

  const [maxAwardIndex, setMaxAwardIndex] = useState(awards.length - 1);

  const thumbnailImages = [
    images[0],
    images[1],
    images[5],
    images[11],
    images[19],
    images[29],
  ].filter(Boolean) as string[];

  useEffect(() => {
    fetch("/Center Images/Athreya Ayurvedic Centre/Photo Gallery/Photo links.txt")
      .then((res) => res.text())
      .then((text) => {
        const imgs = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setImages(imgs);
        setSelectedImage(0);
      })
      .catch((err) => console.error("Error loading Athreya images:", err));

    fetch("/Center Videos/Athreya Ayurvedic Centre/Video links.txt")
      .then((res) => res.text())
      .then((text) => {
        const vids = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setVideos(vids);
        setSelectedVideo(0);
        setSelectedCenterVideo(0);
      })
      .catch((err) => console.error("Error loading Athreya videos:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Wellness Programs.txt")
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
      .catch((err) => console.error("Error loading Athreya wellness content:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Medical Programs.txt")
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
      .catch((err) => console.error("Error loading Athreya medical content:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Why Choose Athreya.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inItems = false;

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inItems = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inItems = true;
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
            continue;
          }

          if (!inItems) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }

        if (current) items.push(current);
        setWhyIntro(intro);
        setWhyItems(items);
      })
      .catch((err) => console.error("Error loading Athreya why choose:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Treatment Process & Patient Journey.txt")
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
          const match = line.match(stepRegex);
          if (match) {
            if (current) steps.push(current);
            current = { number: parseInt(match[1], 10), title: match[2], description: "", bullets: [] };
            inSection = true;
            continue;
          }

          if (!inSection) {
            if (line.startsWith("**") && line.endsWith("**")) continue;
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
      .catch((err) => console.error("Error loading Athreya treatment process:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const introCollected: string[] = [];
        const cards: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        let seenHeading = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            seenHeading = true;
            continue;
          }
          if (!seenHeading) {
            introCollected.push(line);
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) cards.push(current);
            current = { title: line.slice(2, -2), bullets: [] };
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
      .catch((err) => console.error("Error loading Athreya facilities content:", err));

    fetch("/Center Images/Athreya Ayurvedic Centre/Facilities/Facilities.txt")
      .then((res) => res.text())
      .then((text) => {
        const imgs = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setFacilityImages(imgs);
        setCurrentFacilityImage(0);
        setFacilityLightboxImage(0);
      })
      .catch((err) => console.error("Error loading Athreya facilities images:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        let name = "";
        const degrees: string[] = [];
        let role = "";
        let fdesc = "";
        const expertise: string[] = [];
        const groups: { title: string; description: string; items: string[] }[] = [];
        let currentGroup: { title: string; description: string; items: string[] } | null = null;
        let section: "intro" | "founder" | "expertise" | "group" = "intro";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            section = "intro";
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2);
            const tl = t.toLowerCase();
            if (tl.includes("leadership") && tl.includes("expertise")) {
              section = "expertise";
              continue;
            }
            if (tl.includes("our healing family") || tl.includes("team")) {
              if (currentGroup) groups.push(currentGroup);
              currentGroup = { title: t, description: "", items: [] };
              section = "group";
              continue;
            }
            if (!name) {
              name = t;
              section = "founder";
              continue;
            }
            if (currentGroup) groups.push(currentGroup);
            currentGroup = { title: t, description: "", items: [] };
            section = "group";
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "expertise") {
              expertise.push(bullet);
              continue;
            }
            if (currentGroup) {
              currentGroup.items.push(bullet);
              continue;
            }
          }

          if (section === "intro") {
            intro = intro ? `${intro} ${line}` : line;
            continue;
          }

          if (section === "founder") {
            if (/MD|BAMS|Ayurveda|MRCH|Hom/i.test(line) && line.length <= 60) {
              degrees.push(line);
              continue;
            }
            if (/CEO|Chief|Director|Physician/i.test(line) && role === "") {
              role = line;
              continue;
            }
            fdesc = fdesc ? `${fdesc} ${line}` : line;
            continue;
          }

          if (section === "group" && currentGroup) {
            currentGroup.description = currentGroup.description ? `${currentGroup.description} ${line}` : line;
            continue;
          }
        }

        if (currentGroup) groups.push(currentGroup);
        setTeamIntro(intro);
        setFounder(name ? { name, degrees, role, description: fdesc } : null);
        setFounderExpertise(expertise);
        setTeamGroups(groups);
        setCurrentTeamSlide(0);
        setIsTeamAutoPlaying(true);
      })
      .catch((err) => console.error("Error loading Athreya founder content:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Patient Stories & Reviews.txt")
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
        setTestimonials(items);
        setCurrentReview(0);
        setIsReviewAutoPlaying(true);
      })
      .catch((err) => console.error("Error loading Athreya reviews:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Insurance & Payment Info.txt")
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
      .catch((err) => console.error("Error loading Athreya insurance content:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Frequently Asked Questions.txt")
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
      .catch((err) => console.error("Error loading Athreya FAQs:", err));

    fetch("/content/Top Centers/Athreya Ayurvedic Centre/Contact Information.txt")
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
            addr.push(line);
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
      .catch((err) => console.error("Error loading Athreya contact info:", err));
  }, []);

  useEffect(() => {
    const videoElement = centerGalleryVideoRef.current;
    if (!videoElement) return;
    if (!videos.length) return;

    videoElement.volume = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch((error) => {
              console.log("Autoplay with sound prevented:", error);
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
  }, [selectedCenterVideo, videos.length]);

  useEffect(() => {
    if (!isTeamAutoPlaying || teamGroups.length === 0) return;
    const id = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isTeamAutoPlaying, teamGroups.length]);

  useEffect(() => {
    if (!isReviewAutoPlaying || testimonials.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, testimonials.length]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsAwardMobile(isMobile);
      const newMax = isMobile ? awards.length - 1 : 2;
      setMaxAwardIndex(newMax);
      setCurrentAward((prev) => (prev > newMax ? 0 : prev));
      setIsAwardAutoPlaying(isMobile);
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
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

  const goToPreviousReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const goToNextReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );

  const prevTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev - 1 + teamGroups.length) % teamGroups.length);
  };
  const nextTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
  };

  useEffect(() => {
    if (facilityLightboxOpen) return;
    if (!facilityImages.length) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityImages.length, facilityLightboxOpen]);

  const getFacilityIcon = (title: string) => {
    const t = title.toLowerCase();
    return t.includes("ayurveda") || t.includes("treatment") ? (
      <Droplet className="h-7 w-7 text-white" />
    ) : t.includes("doctor") || t.includes("physician") ? (
      <Stethoscope className="h-7 w-7 text-white" />
    ) : t.includes("cottage") || t.includes("room") || t.includes("accommodation") ? (
      <Building2 className="h-7 w-7 text-white" />
    ) : t.includes("restaurant") || t.includes("dining") || t.includes("meal") ? (
      <Utensils className="h-7 w-7 text-white" />
    ) : t.includes("pool") || t.includes("recreation") || t.includes("swimming") ? (
      <Activity className="h-7 w-7 text-white" />
    ) : t.includes("conference") || t.includes("group") ? (
      <Globe className="h-7 w-7 text-white" />
    ) : t.includes("travel") || t.includes("airport") || t.includes("station") ? (
      <MapPin className="h-7 w-7 text-white" />
    ) : t.includes("laundry") || t.includes("housekeeping") ? (
      <Sparkles className="h-7 w-7 text-white" />
    ) : t.includes("library") || t.includes("reading") ? (
      <Globe className="h-7 w-7 text-white" />
    ) : t.includes("garden") || t.includes("nature") || t.includes("backwater") ? (
      <TreePine className="h-7 w-7 text-white" />
    ) : t.includes("steam") || t.includes("therapy") ? (
      <Droplet className="h-7 w-7 text-white" />
    ) : t.includes("nabh") || t.includes("hospital") ? (
      <ShieldCheck className="h-7 w-7 text-white" />
    ) : (
      <ShieldCheck className="h-7 w-7 text-white" />
    );
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

  const whyIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("legacy") || s.includes("generation")) return <TrendingUp className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("physician") || s.includes("family") || s.includes("guided")) return <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("panchakarma") || s.includes("kottage") || s.includes("private")) return <Home className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("accredited") || s.includes("nabh") || s.includes("clinical")) return <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("formulation") || s.includes("medicine") || s.includes("herbal")) return <Pill className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("advanced") || s.includes("marma") || s.includes("rasayana")) return <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("holistic") || s.includes("yoga") || s.includes("meditation")) return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  };

  const treatmentIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("consultation") || s.includes("assessment") || s.includes("diagnosis"))
      return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("protocol") || s.includes("design") || s.includes("plan") || s.includes("blueprint"))
      return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("daily") && s.includes("treatment")) return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("nutrition") || s.includes("meals") || s.includes("diet") || s.includes("cuisine"))
      return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("wellness") || s.includes("relaxation") || s.includes("activities") || s.includes("mindful"))
      return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("follow-up") || s.includes("maintenance") || s.includes("guidance") || s.includes("home"))
      return <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  const iconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("panchakarma")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("stress") || s.includes("mental") || s.includes("burnout"))
      return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("anti-aging") || s.includes("rejuvenation") || s.includes("rasayana"))
      return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("weight") || s.includes("metabolism")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("immunity")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("beauty") || s.includes("skin")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("recovery") || s.includes("post-illness")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("women")) return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("prevention") || s.includes("preventive"))
      return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("panchakarma") || s.includes("detox")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("weight") || s.includes("obesity")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("diabetes")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("stress") || s.includes("sleep") || s.includes("anxiety")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("arthritis") || s.includes("pain") || s.includes("joint") || s.includes("spine") || s.includes("back"))
      return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("immunity") || s.includes("rejuvenation")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("women") || s.includes("infertility") || s.includes("hormonal")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("skin") || s.includes("psoriasis")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (!images.length) return;
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    if (!images.length) return;
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(true);
  };

  const goToNext = () => {
    if (!images.length) return;
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    if (!images.length) return;
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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-4xl font-bold leading-relaxed mb-4">Athreya Ayurvedic Centre</h1>
                <p className="text-xl mb-4 opacity-90">Authentic Ayurveda & Personalized Healing</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(1000+ reviews)</span>
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

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full" id="gallery">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
              <Button
                variant={!showVideoGallery ? "default" : "secondary"}
                size="lg"
                onClick={() => setShowVideoGallery(false)}
                className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                  }`}
              >
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
              <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                {images[selectedImage] && (
                  <img
                    src={images[selectedImage]}
                    alt={`Athreya Center ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                )}
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
                      alt="Athreya 1"
                      className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                )}

                <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                  {thumbnailImages.slice(1, 5).map((img, idx) => {
                    const actualIndex = images.indexOf(img);
                    const isLastImage = idx === 3;
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
                          <img src={img} alt={`Athreya ${actualIndex + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
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
                      <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">Athreya Gallery</div>
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
                          <img src={img} alt={`Athreya ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
                    <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Athreya Ayurvedic Centre</div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                      {images[lightboxImage] && (
                        <img
                          src={images[lightboxImage]}
                          alt={`Athreya ${lightboxImage + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                        aria-label="Close"
                      >
                        ✕
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

              {videos.length > 0 && (
                <div className="mb-12" id="videos">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Athreya</h2>
                    <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                      Experience the serene atmosphere and healing journey at Athreya through our video gallery.
                    </p>
                  </div>

                  <div className="relative max-w-4xl mx-auto">
                    <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                      <CardContent className="p-0">
                        <div className="aspect-video w-full relative">
                          <video
                            ref={centerGalleryVideoRef}
                            key={videos[selectedCenterVideo]}
                            src={videos[selectedCenterVideo]}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                      <button
                        onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                        aria-label="Previous video"
                      >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                      <button
                        onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                        className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                        aria-label="Next video"
                      >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                    </div>

                    <div className="flex md:hidden items-center justify-between mt-4 px-6">
                      <Button
                        onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                        className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                      >
                        Next
                      </Button>
                    </div>

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
                  </div>
                </div>
              )}

              {videos.length > 0 && (
                <div className="mb-12" id="videos">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Athreya</h2>
                    <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                      Experience the serene atmosphere and healing journey at Athreya through our video gallery.
                    </p>
                  </div>

                  <div className="relative max-w-4xl mx-auto">
                    <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                      <CardContent className="p-0">
                        <div className="aspect-video w-full relative">
                          <video
                            ref={centerGalleryVideoRef}
                            key={videos[selectedCenterVideo]}
                            src={videos[selectedCenterVideo]}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                      <button
                        onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                        aria-label="Previous video"
                      >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                      <button
                        onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                        className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                        aria-label="Next video"
                      >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                    </div>

                    <div className="flex md:hidden items-center justify-between mt-4 px-6">
                      <Button
                        onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                        className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                      >
                        Next
                      </Button>
                    </div>

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
                  </div>
                </div>
              )}

              {facilityImages.length > 0 && (
                <div className="mb-12" id="facilities">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
                    <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>
                      {facilitiesIntro}
                    </p>
                  </div>

                  <div className="max-w-7xl mx-auto relative mb-10">
                    <button
                      onClick={() => setCurrentFacilityImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                      className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                      aria-label="Previous facility image"
                      disabled={!facilityImages.length}
                    >
                      <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                    <button
                      onClick={() => setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length)}
                      className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                      aria-label="Next facility image"
                      disabled={!facilityImages.length}
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
                                <img
                                  src={image}
                                  alt={`Facility ${index + 1}`}
                                  className="w-full aspect-video object-cover rounded-lg"
                                />
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
                                <img
                                  src={image}
                                  alt={`Facility ${index + 1}`}
                                  className="w-full aspect-video object-cover rounded-lg"
                                />
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
              </div>

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
                    <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Athreya Ayurvedic Centre</div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={facilityImages[facilityLightboxImage]}
                        alt={`Facility ${facilityLightboxImage + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setFacilityLightboxOpen(false)}
                        className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                        aria-label="Close"
                      >
                        ✕
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
            </>
          ) : (
            <>
              {videos.length > 0 && (
                <div className="mb-12" id="videos">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Athreya</h2>
                    <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                      Experience the serene atmosphere and healing journey at Athreya through our video gallery.
                    </p>
                  </div>

                  <div className="relative max-w-4xl mx-auto">
                    <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                      <CardContent className="p-0">
                        <div className="aspect-video w-full relative">
                          <video
                            ref={centerGalleryVideoRef}
                            key={videos[selectedCenterVideo]}
                            src={videos[selectedCenterVideo]}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                      <button
                        onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                        aria-label="Previous video"
                      >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                      <button
                        onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                        className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                        aria-label="Next video"
                      >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                    </div>

                    <div className="flex md:hidden items-center justify-between mt-4 px-6">
                      <Button
                        onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                        className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                      >
                        Next
                      </Button>
                    </div>

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
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Mobile BROWSE Action (Bottom Left) - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Search size={18} className="-ml-1" />
          <span>BROWSE</span>
        </button>
      )}

      {/* Floating Quote Action (Bottom Right) */}
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

      {/* Desktop Vertical JUMP Button - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
          {/* BROWSE Button - Static Clean Version */}
          <button
            onClick={() => setIsJumpModalOpen(true)}
            className="bg-[#2F5B63] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
          >
            {/* Letters with search icon replacing 'O' */}
            <span className="drop-shadow-sm">B</span>
            <span className="drop-shadow-sm">R</span>
            <Search size={16} strokeWidth={3.5} className="drop-shadow-sm" />
            <span className="drop-shadow-sm">W</span>
            <span className="drop-shadow-sm">S</span>
            <span className="drop-shadow-sm">E</span>
          </button>
        </div>
      )}

      {/* JUMP Modal / Drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />

        {/* Drawer Content */}
        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Top Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          {/* Header Area */}
          <div className="p-4 pb-4 bg-[#2F5B63] text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">
                  Sections of Athreya
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
                "Directly navigate to any section on this page."
              </p>
            </div>
          </div>

          {/* List of Sections */}
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

                {/* Left Accent Bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>

          {/* Footer Branding */}
          <div className="p-4 text-center border-t border-primary/5 bg-[#F9F8F4]">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-primary/20" />
              <div className="w-2 h-2 rounded-full border border-primary/30" />
              <div className="w-8 h-[1px] bg-primary/20" />
            </div>
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] select-none">
              Authentic Ayurveda & Personalized Healing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
