import React, { useState, useEffect } from 'react';

import {
  Grid,
  Typography,
  Divider
} from '@material-ui/core';

import Cover from '../components/Cover';

import firebase from 'firebase';
import 'firebase/storage';

export default function MainEvents(props) {
  const { events } = props;
  const [ cards, loadCard ] = useState([]);

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
              xs={6}
              to={`/events/${e.id}`}
            />
          ]))
        });

    });

  }, [ events ]);

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h4" gutterBottom>
        Our past events
      </Typography>
      <Divider />
      <Grid container spacing={2} justify="space-around" style={{ marginTop: '10px' }}>
        { cards }
      </Grid>
    </Grid>
  );
}
