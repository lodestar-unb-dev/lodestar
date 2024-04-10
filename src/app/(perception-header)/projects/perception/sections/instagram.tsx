'use client'

import { InstagramEmbed } from 'react-social-media-embed'

const instagramPosts = [
  'https://www.instagram.com/p/Cv-HASvAK4B',
  'https://www.instagram.com/p/CxSvpzOAGxV',
  'https://www.instagram.com/p/CxniILsgLx6',
  'https://www.instagram.com/p/C22Hk3AgK_J',
  'https://www.instagram.com/p/C24-mC9gl1A',
  'https://www.instagram.com/p/C3Wc8pvgo_N',
]

export function Instagram() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="py-10 text-3xl font-bold text-[#1A3E76]">
        Lorem ipsum dolor sit amet
      </h2>

      <div className="mx-auto flex max-w-5xl flex-wrap items-stretch justify-center gap-5">
        {instagramPosts.map((post) => (
          <InstagramEmbed url={post} key={post} />
        ))}
      </div>
    </section>
  )
}
