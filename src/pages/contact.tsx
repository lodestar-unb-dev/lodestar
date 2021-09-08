import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FiMail, FiYoutube, FiPhone, FiMapPin } from 'react-icons/fi';

import { Layout } from '../components/Layout';
import { getPrismicClient } from '../services/prismic';

import { Container } from '../styles/pages/contact.styles';

interface ContactPrismicDocument {
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  youtube_title: string;
  youtube_link: string;
}

interface ContactProps {
  contactPrismicDocument: ContactPrismicDocument | null;
}

export default function Contact({ contactPrismicDocument }: ContactProps) {
  if (!contactPrismicDocument) {
    return (
      <div
        style={{
          color: 'black',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center' 
        }}
      >Erro no carregamento das informações.</div>
    )
  }

  const { email, location, phone, subtitle, title, youtube_link, youtube_title } = contactPrismicDocument;

  return (
    <Layout>
      <Container>
        <header>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </header>

        <section>
          <ul>
            <li>
              <FiMapPin size={20} />
              <span>{location}</span>
            </li>

            <li>
              <a
                href={`mailto:${email}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiMail size={20} />
                <span>{email}</span>
              </a>
            </li>

            <li>
              <a
                href={`tel:+${phone.replace(/\D/g,'')}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiPhone size={20} />
                <span>{phone}</span>
              </a>
            </li>

            <li>
              <a
                href={youtube_link}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiYoutube size={20} />
                <span>{youtube_title}</span>
              </a>
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

export const getStaticProps: GetStaticProps<ContactProps> = async ({
  previewData
}) => {
  const correctlyTypedPreviewData = previewData as { ref: string } | null;
  
  const prismic = getPrismicClient();
  const contactResponse = await prismic.getSingle('co', {
    ref: correctlyTypedPreviewData?.ref ? correctlyTypedPreviewData.ref : ''
  });

  return {
    props: {
      contactPrismicDocument: contactResponse?.data ?? null,
    }
  }
}