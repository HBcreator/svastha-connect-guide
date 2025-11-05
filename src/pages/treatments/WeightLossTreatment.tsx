import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WeightLossTreatment = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/Treatments/Weight Loss.txt")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  const renderContent = () => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
        // Skip empty lines to reduce spacing
        continue;
      }

      // Sub-headings with ###
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mt-4 mb-2">
            {line.replace("### ", "")}
          </h3>
        );
        continue;
      }

      // Large bold headings (>30 chars) - h2
      const longHeadingMatch = line.match(/^\*\*(.{30,}?)\*\*$/);
      if (longHeadingMatch) {
        elements.push(
          <h2 key={key++} className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-6 mb-3 pb-2 border-b-2 border-primary/20">
            {longHeadingMatch[1]}
          </h2>
        );
        continue;
      }

      // Numbered sections with **text**
      const numberedMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*$/);
      if (numberedMatch) {
        elements.push(
          <h3 key={key++} className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mt-4 mb-2">
            {numberedMatch[1]}. {numberedMatch[2]}
          </h3>
        );
        continue;
      }

      // Short bold headings (<30 chars) - h3
      const shortHeadingMatch = line.match(/^\*\*(.+?)\*\*$/);
      if (shortHeadingMatch) {
        elements.push(
          <h3 key={key++} className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mt-4 mb-2">
            {shortHeadingMatch[1]}
          </h3>
        );
        continue;
      }

      // Bullet points
      if (line.startsWith("- ") || line.startsWith("* ")) {
        const bulletText = line.substring(2);
        const processedText = processInlineFormatting(bulletText);
        elements.push(
          <li key={key++} className="ml-6 mb-2 text-foreground leading-relaxed list-disc">
            {processedText}
          </li>
        );
        continue;
      }

      // Regular paragraphs
      const processedText = processInlineFormatting(line);
      elements.push(
        <p key={key++} className="text-foreground mb-2 leading-relaxed">
          {processedText}
        </p>
      );
    }

    return elements;
  };

  const processInlineFormatting = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let key = 0;

    // Match bold text **text** or italic *text* or bold-italic ***text***
    const regex = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Add formatted text
      if (match[1]) {
        // Bold-italic ***text***
        parts.push(
          <strong key={key++} className="font-bold italic">
            {match[1]}
          </strong>
        );
      } else if (match[2]) {
        // Bold **text**
        parts.push(
          <strong key={key++} className="font-semibold">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        // Italic *text*
        parts.push(
          <em key={key++} className="italic">
            {match[3]}
          </em>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Weight Loss Treatment</h1>
          <p className="text-lg text-white/90">
            Sustainable weight management program
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Treatment Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/Treatments-images/Weight Loss.jpg" 
            alt="Weight Loss Treatment" 
            className="w-full h-[300px] object-cover"
            style={{ aspectRatio: '1400/300' }}
          />
        </div>

        {/* Content from txt file */}
        <Card className="p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg mb-8 md:mb-12">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {content ? renderContent() : <p>Loading content...</p>}
          </div>
        </Card>

        {/* Book Your Session CTA */}
        <Card className="p-6 sm:p-8 md:p-10 shadow-lg mb-8 md:mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">
              Start Your Weight Loss Journey
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Experience authentic Ayurvedic weight management with personalized diet plans, herbal supplements, and metabolic therapies for sustainable results.
            </p>
            <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
              Book Your Weight Loss Consultation
            </Button>
          </div>
        </Card>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Natural Weight Loss</h3>
            <p className="text-muted-foreground">
              Healthy reduction through Ayurvedic therapies like Udwarthanam and Panchakarma
            </p>
          </Card>
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Boost Metabolism</h3>
            <p className="text-muted-foreground">
              Strengthen digestive fire (Agni) and eliminate toxins (Ama) for optimal metabolism
            </p>
          </Card>
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Sustainable Results</h3>
            <p className="text-muted-foreground">
              Holistic lifestyle changes and dietary guidance for long-term weight management
            </p>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default WeightLossTreatment;
