import { Layout } from '../components/Layout';
import { TeamMemberCard } from '../components/TeamMemberCard';

import styles from './about.module.scss';

export default function About() {
  const teamMembers = [
    {
      name: 'Renato Borges',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/renatoBorges.webp',
      bio: 'Coordinator focused on Control Systems.',
      lattesUrl: 'http://lattes.cnpq.br/9986885788660516'
    },
    {
      name: 'Daniel Café',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/danielCafe.webp',
      bio: 'Vice-coordinator focused on Embbeded Systems.',
      lattesUrl: 'http://lattes.cnpq.br/5467474463267175'
    },
    {
      name: 'João Paulo Leite',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/unknown.webp',
      bio: 'Researcher focused on Telecommunication.',
      lattesUrl: 'http://lattes.cnpq.br/9310657002482326'
    },
    {
      name: 'João Gondim',
      organization: 'CIC/UnB',
      imageUrl: '/teamMembers/gondim.webp',
      bio: 'Researcher focused on Cybersecurity.',
      lattesUrl: 'http://lattes.cnpq.br/1755987387907910'
    },
    {
      name: 'Geovany Borges',
      organization: 'ENE/UnB',
      imageUrl: '/teamMembers/geovany.webp',
      bio: 'Researcher focused on Robotics.',
      lattesUrl: 'http://lattes.cnpq.br/6103264336506171'
    },
    {
      name: 'Chantal Cappelletti',
      organization: 'External',
      imageUrl: '/teamMembers/unknown.webp',
      bio: 'Researcher focused on Mission Analysis.',
      lattesUrl: 'http://lattes.cnpq.br/4120937958034706'
    },
    {
      name: 'Simone Battistini',
      organization: 'External',
      imageUrl: '/teamMembers/simoneBattistini.webp',
      bio: 'Researcher focused on Control Systems.',
      lattesUrl: 'http://lattes.cnpq.br/0151016853523965'
    },
    {
      name: 'Andréa Santos',
      organization: 'EPR/UnB',
      imageUrl: '/teamMembers/andreaSantos.webp',
      bio: 'Researcher focused on Systems Engineering.',
      lattesUrl: 'http://lattes.cnpq.br/4558493368126565'
    },
    {
      name: 'William Reis',
      organization: 'FGA/UnB',
      imageUrl: '/teamMembers/williamReis.webp',
      bio: 'Researcher focused on Orbital Dynamic.',
      lattesUrl: 'http://lattes.cnpq.br/7752228013890691'
    },
    {
      name: 'Leonardo Aguayo',
      organization: 'FGA/UnB',
      imageUrl: '/teamMembers/leonardoAguayo.webp',
      bio: 'Researcher focused on Telecommunication.',
      lattesUrl: 'http://lattes.cnpq.br/4815464320872808'
    }
  ]

  return (
    <Layout>
      <main className={styles.container}>
        <section className={styles.teamMembersContainer}>
          <header>
            <h2>Our team members</h2>
            <p>The project team is entirely composed of professors, servers and students from UnB, also counting on the participation of external collaborators.</p>
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
        </section>
      </main>
    </Layout>
  )
}