import React, { useEffect, useState } from "react"
import Layout from "@/components/Layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function YogaMeditationService() {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    fetch('/content/services/Yoga and Meditation.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error))
  }, [])

  // Function to parse and render content with proper styling
  const renderContent = () => {
    if (!content) return null

    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let key = 0

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()
      
      // Sub heading (###)
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary/90 mb-3 md:mb-4 mt-6 md:mt-8 font-poppins">
            {line.replace('### ', '')}
          </h3>
        )
      }
      // **Heading text** - Large Blue Heading (h2)
      else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 30) {
        const text = trimmedLine.replace(/\*\*/g, '')
        elements.push(
          <h2 key={key++} className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6 mt-8 md:mt-12 font-poppins border-b-2 border-primary/20 pb-2 md:pb-3">
            {text}
          </h2>
        )
      }
      // **text** - Bold/Section heading (h4)
      else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        const text = trimmedLine.replace(/\*\*/g, '')
        elements.push(
          <h4 key={key++} className="text-lg sm:text-xl font-semibold text-primary/80 mb-2 md:mb-3 mt-4 md:mt-6">
            {text}
          </h4>
        )
      }
      // Bullet points with * (asterisk)
      else if (trimmedLine.startsWith('*   ')) {
        const bulletText = trimmedLine.substring(4).trim()
        // Process inline formatting: **text** → bold, *text* → italic, <b> tags
        const processed = bulletText
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*([^*]+?)\*/g, '<em>$1</em>')
        
        elements.push(
          <li key={key++} className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-2 ml-6">
            <span dangerouslySetInnerHTML={{ __html: processed }} />
          </li>
        )
      }
      // Regular bullet points
      else if (trimmedLine.startsWith('-')) {
        const bulletText = trimmedLine.substring(1).trim()
        // Process inline formatting
        const processed = bulletText
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*([^*]+?)\*/g, '<em>$1</em>')
        
        elements.push(
          <li key={key++} className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-2 ml-6">
            <span dangerouslySetInnerHTML={{ __html: processed }} />
          </li>
        )
      }
      // Empty line
      else if (trimmedLine === '') {
        elements.push(<div key={key++} className="h-2 md:h-3"></div>)
      }
      // Regular paragraph - Process inline formatting
      else if (trimmedLine !== '') {
        const processed = trimmedLine
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // **text** → bold
          .replace(/\*([^*]+?)\*/g, '<em>$1</em>') // *text* → italic
        
        elements.push(
          <p key={key++} className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-3 md:mb-4">
            <span dangerouslySetInnerHTML={{ __html: processed }} />
          </p>
        )
      }
    })

    return elements
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
            Yoga & Meditation: Path to Inner Peace
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Harmonize body, mind, and spirit through ancient practices of yoga and meditation
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src="/Services-images/Yoga and Meditation.png"
              alt="Yoga and Meditation"
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
              Start Your Wellness Journey
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Join our expert-led yoga and meditation sessions to transform your physical and mental well-being. Begin your journey to inner peace today.
            </p>
            <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-primary/90 transition-colors">
              Book Your Yoga Session
            </button>
          </div>
        </Card>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🧘‍♀️</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Asana Practice</h3>
            <p className="text-muted-foreground">
              Master traditional yoga postures for strength and flexibility
            </p>
          </Card>
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌬️</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Pranayama</h3>
            <p className="text-muted-foreground">
              Learn breath control techniques for vitality and calm
            </p>
          </Card>
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Meditation</h3>
            <p className="text-muted-foreground">
              Cultivate mindfulness and achieve mental clarity
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
