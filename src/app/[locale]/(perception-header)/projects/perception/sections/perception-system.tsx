import { Link } from '@/i18n/routing'
import { K34SystemSVG } from '../components/k34-system-svg'
import { useTranslations } from 'next-intl'

export function PerceptionSystem() {
  const t = useTranslations('Projects.Perception.LP.perception-system-section')

  return (
    <section className="bg-unbBlack-100">
      <div className="mx-auto flex max-w-300 flex-col gap-5 px-5 py-10 lg:flex-row lg:gap-12 lg:py-20">
        <div className="flex flex-4 flex-col gap-6 text-justify">
          <h4 className="text-3xl font-semibold">{t('title')}</h4>

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

            <Link
              className="border-perceptionOrange-300 bg-unbBlack-0 text-perceptionOrange-300 hover:bg-perceptionOrange-300 hover:text-unbBlack-0 w-fit rounded border px-4 py-3 text-lg font-medium transition-colors"
              href="/projects/perception/initiatives/perception-system"
            >
              {t('cta')}
            </Link>
          </div>
        </div>

        <div className="w-full flex-7">
          <K34SystemSVG />
        </div>
      </div>
    </section>
  )
}
