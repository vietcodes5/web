import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Grid,
  Button
} from '@material-ui/core';

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

function FeaturedPosts(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Post title
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Some description here
            </Typography>
            <Button variant="contained" color="default">
              <Link to="#">
                Take me there
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default FeaturedPosts;