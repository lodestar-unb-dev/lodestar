import { GetStaticProps } from 'next';
import { Fragment, useEffect } from 'react';
import PrismicDOM from 'prismic-dom';

import { NoScrollLink } from '../components/NoScrollLink';

import {
  Container,
  ProjectsHeader,
  SpaceMissionProject,
  SmallSATSimulatorProject,
  HighAltitudeBallooningProject,
  Divider
} from '../styles/pages/projects.styles';
import { getPrismicClient } from '../services/prismic';

interface ProjectsPrismicDocument {
  title: string;
  subtitle: {
    type: string;
    text: string;
  }[];
  space_missions_title: string;
  space_missions_projects: {
    project_title: string;
    project_description: {
      type: string;
      text: string;
    }[];
    project_logo: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    }
    project_url: string;
  }[];
  small_sat_simulator_title: string;
  small_sat_simulator_projects: {
    project_title: string;
    project_description: {
      type: string;
      text: string;
    }[];
    project_logo: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    }
    project_url: string;
  }[];
  high_altitude_ballooning_title: string;
  high_altitude_ballooning_projects: {
    project_title: string;
    project_description: {
      type: string;
      text: string;
    }[];
    project_logo: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    }
    project_url: string;
  }[];
}

interface ProjectsProps {
  projectsPrismicDocument: ProjectsPrismicDocument | null;
}

export default function Projects({ projectsPrismicDocument }: ProjectsProps) {
  if (!projectsPrismicDocument) {
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
    space_missions_title,
    space_missions_projects,
    small_sat_simulator_title,
    small_sat_simulator_projects,
    high_altitude_ballooning_title,
    high_altitude_ballooning_projects
  } = projectsPrismicDocument;
  
  useEffect(() => {
    const path = window.location.hash
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "")
        const el = window.document.getElementById(id)
        const r = el?.getBoundingClientRect()
        if (r) {
          window?.top?.scroll({
            top: pageYOffset + r.top -73,
            behavior: "smooth",
          })
        }
      }, 600)
    }
  }, [])

  return (
    <Container>
      <ProjectsHeader>
        <h2>{title}</h2>
        <div 
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(subtitle)
          }}
        />
      </ProjectsHeader>  

      <SpaceMissionProject id="space-missions">
        <h3>{space_missions_title}</h3>

        {space_missions_projects.map((space_mission, index) => (
          <Fragment key={space_missions_title}>
            <article>
              <img src={space_mission.project_logo.url} alt="AlfaCrux logo" />

              <div>
                <h4>
                  {space_mission.project_title}
                </h4>

                <div 
                  dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(space_mission.project_description)
                  }}
                />

                {space_mission.project_url ? space_mission.project_url.includes('http') ? (
                    <a
                      href={space_mission.project_url}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Check More
                    </a>
                ) : (
                  <NoScrollLink href={space_mission.project_url} passHref>
                    <a>Check More</a>
                  </NoScrollLink>
                ) : (
                  <span>Comming soon</span>
                )}
              </div>
            </article>

            {index < space_missions_projects.length -1 && (
              <Divider dividerColor="blue" />
            )}
          </Fragment>
        ))}
      </SpaceMissionProject>

      <SmallSATSimulatorProject id="small-sat-simulator">
        <h3>{small_sat_simulator_title}</h3>

        {small_sat_simulator_projects.map((sss, index) => (
          <Fragment key={small_sat_simulator_title}>
            <article>
              <img src={sss.project_logo.url} alt={sss.project_logo.alt} />

              <div>
                <h4>
                  {sss.project_title}
                </h4>

                <div 
                  dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(sss.project_description)
                  }}
                />

                {sss.project_url ? sss.project_url.includes('http') ? (
                    <a
                      href={sss.project_url}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Check More
                    </a>
                ) : (
                  <NoScrollLink href={sss.project_url} passHref>
                    <a>Check More</a>
                  </NoScrollLink>
                ) : (
                  <span>Comming soon</span>
                )}
              </div>
            </article>

            {index < small_sat_simulator_projects.length -1 && (
              <Divider dividerColor="black10" />
            )}
          </Fragment>
        ))}
      </SmallSATSimulatorProject>

      <HighAltitudeBallooningProject id="high-altitude-ballooning">
        <h3>{high_altitude_ballooning_title}</h3>

        {high_altitude_ballooning_projects.map((hab, index) => (
          <Fragment key={high_altitude_ballooning_title}>
            <article>
              <img src={hab.project_logo.url} alt={hab.project_logo.alt} />

              <div>
                <h4>
                  {hab.project_title}
                </h4>

                <div 
                  dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(hab.project_description)
                  }}
                />

                {hab.project_url ? hab.project_url.includes('http') ? (
                    <a
                      href={hab.project_url}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Check More
                    </a>
                ) : (
                  <NoScrollLink href={hab.project_url} passHref>
                    <a>Check More</a>
                  </NoScrollLink>
                ) : (
                  <span>Comming soon</span>
                )}
              </div>
            </article>

            {index < high_altitude_ballooning_projects.length -1 && (
              <Divider dividerColor="greenLight" />
            )}
          </Fragment>
        ))}
      </HighAltitudeBallooningProject>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({
  previewData
}) => {
  const correctlyTypedPreviewData = previewData as { ref: string } | null;
  
  const prismic = getPrismicClient();
  const projectsResponse = await prismic.getSingle('projects', {
    ref: correctlyTypedPreviewData?.ref ? correctlyTypedPreviewData.ref : ''
  });

  return {
    props: {
      projectsPrismicDocument: projectsResponse?.data ?? null,
    }
  }
}