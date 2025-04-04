import { Layout } from '@/components/animationLayout'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

import perceptionLogo from '@/app/[locale]/(perception-header)/projects/perception/assets/icons/logo-alt.svg'
import { useTranslations } from 'next-intl'

interface Projects {
  space_missions_projects: {
    project_title: string
    project_description: {
      type: string
      text: string
    }[]
    project_logo: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    project_url: string
  }[]
  small_sat_simulator_projects: {
    project_title: string
    project_description: {
      type: string
      text: string
    }[]
    project_logo: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    project_url: string
  }[]
  high_altitude_ballooning_projects: {
    project_title: string
    project_description: {
      type: string
      text: string
    }[]
    project_logo: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    project_url: string
  }[]
}

export default function Projects() {
  const t = useTranslations('Projects.Page')

  return (
    <Layout id="projects">
      <main className="bg-unbBlack-10 pt-10 min-[560px]:pt-20">
        <section className="mx-auto flex w-full max-w-[1120px] flex-col items-start justify-center gap-4 px-5 pb-10 min-[560px]:items-center min-[560px]:pb-20">
          <h2 className="text-4xl uppercase text-unbBlue-400 min-[560px]:text-6xl">
            {t('title')}
          </h2>
          <div>
            <p className="flex flex-col gap-4 text-justify text-unbBlue-400">
              {t('subTitle')}
            </p>
          </div>
        </section>

        <section
          id="space-missions"
          className="flex flex-col items-center justify-center gap-8 bg-unbBlue-600 py-10 min-[560px]:gap-16 min-[560px]:py-20"
        >
          <h3 className="text-center text-3xl uppercase min-[560px]:text-4xl">
            {t('firstSection.title')}
          </h3>

          <div className="flex flex-col items-center gap-8 min-[560px]:gap-16">
            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[166px] w-full max-w-[200px] bg-white p-5 min-[560px]:block"
                src={perceptionLogo}
                width={200}
                height={166}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('firstSection.Perception.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('firstSection.Perception.description')}</p>
                </div>

                <Link
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="/projects/perception"
                >
                  {t('firstSection.Perception.link')}
                </Link>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[166px] w-full max-w-[200px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/7afc16e4-a88d-4e22-b8f4-e6e4b28ddb94_alfacrux_logo.webp"
                width={200}
                height={166}
                alt="project logo"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('firstSection.AlfaCrux.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('firstSection.AlfaCrux.description')}</p>
                </div>

                <Link
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="/projects/alfacrux"
                >
                  {t('firstSection.AlfaCrux.link')}
                </Link>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[159px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/b088d583-caa2-49d3-b099-e5e89c9ed9bb_wormsail_logo.webp?auto=compress,format&rect=0,0,242,304&w=200&h=251"
                height={200}
                width={159}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('firstSection.WormSail.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('firstSection.WormSail.description')}</p>
                </div>

                <span className="rounded-xl border border-unbGreen-400 p-4 font-bold uppercase transition-all min-[560px]:px-12 min-[560px]:py-5">
                  {t('firstSection.WormSail.link')}
                </span>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[150px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/84ee5161-dba0-4806-b02e-67b1ca3034e5_WhatsApp_Image_2022-03-24_at_20.02.58-removebg-preview.png?auto=compress,format&rect=0,0,127,169&w=200&h=266"
                width={150}
                height={200}
                alt="project logo"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('firstSection.AstroJam.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('firstSection.AstroJam.description')}</p>
                </div>

                <a
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.nottingham.ac.uk/aerospace/space/cubesat-programme/cubesat-missions/index.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('firstSection.AstroJam.link')}
                </a>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[159px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/cfc2805c-6baa-4372-9eaa-16a0abe24b9e_glee_logo.webp?auto=compress,format&rect=0,0,251,251&w=200&h=200"
                height={200}
                width={200}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('firstSection.Glee.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('firstSection.Glee.description')}</p>
                </div>

                <a
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.glee2023.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('firstSection.Glee.link')}
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          className="flex flex-col items-center justify-center gap-16 py-10 min-[560px]:gap-8 min-[560px]:py-20"
          id="small-sat-simulator"
        >
          <h3 className="text-center text-3xl uppercase text-unbBlue-600 min-[560px]:text-4xl">
            {t('secondSection.title')}
          </h3>

          <div className="flex flex-col items-center gap-8 text-unbBlue-400 min-[560px]:gap-16">
            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[168px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/30be7a6c-8ecc-4dd7-8544-cd6ead0ab760_logo.webp?auto=compress,format&rect=0,0,742,883&w=200&h=238"
                width={168}
                height={200}
                alt="project logo"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('secondSection.Simulator.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('secondSection.Simulator.description')}</p>
                </div>

                <span className="rounded-xl border border-unbBlue-400 p-4 font-bold uppercase transition-all min-[560px]:px-12 min-[560px]:py-5">
                  {t('secondSection.Simulator.link')}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section
          className="flex flex-col items-center justify-center gap-16 bg-unbGreen-400 py-10 min-[560px]:gap-8 min-[560px]:py-20"
          id="high-altitude-ballooning"
        >
          <h3 className="text-center text-3xl uppercase min-[560px]:text-4xl">
            {t('thirdSection.title')}
          </h3>

          <div className="flex flex-col items-center gap-8 min-[560px]:gap-16">
            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[155px] min-[560px]:block"
                width={155}
                height={200}
                alt="project logo"
                src="https://images.prismic.io/lodestar/e8551ee6-1e30-4617-a0c2-06703f839ab4_laicansat_logo.webp?auto=compress,format&rect=0,0,1210,1585&w=200&h=262"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('thirdSection.LAICAnSat.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('thirdSection.LAICAnSat.description')}</p>
                </div>

                <a
                  className="rounded-xl bg-unbBlack-0 p-4 font-bold uppercase text-unbBlue-400 transition-all hover:bg-unbBlack-10 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.youtube.com/channel/UCDbPHM1djZ8KOvkJh46NqRA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('thirdSection.LAICAnSat.link')}
                </a>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbGreen-300" />

            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[159px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/feeb99b9-2446-46fd-a3dd-970750d2e766_kuaray_logo.webp?auto=compress,format&rect=0,0,778,634&w=200&h=163"
                height={163}
                width={200}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">
                  {t('thirdSection.Kuaray.title')}
                </h4>

                <div className="flex flex-col gap-4">
                  <p>{t('thirdSection.Kuaray.description')}</p>
                </div>

                <a
                  className="rounded-xl bg-unbBlack-0 p-4 font-bold uppercase text-unbBlue-400 transition-all hover:bg-unbBlack-10 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.facebook.com/projetokuaray"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('thirdSection.Kuaray.link')}
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  )
}
