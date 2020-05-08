import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

import Cover from '../components/Cover';
import Sidebar from '../components/Sidebar';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  cover_image: {
    maxHeight: '600px',
    height: '100%',
    minWidth: '100%',
    display: 'block',
    margin: '20px auto',
  },
  container: {
    margin: '30px',
  },
  cardsContainer: {
    padding: '100px',
    '@media screen and (max-width: 750px)': {
      padding: '20px',
    },
  },
  divider: {
    height: '5px',
    width: '100%',
    background: '#309DBE',
  },
  title: {
    fontSize: '50px',
  },
}));

const defaultValues = {
  title: 'Loading...',
  content: 'Loading...',
  cover_image: {
    square: "",
    rect: "",
  },
  photos: [],
  createdAt: ""
}

export default function Series(props) {
  const { id } = useParams();
  const [photoUrl, updatePhotoUrl] = useState("");
  const [posts, loadPost] = useState([]);
  const [cardsData, updateCardsData] = useState([]);
  const [series, updateSeries] = useState(defaultValues);
  const classes = useStyles();

  useEffect(() => {
    const db = firebase.firestore();
    const storage = firebase.storage();

    // Clear previous state
    loadPost(() => []);
    updateCardsData(() => []);

    db.collection("series")
      .doc(id)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No series found");
        } else {
          updateSeries(doc.data());
          // get image
          storage
            .ref(`blog/${doc.data().cover_image.rect}`)
            .getDownloadURL()
            .then(url => updatePhotoUrl(url));

          const postRefs = doc.data().posts;
          const promises = postRefs.map(ref => ref.get());

          Promise.all(promises)
            .then(postDocs => {
              postDocs.forEach(doc => {
                const data = doc.data();

                storage
                  .ref(`blog/${data.photos[0]}`)
                  .getDownloadURL()
                  .then(url => {
                    loadPost(prevPosts => ([
                      ...prevPosts,
                      <Cover
                        key={doc.id}
                        id={doc.id}
                        title={data.title}
                        subtitle={data.opening}
                        xs={12}
                        md={4}
                        photoUrl={url}
                        to={`/posts/${doc.id}`}
                      />
                    ]));
                  })

              })
            })
        }
      })

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
              if (doc.id !== id) {
                updateCardsData(prevState => ([
                  ...prevState,
                  {
                    title: data.title,
                    photoUrl: url,
                    url: `/series/${doc.id}`
                  }
                ]));
              }
            })
        });
      });

  }, [id]);
  return (
    <Grid container>
      <Grid container style={{ width: '80%', margin: 'auto' }}>
        <Grid item xs={12} md={12} className={classes.container}>
          <Typography variant="h1" gutterBottom className={classes.title}>
            Series {series.title}
          </Typography>

          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} md={12}>
          <img className={classes.cover_image} src={photoUrl} alt="Series' cover" />
        </Grid>
        <Divider />

        <Grid
          container
          spacing={3}
          justify="space-around"
          style={{ marginTop: '10px' }}
          className={classes.cardsContainer}
        >
          {posts}
        </Grid>


        <Sidebar
          header={{
            title: 'Các series khác'
          }}
          body={{
            cards: cardsData
          }}
        />
      </Grid>
    </Grid>
  );
}
