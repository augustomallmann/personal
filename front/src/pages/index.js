import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fetchAPI } from '../api/Api';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home({ darkMode, setDarkMode, homepage }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Seo seo={homepage.seo} />
        <Hero />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [homepage] = await Promise.all([fetchAPI('/homepage')]);

  return {
    props: { homepage },
    revalidate: 1,
  };
}
