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
      <section className="relative isolate flex min-h-56 flex-col items-center justify-center px-5 text-center md:min-h-96">
        <h1 className="z-10 text-2xl font-semibold uppercase md:text-4xl">
          {t('title')}
        </h1>
        <Image
          className="absolute inset-0 size-full object-cover"
          src={ourMissionImg}
          alt="our mission"
        />
        <div className="bg-unbBlack-100/50 absolute inset-0 size-full" />
      </section>
      <section>
        <div className="mx-auto flex max-w-300 flex-col gap-10 px-5 py-10 text-justify">
          <h2 className="text-unbGreen-400 text-left text-xl font-semibold uppercase md:text-3xl">
            {t('FirstSection.title')}
          </h2>

          <div className="text-unbBlack-100 space-y-5">
            <p
              dangerouslySetInnerHTML={{ __html: t.raw('FirstSection.first') }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t.raw('FirstSection.second') }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t.raw('FirstSection.third') }}
            />
            <p dangerouslySetInnerHTML={{ __html: t.raw('FirstSection.p4') }} />
            <p>{t('FirstSection.p5')}</p>
            <p dangerouslySetInnerHTML={{ __html: t.raw('FirstSection.p6') }} />
            <p>{t('FirstSection.p7')}</p>
            <p>{t('FirstSection.p8')}</p>
          </div>
        </div>

        <div className="bg-[#1A3E76]">
          <Image
            className="max-h-140.25 w-full object-cover"
            src={sectionBg}
            alt=""
          />
          <div className="relative mx-auto flex max-w-300 flex-col gap-10 px-5 py-10 text-justify">
            <h2 className="text-left text-xl font-bold text-[#68C4EF] uppercase md:text-3xl">
              {t('SecondSection.title')}
            </h2>

            <div className="space-y-5">
              <p>{t('SecondSection.first')}</p>
              <p>{t('SecondSection.second')}</p>
            </div>
          </div>

          <div className="bg-perceptionOrange-300 h-5 w-full" />
        </div>
      </section>
      <section className="bg-unbBlack-100">
        <div className="mx-auto flex max-w-300 flex-col items-center gap-10 px-5 pt-20 pb-10">
          <div className="text-center text-xl md:text-3xl">
            {t('footer.title')}
            <br />
            {t('footer.description')}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-20">
            <Link
              href="/projects/perception/initiatives/perception-system"
              className="group border-perceptionOrange-300 relative block h-90 w-[320px] overflow-hidden rounded-xl border"
            >
              <Image
                className="size-full object-cover"
                src={k34SystemImg}
                alt={t('footer.perception-system.title')}
              />
              <div className="bg-unbBlack-100/60 absolute inset-0 flex flex-col justify-end gap-2 px-4 pb-6 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                <strong className="text-perceptionOrange-300 text-2xl font-semibold">
                  {t('footer.perception-system.title')}
                </strong>
                <span className="text-sm">
                  {t('footer.perception-system.description')}
                </span>
              </div>
            </Link>

            <div className="group border-perceptionOrange-300 relative block h-90 w-[320px] overflow-hidden rounded-xl border">
              <Image
                className="size-full object-cover"
                src={k34SystemImg}
                alt={t('footer.digital-twin.title')}
              />
              <div className="bg-unbBlack-100/60 absolute inset-0 flex flex-col justify-end gap-2 px-4 pb-6 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                <strong className="text-perceptionOrange-300 text-2xl font-semibold">
                  {t('footer.digital-twin.title')}
                </strong>
                <span className="text-sm">
                  {t('footer.digital-twin.description')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
