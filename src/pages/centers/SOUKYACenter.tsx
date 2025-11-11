import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Star, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function SOUKYACenter() {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // All 27 images from SOUKYA folder
  const images = [
    "/Center Images/SOUKYA/1 Soukya.jpg",
    "/Center Images/SOUKYA/2 Soukya.jpg",
    "/Center Images/SOUKYA/3 soukya.jpg",
    "/Center Images/SOUKYA/4 soukya.jpg",
    "/Center Images/SOUKYA/5 soukya.jpg",
    "/Center Images/SOUKYA/6 soukya.jpg",
    "/Center Images/SOUKYA/7 soukya.jpg",
    "/Center Images/SOUKYA/8 soukya.jpg",
    "/Center Images/SOUKYA/9 soukya.jpg",
    "/Center Images/SOUKYA/10 soukya.jpg",
    "/Center Images/SOUKYA/11 soukya.jpg",
    "/Center Images/SOUKYA/12 soukya.jpeg",
    "/Center Images/SOUKYA/13 soukya.jpg",
    "/Center Images/SOUKYA/14 soukya.jpg",
    "/Center Images/SOUKYA/17 soukya.jpg",
    "/Center Images/SOUKYA/18 soukya.jpg",
    "/Center Images/SOUKYA/19 soukya.jpg",
    "/Center Images/SOUKYA/20 soukya.jpg",
    "/Center Images/SOUKYA/21 soukkya.jpg",
    "/Center Images/SOUKYA/22 soukya.jpg",
    "/Center Images/SOUKYA/23 soukya.jpg",
    "/Center Images/SOUKYA/24 soukya.jpg",
    "/Center Images/SOUKYA/25 soukya.jpg",
    "/Center Images/SOUKYA/26 soukya.jpg",
    "/Center Images/SOUKYA/27 soukya.jpg",
    "/Center Images/SOUKYA/28 soukya.jpg",
    "/Center Images/SOUKYA/29 soukya.jpg",
  ];

  useEffect(() => {
    fetch("/content/Top Centers/SOUKYA center.txt")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) =>
        console.error("Error loading SOUKYA center content:", err)
      );
  }, []);

  const processInlineFormatting = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const regex = /\*\*(.*?)\*\*/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={match.index} className="font-semibold text-primary">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderContent = () => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: "bullet" | "number" | null = null;
    let emptyLineCount = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === "bullet") {
          elements.push(
            <ul
              key={`list-${elements.length}`}
              className="list-disc list-inside mb-6 space-y-2"
              style={{ color: "#7F543D" }}
            >
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {processInlineFormatting(item)}
                </li>
              ))}
            </ul>
          );
        } else if (listType === "number") {
          elements.push(
            <ol
              key={`list-${elements.length}`}
              className="list-decimal list-inside mb-6 space-y-2"
              style={{ color: "#7F543D" }}
            >
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {processInlineFormatting(item)}
                </li>
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (!trimmedLine) {
        flushList();
        emptyLineCount++;
        // Add spacing div for multiple empty lines (sections separator)
        if (emptyLineCount === 2 && elements.length > 0) {
          elements.push(
            <div key={`space-${index}`} className="h-4"></div>
          );
        }
        return;
      }

      // Reset empty line counter when we hit content
      emptyLineCount = 0;

      // Rule 1: Main title (single #)
      if (/^#\s+(.+)/.test(trimmedLine) && !trimmedLine.startsWith("##")) {
        flushList();
        const titleText = trimmedLine.replace(/^#\s+/, "");
        elements.push(
          <h1
            key={`h1-${index}`}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary"
          >
            {processInlineFormatting(titleText)}
          </h1>
        );
        return;
      }

      // Rule 2: Section headings (##)
      if (/^##\s+(.+)/.test(trimmedLine)) {
        flushList();
        const headingText = trimmedLine.replace(/^##\s+/, "");
        elements.push(
          <h2
            key={`h2-${index}`}
            className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-primary"
          >
            {processInlineFormatting(headingText)}
          </h2>
        );
        return;
      }

      // Rule 3: Subsection headings (###)
      if (/^###\s+(.+)/.test(trimmedLine)) {
        flushList();
        const subheadingText = trimmedLine.replace(/^###\s+/, "");
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-primary"
          >
            {processInlineFormatting(subheadingText)}
          </h3>
        );
        return;
      }

      // Rule 4: Bullet points (- or *)
      if (/^[-*]\s+(.+)/.test(trimmedLine)) {
        const itemText = trimmedLine.replace(/^[-*]\s+/, "");
        if (listType !== "bullet") {
          flushList();
          listType = "bullet";
        }
        currentList.push(itemText);
        return;
      }

      // Rule 5: Numbered lists
      if (/^\d+\.\s+(.+)/.test(trimmedLine)) {
        const itemText = trimmedLine.replace(/^\d+\.\s+/, "");
        if (listType !== "number") {
          flushList();
          listType = "number";
        }
        currentList.push(itemText);
        return;
      }

      // Rule 6 & 7: Regular paragraphs
      flushList();
      elements.push(
        <p
          key={`p-${index}`}
          className="mb-6 leading-relaxed"
          style={{ color: "#7F543D" }}
        >
          {processInlineFormatting(trimmedLine)}
        </p>
      );
    });

    flushList();
    return elements;
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  SOUKYA
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  Dr. Mathai's International Holistic Health Centre
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(500+ reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg w-full aspect-video">
            <img
              src={images[selectedImage]}
              alt="SOUKYA Center"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image Gallery Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                    selectedImage === idx ? "ring-4 ring-primary" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`SOUKYA ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </h3>
                <p className="text-sm" style={{ color: "#7F543D" }}>
                  30-acre organic farm in Whitefield, Bangalore
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Accreditation
                </h3>
                <p className="text-sm" style={{ color: "#7F543D" }}>
                  India's first NABH-accredited AYUSH Hospital
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  Systems
                </h3>
                <p className="text-sm" style={{ color: "#7F543D" }}>
                  Ayurveda, Homeopathy, Yoga & Naturopathy
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Content Section */}
          <Card className="mb-12">
            <CardContent className="p-8 prose prose-lg max-w-none">
              {content ? renderContent() : <p>Loading content...</p>}
            </CardContent>
          </Card>

          {/* Contact Information Card */}
          <Card className="mb-12 border-2 border-primary">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p style={{ color: "#7F543D" }}>
                        SOUKYA - Dr. Mathai's International Holistic Health Centre<br />
                        Soukya Road, Samethanahalli<br />
                        Whitefield, Bangalore - 560067<br />
                        Karnataka, INDIA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p style={{ color: "#7F543D" }}>
                        +91 80 2801 7000 to 08<br />
                        Mobile: +91 98453 74400
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p style={{ color: "#7F543D" }}>
                        info@soukya.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Website</h4>
                      <a 
                        href="https://www.soukya.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.soukya.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Distance from Airport</h4>
                      <p style={{ color: "#7F543D" }}>
                        30 minutes from Kempegowda International Airport (25 km)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Transportation Services</h4>
                <p style={{ color: "#7F543D" }}>
                  Pick-up and drop services available on request for international and domestic patients 
                  arriving at Bangalore Airport or Railway Station.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Begin Your Holistic Healing Journey at SOUKYA
              </h3>
              <p className="mb-6 text-lg opacity-90 max-w-3xl mx-auto">
                Experience world-class integrated holistic healthcare at India's premier 
                NABH-accredited AYUSH hospital, set in a serene 30-acre organic farm.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Consultation Today
                </Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
