import { Montserrat } from 'next/font/google'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { twMerge } from 'tailwind-merge'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-montserrat',
})

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
