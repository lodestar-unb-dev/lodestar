import { Layout } from '@/app/components/animationLayout'
import { prismic } from '@/app/lib/prismic'
import { AlfaCruxPrismicDocument, OldAlfaCrux } from './old'

export default async function AlfaCrux() {
  const alfacruxPrismicDocument = (await prismic.getSingle('alfacrux'))
    .data as AlfaCruxPrismicDocument

  return (
    <Layout id="alfacrux">
      <OldAlfaCrux alfacruxPrismicDocument={alfacruxPrismicDocument} />
    </Layout>
  )
}
