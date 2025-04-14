import { Accordion } from 'radix-ui'
import ourTeamImg from '../assets/images/our-team.jpg'
import ourPartnersImg from '../assets/images/our-partners.jpg'
import ourMissionImg from '../assets/images/hero-bg.jpg'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { twMerge } from 'tailwind-merge'
import { ArrowDownCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const accordionItems = [
  {
    header: 'our-team.header',
    body: 'our-team.body',
    link: '/projects/perception/team',
    className: 'border-perceptionOrange-300 text-perceptionOrange-300',
    bg: (
      <>
        <Image
          src={ourTeamImg}
          className="absolute inset-0 -z-10 size-full origin-center object-cover object-center opacity-0 transition-opacity group-data-[state=open]:opacity-100"
          alt="our team"
        />
        <div className="absolute inset-0 -z-10 size-full bg-unbBlack-100/50 opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
      </>
    ),
  } as const,
  {
    header: 'our-mission.header',
    body: 'our-mission.body',
    link: '/projects/perception/mission',
    className: 'border-unbBlue-200 text-unbBlue-200',
    bg: (
      <>
        <Image
          src={ourMissionImg}
          className="absolute inset-0 -z-10 size-full origin-center object-cover object-center opacity-0 transition-opacity group-data-[state=open]:opacity-100"
          alt="our team"
        />
        <div className="absolute inset-0 -z-10 size-full bg-unbBlack-100/50 opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
      </>
    ),
  } as const,
  {
    header: 'our-partners.header',
    body: 'our-partners.body',
    link: '/projects/perception/partners',
    className: 'border-unbGreen-300 text-unbGreen-300',
    bg: (
      <>
        <Image
          src={ourPartnersImg}
          className="absolute inset-0 -z-10 size-full origin-center object-cover object-center opacity-0 transition-opacity group-data-[state=open]:opacity-100"
          alt="our team"
        />
        <div className="absolute inset-0 -z-10 size-full bg-unbBlack-100/50 opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
      </>
    ),
  } as const,
] as const

export function More() {
  const t = useTranslations('Projects.Perception.LP.more')

  return (
    <section className="mx-auto max-w-[1200px] space-y-12 px-5 py-10 lg:py-20">
      <div className="flex items-center gap-9 text-unbBlack-100">
        <h5 className="font-semibold md:text-xl lg:min-w-[364px] lg:text-3xl">
          {t('title')}
        </h5>
        <div className="hidden h-px w-full border border-dashed border-unbBlack-100 md:block" />
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
                'group relative overflow-hidden rounded-2xl border p-8',
                item.className,
              )}
              key={index}
              value={`item-${index}`}
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-7 text-left text-xl font-medium uppercase transition-colors data-[state=open]:text-unbBlack-0 md:text-3xl">
                  {t(item.header)}
                  <ArrowDownCircle className="transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden·text-unbBlack-0·data-[state=closed]:animate-slideUp·data-[state=open]:animate-slideDown">
                <div className="flex flex-col gap-3 pt-5 sm:pt-10 md:pt-32">
                  <div className="text-xs md:text-base">{t(item.body)}</div>
                  <Link
                    className="w-fit rounded bg-perceptionOrange-300 px-4 py-3 transition-colors hover:bg-unbBlack-0 hover:text-perceptionOrange-300"
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
