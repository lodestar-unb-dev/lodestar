import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'

import '../globals.css'
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

export default async function RootLayout(
  props: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  return (
    <html lang={locale}>
      <body className={`${barlow.variable} font-barlow flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
