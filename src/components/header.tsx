import Image from 'next/image'
import LogoIcon from '@/app/[locale]/favicon.png'
import { HeaderLink } from './headerLink'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border border-unbBlue-200 bg-unbBlue-600">
      <section className="mx-auto flex max-w-[1120px] items-center justify-center gap-7 px-5 py-4 min-[560px]:justify-between min-[560px]:gap-14">
        <nav className="flex gap-7 min-[960px]:gap-14">
          <HeaderLink href="/">Home</HeaderLink>

          <HeaderLink href="/projects">Projects</HeaderLink>
        </nav>

        <Image
          src={LogoIcon}
          className="hidden w-9 min-[560px]:block"
          alt="icon"
        />

        <nav className="flex gap-7 min-[960px]:gap-14">
          <HeaderLink href="/about">About</HeaderLink>

          <HeaderLink href="/contact">Contact</HeaderLink>
        </nav>
      </section>
    </header>
  )
}
