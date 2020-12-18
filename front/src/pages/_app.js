import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// strapi api
import App from 'next/app';
import { fetchAPI } from '../api/Api';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  const [darkMode, setDarkMode] = useState(true);

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
        main: '#232323',
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
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component
            {...pageProps}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
