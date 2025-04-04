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
        <div className="absolute top-0 z-30 flex w-full flex-col items-center justify-center gap-1 bg-unbGreen-500/50 p-2 min-[560px]:flex-row">
          <span>{t('callout.title')}</span>
          <Link href="/projects/alfacrux" className="font-bold">
            {t('callout.link')}
          </Link>
        </div>

        <section className="relative flex items-center overflow-hidden">
          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-unbBlue-600/0 to-unbBlue-600" />

          <div className="z-20 mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between px-5 pb-10 pt-20 min-[560px]:flex-row min-[560px]:pb-20 min-[960px]:gap-20">
            <div className="flex flex-col items-center gap-10 min-[560px]:items-start">
              <h1 className="text-6xl font-bold uppercase min-[960px]:text-7xl">
                {t('title')}
              </h1>

              <h3
                className="text-2xl uppercase text-unbBlack-10 min-[960px]:text-4xl"
                dangerouslySetInnerHTML={{ __html: t.raw('subTitle') }}
              />
            </div>

            <Image
              className="hidden min-[560px]:block min-[560px]:max-w-[15rem] min-[960px]:max-w-[19.75rem]"
              width={316}
              height={316}
              alt="lodestar logo"
              src="https://images.prismic.io/lodestar/07c29c20-1f85-4f91-b2d4-02dac6f8fba3_lodestar_logo.webp"
            />
          </div>

          <Image
            className="absolute left-0 top-0 h-[476px] w-full object-cover object-top"
            width={1432}
            height={476}
            alt="earth"
            src="https://images.prismic.io/lodestar/aa4ac6e3-8f3f-40ff-80d2-55936dac759a_home_banner.webp"
          />
        </section>

        <div className="bg-unbBlue-600">
          <section className="mx-auto flex max-w-[1120px] justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <div className="flex flex-col items-start justify-between gap-10">
              <h2 className="text-4xl font-bold uppercase">
                {t('firstSection.title')}
              </h2>

              <div
                className="flex flex-col gap-4 text-justify text-unbBlack-10"
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
                className="rounded-xl bg-unbGreen-400 px-10 py-5 font-bold uppercase transition-all hover:bg-unbGreen-500"
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
          <section className="mx-auto flex max-w-[1120px] justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <Image
              className="hidden min-[960px]:block"
              src="/images/small_sat_simulator_icon.svg"
              alt="small sat simulator icon"
              width={308}
              height={494}
            />

            <div className="flex flex-col items-end justify-between gap-10 text-unbBlue-400">
              <h2 className="text-4xl font-bold uppercase text-unbBlue-600">
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
                className="rounded-xl bg-unbBlue-400 px-10 py-5 font-bold uppercase text-unbBlack-5 transition-all hover:bg-unbBlue-600"
                href="/projects#small-sat-simulator"
              >
                {t('secondSection.link')}
              </Link>
            </div>
          </section>
        </div>

        <div className="bg-unbGreen-400">
          <section className="mx-auto flex max-w-[1120px] justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <div className="flex flex-col items-start justify-between gap-10">
              <h2 className="text-4xl font-bold uppercase">
                {t('thirdSection.title')}
              </h2>

              <div
                className="flex flex-col gap-4 text-justify text-unbBlack-10"
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
                className="rounded-xl bg-unbBlack-5 px-10 py-5 font-bold uppercase text-unbBlue-400 transition-all hover:bg-unbBlack-25"
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
