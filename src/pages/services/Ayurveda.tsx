import React, { useEffect, useState } from "react"
import Layout from "@/components/Layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AyurvedaService() {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    fetch('/content/ayurveda.txt')
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
      
      // Main heading (##)
      if (line.startsWith('## ') && !line.startsWith('### ')) {
        elements.push(
          <h2 key={key++} className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6 mt-8 md:mt-12 font-poppins border-b-2 border-primary/20 pb-2 md:pb-3">
            {line.replace('## ', '')}
          </h2>
        )
      }
      // Sub heading (###)
      else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary/90 mb-3 md:mb-4 mt-6 md:mt-8 font-poppins">
            {line.replace('### ', '')}
          </h3>
        )
      }
      // Section headings that end with colon (like "Morning Awakening:")
      else if (trimmedLine.endsWith(':') && trimmedLine.length < 80 && !line.startsWith(' ')) {
        elements.push(
          <h4 key={key++} className="text-lg sm:text-xl font-semibold text-primary/80 mb-2 md:mb-3 mt-4 md:mt-6">
            {trimmedLine}
          </h4>
        )
      }
      // Empty line
      else if (trimmedLine === '') {
        elements.push(<div key={key++} className="h-2 md:h-3"></div>)
      }
      // Regular paragraph
      else if (trimmedLine !== '') {
        elements.push(
          <p key={key++} className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-3 md:mb-4">
            {line}
          </p>
        )
      }
    })

    return elements
  }

  return (
    <Layout>
      <div className="container mx-auto py-6 md:py-12 px-3 md:px-4">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 font-poppins px-2">
            Authentic Ayurvedic Excellence in India
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Discover the ancient wisdom of Ayurveda combined with modern diagnostic excellence
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg md:rounded-xl shadow-card">
            <img
              src="/Services-images/Ayurveda.png"
              alt="Ayurvedic herbs and treatments"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Main Content */}
        <Card className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 shadow-card bg-card">
          <div className="space-y-2">
            {renderContent()}
          </div>

          {/* Call to Action */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border">
            <div className="text-center space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-primary font-poppins px-2">
                Begin Your Healing Journey Today
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                Experience authentic Ayurvedic treatments tailored to your unique constitution. 
                Our experienced physicians are ready to guide you towards optimal health.
              </p>
              <Button
                className="bg-primary text-white hover:bg-primary/90 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg mt-4 md:mt-6 w-full sm:w-auto"
                onClick={() => window.location.href = '#consultation'}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Info Cards */}
        <div className="max-w-5xl mx-auto mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-3 md:px-0">
          <Card className="p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">🌿</div>
            <h3 className="font-semibold text-primary mb-1 md:mb-2 text-base md:text-lg">Ancient Wisdom</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Traditional Ayurvedic practices passed down through generations
            </p>
          </Card>
          <Card className="p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">🔬</div>
            <h3 className="font-semibold text-primary mb-1 md:mb-2 text-base md:text-lg">Modern Diagnosis</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Advanced lab tests and imaging for accurate assessment
            </p>
          </Card>
          <Card className="p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">👨‍⚕️</div>
            <h3 className="font-semibold text-primary mb-1 md:mb-2 text-base md:text-lg">Expert Care</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Experienced physicians and skilled therapists
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  )
}