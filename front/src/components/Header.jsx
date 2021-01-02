import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import CodeIcon from '@material-ui/icons/Code';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    transition: '0.5s',
  },
  customToolbar: {
    justifyContent: 'space-between',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(1),
    fontSize: '1.1rem',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#fff',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: 'center',
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#fff`,
    fontWeight: 'bold',
  },
}));
const navLinks = [
  {
    title: `blog`,
    path: `/blog`,
  },
  {
    title: `sobre`,
    path: `/sobre`,
  },
  {
    title: `contato`,
    path: `/contato`,
  },
];
export default function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.customToolbar}>
          <Box className={classes.logoWrapper}>
            <CodeIcon color="secondary" fontSize="large" />
            <Link href="/">
              <a className={classes.title}>
                <Typography variant="h6">Mallmann.dev</Typography>
              </a>
            </Link>
          </Box>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link href={path} key={title}>
                  <a>
                    <ListItem button>
                      <ListItemText className={classes.linkText}>
                        {title}
                      </ListItemText>
                    </ListItem>
                  </a>
                </Link>
              ))}
            </List>
          </Hidden>

          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icon}
          />
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
