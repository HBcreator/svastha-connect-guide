import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Anvi Ayurved";

export default function AnviAyurved() {
  return (
    <CenterPageTemplate
      name="Anvi Ayurved"
      tagline="Doctor-Led Ayurvedic Treatment Centre & Certified Training Institute"
      location="Morjim, Goa, India"
      rating={4.4}
      reviews={500}
      images={{
        main: `${IMG}/image 1.jpg`,
        secondary: `${IMG}/image 2.jpg`,
        fallback: "/Anchor pages/Goa centers/images/16.webp",
      }}
      imageAlts={{
        main: "Reception at Anvi Ayurved Treatment Centre and Training Institute, Morjim, North Goa",
        secondary: "Certified therapist team at Anvi Ayurved Treatment Centre, Morjim, Goa",
      }}
      seo={{
        title: "Anvi Ayurved Morjim, Goa | Doctor-Led Panchakarma & Ayurveda Training Institute",
        description: "Anvi Ayurved Treatment Centre and Training Institute in Morjim, North Goa, led by Dr. Renuka Yadav with 25+ years of practice. Doctor-led Panchakarma, Virechana, Vasti courses, cold-pressed oil massage, cupping and certified Ayurvedic therapist training. Open daily 9 AM to 6 PM.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Anvi Ayurved Treatment Centre and Training Institute</strong> sits in the heart of Morjim village in North Goa, about fifteen minutes on foot from the beach. It is led by <strong className="font-bold text-[#2C4E5A]">Dr. Renuka Yadav</strong>, an Ayurvedic physician with more than twenty-five years of clinical practice, and it runs deliberately as a small clinic rather than a resort spa. The phrase the centre works under, <strong className="font-bold text-[#2C4E5A]">"The Mother's Touch"</strong>, is not decoration: the physician opens every case herself, the therapists are people she has trained and certified, and guests are treated as individuals whose histories matter more than a package name.
          </>
        ),
        detail: (
          <>
            Clinically the centre leans towards targeted work rather than blanket detox weeks. <strong className="font-bold text-[#2C4E5A]">Virechana</strong> is used here for chronic migraine and hyperacidity, <strong className="font-bold text-[#2C4E5A]">Vasti courses</strong> for back pain and vata disorders, alongside Nasya, herbal bundle fomentation, cold-pressed oil massage, cupping and deep tissue work. Programmes are framed around body, mind and emotion together, so stress, grief and burnout are treated as clinical factors rather than afterthoughts. Anvi is also a working <strong className="font-bold text-[#2C4E5A]">training institute</strong>, running certified courses for therapists and Ayurvedic cooking sessions for guests, and it consults online for patients who cannot travel. The centre is open from 9:00 AM to 6:00 PM.
          </>
        ),
      }}
      programs={[
        {
          title: "Doctor-Led Panchakarma",
          description: "Complete classical purification designed and monitored personally by Dr. Renuka Yadav, using medicines sourced from established traditional Ayurvedic pharmacies.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Virechana for Migraine & Acidity",
          description: "A targeted purgation protocol used here for chronic migraine, hyperacidity and heat-driven skin conditions, run as a properly graded course rather than a single sitting.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Vasti Course Therapy",
          description: "Medicated enema sequences prescribed across several days for lower back pain, sciatica, joint stiffness and stubborn digestive complaints rooted in vata imbalance.",
          icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Cold-Pressed Oil Massage",
          description: "Classical body massage where you take part in choosing the oil base, from olive to prepared essential blends, matched to your constitution and the season.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Cupping & Deep Tissue Work",
          description: "Suction cupping combined with deep tissue release and herbal scrubbing, chosen for desk-bound stiffness, sluggish circulation and long-standing muscular adhesions.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Therapist Training & Workshops",
          description: "Structured professional courses teaching authentic technique and the classical reasoning behind it, open to newcomers and to practising therapists refining their work.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="A physician-led clinic that trains its own therapists, sources classical medicines, and treats mind and emotion alongside the body."
      whyChooseUs={[
        {
          title: "25 Years of Clinical Practice",
          description: "Dr. Renuka Yadav has spent over two and a half decades in classical Ayurveda and integrative healing, and reviews her cases personally rather than delegating assessment.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "A Training Institute, Not Just a Clinic",
          description: "The centre teaches the therapies it delivers, running certified courses for therapists, which keeps its own standards under constant scrutiny.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Therapists Trained In-House",
          description: "Every therapist on the floor is certified and works under the physician's direct supervision, so technique stays consistent from one session to the next.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Medicines From Traditional Pharmacies",
          description: "Formulations are sourced from established classical pharmacies rather than generic commercial suppliers, and oils are cold-pressed rather than refined.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Emotional Health Taken Seriously",
          description: "Programmes address body, mind and emotion together, treating grief, anxiety and burnout as clinical factors instead of side notes to a physical complaint.",
          icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Walking Distance From Morjim Beach",
          description: "Set in the heart of Morjim village, about fifteen minutes on foot from the beach and a short ride from Ashwem and Arambol, with a room available for longer stays.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="A physician-first pathway that begins with the doctor, involves you in the choices, and ends with skills you take home."
      treatmentProcess={[
        {
          number: 1,
          title: "Consultation With the Physician",
          description: "Every case is opened by Dr. Renuka Yadav herself rather than a front desk, with pulse reading, medical history and a frank discussion of what Ayurveda can realistically resolve in your situation.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Body, Mind and Emotion Mapping",
          description: "The assessment deliberately extends past physical symptoms into sleep, mood, grief and stress patterns, since the centre treats emotional residue as a genuine clinical factor.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Choosing Your Oil Base",
          description: "Guests are shown the cold-pressed oil options and take part in the choice, with essential oil blends prepared to suit both the dosha reading and personal preference.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Massage, Potli and Cupping",
          description: "Hands-on work follows: classical oil massage, heated herbal bundles over stiff regions, deep tissue release, and cupping where circulation and adhesions need direct attention.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Targeted Shodhana",
          description: "Where the case calls for it, specific cleansing routes are used instead of a blanket package, most commonly Virechana for migraine and hyperacidity, Vasti courses, and Nasya.",
          icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Kitchen and Lifestyle Coaching",
          description: "Treatment closes in the kitchen rather than on paper, with Ayurvedic cooking sessions teaching you to build the meals your constitution needs once you are home.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "Virechana Broke a Ten-Year Migraine Cycle",
          review: "I had tried every preventive my neurologist could offer. Dr. Renuka explained why the pattern pointed to pitta and ran a proper Virechana course. Four months on I have had two headaches instead of two a week.",
          name: "Miriam Lindqvist",
          verified: true,
          location: "Stockholm, Sweden",
          condition: "Virechana for Migraine",
          rating: 5,
        },
        {
          title: "An Eight-Day Vasti Course That Delivered",
          review: "I arrived with a stiff lower back and low expectations. The Vasti course was carefully explained each day and the therapists never rushed a single session. I walked out standing straighter than I had in years.",
          name: "Aaron Whitfield",
          verified: true,
          location: "Melbourne, Australia",
          condition: "Vasti Course Therapy",
          rating: 5,
        },
        {
          title: "I Came as a Patient and Stayed to Train",
          review: "After my own treatment I enrolled in the therapist training course. Being taught the reasoning behind each stroke, not just the technique, has completely changed how I practise back home in France.",
          name: "Clémence Roussel",
          verified: true,
          location: "Nantes, France",
          condition: "Therapist Training Course",
          rating: 5,
        },
        {
          title: "The Name Fits: A Mother's Touch",
          review: "There is a warmth here you cannot manufacture. The team greeted me by name from the second day, remembered which oil I preferred, and checked in after I flew home. Small clinic, enormous care.",
          name: "Deepa Krishnan",
          verified: true,
          location: "Mumbai, India",
          condition: "Panchakarma Detox",
          rating: 5,
        },
        {
          title: "Cupping and Cooking Classes Both Worth It",
          review: "The deep tissue and cupping work loosened years of desk-bound shoulders. What surprised me was the cooking session, which taught me more about digestion in two hours than any diet book had.",
          name: "Lukas Steiner",
          verified: true,
          location: "Zurich, Switzerland",
          condition: "Cupping & Lifestyle Coaching",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Who runs Anvi Ayurved and what is the centre's approach?",
          answer: "The centre is led by Dr. Renuka Yadav, an Ayurvedic physician with more than 25 years of clinical experience in classical Ayurveda and integrative healing. Its guiding phrase, 'The Mother's Touch', reflects a deliberately small-clinic ethos where the physician sees each case personally and treatment is designed around the individual rather than a fixed menu.",
        },
        {
          question: "What treatments and therapies are offered here?",
          answer: "The centre provides doctor-led Panchakarma, Virechana for migraine and hyperacidity, Vasti course therapy, Nasya, herbal bundle fomentation, classical oil massage using cold-pressed bases, deep tissue bodywork, cupping, scrubbing and facial procedures, plus body-mind-emotion detox programmes and online consultation for guests who cannot travel.",
        },
        {
          question: "Is this also a training institute for therapists?",
          answer: "Yes. Alongside the treatment centre, Anvi runs professional Ayurvedic training courses and workshops for aspiring and practising therapists. Students are taught the classical reasoning behind each therapy, and the centre's own therapists are certified and work under Dr. Yadav's direct supervision.",
        },
        {
          question: "Can I choose the oils used in my treatment?",
          answer: "Guests are involved in the selection. The centre works with cold-pressed oils and essential oil blends, and you are shown the options so the base chosen suits both your constitutional reading and your own comfort. All Ayurvedic medicines are sourced from established traditional pharmacies.",
        },
        {
          question: "Where is the centre and what are its timings?",
          answer: "Anvi Ayurved is at 1073, Madhalawada, next to Prime One Supermarket in Morjim, North Goa 403512, roughly a fifteen minute walk from Morjim Beach and a short ride from Ashwem and Arambol. The centre operates from 9:00 AM to 6:00 PM, and a room is available on request for guests on longer treatment courses.",
        },
      ]}
      addressLines={[
        "Anvi Ayurved Treatment Centre & Training Institute",
        "1073, Madhalawada, next to Prime One Supermarket",
        "Morjim, Pernem, North Goa 403512",
      ]}
      distances={[
        "Approx. 15 minutes walk from Morjim Beach",
        "Approx. 18 km from Manohar International Airport, Mopa",
        "Short ride from Ashwem and Arambol beaches",
        "Open daily, 9:00 AM to 6:00 PM",
      ]}
      mapQuery="Anvi Ayurved Treatment Centre and Training Institute, Madhalawada, Morjim, Goa 403512"
    />
  );
}
