import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Typography,
  Divider
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

import firebase from 'firebase';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  eventCard: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',

    "& > .mask": {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      backgroundColor: '#000',
      transition: 'opacity .3s linear',
      zIndex: '0',
    },

    "& > .title": {
      position: 'absolute',
      width: '100%',
      boxSizing: 'border-box',
      padding: "10px",
      color: '#fff',
      background: '#000',
      bottom: '0',
      pointerEvents: 'none',
      transition: '.3s linear',
      zIndex: '1',
    },

    "& > .image": {
      width: '100%',
      height: '100%',
      backgroundSize: '100% 100%',
      backoroundRepeat: 'no-repeat'
    }
  },
}))

export default function MainEvents(props) {
  // const classes = useStyles();
  const { events } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h4" gutterBottom>
        Our past events
      </Typography>
      <Divider />
      <Grid container spacing={2} justify="space-around" style={{ marginTop: '10px' }}>
        {
          events.map(event => (
            <Event
              id={event.id}
              key={event.title}
              title={event.title}
              squarePhoto={event.main_photos.square} />
          ))
        }
      </Grid>
    </Grid>
  );
}

function Event(props) {
  const classes = useStyles();
  const { title, squarePhoto, id } = props;
  const [photo, updatePhoto] = useState("");
  const [showMask, updateShow] = useState(false);

  useEffect(() => {
    const storage = firebase.storage();

    storage
      .ref(`events/${squarePhoto}`)
      .getDownloadURL()
      .then(url => {
        updatePhoto(url);
      })
  }, [squarePhoto])

  return (
    <Grid item xs={6}>
      <Link to={`/events/${id}`}>
        <div
          className={classes.eventCard}
          onMouseEnter={(e) => { e.preventDefault(); updateShow(true) }}
          onMouseOut={() => { updateShow(false) }}
        >
          <img className="image" src={photo} alt="Event" />
          <div className="mask"
            style={{
              opacity: showMask ? ".3" : "0",
            }}></div>
          <div className="title"
            style={{
              transform: `translateY(${showMask ? "0" : "100%"})`
            }}
          >
            <Typography variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor
            </Typography>
          </div>
        </div>
      </Link>
    </Grid>
  )
}
