import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vishvendra Arya - Software Engineer & AI Engineer',
  description:
    'Vishvendra Arya (Vish) - Software Engineer and AI Engineer at MoonDive. Building AI products that solve real problems. Based in Noida, India.',
  keywords: [
    'Vishvendra Arya',
    'Software Engineer',
    'AI Engineer',
    'MoonDive',
    'Next.js',
    'LLM',
    'RAG',
    'Noida',
  ],
  authors: [{ name: 'Vishvendra Arya' }],
  openGraph: {
    title: 'Vishvendra Arya - Software Engineer & AI Engineer',
    description: 'Building AI products that solve real problems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
