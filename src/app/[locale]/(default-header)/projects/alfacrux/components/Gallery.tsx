'use client'

import { GroupField, ImageField, KeyTextField } from '@prismicio/client'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

export type GalleryProps = {
  gallery_title: KeyTextField
  gs_gallery_images: GroupField<{
    image: ImageField
  }>
  ac_gallery_images: GroupField<{
    image: ImageField
  }>
  ma_gallery_images: GroupField<{
    image: ImageField
  }>
}

export function Gallery({
  ac_gallery_images,
  gallery_title,
  gs_gallery_images,
  ma_gallery_images,
}: GalleryProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <section>
      <h2>{gallery_title}</h2>

      <div>
        <h3 style={{ marginBottom: 20, marginLeft: 20 }}>
          Ground Station assembly, validation, and tests
        </h3>

        <Slider {...settings}>
          {gs_gallery_images.map(({ image }) => (
            <div key={image.url}>
              <Image
                src={image.url ?? ''}
                alt={image.alt ?? ''}
                width={250}
                height={150}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ marginTop: 50 }}>
        <h3 style={{ marginBottom: 20, marginLeft: 20 }}>
          AlfaCrux assembly, validation, and tests campaign
        </h3>

        <Slider {...settings}>
          {ac_gallery_images.map(({ image }) => (
            <div key={image.url}>
              <Image
                src={image.url ?? ''}
                alt={image.alt ?? ''}
                width={250}
                height={150}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ marginTop: 50 }}>
        <h3 style={{ marginBottom: 20, marginLeft: 20 }}>
          Magnetic actuation system design, implementation, and tests
        </h3>

        <Slider {...settings}>
          {ma_gallery_images.map(({ image }) => (
            <div key={image.url}>
              <Image
                src={image.url ?? ''}
                alt={image.alt ?? ''}
                width={250}
                height={150}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
