import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl'
import { Hero } from './sections/hero'
import get from 'lodash.get'
import { K34System } from './sections/k34-system'
import { CerradoHotspot } from './sections/cerrado-hotspot'

export default function Perception() {
  const messages = useMessages()

  const translationMessages = {
    Projects: {
      Perception: {
        HomePage: {
          FirstSection: get(
            messages,
            'Projects.Perception.HomePage.FirstSection',
          ) as AbstractIntlMessages,
          RecentActivities: get(
            messages,
            'Projects.Perception.HomePage.RecentActivities',
          ) as AbstractIntlMessages,
          SecondSection: get(
            messages,
            'Projects.Perception.HomePage.SecondSection',
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
      </main>
    </NextIntlClientProvider>
  )
}
