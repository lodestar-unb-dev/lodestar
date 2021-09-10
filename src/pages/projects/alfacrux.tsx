import Slider, { Settings } from "react-slick";
import { FiRss } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import PrismicDOM from 'prismic-dom';

import { Layout } from "../../components/Layout";
import { NoScrollLink } from "../../components/NoScrollLink";

import {
  AlfacruxBanner,
  AlfacruxBio,
  AlfacruxGallery,
  AlfacruxRadioAmateur,
  AlfacruxRecentActivities,
  AlfacruxWhy
} from '../../styles/pages/projects/alfacrux.styles';
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

interface AlfacruxPrismicDocument {
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
  gallery_images: {
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
}

interface AlfacruxProps {
  alfacruxPrismicDocument: AlfacruxPrismicDocument | null;
}

export default function AlfaCrux({ alfacruxPrismicDocument }: AlfacruxProps) {
  if (!alfacruxPrismicDocument) {
    return (
      <div
        style={{
          color: 'black',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center' 
        }}
      >Erro no carregamento das informações.</div>
    )
  }

  const {
    about_title,
    alfacrux_logo,
    banner_image,
    bottom_description,
    gallery_images,
    gallery_title,
    left_description,
    radio_amateurs_button,
    radio_amateurs_cta,
    radio_amateurs_title,
    recent_activities_cards,
    recent_activities_title,
    right_image,
    why_description,
    why_title
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
          dots: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <Layout>
      <main style={{ backgroundColor: theme.colors.blueDark }} >
        <AlfacruxBanner 
          role="banner"
          bgImageUrl={banner_image.url}
        >
          <div />
          
          <img src={alfacrux_logo.url} alt="AlfaCrux Logo" />
        </AlfacruxBanner>

        <AlfacruxBio>
          <div>
            <h2>{about_title}</h2>
            
              <aside>
                <div 
                  dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(left_description)
                  }}
                />

                <img src={right_image.url} alt="Alfacrux render" />
              </aside>
              
              <div 
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(bottom_description)
                }}
              />
          </div>
        </AlfacruxBio>

        <AlfacruxWhy>
            <h2>{why_title}</h2>
         
            <div 
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(why_description)
              }}
            />
        </AlfacruxWhy>

        <AlfacruxGallery>
            <h2>{gallery_title}</h2>  

            <div>
              <Slider {...settings}>
                {gallery_images.map(({ image }) => (
                  <div key={image.url}>
                    <img src={image.url} alt={image.alt} />
                  </div>
                ))}
              </Slider>
            </div>
        </AlfacruxGallery>

        <AlfacruxRadioAmateur>
          <h2>{radio_amateurs_title}</h2>

          <div>
            <aside>
              <div 
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(radio_amateurs_cta)
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
        </AlfacruxRadioAmateur>

        <AlfacruxRecentActivities>
            <h2>{recent_activities_title}</h2>  

            <section>
              {recent_activities_cards.map(recent_activity => (
                <div key={recent_activity.youtube_video_url}>
                  <iframe 
                    width="510" 
                    height="380" 
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
            </section>
        </AlfacruxRecentActivities>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<AlfacruxProps> = async ({
  previewData
}) => {
  const correctlyTypedPreviewData = previewData as { ref: string } | null;
  
  const prismic = getPrismicClient();
  const alfacruxResponse = await prismic.getSingle('alfacrux', {
    ref: correctlyTypedPreviewData?.ref ? correctlyTypedPreviewData.ref : ''
  });

  return {
    props: {
      alfacruxPrismicDocument: alfacruxResponse?.data ?? null,
    }
  }
}