'use client'

import { PlusSquareIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Tooltip } from 'radix-ui'
import { useState } from 'react'

export function FullForeignObjects4() {
  const [open, setOpen] = useState(false)
  const t = useTranslations(
    'Projects.Perception.Initiatives.perception-system.markers',
  )

  return (
    <foreignObject x="650" y="300" width="24" height="24">
      <Tooltip.Root open={open} onOpenChange={(e) => setOpen(e)}>
        <Tooltip.Trigger
          onClick={() => setOpen((prevValue) => !prevValue)}
          className="group cursor-default transition-opacity select-none"
        >
          <PlusSquareIcon className="fill-unbBlack-100/60 stroke-perceptionOrange-300 group-hover:fill-unbBlack-100 transition-colors" />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="border-perceptionOrange-300 bg-unbBlack-100/95 z-51 max-w-80.25 rounded border p-3">
            <strong>{t('command-and-control.title')}</strong>

            <p>{t('command-and-control.description')}</p>
            <Tooltip.Arrow className="fill-perceptionOrange-300" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </foreignObject>
  )
}
