import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ahmed Dahir | Full Stack Developer',
  description: 'Professional portfolio showcasing web development projects and services',
  keywords: 'web developer, full stack, react, next.js, portfolio',
  openGraph: {
    title: 'Ahmed Dahir | Full Stack Developer',
    description: 'Professional portfolio showcasing web development projects and services',
    url: 'https://ahmeddahir.dev',
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-primary text-light">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
