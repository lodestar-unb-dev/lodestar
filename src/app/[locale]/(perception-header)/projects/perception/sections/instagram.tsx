'use client'

import { useTranslations } from 'next-intl'
import { InstagramEmbed } from 'react-social-media-embed'
import { Link } from '@/i18n/routing'
import { useId } from 'react'

const instagramPosts = [
  'https://www.instagram.com/p/DKHNPjeOiSq/',
  'https://www.instagram.com/p/Cv-HASvAK4B',
  'https://www.instagram.com/p/CxSvpzOAGxV',
]

export function Instagram() {
  const t = useTranslations('Projects.Perception.LP.recent-highlights')
  const id = useId()

  return (
    <section
      id={id}
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-5 pb-10 lg:pb-20"
    >
      <h2 className="text-xl font-semibold uppercase text-unbBlack-100 lg:text-3xl">
        {t('title')}
      </h2>

      <div className="flex w-full flex-wrap justify-center gap-5">
        {instagramPosts.map((post) => (
          <InstagramEmbed key={post} url={post} />
        ))}
      </div>

      <Link
        className="rounded bg-perceptionOrange-300 px-4 py-3 uppercase transition-colors hover:bg-unbBlack-0 hover:text-perceptionOrange-300"
        href="/projects/perception/recent-activities"
      >
        {t('cta')}
      </Link>
    </section>
  )
}
