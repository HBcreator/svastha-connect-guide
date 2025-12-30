import React, { useEffect, useState } from 'react'

interface MarkdownContentProps {
  contentPath: string;
  h3ClassName?: string;
  titleClassName?: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ contentPath, h3ClassName, titleClassName }) => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch(contentPath)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error))
  }, [contentPath])

  const renderWithBreaks = (text: string) => {
    const nodes: React.ReactNode[] = []
    const regex = /(\(\s*mob\s*<br\s*\/?>\))|(mob\s*<br\s*\/?>)|(<br\s*\/?>)/gi
    let lastIndex = 0
    let match: RegExpExecArray | null
    while ((match = regex.exec(text)) !== null) {
      const start = match.index
      if (start > lastIndex) {
        nodes.push(text.slice(lastIndex, start))
      }
      if (match[1] || match[2]) {
        nodes.push(<br key={`mobbr-${start}`} className="block md:hidden" />)
      } else {
        nodes.push(<br key={`br-${start}`} />)
      }
      lastIndex = regex.lastIndex
    }
    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex))
    }
    return nodes
  }

  const processInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const inner = part.slice(2, -2)
        return <strong key={i} className="font-semibold">{renderWithBreaks(inner)}</strong>
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        const inner = part.slice(1, -1)
        return <em key={i}>{renderWithBreaks(inner)}</em>
      }
      return <span key={i}>{renderWithBreaks(part)}</span>
    })
  }

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let listItems: { items: string[]; marker: '*' | '-' } | null = null

    const h3Cls = h3ClassName ?? "text-2xl font-medium text-primary"
    const titleCls = titleClassName ?? "text-3xl font-semibold text-primary border-b-2 border-primary/20 pb-2"

    const flushList = () => {
      if (!listItems) return
      elements.push(
        <ul key={`ul-${elements.length}`} className="not-prose space-y-1 mb-3 ml-4">
          {listItems.items.map((item, i) => (
          <li key={i} className="leading-normal" style={{ color: '#7F543D' }}>
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
        elements.push(<div key={`sp-${elements.length}`} className="h-2" />)
        continue
      }

      if (/^[*-]\s+###\s+/.test(line)) {
        flushList()
        const headerText = line.replace(/^[*-]\s+###\s+/, '')
        elements.push(<h3 key={`h3-${elements.length}`} className={h3Cls}>{renderWithBreaks(headerText)}</h3>)
        continue
      }

      if (/^###\s+/.test(line)) {
        flushList()
        const headerText = line.replace(/^###\s+/, '')
        elements.push(<h3 key={`h3-${elements.length}`} className={h3Cls}>{renderWithBreaks(headerText)}</h3>)
        continue
      }

      if (/^\*\*\s*\d+\.\s+.*\*\*$/.test(line)) {
        flushList()
        const inner = line.replace(/^\*\*\s*/, '').replace(/\s*\*\*$/, '')
        elements.push(<div key={`step-${elements.length}`} className="text-xl font-semibold text-primary">{renderWithBreaks(inner)}</div>)
        continue
      }

      if (/^[*-]\s+\*\*.*\*\*$/.test(line)) {
        flushList()
        const innerBold = line.replace(/^[*-]\s+/, '')
        const innerText = innerBold.slice(2, -2)
        if (innerText.length > 30) {
          elements.push(<div key={`title-${elements.length}`} className={titleCls}>{renderWithBreaks(innerText)}</div>)
        } else {
          elements.push(<div key={`sub-${elements.length}`} className="text-lg font-semibold text-primary">{renderWithBreaks(innerText)}</div>)
        }
        continue
      }

      if (/^\*\*.*\*\*$/.test(line)) {
        flushList()
        const inner = line.slice(2, -2)
        if (inner.length > 30) {
          elements.push(<div key={`title-${elements.length}`} className={titleCls}>{renderWithBreaks(inner)}</div>)
        } else {
          elements.push(<div key={`sub-${elements.length}`} className="text-lg font-semibold text-primary">{renderWithBreaks(inner)}</div>)
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
      elements.push(<p key={`p-${elements.length}`} className="leading-normal" style={{ color: '#7F543D' }}>{processInline(line)}</p>)
    }

    flushList()
    return elements
  }

  return <div className="max-w-none" style={{ whiteSpace: 'pre-wrap' }}>{renderMarkdown(content)}</div>
}

export default MarkdownContent
