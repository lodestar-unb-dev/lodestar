'use client'

import { useEffect, useState } from 'react'
// import {  } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { ComingNext, RadioBanner, RadioForm, RadioInfo } from './styles'
import { AlfaCruxMissionControl } from '../styles'
import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/client'
import { useTheme } from 'styled-components'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function Info({
  description,
  keyValue,
}: {
  keyValue: {
    key: string
    value: RichTextField
  }[]
  description: RichTextField
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      <article>
        <PrismicRichText field={description} />
      </article>
      {keyValue.map((item) => (
        <div key={item.key}>
          <strong>{item.key}</strong>:{' '}
          <div>
            <PrismicRichText field={item.value} />
          </div>
        </div>
      ))}
    </motion.div>
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
    title,
    banner_image,
    alfacrux_logo,
    basic_info,
    basic_description,
    description,
    ham_info,
    ham_description,
    radio_info_title,
    sdr_info,
    sdr_description,
    ttc_info,
    ttc_description,
    coming_next_title,
    coming_next_group,
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
          <h2>{title}</h2>

          <div>
            <PrismicRichText field={description} />
          </div>
        </article>
      </RadioBanner>

      <RadioInfo>
        <h3>{radio_info_title}</h3>

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
            Beacon
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
            SDR Experiments
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
            Ham radio digipeater
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
            TTC
          </button>
        </nav>

        <AnimatePresence mode="wait">
          {info[activeFilter].description.length > 0 ||
          info[activeFilter].keyValue.length > 0 ? (
            <Info key={activeFilter} {...info[activeFilter]} />
          ) : (
            <CommingSoon key="commingSoon" />
          )}
        </AnimatePresence>
      </RadioInfo>

      <RadioForm>
        <div>
          <h3>Radio Form</h3>

          <h4>
            Were you able to receive AlfaCrux packages? Share with us and become
            one of our distinguished collaborators. For that, just fill the form
            below and send your KISS frames. It will be checked by the AlfaCrux
            team, and later uploaded in our database associated to your call
            sign!
          </h4>
          <iframe
            className="form"
            src="https://dbgeolog.unb.br/lodestar/form.php"
            frameBorder={0}
          />

          <h4>
            Check who has already received packets from AlfaCrux.
            <br />
            Come with us and be part of this mission!
          </h4>
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
            <h2>Mission Control Platform</h2>

            <section>
              <aside>
                <p>
                  The AlfaCrux Mission Control platform is part of an innovative
                  framework under development by the AlfaCrux team to assist the
                  development and operation of nanosatellites. By innovative
                  framework we mean a new architecture for improving and
                  strengthening education in the broad area of Science,
                  Technology, Engineering and Mathematics (STEM). It is another
                  contribution of the AlfaCrux team to deliver solutions for
                  in-orbit data processing and management; new approaches for
                  attitude determination, control, and reconstruction; space
                  weather analysis and impact on UHF communication links;
                  prognoses and satellite health management, among others. The
                  management, processing, and analysis of all this information,
                  along with the ground infrastructure, come together in the
                  development of Digi-AlfaCrux, the digital twin version of the
                  AlfaCrux.
                </p>
                <p>
                  It also makes it easier and immediate for all users to see and
                  understand the meaning and purpose of the AlfaCrux downlink
                  signal in accordance with the amateur-satellite service. All
                  frames available online are properly associated with the call
                  sign responsible for the information.
                </p>
                <p>
                  The AlfaCrux telemetry data is free of charge and openly
                  distributed, but if you used the AlfaCrux data on your
                  research and studies, please don’t forget to cite us! Citation
                  for telemetry viewer data{' '}
                  <a
                    href="http://dx.doi.org/10.3390/app12199764"
                    target="__blank"
                  >
                    can be found here.
                  </a>
                </p>
              </aside>
              <a href="https://mission-control.lodestar.aerospace.unb.br/">
                Check our new platform now!
              </a>
            </section>

            <span />
          </div>
        </div>
      </AlfaCruxMissionControl>

      <ComingNext>
        <h3>{coming_next_title}</h3>

        <div>
          {coming_next_group.map((item) => (
            <article key={item.coming_next_image.url}>
              <img
                src={item.coming_next_image.url}
                alt={item.coming_next_image.alt}
              />

              <div>
                <PrismicRichText field={item.coming_next_description} />
              </div>
            </article>
          ))}
        </div>
      </ComingNext>
    </div>
  )
}
