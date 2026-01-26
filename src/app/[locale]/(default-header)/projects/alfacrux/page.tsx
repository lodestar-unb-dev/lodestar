import { Layout } from "@/components/animationLayout";
import { prismic } from "@/lib/prismic";
import { AlfaCruxPrismicDocument, OldAlfaCrux } from "./old";
import { getLocale } from "next-intl/server";

export default async function AlfaCrux() {
  const locale = (await getLocale()) as "pt-BR" | "en" | "es";

  const lang = {
    "pt-BR": "pt-br",
    en: "en-us",
    es: "es-es",
  };

  const alfacruxPrismicDocument = (
    await prismic.getSingle("alfacrux", { lang: lang[locale] })
  ).data as AlfaCruxPrismicDocument;

  return (
    <Layout id="alfacrux">
      <OldAlfaCrux alfacruxPrismicDocument={alfacruxPrismicDocument} />
    </Layout>
  );
}
