import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function DefaultHeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <div className="bg-unbBlack-5 flex-1">{children}</div>

      <Footer />
    </>
  )
}
