'use client'

import { PlusSquareIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Tooltip } from 'radix-ui'
import { useState } from 'react'

export function FullForeignObjects() {
  const [open, setOpen] = useState(false)
  const t = useTranslations('Projects.Perception.Proposals.k34-system.markers')

  return (
    <foreignObject x="500" y="360" width="868.7" height="624.17">
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root open={open} onOpenChange={(e) => setOpen(e)}>
          <Tooltip.Trigger
            onClick={() => setOpen((prevValue) => !prevValue)}
            className="group cursor-default select-none transition-opacity"
          >
            <PlusSquareIcon className="fill-unbBlack-100/60 stroke-perceptionOrange-300 transition-colors group-hover:fill-unbBlack-100" />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="max-w-[321px] rounded border border-perceptionOrange-300 bg-unbBlack-100/95 p-3">
              <strong>{t('k34-tower.title')}</strong>

              <p>{t('k34-tower.description')}</p>
              <Tooltip.Arrow className="fill-perceptionOrange-300" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </foreignObject>
  )
}
