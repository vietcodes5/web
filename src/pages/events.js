import React, { useEffect, useState } from 'react';

// MUI components
import { 
  Grid,
} from '@material-ui/core';

// import { Link } from 'react-router-dom';

// MUI icons
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

// components
import Main from '../components/MainEvents';
import UpcomingEvent from '../components/UpcomingEvent';
import Sidebar from "../components/Sidebar";

// firebase
import firebase from 'firebase';
import 'firebase/firestore';

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


const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
}));

export default function Events(props) {
  const classes = useStyles();
  const [ events, updateEvents ] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    db.collection("events")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No event found!");
        } else {
          const events = [];
          snapshot.forEach(doc => events.push({
            id: doc.id,
            ...doc.data()
          }));

          updateEvents(events)
        }
      })
  }, [ db ])

  return (
    <>
      <UpcomingEvent />
      <Grid container className={classes.mainGrid} spacing={3}>
        <Main events={events} />
        { /*
          <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />

        */ }
        </Grid>
    </>
  );
}
