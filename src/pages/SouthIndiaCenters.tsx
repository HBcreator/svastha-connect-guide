import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Star, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prioritizeTopCenters } from "@/lib/top-centers";

const SouthIndiaCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardSlug, setExpandedCardSlug] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const enabledDetailSlugs = new Set([
    "soukya-international-holistic-health-centre-bangalore-india",
    "ayurvedagram-heritage-wellness-centre-bangalore-india",
    "indus-valley-ayurvedic-centre-mysore-banglore-india",
    "shathayu-ayurveda-yoga-retreat-udupi-banglore-india",
    "sri-sri-ayurveda-hospital-bengaluru-india",
    "shreyas-yoga-retreat-bangalore-india",
    "adyant-ayurveda-hospital-bengaluru-india",
    "vydehi-ayurveda-hospital-bengaluru-india",
    "keva-ayurveda-hospital-bengaluru-india",
    "jayadev-memorial-rashtrotthana-ayurveda-hospital-bengaluru-india",
    "healing-earth-ayurveda-hospital-bengaluru-india",
    "adivaidyam-ayurveda-hospital-bengaluru-india",
    "iaim-healthcare-center-hospital-bengaluru-india",
    "hlc-ayurveda-and-nature-cure-hospital-bengaluru-india",
    "praana-vaidya-ayurvedic-hospital-bengaluru-india",
    "ramaiah-indic-specialty-ayurveda-hospital-bengaluru-india",
    "ayurkutira-panchakarma-centre-hospital-bengaluru-india",
    "tatkshana-ayurveda-hospital-bengaluru-india",
    "varaprada-ayurvedic-centre-hospital-bengaluru-india",
    "sd-ayurveda-mane-holistic-wellness-centre-hospital-bengaluru-india",
    "ayushman-ayurveda-hospital-bengaluru-india",
    "travancore-ayurveda-hospital-bengaluru-india",
  ]);

  const centers = [
    {
      name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
      city: "Bengaluru, Karnataka, India",
      description:
        "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga and Naturopathy on a 30-acre organic farm. The center offers a holistic approach to wellness with personalized treatments guided by experienced practitioners in a serene, nature-rich environment. Guests benefit from preventive care, restorative therapies, and integrated healing plans designed to improve long-term physical and mental well-being.",
      rating: 4.9,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/SOUKYA/top center Thumb.jpg",
      slug: "soukya-international-holistic-health-centre-bangalore-india",
    },
    {
      name: "AyurvedaGram Heritage Wellness Centre",
      city: "Bengaluru, Karnataka, India",
      description:
        "AyurvedaGram Heritage Wellness Centre is a globally recognized destination for traditional Ayurvedic Healing rooted in classical principles. Set within a tranquil heritage village, the center provides personalized therapies guided by experienced Vaidyas and supported by therapeutic yoga, mindful routines, and sattvic nutrition. Each program is tailored to restore balance of body and mind through time-tested, evidence-informed care.",
      rating: 4.7,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/AyurvedaGram/Thumb.jpg",
      slug: "ayurvedagram-heritage-wellness-centre-bangalore-india",
    },

    {
      name: "Shathayu Ayurveda Yoga Retreat",
      city: "Bengaluru Rural, Karnataka, India",
      description:
        "Shathayu Ayurveda Yoga Retreat is a serene coastal sanctuary focused on authentic Ayurveda and yogic living. The retreat combines classical therapies with guided yoga, meditation, and lifestyle coaching to support detoxification, resilience, and sustainable health improvement. Led by experienced doctors and wellness practitioners, each treatment plan is personalized for restorative outcomes in a peaceful natural environment.",
      rating: 4.8,
      reviews: 380,
      priceRange: "$$$",
      image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
      slug: "shathayu-ayurveda-yoga-retreat-udupi-banglore-india",
    },
    {
      name: "Indus Valley Ayurvedic Centre",
      city: "Mysuru, Karnataka, India",
      description:
        "Indus Valley Ayurvedic Centre (IVAC) is a luxury retreat in Mysuru blending classical Kerala Ayurveda with modern wellness standards. Located near the Chamundi Hills, it offers personalized programs for detoxification, stress reduction, pain management, and rejuvenation under expert medical guidance. The center's quiet setting and structured therapies support deep healing for body, mind, and lifestyle renewal.",
      rating: 4.8,
      reviews: 450,
      priceRange: "$$$$",
      image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
      slug: "indus-valley-ayurvedic-centre-mysore-banglore-india",
    },
    {
      name: "Shreyas Yoga Retreat (Nelamangala)",
      city: "Nelamangala, Bangalore, India",
      description:
        "Shreyas Yoga Retreat is a world-class sanctuary near Bangalore that seamlessly blends traditional hatha yoga philosophy with luxury wellness standards. Set amidst lush, peaceful gardens, the retreat offers an authentic yogic lifestyle designed to nurture physical vitality, mental clarity, and spiritual growth. The tranquil environment and organic cuisine provide a rejuvenating space for deep relaxation, inner reflection, and sustainable health transformation.",
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/Shreyas Yoga Retreat/thumb.jpg",
      slug: "shreyas-yoga-retreat-bangalore-india",
    },
    {
      name: "Sri Sri Ayurveda Hospital Bengaluru",
      city: "Bengaluru, Karnataka, India",
      description:
        "A NABH-accredited, ISO-certified multispecialty Ayurvedic hospital administered by Sri Sri Ravi Shankar Vidya Mandir Trust. Spanning over 1 lakh sq. ft. with 268 beds, the hospital blends classical Ayurveda, Naturopathy, Yoga, and modern diagnostics. Specialties include Panchakarma, Cancer Care, Pulse Diagnosis, Gynaecology, and Pediatrics. Offers free Nadi Pariksha consultations, 24/7 emergency services, and online consultations worldwide.",
      rating: 4.4,
      reviews: 950,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/1.jpg",
      slug: "sri-sri-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Adyant Ayurveda – Jayanagar",
      city: "Bengaluru, Karnataka, India",
      description:
        "One of Bangalore's most established Ayurvedic clinic chains with multiple branches across the city including Jayanagar, Indiranagar, RR Nagar, Kalyan Nagar, and Bannerghatta Road. Adyant Ayurveda specializes in Panchakarma detox, spine and joint care, skin disorders, infertility, insomnia, and PCOD. Also offers Swarna Bindu Prashana for children's immunity and comprehensive Ayurvedic beauty and rejuvenation therapies. Open daily 8 AM to 8 PM.",
      rating: 4.8,
      reviews: 230,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/3.jpg",
      slug: "adyant-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Vydehi Ayurveda Hospital (VAYU)",
      city: "Bengaluru (Whitefield), Karnataka, India",
      description:
        "Located within the 1,600-bed Vydehi Institute of Medical Sciences & Research Centre in Whitefield, VAYU is a complete Kerala Ayurveda treatment facility offering both in-patient and out-patient care. Nestled in a lush green campus, it delivers authentic Ayurveda treatments including Panchakarma, Stress Management, Rejuvenation, Anti-Obesity therapy, and Spine & Joint Care. Experienced Ayurvedic specialists provide personalized, root-cause-focused healing using classical methods.",
      rating: 4.3,
      reviews: 600,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/4.jpg",
      slug: "vydehi-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Keva Ayurveda – BTM Layout",
      city: "Bengaluru, Karnataka, India",
      description:
        "A well-rounded Ayurvedic clinic offering a wide spectrum of treatments from Weight Management and Panchakarma to Infertility, Paralysis, and Women's Care. Keva Ayurveda also accepts medical insurance and features specialized programs like corporate wellness, traveler's detox, and geriatric care packages. Integrates Yoga and Naturopathy alongside classical Ayurveda treatments, providing end-to-end personalized wellness solutions under one roof.",
      rating: 4.5,
      reviews: 250,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp",
      slug:"keva-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Jayadev Memorial – Rashtrotthana Hospital Ayurveda Dept.",
      city: "Bengaluru, Karnataka, India",
      description:
        "The Ayurveda Department at Rashtrotthana Hospital offers integrative Ayurvedic care within a trusted multispeciality hospital setting in RR Nagar, Bangalore. Combining the wisdom of classical Ayurveda with modern diagnostic support, the department provides comprehensive treatment for lifestyle disorders, musculoskeletal conditions, and chronic ailments. Patients benefit from a full hospital ecosystem including diagnostics, specialist consultations, and inpatient facilities.",
      rating: 4.7,
      reviews: 1490,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/7.jpg",
      slug: "jayadev-memorial-rashtrotthana-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Healing Earth Ayurveda Hospital Bangalore",
      city: "Bengaluru, Karnataka, India",
      description:
        "Healing Earth is a dedicated Ayurvedic wellness center in Bangalore focused on holistic healing through evidence-based Ayurvedic therapies. The center offers personalized Panchakarma programs, rejuvenation treatments, and chronic disease management using authentic herbal medicines and classical treatment protocols. With a serene, therapeutic environment, Healing Earth is designed to restore balance of body, mind, and spirit for patients seeking genuine Ayurvedic care.",
      rating: 4.6,
      reviews: 930,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/8.jpg",
      slug: "healing-earth-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Adivaidyam Ayurveda Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "Adivaidyam is a unique Ayurvedic clinic in Banashankari, Bangalore, that combines classical Ayurveda and Yoga under one roof. Led by Dr. Savitha Sagar, the center focuses on reviving traditional healing practices for chronic disorders. Offerings include Panchakarma detox, Kerala treatments, beauty therapies, skin & hair care, and Swarnaprashana for children's immunity. Open daily from 6 AM to 9 PM with a patient-centered, compassionate approach.",
      rating: 4.7,
      reviews: 372,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/10.JPG",
      slug: "adivaidyam-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "IAIM Healthcare Center",
      city: "Bengaluru, Karnataka, India",
      description:
        "The Institute of Ayurveda and Integrative Medicine (I-AIM) Healthcare Center is a NABH-accredited Ayurvedic hospital in North Bangalore backed by the Foundation for Revitalization of Local Health Traditions (FRLHT). I-AIM integrates evidence-based Ayurvedic medicine with contemporary healthcare, offering specialized Panchakarma therapies including Shirodhara, Basti, Nasyam, Vamana, and Raktamokshana. The center is committed to research, education, and patient-centered integrative care.",
      rating: 4.7,
      reviews: 1140,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/11.jpg",
      slug: "iaim-healthcare-center-hospital-bengaluru-india",
    },
    {
      name: "HLC Ayurveda and Nature Cure Hospital",
      city: "Bengaluru (Electronic City), Karnataka, India",
      description:
        "A holistic Ayurveda and Naturopathy hospital in Electronic City, Bangalore, offering a wide range of curative programs including Diabetic Reversal, Spine & Joint care, Obesity Management, Women's Health, Neurology, Dermatology, and more. HLC provides authentic Panchakarma therapies along with inpatient wellness stay facilities, making it ideal for patients seeking immersive, long-term Ayurvedic Healing combined with naturopathic support.",
      rating: 4.4,
      reviews: 180,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/12.JPG",
      slug: "hlc-ayurveda-and-nature-cure-hospital-bengaluru-india",
    },
    {
      name: "PraanaVaidya Ayurvedic Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "A premier Ayurvedic healthcare network in Bangalore with 50+ doctors and a track record of 5,000+ surgeries, 13,000+ therapies, and 45,000+ patients treated. PraanaVaidya specializes in a vast range of conditions including Piles, Fistula, Diabetes Reversal, Stroke Rehabilitation, Autoimmune Diseases, Infertility, Varicose Veins, and Keloid Scars. The center combines Ayurvedic medicine with surgical expertise, offering a truly integrative approach to healing.",
      rating: 4.8,
      reviews: 170,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/13.jpg",
      slug: "praana-vaidya-ayurvedic-hospital-bengaluru-india",
    },
    {
      name: "Ramaiah Indic Specialty Ayurveda Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "A NABH-accredited Ayurveda restoration hospital associated with the Ramaiah group, offering specialized care in General Ayurveda Medicine, Panchakarma, Women's Health, Paediatrics, Eye & ENT, Proctology, Palliative Care, and Integrative Medicine. Insurance facility is available, and the hospital operates from Bangalore with a branch in Yelahanka. Committed to bringing evidence-based Ayurvedic Healing with the standards of a full-fledged medical institution.",
      rating: 4.8,
      reviews: 450,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/14.jpg",
      slug: "ramaiah-indic-specialty-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "AyurKutira – Panchakarma Centre",
      city: "Bengaluru, Karnataka, India",
      description:
        "AyurKutira is a sanctuary for holistic healing in Mahalakshmipuram, Bengaluru, guided by experienced Ayurvedic practitioners with deep expertise in classical treatments. Specialties include personalized Ayurvedic consultations, Panchakarma detox, Rasayana Chikitsa for vitality, post-chemo or post-surgery rejuvenation, and fertility treatments. The center has a particularly strong track record in treating infertility cases, with multiple patient success stories. Open daily 7 AM to 9 PM.",
      rating: 4.9,
      reviews: 140,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/15.JPG",
      slug: "ayurkutira-panchakarma-centre-hospital-bengaluru-india",
    },
    {
      name: "Tatkshana Ayurveda Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "Tatkshana Ayurveda Hospital is a dedicated Ayurveda treatment center in Bangalore offering authentic classical therapies for a wide range of health conditions. The hospital focuses on evidence-based Ayurvedic care with qualified practitioners, emphasizing personalized treatment protocols rooted in traditional Ayurvedic science. Services span Panchakarma, lifestyle disorder management, and targeted therapies for chronic and acute conditions.",
      rating: 4.8,
      reviews: 300,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png",
      slug: "tatkshana-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Varaprada Ayurvedic Centre",
      city: "Bengaluru, Karnataka, India",
      description:
        "Varaprada Ayurvedic Centre is a respected Ayurvedic clinic in Bangalore offering traditional healing through time-tested Ayurvedic therapies. The center provides curative and rejuvenative treatments with an emphasis on personalized care, classical formulations, and authentic Panchakarma procedures. With experienced Ayurvedic physicians guiding each patient's journey, Varaprada is a trusted destination for those seeking natural and sustainable wellness solutions.",
      rating: 4.9,
      reviews: 330,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/17.JPG",
      slug: "varaprada-ayurvedic-centre-hospital-bengaluru-india",
    },
    {
      name: "SD Ayurveda Mane – Holistic Wellness Centre",
      city: "Bengaluru (Electronic City), Karnataka, India",
      description:
        "SD Ayurveda Mane – Holistic Wellness Centre is a leading Ayurvedic hospital in Electronic City, Bangalore. Directed by expert physicians, the centre is highly renowned for its specialized postnatal (post-pregnancy) care programs, traditional Kerala Ayurveda, authentic Panchakarma, and customized stress and musculoskeletal rehabilitation in a fully residential setting.",
      rating: 5,
      reviews: 10,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/18.jpeg",
      slug: "sd-ayurveda-mane-holistic-wellness-centre-hospital-bengaluru-india",
    },
    {
      name: "Ayushman Ayurveda",
      city: "Bengaluru, Karnataka, India",
      description:
        "A specialized Ayurveda treatment center in Bangalore offering a comprehensive range of therapies including Panchakarma, Shirodhara, Abhyangam, Pizhichil, Njavara Kizhi, and Marma Therapy. Ayushman Ayurveda is particularly known for expert pain management solutions covering Back Pain, Sciatica, Arthritis, Osteoarthritis, Cervical Spondylitis, and Fibromyalgia. The center brings together qualified Ayurvedic doctors and skilled therapists for root-cause healing.",
      rating: 4.8,
      reviews: 1390,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/9.JPG",
      slug: "ayushman-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Travancore Ayurveda – Jayanagar",
      city: "Bengaluru, Karnataka, India",
      description:
        "Part of a pan-India Ayurvedic clinic chain with 14+ locations across Karnataka, Telangana, and Andhra Pradesh, Travancore Ayurveda has been recognized as the Top Ayurvedic Clinic at the World Health & Wellness Congress & Awards 2025. The Jayanagar branch offers authentic Kerala-rooted treatments including Panchakarma, pain management, and chronic disease care. In-patient facilities are available, and insurance reimbursement is accepted at select branches.",
      rating: 4.8,
      reviews: 800,
      priceRange: "$$$",
      image:
        "/TOP cneters/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Travancore Ayurveda – Jayanagar/main.webp",
      slug: "travancore-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Kottakkal Arya Vaidya Sala - Mahalingapuram",
      city: "Bengaluru (Mahalingapuram), Karnataka, India",
      description:
        "The Mahalingapuram branch of Arya Vaidya Sala (AVS), one of India's most iconic Ayurvedic institutions founded in 1902 by Vaidyaratnam P.S. Varier. With over a century of healing heritage, AVS offers classical Ayurvedic medicines, authentic Panchakarma therapies, and doctor consultations rooted in Kerala tradition. This branch provides Vaidya consultations, Oushadhi sales, and Panchakarma services including Shirodhara, Nasyam, Elakizhi, and Navarakizhi using genuine AVS-manufactured herbal oils and formulations.",
      rating: 4.6,
      reviews: 1800,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/19.jpg",
      slug: "bangalore/kottakkal-arya-vaidya-sala-mahalingapuram",
    },
    {
      name: "Ayurillam - Home of Ayurvedic Therapy Centre",
      city: "Chennai, Tamil Nadu, India",
      description:
        "Ayurillam is a premium Kerala-rooted Ayurvedic therapy centre offering high-end holistic wellness programs and Panchakarma treatments designed to purify, rejuvenate, and restore the mind and body. Specialties include Shirodhara, Abhyangam, Kativasthi, Greevavasthi, Nasya, Januvasti, and Podikizhi. The centre addresses chronic conditions including back pain, arthritis, migraines, stress, PCOD, sciatica, diabetes, and skin disorders. Treatments are fully personalized based on individual Prakriti assessment by trained male and female therapists.",
      rating: 4.7,
      reviews: 950,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/20.jpg",
      slug: "chennai/ayurillam-home-of-ayurvedic-therapy-centre",
    },
    {
      name: "Dhanwanthralaya Ayurveda Speciality Hospital",
      city: "Chennai (West Tambaram), Tamil Nadu, India",
      description:
        "Established in 2001 by Dr. Vanitha Muralikumar, Dhanwanthralaya is a 30-bed Ayurvedic speciality hospital treating both medical and surgical conditions using natural procedures rooted in classical Ayurvedic Samhithas. Specialities include Kayachikitsa, Gynaecology, Paediatrics, ENT, Surgery, and Psychiatry. Known for effective Panchakarma for back pain, disc bulge, arthritis, fistula, and chronic ailments. Branches in Chennai (West Tambaram, Nandanam) and Delhi, with an international presence through Smrithi Ayur Care in Malaysia.",
      rating: 4.5,
      reviews: 1100,
      priceRange: "$$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/21.jpg",
      slug: "chennai/dhanwanthralaya-ayurveda-speciality-hospital",
    },
  ];
  const orderedCenters = prioritizeTopCenters(centers);
  const totalPages = orderedCenters.length > 12 ? 2 : 1;
  const paginatedCenters = currentPage === 1 ? orderedCenters.slice(0, 12) : orderedCenters.slice(12);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex items-center flex-wrap gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em]">
            <li className="flex items-center gap-2">
              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black truncate">
              Top 10 Ayurvedic Centers in Bangalore, Hyderabad & Chennai
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#2C4E5A] text-white pt-10 pb-7 md:pt-20 md:pb-8">
        <div className="container mx-auto px-4 max-[380px]:px-2">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[17px] sm:text-lg md:text-4xl lg:text-5xl font-bold leading-[1.35] md:leading-[1.75] animate-fade-in px-2 md:px-4">
              <span className="block whitespace-nowrap">Top Ayurvedic Centers and Hospitals in</span>
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Bangalore, Hyderabad, Chennai &amp; South India.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover India's finest Ayurvedic centers and wellness retreats across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 pt-4 pb-6 md:pt-8 md:pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {paginatedCenters.map((center, index) => {
            const cardKey = center.slug ?? center.name;
            return (
            <div key={index} className="flex h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full h-full">
                {/* Image Section */}
                <div className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                  <h3
                    title={center.name}
                    className={`text-lg font-bold text-[#2C4E5A] mb-2 leading-tight cursor-pointer ${expandedCardSlug === cardKey ? "" : "line-clamp-2 md:line-clamp-1 min-h-[2.5rem] md:min-h-[1.6rem]"}`}
                    onClick={() =>
                      setExpandedCardSlug((prev) => (prev === cardKey ? null : cardKey))
                    }
                  >
                    {center.name}
                  </h3>

                  {/* Location and Rating Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-foreground/80">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold">{center.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-black text-foreground">{center.rating}</span>
                      <span className="text-xs font-semibold text-foreground/80">({center.reviews})</span>
                    </div>
                  </div>

                <p
                  className={`text-sm leading-relaxed md:leading-[1.5] text-foreground/80 mb-1 md:mb-2 ${expandedCardSlug === cardKey ? "" : "line-clamp-6 md:line-clamp-6"}`}
                >
                  {center.description}
                </p>
                {center.description.length > 260 && (
                  <button
                    type="button"
                    className="inline-flex text-xs font-semibold text-primary hover:text-primary/80 w-fit mb-2"
                    onClick={() =>
                      setExpandedCardSlug((prev) => (prev === cardKey ? null : cardKey))
                    }
                  >
                      {expandedCardSlug === cardKey ? "Read Less" : "Read More"}
                    </button>
                  )}

                  {/* Buttons Container */}
                  <div className="mt-2 md:mt-auto pt-2 md:pt-3 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-2">
                      {enabledDetailSlugs.has(center.slug) ? (
                        <Button
                          asChild
                          variant="outline"
                          className="w-full font-bold py-4 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                        >
                          <Link to={`/centers/${center.slug}`} target="_blank" rel="noopener noreferrer">
                            View Details
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full font-bold py-4 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                          onClick={() => {
                            // If needed, can keep the fallback behavior
                          }}
                        >
                          View Details
                        </Button>
                      )}
                      <Button
                        onClick={() => setQuoteModalOpen(true)}
                        className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-4 md:py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 hover:scale-[1.02] text-sm"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              setExpandedCardSlug(null);
            }}
            className="rounded-xl"
          >
            Previous
          </Button>
          <span className="text-sm font-semibold text-foreground/80">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              setExpandedCardSlug(null);
            }}
            className="rounded-xl"
          >
            Next
          </Button>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default SouthIndiaCenters;



