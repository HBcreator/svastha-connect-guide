import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, ChevronRight, Building2, Leaf, Users, Award, ShieldCheck, Phone, MessageCircle, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, ChevronLeft, Globe, Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function LotusGoa() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(false);

  const jumpSections = [
    { id: "overview", title: "Center Overview" },
    { id: "about", title: "About Center" },
    { id: "programs", title: "Top Ayurveda Packages" },
    { id: "why-choose", title: "Why Choose Us" },
    { id: "process", title: "Your Healing Journey" },
    { id: "reviews", title: "Patient Stories" },
    { id: "faq", title: "FAQs" },
    { id: "contact", title: "Contact Us" }
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const treatmentProcess = [
    {
      number: 1,
      title: "Health History & Constitution Review",
      description: "Your stay opens with a seated case-taking session covering medical history, previous treatments, digestion, sleep and stress load, alongside a classical reading of your dosha balance.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Choosing Your Healing Stream",
      description: "Guests are guided towards Ayurveda, Naturopathy, Yoga, or a blended pathway, depending on whether the goal is treating an ailment, unwinding stress, or rebuilding stamina.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Snehana & Swedana Preparation",
      description: "Internal and external oleation using classical medicated ghee and oils, paired with Choornaswedam powder fomentation, softens tissues so that deeper wastes can move freely.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Panchakarma Elimination",
      description: "The five classical purification routes are applied selectively, never all at once, with Virechana, Vasti and Nasya being the most commonly indicated for lifestyle disorders.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Naturopathy & Yogic Integration",
      description: "Mud therapy, reflexology, acupressure and guided pranayama are layered into the schedule so the nervous system settles while the body clears.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Paschat Karma Aftercare",
      description: "The closing phase reintroduces food gradually through a graded diet, sets your daily routine, and fixes a rejuvenation interval suited to your age group.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];

  const testimonials = [
    {
      title: "Three Weeks That Reset My Blood Pressure",
      review: "I came for a 21-day rejuvenation stay expecting a holiday and left with readings my cardiologist could not argue with. The daily routine was strict but never harsh, and the team explained the reasoning behind every change.",
      name: "Anneke Visser",
      verified: true,
      location: "Utrecht, Netherlands",
      condition: "Rasayana Rejuvenation",
      rating: 5
    },
    {
      title: "Pizhichil Was Worth Travelling For",
      review: "The continuous warm oil bath is something I had only read about. Two therapists working in rhythm for nearly an hour, then rest and steam. My lower back has not felt this loose in a decade.",
      name: "Tomás Ferreira",
      verified: true,
      location: "Porto, Portugal",
      condition: "Pizhichil Oil Therapy",
      rating: 5
    },
    {
      title: "Ayurveda and Naturopathy Together",
      review: "What convinced me was that they did not push only one system. Mornings were Ayurvedic therapy, afternoons reflexology and mud packs, evenings pranayama. The combination did far more than any single approach had.",
      name: "Yuki Nakamura",
      verified: true,
      location: "Yokohama, Japan",
      condition: "Integrated Detox Programme",
      rating: 5
    },
    {
      title: "Quiet South Goa, Away From the Crowds",
      review: "Being inland near Orlim rather than on a busy beach strip made all the difference. Village quiet, birds in the morning, and Varca beach a short ride away when I wanted it. Rooms were roomy and spotless.",
      name: "Rachel Bergman",
      verified: true,
      location: "Toronto, Canada",
      condition: "SUKHA De-Stress Stay",
      rating: 5
    },
    {
      title: "Kati Vasti Cleared My Sciatica",
      review: "The localised oil pooling on my lower back over eight sessions did what months of painkillers had not. I was also given exercises and a diet sheet to take home, which I still use six months on.",
      name: "Stefan Novak",
      verified: true,
      location: "Graz, Austria",
      condition: "Kati Vasti & Ellakizhi",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "What kind of centre is Lotus Goa and what makes it different?",
      answer: "Lotus Goa operates as a residential nature cure retreat combining three complete systems under one roof: classical Ayurveda, Naturopathy and Yoga. Rather than offering standalone spa hours, the property is built around guided stays where therapy, diet, rest and yogic practice are scheduled together across several days."
    },
    {
      question: "Which Ayurvedic therapies are available here?",
      answer: "The therapy list follows classical Kerala practice and includes Abhyanga, Padhabhyanga foot therapy, Pizhichil continuous oil bath, Udvartanam herbal powder massage, Shirodhara, Ellakizhi poultice fomentation, Shirolepam head paste, Nethra Tharpanam for the eyes, Choornaswedam, and localised Vasti therapies for the lower back, neck, knees and chest."
    },
    {
      question: "How long should a Panchakarma programme run?",
      answer: "Panchakarma covers five purification routes: Vamana, Virechana, Nasya, Vasti and Rakthamokshana, applied selectively rather than all together. As an anti-ageing and rejuvenation measure, a 14 to 21 day annual programme is generally advised for guests above 40, and a 21 day programme for those above 60."
    },
    {
      question: "Do you offer naturopathy and yoga alongside Ayurveda?",
      answer: "Yes. The naturopathy side includes acupuncture, acupressure, reflexology, mud therapy, Swedish and deep tissue bodywork, while the yoga side covers guided asana, pranayama and meditation. A short SUKHA de-stress programme of three to seven days blends these with Ayurvedic massage for guests on a tighter schedule."
    },
    {
      question: "Where is the property and what are the timings?",
      answer: "The centre sits near Vittal Temple in Orlim, Salcete, South Goa, roughly two kilometres inland from Varca Beach, which keeps it quiet while staying close to the coast. The front desk operates daily from 6:00 AM to 11:00 PM, and accommodation includes spacious rooms with an attached balcony and separate sitting area."
    }
  ];

  const programs = [
    {
      title: "Classical Panchakarma",
      description: "A full five-route purification stay built on Vamana, Virechana, Nasya, Vasti and Rakthamokshana, prescribed selectively after assessment rather than applied as a fixed sequence.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Pizhichil Oil Bath",
      description: "Warm medicated oil poured continuously over the body by two therapists working in rhythm, long regarded as one of the most effective therapies for neuromuscular and joint conditions.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Localised Vasti Therapies",
      description: "Medicated oil held in a herbal dough ring over the lower back, neck, knees or chest, targeting sciatica, cervical stiffness, arthritic knees and cardiac stress.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "SUKHA De-Stress Programme",
      description: "A short three to seven day naturopathy-led reset combining Ayurvedic massage, reflexology, acupressure, guided yoga and meditation for guests with limited time.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Nethra Tharpanam & Shirolepam",
      description: "Specialised head and eye therapies using medicated ghee pooling and cooling herbal paste, chosen for screen fatigue, dry eyes, migraine tendency and disturbed sleep.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Residential Yoga Retreat",
      description: "Structured stays that pair daily asana and pranayama with detox-supportive diet and bodywork, aimed at rebuilding strength and breathing capacity over a full course.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];

  const whyChooseUs = [
    {
      title: "Three Systems, One Property",
      description: "Ayurveda, Naturopathy and Yoga run side by side here, so a plan can draw on whichever combination genuinely suits the condition being treated.",
      icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Residential Healing Stays",
      description: "Spacious rooms with attached balcony and sitting area allow guests to complete full multi-week programmes without daily travel breaking the routine.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Quiet Inland South Goa",
      description: "Set near Vittal Temple in Orlim, about two kilometres from Varca Beach, the property stays free of the noise that surrounds North Goa's busier centres.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Age-Guided Rejuvenation",
      description: "Rasayana schedules follow classical guidance, with annual programmes calibrated separately for guests above 40 and above 60 rather than a single generic package.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Long Daily Reception Hours",
      description: "The desk operates from 6:00 AM to 11:00 PM every day, so early morning therapy slots and late arrivals are both easily accommodated.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Diet as Part of Treatment",
      description: "Meals are treated as medicine rather than an amenity, with graded reintroduction of food after cleansing and a written plan to carry home.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];

  const breadcrumbRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    // Scroll breadcrumb to the end on mobile so current page is visible
    if (breadcrumbRef.current) {
      breadcrumbRef.current.scrollLeft = breadcrumbRef.current.scrollWidth;
    }
  }, []);

  useEffect(() => {
    document.title = "Lotus Goa | Ayurveda, Naturopathy & Yoga Retreat in Orlim, South Goa";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Lotus Goa is a residential Ayurveda, Naturopathy and Yoga retreat near Varca Beach in Orlim, South Goa, offering classical Panchakarma, Pizhichil, Shirodhara, localised Vasti therapies, mud therapy and guided yoga stays. Open daily 6 AM to 11 PM.");

    if (!isReviewAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isReviewAutoPlaying, testimonials.length]);

  return (
    <div className="min-h-screen bg-background font-poppins selection:bg-[#2C4E5A]/20">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol ref={breadcrumbRef} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <li className="flex items-center gap-2 shrink-0">
              <a href="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <a href="/centers" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </a>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              Lotus Goa
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="bg-[#2C4E5A] text-white py-10 md:py-14">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ lineHeight: '1.3' }}>Lotus Goa</h1>
                <p className="text-xl mb-4 opacity-90">Residential Ayurveda, Naturopathy & Yoga Retreat for Classical Panchakarma</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Orlim, South Goa, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.3</span>
                  <span className="opacity-90">(400 Reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#2C4E5A] hover:bg-white/90 font-semibold"
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

      {/* About Section */}
      <section id="about" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-[#2C4E5A]/5">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
                Authentic Ayurvedic Excellence <br className="hidden lg:block" />
                at Lotus Goa
</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="text-left space-y-8">
                <div className="space-y-6 text-base md:text-xl leading-relaxed text-foreground/80 text-left" style={{ color: "#7F543D" }}>
                  <p>
                    <strong className="font-bold text-[#2C4E5A]">Lotus Goa</strong> is a residential nature cure retreat set near Vittal Temple in <strong className="font-bold text-[#2C4E5A]">Orlim, Salcete</strong>, roughly two kilometres inland from Varca Beach in South Goa. What sets the property apart from the region's many treatment rooms is its scope: three complete healing systems, <strong className="font-bold text-[#2C4E5A]">Ayurveda, Naturopathy and Yoga</strong>, operate together on one campus rather than as separate add-ons. Guests do not book an hour and leave. They stay, follow a schedule, eat what the programme prescribes, and allow a course of treatment to run its full length, which is how classical texts intended these therapies to work.
                  </p>

                  <div className="lg:hidden py-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/50 aspect-[16/10]">
                        <img
                          src="/Anchor pages/Goa centers/Lotus Goa/image 2.jpg"
                          alt="Naturopathy mud therapy session at Lotus Goa retreat in South Goa"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/Anchor pages/Goa centers/images/15.webp"; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    The Ayurvedic side of the retreat draws directly on Kerala practice, with therapies such as <strong className="font-bold text-[#2C4E5A]">Pizhichil, Shirodhara, Ellakizhi, Udvartanam and localised Vasti</strong> prescribed after a proper reading of constitution and complaint. Alongside these sit naturopathic methods including acupuncture, reflexology and mud therapy, plus daily yoga and pranayama. Anti-ageing and rejuvenation work follows classical timing rather than marketing convenience, with annual programmes of fourteen to twenty-one days advised from age forty onward. The desk stays open from 6:00 AM to 11:00 PM, and accommodation is built for real stays, with roomy quarters, an attached balcony and a separate sitting area.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 order-first lg:order-last">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2C4E5A]/20 to-[#C68D6A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                    <img
                      src="/Anchor pages/Goa centers/Lotus Goa/image 1.jpg"
                      alt="Shirodhara therapy at Lotus Goa Ayurveda and naturopathy retreat, Orlim, South Goa"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = "/Anchor pages/Goa centers/images/15.webp"; }}
                    />
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C68D6A]/20 to-[#2C4E5A]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[16/10]">
                      <img
                        src="/Anchor pages/Goa centers/Lotus Goa/image 2.jpg"
                        alt="Mud therapy and naturopathy treatment at Lotus Goa nature cure centre"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = "/Anchor pages/Goa centers/images/15.webp"; }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 text-center border-t border-[#2C4E5A]/10 mt-12">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2C4E5A] leading-relaxed">
                Your journey to renewed health begins with a single step.{" "}
                <span
                  className="text-[#2C4E5A] underline cursor-pointer hover:text-[#2C4E5A]/80 font-bold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  CONTACT
                </span>{" "}
                My Vaidyam to connect with Lotus Goa today.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda Packages Section */}
      <section id="programs" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
              Top Ayurveda Programs in <br className="hidden lg:block" /> Lotus Goa
</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <Card key={idx} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="shrink-0 p-2 bg-[#E7F0F1] rounded-lg">
                        {program.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#2C4E5A] leading-tight">{program.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      {program.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-4 md:py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#EDE8D0] rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
                Why Choose <br className="hidden lg:block" /> Lotus Goa
</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Ayurveda, Naturopathy and Yoga running together on one quiet South Goa campus, built for full-length residential courses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-border/50 hover:border-[#2C4E5A]/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="shrink-0 p-2 bg-background rounded-lg shadow-sm border border-border/20">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#2C4E5A] leading-tight">{feature.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section id="process" className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] max-w-4xl mx-auto px-2 mb-4" style={{ lineHeight: '1.2' }}>
              Your Healing Journey at <br className="hidden lg:block" /> Lotus Goa
</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A residential pathway that moves from case-taking through oleation and elimination, into yogic practice and a graded return to normal life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentProcess.map((step, idx) => (
              <div key={idx} className="relative p-6 md:p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all group h-full flex flex-col border border-[#2C4E5A]/5">
                <div className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-5xl font-black text-[#2C4E5A] transition-colors select-none">
                  {step.number}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 p-3 bg-background rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2C4E5A] leading-tight pr-10">{step.title}</h3>
                </div>

                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-4 md:py-6 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#2C4E5A" }}>
            <div className="md:hidden">
              <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                <img
                  src="/Anchor pages/Goa centers/Lotus Goa/image 1.jpg"
                  alt="Lotus Goa Ayurveda and naturopathy retreat in Orlim, South Goa"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/Anchor pages/Goa centers/images/15.webp"; }}
                />
                <h2 className="text-xl font-bold text-white text-center mb-4">Ready to Start Your Wellness Journey at Lotus Goa?</h2>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-white text-[#2C4E5A] hover:bg-white/90 text-sm sm:text-base"
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
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Wellness Journey at Lotus Goa?</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" className="rounded-full px-6 bg-white text-[#2C4E5A] hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Book Consultation Now
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-6 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500" onClick={() => setQuoteModalOpen(true)}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat With Us
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="/Anchor pages/Goa centers/Lotus Goa/image 1.jpg"
                  alt="Lotus Goa Ayurveda and naturopathy retreat in Orlim, South Goa"
                  className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/Anchor pages/Goa centers/images/15.webp"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Patient Stories & Reviews</h2>
            <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Real stories of healing from our international patients.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="border-2 border-[#2C4E5A]/20 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-6 md:p-12 relative">
                <div className="text-[#2C4E5A]/20 mb-4 md:mb-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C4E5A] mb-3 md:mb-4">
                    {testimonials[currentReview]?.title}
                  </h3>
                  <p className="text-base md:text-xl leading-relaxed" style={{ color: "#7F543D" }}>
                    "{testimonials[currentReview]?.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2C4E5A] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                    {testimonials[currentReview]?.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-1">
                      <h4 className="text-lg md:text-xl font-bold text-[#2C4E5A] leading-none">{testimonials[currentReview]?.name}</h4>
                      {testimonials[currentReview]?.verified && (
                        <span className="bg-green-100 text-green-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold inline-flex items-center gap-1 shrink-0">
                          <span className="text-xs">✓</span> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] md:text-base" style={{ color: "#7F543D" }}>
                      {testimonials[currentReview]?.location} • Treated for {testimonials[currentReview]?.condition}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < (testimonials[currentReview]?.rating || 5) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                    ))}
                  </div>
                  <span className="text-sm md:text-base font-bold text-[#2C4E5A]">{testimonials[currentReview]?.rating}.0</span>
                </div>
              </CardContent>
            </Card>

            <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-8 z-20">
              <button
                onClick={() => {
                  setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  setIsReviewAutoPlaying(false);
                }}
                className="bg-white/90 hover:bg-[#2C4E5A] hover:text-white text-[#2C4E5A] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#2C4E5A] active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-8 z-20">
              <button
                onClick={() => {
                  setCurrentReview((prev) => (prev + 1) % testimonials.length);
                  setIsReviewAutoPlaying(false);
                }}
                className="bg-white/90 hover:bg-[#2C4E5A] hover:text-white text-[#2C4E5A] p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-[#2C4E5A] active:scale-95"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentReview(idx);
                    setIsReviewAutoPlaying(false);
                  }}
                  className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-[#2C4E5A]" : "w-3 h-3 bg-[#2C4E5A]/20 hover:bg-[#2C4E5A]/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">Find answers to common queries about treatments at Lotus Goa.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-xl bg-white shadow-sm overflow-hidden px-2">
                <AccordionTrigger className="px-4 py-5 text-left font-bold text-[#2C4E5A] hover:no-underline hover:bg-[#2C4E5A]/5 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 pt-2 leading-relaxed" style={{ color: "#7F543D" }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-4 md:py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#EDE8D0] rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-[26px] md:text-4xl lg:text-5xl font-black text-[#2C4E5A] mb-4">Contact Information</h2>
              <p className="text-lg text-foreground/70" style={{ color: "#7F543D" }}>Reach out to us to begin your journey towards holistic health.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><MapPin className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Retreat Address</h3>
                    <p className="text-foreground/70 leading-relaxed" style={{ color: "#7F543D" }}>
                      Lotus Goa<br />
                      Near Vittal Temple, Orlim - 403724<br />
                      Salcete, South Goa, Goa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><Phone className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Contact Details</h3>
                    <div className="text-foreground/70 leading-relaxed space-y-2.5" style={{ color: "#7F543D" }}>
                      <div className="flex flex-col space-y-1">
                        +91 989 xxxx xxx</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shrink-0 shadow-sm border border-[#2C4E5A]/5"><MapPin className="h-6 w-6 text-[#2C4E5A]" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C4E5A] mb-2">Distance & Transit</h3>
                    <ul className="text-foreground/70 leading-relaxed space-y-2.5" style={{ color: "#7F543D" }}>
                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Approx. 2 km from Varca Beach</span>
                      </li>

                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Approx. 12 km from Madgaon Railway Station</span>
                      </li>

                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Approx. 26 km from Dabolim Airport</span>
                      </li>

                      <li className="flex items-start gap-1">
                        <span className="text-[#2C4E5A]">•</span>
                        <span>Reception open daily, 6:00 AM to 11:00 PM</span>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>

              <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-4 border-white/50">
                <iframe
                  src="https://www.google.com/maps?q=15.224692,73.947722&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lotus Goa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 overflow-hidden bg-[#2C4E5A] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/Anchor pages/Goa centers/Lotus Goa/image 1.jpg"
            alt="Lotus Goa healing retreat in Orlim, South Goa"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => { e.currentTarget.src = "/Anchor pages/Goa centers/images/15.webp"; }}
          />
          <div className="absolute inset-0 bg-[#2C4E5A]/80 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation. Our dedicated practitioners will guide you towards the perfect treatment program at Lotus Goa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-[#FF7A28] hover:bg-[#E6691F] text-white font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/919372227461?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20Lotus%20Goa."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#2C4E5A] hover:bg-gray-100 font-bold px-10 py-6 h-auto rounded-xl shadow-lg text-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Floating Action Buttons */}
      <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
        <button onClick={() => setIsJumpModalOpen(true)} className="bg-[#2C4E5A] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter">
          <span className="drop-shadow-sm">B</span><span className="drop-shadow-sm">R</span><Search size={16} strokeWidth={3.5} className="drop-shadow-sm" /><span className="drop-shadow-sm">W</span><span className="drop-shadow-sm">S</span><span className="drop-shadow-sm">E</span>
        </button>
      </div>

      <button onClick={() => setIsJumpModalOpen(true)} className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2C4E5A] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Search size={18} className="-ml-1" /><span>BROWSE</span></button>

      <button onClick={() => setQuoteModalOpen(true)} className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"><Phone size={18} className="-ml-1" /><span className="hidden md:inline">GET FREE QUOTE</span><span className="md:hidden">QUOTE</span></button>

      <div className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`} onClick={() => setIsJumpModalOpen(false)}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />
        <div className={`relative w-full max-w-sm h-full bg-background shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`} onClick={(e) => e.stopPropagation()}>
          <div className="h-1.5 w-full bg-gradient-to-r from-[#2C4E5A]/20 via-[#2C4E5A] to-[#2C4E5A]/20" />
          <div className="p-4 pb-4 bg-[#2C4E5A] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5"><div className="flex items-center gap-2 mb-1"><div className="h-px w-6 bg-white/30" /><span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span></div><h2 className="text-[25px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Section Info</h2></div>
              <button onClick={() => setIsJumpModalOpen(false)} className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"><X className="h-6 w-6 transition-transform" /></button>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm"><ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" /><p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Jump directly to any section."</p></div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5">
            {jumpSections.map((section, idx) => (
              <button key={section.id} onClick={() => jumpToSection(section.id)} className="w-full group relative bg-white hover:bg-[#2C4E5A] transition-all duration-300 p-3 rounded-xl border-2 border-[#2C4E5A]/20 hover:border-[#2C4E5A] flex items-center justify-between shadow-md hover:shadow-xl">
                <div className="flex items-center gap-4 relative z-10"><div className="w-9 h-9 rounded-lg bg-[#2C4E5A]/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200"><span className="text-xs font-black text-[#2C4E5A] group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span></div><span className="text-sm md:text-base font-bold text-[#2C4E5A] group-hover:text-white transition-all duration-200 text-left">{section.title}</span></div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200 border border-[#2C4E5A]/10 group-hover:border-transparent"><ChevronRight size={14} className="text-[#2C4E5A] group-hover:text-white transition-colors" /></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
