import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import {
  MapPin,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Images,
  Video,
  Heart,
  Users,
  TrendingUp,
  Award,
  ShieldCheck,
  HeartPulse,
  Brain,
  Activity,
  Leaf,
  Stethoscope,
  Pill,
  Sparkles,
  Home,
  Utensils,
  Droplet,
  Phone,
  MessageCircle,
  MessageCircleHeart,
  Globe,
  Search,
  X,
  ClipboardList,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const idealFounderTeamStatic = {
  intro: "Your journey to profound well-being, guided by a team of authentic healing experts.",
  founderName: "Vaidyar J. Christudas",
  founderRole: "Founder & Owner",
  founderDescription:
    "Vaidyar J. Christudas is the visionary founder and the heart of our healing sanctuary. As a traditional Ayurvedic physician, he carries forward a profound healing legacy passed down from his renowned grandfather. His deep expertise in natural medicine and specialized Panchakarma for chronic conditions is the cornerstone of the authentic and compassionate care you receive here.",
  founderTags: [
    "Generational Wisdom",
    "Authentic Ayurveda",
    "Panchakarma Expert",
    "Founder's Legacy",
    "Chronic Disease Care",
    "Patient-Centric Philosophy",
  ],
  teamTitle: "Our Expert Healing Team",
  teamSubtitle: "Guided by Experience and Compassion",
  teamDescription:
    "Your healing journey is supported by a close-knit and dedicated team that works in synergy under the guidance of our founder. Our physicians, therapists, and support staff are committed to providing you with a seamless, effective, and deeply personal healing experience.",
  teamBullets: [
    "**Our Lead Physician:** Your care is overseen by our expert Ayurvedic Physician, **Dr. Sibi Raj**, who leads our clinical team and personally designs your treatment programs.",
    "**Our Skilled Therapists:** A dedicated team of 12 experienced male and female therapists who perform every authentic therapeutic procedure with precision and care.",
    "**Our Compassionate Support Team:** From our Marketing Manager, **Shaju Prasanth**, to our front office coordinator, **Jobin Cyrus**, our entire team is dedicated to ensuring your journey is smooth and supportive from start to finish.",
  ],
};

const idealTestimonialsStatic = [
  {
    id: 1,
    name: "Renata S.",
    location: "Prague, Czech Republic",
    condition: "",
    title: "The Most Authentically Healing Place I Have Found.",
    review:
      "After visiting five other resorts in Kerala, Ideal Ayurvedic Resort is the one I had been searching for. The traditional cottages, the lush gardens, and the genuine focus on treatment over aesthetics create an environment for true healing. My 14-night program for a chronic Vata-Pitta imbalance resolved my dry skin, sleep disruption, and anxiety.",
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    name: "Florian D.",
    location: "Zurich, Switzerland",
    condition: "",
    title: "This Treatment Gave Me Back My Visual Clarity.",
    review:
      "My ophthalmologist had confirmed early-stage macular degeneration with no real cure. I came to Ideal specifically for the Tharpanam eye treatment. After a 21-night program, the improvement was gradual but undeniable.",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: "Siobhan O.",
    location: "Cork, Ireland",
    condition: "",
    title: "My Rheumatologist Called It 'Managed' - Ideal Called It 'Curable'.",
    review:
      "For nine years, my rheumatoid arthritis was managed with medication. I came to Ideal, and the physician's program of Pizhichil, Navarakizhi, and a strict Pitta-pacifying diet was transformative.",
    rating: 5,
    verified: true,
  },
  {
    id: 4,
    name: "Anders L.",
    location: "Stockholm, Sweden",
    condition: "",
    title: "My Back Pain Was Chronic and My Hope Was Minimal.",
    review:
      "My lumbar disc disease had defined my life for six years. I came to Ideal specifically for their expertise in Kativasti. The 14-night program combined this with Abhyangam and Pizhichil.",
    rating: 5,
    verified: true,
  },
  {
    id: 5,
    name: "Dr. Geoffrey W.",
    location: "Edinburgh, Scotland",
    condition: "",
    title: "As a Retired GP, I Left With Professional Humility.",
    review:
      "I came here with professional skepticism and left with deep respect for the integrated Ayurvedic assessment. By day sixteen, I was sleeping eight consecutive hours.",
    rating: 5,
    verified: true,
  },
];

export default function IdealAyurvedicResort() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [videos, setVideos] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyIntro, setWhyIntro] = useState("");
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [soukyaStyleVideoIndex, setSoukyaStyleVideoIndex] = useState(0);
  const soukyaStyleVideoRef = useRef<HTMLVideoElement>(null);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const testimonialVideos = [
    "/Center Videos/Ideal Ayurvedic Resort/testimonies/testimonies 1.mp4",
    "/Center Videos/Ideal Ayurvedic Resort/testimonies/testimonies 2.mp4",
  ];
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ number: number; title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilityCards, setFacilityCards] = useState<{ title: string; bullets: string[] }[]>([]);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [founderIntro, setFounderIntro] = useState(idealFounderTeamStatic.intro);
  const [founderName, setFounderName] = useState(idealFounderTeamStatic.founderName);
  const [founderRole, setFounderRole] = useState(idealFounderTeamStatic.founderRole);
  const [founderDescription, setFounderDescription] = useState(idealFounderTeamStatic.founderDescription);
  const [founderTags, setFounderTags] = useState<string[]>(idealFounderTeamStatic.founderTags);
  const [teamTitle, setTeamTitle] = useState(idealFounderTeamStatic.teamTitle);
  const [teamSubtitle, setTeamSubtitle] = useState(idealFounderTeamStatic.teamSubtitle);
  const [teamDescription, setTeamDescription] = useState(idealFounderTeamStatic.teamDescription);
  const [teamBullets, setTeamBullets] = useState<string[]>(idealFounderTeamStatic.teamBullets);
  const [testimonials, setTestimonials] = useState<{ id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[]>(idealTestimonialsStatic);
  const [currentReview, setCurrentReview] = useState(0);
  const isReviewAutoPlaying = true;
  const [currentAward, setCurrentAward] = useState(0);
  const [maxAwardIndex, setMaxAwardIndex] = useState(0);
  const isAwardAutoPlaying = true;
  const [insuranceIntro, setInsuranceIntro] = useState("");
  const [insuranceBullets, setInsuranceBullets] = useState<string[]>([]);
  const [paymentBullets, setPaymentBullets] = useState<string[]>([]);
  const [internationalText, setInternationalText] = useState("");
  const [faqItems, setFaqItems] = useState<{ question: string; answer: string }[]>([]);
  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const awards = [
    {
      image: "/Center Images/Ideal Ayurvedic Resort/Awards/Award 1 (NABH).jpg",
      title: "NABH Accredited Care",
      description: "Certified for high standards in patient safety, quality systems, and clinical excellence.",
    },
    {
      image: "/Center Images/Ideal Ayurvedic Resort/Awards/Award 2 (ISO ISO Certification.png",
      title: "ISO Certified Operations",
      description: "Recognized for structured quality management and consistent service delivery standards.",
    },
    {
      image: "/Center Images/Ideal Ayurvedic Resort/Awards/Award 3 (Tripadvisor Travelers' Choice Award).png",
      title: "Tripadvisor Travelers' Choice 2025",
      description: "Awarded based on strong guest satisfaction and consistently positive traveler reviews.",
    },
    {
      image: "/Center Images/Ideal Ayurvedic Resort/Awards/Award 4 (Green Leaf Certification).jfif",
      title: "Kerala Green Leaf Certification",
      description: "State-level recognition for authentic Ayurveda facilities and treatment excellence.",
    },
  ];

  const thumbnailIndices = [0, 1, 5, 11, 19, 29];
  const thumbnailImages = thumbnailIndices.map((idx) => images[idx]).filter(Boolean);
  const videoPosters = [
    "/Center Images/Ideal Ayurvedic Resort/Photo Gallery/1.jpg",
    "/Center Images/Ideal Ayurvedic Resort/Photo Gallery/10.jpg",
    "/Center Images/Ideal Ayurvedic Resort/Photo Gallery/15.jpg",
  ];
  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Ideal" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment Info" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
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

  // Add this custom renderer for bold text
  const renderInlineBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const sanitizeForDisplay = (text: string) => {
    if (!text) return "";
    if (/<!doctype html|<html|@react-refresh|injectIntoGlobalHook|<script/i.test(text)) {
      return "";
    }
    return text;
  };

  useEffect(() => {
    // Clear stale UI content before fresh load.
    setFounderDescription("");
    setTeamDescription("");
    setTestimonials([]);

    fetch(encodeURI("/Center Images/Ideal Ayurvedic Resort/Photo Gallery/Photo Gallery Links.txt"))
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
        setImages(lines);
        setSelectedImage(0);
      })
      .catch((err) => console.error("Error loading Ideal photo gallery:", err));

    fetch(encodeURI("/Center Videos/Ideal Ayurvedic Resort/Video Gallery Links.txt"))
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
        setVideos(lines);
        setSelectedVideo(0);
        setSoukyaStyleVideoIndex(0);
      })
      .catch((err) => console.error("Error loading Ideal video gallery:", err));

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Wellness Programs.txt")
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
        setWellnessPrograms(items);
      })
      .catch((err) => console.error("Error loading Ideal wellness content:", err));

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Medical Treatment Programs.txt")
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
      .catch((err) => console.error("Error loading Ideal medical content:", err));

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Why Choose Ideal Ayurvedic Resort.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;

        lines.forEach((line) => {
          if (line.startsWith("### ")) return;
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            return;
          }
          if (line.startsWith("*")) {
            if (current) current.bullets.push(line.replace(/^\*+\s*/, ""));
            return;
          }
          if (!current) {
            intro = intro ? `${intro} ${line}` : line;
          } else {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        });

        if (current) items.push(current);
        setWhyIntro(intro);
        setWhyItems(items);
      })
      .catch((err) => console.error("Error loading Ideal why choose content:", err));

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
        let intro = "";
        const steps: { number: number; title: string; description: string; bullets: string[] }[] = [];
        let current: { number: number; title: string; description: string; bullets: string[] } | null = null;

        for (const line of lines) {
          if (line.startsWith("### ")) continue;
          if (line.match(/^\d+\./)) {
            if (current) steps.push(current);
            const title = line.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "").trim();
            const number = steps.length + 1;
            current = { number, title, description: "", bullets: [] };
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) steps.push(current);
            const title = line.slice(2, -2).trim();
            const number = steps.length + 1;
            current = { number, title, description: "", bullets: [] };
            continue;
          }
          if (line.startsWith("*")) {
            if (current) current.bullets.push(line.replace(/^\*+\s*/, ""));
            continue;
          }
          if (!current) {
            intro = intro ? `${intro} ${line}` : line;
          } else {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }
        if (current) steps.push(current);
        setTreatmentIntro(intro);
        setTreatmentSteps(steps);
      })
      .catch((err) => console.error("Error loading Ideal treatment content:", err));

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const cards: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        let inCards = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inCards = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) cards.push(current);
            current = { title: line.slice(2, -2), bullets: [] };
            inCards = true;
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
            continue;
          }
          if (!inCards) {
            intro = intro ? `${intro} ${line}` : line;
          }
        }
        if (current) cards.push(current);
        setFacilitiesIntro(intro);
        setFacilityCards(cards);
      })
      .catch((err) => console.error("Error loading Ideal facilities content:", err));

    fetch(encodeURI("/Center Images/Ideal Ayurvedic Resort/Facilities/Facilities Links.txt"))
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
        setFacilityImages(lines);
        setCurrentFacilityImage(0);
      })
      .catch((err) => console.error("Error loading Ideal facilities images:", err));
    // Keep founder content stable (Agni-style behavior).
    setFounderIntro(idealFounderTeamStatic.intro);
    setFounderName(idealFounderTeamStatic.founderName);
    setFounderRole(idealFounderTeamStatic.founderRole);
    setFounderDescription(idealFounderTeamStatic.founderDescription);
    setFounderTags(idealFounderTeamStatic.founderTags);
    setTeamTitle(idealFounderTeamStatic.teamTitle);
    setTeamSubtitle(idealFounderTeamStatic.teamSubtitle);
    setTeamDescription(idealFounderTeamStatic.teamDescription);
    setTeamBullets(idealFounderTeamStatic.teamBullets);

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[] = [];
        let current: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean } | null = null;
        let idCounter = 1;

        for (const line of lines) {
          if (!line || line.startsWith("###")) continue;

          const nameMatch = line.match(/^\*\*(.+?)\*\*$/);
          if (nameMatch && !line.includes("Rating:")) {
            if (current) items.push(current);
            const full = nameMatch[1];
            const parts = full.split(" - ");
            const name = (parts[0] || "").trim();
            const location = parts.slice(1).join(" - ").trim();
            current = {
              id: idCounter++,
              name,
              location,
              condition: "",
              title: "",
              review: "",
              rating: 5,
              verified: true,
            };
            continue;
          }

          if (current && line.startsWith('*"') && line.endsWith('"*')) {
            current.title = line.slice(2, -2).trim();
            continue;
          }

          if (current && line.includes("Rating:")) {
            const ratingMatch = line.match(/\((\d+)\/5\)/);
            if (ratingMatch) current.rating = parseInt(ratingMatch[1], 10);
            continue;
          }

          if (current) {
            current.review = current.review ? `${current.review} ${line}` : line;
          }
        }

        if (current) items.push(current);

        if (items.length > 0) {
          setTestimonials(items);
        } else {
          setTestimonials(idealTestimonialsStatic);
        }
        setCurrentReview(0);
      })
      .catch((err) => {
        console.error("Error loading Ideal reviews:", err);
        setTestimonials(idealTestimonialsStatic);
        setCurrentReview(0);
      });

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Insurance & Payment Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const insurance: string[] = [];
        const payment: string[] = [];
        let international = "";
        let section: "intro" | "insurance" | "payment" | "international" = "intro";
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("insurance")) { section = "insurance"; continue; }
            if (t.includes("payment")) { section = "payment"; continue; }
            if (t.includes("international")) { section = "international"; continue; }
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "insurance") insurance.push(bullet);
            if (section === "payment") payment.push(bullet);
            continue;
          }
          if (section === "intro") {
            intro = intro ? `${intro} ${line}` : line;
          } else if (section === "international") {
            international = international ? `${international} ${line}` : line;
          }
        }
        setInsuranceIntro(intro);
        setInsuranceBullets(insurance);
        setPaymentBullets(payment);
        setInternationalText(international);
      })
      .catch((err) => console.error("Error loading Ideal insurance/payment:", err));

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Frequently Asked Questions.txt")
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
      .catch((err) => console.error("Error loading Ideal FAQs:", err));

    fetch("/content/Top Centers/Ideal Ayurvedic Resort/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const address: string[] = [];
        const distances: string[] = [];
        let transport = "";
        let section: "none" | "address" | "distance" | "transport" = "none";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("address")) { section = "address"; continue; }
            if (t.includes("distance")) { section = "distance"; continue; }
            if (t.includes("transport")) { section = "transport"; continue; }
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "distance") distances.push(bullet);
            continue;
          }
          if (section === "address") {
            address.push(line);
          } else if (section === "transport") {
            transport = transport ? `${transport} ${line}` : line;
          }
        }

        setContactAddress(address);
        setContactDistances(distances);
        setTransportText(transport);
      })
      .catch((err) => console.error("Error loading Ideal contact info:", err));
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || images.length === 0) return;
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
    if (!lightboxOpen || !images.length) return;
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
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const updateMaxAwardIndex = () => {
      const isMobile = window.innerWidth < 768;
      const visibleCards = isMobile ? 1 : 3;
      const newMax = Math.max(0, awards.length - visibleCards);
      setMaxAwardIndex(newMax);
      setCurrentAward((prev) => (prev > newMax ? 0 : prev));
    };
    updateMaxAwardIndex();
    window.addEventListener("resize", updateMaxAwardIndex);
    return () => window.removeEventListener("resize", updateMaxAwardIndex);
  }, [awards.length]);

  useEffect(() => {
    if (!isAwardAutoPlaying || maxAwardIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAwardAutoPlaying, maxAwardIndex]);

  useEffect(() => {
    if (facilityImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [facilityImages.length]);

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

  const goToPreviousReview = () => {
    if (testimonials.length === 0) return;
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextReview = () => {
    if (testimonials.length === 0) return;
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const selectReview = (index: number) => {
    setCurrentReview(index);
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  );

  const goToPreviousAward = () => {
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

  const programIconForTitle = (title: string, colorClass: string = "text-green-600") => {
    const t = title.toLowerCase();
    if (t.includes("couple")) return <Users className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("weekend")) return <Calendar className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("digital")) return <Search className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("women")) return <Heart className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("introduction")) return <ClipboardList className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("yoga") || t.includes("harmony")) return <Activity className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("beauty") || t.includes("skin")) return <Sparkles className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("immunity")) return <ShieldCheck className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("aging") || t.includes("vitality") || t.includes("rejuvenation")) return <HeartPulse className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("stress") || t.includes("anxiety") || t.includes("mind")) return <Brain className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("weight") || t.includes("metabolism")) return <TrendingUp className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("panchakarma") || t.includes("detox") || t.includes("purification")) return <Droplet className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("pain") || t.includes("injury") || t.includes("joint") || t.includes("spinal")) return <Activity className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("diet") || t.includes("nutrition") || t.includes("cuisine") || t.includes("gut") || t.includes("digestive")) return <Leaf className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("therapy") || t.includes("treatment") || t.includes("care")) return <Stethoscope className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    if (t.includes("herbal") || t.includes("medicine") || t.includes("diabetes")) return <Pill className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
    return <Sparkles className={`h-5 w-5 md:h-6 md:w-6 ${colorClass}`} />;
  };

  const whyIconForTitle = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("certified") || t.includes("authentic") || t.includes("green leaf")) return <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (t.includes("hillside") || t.includes("sanctuary")) return <Home className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (t.includes("beach") || t.includes("near")) return <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (t.includes("doctor") || t.includes("physician") || t.includes("expert") || t.includes("team")) return <Stethoscope className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (t.includes("trust") || t.includes("satisfaction") || t.includes("legacy") || t.includes("award")) return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (t.includes("grove") || t.includes("coconut") || t.includes("lush")) return <Leaf className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (t.includes("cuisine") || t.includes("home-style") || t.includes("food")) return <Utensils className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (t.includes("integrated") || t.includes("holistic")) return <HeartPulse className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  };

  const treatmentIconForTitle = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("consultation") || t.includes("assessment") || t.includes("evaluation")) return <Stethoscope className="h-6 w-6 text-primary" />;
    if (t.includes("plan") || t.includes("path") || t.includes("design")) return <ClipboardList className="h-6 w-6 text-primary" />;
    if (t.includes("therapy") || t.includes("treatment") || t.includes("panchakarma")) return <ShieldCheck className="h-6 w-6 text-primary" />;
    if (t.includes("cuisine") || t.includes("diet") || t.includes("nutrition")) return <Utensils className="h-6 w-6 text-primary" />;
    if (t.includes("review") || t.includes("integrated") || t.includes("doctor")) return <MessageCircleHeart className="h-6 w-6 text-primary" />;
    if (t.includes("departure") || t.includes("lifestyle") || t.includes("empowered")) return <Sparkles className="h-6 w-6 text-primary" />;
    if (t.includes("yoga") || t.includes("meditation") || t.includes("mind")) return <Brain className="h-6 w-6 text-primary" />;
    return <Heart className="h-6 w-6 text-primary" />;
  };

  const getFacilityIcon = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("room") || s.includes("accommodation") || s.includes("stay") || s.includes("cottage"))
      return <Home className="h-7 w-7 text-white" />;
    if (s.includes("restaurant") || s.includes("dining") || s.includes("food") || s.includes("cuisine"))
      return <Utensils className="h-7 w-7 text-white" />;
    if (s.includes("yoga") || s.includes("meditation") || s.includes("hall"))
      return <Sparkles className="h-7 w-7 text-white" />;
    if (s.includes("pool") || s.includes("swimming"))
      return <Droplet className="h-7 w-7 text-white" />;
    if (s.includes("garden") || s.includes("grove") || s.includes("nature"))
      return <Leaf className="h-7 w-7 text-white" />;
    if (s.includes("beach"))
      return <Activity className="h-7 w-7 text-white" />;
    if (s.includes("consultation") || s.includes("doctor"))
      return <Stethoscope className="h-7 w-7 text-white" />;
    if (s.includes("amenities") || s.includes("services"))
      return <Users className="h-7 w-7 text-white" />;
    return <Heart className="h-7 w-7 text-white" />;
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Ideal Ayurvedic Resort</h1>
                <p className="text-xl mb-4 opacity-90">Authentic Ayurveda by the Kovalam Coast</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Kovalam, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.5</span>
                  <span className="opacity-90">(2100+)</span>
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

      {/* Photo/Video Gallery Section */}
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
            images.length ? (
              <>
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`Ideal Center ${selectedImage + 1}`}
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
                  <div
                    className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                    onClick={() => {
                      const idx = images.indexOf(thumbnailImages[0]);
                      if (idx >= 0) {
                        setSelectedImage(idx);
                        setLightboxImage(idx);
                        setLightboxOpen(true);
                      }
                    }}
                  >
                    <img
                      src={thumbnailImages[0]}
                      alt="Ideal 1"
                      className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {thumbnailImages.slice(1, 5).map((img, idx) => {
                      const actualIndex = images.indexOf(img);
                      const isLastImage = idx === 3;
                      return (
                        <div
                          key={idx}
                          className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                          onClick={() => {
                            if (actualIndex >= 0) {
                              setSelectedImage(actualIndex);
                              setLightboxImage(actualIndex);
                              setLightboxOpen(true);
                            }
                          }}
                        >
                          <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                            <img
                              src={img}
                              alt={`Ideal ${actualIndex + 1}`}
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
                          Ideal Ayurvedic Resort Gallery
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
                            <img src={img} alt={`Ideal ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
                      <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Ideal Ayurvedic Resort</div>
                      <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                        <img
                          src={images[lightboxImage]}
                          alt={`Ideal ${lightboxImage + 1}`}
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
              </>
            ) : (
              <div className="rounded-lg border border-border bg-background/80 p-6 text-center text-muted-foreground">
                Loading photo gallery...
              </div>
            )
          ) : (
            <>
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video mb-8">
                {videos.length ? (
                  <>
                    <video key={selectedVideo} controls controlsList="nodownload" preload="metadata" className="w-full h-full object-cover">
                      <source src={videos[selectedVideo]} type="video/mp4" />
                    </video>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      Video {selectedVideo + 1} / {videos.length}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-white/80 text-sm">No videos available.</div>
                )}
              </div>
              {videos.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {videos.map((video, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedVideo(idx)}
                      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-2 ring-primary" : ""}`}
                    >
                      <video muted className="w-full h-full object-cover">
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
              <MarkdownContent
                contentPath="/content/Top Centers/Ideal Ayurvedic Resort/Main content.txt"
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
        </div>
      </div>

      {/* Wellness Programs */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full" id="wellness">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 rounded-3xl p-6 md:p-6 lg:p-12" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">2100+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.5/5</div>
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
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Wellness Programs</h1>
              <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto px-4" style={{ color: "#7F543D" }}>
                {wellnessIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wellnessPrograms.map((p, idx) => (
                <AccordionItem key={idx} value={`ideal-well-${idx}`} className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-green-700">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-700">
                        {programIconForTitle(p.title)}
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
        </div>
      </div>

      {/* Medical Programs */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full" id="medical">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
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
                <AccordionItem key={idx} value={`ideal-med-${idx}`} className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-blue-700">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-700">
                        {programIconForTitle(p.title, "text-blue-600")}
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
        </div>
      </div>

      {/* Video Gallery (Soukya Style) */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full" id="videos">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Video Gallery of Ideal Ayurvedic Resort
              </h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene coastal atmosphere and authentic healing journey at Ideal Ayurvedic Resort through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative bg-black">
                    {videos[soukyaStyleVideoIndex] && (
                      <video
                        ref={soukyaStyleVideoRef}
                        key={videos[soukyaStyleVideoIndex]}
                        src={videos[soukyaStyleVideoIndex]}
                        poster={videoPosters[soukyaStyleVideoIndex % videoPosters.length]}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        muted
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
                      className={`transition-all ${index === soukyaStyleVideoIndex ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Ideal Ayurvedic Resort */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full" id="why-choose">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
                Why Choose Ideal Ayurvedic Resort for Your Healing Journey
              </h2>
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
        </div>
      </div>

      {/* Testimonials of Ideal Ayurvedic Resort */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full" id="testimonial-videos">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Ideal Ayurvedic Resort
              </h2>
              <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
              <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
                Watch inspiring stories of recovery and wellness from our guests.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative bg-black">
                    {testimonialVideos[selectedTestimonialVideo] && (
                      <video
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={testimonialVideos[selectedTestimonialVideo]}
                        className="w-full h-full object-cover"
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
                      className={`transition-all ${index === selectedTestimonialVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Process & Patient Journey */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full" id="process">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Treatment Process & Patient Journey
              </h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
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
                      <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>{s.description}</p>
                      {s.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
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
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/Ideal Ayurvedic Resort/CTA mid.jpg"
                    alt="Ideal Ayurvedic Resort"
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
                </div>
                <div>
                  <img
                    src="/Center Images/Ideal Ayurvedic Resort/CTA mid.jpg"
                    alt="Ideal Ayurvedic Resort"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Amenities */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
        <div className="max-w-6xl mx-auto mt-6">
          <div className="mb-12" id="facilities">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
              <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>{facilitiesIntro}</p>
            </div>

            <div className="max-w-7xl mx-auto relative mb-10">
              <button
                onClick={() => setCurrentFacilityImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous facility image"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={() => setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length)}
                className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next facility image"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="overflow-hidden px-10 md:px-12">
                <div className="md:hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentFacilityImage * 100}%)` }}>
                    {facilityImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}>
                          <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${Math.min(currentFacilityImage, Math.max(facilityImages.length - 5, 0)) * 20}%)` }}>
                    {facilityImages.map((image, index) => (
                      <div key={index} className="w-1/5 flex-shrink-0 px-2">
                        <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}>
                          <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {facilityImages.map((_, index) => (
                  <button key={index} onClick={() => setCurrentFacilityImage(index)} className={`transition-all ${index === currentFacilityImage ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`} aria-label={`Go to facility image ${index + 1}`} />
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
                      <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">
                        {card.title}
                      </h3>
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
      </div>

      {/* Founder & Team Info */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
        <div className="max-w-6xl mx-auto mt-6">
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h1>
              {founderIntro && (
                <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>{founderIntro}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                <CardContent className="p-4 md:p-8 h-full md:h-[480px] flex flex-col">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img src="/Center Images/Ideal Ayurvedic Resort/Founder/Founder.jpg" alt={founderName} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founderName || "Founder"}</h3>
                      {founderRole && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>{founderRole}</p>
                      )}
                    </div>
                  </div>
                  {founderDescription && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{founderDescription}</p>
                  )}
                  {founderTags.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-primary/10">
                      <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {founderTags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">{tag}</span>
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
                      <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                          <img src="/Center Images/Ideal Ayurvedic Resort/Founder/team.jpg" alt={teamTitle} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug break-words whitespace-normal">{teamTitle || "Team"}</h3>
                        {teamSubtitle && (
                          <p className="text-xs md:text-sm font-semibold" style={{ color: '#7F543D' }}>{teamSubtitle}</p>
                        )}
                      </div>
                    </div>
                    {teamDescription && (
                      <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{teamDescription}</p>
                    )}
                    <ul className="space-y-2.5">
                      {teamBullets.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                          <span className="text-primary mt-1">&bull;</span>
                          <span>{renderInlineBold(it)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {testimonials.length > 0 && (
            <div className="mb-12" id="reviews">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                  Patient Stories & Reviews
                </h2>
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
                          {testimonials[currentReview].title}
                        </h3>
                        <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                          "{testimonials[currentReview].review}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                          {testimonials[currentReview].name.charAt(0)}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base md:text-xl font-semibold text-primary">
                              {testimonials[currentReview].name}
                            </h4>
                            {testimonials[currentReview].verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                                &#10003; Verified
                              </span>
                            )}
                          </div>
                          <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                            {testimonials[currentReview].location}
                            {testimonials[currentReview].condition ? ` - ${testimonials[currentReview].condition}` : ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(testimonials[currentReview].rating)}
                        <span className="text-xs md:text-sm font-semibold text-primary">
                          {testimonials[currentReview].rating}.0
                        </span>
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
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectReview(idx)}
                    className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"}`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Awards & Media */}
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
        <div className="max-w-6xl mx-auto mt-6">
          <div className="mb-12" id="awards">
            <div className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards and Media</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                Recognition of Ideal Ayurvedic Resort's excellence in authentic Ayurveda, patient safety, and guest trust.
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
                            <img src={award.image} alt={award.title} className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110" />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">{award.title}</h4>
                            <p className="text-sm italic line-clamp-3" style={{ color: "#7F543D" }}>"{award.description}"</p>
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
                            <img src={award.image} alt={award.title} className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110" />
                          </div>
                          <div className="text-center">
                            <h4 className="text-xl font-bold text-primary mb-3">{award.title}</h4>
                            <p className="text-base italic" style={{ color: "#7F543D" }}>"{award.description}"</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {maxAwardIndex > 0 && (
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

              {maxAwardIndex > 0 && (
                <div className="flex justify-center gap-2 mt-8">
                  {awards.slice(0, maxAwardIndex + 1).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentAward(i); }}
                      className={`transition-all duration-300 ${i === currentAward ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                      aria-label={`Go to award ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {insuranceBullets.length > 0 && (
        <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
          <div className="max-w-6xl mx-auto mt-6">
            <div className="mb-12" id="insurance">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Info</h2>
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>{insuranceIntro}</p>
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
                        <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>{internationalText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      )}

      {faqItems.length > 0 && (
        <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
          <div className="max-w-6xl mx-auto mt-6">
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
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                      <span className="text-lg font-semibold text-primary text-left">{it.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 bg-white">
                      <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>{it.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}

      {contactAddress.length > 0 && (
        <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
          <div className="max-w-6xl mx-auto mt-6">
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
                          {contactAddress.filter((l) => l.trim() !== "").map((l, i) => (
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
                  </div>

                  <div className="md:-mt-16 self-start">
                    <div className="rounded-2xl bg-white/70 p-1 shadow-lg border-2 border-primary/20 overflow-hidden">
                      <div className="rounded-xl overflow-hidden">
                        <div className="relative w-full aspect-[800/600]">
                          <iframe
                            title="Ideal Ayurvedic Resort Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.4199105728344!2d77.0136713729872!3d8.360287199102101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05af549a254109%3A0xd7d412d6426789bd!2sIdeal%20Ayurvedic%20Resort%20Kerala%2C%20Kovalam%2C%20Trivandrum!5e0!3m2!1sen!2sin!4v1775649121606!5m2!1sen!2sin"
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
                          <p className="text-sm md:text-base leading-relaxed text-justify md:text-left md:pr-4" style={{ color: "#7F543D" }}>
                            {transportText}
                          </p>
                        </div>
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
                      src="/Center Images/Ideal Ayurvedic Resort/CTA bottom.jpg"
                      alt="Ideal Ayurvedic Resort"
                      className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">
                      Begin Your Holistic Healing Journey at Ideal Ayurvedic Resort
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
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                      Begin Your <span className="text-white/90">Holistic Healing Journey</span> at{" "}
                      <span className="text-white underline decoration-white/20 underline-offset-8">
                        Ideal Ayurvedic Resort
                      </span>
                    </h2>
                    <div className="flex flex-wrap gap-5">
                      <Button size="lg" className="rounded-full px-6 bg-white text-primary hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
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
                    <div className="mt-8 flex items-center gap-2 text-white/90">
                      <Phone className="h-5 w-5 text-red-400" />
                      <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/Center Images/Ideal Ayurvedic Resort/CTA bottom.jpg"
                      alt="Ideal Ayurvedic Resort"
                      className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                </div>
              </div>
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
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">
                  Sections of Ideal
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
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] select-none">
              Holistic Healing Sanctuary
            </p>
          </div>
        </div>
      </div>

      {facilityLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
          <button onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90" aria-label="Previous">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90" aria-label="Next">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Ideal Ayurvedic Resort</div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img src={facilityImages[facilityLightboxImage]} alt={`Facility ${facilityLightboxImage + 1}`} className="absolute inset-0 w-full h-full object-cover" />
              <button onClick={() => setFacilityLightboxOpen(false)} className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow" aria-label="Close">X</button>
            </div>
            <div className="flex md:hidden items-center justify-between mt-4">
              <Button onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)} className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5">
                Previous
              </Button>
              <Button onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)} className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5">
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}


