import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe, Building2 } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Sai Ayurveda Clinic";

export default function SaiAyurvedaClinic() {
  return (
    <CenterPageTemplate
      name="Sai Ayurveda Clinic"
      tagline="Marma-Focused Ayurvedic Clinic & Massage Centre Open Twelve Hours a Day"
      location="Colva, South Goa, India"
      rating={4.3}
      reviews={280}
      images={{
        main: `${IMG}/image 1.png`,
        secondary: `${IMG}/image 2.png`,
        fallback: "/Anchor pages/Goa centers/images/20.png",
      }}
      imageAlts={{
        main: "Marma point therapy session at Sai Ayurveda Clinic & Massage Centre, Colva, South Goa",
        secondary: "Herbal poultices and medicated oils prepared at Sai Ayurveda Clinic, Fatona, Colva",
      }}
      seo={{
        title: "Sai Ayurveda Clinic, Colva | Marma Therapy, Panchakarma & Shirodhara in South Goa",
        description: "Sai Ayurveda Clinic & Massage Centre at Fatona, Gandaulim, Colva in South Goa offers Marma point therapy, Panchakarma detox, Shirodhara, Kati Basti, Nasyam, Udwarthanam and Ayurvedic beauty facials. Open daily from 8:00 AM to 8:00 PM, minutes from Colva and Betalbatim beaches.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Sai Ayurveda Clinic & Massage Centre</strong> sits at Fatona in <strong className="font-bold text-[#2C4E5A]">Gandaulim, Colva</strong>, a short ride inland from the South Goa beach belt. It is a working neighbourhood clinic rather than a retreat, and that shapes everything about it: doors open at <strong className="font-bold text-[#2C4E5A]">8:00 in the morning and stay open until 8:00 at night</strong>, twelve hours a day, so a therapy session fits around a working schedule or a holiday itinerary instead of replacing it. Local ratings across listing platforms sit consistently near the top of the Colva and Margao area, which for a clinic this size comes from returning patients rather than marketing spend.
          </>
        ),
        detail: (
          <>
            The clinical emphasis here is on <strong className="font-bold text-[#2C4E5A]">Marma therapy</strong>, the classical practice of working the body's vital energy points with warm herbal oils to release held tension, improve circulation and reset the nervous system. Around that sit the standard classical treatments done properly: <strong className="font-bold text-[#2C4E5A]">Panchakarma detoxification, Shirodhara, Abhyanga, Kati Basti for the lower back and spine, Nasyam, and Udwarthanam</strong> herbal powder massage, alongside Ayurvedic beauty facials and dispensed herbal medicine. Every plan begins with a dosha assessment, and the stated approach is to work on what caused the complaint rather than to quieten the symptom for a week. Twin treatment rooms allow partners to take sessions side by side.
          </>
        ),
      }}
      programs={[
        {
          title: "Marma Point Therapy",
          description: "The clinic's signature work, stimulating the body's vital marma points with warm herbal oils to release deep tension, improve circulation and settle an overworked nervous system.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Panchakarma Detox Programme",
          description: "Classical purification tailored to your dosha and complaint, combining preparatory oil therapy, herbal treatment and the specific cleansing procedures your case calls for.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Shirodhara",
          description: "A continuous stream of warm medicated oil, herbal decoction or medicated buttermilk over the forehead, used here for disturbed sleep, anxiety and persistent mental fatigue.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Kati Basti for Back & Spine",
          description: "Warm medicated oil held over the lumbar region inside a herbal dough ring, a targeted treatment for chronic lower back pain, disc-related stiffness and sciatic discomfort.",
          icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Udwarthanam Powder Massage",
          description: "Upward strokes with dry herbal powders to break down stagnation, tone the tissues and support weight management in kapha-dominant and sedentary constitutions.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Ayurvedic Beauty Facials",
          description: "Herbal facial protocols using plant-based preparations rather than commercial cosmetics, aimed at clarity and tone through circulation rather than surface treatment.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="A neighbourhood clinic with a marma specialism, unusually long hours, and a local reputation built on people coming back."
      whyChooseUs={[
        {
          title: "Marma Therapy as a Speciality",
          description: "Vital point work is treated as a discipline in its own right here, not as a few extra minutes tacked onto a standard massage, which is uncommon along this coast.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Open 8:00 AM to 8:00 PM",
          description: "Twelve hours a day, seven days a week, so early morning therapy before the heat or an evening session after the beach are both genuinely available.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Consistently Top-Rated Locally",
          description: "The clinic holds near-perfect scores across independent listing platforms in the Colva and Margao area, driven by repeat local patients rather than one-time visitors.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Root Cause Over Symptom Relief",
          description: "Plans start with a dosha assessment and are written to address what produced the complaint, with the stated aim of harmony between body, mind and spirit.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Twin Treatment Rooms",
          description: "Partners can take sessions alongside each other in adjoining treatment spaces, which suits couples travelling together and guests who prefer not to attend alone.",
          icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Close to the South Goa Beaches",
          description: "Set at Fatona in Gandaulim, the clinic is a short ride from Colva and Betalbatim and well within reach of Margao, making regular sessions practical during a stay.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="Read the constitution, find the blocked points, prepare the tissue, then treat, medicate and hand over a routine you can keep."
      treatmentProcess={[
        {
          number: 1,
          title: "Dosha and Case Assessment",
          description: "Your first session begins with a constitutional reading and a discussion of digestion, sleep, pain patterns and daily routine before any therapy is scheduled.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Mapping the Marma Points",
          description: "The therapist locates which vital points are holding tension or restricting flow, since these determine where the pressure work and oil application will concentrate.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Abhyanga Oil Preparation",
          description: "Warm medicated oil applied through full-body strokes softens the tissue and opens the channels, preparing the body so the deeper work can actually reach where it needs to.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Core Therapy Session",
          description: "Depending on your case this becomes Marma work, Shirodhara, Kati Basti over the lower back, Nasyam for the head region, or a staged Panchakarma sequence.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Herbal Medicine",
          description: "Classical formulations are dispensed to continue the correction internally, with clear instruction on dosage, timing and how long the course should run.",
          icon: <Leaf className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Yoga and Daily Routine",
          description: "Simple practice and dietary guidance close the plan, so the relief gained in the treatment room is supported by what you do on the days between sessions.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "Marma Work Reached What Massage Never Did",
          review: "I have had a lot of massages over the years. This was different. The therapist worked specific points rather than the whole back, and a knot I had carried for two years simply let go.",
          name: "Nuria Alonso",
          verified: true,
          location: "Valencia, Spain",
          condition: "Marma Point Therapy",
          rating: 5,
        },
        {
          title: "Kati Basti Rescued My Lower Back",
          review: "A long flight had left my lumbar spine locked. Five sessions of warm oil held over the area and I was walking normally again. They also showed me two stretches that I still do.",
          name: "Bence Tóth",
          verified: true,
          location: "Budapest, Hungary",
          condition: "Kati Basti Therapy",
          rating: 5,
        },
        {
          title: "Evening Appointments Made It Possible",
          review: "Being open until eight meant I could have the beach day and still get treatment. No other place I contacted in South Goa could take me after six, so this decided it.",
          name: "Elif Demir",
          verified: true,
          location: "Istanbul, Turkey",
          condition: "Shirodhara Therapy",
          rating: 5,
        },
        {
          title: "We Booked the Twin Room Together",
          review: "My husband and I took our sessions side by side, which made him far more willing to try Ayurveda for the first time. Both of us went back three more times that trip.",
          name: "Ji-woo Park",
          verified: true,
          location: "Seoul, South Korea",
          condition: "Abhyanga & Rejuvenation",
          rating: 5,
        },
        {
          title: "They Explained the Cause, Not Just the Fix",
          review: "The consultation covered my digestion and sleep before anyone touched my shoulders. It turned out the two were connected. The herbal medicine they sent me home with is still working.",
          name: "Mateo Herrera",
          verified: true,
          location: "Mexico City, Mexico",
          condition: "Panchakarma Detox",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "What kind of place is Sai Ayurveda Clinic?",
          answer: "It is a working Ayurvedic clinic and massage centre at Fatona in Gandaulim, Colva, South Goa, rather than a residential retreat. Guests attend scheduled sessions and keep their own accommodation, which makes a proper course of treatment practical during an ordinary stay in the area.",
        },
        {
          question: "What is Marma therapy and why is it the focus here?",
          answer: "Marma therapy works the body's vital energy points, the junctions where muscle, bone, nerve and circulation meet, using warm herbal oils and specific pressure. It is used to release deep-set tension, improve circulation and calm the nervous system. The clinic treats it as a discipline in its own right rather than as an addition to a general massage.",
        },
        {
          question: "Which other treatments are available?",
          answer: "The clinic offers Panchakarma detoxification, Shirodhara, Abhyanga full-body oil massage, Kati Basti for the lower back and spine, Nasyam for the head and sinus region, Udwarthanam herbal powder massage, Ayurvedic beauty facials, guided yoga and dispensed herbal medicine.",
        },
        {
          question: "What are the opening hours?",
          answer: "The clinic runs from 8:00 AM to 8:00 PM, twelve hours a day. That range is deliberate, allowing early morning sessions before the heat as well as evening appointments after a day at the beach, which most centres in the area cannot accommodate.",
        },
        {
          question: "Where exactly is it and can couples be treated together?",
          answer: "The address is 31/4, Fatona, Gandaulim, Colva, Goa 403708, a short ride from Colva and Betalbatim beaches and within easy reach of Margao. Twin treatment rooms are available so partners can take their sessions alongside each other.",
        },
      ]}
      addressLines={[
        "Sai Ayurveda Clinic & Massage Centre",
        "31/4, Fatona, Gandaulim",
        "Colva, Salcete, South Goa, Goa 403708",
      ]}
      distances={[
        "Approx. 1.5 km from Colva Beach",
        "Approx. 3 km from Betalbatim Beach",
        "Approx. 7 km from Madgaon Railway Station",
        "Open daily, 8:00 AM to 8:00 PM",
      ]}
      mapQuery="Sai Ayurveda Clinic & Massage Centre, 31/4, Fatona, Gandaulim, Colva, Goa 403708"
    />
  );
}
