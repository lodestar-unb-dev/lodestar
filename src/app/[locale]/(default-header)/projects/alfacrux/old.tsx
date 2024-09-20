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
  AlfacruxCallout,
  AlfaCruxMissionControl,
} from './styles'
import { intervalToDuration } from 'date-fns'
import { RichTextField } from '@prismicio/client'
import Image from 'next/image'

import explodedViewImg from './assets/exploded_view_alfacrux.png'
import radioAmateurImg from './assets/radio_amateur.svg'

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

const launchDate = new Date(2022, 3, 1, 13, 24, 0, 0)
const reentryDate = new Date(2024, 3, 5, 0, 0, 0, 0)

export function OldAlfaCrux({ alfacruxPrismicDocument }: AlfaCruxProps) {
  const missionEllapsedTime = intervalToDuration({
    start: reentryDate,
    end: launchDate,
  })

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
    about_title,
    alfacrux_logo,
    banner_image,
    bottom_description,
    gs_gallery_images,
    ac_gallery_images,
    ma_gallery_images,
    gallery_title,
    left_description,
    radio_amateurs_button,
    radio_amateurs_description,
    radio_amateurs_cta,
    radio_amateurs_title,
    recent_activities_cards,
    recent_activities_title,
    recent_activities_description,
    right_image,
    why_description,
    why_title,
    acknowledgments_title,
    acknowledgments_first_subsection_title,
    acknowledgments_second_subsection_title,
    acknowledgments_third_subsection_title,
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
        <AlfacruxCallout>
          Did you know that you can actively help our project and consume
          AlfaCrux`s latest data{' '}
          <Link href="/projects/alfacrux/radio">
            <strong>with just one click?</strong>
          </Link>
        </AlfacruxCallout>

        <AlfacruxCountdown>
          <header>
            <h3>
              Mission Elapsed Time <small>🚀</small>
            </h3>
          </header>

          <section>
            {(missionEllapsedTime.years ?? 0) > 0 && (
              <div>
                <p>{missionEllapsedTime.years}</p>
                <strong>year{missionEllapsedTime.years !== 1 && 's'}</strong>
              </div>
            )}

            {(missionEllapsedTime.years ?? 0) +
              (missionEllapsedTime.months ?? 0) >
              0 && (
              <div>
                <p>{missionEllapsedTime.months}</p>
                <strong>month{missionEllapsedTime.months !== 1 && 's'}</strong>
              </div>
            )}

            {(missionEllapsedTime.years ?? 0) +
              (missionEllapsedTime.months ?? 0) +
              (missionEllapsedTime.days ?? 0) >
              0 && (
              <div>
                <p>{missionEllapsedTime.days}</p>
                <strong>day{missionEllapsedTime.days !== 1 && 's'}</strong>
              </div>
            )}

            {(missionEllapsedTime.years ?? 0) +
              (missionEllapsedTime.months ?? 0) +
              (missionEllapsedTime.days ?? 0) +
              (missionEllapsedTime.hours ?? 0) >
              0 && (
              <div>
                <p>{missionEllapsedTime.hours}</p>
                <strong>hour{missionEllapsedTime.hours !== 1 && 's'}</strong>
              </div>
            )}

            {(missionEllapsedTime.years ?? 0) +
              (missionEllapsedTime.months ?? 0) +
              (missionEllapsedTime.days ?? 0) +
              (missionEllapsedTime.hours ?? 0) +
              (missionEllapsedTime.minutes ?? 0) >
              0 && (
              <div>
                <p>{missionEllapsedTime.minutes}</p>
                <strong>
                  minute{missionEllapsedTime.minutes !== 1 && 's'}
                </strong>
              </div>
            )}

            {(missionEllapsedTime.years ?? 0) +
              (missionEllapsedTime.months ?? 0) +
              (missionEllapsedTime.days ?? 0) +
              (missionEllapsedTime.hours ?? 0) +
              (missionEllapsedTime.minutes ?? 0) +
              (missionEllapsedTime.seconds ?? 0) >
              0 && (
              <div>
                <p>{missionEllapsedTime.seconds}</p>
                <strong>
                  second{missionEllapsedTime.seconds !== 1 && 's'}
                </strong>
              </div>
            )}
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
              Launch Date:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-04-01,
              13:24:00 (UTC)
            </span>
            <span>Last Decoded Telemetry: 2024-04-03, 02:58:00 (UTC)</span>
            <span>
              Reentry Date:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2024-04-05,
              00:00:00 (UTC)
            </span>
          </div>
        </AlfacruxCountdown>
        <img src={alfacrux_logo.url} alt="AlfaCrux Logo" />
      </AlfaCruxBanner>

      <AlfaCruxBio>
        <div>
          <h2>{about_title}</h2>

          <aside>
            <div>
              <PrismicRichText field={left_description} />
            </div>

            <img src={right_image.url} alt="AlfaCrux render" />
          </aside>

          <div>
            <PrismicRichText field={bottom_description} />
          </div>
        </div>
      </AlfaCruxBio>

      <AlfaCruxWhy>
        <div>
          <h2>{why_title}</h2>

          <div style={{ display: 'flex' }}>
            <div>
              <PrismicRichText field={why_description} />
            </div>
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

      <AlfaCruxRadioAmateur>
        <div>
          <h2>{radio_amateurs_title}</h2>

          <article>
            <PrismicRichText field={radio_amateurs_description} />
          </article>

          <div>
            <aside>
              <div>
                <PrismicRichText field={radio_amateurs_cta} />
              </div>

              <Link href="/projects/alfacrux/radio">
                <span>{radio_amateurs_button}</span>
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
        <h2 id="launch-simulation">{recent_activities_title}</h2>

        <section>
          <article>
            <PrismicRichText field={recent_activities_description} />
          </article>

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
            Check our latest news <Instagram size={22} />
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
            Check More Videos <Youtube size={22} />
          </Link>
        </section>
      </AlfaCruxRecentActivities>

      <AlfaCruxGallery>
        <h2>{gallery_title}</h2>

        <div>
          <h3 style={{ marginBottom: 20, marginLeft: 20 }}>
            Ground Station assembly, validation, and tests
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
            AlfaCrux assembly, validation, and tests campaign
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
            Magnetic actuation system design, implementation, and tests
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
        <h2>{acknowledgments_title}</h2>

        <div
          style={{
            marginTop: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3 style={{ marginBottom: 60 }}>
            {acknowledgments_first_subsection_title}
          </h3>

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
            {acknowledgments_second_subsection_title}
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
          <h3 style={{ marginBottom: 60 }}>
            {acknowledgments_third_subsection_title}
          </h3>

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
