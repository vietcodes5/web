import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

import Cover from '../components/Cover';
import Bottombar from '../components/Bottombar';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  // Containers
  cover_image: {
    maxHeight: '600px',
    height: '100%',
    minWidth: '100%',
    display: 'block',
    margin: '20px auto',
  },
  container: {
    margin: '30px',
    '@media screen and (max-width: 800px)': {
      margin: '0px',
    },
  },
  // Texts
  title: {
    fontSize: '50px',
    '@media screen and (max-width: 800px)': {
      fontSize: '40px',
    },
  },
  // Others
  divider: {
    height: '5px',
    width: '100%',
    background: '#309DBE',
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
                        sm={6}
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
                    id: doc.id,
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
          <Typography gutterBottom className={classes.title}>
            Series {series.title}
          </Typography>

          <Divider className={classes.divider} />
        </Grid>
        <Divider />

        <Grid
          container
          spacing={5}
          style={{ marginTop: '10px' }}
          className={classes.cardsContainer}
        >
          {posts}
        </Grid>

        <Grid item style={{ marginTop: '100px' }}>
          <Bottombar
            header={{
              title: 'Các series khác'
            }}
            body={{
              cards: cardsData
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
