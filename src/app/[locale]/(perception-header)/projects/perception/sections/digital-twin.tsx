import { useTranslations } from 'next-intl'
import { K34SystemSVGNoAnimation } from '../components/k34-system-svg/no-animation'

export function DigitalTwin() {
  const t = useTranslations('Projects.Perception.LP.digital-twin-section')

  return (
    <section className="from-unbBlack-100 via-unbBlue-700 to-unbBlue-700 bg-linear-to-b">
      <div className="mx-auto flex max-w-300 flex-col gap-5 px-5 py-10 lg:flex-row lg:gap-12 lg:py-20">
        <div className="w-full flex-7 opacity-20">
          <K34SystemSVGNoAnimation />
        </div>

        <div className="flex flex-4 flex-col gap-6 text-justify">
          <h4 className="text-left text-3xl font-semibold">{t('title')}</h4>

          <div className="flex flex-col gap-6">
            <p dangerouslySetInnerHTML={{ __html: t.raw('description') }} />

            <ul className="list-disc pl-5">
              <li className="marker:text-perceptionOrange-300">
                {t('list.first')}
              </li>
              <li className="marker:text-perceptionOrange-300">
                {t('list.second')}
              </li>
              <li className="marker:text-perceptionOrange-300">
                {t('list.third')}
              </li>
            </ul>

            <div
              className="border-perceptionOrange-300 bg-unbBlack-0 text-perceptionOrange-300 w-fit rounded border px-4 py-3 text-lg font-medium transition-colors"
              // href="/projects/perception/initiatives/perception-system"
            >
              {t('cta')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
