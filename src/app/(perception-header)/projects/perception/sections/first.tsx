'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

import { ArrowDown } from 'lucide-react'

export function First() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 text-justify">
      <h2 className="text-left text-xl font-bold uppercase text-unbGreen-400 md:text-3xl">
        Expanding Our Perception Everywhere
      </h2>

      <Collapsible.Root className="space-y-5 text-unbBlack-100">
        <div className="space-y-5">
          <p>
            When it comes to monitoring strategic assets that include our
            natural resources, the challenge goes beyond just tracking them to
            also perceive them. By perceiving them we mean understanding,
            learning and growing from their random and uncertain nature. It
            means empowering ourselves to deal with the unknown, understanding
            the impact of our actions and preparing ourselves to make decisions
            in complex scenarios. To achieve a high level of perception on a
            scale never seen before to monitor our strategic assets, we need to
            combine sensor networks, space technologies and data science. We
            need a team of experts, critical sense, and solid partnerships. This
            is the vision of the Perception project.
          </p>
        </div>
        <Collapsible.Content className="space-y-5">
          <p>
            The Perception System is a satellite data collection system, which,
            through new systems engineering approaches, new operating concepts,
            and proposed services based on CubeSats missions, aims to develop
            new technologies and satellite-based services for tracking and
            monitoring strategic assets, such as the Brazilian biomes and
            critical infrastructure, leading Brazil into a new era of space and
            terrestrial data science. Satellite technologies and geospatial data
            have the potential to support the sustainable transition of the
            Brazilian productive sector and play a vital role in the
            implementation of the Sustainable Development Goals. The first
            deliverable of the Perception project is the concept of operation
            for the space segment, and a new ground segment for collecting and
            processing data from the K34 Tower of the Large-Scale Amazon
            Biosphere-Atmosphere (LBA) Program, as well as for unmanned aerial
            vehicles (UAVs) that support environmental monitoring activities. A
            first use of this data is to measure and monitor carbon flow. The
            K34 tower is located in the Amazon rainforest, approximately 64km
            from Manaus, for which a new concept of operation is proposed for
            the installation of satellite communication terminals compatible
            with the characteristics of the AlfaCrux satellite, as well as
            satellites from our partners and future missions. The AlfaCrux space
            mission marks the beginning of this journey, having allowed the
            demonstration of space technologies and the training of our team. As
            a second deliverable of the Perception project, it is expected the
            reactivation of the environmental data collection tower for the
            Brazilian Cerrado located at the Água Limpa Farm at the University
            of Brasília. The Água Limpa Farm has an area of approximately 4,500
            hectares dedicated to the scientific and technological environmental
            development.
          </p>

          <p>
            Welcome to the Perception project and come with us to develop new
            technologies and satellite-based services for tracking and
            monitoring our strategic assets.
          </p>
        </Collapsible.Content>

        <Collapsible.Trigger className="group absolute bottom-0 right-1 z-10 flex translate-y-1/2 gap-1 bg-[#EE761B] p-4 text-xl uppercase text-unbBlack-0">
          <span>Show more</span>
          <ArrowDown className="group-data-[state=open]:rotate-180" />
        </Collapsible.Trigger>
      </Collapsible.Root>
    </section>
  )
}
