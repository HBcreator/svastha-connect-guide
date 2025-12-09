import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PostNatalCare = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/Treatments/Post Natal Treatment.txt")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  const renderContent = () => {
    if (!content) return null;

    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Empty line - add spacing
      if (!line) {
        elements.push(<div key={key++} className="h-4"></div>);
        continue;
      }

      // 1. ### Headings (Subheadings) - Dark color
      if (line.startsWith("### ")) {
        const text = line.replace(/^### /, "");
        elements.push(
          <h3 key={key++} className="text-2xl font-bold text-primary mt-6 mb-3">
            {processInlineFormatting(text)}
          </h3>
        );
      }
      // 2. **Long text** (>30 chars) - Large Blue Heading
      else if (line.match(/^\*\*(.+)\*\*$/) && line.replace(/\*\*/g, "").length > 30) {
        const text = line.replace(/^\*\*|\*\*$/g, "");
        elements.push(
          <h2 key={key++} className="text-3xl font-bold text-primary border-b-2 border-primary/20 pb-2 mt-8 mb-4">
            {processInlineFormatting(text)}
          </h2>
        );
      }
      // 3. Numbered sections: 1. **text**
      else if (line.match(/^\d+\.\s+\*\*(.+)\*\*/)) {
        const match = line.match(/^(\d+\.\s+)\*\*(.+)\*\*/);
        if (match) {
          const [, number, text] = match;
          elements.push(
            <h4 key={key++} className="text-xl font-semibold text-primary/80 mt-6 mb-3">
              {number}{processInlineFormatting(text)}
            </h4>
          );
        }
      }
      // 4. **Short text** (<30 chars) - Bold/Section heading
      else if (line.match(/^\*\*(.+)\*\*$/)) {
        const text = line.replace(/^\*\*|\*\*$/g, "");
        elements.push(
          <h4 key={key++} className="text-lg font-semibold text-primary mt-4 mb-2">
            {processInlineFormatting(text)}
          </h4>
        );
      }
      // 5. Bullet points with * - Brown colored dots
      else if (line.match(/^\*\s+/)) {
        const text = line.replace(/^\*\s+/, "");
        elements.push(
          <li key={key++} className="text-base leading-relaxed ml-6 mb-2 flex items-start" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      }
      // 6. Bullet points with - - Brown colored dots
      else if (line.match(/^-\s+/)) {
        const text = line.replace(/^-\s+/, "");
        elements.push(
          <li key={key++} className="text-base leading-relaxed ml-6 mb-2 flex items-start" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      }
      // 8. Regular paragraphs - Brown text color
      else {
        elements.push(
          <p key={key++} className="text-base leading-relaxed mb-4" style={{ color: '#7F543D' }}>
            {processInlineFormatting(line)}
          </p>
        );
      }
    }

    return <>{elements}</>;
  };

  const processInlineFormatting = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    const regex = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1]) {
        parts.push(
          <strong key={keyCounter++} className="font-bold italic">
            {match[1]}
          </strong>
        );
      } else if (match[2]) {
        parts.push(
          <strong key={keyCounter++} className="font-bold">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        parts.push(
          <em key={keyCounter++} className="italic">
            {match[3]}
          </em>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Post Natal Care</h1>
          <p className="text-lg text-white/90">A Holistic Path to Mother's Recovery</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg w-full aspect-video">
          <img 
            src="/Treatments-images/Post Natal Treatment.jpg" 
            alt="Post Natal Care" 
            className="w-full h-full object-cover"
          />
        </div>

        <Card className="p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg mb-8 md:mb-12">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {content ? renderContent() : <p>Loading content...</p>}
          </div>
        </Card>

        <Card className="p-6 sm:p-8 md:p-10 shadow-lg mb-8 md:mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Nurture Your Recovery</h2>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Experience authentic Ayurvedic postnatal care that supports complete healing, lactation, and emotional well-being for new mothers.
            </p>
            <Button size="lg" className="font-semibold">Book Your Consultation</Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💆‍♀️</div>
            <h3 className="text-xl font-semibold mb-2">Traditional Therapies</h3>
            <p className="text-muted-foreground">
              Specialized Abhyanga massage and herbal baths restore strength and vitality
            </p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🤱</div>
            <h3 className="text-xl font-semibold mb-2">Lactation Support</h3>
            <p className="text-muted-foreground">
              Herbal formulations and diet enhance breast milk production naturally
            </p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🧘‍♀️</div>
            <h3 className="text-xl font-semibold mb-2">Mental Wellness</h3>
            <p className="text-muted-foreground">
              Vata-balancing therapies prevent postpartum depression and promote bonding
            </p>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default PostNatalCare;
