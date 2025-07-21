import { useTranslations } from 'next-intl'
import { K34SystemSVGNoAnimation } from '../components/k34-system-svg/no-animation'

export function CerradoHotspot() {
  const t = useTranslations('Projects.Perception.LP.cerrado-hotspot-section')

  return (
    <section className="bg-gradient-to-b from-unbBlack-100 via-unbBlue-700 to-unbBlue-700">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-10 lg:flex-row lg:gap-12 lg:py-20">
        <div className="w-full flex-[7] opacity-20">
          <K34SystemSVGNoAnimation />
        </div>

        <div className="flex flex-[4] flex-col gap-6 text-justify">
          <h4 className="text-left text-3xl font-semibold">{t('title')}</h4>

          <div className="flex flex-col gap-6">
            <p>{t('description')}</p>

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
              className="w-fit rounded border border-perceptionOrange-300 bg-unbBlack-0 px-4 py-3 text-lg font-medium text-perceptionOrange-300 transition-colors"
              // href="/projects/perception/actions/k34-system"
            >
              {t('cta')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
