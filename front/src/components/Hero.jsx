import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Box from '@material-ui/core/Box';
import HeroImg from '../../assets/images/hero.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(12, 0, 8),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  h1Hero: {
    fontSize: '4rem',
    lineHeight: '4.4rem',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid item lg={6}>
              <Typography
                className={classes.h1Hero}
                component="h1"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Hi,
                <br />
                I'm Augusto,
                <br />
                ReactJS developer
              </Typography>
              <Typography
                className={classes.subTitle}
                variant="p"
                align="left"
                color="textPrimary"
                paragraph
              >
                Front-end web developer
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>

              <div className={classes.heroButtons}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      <MailOutlineIcon
                        className={classes.icon}
                        fontSize="small"
                        color="secondary"
                      />
                      Contact me
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      <LinkedInIcon
                        className={classes.icon}
                        fontSize="small"
                        color="secondary"
                      />
                      Linkedin
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item alignContent="center" lg={6}>
              <Box alignItems="center" justifyContent="center" display="flex">
                <Box>
                  <HeroImg />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Hero;
