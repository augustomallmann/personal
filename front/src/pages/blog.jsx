import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { Twitter, Facebook, Whatsapp, Telegram } from 'react-social-sharing';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';
import CardContent from '@material-ui/core/CardContent';
import Pagination from '@material-ui/lab/Pagination';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  singleArticleWrap: {
    padding: theme.spacing(8, 0, 3),
  },
  singleBanner: {
    minHeight: '500px',
    maxHeight: '600px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: theme.spacing(8),
  },
  // singleArticleH1: {
  //   fontSize: '2rem',
  //   lineHeight: '42px',
  //   fontWeight: 'bold',
  //   letterSpacing: '1px',
  // },
  // articleContent: {
  //   fontSize: '1rem',
  //   lineHeight: '1.5rem',
  //   letterSpacing: '1px',
  // },
  // divider: {
  //   margin: theme.spacing(5, 0, 5),
  // },
  cardArticle: {
    margin: theme.spacing(5, 0, 5),
  },
  paginationWrap: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: theme.spacing(3, 0, 3),
  },
}));

const handlePagination = (val, router) => {
  router.push(`/blog?page=${val}`);
};

const Blog = ({ setDarkMode, darkMode, articles, page, numberOfresponses }) => {
  const classes = useStyles();
  const router = useRouter();
  const lastPage = Math.ceil(numberOfresponses / 3);
  return (
    <>
      <Layout
        className={classes.bodyWrap}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      >
        <Paper square className={classes.singleArticleWrap}>
          <Box
            className={classes.singleBanner}
            style={{
              backgroundImage: `url(https://roadiecrew.com/wp-content/uploads/Steel-Panther.jpg)`,
            }}
          />
          <Container maxWidth="sm">
            {articles.map((article) => (
              <Link href={`/${article.slug}`}>
                <a href style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  <Card key={article.id} className={classes.cardArticle}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {article.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            ))}
            <Box className={classes.paginationWrap}>
              <Pagination
                count={lastPage}
                shape="rounded"
                onChange={(_, val) => handlePagination(val, router)}
              />
            </Box>
          </Container>
        </Paper>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  // Run API calls in parallel
  const start = +page === 1 ? 0 : (+page - 1) * 3;

  // const [articles] = await Promise.all([
  //   fetchAPI(`/articles?_limit=3&_start=${start}`),
  // ]);
  const fetchNumberOfResponses = await fetch(
    `http://localhost:1337/articles/count`,
  );

  const numberOfresponses = await fetchNumberOfResponses.json();

  const res = await fetch(
    `http://localhost:1337/articles?_limit=3&_start=${start}`,
  );
  const data = await res.json();

  return {
    props: {
      articles: data,
      page: +page,
      numberOfresponses,
    },
  };
}

export default Blog;
