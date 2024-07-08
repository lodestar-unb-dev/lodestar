import { Montserrat } from 'next/font/google'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { twMerge } from 'tailwind-merge'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
})

export default function PerceptionHeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={twMerge(montserrat.className, 'flex min-h-screen flex-col')}
    >
      <Header />

      <div className="flex flex-1 flex-col">{children}</div>

      <Footer />
    </div>
  )
}
