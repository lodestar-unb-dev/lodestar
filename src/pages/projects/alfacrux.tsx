import Slider, { Settings } from "react-slick";
import { FiRss, FiYoutube } from "react-icons/fi";
import { useTheme } from "styled-components";
import PrismicDOM from "prismic-dom";
import Link from 'next/link';

import { Layout } from "../../components/Layout";
import { NoScrollLink } from "../../components/NoScrollLink";

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
  AlfaCruxMissionControl
} from "../../styles/pages/projects/alfacrux.styles";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import { useEffect, useState } from "react";
import { intervalToDuration } from "date-fns";

interface AlfaCruxPrismicDocument {
  banner_image: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    url: string;
  };
  alfacrux_logo: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    url: string;
  };
  about_title: string;
  left_description: {
    type: string;
    text: string;
  }[];
  right_image: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    url: string;
  };
  bottom_description: {
    type: string;
    text: string;
  }[];
  why_title: string;
  why_description: {
    type: string;
    text: string;
  }[];
  gallery_title: string;
  gs_gallery_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
  }[];
  ac_gallery_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
  }[];
  ma_gallery_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
  }[];
  radio_amateurs_title: string;
  radio_amateurs_description: {
    type: string;
    text: string;
  }[];
  radio_amateurs_cta: {
    type: string;
    text: string;
  }[];
  radio_amateurs_button: string;
  recent_activities_title: string;
  recent_activities_description: {
    type: string;
    text: string;
  }[];
  recent_activities_cards: {
    youtube_video_url: string;
    title: string;
    description: string;
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
    news_url: string;
  }[];
  acknowledgments_title: string;
  acknowledgments_first_subsection_title: string;
  acknowledgments_second_subsection_title: string;
  acknowledgments_third_subsection_title: string;
  acknowledgments_first_subsection_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
    acknowledgments_image_link: string;
  }[];
  acknowledgments_second_subsection_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
    acknowledgments_image_link: string;
  }[];
  acknowledgments_third_subsection_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
    acknowledgments_image_link: string;
  }[];
}

interface AlfaCruxProps {
  alfacruxPrismicDocument: AlfaCruxPrismicDocument | null;
}

const launchDate = new Date(2022, 3, 1, 13, 24, 0, 0);

