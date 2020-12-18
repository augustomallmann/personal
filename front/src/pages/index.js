import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fetchAPI } from '../api/Api';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Articles from '../components/Articles';
import Layout from '../components/Layout';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home({
  darkMode,
  setDarkMode,
  homepage,
  portfolios,
  articles,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Seo seo={homepage.seo} />
        <Hero />
        <Portfolio portfolios={portfolios} />
        <Articles articles={articles} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [articles, categories, homepage, portfolios] = await Promise.all([
    fetchAPI('/articles?status=published'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
    fetchAPI('/portfolios'),
  ]);

  return {
    props: { articles, categories, homepage, portfolios },
    revalidate: 1,
  };
}
