import React, { useEffect, useState } from 'react';

// MUI component
import {
  Grid,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

// components
import FeaturedPosts from "../components/FeaturedPosts";
import Sidebar from "../components/Sidebar";
import Main from "../components/MainNews";

// firebase
import firebase from "firebase";
import "firebase/firestore";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};
export default function News() {
  const classes = useStyles();
  const [ allSeries, updateAllSeries ] = useState([]);

  const db = firebase.firestore();
  

  useEffect(() => {
    db.collection("series")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No series found");
        } else {
          let allSeries = [];
          
          snapshot.forEach(doc => allSeries.push({
            id: doc.id,
            ...doc.data()
          }));
          updateAllSeries(allSeries);
        }
      })
  }, [ db ])

  return (
    <>
      <FeaturedPosts />
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="From Vietcode" allSeries={allSeries} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </>
  );
}
