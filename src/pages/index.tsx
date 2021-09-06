import { GetStaticProps } from 'next';
import { FiBox, FiHardDrive, FiDroplet } from 'react-icons/fi';
import PrismicDOM from 'prismic-dom';

import { Layout } from '../components/Layout';
import { NoScrollLink } from '../components/NoScrollLink';
import { getPrismicClient } from '../services/prismic';

import {
  HomeBanner,
  HomeProjectSpaceMission,
  HomeProjectSmallSAT,
  HomeProjectHighAltitudeBallooning
} from '../styles/pages/home.styles';

interface HomePrismicDocument {
  title: string;
  subtitle: string;
  banner_logo: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    url: string;
  };
  banner_background: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    url: string;
  };
  space_missions_title: string;
  space_missions_description: 
    {
      type: string;
      text: string;
    }[];
  space_missions_projects: 
    {
      space_missions_project_name: string;
    }[]
  ;
  small_sat_simulator_title: string;
  small_sat_simulator_description: 
    {
      type: string;
      text: string;
    }[];
  small_sat_simulator_projects: 
      {
          small_sat_simulator_project_name: string;
      }[];
  high_altitude_ballooning_title: string;
  high_altitude_ballooning_description: 
    {
      type: string;
      text: string;
    }[];
  high_altitude_ballooning_projects: 
    {
        high_altitude_ballooning_project_name: string;
    }[];
}

interface HomeProps {
  homePrismicDocument: HomePrismicDocument | null;
}

export default function Home({ 
  homePrismicDocument
}: HomeProps) {

  if (!homePrismicDocument) {
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
    title,
    subtitle,
    banner_logo,
    banner_background,
    space_missions_title,
    space_missions_description,
    space_missions_projects,
    small_sat_simulator_title,
    small_sat_simulator_description,
    small_sat_simulator_projects,
    high_altitude_ballooning_title,
    high_altitude_ballooning_description,
    high_altitude_ballooning_projects
  } = homePrismicDocument;

  return (
    <Layout>
      <HomeBanner 
        role="banner"
        bgImageUrl={banner_background.url}
      >
        <div />
        
        <aside>
          <div>
            <h1>{title}</h1>

            <h3 dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(subtitle)
            }} />
          </div>

          <img src={banner_logo.url} alt={banner_logo.alt} />
        </aside>
      </HomeBanner>

      <HomeProjectSpaceMission>
        <section>
          <aside>
            <h2>{space_missions_title}</h2>

            <article 
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(space_missions_description)
              }}
            />

            <div>
              {space_missions_projects.map(({space_missions_project_name}) => (
                <aside key={space_missions_project_name}>
                  <FiBox />
                  <span>{space_missions_project_name}</span>
                </aside>
              ))}
            </div>

            <NoScrollLink href="/projects#space-missions">
              <a>
                More info
              </a>
            </NoScrollLink>
          </aside>

          <img src="/space_missions_icon.svg" alt="space missions icon" />
        </section>
      </HomeProjectSpaceMission>

      <HomeProjectSmallSAT>
        <section>
          <img src="/small_sat_simulator_icon.svg" alt="small sat simulator icon" />

          <aside>
            <h2>{small_sat_simulator_title}</h2>

            <article
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(small_sat_simulator_description)
              }}
            />

            <div>
              {small_sat_simulator_projects.map(({small_sat_simulator_project_name}) => (
                <aside key={small_sat_simulator_project_name}>
                  <FiHardDrive />
                  <span>{small_sat_simulator_project_name}</span>
                </aside>
              ))}
            </div>

            <NoScrollLink href="/projects#small-sat-simulator">
              <a>
                More info
              </a>
            </NoScrollLink>
          </aside>
        </section>
      </HomeProjectSmallSAT>

      <HomeProjectHighAltitudeBallooning>
        <section>
          <aside>
            <h2>{high_altitude_ballooning_title}</h2>

            <article 
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(high_altitude_ballooning_description)
              }}
            />

            <div>
              {high_altitude_ballooning_projects.map(({high_altitude_ballooning_project_name}) => (
                <aside key={high_altitude_ballooning_project_name}>
                  <FiDroplet />
                  <span>{high_altitude_ballooning_project_name}</span>
                </aside>
              ))}
            </div>

            <NoScrollLink href="/projects#high-altitude-ballooning">
              <a>
                More info
              </a>
            </NoScrollLink>
          </aside>

          <img src="/high_altitude_ballooning_icon.svg" alt="high altitude ballooning icon" />
        </section>
      </HomeProjectHighAltitudeBallooning>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const homeResponse = await prismic.getSingle('home', {});

  return {
    props: {
      homePrismicDocument: homeResponse?.data ?? null
    }
  }
}
