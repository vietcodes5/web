import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/LOGO.PNG';

import {
  AppBar,
  Toolbar,
  Button,
  Container,
} from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolbarLink: {
    flexShrink: 0,
    flexGrow: 1,
    width: "25%",
    textDecoration: 'none',
  },
  toolbarLinkInner: {
    fontWeight: "500",
    height: "59px",
    width: "100%",
    borderRadius: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    flexWrap: "nowarp",
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rightSection: {
    width:  "60%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    marginTop: "5px",
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
  const classes = useStyles();
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
