import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/LOGO.PNG';
import FadeMenu from '../components/Header-for-mobile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
} from '@material-ui/core'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  toolbarLink: {
    flexShrink: 0,
    flexGrow: 1,
    width: "25%",
    minWidth: '110px',
    textDecoration: 'none',
  },
  toolbarLinkInner: {
    fontWeight: "500",
    height: "60px",
    width: '100%',
    borderRadius: "0",
    color: 'white',
    fontSize: "14px",
    '&:hover': {
      backgroundColor: theme.palette.hover.main,
      boxShadow: theme.shadow.hover,
    },
    '&:focus': {
      backgroundColor: theme.palette.active.main,
      boxShadow: theme.shadow.dropdown,
    }
  },
  appBar: {
    opacity: '0.9',
    height: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  rightSection: {
    width: '60%',
    display: "flex",
  },
  logo: {
    marginTop: '5px',
    height: "50px",
    width: "auto",
  },
  pageIcon: {
    fontSize: "110%",
    marginRight: "5px",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header(props) {

  const pages = props.pages.filter(page => !page.subpage);
  const classes = useStyles();  
  if (props.width == 'lg' || props.width == 'md') {
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolBar}>
        <Container>
          <img
            src={Logo}
            className={classes.logo}
            alt="Vietcode"
          />

        </Container>
        <Container className={classes.rightSection}>
          {
            pages.map(page => (
              <Link
                className={classes.toolbarLink}
                key={page.title}
                to={page.url}
              >
                <Button
                  component="button"
                  className={classes.toolbarLinkInner}
                >
                  <page.icon className={classes.pageIcon} />
                  {page.title}
                </Button>
              </Link>
            ))
          }
        </Container>
      </Toolbar>
    </AppBar>
  );
  }
  return <FadeMenu pages={pages}/>;
}

export default withWidth()(Header);
