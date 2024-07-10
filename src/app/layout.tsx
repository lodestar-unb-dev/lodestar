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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge(barlow.variable, 'flex flex-col font-barlow')}>
        {children}
      </body>
    </html>
  )
}
