import React, { useState, useEffect } from 'react';
import {
  Typography,
  Divider,
  Grid,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  coverImage: {
    maxWidth: '100%',
    maxHeight: '400px',
  },
  detailsContainer: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    background: 'white',
    padding: '10px',
  }
}));

const defaultValues = {
  title: 'Loading...',
  description: 'Loading...',
  photos: [],
  main_photos: {
    square: "",
    rect: ""
  }
}

export default function UpcomingEvent(props) {
  const classes = useStyles();
  console.log(classes);
  const [ event, loadEvent ] = useState(defaultValues)
  const [ photoUrl, updatePhotoUrl ] = useState("");

  useEffect(() => {
    const db = firebase.firestore();
    const storage = firebase.storage();

    db.collection("upcoming_events")
      .get()
      .then(snapshot => {
        const doc = snapshot.docs[0];
        if (!doc.exists) {
          console.log("No upcoming events");
        } else {
          const data = doc.data();
          loadEvent(data);
          
          storage
            .ref(`events/${data.main_photos.rect}`)
            .getDownloadURL()
            .then(updatePhotoUrl);
        }
      })
  }, [])

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Upcoming Event
      </Typography>
      <Divider />
      
      <Grid container spacing={0}>
        <Grid item md={9} xs={12}>
          <img className={classes.coverImage} src={photoUrl} alt="Event cover" />
        </Grid>
        <Grid item md={3} xs={12}>
          <div className={classes.detailsContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              { event.title }
            </Typography>
            <Typography variant="body1" align="left">
              Description: { event.description }
            </Typography>
            <Typography variant="body2" align="left">
              Date: { event.date }
            </Typography>
            <Typography variant="body2" align="left" gutterBottom>
              Location: { event.location }
            </Typography>
            <Button variant="contained" color="secondary" align="center">
              Register
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider />
    </>
  )
}
