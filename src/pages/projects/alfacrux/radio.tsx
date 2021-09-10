import { useState } from "react"
import { useTheme } from "styled-components";
import { FiTool } from 'react-icons/fi';
import { AnimatePresence, motion } from "framer-motion";
import PrismicDOM from 'prismic-dom';
import { GetStaticProps } from "next";

import { Layout } from "../../../components/Layout"
import { RadioBanner, RadioInfo } from "../../../styles/pages/projects/alfacrux/radio.styles"
import { getPrismicClient } from "../../../services/prismic";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

function Info({ data }: { 
  data: {
    key: string;
    value: string;
  }[]
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      {data.map(item => (
        <p key={item.key}>
          <strong>{item.key}</strong>: {item.value}
        </p>
      ))}
    </motion.div>
  )
}

function CommingSoon() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.4 }}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 92,
        paddingBottom: 91
      }}
    >
      <FiTool/>
      <strong>More information comming soon...</strong>
    </motion.div>
  )
}

interface AlfacruxRadioPrismicDocument {
  banner_image: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    url: string;
  };
  alfacrux_logo: {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    url: string;
  };
  title: string;
  description: {
    type: string;
    text: string;
  }[];
  radio_info_title: string;
  basic_info: {
    key: string;
    value: string;
  }[];
  sdr_info: {
    key: string;
    value: string;
  }[];
  ham_info: {
    key: string;
    value: string;
  }[];
  ttc_info: {
    key: string;
    value: string;
  }[];
}

interface AlfacruxRadioProps {
  alfacruxRadioPrismicDocument: AlfacruxRadioPrismicDocument | null;
}

export default function AlfacruxRadio({ alfacruxRadioPrismicDocument }: AlfacruxRadioProps) {
  const [activeFilter, setActiveFilter] = useState<'basic' | 'ham' | 'sdr' | 'ttc'>('basic');
  const theme = useTheme();

  function handleFilterChange(filterNumber: 'basic' | 'ham' | 'sdr' | 'ttc') {
    if (filterNumber === activeFilter)
      return;

    setActiveFilter(filterNumber);
  }

  if (!alfacruxRadioPrismicDocument) {
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

  const {
    title,
    banner_image,
    alfacrux_logo,
    basic_info,
    description,
    ham_info,
    radio_info_title,
    sdr_info,
    ttc_info
  } = alfacruxRadioPrismicDocument;

  const info = {
    'basic': basic_info,
    'ham': ham_info,
    'sdr': sdr_info,
    'ttc': ttc_info
  }

  console.log(info[activeFilter])

  return (
    <Layout>
      <RadioBanner 
        role="banner"
        bgImageUrl={banner_image.url}
      >        
        <article>
          <img src={alfacrux_logo.url} alt={alfacrux_logo.alt} />
          <h2>{title}</h2>

          <div 
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(description)
            }}
          />
        </article>
      </RadioBanner>
    
      <RadioInfo>
        <h3>{radio_info_title}</h3>

        <nav>
          <button
            style={{
              backgroundColor: activeFilter === 'basic' ? theme.colors.blue : theme.colors.black0,
              color: activeFilter === 'basic' ? theme.colors.black5 : theme.colors.blue,
              fontWeight: activeFilter === 'basic' ? 500 : 400
            }}
            onClick={() => handleFilterChange('basic')}
          >
            Basic
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 'sdr' ? theme.colors.green : theme.colors.black0,
              color: activeFilter === 'sdr' ? theme.colors.black5 : theme.colors.blue,
              fontWeight: activeFilter === 'sdr' ? 500 : 400
            }}
            onClick={() => handleFilterChange('sdr')}
          >
            SDR Experiments
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 'ham' ? theme.colors.black100 : theme.colors.black0,
              color: activeFilter === 'ham' ? theme.colors.black5 : theme.colors.blue,
              fontWeight: activeFilter === 'ham' ? 500 : 400
            }}
            onClick={() => handleFilterChange('ham')}
          >
            Ham radio digipeater
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 'ttc' ? theme.colors.blue : theme.colors.black0,
              color: activeFilter === 'ttc' ? theme.colors.black5 : theme.colors.blue,
              fontWeight: activeFilter === 'ttc' ? 500 : 400
            }}
            onClick={() => handleFilterChange('ttc')}
          >
            TTC
          </button>
        </nav>

        <AnimatePresence
          exitBeforeEnter
        >
          { info[activeFilter].length > 0 ? (
            <Info key="info" data={info[activeFilter]} />
          ) : (
            <CommingSoon key="commingSoon" />
          ) }
        </AnimatePresence>
        
      </RadioInfo>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<AlfacruxRadioProps> = async ({
  previewData
}) => {
  const correctlyTypedPreviewData = previewData as { ref: string } | null;
  
  const prismic = getPrismicClient();
  const alfacruxRadioResponse = await prismic.getSingle('alfacrux_radio_amateur', {
    ref: correctlyTypedPreviewData?.ref ? correctlyTypedPreviewData.ref : ''
  });

  return {
    props: {
      alfacruxRadioPrismicDocument: alfacruxRadioResponse?.data ?? null,
    }
  }
}