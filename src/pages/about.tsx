import { Layout } from '../components/Layout';
import { TeamMemberCard } from '../components/TeamMemberCard';

import {
  Container,
  TeamMembersContainer
} from '../styles/pages/about.styles';

export default function About() {
  const teamMembers = [
    {
      name: 'Renato Borges',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/renatoBorges.webp',
      role: 'Professor/Coordinator',
      researchArea: 'Control Systems',
      lattesUrl: 'http://lattes.cnpq.br/9986885788660516'
    },
    {
      name: 'Daniel Café',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/danielCafe.webp',
      role: 'Professor',
      researchArea: 'Embbeded Systems',
      lattesUrl: 'http://lattes.cnpq.br/5467474463267175'
    },
    {
      name: 'João Paulo Leite',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/avatar-male.svg',
      role: 'Professor',
      researchArea: 'Telecommunication',
      lattesUrl: 'http://lattes.cnpq.br/9310657002482326'
    },
    {
      name: 'João Gondim',
      organization: 'CIC/UnB',
      imageUrl: '/teamMembers/gondim.webp',
      role: 'Professor',
      researchArea: 'Cybersecurity',
      lattesUrl: 'http://lattes.cnpq.br/1755987387907910'
    },
    {
      name: 'Geovany Borges',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/geovany.webp',
      role: 'Professor',
      researchArea: 'Robotics',
      lattesUrl: 'http://lattes.cnpq.br/6103264336506171'
    },
    {
      name: 'Chantal Cappelletti',
      organization: 'UoN/UK',
      imageUrl: '/teamMembers/avatar-female.svg',
      role: 'Professor',
      researchArea: 'Mission Analysis',
      lattesUrl: 'http://lattes.cnpq.br/4120937958034706'
    },
    {
      name: 'Simone Battistini',
      organization: 'SHU/UK',
      imageUrl: '/teamMembers/simoneBattistini.webp',
      role: 'Professor',
      researchArea: 'Control Systems',
      lattesUrl: 'http://lattes.cnpq.br/0151016853523965'
    },
    {
      name: 'Andréa Santos',
      organization: 'EPR/UnB',
      imageUrl: '/teamMembers/andreaSantos.webp',
      role: 'Professor',
      researchArea: 'Systems Engineering',
      lattesUrl: 'http://lattes.cnpq.br/4558493368126565'
    },
    {
      name: 'William Reis',
      organization: 'FGA/UnB',
      imageUrl: '/teamMembers/williamReis.webp',
      role: 'Professor',
      researchArea: 'Orbital Dynamic',
      lattesUrl: 'http://lattes.cnpq.br/7752228013890691'
    },
    {
      name: 'Leonardo Aguayo',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/leonardoAguayo.webp',
      role: 'Professor',
      researchArea: 'Telecommunication',
      lattesUrl: 'http://lattes.cnpq.br/4815464320872808'
    },
    {
      name: 'Marcelo Karam',
      organization: 'STI/UnB',
      imageUrl: '/teamMembers/marceloKaram.webp',
      role: 'Stafft',
      researchArea: 'Data Security',
      lattesUrl: 'http://lattes.cnpq.br/0017208558479044'
    },
    {
      name: 'Rogério Sousa',
      organization: 'STI/UnB',
      imageUrl: '/teamMembers/rogerioSousa.webp',
      role: 'Stafft',
      researchArea: 'Data Security',
      lattesUrl: 'http://lattes.cnpq.br/1249648187708650'
    }
  ]

  return (
    <Layout>
      <Container>
        <TeamMembersContainer>
          <header>
            <h2>Our team members</h2>
            <p>The project team is composed of professors, stafft and students from UnB, also counting on the participation of external collaborators.</p>
          </header>

          <div>
            {teamMembers.map((teamMember, index) => (
              <TeamMemberCard 
                key={teamMember.name}
                index={index}
                {...teamMember}
              />
            ))}
          </div>
        </TeamMembersContainer>
      </Container>
    </Layout>
  )
}