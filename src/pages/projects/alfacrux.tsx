import Slider, { Settings } from "react-slick";
import { FiRss } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { Layout } from "../../components/Layout";
import { NoScrollLink } from "../../components/NoScrollLink";

import {
  AlfacruxBanner,
  AlfacruxBio,
  AlfacruxGallery,
  AlfacruxRadioAmateur,
  AlfacruxRecentActivities,
  AlfacruxWhy
} from '../../styles/pages/projects/alfacrux.styles';

export default function AlfaCrux() {
  const theme = useTheme();

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
  };

  return (
    <Layout>
      <main style={{ backgroundColor: theme.colors.blueDark }} >
        <AlfacruxBanner role="banner">
          <div />
          
          <img src="/alfacrux_logo.webp" alt="AlfaCrux Logo" />
        </AlfacruxBanner>

        <AlfacruxBio>
          <div>
            <h2>The AlfaCrux mission</h2>
            
              <aside>
                <p>
                  Financed by the Government of the Federal District of Brazil 
                  through the Federal District Research Support Foundation (FAPDF), 
                  the AlfaCrux is a radio amateur and educational mission to 
                  provide a hands-on experience to students and professors in the 
                  complete process of developing and operating a space mission. 
                  Specifically, the team will design, operate, and observe the 
                  behavior and performance of the AlfaCrux CubeSat in a space 
                  environment. Moreover, they will learn about radio electronics, 
                  antennas, digital communications, and radio amateur activities. 
                  As an additional goal, MSc. and PhD students from Electrical, 
                  Mechatronics, Mechanics, Production and Aerospace Engineering 
                  will test and demonstrate in orbit software defined radio 
                  experiments to perform ionospheric scintillation analysis and a 
                  data collect system from sensors in the ground.
                </p>

                <img src="/satellite_banner.webp" alt="Alfacrux render" />
              </aside>
              
              <p>
                The package routing solution will allow forwarding of received messages back 
                to Earth to support communication and messaging between radio 
                amateurs (digital QSO), store it on-board, and transmit it to the 
                ground station. Data collected will be available through internet 
                and can be used for several applications: study of different 
                methods for low-data rate communication, characterization of 
                interference sources, atmospheric propagation effects, 
                communication capability in terms of data rate, and link 
                performance in terms of bit error date (BER) and signal to noise 
                ratio (SNR). Finally, all the passages will be monitored 
                through the LODESTAR command and control ground station with the 
                support from the amateur radio community. 
                The telemetry information will be shared to the radio amateurs 
                and networks before launch. The AlfaCrux is planned to be 
                launched in Q1 2022 (date and local TBD) into a SSO at 550km.
              </p>
          </div>
        </AlfacruxBio>

        <AlfacruxWhy>
            <h2>Behind the Name: The Meaning of AlfaCrux</h2>
         
            <p>The name Alfa Crux is after the Alpha Crucis star, the brightest star in the southern constellation Crux (the Southern Cross), and among the brightest stars in the sky. The motivation to choose Alfa Crux as the mission’s name comes from the fact that the Southern Cross is the best-known constellation of those we can see in the southern hemisphere. It has a special importance in navigation and orientation, being known since the ancient Greeks time.</p>
            <p>The Alpha Crucis star appears in the Brazilian flag, and in the Brazilian coat of arms. It is a synonymous of guide, reference, and consequently responsibility and excellence. In this sense, it summarizes the general goals of this space mission: become a reference of excellence and dedication, and an example to be followed as an approach for the advance of the space activities in the new space era.</p>
        </AlfacruxWhy>

        <AlfacruxGallery>
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
        </AlfacruxGallery>

        <AlfacruxRadioAmateur>
          <h2>Radio Amateurs</h2>

          <div>
            <aside>
              <p>Do you want to communicate with AlfaCrux?</p>
              <p>Then click the button bellow for more info!</p>

              <NoScrollLink href="/projects/alfacrux/radio">
                <a>
                  <span>Radio amateur info</span>
                  <div>
                    <FiRss />
                  </div>
                </a>
              </NoScrollLink>
            </aside>

            <img src="/radio_amateur.svg" alt="Radio Amateur" />

          </div>
        </AlfacruxRadioAmateur>

        <AlfacruxRecentActivities>
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
        </AlfacruxRecentActivities>
      </main>
    </Layout>
  )
}