import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MarkdownContent from "@/components/MarkdownContent";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, Images, Video, FileSearch, Users, TrendingUp, Droplet, Brain, Sparkles, Activity, ShieldCheck, Leaf, Heart, Stethoscope, Hospital, Award, PawPrint, Building2, Utensils, TreePine, Home, HeartPulse, ClipboardList, Pill, Phone, MessageCircle, BookOpen, UserCheck, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function NamasteDwaar() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [facilityIndex, setFacilityIndex] = useState(0);
  const [facilityAutoPlay, setFacilityAutoPlay] = useState(true);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [facilityItems, setFacilityItems] = useState<{ title: string; bullets: string[] }[]>([]);
  const [founderTitle, setFounderTitle] = useState("Founder");
  const [founderSubtitle, setFounderSubtitle] = useState("");
  const [founderDesc, setFounderDesc] = useState("");
  const [founderBullets, setFounderBullets] = useState<string[]>([]);
  const [teamTitle, setTeamTitle] = useState("Expert Medical Team");
  const [teamSubtitle, setTeamSubtitle] = useState("");
  const [teamDesc, setTeamDesc] = useState("");
  const [teamBullets, setTeamBullets] = useState<string[]>([]);
  const [founderTeamSubtitle, setFounderTeamSubtitle] = useState("");
  const [testimonials, setTestimonials] = useState<Array<{ id: number; name: string; location: string; condition: string; rating: number; date?: string; avatar: string; image?: string; review: string; verified: boolean }>>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);
  const [showAwards, setShowAwards] = useState(true);
  const [awardsDescriptions, setAwardsDescriptions] = useState<string[]>([]);
  const [awardsList, setAwardsList] = useState<{ title: string; desc: string }[]>([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMediaAutoPlaying, setIsMediaAutoPlaying] = useState(true);
  const [mediaLightboxOpen, setMediaLightboxOpen] = useState(false);
  const [mediaLightboxIndex, setMediaLightboxIndex] = useState(0);
  const [mediaZoom, setMediaZoom] = useState(1);
  const [wellnessText, setWellnessText] = useState("");
  const [wellnessHeading, setWellnessHeading] = useState("Wellness Programs");
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessItems, setWellnessItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalHeading, setMedicalHeading] = useState("Medical Programs");
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalItems, setMedicalItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyHeading, setWhyHeading] = useState("Why Choose Namaste Dwaar for Your Holistic Health Journey");
  const [whyIntro, setWhyIntro] = useState("");
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [processHeading, setProcessHeading] = useState("Treatment Process & Patient Journey");
  const [processIntro, setProcessIntro] = useState("");
  const [processSteps, setProcessSteps] = useState<{ index: number; title: string; description: string; bullets: string[] }[]>([]);

  const images = [
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-01.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-02.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-03.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-04.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-05.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-06.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-07.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-08.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-09.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-10.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-11.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-12.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-13.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-14.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-15.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-16.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-17.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-18.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-19.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-20.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-21.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-22.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-23.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-24.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-25.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-26.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-27.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-28.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-29.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-30.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-31.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-32.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-33.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-34.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-35.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-36.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-37.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-38.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-39.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-40.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-41.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-42.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-43.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-44.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-45.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-46.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-47.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-48.jpg",
  ];

  const thumbnailImages = [
    images[0],
    images[1],
    images[6],
    images[14],
    images[23],
  ];

  const videos = [
    "/Center Images/Namastedwaar/video gallery/NamasteDwaar-01.mp4",
    "/Center Images/Namastedwaar/video gallery/NamasteDwaar-02.mp4",
    "/Center Images/Namastedwaar/video gallery/NamasteDwaar-03.mp4",
    "/Center Images/Namastedwaar/video gallery/NamasteDwaar-04.mp4",
    "/Center Images/Namastedwaar/video gallery/NamasteDwaar-05.mp4",
  ];

  const facilityImages = [
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-01.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-02.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-03.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-04.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-05.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-06.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-07.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-08.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-09.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-10.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-11.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-12.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-13.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-14.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-15.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-16.jpg",
  ];

  const mediaImages = [
    "/Center Images/Namastedwaar/Awards and media/Media-01.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-02.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-03.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-04.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-05.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-06.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-07.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-08.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-09.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-10.jpg",
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (showVideoGallery) return;
    if (lightboxOpen) return;
    if (showFullGallery) return;
    const id = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying, showVideoGallery, lightboxOpen, showFullGallery, images.length]);

  useEffect(() => {
    if (!facilityAutoPlay) return;
    const id = setInterval(() => {
      setFacilityIndex((prev) => (prev + 1) % facilityImages.length);
    }, 3500);
    return () => clearInterval(id);
  }, [facilityAutoPlay, facilityImages.length]);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const items: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (/^\*\*.*\*\*$/.test(line)) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, bullets: [] };
            continue;
          }
          if (/^\*\s+/.test(line)) {
            const bullet = line.replace(/^\*\s+/, "");
            if (current) current.bullets.push(bullet);
          }
        }
        if (current) items.push(current);
        const normalized = items.map((it) => ({ title: it.title, bullets: it.bullets.slice(0, 4) }));
        setFacilityItems(normalized);
      })
      .catch(() => {
        setFacilityItems([]);
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Patient Success Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const items: Array<{ id: number; name: string; location: string; condition: string; rating: number; date?: string; avatar: string; image?: string; review: string; verified: boolean }> = [];
        const lines = text.split("\n");
        let current: {
          id: number;
          name: string;
          location: string;
          condition: string;
          rating: number;
          date?: string;
          avatar: string;
          image?: string;
          review: string;
          verified: boolean;
        } | null = null;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (/^\*\*Review\s+\d+\s+-\s+/.test(line)) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*|\*\*$/g, "");
            const afterDash = title.split("-")[1].trim();
            const parts = afterDash.split(",");
            const name = parts[0].trim();
            const location = parts.slice(1).join(",").trim();
            current = { id: items.length + 1, name, location, condition: "", rating: 5, date: undefined, avatar: (name.split(" ")[0][0] + (name.split(" ")[1]?.[0] || "")).toUpperCase(), image: undefined, review: "", verified: true };
            continue;
          }
          if (/^\*".*"\*$/.test(line)) {
            const quote = line.replace(/^\*"|"\*$/g, "");
            if (current) current.condition = quote;
            continue;
          }
          if (/^\*\*Rating:\s*.*\*\*$/.test(line)) {
            const ratingMatch = line.match(/\((\d)\/5\)/);
            const r = ratingMatch ? parseInt(ratingMatch[1], 10) : 5;
            if (current) current.rating = r;
            continue;
          }
          // otherwise part of review body
          if (current) {
            current.review = current.review ? current.review + " " + line : line;
          }
        }
        if (current) items.push(current);
        setTestimonials(items);
      })
      .catch(() => {
        setTestimonials([
          { id: 1, name: "Guest", location: "India", condition: "Transformational healing", rating: 5, avatar: "G", review: "Authentic therapies and compassionate care.", verified: true }
        ]);
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Award.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const items: { title: string; desc: string }[] = [];
        let current: { title: string; desc: string } | null = null;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          const headerMatch = line.match(/^Award\s+(\d+):\s*\*\*(.*?)\*\*/i);
          if (headerMatch) {
            if (current) items.push(current);
            const title = headerMatch[2].trim();
            current = { title, desc: "" };
            continue;
          }
          if (current) {
            current.desc = current.desc ? current.desc + " " + line : line;
          }
        }
        if (current) items.push(current);
        setAwardsList(items);
        if (items.length > 0) {
          setAwardsDescriptions(items.map((i) => i.desc));
        }
      })
      .catch(() => {
        setAwardsList([
          { title: "Best Spa & Wellness Property", desc: "Recognized for excellence in spa and wellness services." },
          { title: "Hotel of the Year – Mid Market", desc: "Awarded for hospitality leadership and guest satisfaction." },
          { title: "Best New Hospitality Product", desc: "Celebrated as an innovative new hospitality product." },
          { title: "Appreciation for Promoting Wellness Tourism", desc: "Appreciated for promoting wellness tourism in the region." },
          { title: "A Mark of Professional Excellence", desc: "Affiliated with leading industry bodies for professional excellence." }
        ]);
      });
  }, []);

  useEffect(() => {
    if (!isMediaAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isMediaAutoPlaying, mediaImages.length]);

  useEffect(() => {
    if (!isReviewAutoPlaying || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isReviewAutoPlaying, testimonials.length]);

  const goToPreviousReview = () => {
    setIsReviewAutoPlaying(false);
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextReview = () => {
    setIsReviewAutoPlaying(false);
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const selectReview = (index: number) => {
    setIsReviewAutoPlaying(false);
    setCurrentReview(index);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Founder and team info.txt")
      .then((res) => res.text())
      .then((text) => {
        if (!text || !text.trim()) {
          setFounderTitle("Founder");
          setFounderSubtitle("Founder & Director");
          setFounderDesc("Leads Namaste Dwaar with a vision for authentic wellness and compassionate hospitality, integrating traditional healing with modern comfort.");
          setFounderBullets(["Holistic Wellness", "Sustainable Hospitality", "Community Focus", "Guest Experience"]);
          setTeamTitle("Expert Medical Team");
          setTeamSubtitle("Qualified AYUSH Doctors");
          setTeamDesc("The medical team delivers evidence-based Ayurvedic care supported by yoga, naturopathy and nutrition.");
          setTeamBullets(["Ayurveda", "Yoga Therapy", "Naturopathy", "Physiotherapy", "Diet & Nutrition", "Counseling"]);
          return;
        }
        const lines = text.split("\n");
        let section: "founder" | "team" | null = null;
        let subSection: "leadership" | "specialized" | null = null;
        let headerSeen = false;
        let founderTitleLocal = "";
        let teamTitleLocal = "";
        let founderDescLocal = "";
        let teamDescLocal = "";
        const founderBulletsLocal: string[] = [];
        const teamBulletsLocal: string[] = [];
        let subtitleLocal = "";
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (/^###\s+/.test(line)) {
            headerSeen = true;
            continue;
          }
          if (headerSeen && !/^\*\*/.test(line) && !/^[*-]\s+/.test(line)) {
            subtitleLocal = line;
            headerSeen = false;
            continue;
          }
          if (/^\*\*.*\*\*$/.test(line)) {
            const title = line.slice(2, -2);
            const lower = title.toLowerCase();
            if (lower.includes("founder")) {
              section = "founder";
              founderTitleLocal = title;
              subSection = null;
            } else if (lower.includes("team")) {
              section = "team";
              teamTitleLocal = title;
              subSection = null;
            } else if (lower.includes("leadership")) {
              subSection = "leadership";
            } else if (lower.includes("specialized")) {
              subSection = "specialized";
            }
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            const bullet = line.replace(/^[*-]\s+/, "");
            if (section === "founder" && subSection === "leadership") {
              founderBulletsLocal.push(bullet);
            } else if (section === "team" && subSection === "specialized") {
              teamBulletsLocal.push(bullet);
            }
            continue;
          }
          if (section === "founder") {
            founderDescLocal = founderDescLocal ? founderDescLocal + " " + line : line;
          } else if (section === "team") {
            teamDescLocal = teamDescLocal ? teamDescLocal + " " + line : line;
          }
        }
        setFounderTeamSubtitle(subtitleLocal);
        if (founderTitleLocal) setFounderTitle(founderTitleLocal);
        if (teamTitleLocal) setTeamTitle(teamTitleLocal);
        setFounderDesc(founderDescLocal);
        setTeamDesc(teamDescLocal);
        setFounderBullets(founderBulletsLocal.slice(0, 6));
        setTeamBullets(teamBulletsLocal.slice(0, 8));
      })
      .catch(() => {
        setFounderTitle("Founder");
        setFounderSubtitle("Founder & Director");
        setFounderDesc("Leads Namaste Dwaar with a vision for authentic wellness and compassionate hospitality.");
        setFounderBullets(["Holistic Wellness", "Sustainable Hospitality", "Community Focus", "Guest Experience"]);
        setTeamTitle("Expert Medical Team");
        setTeamSubtitle("Qualified AYUSH Doctors");
        setTeamDesc("The medical team delivers evidence-based Ayurvedic care supported by yoga, naturopathy and nutrition.");
        setTeamBullets(["Ayurveda", "Yoga Therapy", "Naturopathy", "Physiotherapy", "Diet & Nutrition", "Counseling"]);
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Wellness Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        setWellnessText(text);
        const lines = text.split("\n");
        let heading = "Wellness Programs";
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let startedIntro = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, description: "", bullets: [] };
            startedIntro = true;
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else {
            if (!startedIntro) {
              intro = intro ? intro + " " + line : line;
            }
          }
        }
        if (current) items.push(current);
        setWellnessHeading(heading);
        setWellnessIntro(intro);
        setWellnessItems(items);
      })
      .catch(() => {
        setWellnessHeading("Wellness Programs");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Medical Treatment.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let heading = "Medical Programs";
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let startedIntro = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, description: "", bullets: [] };
            startedIntro = true;
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else {
            if (!startedIntro) {
              intro = intro ? intro + " " + line : line;
            }
          }
        }
        if (current) items.push(current);
        setMedicalHeading(heading);
        setMedicalIntro(intro);
        setMedicalItems(items);
      })
      .catch(() => {
        setMedicalHeading("Medical Programs");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Why choose Namastedwaar.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let heading = "Why Choose Namaste Dwaar for Your Holistic Health Journey";
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let afterHeader = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            afterHeader = true;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, description: "", bullets: [] };
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else if (afterHeader) {
            intro = intro ? intro + " " + line : line;
          }
        }
        if (current) items.push(current);
        setWhyHeading(heading);
        setWhyIntro(intro);
        setWhyItems(items);
      })
      .catch(() => {
        setWhyHeading("Why Choose Namaste Dwaar for Your Holistic Health Journey");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let heading = "Treatment Process & Patient Journey";
        let intro = "";
        const steps: { index: number; title: string; description: string; bullets: string[] }[] = [];
        let current: { index: number; title: string; description: string; bullets: string[] } | null = null;
        let afterHeader = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            afterHeader = true;
            continue;
          }
          const boldMatchA = line.match(/^\*\*\s*(\d+)\.\s*(.+?)\s*\*\*$/); // "**1. Title**"
          const boldMatchB = line.match(/^(\d+)\.\s*\*\*(.+?)\*\*$/);         // "1. **Title**"
          const plainMatch = line.match(/^(\d+)\.\s*(.+)$/);                      // "1. Title"

          if (boldMatchA || boldMatchB || plainMatch) {
            if (current) steps.push(current);
            const idx = parseInt((boldMatchA?.[1] || boldMatchB?.[1] || plainMatch?.[1])!, 10);
            const title = (boldMatchA?.[2] || boldMatchB?.[2] || plainMatch?.[2])!;
            current = { index: idx, title, description: "", bullets: [] };
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else if (afterHeader) {
            intro = intro ? intro + " " + line : line;
          }
        }
        if (current) steps.push(current);
        setProcessHeading(heading);
        setProcessIntro(intro);
        setProcessSteps(steps);
      })
      .catch(() => {
        setProcessHeading("Treatment Process & Patient Journey");
      });
  }, []);

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
      if (e.key === "Escape") setShowFullGallery(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFullGallery]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Namaste Dwaar</h1>
                <p className="text-xl mb-4 opacity-90">Countryside Wellness Retreat</p>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Near NCR, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(500+ reviews)</span>
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
                  variant={!showVideoGallery ? "default" : "outline"}
                  size="lg"
                  onClick={() => setShowVideoGallery(false)}
                  className="text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none"
                >
                  Photo Gallery
                </Button>
                <Button
                  variant={showVideoGallery ? "default" : "outline"}
                  size="lg"
                  onClick={() => setShowVideoGallery(true)}
                  className="flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none"
                >
                  <Video className="h-4 w-4 md:h-6 md:w-6" />
                  Video Gallery
                </Button>
              </div>
            </div>

            {!showVideoGallery ? (
              <>
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`Namaste Dwaar ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                    onClick={() => { setLightboxImage(selectedImage); setLightboxOpen(true); }}
                  />
                  <button
                    onClick={() => { setIsAutoPlaying(false); setSelectedImage((prev) => (prev - 1 + images.length) % images.length); }}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => { setIsAutoPlaying(false); setSelectedImage((prev) => (prev + 1) % images.length); }}
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
                    onClick={() => { setLightboxImage(images.indexOf(thumbnailImages[0])); setLightboxOpen(true); }}
                  >
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img
                        src={thumbnailImages[0]}
                        alt="Namaste Dwaar"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {thumbnailImages.slice(1, 5).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                        onClick={() => { const actualIndex = images.indexOf(img); setLightboxImage(actualIndex); setLightboxOpen(true); }}
                      >
                        <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                          <img
                            src={img}
                            alt={`Namaste Dwaar Thumb ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                          {idx === 3 && (
                            <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/40">
                              <Button
                                size="sm"
                                onClick={(e) => { e.stopPropagation(); setShowFullGallery(true); }}
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
                    ))}
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
                      poster={images[0]}
                    >
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
                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                          selectedVideo === idx ? "ring-4 ring-primary" : "ring-2 ring-transparent hover:ring-primary/30"
                        }`}
                      >
                        <img 
                          src={images[(idx + 1) % images.length]}
                          alt={`Video ${idx + 1} Thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors">
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
          <div className="bg-white rounded-2xl shadow-md border border-primary/10 p-6 md:p-8">
            <MarkdownContent contentPath="/content/Top Centers/Namastedwaar/Namastedwaar.txt" />
          </div>

          {/* Wellness Programs Section */}
          <div className="mt-8 md:mt-12 mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">5000+</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.5/5</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Average Rating</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">98%</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Success Rate</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">
                {wellnessHeading}
              </h1>
              {wellnessIntro && (
                <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
                  {wellnessIntro}
                </p>
              )}
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wellnessItems.map((item, idx) => {
                const lower = item.title.toLowerCase();
                const Icon = lower.includes('detox') || lower.includes('panchakarma') ? Droplet
                  : lower.includes('stress') ? Brain
                  : lower.includes('rejuvenation') || lower.includes('anti-aging') ? Sparkles
                  : lower.includes('weight') ? Activity
                  : lower.includes('immunity') || lower.includes('prevent') ? ShieldCheck
                  : Leaf;
                return (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {item.description && (
                        <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                          {item.description}
                        </p>
                      )}
                      {item.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Medical Treatment Programs */}
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">
                {medicalHeading}
              </h2>
              {medicalIntro && (
                <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
                  {medicalIntro}
                </p>
              )}
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalItems.map((item, idx) => {
                const lower = item.title.toLowerCase();
                const Icon = lower.includes('diabetes') ? Activity
                  : lower.includes('arthritis') || lower.includes('pain') ? Heart
                  : lower.includes('mental') || lower.includes('neurolog') ? Brain
                  : lower.includes('digest') || lower.includes('gastro') ? Leaf
                  : lower.includes('chronic') || lower.includes('complex') ? Hospital
                  : ShieldCheck;
                return (
                  <AccordionItem key={idx} value={`med-${idx}`} className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {item.description && (
                        <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                          {item.description}
                        </p>
                      )}
                      {item.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-blue-600 mt-1">✓</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Why Choose Namaste Dwaar */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
                {whyHeading}
              </h2>
              {whyIntro && (
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: '#7F543D' }}>
                  {whyIntro}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyItems.map((item, idx) => {
                const t = item.title.toLowerCase();
                const Icon = t.includes('accessible') || t.includes('delhi') ? MapPin
                  : t.includes('rural') || t.includes('village') ? TreePine
                  : t.includes('architecture') ? Award
                  : t.includes('restaurant') || t.includes('culinary') ? Utensils
                  : t.includes('doctor') || t.includes('ayush') ? Stethoscope
                  : t.includes('arthritis') || t.includes('diabetes') ? HeartPulse
                  : t.includes('dog') || t.includes('pet') ? PawPrint
                  : t.includes('eco') || t.includes('nature') ? Leaf
                  : t.includes('value') || t.includes('hospitality') ? Home
                  : t.includes('recreational') || t.includes('activities') ? Activity
                  : t.includes('family') ? Users
                  : Home;
                return (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-left" style={{ color: '#7F543D' }}>
                            {item.description}
                          </p>
                          {item.bullets && item.bullets.length > 0 && (
                            <ul className="mt-3 space-y-1.5">
                              {item.bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                                  <span className="mt-1">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Call to Action Section */}

          {/* Treatment Process & Patient Journey - Timeline */}
          <div className="mb-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {processHeading}
              </h2>
              {processIntro && (
                <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>
                  {processIntro}
                </p>
              )}
            </div>

            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, idx) => {
                const num = step.index;
                const Icon = num === 1 ? ClipboardList
                  : num === 2 ? FileSearch
                  : num === 3 ? Pill
                  : num === 4 ? Utensils
                  : num === 5 ? Activity
                  : Home;
                const badgeText = num === 1 ? 'Day 1' : num === 2 ? 'Day 1-2' : num === 3 ? 'Ongoing' : num === 4 ? 'Daily' : num === 5 ? 'Throughout Stay' : 'Post-Discharge';
                const showLine = idx < processSteps.length - 1;
                return (
                  <div key={idx} className={`relative flex items-start gap-3 md:gap-6 ${idx < processSteps.length - 1 ? 'mb-8 md:mb-12' : ''} group`}>
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                        {num}
                      </div>
                      {showLine && <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>}
                    </div>
                    <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-base md:text-xl font-bold text-primary">
                              {step.title}
                            </h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {badgeText}
                            </span>
        </div>
        </div>
                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                          {step.description}
                        </p>
                        {step.bullets && step.bullets.length > 0 && (
                          <ul className="mt-3 space-y-1.5">
                            {step.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                                <span className="mt-1">•</span>
                                <span>{b}</span>
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
          <div className="mb-12 rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Ready to Start Your Wellness Journey?
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-6" style={{ color: '#7F543D' }}>
                  Take the first step towards holistic healing. Our expert team is here to guide you through personalized treatment plans tailored to your unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-5 lg:px-8 lg:py-6 text-sm md:text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    Book Consultation Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-5 lg:px-8 lg:py-6 text-sm md:text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    Chat With Us
                  </Button>
                </div>
                <p className="text-xs md:text-sm" style={{ color: '#7F543D' }}>
                  📞 Call us: <a href="tel:+919999999999" className="text-primary font-semibold hover:underline">+91 99 9999 9999</a>
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img
                  src="/Center Images/Namastedwaar/image gallery/Namastedwaar-01.jpg"
                  alt="Namaste Dwaar"
                  className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#D9E3DC' }}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Facilities & Amenities</h2>
            <p className="text-sm md:text-base" style={{ color: '#7F543D' }}>
              Experience healing in comfort with our comprehensive range of traditional and modern facilities
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto mb-8">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all" onClick={() => { setFacilityAutoPlay(false); setFacilityIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length); }} aria-label="Prev">
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all" onClick={() => { setFacilityAutoPlay(false); setFacilityIndex((prev) => (prev + 1) % facilityImages.length); }} aria-label="Next">
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="overflow-hidden px-6 md:px-10">
              <div className="md:hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${facilityIndex * 100}%)` }}>
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}>
                        <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Tablet: Show 4 at a time (md) */}
              <div className="hidden md:block lg:hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${Math.min(facilityIndex, facilityImages.length - 4) * 25}%)` }}>
                  {facilityImages.map((image, index) => (
                    <div key={index} className="md:w-1/4 flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl md:p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}>
                        <img src={image} alt={`Facility ${index + 1}`} className="w-full md:aspect-[3/2] object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Show 5 at a time (lg+) */}
              <div className="hidden lg:block">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${Math.min(facilityIndex, facilityImages.length - 5) * 20}%)` }}>
                  {facilityImages.map((image, index) => (
                    <div key={index} className="lg:w-1/5 flex-shrink-0 px-3">
                      <div className="bg-white rounded-xl lg:p-3 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}>
                        <img src={image} alt={`Facility ${index + 1}`} className="w-full lg:aspect-[4/3] object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-1">
              {facilityImages.map((_, i) => (
                <span key={i} onClick={() => { setFacilityAutoPlay(false); setFacilityIndex(i); }} className={`inline-block w-2 h-2 rounded-full cursor-pointer ${i === facilityIndex ? 'bg-primary' : 'bg-primary/30'}`}></span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityItems.map((item, idx) => {
              const t = item.title.toLowerCase();
              const Icon = t.includes('spa') || t.includes('wellness') ? Droplet
                : t.includes('consultation') || t.includes('doctor') || t.includes('ayush') ? ClipboardList
                : t.includes('yoga') || t.includes('meditation') ? Brain
                : t.includes('pool') ? Activity
                : t.includes('restaurant') || t.includes('dining') ? Utensils
                : t.includes('garden') || t.includes('herb') || t.includes('organic') ? Leaf
                : t.includes('accommodation') || t.includes('suite') || t.includes('room') ? Home
                : t.includes('machaan') || t.includes('lounge') ? Building2
                : t.includes('game') || t.includes('recreation') ? Activity
                : t.includes('library') || t.includes('reading') ? BookOpen
                : t.includes('conference') || t.includes('event') || t.includes('wedding') ? Award
                : t.includes('pet') || t.includes('dog') ? PawPrint
                : Home;
              return (
              <Card key={idx} className="border-2 border-transparent hover:border-primary transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <ul className="space-y-1.5">
                        {item.bullets.slice(0, 4).map((b, i) => (
                          <li key={i} className="flex items-start gap-2" style={{ color: '#7F543D' }}>
                            <span className="mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12 rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
          <div className="text-center mb-6 md:mb-8 max-w-5xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-primary mb-2">Founder & Team Info</h2>
            { (founderTeamSubtitle || '').length > 0 && (
              <p className="text-sm md:text-base max-w-3xl mx-auto" style={{ color: '#7F543D' }}>
                {founderTeamSubtitle}
              </p>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-transparent hover:border-primary transition-all hover:shadow-md">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <img src="/Center Images/Namastedwaar/Founder and team/Founder Arvind adn charul Rathi.jpg" alt="Founder" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-primary mb-1">{founderTitle}</h3>
                    {founderSubtitle && (<div className="text-xs md:text-sm mb-2" style={{ color: '#7F543D' }}>{founderSubtitle}</div>)}
                    {founderDesc && (<p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{founderDesc}</p>)}
                    {founderBullets.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold mb-2" style={{ color: '#7F543D' }}>Leadership & Expertise</div>
                        <div className="flex flex-wrap gap-2">
                          {founderBullets.slice(0, 6).map((b, i) => (
                            <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">{b}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-transparent hover:border-primary transition-all hover:shadow-md">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <img src="/Center Images/Namastedwaar/Founder and team/Medical team.jpg" alt="Medical Team" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-primary mb-1">{teamTitle}</h3>
                    {teamSubtitle && (<div className="text-xs md:text-sm mb-2" style={{ color: '#7F543D' }}>{teamSubtitle}</div>)}
                    {teamDesc && (<p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{teamDesc}</p>)}
                    {teamBullets.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold mb-2" style={{ color: '#7F543D' }}>Specialized Practitioners</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {teamBullets.slice(0, 8).map((b, i) => (
                            <div key={i} className="text-xs flex items-center gap-2 text-primary">
                              <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                              <span className="" style={{ color: '#7F543D' }}>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12 max-w-6xl mx-auto px-3 md:px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: '#7F543D' }}>
              Hear from our patients about their transformational healing journeys
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="text-primary/20 mb-3 md:mb-4">
                    <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {testimonials.length > 0 && (
                  <div className="mb-4 md:mb-6">
                    <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: '#7F543D' }}>
                      "{testimonials[currentReview].review}"
                    </p>
                  </div>
                  )}

                  {testimonials.length > 0 && (
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    {testimonials[currentReview].image ? (
                      <img src={testimonials[currentReview].image} alt={testimonials[currentReview].name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary shadow-lg flex-shrink-0 select-none pointer-events-none" />
                    ) : (
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                        {testimonials[currentReview].avatar}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base md:text-xl font-semibold text-primary">{testimonials[currentReview].name}</h4>
                        {testimonials[currentReview].verified && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">✓ Verified</span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        {testimonials[currentReview].location}{testimonials[currentReview].condition ? ` • ${testimonials[currentReview].condition}` : ''}
                      </p>
                      {testimonials[currentReview].date && (<p className="text-xs text-gray-500 mt-1">{testimonials[currentReview].date}</p>)}
                    </div>
                  </div>
                  )}

                  {testimonials.length > 0 && (
                  <div className="flex items-center gap-2 md:gap-3">
                    {renderStars(testimonials[currentReview].rating)}
                    <span className="text-xs md:text-sm font-semibold text-primary">{testimonials[currentReview].rating}.0</span>
                  </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {testimonials.length > 1 && (
            <>
              <button onClick={goToPreviousReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Previous review">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              <button onClick={goToNextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Next review">
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </>
            )}

            {isReviewAutoPlaying && testimonials.length > 0 && (
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Auto
              </div>
            )}
          </div>

        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => selectReview(idx)} className={`transition-all rounded-full ${currentReview === idx ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-gray-300 hover:bg-primary/50'}`} aria-label={`Go to review ${idx + 1}`} />
            ))}
          </div>
        )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-6">Awards & Media</h2>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
            <Button onClick={() => setShowAwards(true)} className={`px-3 py-2 md:px-8 md:py-6 text-xs md:text-base font-semibold transition-all ${showAwards ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'}`}>
              <Award className="mr-1 md:mr-2 h-3 w-3 md:h-5 md:w-5" />
              Awards
            </Button>
            <Button onClick={() => setShowAwards(false)} className={`px-3 py-2 md:px-8 md:py-6 text-xs md:text-base font-semibold transition-all ${!showAwards ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'}`}>
              <FileSearch className="mr-1 md:mr-2 h-3 w-3 md:h-5 md:w-5" />
              Media Recognition
            </Button>
          </div>

          {showAwards && (
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {(awardsList.length ? awardsList : awardsDescriptions.map((d, i) => ({ title: `Award ${i+1}`, desc: d }))).map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                <div className="flex flex-col items-center mb-4">
                  <img src={`/Center Images/Namastedwaar/Awards and media/Award-0${idx+1}.jpg`} alt={`Award ${idx+1}`} className="w-40 h-40 md:w-48 md:h-48 object-contain mb-4" />
                  <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">{item.title}</h4>
                </div>
                <div className="space-y-3 text-sm md:text-base" style={{ color: '#7F543D' }}>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          )}

          {!showAwards && (
            <div className="relative">
              <div className="overflow-hidden px-6 md:px-10">
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentMediaIndex * 100}%)` }}
                  >
                    {mediaImages.map((img, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                          <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-[1.02]">
                            <img src={img} alt={`Media ${i+1}`} className="w-full h-auto object-cover" onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }} />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }}
                                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full cursor-pointer shadow"
                                aria-label={`Open media ${i+1}`}
                              >
                                <span className="text-primary font-bold text-xs flex items-center gap-2">
                                  <FileSearch className="h-4 w-4" />
                                  View
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentMediaIndex * 25}%)` }}
                  >
                    {mediaImages.map((img, i) => (
                      <div key={i} className="w-1/4 flex-shrink-0 px-3">
                        <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                          <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-[1.02]">
                            <img src={img} alt={`Media ${i+1}`} className="w-full h-auto object-cover" onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }} />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }}
                                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full cursor-pointer shadow"
                                aria-label={`Open media ${i+1}`}
                              >
                                <span className="text-primary font-bold text-xs flex items-center gap-2">
                                  <FileSearch className="h-4 w-4" />
                                  View
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => { setIsMediaAutoPlaying(false); setCurrentMediaIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length); }} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Previous">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              <button onClick={() => { setIsMediaAutoPlaying(false); setCurrentMediaIndex((prev) => (prev + 1) % mediaImages.length); }} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Next">
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              {isMediaAutoPlaying && (
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Auto
                </div>
              )}

        {mediaLightboxOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} onClick={() => setMediaLightboxOpen(false)}>
            <button onClick={(e) => { e.stopPropagation(); setMediaLightboxIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length); }} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all" aria-label="Previous">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img src={mediaImages[mediaLightboxIndex]} alt="Media" className="max-w-full max-h-[85vh] object-contain" style={{ transform: `scale(${mediaZoom})` }} />
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button className="bg-white text-primary px-3 py-2 rounded-full shadow" onClick={() => setMediaZoom((z) => Math.min(3, z + 0.2))}>+</button>
                <button className="bg-white text-primary px-3 py-2 rounded-full shadow" onClick={() => setMediaZoom((z) => Math.max(1, z - 0.2))}>-</button>
                <button className="bg-white text-primary px-3 py-2 rounded-full shadow" onClick={() => setMediaLightboxOpen(false)}>Close</button>
              </div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setMediaLightboxIndex((prev) => (prev + 1) % mediaImages.length); }} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all" aria-label="Next">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
              <div className="flex justify-center gap-2 mt-6">
                {mediaImages.map((_, idx) => (
                  <button key={idx} onClick={() => { setIsMediaAutoPlaying(false); setCurrentMediaIndex(idx); }} className={`transition-all rounded-full ${currentMediaIndex === idx ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-gray-300 hover:bg-primary/50'}`} aria-label={`Go to media ${idx + 1}`} />
                ))}
              </div>
            </div>
          )}
        </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Info</h2>
            <p className="text-base md:text-lg px-4" style={{ color: '#7F543D' }}>
              Flexible payment options and insurance support to make holistic healthcare accessible
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border-2 border-primary/20 hover:border-primary/50">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-primary mb-2">Insurance Coverage</h3>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">✓</span>
                        <span>Guests with Indian health insurance may check coverage eligibility for Ayurvedic and wellness treatments.</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">✓</span>
                        <span>Detailed invoices, treatment reports, and medical documentation provided to support claims and reimbursements.</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">✓</span>
                        <span>Assistance with claim processing and paperwork when applicable.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border-2 border-primary/20 hover:border-primary/50">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-primary mb-2">Payment Options</h3>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">✓</span>
                        <span>Cash, credit cards, debit cards, and bank transfers accepted for stays, dining, and wellness fees.</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">✓</span>
                        <span>Detailed pricing for wellness packages and treatment programs available on inquiry with the reservations team.</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">✓</span>
                        <span>Corporate wellness and group bookings customized with special pricing arrangements.</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">✓</span>
                        <span>Early booking discounts and seasonal promotional offers available periodically.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-xl border-2 border-primary/20 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">For International Patients</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  International guests are advised to check coverage with their respective insurance providers for holistic and alternative medicine treatments. The administrative team can provide necessary documentation and medical reports to support claims when applicable.
                </p>
                <p className="text-sm leading-relaxed mt-2" style={{ color: '#7F543D' }}>
                  For complete pricing details, package inclusions, and payment terms, please contact the reservations team directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: '#7F543D' }}>
              Find answers to common questions about treatments, facilities, and your healing journey
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="faq1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  What is the minimum duration for wellness programs at Namaste Dwaar?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  Wellness programs range from weekend detox packages (3 days/2 nights) to comprehensive seven-day retreats and extended Panchakarma programs (14-21 days). Minimum stay depends on chosen wellness package and individual health goals. Even brief weekend retreats provide noticeable benefits, while longer durations offer deeper therapeutic results.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  How far is Namaste Dwaar from Delhi and major cities?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                   is located just 2 hours drive from Delhi on the Delhi-Haridwar National Highway 58, at the 105 km milestone near Muzaffarnagar in Uttar Pradesh. The convenient location makes it an ideal weekend getaway or extended wellness retreat for residents of Delhi-NCR, being closer than traditional Kerala or Goa wellness destinations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  Do I need prior experience with Ayurveda or Yoga?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  No prior experience is necessary. Namaste Dwaar welcomes complete beginners and provides introductory consultations, gentle treatments, and beginner-friendly yoga classes. The experienced medical team and instructors personalize all programs according to individual fitness levels, health conditions, and familiarity with wellness practices.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  What type of food is served at Namaste Dwaar?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  Namaste Dwaar offers exceptional culinary diversity with 14 restaurants serving multiple cuisines including authentic Rajasthani, South Indian, Uttarakhand traditional food, and international options. For wellness program guests, therapeutic Ayurvedic vegetarian meals are prepared using organic ingredients according to individual dietary requirements and dosha constitutions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  Is Namaste Dwaar suitable for families with children?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  Absolutely. Namaste Dwaar is family-friendly with facilities for all ages including children's pools, outdoor games, tractor rides, farm experiences, and various recreational activities. The spacious property allows children to explore safely while adults enjoy wellness treatments. Family suites accommodate multiple members comfortably.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  Can I bring my pet dog to Namaste Dwaar?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  Yes! Namaste Dwaar is proudly dog-friendly and welcomes four-legged family members. The resort understands the joy and companionship dogs bring and extends the same warmth and hospitality to furry companions, making it an ideal destination for pet owners seeking wellness retreats.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  What should I pack for my wellness retreat at Namaste Dwaar?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  Comfortable loose cotton clothing suitable for treatments and yoga, personal toiletries, any regular medications, previous medical reports if applicable, sunscreen, insect repellent, walking shoes for farm tours, and an open mind for healing. The resort provides treatment gowns, towels, and all necessary wellness amenities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">
                  Are wellness treatments suitable for elderly guests or those with health conditions?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  Yes, Namaste Dwaar specializes in providing gentle, age-appropriate treatments for senior citizens and guests with various health conditions. AYUSH doctors carefully assess individual health status and design safe, therapeutic protocols. Treatments are monitored and adjusted based on comfort and response, ensuring safety throughout the wellness journey.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12 max-w-6xl mx-auto px-3 md:px-4">
          <Card className="mb-12 border-2 border-primary">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Contact Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p style={{ color: '#7F543D' }}>
                        Namaste Dwaar – Countryside Wellness Retreat<br />
                        NH‑58 Delhi–Haridwar Highway, 105 km milestone<br />
                        Near Muzaffarnagar, Uttar Pradesh – India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p style={{ color: '#7F543D' }}>Reservations team available for pricing and booking assistance</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p style={{ color: '#7F543D' }}>Contact the reservations desk for detailed package information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Website</h4>
                      <p className="text-primary">Official website and brochures available on request</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Distance from Delhi</h4>
                      <p style={{ color: '#7F543D' }}>Approx. 2 hours by road via NH‑58 (about 105 km)</p>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Begin Your Holistic Healing Journey at Namaste Dwaar</h3>
                <p className="opacity-90 mb-6">Experience integrated Ayurveda, nature therapy, and compassionate care—just a short drive from Delhi.</p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
                  <Phone className="mr-2 h-4 w-4" /> Book Your Consultation Today
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
        <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 backdrop-blur-lg z-50 overflow-y-auto" style={{ backgroundColor: 'rgba(237, 232, 208, 0.95)' }} onClick={() => setShowFullGallery(false)}>
          <div className="container mx-auto px-4 py-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6 sticky top-0 backdrop-blur-md py-4 z-10" style={{ backgroundColor: 'rgba(237, 232, 208, 0.9)' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Namaste Dwaar Gallery ({images.length} Photos)</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowFullGallery(false)} className="text-primary hover:bg-primary/10 h-10 w-10">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {images.map((img, idx) => (
                <div key={idx} onClick={() => { setLightboxImage(idx); setLightboxOpen(true); }} className="relative group cursor-pointer rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <img src={img} alt={`Namaste Dwaar ${idx + 1}`} className="w-full h-full object-cover aspect-square" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FileSearch className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 backdrop-blur-lg z-[60] flex flex-col items-center justify-center p-4" style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }} onClick={() => setLightboxOpen(false)}>
          <div className="absolute top-0 left-0 right-0 py-6 px-4 text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Namaste Dwaar</h2>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLightboxImage((prev) => (prev - 1 + images.length) % images.length); }} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg" aria-label="Previous">
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={images[lightboxImage]} alt={`Namaste Dwaar ${lightboxImage + 1}`} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" />
              <button onClick={() => setLightboxOpen(false)} className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg" aria-label="Close">
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                {lightboxImage + 1} / {images.length}
              </div>
              <div className="md:hidden absolute -bottom-16 left-4 right-4 flex items-center justify-between">
                <button onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)} className="bg-white text-primary px-4 py-2 rounded-full shadow-md">Previous</button>
                <button onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)} className="bg-white text-primary px-4 py-2 rounded-full shadow-md">Next</button>
              </div>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLightboxImage((prev) => (prev + 1) % images.length); }} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg" aria-label="Next">
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}

      {facilityLightboxOpen && (
        <div className="fixed inset-0 backdrop-blur-lg z-[60] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }} onClick={() => setFacilityLightboxOpen(false)}>
          <div className="absolute top-5 left-0 right-0 text-center pointer-events-none">
            <div className="inline-block bg-white/80 px-4 py-1 rounded-full shadow">
              <span className="text-primary font-bold text-sm md:text-lg">Namaste Dwaar for your Healing Journey</span>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length); }} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg" aria-label="Previous">
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative inline-block">
              <img src={facilityImages[facilityLightboxImage]} alt="Facility" className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl" />
              <button onClick={() => setFacilityLightboxOpen(false)} className="absolute top-2 right-2 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg" aria-label="Close">
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {facilityLightboxImage + 1} / {facilityImages.length}
              </div>
              <div className="md:hidden absolute -bottom-12 left-4 right-4 flex items-center justify-between">
                <button onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length); }} className="bg-white text-primary px-4 py-2 rounded-full shadow-md">Previous</button>
                <button onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length); }} className="bg-white text-primary px-4 py-2 rounded-full shadow-md">Next</button>
              </div>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length); }} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg" aria-label="Next">
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}
    </div>
  );
}
