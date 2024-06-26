import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './globals.css'

import { Header } from './components/header'
import { Footer } from './components/footer'

const barlow = Barlow({ subsets: ['latin'], weight: ['300', '400', '500'] })

export const metadata: Metadata = {
  title: 'LODESTAR UnB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge(barlow.className, 'flex flex-col')}>
        <Header />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  )
}
