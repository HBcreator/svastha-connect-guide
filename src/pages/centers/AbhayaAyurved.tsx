import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe, Building2 } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Abhaya Ayurved";

export default function AbhayaAyurved() {
  return (
    <CenterPageTemplate
      name="Abhaya Ayurved"
      tagline="Ayurvedic Clinic, Pharmacy & Panchakarma Day-Care Unit in the Ponda Temple Belt"
      location="Ponda, Goa, India"
      rating={4.4}
      reviews={300}
      images={{
        main: `${IMG}/image 1.jpg`,
        secondary: `${IMG}/image 2.jpg`,
        fallback: "/Anchor pages/Goa centers/images/22.jpg",
      }}
      imageAlts={{
        main: "Mukha Lepa herbal facial therapy for Ayurvedic dermatology at Abhaya Ayurved, Ponda, Goa",
        secondary: "Herbal poultice fomentation therapy at the Panchakarma day-care unit, Abhaya Ayurved, Ponda",
      }}
      seo={{
        title: "Abhaya Ayurved, Ponda Goa | Ayurvedic Dermatology, Panchakarma Day Care & Pharmacy",
        description: "Abhaya Ayurved at Sadar, Ponda is an Ayurvedic clinic, pharmacy and Panchakarma day-care unit run by Dr. Aditi Mahajan and Dr. Parth S. Mahajan. Ayurvedic dermatology for skin conditions, women's health, joint pain, diabetes care, Abhyanga, Shirodhara and Nasyam. Open 9:30 AM to 12:30 PM and 4:30 PM to 8:30 PM.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Abhaya Ayurved</strong> stands at Sadar in <strong className="font-bold text-[#2C4E5A]">Ponda</strong>, inland Goa's temple town, a world away from the beach spa circuit. It is a proper medical set-up rather than a wellness centre: an <strong className="font-bold text-[#2C4E5A]">Ayurvedic clinic, a dispensing pharmacy and a Panchakarma day-care unit</strong> under one roof, built to a standard of finish and hygiene that local physicians have publicly noted. The practice is run by two resident physicians, <strong className="font-bold text-[#2C4E5A]">Dr. Aditi Mahajan</strong> and <strong className="font-bold text-[#2C4E5A]">Dr. Parth S. Mahajan</strong>, who split the week between them, so the clinic keeps a doctor in the room six days a week across a morning and an evening session.
            </>
        ),
        detail: (
          <>
            Because its patients are largely residents rather than holidaymakers, the caseload here looks different from a coastal centre. The clinic is known in Ponda for <strong className="font-bold text-[#2C4E5A]">Ayurvedic dermatology</strong>, treating psoriasis, eczema, acne and pigmentation through internal correction and external applications such as Mukha Lepa, alongside <strong className="font-bold text-[#2C4E5A]">women's health, chronic joint pain and diabetes management</strong>. Panchakarma is delivered on a <strong className="font-bold text-[#2C4E5A]">day-care basis</strong>: you attend for your therapy session and go home the same day, which makes a full course achievable without leaving work or family. Abhyanga, Shirodhara, Nasyam and body therapies are all administered in-house, and medicines are dispensed from the clinic's own pharmacy counter rather than prescribed and outsourced.
          </>
        ),
      }}
      programs={[
        {
          title: "Ayurvedic Dermatology",
          description: "The clinic's best-known work: psoriasis, eczema, acne, pigmentation and chronic skin complaints treated through blood purification, internal medicine and herbal external applications.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Panchakarma Day Care",
          description: "Full classical purification delivered session by session, so patients attend for treatment and return home the same day instead of committing to a residential stay.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Women's Health Care",
          description: "Ayurvedic management of menstrual irregularity, hormonal imbalance, PCOS and postnatal recovery, an area where having a resident female physician matters to many patients.",
          icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Joint Pain & Arthritis",
          description: "Long-course treatment for arthritic knees, cervical and lumbar complaints and general stiffness, combining oil retention therapies with internal anti-inflammatory formulations.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Diabetes & Metabolic Care",
          description: "Constitution-based management of blood sugar, weight and lipid imbalance through diet restructuring, targeted herbs and periodic cleansing rather than one-off treatment.",
          icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Abhyanga, Shirodhara & Nasyam",
          description: "The classical therapy trio delivered in dedicated treatment rooms: full-body oil massage, continuous oil flow over the forehead, and medicated nasal administration.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="Two resident physicians, an in-house pharmacy and a day-care Panchakarma unit, serving a local community rather than a tourist season."
      whyChooseUs={[
        {
          title: "Two Resident Physicians",
          description: "Dr. Aditi Mahajan and Dr. Parth S. Mahajan divide the week between them, so a qualified doctor is present across both the morning and evening consultation sessions.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Clinic, Pharmacy and Unit in One",
          description: "Consultation, dispensing and Panchakarma therapy all happen on the same premises, which removes the usual gap between being prescribed a medicine and actually obtaining it.",
          icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Skin Is a Genuine Speciality",
          description: "Ayurvedic dermatology is a stated focus here rather than a listed service, and the clinic is approached in Ponda specifically for chronic skin conditions.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Day Care, Not a Residential Stay",
          description: "Therapy is structured so a full Panchakarma course can be completed while continuing normal life, which is why local patients actually finish their courses.",
          icon: <ClipboardList className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Morning and Evening Sessions",
          description: "Consultation runs 9:30 AM to 12:30 PM and again 4:30 PM to 8:30 PM, a split that suits working patients rather than only those with a free afternoon.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Inland Ponda, Away From the Coast",
          description: "Set in Goa's temple belt near Dada Vaidya Chowk, the clinic serves a resident community year-round instead of scaling up and down with the tourist season.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="Consult, identify the disturbance, prepare and cleanse across day visits, then dispense and follow up until the condition actually settles."
      treatmentProcess={[
        {
          number: 1,
          title: "Consultation and Pulse Reading",
          description: "Your case opens with one of the resident physicians taking a full history and reading the pulse, establishing constitution and the nature of the imbalance before anything is prescribed.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Condition-Specific Assessment",
          description: "Skin, joint, metabolic and women's health cases each follow their own line of examination, because a psoriasis presentation and an arthritic knee need very different questions asked.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Purvakarma Preparation",
          description: "Oleation and fomentation begin the therapeutic sequence, softening tissue and drawing accumulated waste toward the channels from which it can be cleared.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Day-Care Panchakarma Sessions",
          description: "Cleansing procedures are scheduled as individual visits across the week, letting a complete course be delivered without any overnight stay at the unit.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Pharmacy Dispensing",
          description: "Internal formulations and external applications are supplied directly from the clinic's own pharmacy, with dosage and duration explained rather than written and left.",
          icon: <Leaf className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Diet Plan and Review Visits",
          description: "Chronic conditions are tracked over months rather than closed after a course, with scheduled review appointments and dietary correction adjusted as the picture changes.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "My Psoriasis Is Quiet for the First Time",
          review: "Two decades of steroid creams that worked for a month at a time. Here they treated the blood and the digestion first and the skin followed. Six months on, the patches have not returned.",
          name: "Linh Nguyen",
          verified: true,
          location: "Hanoi, Vietnam",
          condition: "Ayurvedic Dermatology",
          rating: 5,
        },
        {
          title: "A Woman Doctor Made All the Difference",
          review: "I had put off seeking help for hormonal problems for years. Being able to explain everything to a female physician who took it seriously changed how I approached my own treatment.",
          name: "Amira Hassan",
          verified: true,
          location: "Cairo, Egypt",
          condition: "Women's Health Care",
          rating: 5,
        },
        {
          title: "I Finished the Course Because I Could",
          review: "Every other place wanted me to stay two weeks. Here I came in for sessions and went home each evening. That is the only reason I actually completed a full Panchakarma.",
          name: "Andrés Vargas",
          verified: true,
          location: "Lima, Peru",
          condition: "Panchakarma Day Care",
          rating: 5,
        },
        {
          title: "Medicines Handed Over, Not Just Prescribed",
          review: "The pharmacy on site meant I left with everything in hand and clear instructions on when to take what. Small thing, but it removed every excuse I would have had to skip doses.",
          name: "Zuzana Kováčová",
          verified: true,
          location: "Bratislava, Slovakia",
          condition: "Diabetes & Metabolic Care",
          rating: 5,
        },
        {
          title: "Evening Appointments Fit Around Work",
          review: "Being open until half past eight meant I never had to take leave for treatment. Over three months my knee pain went from constant to occasional, without disrupting anything.",
          name: "Wanjiru Kamau",
          verified: true,
          location: "Nairobi, Kenya",
          condition: "Joint Pain & Arthritis",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "What exactly is Abhaya Ayurved?",
          answer: "It is an Ayurvedic clinic, dispensing pharmacy and Panchakarma day-care unit operating from Sadar in Ponda, Goa. Unlike the resort-style centres along the coast, it functions as a medical practice serving a resident community, with consultation, treatment and medicine supply all handled on the same premises.",
        },
        {
          question: "Who are the doctors and when are they available?",
          answer: "The practice is run by two resident physicians. Dr. Aditi Mahajan consults on Monday, Tuesday and Wednesday, and Dr. Parth S. Mahajan on Thursday, Friday and Saturday. Both sessions run from 9:30 AM to 12:30 PM and again from 4:30 PM to 8:30 PM, so appointments are available before and after ordinary working hours.",
        },
        {
          question: "What does the clinic specialise in?",
          answer: "Ayurvedic dermatology is the best-known focus, covering psoriasis, eczema, acne and pigmentation through internal correction alongside herbal external applications. The clinic also treats women's health concerns, chronic joint pain and arthritis, and diabetes and metabolic imbalance, and offers Abhyanga, Shirodhara, Nasyam and general body therapies.",
        },
        {
          question: "What does Panchakarma day care mean in practice?",
          answer: "Rather than admitting you for a residential stay, the unit schedules your cleansing therapy as a series of individual appointments. You attend for the session, rest as required, and return home the same day. A complete classical course can therefore be finished without taking extended leave or relocating.",
        },
        {
          question: "Where is the clinic located?",
          answer: "Abhaya Ayurved is at Sadar in Ponda, behind the State Bank of India and near Mount Carmel Chapel, close to Dada Vaidya Chowk. Ponda sits inland in Goa's temple belt, roughly half an hour from Panaji and well connected to Margao and the central Goa towns.",
        },
      ]}
      addressLines={[
        "Abhaya Ayurved - Clinic, Pharmacy & Panchakarma Day Care",
        "Behind State Bank of India, near Mount Carmel Chapel",
        "Sadar, Ponda, Goa 403401",
      ]}
      distances={[
        "Close to Dada Vaidya Chowk, central Ponda",
        "Approx. 28 km from Panaji city centre",
        "Approx. 22 km from Madgaon Railway Station",
        "Open 9:30 AM to 12:30 PM and 4:30 PM to 8:30 PM",
      ]}
      mapQuery="Abhayam Ayurved, Sadar, near Mount Carmel Chapel, Ponda, Goa 403401"
    />
  );
}
