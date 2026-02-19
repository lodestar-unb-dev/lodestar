'use client'

import { useTranslations } from 'next-intl'
import { Carousel } from '../components/carousel'
import { EmblaOptionsType } from 'embla-carousel'
import { Newspaper } from 'lucide-react'

const instagramPosts = [
  'https://www.instagram.com/p/DKHNPjeOiSq/',
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
    <section className="mx-auto flex w-full max-w-300 flex-col items-center px-5 py-10 lg:py-20">
      <h2 className="text-unbBlue-400 text-3xl font-semibold uppercase md:text-6xl">
        {t('title')}
      </h2>

      <div
        className="text-unbBlue-400 mt-10 space-y-5 text-justify lg:mt-20"
        dangerouslySetInnerHTML={{ __html: t.raw('description') }}
      />

      <ul className="text-unbBlue-400 mt-5 sm:self-start">
        <li dangerouslySetInnerHTML={{ __html: t.raw('list-1.text') }} />
        <ul className="pl-5">
          <li>- {t('list-1.item-1')}</li>
          <li>- {t('list-1.item-2')}</li>
          <li>- {t('list-1.item-3')}</li>
        </ul>
        <li dangerouslySetInnerHTML={{ __html: t.raw('list-2.text') }} />
        <ul className="pl-5">
          <li>- {t('list-2.item-1')}</li>
          <li>- {t('list-2.item-2')}</li>
        </ul>
      </ul>

      <div className="text-unbBlue-400 mt-5 text-justify sm:self-start">
        <p className="font-semibold">{t('title')}</p>
        <ul className="text-unbBlue-400 flex flex-col gap-2 sm:self-start">
          <li className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Newspaper size={20} />
              <span>A Tarde</span>
            </div>
            <a
              href="https://atarde.com.br/brasil/cientista-brasileiro-lidera-missao-espacial-para-escanear-amazonia-e-cerrado-1331390"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perceptionOrange-300"
            >
              {t('recent-highlights-1')}
            </a>
          </li>

          <li className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Newspaper size={20} />
              <span>O Globo</span>
            </div>
            <a
              href="https://oglobo.globo.com/brasil/noticia/2025/06/17/missao-liderada-por-cientista-brasileiro-vai-escanear-amazonia-e-cerrado-para-combater-mudancas-climaticas.ghtml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perceptionOrange-300"
            >
              {t('recent-highlights-2')}
            </a>
          </li>

          <li className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Newspaper size={20} />
              <span>O Povo</span>
            </div>
            <a
              href="https://www.opovo.com.br/noticias/ciencia/2025/06/13/missao-espacial-brasileira-pretende-escanear-biomas-na-amazonia-e-no-cerrado-com-ia.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perceptionOrange-300"
            >
              {t('recent-highlights-3')}
            </a>
          </li>

          <li className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Newspaper size={20} />
              <span>Zero Hora</span>
            </div>
            <a
              href="https://gauchazh.clicrbs.com.br/colunistas/marta-sfredo/noticia/2025/05/missao-espacial-vai-escanear-amazonia-e-cerrado-para-combater-mudanca-climatica-cmay3cq9600v9011gwhlah1h1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perceptionOrange-300"
            >
              {t('recent-highlights-4')}
            </a>
          </li>

          <li className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Newspaper size={20} />
              <span>A Crítica</span>
            </div>
            <a
              href="https://www.acritica.com/amazonia/plataforma-espacial-de-monitoramento-1.373369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perceptionOrange-300"
            >
              {t('recent-highlights-5')}
            </a>
          </li>
        </ul>
      </div>

      <p className="text-unbBlue-400 mt-5 sm:self-start">{t('cta-text')}</p>

      <div className="mt-10 lg:mt-20">
        <Carousel slides={instagramPosts} options={OPTIONS} />
      </div>

      <div className="mt-10 flex items-center gap-7 md:gap-14 lg:mt-20">
        <div className="text-unbBlack-100 max-w-96 text-sm font-medium lg:text-lg">
          {t('more-news.text')}
        </div>

        <div className="bg-perceptionOrange-300 h-14 w-px" />

        <a
          href="https://www.instagram.com/lodestar_unb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-perceptionOrange-300 hover:bg-unbBlack-0 hover:text-perceptionOrange-300 rounded px-4 py-3 transition-colors"
        >
          {t('more-news.cta')}
        </a>
      </div>
    </section>
  )
}
