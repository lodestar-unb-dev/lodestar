import { Layout } from '@/components/animationLayout'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

import perceptionLogo from '@/app/[locale]/(perception-header)/projects/perception/assets/icons/logo-alt.svg'

interface Projects {
  space_missions_projects: {
    project_title: string
    project_description: {
      type: string
      text: string
    }[]
    project_logo: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    project_url: string
  }[]
  small_sat_simulator_projects: {
    project_title: string
    project_description: {
      type: string
      text: string
    }[]
    project_logo: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    project_url: string
  }[]
  high_altitude_ballooning_projects: {
    project_title: string
    project_description: {
      type: string
      text: string
    }[]
    project_logo: {
      dimensions: {
        width: number
        height: number
      }
      alt: string
      url: string
    }
    project_url: string
  }[]
}

export default function Projects() {
  // useEffect(() => {
  //   const path = window.location.hash
  //   if (path && path.includes('#')) {
  //     setTimeout(() => {
  //       const id = path.replace('#', '')
  //       const el = window.document.getElementById(id)
  //       const r = el?.getBoundingClientRect()
  //       if (r) {
  //         window?.top?.scroll({
  //           top: scrollY + r.top - 73,
  //           behavior: 'smooth',
  //         })
  //       }
  //     }, 600)
  //   }
  // }, [])

  return (
    <Layout id="projects">
      <main className="bg-unbBlack-10 pt-10 min-[560px]:pt-20">
        <section className="mx-auto flex w-full max-w-[1120px] flex-col items-start justify-center gap-4 px-5 pb-10 min-[560px]:items-center min-[560px]:pb-20">
          <h2 className="text-4xl uppercase text-unbBlue-400 min-[560px]:text-6xl">
            Our projects
          </h2>
          <div>
            <p className="flex flex-col gap-4 text-justify text-unbBlue-400">
              These are the projects that our team is working on. Space
              Missions, Small SAT Simulator and High-Altitude Ballooning are our
              main focus.
            </p>
          </div>
        </section>

        <section
          id="space-missions"
          className="flex flex-col items-center justify-center gap-8 bg-unbBlue-600 py-10 min-[560px]:gap-16 min-[560px]:py-20"
        >
          <h3 className="text-center text-3xl uppercase min-[560px]:text-4xl">
            Space Missions
          </h3>

          <div className="flex flex-col items-center gap-8 min-[560px]:gap-16">
            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[166px] w-full max-w-[200px] bg-white p-5 min-[560px]:block"
                src={perceptionLogo}
                width={200}
                height={166}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">Perception</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    The Perception project aims to enhance the monitoring of
                    strategic assets like natural resources through advanced
                    perception, which involves understanding, learning, and
                    adapting to their random and uncertain nature. By
                    integrating sensor networks, space technologies, and data
                    science, the project seeks to empower decision-making in
                    complex scenarios. It involves developing new
                    satellite-based services using CubeSats to track and monitor
                    Brazilian biomes and infrastructure. The project includes
                    the K34 Tower in the Amazon and the Água Limpa Farm in the
                    Cerrado, supporting sustainable development and
                    environmental monitoring. We invite you to join us in the
                    Perception project to develop new technologies and
                    satellite-based services for tracking and monitoring our
                    strategic assets.
                  </p>
                </div>

                <Link
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="/projects/perception"
                >
                  Check More
                </Link>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[166px] w-full max-w-[200px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/7afc16e4-a88d-4e22-b8f4-e6e4b28ddb94_alfacrux_logo.webp"
                width={200}
                height={166}
                alt="project logo"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">AlfaCrux</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    The AlfaCrux mission is an educational and technological in
                    orbit demonstration of narrowband communication solutions.
                    It is a 1U university CubeSat satellite developed by
                    students and professors from the University of Brasilia,
                    Brazil. It is the first space mission financed by the
                    Government of the Federal District of Brazil through the
                    Federal District Research Support Foundation (FAPDF), that
                    also counts with the support of the Brazilian Space Agency
                    (AEB) and the Brazilian National Telecommunications Agency
                    (ANATEL). Come and be part of it!
                  </p>
                </div>

                <Link
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="/projects/alfacrux"
                >
                  Check More
                </Link>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[159px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/b088d583-caa2-49d3-b099-e5e89c9ed9bb_wormsail_logo.webp?auto=compress,format&rect=0,0,242,304&w=200&h=251"
                height={200}
                width={159}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">WormSail</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    A 2U CubeSat, the WormSail is a university satellite
                    developed by students and professors from the University of
                    Brasilia (UnB), Brazil, and the University of Nottingham
                    (UoN), UK. The main mission is educational: to provide a
                    hands-on experience to the students in the complete process
                    of developing and operating a space mission. It aims to
                    demonstrate in orbit a flight software algorithm to perform
                    packet routing, a set of observation subsystems to collect
                    images and data from on-board sensors, and a new subsystem
                    for attitude maneuvers including a 3-axes magnetorquer and a
                    passive deorbiting mechanism based on Origami-like
                    structures and atomic oxygen corrosion. Get in touch and
                    help WormSail be a great success!
                  </p>
                </div>

                <span className="rounded-xl border border-unbGreen-400 p-4 font-bold uppercase transition-all min-[560px]:px-12 min-[560px]:py-5">
                  Comming soon
                </span>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[150px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/84ee5161-dba0-4806-b02e-67b1ca3034e5_WhatsApp_Image_2022-03-24_at_20.02.58-removebg-preview.png?auto=compress,format&rect=0,0,127,169&w=200&h=266"
                width={150}
                height={200}
                alt="project logo"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">AstroJam</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    The LODESTAR team is very proud to be a member of the
                    AstroJam space mission! The AstroJam is a 3U student-led
                    CubeSat designed to perform research at the University of
                    Nottingham, with science payloads supported by the
                    Astropharmacy Research Group and Nottingham Geospatial
                    Institute (NGI). The payloads include a miniaturised
                    fluorescence spectrometer for the in-situ analysis of cell
                    free bioreporters producing analogue astropharmaceuticals
                    and a CubeSat-based GNSS interference mapping payload.
                    Additionally, an ADCS magnetorquer cooperatively developed
                    with the LODESTAR team at the University of Brasilia will be
                    used for detumbling and pointing the satellite. The mission
                    is organised and run by students from various departments,
                    involving them at Bachelor, Masters and PhD level and
                    enabling them to develop their theses into hands-on, working
                    pieces of space technology. The AstroJam main bus subsystems
                    (OBC, EPS and radio transceiver) are commercial off the
                    shelf items, although notably structural components will be
                    partly manufactured in-house at UoN, while other components
                    will be manufactured using additive manufacturing
                    technologies from specialised companies in Nottingham and
                    Europe. AstroJam will provide both IOD of the first CubeSat
                    hosted GNSS interference mapping payload, as well as
                    validation of the first University-led biomedical CubeSat
                    payload - both cutting-edge research areas that have well
                    cited potential applications. The in-situ culturing and
                    analysis of cell-free synthesised astropharmaceutical
                    molecules has almost limitless applications to microgravity
                    research and technology to support future crewed missions
                    for food and medicine production, waste treatment and ISRU
                    (In-Situ Resource Utilisation). Similarly, the ability to
                    monitor GNSS interference using relatively low-cost
                    satellites may lead to future constellations dedicated to
                    GNSS signal monitoring, increasing revisit time, and
                    allowing resources to be focused on areas with degraded
                    performance. The LODESTAR team will also support the
                    AstroJam mission in the ground segment by receiving
                    telemetry in a reliable communication channel. The LODESTAR
                    team thanks the University of Nottingham for the
                    partnership!
                  </p>
                </div>

                <a
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.nottingham.ac.uk/aerospace/space/cubesat-programme/cubesat-missions/index.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check More
                </a>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbBlue-400" />

            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[159px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/cfc2805c-6baa-4372-9eaa-16a0abe24b9e_glee_logo.webp?auto=compress,format&rect=0,0,251,251&w=200&h=200"
                height={200}
                width={200}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">Glee</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    The Great Lunar Expedition for Everyone, GLEE 2023, is a
                    mission to the surface of the Moon that will conduct science
                    and test technology with hundreds of 5-gram LunaSats built
                    by students from all around the world. The LODESTAR is proud
                    to be one of the organizations currently involved. Check
                    more information on the GLEE website!
                  </p>
                </div>

                <a
                  className="rounded-xl bg-unbGreen-400 p-4 font-bold uppercase transition-all hover:bg-unbGreen-500 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.glee2023.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check More
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          className="flex flex-col items-center justify-center gap-16 py-10 min-[560px]:gap-8 min-[560px]:py-20"
          id="small-sat-simulator"
        >
          <h3 className="text-center text-3xl uppercase text-unbBlue-600 min-[560px]:text-4xl">
            Small SAT Simulator
          </h3>

          <div className="flex flex-col items-center gap-8 text-unbBlue-400 min-[560px]:gap-16">
            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[168px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/30be7a6c-8ecc-4dd7-8544-cd6ead0ab760_logo.webp?auto=compress,format&rect=0,0,742,883&w=200&h=238"
                width={168}
                height={200}
                alt="project logo"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">Simulator</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    Attitude simulators are a great resource for designing and
                    testing attitude determination and control algorithms for
                    spacecraft. They have been used for decades equipped with
                    different sensors and actuators to reproduce the operational
                    conditions of a satellite in space and to experimentally
                    validate hardware and algorithms. The LODESTAR facility
                    provides to the user a magnetic field simulator paired to an
                    air-bearing platform that can simulate the attitude motion
                    of a nanosatellite in orbit. The aim of this system is to
                    provide a hardware-in-the-loop facility for attitude
                    determination and control systems of nanosatellites for
                    several applications, such as testing of algorithms,
                    sensors, and actuators, as well as satellite functional
                    tests. Come to validate your ideas and be part of this team!
                  </p>
                </div>

                <span className="rounded-xl border border-unbBlue-400 p-4 font-bold uppercase transition-all min-[560px]:px-12 min-[560px]:py-5">
                  Comming soon
                </span>
              </div>
            </article>
          </div>
        </section>

        <section
          className="flex flex-col items-center justify-center gap-16 bg-unbGreen-400 py-10 min-[560px]:gap-8 min-[560px]:py-20"
          id="high-altitude-ballooning"
        >
          <h3 className="text-center text-3xl uppercase min-[560px]:text-4xl">
            High-Altitude Ballooning
          </h3>

          <div className="flex flex-col items-center gap-8 min-[560px]:gap-16">
            <article className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[155px] min-[560px]:block"
                width={155}
                height={200}
                alt="project logo"
                src="https://images.prismic.io/lodestar/e8551ee6-1e30-4617-a0c2-06703f839ab4_laicansat_logo.webp?auto=compress,format&rect=0,0,1210,1585&w=200&h=262"
              />

              <div className="flex flex-col items-end gap-6 text-justify">
                <h4 className="text-2xl font-medium">LAICAnSat</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    The high-altitude scientific platform developed at LODESTAR,
                    called LAICAnSat, is a project that started in 2013 as an
                    initiative to stimulate the study of aerospace systems and
                    to provide a low-cost platform for hands-on aerospace
                    education. The first flight tests took place in 2014
                    (LAICAnSat-1 and LAICAnSat-2) and allowed to test early
                    hardware solutions. Other four launches occurred in 2017
                    (LAICAnSat-3, LAICAnSat-4, LAICAnSat-5 and LAICAnSat-5.1).
                    LAICAnSat-3 and LAICAnSat-4 were launched to validate a new
                    mechanical structure fabricated in accordance with the
                    CubeSat standard and using rapid prototype technologies
                    based on 3D printer manufacturing, the new PC/104 standard
                    PCB with the on-board computer and embedded sensors, as well
                    as two 360º spherical cameras.
                  </p>
                </div>

                <a
                  className="rounded-xl bg-unbBlack-0 p-4 font-bold uppercase text-unbBlue-400 transition-all hover:bg-unbBlack-10 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.youtube.com/channel/UCDbPHM1djZ8KOvkJh46NqRA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check More
                </a>
              </div>
            </article>

            <span className="block h-px w-full max-w-[1080px] bg-unbGreen-300" />

            <article className="mx-auto flex w-full max-w-[1120px] flex-row-reverse items-center justify-between gap-20 px-5">
              <Image
                className="hidden max-h-[200px] w-full max-w-[159px] min-[560px]:block"
                src="https://images.prismic.io/lodestar/feeb99b9-2446-46fd-a3dd-970750d2e766_kuaray_logo.webp?auto=compress,format&rect=0,0,778,634&w=200&h=163"
                height={163}
                width={200}
                alt="project logo"
              />

              <div className="flex flex-col items-start gap-6 text-justify">
                <h4 className="text-2xl font-medium">Kuaray</h4>

                <div className="flex flex-col gap-4">
                  <p>
                    The main mission of the LAICAnSat platform took place at
                    Idaho, USA, in 2017. The goal was to record the total solar
                    eclipse from the stratosphere using a 360º degree camera,
                    reproducing the flight experience up to the stratosphere
                    during the total solar eclipse of August 2017 in North
                    America, as well as to provide a vertical meteorological
                    mapping of the whole flight path. It was a new achievement
                    in the world, to the best of our knowledge never seen
                    before! The LODESTAR team, and its partners Mutum Ham Radio
                    Expedition team and the Brazilian Astronomy Club, DF,
                    Brazil, are proud for having been a member of the NASA Space
                    Grant Eclipse Ballooning Project. The LAICAnSat-5 (CubeSat
                    3U standard) and LAICAnSat-5.1 (Cube-Sat 1U standard) launch
                    and the mission were a great success! Check this adventure
                    and come to be a partner!
                  </p>
                </div>

                <a
                  className="rounded-xl bg-unbBlack-0 p-4 font-bold uppercase text-unbBlue-400 transition-all hover:bg-unbBlack-10 min-[560px]:px-12 min-[560px]:py-5"
                  href="https://www.facebook.com/projetokuaray"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check More
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  )
}
