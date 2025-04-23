import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sulitha - Portfolio',
  description: 'Computer Engineering Student passionate about AI/ML',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} min-h-full w-full bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 