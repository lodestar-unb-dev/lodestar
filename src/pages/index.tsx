import Link from 'next/link';

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Header
        activePage="home"
      />

      <main>
        <section role="banner" className={styles.homeBanner}>
          <div />
          <h3>INTEGRATING KNOWLEDGE<br/>& INNOVATING IN THE<br/>AEROSPACE SECTOR</h3>
        </section>

        <section className={styles.homeObjectives}>
          <h2>Objectives</h2>
          
          <aside>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ipsum venenatis vestibulum, tincidunt consequat est quis ut nulla. Integer gravida tellus leo morbi felis. Neque, facilisi et adipiscing posuere. Diam porttitor a risus iaculis mauris viverra dis. Ultrices pretium eu donec nam euismod ornare. Mattis et aenean mi amet, pharetra. Viverra aliquet euismod:</p>

              <ul>
                <li>aliquam amet dictum sit diam elit, velit. Eget metus hac quis dui. Leo bibendum sapien tempor, amet eget. Egestas vestibulum sit vulputate neque, dignissim. Fermentum lectus ullamcorper. Vitae sodales egestas vitae sed leo, id morbi.</li>
                <li>Suspendisse duis dui elementum vulputate turpis luctus mauris imperdiet nullam. Rhoncus, molestie malesuada velit vestibulum malesuada diam. </li>
                <li>Duis odio sit et pellentesque sed sed tellus. In at odio a diam eget molestie aliquam faucibus. Non a risus risus scelerisque tempus, sit sit urna. Vitae at tempor diam.</li>
              </ul>
            </div>
            
            <img src="/lodestar_logo.webp" alt="Lodestar" />
          </aside>
        </section>

        <section className={styles.homeMissions}>
          <div>
            <h2>Missions</h2>

            <div>
              <Link href='/missions/alfacrux'>
                <a>
                  <img src="/alfacrux_logo.webp" alt="AlfaCrux" />
                  <span>AlfaCrux</span>
                </a>
              </Link>
              
              <Link href='/missions/wormsail'>
                <a>
                  <img src="/wormsail_logo.webp" alt="Wormsail" />
                  <span>Wormsail</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
