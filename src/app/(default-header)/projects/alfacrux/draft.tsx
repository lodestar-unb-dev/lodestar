import { RssIcon } from 'lucide-react'

import { Layout } from '@/components/animationLayout'
import Image from 'next/image'
import Link from 'next/link'
import explodedViewImg from './assets/exploded_view_alfacrux.png'
import radioAmateurImg from './assets/radio_amateur.svg'
import { prismic } from '@/lib/prismic'
import {
  RecentActivities,
  RecentActivitiesPrismicDoc,
} from './components/RecentActivities'
import { Gallery, GalleryProps } from './components/Gallery'
import {
  Acknowledgments,
  AcknowledgmentsProps,
} from './components/Acknowledgments'

export default async function AlfaCrux() {
  const { data } = await prismic.getSingle('alfacrux')

  const {
    recent_activities_cards,
    recent_activities_description,
    recent_activities_title,
  } = data as RecentActivitiesPrismicDoc

  const {
    ac_gallery_images,
    gallery_title,
    gs_gallery_images,
    ma_gallery_images,
  } = data as GalleryProps

  const {
    acknowledgments_first_subsection_images,
    acknowledgments_first_subsection_title,
    acknowledgments_second_subsection_images,
    acknowledgments_second_subsection_title,
    acknowledgments_third_subsection_images,
    acknowledgments_third_subsection_title,
    acknowledgments_title,
  } = data as AcknowledgmentsProps

  return (
    <Layout id="alfacrux">
      <main>
        <section>
          <div>
            <h2>The AlfaCrux Mission</h2>

            <aside>
              <div>
                <p>
                  On April 1st, 2022, the AlfaCrux CubeSat was launched by the
                  Falcon 9 Transporter-4 mission, the fourth SpaceX dedicated
                  smallsat rideshare program mission, from Space Launch Complex
                  40 at Cape Canaveral Space Force Station in Florida into a SSO
                  at 500km. Financed by the Government of the Federal District
                  of Brazil through the Federal District Research Support
                  Foundation (FAPDF), the AlfaCrux is a radio amateur and
                  educational mission to provide a hands-on experience to
                  students and professors in the complete process of developing
                  and operating a space mission. Specifically, the team members
                  have designed and are now operating and observing the behavior
                  and performance of the AlfaCrux CubeSat on orbit. Moreover,
                  the AlfaCrux mission is providing a unique experience in the
                  learning process of radio electronics, antennas, digital
                  communications, and radio amateur activities. As an additional
                  goal, MSc. and PhD students from Electrical, Mechatronics,
                  Mechanics, Production and Aerospace Engineering will test and
                  demonstrate on orbit software defined radio experiments to
                  perform ionospheric scintillation analysis and a data collect
                  system from sensors in the ground.
                </p>
              </div>

              <Image
                src="https://images.prismic.io/lodestar/e335565d-00eb-4551-9186-a08d0ba467b0_ac_6.png?auto=compress,format&rect=0,0,884,661&w=500&h=374"
                alt="AlfaCrux render"
                width={486}
                height={363}
              />
            </aside>

            <div>
              <p>
                The package routing solution will allow forwarding of received
                messages back to Earth to support communication and messaging
                between radio amateurs (digital QSO), store it on-board, and
                transmit it to the ground station. Telemetry data collected is
                available through internet, or under request, and can be used
                for several applications: study of different methods for
                low-data rate communication, characterization of interference
                sources, atmospheric propagation effects, communication
                capability in terms of data rate, and link performance in terms
                of bit error date (BER) and signal to noise ratio (SNR).
              </p>

              <p>
                The passages are monitored through the LODESTAR
                command-and-control ground station (PT2ENE) with the support of
                the radio amateur community. The telemetry information is
                updated daily and can be seen through the online AlfaCrux
                Mission Control Platform making easier and immediate for all
                users to see and understand the meaning of the beacons.
              </p>

              <p>
                Welcome to the AlfaCrux project and come with us to increase
                terrestrial and space situational awareness via satellite
                communication links.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>behind the name: the meaning of alfacrux</h2>

            <div style={{ display: 'flex' }}>
              <div>
                <p>
                  The name AlfaCrux is after the Alpha Crucis star, the
                  brightest star in the southern constellation Crux (the
                  Southern Cross), and among the brightest stars in the sky. The
                  motivation to choose AlfaCrux as the mission’s name comes from
                  the fact that the Southern Cross is the best-known
                  constellation of those we can see in the southern hemisphere.
                  It has a special importance in navigation and orientation,
                  being known since the ancient Greeks time.
                </p>
                <p>
                  The Alpha Crucis star appears in the Brazilian flag, and in
                  the Brazilian coat of arms. It is a synonymous of guide,
                  reference, and consequently responsibility and excellence. In
                  this sense, it summarizes the general goals of this space
                  mission: become a reference of excellence and dedication, and
                  an example to be followed as an approach for the advance of
                  the space activities in the new space era.
                </p>
              </div>
              <Image src={explodedViewImg} alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="mission">
            <video autoPlay loop muted>
              <source src="/videos/mission-control.mp4" type="video/mp4" />
            </video>

            <div className="banner">
              <h2>Mission Control Platform</h2>

              <section>
                <aside>
                  <p>
                    The AlfaCrux Mission Control platform is part of an
                    innovative framework under development by the AlfaCrux team
                    to assist the development and operation of nanosatellites.
                    By innovative framework we mean a new architecture for
                    improving and strengthening education in the broad area of
                    Science, Technology, Engineering and Mathematics (STEM). It
                    is another contribution of the AlfaCrux team to deliver
                    solutions for in-orbit data processing and management; new
                    approaches for attitude determination, control, and
                    reconstruction; space weather analysis and impact on UHF
                    communication links; prognoses and satellite health
                    management, among others. The management, processing, and
                    analysis of all this information, along with the ground
                    infrastructure, come together in the development of
                    Digi-AlfaCrux, the digital twin version of the AlfaCrux.
                  </p>
                  <p>
                    It also makes it easier and immediate for all users to see
                    and understand the meaning and purpose of the AlfaCrux
                    downlink signal in accordance with the amateur-satellite
                    service. All frames available online are properly associated
                    with the call sign responsible for the information.
                  </p>
                  <p>
                    The AlfaCrux telemetry data is free of charge and openly
                    distributed, but if you used the AlfaCrux data on your
                    research and studies, please don’t forget to cite us!
                    Citation for telemetry viewer data{' '}
                    <a
                      href="http://dx.doi.org/10.3390/app12199764"
                      target="__blank"
                    >
                      can be found here.
                    </a>
                  </p>
                </aside>
                <a href="https://mission-control.lodestar.aerospace.unb.br/">
                  Check our new platform now!
                </a>
              </section>

              <span />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>communication link information</h2>

            <div>
              <p>
                The AlfaCrux team at the University of Brasilia informs that the
                AlfaCrux satellite project, an educational and technological
                demonstration mission in the area of telecommunication, is in
                full compliance with the national regulatory framework for
                telecommunications. The project&apos;s Coordination complied
                with all procedures in the National Telecommunications Agency
                (ANATEL) for usage of orbit and spectrum resources as a
                Brazilian satellite, having the Agency complied with all
                necessary procedures in the International Telecommunications
                Union (ITU), and officially requested the frequency coordination
                to the IARU. We would like to reinforce that the frequency band
                coordination with the countries identified by ITU is concluded,
                and that on November 1st, 2022, the BR IFIC 2983 was published
                confirming that the AlfaCrux frequency assignments was properly
                recorded in the ITU Master Register under Article 11 of the
                Radio Regulations. Moreover, the applications that are under
                development in this project are fully in accordance with the
                radiocommunication and telecommunications services associated to
                the operation of these frequency bands. The AlfaCrux team would
                like to thank Sir Hans P. Blondeel Timmerman (PB2T), IARU
                Satellite Advisor, for providing the AlfaCrux coordination
                letter on July 5, 2022.
              </p>

              <p>
                We also inform that on July 27, 2022, 01:56 UTC, the AlfaCrux
                changes to nominal mode, and it is now starting the payload
                commissioning in orbit. The main services are still not active,
                only the transmission of beacons with telemetry packets at
                437.100 MHz, GMSK modulation, 4800 bps, and circular
                polarization. Additional information will be updated on this
                website, the official page of the mission, including details for
                the correct use of the services by the radio amateur community
                in the future after finishing the LEOP. Wanna know what is going
                on at the AlfaCrux control center? Check our mission planner for
                more information!
              </p>
            </div>

            <div>
              <aside>
                <div>
                  <p>Do you want to communicate with AlfaCrux?</p>

                  <p>Then click the button bellow for more info!</p>
                </div>

                <Link href="/projects/alfacrux/radio">
                  <span>Radio amateur info</span>
                  <RssIcon />
                </Link>
              </aside>

              <Image src={radioAmateurImg} alt="Radio Amateur" />
            </div>
          </div>
        </section>

        <RecentActivities
          recent_activities_cards={recent_activities_cards}
          recent_activities_description={recent_activities_description}
          recent_activities_title={recent_activities_title}
        />

        <Gallery
          ac_gallery_images={ac_gallery_images}
          gallery_title={gallery_title}
          gs_gallery_images={gs_gallery_images}
          ma_gallery_images={ma_gallery_images}
        />

        <Acknowledgments
          acknowledgments_first_subsection_images={
            acknowledgments_first_subsection_images
          }
          acknowledgments_first_subsection_title={
            acknowledgments_first_subsection_title
          }
          acknowledgments_second_subsection_images={
            acknowledgments_second_subsection_images
          }
          acknowledgments_second_subsection_title={
            acknowledgments_second_subsection_title
          }
          acknowledgments_third_subsection_images={
            acknowledgments_third_subsection_images
          }
          acknowledgments_third_subsection_title={
            acknowledgments_third_subsection_title
          }
          acknowledgments_title={acknowledgments_title}
        />
      </main>
    </Layout>
  )
}
