import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Space Portfolio',
  description: 'A modern space-themed portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-space-dark text-white min-h-screen`}>
        <div className="fixed inset-0 bg-space-gradient z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
} 