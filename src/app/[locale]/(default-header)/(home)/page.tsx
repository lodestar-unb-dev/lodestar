import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Box, Droplet, HardDrive } from 'lucide-react'

import { Layout } from '@/components/animationLayout'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <Layout id="home">
      <main className="relative">
        <div className="bg-unbGreen-500/50 absolute top-0 z-30 flex w-full flex-col items-center justify-center gap-1 p-2 min-[560px]:flex-row">
          <span>{t('callout.title')}</span>
          <Link href="/projects/alfacrux" className="font-bold">
            {t('callout.link')}
          </Link>
        </div>

        <section className="relative flex items-center overflow-hidden">
          <div className="from-unbBlue-600/0 to-unbBlue-600 absolute z-10 h-full w-full bg-linear-to-b" />

          <div className="z-20 mx-auto flex w-full max-w-280 flex-col items-center justify-between px-5 pt-20 pb-10 min-[560px]:flex-row min-[560px]:pb-20 min-[960px]:gap-20">
            <div className="flex flex-col items-center gap-10 min-[560px]:items-start">
              <h1 className="text-6xl font-bold uppercase min-[960px]:text-7xl">
                {t('title')}
              </h1>

              <h3
                className="text-unbBlack-10 text-2xl uppercase min-[960px]:text-4xl"
                dangerouslySetInnerHTML={{ __html: t.raw('subTitle') }}
              />
            </div>

            <Image
              className="hidden min-[560px]:block min-[560px]:max-w-60 min-[960px]:max-w-79"
              width={316}
              height={316}
              alt="lodestar logo"
              src="https://images.prismic.io/lodestar/07c29c20-1f85-4f91-b2d4-02dac6f8fba3_lodestar_logo.webp"
            />
          </div>

          <Image
            className="absolute top-0 left-0 h-119 w-full object-cover object-top"
            width={1432}
            height={476}
            alt="earth"
            src="https://images.prismic.io/lodestar/aa4ac6e3-8f3f-40ff-80d2-55936dac759a_home_banner.webp"
          />
        </section>

        <div className="bg-unbBlue-600">
          <section className="mx-auto flex max-w-280 justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <div className="flex flex-col items-start justify-between gap-10">
              <h2 className="text-4xl font-bold uppercase">
                {t('firstSection.title')}
              </h2>

              <div
                className="text-unbBlack-10 flex flex-col gap-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: t.raw('firstSection.description'),
                }}
              />

              <div className="flex flex-col items-start gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-10">
                <aside className="flex items-center gap-5">
                  <Box />
                  <span>AlfaCrux</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Box />
                  <span>WormSail</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Box />
                  <span>Glee</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Box />
                  <span>AstroJam</span>
                </aside>
              </div>

              <Link
                className="bg-unbGreen-400 hover:bg-unbGreen-500 rounded-xl px-10 py-5 font-bold uppercase transition-all"
                href="/projects#space-missions"
              >
                {t('firstSection.link')}
              </Link>
            </div>

            <Image
              width={299}
              height={503}
              className="hidden min-[960px]:block"
              src="/images/space_missions_icon.svg"
              alt="space missions icon"
            />
          </section>
        </div>

        <div>
          <section className="mx-auto flex max-w-280 justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <Image
              className="hidden min-[960px]:block"
              src="/images/small_sat_simulator_icon.svg"
              alt="small sat simulator icon"
              width={308}
              height={494}
            />

            <div className="text-unbBlue-400 flex flex-col items-end justify-between gap-10">
              <h2 className="text-unbBlue-600 text-4xl font-bold uppercase">
                {t('secondSection.title')}
              </h2>

              <div
                className="flex flex-col gap-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: t.raw('secondSection.description'),
                }}
              />

              <div className="flex flex-col items-start gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-10">
                <aside className="flex items-center gap-5">
                  <HardDrive />
                  <span>Simulator</span>
                </aside>
              </div>

              <Link
                className="bg-unbBlue-400 text-unbBlack-5 hover:bg-unbBlue-600 rounded-xl px-10 py-5 font-bold uppercase transition-all"
                href="/projects#small-sat-simulator"
              >
                {t('secondSection.link')}
              </Link>
            </div>
          </section>
        </div>

        <div className="bg-unbGreen-400">
          <section className="mx-auto flex max-w-280 justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <div className="flex flex-col items-start justify-between gap-10">
              <h2 className="text-4xl font-bold uppercase">
                {t('thirdSection.title')}
              </h2>

              <div
                className="text-unbBlack-10 flex flex-col gap-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: t.raw('thirdSection.description'),
                }}
              />

              <div className="flex flex-col items-start gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-10">
                <aside className="flex items-center gap-5">
                  <Droplet />
                  <span>LAICAnSat</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Droplet />
                  <span>Kuaray</span>
                </aside>
              </div>

              <Link
                className="bg-unbBlack-5 text-unbBlue-400 hover:bg-unbBlack-25 rounded-xl px-10 py-5 font-bold uppercase transition-all"
                href="/projects#high-altitude-ballooning"
              >
                {t('thirdSection.link')}
              </Link>
            </div>

            <Image
              className="hidden min-[960px]:block"
              src="/images/high_altitude_ballooning_icon.svg"
              alt="high altitude ballooning icon"
              width={180}
              height={545}
            />
          </section>
        </div>
      </main>
    </Layout>
  )
}
