import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/LOGO.PNG';
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
    root: {
      flexGrow: 1,
    },
    logo: {
    marginTop: '5px',
    height: "50px",
    width: "auto",
  },
    menuButton: {
      marginRight: '0px',
      marginTop: '0px',
    },
    toolBar: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'space-between',
      justifyContent: 'center',
    },
    toolbarLink: {
    },
    menu: {
    },
    toolbarLinkInner: {
      width: '100%',
      '&:focus': {
        backgroundColor: theme.palette.active.main,
        boxShadow: theme.shadow.dropdown,
        color: 'white',
      },
    },
  }));
  
export default function FadeMenu(props) {
  
  const pages = props.pages.filter(page => !page.subpage);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar variant="dense" className={classes.toolBar}>

      <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        className={classes.menu}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
            pages.map(page => (
              <Link
                className={classes.toolbarLink}
                key={page.title}
                to={page.url}
              >
                <MenuItem
                  component="button"
                  className={classes.toolbarLinkInner}
                >
                  {page.title}
                  </MenuItem>
              </Link>
            ))
          }
      </Menu>
    </div>
        <Container>
        <img
          src={Logo}
          className={classes.logo}
          alt="Vietcode"
        />
        </Container>
      </Toolbar>
    </AppBar>
  </div>
    
  );
}