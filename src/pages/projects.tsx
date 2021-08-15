import Link from 'next/link';

import { Layout } from '../components/Layout';

import {
  Container,
  ProjectsHeader,
  SpaceMissionProject,
  SmallSATSimulatorProject,
  HighAltitudeBallooningProject,
  Divider
} from '../styles/pages/projects.styles';

export default function Projects() {
  return (
    <Container>
      <ProjectsHeader>
        <h2>Our Projects</h2>
        <p>
          These are the projects that our team is working on. 
          Space Missions, Small SAT Simulator and High-Altitude Ballooning 
          are our main focus.
        </p>
      </ProjectsHeader>  

      <SpaceMissionProject>
        <h3>Space Missions</h3>

        <article>
          <img src="/alfacrux_logo.webp" alt="AlfaCrux logo" />

          <div>
            <h4>
              AlfaCrux
            </h4>

            <p>
              The AlfaCrux mission is an educational and technological in orbit 
              demonstration of narrowband communication solutions. It is a 1U 
              university CubeSat satellite developed by students and professors 
              from the University of Brasilia, Brazil. It is the first space mission 
              financed by the Government of the Federal District of Brazil 
              through the Federal District Research Support Foundation (FAPDF), 
              that also counts with the support of the Brazilian Space Agency (AEB).
              Come and be part of it!
            </p>

            <Link href="/projects/alfacrux" passHref>
              <a>Check More</a>
            </Link>
          </div>
        </article>

        <Divider dividerColor="blue" />

        <article>
          <img src="/wormsail_logo.webp" alt="WormSail logo" />

          <div>
            <h4>
              WormSail
            </h4>

            <p>
              A 2U CubeSat, the WormSail is a university satellite developed 
              by students and professors from the University of Brasilia (UnB), 
              Brazil, and the University of Nottingham (UoN), UK. 
              The main mission is educational: to provide a hands-on experience 
              to the students in the complete process of developing and operating 
              a space mission. It aims to demonstrate in orbit a flight software 
              algorithm to perform packet routing, a set of observation subsystems 
              to collect images and data from on-board sensors, and a new 
              subsystem for attitude maneuvers including a 3-axes magnetorquer 
              and a passive deorbiting mechanism based on Origami-like structures 
              and atomic oxygen corrosion. Get in touch and help WormSail be a 
              great success!
            </p>

            
            <span>Comming soon</span>
          </div>
        </article>

        <Divider dividerColor="blue" />

        <article>
          <img 
            src="/glee_logo.webp" 
            alt="Glee logo" 
            style={{
              borderRadius: 12
            }}
          />

          <div>
            <h4>
              Glee
            </h4>

            <p>
              The Great Lunar Expedition for Everyone, GLEE 2023, is a mission 
              to the surface of the Moon that will conduct science and test 
              technology with hundreds of 5-gram LunaSats built by students 
              from all around the world. LODESTAR is proud to be one of the 
              organizations currently involved. Check more information on the 
              GLEE website!
            </p>

            <Link href="https://www.glee2023.org/" passHref>
              <a>Check More</a>
            </Link>
          </div>
        </article>
      </SpaceMissionProject>

      <SmallSATSimulatorProject>
        <h3>Small SAT Simulator</h3>

        <article>
          <img src="/logo.webp" alt="Simulator logo" />

          <div>
            <h4>
              Simulator
            </h4>

            <p>
              Attitude simulators are a great resource for designing and testing 
              attitude determination and control algorithms for spacecraft. 
              They have been used for decades equipped with different sensors and 
              actuators to reproduce the operational conditions of a satellite in 
              space and to experimentally validate hardware and algorithms. 
              The LODESTAR facility provides to the user a magnetic field simulator 
              paired to an air-bearing platform that can simulate the attitude 
              motion of a nanosatellite in orbit. The aim of this system is to 
              provide a hardware-in-the-loop facility for attitude determination 
              and control systems of nanosatellites for several applications, 
              such as testing of algorithms, sensors, and actuators, as well as 
              satellite functional tests. Come to validate your ideas and 
              be part of this team!
            </p>

            <span>Comming soon</span>
          </div>
        </article>
      </SmallSATSimulatorProject>

      <HighAltitudeBallooningProject>
        <h3>High-altitude Ballooning</h3>

        <article>
          <img src="/laicansat_logo.webp" alt="LAICAnSAT logo" />

          <div>
            <h4>
              LAICAnSat
            </h4>

            <p>
              The high-altitude scientific platform developed at LODESTAR, 
              called LAICAnSat, is a project that started in 2013 as an 
              initiative to stimulate the study of aerospace systems and to 
              provide a low-cost platform for hands-on aerospace education. 
              The first flight tests took place in 
              2014 (LAICAnSat-1 and LAICAnSat-2) and allowed to test early 
              hardware solutions. Other four launches occurred in 2017 
              (LAICAnSat-3, LAICAnSat-4, LAICAnSat-5 and LAICAnSat-5.1). 
              LAICAnSat-3 and LAICAnSat-4 were launched to validate a new 
              mechanical structure fabricated in accordance with the CubeSat 
              standard and using rapid prototype technologies based on 3D 
              printer manufacturing, the new PC/104 standard PCB with the 
              on-board computer and embedded sensors, as well as two 360º 
              spherical cameras.
            </p>

            <Link href="https://www.youtube.com/channel/UCDbPHM1djZ8KOvkJh46NqRA" passHref>
              <a>Check More</a>
            </Link>
          </div>
        </article>

        <Divider dividerColor="greenLight" />

        <article>
          <img 
            src="/kuaray_logo.webp" 
            alt="Kuaray logo"
            style={{
              borderRadius: 12
            }} 
          />

          <div>
            <h4>
              Kuaray
            </h4>

            <p>
              The main mission of the LAICAnSat platform took place at Idaho, 
              USA, in 2017. The goal was to record the total solar eclipse 
              from the stratosphere using a 360º degree camera, reproducing 
              the flight experience up to the stratosphere during the total 
              solar eclipse of August 2017 in North America, as well as to 
              provide a vertical meteorological mapping of the whole flight path. 
              It was a new achievement in the world, to the best of our 
              knowledge never seen before! The LODESTAR team, and its partners 
              Mutum Ham Radio Expedition team and the 
              Brazilian Astronomy Club, DF, Brazil, are proud for having been a 
              member of the NASA Space Grant Eclipse Ballooning Project. 
              The LAICAnSat-5 (CubeSat 3U standard) and 
              LAICAnSat-5.1 (Cube-Sat 1U standard) launch and the mission 
              were a great success! Check this adventure and come to be a partner! 
            </p>

            <Link href="https://www.facebook.com/projetokuaray" passHref>
              <a>Check More</a>
            </Link>
          </div>
        </article>
      </HighAltitudeBallooningProject>
    </Container>
  )
}