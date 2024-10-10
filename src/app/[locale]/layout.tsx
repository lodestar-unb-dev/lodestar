import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './globals.css'
import './embla.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'LODESTAR UnB',
  icons: {
    icon: '/images/lodestar/favicon.png',
  },
  openGraph: {
    title: 'Lodestar UnB',
    url: 'https://lodestar.aerospace.unb.br',
    siteName: 'Lodestar UnB',
    images: [
      {
        url: 'http://lodestar.aerospace.unb.br/images/lodestar/og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en',
    type: 'website',
  },
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body className={twMerge(barlow.variable, 'flex flex-col font-barlow')}>
        {children}
      </body>
    </html>
  )
}
