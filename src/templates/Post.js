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
import Sidebar from '../components/Sidebar';

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
  const { postId } = useParams();
  const { seriesId } = useParams();
  const [blogData, loadData] = useState(defaultData);
  const [photoUrl, updatePhotoUrl] = useState("");
  const [posts, loadPost] = useState([]);
  const classes = useStyles();
  const [cardsData, updateCardsData] = useState([]);
  const [series, updateSeries] = useState({
    blogs: [],
    description: "Loading...",
    title: "Loading..."
  });

  useEffect(() => {
    // TODO: get blog data
    const db = firebase.firestore();
    const storage = firebase.storage();

    loadPost(() => []);
    updateCardsData(() => []);

    db.collection("series")
      .doc(seriesId)
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
                    if (doc.id !== postId) {
                      updateCardsData(prevPosts => ([
                        ...prevPosts,
                        {
                          title: data.title,
                          photoUrl: url,
                          url: `${doc.id}`,
                        }
                      ]));
                    }
                  });
              })
            });
        }
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
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" gutterBottom>
            Testing
          </Typography>
          <Divider />
          <img className={classes.cover_image} src={photoUrl} alt="Post cover" />
          <Typography variant="subtitle1" gutterBottom>
            {blogData.opening}
          </Typography>

          <Markdown>
            {blogData.content}
          </Markdown>
        </Grid>
        <Sidebar
          header={{
            title: 'Other events'
          }}
          body={{
            cards: cardsData
          }}
        />
        <Grid item xs={12} md={4}>
        </Grid>
      </Grid>
    </>
  )
}
