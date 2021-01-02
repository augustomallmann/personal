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
import { fetchAPI } from '../api/Api';
import Layout from '../components/Layout';
import { getStrapiMedia } from '../api/Media';
import Seo from '../components/Seo';

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
  singleArticleH1: {
    fontSize: '2rem',
    lineHeight: '42px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  articleContent: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '1px',
  },
  divider: {
    margin: theme.spacing(3, 0, 3),
  },
}));

const SingleArticle = ({ article, categories, setDarkMode, darkMode }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };
  const classes = useStyles();
  const imageUrl = getStrapiMedia(article.image);
  const router = useRouter();
  return (
    <>
      <Layout
        className={classes.bodyWrap}
        categories={categories}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      >
        <Seo seo={seo} />

        <Paper square className={classes.singleArticleWrap}>
          <Box
            className={classes.singleBanner}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <Container maxWidth="sm">
            <Typography
              className={classes.singleArticleH1}
              color="textPrimary"
              variant="h1"
              gutterBottom
            >
              {article.title}
            </Typography>
            <ReactMarkdown
              className={classes.articleContent}
              source={article.content}
              escapeHtml={false}
            />
            <Box className={classes.socialWrap}>
              <Twitter
                link={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${router.asPath}`}
                style={{ marginLeft: '-0.5rem' }}
              />
              <Facebook
                link={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${router.asPath}`}
              />
              <Whatsapp
                link={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${router.asPath}`}
              />
              <Telegram
                link={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${router.asPath}`}
              />
            </Box>
            <Divider className={classes.divider} />
            By {article.author.name}
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </Container>
        </Paper>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles');

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`,
  );
  const categories = await fetchAPI('/categories');

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default SingleArticle;
