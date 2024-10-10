import { Layout } from '@/components/animationLayout'
import { prismic } from '@/lib/prismic'
import { AlfaCruxRadioPrismicDocument, OldAlfaCruxRadio } from './old'
import get from 'lodash.get'
import { getMessages } from 'next-intl/server'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

export default async function AlfaCrux() {
  const alfacruxRadioPrismicDocument = (
    await prismic.getSingle('alfacrux_radio_amateur')
  ).data as AlfaCruxRadioPrismicDocument

  const messages = await getMessages()

  const translationMessages = {
    Projects: {
      AlfaCrux: {
        Radio: get(messages, 'Projects.AlfaCrux.Radio') as AbstractIntlMessages,
      },
    },
  }

  return (
    <Layout id="alfacrux">
      <NextIntlClientProvider messages={translationMessages}>
        <OldAlfaCruxRadio
          alfacruxRadioPrismicDocument={alfacruxRadioPrismicDocument}
        />
      </NextIntlClientProvider>
    </Layout>
  )
}
