import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Grid
} from '@material-ui/core';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import Sidebar from '../components/Sidebar';
import Markdown from '../components/Markdown';

const useStyles = makeStyles(theme => ({
  coverImage: {
    maxWidth: '100%',
    maxHeight: '400px',
    display: 'block',
  },
  sidebar: {
    minHeight: '100vh',
    background: 'white',
    boxShadow: '0 0 5px black',
    padding: '15px 15px'
  },
  sidebarCard: {
    maxWidth: '100%',
    margin: '5px 0',
    boxShadow: '0 0 3px #aaa',
    
    '& img': {
      maxWidth: '100%',
      display: 'block',
    }
  },
  cardContent: {
    padding: '15px',
  }
}));

const defaultValues = {
  title: 'Loading...',
  content: 'Loading...',
  main_photos: {
    square: "",
    rect: "",
  },
  photos: [],
  createdAt: ""
}

export default function Event(props) {
  const { id } = useParams();
  const [ event, loadEvent ] = useState(defaultValues)
  const [ photoUrl, updatePhotoUrl ] = useState("");
  const [ cardsData, updateCardsData ] = useState([])
  const classes = useStyles();

  useEffect(() => {
    console.log("Page");
    const storage = firebase.storage();
    const db = firebase.firestore();

    db.doc(`events/${id}`)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such event with that id');
        } else {
          const data = doc.data();
          loadEvent(data);

           return storage
            .ref(`/events/${data.main_photos.rect}`)
            .getDownloadURL()
        }

      })
      .then(updatePhotoUrl);

    db.collection("events")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No event found!');
        } else {
          snapshot.docs.forEach(doc => {
            const data = doc.data();

            storage
              .ref(`events/${data.main_photos.square}`)
              .getDownloadURL()
              .then(url => {
                updateCardsData(prevState => ([
                  ...prevState,
                  {
                    title: data.title,
                    photoUrl: url
                  }
                ]));
              })
          });

          
        }
      })
  }, [ id ]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography align="center" variant="h3" gutterBottom>
            { event.title }
          </Typography>
          <Divider />
          
          <img className={classes.coverImage} src={photoUrl} alt="Event cover" />

          <Markdown>
            { event.content }
          </Markdown>

        </Grid>
        <Sidebar 
          header={{}}
          body={{
            title: '',
            cards: cardsData
          }}
        />
      </Grid>
    </>
  );
}

