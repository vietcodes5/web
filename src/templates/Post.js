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
  Container,
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
  const [blogData, loadData] = useState(defaultData);
  const [photoUrl, updatePhotoUrl] = useState("");
  //const [posts, loadPost] = useState([]);
  const classes = useStyles();
  const [cardsData, updateCardsData] = useState([]);
  /*
  const [series, updateSeries] = useState({
    blogs: [],
    description: "Loading...",
    title: "Loading..."
  });
  */
  useEffect(() => {
    // TODO: get blog data
    const db = firebase.firestore();
    const storage = firebase.storage();

    // loadPost(() => []);
    updateCardsData(() => []);

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
                    url: `/series/posts/${doc.id}`
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
    <Container>
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
            title: 'Other posts'
          }}
          body={{
            cards: cardsData
          }}
        />
        <Grid item xs={12} md={4}>
        </Grid>
      </Grid>
    </Container>
  )
}
