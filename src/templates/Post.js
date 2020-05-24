import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import {
  Typography,
  Grid,
  Container,
  Breadcrumbs,
} from '@material-ui/core';

import Markdown from '../components/Markdown';
import Bottombar from '../components/Bottombar';

const useStyles = makeStyles(theme => ({
  // Containers
  coverImage: {
    width: '100%',
    display: 'block',
    position: 'fixed',
    filter: 'brightness(50%)',
    top: '0',
    zIndex: '-1',
    '@media screen and (max-width: 1024px)': {
      width: '150%',
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
  container: {
    padding: '0px',
    background: '#FFFFFF',
    marginBottom: '100px',
    '@media screen and (max-width: 1024px)': {
      marginBottom: '0px',
    },
  },
  // Texts
  title: {
    fontSize: '70px',
    '@media screen and (max-width: 750px)': {
      fontSize: '30px',
    },
    textShadow: '5px 5px 5px  #34b6cf',
  },
  subtitle: {
    fontSize: '60px',
    '@media screen and (max-width: 750px)': {
      fontSize: '20px',
    },
    textShadow: '5px 5px 5px  #34b6cf',
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
  const [series, loadSeries] = useState([]);
  const classes = useStyles();
  const [cardsData, updateCardsData] = useState([]);
  useEffect(() => {
    // TODO: get blog data
    const db = firebase.firestore();
    const storage = firebase.storage();
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
<Grid container spacing={1}>
  <Grid item xs={12} className={classes.imgContainer} >
    <Grid container direciton='column' spacing={4} justify='center'>
      <Grid item xs={10} md={12}>
        <Typography align="center" className={classes.title}>
          {blogData.title}
        </Typography>
        </Grid>
        <Grid item xs={10} md={12}>
          <Typography align="center" className={classes.subtitle}>  
            {series.title}
          </Typography>
        </Grid>
      </Grid>
        <img className={classes.coverImage} src={photoUrl} alt="Event cover" />
    </Grid>
    <Container className={classes.container} >
    
      <Grid style={{ margin: 'auto', width: '95%' }}>
        <Grid style={{background: 'transparent', width: '100%'}}>
        <Breadcrumbs style={{color: 'black', margin: '10px'}}>
        <a href="/news">
          Bài Viết
        </a>
        <a href = {'/series/' + series.id}>
          {series.title}
        </a>
        <Typography style={{fontWeight: 'bold'}}>
          {blogData.title}
        </Typography>
        </Breadcrumbs>
      </Grid>
        <Markdown>
          {blogData.content}
        </Markdown>
      </Grid>
      <Grid item md={12}>
      <Bottombar
        header={{
          title: 'Các bài viết khác'
        }}
        body={{
          cards: cardsData
        }}
      />
      </Grid>
    </Container>
  </Grid>
  )
}
