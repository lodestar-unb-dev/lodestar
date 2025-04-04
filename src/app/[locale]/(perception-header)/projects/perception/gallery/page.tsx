import { useTranslations } from 'next-intl'

export default function Gallery() {
  const t = useTranslations('Projects.Perception.Gallery')

  return (
    <main className="flex flex-1 items-center justify-center">
      <h2 className="text-3xl text-unbBlue-400">{t('title')}</h2>
    </main>
  )
}
