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

export default function Instagram() {
  const t = useTranslations('Projects.Perception.RecentActivities')

  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-10 lg:py-20">
      <h2 className="text-3xl font-semibold uppercase text-unbBlue-400 md:text-6xl">
        {t('title')}
      </h2>

      <div
        className="mt-10 space-y-5 text-justify text-unbBlue-400 lg:mt-20"
        dangerouslySetInnerHTML={{ __html: t.raw('description') }}
      />

      <ul className="mt-5 text-unbBlue-400 lg:self-start">
        <li>{t('list-1.text')}</li>
        <ul className="pl-5">
          <li>- {t('list-1.item-1')}</li>
          <li>- {t('list-1.item-2')}</li>
          <li>- {t('list-1.item-3')}</li>
        </ul>
        <li>{t('list-2.text')}</li>
        <ul className="pl-5">
          <li>- {t('list-2.item-1')}</li>
          <li>- {t('list-2.item-2')}</li>
        </ul>
      </ul>

      <p className="mt-5 text-unbBlue-400 lg:self-start">{t('cta-text')}</p>

      <div className="mt-10 lg:mt-20">
        <Carousel slides={instagramPosts} options={OPTIONS} />
      </div>

      <div className="mt-10 flex items-center gap-7 md:gap-14 lg:mt-20">
        <div className="max-w-96 text-sm font-medium text-unbBlack-100 lg:text-lg">
          {t('more-news.text')}
        </div>

        <div className="h-14 w-px bg-perceptionOrange-300" />

        <a
          href="https://www.instagram.com/lodestar_unb"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-perceptionOrange-300 px-4 py-3 transition-colors hover:bg-unbBlack-0 hover:text-perceptionOrange-300"
        >
          {t('more-news.cta')}
        </a>
      </div>
    </section>
  )
}
