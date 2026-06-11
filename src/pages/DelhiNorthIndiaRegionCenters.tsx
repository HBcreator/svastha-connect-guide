import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prioritizeTopCenters } from "@/lib/top-centers";

type DelhiCenter = {
  series: number;
  name: string;
  city: string;
  description: string;
  rating: number;
  reviews: string;
  image: string;
  slug?: string;
};

const IMAGE_BY_SERIES: Record<number, string> = {
  1: "/Anchor pages/Delhi/images/1.webp",
  2: "/Anchor pages/Delhi/images/2.jpg",
  3: "/Anchor pages/Delhi/images/3.jpg",
  4: "/Anchor pages/Delhi/images/4.webp",
  5: "/Anchor pages/Delhi/images/5.webp",
  6: "/Anchor pages/Delhi/images/6.webp",
  7: "/Anchor pages/Delhi/images/7.webp",
  8: "/Anchor pages/Delhi/images/8.webp",
  9: "/Anchor pages/Delhi/images/9.jpg",
  10: "/Anchor pages/Delhi/images/10.webp",
  11: "/Anchor pages/Delhi/images/11.webp",
  12: "/Anchor pages/Delhi/images/12.jpg",
  13: "/Anchor pages/Delhi/images/13.jpg",
  14: "/Anchor pages/Delhi/images/14.jpg",
  15: "/Anchor pages/Delhi/images/15.webp",
  16: "/Anchor pages/Delhi/images/16.webp",
  17: "/Anchor pages/Delhi/images/17.webp",
  18: "/Anchor pages/Delhi/images/18.webp",
  19: "/Anchor pages/Delhi/images/19.jpg",
  20: "/Anchor pages/Delhi/images/20.webp",
  21: "/Anchor pages/Delhi/images/21.webp",
  22: "/Anchor pages/Delhi/images/22.webp",
  23: "/Anchor pages/Delhi/images/23.webp",
  24: "/Anchor pages/Delhi/images/24.jpg",
  25: "/Anchor pages/Delhi/images/25.webp",
};

const LOCATION_OVERRIDE_BY_CENTER: Record<string, string> = {
  "Ayurveda Kendra (Dr. Sudha Asokan)": "Safdarjung Enclave, Delhi, India",
  "Nirmal Ayurved & Panchkarm Clinic": "Shahdara, New Delhi, India",
  "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)": "Khera Dabar, New Delhi, India",
  "Kairali The Ayurvedic Healing Village – Delhi NCR": "Mehrauli, New Delhi, India",
  "SKK Ayurveda & Panchakarma": "Janak Puri, New Delhi, India",
  "Sri Sri Ayurveda Panchakarma Ayurveda Center": "Jhilmil, Delhi, India",
  "Mirasa Ayurveda": "East Of Kailash, Delhi, India",
  "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)": "Green Park, New Delhi, India",
  "Sri Vaidya Ayurveda Panchakarma": "Vasant Kunj, Delhi, India",
  "Sanjivani Ayurvedic Research Institute": "Dwarka Sector 13, Delhi, India",
  "Sri Sri Tattva Panchakarma Centre - Delhi": "Dwarka Sector 19, New Delhi, India",
};

