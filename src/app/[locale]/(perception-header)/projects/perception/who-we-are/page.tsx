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
    width: 120,
    height: 52,
    url: 'https://alen.space/',
  },
  {
    src: capesLogo,
    width: 50,
    height: 46,
    url: 'https://www.gov.br/capes/pt-br',
  },
  {
    src: fapLogo,
    width: 190,
    height: 106,
    url: 'https://www.fap.df.gov.br/',
  },
  {
    src: cnpqLogo,
    width: 110,
    height: 34,
    url: 'https://www.gov.br/cnpq/pt-br',
  },
  {
    src: vigoLogo,
    width: 150,
    height: 150,
    url: 'https://www.uvigo.gal/',
  },
  {
    src: ueaLogo,
    width: 80,
    height: 75,
    url: 'http://www.uea.edu.br/',
  },
  {
    src: unbLogo,
    width: 87,
    height: 80,
    url: 'https://www.unb.br/',
  },
  {
    src: lbaLogo,
    width: 80,
    height: 80,
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

          {/* <Image src={image} alt="partners" /> */}

          <OrbitLayout
            centerImage={logo}
            orbitImages={orbitImgs}
            containerSize={500}
            orbitRadius={200}
            centerSize={150}
            orbitSize={80}
          />

          {/* <Image src={logo} alt="perception" className="w-[216px]" /> */}

          {/* <div className="flex max-w-5xl flex-col flex-wrap justify-center gap-5 text-unbBlue-400">
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
          </div> */}
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
