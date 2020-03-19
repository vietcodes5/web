import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

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
  const [ blogs, loadBlogs ] = useState([]);
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
              loadBlogs(blogDocs.map(blogDoc => ({
                id: blogDoc.id,
                ...blogDoc.data()
              })));
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
      {
        blogs.map(blog => 
          <Blog 
            blog={blog}
            key={blog.id}
          />
        )
      } 
      </Grid>
    </>
  )
}

function Blog({ blog }) {
  const {
    title,
    opening,
    photos,
    id: blogId
  } = blog;

  const [ photoUrl, updatePhotoUrl ] = useState("");
  const [ showMask, updateShow ] = useState(false);
  const { id: seriesId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const storage = firebase.storage();

    storage
      .ref(`posts/${photos[0]}`)
      .getDownloadURL()
      .then(updatePhotoUrl)
  }, [ photos ]);

  return (
    <Grid item xs={6} md={4}>
      <Link to={`/series/${seriesId}/${blogId}`}>
        <div
          className={classes.blogCard}
          onMouseEnter={(e) => { e.preventDefault(); updateShow(true) }}
          onMouseOut={() => { updateShow(false) }}
        >
          <img className="image" src={photoUrl} alt="Blog" />
          <div className="mask"
            style={{
              opacity: showMask ? ".3" : "0",
            }}></div>
          <div className="title"
            style={{
              transform: `translateY(${showMask ? "0" : "100%"})`
            }}
          >
            <Typography variant="h5">
              { title }
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              { opening }
            </Typography>
          </div>
        </div>
      </Link>
    </Grid>
  )
}
