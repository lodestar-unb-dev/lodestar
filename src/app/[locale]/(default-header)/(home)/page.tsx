import { Link } from '@/i18n/routing'
import { formatDistanceStrict } from 'date-fns'
import Image from 'next/image'
import { Box, Droplet, HardDrive } from 'lucide-react'

import { Layout } from '@/components/animationLayout'

export default function Home() {
  const launchDate = new Date(2022, 3, 1, 13, 24, 0, 0)
  const reentryDate = new Date(2024, 3, 5, 0, 0, 0, 0)
  const days = formatDistanceStrict(reentryDate, launchDate, {
    unit: 'day',
    roundingMethod: 'floor',
  })

  return (
    <Layout id="home">
      <main className="relative">
        <div className="absolute top-0 z-30 flex w-full flex-col items-center justify-center gap-1 bg-unbGreen-500/50 p-2 min-[560px]:flex-row">
          <span>AlfraCrux was on orbit for over {days}! 🚀 </span>
          <Link href="/projects/alfacrux" className="font-bold">
            Click here for more information
          </Link>
        </div>

        <section className="relative flex items-center overflow-hidden">
          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-unbBlue-600/0 to-unbBlue-600" />

          <div className="z-20 mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between px-5 pb-10 pt-20 min-[560px]:flex-row min-[560px]:pb-20 min-[960px]:gap-20">
            <div className="flex flex-col items-center gap-10 min-[560px]:items-start">
              <h1 className="text-6xl font-bold uppercase min-[960px]:text-7xl">
                Lodestar
              </h1>

              <h3 className="text-2xl uppercase text-unbBlack-10 min-[960px]:text-4xl">
                <span className="block">Integrating knowledge</span>
                <span className="block">& innovating in the</span>
                <span className="block">aerospace sector.</span>
              </h3>
            </div>

            <Image
              className="hidden min-[560px]:block min-[560px]:max-w-[15rem] min-[960px]:max-w-[19.75rem]"
              width={316}
              height={316}
              alt="lodestar logo"
              src="https://images.prismic.io/lodestar/07c29c20-1f85-4f91-b2d4-02dac6f8fba3_lodestar_logo.webp"
            />
          </div>

          <Image
            className="absolute left-0 top-0 h-[476px] w-full object-cover object-top"
            width={1432}
            height={476}
            alt="earth"
            src="https://images.prismic.io/lodestar/aa4ac6e3-8f3f-40ff-80d2-55936dac759a_home_banner.webp"
          />
        </section>

        <div className="bg-unbBlue-600">
          <section className="mx-auto flex max-w-[1120px] justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <div className="flex flex-col items-start justify-between gap-10">
              <h2 className="text-4xl font-bold uppercase">Space Missions</h2>

              <div className="flex flex-col gap-4 text-justify text-unbBlack-10">
                <p>
                  Aiming to develop skills for the planning, analysis, and
                  design of space missions, in addition to ensuring access to
                  space for its team and partners, the LODESTAR Space Mission
                  division is responsible for the research and technological
                  development in the field of space mission management, analysis
                  and design of small satellites, systems engineering, agile
                  methodologies, global navigation satellite systems, space
                  weather, control, telecommunications, cyber space security,
                  operation, command and control, as well as hardware and
                  firmware development for space applications.
                </p>

                <p>
                  We kindly invite you to take a moment of your time and check
                  our recent activities and achievements!
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-10">
                <aside className="flex items-center gap-5">
                  <Box />
                  <span>AlfaCrux</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Box />
                  <span>WormSail</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Box />
                  <span>Glee</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Box />
                  <span>AstroJam</span>
                </aside>
              </div>

              <Link
                className="rounded-xl bg-unbGreen-400 px-10 py-5 font-bold uppercase transition-all hover:bg-unbGreen-500"
                href="/projects#space-missions"
              >
                More info
              </Link>
            </div>

            <Image
              width={299}
              height={503}
              className="hidden min-[960px]:block"
              src="/images/space_missions_icon.svg"
              alt="space missions icon"
            />
          </section>
        </div>

        <div>
          <section className="mx-auto flex max-w-[1120px] justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <Image
              className="hidden min-[960px]:block"
              src="/images/small_sat_simulator_icon.svg"
              alt="small sat simulator icon"
              width={308}
              height={494}
            />

            <div className="flex flex-col items-end justify-between gap-10 text-unbBlue-400">
              <h2 className="text-4xl font-bold uppercase text-unbBlue-600">
                Small SAT Simulator
              </h2>

              <div className="flex flex-col gap-4 text-justify">
                <p>
                  It is well known that one critical step in a space project
                  life cycle is to demonstrate the qualification of design and
                  performance to meet the requirements at the specified levels.
                </p>

                <p>
                  In this context, the LODESTAR Small Sat Simulator division was
                  created with the aim of providing infrastructure and methods
                  for validation testing to measure product performance and
                  functions under a representative environment. It is focused on
                  safety-critical and mission-critical features in system,
                  subsystem, and equipment levels.
                </p>

                <p>
                  The main application currently under development is dedicated
                  to attitude determination and control of small satellites,
                  take a moment to check it, and welcome to be part of it!
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-10">
                <aside className="flex items-center gap-5">
                  <HardDrive />
                  <span>Simulator</span>
                </aside>
              </div>

              <Link
                className="rounded-xl bg-unbBlue-400 px-10 py-5 font-bold uppercase text-unbBlack-5 transition-all hover:bg-unbBlue-600"
                href="/projects#small-sat-simulator"
              >
                More info
              </Link>
            </div>
          </section>
        </div>

        <div className="bg-unbGreen-400">
          <section className="mx-auto flex max-w-[1120px] justify-between gap-20 px-5 py-10 min-[560px]:py-20">
            <div className="flex flex-col items-start justify-between gap-10">
              <h2 className="text-4xl font-bold uppercase">
                High-altitude balooning
              </h2>

              <div className="flex flex-col gap-4 text-justify text-unbBlack-10">
                <p>
                  Being aware of the importance and fundamental role of using
                  scientific balloons floating in the stratosphere for space
                  science research and technological development, the LODESTAR
                  High-Altitude Ballooning division has been developing a
                  modular platform for high altitudes applications.
                </p>

                <p>
                  The platform is carried to high altitudes using a free-flying,
                  low-cost rubber balloon enabling wide range observations. In
                  its current version, the platform is manufactured in
                  accordance with the CubeSat standard using rapid proto-type
                  technologies and exploiting current technological advances
                  such as miniaturization of electronic components and devices.
                </p>

                <p>
                  For the LODESTAR team it represents a low-cost tool for
                  conducting validation tests, educational activities, and
                  experiments in a near-Earth environment. Come and check what
                  is going on at the LODESTAR High-Altitude Ballooning division!
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-10">
                <aside className="flex items-center gap-5">
                  <Droplet />
                  <span>LAICAnSat</span>
                </aside>

                <aside className="flex items-center gap-5">
                  <Droplet />
                  <span>Kuaray</span>
                </aside>
              </div>

              <Link
                className="rounded-xl bg-unbBlack-5 px-10 py-5 font-bold uppercase text-unbBlue-400 transition-all hover:bg-unbBlack-25"
                href="/projects#high-altitude-ballooning"
              >
                More info
              </Link>
            </div>

            <Image
              className="hidden min-[960px]:block"
              src="/images/high_altitude_ballooning_icon.svg"
              alt="high altitude ballooning icon"
              width={180}
              height={545}
            />
          </section>
        </div>
      </main>
    </Layout>
  )
}
