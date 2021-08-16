import { useState } from "react"
import { useTheme } from "styled-components";
import { FiTool } from 'react-icons/fi';
import { AnimatePresence, motion } from "framer-motion";

import { Layout } from "../../../components/Layout"
import { RadioBanner, RadioInfo } from "../../../styles/pages/projects/alfacrux/radio.styles"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

function BasicInfo() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      <p><strong>Radio Frequency Band</strong>: UHF</p>

      <p><strong>Downlink/Uplink Central Frequency</strong>: 437.000 MHz (to be coordinate)</p> 

      <p><strong>Modulations</strong>: GMSK, GFSK, 1200 baud AFSK/FM</p>

      <p><strong>Protocols</strong>: s-ALOHA, H2.0, AX.25</p>
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
        paddingTop: 87,
        paddingBottom: 87
      }}
    >
      <FiTool/>
      <strong>More information comming soon...</strong>
    </motion.div>
  )
}

export default function AlfacruxRadio() {
  const [activeFilter, setActiveFilter] = useState(0);
  const theme = useTheme();

  function handleFilterChange(filterNumber: number) {
    if (filterNumber === activeFilter)
      return;

    setActiveFilter(filterNumber);
  }

  return (
    <Layout>
      <RadioBanner role="banner">        
        <article>
          <img src="/alfacrux_logo.webp" alt="AlfaCrux logo" />
          <h2>Radio Amateur</h2>

          <div>
            <p>
              AlfaCrux operates on the amateur radio frequencies in the UHF band.
            </p>
            
            <p>
              It hosts a digipeater which can be accessed by any radioamateur. 
              Instructions for the use of the digipeater will be available soon.
            </p>

            <p>
              In addition, any radio amateur is invited to receive the satellite 
              telemetry and share it at his will and cooperate in the 
              SDR experiments. Instruction for decoding the telemetry data packets 
              will be available soon.
            </p>

            <p>
              Data received by the radio-amateur community around the world 
              will be collected and sorted along with data downloaded by the 
              Ground Station of the Laboratory of Simulation and Control of 
              Aerospace Systems, LODESTAR, University of Brasilia, UnB. 
              All the data will be available for free consultation online and 
              all the contributors will be acknowledged.
            </p>
          </div>
        </article>
      </RadioBanner>
    
      <RadioInfo>
        <h3>Radio Info</h3>

        <nav>
          <button
            style={{
              backgroundColor: activeFilter === 0 ? theme.colors.blue : theme.colors.black0,
              color: activeFilter === 0 ? theme.colors.black5 : theme.colors.blue
            }}
            onClick={() => handleFilterChange(0)}
          >
            Basic
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 1 ? theme.colors.green : theme.colors.black0,
              color: activeFilter === 1 ? theme.colors.black5 : theme.colors.blue
            }}
            onClick={() => handleFilterChange(1)}
          >
            SDR Experiments
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 2 ? theme.colors.black100 : theme.colors.black0,
              color: activeFilter === 2 ? theme.colors.black5 : theme.colors.blue
            }}
            onClick={() => handleFilterChange(2)}
          >
            Ham radio digipeater
          </button>

          <button
            style={{
              backgroundColor: activeFilter === 3 ? theme.colors.blue : theme.colors.black0,
              color: activeFilter === 3 ? theme.colors.black5 : theme.colors.blue
            }}
            onClick={() => handleFilterChange(3)}
          >
            TTC
          </button>
        </nav>

        <AnimatePresence
          exitBeforeEnter
        >
          { activeFilter === 0 ? (
            <BasicInfo key="basic" />
          ) : (
            <CommingSoon key="commingSoon" />
          ) }
        </AnimatePresence>
        
      </RadioInfo>
    </Layout>
  )
}