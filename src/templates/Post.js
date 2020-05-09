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
import UpcomingEvent from '../components/UpcomingEvent';

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
            const postRefs = res.data().posts;
            const promise = postRefs.map(post => post.get());
            Promise.all(promise)
              .then(postDocs => {
                postDocs.forEach(doc => {
                  const data = doc.data();
                  storage
                    .ref(`blog/${data.photos}`)
                    .getDownloadURL()
                    .then(url => {
                      if (doc.id !== postId)
                        updateCardsData(cardsData => ([
                          ...cardsData,
                          {
                            id: doc.id,
                            title: data.title,
                            photoUrl: url,
                            url: `/posts/${doc.id}`
                          }
                        ]));
                    })
                });
              })
          })
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
                    {blogData.opening}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          <Grid container >
            <Grid item xs={7}>
              <Markdown >
                {blogData.content}
              </Markdown>
            </Grid>
            <Grid item xs={5}>
              <UpcomingEvent />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: '100px' }}>
          <Sidebar
            header={{
              title: 'Các bài viết khác'
            }}
            body={{
              cards: cardsData
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
      </Grid>
    </div >
  )
}
