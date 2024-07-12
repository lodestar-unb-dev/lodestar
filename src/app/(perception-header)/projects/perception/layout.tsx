import { Montserrat } from 'next/font/google'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { twMerge } from 'tailwind-merge'
import { Metadata } from 'next'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Perception',
  icons: {
    icon: '/images/perception/favicon.png',
  },
  openGraph: {
    title: 'Perception',
    url: 'https://lodestar.aerospace.unb.br/projects/perception',
    siteName: 'Project Perception',
    images: [
      {
        url: 'http://lodestar.aerospace.unb.br/images/perception/og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en',
    type: 'website',
  },
}

export default function PerceptionHeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={twMerge(
        montserrat.variable,
        'flex min-h-screen flex-col font-montserrat',
      )}
    >
      <Header />

      <div className="flex flex-1 flex-col">{children}</div>

      <Footer />
    </div>
  )
}
