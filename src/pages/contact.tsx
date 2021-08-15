import Link from 'next/link';
import { FiMail, FiYoutube, FiPhone, FiMapPin } from 'react-icons/fi';

import { Layout } from '../components/Layout';

import { Container } from '../styles/pages/contact.styles';

export default function Contact() {
  return (
    <Layout>
      <Container>
        <header>
          <h2>Our contact</h2>
          <p>Want to say something to us? Feel free to get in touch or visit.</p>
        </header>

        <section>
          <ul>
            <li>
              <FiMapPin size={20} />
              <span>Laboratório de Simulação e Controle de Sistemas Aeroespaciais (LODESTAR), SG 11, UnB área 1</span>
            </li>

            <li>
              <Link href="mailto:lodestar@aerospace.unb.br" passHref>
                <a>
                  <FiMail size={20} />
                  <span>lodestar@aerospace.unb.br</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="tel:+556131075556" passHref>
                <a>
                  <FiPhone size={20} />
                  <span>+55 61 3107-5556</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="https://www.youtube.com/channel/UCkbKnVEH-IkNNB87Kn6CUtg" passHref>
                <a>
                  <FiYoutube size={20} />
                  <span>LODESTAR - UnB</span>
                </a>
              </Link>
            </li>
          </ul>

          <aside>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.9305400106069!2d-47.872748070811106!3d-15.76583060866397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bba813c4139%3A0xdb6c5560f6def8f5!2sSG-11%20Laborat%C3%B3rio%20de%20Engenharia%20El%C3%A9trica!5e0!3m2!1spt-BR!2sbr!4v1628949589604!5m2!1spt-BR!2sbr" 
              width="420" 
              height="250" 
              style={{
                border: 0
              }} 
              allowFullScreen
              loading="lazy" 
            />
          </aside>
        </section>
      </Container>
    </Layout>
  )
}