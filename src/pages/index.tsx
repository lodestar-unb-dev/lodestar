import Link from 'next/link';
import { FiBox, FiHardDrive, FiDroplet } from 'react-icons/fi';

import { Layout } from '../components/Layout';

import {
  HomeBanner,
  HomeProjectSpaceMission,
  HomeProjectSmallSAT,
  HomeProjectHighAltitudeBallooning
} from './home.styles';

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tortor id sed vitae, sit amet scelerisque dictumst dolor.
              Porttitor dui a condimentum quis posuere malesuada velit.
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
            </div>

            <Link href="/projects">
              <a>
                Saber mais
              </a>
            </Link>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tortor id sed vitae, sit amet scelerisque dictumst dolor.
              Porttitor dui a condimentum quis posuere malesuada velit.
            </p>

            <div>
              <aside>
                <FiHardDrive />
                <span>Tortor</span>
              </aside>
            </div>

            <Link href="/projects">
              <a>
                Saber mais
              </a>
            </Link>
          </aside>
        </section>
      </HomeProjectSmallSAT>

      <HomeProjectHighAltitudeBallooning>
        <section>
          <aside>
            <h2>High-altitude ballooning</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tortor id sed vitae, sit amet scelerisque dictumst dolor.
              Porttitor dui a condimentum quis posuere malesuada velit.
            </p>

            <div>
              <aside>
                <FiDroplet />
                <span>Porttitor</span>
              </aside>
            </div>

            <Link href="/projects">
              <a>
                Saber mais
              </a>
            </Link>
          </aside>

          <img src="/high_altitude_ballooning_icon.svg" alt="high altitude ballooning icon" />
        </section>
      </HomeProjectHighAltitudeBallooning>
    </Layout>
  )
}
