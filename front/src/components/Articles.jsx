import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  articlesH1: {
    fontSize: '1.5rem',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: theme.spacing(1),
  },
  componentDescription: {
    marginBottom: theme.spacing(4.5),
  },
  cardContentWrap: {
    padding: theme.spacing(8, 0, 8),
    backgroundColor: theme.palette.background.dark,
  },
  firstCard: {
    margin: 'auto',
    transition: '0.5s',
  },
  card: {
    position: 'relative',
    transition: '0.5s',
    border: 0,
    width: '100%',
    height: '100%',
  },
  cardSecondColumn: {
    transition: '0.5s',
    width: '100%',
    height: '100%',
    boxShadow: 'none',
    margin: theme.spacing(0, 0, 1),
    '&:hover': {
      opacity: 1,
      backgroundColor: theme.palette.background.dark,
    },
    '&:first-of-type': {
      margin: theme.spacing(0, 0, 1),
    },
    '&:last-of-type': {
      margin: theme.spacing(0),
    },
  },
  media: {
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'left',
    padding: 24,
    backgroundColor: 'rgba(0,0,0, 0.15)',
    color: theme.palette.common.white,
  },
  divider: {
    margin: 24,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -8,
    },
  },
}));

export default function Articles({ articles }) {
  const classes = useStyles();

  return (
    <div className={classes.cardContentWrap}>
      <Container>
        <Typography
          className={classes.articlesH1}
          color="textPrimary"
          variant="h1"
          gutterBottom
        >
          Blog
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Typography className={classes.componentDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={6} style={{ padding: '0 12px 0' }}>
            <Grid style={{ height: '100%' }}>
              {articles.slice(0, 1).map((article) => (
                <Link href={`/${article.slug}`}>
                  <a>
                    <Card
                      className={classes.card}
                      variant="outlined"
                      style={{ height: '100%' }}
                      key={article.id}
                    >
                      <CardMedia
                        className={classes.media}
                        image={`http://localhost:1337${article.image.formats.medium.url}`}
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom color="" component="h2">
                          {article.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {article.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={3}>
              {articles.slice(1, 5).map((article) => (
                <Link href={`/${article.slug}`}>
                  <a
                    href
                    className={classes.cardSecondColumn}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <Card key={article.id}>
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
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
