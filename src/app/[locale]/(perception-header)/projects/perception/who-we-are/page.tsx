import { useTranslations } from 'next-intl'
import Image from 'next/image'
import beAPartnerImg from '../assets/images/join-our-team.jpg'
import whoWeAre from '../assets/images/who-we-are-2.png'
import logo from '../assets/icons/logo-alt.svg'
import unbLogo from '../assets/images/unb.jpg'
import fapLogo from '../assets/images/fap.avif'
import lbaLogo from '../assets/images/lba.png'
import ueaLogo from '../assets/images/uea.png'
import vigoLogo from '../assets/images/vigo.png'
import alenLogo from '../assets/images/alen.png'
import capesLogo from '../assets/images/capes.png'
import cnpqLogo from '../assets/images/cnpq.png'
import { OrbitLayout } from '../components/partners'

const orbitImgs = [
  {
    src: alenLogo,
    width: 240,
    height: 104,
    url: 'https://alen.space/',
  },
  {
    src: capesLogo,
    width: 100,
    height: 92,
    url: 'https://www.gov.br/capes/pt-br',
  },
  {
    src: fapLogo,
    width: 380,
    height: 212,
    url: 'https://www.fap.df.gov.br/',
  },
  {
    src: cnpqLogo,
    width: 220,
    height: 68,
    url: 'https://www.gov.br/cnpq/pt-br',
  },
  {
    src: vigoLogo,
    width: 300,
    height: 300,
    url: 'https://www.uvigo.gal/',
  },
  {
    src: ueaLogo,
    width: 160,
    height: 150,
    url: 'http://www.uea.edu.br/',
  },
  {
    src: unbLogo,
    width: 174,
    height: 160,
    url: 'https://www.unb.br/',
  },
  {
    src: lbaLogo,
    width: 160,
    height: 160,
    url: 'https://lba.inpa.gov.br/',
  },
]

export default function WhoWeArePage() {
  const t = useTranslations('Projects.Perception.Who-we-are')

  return (
    <main>
      <section className="relative flex min-h-56 flex-col items-center justify-center bg-unbBlue-400 px-5 text-center md:min-h-[384px]">
        <h1 className="z-10 mt-80 text-2xl font-semibold uppercase md:text-4xl">
          {t('headerTitle')}
        </h1>
        <Image
          className="absolute inset-0 mx-auto size-full max-w-[1160px] object-cover object-[50%_10%]"
          src={whoWeAre}
          alt="quem somos"
        />
        <div className="absolute inset-0 size-full bg-gradient-to-b from-unbBlack-100/0 to-unbBlue-400" />
      </section>
      <div className="bg-unbBlack-0 text-justify">
        <div className="bg-unbBlue-400">
          <div className="mx-auto max-w-[1200px] space-y-3 px-5 py-10 text-sm md:text-base lg:py-20">
            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('headerFirstDescription'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('headerSecondDescription'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('p3'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('p4'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('p5'),
              }}
            />
          </div>
        </div>
        <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-5 py-10 lg:gap-10 lg:py-20">
          <h2 className="text-center font-semibold uppercase text-[#1A3E76] md:text-xl">
            {t('title')}
          </h2>

          <OrbitLayout
            centerImage={logo}
            orbitImages={orbitImgs}
            containerSize={1000}
            orbitRadius={400}
            centerSize={300}
            orbitSize={160}
          />
        </section>
      </div>
      <section className="relative bg-unbBlack-100">
        <div className="z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-14 px-5 py-5 lg:py-10">
          <div className="z-10 flex max-w-[400px] flex-col gap-4 text-center text-lg md:text-2xl">
            <span>{t('footer.title')}</span>
            <span>{t('footer.description')}</span>
          </div>

          <a
            href="mailto:lodestar@aerospace.unb.br"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 rounded bg-perceptionOrange-300 px-4 py-3 uppercase transition-colors hover:bg-unbBlack-0 hover:text-perceptionOrange-300"
          >
            {t('footer.cta')}
          </a>
        </div>
        <Image
          className="absolute inset-0 mx-auto size-full max-w-[1160px] bg-unbBlack-100 object-cover object-top"
          src={beAPartnerImg}
          alt="be a partner"
        />
        <div className="absolute inset-0 size-full bg-gradient-to-b from-unbBlack-100/40 to-unbBlack-100" />
      </section>
    </main>
  )
}
