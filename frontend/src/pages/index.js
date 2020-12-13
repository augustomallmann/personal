import Layout from '../components/Layout';
import { fetchAPI } from '../../lib/api';
import Portfolio from '../components/Portfolio';

const Home = ({ categories, portfolios }) => (
  <>
    <Layout categories={categories}>
      <h1>Olá mundo</h1>
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
