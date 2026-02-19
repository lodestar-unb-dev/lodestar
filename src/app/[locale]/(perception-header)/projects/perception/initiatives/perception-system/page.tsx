import { useTranslations } from 'next-intl'
import Image from 'next/image'
import k34SystemImg from '../../assets/images/hero-bg.jpg'
import { K34SystemFullSvg } from '../../components/k34-system-svg/full'
import { Tooltip } from 'radix-ui'

export default function PerceptionSystemPage() {
  const t = useTranslations('Projects.Perception.Initiatives.perception-system')

  return (
    <main>
      <section className="relative isolate flex min-h-56 flex-col items-center justify-center px-5 text-center md:min-h-96">
        <h1 className="z-10 text-2xl font-semibold uppercase md:text-4xl">
          {t('title')}
        </h1>
        <h2 className="z-10 text-lg">{t('description')}</h2>
        <Image
          className="absolute inset-0 size-full object-cover"
          src={k34SystemImg}
          alt="k34 system"
        />
        <div className="bg-unbBlack-100/50 absolute inset-0 size-full" />
      </section>
      <div className="bg-unbBlack-0">
        <section className="mx-auto max-w-300 space-y-3 px-5 py-10 lg:py-20">
          <h3 className="text-unbGreen-400 text-xl font-semibold uppercase md:text-3xl">
            {t('overview.title')}
          </h3>

          <div className="text-unbBlack-100 mb-20 space-y-4 text-justify">
            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('overview.first-paragraph'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('overview.second-paragraph'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('overview.third-paragraph'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('overview.fourth-paragraph'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('overview.fifth-paragraph'),
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('overview.sixth-paragraph'),
              }}
            />
          </div>

          <Tooltip.Provider delayDuration={0}>
            <K34SystemFullSvg />
          </Tooltip.Provider>
        </section>
      </div>
      <section className="bg-unbBlack-100">
        <div className="mx-auto flex max-w-300 flex-col items-center gap-14 px-5 py-5 lg:py-10">
          <h4 className="text-xl font-semibold uppercase md:text-3xl">
            {t('key-features.title')}
          </h4>

          <ul className="list-disc pl-5">
            <li className="marker:text-perceptionOrange-300">
              {t('key-features.list.first-item')}
            </li>
            <li className="marker:text-perceptionOrange-300">
              {t('key-features.list.second-item')}
            </li>
            <li className="marker:text-perceptionOrange-300">
              {t('key-features.list.third-item')}
            </li>
          </ul>

          <a
            href="mailto:lodestar@aerospace.unb.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-perceptionOrange-300 hover:bg-unbBlack-0 hover:text-perceptionOrange-300 rounded px-4 py-3 uppercase transition-colors"
          >
            {t('key-features.cta')}
          </a>
        </div>
      </section>
    </main>
  )
}
