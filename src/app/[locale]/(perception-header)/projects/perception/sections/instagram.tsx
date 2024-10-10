'use client'

import { useTranslations } from 'next-intl'
import { Carousel } from '../components/carousel'
import { EmblaOptionsType } from 'embla-carousel'

const instagramPosts = [
  'https://www.instagram.com/p/C9vlfslAYsA',
  'https://www.instagram.com/p/Cv-HASvAK4B',
  'https://www.instagram.com/p/CxSvpzOAGxV',
  'https://www.instagram.com/p/CxniILsgLx6',
  'https://www.instagram.com/p/C3Wc8pvgo_N',
  'https://www.instagram.com/p/C24-mC9gl1A',
]

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto', loop: true }

export function Instagram() {
  const t = useTranslations('Projects.Perception.HomePage.RecentActivities')

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 text-justify">
      <h2 className="self-start py-10 text-xl font-bold uppercase text-[#1A3E76] md:text-3xl">
        {t('title')}
      </h2>

      <div
        className="max-w-7xl space-y-5 text-unbBlack-100"
        dangerouslySetInnerHTML={{ __html: t.raw('description') }}
      />

      <Carousel slides={instagramPosts} options={OPTIONS} />
    </section>
  )
}
