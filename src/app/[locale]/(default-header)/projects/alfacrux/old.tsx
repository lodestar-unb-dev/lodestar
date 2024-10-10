/* eslint-disable @next/next/no-img-element */
'use client'

import Slider, { Settings } from 'react-slick'
import { Instagram, Rss, Youtube } from 'lucide-react'
import { PrismicRichText } from '@prismicio/react'
import { Link } from '@/i18n/routing'

import {
  AlfaCruxBanner,
  AlfaCruxBio,
  AlfaCruxGallery,
  AlfaCruxRadioAmateur,
  AlfaCruxRecentActivities,
  AlfaCruxWhy,
  AlfaCruxAcknowledgments,
  AlfacruxCountdown,
  // AlfacruxCallout,
  AlfaCruxMissionControl,
} from './styles'
// import { intervalToDuration } from 'date-fns'
import { RichTextField } from '@prismicio/client'
import Image from 'next/image'

import explodedViewImg from './assets/exploded_view_alfacrux.png'
import radioAmateurImg from './assets/radio_amateur.svg'
import { useTranslations } from 'next-intl'

export interface AlfaCruxPrismicDocument {
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
  about_title: string
  left_description: RichTextField
  right_image: {
    dimensions: {
      width: number
      height: number
    }
    alt: string
    url: string
  }
  bottom_description: RichTextField
  why_title: string
  why_description: RichTextField
  gallery_title: string
  gs_gallery_images: {
    image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
  }[]
  ac_gallery_images: {
    image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
  }[]
  ma_gallery_images: {
    image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
  }[]
  radio_amateurs_title: string
  radio_amateurs_description: RichTextField
  radio_amateurs_cta: RichTextField
  radio_amateurs_button: string
  recent_activities_title: string
  recent_activities_description: RichTextField
  recent_activities_cards: {
    youtube_video_url: string
    title: string
    description: RichTextField
    image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    news_url: string
  }[]
  acknowledgments_title: string
  acknowledgments_first_subsection_title: string
  acknowledgments_second_subsection_title: string
  acknowledgments_third_subsection_title: string
  acknowledgments_first_subsection_images: {
    image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    acknowledgments_image_link: string
  }[]
  acknowledgments_second_subsection_images: {
    image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    acknowledgments_image_link: string
  }[]
  acknowledgments_third_subsection_images: {
    image: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    acknowledgments_image_link: string
  }[]
}

interface AlfaCruxProps {
  alfacruxPrismicDocument: AlfaCruxPrismicDocument | null
}

// const launchDate = new Date(2022, 3, 1, 13, 24, 0, 0)
// const reentryDate = new Date(2024, 3, 5, 0, 0, 0, 0)

