import Image from 'next/image'
import LogoIcon from '../assets/icons/logo.svg'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Instagram, Mail, Youtube } from 'lucide-react'

export function Footer() {
  const t = useTranslations('Projects.Perception.Footer')

  return (
    <footer className="bg-unbBlack-100 ">
      <div className="mx-auto max-w-[1200px] px-5 pb-7 pt-10">
        <div className="flex justify-between">
          <Link
            href="/projects/perception"
            className="hidden flex-col gap-3 min-[560px]:flex"
          >
            <Image src={LogoIcon} className="h-10 w-min" alt="icon" />

            <span className="text-lg font-medium">Perception</span>

            <span className="text-xs font-light text-unbBlack-25">
              {t('description')}
            </span>
          </Link>

          <div className="flex gap-9">
            <div className="flex flex-col gap-3 text-xs">
              <span className="font-semibold uppercase">
                {t('Proposals.title')}
              </span>
              <Link href="/projects/perception/actions/perception-system">
                {t('Proposals.k34 System')}
              </Link>
              <p>{t('Proposals.cerrado hotspot')}</p>
              <p>{t('Proposals.data platform structure')}</p>
            </div>

            <div className="flex flex-col gap-3 text-xs">
              <span className="font-semibold uppercase">
                {t('ResearchGroup.title')}
              </span>
              <Link href="/projects/perception/mission">
                {t('ResearchGroup.mission')}
              </Link>
              <Link href="/projects/perception/who-we-are">
                {t('ResearchGroup.partners')}
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-xs">
              <span className="font-semibold uppercase">
                {t('Media.title')}
              </span>
              <Link href="/projects/perception/recent-activities">
                {t('Media.recentActivies')}
              </Link>
              <Link href="/projects/perception/contact">
                {t('Media.contact')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-11 h-px w-full bg-unbBlack-75" />

        <div className="mt-4 flex justify-between">
          <div className="text-[0.625rem] leading-normal text-unbBlack-50">
            2024 - LODESTAR UnB
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/lodestar_unb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.youtube.com/channel/UCkbKnVEH-IkNNB87Kn6CUtg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={24} />
            </a>

            <a
              href="mailto:lodestar@aerospace.unb.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={23} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
