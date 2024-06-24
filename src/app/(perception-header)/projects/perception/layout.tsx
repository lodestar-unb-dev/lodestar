import { Montserrat } from 'next/font/google'
import { Footer } from './components/footer'
import { Header } from './components/header'

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
    <div className={montserrat.className}>
      <Header />

      <div className="flex-1">{children}</div>

      <Footer />
    </div>
  )
}
