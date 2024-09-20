import { promises as fs } from 'fs'

import { TeamMemberCard } from './components/teamMemberCard'
import { Layout } from '@/components/animationLayout'

type JSONFile = {
  members_card: {
    member_avatar: {
      width: number
      height: number
      url: string
    }
    member_name: string
    member_affiliation: string
    member_role: string
    member_research_area: string
    member_lattes: string
  }[]
}

export default async function About() {
  const file = await fs.readFile(
    process.cwd() +
      '/src/app/[locale]/(default-header)/about/json/teamMembers.json',
    'utf8',
  )
  const { members_card } = JSON.parse(file) as JSONFile

  return (
    <Layout id="about">
      <main className="bg-unbBlack-10 text-unbBlue-400">
        <div className="bg-unbBlack-5">
          <section className="mx-auto flex max-w-[1120px] flex-col items-start gap-6 px-5 py-10 min-[560px]:items-center min-[560px]:py-20">
            <h2 className="text-4xl uppercase text-unbBlue-400 min-[560px]:text-6xl">
              Overview
            </h2>

            <div className="flex flex-col gap-4 text-justify">
              <p>
                The Laboratory of Simulation and Control of Aerospace Systems,
                LODESTAR, is located at the University of Brasilia, Brazil, and
                currently is structured in three main divisions of research and
                technological development: Space Missions, Small Sat Simulator,
                and High-Altitude Scientific Ballooning. Its infrastructure is
                currently divided in three main environments, organized in a
                total area of approximately 100 m2, consisting of a place for
                hardware and firmware development, a satellite command and
                control ground station, a satellite laser ranging system, a
                satellite hardware-in-the-loop simulation system, in addition to
                venues for meetings and developments for the LODESTAR team and
                its partners.
              </p>

              <p className="font-bold">
                Welcome to the place where the theory meets the practice, and
                news ideas face the rigorous standards of evidence!
              </p>
            </div>
          </section>
        </div>

        <section className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-10 min-[560px]:gap-24 min-[560px]:py-20">
          <div className="flex flex-col gap-6 text-center min-[560px]:gap-12">
            <h2 className="text-4xl text-unbBlue-400 min-[560px]:text-6xl">
              Our team members
            </h2>

            <p>
              The project team is composed of professors, staff and students
              from UnB, also counting on the participation of external
              collaborators.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(244px,1fr))] gap-x-4 gap-y-4 min-[560px]:grid-cols-[repeat(auto-fill,minmax(344px,1fr))]">
            {members_card.map((teamMember, index) => (
              <TeamMemberCard
                key={teamMember.member_name}
                index={index}
                name={teamMember.member_name}
                image={teamMember.member_avatar}
                lattesUrl={teamMember.member_lattes}
                organization={teamMember.member_affiliation}
                researchArea={teamMember.member_research_area}
                role={teamMember.member_role}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