const cleanMarkdownText = (value: string) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\\([.#-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const parseCentersFromMarkdown = (markdown: string): DelhiCenter[] => {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\|\s*\*\*\d+\*\*/.test(line));

  return lines
    .map((line): DelhiCenter | null => {
      const parts = line.split("|").map((part) => part.trim());
      if (parts.length < 6) return null;

      const series = Number(cleanMarkdownText(parts[1]));
      if (!series || series > 25) return null;

      let name = cleanMarkdownText(parts[2]);
      if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }
      if (name.includes("Sri Sri Tattva Panchakarma Centre")) {
        name = "Sri Sri Tattva Panchakarma Centre - Delhi";
      }
      if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      }
      if (name.includes("Sanjivani")) {
        name = "Sanjivani Ayurvedic Research Institute";
      }
      const description = cleanMarkdownText(parts[3]);
      const ratingCell = cleanMarkdownText(parts[4]);
      let city = cleanMarkdownText(parts[5]).replace(/\s+/g, " ").trim();
      city = city.replace(/\s*Delhi India$/i, ", India");
      if (!/India$/i.test(city)) {
        city = `${city}, India`;
      }
      city = city
        .replace(/\s+,/g, ",")
        .replace(/,\s*,/g, ", ")
        .replace(/\s{2,}/g, " ")
        .replace(/,\s*India$/i, ", India")
        .trim();
      if (LOCATION_OVERRIDE_BY_CENTER[name]) {
        city = LOCATION_OVERRIDE_BY_CENTER[name];
      }

      const ratingMatch = ratingCell.match(/\d+(?:\.\d+)?/);
      const reviewsMatch = ratingCell.match(/\(([^)]+)\)/);
      const rating = ratingMatch ? Number(ratingMatch[0]) : 0;
      const reviews = reviewsMatch ? reviewsMatch[1].replace(/\+/g, "").trim() : "0";
      const image = IMAGE_BY_SERIES[series] || "/Anchor pages/Delhi/images/1.webp";

      let finalSlug = "";
      let finalRating = rating;
      let finalReviews = reviews;

      if (name.includes("Mirasa")) {
        finalSlug = "mirasa-ayurveda-hospital-new-delhi-india";
      } else if (name.includes("Ayurveda Kendra")) {
        finalSlug = "ayurveda-kendra-hospital-safdarjung-delhi-india";
      } else if (name.includes("All India Institute")) {
        finalSlug = "all-india-institute-of-ayurveda-hospital-new-delhi-india";
      } else if (name.includes("Nirmal Ayurved")) {
        finalSlug = "nirmal-ayurved-panchkarm-clinic-hospital-new-delhi-india";
      } else if (name.includes("AyurNava Kerala Ayurveda")) {
        finalSlug = "ayurnava-kerala-ayurveda-hospital-dwarka-new-delhi-india";
      } else if (name.includes("Kurias Earth Ayurveda")) {
        finalSlug = "kurias-earth-ayurveda-hospital-green-park-new-delhi-india";
      } else if (name.includes("Sri Vaidya")) {
        finalSlug = "sri-vaidya-ayurveda-panchakarma-hospital-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";
      } else if (name.includes("Tibbia College")) {
        finalSlug = "a-and-u-tibbia-college-hospital-new-delhi-india";
        finalRating = 4.1;
        finalReviews = "500+";
      } else if (name.includes("Sri Sri Ayurveda Panchakarma Ayurveda Center")) {
        finalSlug = "sri-sri-ayurveda-panchakarma-center-new-delhi-india";
        finalRating = 4.1;
        finalReviews = "60+";
      } else if (name.includes("Sri Sri Tattva Panchakarma Centre")) {
        finalSlug = "sri-sri-tattva-panchakarma-centre-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";
      } else if (name.includes("Sanjivani")) {
        finalSlug = "sanjivani-ayurvedic-research-institute-center-delhi-india";
        finalRating = 4.7;
        finalReviews = "400+";
      } else if (name.includes("Kairali")) {
        finalSlug = "kairali-the-ayurvedic-healing-village-hospital-new-delhi-india";
        finalRating = 4.7;
        finalReviews = "300+";
      } else if (name.includes("Holy Family Hospital")) {
        finalSlug = "holy-family-hospital-ayurveda-department-hospital-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "150+";
      } else if (name.includes("Kerala Ayurveda Wellness Clinic")) {
        finalSlug = "kerala-ayurveda-wellness-clinic-hospital-new-delhi-india";
        finalRating = 4.8;
        finalReviews = "200+";
      } else if (name.includes("CBPACS")) {
        finalSlug = "ch-brahm-prakash-ayurved-charak-sansthan-hospital-new-delhi-india";
        finalRating = 4.4;
        finalReviews = "1,500+";
      }

      return {
        series,
        name,
        city,
        description,
        rating: finalRating,
        reviews: finalReviews,
        image,
        ...(finalSlug ? { slug: finalSlug } : {})
      };
    })
    .filter((center): center is DelhiCenter => center !== null)
    .sort((a, b) => a.series - b.series);
};

const DelhiNorthIndiaRegionCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardSeries, setExpandedCardSeries] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [centers, setCenters] = useState<DelhiCenter[]>([]);
  const navigate = useNavigate();
  const namasteDwaarCenter: DelhiCenter = {
    series: 0,
    name: "Namaste Dwaar – Countryside Wellness Retreat",
    city: "Mansurpur, Delhi, India",
    description:
      "Namaste Dwaar is an award-winning countryside wellness retreat near Delhi NCR that blends authentic Ayurvedic Healing with a peaceful rural environment. The center offers physician-led Panchakarma, detox, stress-relief, and rejuvenation programs tailored to each guest's health goals. Guests benefit from classical therapies, yoga, mindful routines, and farm-fresh sattvic meals designed to support long-term recovery and balance. Its calm natural setting, spacious campus, and personalized hospitality make it ideal for lifestyle reset, preventive wellness, and deeper therapeutic stays. With a focus on holistic care, Namaste Dwaar combines comfort, tradition, and structured healing for sustainable results.",
    rating: 4.7,
    reviews: "300",
    image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
    slug: "namaste-dwaar-countryside-wellness-retreat-delhi-india",
  };

  const naadWellnessCenter: DelhiCenter = {
    series: -1,
    name: "Naad Wellness",
    city: "Sonepat, Haryana, Near Delhi NCR, India",
    description:
      "Naad Wellness is a luxury integrative retreat near Delhi dedicated to holistic healing and the restoration of inner balance through ancient wisdom. Inspired by Ayurvedic principles and modern therapeutic science, the center offers curated wellness journeys that harmonize the body, mind, and spirit. Set within a tranquil natural environment, Naad provides a peaceful sanctuary for deep rejuvenation and preventive healthcare.",
    rating: 4.8,
    reviews: "200",
    image: "/Center Images/Naad Wellness/Thumb.jpg",
    slug: "naad-wellness-center-sonepat-delhi-india",
  };

  const imperialSpaCenter: DelhiCenter = {
    series: -2,
    name: "The Imperial Spa and Wellness",
    city: "New Delhi, India",
    description:
      "The Imperial Spa and Wellness is a premier luxury sanctuary in New Delhi, blending timeless Eastern healing traditions with sophisticated modern wellness therapies. Nestled within the iconic Imperial Hotel, the center offers a peaceful retreat where classical Ayurvedic principles and professional spa rituals are practiced with exceptional care.",
    rating: 4.8,
    reviews: "8000",
    image: "/Center Images/The Imperial Spa & Salon/Thumb.jpg",
    slug: "the-imperial-spa-and-wellness-delhi-india",
  };

  const itcGrandBharatCenter: DelhiCenter = {
    series: -3,
    name: "ITC Grand Bharat",
    city: "Gurugram (near New Delhi), India",
    description:
      "ITC Grand Bharat is an ultra-luxury all-suite wellness retreat in Gurugram, inspired by India's rich architectural heritage and the timeless wisdom of the Aravallis. The retreat offers a deeply immersive experience where royal grandeur meets authentic Ayurvedic Healing and modern wellness innovation.",
    rating: 4.8,
    reviews: "17000",
    image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
    slug: "itc-grand-bharat-wellness-retreat-gurugram-delhi-india",
  };

  const amanbaghCenter: DelhiCenter = {
    series: -4,
    name: "Amanbagh Heritage Wellness Retreat",
    city: "Alwar, Rajasthan, India",
    description:
      "Amanbagh Heritage Wellness Retreat is a world-class sanctuary in Rajasthan, blending Mughal-inspired architectural elegance with profound Ayurvedic Healing traditions. Nestled in the rugged Aravalli hills, the retreat offers a peaceful sanctuary where classical Vedic principles and personalized wellness protocols are practiced with meticulous care.",
    rating: 4.8,
    reviews: "600",
    image: "/Center Images/Amanbagh/thumb.jpg",
    slug: "amanbagh-heritage-wellness-retreat-rajasthan-delhi-india",
  };

  const maharishiAyurvedaHospitalCenter: DelhiCenter = {
  series: -5,
  name: "Maharishi Ayurveda Hospital",
  city: "Shalimar Bagh, New Delhi, India",
  description:
    "North India's first NABH-accredited Ayurvedic hospital, established in 1988 on the inspired vision of His Holiness Maharishi Mahesh Yogi. Located in Shalimar Bagh, North Delhi, the hospital has served patients from over 100 countries across 35+ years. It offers a unique multi-modal healing approach integrating Panchakarma, Pulse Diagnosis (Nadi Pariksha), Transcendental Meditation, Yoga, Maharishi Vastu Consultation, Maharishi Jyotish, Leech Therapy, and in-house manufactured herbal products. Recognized by the International Society for Quality in Healthcare and CGHS empanelled with cashless insurance. Free OPD services provided for EWS patients.",
  rating: 4.5,
  reviews: "860",
  image: "/Anchor pages/Delhi/images/1.webp",
  slug: "maharishi-ayurveda-hospital-new-delhi-india",
};

