import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link, routing } from '@/i18n/routing'

export default function NotFoundPage() {
  const locale = useLocale() as (typeof routing.locales)[number]
  const t = useTranslations('NotFoundPage')

  return (
    <main className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/images/lodestar/favicon.png"
          alt=""
          width={180}
          height={180}
        />
        <h1 className="text-unbBlue-700 text-3xl font-medium uppercase">
          {t('title')}
        </h1>
        <p className="text-unbBlue-400 max-w-xs text-center text-pretty">
          {t('description')}
        </p>
        <Link
          href="/"
          locale={locale}
          replace
          className="bg-unbBlue-400 hover:bg-unbBlue-700 rounded-md px-4 py-1 font-bold uppercase transition-colors"
        >
          {t('buttonText')}
        </Link>
      </div>
    </main>
  )
}