export function OldAlfaCrux({ alfacruxPrismicDocument }: AlfaCruxProps) {
  // const missionEllapsedTime = intervalToDuration({
  //   start: reentryDate,
  //   end: launchDate,
  // })
  const t = useTranslations('Projects.AlfaCrux.Page')

  if (!alfacruxPrismicDocument) {
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
    alfacrux_logo,
    banner_image,
    gs_gallery_images,
    ac_gallery_images,
    ma_gallery_images,
    recent_activities_cards,
    right_image,
    acknowledgments_first_subsection_images,
    acknowledgments_second_subsection_images,
    acknowledgments_third_subsection_images,
  } = alfacruxPrismicDocument

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <main className="bg-unbBlue-700">
      <AlfaCruxBanner role="banner" $bgImageUrl={banner_image.url}>
        {/* <AlfacruxCallout>
          Did you know that you can actively help our project and consume
          AlfaCrux`s latest data{' '}
          <Link href="/projects/alfacrux/radio">
            <strong>with just one click?</strong>
          </Link>
        </AlfacruxCallout> */}

        <AlfacruxCountdown>
          <header>
            <h3>
              {t('Banner.title')}
              <small>🚀</small>
            </h3>
          </header>

          <section>
            <div>
              <p>2</p>
              <strong>{t('Banner.years')}</strong>
            </div>

            <div>
              <p>3</p>
              <strong>{t('Banner.days')}</strong>
            </div>

            <div>
              <p>10</p>
              <strong>{t('Banner.hours')}</strong>
            </div>

            <div>
              <p>36</p>
              <strong>{t('Banner.minutes')}</strong>
            </div>
          </section>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              fontWeight: 500,
            }}
          >
            <span>
              {t('Banner.launchDate')}:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-04-01,
              13:24:00 (UTC)
            </span>
            <span>
              {t('Banner.lastDecodedTelemetry')}: 2024-04-03, 02:58:00 (UTC)
            </span>
            <span>
              {t('Banner.reentryDate')}:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2024-04-05,
              00:00:00 (UTC)
            </span>
          </div>
        </AlfacruxCountdown>
        <img src={alfacrux_logo.url} alt="AlfaCrux Logo" />
      </AlfaCruxBanner>

      <AlfaCruxBio>
        <div>
          <h2 className="uppercase">{t('FirstSection.title')}</h2>

          <aside>
            <div>
              <p>{t('FirstSection.leftDescription')}</p>
            </div>

            <img src={right_image.url} alt="AlfaCrux render" />
          </aside>

          <div
            dangerouslySetInnerHTML={{
              __html: t.raw('FirstSection.bottomDescription'),
            }}
          />
        </div>
      </AlfaCruxBio>

      <AlfaCruxWhy>
        <div>
          <h2>{t('SecondSection.title')}</h2>

          <div style={{ display: 'flex' }}>
            <div
              dangerouslySetInnerHTML={{
                __html: t.raw('SecondSection.description'),
              }}
            />
            <Image src={explodedViewImg} alt="" />
          </div>
        </div>
      </AlfaCruxWhy>

      <AlfaCruxMissionControl>
        <div className="mission">
          <video autoPlay loop muted>
            <source src="/videos/mission-control.mp4" type="video/mp4" />
          </video>

          <div className="banner">
            <h2>{t('ThirdSection.title')}</h2>

            <section>
              <aside
                dangerouslySetInnerHTML={{
                  __html: t.raw('ThirdSection.description'),
                }}
              />
              <a href="https://mission-control.lodestar.aerospace.unb.br/">
                {t('ThirdSection.link')}
              </a>
            </section>

            <span />
          </div>
        </div>
      </AlfaCruxMissionControl>

      <AlfaCruxRadioAmateur>
        <div>
          <h2>{t('FourthSection.title')}</h2>

          <article
            dangerouslySetInnerHTML={{
              __html: t.raw('FourthSection.description'),
            }}
          />

          <div>
            <aside>
              <div
                dangerouslySetInnerHTML={{ __html: t.raw('FourthSection.cta') }}
              />

              <Link href="/projects/alfacrux/radio">
                <span>{t('FourthSection.link')}</span>
                <div>
                  <Rss />
                </div>
              </Link>
            </aside>

            <Image src={radioAmateurImg} alt="Radio Amateur" />
          </div>
        </div>
      </AlfaCruxRadioAmateur>

      <AlfaCruxRecentActivities>
        <h2 id="launch-simulation">{t('FifthSection.title')}</h2>

        <section>
          <article
            dangerouslySetInnerHTML={{
              __html: t.raw('FifthSection.description'),
            }}
          />

          <Link
            href="https://www.instagram.com/lodestar_unb/"
            passHref
            style={{
              backgroundColor: '#F5F5F5',
              color: '#00244B',
              borderRadius: 5,
              padding: '14px 10px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('FifthSection.link')}
            <Instagram size={22} />
          </Link>

          <section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
            {recent_activities_cards.map((recent_activity) => (
              <div key={recent_activity.title} id={recent_activity.title}>
                {recent_activity.youtube_video_url ? (
                  <iframe
                    width="400"
                    height="210"
                    src={recent_activity.youtube_video_url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : recent_activity.news_url ? (
                  <Link
                    href={recent_activity.news_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '100%' }}
                  >
                    <img
                      src={recent_activity.image.url}
                      alt={recent_activity.image.alt}
                    />
                  </Link>
                ) : (
                  <img
                    src={recent_activity.image.url}
                    alt={recent_activity.image.alt}
                  />
                )}

                <aside>
                  <h3>{recent_activity.title}</h3>
                  <div>
                    <PrismicRichText field={recent_activity.description} />
                  </div>
                </aside>
              </div>
            ))}
          </section>

          <Link
            href="https://www.youtube.com/channel/UCkbKnVEH-IkNNB87Kn6CUtg"
            style={{
              backgroundColor: '#F5F5F5',
              color: '#00244B',
              borderRadius: 5,
              padding: '14px 10px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('FifthSection.cta')}
            <Youtube size={22} />
          </Link>
        </section>
      </AlfaCruxRecentActivities>

      <AlfaCruxGallery>
        <h2>{t('SixthSection.title')}</h2>

        <div>
          <h3 style={{ marginBottom: 20, marginLeft: 20 }}>
            {t('SixthSection.firstTitle')}
          </h3>

          <Slider {...settings}>
            {gs_gallery_images.map(({ image }) => (
              <div key={image.url}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>

        <div style={{ marginTop: 50 }}>
          <h3 style={{ marginBottom: 20, marginLeft: 20 }}>
            {t('SixthSection.secondTitle')}
          </h3>

          <Slider {...settings}>
            {ac_gallery_images.map(({ image }) => (
              <div key={image.url}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>

        <div style={{ marginTop: 50 }}>
          <h3 style={{ marginBottom: 20, marginLeft: 20 }}>
            {t('SixthSection.thirdTitle')}
          </h3>

          <Slider {...settings}>
            {ma_gallery_images.map(({ image }) => (
              <div key={image.url}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </AlfaCruxGallery>

      <AlfaCruxAcknowledgments>
        <h2>{t('SeventhSection.title')}</h2>

        <div
          style={{
            marginTop: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3 style={{ marginBottom: 60 }}>{t('SeventhSection.firstTitle')}</h3>

          <div
            style={{
              display: 'flex',
              gap: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {acknowledgments_first_subsection_images.map(
              ({ image, acknowledgments_image_link }) => (
                <Link
                  href={acknowledgments_image_link}
                  key={acknowledgments_image_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    key={image.url}
                    src={image.url}
                    alt={image.alt}
                    style={{
                      width: image.dimensions.width,
                      height: image.dimensions.height,
                    }}
                  />
                </Link>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            marginTop: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3 style={{ marginBottom: 60 }}>
            {t('SeventhSection.secondTitle')}
          </h3>

          <div
            style={{
              display: 'flex',
              gap: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {acknowledgments_second_subsection_images.map(
              ({ image, acknowledgments_image_link }) => (
                <Link
                  href={acknowledgments_image_link}
                  key={acknowledgments_image_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    key={image.url}
                    src={image.url}
                    alt={image.alt}
                    style={{
                      width: image.dimensions.width,
                      height: image.dimensions.height,
                    }}
                  />
                </Link>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            marginTop: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3 style={{ marginBottom: 60 }}>{t('SeventhSection.thirdTitle')}</h3>

          <div
            style={{
              display: 'flex',
              gap: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {acknowledgments_third_subsection_images.map(
              ({ image, acknowledgments_image_link }) => (
                <Link
                  href={acknowledgments_image_link}
                  key={acknowledgments_image_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    key={image.url}
                    src={image.url}
                    alt={image.alt}
                    style={{
                      width: image.dimensions.width,
                      height: image.dimensions.height,
                    }}
                  />
                </Link>
              ),
            )}
          </div>
        </div>
      </AlfaCruxAcknowledgments>
    </main>
  )
}
