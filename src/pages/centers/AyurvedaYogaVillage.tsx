import { MapPin, Leaf, Users, Award, ShieldCheck, Droplet, Activity, Heart, Sparkles, FileSearch, ClipboardList, MessageCircleHeart, Globe, Building2 } from "lucide-react";
import CenterPageTemplate from "@/components/CenterPageTemplate";

const IMG = "/Anchor pages/Goa centers/Ayurveda Yoga Village";

export default function AyurvedaYogaVillage() {
  return (
    <CenterPageTemplate
      name="Ayurveda Yoga Village"
      tagline="Beachfront Eco-Cottage Retreat for Kerala Panchakarma and Kalari Marma Therapy"
      location="Canacona Coast, South Goa Belt, India"
      rating={4.5}
      reviews={480}
      images={{
        main: `${IMG}/image 1.jpg`,
        secondary: `${IMG}/image 2.jpg`,
        fallback: "/Anchor pages/Goa centers/images/21.jpg",
      }}
      imageAlts={{
        main: "Thatched eco-cottages metres from the beach at Ayurveda Yoga Village on the Konkan coast",
        secondary: "Garden pathway between cottages and casuarina forest at Ayurveda Yoga Village",
      }}
      seo={{
        title: "Ayurveda Yoga Village | Beachfront Panchakarma & Kalari Marma Retreat near Canacona",
        description: "Ayurveda Yoga Village is a beachfront Ayurveda retreat on the Konkan coast south of Canacona, with 20 eco-cottages across 10 acres of pine, coconut and mango groves. Kerala-tradition Panchakarma, Kalari Marma therapy, Rasayana rejuvenation, monsoon Karkidaka programmes, weight management and daily yoga.",
      }}
      about={{
        intro: (
          <>
            <strong className="font-bold text-[#2C4E5A]">Ayurveda Yoga Village</strong> is a genuinely beachfront retreat, and the distance is not a figure of speech: the cottages sit <strong className="font-bold text-[#2C4E5A]">under ten metres from the sand</strong>, on ten acres of casuarina, pine, coconut and mango groves along the quiet Konkan coastline that runs south from Canacona. There are <strong className="font-bold text-[#2C4E5A]">twenty eco-cottages</strong> here, not a hotel block, each with its own deck and garden access, and the beach outside is usually empty. The property is the sister centre to <strong className="font-bold text-[#2C4E5A]">Ayurveda Yoga Villa</strong>, an internationally known Kerala institution, and it works to the same classical Keralite tradition.
          </>
        ),
        detail: (
          <>
            Treatment is built around a full <strong className="font-bold text-[#2C4E5A]">Panchakarma</strong> capability, supported by <strong className="font-bold text-[#2C4E5A]">Kalari Marma therapy</strong>, the vital-point work drawn from Kerala's martial tradition and applied here for injury, stiffness and deep-set structural tension. Alongside these run Rasayana rejuvenation, Ayurvedic weight management, lower back and spine care, stress programmes, herbal beauty care and a <strong className="font-bold text-[#2C4E5A]">monsoon Karkidaka rejuvenation season</strong>, the period classical texts identify as the most receptive time of year for restorative therapy. Yoga and meditation run daily as Ayur-Yoga rather than as a separate class, and the kitchen cooks to your prescribed diet. Sea air, salt and the sound of surf are treated here as part of the healing environment rather than as scenery.
          </>
        ),
      }}
      programs={[
        {
          title: "Panchakarma Detox Retreat",
          description: "The complete five-route Kerala purification programme, staged across the length of your stay with therapies, diet and rest scheduled together under supervision.",
          icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Kalari Marma Therapy",
          description: "Vital-point treatment drawn from Kerala's Kalari martial lineage, applied to old injuries, joint restriction and the structural tension that ordinary massage leaves untouched.",
          icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Monsoon Karkidaka Rejuvenation",
          description: "A seasonal programme run through the rains, the window classical Ayurveda regards as the year's most receptive period for deep restorative and immunity-building therapy.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Rasayana Rejuvenation",
          description: "Nourishing oil therapies and rejuvenative herbal preparations aimed at rebuilding tissue quality, stamina and resilience rather than at cleansing alone.",
          icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Ayurvedic Weight Management",
          description: "Constitution-based metabolic correction combining Udvartana powder massage, dietary restructuring and targeted herbs, planned as a course rather than a crash reset.",
          icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Lower Back & Spine Care",
          description: "A dedicated pathway for chronic lumbar pain, disc-related complaints and sciatic discomfort using localised oil retention, fomentation and corrective movement.",
          icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      whyChooseSubtitle="Twenty cottages, ten acres, an empty beach ten metres away, and a Kerala clinical tradition behind every treatment."
      whyChooseUs={[
        {
          title: "Ten Metres From the Sea",
          description: "This is a true beachfront property, not a resort with a shuttle. The sea air, salt and quiet are part of the treatment environment rather than an add-on view.",
          icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Twenty Cottages on Ten Acres",
          description: "Low-density accommodation set among pine, coconut and mango trees, each cottage with its own deck, so the property never feels crowded even when full.",
          icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "A Kerala Institution Behind It",
          description: "The retreat is the sister centre to the internationally recognised Ayurveda Yoga Villa, and follows the same classical Keralite protocols and standards.",
          icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Kalari Marma Expertise",
          description: "Vital-point therapy from Kerala's martial tradition is a genuine specialism here, and is particularly effective for long-standing injury and restricted movement.",
          icon: <Globe className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Monsoon Season Programmes",
          description: "Rather than closing through the rains, the retreat runs Karkidaka rejuvenation, treating the monsoon as the classical high season for restorative work.",
          icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
        },
        {
          title: "Yoga Woven Into Treatment",
          description: "Daily practice and meditation are prescribed as Ayur-Yoga to support the therapy underway, not scheduled as an optional class alongside it.",
          icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
        },
      ]}
      processSubtitle="Arrive, settle into the rhythm of the coast, prepare the body, cleanse it, then rebuild with rejuvenatives and daily practice."
      treatmentProcess={[
        {
          number: 1,
          title: "Arrival Consultation",
          description: "A resident Ayurvedic physician assesses your constitution, current imbalance, medical history and the length of stay available before any programme is confirmed.",
          icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 2,
          title: "Settling Into the Rhythm",
          description: "The first days set the daily pattern of early practice, treatment slots, prescribed meals and rest, because a residential programme only works once the routine holds.",
          icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 3,
          title: "Snehana and Swedana",
          description: "Internal and external oleation with medicated ghee and warm oils, followed by herbal steam, softens the tissues and moves accumulated waste toward the digestive tract.",
          icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 4,
          title: "Panchakarma Elimination",
          description: "The purification routes indicated for your case are carried out in sequence, monitored daily, with rest and diet adjusted around how your body is responding.",
          icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 5,
          title: "Kalari Marma and Practice",
          description: "Vital-point therapy and daily Ayur-Yoga work on structure and breath while the cleanse progresses, addressing the mechanical side of long-standing complaints.",
          icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />,
        },
        {
          number: 6,
          title: "Rasayana and Departure Plan",
          description: "The closing phase rebuilds with rejuvenative preparations and a graded return to normal food, along with a written routine and herbs to continue at home.",
          icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />,
        },
      ]}
      testimonials={[
        {
          title: "I Could Hear the Sea From the Treatment Table",
          review: "The cottages really are on the sand. Waking to an empty beach every morning and walking twenty steps to yoga did as much for me as the therapies themselves.",
          name: "Eleni Papadaki",
          verified: true,
          location: "Athens, Greece",
          condition: "Rasayana Rejuvenation",
          rating: 5,
        },
        {
          title: "Kalari Marma Freed a Ten-Year Injury",
          review: "An old football injury had left my hip permanently tight. The marma work here found the restriction in three sessions. No physiotherapist in Europe had managed that.",
          name: "Ivan Horvat",
          verified: true,
          location: "Zagreb, Croatia",
          condition: "Kalari Marma Therapy",
          rating: 5,
        },
        {
          title: "Came in the Monsoon and Would Again",
          review: "Everyone told me not to travel in the rains. The Karkidaka programme was the best decision I made. Fewer guests, cooler air, and the therapies felt noticeably deeper.",
          name: "Rodrigo Fuentes",
          verified: true,
          location: "Santiago, Chile",
          condition: "Monsoon Karkidaka Programme",
          rating: 5,
        },
        {
          title: "Fourteen Days of Real Panchakarma",
          review: "This was not a spa week pretending to be a detox. The doctor adjusted the plan almost daily, the food was strict but excellent, and I left ten kilos lighter and sleeping properly.",
          name: "Siti Rahman",
          verified: true,
          location: "Kuala Lumpur, Malaysia",
          condition: "Panchakarma Detox Retreat",
          rating: 5,
        },
        {
          title: "Quiet in a Way Goa Rarely Is",
          review: "No music, no crowds, no vendors. Just casuarina trees, the surf and twenty cottages. If you want beach and silence together on this coast, this is where you find it.",
          name: "Sigrún Jónsdóttir",
          verified: true,
          location: "Reykjavík, Iceland",
          condition: "Stress Management Programme",
          rating: 5,
        },
      ]}
      faqItems={[
        {
          question: "Where exactly is Ayurveda Yoga Village?",
          answer: "The retreat sits on the quiet Konkan coastline that continues south from Canacona, at Kadekodi near Kumta, roughly two and a half hours down the coast road from South Goa. It occupies ten acres of beachfront land with cottages set less than ten metres from the sand, backed by casuarina, pine, coconut and mango groves.",
        },
        {
          question: "What kind of accommodation is available?",
          answer: "There are twenty eco-cottages rather than hotel rooms, each with comfortable beds, an extended living area, a private deck and direct garden access. The low density is deliberate, keeping the property calm even at full occupancy and giving guests undertaking long programmes genuine privacy.",
        },
        {
          question: "What is Kalari Marma therapy?",
          answer: "Kalari Marma is vital-point treatment drawn from Kalarippayattu, Kerala's classical martial tradition, where practitioners learned both to strike and to heal these points. Applied therapeutically it addresses old injuries, joint restriction and deep structural tension, and it is one of the retreat's genuine specialisms rather than a listed extra.",
        },
        {
          question: "Why do you run programmes during the monsoon?",
          answer: "Classical Ayurveda regards Karkidaka, the monsoon month, as the most receptive period of the year for restorative therapy, because the cooler humid air keeps the pores open and the body absorbs medicated oils more readily. The retreat runs a dedicated monsoon rejuvenation season rather than closing, and many long-standing guests deliberately book then.",
        },
        {
          question: "Which programmes are offered and how long do they run?",
          answer: "The retreat offers Panchakarma detoxification, Rasayana rejuvenation, Kalari Marma therapy, stress management, Ayurvedic weight management, lower back and spine care, herbal beauty care and Ayur-Yoga. Stays generally run from three days for a gentle reset up to twenty-one days for full classical Panchakarma, with the doctor recommending the length your case actually needs.",
        },
      ]}
      addressTitle="Retreat Address"
      addressLines={[
        "Ayurveda Yoga Village",
        "Beachfront, Kadekodi, Kumta",
        "Konkan Coast, south of Canacona, South Goa belt",
      ]}
      distances={[
        "Cottages set less than 10 metres from the beach",
        "Approx. 2.5 hours by road south of Canacona, South Goa",
        "Sister centre to Ayurveda Yoga Villa, Kerala",
        "Ten acres of private beachfront grounds",
      ]}
      mapQuery="Ayurveda Yoga Village, Kadekodi, Kumta, Konkan Coast"
    />
  );
}
