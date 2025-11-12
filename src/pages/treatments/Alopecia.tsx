import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Alopecia = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/content/Treatments/hair loss Treatment.txt")
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

      if (!line) {
        elements.push(<div key={key++} className="h-4"></div>);
        continue;
      }

      if (line.startsWith("### ")) {
        const heading = line.replace("### ", "");
        elements.push(
          <h3 key={key++} className="text-2xl font-bold text-primary mt-6 mb-0">
            {heading}
          </h3>
        );
      } else if (line.match(/^\*\*(.+)\*\*$/) && line.replace(/\*\*/g, "").length > 30) {
        const heading = line.replace(/\*\*/g, "");
        elements.push(
          <h2 key={key++} className="text-3xl font-bold text-primary border-b-2 border-primary/20 pb-2 mt-8 mb-0">
            {heading}
          </h2>
        );
      } else if (line.match(/^\d+\.\s+\*\*(.+)\*\*/)) {
        const match = line.match(/^(\d+)\.\s+\*\*(.+)\*\*/);
        if (match) {
          elements.push(
            <h3 key={key++} className="text-xl font-semibold text-primary/80 mt-6 mb-0">
              {match[1]}. {match[2]}
            </h3>
          );
        }
      } else if (line.match(/^\*\*(.+)\*\*$/)) {
        const heading = line.replace(/\*\*/g, "");
        elements.push(
          <h4 key={key++} className="text-lg font-semibold text-primary mt-4 mb-0">
            {heading}
          </h4>
        );
      } else if (line.match(/^\*\s+/)) {
        const text = line.replace(/^\*\s+/, "");
        elements.push(
          <li key={key++} className="flex items-start mb-2" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      } else if (line.match(/^-\s+/)) {
        const text = line.replace(/^-\s+/, "");
        elements.push(
          <li key={key++} className="flex items-start mb-2" style={{ color: '#7F543D' }}>
            <span className="mr-2 font-bold" style={{ color: '#7F543D' }}>•</span>
            <span>{processInlineFormatting(text)}</span>
          </li>
        );
      } else {
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
    const parts = [];
    const regex = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1]) {
        parts.push(
          <strong key={match.index} className="font-bold italic">
            {match[1]}
          </strong>
        );
      } else if (match[2]) {
        parts.push(
          <strong key={match.index} className="font-bold">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        parts.push(
          <em key={match.index} className="italic">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-0">Alopecia</h1>
          <p className="text-lg text-white/90">Ayurvedic Treatment for Hair Loss</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg w-full aspect-video">
          <img
            src="/Treatments-images/Hair Loss.jpg"
            alt="Ayurvedic Treatment for Hair Loss"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-0">
              Restore Your Hair Naturally
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Experience holistic Ayurvedic treatments that address the root causes of hair loss and promote healthy, natural hair growth.
            </p>
            <Button size="lg" className="font-semibold text-base sm:text-lg px-6 sm:px-8">
              Book Your Consultation
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">💆</div>
            <h3 className="text-xl font-bold text-primary mb-0">Shiro Abhyanga</h3>
            <p className="text-foreground/70">
              Deep scalp massage with nourishing oils to strengthen hair roots
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold text-primary mb-0">Herbal Therapy</h3>
            <p className="text-foreground/70">
              Powerful herbs like Bhringraj and Amla for hair rejuvenation
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-primary mb-0">Dosha Balance</h3>
            <p className="text-foreground/70">
              Addressing Pitta-Vata imbalances to prevent hair loss
            </p>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Alopecia;
