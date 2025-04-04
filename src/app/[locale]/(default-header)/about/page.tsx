import { TeamMemberCard } from './components/teamMemberCard'
import { Layout } from '@/components/animationLayout'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('AboutPage')
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
    <Layout id="about">
      <main className="bg-unbBlack-10 text-unbBlue-400">
        <div className="bg-unbBlack-5">
          <section className="mx-auto flex max-w-[1120px] flex-col items-start gap-6 px-5 py-10 min-[560px]:items-center min-[560px]:py-20">
            <h2 className="text-4xl uppercase text-unbBlue-400 min-[560px]:text-6xl">
              {t('title')}
            </h2>

            <div
              className="flex flex-col gap-4 text-justify"
              dangerouslySetInnerHTML={{ __html: t.raw('subTitle') }}
            />
          </section>
        </div>

        <section className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-10 min-[560px]:gap-24 min-[560px]:py-20">
          <div className="flex flex-col gap-6 text-center min-[560px]:gap-12">
            <h2 className="text-4xl text-unbBlue-400 min-[560px]:text-6xl">
              {t('membersTitle')}
            </h2>

            <p>{t('membersSubTitle')}</p>
          </div>

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
      </main>
    </Layout>
  )
}
