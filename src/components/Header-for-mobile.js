import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../images/LOGO.PNG';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  appBar: {
    opacity: '0.9',
    height: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  pageIcon: {
    fontSize: "110%",
    marginRight: "5px",
  },
}));

export default function TemporaryDrawer(props) {
  const pages = props.pages.filter(page => !page.subpage);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <Toolbar variant="dense" className={classes.toolBar} >
        <div>
          <React.Fragment key={'right'}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={toggleDrawer('right', true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} position="static">
              <br />
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
                    <page.icon className={classes.pageIcon} />
                    {page.title}
                    </MenuItem>
                </Link>
              ))
            }
            </Drawer>
          </React.Fragment>
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
