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

export default function Portfolio({ portfolios }) {
  return (
    <>
      {console.log(portfolios)}
      <Container maxWidth="lg">
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
                    <Typography gutterBottom variant="h5" component="h2">
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
