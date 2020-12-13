import App from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { getStrapiMedia } from '../../lib/media';
import { fetchAPI } from '../../lib/api';

// Store Strapi Global object in context
export const GlobalContext = createContext({});


const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      
      <GlobalContext.Provider value={global} >
        <Component {...pageProps} />
       

      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
