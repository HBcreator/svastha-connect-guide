import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe, Building2 } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Yoga Goa Ayurveda Retreats";

export default function YogaGoaAyurvedaRetreats() {
  return (
    <CenterPageTemplate
      name="Yoga Goa - Ayurveda Retreats"
      breadcrumbLabel="Yoga Goa Ayurveda Retreats"
      tagline="Fixed-Length Ayurveda Retreats Alongside a Long-Running Ashtanga Yoga School"
      location="Assagao, North Goa, India"
      rating={4.5}
      reviews={550}
      images={{
        main: `${IMG}/image 1.jpg`,
        secondary: `${IMG}/image 2.png`,
        fallback: "/Anchor pages/Goa centers/images/18.jpg",
      }}
      imageAlts={{
        main: "Ayurvedic head therapy during a wellness retreat at Yoga Goa, Assagao, North Goa",
        secondary: "Padabhyanga foot therapy in the treatment room at Yoga Goa Ayurveda Retreats, Assagao",
      }}
      seo={{
        title: "Yoga Goa Ayurveda Retreats, Assagao | 3 to 21 Day Panchakarma & Rejuvenation Programmes",
        description: "Yoga Goa in Assagao, North Goa runs fixed-length Ayurveda retreats from 3 to 21 days alongside its Ashtanga Vinyasa yoga school, established 2003. Panchakarma, rejuvenation and de-stress programmes led by an M.D. Ayurvedic physician with 19+ years of clinical practice.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Yoga Goa</strong> occupies a quiet property along the tree-lined lanes of <strong className="font-bold text-[#2C4E5A]">Assagao in Bardez</strong>, North Goa, and has been receiving practitioners since <strong className="font-bold text-[#2C4E5A]">2003</strong>. It grew first as a serious Ashtanga Vinyasa school, and the Ayurveda side was built around that discipline rather than bolted on as a spa menu. The result is unusual in Goa: a place where a morning yoga practice, a doctor's prescription and the kitchen are all part of the same schedule, in Goan-architecture surroundings that stay calm while remaining close to Anjuna's markets and beaches.
          </>
        ),
        detail: (
          <>
            Programmes are offered in <strong className="font-bold text-[#2C4E5A]">fixed lengths rather than à la carte hours</strong>, so guests choose depth instead of picking treatments: a three-day Mini Rejuvenation, a five-day De-Stress retreat, a seven or fourteen-day Full Rejuvenation, or a full <strong className="font-bold text-[#2C4E5A]">fourteen to twenty-one day Panchakarma</strong>. Clinical direction comes from <strong className="font-bold text-[#2C4E5A]">Dr. Vijaykumar D. Nandvadekar</strong>, an M.D. in Kriya Sharir with over nineteen years of practice who heads a department at Gomantak Ayurveda Mahavidyalaya, supported by therapists with two decades of experience and an integrated bodyworker trained in cupping, myofascial release and assisted stretching. Warm oil therapies, herbal steam, cleansing procedures, medicated oils, daily yoga, guided meditation and tailored meals are all included in the day.
          </>
        ),
      }}
      programs={[
        {
          title: "Mini Rejuvenation Retreat",
          description: "A three-day reset for visitors on a short trip, combining warm oil therapy, steam and light dietary correction to lift energy and settle the nervous system quickly.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "De-Stress Retreat",
          description: "Five days built around calming the mind and releasing held emotional tension, pairing slow bodywork and guided meditation with food chosen to steady the system.",
          icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Full Rejuvenation Retreat",
          description: "Seven or fourteen days of restorative therapy designed to rebuild vitality gradually, with treatments deepening as the body responds rather than following a fixed script.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Panchakarma Retreat",
          description: "The full fourteen to twenty-one day cleansing course, using classical elimination procedures to clear accumulated toxins and bring the doshas back into working balance.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Ashtanga Vinyasa Yoga Retreats",
          description: "One, two and four-week practice retreats open to beginners through advanced students, taught in the classical Ashtanga tradition the centre has run since 2003.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Integrated Bodywork Sessions",
          description: "Cupping, myofascial release and assisted stretching offered alongside Ayurvedic therapy for practitioners carrying injuries or long-standing movement restrictions.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="Two decades of practice, an academically credentialled Ayurvedic physician, and retreats sold by length so the course actually gets finished."
      whyChooseUs={[
        {
          title: "Running Since 2003",
          description: "More than two decades of continuous operation in Assagao, with a reputation built among returning international practitioners rather than through walk-in trade.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "An M.D. Physician in Charge",
          description: "Dr. Vijaykumar D. Nandvadekar holds an M.D. in Kriya Sharir, has over nineteen years of clinical work, and heads a department at Gomantak Ayurveda Mahavidyalaya.",
          icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Therapists With 20+ Years",
          description: "Treatments are delivered by long-serving practitioners, including a deep tissue specialist with two decades behind her, so technique is settled rather than learned on you.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Western Bodywork Included",
          description: "Cupping, myofascial release and assisted stretching sit alongside classical therapy, useful for yoga practitioners working around injury or restricted range.",
          icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Yoga Is Not an Add-On",
          description: "The property is a working Ashtanga school with 200 and 300-hour teacher training, so daily practice and meditation are genuinely part of the retreat structure.",
          icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Quiet Assagao, Close to Everything",
          description: "Tree-lined lanes and traditional Goan houses keep the setting peaceful, with Anjuna's beaches, markets and restaurants only a short ride away.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="Choose the length, meet the doctor, then let one schedule carry therapy, practice and food together for the full course."
      treatmentProcess={[
        {
          number: 1,
          title: "Consultation With the Physician",
          description: "Your retreat opens with an assessment by the resident M.D., covering constitution, current imbalance, injury history and what you realistically want the stay to achieve.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Matching Programme to Time",
          description: "Rather than selecting individual treatments, you and the doctor settle on a length, from three days through to twenty-one, and the depth of the plan follows from that.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Daily Oil Therapy and Steam",
          description: "Warm medicated oil work forms the spine of each day, followed by herbal steam, with the oils changed as your response to the treatment becomes clear.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Cleansing Procedures",
          description: "On the longer courses, classical elimination procedures are introduced once the body has been properly prepared, never at the start and never on a fixed calendar.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Practice and Meditation",
          description: "Gentle yoga and guided meditation run alongside treatment through the whole stay, keeping the mind involved in the process instead of waiting on a massage table.",
          icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Kitchen Built Around the Plan",
          description: "Meals are prepared fresh to support digestion and detoxification for your specific programme, and the guidance continues in writing once you head home.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "Twenty-One Days That Changed My Practice",
          review: "I booked the full Panchakarma expecting to lose my yoga practice for three weeks. Instead the two supported each other. I left lighter, sleeping properly, and moving better than I have in years.",
          name: "Saoirse Byrne",
          verified: true,
          location: "Dublin, Ireland",
          condition: "Panchakarma Retreat",
          rating: 5,
        },
        {
          title: "The Doctor Actually Examined Me",
          review: "I have been to wellness places where a form gets filled in and that is the consultation. Here the physician spent proper time, asked about old injuries, and adjusted my plan twice during the stay.",
          name: "Marek Zieliński",
          verified: true,
          location: "Kraków, Poland",
          condition: "Full Rejuvenation Retreat",
          rating: 5,
        },
        {
          title: "Five Days Was Enough to Reset",
          review: "I only had a short window and took the De-Stress retreat. The pace was unhurried, the meditation sessions were genuinely well guided, and I went back to work without the usual dread.",
          name: "Thandiwe Mokoena",
          verified: true,
          location: "Cape Town, South Africa",
          condition: "De-Stress Retreat",
          rating: 5,
        },
        {
          title: "Cupping and Ayurveda Together Worked",
          review: "As a long-time Ashtanga practitioner I arrived with a stubborn shoulder. The combination of myofascial work and warm oil therapy freed it in a way that neither had managed alone.",
          name: "Frederik Holm",
          verified: true,
          location: "Copenhagen, Denmark",
          condition: "Integrated Bodywork",
          rating: 5,
        },
        {
          title: "Assagao Is the Right Kind of Quiet",
          review: "Old Goan houses, birds, and no traffic noise, yet Anjuna is fifteen minutes away when you want it. The food was tailored to my programme and never felt like restriction.",
          name: "Camila Duarte",
          verified: true,
          location: "Buenos Aires, Argentina",
          condition: "Mini Rejuvenation Retreat",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "What kind of place is Yoga Goa and how long has it been running?",
          answer: "Yoga Goa is a retreat property in Assagao, Bardez, North Goa that has been operating since 2003. It began as a dedicated Ashtanga Vinyasa yoga school and developed its Ayurveda programmes around that practice, so treatments, daily yoga, meditation and meals are structured as one schedule rather than sold as separate services.",
        },
        {
          question: "Which Ayurveda programmes are available and how long do they run?",
          answer: "Four fixed-length programmes are offered: a three-day Mini Rejuvenation retreat, a five-day De-Stress retreat, a seven or fourteen-day Full Rejuvenation retreat, and a Panchakarma retreat of fourteen or twenty-one days. Guests choose the depth of the course rather than assembling individual treatments.",
        },
        {
          question: "Who leads the Ayurvedic treatment here?",
          answer: "Clinical direction comes from Dr. Vijaykumar D. Nandvadekar, who holds an M.D. in Kriya Sharir, has more than nineteen years of clinical experience and heads a department at Gomantak Ayurveda Mahavidyalaya. He is supported by Urmila Nandvadekar, an Ayurvedic therapist with over twenty years of practice and a deep tissue specialism, and by Cornell Gayle, who is trained in cupping, myofascial release and assisted stretching.",
        },
        {
          question: "Do I have to practise yoga to book an Ayurveda retreat?",
          answer: "No. Gentle yoga and guided meditation are included in the Ayurveda programmes and are pitched to suit whoever is on the mat, including complete beginners. Separate one, two and four-week Ashtanga Vinyasa retreats and 200 and 300-hour teacher training courses are available for those who want the practice as their main focus.",
        },
        {
          question: "What is included in a retreat and where exactly is the property?",
          answer: "Programmes include personalised Ayurvedic treatments such as warm oil massage, steam therapy and cleansing procedures, herbal medicines and medicated oils, daily yoga and meditation, and freshly prepared meals matched to your plan. The property is at 142 Bairo Alto, Assagao, Bardez, North Goa 403507, on quiet tree-lined lanes a short ride from Anjuna and Vagator.",
        },
      ]}
      addressTitle="Retreat Address"
      addressLines={[
        "Yoga Goa - Ayurveda Retreats",
        "142 Bairo Alto, Assagao",
        "Bardez, North Goa, Goa 403507",
      ]}
      distances={[
        "Approx. 5 km from Anjuna and Vagator beaches",
        "Approx. 30 km from Manohar International Airport, Mopa",
        "Approx. 12 km from Thivim Railway Station",
        "Approx. 16 km from Panaji city centre",
      ]}
      mapQuery="142 Bairo Alto, Assagao, Bardez, North Goa 403507"
    />
  );
}
