import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl'
import { Hero } from './sections/hero'
import get from 'lodash.get'
import { K34System } from './sections/k34-system'
import { CerradoHotspot } from './sections/cerrado-hotspot'
import { More } from './sections/more'
import { Instagram } from './sections/instagram'

export default function Perception() {
  const messages = useMessages()

  const translationMessages = {
    Projects: {
      Perception: {
        LP: {
          'recent-activities': get(
            messages,
            'Projects.Perception.LP.recent-activities',
          ) as AbstractIntlMessages,
        },
      },
    },
  }

  return (
    <NextIntlClientProvider messages={translationMessages}>
      <main>
        <Hero />
        <K34System />
        <CerradoHotspot />
        <More />
        <Instagram />
      </main>
    </NextIntlClientProvider>
  )
}
