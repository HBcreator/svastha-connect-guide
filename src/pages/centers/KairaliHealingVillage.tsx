import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import QuoteModal from "@/components/QuoteModal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, Images, Video, Users, Heart, TrendingUp, Droplet, Brain, Sparkles, ShieldCheck, Activity, Stethoscope, Pill, Award, Leaf, Home, Hospital, ClipboardList, FileSearch, Utensils, Phone, MessageCircle, Globe, Mail } from "lucide-react"
import { useState } from "react"
import { useEffect } from "react"
import MarkdownContent from "@/components/MarkdownContent"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function KairaliHealingVillage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showVideoGallery, setShowVideoGallery] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(0)
  const [showFullGallery, setShowFullGallery] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const [videos, setVideos] = useState<string[]>([])
  const [videoThumbs, setVideoThumbs] = useState<string[]>([])
  const [wellnessIntro, setWellnessIntro] = useState("")
  const [programs, setPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([])
  const [medicalIntro, setMedicalIntro] = useState("")
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([])
  const [whyIntro, setWhyIntro] = useState("")
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([])
  const [treatmentIntro, setTreatmentIntro] = useState("")
  const [treatmentSteps, setTreatmentSteps] = useState<{ number: number; title: string; description: string; bullets: string[] }[]>([])
  const [facilitiesIntro, setFacilitiesIntro] = useState("")
  const [facilityCards, setFacilityCards] = useState<{ title: string; bullets: string[] }[]>([])
  const [facilityImages, setFacilityImages] = useState<string[]>([])
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0)
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false)
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0)
  const [isFacilityAutoPlaying, setIsFacilityAutoPlaying] = useState(true)
  const [teamIntro, setTeamIntro] = useState("")
  const [founder, setFounder] = useState<{ name: string; role: string; description: string } | null>(null)
  const [founderExpertise, setFounderExpertise] = useState<string[]>([])
  const [teamGroups, setTeamGroups] = useState<{ title: string; description: string }[]>([])
  const [teamSubtitle, setTeamSubtitle] = useState("")
  const [teamCardIntro, setTeamCardIntro] = useState("")
  const founderImage = "/Center Images/The Ayurvedic Healing Village/Founder and team/Founder.jpg"
  const teamImage = "/Center Images/The Ayurvedic Healing Village/Founder and team/team.jpg"
  const [testimonials, setTestimonials] = useState<{ name: string; location: string; condition: string; title: string; review: string; rating: number }[]>([])
  const [currentReview, setCurrentReview] = useState(0)
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true)
  const [insuranceIntro, setInsuranceIntro] = useState("")
  const [insuranceBullets, setInsuranceBullets] = useState<string[]>([])
  const [paymentBullets, setPaymentBullets] = useState<string[]>([])
  const [internationalText, setInternationalText] = useState("")
  const [faqItems, setFaqItems] = useState<{ question: string; answer: string }[]>([])
  const [contactAddress, setContactAddress] = useState<string[]>([])
  const [contactPhones, setContactPhones] = useState<string[]>([])
  const [contactEmails, setContactEmails] = useState<string[]>([])
  const [contactWebsite, setContactWebsite] = useState("")
  const [contactDistances, setContactDistances] = useState<string[]>([])
  const [transportText, setTransportText] = useState("")

  useEffect(() => {
    fetch("/Center Images/The Ayurvedic Healing Village/Photo Gallery/Photo Gallery.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean)
        setImages(lines)
        setSelectedImage(0)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim())
        let section: "none" | "address" | "phones" | "emails" | "website" | "distances" | "transport" = "none"
        const addr: string[] = []
        const phones: string[] = []
        const emails: string[] = []
        const dists: string[] = []
        let site = ""
        let transport = ""
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) { section = "none"; continue }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase()
            if (t.includes("address")) { section = "address"; continue }
            if (t.includes("phone")) { section = "phones"; continue }
            if (t.includes("email")) { section = "emails"; continue }
            if (t.includes("website")) { section = "website"; continue }
            if (t.includes("distance")) { section = "distances"; continue }
            if (t.includes("transportation")) { section = "transport"; continue }
          }
          if (section === "address") { addr.push(line); continue }
          if (section === "phones") { if (/^\*/.test(line)) phones.push(line.replace(/^\*+\s*/, "")); else if (line) phones.push(line); continue }
          if (section === "emails") { if (/^\*/.test(line)) emails.push(line.replace(/^\*+\s*/, "")); else if (line) emails.push(line); continue }
          if (section === "website") { site = site ? `${site} ${line}` : line; continue }
          if (section === "distances") { if (line.startsWith("*")) dists.push(line.replace(/^\*+\s*/, "")); continue }
          if (section === "transport") { transport = transport ? `${transport} ${line}` : line; continue }
        }
        setContactAddress(addr)
        setContactPhones(phones)
        setContactEmails(emails)
        setContactWebsite(site)
        setContactDistances(dists)
        setTransportText(transport)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Facilities & Amenities content.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim())
        let intro = ""
        const items: { title: string; bullets: string[] }[] = []
        let current: { title: string; bullets: string[] } | null = null
        let inSection = false
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) { inSection = false; continue }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current)
            current = { title: line.slice(2, -2), bullets: [] }
            inSection = true
            continue
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "")
            if (current) current.bullets.push(bullet)
            continue
          }
          if (!inSection) {
            intro = intro ? `${intro} ${line}` : line
          }
        }
        if (current) items.push(current)
        setFacilitiesIntro(intro)
        setFacilityCards(items)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch("/Center Images/The Ayurvedic Healing Village/Facilities and ameties/Facilities and ameties.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean)
        setFacilityImages(lines)
        setCurrentFacilityImage(0)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!isFacilityAutoPlaying || facilityImages.length === 0) return
    const interval = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isFacilityAutoPlaying, facilityImages])

  useEffect(() => {
    if (!facilityLightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFacilityLightboxOpen(false)
      } else if (e.key === "ArrowLeft") {
        setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
      } else if (e.key === "ArrowRight") {
        setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [facilityLightboxOpen, facilityImages])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Wellness & Rejuvenation Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim())
        let intro = ""
        const items: { title: string; description: string; bullets: string[] }[] = []
        let current: { title: string; description: string; bullets: string[] } | null = null
        let inPrograms = false
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) { inPrograms = false; continue }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current)
            current = { title: line.slice(2, -2), description: "", bullets: [] }
            inPrograms = true
            continue
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "")
            if (current) current.bullets.push(bullet)
            continue
          }
          if (!inPrograms) {
            intro = intro ? `${intro} ${line}` : line
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line
          }
        }
        if (current) items.push(current)
        setWellnessIntro(intro)
        setPrograms(items)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Why Choose Kairali.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim())
        let intro = ""
        const items: { title: string; description: string; bullets: string[] }[] = []
        let current: { title: string; description: string; bullets: string[] } | null = null
        let inSection = false
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) { inSection = false; continue }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current)
            current = { title: line.slice(2, -2), description: "", bullets: [] }
            inSection = true
            continue
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "")
            if (current) current.bullets.push(bullet)
            continue
          }
          if (!inSection) {
            intro = intro ? `${intro} ${line}` : line
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line
          }
        }
        if (current) items.push(current)
        setWhyIntro(intro)
        setWhyItems(items)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Medical Treatment Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim())
        let intro = ""
        const items: { title: string; description: string; bullets: string[] }[] = []
        let current: { title: string; description: string; bullets: string[] } | null = null
        let inPrograms = false
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) { inPrograms = false; continue }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current)
            current = { title: line.slice(2, -2), description: "", bullets: [] }
            inPrograms = true
            continue
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "")
            if (current) current.bullets.push(bullet)
            continue
          }
          if (!inPrograms) {
            intro = intro ? `${intro} ${line}` : line
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line
          }
        }
        if (current) items.push(current)
        setMedicalIntro(intro)
        setMedicalPrograms(items)
      })
      .catch(() => {})
  }, [])

  const iconForTitle = (t: string) => {
    const s = t.toLowerCase()
    if (s.includes("detox") || s.includes("panchakarma")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("stress") || s.includes("mental")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("anti-aging") || s.includes("rejuvenation") || s.includes("rasayana")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("weight")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("immunity")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("beauty") || s.includes("skin")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("preventive")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("corporate")) return <Users className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    if (s.includes("pregnancy") || s.includes("postnatal") || s.includes("prenatal")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
  }

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase()
    if (s.includes("panchakarma") || s.includes("detox")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("weight")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("diabetes")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("stress") || s.includes("sleep") || s.includes("mental")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("arthritis") || s.includes("pain")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("immunity") || s.includes("rejuvenation")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("gastro") || s.includes("digest")) return <Pill className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("respiratory")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("neuro")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("women")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    if (s.includes("skin")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
  }

  const whyIconForTitle = (t: string) => {
    const s = t.toLowerCase()
    const cls = "h-6 w-6 text-primary group-hover:text-white transition-colors"
    if (s.includes("heritage") || s.includes("century")) return <Award className={cls} />
    if (s.includes("globally") || s.includes("awarded")) return <Award className={cls} />
    if (s.includes("therapeutic") || s.includes("sanctuary") || s.includes("nature")) return <Leaf className={cls} />
    if (s.includes("nabh") || s.includes("hospital")) return <Hospital className={cls} />
    if (s.includes("sattvic") || s.includes("environment") || s.includes("farm-to-table")) return <Home className={cls} />
    if (s.includes("yoga") || s.includes("meditation")) return <Heart className={cls} />
    if (s.includes("trusted") || s.includes("global")) return <Award className={cls} />
    if (s.includes("holistic") || s.includes("cultural")) return <Sparkles className={cls} />
    return <Heart className={cls} />
  }

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim())
        let intro = ""
        const steps: { number: number; title: string; description: string; bullets: string[] }[] = []
        let current: { number: number; title: string; description: string; bullets: string[] } | null = null
        let inSection = false
        let stepCount = 0
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) { inSection = false; continue }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) steps.push(current)
            stepCount += 1
            current = { number: stepCount, title: line.slice(2, -2), description: "", bullets: [] }
            inSection = true
            continue
          }
          if (!inSection) {
            intro = intro ? `${intro} ${line}` : line
          } else if (current) {
            if (line.startsWith("*")) {
              const bullet = line.replace(/^\*+\s*/, "")
              current.bullets.push(bullet)
            } else {
              current.description = current.description ? `${current.description} ${line}` : line
            }
          }
        }
        if (current) steps.push(current)
        setTreatmentIntro(intro)
        setTreatmentSteps(steps)
      })
      .catch(() => {})
  }, [])

  const treatmentIconForTitle = (t: string) => {
    const s = t.toLowerCase()
    if (s.includes("consultation") || s.includes("assessment") || s.includes("pre-arrival")) return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />
    if (s.includes("diagnosis") || s.includes("blueprint") || s.includes("protocol") || s.includes("design") || s.includes("plan")) return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />
    if (s.includes("daily") && s.includes("healing")) return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />
    if (s.includes("lifestyle") || s.includes("meals") || s.includes("diet") || s.includes("integration")) return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />
    if (s.includes("activities") || s.includes("yoga") || s.includes("wellness")) return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />
    if (s.includes("journey home") || s.includes("empowerment") || s.includes("guidance")) return <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />
    return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />
  }

  useEffect(() => {
    fetch("/Center Videos/Kairali - The Ayurvedic Healing Village/Video Gallery.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean)
        setVideos(lines)
        setSelectedVideo(0)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const generateThumb = (url: string): Promise<string> => {
      return new Promise((resolve) => {
        try {
          const video = document.createElement("video")
          video.crossOrigin = "anonymous"
          video.muted = true
          video.playsInline = true
          video.preload = "auto"
          video.src = url
          const onSeeked = () => {
            const canvas = document.createElement("canvas")
            canvas.width = video.videoWidth || 1280
            canvas.height = video.videoHeight || 720
            const ctx = canvas.getContext("2d")
            if (ctx) {
              try {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
                const dataUrl = canvas.toDataURL("image/jpeg", 0.75)
                resolve(dataUrl)
              } catch {
                resolve(images[0] || "")
              }
            } else {
              resolve(images[0] || "")
            }
            video.removeEventListener("seeked", onSeeked)
          }
          video.addEventListener("loadedmetadata", () => {
            try {
              video.currentTime = Math.min(1, Math.max(0.5, video.duration ? video.duration * 0.05 : 1))
            } catch {
              resolve(images[0] || "")
            }
          })
          video.addEventListener("seeked", onSeeked)
          video.addEventListener("error", () => resolve(images[0] || ""))
        } catch {
          resolve(images[0] || "")
        }
      })
    }
    if (videos.length > 0) {
      Promise.all(videos.map((v) => generateThumb(v)))
        .then((thumbs) => setVideoThumbs(thumbs))
        .catch(() => setVideoThumbs(videos.map(() => images[0] || "")))
    }
  }, [videos, images])

  useEffect(() => {
    if (!isAutoPlaying || images.length === 0) return
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, images])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false)
      } else if (e.key === "ArrowLeft") {
        setLightboxImage((prev) => (prev - 1 + images.length) % images.length)
      } else if (e.key === "ArrowRight") {
        setLightboxImage((prev) => (prev + 1) % images.length)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [facilityLightboxOpen, facilityImages.length, images.length, lightboxOpen])

  const renderInlineBold = (text: string) => {
    const parts: (string | JSX.Element)[] = []
    let lastIndex = 0
    const regex = /\*\*(.*?)\*\*/g
    let match: RegExpExecArray | null
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index))
      parts.push(<strong key={match.index} className="font-semibold text-primary">{match[1]}</strong>)
      lastIndex = regex.lastIndex
    }
    if (lastIndex < text.length) parts.push(text.substring(lastIndex))
    return parts.length > 0 ? parts : text
  }

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim())
        let intro = ""
        let name = ""
        let role = ""
        let fdesc = ""
        const expertise: string[] = []
        const groups: { title: string; description: string }[] = []
        let section: "intro" | "founder" | "expertise" | "team" = "intro"
        let seenTeamHeading = false
        let cardIntro = ""
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) {
            const t = line.slice(4)
            if (/^Mr\.\s*K\.\s*V\.\s*Ramesh.*Gita\s*Ramesh/i.test(t)) { section = "founder"; name = t; continue }
            if (/Holistic Wellness Experts/i.test(t)) { section = "team"; seenTeamHeading = true; continue }
            continue
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2)
            if (/Leadership & Expertise/i.test(t)) { section = "expertise"; continue }
            continue
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "")
            if (section === "expertise") { expertise.push(bullet); continue }
            if (section === "team") {
              const m = bullet.match(/^\*\*(.+?)\*\*:?(.+)?$/)
              if (m) {
                const title = (m[1] || "").trim()
                const desc = (m[2] || "").trim()
                groups.push({ title, description: desc })
              } else {
                groups.push({ title: "Team", description: bullet })
              }
              continue
            }
          }
          if (section === "intro") {
            intro = intro ? `${intro} ${line}` : line
            continue
          }
          if (section === "founder") {
            if (!role && /Director/i.test(line)) { role = line; continue }
            fdesc = fdesc ? `${fdesc} ${line}` : line
            continue
          }
          if (section === "team") {
            if (seenTeamHeading) {
              if (!teamSubtitle) {
                setTeamSubtitle(line)
              } else {
                cardIntro = cardIntro ? `${cardIntro} ${line}` : line
              }
            }
            continue
          }
        }
        setTeamIntro(intro)
        setFounder(name ? { name, role, description: fdesc } : null)
        setFounderExpertise(expertise)
        setTeamGroups(groups)
        setTeamCardIntro(cardIntro)
      })
      .catch(() => {})
  }, [teamSubtitle])

  useEffect(() => {}, [])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => (l || "").trim())
        const items: { name: string; location: string; condition: string; title: string; review: string; rating: number }[] = []
        let current: { name: string; location: string; condition: string; title: string; review: string; rating: number } | null = null
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i]
          if (!line) continue
          if (/^###\s+Patient Stories & Reviews/i.test(line)) continue
          if (/^\*\*(.+?)\*\*$/.test(line) && !/Rating:/i.test(line)) {
            if (current) items.push(current)
            const inside = line.replace(/^\*\*/, "").replace(/\*\*$/, "")
            const parts = inside.split(",")
            const name = parts.shift()?.trim() || ""
            const location = parts.map((p) => p.trim()).join(", ")
            current = { name, location, condition: "", title: "", review: "", rating: 5 }
            const next = lines[i + 1] || ""
            if (/^\*"?/.test(next)) {
              const t = next.replace(/^\*+"?/, "").replace(/"?\*+$/, "")
              current.title = t
              current.condition = (t.split(" - ")[0] || "").replace(/^"+|"+$/g, "")
              i++
            }
            continue
          }
          if (/^\*\*Rating:\s*/i.test(line)) {
            const m = line.match(/\((\d+)\/\d+\)/)
            if (m && current) current.rating = parseInt(m[1], 10) || 5
            if (current) items.push(current)
            current = null
            continue
          }
          if (current) {
            current.review = current.review ? `${current.review} ${line}` : line
          }
        }
        if (current) items.push(current)
        setTestimonials(items)
        setCurrentReview(0)
        setIsReviewAutoPlaying(true)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!isReviewAutoPlaying || testimonials.length === 0) return
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(id)
  }, [isReviewAutoPlaying, testimonials.length])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Insurance & Payment Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => (l || "").trim())
        let section: "intro" | "insurance" | "payment" | "international" = "intro"
        const introParts: string[] = []
        const ins: string[] = []
        const pay: string[] = []
        const intlParts: string[] = []
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) { section = "intro"; continue }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase()
            if (t.includes("insurance coverage")) { section = "insurance"; continue }
            if (t.includes("payment options")) { section = "payment"; continue }
            if (t.includes("for international patients")) { section = "international"; continue }
            continue
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "")
            if (section === "insurance") { ins.push(bullet); continue }
            if (section === "payment") { pay.push(bullet); continue }
          } else {
            if (section === "intro") introParts.push(line)
            if (section === "international") intlParts.push(line)
          }
        }
        setInsuranceIntro(introParts.join(" "))
        setInsuranceBullets(ins)
        setPaymentBullets(pay)
        setInternationalText(intlParts.join(" "))
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch("/content/Top Centers/Kairali - The Ayurvedic Healing Village/Frequently Asked Questions.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => (l || "").trim())
        const items: { question: string; answer: string }[] = []
        let currentQ = ""
        let currentA = ""
        for (const line of lines) {
          if (!line) continue
          if (line.startsWith("### ")) continue
          if (line.startsWith("**") && line.endsWith("**")) {
            if (currentQ) items.push({ question: currentQ, answer: currentA })
            currentQ = line.slice(2, -2).replace(/^\d+\.\s*/, "")
            currentA = ""
            continue
          }
          currentA = currentA ? `${currentA} ${line}` : line
        }
        if (currentQ) items.push({ question: currentQ, answer: currentA })
        setFaqItems(items)
      })
      .catch(() => {})
  }, [])
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
               <h1 className="text-4xl md:text-4xl font-bold leading-relaxed mb-4">
                  Kairali - <br /> The Ayurvedic Healing Village
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  NABH-accredited Ayurvedic Retreat & Panchakarma Center
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Palakkad, Kerala</span>
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

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
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
                {images.length > 0 && (
                  <img
                    src={images[selectedImage]}
                    alt={`Kairali Healing Village ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                )}
                <button
                  onClick={() => {
                    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
                    setIsAutoPlaying(true)
                  }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={() => {
                    setSelectedImage((prev) => (prev + 1) % images.length)
                    setIsAutoPlaying(true)
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

              {/* Thumbnails */}
              {images.length > 0 && (
                <div className="flex flex-col md:flex-row gap-3 mb-6">
                  <div
                    className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                    onClick={() => {
                      setSelectedImage(0)
                      setLightboxImage(0)
                      setLightboxOpen(true)
                    }}
                  >
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={images[0]}
                        alt="Kairali 1"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {[1, 4, 7, 10].filter((i) => i < images.length).map((i, idx) => {
                      const isLastImage = idx === 3
                      return (
                        <div
                          key={i}
                          className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                          onClick={() => {
                            setSelectedImage(i)
                            setLightboxImage(i)
                            setLightboxOpen(true)
                          }}
                        >
                          <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                            <img
                              src={images[i]}
                              alt={`Kairali ${i + 1}`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                            {isLastImage && (
                              <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/40">
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setShowFullGallery(true)
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
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Full Gallery Overlay */}
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
                        Kairali Ayurvedic Healing Village
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {images.map((img, i) => (
                        <div
                          key={i}
                          className="relative w-full cursor-pointer"
                          style={{ paddingBottom: "75%" }}
                          onClick={() => {
                            setLightboxImage(i)
                            setLightboxOpen(true)
                          }}
                        >
                          <img src={img} alt={`Kairali ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Lightbox */}
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
                    <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
                      Kairali Ayurvedic Healing Village
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={images[lightboxImage]}
                        alt={`Kairali ${lightboxImage + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                        aria-label="Close"
                      >
                        ✕
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {lightboxImage + 1} / {images.length}
                      </div>
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
            <>
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video mb-8">
                {videos.length > 0 && (
                  <video key={selectedVideo} controls controlsList="nodownload" preload="metadata" className="w-full h-full object-cover" poster={videoThumbs[selectedVideo]}>
                    <source src={videos[selectedVideo]} type="video/mp4" />
                  </video>
                )}
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
                    {videoThumbs[idx] ? (
                      <img src={videoThumbs[idx]} alt={`Video ${idx + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <video muted preload="metadata" className="w-full h-full object-cover">
                        <source src={video} type="video/mp4" />
                      </video>
                    )}
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                      Video {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-4 pb-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed">
              <MarkdownContent contentPath="/content/Top Centers/Kairali - The Ayurvedic Healing Village/main content.txt" />
            </CardContent>
          </Card>
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">2000+</div>
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
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">98%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Success Rate</div>
              </div>
            </div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {wellnessIntro}
              </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {programs.map((p, idx) => (
              <AccordionItem key={idx} value={`prog-${idx}`} className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                        {iconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary">{p.title}</span>
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
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {medicalIntro}
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalPrograms.map((p, idx) => (
                <AccordionItem key={idx} value={`med-${idx}`} className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        {medicalIconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary">{p.title}</span>
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
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Why Choose Kairali - The Ayurvedic Healing Village</h2>
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
          <div className="mb-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                {treatmentIntro}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((s, idx) => (
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
                          {treatmentIconForTitle(s.title)}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-primary">{s.title}</h3>
                      </div>
                      <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>{s.description}</p>
                      {s.bullets && s.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
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
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img src="/Center Images/The Ayurvedic Healing Village/CTA image (2).jpg" alt="Kairali - The Ayurvedic Healing Village" className="w-full h-auto rounded-xl mb-4 object-cover" />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
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
                  <img src="/Center Images/The Ayurvedic Healing Village/CTA image (2).jpg" alt="Kairali - The Ayurvedic Healing Village" className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
              <p className="text-base md:text-lg mx-auto px-4 mb-2" style={{ color: "#7F543D" }}>{facilitiesIntro}</p>
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
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${Math.min(currentFacilityImage, Math.max(0, facilityImages.length - 5)) * 20}%)` }}>
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
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Droplet className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-primary">{card.title}</h3>
                    </div>
                    {card.bullets.length > 0 && (
                      <ul className="list-none pl-0 space-y-1.5">
                        {card.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                            <span className="text-primary mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
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
                      aria-label="Close"
                    >
                      ✕
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      {facilityLightboxImage + 1} / {facilityImages.length}
                    </div>
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
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h1>
              {teamIntro && (
                <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>{teamIntro}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                <CardContent className="p-4 md:p-8 h-full md:h-[480px] flex flex-col">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img src={founderImage} alt="Founder" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founder?.name || "Founder"}</h3>
                      {founder?.role && (
                        <p className="text-xs md:text-sm mt-1 text-primary/70">{founder.role}</p>
                      )}
                    </div>
                  </div>
                  {founder?.description && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>{founder.description}</p>
                  )}
                  {founderExpertise.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-primary/10">
                      <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {founderExpertise.map((e, i) => (
                          <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">{e}</span>
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
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                        <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-1 leading-snug break-words whitespace-normal">
                          Holistic Wellness Experts
                        </h3>
                        {teamSubtitle && (
                          <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                            {teamSubtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    {teamCardIntro && (
                      <p className="text-xs md:text-sm leading-relaxed mb-4" style={{ color: "#7F543D" }}>
                        {teamCardIntro}
                      </p>
                    )}
                    <ul className="space-y-2.5">
                      {teamGroups.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">•</span>
                          <span>{renderInlineBold(`**${it.title}:** ${it.description}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
            </div>
            <div className="relative">
              <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <CardContent className="p-4 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-primary/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg>
                    </div>
                    {testimonials.length > 0 && (
                      <>
                        <div className="mb-4 md:mb-6">
                          <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                            <span>&ldquo;</span>{testimonials[currentReview].review}<span>&rdquo;</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                            {testimonials[currentReview].name.split(' ').map((p) => p[0]).slice(0,2).join('')}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-base md:text-xl font-semibold text-primary">{testimonials[currentReview].name}</h4>
                            </div>
                            <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                              {testimonials[currentReview].location} • {testimonials[currentReview].condition}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < testimonials[currentReview].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                          ))}
                          <span className="text-xs md:text-sm font-semibold text-primary">{testimonials[currentReview].rating}.0</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
              <button onClick={() => setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Previous review">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              <button onClick={() => setCurrentReview((prev) => (prev + 1) % testimonials.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Next review">
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              {isReviewAutoPlaying && (
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Auto
                </div>
              )}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrentReview(i)} className={`transition-all ${i === currentReview ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`} aria-label={`Go to review ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
          {insuranceBullets.length > 0 && (
            <div className="mb-12">
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
                          <span className="text-primary mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justifyCenter">
                        <Pill className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                    </div>
                    <ul className="space-y-3">
                      {paymentBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">✓</span>
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
          )}
          {faqItems.length > 0 && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                  Find answers to common questions about treatments, facilities, and your healing journey
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
                {faqItems.map((it, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="text-lg font-semibold text-primary text-left">{it.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 bg-white">
                      <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>{it.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
          {(contactAddress.length > 0 || contactWebsite) && (
            <Card className="mb-12 border-2 border-primary overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Address</h4>
                        <p className="break-words leading-relaxed" style={{ color: "#7F543D" }}>
                          {contactAddress.map((l, i) => (
                            <span key={i}>{l}{i < contactAddress.length - 1 ? <br /> : null}</span>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Phone</h4>
                        <p className="break-words leading-relaxed" style={{ color: "#7F543D" }}>
                          {contactPhones.map((p, i) => (
                            <span key={i}>{p}{i < contactPhones.length - 1 ? <br /> : null}</span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                        <p className="break-words leading-relaxed" style={{ color: "#7F543D" }}>
                          {contactEmails.map((e, i) => (
                            <span key={i}>{e}{i < contactEmails.length - 1 ? <br /> : null}</span>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Website</h4>
                        <p className="break-all leading-relaxed" style={{ color: "#7F543D" }}>{contactWebsite}</p>
                      </div>
                    </div>
                    {contactDistances.length > 0 && (
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Distance from Major Locations</h4>
                          <ul className="list-disc list-inside break-words leading-relaxed" style={{ color: "#7F543D" }}>
                            {contactDistances.map((d, i) => (<li key={i}>{d}</li>))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {transportText && (
                  <div className="mt-6 p-6 bg-primary/5 rounded-xl border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Transportation Services</h4>
                        <p className="text-sm leading-relaxed break-words" style={{ color: "#7F543D" }}>{transportText}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
          <div className="mb-12">
            <div className="rounded-3xl p-10" style={{ backgroundColor: "#234A50" }}>
              <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-3">Begin Your Holistic Healing Journey at The Ayurvedic Healing Village</h2>
              <p className="text-center text-white/90 mb-6"></p>
              <div className="flex items-center justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Consultation Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  )
}
