import { Footer } from './components/footer'
import { Header } from './components/header'

export default function PerceptionHeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <div className="flex-1">{children}</div>

      <Footer />
    </>
  )
}
