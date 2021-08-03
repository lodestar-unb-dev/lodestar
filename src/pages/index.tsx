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
          
          <aside>
            <h3>INTEGRATING KNOWLEDGE<br/>& INNOVATING IN THE<br/>AEROSPACE SECTOR</h3>
            <img src="/lodestar_logo.webp" alt="Lodestar Logo" />
          </aside>
        </section>

        <section className={styles.homeObjectives}>
          <h2>Objectives</h2>
          
          <aside>
            <div>
              <p>Integrando pesquisadores de diferentes áreas do conhecimento, o LODESTAR realiza pesquisa, desenvolvimento e inovação para os avanços da exploração espacial.</p>
              <p>O setor aeroespacial tem o potencial de fornecer contribuições significativas para as tendências tecnológicas, e seus desafios sociais e ambientais por meio de uma combinação de rigor analítico, relevância empírica e implementação prática. Tais contribuições dependem do desenvolvimento de soluções aplicáveis no mundo real, e da formação de recursos humanos de base tecnológica.</p>
            </div>
            
            <div>
              <p>Nesse contexto, as contribuições do grupo de pesquisa estão focadas em sete áreas correlacionadas:</p>

              <ol type="I">
                <li>missões de CubeSats;</li>
                <li>determinação e controle de atitude;</li>
                <li>simulador de pequenos satélites;</li>
                <li>sistemas de navegação via satélite;</li>
                <li>plataformas estratosféricas;</li>
                <li>segurança cibernética e telecomunicação;</li>
                <li>sistemas embarcados.</li>
              </ol>

              <p>De forma ampla, o grupo investiga as potencialidades da nova era espacial para o desenvolvimento sustentável.</p>
            </div>
          </aside>
        </section>

        <section className={styles.homeMissions}>
          <div>
            <h2>Missions</h2>

            <div>
              <Link href='/projects/alfacrux'>
                <a>
                  <img src="/alfacrux_logo.webp" alt="AlfaCrux" />
                  <span>AlfaCrux</span>
                </a>
              </Link>
              
              <Link href='/projects/wormsail'>
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
