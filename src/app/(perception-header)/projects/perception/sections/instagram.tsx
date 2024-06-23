'use client'

import { Carousel } from '../components/carousel'
import { EmblaOptionsType } from 'embla-carousel'

const instagramPosts = [
  'https://www.instagram.com/p/C3Wc8pvgo_N',
  'https://www.instagram.com/p/C24-mC9gl1A',
  'https://www.instagram.com/p/C22Hk3AgK_J',
  'https://www.instagram.com/p/CxniILsgLx6',
  'https://www.instagram.com/p/CxSvpzOAGxV',
  'https://www.instagram.com/p/Cv-HASvAK4B',
]

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto', loop: true }

export function Instagram() {
  return (
    <section className="flex flex-col items-center gap-5 px-5 text-justify">
      <h2 className="py-10 text-3xl font-bold text-[#1A3E76]">
        RECENT ACTIVITIES
      </h2>

      <div className="max-w-5xl space-y-5">
        <p className="text-unbBlack-100">
          One of the major motivations for carrying out the Perception project
          is to continue ongoing activities in the AlfaCrux mission, promoting
          technological and scientific development in the context of satellite
          data collection systems. Besides that, it aims to continue training
          human resources with high added value in undergraduate and graduate
          studies with the exchange of researchers, strengthening national and
          international cooperation with research institutions and companies in
          the productive sector. The scope of the project is divided into two
          workstreams: 1) Modeling and simulation of a new satellite data
          collection system, including the assembly of platforms for logical and
          functional analysis of different subsystems, simulation of the spatial
          environment, assembly, analysis, and management of user terminals,
          both fixed for environmental data collection applications and mobile
          for tracking unmanned aerial vehicles (UAVs) in environmental
          monitoring applications and 2) Research and analysis of reliability
          and its elements in the production of satellite data for environmental
          monitoring applications; development of new solutions for the
          management and processing of data obtained via satellite; and also
          proposed digital models for health monitoring and control of space
          mission data.
        </p>

        <p className="self-start text-unbBlack-100">
          In this context, we kindly invite you to take a moment of your time
          and check our recent activities and achievements!
        </p>
      </div>

      <Carousel slides={instagramPosts} options={OPTIONS} />
    </section>
  )
}
