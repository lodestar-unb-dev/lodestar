import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ourMissionImg from '../assets/images/hero-bg.jpg'
import sectionBg from '../assets/images/section-bg.jpg'
import k34SystemImg from '../assets/images/k34-system.png'
import { Link } from '@/i18n/routing'

export default function MissionPage() {
  const t = useTranslations('Projects.Perception.Mission')

  return (
    <main>
      <section className="relative flex min-h-56 flex-col items-center justify-center px-5 text-center md:min-h-[384px]">
        <h1 className="text-2xl font-semibold uppercase md:text-4xl">
          {t('title')}
        </h1>
        <Image
          className="absolute inset-0 -z-10 size-full object-cover"
          src={ourMissionImg}
          alt="our mission"
        />
        <div className="absolute inset-0 -z-10 size-full bg-unbBlack-100/50" />
      </section>
      <section>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-10 text-justify">
          <h2 className="text-left text-xl font-semibold uppercase text-unbGreen-400 md:text-3xl">
            {t('FirstSection.title')}
          </h2>

          <div className="space-y-5 text-unbBlack-100">
            <p>{t('FirstSection.first')}</p>
            <p>{t('FirstSection.second')}</p>
            <p>{t('FirstSection.third')}</p>
            <p>{t('FirstSection.p4')}</p>
            <p>{t('FirstSection.p5')}</p>
            <p>{t('FirstSection.p6')}</p>
            <p>{t('FirstSection.p7')}</p>
            <p>{t('FirstSection.p8')}</p>
          </div>
        </div>

        <div className="bg-[#1A3E76]">
          <Image
            className="max-h-[561px] w-full object-cover"
            src={sectionBg}
            alt=""
          />
          <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-10 text-justify">
            <h2 className="text-left text-xl font-bold uppercase text-[#68C4EF] md:text-3xl">
              {t('SecondSection.title')}
            </h2>

            <div className="space-y-5">
              <p>{t('SecondSection.first')}</p>
              <p>{t('SecondSection.second')}</p>
            </div>
          </div>

          <div className="h-5 w-full bg-[#EE761B]" />
        </div>
      </section>
      <section className="bg-unbBlack-100">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 pb-10 pt-20">
          <div className="text-center text-xl md:text-3xl">
            {t('footer.title')}
            <br />
            {t('footer.description')}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-20">
            <Link
              href="/projects/perception/actions/perception-system"
              className="group relative block h-[360px] w-[320px] overflow-hidden rounded-xl border border-perceptionOrange-300"
            >
              <Image
                className="size-full object-cover"
                src={k34SystemImg}
                alt={t('footer.k34-system.title')}
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-unbBlack-100/60 px-4 pb-6 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                <strong className="text-2xl font-semibold text-perceptionOrange-300">
                  {t('footer.k34-system.title')}
                </strong>
                <span className="text-sm">
                  {t('footer.k34-system.description')}
                </span>
              </div>
            </Link>

            <div className="group relative block h-[360px] w-[320px] overflow-hidden rounded-xl border border-perceptionOrange-300">
              <Image
                className="size-full object-cover"
                src={k34SystemImg}
                alt={t('footer.cerrado-hotspot.title')}
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-unbBlack-100/60 px-4 pb-6 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                <strong className="text-2xl font-semibold text-perceptionOrange-300">
                  {t('footer.cerrado-hotspot.title')}
                </strong>
                <span className="text-sm">
                  {t('footer.cerrado-hotspot.description')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
