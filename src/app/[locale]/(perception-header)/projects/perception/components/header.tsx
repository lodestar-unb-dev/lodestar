import Image from 'next/image'
import LogoIcon from '../assets/icons/logo.svg'
import { HeaderLink } from './headerLink'
import { Link } from '@/i18n/routing'
import { LanguageSelector } from './language-selector'
import { useTranslations } from 'next-intl'

export function Header() {
  const t = useTranslations('Projects.Perception.Header')

  return (
    <header className="sticky top-0 z-50 border border-unbBlue-200 bg-unbBlue-600 font-barlow">
      <section className="mx-auto flex max-w-[1120px] items-center justify-center gap-7 px-5 py-4 min-[560px]:justify-between min-[560px]:gap-14">
        <nav className="flex w-full items-center justify-center gap-6 min-[560px]:justify-between min-[960px]:gap-14">
          <div className="space-x-6 min-[960px]:space-x-14">
            <HeaderLink href="/">{t('lodestar')}</HeaderLink>

            <HeaderLink href="/projects">{t('projects')}</HeaderLink>
          </div>

          <Link
            href="/projects/perception"
            className="hidden h-9 min-[560px]:block"
          >
            <Image
              src={LogoIcon}
              className="hidden h-9 min-[560px]:block"
              alt="icon"
            />
          </Link>

          <div className="flex items-center space-x-6 min-[960px]:space-x-14">
            <HeaderLink href="/projects/perception/members">
              {t('members')}
            </HeaderLink>

            <HeaderLink href="/projects/perception/gallery">
              {t('gallery')}
            </HeaderLink>

            <LanguageSelector />
          </div>
        </nav>
      </section>
    </header>
  )
}
