import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './globals.css'
import './embla.css'

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
        {children}
      </body>
    </html>
  )
}
