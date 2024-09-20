import {
  GroupField,
  ImageField,
  KeyTextField,
  RichTextField,
} from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { Youtube } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

export type RecentActivitiesPrismicDoc = {
  recent_activities_title: KeyTextField
  recent_activities_description: RichTextField
  recent_activities_cards: GroupField<{
    youtube_video_url: KeyTextField
    title: KeyTextField
    description: RichTextField
    image: ImageField
    news_url: KeyTextField
  }>
}

export function RecentActivities({
  recent_activities_cards,
  recent_activities_description,
  recent_activities_title,
}: RecentActivitiesPrismicDoc) {
  return (
    <section>
      <h2 id="launch-simulation">{recent_activities_title}</h2>

      <section>
        <article>
          <PrismicRichText field={recent_activities_description} />
        </article>

        <section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          {recent_activities_cards.map((recent_activity) => (
            <div key={recent_activity.title} id={recent_activity.title ?? ''}>
              {recent_activity.youtube_video_url ? (
                <iframe
                  width="400"
                  height="210"
                  src={recent_activity.youtube_video_url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : recent_activity.news_url ? (
                <Link
                  href={recent_activity.news_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={recent_activity.image.url ?? ''}
                    alt={recent_activity.image.alt ?? ''}
                    width={400}
                    height={220}
                  />
                </Link>
              ) : (
                <Image
                  src={recent_activity.image.url ?? ''}
                  alt={recent_activity.image.alt ?? ''}
                  width={400}
                  height={220}
                />
              )}

              <aside>
                <h3>{recent_activity.title}</h3>
                <div>
                  <PrismicRichText field={recent_activity.description} />
                </div>
              </aside>
            </div>
          ))}
        </section>

        <Link
          href="https://www.youtube.com/channel/UCkbKnVEH-IkNNB87Kn6CUtg"
          passHref
          style={{
            backgroundColor: '#F5F5F5',
            color: '#00244B',
            borderRadius: 5,
            padding: '14px 10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check More Videos <Youtube size={22} />
        </Link>
      </section>
    </section>
  )
}
