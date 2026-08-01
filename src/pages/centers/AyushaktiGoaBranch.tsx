import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe, Building2 } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Ayushakti Goa Branch";

export default function AyushaktiGoaBranch() {
  return (
    <CenterPageTemplate
      name="Ayushakti - Goa Branch"
      breadcrumbLabel="Ayushakti Goa Branch"
      tagline="Nadi Pariksha-Led Ayurveda & Residential Panchakarma from a Global Network"
      location="Porvorim, Goa, India"
      rating={4.6}
      reviews={900}
      images={{
        main: `${IMG}/image 1.jpg`,
        secondary: `${IMG}/image 2.jpg`,
        fallback: "/Anchor pages/Goa centers/images/17.webp",
      }}
      imageAlts={{
        main: "Entrance of Ayushakti Ayurved Health Centre, Porvorim, North Goa",
        secondary: "Residential guest room for Panchakarma guests at Ayushakti Goa, Porvorim",
      }}
      seo={{
        title: "Ayushakti Goa Branch, Porvorim | Nadi Pariksha & Residential Panchakarma in North Goa",
        description: "Ayushakti Ayurved Health Centre in Porvorim, North Goa. Every programme opens with Nadi Pariksha pulse diagnosis, followed by residential Panchakarma, chronic pain and respiratory protocols, and in-house herbal formulations exported worldwide for over 26 years. Open daily 9 AM to 6 PM.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Ayushakti</strong> is one of the few Ayurvedic names in <strong className="font-bold text-[#2C4E5A]">Porvorim, North Goa</strong> that arrives with an international track record behind it. Built on the work of <strong className="font-bold text-[#2C4E5A]">Vaidya Smita Naram</strong>, the group has treated patients across India, Europe, the United States, Australia, New Zealand and Russia, and has been supplying its own herbal formulations to those markets for more than twenty-six years. The Goa branch brings that same protocol-driven system to a quiet Goan-architecture property, where guests are received for consultations as well as full residential treatment courses.
          </>
        ),
        detail: (
          <>
            Nothing here begins with a therapy list. Every patient first goes through <strong className="font-bold text-[#2C4E5A]">Nadi Pariksha</strong>, the classical pulse reading, together with a Prakriti assessment that identifies which dosha has moved out of balance and how deep the disturbance has travelled. Only then is a plan written. <strong className="font-bold text-[#2C4E5A]">Panchakarma courses typically run ten to twelve days</strong>, extending to three weeks for long-standing complaints, and the centre is particularly sought out for chronic joint pain, arthritis, asthma and allergy, skin disorders and stubborn digestive trouble. Rooms on site allow guests to complete a full course without breaking the routine, and the centre operates every day from 9:00 AM to 6:00 PM.
          </>
        ),
      }}
      programs={[
        {
          title: "Nadi Pariksha Assessment",
          description: "The classical pulse reading paired with Prakriti analysis, used here as the compulsory first step so that every prescription answers a diagnosis rather than a symptom list.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Residential Panchakarma Course",
          description: "Structured ten to twelve day purification stays, extended to three weeks for chronic cases, with therapies, diet and rest scheduled together under daily supervision.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Joint Pain & Arthritis Protocol",
          description: "A dedicated pathway for rheumatoid and osteoarthritic complaints combining oil therapies, localised fomentation and internal herbal support over a graded course.",
          icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Respiratory & Allergy Care",
          description: "Targeted work for asthma, sinus congestion and seasonal allergy using Nasya, medicated steam and formulations aimed at clearing kapha from the chest and head.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Digestive & Metabolic Reset",
          description: "Agni-focused correction for bloating, acidity, irregular bowels and sluggish metabolism, built on graded diet, herbal decoctions and gentle internal cleansing.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "In-House Herbal Prescriptions",
          description: "Formulations from Ayushakti's own range, the same remedies exported to patients abroad, dispensed to continue the treatment effect long after you leave.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="An internationally established Ayurvedic system where pulse diagnosis leads, protocols are documented, and the herbal pharmacy is the group's own."
      whyChooseUs={[
        {
          title: "A Global Ayurvedic Network",
          description: "Ayushakti treats patients across Europe, the USA, Australia, New Zealand and Russia, so the Goa branch works to protocols tested well beyond a single clinic.",
          icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Pulse Diagnosis Comes First",
          description: "No therapy is booked before Nadi Pariksha and Prakriti assessment, which keeps the plan tied to the actual imbalance rather than to a popular package.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "26 Years of Herbal Manufacturing",
          description: "The group has produced and exported its own herbal remedies for over two and a half decades, so what is prescribed here is made to its own standard.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Rooms for Full Courses",
          description: "On-site accommodation lets guests stay through a complete ten to twenty-one day programme, which is what classical Panchakarma actually requires.",
          icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Built for Chronic Conditions",
          description: "The centre is most often approached for arthritis, asthma, skin disorders and long-standing digestive problems rather than for one-off relaxation sessions.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Central North Goa Location",
          description: "Porvorim sits between Panaji and the northern beaches, making the centre easy to reach whether you are staying in the city or along the coast.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="A diagnosis-first sequence: read the pulse, name the imbalance, prepare the body, cleanse it, then support the result with herbs and routine."
      treatmentProcess={[
        {
          number: 1,
          title: "Nadi Pariksha Pulse Reading",
          description: "Your first appointment is a pulse examination alongside Prakriti mapping, establishing your natural constitution and the specific dosha disturbance behind your complaint.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Locating the Root Cause",
          description: "Findings are traced back through diet, sleep, work pattern and past illness so the plan addresses what created the condition, not only what it currently feels like.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Purvakarma Preparation",
          description: "Internal and external oleation with medicated ghee and warm oils, followed by herbal steam, loosens accumulated waste and readies the channels for elimination.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Panchakarma Elimination",
          description: "The main cleansing phase runs across ten to twelve days, with the specific routes chosen for your case rather than every procedure being applied by default.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Herbal Prescription",
          description: "Formulations from Ayushakti's own pharmacy are dispensed to consolidate the cleanse, rebuild digestive fire and hold the correction in place over the coming months.",
          icon: <Leaf className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Diet Plan and Review",
          description: "You leave with a written food and routine plan matched to your constitution, plus a follow-up schedule so progress is reviewed rather than assumed.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "My Rheumatoid Pain Finally Has a Pattern",
          review: "The pulse reading picked up things I had never mentioned. Over a twelve-day course my morning stiffness dropped from two hours to about twenty minutes, and the herbal support has kept it there.",
          name: "Nadia Petrova",
          verified: true,
          location: "Moscow, Russia",
          condition: "Arthritis Protocol",
          rating: 5,
        },
        {
          title: "Three Winters Without an Asthma Attack",
          review: "I came for the respiratory programme after years of inhaler dependence. The Nasya work and the formulations they sent me home with have changed how I get through the cold season entirely.",
          name: "Callum Fraser",
          verified: true,
          location: "Edinburgh, Scotland",
          condition: "Respiratory & Allergy Care",
          rating: 5,
        },
        {
          title: "A Proper Diagnosis, Not a Menu",
          review: "What impressed me was being told which therapies I did not need. The consultation was thorough and unhurried, and the treatment plan was written specifically for my case.",
          name: "Ravi Menon",
          verified: true,
          location: "Dubai, UAE",
          condition: "Nadi Pariksha Consultation",
          rating: 5,
        },
        {
          title: "Staying On Site Made the Difference",
          review: "Having a room at the centre meant I could actually follow the routine, the diet and the rest periods without a taxi ride breaking every day. That is why the results held.",
          name: "Elke Brandt",
          verified: true,
          location: "Munich, Germany",
          condition: "Residential Panchakarma",
          rating: 5,
        },
        {
          title: "My Digestion Rebuilt Over Two Weeks",
          review: "Years of bloating and irregular digestion improved steadily through the graded diet and internal cleansing. The follow-up call a month later showed they were genuinely tracking my progress.",
          name: "Joana Silva",
          verified: true,
          location: "São Paulo, Brazil",
          condition: "Digestive & Metabolic Reset",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "What is Ayushakti and how is the Goa branch connected to it?",
          answer: "Ayushakti is an established Ayurvedic group built on the work of Vaidya Smita Naram, with centres in India and a patient base across Europe, the United States, Australia, New Zealand and Russia. The Porvorim branch in North Goa follows the same clinical protocols and dispenses the same in-house herbal formulations the group has manufactured and exported for over 26 years.",
        },
        {
          question: "Why does every treatment begin with Nadi Pariksha?",
          answer: "Nadi Pariksha is classical pulse diagnosis, read alongside a Prakriti assessment of your natural constitution. It identifies which dosha has moved out of balance and how deeply the disturbance has settled. Ayushakti treats it as compulsory because a therapy chosen without it is guesswork, however pleasant the therapy may be.",
        },
        {
          question: "How long does a Panchakarma programme last here?",
          answer: "A standard Panchakarma course runs ten to twelve days, and long-standing or chronic conditions are often planned across two to three weeks. The specific purification routes used are selected for your case rather than every procedure being applied as a matter of routine.",
        },
        {
          question: "Which conditions is the centre most often approached for?",
          answer: "Guests most commonly come with chronic joint pain and arthritis, asthma, sinus congestion and seasonal allergy, skin disorders, and persistent digestive or metabolic complaints. The centre also sees patients seeking general detoxification and constitution-based preventive care.",
        },
        {
          question: "Where is the branch located and can I stay on site?",
          answer: "The centre is at 633 Bhatkarwaddo, Porvorim, North Goa 403501, positioned between Panaji and the northern beaches. Guest rooms are available on the property so that visitors can complete a full residential course. Consultation and therapy hours run daily from 9:00 AM to 6:00 PM.",
        },
      ]}
      addressLines={[
        "Ayushakti Ayurved Health Centre - Goa",
        "633 Bhatkarwaddo, Porvorim",
        "North Goa, Goa 403501",
      ]}
      distances={[
        "Approx. 6 km from Panaji city centre",
        "Approx. 30 km from Manohar International Airport, Mopa",
        "Approx. 12 km from Thivim Railway Station",
        "Open daily, 9:00 AM to 6:00 PM",
      ]}
      mapQuery="Ayushakti Ayurved Health Centre, 633 Bhatkarwaddo, Porvorim, North Goa 403501"
    />
  );
}
