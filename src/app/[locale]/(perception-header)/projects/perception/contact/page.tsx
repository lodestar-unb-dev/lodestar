import { Layout } from '@/components/animationLayout'

import { MapPin, Youtube, Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('ContactPage')

  return (
    <Layout id="contact">
      <main className="bg-unbBlack-10 text-unbBlue-400 flex h-full flex-col gap-10 py-10 min-[560px]:gap-20 min-[560px]:py-20">
        <section className="mx-auto flex w-full max-w-280 flex-col items-start gap-6 px-5 min-[560px]:items-center">
          <h2 className="text-4xl min-[560px]:text-6xl">{t('title')}</h2>
          <p>{t('subTitle')}</p>
        </section>

        <section className="mx-auto flex w-full max-w-280 flex-col items-center justify-between gap-10 px-5 min-[960px]:flex-row">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <MapPin size={20} className="text-unbBlue-600" />
              <span>{t('address')}</span>
            </li>

            <li>
              <a
                href={`mailto:lodestar@aerospace.unb.br`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <Mail size={20} className="text-unbBlue-600" />
                <span>{t('mail')}</span>
              </a>
            </li>

            <li>
              <a
                href={`tel:+${'+55 61 3107-5556'.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <Phone size={20} className="text-unbBlue-600" />
                <span>{t('phone')}</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UCkbKnVEH-IkNNB87Kn6CUtg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <Youtube size={20} className="text-unbBlue-600" />
                <span>{t('youtube')}</span>
              </a>
            </li>
          </ul>

          <aside>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.9305400106069!2d-47.872748070811106!3d-15.76583060866397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bba813c4139%3A0xdb6c5560f6def8f5!2sSG-11%20Laborat%C3%B3rio%20de%20Engenharia%20El%C3%A9trica!5e0!3m2!1spt-BR!2sbr!4v1628949589604!5m2!1spt-BR!2sbr"
              width="420"
              height="250"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
            />
          </aside>
        </section>
      </main>
    </Layout>
  )
}
