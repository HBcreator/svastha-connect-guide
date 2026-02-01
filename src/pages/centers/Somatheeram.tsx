import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MarkdownContent from "@/components/MarkdownContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin, Phone, Mail, Globe, Star, ChevronLeft, ChevronRight,
  Award, Users, Heart, Leaf, Sparkles, ShieldCheck,
  ClipboardList, Stethoscope, Utensils, FileSearch, Images,
  Droplet, TreePine, TestTube2, MessageCircleHeart, Video, TrendingUp, MessageCircle, Brain, Activity, Check, Pill, HeartPulse, Wind, UserCheck, Home, BookOpen, ShoppingBag, CreditCard, Quote, Calendar
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Somatheeram() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [founder, setFounder] = useState<{ name: string; role: string; description: string } | null>(null);
  const [founderExpertise, setFounderExpertise] = useState<string[]>([]);
  const [teamIntro, setTeamIntro] = useState("");
  const [teamGroups, setTeamGroups] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [isTeamAutoPlaying, setIsTeamAutoPlaying] = useState(true);

  const [showVideoGalleryTop, setShowVideoGalleryTop] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactPhones, setContactPhones] = useState<string[]>([]);
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");

  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyChooseIntro, setWhyChooseIntro] = useState("");
  const [whyChooseItems, setWhyChooseItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilitiesItems, setFacilitiesItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);

  const [selectedImage, setSelectedImage] = useState(0);
  const isAutoPlaying = true;
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [galleryLightboxOpen, setGalleryLightboxOpen] = useState(false);
  const [galleryLightboxImage, setGalleryLightboxImage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const galleryVideoRef = useRef<HTMLVideoElement>(null);
  const [patientReviews, setPatientReviews] = useState<{ name: string, country: string, condition: string, date: string, rating: number, photo: string, verified: boolean, quote: string }[]>([]);

  // Video Gallery Intersection Observer for Autoplay/Pause
  useEffect(() => {
    const videoElement = galleryVideoRef.current;
    if (!videoElement) return;

    // Set volume to 50%
    videoElement.volume = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Browsers often block autoplay with sound. We attempt to play unmuted first.
            videoElement.play().catch(error => {
              console.log("Autoplay with sound prevented:", error);
              // Fallback: Mute and play if unmuted play is blocked
              videoElement.muted = true;
              videoElement.play();
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // 50% visibility
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [selectedVideo]);

  const heroImages = [
    "/Center Images/somatheeram/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Somatheeram-03.jpg",
    "/Center Images/somatheeram/Somatheeram-04.jpg",
    "/Center Images/somatheeram/Somatheeram-05.jpg",
  ];

  const images = [
    "/Center Images/somatheeram/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Somatheeram-03.jpg",
    "/Center Images/somatheeram/Somatheeram-04.jpg",
    "/Center Images/somatheeram/Somatheeram-05.jpg",
    "/Center Images/somatheeram/Somatheeram-06.jpg",
    "/Center Images/somatheeram/Somatheeram-07.jpg",
    "/Center Images/somatheeram/Somatheeram-08.jpg",
    "/Center Images/somatheeram/Somatheeram-09.jpg",
    "/Center Images/somatheeram/Somatheeram-10.jpg",
    "/Center Images/somatheeram/Somatheeram-11.jpg",
    "/Center Images/somatheeram/Somatheeram-12.jpg",
    "/Center Images/somatheeram/Somatheeram-13.jpg",
    "/Center Images/somatheeram/Somatheeram-14.jpg",
    "/Center Images/somatheeram/Somatheeram-15.jpg",
    "/Center Images/somatheeram/Somatheeram-16.jpg",
    "/Center Images/somatheeram/Somatheeram-17.jpg",
    "/Center Images/somatheeram/Somatheeram-18.jpg",
    "/Center Images/somatheeram/Somatheeram-19.jpg",
    "/Center Images/somatheeram/Somatheeram-20.jpg",
    "/Center Images/somatheeram/Somatheeram-21.jpg",
    "/Center Images/somatheeram/Somatheeram-22.jpg",
    "/Center Images/somatheeram/Somatheeram-23.jpg",
    "/Center Images/somatheeram/Somatheeram-24.jpg",
    "/Center Images/somatheeram/Somatheeram-25.jpg",
    "/Center Images/somatheeram/Somatheeram-26.jpg",
    "/Center Images/somatheeram/Somatheeram-27.jpg",
    "/Center Images/somatheeram/Somatheeram-28.jpg",
    "/Center Images/somatheeram/Somatheeram-29.jpg",
    "/Center Images/somatheeram/Somatheeram-30.jpg",
    "/Center Images/somatheeram/Somatheeram-31.jpg",
  ];

  const thumbnailImages = [
    "/Center Images/somatheeram/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Somatheeram-12.jpg",
    "/Center Images/somatheeram/Somatheeram-07.jpg",
    "/Center Images/somatheeram/Somatheeram-31.jpg",
    "/Center Images/somatheeram/Somatheeram-24.jpg",
  ];

  const videos = [
    "/Center Videos/Somatheeram/Somatheeram-01.mp4",
    "/Center Videos/Somatheeram/Somatheeram-02.mp4",
    "/Center Videos/Somatheeram/Somatheeram-03.mp4",
  ];

  const facilityImages = [
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-03.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-04.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-05.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-06.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-07.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-08.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-09.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-10.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-11.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-12.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-13.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-14.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-15.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-16.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-17.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-18.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-19.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-20.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-21.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-22.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-23.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-24.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-25.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-26.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-27.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-28.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-29.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-30.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-31.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-32.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-33.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-34.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-35.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-36.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-37.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-38.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-39.jpg",
  ];

  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);

  const awards = [
    {
      title: "Best Ayurvedic Centre Award",
      description: "Recognized multiple times by the Government of Kerala for excellence in authentic Ayurvedic treatments and patient care.",
      image: "/Center Images/somatheeram/Awards/Lay_BestAyurvedic.png"
    },
    {
      title: "National Tourism Award",
      description: "Government of India's prestigious recognition for pioneering Ayurveda wellness tourism.",
      image: "/Center Images/somatheeram/Awards/Lay_NationalTourism.png"
    },
    {
      title: "Green Leaf Certification",
      description: "The highest classification for Ayurvedic centers by the Department of Tourism, Government of Kerala.",
      image: "/Center Images/somatheeram/Awards/Lay_GreenLeaf.png"
    },
    {
      title: "Best Food Award",
      description: "Honored for excellence in Ayurvedic vegetarian cuisine that supports healing and well-being.",
      image: "/Center Images/somatheeram/Awards/Lay_Food_Award.png"
    },
    {
      title: "Kerala State Award",
      description: "Multiple-time winner for maintaining the highest standards in clinical expertise.",
      image: "/Center Images/somatheeram/Awards/Lay_Kerala_Award.png"
    }
  ];

  const [maxAwardIndex, setMaxAwardIndex] = useState(awards.length - 1);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newMax = isMobile ? awards.length - 1 : Math.max(0, awards.length - 3);
      setMaxAwardIndex(newMax);
      setCurrentAward(prev => prev > newMax ? 0 : prev);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [awards.length]);

  useEffect(() => {
    if (!isAwardAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [isAwardAutoPlaying, maxAwardIndex]);

  const goToPreviousAward = () => {
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    fetch("/content/Top Centers/somatheeram/patient reviews.txt")
      .then((r) => r.text())
      .then((t) => {
        const lines = t.split(/\r?\n/).map((l) => l.trim());
        const reviews: { name: string, location: string, title: string, review: string, rating: number, photo: string, verified: boolean }[] = [];
        let current: any = null;

        for (const line of lines) {
          if (!line || line.startsWith("### ")) continue;

          // Header: **Name - Location**
          const nameMatch = /^\*\*(.+?)\s*-\s*(.+?)\*\*$/.exec(line);
          if (nameMatch) {
            if (current) reviews.push(current);
            current = {
              name: nameMatch[1],
              location: nameMatch[2],
              title: "",
              review: "",
              rating: 5,
              photo: `https://i.pravatar.cc/120?img=${(reviews.length % 70) + 1}`,
              verified: true
            };
            continue;
          }

          if (!current) continue;

          // Title: *"Title"*
          const titleMatch = /^\*"(.+?)"\*$/.exec(line);
          if (titleMatch) {
            current.title = titleMatch[1];
            continue;
          }

          // Rating: **Rating: ... (5/5)**
          const ratingMatch = /Rating:.*?\((\d)\/5\)/.exec(line);
          if (ratingMatch) {
            current.rating = parseInt(ratingMatch[1], 10);
            continue;
          }

          // Review Body (Text paragraphs or bullets)
          // Avoid adding the rating line itself to the body if the regex above didn't catch it perfectly
          if (!line.includes("Rating:")) {
            current.review += (current.review ? "\n\n" : "") + line.replace(/^\*+\s*/, "• ");
          }
        }

        if (current) reviews.push(current);
        setPatientReviews(reviews as any);
      })
      .catch((err) => console.error("Error loading Somatheeram patient reviews:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/somatheeram/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const address: string[] = [];
        const phones: string[] = [];
        const distances: string[] = [];
        let transport = "";

        let section: "" | "address" | "phone" | "distances" | "transport" = "";
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const title = line.slice(2, -2).toLowerCase();
            if (title.includes("address")) section = "address";
            else if (title.includes("phone")) section = "phone";
            else if (title.includes("distance")) section = "distances";
            else if (title.includes("transport")) section = "transport";
            else section = "";
            continue;
          }

          if (section === "address") {
            address.push(line);
          } else if (section === "phone") {
            if (line.startsWith("*")) phones.push(line.replace(/^\*+\s*/, ""));
            else phones.push(line);
          } else if (section === "distances") {
            if (line.startsWith("*")) distances.push(line.replace(/^\*+\s*/, ""));
            else distances.push(line);
          } else if (section === "transport") {
            transport = transport ? `${transport} ${line}` : line;
          }
        }

        setContactAddress(address);
        setContactPhones(phones);
        setContactDistances(distances);
        setTransportText(transport);
      })
      .catch((err) => console.error("Error loading Somatheeram contact info:", err));
  }, []);

  const mediaItems = [
    { image: "/Center Images/somatheeram/Somatheeram-03.jpg", pdf: "#", title: "Feature" },
    { image: "/Center Images/somatheeram/Somatheeram-05.jpg", pdf: "#", title: "Recognition" },
    { image: "/Center Images/somatheeram/Somatheeram-06.jpg", pdf: "#", title: "Awards" },
  ];

  const nextFacility = () => setCurrentFacilityIndex((i) => (i + 1) % facilityImages.length);
  const prevFacility = () => setCurrentFacilityIndex((i) => (i - 1 + facilityImages.length) % facilityImages.length);

  useEffect(() => {
    fetch("/content/Top Centers/somatheeram/Wellness Programs.txt")
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
        setWellnessIntro(intro);
        setWellnessPrograms(items);
      })
      .catch((err) => console.error("Error loading Somatheeram wellness programs:", err));

    fetch("/content/Top Centers/somatheeram/Medical Programs.txt")
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
        setMedicalIntro(intro);
        setMedicalPrograms(items);
      })
      .catch((err) => console.error("Error loading Somatheeram medical programs:", err));

    fetch("/content/Top Centers/somatheeram/Treatment Process & Patient Journey.txt")
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
        setTreatmentIntro(intro);
        setTreatmentSteps(items);
      })
      .catch((err) => console.error("Error loading Somatheeram treatment process:", err));

    fetch("/content/Top Centers/somatheeram/Why Choose Somatheeram.txt")
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
        setWhyChooseIntro(intro);
        setWhyChooseItems(items);
      })
      .catch((err) => console.error("Error loading Somatheeram why choose content:", err));

    fetch("/content/Top Centers/somatheeram/Facilities & Amenities.txt")
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
        setFacilitiesIntro(intro);
        setFacilitiesItems(items);
      })
      .catch((err) => console.error("Error loading Somatheeram facilities content:", err));

    fetch("/content/Top Centers/somatheeram/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        let name = "";
        let role = "";
        let fdesc = "";
        const expertise: string[] = [];
        const groups: { title: string; description: string; bullets: string[] }[] = [];
        let currentGroup: { title: string; description: string; bullets: string[] } | null = null;
        let section: "" | "founder" | "expertise" | "team" = "";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;

          if (line.startsWith("**") && line.endsWith("**")) {
            const title = line.slice(2, -2).replace(/\*\*/g, "").trim();
            if (title.toLowerCase().includes("mathew")) {
              name = title;
              section = "founder";
            } else if (title.includes("Leadership & Expertise")) {
              section = "expertise";
            } else if (title.includes("Medical Team")) {
              section = "team";
            } else if (section === "team") {
              if (currentGroup) groups.push(currentGroup);
              currentGroup = { title, description: "", bullets: [] };
            }
            continue;
          }

          if (section === "" && !line.startsWith("**")) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (section === "founder") {
            if (!role) role = line.replace(/\*\*/g, "").trim();
            else fdesc = fdesc ? `${fdesc} ${line.replace(/\*\*/g, "").trim()}` : line.replace(/\*\*/g, "").trim();
          } else if (section === "expertise") {
            if (line.startsWith("*")) expertise.push(line.replace(/^\*+\s*/, "").replace(/\*\*/g, "").trim());
          } else if (section === "team") {
            if (!currentGroup) {
              intro = intro ? `${intro} ${line.replace(/\*\*/g, "").trim()}` : line.replace(/\*\*/g, "").trim();
            } else {
              if (line.startsWith("*")) {
                currentGroup.bullets.push(line.replace(/^\*+\s*/, "").replace(/\*\*/g, "").trim());
              } else {
                currentGroup.description = currentGroup.description ? `${currentGroup.description} ${line.replace(/\*\*/g, "").trim()}` : line.replace(/\*\*/g, "").trim();
              }
            }
          }
        }
        if (currentGroup) groups.push(currentGroup);

        setTeamIntro(intro);
        setFounder({ name, role, description: fdesc });
        setFounderExpertise(expertise);
        setTeamGroups(groups);
      })
      .catch((err) => console.error("Error loading Somatheeram founder content:", err));
  }, []);

  useEffect(() => {
    if (!isTeamAutoPlaying || teamGroups.length === 0) return;
    const id = setInterval(() => {
      setCurrentTeamSlide((p) => (p + 1) % teamGroups.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isTeamAutoPlaying, teamGroups.length]);

  const prevTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((p) => (p - 1 + teamGroups.length) % teamGroups.length);
  };

  const nextTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((p) => (p + 1) % teamGroups.length);
  };

  const wellnessIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("panchakarma") || s.includes("purification") || s.includes("detox")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("stress") || s.includes("mental") || s.includes("burnout") || s.includes("insomnia")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("slim") || s.includes("weight")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("immun")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("beauty") || s.includes("skin") || s.includes("glow")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("rejuven") || s.includes("rasayana") || s.includes("anti")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("musculoskeletal") || s.includes("joint") || s.includes("arthritis") || s.includes("back") || s.includes("spine")) return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("metabolic") || s.includes("diabetes") || s.includes("hypertension") || s.includes("cholesterol") || s.includes("lifestyle")) return <Pill className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("digest") || s.includes("gastro") || s.includes("ibs") || s.includes("acidity")) return <Utensils className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("skin") || s.includes("allerg")) return <Leaf className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("respir") || s.includes("asthma") || s.includes("bronch")) return <Wind className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("women") || s.includes("gyn") || s.includes("pcos") || s.includes("menop")) return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("neuro") || s.includes("mental") || s.includes("anxiety") || s.includes("depress") || s.includes("insomnia")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("cardio") || s.includes("heart") || s.includes("circulation")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  const treatmentIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("pre-arrival") || s.includes("planning") || s.includes("consultation")) return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("arrival") || s.includes("comprehensive")) return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("daily") || s.includes("routine")) return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("meals") || s.includes("diet") || s.includes("nutrition")) return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("monitor") || s.includes("adjust")) return <HeartPulse className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("final") || s.includes("home") || s.includes("empower")) return <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("post") || s.includes("follow")) return <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  const whyChooseIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    const cls = "h-6 w-6 text-primary group-hover:text-white transition-colors";
    if (s.includes("first") || s.includes("world")) return <Award className={cls} />;
    if (s.includes("recogn") || s.includes("award")) return <Award className={cls} />;
    if (s.includes("expert") || s.includes("modern") || s.includes("concern") || s.includes("health")) return <ShieldCheck className={cls} />;
    if (s.includes("beach") || s.includes("sanctuary") || s.includes("serene") || s.includes("nature")) return <Leaf className={cls} />;
    if (s.includes("holistic") || s.includes("program")) return <TrendingUp className={cls} />;
    if (s.includes("accommod") || s.includes("comfort") || s.includes("cottage") || s.includes("room")) return <Users className={cls} />;
    if (s.includes("authentic") || s.includes("purity") || s.includes("commit")) return <TestTube2 className={cls} />;
    if (s.includes("guest") || s.includes("experience") || s.includes("transform")) return <Heart className={cls} />;
    return <Award className={cls} />;
  };

  const facilityIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("accommod") || s.includes("room") || s.includes("suite") || s.includes("cottage")) return <Home className="h-7 w-7 text-white" />;
    if (s.includes("treatment") || s.includes("therapy") || s.includes("ayurvedic") || s.includes("center")) return <Droplet className="h-7 w-7 text-white" />;
    if (s.includes("restaurant") || s.includes("dining") || s.includes("meals") || s.includes("diet")) return <Utensils className="h-7 w-7 text-white" />;
    if (s.includes("yoga") || s.includes("meditation")) return <Activity className="h-7 w-7 text-white" />;
    if (s.includes("beach") || s.includes("gardens") || s.includes("tropical") || s.includes("nature")) return <TreePine className="h-7 w-7 text-white" />;
    if (s.includes("pool") || s.includes("swimming") || s.includes("relax")) return <Droplet className="h-7 w-7 text-white" />;
    if (s.includes("shop") || s.includes("store")) return <ShoppingBag className="h-7 w-7 text-white" />;
    if (s.includes("digital") || s.includes("detox") || s.includes("wifi")) return <BookOpen className="h-7 w-7 text-white" />;
    return <Home className="h-7 w-7 text-white" />;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setSelectedImage((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    if (!galleryLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryLightboxOpen(false);
      if (e.key === "ArrowLeft") setGalleryLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setGalleryLightboxImage((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryLightboxOpen, images.length]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentFacilityIndex((i) => (i + 1) % facilityImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [facilityImages.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + facilityImages.length) % facilityImages.length);
      if (e.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % facilityImages.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, lightboxIndex, facilityImages.length]);

  useEffect(() => {
    if (patientReviews.length === 0) return;
    const id = setInterval(() => {
      setCurrentReviewIndex((i) => (i + 1) % patientReviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [patientReviews.length]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Somatheeram Ayurvedic Health Resort</h1>
                <p className="text-xl mb-4 opacity-90">Kovalam, Kerala</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Malabar Coast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(320+ reviews)</span>
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
          <div className="mb-12">
            <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <Button
                  variant={!showVideoGalleryTop ? "default" : "outline"}
                  size="lg"
                  onClick={() => setShowVideoGalleryTop(false)}
                  className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showVideoGalleryTop
                    ? "scale-105 shadow-lg"
                    : "bg-accent text-white hover:bg-accent/90"
                    }`}
                >
                  Photo Gallery
                </Button>
                <Button
                  variant={showVideoGalleryTop ? "default" : "outline"}
                  size="lg"
                  onClick={() => setShowVideoGalleryTop(true)}
                  className={`flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${showVideoGalleryTop
                    ? "scale-105 shadow-lg"
                    : "bg-accent text-white hover:bg-accent/90"
                    }`}
                >
                  <Video className="h-4 w-4 md:h-6 md:w-6" />
                  Video Gallery
                </Button>
              </div>
            </div>

            {!showVideoGalleryTop ? (
              <>
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`Somatheeram ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <button
                    onClick={() => {
                      setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
                    }}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedImage((prev) => (prev + 1) % images.length);
                    }}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>
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
                      setGalleryLightboxImage(images.indexOf(thumbnailImages[0]));
                      setGalleryLightboxOpen(true);
                    }}
                  >
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img
                        src={thumbnailImages[0]}
                        alt="Somatheeram 1"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
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
                            setGalleryLightboxImage(actualIndex);
                            setGalleryLightboxOpen(true);
                          }}
                        >
                          <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '100%' }}>
                            <img
                              src={img}
                              alt={`Somatheeram ${actualIndex + 1}`}
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
              <>
                <div className="space-y-6">
                  <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
                    <video
                      key={selectedVideo}
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={videos[selectedVideo]} type="video/mp4" />
                    </video>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      Video {selectedVideo + 1} / {videos.length}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {videos.map((_, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedVideo(idx)}
                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-4 ring-primary" : "ring-2 ring-transparent hover:ring-primary/30"
                          }`}
                      >
                        <img
                          src={thumbnailImages[idx]}
                          alt={`Video ${idx + 1} Thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                            <Video className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                          Video {idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
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
                Somatheeram Gallery
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full cursor-pointer"
                  style={{ paddingBottom: "75%" }}
                  onClick={() => {
                    setGalleryLightboxImage(i);
                    setGalleryLightboxOpen(true);
                  }}
                >
                  <img src={img} alt={`Somatheeram ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {galleryLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm"
          onClick={() => setGalleryLightboxOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setGalleryLightboxImage((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setGalleryLightboxImage((prev) => (prev + 1) % images.length);
            }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
              Somatheeram Ayurvedic Health Resort
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={images[galleryLightboxImage]}
                alt={`Somatheeram ${galleryLightboxImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setGalleryLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {galleryLightboxImage + 1} / {images.length}
              </div>
            </div>

            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryLightboxImage((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Previous
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryLightboxImage((prev) => (prev + 1) % images.length);
                }}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 md:px-4 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
              <MarkdownContent
                contentPath="/content/Top Centers/somatheeram/somatheeram center.txt"
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

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10">
              <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Patients</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">4.5/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Average Rating</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Success Rate</div>
              </div>
            </div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 mb-4" style={{ borderColor: "#1A428A" }}>
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {wellnessIntro}
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wellnessPrograms.map((p, idx) => (
                <AccordionItem
                  key={idx}
                  value={`well-${idx}`}
                  className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-[#1A428A]">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2" style={{ borderColor: "#1A428A" }}>
                        {wellnessIconForTitle(p.title)}
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
                          <span className="text-green-600 mt-1">✓</span>
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

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-orange-500 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {medicalIntro}
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
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
                          <span className="text-blue-600 mt-1">✓</span>
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

      {/* Video Gallery Section */}
      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12 mb-12" id="videos">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
              Video Gallery of Somatheeram
            </h2>
            <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
              Experience the serene atmosphere and holistic healing journey at Somatheeram through our video gallery.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  <video
                    ref={galleryVideoRef}
                    key={videos[selectedVideo]}
                    src={videos[selectedVideo]}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  />
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows - Desktop Only */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
              <button
                onClick={() => setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                aria-label="Previous video"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={() => setSelectedVideo((prev) => (prev + 1) % videos.length)}
                className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                aria-label="Next video"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            {/* Navigation Buttons - Mobile Only */}
            <div className="flex md:hidden items-center justify-between mt-4 px-6">
              <Button
                onClick={() => setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
              >
                Previous
              </Button>
              <Button
                onClick={() => setSelectedVideo((prev) => (prev + 1) % videos.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
              >
                Next
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVideo(index)}
                  className={`transition-all ${index === selectedVideo
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    } rounded-full`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16 lg:py-20 mt-5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Why Choose Somatheeram for Your Holistic Health Journey</h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
              {whyChooseIntro}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseItems.map((item, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        {whyChooseIconForTitle(item.title)}
                      </div>
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    </div>
                    {item.description && (
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>{item.description}</p>
                    )}
                    {item.bullets.length > 0 && (
                      <ul className="list-none pl-0 space-y-1.5">
                        {item.bullets.slice(0, 3).map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                            <span className="text-primary mt-1">✓</span>
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
      </section>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
            <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
              {treatmentIntro}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {treatmentSteps.map((s, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    {idx + 1}
                  </div>
                  {idx < treatmentSteps.length - 1 && (
                    <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                  )}
                </div>
                <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      {idx + 1}
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
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
                            <span className="text-primary mt-1">•</span>
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

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="md:hidden">
              <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                <img
                  src="/Center Images/somatheeram/Facilities & Amenities/Somatheeram-34.jpg"
                  alt="Somatheeram"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
                  Take the first step towards holistic healing. Our expert team guides you with personalized treatment plans tailored to your unique needs.
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
                  <a href="tel:+914712266501" className="underline hover:text-primary font-medium">Call us: +91 471 226 6501</a>
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
                <div className="mt-6 flex items-center gap-2" style={{ color: "#7F543D" }}>
                  <Phone className="h-5 w-5 text-red-600" />
                  <a href="tel:+914712266501" className="underline hover:text-primary font-medium text-lg">Call us: +91 471 226 6501</a>
                </div>
              </div>
              <div>
                <img
                  src="/Center Images/somatheeram/Facilities & Amenities/Somatheeram-34.jpg"
                  alt="Somatheeram"
                  className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
            <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>{facilitiesIntro}</p>
          </div>

          <div className="max-w-7xl mx-auto relative mb-10">
            <button onClick={prevFacility} className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110">
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button onClick={nextFacility} className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110">
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="overflow-hidden px-10 md:px-12">
              <div className="md:hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentFacilityIndex * 100}%)` }}>
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}>
                        <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${Math.min(currentFacilityIndex, facilityImages.length - 5) * 20}%)` }}>
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-1/5 flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}>
                        <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {facilityImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentFacilityIndex(index)} className={`${index === currentFacilityIndex ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full transition-all`} />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesItems.map((item, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                      {facilityIconForTitle(item.title)}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">
                      {item.title}
                    </h3>
                  </div>

                  {item.description && (
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                      {item.description}
                    </p>
                  )}

                  {item.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
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
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h2>
              <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Led by visionary expertise and supported by generations of traditional healing knowledge</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Founder Card */}
              {founder && (
                <Card className="overflow-hidden border-2 border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="flex flex-col h-full">
                      <div className="p-6 md:p-8 flex items-center gap-4 md:gap-6 border-b border-gray-100">
                        <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-[2px] border-white bg-white">
                            <img
                              src="/Center Images/somatheeram/Founder/Founder.jpg"
                              alt={founder.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">{founder.name}</h3>
                          <p className="text-sm md:text-base font-medium text-primary/70 mb-1 uppercase tracking-wider">{founder.role}</p>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex-1">
                        <p className="text-sm md:text-base leading-relaxed text-justify mb-6" style={{ color: "#7F543D" }}>
                          {founder.description}
                        </p>

                        <div className="mt-auto">
                          <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-3">Leadership & Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {founderExpertise.map((exp, idx) => (
                              <span key={idx} className="bg-primary/10 text-primary text-[10px] md:text-[11px] px-3 py-1.5 rounded-full border border-primary/20 font-semibold">
                                {exp}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Medical Team Card */}
              <Card className="overflow-hidden border-2 border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 md:p-8 flex items-center gap-4 md:gap-6 border-b border-gray-100">
                      <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-[2px] border-white bg-white">
                          <img
                            src="/Center Images/somatheeram/expert-team.png"
                            alt="Expert Medical Team"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as any).src = "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=200&h=200";
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">Expert Medical Team</h3>
                        <p className="text-sm md:text-base font-medium text-primary/70 mb-1 uppercase tracking-wider">Ayurvedic Experts</p>
                        <div className="flex items-center gap-2 text-green-600 font-semibold text-[10px] md:text-xs uppercase tracking-widest">
                          <UserCheck className="h-3.5 w-3.5" />
                          <span>13+ Expert Physicians</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="relative flex-1 flex flex-col">
                        <div className="overflow-hidden mb-4 flex-1">
                          <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
                          >
                            {teamGroups.map((group, idx) => (
                              <div key={idx} className="w-full flex-shrink-0">
                                {group.description && group.description.trim() !== "" && (
                                  <p className="text-[13px] md:text-sm italic mb-6 opacity-90 leading-relaxed" style={{ color: "#7F543D" }}>
                                    {group.description}
                                  </p>
                                )}

                                <div className="space-y-6">
                                  <h4 className="text-[11px] md:text-xs font-bold text-primary uppercase tracking-[0.15em] opacity-80">Our Collaborative Team Includes:</h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {group.bullets.map((bullet, bIdx) => {
                                      const colonIndex = bullet.indexOf(':');
                                      const hasLabel = colonIndex !== -1 && colonIndex < 35; // Ensure it's a short label, not part of a sentence
                                      const label = hasLabel ? bullet.slice(0, colonIndex + 1) : "";
                                      const content = hasLabel ? bullet.slice(colonIndex + 1) : bullet;

                                      return (
                                        <div key={bIdx} className="flex items-start gap-3 text-[13px] md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                          <span className="font-medium">
                                            {hasLabel ? (
                                              <>
                                                <span className="font-bold text-primary">{label}</span>
                                                {content}
                                              </>
                                            ) : bullet}
                                          </span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Carousel Controls */}
                        {teamGroups.length > 1 && (
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <div className="flex gap-2">
                              {teamGroups.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setCurrentTeamSlide(idx);
                                    setIsTeamAutoPlaying(false);
                                  }}
                                  className={`h-2 md:h-2 rounded-full transition-all duration-300 ${currentTeamSlide === idx ? "w-6 md:w-8 bg-primary" : "w-2 md:w-2 bg-gray-300 hover:bg-primary/40"
                                    }`}
                                />
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={prevTeam}
                                className="p-1.5 md:p-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white text-primary transition-all duration-300"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <button
                                onClick={nextTeam}
                                className="p-1.5 md:p-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white text-primary transition-all duration-300"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
            }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % facilityImages.length);
            }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Somatheeram Ayurvedic Health Resort</div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img src={facilityImages[lightboxIndex]} alt={`Facility ${lightboxIndex + 1}`} className="absolute inset-0 w-full h-full object-cover" />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {lightboxIndex + 1} / {facilityImages.length}
              </div>
            </div>

            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
                }}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Previous
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev + 1) % facilityImages.length);
                }}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
          </div>
          {patientReviews.length > 0 && (
            <div className="relative">
              <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <CardContent className="p-4 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <div className="text-primary/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    {/* Review Content */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">
                        {(patientReviews[currentReviewIndex] as any).title}
                      </h3>
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6 whitespace-pre-line" style={{ color: "#7F543D" }}>
                        "{(patientReviews[currentReviewIndex] as any).review}"
                      </p>
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                        {patientReviews[currentReviewIndex].name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-primary">
                            {patientReviews[currentReviewIndex].name}
                          </h4>
                          {(patientReviews[currentReviewIndex] as any).verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                          {(patientReviews[currentReviewIndex] as any).location}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" fill={i < Math.round(patientReviews[currentReviewIndex].rating) ? "#F5C518" : "none"} />
                        ))}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-primary">
                        {patientReviews[currentReviewIndex].rating}.0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-6">
                <button
                  onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + patientReviews.length) % patientReviews.length)}
                  className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
                <button
                  onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % patientReviews.length)}
                  className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Auto
              </div>
            </div>
          )}

          {/* Dots Navigation */}
          {patientReviews.length > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {patientReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentReviewIndex(i)}
                  className={`transition-all rounded-full ${i === currentReviewIndex ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mb-12 mt-12 px-4">
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
            <Award className="h-8 w-8" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards & Media</h2>
          <p className="text-base md:text-lg px-4 mx-auto max-w-2xl" style={{ color: '#7F543D' }}>
            Recognition of our excellence in authentic Ayurvedic healing and patient care
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          <div className="overflow-hidden px-4 md:px-10">
            {/* Mobile Slider (1 card) */}
            <div className="md:hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentAward * 100}%)` }}
              >
                {awards.map((award, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                      <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="max-h-[95%] max-w-[95%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">{award.title}</h4>
                        <p className="text-sm italic line-clamp-3" style={{ color: '#7F543D' }}>"{award.description}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Slider (3 cards visible) */}
            <div className="hidden md:block">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentAward * (100 / 3)}%)` }}
              >
                {awards.map((award, i) => (
                  <div key={i} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                      <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 md:mb-6 p-2 md:p-3 flex items-center justify-center overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="max-h-[95%] max-w-[95%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-primary mb-3 min-h-[56px] flex items-center justify-center leading-tight">{award.title}</h4>
                        <p className="text-base italic" style={{ color: '#7F543D' }}>"{award.description}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPreviousAward}
            className="absolute left-12 md:-left-4 top-[54%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
            aria-label="Previous award"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={goToNextAward}
            className="absolute right-12 md:-right-4 top-[54%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
            aria-label="Next award"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Indicators */}
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
        </div>
      </div>


      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Information</h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>Flexible payment options and insurance support to make holistic healthcare accessible</p>
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
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>International policies may cover Ayurvedic treatments</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Documentation provided for claim procedures</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Support with major insurance providers</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Check eligibility with your insurer</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Bank transfers, credit cards, and cash</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Transparent pricing with detailed tariff</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Early booking discounts available</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>European service office assistance</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-primary/5 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">For International Patients</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>International patients are advised to check with their respective insurance providers regarding coverage for holistic and alternative medicine treatments. Our administrative team can provide necessary documentation and medical reports to support your insurance claims.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>





      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MessageCircleHeart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions About Somatheeram</h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>Find answers to common questions about treatments, facilities, and your healing journey</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="item-1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">What is the minimum duration of treatment at Somatheeram?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>The minimum recommended stay is 7 days for wellness and rejuvenation programs, 14 days for body purification Panchakarma, and 21-28 days for medical treatment of chronic conditions. Ayurvedic healing requires adequate time for treatments to work at deep tissue levels and achieve lasting therapeutic benefits.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">Do I need to bring my medical records?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, bringing previous medical reports, diagnostic test results, current prescriptions, and detailed health history helps Ayurvedic physicians understand your condition comprehensively and design optimal treatment protocols tailored to your specific needs.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">Is Somatheeram suitable for elderly patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Absolutely. Somatheeram specializes in treating elderly patients with age-related conditions such as arthritis, diabetes, hypertension, and mobility issues. Treatments are adapted to individual stamina and health status, ensuring safety and comfort for senior citizens throughout their healing journey.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">Can I continue my regular medications during treatment?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, initially you continue necessary medications. Ayurvedic physicians review your prescriptions during consultation and gradually reduce dosages as Ayurvedic treatments begin showing positive effects. Never stop medications abruptly without proper physician guidance and monitoring.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">What should I pack for my stay at Somatheeram?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Comfortable loose cotton clothing, personal toiletries, regular medications, previous medical reports, swimwear, sunscreen, insect repellent, and an open mind for healing. The resort provides treatment gowns, towels, yoga mats, and thermosflasks with Ayurvedic herbal tea.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">Is vegetarian food mandatory?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, Somatheeram serves exclusively vegetarian Ayurvedic cuisine as recommended in classical texts for optimal healing and detoxification. The award-winning kitchen prepares approximately 200 different delicious dishes following Ayurvedic nutritional principles, customized to individual dosha constitutions.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">Can family members stay with patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, family members and companions can stay at the resort. Accommodation options are available for non-treatment guests who pay for room and meals only. However, the resort maintains a peaceful healing atmosphere rather than typical resort entertainment environment.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
                <span className="text-lg font-semibold text-primary text-left">Is WiFi and mobile connectivity available?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Limited WiFi is available for a nominal charge in designated areas. However, Somatheeram encourages digital detox as an integral part of the healing process. Disconnecting from technology and social media significantly enhances treatment benefits, stress reduction, and mental peace.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          {contactAddress.length > 0 && (
            <Card className="mb-12 border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-5 md:p-8">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/10 pb-4">Contact Information</h2>
                <div className="grid gap-6 md:grid-cols-[1fr_1.35fr] lg:gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Address</h4>
                        <p className="flex flex-col space-y-0.5 text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                          {contactAddress.filter(l => l.trim() !== "").map((l, i) => (
                            <span key={i}>{l}</span>
                          ))}
                        </p>
                      </div>
                    </div>
                    {contactDistances.length > 0 && (
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
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
                            title="Somatheeram Ayurvedic Health Resort Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7894.884427226679!2d77.00942229650515!3d8.358084099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05afd4228d8785%3A0x8ed578c993f1df1e!2sSomatheeram%20Ayurvedic%20Health%20Resort!5e0!3m2!1sen!2sin!4v1767702365966!5m2!1sen!2sin"
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
                          <p className="text-sm md:text-base leading-relaxed text-justify md:text-left md:pr-4" style={{ color: '#7F543D' }}>
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
                    src="/Center Images/somatheeram/CTA bottom.jpg"
                    alt="Somatheeram"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-bold text-white text-center mb-4">Begin Your Holistic Healing Journey at Somatheeram Ayurvedic Health Resort</h2>
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
                  <div className="mt-6 flex items-center justify-center gap-2 text-white/90 text-sm">
                    <Phone className="h-4 w-4 text-red-400" />
                    <a href="tel:+914712266501" className="underline hover:text-white font-medium">Call us: +91 471 226 6501</a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Begin Your Holistic Healing Journey at Somatheeram Ayurvedic Health Resort</h2>
                  <div className="flex flex-wrap gap-3">
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
                    <a href="tel:+914712266501" className="underline hover:text-white font-semibold text-lg">Call us: +91 471 226 6501</a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/somatheeram/CTA bottom.jpg"
                    alt="Somatheeram"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 font-semibold"
      >
        <Phone size={20} />
        <span className="hidden md:inline">Get Free Quote</span>
        <span className="md:hidden">Quote</span>
      </button>
    </div>
  );
}

