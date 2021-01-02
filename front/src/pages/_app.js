/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { motion } from 'framer-motion';
// strapi api
import App from 'next/app';
import { fetchAPI } from '../api/Api';

import '../styles/global.scss';
import Header from '../components/Header';

// Store Strapi Global object in context
export const GlobalContext = createContext({});
export const pageTransition = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    overflow: 'hidden',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
      when: 'beforeChildren',
      staggerChildren: 5,
    },
  },
};

function MyApp({ Component, pageProps, router }) {
  const { global } = pageProps;
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#232323' : '#F55257',
      },
      secondary: {
        main: darkMode ? '#F55257' : '#232323',
      },
      tertiary: {
        main: '#ffffff',
      },
      background: {
        default: darkMode ? '#181818' : '#f55257',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#ffffff',
        spotlight: darkMode ? '#181818' : '#EBEBEB',
      },
    },
  });

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={pageTransition}
          >
            <Component
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              {...pageProps}
            />
          </motion.div>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');

  return { ...appProps, pageProps: { global } };
};

export default MyApp;
