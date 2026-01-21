import { Accordion } from 'radix-ui'
import ourTeamImg from '../assets/images/our-team.jpg'
import ourMissionImg from '../assets/images/hero-bg.jpg'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { twMerge } from 'tailwind-merge'
import { ArrowDownCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const accordionItems = [
  {
    header: 'our-mission.header',
    body: 'our-mission.body',
    link: '/projects/perception/mission',
    className: 'border-unbBlue-200 text-unbBlue-200',
    bg: (
      <>
        <Image
          src={ourMissionImg}
          className="pointer-events-none absolute inset-0 size-full origin-center object-cover object-center opacity-0 transition-opacity group-data-[state=open]:opacity-100"
          alt="our team"
        />
        <div className="bg-unbBlack-100/50 pointer-events-none absolute inset-0 size-full opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
      </>
    ),
  } as const,
  {
    header: 'who-we-are.header',
    body: 'who-we-are.body',
    link: '/projects/perception/who-we-are',
    className: 'border-unbGreen-300 text-unbGreen-300',
    bg: (
      <>
        <Image
          src={ourTeamImg}
          className="pointer-events-none absolute inset-0 size-full origin-center object-cover object-center opacity-0 transition-opacity group-data-[state=open]:opacity-100"
          alt="who we are"
        />
        <div className="bg-unbBlack-100/50 pointer-events-none absolute inset-0 size-full opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
      </>
    ),
  } as const,
] as const

export function More() {
  const t = useTranslations('Projects.Perception.LP.more')

  return (
    <section className="mx-auto max-w-300 space-y-12 px-5 py-10 lg:py-20">
      <div className="text-unbBlack-100 flex items-center gap-9">
        <h5 className="font-semibold md:text-xl lg:min-w-91 lg:text-3xl">
          {t('title')}
        </h5>
        <div className="border-unbBlack-100 hidden h-px w-full border border-dashed md:block" />
        <p className="text-justify text-xs font-semibold md:text-base lg:min-w-72">
          {t('description')}
        </p>
      </div>

      <div>
        <Accordion.Root
          className="flex w-full flex-col gap-2"
          type="single"
          collapsible
        >
          {accordionItems.map((item, index) => (
            <Accordion.Item
              className={twMerge(
                'group relative isolate overflow-hidden rounded-2xl border p-8',
                item.className,
              )}
              key={index}
              value={`item-${index}`}
            >
              <Accordion.Header>
                <Accordion.Trigger className="group data-[state=open]:text-unbBlack-0 flex w-full cursor-pointer items-center justify-between gap-7 text-left text-xl font-medium uppercase transition-colors md:text-3xl">
                  <span className="z-10">{t(item.header)}</span>
                  <ArrowDownCircle className="z-10 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="text-unbBlack-0 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown data-[state=open]:text-unbBlack-0 overflow-hidden">
                <div className="flex flex-col gap-3 pt-5 sm:pt-10 md:pt-32">
                  <div className="z-10 text-xs md:text-base">
                    {t(item.body)}
                  </div>
                  <Link
                    className="bg-perceptionOrange-300 hover:bg-unbBlack-0 hover:text-perceptionOrange-300 z-10 w-fit rounded px-4 py-3 transition-colors"
                    href={item.link}
                  >
                    {t('cta')}
                  </Link>
                </div>
              </Accordion.Content>

              {item.bg}
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
