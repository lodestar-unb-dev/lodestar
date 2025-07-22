'use client'

import { PlusSquareIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Tooltip } from 'radix-ui'
import { useState } from 'react'

export function FullForeignObjects3() {
  const [open, setOpen] = useState(false)
  const t = useTranslations(
    'Projects.Perception.Initiatives.perception-system.markers',
  )

  return (
    <foreignObject x="450" y="80" width="24" height="24">
      <Tooltip.Root open={open} onOpenChange={(e) => setOpen(e)}>
        <Tooltip.Trigger
          onClick={() => setOpen((prevValue) => !prevValue)}
          className="group cursor-default select-none transition-opacity"
        >
          <PlusSquareIcon className="fill-unbBlack-100/60 stroke-perceptionOrange-300 transition-colors group-hover:fill-unbBlack-100" />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="z-[51] max-w-[321px] rounded border border-perceptionOrange-300 bg-unbBlack-100/95 p-3">
            <strong>{t('transmission.title')}</strong>

            <p>{t('transmission.description')}</p>
            <Tooltip.Arrow className="fill-perceptionOrange-300" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </foreignObject>
  )
}
