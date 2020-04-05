import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/LOGO.PNG';

import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Hidden,
  SwipeableDrawer
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

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
    height: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  rightSection: {
    width: '60%',
    display: "flex",
    justifyContent: "flex-end"
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
}));

export default function Header(props) {
  const pages = props.pages.filter(page => !page.subpage);
  const [showMenu, setShowMenu] = useState(false)
  const classes = useStyles();
  let toggleDrawer = (anchor, open) => () => {
    setShowMenu({ ...showMenu, [anchor]: open });
  }
  const menu = (anchor) => (
    <div

      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      style={{ backgroundColor: '#2b93b6' }}
    >
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
    </div>
  )

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
          <Hidden only={['xs', 'sm']}>
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
          </Hidden>
          <Hidden only={['md', 'lg','sm']}>
            <React.Fragment>
              <IconButton button="true" edge="start" onClick={toggleDrawer('top', true)} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={'top'}
                open={showMenu['top']}
                onClose={toggleDrawer('top', false)}
                onOpen={toggleDrawer('top', true)}
              >
                {menu('top')}
              </SwipeableDrawer>
            </React.Fragment>
          </Hidden>
          <Hidden only={['md', 'lg', 'xs']}>
            <React.Fragment>
              <IconButton button="true" edge="start" onClick={toggleDrawer('right', true)} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={'right'}
                open={showMenu['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
              >
                {menu('right')}
              </SwipeableDrawer>
            </React.Fragment>
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
