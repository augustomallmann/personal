import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Linkedin from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
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
    '@media (max-width:872px)': {
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
  },
  formWrap: {
    padding: '30px',
    backgroundColor: theme.palette.background.spotlight,
  },
  icons: {
    margin: '10px',
  },
  singleArticleWrap: {
    padding: theme.spacing(12, 0, 8),
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function contato({ setDarkMode, darkMode }) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        nome: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };
  const classes = useStyles();

  return (
    <Layout setDarkMode={setDarkMode} darkMode={darkMode}>
      <Paper square className={classes.singleArticleWrap}>
        <Container maxWidth="lg">
          <Grid container spacing="10" alignItems="center">
            <Grid item lg={6} md={6} sm={12}>
              <Typography
                className={classes.spotlightedPost}
                component="h1"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Fale comigo
              </Typography>

              <Typography gutterBottom>
                Se você ficou com alguma dúvida ou precisa de ajuda em algum
                projeto, entre em contato comigo clicando nos ícones das redes
                sociais abaixo para uma resposta rápida.
              </Typography>
              <Typography gutterBottom>
                Caso preferir, preencha o formulário que entrarei em contato
                assim que possível.
              </Typography>
              <Box>
                <WhatsApp className={classes.icons} />
                <Linkedin className={classes.icons} />
                <GitHub className={classes.icons} />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <Box className={classes.formWrap}>
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleOnSubmit}
                >
                  <TextField
                    margin="dense"
                    label="Nome"
                    fullWidth
                    variant="filled"
                    color="secondary"
                    id="name"
                    onChange={handleOnChange}
                    required
                    value={inputs.name}
                  />

                  <TextField
                    margin="dense"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    fullWidth
                    variant="filled"
                    color="secondary"
                    id="email"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                  />

                  <TextField
                    margin="dense"
                    label="Mensagem"
                    multiline
                    autoComplete="email"
                    fullWidth
                    variant="filled"
                    rows="8"
                    color="secondary"
                    id="message"
                    onChange={handleOnChange}
                    required
                    value={inputs.message}
                  />

                  <Button
                    type="submit"
                    disabled={status.submitting}
                    variant="contained"
                    size="large"
                    fullWidth
                    color="secondary"
                    style={{ margin: '20px 0 0px', boxShadow: 'none' }}
                  >
                    {!status.submitting
                      ? !status.submitted
                        ? 'Enviar'
                        : 'Enviado'
                      : 'Enviando...'}
                  </Button>
                </form>

                {status.info.error && (
                  <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && (
                  <div className="success">{status.info.msg}</div>
                )}
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} />
          </Grid>
        </Container>
      </Paper>
    </Layout>
  );
}
