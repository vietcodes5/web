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
import Bottombar from '../components/Bottombar';
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
    '@media screen and (max-width: 800px)': {
      margin: '10px',
    },
  },
  title: {
    fontSize: '40px',
    '@media screen and (max-width: 800px)': {
      fontSize: '30px',
      fontWeight: 'bold',
    },
  },
  seriesTitle: {
    color: '#4f4f4f',
    fontWeight: 'bold',
    '@media screen and (max-width: 800px)': {
      fontSize: '25px',
      fontWeight: '100'
    },
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
  const [seriesData, updateSeriesData] = useState([]);
  useEffect(() => {
    // TODO: get blog data
    const db = firebase.firestore();
    const storage = firebase.storage();

    updateSeriesData(() => []);
    updateCardsData(() => []);
    db.collection("series")
      .limit(5)
      .get()
      .then(snapshot => {
        if (snapshot.empty) return console.log('No series to show');
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          storage
            .ref(`/blog/${data.cover_image.square}`)
            .getDownloadURL()
            .then(url => {
                updateSeriesData(prevState => ([
                  ...prevState,
                  {
                    id: doc.id,
                    title: data.title,
                    photoUrl: url,
                    url: `/series/${doc.id}`
                  }
                ]));
            })
        });
      })
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
     <Grid container spacing={2} justify='center' style={{marginBottom:'50px'}}>
        <Grid item xs={12} md={8}>
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
                  <Typography variant="h1" className={classes.seriesTitle} gutterBottom>
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
          <Grid container justify='center'>
            <Grid item xs={12} md={12}>
              <Markdown>
                {blogData.content}
              </Markdown>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container direction='column' spacing={4} justify='center'>
            <Grid item xs={12}>
              
            </Grid>
            <Grid item>
              <Sidebar
                header={{
                  title: 'Series khác'
                }}
                body={{
                  cards: seriesData
                }}
                md={9}
                xs={12}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Bottombar
          header={{
            title: 'Các bài viết khác'
          }}
          body={{
            cards: cardsData
          }}
        />
      </Grid>
    </div>
  )
}
