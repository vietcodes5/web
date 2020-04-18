import React, { useEffect, useState } from 'react';

// MUI components
import {
  Grid,
  Container,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// components
import Main from '../components/MainEvents';
import UpcomingEvent from '../components/UpcomingEvent';
// import Sidebar from "../components/Sidebar";

// firebase
import firebase from 'firebase';
import 'firebase/firestore';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
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
      <Container maxWidth='lg'>
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
      </Container>
    </>
  );
}
