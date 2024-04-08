import { Layout } from '@/app/components/animationLayout'
import { prismic } from '@/app/lib/prismic'
import { AlfaCruxRadioPrismicDocument, OldAlfaCruxRadio } from './old'

export default async function AlfaCrux() {
  const alfacruxRadioPrismicDocument = (
    await prismic.getSingle('alfacrux_radio_amateur')
  ).data as AlfaCruxRadioPrismicDocument

  return (
    <Layout id="alfacrux">
      <OldAlfaCruxRadio
        alfacruxRadioPrismicDocument={alfacruxRadioPrismicDocument}
      />
    </Layout>
  )
}
