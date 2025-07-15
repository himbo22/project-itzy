'use client'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
interface props {
  text: string
}

export default function MarkDown({ text }: props) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
}
