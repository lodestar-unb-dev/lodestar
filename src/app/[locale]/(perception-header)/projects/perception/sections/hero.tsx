import Image from 'next/image'

import heroBg from '../assets/images/hero-bg.jpg'
import logoText from '../assets/icons/logo-text.svg'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('Projects.Perception.HomePage.Hero')

  return (
    <section className="relative h-full">
      <Image
        className="aspect-[16/9] max-h-[90vh] w-full object-cover"
        src={heroBg}
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-b from-unbBlack-100/0 to-unbBlack-100" />

      <div className="absolute left-1/2 top-0 mx-auto flex h-full w-full max-w-[1200px] -translate-x-1/2 items-center px-5">
        <div className="space-y-14">
          <Image src={logoText} className="max-h-20 w-fit" alt="perception" />
          <h1 className="sr-only">Projeto Perception</h1>

          <div className="w-1/2 space-y-2">
            <h2 className="text-xl font-bold">{t('subtitle')}</h2>

            <h3 className="text-lg">{t('description')}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
