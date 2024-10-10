import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl'
import { First } from './sections/first'
import { Hero } from './sections/hero'
import { Instagram } from './sections/instagram'
import { Partners } from './sections/partners'
import { Second } from './sections/second'
import get from 'lodash.get'

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
        <First />
        <Second />
        <Instagram />
        <Partners />
      </main>
    </NextIntlClientProvider>
  )
}
