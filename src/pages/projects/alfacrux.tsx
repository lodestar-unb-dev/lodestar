import Slider, { Settings } from "react-slick";
import { FiInfo } from 'react-icons/fi';
import Link from 'next/link';
import { useTheme } from 'styled-components';

import styles from './alfacrux.module.scss';

export default function AlfaCrux() {
  const theme = useTheme();

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
  };

  return (
    <>
      <main style={{ backgroundColor: theme.colors.blueDark }} >
        <section role="banner" className={styles.alfacruxBanner} />

        <section className={styles.alfacruxBio}>
          <div>
            <h1>AlfaCrux Mission</h1>
            
            <aside>
              <div>
                <p>The AlfaCrux mission is an educational and technological in orbit demonstration of narrowband communication solutions for Internet of Things (IoT) applications mainly in regions with low infrastructure, forest environments and countryside.</p>
                <p>The mission, supported by the Fundação de Apoio a Pesquisa do Distrito Federal (FAPDF) and the Brazilian Space Agency (AEB), will also study the effects of the space weather on satellite communications in equatorial latitudes, and provide a study case of possible applications in the agribusiness.</p>
              </div>
              
              <img src="/alfacrux_render.webp" alt="Alfacrux render" />
            </aside>
          </div>
        </section>

        <section className={styles.alfacruxWhy}>
            <h2>Behind the Name: The Meaning of AlfaCrux</h2>
         
            <p>The name Alfa Crux is after the Alpha Crucis star, the brightest star in the southern constellation Crux (the Southern Cross), and among the brightest stars in the sky. The motivation to choose Alfa Crux as the mission’s name comes from the fact that the Southern Cross is the best-known constellation of those we can see in the southern hemisphere. It has a special importance in navigation and orientation, being known since the ancient Greeks time.</p>
            <p>The Alpha Crucis star appears in the Brazilian flag, and in the Brazilian coat of arms. It is a synonymous of guide, reference, and consequently responsibility and excellence. In this sense, it summarizes the general goals of this space mission: become a reference of excellence and dedication, and an example to be followed as an approach for the advance of the space activities in the new space era.</p>
        </section>

        <section className={styles.alfacruxGallery}>
            <h2>Gallery</h2>  

            <Slider {...settings}>
              <div>
                <img src="/gallery/GS_mounting.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/Magnetorquer_assembly_4.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/Magnetorquer_assembly_1.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/Magnetorquer_assembly_2.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/Magnetorquer_assembly_3.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/Magnetorquer_assembly_5.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/GS_command_test.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/GS_arriving.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/GS_Moon.webp" alt="First image" />
              </div>
              <div>
                <img src="/gallery/Antenna_mounting_2.webp" alt="First image" />
              </div>
            </Slider>
        </section>

        <section className={styles.alfacruxRadioAmateur}>
          <h2>Radio Amateurs</h2>

          <div>
            <aside>
              <p>Do you want to communicate with AlfaCrux?</p>
              <p>Then click the button bellow for more info!</p>

              <Link href="/projects/alfacrux/radio">
                <a>
                  <span>Radio amateur info</span>
                  <div>
                    <FiInfo />
                  </div>
                </a>
              </Link>
            </aside>

            <img src="/radio_amateur.webp" alt="Radio Amateur" />

          </div>
        </section>

        <section className={styles.alfacruxRecentActivities}>
            <h2>Recent Activities</h2>  

            <section>
              <div>
                <iframe 
                  width="510" 
                  height="380" 
                  src="https://www.youtube.com/embed/ayb5y8QK8IU" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
                
                <aside>
                  <h3>Magnetic Model example</h3>
                  <p>Assembly, validation and test of the magnetic actuation system developed by the LODESTAR team within the AlfaCrux space mission activities.</p>
                </aside>
              </div>

              <div>
                <iframe 
                  width="510" 
                  height="380" 
                  src="https://www.youtube.com/embed/cKL3KxRqOWc" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                />
                
                <aside>
                  <h3>Magnetorquer Flight Model</h3>
                  <p>Protoflight model of the magnetic actuation system developed by the LODESTAR team.</p>
                </aside>
              </div>
            </section>
        </section>
      </main>
    </>
  )
}