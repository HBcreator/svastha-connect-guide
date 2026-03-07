import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MarkdownContent from "@/components/MarkdownContent";
import { MapPin, Star, Calendar, Phone, Mail, ChevronLeft, ChevronRight, ChevronDown, Video, Images, Users, TrendingUp, Heart, Droplet, Brain, Sparkles, Activity, ShieldCheck, ClipboardList, HeartPulse, Home, Stethoscope, Utensils, Award, TreePine, Globe, Building2, Pill, FileSearch, MessageCircle, CreditCard, HelpCircle, MessageCircleHeart, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function KairaliHeritage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentAward, setCurrentAward] = useState(0);
  const [maxAwardIndex, setMaxAwardIndex] = useState(0);

  // Video Gallery (SOUKYA-style)
  const [galleryVideos, setGalleryVideos] = useState<string[]>([]);
  const [selectedGalleryVideo, setSelectedGalleryVideo] = useState(0);
  const galleryVideoRef = useRef<HTMLVideoElement>(null);

  // Testimonials (Videos) (SOUKYA-style)
  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Kairali Heritage" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "F&Q" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const awardsData = [
    {
      title: "100-Year Ayurvedic Legacy",
      description: "Our retreat is backed by the trusted Kairali Group, a name with a 100-year legacy in authentic Ayurveda and holistic hospitality.",
      image: "/Center Images/Kairali Heritage/Awards/1.   Our retreat is backed by the trusted Kairali Group, a name with a 100-year legacy in authentic Ayurveda and holistic hospitality..jpg"
    },
    {
      title: "Authentic Practice Standards",
      description: "We are committed to the highest standards of authentic practice, ensuring every treatment you receive is genuine, safe, and effective.",
      image: "/Center Images/Kairali Heritage/Awards/2.   We are committed to the highest standards of authentic practice, ensuring every treatment you receive is genuine, safe, and effective..jpg"
    },
    {
      title: "Expert Medical Guidance",
      description: "Your entire journey is guided and supervised by our team of qualified and experienced Ayurvedic physicians.",
      image: "/Center Images/Kairali Heritage/Awards/3.   Your entire journey is guided and supervised by our team of qualified and experienced Ayurvedic physicians..png"
    },
    {
      title: "Genuine Malabar Hospitality",
      description: "Experience the heartfelt and genuine hospitality of the Malabar region, for which North Kerala is justly famous.",
      image: "/Center Images/Kairali Heritage/Awards/4.   Experience the heartfelt and genuine hospitality of the Malabar region, for which North Kerala is justly famous..png"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const newMax = isMobile ? awardsData.length - 1 : Math.max(0, awardsData.length - 3);
      setMaxAwardIndex(newMax);
      setCurrentAward((prev) => (prev > newMax ? 0 : prev));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [awardsData.length]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxAwardIndex]);

  useEffect(() => {
    fetch("/Center Videos/Kairali - The Ayurvedic Healing Village/testimonies/yt i frame.txt")
      .then((r) => r.text())
      .then((t) => {
        const srcs = t
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean)
          .map((line) => {
            const m = line.match(/src=["']([^"']+)["']/i);
            return m ? m[1] : "";
          })
          .filter(Boolean);
        setTestimonialVideos(srcs);
        setSelectedTestimonialVideo(0);
      })
      .catch(() => {
        setTestimonialVideos([]);
      });
  }, []);

  useEffect(() => {
    const sectionElement = testimonialSectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTestimonialsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  const buildTestimonialIframeSrc = (raw: string) => {
    try {
      const u = new URL(raw);
      u.searchParams.set("autoplay", isTestimonialsInView ? "1" : "0");
      u.searchParams.set("mute", "0");
      u.searchParams.set("rel", "0");
      return u.toString();
    } catch {
      const joiner = raw.includes("?") ? "&" : "?";
      return `${raw}${joiner}autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`;
    }
  };

  useEffect(() => {
    fetch("/Center Videos/Kairali - The Ayurvedic Healing Village/Video Gallery.txt")
      .then((r) => r.text())
      .then((t) => {
        const urls = t
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setGalleryVideos(urls);
        setSelectedGalleryVideo(0);
      })
      .catch(() => {
        setGalleryVideos([]);
      });
  }, []);

  useEffect(() => {
    const videoEl = galleryVideoRef.current;
    if (!videoEl) return;
    try {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => { });
    } catch {
      // ignore
    }
  }, [selectedGalleryVideo]);

  const goToPreviousAward = () => {
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };
  const [wellnessPrograms, setWellnessPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [whyIntro, setWhyIntro] = useState("");
  const [whyCards, setWhyCards] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ number: number; title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilityCards, setFacilityCards] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [founderIntro, setFounderIntro] = useState("");
  const [founderTitle, setFounderTitle] = useState("");
  const [founderSubtitle, setFounderSubtitle] = useState("");
  const [founderDescription, setFounderDescription] = useState("");
  const [founderTags, setFounderTags] = useState<string[]>([]);
  const [teamTitle, setTeamTitle] = useState("");
  const [teamSubtitle, setTeamSubtitle] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [teamBullets, setTeamBullets] = useState<string[]>([]);
  const [reviewsIntro, setReviewsIntro] = useState("");
  const [reviews, setReviews] = useState<{ id: number; name: string; location: string; title: string; review: string; rating: number; verified: boolean }[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [insuranceIntro, setInsuranceIntro] = useState("");
  const [insuranceCoverage, setInsuranceCoverage] = useState<string[]>([]);
  const [paymentOptions, setPaymentOptions] = useState<string[]>([]);
  const [internationalNote, setInternationalNote] = useState("");
  const [faqIntro, setFaqIntro] = useState("");
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactPhones, setContactPhones] = useState<string[]>([]);
  const [contactEmails, setContactEmails] = useState<string[]>([]);
  const [contactWebsite, setContactWebsite] = useState("");
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [contactAirportDistance, setContactAirportDistance] = useState("");
  const [contactTransportText, setContactTransportText] = useState("");
  const [contactBookingNotice, setContactBookingNotice] = useState("");
  const images = [
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-01.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-02.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-03.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-04.jpeg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-05.jpeg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-06.jpeg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-07.jpeg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-08.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-09.jpeg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-10.jpeg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-11.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-12.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-13.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-14.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-15.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-16.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-17.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-18.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-19.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-20.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-21.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-22.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-23.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-24.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-25.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-26.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-27.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-28.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-29.jpg",
    "/Center Images/Kairali Heritage/Photo Gallery/Kairali Heritage-30.jpg",
  ];
  const videoFiles = [
    "/Center Videos/Kairali Heritage/Kairali Heritage V-1.mp4",
    "/Center Videos/Kairali Heritage/Kairali Heritage V-2.mp4",
  ];
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const facilityImages = [
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-01.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-02.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-03.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-04.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-05.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-06.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-07.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-08.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-09.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-10.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-11.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-12.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-13.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-14.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-15.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-16.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-17.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-18.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-19.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-20.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-21.jpeg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-22.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-23.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-24.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-25.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-26.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-27.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-28.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-29.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-30.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-31.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-32.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-33.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-35.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-36.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-37.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-38.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-39.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-40.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-41.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-42.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-43.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-44.jpg",
    "/Center Images/Kairali Heritage/Facilities & Amenities/Kairali Facilities-45.jpg",
  ];



  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Frequently Asked Questions.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const intro: string[] = [];
        const items: { question: string; answer: string }[] = [];
        let i = 0;
        while (i < lines.length && !/^\*\*\d+\.\s/.test(lines[i] || "")) {
          const t = (lines[i] || "").trim();
          if (t.startsWith("###")) { i++; continue; }
          if (t) intro.push(t);
          i++;
        }
        while (i < lines.length) {
          const head = (lines[i] || "").trim();
          const m = head.match(/^\*\*(\d+)\.\s*(.+)\*\*$/);
          if (!m) { i++; continue; }
          const question = m[2].trim();
          i++;
          const answer: string[] = [];
          while (i < lines.length && !/^\*\*\d+\.\s/.test(lines[i] || "")) {
            const t = (lines[i] || "").trim();
            if (t) answer.push(t);
            i++;
          }
          items.push({ question, answer: answer.join(" ") });
        }
        setFaqIntro(intro.join(" ") || "Find answers to common questions about treatments, facilities, and your healing journey");
        setFaqs(items);
      })
      .catch(() => {
        setFaqIntro("Find answers to common questions about treatments, facilities, and your healing journey");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/contact info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let section: "none" | "address" | "phone" | "email" | "website" | "important" | "distance" | "how" | "air" | "train" | "road" | "transport" | "support" = "none";
        const addr: string[] = [];
        const phones: string[] = [];
        const emails: string[] = [];
        let website = "";
        const distanceList: string[] = [];
        const important: string[] = [];
        const transport: string[] = [];
        for (const raw of lines) {
          const line = (raw || "").trim();
          if (!line) continue;
          if (line.startsWith("###")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.replace(/^\*\*/, "").replace(/\*\*$/, "").trim();
            if (/^Address$/i.test(t)) { section = "address"; continue; }
            if (/^Phone Numbers$/i.test(t)) { section = "phone"; continue; }
            if (/^Email$/i.test(t)) { section = "email"; continue; }
            if (/^Website$/i.test(t)) { section = "website"; continue; }
            if (/^Important Booking Notice$/i.test(t)) { section = "important"; continue; }
            if (/^Distance from Major Locations$/i.test(t)) { section = "distance"; continue; }
            if (/^Transportation Services$/i.test(t)) { section = "transport"; continue; }
            if (/^Customer Support$/i.test(t)) { section = "support"; continue; }
            continue;
          }
          if (section === "address") addr.push(line);
          else if (section === "phone") {
            let p = line;
            p = p.replace(/^Tel:\s*/, "").replace(/^Landline:\s*/, "");
            phones.push(p);
          } else if (section === "email") emails.push(line);
          else if (section === "website") website = line;
          else if (section === "important") important.push(line);
          else if (section === "distance") {
            const d = line.replace(/^\*\s*/, "");
            if (d) distanceList.push(d);
          } else if (section === "transport") transport.push(line);
        }
        setContactAddress(addr);
        setContactPhones(phones);
        setContactEmails(emails);
        setContactWebsite(website);
        setContactDistances(distanceList);
        const airportLine = distanceList.find((d) => /International Airport/i.test(d)) || "Kannur International Airport: 16 km - 25 minutes drive";
        setContactAirportDistance(airportLine);
        setContactTransportText(transport.join(" "));
        setContactBookingNotice(important.join(" "));
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const intro: string[] = [];
        const cards: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let seenHeading = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            if (current) cards.push(current);
            current = { title: line.replace(/^###\s+/, ""), description: "", bullets: [] };
            seenHeading = true;
            continue;
          }
          if (!seenHeading) {
            if (line) intro.push(line);
            continue;
          }
          if (!current) continue;
          if (line.startsWith("*")) {
            current.bullets.push(line.replace(/^\*\s*/, "").trim());
          } else {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }
        if (current) cards.push(current);
        setFacilitiesIntro(intro.filter(Boolean).slice(1).join(" ") || intro[1] || "Experience healing in comfort with our comprehensive range of traditional and modern facilities");
        setFacilityCards(cards);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let section: "intro" | "founder" | "team" | "founderTags" | "teamBullets" = "intro";
        const intro: string[] = [];
        const fTags: string[] = [];
        const tBullets: string[] = [];
        let fDesc = "";
        let tDesc = "";
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const bold = line.replace(/^\*\*/, "").replace(/\*\*$/, "").trim();
            if (/^Expert Medical Team$/i.test(bold)) { section = "team"; setTeamTitle(bold); continue; }
            if (/^Specialized Practitioners:?$/i.test(bold)) { section = "teamBullets"; continue; }
            if (/^Guardians of Traditional Healing$/i.test(bold)) { setTeamSubtitle(bold); continue; }
            if (/^Leadership & Expertise:?$/i.test(bold)) { section = "founderTags"; continue; }
            if (/^Founders & Visionaries$/i.test(bold)) { setFounderSubtitle(bold); continue; }
            if (/^Mr\..*Ramesh/i.test(bold)) { section = "founder"; setFounderTitle(bold); continue; }
          }
          if (line.startsWith("*")) {
            const item = line.replace(/^\*\s*/, "").trim();
            if (section === "founderTags") fTags.push(item);
            else if (section === "teamBullets") tBullets.push(item);
            continue;
          }
          if (section === "intro") intro.push(line);
          else if (section === "founder") fDesc += (fDesc ? " " : "") + line;
          else if (section === "team") tDesc += (tDesc ? " " : "") + line;
        }
        setFounderIntro(intro.join(" "));
        setFounderDescription(fDesc);
        setTeamDescription(tDesc);
        setFounderTags(fTags);
        setTeamBullets(tBullets);
      })
      .catch(() => { });
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 md:h-5 md:w-5 ${i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
              }`}
          />
        ))}
      </div>
    );
  };

  const goToPreviousReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const selectReview = (idx: number) => {
    setCurrentReview(idx);
  };

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { id: number; name: string; location: string; title: string; review: string; rating: number; verified: boolean }[] = [];
        let current: { id: number; name: string; location: string; title: string; review: string; rating: number; verified: boolean } | null = null;
        let idCounter = 1;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (!line || line.startsWith("###")) continue;

          // Match Name - Location: **Name - Location**
          const nameMatch = line.match(/^\*\*(.+?)\*\*$/);
          if (nameMatch && !line.includes("Rating:")) {
            if (current) items.push(current);
            const fullStr = nameMatch[1];
            const parts = fullStr.split(" - ");
            const name = parts[0] || "";
            const location = parts[1] || "";
            current = { id: idCounter++, name, location, title: "", review: "", rating: 5, verified: true };
            continue;
          }

          // Match Title: *"Title"*
          if (current && line.startsWith('*"') && line.endsWith('"*')) {
            current.title = line.slice(2, -2);
            continue;
          }

          // Match Rating: **Rating: ????? (5/5)**
          if (current && line.includes("Rating:")) {
            const ratingMatch = line.match(/\((\d+)\/5\)/);
            if (ratingMatch) {
              current.rating = parseInt(ratingMatch[1]);
            }
            continue;
          }

          // Everything else is review content
          if (current && line && !line.startsWith("**") && !line.startsWith("*")) {
            current.review = current.review ? current.review + " " + line : line;
          }
        }
        if (current) items.push(current);
        setReviews(items);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reviews.length]);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Insurance  and payment.txt")
      .then((res) => res.text())
      .then((text) => {
        const fallbackIntro = "Flexible payment options and insurance support to make holistic healthcare accessible";
        const fallbackCoverage = [
          "Serious medical conditions covered by Indian Insurance providers",
          "Cashless treatment facility available for eligible conditions",
          "Support with major insurance providers in India",
          "International patients can check with their insurance providers",
        ];
        const fallbackPayments = [
          "Payment plans available for eligible patients",
          "Financial assistance programs for qualifying cases",
          "Multiple payment methods accepted (cards, bank transfer, etc.)",
          "Transparent pricing with no hidden costs",
        ];
        const fallbackInternational = "International patients are advised to check with their respective insurance providers regarding coverage for holistic and alternative medicine treatments. Our administrative team can provide necessary documentation and medical reports to support your insurance claims.";

        if (!text || !text.trim()) {
          setInsuranceIntro(fallbackIntro);
          setInsuranceCoverage(fallbackCoverage);
          setPaymentOptions(fallbackPayments);
          setInternationalNote(fallbackInternational);
          return;
        }
        const lines = text.split("\n");
        let section: "intro" | "coverage" | "payment" | "intl" = "intro";
        const intro: string[] = [];
        const coverage: string[] = [];
        const payments: string[] = [];
        let intl = "";
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("###")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.replace(/^\*\*/, "").replace(/\*\*$/, "").trim();
            if (/^Insurance Coverage$/i.test(t)) { section = "coverage"; continue; }
            if (/^Payment Options$/i.test(t)) { section = "payment"; continue; }
            if (/^For International Patients$/i.test(t)) { section = "intl"; continue; }
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*\s*/, "").trim();
            if (section === "coverage") coverage.push(bullet);
            else if (section === "payment") payments.push(bullet);
            else intro.push(bullet);
            continue;
          }
          if (section === "intro") intro.push(line);
          else if (section === "intl") intl += (intl ? " " : "") + line;
        }
        setInsuranceIntro(intro.join(" ") || fallbackIntro);
        setInsuranceCoverage(coverage.length ? coverage : fallbackCoverage);
        setPaymentOptions(payments.length ? payments : fallbackPayments);
        setInternationalNote(intl || fallbackInternational);
      })
      .catch(() => {
        setInsuranceIntro("Flexible payment options and insurance support to make holistic healthcare accessible");
        setInsuranceCoverage([
          "Serious medical conditions covered by Indian Insurance providers",
          "Cashless treatment facility available for eligible conditions",
          "Support with major insurance providers in India",
          "International patients can check with their insurance providers",
        ]);
        setPaymentOptions([
          "Payment plans available for eligible patients",
          "Financial assistance programs for qualifying cases",
          "Multiple payment methods accepted (cards, bank transfer, etc.)",
          "Transparent pricing with no hidden costs",
        ]);
        setInternationalNote("International patients are advised to check with their respective insurance providers regarding coverage for holistic and alternative medicine treatments. Our administrative team can provide necessary documentation and medical reports to support your insurance claims.");
      });
  }, []);

  useEffect(() => {
    if (facilityLightboxOpen) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityImages.length, facilityLightboxOpen]);

  const getFacilityIcon = (title: string) => {
    const t = title.toLowerCase();
    return t.includes("ayurveda") || t.includes("treatment") ? <Droplet className="h-7 w-7 text-white" />
      : t.includes("doctor") ? <Stethoscope className="h-7 w-7 text-white" />
        : t.includes("cottage") || t.includes("room") ? <Building2 className="h-7 w-7 text-white" />
          : t.includes("restaurant") || t.includes("dining") || t.includes("meal") ? <Utensils className="h-7 w-7 text-white" />
            : t.includes("pool") || t.includes("recreation") ? <Activity className="h-7 w-7 text-white" />
              : t.includes("business") || t.includes("conference") ? <Globe className="h-7 w-7 text-white" />
                : t.includes("fitness") || t.includes("gym") ? <Activity className="h-7 w-7 text-white" />
                  : t.includes("travel") || t.includes("tour") || t.includes("airport") ? <MapPin className="h-7 w-7 text-white" />
                    : t.includes("laundry") ? <Sparkles className="h-7 w-7 text-white" />
                      : t.includes("parking") ? <Home className="h-7 w-7 text-white" />
                        : t.includes("internet") || t.includes("wi-fi") ? <Globe className="h-7 w-7 text-white" />
                          : t.includes("garden") || t.includes("nature") || t.includes("walks") ? <TreePine className="h-7 w-7 text-white" />
                            : t.includes("steam") || t.includes("spa") ? <Droplet className="h-7 w-7 text-white" />
                              : t.includes("cultural") ? <Award className="h-7 w-7 text-white" />
                                : <ShieldCheck className="h-7 w-7 text-white" />;
  };

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Wellness & Rejuvenation.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const programs: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        const beforeFirstHeading: string[] = [];
        let seenHeading = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (line.startsWith("### ")) {
            if (current) programs.push(current);
            current = { title: line.replace(/^###\s+/, ""), description: "", bullets: [] };
            seenHeading = true;
            continue;
          }
          if (!seenHeading) {
            if (line && !line.startsWith("**")) beforeFirstHeading.push(line);
            continue;
          }
          if (!current) continue;
          if (line.startsWith("*")) {
            current.bullets.push(line.replace(/^\*\s*/, "").trim());
            continue;
          }
          if (line) {
            current.description += (current.description ? " " : "") + line;
          }
        }
        if (current) programs.push(current);
        setWellnessPrograms(programs);
        setWellnessIntro(beforeFirstHeading.join(" "));
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Medical Treatment Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const programs: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let seenHeading = false;
        let introLines: string[] = [];
        for (const raw of lines) {
          const line = raw.trim();
          if (line.startsWith("### ")) { seenHeading = true; continue; }
          if (!seenHeading) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) programs.push(current);
            const title = line.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
            current = { title, description: "", bullets: [] };
            continue;
          }
          if (!current) {
            if (line) {
              introLines.push(line);
            }
            continue;
          }
          if (line.startsWith("*")) {
            current.bullets.push(line.replace(/^\*\s*/, "").trim());
            continue;
          }
          if (line) {
            current.description += (current.description ? " " : "") + line;
          }
        }
        if (current) programs.push(current);
        setMedicalIntro(introLines.join(" "));
        setMedicalPrograms(programs);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Why Choose Kairali Heritage.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let introCollected = false;
        const intro: string[] = [];
        const cards: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let seenHeading = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (line.startsWith("### ")) { seenHeading = true; continue; }
          if (!seenHeading) continue;
          if (line && !current && !introCollected && !line.startsWith("**")) { intro.push(line); continue; }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (!introCollected) { introCollected = true; }
            if (current) cards.push(current);
            const title = line.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
            current = { title, description: "", bullets: [] };
            continue;
          }
          if (!current) continue;
          if (line.startsWith("*")) {
            current.bullets.push(line.replace(/^\*\s*/, "").trim());
            continue;
          }
          if (line) {
            current.description += (current.description ? " " : "") + line;
          }
        }
        if (current) cards.push(current);
        setWhyIntro(intro.join(" "));
        setWhyCards(cards);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let seenHeading = false;
        const intro: string[] = [];
        const steps: { number: number; title: string; description: string; bullets: string[] }[] = [];
        let current: { number: number; title: string; description: string; bullets: string[] } | null = null;
        for (const raw of lines) {
          const line = raw.trim();
          if (line.startsWith("### ")) { seenHeading = true; continue; }
          if (!seenHeading) continue;
          // Step heading like: "1.  **Title**" or fallback "**1. Title**"
          const numberedBold = line.match(/^(\d+)\.\s+\*\*(.*?)\*\*$/);
          if (numberedBold) {
            const num = parseInt(numberedBold[1], 10);
            const title = numberedBold[2].trim();
            if (current) steps.push(current);
            current = { number: num, title, description: "", bullets: [] };
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const titleRaw = line.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
            const match = titleRaw.match(/^(\d+)\.\s*(.*)$/);
            const num = match ? parseInt(match[1], 10) : steps.length + 1;
            const title = match ? match[2].trim() : titleRaw;
            if (current) steps.push(current);
            current = { number: num, title, description: "", bullets: [] };
            continue;
          }
          if (!current) {
            if (line) intro.push(line);
            continue;
          }
          if (line.startsWith("*") || line.startsWith("-")) {
            current.bullets.push(line.replace(/^[-*]\s*/, "").trim());
            continue;
          }
          if (line) {
            current.description += (current.description ? " " : "") + line;
          }
        }
        if (current) steps.push(current);
        setTreatmentIntro(intro.join(" "));
        setTreatmentSteps(steps);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    if (showVideoGallery || lightboxOpen || showFullGallery) return;
    const id = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [showVideoGallery, lightboxOpen, showFullGallery, images.length]);


  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length]);

  useEffect(() => {
    if (!showFullGallery) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowFullGallery(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showFullGallery]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Kairali Heritage Resort</h1>
                <p className="text-xl mb-4 opacity-90">Riverside Ayurveda & Wellness Retreat</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Kannur, Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(2000+ reviews)</span>
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

      <div className="container mx-auto px-3 md:px-4 max-w-full">
        <div className="max-w-6xl mx-auto mt-6">
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
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[220px] md:h-[500px] lg:h-[420px] group">
                  <img
                    src={images[selectedImage]}
                    alt="Kairali Heritage"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <button
                    onClick={() => { setSelectedImage((prev) => (prev - 1 + images.length) % images.length); }}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => { setSelectedImage((prev) => (prev + 1) % images.length); }}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Auto
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 mb-6">
                  <div
                    className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                    onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
                  >
                    <img
                      src={images[0]}
                      alt="Kairali"
                      className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {images.slice(1, 5).map((src, idx) => {
                      const isLastImage = idx === 3;
                      const actualIndex = idx + 1;
                      return (
                        <div key={idx} className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                          onClick={() => { setLightboxIndex(actualIndex); setLightboxOpen(true); }}>
                          <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '100%' }}>
                            <img src={src} alt={`Kairali ${actualIndex + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                            {isLastImage && (
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
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full">
                  <AspectRatio ratio={16 / 9}>
                    <video key={selectedVideo} src={videoFiles[selectedVideo]} controls className="w-full h-full object-cover bg-black"></video>
                  </AspectRatio>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {images.slice(0, 2).map((src, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden cursor-pointer" onClick={() => setSelectedVideo(i)}>
                      <img src={src} className="w-full h-[160px] object-cover" alt="Kairali video thumb" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
          {/* Left Arrow (desktop only) */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          {/* Right Arrow (desktop only) */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % images.length)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
              Kairali Heritage Resort
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={images[lightboxIndex]}
                alt={`Kairali ${lightboxIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close">X</button>
            </div>
            {/* Mobile prev/next pills */}
            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Previous
              </Button>
              <Button
                onClick={() => setLightboxIndex((prev) => (prev + 1) % images.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Next
              </Button>
            </div>
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
              <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">
                Kairali Heritage Resort
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full cursor-pointer"
                  style={{ paddingBottom: "75%" }}
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                >
                  <img src={img} alt={`Kairali ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-strong:text-primary">
              <MarkdownContent
                contentPath="/content/Top Centers/Kairali Heritage/Kairali Heritage.txt"
                h3ClassName="text-xl sm:text-2xl md:text-2xl font-semibold text-primary leading-snug"
                titleClassName="text-2xl sm:text-3xl md:text-3xl font-semibold text-primary border-b-2 border-primary/20 pb-2"
                onLinkClick={(action) => {
                  if (action === 'quote') {
                    setQuoteModalOpen(true);
                  }
                }}
              />
            </CardContent>
          </Card>
          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }} id="wellness">
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">2000+</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.9/5</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Average Rating</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">99%</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Success Rate</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 border-2 border-green-700">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
                {wellnessIntro || "Cleanse, de-stress, and revitalize with our holistic wellness programs"}
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wellnessPrograms.map((p, idx) => {
                const key = p.title.toLowerCase();
                const icon = key.includes('purification') || key.includes('panchakarma') ? <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  : key.includes('stress') ? <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                    : key.includes('rejuvenation') || key.includes('anti-aging') ? <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                      : key.includes('weight') ? <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        : key.includes('immunity') ? <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                          : key.includes('preventive') ? <ClipboardList className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                            : key.includes('post-illness') ? <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                              : key.includes('corporate') ? <Users className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                : key.includes('family') ? <Home className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                  : key.includes('extended') ? <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                    : <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
                return (
                  <AccordionItem key={idx} value={`program-${idx}`} className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-700 transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-green-700">
                      <div className="flex items-center gap-2 md:gap-3 min-w-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-700 flex-shrink-0">
                          {icon}
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {p.description && (
                        <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                          {p.description}
                        </p>
                      )}
                      {p.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {p.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-green-600 mt-1">&#10003;</span>
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

          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 border-2 border-blue-700">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
                {medicalIntro || "Comprehensive holistic treatment for acute, chronic, and complex medical conditions"}
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalPrograms.map((p, idx) => {
                const key = p.title.toLowerCase();
                const icon = key.includes('arthritis') ? <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  : key.includes('back pain') || key.includes('spinal') ? <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    : key.includes('stress') || key.includes('anxiety') || key.includes('mental') ? <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                      : key.includes('diabetes') ? <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        : key.includes('hypertension') || key.includes('cardiovascular') || key.includes('heart') ? <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                          : key.includes('obesity') || key.includes('weight') ? <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                            : key.includes('digestive') || key.includes('gastro') ? <Utensils className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                              : key.includes('respiratory') || key.includes('asthma') || key.includes('sinusitis') ? <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                : key.includes('skin') ? <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                  : key.includes('thyroid') ? <ClipboardList className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                    : key.includes('women') ? <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                      : key.includes('neurological') ? <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                        : key.includes('fatigue') ? <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                          : key.includes('pain') ? <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                            : <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
                return (
                  <AccordionItem key={idx} value={`medical-${idx}`} className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-blue-700">
                      <div className="flex items-center gap-2 md:gap-3 min-w-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-700 flex-shrink-0">
                          {icon}
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary truncate text-left">{p.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {p.description && (
                        <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                          {p.description}
                        </p>
                      )}
                      {p.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {p.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-blue-600 mt-1">&#10003;</span>
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

          {/* Video Gallery Section */}
          <div className="mb-12" id="videos">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Video Gallery of Kairali Heritage
              </h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene riverside atmosphere and authentic Ayurvedic healing journey at Kairali Heritage through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    {galleryVideos[selectedGalleryVideo] && (
                      <video
                        ref={galleryVideoRef}
                        key={galleryVideos[selectedGalleryVideo]}
                        src={galleryVideos[selectedGalleryVideo]}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows - Desktop Only */}
              {galleryVideos.length > 1 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                  <button
                    onClick={() => setSelectedGalleryVideo((prev) => (prev - 1 + galleryVideos.length) % galleryVideos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Previous video"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => setSelectedGalleryVideo((prev) => (prev + 1) % galleryVideos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Next video"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              )}

              {/* Navigation Buttons - Mobile Only */}
              {galleryVideos.length > 1 && (
                <div className="flex md:hidden items-center justify-between mt-4 px-6">
                  <Button
                    onClick={() => setSelectedGalleryVideo((prev) => (prev - 1 + galleryVideos.length) % galleryVideos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setSelectedGalleryVideo((prev) => (prev + 1) % galleryVideos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Next
                  </Button>
                </div>
              )}

              {/* Indicators */}
              {galleryVideos.length > 1 && (
                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                  {galleryVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedGalleryVideo(index)}
                      className={`transition-all ${index === selectedGalleryVideo
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
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Why Choose Kairali Heritage for Your Holistic Health Journey</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: '#7F543D' }}>
                {whyIntro || "Discover what makes Kairali Heritage a unique destination for authentic Ayurvedic healing in North Kerala"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyCards.map((c, idx) => {
                const key = c.title.toLowerCase();
                const icon = key.includes('riverside') || key.includes('mangrove') ? <TreePine className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  : key.includes('authentic') || key.includes('tradition') ? <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    : key.includes('cottages') ? <Home className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      : key.includes('airport') || key.includes('railway') || key.includes('location') ? <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        : key.includes('doctors') || key.includes('therapists') ? <Stethoscope className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                          : key.includes('family') ? <Users className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                            : key.includes('treasures') || key.includes('beaches') || key.includes('cultural') ? <Globe className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                              : key.includes('pollution') || key.includes('nature') ? <TreePine className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                : key.includes('service') || key.includes('personalized') ? <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                  : <Building2 className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
                return (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            {icon}
                          </div>
                          <h3 className="text-lg font-bold text-primary">{c.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-left" style={{ color: '#7F543D' }}>{c.description}</p>
                        {c.bullets && c.bullets.length > 0 && (
                          <ul className="list-none pl-0 space-y-1.5">
                            {c.bullets.slice(0, 3).map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                                <span className="text-primary mt-1">&#10003;</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Testimonials of Kairali Heritage - Video Section */}
          <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Kairali Heritage
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
                    {testimonialVideos[selectedTestimonialVideo] && (
                      <iframe
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={buildTestimonialIframeSrc(testimonialVideos[selectedTestimonialVideo])}
                        title="Kairali Heritage Testimonial Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows - Desktop Only */}
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

              {/* Navigation Buttons - Mobile Only */}
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

              {/* Indicators */}
              {testimonialVideos.length > 1 && (
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
              )}
            </div>
          </div>

          {/* Treatment Process & Patient Journey */}
          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>
                {treatmentIntro || "Your personalized healing journey at Kairali Heritage, step by step"}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((s, idx) => {
                const key = s.title.toLowerCase();
                const icon = key.includes('consultation') || key.includes('assessment') ? <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  : key.includes('protocol') || key.includes('plan') ? <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    : key.includes('daily') && key.includes('treatment') ? <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      : key.includes('nutrition') || key.includes('meals') || key.includes('diet') ? <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        : key.includes('wellness') || key.includes('relaxation') || key.includes('activities') ? <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                          : key.includes('follow') || key.includes('maintenance') ? <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                            : <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
                return (
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
                            {icon}
                          </div>
                          <h3 className="text-base md:text-xl font-bold text-primary pr-2">{s.title}</h3>
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                          {s.description}
                        </p>
                        {s.bullets && s.bullets.length > 0 && (
                          <ul className="mt-3 space-y-1.5">
                            {s.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                                <span className="text-primary mt-1">&bull;</span>
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

          {/* CTA Section */}
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img src="/Center Images/Kairali Heritage/CTA image.jpg" alt="Kairali Heritage" className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105" />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: '#7F543D' }}>
                    Take the first step towards holistic healing. Our expert team guides you with personalized treatment plans tailored to your unique needs.
                  </p>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full rounded-full bg-[#2F5B63] hover:bg-[#234A50] text-white" onClick={() => setQuoteModalOpen(true)}>
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button size="lg" variant="outline" className="w-full rounded-full border-2 border-[#2F5B63] text-[#2F5B63]" onClick={() => setQuoteModalOpen(true)}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2" style={{ color: '#7F543D' }}>
                    <Phone className="h-4 w-4 text-red-600" />
                    <a href="tel:+918028432737" className="underline hover:text-primary">Call us: +91 80 2843 2737</a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-primary mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-base md:text-lg mb-6" style={{ color: '#7F543D' }}>
                    Take the first step toward holistic healing. Our team will guide you with personalized plans tailored to your needs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className="rounded-full px-6" onClick={() => setQuoteModalOpen(true)}>
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-6" onClick={() => setQuoteModalOpen(true)}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center gap-2" style={{ color: '#7F543D' }}>
                    <Phone className="h-5 w-5 text-red-600" />
                    <a href="tel:+918028432737" className="underline hover:text-primary">
                      Call us: +91 80 2843 2737
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Kairali Heritage/CTA image.jpg"
                    alt="Kairali Heritage"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full">
        <div className="max-w-6xl mx-auto mt-6">
          <div className="mb-12" id="facilities">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
              <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: '#7F543D' }}>{facilitiesIntro}</p>
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
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentFacilityImage * 100}%)` }}
                  >
                    {facilityImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}
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
                          onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}
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
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                        {getFacilityIcon(card.title)}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">
                        {card.title}
                      </h3>
                    </div>

                    {card.description && (
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                        {card.description}
                      </p>
                    )}

                    {card.bullets && card.bullets.length > 0 && (
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

            {/* Additional Info Banner */}
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Premium Healthcare & Hospitality Standards
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Kairali Heritage Resort combines traditional Kerala Ayurvedic wisdom with modern hospitality excellence.
                    Every facility is maintained to ensure the highest levels of safety, hygiene, and guest comfort,
                    providing a serene environment for your complete physical and mental transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 rounded-3xl p-4 md:p-10" style={{ backgroundColor: '#EDE8D0' }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h1>
              <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>{founderIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              {/* Founder Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img src="/Center Images/Kairali Heritage/Founder and team/founders.jpg" alt="Founders" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founderTitle}</h3>
                      {founderSubtitle && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: '#7F543D' }}>{founderSubtitle}</p>
                      )}
                      <p className="text-xs md:text-sm mt-1 text-primary/70 font-medium">Founder & Visionary</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{founderDescription}</p>
                  <div className="pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Leadership & Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {founderTags.map((t, i) => (
                        <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img src="/Center Images/Kairali Heritage/Founder and team/team.jpg" alt="Expert Medical Team" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{teamTitle}</h3>
                      {teamSubtitle && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: '#7F543D' }}>{teamSubtitle}</p>
                      )}
                      <p className="text-xs md:text-sm mt-1 text-primary/70 font-medium">Healthcare Specialists</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{teamDescription}</p>
                  <div className="space-y-2 pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Specialized Practitioners:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {teamBullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-xs md:text-sm font-medium" style={{ color: '#7F543D' }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="container mx-auto px-3 md:px-4 max-w-full" id="reviews">
          <div className="max-w-6xl mx-auto mt-6">
            <div className="mb-12">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
                <p className="text-base md:text-lg mx-auto px-4 max-w-3xl" style={{ color: '#7F543D' }}>
                  Hear from our patients about their transformational healing journeys
                </p>
              </div>

              <div className="relative">
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                  <CardContent className="p-5 md:p-12">
                    <div className="max-w-4xl mx-auto">
                      {/* Quote Icon */}
                      <div className="text-primary/20 mb-4 md:mb-6">
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>

                      {/* Review Content */}
                      <div className="mb-6 md:mb-8">
                        {reviews[currentReview].title && (
                          <h3 className="text-lg md:text-2xl font-bold text-primary mb-3 md:mb-5">
                            {reviews[currentReview].title}
                          </h3>
                        )}
                        <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: '#7F543D' }}>
                          "{reviews[currentReview].review}"
                        </p>
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg md:text-2xl font-bold flex-shrink-0">
                          {reviews[currentReview].name.charAt(0)}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base md:text-xl font-semibold text-primary">
                              {reviews[currentReview].name}
                            </h4>
                            {reviews[currentReview].verified && (
                              <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-1 rounded-full font-bold">
                                ? Verified
                              </span>
                            )}
                          </div>
                          <p className="text-xs md:text-sm font-medium" style={{ color: '#7F543D' }}>
                            {reviews[currentReview].location}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(reviews[currentReview].rating)}
                        <span className="text-xs md:text-sm font-bold text-primary">
                          {reviews[currentReview].rating}.0
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-6">
                  <button
                    onClick={goToPreviousReview}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
                  <button
                    onClick={goToNextReview}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectReview(idx)}
                    className={`transition-all rounded-full ${currentReview === idx
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Awards & Recognition Section */}
      <div className="container mx-auto px-3 md:px-4 max-w-full" id="awards">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary shadow-sm">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 text-center">Awards & Media</h2>
            <p className="text-base md:text-lg px-4" style={{ color: '#7F543D' }}>Recognition of our excellence in authentic Ayurvedic healing and patient care</p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="overflow-hidden px-4 md:px-10">
              {/* Mobile Slider (1 card) */}
              <div className="md:hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentAward * 100}%)` }}
                >
                  {awardsData.map((award, i) => (
                    <div key={i} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                          <img
                            src={award.image}
                            alt={award.title}
                            className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
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
                  {awardsData.map((award, i) => (
                    <div key={i} className="w-1/3 flex-shrink-0 px-4">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center text-center">
                        <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 md:mb-6 p-4 md:p-6 flex items-center justify-center overflow-hidden">
                          <img
                            src={award.image}
                            alt={award.title}
                            className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
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

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {awardsData.slice(0, maxAwardIndex + 1).map((_, i) => (
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
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full" id="insurance">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Info</h2>
              <p className="text-base md:text-lg mx-auto max-w-3xl px-4" style={{ color: '#7F543D' }}>{insuranceIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
              <Card className="rounded-2xl shadow-lg border-2 border-primary/10 hover:shadow-xl transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <ShieldCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Insurance Coverage</h3>
                  </div>
                  <ul className="space-y-3">
                    {insuranceCoverage.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#7F543D' }}>
                        <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-lg border-2 border-primary/10 hover:shadow-xl transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Payment Options</h3>
                  </div>
                  <ul className="space-y-3">
                    {paymentOptions.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#7F543D' }}>
                        <span className="text-blue-600 font-bold mt-0.5">&#10003;</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 px-4 md:px-0">
              <Card className="rounded-2xl border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-primary mb-2">For International Patients</h4>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: '#7F543D' }}>{internationalNote}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full" id="faq">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageCircleHeart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-3xl" style={{ color: '#7F543D' }}>{faqIntro}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto px-4 md:px-0">
              {faqs.map((f, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                    <span className="text-lg font-semibold text-primary text-left">{f.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 bg-white">
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: '#7F543D' }}>{f.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full" id="contact">
        <div className="max-w-6xl mx-auto mt-6">
          <div className="mb-12">
            <Card className="mb-12 border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-5 md:p-8">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/10 pb-4">Contact Information</h2>
                <div className="grid gap-8 md:grid-cols-[1fr_1.35fr] lg:gap-12">
                  <div className="space-y-6">
                    {/* Address Section */}
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Address</h4>
                        <p className="flex flex-col space-y-0.5 text-sm md:text-base leading-relaxed" style={{ color: '#7F543D' }}>
                          {contactAddress.filter(l => l.trim() !== "").map((line, i) => (
                            <span key={i}>{line}</span>
                          ))}
                        </p>
                      </div>
                    </div>

                    {/* Distances Section */}
                    {contactDistances.length > 0 && (
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-primary mb-1">Distance from Major Locations</h4>
                          <ul className="space-y-2">
                            {contactDistances.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Google Maps Section */}
                  <div className="md:-mt-16 self-start">
                    <div className="rounded-2xl bg-white/70 p-1 shadow-lg border-2 border-primary/20 overflow-hidden group">
                      <div className="rounded-xl overflow-hidden relative aspect-video md:aspect-[4/3]">
                        <iframe
                          title="Kairali Heritage Resort Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4844620741114!2d75.376571874104!3d11.940922936638218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43dcdaaaaaaab%3A0x841381b3eb708856!2sKairali%20Heritage%20River%20Side%20Resort!5e0!3m2!1sen!2sin!4v1767610469005!5m2!1sen!2sin"
                          className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transportation Banner */}
                {contactTransportText && (
                  <div className="mt-10 p-5 md:p-8 bg-primary/5 rounded-2xl border-l-4 border-l-primary shadow-inner">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <ShieldCheck className="h-7 w-7 text-primary" />
                      </div>
                      <div className="text-center md:text-left w-full">
                        <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">Transportation Services</h4>
                        <div className="max-w-none w-full">
                          <p className="text-sm md:text-base leading-relaxed text-justify md:text-left md:pr-4" style={{ color: '#7F543D' }}>
                            {contactTransportText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full">
        <div className="max-w-6xl mx-auto mt-6">
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#234A50' }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/Kairali Heritage/CTA bottom.jpg"
                    alt="Kairali Heritage Resort"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">Begin Your Holistic Healing Journey at Kairali Heritage</h2>
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
                    Begin Your <span className="text-white/90">Holistic Healing Journey</span> at <span className="text-white underline decoration-white/20 underline-offset-8">Kairali Heritage</span>
                  </h2>
                  <div className="flex flex-wrap gap-5">
                    <Button size="lg" className="rounded-full px-6 bg-white text-primary hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-6 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500" onClick={() => setQuoteModalOpen(true)}>
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
                    src="/Center Images/Kairali Heritage/CTA bottom.jpg"
                    alt="Kairali Heritage Resort"
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

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && !isJumpModalOpen && (
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Search size={18} className="-ml-1" />
          <span>BROWSE</span>
        </button>
      )}

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && !isJumpModalOpen && (
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Phone size={18} className="-ml-1" />
          <span className="hidden md:inline">GET FREE QUOTE</span>
          <span className="md:hidden">QUOTE</span>
        </button>
      )}

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && !isJumpModalOpen && (
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

            <div className="flex justify-between items-start gap-3 mb-3 relative z-10">
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[24px] md:text-[26px] font-extrabold leading-tight tracking-tight text-white break-words">
                  Sections of Kairali Heritage
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
              Holistic Healing Retreat
            </p>
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
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
              Facilities & Amenities
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={facilityImages[facilityLightboxImage]}
                alt={`Facility ${facilityLightboxImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setFacilityLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close">X</button>
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
    </div>
  );
}



