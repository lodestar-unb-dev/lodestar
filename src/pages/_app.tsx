import '../styles/globals.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return(
    <>
      <Header
        activePage={router.pathname}
      />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
