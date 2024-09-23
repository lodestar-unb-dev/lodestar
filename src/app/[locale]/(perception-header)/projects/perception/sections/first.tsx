'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

import { ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function First() {
  const t = useTranslations('Projects.Perception.HomePage.FirstSection')

  return (
    <section className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 text-justify">
      <h2 className="text-left text-xl font-bold uppercase text-unbGreen-400 md:text-3xl">
        {t('title')}
      </h2>

      <Collapsible.Root className="space-y-5 text-unbBlack-100">
        <div className="space-y-5">
          <p>{t('visibleContent')}</p>
        </div>
        <Collapsible.Content className="space-y-5">
          <div dangerouslySetInnerHTML={{ __html: t.raw('hiddenContent') }} />
        </Collapsible.Content>

        <Collapsible.Trigger className="group absolute bottom-0 right-1 z-10 flex translate-y-1/2 gap-1 bg-[#EE761B] p-4 text-xl uppercase text-unbBlack-0">
          <span>{t('buttonText')}</span>
          <ArrowDown className="group-data-[state=open]:rotate-180" />
        </Collapsible.Trigger>
      </Collapsible.Root>
    </section>
  )
}