const AryaVaidyaSala: DelhiCenter = {
  series: -6,
  name: "Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)",
  city: "Karkardooma, East Delhi, India",
  description:
    "One of Delhi's leading Ayurvedic Panchakarma clinics, Aasha Ayurveda is renowned for its highly specialized treatment of female and male infertility, fallopian tube blockage, PCOD, endometriosis, and IVF failure cases. Founded and led by Dr. Chanchal Sharma (BAMS, DGO, MD-AM, Diploma in Panchakarma, Gynecology specialist), the clinic is a pioneer in online consultation for Ayurvedic infertility care across India, UAE, and Europe. Employs the Uttara Basti technique and Kerala Panchakarma for reproductive conditions with a reported 90% positive outcomes. Now has 5 convenient locations across Delhi.",
  rating: 4.5,
  reviews: "40",
  image: "/Anchor pages/Delhi/images/2.jpg",
  slug: "arya-vaidya-sala-ayurvedic-hospital-and-research-center-east-delhi-india",
};

const AashaAyurvedaCenter: DelhiCenter = {
  series: -7,
  name: "Aasha Ayurveda Center",
  city: "Rajouri Garden, West Delhi, India",
  description:
    "One of Delhi's leading Ayurvedic Panchakarma clinics, Aasha Ayurveda is renowned for its highly specialized treatment of female and male infertility, fallopian tube blockage, PCOD, endometriosis, and IVF failure cases. Founded and led by Dr. Chanchal Sharma (BAMS, DGO, MD-AM, Diploma in Panchakarma, Gynecology specialist), the clinic is a pioneer in online consultation for Ayurvedic infertility care across India, UAE, and Europe. Employs the Uttara Basti technique and Kerala Panchakarma for reproductive conditions with a reported 90% positive outcomes. Now has 5 convenient locations across Delhi.",
  rating: 4.8,
  reviews: "1300",
  image: "/Anchor pages/Delhi/images/3.jpg",
  slug: "aasha-ayruveda-center-rajouri-garden-west-delhi-india",
};

const TarunVedaAyurvedaHospital: DelhiCenter = {
  series: -8,
  name: "Tarunveda Ayurveda Hospital",
  city: "Dwarka, New Delhi, India",
  description:
    "A dedicated, doctor-led Ayurvedic Panchakarma hospital in Dwarka, New Delhi, offering authentic Kerala and classical Ayurvedic treatments in a clinical, safe environment. TarunVeda specializes in full Panchakarma programs including Vamana, Virechana, Basti, Nasyam, and Raktamokshan, alongside Abhyanga, Shirodhara, Thalapothichil, and Pinda Sweda. Specialties include mental health, skin diseases, paralysis, arthritis, chronic digestive conditions, and neurological recovery. Known as one of the best Panchakarma treatment centers in Delhi, with online consultations and personalized post-treatment diet plans.",
  rating: 4.8,
  reviews: "210",
  image: "/Anchor pages/Delhi/images/4.webp",
  slug: "tarunveda-ayurveda-hospital-new-delhi-india",
};

const SKKAyurvedaPanchakarma: DelhiCenter = {
  series: -9,
  name: "SKK Ayurveda & Panchakarma",
  city: "Janak Puri, New Delhi, India",
  description:
    "The first and only NABH-accredited Panchakarma center in West Delhi, founded by Dr. Tarun Gupta (BAMS, Delhi University), and CGHS, NHAI, DDA, and NDMC empanelled. SKK Ayurveda pioneered a data-driven, protocol-based approach to Ayurvedic diagnosis and treatment — enabling highly personalized and measurable outcomes. Specializes in Panchakarma detox, endometriosis, PCOD, arthritis, digestive disorders, back pain, and Rasayana therapies. Known for its scientific rigour, compassionate care, and systematic lifestyle modification approach alongside classical Ayurvedic treatment.",
  rating: 4.9,
  reviews: "810",
  image: "/Anchor pages/Delhi/images/5.webp",
  slug: "skk-ayurveda-and-panchakarma-hospital-new-delhi-india",
};