export default function AlfaCrux({ alfacruxPrismicDocument }: AlfaCruxProps) {
  const [countdown, setCountdown] = useState(intervalToDuration({
    start: new Date(),
    end: launchDate
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(intervalToDuration({
        start: launchDate,
        end: new Date()
      }))
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])
  
  if (!alfacruxPrismicDocument) {
    return (
      <div
        style={{
          color: "black",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Erro no carregamento das informações.
      </div>
    );
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
    acknowledgments_third_subsection_images
  } = alfacruxPrismicDocument;

  const theme = useTheme();

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
  };

  function scrollToRecentActivities() {
    const el = window.document.getElementById('launch-simulation')
    const r = el?.getBoundingClientRect()
    if (r) {
      window?.top?.scroll({
        top: scrollY + r.top - 73,
        behavior: "smooth"
      })
    }
  }

  return (
    <Layout>
      <main style={{ backgroundColor: theme.colors.blueDark }}>
        <AlfaCruxBanner role="banner" bgImageUrl={banner_image.url}>
          <AlfacruxCallout>
            Did you know that you can actively help our project and consume AlfaCrux`s latest data <Link href="/projects/alfacrux/radio"><a><strong>with just one click?</strong></a></Link> 
          </AlfacruxCallout>

          <AlfacruxCountdown>
            <header>
              <h3>Mission Elapsed Time <small>🚀</small></h3>
            </header>

            <section>
            {(countdown.years ?? 0) > 0 && (
                <div>
                  <p>{countdown.years}</p>
                  <strong>year{countdown.years !== 1 && 's'}</strong>
                </div>
              )}

              {(countdown.years ?? 0) + (countdown.months ?? 0) > 0 && (
                <div>
                  <p>{countdown.months}</p>
                  <strong>month{countdown.months !== 1 && 's'}</strong>
                </div>
              )}

              {(countdown.years ?? 0) + (countdown.months ?? 0) + (countdown.days ?? 0) > 0 && (
                <div>
                  <p>{countdown.days}</p>
                  <strong>day{countdown.days !== 1 && 's'}</strong>
                </div>
              )}

              {(countdown.years ?? 0) + (countdown.months ?? 0) + (countdown.days ?? 0) + (countdown.hours ?? 0) > 0 && (
                <div>
                  <p>{countdown.hours}</p>
                  <strong>hour{countdown.hours !== 1 && 's'}</strong>
                </div>
              )}

              {(countdown.years ?? 0) + (countdown.months ?? 0) + (countdown.days ?? 0) + (countdown.hours ?? 0) + (countdown.minutes ?? 0) > 0 && (
                <div>
                  <p>{countdown.minutes}</p>
                  <strong>minute{countdown.minutes !== 1 && 's'}</strong>
                </div>
              )}

              {(countdown.years ?? 0) + (countdown.months ?? 0) + (countdown.days ?? 0) + (countdown.hours ?? 0) + (countdown.minutes ?? 0) + (countdown.seconds ?? 0) > 0 && (
                <div>
                  <p>{countdown.seconds}</p>
                  <strong>second{countdown.seconds !== 1 && 's'}</strong>
                </div>
              )}
            </section>
          </AlfacruxCountdown>
          <img src={alfacrux_logo.url} alt="AlfaCrux Logo" />
        </AlfaCruxBanner>

        <AlfaCruxBio>
          <div>
            <h2>{about_title}</h2>

            <aside>
              <div
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(left_description),
                }}
              />

              <img src={right_image.url} alt="AlfaCrux render" />
            </aside>

            <div
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(bottom_description),
              }}
            />
          </div>
        </AlfaCruxBio>

        <AlfaCruxWhy>
          <div>
            <h2>{why_title}</h2>

            <div style={{ display: 'flex' }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(why_description),
                }}
              />
              <img src="/exploded_view_alfacrux.png" alt="" />
            </div>
          </div>
        </AlfaCruxWhy>

        <AlfaCruxMissionControl>
          <div className="mission">
            <video autoPlay loop muted>
              <source src="/mission-control.mp4" type="video/mp4" />
            </video>

            <div className="banner">
              <h2>Mission Control</h2>
              
              <section>
                <ul>
                  <li>Real-time Tracker</li>
                  <li>Next 2 day passes</li>
                  <li>SpaceTrack’s info updates every 2 hours</li>
                  <li>Mission planner</li>
                  <li>30 parameters charts and tables</li>
                  <li>Mission health</li>
                  <li>And more...</li>
                </ul>
                
                <a href="https://mission-control.lodestar.aerospace.unb.br/">Check our new platform now!</a>
              </section>

              <span />
            </div>
          </div>
        </AlfaCruxMissionControl>

        <AlfaCruxRadioAmateur>
          <div>
            <h2>{radio_amateurs_title}</h2>

            <article
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(radio_amateurs_description)
              }}
            />

            <div>
              <aside>
                <div
                  dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(radio_amateurs_cta),
                  }}
                />

                <NoScrollLink href="/projects/alfacrux/radio">
                  <a>
                    <span>{radio_amateurs_button}</span>
                    <div>
                      <FiRss />
                    </div>
                  </a>
                </NoScrollLink>
              </aside>

              <img src="/radio_amateur.svg" alt="Radio Amateur" />
            </div>
          </div>
        </AlfaCruxRadioAmateur>

        <AlfaCruxRecentActivities>
          <h2 id="launch-simulation">{recent_activities_title}</h2>

          <section>
            <article
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(recent_activities_description)
              }}
            />

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
                    <NoScrollLink 
                      href={recent_activity.news_url}>
                      <a target="_blank" rel="noopener noreferrer">
                        <img src={recent_activity.image.url} alt={recent_activity.image.alt} />
                      </a>
                    </NoScrollLink>
                  ) : (
                    <img src={recent_activity.image.url} alt={recent_activity.image.alt}  />
                  ) }

                  <aside>
                    <h3>{recent_activity.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(recent_activity.description) }}
                    />
                  </aside>
                </div>
              ))}
            </section>

            <NoScrollLink href='https://www.youtube.com/channel/UCkbKnVEH-IkNNB87Kn6CUtg' passHref>
              <a style={{ 
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
                  Check More Videos <FiYoutube size={22} />
              </a>
            </NoScrollLink>
          </section>
        </AlfaCruxRecentActivities>

        <AlfaCruxGallery>
          <h2>{gallery_title}</h2>

          <div>
            <h3 style={{ marginBottom: 20, marginLeft: 20 }}>Ground Station assembly, validation, and tests</h3>

            <Slider {...settings}>
              {gs_gallery_images.map(({ image }) => (
                <div key={image.url}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </Slider>
          </div>

          <div style={{ marginTop: 50 }}>
            <h3 style={{ marginBottom: 20, marginLeft: 20 }}>AlfaCrux assembly, validation, and tests campaign</h3>

            <Slider {...settings}>
              {ac_gallery_images.map(({ image }) => (
                <div key={image.url}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </Slider>
          </div>

          <div style={{ marginTop: 50 }}>
            <h3 style={{ marginBottom: 20, marginLeft: 20 }}>Magnetic actuation system design, implementation, and tests</h3>

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

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: 60 }}>{acknowledgments_first_subsection_title}</h3>

            <div style={{ display: 'flex', gap: 60, justifyContent: 'center', alignItems: 'center' }}>
              {acknowledgments_first_subsection_images.map(({ image, acknowledgments_image_link }) => (
                <NoScrollLink href={acknowledgments_image_link} passHref key={acknowledgments_image_link}>
                  <a
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img key={image.url} src={image.url} alt={image.alt} style={{ width: image.dimensions.width, height: image.dimensions.height }} />
                  </a>
                </NoScrollLink>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: 60 }}>{acknowledgments_second_subsection_title}</h3>

            <div style={{ display: 'flex', gap: 60, justifyContent: 'center', alignItems: 'center' }}>
              {acknowledgments_second_subsection_images.map(({ image, acknowledgments_image_link }) => (
                <NoScrollLink href={acknowledgments_image_link} passHref key={acknowledgments_image_link}>
                <a
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img key={image.url} src={image.url} alt={image.alt} style={{ width: image.dimensions.width, height: image.dimensions.height }} />
                </a>
              </NoScrollLink>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: 60 }}>{acknowledgments_third_subsection_title}</h3>

            <div style={{ display: 'flex', gap: 60, justifyContent: 'center', alignItems: 'center' }}>
              {acknowledgments_third_subsection_images.map(({ image, acknowledgments_image_link }) => (
                <NoScrollLink href={acknowledgments_image_link} passHref key={acknowledgments_image_link}>
                <a
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img key={image.url} src={image.url} alt={image.alt} style={{ width: image.dimensions.width, height: image.dimensions.height }} />
                </a>
              </NoScrollLink>
              ))}
            </div>
          </div>
        </AlfaCruxAcknowledgments>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<AlfaCruxProps> = async ({
  previewData,
}) => {
  const correctlyTypedPreviewData = previewData as { ref: string } | null;

  const prismic = getPrismicClient();
  const alfacruxResponse = await prismic.getSingle("alfacrux", {
    ref: correctlyTypedPreviewData?.ref ? correctlyTypedPreviewData.ref : "",
  });

  return {
    props: {
      alfacruxPrismicDocument: alfacruxResponse?.data ?? null,
    },
  };
};
