'use client'

import { useTranslations } from 'next-intl'
import { InstagramEmbed } from 'react-social-media-embed'
import { Link } from '@/i18n/routing'
import { useEffect, useId, useState } from 'react'

const instagramPosts = [
  'https://www.instagram.com/p/DKHNPjeOiSq/',
  'https://www.instagram.com/p/Cv-HASvAK4B',
  'https://www.instagram.com/p/CxSvpzOAGxV',
]

export function Instagram() {
  const t = useTranslations('Projects.Perception.LP.recent-highlights')
  const id = useId()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsClient(true)
    }
  }, [])

  return (
    <section
      id={id}
      className="mx-auto flex w-full max-w-300 flex-col items-center gap-10 px-5 pb-10 lg:pb-20"
    >
      <h2 className="text-unbBlack-100 text-xl font-semibold uppercase lg:text-3xl">
        {t('title')}
      </h2>

      <div className="flex w-full flex-wrap justify-center gap-5">
        {instagramPosts.map((post) =>
          isClient ? <InstagramEmbed key={post} url={post} /> : null,
        )}
      </div>

      <Link
        className="bg-perceptionOrange-300 hover:bg-unbBlack-0 hover:text-perceptionOrange-300 rounded px-4 py-3 uppercase transition-colors"
        href="/projects/perception/recent-activities"
      >
        {t('cta')}
      </Link>
    </section>
  )
}