const AprasuAyurvedicHospital: DelhiCenter = {
  series: -10,
  name: "Aprasu Ayurvedic Hospital",
  city: "Rohini, North Delhi, India",
  description:
    "A NABH-accredited Ayurvedic Panchakarma hospital and training institute serving humanity through Ayurveda since 1970 — a unit of the historic Humraz Clinic. Located in Rohini, North Delhi, Aprasu is CGHS and ECHS empanelled with full cashless and mediclaim facilities. Led by Dr. Sameer Arora and Dr. Reema Arora, it is celebrated for avoiding over 5,400 surgeries for slip disc and 4,500 for spine compression through Panchakarma alone. Facilities include AC rooms with park views, a rooftop yoga terrace with greenery, lift access, in-house Ayurvedic cuisine, and a dedicated Panchakarma therapist training institute.",
  rating: 4.8,
  reviews: "340",
  image: "/Anchor pages/Delhi/images/6.webp",
  slug: "aprasu-ayurvedic-hospital-north-delhi-india",
};

const SanjeevaniAyurveda: DelhiCenter = {
  series: -11,
  name: "Sanjeevani Ayurveda",
  city: "Dwarka, New Delhi, India",
  description:
    "A multi-specialty Kerala Ayurveda and Panchakarma Day Care Center located in Dwarka Sector 13 — and one of the most trusted names in Delhi-NCR for Panchakarma since 2013. Winner of 'Best Center of the Year 2019' in Delhi NCR and 'Excellence in Ayurveda 2021'. CGHS, ECHS, NDMC, DDA, and CWC empanelled. Led by an MD Panchakarma Specialist with 15+ years of experience, it excels in treating bone, joint, and spine diseases through Kerala Ayurveda techniques including Pizhichil, Kizhi, Shirodhara, Kati Vasti, and Abhyangam. Rated among the highest in Delhi at 4.8 on JustDial.",
  rating: 4.9,
  reviews: "1070",
  image: "/Anchor pages/Delhi/images/7.webp",
  slug: "sanjeevani-ayurveda-hospital-new-delhi-india",
};

const SriSriAyurvedaPanchakarmaAyurvedaCenter: DelhiCenter = {
  series: -12,
  name: "Sri Sri Ayurveda Panchakarma Ayurveda Center",
  city: "Jhilmil, Delhi, India",
  description: "An Ayurvedic Panchakarma clinic in Delhi affiliated with the Sri Sri Tattva brand, delivering authentic Ayurvedic therapies in a spiritually aligned, peaceful environment. The center offers personalized Panchakarma detox programs, Abhyanga, Shirodhara, Udwarthanam, herbal steam, and rejuvenation therapies under qualified Ayurvedic doctors. Known for integrating yoga and meditation with clinical Ayurveda, this center appeals to patients from across India and international visitors seeking genuine, protocol-driven Ayurvedic healing in the capital city.",
  rating: 4.1,
  reviews: "60+",
  image: "/Anchor pages/Delhi/images/8.webp",
  slug: "sri-sri-ayurveda-panchakarma-center-new-delhi-india",
};

const KeralaAyurvedaLifeAyurvedaPanchakarmaClinic: DelhiCenter = {
  series: -13,
  name: "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)",
  city: "Green Park, New Delhi, India",
  description:
    "A specialized Kerala-style Ayurvedic Panchakarma clinic in Delhi, delivering authentic classical therapies by Kerala-trained physicians and therapists. Offering modernized Ayurvedic care while retaining the ancient herbal science in its original form, the center specializes in Panchakarma detox, Rasayana (rejuvenation), chronic disease management, and beauty enhancement. The clinic uses a proficient Kerala-based herbal pharmacy with genuine Ayurvedic oils and medicines. Effective for back pain, diabetes, knee joint pain, infertility, obesity, paralysis, and skin conditions.",
  rating: 4.9,
  reviews: "750",
  image: "/Anchor pages/Delhi/images/9.jpg",
  slug: "kerala-ayurveda-life-panchakarma-clinic-new-delhi-india",
};

