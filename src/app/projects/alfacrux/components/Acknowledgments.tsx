import { GroupField, ImageField, KeyTextField } from '@prismicio/client'
import Image from 'next/image'
import Link from 'next/link'

export type AcknowledgmentsProps = {
  acknowledgments_title: KeyTextField
  acknowledgments_first_subsection_title: KeyTextField
  acknowledgments_second_subsection_title: KeyTextField
  acknowledgments_third_subsection_title: KeyTextField
  acknowledgments_first_subsection_images: GroupField<{
    image: ImageField
    acknowledgments_image_link: KeyTextField
  }>
  acknowledgments_second_subsection_images: GroupField<{
    image: ImageField
    acknowledgments_image_link: KeyTextField
  }>
  acknowledgments_third_subsection_images: GroupField<{
    image: ImageField
    acknowledgments_image_link: KeyTextField
  }>
}

export function Acknowledgments({
  acknowledgments_first_subsection_images,
  acknowledgments_first_subsection_title,
  acknowledgments_second_subsection_images,
  acknowledgments_second_subsection_title,
  acknowledgments_third_subsection_images,
  acknowledgments_third_subsection_title,
  acknowledgments_title,
}: AcknowledgmentsProps) {
  return (
    <section>
      <h2>{acknowledgments_title}</h2>

      <div
        style={{
          marginTop: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: 60 }}>
          {acknowledgments_first_subsection_title}
        </h3>

        <div
          style={{
            display: 'flex',
            gap: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {acknowledgments_first_subsection_images.map(
            ({ image, acknowledgments_image_link }) => (
              <Link
                href={acknowledgments_image_link ?? ''}
                passHref
                key={acknowledgments_image_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  key={image.url}
                  src={image.url ?? ''}
                  alt={image.alt ?? ''}
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                  style={{
                    width: image.dimensions?.width,
                    height: image.dimensions?.height,
                  }}
                />
              </Link>
            ),
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: 60 }}>
          {acknowledgments_second_subsection_title}
        </h3>

        <div
          style={{
            display: 'flex',
            gap: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {acknowledgments_second_subsection_images.map(
            ({ image, acknowledgments_image_link }) => (
              <Link
                href={acknowledgments_image_link ?? ''}
                passHref
                key={acknowledgments_image_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  key={image.url}
                  src={image.url ?? ''}
                  alt={image.alt ?? ''}
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                  style={{
                    width: image.dimensions?.width,
                    height: image.dimensions?.height,
                  }}
                />
              </Link>
            ),
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: 60 }}>
          {acknowledgments_third_subsection_title}
        </h3>

        <div
          style={{
            display: 'flex',
            gap: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {acknowledgments_third_subsection_images.map(
            ({ image, acknowledgments_image_link }) => (
              <Link
                href={acknowledgments_image_link ?? ''}
                passHref
                key={acknowledgments_image_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  key={image.url}
                  src={image.url ?? ''}
                  alt={image.alt ?? ''}
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                  style={{
                    width: image.dimensions?.width,
                    height: image.dimensions?.height,
                  }}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
