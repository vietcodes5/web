import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

import Cover from '../components/Cover';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  cover_image: {
    maxHeight: '350px',
    display: 'block',
    margin: '20px auto',
  },
  blogCard: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',

    "& > .mask": {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      backgroundColor: '#000',
      transition: 'opacity .3s linear',
      zIndex: '0',
    },

    "& > .title": {
      position: 'absolute',
      width: '100%',
      boxSizing: 'border-box',
      padding: "10px",
      color: '#fff',
      background: '#000',
      bottom: '0',
      pointerEvents: 'none',
      transition: '.3s linear',
      zIndex: '1',
    },

    "& > .image": {
      width: '100%',
      height: '100%',
      backgroundSize: '100% 100%',
      backoroundRepeat: 'no-repeat'
    }
  }
}));

export default function Series(props) {
  const { id } = useParams();
  const [ photoUrl, updatePhotoUrl ] = useState("");
  const [ posts, loadPost ] = useState([]);
  const [ series, updateSeries ] = useState({
    blogs: [],
    description: "Loading...",
    title: "Loading..."
  });
  const classes = useStyles();

  useEffect(() => {
    const db = firebase.firestore();
    const storage = firebase.storage();

    db.collection("series")
      .doc(id)
      .get()
      .then(doc => {
        if(!doc.exists) {
          console.log("No series found");
        } else {
          updateSeries(doc.data());

          // get image
          storage
            .ref(`blog/${doc.data().cover_image.rect}`)
            .getDownloadURL()
            .then(updatePhotoUrl);

          const blogRefs = doc.data().blogs;
          const promises = blogRefs.map(ref => ref.get());

          Promise.all(promises)
            .then(blogDocs => {
              blogDocs.forEach(doc => {
                const data = doc.data();

                storage
                  .ref(`blog/${data.photos[0]}`)
                  .getDownloadURL()
                  .then(url => {
                    loadPost(prevPosts => ([
                      ...prevPosts,
                      <Cover 
                        title={data.title}
                        subtitle={data.opening}
                        xs={6} sm={4}
                        photoUrl={url}
                        to={`/series/${id}/${doc.id}`}
                      />
                    ]));
                  });
              })
            });
        }
      });
  }, [ id ]);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Series { series.title }
      </Typography>
      <Divider />
      <img className={classes.cover_image} src={photoUrl} alt="Series' cover" />
      <Typography variant="subtitle2">
        { series.description }
      </Typography>
      <Divider />

      <Grid container spacing={3} justify="space-around" style={{ marginTop: '10px' }}>
        { posts } 
      </Grid>
    </>
  );
}

