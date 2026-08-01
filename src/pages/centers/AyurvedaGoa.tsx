import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe, Building2 } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Ayurveda Goa";

export default function AyurvedaGoa() {
  return (
    <CenterPageTemplate
      name="Ayurveda Goa"
      tagline="Two Coastal Clinics, Three Specialists, and Compact Doctor-Led Panchakarma"
      location="Arpora & Mandrem, North Goa, India"
      rating={4.7}
      reviews={1100}
      images={{
        main: `${IMG}/image 1.jpg`,
        secondary: `${IMG}/image 2.jpg`,
        fallback: "/Anchor pages/Goa centers/images/19.jpeg",
      }}
      imageAlts={{
        main: "Ayurveda Goa speciality clinic frontage at Arpora, Bardez, North Goa",
        secondary: "Garden setting surrounding the Ayurveda Goa clinic near Baga Creek, Arpora",
      }}
      seo={{
        title: "Ayurveda Goa, Arpora & Mandrem | Doctor-Led Panchakarma, Shalya Tantra & Physiotherapy",
        description: "Ayurveda Goa runs two North Goa clinics at Arpora and Mandrem, led by Dr. Rohit R. Borkar M.D.(A.M), B.A.M.S with an Ayurvedic surgeon and a physiotherapist-yoga consultant on the same team. Pulse diagnosis, seven-day Panchakarma courses, anorectal care, yoga and pranayama, with consultation available in Russian.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Ayurveda Goa</strong> is an Ayurveda speciality practice running two clinics along the North Goa coast, one at <strong className="font-bold text-[#2C4E5A]">Baga Creek in Arpora</strong> and a second at <strong className="font-bold text-[#2C4E5A]">Junas Waddo, Mandrem</strong>. It is led by <strong className="font-bold text-[#2C4E5A]">Dr. Rohit R. Borkar, M.D.(A.M), B.A.M.S</strong>, an Ayurveda and Panchakarma consultant who examines every patient personally and begins with pulse diagnosis. What makes the practice unusual for the region is the composition of its team: alongside the physician sits an Ayurvedic surgeon trained in Shalya Tantra and a physiotherapist who also teaches yoga, so a case can move between systems without being sent elsewhere.
          </>
        ),
        detail: (
          <>
            The model here is <strong className="font-bold text-[#2C4E5A]">outpatient rather than residential</strong>. Guests keep their own beach accommodation and come in for scheduled sessions, which suits visitors who want genuine treatment without relocating into a retreat. Detoxification is offered as a <strong className="font-bold text-[#2C4E5A]">compact seven-day Panchakarma course</strong>, built on daily therapist-administered oil work, herbal medicines and specific dietary instruction rather than an open-ended package. Yoga, meditation and pranayama sessions run alongside, and consultations are available in <strong className="font-bold text-[#2C4E5A]">Russian</strong> as well as English, reflecting the long-standing patient base along this stretch of coast. The Arpora clinic closes at 6:00 PM and the Mandrem clinic at 7:00 PM.
          </>
        ),
      }}
      programs={[
        {
          title: "Seven-Day Panchakarma Course",
          description: "A compact detoxification block of daily therapist-led oil therapy, herbal medicines and dietary instruction, structured for visitors who cannot commit to a three-week stay.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Pulse Diagnosis Consultation",
          description: "A full examination with the consulting physician using Nadi Pariksha and case history, from which every treatment decision at both clinics follows.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Shalya Tantra & Anorectal Care",
          description: "Classical Ayurvedic surgical expertise for piles, fissure, fistula and non-healing wounds, handled by a resident M.S. in Shalya Tantra rather than referred out.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Physiotherapy & Movement Care",
          description: "A qualified physiotherapist on the team addresses joint restriction, post-injury recovery and posture alongside the Ayurvedic oil and fomentation therapies.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Yoga, Meditation & Pranayama",
          description: "Guided practice sessions offered as therapy rather than a class, prescribed to support breathing capacity, stress load and the results of the detox course.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Individual Herbal Prescriptions",
          description: "Classical formulations dispensed to each patient's constitution and complaint, with clear guidance on how long to continue them after the therapy block ends.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="A small, examination-first practice where an Ayurvedic physician, a surgeon and a physiotherapist work from the same case notes."
      whyChooseUs={[
        {
          title: "Three Specialists, One Team",
          description: "An Ayurveda and Panchakarma consultant, an M.S. in Shalya Tantra, and a physiotherapist-yoga consultant, so a complex case does not have to be split across clinics.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Ayurvedic Surgical Expertise",
          description: "Shalya Tantra with a focus on anorectal conditions and wound management is rarely available at a coastal Goa clinic, and is offered here as standard practice.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Examination Before Treatment",
          description: "Dr. Borkar reads the pulse and examines each patient personally, and the plan is written for that individual instead of being selected from a therapy list.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Two Clinics Along the Coast",
          description: "Arpora serves the Baga and Calangute belt while Mandrem covers the far north, so treatment stays within reach wherever you are staying.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Consultation in Russian",
          description: "The practice has served Russian-speaking patients on this coast for years and maintains a dedicated line, which removes the usual translation guesswork from a medical consultation.",
          icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Outpatient, Not Residential",
          description: "You keep your own accommodation and attend scheduled sessions, which makes serious treatment possible on an ordinary Goa holiday rather than a dedicated retreat trip.",
          icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="Examine first, decide which discipline the case belongs to, then run a defined block of treatment with the medicines and practice to hold it."
      treatmentProcess={[
        {
          number: 1,
          title: "Pulse Reading and Examination",
          description: "Your first visit is a proper clinical examination with the consulting physician, combining Nadi Pariksha with case history, current medication and the complaint you arrived with.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Choosing the Right Discipline",
          description: "Because the team spans Ayurvedic medicine, surgery and physiotherapy, the discussion is genuinely about which route fits your case rather than which package to sell.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Daily Oil Therapy Block",
          description: "Treatment runs as a defined seven-day sequence of therapist-administered massage and fomentation, with oils selected for your constitution and adjusted as you respond.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Cleansing Procedures",
          description: "Once the body has been prepared, the specific Panchakarma eliminations indicated for your case are carried out under the physician's direct supervision.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Practice and Breathing Work",
          description: "Yoga, meditation and pranayama are prescribed alongside the therapy block, chosen to support whatever the treatment is trying to correct rather than as general exercise.",
          icon: <Heart className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Medicines and Follow-Up",
          description: "You leave with herbal formulations, dietary instructions and a clear timeline, and the clinic remains reachable for review once you are back home.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "Seven Days Was Exactly What I Could Spare",
          review: "I did not want to give up my holiday to a retreat. Coming in each morning for treatment and going back to my own place in the afternoon worked perfectly, and the results were real.",
          name: "Aino Virtanen",
          verified: true,
          location: "Helsinki, Finland",
          condition: "Seven-Day Panchakarma",
          rating: 5,
        },
        {
          title: "The Doctor Explained Things Simply",
          review: "No jargon, no upselling. He read my pulse, told me what he found, and set out exactly what the week would involve and what it would not fix. That honesty is why I went back the following year.",
          name: "Yael Shamir",
          verified: true,
          location: "Tel Aviv, Israel",
          condition: "Pulse Diagnosis Consultation",
          rating: 5,
        },
        {
          title: "Physiotherapy and Ayurveda in One Place",
          review: "My knee problem needed both the oil therapy and proper rehabilitation exercises. Having the physiotherapist working from the same notes as the Ayurvedic doctor made a genuine difference.",
          name: "Hana Novotná",
          verified: true,
          location: "Prague, Czech Republic",
          condition: "Physiotherapy & Movement Care",
          rating: 5,
        },
        {
          title: "Treated a Problem I Had Avoided for Years",
          review: "I had put off dealing with an anorectal condition out of dread of surgery. The Ayurvedic surgical approach here was handled discreetly and professionally, and the recovery was far gentler than I feared.",
          name: "Lieve Vermeulen",
          verified: true,
          location: "Antwerp, Belgium",
          condition: "Shalya Tantra Care",
          rating: 5,
        },
        {
          title: "Convenient Whether You Are North or South",
          review: "I stayed in Mandrem the first week and moved down to Baga for the second. Being able to continue the same treatment at the other clinic without starting over was unexpectedly useful.",
          name: "Grace Ngata",
          verified: true,
          location: "Auckland, New Zealand",
          condition: "Rejuvenation Therapy",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Where are the clinics and why are there two?",
          answer: "Ayurveda Goa operates from Baga Creek in Arpora, between Royal Goan Beach Club and Lila Café, and from Junas Waddo in Mandrem beside Sol Beso Resort. The two locations cover the Baga and Calangute belt and the far northern beaches, so patients can attend sessions without long daily travel regardless of where they are staying.",
        },
        {
          question: "Who will actually treat me here?",
          answer: "Dr. Rohit R. Borkar, M.D.(A.M), B.A.M.S, is the Ayurveda and Panchakarma consultant and examines patients personally. The team also includes Dr. Prathamesh V. Karpe, M.S. in Shalya Tantra, who handles Ayurvedic surgical work including anorectal conditions and wound management, and Dr. Rajbir Singh Dhillon, B.P.T., who covers physiotherapy and yoga consultation.",
        },
        {
          question: "How long is the Panchakarma programme?",
          answer: "The standard course runs seven days, built on daily therapist-administered oil therapy and fomentation, the cleansing procedures indicated for your case, herbal medicines and specific dietary instruction. It is designed as a complete block rather than an open-ended stay, which suits visitors treating a condition during an ordinary holiday.",
        },
        {
          question: "Do I need to stay at the clinic?",
          answer: "No. The practice works on an outpatient basis, so you keep your own accommodation and attend scheduled appointments. This is deliberate. It lets guests undertake a genuine course of treatment without relocating into a residential retreat or restructuring their trip around it.",
        },
        {
          question: "Is consultation available in languages other than English?",
          answer: "Yes. The practice has served Russian-speaking patients along this coast for many years and maintains a dedicated Russian contact line alongside its English service, so the consultation itself can be conducted without an interpreter.",
        },
      ]}
      addressTitle="Clinic Addresses"
      addressLines={[
        "Ayurveda Goa - Arpora Clinic",
        "Baga Creek, between Royal Goan Beach Club and Lila Café, Arpora, Bardez",
        "Ayurveda Goa - Mandrem Clinic",
        "Junas Waddo, next to Sol Beso Resort, Mandrem, North Goa",
      ]}
      distances={[
        "Arpora clinic approx. 3 km from Baga and Calangute beaches",
        "Mandrem clinic a short walk from Mandrem Beach",
        "Approx. 32 km from Manohar International Airport, Mopa",
        "Arpora open until 6:00 PM, Mandrem until 7:00 PM",
      ]}
      mapQuery="Ayurclinic Goa, Baga Creek, Arpora, Bardez, North Goa"
    />
  );
}
