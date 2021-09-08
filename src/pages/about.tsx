import { GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';

import { Layout } from '../components/Layout';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { getPrismicClient } from '../services/prismic';

import {
  Container,
  Overview,
  TeamMembersContainer
} from '../styles/pages/about.styles';

interface AboutPrismicDocument {
  title: string;
  subtitle: {
    type: string;
    text: string;
  }[];
  members_title: string;
  members_subtitle: {
    type: string;
    text: string;
  }[];
  members_card: {
    member_avatar: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
    member_name: string;
    member_affiliation: string;
    member_role: string;
    member_research_area: string;
    member_lattes: string;
  }[];
}

interface AboutProps {
  aboutPrismicDocument: AboutPrismicDocument | null;
}

export default function About({ aboutPrismicDocument }: AboutProps) {
  if (!aboutPrismicDocument) {
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
    members_title,
    members_subtitle,
    members_card
  } = aboutPrismicDocument;

  return (
    <Layout>
      <Container>
        <Overview>
          <header>
            <h2>{title}</h2>

            <div 
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(subtitle)
              }}
            />
          </header>
        </Overview>

        <TeamMembersContainer>
          <header>
            <h2>{members_title}</h2>
            
            <div 
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(members_subtitle)
              }}
            />
          </header>

          <div>
            {members_card.map((teamMember, index) => (
              <TeamMemberCard 
                key={teamMember.member_name}
                index={index}
                name={teamMember.member_name}
                imageUrl={teamMember.member_avatar.url}
                lattesUrl={teamMember.member_lattes}
                organization={teamMember.member_affiliation}
                researchArea={teamMember.member_research_area}
                role={teamMember.member_role}
              />
            ))}
          </div>
        </TeamMembersContainer>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({
  previewData
}) => {
  const correctlyTypedPreviewData = previewData as { ref: string } | null;
  
  const prismic = getPrismicClient();
  const aboutResponse = await prismic.getSingle('about', {
    ref: correctlyTypedPreviewData?.ref ? correctlyTypedPreviewData.ref : ''
  });

  return {
    props: {
      aboutPrismicDocument: aboutResponse?.data ?? null,
    }
  }
}