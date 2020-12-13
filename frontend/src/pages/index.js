import Layout from '../components/Layout';
import { fetchAPI } from '../../lib/api';
import Portfolio from '../components/Portfolio';
import Hero from '../components/Hero'

const Home = ({ categories, portfolios }) => (
  <>
    <Layout categories={categories}>
      <Hero/>
      <Portfolio portfolios={portfolios} />
    </Layout>
  </>
);

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, portfolios] = await Promise.all([
    fetchAPI('/articles?status=published'),
    fetchAPI('/categories'),
    fetchAPI('/portfolios'),
  ]);

  return {
    props: { articles, categories, portfolios },
    revalidate: 1,
  };
}

export default Home;
