import { Montserrat } from 'next/font/google'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { twMerge } from 'tailwind-merge'
import { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl'
import get from 'lodash.get'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
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
  const messages = useMessages()

  const translationMessages = {
    Projects: {
      Perception: {
        LP: {
          'recent-highlights': get(
            messages,
            'Projects.Perception.LP.recent-highlights',
          ) as AbstractIntlMessages,
        },
        RecentActivities: get(
          messages,
          'Projects.Perception.RecentActivities',
        ) as AbstractIntlMessages,
        Initiatives: {
          'perception-system': {
            markers: get(
              messages,
              'Projects.Perception.Initiatives.perception-system.markers',
            ) as AbstractIntlMessages,
          },
        },
      },
    },
  }

  return (
    <NextIntlClientProvider messages={translationMessages}>
      <div
        className={twMerge(
          montserrat.variable,
          'font-montserrat bg-unbBlack-5 flex min-h-screen flex-col',
        )}
      >
        <Header />

        <div className="flex flex-1 flex-col">{children}</div>

        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
