import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const Ayurveda = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/content/services/ayurveda.txt')
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error('Error loading content:', err));
  }, []);

  const renderContent = () => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
        elements.push(<div key={key++} className="h-4" />);
        continue;
      }

      // Sub-headings with ###
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mt-8 mb-4">
            {line.replace('### ', '')}
          </h3>
        );
        continue;
      }

      // Large bold headings (>30 chars) - h2
      const longHeadingMatch = line.match(/^\*\*(.{30,}?)\*\*$/);
      if (longHeadingMatch) {
        elements.push(
          <h2 key={key++} className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-8 mb-6 pb-2 border-b-2 border-primary/20">
            {longHeadingMatch[1]}
          </h2>
        );
        continue;
      }

      // Numbered sections with **text**
      const numberedMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*$/);
      if (numberedMatch) {
        elements.push(
          <h4 key={key++} className="text-lg sm:text-xl font-semibold text-primary mt-6 mb-3">
            {numberedMatch[1]}. {numberedMatch[2]}
          </h4>
        );
        continue;
      }

      // Regular **text** as h4 (section headings)
      const boldHeadingMatch = line.match(/^\*\*(.+?)\*\*$/);
      if (boldHeadingMatch) {
        elements.push(
          <h4 key={key++} className="text-lg sm:text-xl font-semibold text-primary mt-6 mb-3">
            {boldHeadingMatch[1]}
          </h4>
        );
        continue;
      }

      // Bullet points
      if (line.startsWith('*   ') || line.startsWith('-   ')) {
        const bulletText = line.replace(/^[\*\-]\s+/, '');
        const processed = bulletText
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*([^*]+?)\*/g, '<em>$1</em>')
          .replace(/<b>(.+?)<\/b>/g, '<strong>$1</strong>')
          .replace(/<i>(.+?)<\/i>/g, '<em>$1</em>');
        
        elements.push(
          <li key={key++} className="ml-6 mb-2 text-sm sm:text-base md:text-lg leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: processed }} />
          </li>
        );
        continue;
      }

      // Regular paragraphs with inline formatting
      const processed = line
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+?)\*/g, '<em>$1</em>')
        .replace(/<b>(.+?)<\/b>/g, '<strong>$1</strong>')
        .replace(/<i>(.+?)<\/i>/g, '<em>$1</em>');
      
      elements.push(
        <p key={key++} className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          <span dangerouslySetInnerHTML={{ __html: processed }} />
        </p>
      );
    }

    return elements;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
            Ayurveda: Ancient Wisdom for Modern Wellness
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience authentic Ayurvedic healing combining traditional wisdom with modern diagnostics for holistic health
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src="/Services-images/Ayurveda.png"
              alt="Ayurveda Healing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <Card className="p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg mb-8 md:mb-12">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {renderContent()}
          </div>
        </Card>

        {/* Book Your Session CTA */}
        <Card className="p-6 sm:p-8 md:p-10 shadow-lg mb-8 md:mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">
              Begin Your Ayurvedic Journey
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Experience authentic Ayurvedic treatments supervised by expert physicians. Let us guide you towards optimal health and balance.
            </p>
            <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-primary/90 transition-colors">
              Book Your Ayurveda Session
            </button>
          </div>
        </Card>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Traditional Wisdom</h3>
            <p className="text-muted-foreground">
              5000+ years of authentic Ayurvedic knowledge and practices
            </p>
          </Card>
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Dosha Balance</h3>
            <p className="text-muted-foreground">
              Personalized treatments to balance Vata, Pitta, and Kapha
            </p>
          </Card>
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🔬</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Modern Diagnosis</h3>
            <p className="text-muted-foreground">
              Advanced lab tests and imaging for accurate assessment
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Ayurveda;