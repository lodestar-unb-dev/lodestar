/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ComingNext, RadioBanner, RadioForm, RadioInfo } from './styles'
import { AlfaCruxMissionControl } from '../styles'
import { RichTextField } from '@prismicio/client'
import { useTheme } from 'styled-components'
import { useTranslations } from 'next-intl'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function Info({ value }: { value: 'sdr' | 'ttc' | 'ham' | 'basic' }) {
  const t = useTranslations('Projects.AlfaCrux.Radio')

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.4 }}
      dangerouslySetInnerHTML={{ __html: t.raw(`radioInfo.${value}.info`) }}
    />
  )
}

function CommingSoon() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.4 }}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 92,
        paddingBottom: 91,
      }}
    >
      {/* <Tool /> */}
      <strong>More information comming soon...</strong>
    </motion.div>
  )
}

export interface AlfaCruxRadioPrismicDocument {
  banner_image: {
    dimensions: {
      width: number
      height: number
    }
    alt: string
    url: string
  }
  alfacrux_logo: {
    dimensions: {
      width: number
      height: number
    }
    alt: string
    url: string
  }
  title: string
  description: RichTextField
  radio_info_title: string
  basic_info: {
    key: string
    value: RichTextField
  }[]
  basic_description: RichTextField
  sdr_info: {
    key: string
    value: RichTextField
  }[]
  sdr_description: RichTextField
  ham_info: {
    key: string
    value: RichTextField
  }[]
  ham_description: RichTextField
  ttc_info: {
    key: string
    value: RichTextField
  }[]
  ttc_description: RichTextField
  telemetry_viewer_title: string
  telemetry_viewer_description: RichTextField
  coming_next_title: string
  coming_next_group: {
    coming_next_image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    coming_next_description: RichTextField
  }[]
}

interface AlfaCruxRadioProps {
  alfacruxRadioPrismicDocument: AlfaCruxRadioPrismicDocument | null
}

export function OldAlfaCruxRadio({
  alfacruxRadioPrismicDocument,
}: AlfaCruxRadioProps) {
  const [activeFilter, setActiveFilter] = useState<
    'basic' | 'ham' | 'sdr' | 'ttc'
  >('basic')
  const theme = useTheme()

  function handleFilterChange(filterNumber: 'basic' | 'ham' | 'sdr' | 'ttc') {
    if (filterNumber === activeFilter) return

    setActiveFilter(filterNumber)
  }
  const t = useTranslations('Projects.AlfaCrux.Radio')

  useEffect(() => {
    const path = window.location.hash
    if (path && path.includes('#')) {
      setTimeout(() => {
        const id = path.replace('#', '')
        const el = window.document.getElementById(id)
        const r = el?.getBoundingClientRect()
        if (r) {
          window?.top?.scroll({
            top: scrollY + r.top - 73,
            behavior: 'smooth',
          })
        }
      }, 600)
    }
  }, [])

  if (!alfacruxRadioPrismicDocument) {
    return (
      <div
        style={{
          color: 'black',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Erro no carregamento das informações.
      </div>
    )
  }

  const {
    banner_image,
    alfacrux_logo,
    basic_info,
    basic_description,
    ham_info,
    ham_description,
    sdr_info,
    sdr_description,
    ttc_info,
    ttc_description,
  } = alfacruxRadioPrismicDocument

  const info = {
    basic: {
      description: basic_description,
      keyValue: basic_info,
    },
    ham: {
      description: ham_description,
      keyValue: ham_info,
    },
    sdr: {
      description: sdr_description,
      keyValue: sdr_info,
    },
    ttc: {
      description: ttc_description,
      keyValue: ttc_info,
    },
  }

  return (
    <div>
      <RadioBanner role="banner" bgImageUrl={banner_image.url}>
        <article>
          <img src={alfacrux_logo.url} alt={alfacrux_logo.alt} />
          <h2>{t('title')}</h2>

          <div dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
        </article>
      </RadioBanner>

      <RadioInfo>
        <h3>{t('radioInfo.title')}</h3>

        <nav>
          <button
            style={{
              backgroundColor:
                activeFilter === 'basic'
                  ? theme.colors.blue
                  : theme.colors.black0,
              color:
                activeFilter === 'basic'
                  ? theme.colors.black5
                  : theme.colors.blue,
            }}
            onClick={() => handleFilterChange('basic')}
          >
            {t('radioInfo.basic.title')}
          </button>

          <button
            style={{
              backgroundColor:
                activeFilter === 'sdr'
                  ? theme.colors.green
                  : theme.colors.black0,
              color:
                activeFilter === 'sdr'
                  ? theme.colors.black5
                  : theme.colors.blue,
            }}
            onClick={() => handleFilterChange('sdr')}
          >
            {t('radioInfo.sdr.title')}
          </button>

          <button
            style={{
              backgroundColor:
                activeFilter === 'ham'
                  ? theme.colors.black100
                  : theme.colors.black0,
              color:
                activeFilter === 'ham'
                  ? theme.colors.black5
                  : theme.colors.blue,
            }}
            onClick={() => handleFilterChange('ham')}
          >
            {t('radioInfo.ham.title')}
          </button>

          <button
            style={{
              backgroundColor:
                activeFilter === 'ttc'
                  ? theme.colors.blue
                  : theme.colors.black0,
              color:
                activeFilter === 'ttc'
                  ? theme.colors.black5
                  : theme.colors.blue,
            }}
            onClick={() => handleFilterChange('ttc')}
          >
            {t('radioInfo.ttc.title')}
          </button>
        </nav>

        <AnimatePresence mode="wait">
          {info[activeFilter].description.length > 0 ||
          info[activeFilter].keyValue.length > 0 ? (
            <Info value={activeFilter} {...info[activeFilter]} />
          ) : (
            <CommingSoon key="commingSoon" />
          )}
        </AnimatePresence>
      </RadioInfo>

      <RadioForm>
        <div>
          <h3>{t('radioForm.title')}</h3>

          <h4>{t('radioForm.form')}</h4>
          <iframe
            className="form"
            src="https://dbgeolog.unb.br/lodestar/form.php"
            frameBorder={0}
          />

          <h4
            dangerouslySetInnerHTML={{
              __html: t.raw('radioForm.collaborators'),
            }}
          />
          <iframe
            className="map"
            src="https://dbgeolog.unb.br/lodestar/map.php"
            frameBorder={0}
          />
        </div>
      </RadioForm>

      <AlfaCruxMissionControl>
        <div className="mission">
          <video autoPlay loop muted>
            <source src="/videos/mission-control.mp4" type="video/mp4" />
          </video>

          <div className="banner">
            <h2>{t('missionControl.title')}</h2>

            <section>
              <aside
                dangerouslySetInnerHTML={{
                  __html: t.raw('missionControl.description'),
                }}
              />
              <a href="https://mission-control.lodestar.aerospace.unb.br/">
                {t('missionControl.link')}
              </a>
            </section>

            <span />
          </div>
        </div>
      </AlfaCruxMissionControl>

      <ComingNext>
        <h3>{t('comingNext.title')}</h3>

        <div>
          <article>
            <img
              src="https://images.prismic.io/lodestar/250aa8b4-011d-4b8f-b210-9ace05fb073c_Group+1+%281%29.png?auto=compress,format&rect=0,0,678,356&w=400&h=210"
              alt=""
            />

            <div>{t('comingNext.description')}</div>
          </article>
        </div>
      </ComingNext>
    </div>
  )
}
