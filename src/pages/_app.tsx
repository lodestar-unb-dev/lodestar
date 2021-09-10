import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from "styled-components";
import * as gtag from '../utils/gtag';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { GlobalStyles } from "../styles/globals";
import { theme } from "../styles/theme";
import { ExitPreviewButton } from "../components/ExitPreviewButton";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return(
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header
          activePage={router.pathname}
        />
        <ExitPreviewButton />

        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>

        <ExitPreviewButton />

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
