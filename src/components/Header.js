import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Toolbar,
	Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	toolbarTitle: {
		flex: 1,
	},
	toolbar: {
		justifyContent: 'space-around',
		alignItems: 'stretch',
		overflowX: 'auto',
    backgroundColor: '#0af',
    boxShadow: '0 3px 3px black',
    marginBottom: '10px',
		// borderBottom: `1px solid black`,

		"& :nth-child(3) button": {
			fontSize: "150%"
		}
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
    textShadow: '0 0 2px black',
	}
}));

export default function Header(props) {
	const pages = props.pages.filter(page => !page.subpage);
	const classes = useStyles();
	return (
		<>
			<Toolbar
				component="nav" 
				variant="dense" 
				className={classes.toolbar}>
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
		</>
	);
}
