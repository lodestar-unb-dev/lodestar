import { Header } from '../components/Header';
import Link from 'next/link';

import styles from './missions.module.scss';
import { Footer } from '../components/Footer';

export default function Missions() {
  return (
    <>
      <Header
        activePage="missions"
      />
      
      <section className={styles.missionsBanner}>
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
  </>
  )
}