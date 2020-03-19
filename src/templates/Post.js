import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import {
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';

import Markdown from '../components/Markdown';

const useStyles = makeStyles(theme => ({
  cover_image: {
    maxWidth: '100%',
    maxHeight: '450px',
    display: 'block',
    margin: '20px auto',
  }
}));

const defaultData = {
  title: 'Loading...',
  opening: 'Loading...',
  photos: [],
  content: 'Loading...',
}

export default function Blog(props) {
  const { blogId } = useParams();
  const [ blogData, loadData ] = useState(defaultData);
  const [ photoUrl, updatePhotoUrl ] = useState("");
  const classes = useStyles();

  useEffect(() => {
    // TODO: get blog data
    const db = firebase.firestore();
    const storage = firebase.storage();

    db.doc(`posts/${blogId}`)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('Cannot find this blog!');
        } else {
          loadData(doc.data());

          storage
            .ref(`posts/${doc.data().photos[0]}`)
            .getDownloadURL()
            .then(updatePhotoUrl);
        }
      })

  }, [ blogId ]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" gutterBottom>
            Testing
          </Typography>
          <Divider />
          <img className={classes.cover_image} src={photoUrl} alt="Post cover" />
          <Typography variant="subtitle1" gutterBottom>
            { blogData.opening }
          </Typography>
          
          <Markdown>
            { blogData.content }
          </Markdown>
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
      </Grid>
    </> 
  )
}
