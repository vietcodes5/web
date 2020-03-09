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

          storage
            .ref(`/events/${data.main_photos.rect}`)
            .getDownloadURL()
            .then(updatePhotoUrl)
        }

      });
  }, []);

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

        <Grid item xs={12} md={4}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}

function SideBar(props) {
  const { id } = useParams();
  const [ otherEvents, loadOtherEvents ] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    console.log("Sidebar")
    const db = firebase.firestore();
    const storage = firebase.storage();

    db.collection('events')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('Cannot get data');
        } else {
          const temp = [];

          snapshot.forEach(doc => {
            if (doc.id !== id) {
              temp.push({
                id: doc.id,
                ...doc.data()
              });
            }
          });

          loadOtherEvents(temp);
        }
      })
  }, [ id ]);


  return (
    <>
      <div className={classes.sidebar}>
        <Typography variant="h5" gutterBottom>
          Other events
        </Typography>
        <Divider />
        {
          otherEvents.map(event => (
            <SidebarEventCard 
              key={event.id}
              id={event.id}
              title={event.title}
              imageName={event.main_photos.square}
            />
          ))
        }
      </div>
    </>
  )
}

function SidebarEventCard(props) {
  const [ photoUrl, updatePhotoUrl ] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const storage = firebase.storage();
    console.log("Event Card");

    storage
      .ref(`/events/${props.imageName}`)
      .getDownloadURL()
      .then(updatePhotoUrl);
  }, [ props.imageName ])

  return (
    <Link to={`/events/${props.id}`}>
      <Grid className={classes.sidebarCard} container>
       <Grid item xs={4}>
         <img src={photoUrl} alt="Event" />
       </Grid>
       <Grid 
         item xs={8} 
         className={classes.cardContent}
       >
         <Typography variant="h6">
           { props.title }
         </Typography>
       </Grid>
      </Grid>
    </Link>
  )
}
