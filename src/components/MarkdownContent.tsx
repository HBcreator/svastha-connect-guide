import React, { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"

interface MarkdownContentProps {
  contentPath: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ contentPath }) => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch(contentPath)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error))
  }, [contentPath])

  const processBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong>
      }
      return <span key={i}>{part}</span>
    })
  }

  const renderMarkdown = (text: string) => {
    const sections = text.split('\n\n')
    
    return sections.map((section, index) => {
      // Skip empty sections
      if (!section.trim()) return null

      // Handle headers
      if (section.startsWith('#')) {
        const level = (section.match(/^#+/) || [''])[0].length
        const headerText = section.replace(/^#+\s*/, '').replace(/\*\*/g, '')
        const className = level === 1 
          ? 'text-4xl font-bold text-primary mb-8 mt-12'
          : level === 2 
            ? 'text-3xl font-semibold text-primary mb-6 mt-10 border-b-2 border-primary/20 pb-2'
            : 'text-2xl font-medium text-primary mb-4 mt-8'
        
        return React.createElement(
          `h${level}`,
          { key: index, className: `font-poppins ${className}` },
          headerText
        )
      }
      
      // Handle lists (both bullet and description-style)
      if (section.match(/^[*-]/m) || section.match(/^\*\*[^*]+\*\*/m)) {
        const items = section.split('\n').filter(item => item.trim())
        return (
          <ul key={index} className="space-y-3 mb-8 ml-4">
            {items.map((item, i) => {
              const cleanItem = item.replace(/^[*-]\s*/, '')
              return (
                <li key={i} className="text-muted-foreground leading-relaxed">
                  <span className="inline-flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="flex-1">{processBoldText(cleanItem)}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        )
      }
      
      // Handle numbered lists
      if (section.match(/^\d+\./m)) {
        const items = section.split('\n').map(item => item.replace(/^\d+\.\s*/, ''))
        return (
          <ol key={index} className="list-decimal pl-6 mb-8 space-y-3 text-muted-foreground">
            {items.map((item, i) => (
              <li key={i} className="leading-relaxed">{processBoldText(item)}</li>
            ))}
          </ol>
        )
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-muted-foreground mb-6 leading-relaxed text-justify">
          {processBoldText(section)}
        </p>
      )
    })
  }

  return (
    <div className="prose prose-lg max-w-none">
      {renderMarkdown(content)}
    </div>
  )
}

export default MarkdownContent