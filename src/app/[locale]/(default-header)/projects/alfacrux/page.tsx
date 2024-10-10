import { Layout } from '@/components/animationLayout'
import { prismic } from '@/lib/prismic'
import { AlfaCruxPrismicDocument, OldAlfaCrux } from './old'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import get from 'lodash.get'
import { getLocale, getMessages } from 'next-intl/server'

export default async function AlfaCrux() {
  const locale = (await getLocale()) as 'pt-BR' | 'en' | 'es'

  const lang = {
    'pt-BR': 'pt-br',
    en: 'en-us',
    es: 'es-es',
  }

  const alfacruxPrismicDocument = (
    await prismic.getSingle('alfacrux', { lang: lang[locale] })
  ).data as AlfaCruxPrismicDocument

  const messages = await getMessages()

  const translationMessages = {
    Projects: {
      AlfaCrux: {
        Page: get(messages, 'Projects.AlfaCrux.Page') as AbstractIntlMessages,
      },
    },
  }

  return (
    <Layout id="alfacrux">
      <NextIntlClientProvider messages={translationMessages}>
        <OldAlfaCrux alfacruxPrismicDocument={alfacruxPrismicDocument} />
      </NextIntlClientProvider>
    </Layout>
  )
}
