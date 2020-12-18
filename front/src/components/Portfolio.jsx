import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cardContentWrap: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 8),
  },
  card: {
    margin: 'auto',
    transition: '0.5s',
  },
  media: {
    height: '400px',
  },
  portfolioH1: {
    fontSize: '1.5rem',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: theme.spacing(1),
  },
  componentDescription: {
    marginBottom: theme.spacing(3),
  },
  content: {
    textAlign: 'left',
    padding: 24,
  },
  divider: {
    margin: 24,
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    fontWeight: '300',
  },
  cardDescription: {
    fontSize: '0.8rem',
    letterSpacing: '2px',
    fontWeight: '300',
  },
  avatar: {
    display: 'inline-block',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '&:not(:first-of-type)': {
      marginLeft: -8,
    },
  },
}));

export default function Portfolio({ portfolios }) {
  const classes = useStyles();

  return (
    <div className={classes.cardContentWrap}>
      <Container maxWidth="lg">
        <Typography
          className={classes.portfolioH1}
          color="textPrimary"
          variant="h1"
          gutterBottom
        >
          Portfolio
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
        <Grid container spacing={3}>
          {portfolios.slice(0, 4).map((portfolio) => (
            <Grid key="portfolio.id" item xs={12} sm={6} md={3} lg={3}>
              <Card className={classes.card} style={{ height: '100%' }}>
                <CardMedia
                  className={classes.media}
                  image={`http://localhost:1337${portfolio.appImage[0].formats.thumbnail.url}`}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.cardTitle}
                    variant="h2"
                    gutterBottom="true"
                  >
                    {portfolio.appNome}
                  </Typography>

                  {/* {portfolio.technologies.map((face) => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))} */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
