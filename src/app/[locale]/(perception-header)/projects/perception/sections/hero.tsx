import Image from 'next/image'

import heroBg from '../assets/images/hero-bg.jpg'
import logoText from '../assets/icons/logo-text.svg'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('Projects.Perception.HomePage.Hero')

  return (
    <section className="relative h-full">
      <Image
        className="aspect-video max-h-[90vh] w-full object-cover"
        src={heroBg}
        alt=""
      />

      <div className="from-unbBlack-100/0 to-unbBlack-100 absolute inset-0 bg-linear-to-b" />

      <div className="absolute top-0 left-1/2 mx-auto flex h-full w-full max-w-300 -translate-x-1/2 items-center px-5">
        <div className="space-y-4 md:space-y-14">
          <Image
            src={logoText}
            className="max-h-10 w-fit md:max-h-20"
            alt="perception"
          />
          <h1 className="sr-only">Projeto Perception</h1>

          <div className="md:w-1/2 md:space-y-2">
            <h2 className="text-sm font-bold md:text-xl">{t('subtitle')}</h2>

            <h3 className="text-xs md:text-lg">{t('description')}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
