import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { MapPin, Star, Calendar, Phone, Mail, ChevronLeft, ChevronRight, ChevronDown, Video, Images, Users, TrendingUp, Heart, Droplet, Brain, Sparkles, Activity, ShieldCheck, ClipboardList, HeartPulse, Home, Stethoscope, Utensils, Award, TreePine, Globe, Building2, Pill, FileSearch, MessageCircle, CreditCard, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function KairaliHeritage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [content, setContent] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [whyIntro, setWhyIntro] = useState("");
  const [whyCards, setWhyCards] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ number: number; title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilityCards, setFacilityCards] = useState<{ title: string; bullets: string[] }[]>([]);
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
  const [reviews, setReviews] = useState<{ id: number; name: string; location: string; subtitle: string; review: string; rating: number }[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);
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
    fetch("/content/Top Centers/Kairali Heritage/Kairali Heritage.txt")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => {});
  }, []);

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
        const airportLine = distanceList.find((d) => /International Airport/i.test(d)) || "Kannur International Airport: 16 km - 25 minutes drive";
        setContactAirportDistance(airportLine);
        setContactTransportText(transport.join(" "));
        setContactBookingNotice(important.join(" "));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const intro: string[] = [];
        const cards: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        let seenHeading = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (line.startsWith("### ")) {
            if (current) cards.push(current);
            current = { title: line.replace(/^###\s+/, ""), bullets: [] };
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
          }
        }
        if (current) cards.push(current);
        setFacilitiesIntro(intro.filter(Boolean).slice(1).join(" ") || intro[1] || "Experience healing in comfort with our comprehensive range of traditional and modern facilities");
        setFacilityCards(cards);
      })
      .catch(() => {});
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
        if (!teamTitle) setTeamTitle("Expert Medical Team");
      })
      .catch(() => {});
  }, [teamTitle]);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Guest Reviews & Success Stories.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const parsed: { id: number; name: string; location: string; subtitle: string; review: string; rating: number }[] = [];
        const introCollected: string[] = [];
        let i = 0;
        while (i < lines.length && !/^\*\*\d+\.\s/.test(lines[i])) {
          const t = lines[i].trim();
          if (t.startsWith("###")) { i++; continue; }
          if (t) introCollected.push(t);
          i++;
        }
        while (i < lines.length) {
          const head = lines[i]?.trim();
          if (!head) { i++; continue; }
          const m = head.match(/^\*\*(\d+)\.\s*(.+)\*\*$/);
          if (!m) { i++; continue; }
          const id = parseInt(m[1], 10);
          const nameLoc = m[2];
          const [name, ...locParts] = nameLoc.split(",");
          const location = locParts.join(",").trim();
          i++;
          let subtitle = "";
          if (i < lines.length && /\*".*"\*/.test(lines[i])) {
            subtitle = lines[i].trim().replace(/^\*"/, "").replace(/"\*$/, "");
            i++;
          }
          const reviewLines: string[] = [];
          while (i < lines.length && !/^\*\*Rating:\s/.test(lines[i])) {
            const t = lines[i].trim();
            if (t) reviewLines.push(t);
            i++;
          }
          let rating = 5;
          if (i < lines.length && /^\*\*Rating:\s/.test(lines[i])) {
            const rline = lines[i].trim();
            const rm = rline.match(/\((\d+)\/5\)/);
            if (rm) rating = parseInt(rm[1], 10);
            i++;
          }
          parsed.push({ id, name: name.trim(), location, subtitle, review: reviewLines.join(" "), rating });
        }
        setReviewsIntro(introCollected.join(" "));
        setReviews(parsed);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!isReviewAutoPlaying || reviews.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, reviews.length]);

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
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Kairali Heritage/Medical Treatment Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const programs: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let seenHeading = false;
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
              setMedicalIntro((prev) => (prev ? prev + " " : "") + line);
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
        setMedicalPrograms(programs);
      })
      .catch(() => {});
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
      .catch(() => {});
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
      .catch(() => {});
  }, []);

  const processInlineFormatting = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const regex = /\*\*(.*?)\*\*/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(<strong key={match.index} className="font-semibold text-primary">{match[1]}</strong>);
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts.length > 0 ? parts : text;
  };

  const renderContent = () => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: "bullet" | "number" | null = null;
    let emptyLineCount = 0;
    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === "bullet") {
          elements.push(
            <ul key={`list-${elements.length}`} className="list-disc list-inside mb-6 space-y-2" style={{ color: "#7F543D" }}>
              {currentList.map((item, idx) => (<li key={idx} className="leading-relaxed">{processInlineFormatting(item)}</li>))}
            </ul>
          );
        } else if (listType === "number") {
          elements.push(
            <ol key={`list-${elements.length}`} className="list-decimal list-inside mb-6 space-y-2" style={{ color: "#7F543D" }}>
              {currentList.map((item, idx) => (<li key={idx} className="leading-relaxed">{processInlineFormatting(item)}</li>))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine === '---') { flushList(); elements.push(<div key={`separator-${index}`} className="h-8"></div>); return; }
      if (!trimmedLine) { flushList(); emptyLineCount++; if (emptyLineCount === 2 && elements.length > 0) { elements.push(<div key={`space-${index}`} className="h-4"></div>); } return; }
      emptyLineCount = 0;
      if (/^#\s+(.+)/.test(trimmedLine) && !trimmedLine.startsWith("##")) { flushList(); const titleText = trimmedLine.replace(/^#\s+/, ""); elements.push(<h1 key={`h1-${index}`} className="text-2xl md:text-4xl font-bold mb-6 text-primary">{processInlineFormatting(titleText)}</h1>); return; }
      if (/^##\s+(.+)/.test(trimmedLine)) { flushList(); const headingText = trimmedLine.replace(/^##\s+/, ""); elements.push(<h2 key={`h2-${index}`} className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-primary">{processInlineFormatting(headingText)}</h2>); return; }
      if (/^###\s+(.+)/.test(trimmedLine)) { flushList(); const subheadingText = trimmedLine.replace(/^###\s+/, ""); elements.push(<h3 key={`h3-${index}`} className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-primary">{processInlineFormatting(subheadingText)}</h3>); return; }
      if (/^[-*]\s+(.+)/.test(trimmedLine)) { const itemText = trimmedLine.replace(/^[-*]\s+/, ""); if (listType !== "bullet") { flushList(); listType = "bullet"; } currentList.push(itemText); return; }
      if (/^\d+\.\s+(.+)/.test(trimmedLine)) { const itemText = trimmedLine.replace(/^\d+\.\s+/, ""); if (listType !== "number") { flushList(); listType = "number"; } currentList.push(itemText); return; }
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) { flushList(); const c = trimmedLine.replace(/^\*\*/, '').replace(/\*\*$/, ''); elements.push(<p key={`bold-${index}`} className="mb-0 leading-relaxed" style={{ color: '#7F543D' }}><strong className="font-semibold text-primary">{c}</strong></p>); return; }
      flushList(); elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed" style={{ color: "#7F543D" }}>{processInlineFormatting(trimmedLine)}</p>);
    });
    flushList();
    return elements;
  };

  useEffect(() => {
    if (!isAutoPlaying || showVideoGallery || lightboxOpen || showFullGallery) return;
    const id = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [isAutoPlaying, showVideoGallery, lightboxOpen, showFullGallery, images.length, selectedImage]);

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
                    onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
                  >
                    <img src={images[0]} alt="Kairali" className="w-full h-[220px] md:h-[380px] object-cover" />
                  </div>
                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {images.slice(1,5).map((src, idx) => {
                      const isLastImage = idx === 3;
                      const actualIndex = idx + 1;
                      return (
                        <div key={idx} className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                          onClick={() => { setLightboxIndex(actualIndex); setLightboxOpen(true); }}>
                          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                            <img src={src} alt={`Kairali ${actualIndex + 1}`} className="absolute inset-0 w-full h-full object-cover" />
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
                  <AspectRatio ratio={16/9}>
                    <video key={selectedVideo} src={videoFiles[selectedVideo]} controls className="w-full h-full object-cover bg-black"></video>
                  </AspectRatio>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    Video {selectedVideo + 1} / {videoFiles.length}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {images.slice(0,2).map((src, i) => (
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
        <div
          className="fixed inset-0 backdrop-blur-lg z-[70] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute top-0 left-0 right-0 py-6 px-4 text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Kairali Heritage Resort</h2>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + images.length) % images.length); }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={images[lightboxIndex]} alt={`Kairali ${lightboxIndex + 1}`} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg"
                aria-label="Close"
              >
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                {lightboxIndex + 1} / {images.length}
              </div>
              <div className="md:hidden absolute -bottom-16 left-4 right-4 flex items-center justify-between">
                <button onClick={() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)} className="bg-white text-primary px-4 py-2 rounded-full shadow-md">Previous</button>
                <button onClick={() => setLightboxIndex((prev) => (prev + 1) % images.length)} className="bg-white text-primary px-4 py-2 rounded-full shadow-md">Next</button>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % images.length); }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}

      {showFullGallery && (
        <div
          className="fixed inset-0 backdrop-blur-lg z-[60] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }}
          onClick={() => setShowFullGallery(false)}
        >
          <div className="relative max-w-7xl w-full mt-12 bg-white/90 rounded-xl shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <Button variant="outline" onClick={() => setShowFullGallery(false)}>Back</Button>
              <h2 className="text-xl md:text-2xl font-bold text-primary">Kairali Heritage Resort</h2>
              <div className="w-16" />
            </div>
            <div className="p-4 overflow-auto max-h-[70vh]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Kairali ${i+1}`}
                    className="w-full h-[160px] md:h-[220px] object-cover rounded-lg cursor-pointer"
                    onClick={() => { setLightboxIndex(i); setShowFullGallery(false); setLightboxOpen(true); }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12 max-w-xs md:max-w-none mx-auto">
            <CardContent className="p-4 md:p-8 prose prose-sm md:prose-lg max-w-none">
              {content ? renderContent() : <p>Loading content...</p>}
            </CardContent>
          </Card>
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }}>
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h2>
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
                  <AccordionItem key={idx} value={`program-${idx}`} className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3 w-full justify-start">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                          {icon}
                        </div>
                        <span className="flex-1 text-base md:text-lg font-semibold text-primary text-center md:text-left">{p.title}</span>
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

          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h2>
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
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3 w-full justify-start">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          {icon}
                        </div>
                        <span className="flex-1 text-base md:text-lg font-semibold text-primary text-center md:text-left">{p.title}</span>
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

          <div className="mb-12 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Why Choose Kairali Heritage for Your Holistic Health Journey</h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
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
                        <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>{c.description}</p>
                        {c.bullets && c.bullets.length > 0 && (
                          <ul className="space-y-1.5">
                            {c.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                                <span className="text-primary mt-1">✓</span>
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

          {/* Treatment Process & Patient Journey */}
          <div className="mb-12">
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
                  <div key={idx} className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                        {s.number}
                      </div>
                      {idx < treatmentSteps.length - 1 && (
                        <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                      )}
                    </div>
                    <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            {icon}
                          </div>
                          <h3 className="text-base md:text-xl font-bold text-primary">{s.title}</h3>
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                          {s.description}
                        </p>
                        {s.bullets && s.bullets.length > 0 && (
                          <ul className="mt-3 space-y-1.5">
                            {s.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                                <span className="text-primary mt-1">•</span>
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
                  <img src="/Center Images/Kairali Heritage/CTA image.jpg" alt="Kairali Heritage" className="w-full h-auto rounded-xl mb-4 object-cover" />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Start Your Wellness Journey?</h3>
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
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto mt-6">
        <div className="mb-12">
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getFacilityIcon(card.title)}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{card.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">•</span>
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

          <div className="mb-10 rounded-3xl p-4 md:p-8 max-w-5xl mx-auto" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h1>
              <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>{founderIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img src="/Center Images/Kairali Heritage/Founder and team/founders.jpg" alt="Founders" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founderTitle}</h3>
                      {founderSubtitle && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: '#7F543D' }}>{founderSubtitle}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{founderDescription}</p>
                  <div className="pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {founderTags.map((t, i) => (
                        <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img src="/Center Images/Kairali Heritage/Founder and team/team.jpg" alt="Expert Medical Team" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{teamTitle}</h3>
                      {teamSubtitle && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: '#7F543D' }}>{teamSubtitle}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{teamDescription}</p>
                  <div className="space-y-2 pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Specialized Practitioners:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {teamBullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-xs" style={{ color: '#7F543D' }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {reviews.length > 0 && (
            <div className="mb-12 rounded-3xl p-4 md:p-10 max-w-6xl mx-auto">
              <div className="text-center mb-6 md:mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
                <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>{reviewsIntro}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => { setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length); }}
                  className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white text-primary p-2 rounded-full shadow-md hover:bg-white/90"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => { setCurrentReview((prev) => (prev + 1) % reviews.length); }}
                  className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white text-primary p-2 rounded-full shadow-md hover:bg-white/90"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="bg-white rounded-2xl shadow-lg p-5 md:p-10">
                  <div className="text-primary text-3xl mb-3">“”</div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#7F543D' }}>{reviews[currentReview].review}</p>
                  <div className="mt-6 pt-4 border-t border-primary/10 flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                      {reviews[currentReview].name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm md:text-base font-semibold text-primary">{reviews[currentReview].name}</p>
                        {reviews[currentReview].subtitle && (
                          <span className="text-[10px] md:text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{reviews[currentReview].subtitle}</span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm" style={{ color: '#7F543D' }}>{reviews[currentReview].location}</p>
                      <div className="mt-3 flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 md:h-6 md:w-6 ${i < reviews[currentReview].rating ? 'text-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-2 text-xs md:text-sm px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {reviews[currentReview].rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setCurrentReview(idx); }}
                      className={`transition-all rounded-full ${idx === currentReview ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-gray-300 hover:bg-primary/50'}`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mb-8 max-w-xs md:max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-10">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Info</h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>{insuranceIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="rounded-2xl shadow-sm hover:shadow-xl transition-all max-w-xs md:max-w-none mx-auto">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Insurance Coverage</h3>
                  </div>
                  <ul className="space-y-2">
                    {insuranceCoverage.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                        <span className="text-green-600">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm hover:shadow-xl transition-all max-w-xs md:max-w-none mx-auto">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Payment Options</h3>
                  </div>
                  <ul className="space-y-2">
                    {paymentOptions.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                        <span className="text-blue-600">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 md:mt-8">
              <Card className="rounded-2xl border-2 border-primary/20 max-w-xs md:max-w-none mx-auto">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-primary">For International Patients</h4>
                  </div>
                  <p className="text-sm md:text-base" style={{ color: '#7F543D' }}>{internationalNote}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8 max-w-xs md:max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-10">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>{faqIntro}</p>
            </div>
            <div className="space-y-3 md:space-y-4 max-w-xs md:max-w-none mx-auto">
              {faqs.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-primary/10">
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-4 md:p-5">
                    <span className="text-sm md:text-base font-semibold text-primary text-left flex-1">{f.question}</span>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5" style={{ color: '#7F543D' }}>
                      <p className="text-sm md:text-base leading-relaxed text-left">{f.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 max-w-xs md:max-w-6xl mx-auto">
            <div className="rounded-3xl bg-white border-2 border-primary shadow-md p-3 md:p-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-primary">Address</p>
                      <div className="mt-1 space-y-1" style={{ color: '#7F543D' }}>
                        {contactAddress.map((l, i) => (
                          <p key={i} className="text-sm md:text-base">{l}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-primary">Phone</p>
                      <div className="mt-1 space-y-1" style={{ color: '#7F543D' }}>
                        {contactPhones.map((p, i) => (
                          <p key={i} className="text-sm md:text-base">{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-primary">Email</p>
                      <div className="mt-1 space-y-1" style={{ color: '#7F543D' }}>
                        {contactEmails.map((e, i) => (
                          <p key={i} className="text-sm md:text-base">{e}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-primary">Website</p>
                      <a href={(contactWebsite || '').startsWith('http') ? contactWebsite : `https://${contactWebsite}`} target="_blank" rel="noreferrer" className="text-sm md:text-base underline" style={{ color: '#7F543D' }}>{contactWebsite}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-primary">Distance from Airport</p>
                      <p className="text-sm md:text-base" style={{ color: '#7F543D' }}>{contactAirportDistance}</p>
                    </div>
                  </div>
                </div>
              </div>
              {contactBookingNotice && (
                <div className="mt-6 md:mt-8 rounded-xl bg-primary/5 p-4 md:p-5 border border-primary/20">
                  <p className="text-sm md:text-base font-semibold text-primary mb-2">Important Booking Notice</p>
                  <p className="text-sm md:text-base" style={{ color: '#7F543D' }}>{contactBookingNotice}</p>
                </div>
              )}
              {contactTransportText && (
                <div className="mt-6 md:mt-8 rounded-xl bg-gray-50 p-4 md:p-5 border border-primary/20">
                  <p className="text-sm md:text-base font-semibold text-primary mb-2">Transportation Services</p>
                  <p className="text-sm md:text-base" style={{ color: '#7F543D' }}>{contactTransportText}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8 max-w-xs md:max-w-6xl mx-auto">
            <div className="rounded-3xl p-5 md:p-12 text-center" style={{ backgroundColor: '#2F5B63' }}>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Begin Your Riverside Healing Journey at Kairali Heritage</h2>
            
              <div className="mt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-6"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Consultation Today
                </Button>
              </div>
            </div>
          </div>

          <Footer />
          <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      {facilityLightboxOpen && (
        <div
          className="fixed inset-0 backdrop-blur-lg z-[60] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }}
          onClick={() => setFacilityLightboxOpen(false)}
        >
          <div className="absolute top-0 left-0 right-0 py-6 px-4 text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Kairali Heritage Facilities</h2>
          </div>
          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={facilityImages[facilityLightboxImage]} alt={`Facility ${facilityLightboxImage + 1}`} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" />
              <button onClick={() => setFacilityLightboxOpen(false)} className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg" aria-label="Close">
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                {facilityLightboxImage + 1} / {facilityImages.length}
              </div>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length); }} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg" aria-label="Previous">
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length); }} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg" aria-label="Next">
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}
    </div>
  );
}
