import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';
import CardContent from '@material-ui/core/CardContent';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  singleArticleWrap: {
    padding: theme.spacing(8, 0, 3),
  },
  spotlightedPost: {
    fontSize: '3rem',
    lineHeight: '3.3rem',
    textAlign: 'left',
    fontWeight: 'bold',
    textDecorationSkip: 'ink',
    transition: '0.5s',
    textDecoration: '#F55257 solid underline',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
      lineHeight: '3.5rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
  },
  spotlightContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse',
    },
  },
  blogPost: {
    margin: theme.spacing(4, 0, 4),
  },
  cardArticle: {
    // margin: theme.spacing(5, 0, 5),
    boxShadow: 'none',
  },
  paginationWrap: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: theme.spacing(3, 0, 3),
  },
  spotlightWrapper: {
    backgroundColor: theme.palette.background.spotlight,
  },
}));

const handlePagination = (val, router) => {
  router.push(`/blog?page=${val}`);
};

const Blog = ({ setDarkMode, darkMode, articles, numberOfresponses }) => {
  const classes = useStyles();
  const router = useRouter();
  const lastPage = Math.ceil(numberOfresponses / 4);
  return (
    <>
      <Layout
        className={classes.bodyWrap}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      >
        <Paper square className={classes.singleArticleWrap}>
          {articles.slice(0, 1).map((article) => (
            <Box className={classes.spotlightWrapper}>
              <Container maxWidth="lg">
                <Grid container spacing={3}>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    alignItems="center"
                    style={{
                      display: 'flex',
                      height: '400px',
                    }}
                  >
                    <Box>
                      <Typography
                        className={classes.spotlightedPost}
                        component="h1"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                      >
                        {article.title}
                      </Typography>
                      <Typography>{article.description}</Typography>
                    </Box>
                  </Grid>
                  <Hidden xsDown>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={6}
                      alignItems="center"
                      style={{ display: 'flex' }}
                    >
                      <CardMedia
                        image={`http://localhost:1337${article.image.formats.medium.url}`}
                        style={{
                          height: '300px',
                          width: '100%',
                          borderRadius: '3px',
                        }}
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </Container>
            </Box>
          ))}
          <Container maxWidth="md">
            {articles.slice(1, 5).map((article) => (
              <Grid container className={classes.blogPost}>
                <Grid item lg={4} md={4} sm={12} alignItems="center">
                  <img
                    src={`http://localhost:1337${article.image.formats.medium.url}`}
                    alt=""
                    style={{ maxWidth: '100%' }}
                  />
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={8}
                  sm={12}
                  alignItems="center"
                  style={{ display: 'flex' }}
                >
                  <Link href={`/${article.slug}`}>
                    <a
                      href
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <Card key={article.id} className={classes.cardArticle}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ fontWeight: 'bold' }}
                          >
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
                </Grid>
              </Grid>
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
  const start = +page === 1 ? 0 : (+page - 1) * 4;

  const fetchNumberOfResponses = await fetch(
    `http://localhost:1337/articles/count`,
  );

  const numberOfresponses = await fetchNumberOfResponses.json();

  const res = await fetch(
    `http://localhost:1337/articles?_limit=4&_start=${start}`,
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
