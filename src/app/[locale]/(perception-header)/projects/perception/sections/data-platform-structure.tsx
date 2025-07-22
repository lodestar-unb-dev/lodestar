import { useTranslations } from 'next-intl'
import { DataPlatformSvg } from '../components/data-platform-svg'

export function DataPlatformStructure() {
  const t = useTranslations(
    'Projects.Perception.LP.data-platform-structure-section',
  )

  return (
    <section className="bg-gradient-to-b from-unbBlue-700 via-unbBlue-700 to-unbBlack-100">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-10 lg:flex-row lg:gap-12 lg:py-20">
        <div className="flex flex-[4] flex-col gap-6 text-justify">
          <h4 className="text-left text-3xl font-semibold">{t('title')}</h4>

          <div className="flex flex-col gap-6">
            <p>{t('description')}</p>

            <div
              className="w-fit rounded border border-perceptionOrange-300 bg-unbBlack-0 px-4 py-3 text-lg font-medium text-perceptionOrange-300 transition-colors"
              // href="/projects/perception/initiatives/k34-system"
            >
              {t('cta')}
            </div>
          </div>
        </div>

        <div className="w-full flex-[7]">
          <DataPlatformSvg />
        </div>
      </div>
    </section>
  )
}
