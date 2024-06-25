'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

import { ArrowDown } from 'lucide-react'

export function First() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 text-justify">
      <h2 className="text-left text-xl font-bold text-unbGreen-400 md:text-3xl">
        THE PERCEPTION PROJECT
      </h2>

      <Collapsible.Root className="space-y-5 text-unbBlack-100">
        <div className="space-y-5">
          <p>
            The Perception System for satellite monitoring of strategic assets
            is a satellite data collection system, which, through new systems
            engineering approaches, new operating concepts, and proposed
            services based on CubeSats missions, aims to develop new
            technologies and satellite-based services for tracking and
            monitoring strategic assets, such as Brazilian biomes, unmanned
            aerial vehicles, and critical infrastructure, leading Brazil to a
            new era of spatial data and analysis. Satellite Technologies and
            Geospatial data have the potential to support the sustainable
            transition of the Brazilian productive sector and play a vital role
            in the implementation of the Sustainable Development Goals.
          </p>
          {/* <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p> */}
        </div>
        <Collapsible.Content className="space-y-5">
          <p>
            The primary delivery of this project is a concept of operation for
            data collection via satellite focused on the K34 Tower of the
            Large-Scale Biosphere-Atmosphere Program in the Amazon (LBA), whose
            data are used for carbon flow monitoring, among other applications,
            and for vehicles unmanned aerial (UAVs) that support environmental
            monitoring activities. The K34 Tower is located in the Amazon
            rainforest, approximately 64km from Manaus, for which will be
            proposed a concept of operation for the installation of terminals
            for satellite communication compatible with the characteristics of
            the satellite AlfaCrux, as well as satellites from partner teams and
            future missions.
          </p>

          <p>
            Welcome to the Perception project and come with us to develop new
            technologies and satellite-based services for tracking and
            monitoring strategic assets.
          </p>
        </Collapsible.Content>

        <Collapsible.Trigger className="group absolute bottom-0 right-1 z-10 flex translate-y-1/2 gap-1 bg-[#EE761B] p-4 text-xl uppercase text-unbBlack-0">
          <span>Saiba mais</span>
          <ArrowDown className="group-data-[state=open]:rotate-180" />
        </Collapsible.Trigger>
      </Collapsible.Root>
    </section>
  )
}
