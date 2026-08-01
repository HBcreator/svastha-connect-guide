import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe, Building2 } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Ayurcare Goa";

export default function AyurcareGoa() {
  return (
    <CenterPageTemplate
      name="Ayurcare Goa"
      tagline="Prevention-First Ayurveda & Naturopathy Centre with a Sea-Facing Therapy Terrace"
      location="Mandrem, North Goa, India"
      rating={4.5}
      reviews={520}
      images={{
        main: `${IMG}/image 1.jpg`,
        secondary: `${IMG}/image 2.jpg`,
        fallback: "/Anchor pages/Goa centers/images/23.PNG",
      }}
      imageAlts={{
        main: "Garden entrance to Ayurcare Goa Ayurveda and Naturopathy Centre at Junos Vaddo, Mandrem",
        secondary: "Therapy session on the sea-facing terrace overlooking Mandrem beach at Ayurcare Goa",
      }}
      seo={{
        title: "Ayurcare Goa, Mandrem | Immunity Programmes, Panchakarma & Naturopathy in North Goa",
        description: "Ayurcare Goa is an Ayurveda and Naturopathy centre at Junos Vaddo, Mandrem, founded by Dr. Suvira Bandekar with 14+ years of practice. Immunomodulatory programmes, classical Panchakarma, Ritucharya seasonal preventive care, medicinal massage and naturopathy across three Goa locations, with therapy rooms overlooking Mandrem beach.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Ayurcare Goa</strong> occupies a quiet blue-walled property at <strong className="font-bold text-[#2C4E5A]">Junos Vaddo in Mandrem</strong>, close enough to the shore that some of its therapy sessions are given on a terrace looking straight out over the sand. It was founded by <strong className="font-bold text-[#2C4E5A]">Dr. Suvira Bandekar</strong>, an Ayurvedic physician with more than fourteen years of practice, and now operates across <strong className="font-bold text-[#2C4E5A]">three locations in Goa</strong>. The centre works with both Ayurveda and Naturopathy, and its stated position is unusually clear for the sector: prevention is treated as the more important half of the discipline, not as an afterthought once someone is already unwell.
          </>
        ),
        detail: (
          <>
            That philosophy shapes the programme list. Alongside <strong className="font-bold text-[#2C4E5A]">classical Panchakarma</strong> and traditional medicinal massage sits a defined <strong className="font-bold text-[#2C4E5A]">immunomodulatory programme</strong> aimed at strengthening the body's own resistance, and seasonal <strong className="font-bold text-[#2C4E5A]">Ritucharya</strong> care that adjusts diet and therapy as the year turns. Packages are written around the complaints people actually arrive with now, chiefly stress, respiratory trouble and skin conditions, and health is assessed the classical way, by looking at the balance of the doshas, the state of the body tissues, the clearing of wastes and the strength of digestive fire, rather than at a single symptom in isolation. Naturopathic methods run alongside where they add something the oils cannot.
          </>
        ),
      }}
      programs={[
        {
          title: "Immunomodulatory Programme",
          description: "A defined course aimed at building the body's own resistance through Rasayana preparations, digestive correction and therapies chosen to strengthen rather than to purge.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Classical Panchakarma Detox",
          description: "The five purification therapies delivered in proper sequence, prescribed after assessment of dosha balance, tissue state and digestive strength rather than as a fixed package.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Ritucharya Seasonal Care",
          description: "Preventive programmes that change with the season, adjusting diet, therapy and daily routine as the year turns, which is how classical Ayurveda intended health to be maintained.",
          icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Relax & Rejuvenate Package",
          description: "A restorative course for stress, disturbed sleep and general depletion, combining warm oil therapies with dietary correction and unhurried scheduling.",
          icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Ayurvedic Medicinal Massage",
          description: "Traditional oil therapies using medicated preparations selected for the condition being treated, delivered in the centre's therapy rooms and on the sea-facing terrace.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Naturopathy Support Therapies",
          description: "Natural methods used where they add something the oil therapies cannot, integrated into the plan rather than offered as an unrelated second service.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="A founder-led centre that treats prevention as the main event, with immunity programmes, seasonal care and therapy rooms facing the sea."
      whyChooseUs={[
        {
          title: "Founded and Led by a Physician",
          description: "Dr. Suvira Bandekar brings more than fourteen years of Ayurvedic practice, and the centre's clinical direction reflects a single consistent approach rather than a rotating panel.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Prevention Stated as the Priority",
          description: "The centre openly positions disease prevention through diet and constitution-appropriate lifestyle as more important than treatment, which changes what it recommends.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Immunity as a Defined Programme",
          description: "Immunomodulatory care is offered as a structured course in its own right, not as a marketing line, which is uncommon among Goa's treatment centres.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Therapy Overlooking the Beach",
          description: "Sessions on the sea-facing terrace at Mandrem put the sound of the surf and open air into the treatment itself, which most clinic rooms simply cannot offer.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Three Locations Across Goa",
          description: "The practice operates from three centres in the state, so continuity of care is possible even if your stay moves between the north and the rest of Goa.",
          icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Built for Modern Complaints",
          description: "Packages are written specifically around stress, respiratory difficulty and skin conditions, the problems people now arrive with, rather than around a generic spa menu.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="Assess the four classical markers, decide whether to prevent or to treat, then cleanse, rebuild resistance, and hand over a seasonal routine."
      treatmentProcess={[
        {
          number: 1,
          title: "Four-Point Health Assessment",
          description: "Your consultation examines dosha balance, the condition of the body tissues, how wastes are being cleared and the strength of digestive fire, the classical definition of health.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Prevention or Treatment",
          description: "The physician decides openly whether your case calls for corrective therapy or for a preventive programme, and says so, rather than defaulting everyone into a detox.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Snehana and Swedana",
          description: "Medicated oil applications and herbal fomentation prepare the body, loosening what has accumulated and opening the channels through which it will be cleared.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Purification Therapies",
          description: "The Panchakarma routes indicated for your case are carried out in sequence, with rest, diet and session timing adjusted to how your body is actually responding.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Building Resistance",
          description: "Once cleared, the immunomodulatory phase begins, using Rasayana preparations and strengthening therapies so the body holds the gain instead of drifting back.",
          icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Seasonal Routine to Take Home",
          description: "You leave with Ritucharya guidance that changes through the year, so diet and routine keep pace with the seasons rather than staying fixed after your last session.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "I Stopped Falling Ill Every Few Weeks",
          review: "I came for the immunity programme after a year of constant infections. It was slower and less dramatic than a detox, and far more useful. I have had one cold since, in eight months.",
          name: "Malith Perera",
          verified: true,
          location: "Colombo, Sri Lanka",
          condition: "Immunomodulatory Programme",
          rating: 5,
        },
        {
          title: "Treatment With the Sea Right There",
          review: "Having my session on the terrace, hearing the waves and feeling the evening air, did something no air-conditioned room has ever done for me. I booked three more days on the spot.",
          name: "Kadri Tamm",
          verified: true,
          location: "Tallinn, Estonia",
          condition: "Ayurvedic Medicinal Massage",
          rating: 5,
        },
        {
          title: "She Told Me I Did Not Need Panchakarma",
          review: "I arrived expecting to book a full detox. The doctor examined me and said prevention was what my case actually needed, and explained why. That honesty is rare and it earned my trust.",
          name: "Juliana Restrepo",
          verified: true,
          location: "Medellín, Colombia",
          condition: "Preventive Consultation",
          rating: 5,
        },
        {
          title: "My Breathing Improved Within the Week",
          review: "Years of seasonal congestion that inhalers only masked. The therapies here worked on digestion first, which I did not expect, and the difference in my chest was noticeable by day five.",
          name: "Maricel Santos",
          verified: true,
          location: "Manila, Philippines",
          condition: "Respiratory Support",
          rating: 5,
        },
        {
          title: "The Seasonal Plan Is What Stuck",
          review: "Most places give you a diet sheet you abandon in a month. This one changes with the season, so it stays relevant. A year later I am still following it and still feeling the benefit.",
          name: "Oksana Kovalenko",
          verified: true,
          location: "Kyiv, Ukraine",
          condition: "Ritucharya Seasonal Care",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "What is Ayurcare Goa and who runs it?",
          answer: "Ayurcare Goa is an Ayurveda and Naturopathy centre founded by Dr. Suvira Bandekar, an Ayurvedic physician with over fourteen years of practice. The main centre is at Junos Vaddo in Mandrem, North Goa, and the practice operates from three locations across the state, offering traditional healing treatments, medicinal massages and structured health packages.",
        },
        {
          question: "What does the immunomodulatory programme involve?",
          answer: "It is a course aimed at strengthening the body's own resistance rather than clearing it out. The work combines Rasayana preparations, correction of digestive fire and therapies chosen to build rather than purge. It is offered as a defined programme in its own right, which sets it apart from centres where immunity is mentioned only in passing.",
        },
        {
          question: "Why does the centre emphasise prevention so strongly?",
          answer: "The stated position is that prevention is the more important half of disease management, achieved through a diet and lifestyle matched to your individual constitution. In practice this means the physician will sometimes recommend a preventive or seasonal programme instead of a detox, and will explain the reasoning rather than simply booking the larger package.",
        },
        {
          question: "Which conditions are the packages designed around?",
          answer: "The health and beauty care packages are written specifically for modern complaints, chiefly stress, respiratory problems and skin conditions. Assessment follows the classical four markers of health: balance of the doshas, the state of the body tissues, the proper clearing of wastes and the strength of digestive fire.",
        },
        {
          question: "Where is the Mandrem centre and can I have treatment by the sea?",
          answer: "The centre is at Junos Vaddo, Mandrem, North Goa 403519, a short walk from Mandrem beach. Some therapy sessions are given on a sea-facing terrace overlooking the sand, which is one of the reasons guests choose this location over an enclosed clinic room.",
        },
      ]}
      addressLines={[
        "Ayurcare Goa - Ayurveda & Naturopathy Centre",
        "Junos Vaddo, Mandrem",
        "Pernem, North Goa, Goa 403519",
      ]}
      distances={[
        "Short walk from Mandrem Beach",
        "Approx. 5 km from Arambol and Ashwem beaches",
        "Approx. 20 km from Manohar International Airport, Mopa",
        "Three centre locations operating across Goa",
      ]}
      mapQuery="Goa Ayur Care Ayurveda and Naturopathy Centre, Junos Vaddo, Mandrem, Goa 403519"
    />
  );
}
