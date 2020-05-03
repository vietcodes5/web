import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import {
  Typography,
  Grid,
} from '@material-ui/core';

import Markdown from '../components/Markdown';
import Sidebar from '../components/Sidebar';

const useStyles = makeStyles(theme => ({
  cover_image: {
    maxWidth: '100%',
    maxHeight: '450px',
    display: 'block',
    boxShadow: theme.shadow.hover,
    borderRadius: '20px',
    margin: '20px auto',
  },
  container: {
    margin: '70px',
    '@media screen and (max-width: 750px)': {
      margin: '10px',
    },
  },
  title: {
    fontSize: '50px',
  },
}));

const defaultData = {
  title: 'Loading...',
  opening: 'Loading...',
  photos: [],
  content: 'Loading...',
}

export default function Blog(props) {
  const { postId } = useParams();
  const [blogData, loadData] = useState(defaultData);
  const [photoUrl, updatePhotoUrl] = useState("");
  const [series, loadSeries] = useState([]);
  const classes = useStyles();
  const [cardsData, updateCardsData] = useState([]);
  useEffect(() => {
    // TODO: get blog data
    const db = firebase.firestore();
    const storage = firebase.storage();

    // loadPost(() => []);
    updateCardsData(() => []);
    db.collection("posts")
      .doc(postId)
      .get()
      .then(doc => {
        if (!doc.exists) {
          return console.log('No series found');
        }
        doc.data().series
          .get()
          .then(res => {
            loadSeries(res.data());
          })
      })
    db.collection("posts")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return console.log('No posts found!');
        }
        snapshot.docs.slice(-5).forEach(doc => {
          const data = doc.data();

          storage
            .ref(`blog/${data.photos}`)
            .getDownloadURL()
            .then(url => {
              if (doc.id !== postId)
                updateCardsData(cardsData => ([
                  ...cardsData,
                  {
                    title: data.title,
                    photoUrl: url,
                    url: `/posts/${doc.id}`
                  }
                ]));
            })
        });
      })

    db.doc(`posts/${postId}`)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('Cannot find this blog!');
        } else {
          loadData(doc.data());

          storage
            .ref(`blog/${doc.data().photos[0]}`)
            .getDownloadURL()
            .then(updatePhotoUrl);
        }
      })
  }, [postId]);

  return (
    <div className={classes.container}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={12}>
          <Grid container spacing={5}>

            <Grid item xs={12} md={4}>
              <img className={classes.cover_image} src={photoUrl} alt="Post cover" />
            </Grid>

            <Grid item xs={12} md={8} style={{ marginBottom: '30px' }}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Typography variant="h1" gutterBottom className={classes.title}>
                    {blogData.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h1" style={{ color: '#4f4f4f' }} gutterBottom>
                    {series.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h4" style={{ color: '#4f4f4f' }}>
                    Chưa có description trên database !
                </Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          <Typography variant="subtitle1" gutterBottom>
            {blogData.opening}
          </Typography>

          <Markdown>
            {blogData.content}
          </Markdown>
        </Grid>
        <Sidebar
          header={{
            title: 'Other posts'
          }}
          body={{
            cards: cardsData
          }}
        />
        <Grid item xs={12} md={4}>
        </Grid>
      </Grid>
    </div>
  )
}
