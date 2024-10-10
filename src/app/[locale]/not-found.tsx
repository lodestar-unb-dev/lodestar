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
        <h1 className="text-3xl font-medium uppercase text-unbBlue-700">
          {t('title')}
        </h1>
        <p className="max-w-xs text-pretty text-center text-unbBlue-400">
          {t('description')}
        </p>
        <Link
          href="/"
          locale={locale}
          replace
          className="rounded-md bg-unbBlue-400 px-4 py-1 font-bold uppercase transition-colors hover:bg-unbBlue-700"
        >
          {t('buttonText')}
        </Link>
      </div>
    </main>
  )
}
