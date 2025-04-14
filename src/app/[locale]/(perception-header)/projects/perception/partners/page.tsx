import { useTranslations } from 'next-intl'
import Image from 'next/image'
import partnersImg from '../assets/images/our-partners.jpg'
import beAPartnerImg from '../assets/images/be-a-partner.jpg'
import logo from '../assets/icons/logo-alt.svg'
import unbLogo from '../assets/images/unb.jpg'
import fapLogo from '../assets/images/fap.avif'
import lbaLogo from '../assets/images/lba.png'
import ueaLogo from '../assets/images/uea.png'
import vigoLogo from '../assets/images/vigo.png'
import alenLogo from '../assets/images/alen.png'

export default function PartnersPage() {
  const t = useTranslations('Projects.Perception.Partners')

  return (
    <main>
      <section className="relative flex min-h-56 flex-col items-center justify-center px-5 text-center md:min-h-[384px]">
        <h1 className="text-2xl font-semibold uppercase md:text-4xl">
          {t('headerTitle')}
        </h1>
        <Image
          className="absolute inset-0 -z-10 size-full object-cover"
          src={partnersImg}
          alt="our partners"
        />
        <div className="absolute inset-0 -z-10 size-full bg-gradient-to-b from-unbBlack-100/0 to-unbBlue-400" />
      </section>
      <div className="bg-unbBlack-0">
        <div className="bg-unbBlue-400">
          <div className="mx-auto max-w-[1200px] space-y-3 px-5 py-10 text-sm md:text-base lg:py-20">
            <p>{t('headerFirstDescription')}</p>

            <p>{t('headerSecondDescription')}</p>
          </div>
        </div>
        <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-5 py-10 lg:py-20">
          <h2 className="text-left text-xl font-semibold uppercase text-[#1A3E76] md:text-3xl">
            {t('title')}
          </h2>

          <Image src={logo} alt="perception" className="w-[216px]" />

          <div className="flex max-w-5xl flex-col flex-wrap justify-center gap-5 text-unbBlue-400">
            <div className="flex flex-col items-center gap-2">
              <p className="font-medium uppercase">{t('firstGroupTitle')}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.unb.br/"
              >
                <Image
                  className="h-20 w-auto mix-blend-multiply"
                  src={unbLogo}
                  alt="unb"
                />
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-medium uppercase">{t('secondGroupTitle')}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fap.df.gov.br/"
              >
                <Image
                  className="h-20 w-auto mix-blend-multiply"
                  src={fapLogo}
                  alt="fapdf"
                />
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-medium uppercase">{t('thirdGroupTitle')}</p>
              <div className="flex flex-wrap items-center justify-center gap-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lba.inpa.gov.br/"
                >
                  <Image className="h-32 w-auto" src={lbaLogo} alt="LBA" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.uea.edu.br/"
                >
                  <Image
                    className="h-20 w-auto mix-blend-multiply"
                    src={ueaLogo}
                    alt="UEA"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://alen.space/"
                >
                  <Image className="h-20 w-auto" src={alenLogo} alt="alen" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.uvigo.gal/es"
                >
                  <Image
                    className="h-32 w-auto"
                    src={vigoLogo}
                    alt="UniversidadeVigo"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="relative">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-14 px-5 py-5 md:min-h-[487px] lg:py-10">
          <div className="flex max-w-[400px] flex-col gap-4 text-center text-lg md:text-2xl">
            <span>{t('footer.title')}</span>
            <span>{t('footer.description')}</span>
          </div>

          <a
            href="mailto:lodestar@aerospace.unb.br"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-perceptionOrange-300 px-4 py-3 uppercase transition-colors hover:bg-unbBlack-0 hover:text-perceptionOrange-300"
          >
            {t('footer.cta')}
          </a>
        </div>
        <Image
          className="absolute inset-0 -z-10 size-full object-cover"
          src={beAPartnerImg}
          alt="be a partner"
        />
        <div className="absolute inset-0 -z-10 size-full bg-gradient-to-b from-unbBlack-100/20 to-unbBlack-100" />
      </section>
    </main>
  )
}
