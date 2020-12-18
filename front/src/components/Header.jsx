import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import CodeIcon from '@material-ui/icons/Code';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
    color: `white`,
  },
}));
const navLinks = [
  {
    title: `portfolio`,
    path: `/portfolio`,
  },
  {
    title: `blog`,
    path: `/blog`,
  },
  {
    title: `contact`,
    path: `/contact`,
  },
  {
    title: `career overview`,
    path: `/about`,
  },
];
export default function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.customToolbar}>
          <CodeIcon color="secondary" fontSize="large" />
          <Link href="/">
            <a className={classes.title}>
              <Typography variant="h6">Mallmann.dev</Typography>
            </a>
          </Link>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icon}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
