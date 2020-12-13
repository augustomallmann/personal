
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: '#fff',
    padding: theme.spacing(12, 0, 8),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  h1Hero:{
    fontSize: '4rem',
    lineHeight: '4.4rem',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subTitle:{
    fontSize: '1.5rem',
    fontWeight: '300',
    textTransform: 'uppercase'
  }

}));

const Hero = () => {
  const classes = useStyles();

  return (

    <>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography className={classes.h1Hero} component="h1"  align="center" color="textPrimary" gutterBottom>
            Hi,<br/>
            I'm Augusto,<br/>
            ReactJS developer
            </Typography>
          <Typography className={classes.subTitle} variant="p" align="left" color="textSecondary" paragraph>
            Front-end web developer
            </Typography>
          
          <div className={classes.heroButtons}>
            <Grid container spacing={2} >
              <Grid item>
                <Button variant="outlined" color="primary">
                  <MailOutlineIcon className={classes.icon} fontSize="small" color="primary"/>
                  Contact me
                  </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  <LinkedInIcon className={classes.icon} fontSize="small" color="primary"/>Linkedin
                  </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
};

export default Hero;
