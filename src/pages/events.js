import React, { useEffect, useState } from 'react';

// MUI components
import {
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// components
import Main from '../templates/MainEvents';
import UpcomingEvent from '../components/UpcomingEvent';

// firebase
import firebase from 'firebase';
import 'firebase/firestore';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    paddingTop: theme.spacing(3),
    backgroundColor: 'white',
  },
}));

export default function Events(props) {
  const classes = useStyles();
  const [events, updateEvents] = useState([]);
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

          updateEvents(events);
        }
      })
  }, [db]);

  return (
    <>
      <UpcomingEvent />
      <Grid container className={classes.mainGrid} spacing={3}>
        <Grid item xs={8} style={{ margin: 'auto' }}>
          <Main events={events} />
        </Grid>
      </Grid>
    </>
  );
}
