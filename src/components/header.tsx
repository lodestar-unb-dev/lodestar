import Image from 'next/image'
import LogoIcon from '@/app/[locale]/favicon.png'
import { HeaderLink } from './headerLink'
import { useTranslations } from 'next-intl'
import { LanguageSelector } from '@/app/[locale]/(perception-header)/projects/perception/components/language-selector'

export function Header() {
  const t = useTranslations('Header')

  return (
    <header className="border-unbBlue-200 bg-unbBlue-600 sticky top-0 z-50 border">
      <section className="mx-auto flex max-w-[1120px] items-center justify-center gap-7 px-5 py-4 min-[560px]:justify-between min-[560px]:gap-14">
        <nav className="flex gap-7 min-[960px]:gap-14">
          <HeaderLink href="/">{t('home')}</HeaderLink>

          <HeaderLink href="/projects">{t('projects')}</HeaderLink>
        </nav>

        <Image
          src={LogoIcon}
          className="hidden w-9 min-[560px]:block"
          alt="icon"
        />

        <nav className="flex items-center space-x-6 min-[960px]:space-x-14">
          <HeaderLink href="/about">{t('about')}</HeaderLink>

          <HeaderLink href="/contact">{t('contact')}</HeaderLink>

          <LanguageSelector />
        </nav>
      </section>
    </header>
  )
}
