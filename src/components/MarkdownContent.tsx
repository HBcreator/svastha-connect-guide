import React, { useEffect, useState } from 'react'

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

  const processInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i}>{part.slice(1, -1)}</em>
      }
      return <span key={i}>{part}</span>
    })
  }

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let listItems: { items: string[]; marker: '*' | '-' } | null = null

    const flushList = () => {
      if (!listItems) return
      elements.push(
        <ul key={`ul-${elements.length}`} className="space-y-2 mb-6 ml-4">
          {listItems.items.map((item, i) => (
            <li key={i} className="leading-relaxed" style={{ color: '#7F543D' }}>
              <span className="inline-flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span className="flex-1">{processInline(item)}</span>
              </span>
            </li>
          ))}
        </ul>
      )
      listItems = null
    }

    for (const raw of lines) {
      const line = raw.trim()
      if (!line) {
        flushList()
        elements.push(<div key={`sp-${elements.length}`} className="h-4" />)
        continue
      }

      if (/^[*-]\s+###\s+/.test(line)) {
        flushList()
        const headerText = line.replace(/^[*-]\s+###\s+/, '')
        elements.push(<h3 key={`h3-${elements.length}`} className="text-2xl font-medium text-primary">{headerText}</h3>)
        continue
      }

      if (/^###\s+/.test(line)) {
        flushList()
        const headerText = line.replace(/^###\s+/, '')
        elements.push(<h3 key={`h3-${elements.length}`} className="text-2xl font-medium text-primary">{headerText}</h3>)
        continue
      }

      if (/^\*\*\s*\d+\.\s+.*\*\*$/.test(line)) {
        flushList()
        const inner = line.replace(/^\*\*\s*/, '').replace(/\s*\*\*$/, '')
        elements.push(<div key={`step-${elements.length}`} className="text-xl font-semibold text-primary">{inner}</div>)
        continue
      }

      if (/^[*-]\s+\*\*.*\*\*$/.test(line)) {
        flushList()
        const innerBold = line.replace(/^[*-]\s+/, '')
        const innerText = innerBold.slice(2, -2)
        if (innerText.length > 30) {
          elements.push(<div key={`title-${elements.length}`} className="text-3xl font-semibold text-primary border-b-2 border-primary/20 pb-2">{innerText}</div>)
        } else {
          elements.push(<div key={`sub-${elements.length}`} className="text-lg font-semibold text-primary">{innerText}</div>)
        }
        continue
      }

      if (/^\*\*.*\*\*$/.test(line)) {
        flushList()
        const inner = line.slice(2, -2)
        if (inner.length > 30) {
          elements.push(<div key={`title-${elements.length}`} className="text-3xl font-semibold text-primary border-b-2 border-primary/20 pb-2">{inner}</div>)
        } else {
          elements.push(<div key={`sub-${elements.length}`} className="text-lg font-semibold text-primary">{inner}</div>)
        }
        continue
      }

      if (/^[*-]\s+/.test(line)) {
        const marker = line.startsWith('*') ? '*' : '-'
        const cleanItem = line.replace(/^[*-]\s+/, '')
        if (listItems && listItems.marker === marker) {
          listItems.items.push(cleanItem)
        } else {
          flushList()
          listItems = { items: [cleanItem], marker }
        }
        continue
      }

      flushList()
      elements.push(<p key={`p-${elements.length}`} className="leading-relaxed" style={{ color: '#7F543D' }}>{processInline(line)}</p>)
    }

    flushList()
    return elements
  }

  return (
    <div className="prose prose-lg max-w-none">
      {renderMarkdown(content)}
    </div>
  )
}

export default MarkdownContent
