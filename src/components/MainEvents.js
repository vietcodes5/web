import React, { useState, useEffect } from 'react';

import {
  Grid,
  Typography,
  Divider, Button
} from '@material-ui/core';

import Cover from './Cover';
import EventNoteIcon from '@material-ui/icons/EventNote';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import firebase from 'firebase';
import 'firebase/storage';

export default function MainEvents(props) {
  const { events } = props;
  const [cards, loadCard] = useState([]);

  useEffect(() => {
    const storage = firebase.storage();

    events.forEach(e => {
      storage
        .ref(`events/${e.main_photos.square}`)
        .getDownloadURL()
        .then(url => {
          loadCard(prevCards => ([
            ...prevCards,
            <Cover
              key={e.id}
              title={e.title}
              subtitle={null}
              photoUrl={url}
              xs={5}
              sm={6}
              md={6}
              lg={4}
              to={`/events/${e.id}`}
            />
          ]))
        });
    });
  }, [events]);

  return (
    <div style={{ padding: '3vh', }}>
      < Typography variant="h1" gutterBottom align='center' >
        Our past events
      </Typography>
      <Divider style={{ marginTop: '3vh' }} />
      <div style={{ width: '80%', margin: 'auto', marginBottom: '15px', }}>
        <Grid container justify='space-evenly' align='center'>
          <Grid item style={{ margin: '0', display: 'flex', flexFlow: 'row', borderTop: '1px #309DBE solid', }}>
            <Button>
              <EventNoteIcon />
              <Typography variant='h4'>ALL</Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={useMediaQuery('(max-width:700px)') ? 2 : 5} justify={useMediaQuery('(max-width:700px)') ? "center" : "space-evenly"} style={{ marginTop: '10px', marginBottom: '10px' }}>
        {cards}
      </Grid>
    </ div >
  );
}
