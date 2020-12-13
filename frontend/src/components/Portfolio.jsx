import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  portfolioContent: {
    padding: theme.spacing(6, 0, 6),
  },
  cardTitle:{
    fontFamily: 'Open Sans',
    textTransform: 'uppercase',
    fontSize: '1.25rem'
  },

}));
export default function Portfolio({ portfolios }) {

  const classes = useStyles();


  return (
    <>
      {console.log(portfolios)}
      <Container maxWidth="lg" className={classes.portfolioContent}>
        <Grid container spacing={3}>
          {portfolios.map((portfolio) => (
            <Grid key={portfolio.id} container item xs={6} sm={3} md={3} xl={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={`http://localhost:1337${portfolio.appImage[0].url}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography className={classes.cardTitle} gutterBottom component="h1">
                      {portfolio.appNome}
                    </Typography>

                    <i class={portfolio.technology.fontAwesomeIcon}></i>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {portfolio.appDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href={portfolio.githubUrl}>
                    <a>Github</a>
                  </Link>
                  <Link href={portfolio.liveUrl}>
                    <a>Live demo</a>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
