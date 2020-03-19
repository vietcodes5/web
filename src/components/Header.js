import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
	Toolbar,
	Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	toolbarTitle: {
		flex: 1,
	},
	toolbarLink: {
		flexShrink: 0,
		flexGrow: 1,
		textDecoration: 'none',
	},
	toolbarLinkInner: {
		width: "100%",
		height: "100%",
    color: 'white',
	}
}));

export default function Header(props) {
	const pages = props.pages.filter(page => !page.subpage);
	const classes = useStyles();
	return (
		<AppBar position="static">
			<Toolbar>
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
						  	{page.title}
						  </Button>
					  </Link>
				  ))
        }
			</Toolbar>
		</AppBar>
	);
}
