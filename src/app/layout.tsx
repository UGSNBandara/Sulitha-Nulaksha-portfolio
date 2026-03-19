import type { Metadata, Viewport } from 'next'
import { Raleway, Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
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
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth">
      <body className={`${raleway.className} ${inter.className} min-h-full w-full`} style={{ backgroundColor: 'var(--color-void)', color: 'var(--color-cream)' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 