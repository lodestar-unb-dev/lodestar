import Slider, { Settings } from "react-slick";
import { FiRss, FiYoutube } from "react-icons/fi";
import { useTheme } from "styled-components";
import PrismicDOM from "prismic-dom";

import { Layout } from "../../components/Layout";
import { NoScrollLink } from "../../components/NoScrollLink";

import {
  AlfaCruxBanner,
  AlfaCruxBio,
  AlfaCruxGallery,
  AlfaCruxRadioAmateur,
  AlfaCruxRecentActivities,
  AlfaCruxWhy,
  AlfaCruxAcknowledgments
} from "../../styles/pages/projects/alfacrux.styles";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

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
  radio_amateurs_cta: {
    type: string;
    text: string;
  }[];
  radio_amateurs_button: string;
  recent_activities_title: string;
  recent_activities_cards: {
    youtube_video_url: string;
    title: string;
    description: string;
  }[];
  title: string;
  first_subsection_title: string;
  second_subsection_title: string;
  third_subsection_title: string;
  first_subsection_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
  }[];
  second_subsection_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
  }[];
  third_subsection_images: {
    image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
  }[];
}

interface AlfaCruxProps {
  alfacruxPrismicDocument: AlfaCruxPrismicDocument | null;
}

export default function AlfaCrux({ alfacruxPrismicDocument }: AlfaCruxProps) {
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
    radio_amateurs_cta,
    radio_amateurs_title,
    recent_activities_cards,
    recent_activities_title,
    right_image,
    why_description,
    why_title,
    title,
    first_subsection_title,
    second_subsection_title,
    third_subsection_title,
    first_subsection_images,
    second_subsection_images,
    third_subsection_images
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

  return (
    <Layout>
      <main style={{ backgroundColor: theme.colors.blueDark }}>
        <AlfaCruxBanner role="banner" bgImageUrl={banner_image.url}>
          <div />

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

        <AlfaCruxRadioAmateur>
          <div>
            <h2>{radio_amateurs_title}</h2>

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
          <h2>{recent_activities_title}</h2>

          <section>
            {recent_activities_cards.map((recent_activity) => (
              <div key={recent_activity.youtube_video_url}>
                <iframe
                  width="400"
                  height="210"
                  src={recent_activity.youtube_video_url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <aside>
                  <h3>{recent_activity.title}</h3>
                  <p>{recent_activity.description}</p>
                </aside>
              </div>
            ))}

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
                }}>Check More Videos <FiYoutube size={22} /></a>
            </NoScrollLink>
          </section>
        </AlfaCruxRecentActivities>

        <AlfaCruxGallery>
          <h2>{gallery_title}</h2>

          <div>
            <h3 style={{ marginBottom: 20, marginLeft: 20 }}>Ground Station assembly, validation and tests</h3>

            <Slider {...settings}>
              {gs_gallery_images.map(({ image }) => (
                <div key={image.url}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </Slider>
          </div>

          <div style={{ marginTop: 50 }}>
            <h3 style={{ marginBottom: 20, marginLeft: 20 }}>AlfaCrux assembly, validation and tests campaign</h3>

            <Slider {...settings}>
              {ac_gallery_images.map(({ image }) => (
                <div key={image.url}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </Slider>
          </div>

          <div style={{ marginTop: 50 }}>
            <h3 style={{ marginBottom: 20, marginLeft: 20 }}>Magnetic actuation system design, implementation and tests</h3>

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
          <h2>Acknowledgments</h2>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: 60 }}>{first_subsection_title}</h3>

            <div style={{ display: 'flex', gap: 60, justifyContent: 'center', alignItems: 'center' }}>
              {first_subsection_images.map(({ image }) => (
                <img key={image.url} src={image.url} alt={image.alt} style={{ width: image.dimensions.width, height: image.dimensions.height }} />
              ))}
            </div>
          </div>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: 60 }}>{second_subsection_title}</h3>

            <div style={{ display: 'flex', gap: 60, justifyContent: 'center', alignItems: 'center' }}>
              {second_subsection_images.map(({ image }) => (
                <img key={image.url} src={image.url} alt={image.alt} style={{ width: image.dimensions.width, height: image.dimensions.height }} />
              ))}
            </div>
          </div>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: 60 }}>{third_subsection_title}</h3>

            <div style={{ display: 'flex', gap: 60, justifyContent: 'center', alignItems: 'center' }}>
              {third_subsection_images.map(({ image }) => (
                <img key={image.url} src={image.url} alt={image.alt} style={{ width: image.dimensions.width, height: image.dimensions.height }} />
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