const ApolloAyurVAIDHospitalsNehruEnclave: DelhiCenter = {
  series: -14,
  name: "Apollo AyurVAID Hospitals (Nehru Enclave)",
  city: "Nehru Enclave, New Delhi, India",
  description:
    "India's National Quality Award winner in Ayurveda and a NABH-accredited 40-bed Precision Ayurveda hospital in Nehru Place, New Delhi — backed by Apollo Hospitals. With over 18 years of clinical experience and an extraordinary Net Promoter Score of 88% and 98% patient satisfaction, AyurVAID offers protocol-driven Integrative Ayurvedic care for chronic diseases including stroke rehabilitation, Parkinson's, PCOS, arthritis, nephrotic syndrome, autoimmune disorders, integrative oncology, and neurological conditions. Cashless insurance accepted. A dedicated international patients team and custom sattvic kitchen make it Delhi's most clinically rigorous Ayurveda hospital.",
  rating: 4.3,
  reviews: "170",
  image: "/Anchor pages/Delhi/images/10.webp",
  slug: "apollo-ayurvaid-life-hospital-new-delhi-india",
};

  useEffect(() => {
    let isMounted = true;

    fetch("/Anchor pages/Delhi/savastha_delhi 25_centers .md")
      .then((response) => response.text())
      .then((markdown) => {
        if (isMounted) {
          setCenters(parseCentersFromMarkdown(markdown));
        }
      })
      .catch((error) => {
        console.error("Failed to load Delhi centers:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const { orderedCenters, totalPages, paginatedCenters } = useMemo(() => {
    const baseCenters = [
      namasteDwaarCenter,
      naadWellnessCenter,
      imperialSpaCenter,
      itcGrandBharatCenter,
      amanbaghCenter,
      maharishiAyurvedaHospitalCenter,
      AryaVaidyaSala,
      // AashaAyurvedaCenter,
      TarunVedaAyurvedaHospital,
      SKKAyurvedaPanchakarma,
      AprasuAyurvedicHospital,
      SanjeevaniAyurveda,
      SriSriAyurvedaPanchakarmaAyurvedaCenter,
      KeralaAyurvedaLifeAyurvedaPanchakarmaClinic,
      ApolloAyurVAIDHospitalsNehruEnclave,
      ...centers
    ];
    const ordered = prioritizeTopCenters(baseCenters);
    const paginated = currentPage === 1 ? ordered.slice(0, 12) : ordered.slice(12);
    const pages = Math.min(Math.ceil(ordered.length / 12), 2);
    return { orderedCenters: ordered, totalPages: pages, paginatedCenters: paginated };
  }, [centers, currentPage, namasteDwaarCenter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#2C4E5A] text-white pt-10 pb-7 md:pt-20 md:pb-8">
        <div className="container mx-auto px-4 max-[380px]:px-2">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[17px] sm:text-lg md:text-4xl lg:text-5xl font-bold leading-[1.35] md:leading-[1.75] animate-fade-in px-2 md:px-4">
              <span className="block whitespace-nowrap">Top Ayurvedic Centers and Hospitals in</span>
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Delhi, NCR Region.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover Delhi and North India region&apos;s finest Ayurvedic centers and wellness retreats.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-4 pb-6 md:pt-8 md:pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {paginatedCenters.map((center) => (
            <div key={center.series} className="flex h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full h-full">
                <div className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                  <h3
                    title={center.name}
                    className={`text-lg font-bold text-[#2C4E5A] mb-2 leading-tight cursor-pointer ${expandedCardSeries === center.series ? "" : "line-clamp-2 md:line-clamp-1 min-h-[2.5rem] md:min-h-[1.6rem]"}`}
                    onClick={() =>
                      setExpandedCardSeries((prev) =>
                        prev === center.series ? null : center.series,
                      )
                    }
                  >
                    {center.name}
                  </h3>

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
                    className={`text-sm leading-relaxed md:leading-[1.5] text-foreground/80 mb-1 md:mb-2 ${expandedCardSeries === center.series ? "" : "line-clamp-6 md:line-clamp-6"}`}
                  >
                    {center.description}
                  </p>
                  {center.description.length > 260 && (
                    <button
                      type="button"
                      className="inline-flex text-xs font-semibold text-primary hover:text-primary/80 w-fit mb-2"
                      onClick={() =>
                        setExpandedCardSeries((prev) =>
                          prev === center.series ? null : center.series,
                        )
                      }
                    >
                      {expandedCardSeries === center.series ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="mt-2 md:mt-auto pt-2 md:pt-3 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-2">
                      {center.slug ? (
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
                            // Fallback
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
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              setExpandedCardSeries(null);
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
              setExpandedCardSeries(null);
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

export default DelhiNorthIndiaRegionCenters;

