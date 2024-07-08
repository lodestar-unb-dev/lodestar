import Image from 'next/image'
import LogoIcon from '../assets/icons/logo.svg'
import { HeaderLink } from './headerLink'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#193F77]">
      <section className="mx-auto flex max-w-[1120px] items-center justify-center gap-7 px-5 py-4 min-[560px]:justify-between min-[560px]:gap-14">
        <Image
          src={LogoIcon}
          className="hidden w-20 min-[560px]:block"
          alt="icon"
        />

        <nav className="flex gap-6 min-[960px]:gap-12">
          <HeaderLink href="/projects/perception">Home</HeaderLink>

          <HeaderLink href="#">Members</HeaderLink>

          <HeaderLink href="#">Gallery</HeaderLink>
        </nav>
      </section>
    </header>
  )
}
