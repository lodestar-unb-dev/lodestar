import { useEffect, useState } from "react"
import { useTheme } from "styled-components";
import { FiTool } from 'react-icons/fi';
import { AnimatePresence, motion } from "framer-motion";
import PrismicDOM from 'prismic-dom';
import { GetStaticProps } from "next";

import { Layout } from "../../../components/Layout"
import { ComingNext, RadioBanner, RadioForm, RadioInfo } from "../../../styles/pages/projects/alfacrux/radio.styles"
import { getPrismicClient } from "../../../services/prismic";
import { Dashboard } from "../../../components/Dashboard";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

function Info({ description, keyValue }: { 
  keyValue: {
    key: string;
    value: string;
  }[],
  description: {
    type: string;
    text: string;
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
      <article 
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(description)
        }}
      />
      {keyValue.map(item => (
        <div key={item.key}>
          <strong>{item.key}</strong>: <div dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(item.value)
          }} />
        </div>
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

interface AlfaCruxRadioPrismicDocument {
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
  basic_description: {
    type: string;
    text: string;
  }[];
  sdr_info: {
    key: string;
    value: string;
  }[];
  sdr_description: {
    type: string;
    text: string;
  }[];
  ham_info: {
    key: string;
    value: string;
  }[];
  ham_description: {
    type: string;
    text: string;
  }[];
  ttc_info: {
    key: string;
    value: string;
  }[];
  ttc_description: {
    type: string;
    text: string;
  }[];
  telemetry_viewer_title: string;
  telemetry_viewer_description: {
    type: string;
    text: string;
  }[];
  coming_next_title: string;
  coming_next_group: {
    coming_next_image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
    coming_next_description: {
      type: string;
      text: string;
    }[];
  }[];
}

interface AlfaCruxRadioProps {
  alfacruxRadioPrismicDocument: AlfaCruxRadioPrismicDocument | null;
}

export default function AlfaCruxRadio({ alfacruxRadioPrismicDocument }: AlfaCruxRadioProps) {
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
    basic_description,
    description,
    ham_info,
    ham_description,
    radio_info_title,
    sdr_info,
    sdr_description,
    ttc_info,
    ttc_description,
    telemetry_viewer_title,
    telemetry_viewer_description,
    coming_next_title,
    coming_next_group
  } = alfacruxRadioPrismicDocument;

  const info = {
    'basic': {
      description: basic_description,
      keyValue: basic_info
    },
    'ham': {
      description: ham_description,
      keyValue: ham_info
    },
    'sdr': {
      description: sdr_description,
      keyValue: sdr_info
    },
    'ttc': {
      description: ttc_description,
      keyValue: ttc_info
    }
  }
  
  useEffect(() => {
    const path = window.location.hash
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "")
        const el = window.document.getElementById(id)
        const r = el?.getBoundingClientRect()
        if (r) {
          window?.top?.scroll({
            top: scrollY + r.top -73,
            behavior: 'smooth'
          })
        }
      }, 600)
    }
  }, [])

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
            }}
            onClick={() => handleFilterChange('basic')}
          >
            Beacon
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 'sdr' ? theme.colors.green : theme.colors.black0,
              color: activeFilter === 'sdr' ? theme.colors.black5 : theme.colors.blue,
            }}
            onClick={() => handleFilterChange('sdr')}
          >
            SDR Experiments
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 'ham' ? theme.colors.black100 : theme.colors.black0,
              color: activeFilter === 'ham' ? theme.colors.black5 : theme.colors.blue,
            }}
            onClick={() => handleFilterChange('ham')}
          >
            Ham radio digipeater
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 'ttc' ? theme.colors.blue : theme.colors.black0,
              color: activeFilter === 'ttc' ? theme.colors.black5 : theme.colors.blue,
            }}
            onClick={() => handleFilterChange('ttc')}
          >
            TTC
          </button>
        </nav>

        <AnimatePresence
          exitBeforeEnter
        >
          { (info[activeFilter].description.length > 0 || info[activeFilter].keyValue.length > 0) ? (
              <Info key={activeFilter} {...info[activeFilter]} />
          ) : (
            <CommingSoon key="commingSoon" />
          ) }
        </AnimatePresence>
        
      </RadioInfo>

      <RadioForm>
        <div>
        <h3>Radio Form</h3>

        <iframe 
          className="form"
          src="https://dbgeolog.unb.br/lodestar/form2.php" 
          frameBorder={0}
        />

        <h4>Check who has already received packets from AlfaCrux.<br />Come with us and be part of this mission!</h4>
        <iframe 
          className="map"
          src="https://dbgeolog.unb.br/lodestar/map.php" 
          frameBorder={0}
        />
        </div>
      </RadioForm>

      <Dashboard id="telemetry-viewer" data={{ telemetry_viewer_title, telemetry_viewer_description }} />
    
      <ComingNext>
        <h3>{coming_next_title}</h3>

        <div>
        {
          coming_next_group.map(item => (
            <article key={item.coming_next_image.url}>
              <img src={item.coming_next_image.url} alt={item.coming_next_image.alt} />
              
              <div dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(item.coming_next_description)
              }} />
            </article>
          ))
        }
        </div>
      </ComingNext>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<AlfaCruxRadioProps> = async ({
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