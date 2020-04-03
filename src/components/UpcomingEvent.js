import React, { useState, useEffect } from 'react';
import {
  Typography,
  Divider,
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
  coverImage: {
    maxWidth: '100%',
    borderRadius: '10px',
    maxHeight: '600px',
  },
  detailsContainer: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    background: 'white',
    padding: '10px',
  },
  eventRegisterButton: {
    borderRadius: '50px',
    height: '55px',
    width: '120px',
    background: theme.palette.primary.main,
    color: 'white',
    display: 'flex',
    border: '1px solid',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '2px',
    fontSize: '15px',
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  eventHigherPart: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  eventText: {
    width: '700px',
    height: '300px',
    //height: '100%',
    display: 'flex',
    //border: '1px solid black',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: theme.palette.text.main,
  },
  eventTextHorizontalLine: {
    width: '20%',
    marginLeft: '0',
    background: theme.palette.primary.main,
    height: '2px',
  },
  eventLowerPart: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  eventDate: {
    width: '100%',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  eventDateIcon: {
    marginRight: '5px',
    color: theme.palette.primary.main,
  },
  eventLocation: {
    width: '100%',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  eventLocationIcon: {
    marginRight: '5px',
    color: theme.palette.primary.main,
  },
  upcomingEventsContainer: {
    color: 'white',
    minWidth: '100%',
    padding: '0px 30px 50px 30px',
    height: '100%',
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    fontSize: '130%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  upcomingEvents: {
    color: theme.palette.text.main,
    width: '90%',
    borderRadius: '10px',
    height: '70%',
    boxSizing: 'border-box',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
            .ref(`events/${data.main_photos.square}`)
            .getDownloadURL()
            .then(updatePhotoUrl);
        }
      })
  }, [])

  return (
    <Grid container className={classes.upcomingEventsContainer} spacing={5}>
      <Grid item >
      <Typography gutterBottom variant="h1">
        Upcoming Event
      </Typography>
      </Grid>
      <Divider />
      
      <Grid container item className={classes.upcomingEvents} spacing={4}>
        <Grid item md={3} xs={15}>
          <img className={classes.coverImage} src={photoUrl} alt="Event cover" />
        </Grid>
        <Grid item md={7} xs={12}>
          <div className = {classes.eventText}>
            <div className = {classes.eventHigherPart}>
            <Typography align="center" gutterBottom style={{fontSize:'25px', fontWeight:'bold'}}>
              { event.title }
            </Typography>
            <Typography variant="body1" align="left">
              { event.description }
            </Typography>
            </div> 
            <hr className={classes.eventTextHorizontalLine} />
            <div className={classes.eventLowerPart}>
            <Typography variant="body2" align="left" className={classes.eventDate}>
              <AccessTimeIcon className={classes.eventDateIcon} />
              { event.date }
            </Typography>
            <Typography variant="body2" align="left" gutterBottom className={classes.eventLocation}>
              <LocationOnIcon className={classes.eventLocationIcon} />
              { event.location }
            </Typography>
            <Button className={classes.eventRegisterButton}>
              Register
            </Button>
            </div>
          </div>
        </Grid>
      </Grid>

      <Divider />
    </Grid>
  )
}
