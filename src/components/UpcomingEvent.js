import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  //Containers
  allcontainer: {
    background: '#309DBE',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    height: '700px',
    '@media screen and (max-width: 1000px)': {
      height: '900px',
      display: 'flex',
      flexFlow: 'column',
    },
  },
  container: {
    background: "#FFFFFF",
    borderRadius: '8px',
    width: '80%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    maxWidth: 'inherit',
  },
  itemcontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexFlow: 'row',
    margin: '3vh 0 0 0',
  },
  // Texts
  intro: {
    color: 'white',
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    fontStyle: 'normal',
    marginTop: theme.spacing(9),
    fontSize: 'xx-large',
  },
  sub: {
    color: theme.palette.text,
  },
  sub1: {
    color: 'grey',
  },
  // Others
  coverImage: {
    borderRadius: '8px',
    maxWidth: '80%',
    maxHeight: '300px',
    padding: theme.spacing(1),
  },
  hr: {
    border: '1px #309DBE solid ',
  },
  more: {
    background: theme.palette.primary.main,
    width: '160px',
    height: '50px',
    borderRadius: '50px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    fontSize: '80%',
    letterSpacing: '2px',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    transition: '.5s',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
  },
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
  const [event, loadEvent] = useState(defaultValues)
  const [photoUrl, updatePhotoUrl] = useState("");

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
          loadEvent(() => data);

          storage
            .ref(`events/${data.main_photos.square}`)
            .getDownloadURL()
            .then(updatePhotoUrl);
        }
      })
  }, [])

  return (
    <Grid className={classes.allcontainer}>
      <Typography variant="h2" className={classes.intro}>
        Sự kiện sắp tới
      </Typography>
      <Grid container className={classes.container} align="center">
        <Grid item md={4} xs={12}>
          <img className={classes.coverImage} src={photoUrl} alt="Event cover" />
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="h3" align="left" className={classes.sub}>
            {event.title}
          </Typography>
          <Typography variant="body1" align="left" className={classes.sub1}>
            {event.description}
          </Typography>
          <hr className={classes.hr}></hr>
          <div className={classes.itemcontainer}>
            <AccessTimeIcon color='primary' /> &ensp;
              <Typography variant="body1" align="left">
              Thời gian: {event.date}
            </Typography>
          </div>
          <div className={classes.itemcontainer}>
            <LocationOnIcon color='primary' /> &ensp;
              <Typography variant="body1" align="left">
              Địa điểm: {event.location}
            </Typography>
          </div>
          <Button variant="contained" color="primary" align="center" className={classes.more}>
            <a href={event.form}>Đăng kí</a>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
