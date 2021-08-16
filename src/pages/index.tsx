import { FiBox, FiHardDrive, FiDroplet } from 'react-icons/fi';

import { Layout } from '../components/Layout';
import { NoScrollLink } from '../components/NoScrollLink';

import {
  HomeBanner,
  HomeProjectSpaceMission,
  HomeProjectSmallSAT,
  HomeProjectHighAltitudeBallooning
} from '../styles/pages/home.styles';

export default function Home() {
  return (
    <Layout>
      <HomeBanner role="banner">
        <div />
        
        <aside>
          <div>
            <h1>Lodestar</h1>
            <h3>INTEGRATING KNOWLEDGE<br/>& INNOVATING IN THE<br/>AEROSPACE SECTOR</h3>
          </div>

          <img src="/lodestar_logo.webp" alt="Lodestar Logo" />
        </aside>
      </HomeBanner>

      <HomeProjectSpaceMission>
        <section>
          <aside>
            <h2>Space Missions</h2>

            <p>
            Aiming to develop skills for the planning, analysis, and design of space missions, 
            in addition to ensuring access to space for its team and partners, 
            the LODESTAR Space Mission division is responsible for the research and 
            technological development in the field of space mission management, analysis and 
            design of small satellites, systems engineering, agile methodologies, 
            global navigation satellite systems, space weather, control, telecommunications, 
            cyber space security, operation, command and control, as well as hardware and 
            firmware development for space applications.
            </p>
            <br/>
            <p>
            We kindly invite you to take a moment 
            of your time and check our recent activities and achievements!
            </p>

            <div>
              <aside>
                <FiBox />
                <span>AlfaCrux</span>
              </aside>

              <aside>
                <FiBox />
                <span>WormSail</span>
              </aside>

              <aside>
                <FiBox />
                <span>Glee</span>
              </aside>
            </div>

            <NoScrollLink href="/projects">
              <a>
                More info
              </a>
            </NoScrollLink>
          </aside>

          <img src="/space_missions_icon.svg" alt="space missions icon" />
        </section>
      </HomeProjectSpaceMission>

      <HomeProjectSmallSAT>
        <section>
          <img src="/small_sat_simulator_icon.svg" alt="small sat simulator icon" />

          <aside>
            <h2>Small SAT Simulator</h2>

            <p>
            It is well known that one critical step in a space project 
            life cycle is to demonstrate the qualification of design and 
            performance to meet the requirements at the specified levels.
            </p>
            <br/>
            <p>
            In this context, the LODESTAR Small Sat Simulator division was 
            created with the aim of providing infrastructure and methods for 
            validation testing to measure product performance and functions 
            under a representative environment. It is focused on safety-critical 
            and mission-critical features in system, subsystem, and 
            equipment levels.
            </p>
            <br/>
            <p>
            The main application currently under development 
            is dedicated to attitude determination and control of small satellites, 
            take a moment to check it, and welcome to be part of it!
            </p>

            <div>
              <aside>
                <FiHardDrive />
                <span>Simulator</span>
              </aside>
            </div>

            <NoScrollLink href="/projects">
              <a>
                More info
              </a>
            </NoScrollLink>
          </aside>
        </section>
      </HomeProjectSmallSAT>

      <HomeProjectHighAltitudeBallooning>
        <section>
          <aside>
            <h2>High-altitude ballooning</h2>

            <p>
            Being aware of the importance and fundamental role of using 
            scientific balloons floating in the stratosphere for space science 
            research and technological development, 
            the LODESTAR High-Altitude Ballooning division has been developing a 
            modular platform for high altitudes applications.
            </p>
            <br/>
            <p>
            The platform is carried to high altitudes using a free-flying, 
            low-cost rubber balloon enabling wide range observations. 
            In its current version, the platform is manufactured in accordance 
            with the CubeSat standard using rapid proto-type technologies and 
            exploiting current technological advances such as miniaturization of 
            electronic components and devices.
            </p>
            <br/>
            <p>
            For the LODESTAR team it 
            represents a low-cost tool for conducting validation tests, 
            educational activities, and experiments in a near-Earth environment. 
            Come and check what is going on at the 
            LODESTAR High-Altitude Ballooning division!
            </p>

            <div>
              <aside>
                <FiDroplet />
                <span>LAICAnSat</span>
              </aside>

              <aside>
                <FiDroplet />
                <span>Kuaray</span>
              </aside>
            </div>

            <NoScrollLink href="/projects">
              <a>
                More info
              </a>
            </NoScrollLink>
          </aside>

          <img src="/high_altitude_ballooning_icon.svg" alt="high altitude ballooning icon" />
        </section>
      </HomeProjectHighAltitudeBallooning>
    </Layout>
  )
}
