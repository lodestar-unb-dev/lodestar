import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ourTeamImg from '../assets/images/our-team.jpg'
import joinOurTeamImg from '../assets/images/join-our-team.jpg'
import { TeamMemberCard } from './components/teamMemberCard'

export default function TeamPage() {
  const t = useTranslations('Projects.Perception.Team')
  const teamMembers = [
    'RenatoBorges',
    'DanielCafe',
    'JoaoPauloLeite',
    'JoaoGondim',
    'GeovanyBorges',
    'ChantalCappelletti',
    'SimoneBattistini',
    'AndreaSantos',
    'WilliamReis',
    'LeonardoAguayo',
    'MarceloKaram',
    'RogerioSousa',
  ] as const

  return (
    <main>
      <section className="relative flex min-h-56 flex-col items-center justify-center px-5 text-center md:min-h-[384px]">
        <h1 className="text-2xl font-semibold uppercase md:text-4xl">
          {t('title')}
        </h1>
        <Image
          className="absolute inset-0 -z-10 size-full object-cover"
          src={ourTeamImg}
          alt="our team"
        />
        <div className="absolute inset-0 -z-10 size-full bg-unbBlack-100/50" />
      </section>
      <section className="mx-auto max-w-[1200px] space-y-3 px-5 py-10 lg:py-20">
        <p className="text-center text-lg text-unbBlue-400 md:text-2xl">
          {t('membersSubTitle')}
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(244px,1fr))] gap-x-4 gap-y-4 min-[560px]:grid-cols-[repeat(auto-fill,minmax(344px,1fr))]">
          {teamMembers.map((teamMember, index) => (
            <TeamMemberCard
              key={t(`Members.${teamMember}.member_name`)}
              index={index}
              name={t(`Members.${teamMember}.member_name`)}
              image={{
                height: 240,
                width: 240,
                url: t(`Members.${teamMember}.member_avatar.url`),
              }}
              lattesUrl={t(`Members.${teamMember}.member_lattes`)}
              organization={t(`Members.${teamMember}.member_affiliation`)}
              researchArea={t(`Members.${teamMember}.member_research_area`)}
              role={t(`Members.${teamMember}.member_role`)}
            />
          ))}
        </div>
      </section>
      <section className="bg-unbBlack-100">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center md:flex-row">
          <aside className="flex flex-1 flex-col items-center gap-4 p-5 text-center md:items-start md:text-left">
            <div className="flex max-w-[400px] flex-col gap-6 text-lg md:text-2xl">
              <span>{t('footer.title')}</span>

              <span>{t('footer.description')}</span>
            </div>

            <a
              href="mailto:lodestar@aerospace.unb.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded bg-perceptionOrange-300 px-4 py-3 uppercase transition-colors hover:bg-unbBlack-0 hover:text-perceptionOrange-300"
            >
              {t('footer.cta')}
            </a>
          </aside>

          <div className="relative flex-1">
            <Image src={joinOurTeamImg} alt="join our team" />
            <div className="absolute inset-0 size-full bg-gradient-to-t from-unbBlack-100 to-unbBlack-100/0 md:bg-gradient-to-r" />
          </div>
        </div>
      </section>
    </main>
  )
}
