import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from "styled-components";

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { GlobalStyles } from "../styles/globals";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return(
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

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
      </ThemeProvider>
    </>
  )
}

export default MyApp
