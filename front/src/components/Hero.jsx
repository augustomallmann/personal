import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import WhatsApp from '@material-ui/icons/WhatsApp';
import { motion } from 'framer-motion';

import HeroSvg from './HeroSvg';

export const animationOne = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: '-100vh',
    textDecoration: '#F55257 solid underline',
  },
  hoverEffect: {
    textDecoration: '#fff solid underline',
    x: 5,
  },
  visibleLineOne: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  visibleLineTwo: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
  visibleLineThree: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.6,
    },
  },
};

export const animationTwo = {
  hidden: {
    scale: 0.7,
    opacity: 0,
    y: '100vh',
  },

  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 1,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(12, 0, 8),
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: 'unset',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  h1Hero: {
    fontSize: '3.5rem',
    lineHeight: '4rem',
    textAlign: 'left',
    fontWeight: 'bold',
    textDecorationSkip: 'ink',
    transition: '0.5s',
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
  subTitle: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="lg" style={{ height: '100%' }}>
          <Grid container alignItems="center" style={{ height: '100%' }}>
            <Grid item lg={6} md={6} sm={12}>
              <Typography
                className={classes.h1Hero}
                component="h1"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                <motion.div
                  initial="hidden"
                  animate="visibleLineOne"
                  whileHover="hoverEffect"
                  variants={animationOne}
                >
                  Olá,
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visibleLineTwo"
                  whileHover="hoverEffect"
                  variants={animationOne}
                >
                  Sou Augusto,
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileHover="hoverEffect"
                  animate="visibleLineThree"
                  variants={animationOne}
                >
                  Desenvolvedor ReactJS
                </motion.div>
              </Typography>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animationTwo}
              >
                <Typography
                  className={classes.subTitle}
                  variant="p"
                  align="left"
                  color="textPrimary"
                  paragraph
                >
                  Front-end Web
                </Typography>
                <Typography paragraph>
                  Trabalho com tecnologia há 3 anos. Atualmente atuo como
                  Desenvolvedor Front-end para a PUCRS. Possuo com experiência
                  com SEO Tech, prestando consultoria, através da Agência
                  Cadastra, para grandes empresas como Samsung, O Globo e Lojas
                  Renner.
                </Typography>
                <Typography paragraph>
                  Precisa de ajuda em algum projeto? Você pode me encontrar
                  nestes canais:
                </Typography>
              </motion.div>

              <div className={classes.heroButtons}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      <WhatsApp
                        className={classes.icon}
                        fontSize="small"
                        color="secondary"
                      />
                      WhatsApp
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
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      <Github
                        className={classes.icon}
                        fontSize="small"
                        color="secondary"
                      />
                      Github
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} style={{ width: '100%' }}>
              <HeroSvg />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Hero;
