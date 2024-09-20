'use client'

import { Carousel } from '../components/carousel'
import { EmblaOptionsType } from 'embla-carousel'

const instagramPosts = [
  'https://www.instagram.com/p/C9vlfslAYsA',
  'https://www.instagram.com/p/Cv-HASvAK4B',
  'https://www.instagram.com/p/CxSvpzOAGxV',
  'https://www.instagram.com/p/CxniILsgLx6',
  'https://www.instagram.com/p/C3Wc8pvgo_N',
  'https://www.instagram.com/p/C24-mC9gl1A',
]

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto', loop: true }

export function Instagram() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 text-justify">
      <h2 className="self-start py-10 text-xl font-bold text-[#1A3E76] md:text-3xl">
        RECENT ACTIVITIES
      </h2>

      <div className="max-w-7xl space-y-5 text-unbBlack-100">
        <p>
          One of the main motivations for carrying out the Perception project is
          to continue the ongoing activities of the AlfaCrux mission, promoting
          technological and scientific development in the context of satellite
          data collection systems. Furthermore, it aims to continue training
          human resources with high added value at undergraduate and
          postgraduate levels with the exchange of researchers, strengthening
          national and international cooperation with research institutions and
          companies in the productive sector.
        </p>

        <p>
          The scope of the project is divided into two workstreams: 1) Modeling
          and simulation of a new satellite data collection system, including
          the assembly of platforms for logical and functional analysis of
          different subsystems, simulation of the space environment, assembly,
          analysis, and management of user terminals, both fixed for
          environmental data collection applications and mobile for tracking
          unmanned aerial vehicles (UAVs) in environmental monitoring
          applications and 2) Reliability research and analysis in satellite
          data production for environmental monitoring applications; development
          of new solutions for managing and processing data obtained via
          satellite; and also designing digital models for health monitoring and
          data control from space missions.
        </p>

        <p className="self-start">
          In this context, we kindly invite you to take a moment of your time
          and check our recent activities and achievements!
        </p>
      </div>

      <Carousel slides={instagramPosts} options={OPTIONS} />
    </section>
  )
}
