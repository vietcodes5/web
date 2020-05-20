import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core';
//
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import Sidebar from '../components/Sidebar';
import Markdown from '../components/Markdown';

const useStyles = makeStyles(theme => ({
  coverImage: {
    width: '150%',
    display: 'block',
    position: 'fixed',
    filter: 'brightness(50%)',
    top: '0',
    zIndex: '-1',
    '@media screen and (max-width: 1024px)': {
      width: '380%',
    },
  },
  imgContainer: {
    width: '100%',
    color: 'white',
    height: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width: 750px)': {
      height: '400px',
    },
  },
  title: {
    fontSize: '100px',
    '@media screen and (max-width: 750px)': {
      fontSize: '50px',
    },
    textShadow: '5px 5px 5px  #34b6cf',
  },
  container: {
    padding: '20px',
    background: '#FFFFFF',
    marginBottom: '100px',
    '@media screen and (max-width: 1024px)': {
      marginBottom: '0px',
    },
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
  },
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
  const [event, loadEvent] = useState(defaultValues)
  const [photoUrl, updatePhotoUrl] = useState("");
  const [cardsData, updateCardsData] = useState([]);
  const [images, updateImages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const storage = firebase.storage();
    const db = firebase.firestore();

    updateCardsData([]);
    updateImages([]);

    db.doc(`events/${id}`)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such event with that id');
        } else {
          const data = doc.data();
          loadEvent(data);

          storage
            .ref(`/events/${data.main_photos.rect}`)
            .getDownloadURL()
            .then(updatePhotoUrl);

          let promises = data.photos.map(photoName => {
            return storage.ref(`events/${photoName}`).getDownloadURL()
          })
          Promise.all(promises).then(photoUrls => {
            photoUrls.forEach(url => {
              updateImages((preState => [...preState, {
                original: url,
                thumbnail: url
              }]))
            })
          })
        }
      })

    db.collection("events")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return console.log('No event found!');
        }
        snapshot.docs.forEach(doc => {
          const data = doc.data();

          storage
            .ref(`events/${data.main_photos.square}`)
            .getDownloadURL()
            .then(url => {
              if (doc.id !== id) {
                updateCardsData(prevState => ([
                  ...prevState,
                  {
                    id: doc.id,
                    title: data.title,
                    photoUrl: url,
                    url: `/events/${doc.id}`
                  }
                ]));
              }
            })

        });
      })
  }, [id]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} className={classes.imgContainer}>
        <Typography align="center" className={classes.title}>
          {event.title}
        </Typography>
        <img className={classes.coverImage} src={photoUrl} alt="Event cover" />
      </Grid>
      <Container className={classes.container}>
        <Grid style={{ margin: 'auto', width: '100%' }}>
          <Markdown>
            {event.content}
          </Markdown>
        </Grid>
        <ImageGallery items={images} autoPlay={true} />
        <Grid item xs={12} md={12}>
          <Sidebar
            header={{
              title: 'Các sự kiện khác',
            }}
            body={{
              cards: cardsData
            }}
          />
        </Grid>
      </Container>

    </Grid>
  );
}
