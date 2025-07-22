import Image from 'next/image'
import LogoIcon from '../assets/icons/logo.svg'
import { HeaderLink } from './headerLink'
import { Link } from '@/i18n/routing'
import { LanguageSelector } from './language-selector'
import { useTranslations } from 'next-intl'
import { DropdownMenu } from 'radix-ui'
import { ChevronDown } from 'lucide-react'

export function Header() {
  const t = useTranslations('Projects.Perception.Header')

  return (
    <header className="sticky top-0 z-50 border border-unbBlue-400 bg-unbBlue-400 font-montserrat">
      <section className="mx-auto flex max-w-[1200px] items-center justify-center px-5 py-4 min-[560px]:justify-between min-[560px]:gap-14">
        <nav className="flex w-full items-center justify-center gap-6 min-[560px]:justify-between md:gap-6 min-[960px]:gap-14">
          <Link href="/projects/perception" className="h-5 w-fit md:h-9">
            <Image src={LogoIcon} className="h-5 w-fit md:h-9" alt="icon" />
          </Link>

          <div className="center flex list-none items-center gap-3 text-sm md:gap-16">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="group flex items-center gap-1 hover:text-unbBlack-25 md:text-xl">
                {t('Initiatives.title')}
                <ChevronDown
                  size={20}
                  className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  sideOffset={5}
                  className="z-[60] rounded bg-white shadow-sm outline-none will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                >
                  <ul className="flex w-56 flex-col gap-3 p-4">
                    <li>
                      <DropdownMenu.Item asChild>
                        <HeaderLink
                          href="/projects/perception/initiatives/perception-system"
                          className="flex flex-col gap-1 text-xl text-unbBlue-400 hover:text-unbBlue-400/50"
                        >
                          {t('Initiatives.perception System.title')}
                          <span className="text-xs text-black/50">
                            {t('Initiatives.perception System.description')}
                          </span>
                        </HeaderLink>
                      </DropdownMenu.Item>
                    </li>

                    <li>
                      <DropdownMenu.Item asChild>
                        <div
                          // href="/projects/perception/initiatives/cerrado-hotspot"
                          className="flex flex-col gap-1 text-xl text-unbBlue-400 opacity-50"
                        >
                          {t('Initiatives.digital twin.title')}
                          <span className="text-xs text-black/50">
                            {t('Initiatives.digital twin.description')}
                          </span>
                        </div>
                      </DropdownMenu.Item>
                    </li>

                    <li>
                      <DropdownMenu.Item asChild>
                        <div
                          // href="/projects/perception/initiatives/data-platform-structure"
                          className="flex flex-col gap-1 text-xl text-unbBlue-400 opacity-50"
                        >
                          {t('Initiatives.data platform structure.title')}
                          <span className="text-xs text-black/50">
                            {t(
                              'Initiatives.data platform structure.description',
                            )}
                          </span>
                        </div>
                      </DropdownMenu.Item>
                    </li>
                  </ul>

                  <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="group flex items-center gap-1 hover:text-unbBlack-25 md:text-xl">
                {t('About.title')}
                <ChevronDown
                  size={20}
                  className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  sideOffset={5}
                  className="z-[60] rounded bg-white shadow-sm outline-none will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                >
                  <ul className="flex w-56 flex-col gap-3 p-4">
                    <li>
                      <DropdownMenu.Item className="flex flex-col gap-1 text-xl text-unbBlue-400">
                        {t('About.overview.title')}:
                        <div className="flex flex-col">
                          <HeaderLink
                            href="/projects/perception/mission"
                            className="text-sm text-unbBlack-100 opacity-50 hover:opacity-100"
                          >
                            {t('About.overview.link-1')}
                          </HeaderLink>
                          <HeaderLink
                            href="/projects/perception/who-we-are"
                            className="text-sm text-unbBlack-100 opacity-50 hover:opacity-100"
                          >
                            {t('About.overview.link-2')}
                          </HeaderLink>
                        </div>
                      </DropdownMenu.Item>
                    </li>

                    <li>
                      <DropdownMenu.Item className="flex flex-col gap-1 text-xl text-unbBlue-400">
                        {t('About.media.title')}:
                        <div className="flex flex-col">
                          <HeaderLink
                            href="/projects/perception/recent-activities"
                            className="text-sm text-unbBlack-100 opacity-50 hover:opacity-100"
                          >
                            {t('About.media.link-1')}
                          </HeaderLink>
                        </div>
                      </DropdownMenu.Item>
                    </li>
                  </ul>

                  <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <HeaderLink
              className="text-sm hover:text-unbBlack-25 md:text-xl"
              href="/projects/perception/contact"
            >
              {t('contact')}
            </HeaderLink>
          </div>

          <LanguageSelector />
        </nav>
      </section>
    </header>
  )
}
