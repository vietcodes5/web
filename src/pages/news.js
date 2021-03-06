import React, { useEffect, useState } from 'react';

// MUI component
import {
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// components
import FeaturedPosts from "../components/FeaturedPosts";
import Bottombar from "../components/Bottombar";
import Main from "../templates/MainNews";

// firebase
import firebase from "firebase";
import "firebase/firestore";
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function News() {
  const classes = useStyles();
  const [allSeries, updateAllSeries] = useState([]);
  const [bottombarBodyCards, updateSidebar] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const storage = firebase.storage();

    db.collection("posts")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return console.log('No posts found!');
        }

        snapshot.docs.slice(-3).forEach(doc => {
          const data = doc.data();

          storage
            .ref(`blog/${data.photos}`)
            .getDownloadURL()
            .then(url => {
              updateSidebar(bottombarBodyCards => ([
                ...bottombarBodyCards,
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

    db.collection("series")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No series found");
        } else {
          let allSeries = [];

          snapshot.forEach(doc => allSeries.push({
            id: doc.id,
            ...doc.data()
          }));
          updateAllSeries(allSeries);
        }
      })

  }, []);

  return (
    <>
      <FeaturedPosts />
      <Grid container spacing={5} className={classes.mainGrid}>
        <Grid item xs={10} style={{ margin: 'auto' }}>
          <Main allSeries={allSeries} />
          <Bottombar
            header={{
              title: "Bài viết gần đây",
              //content: "Bài viết của Vietcode"
            }}
            body={{
              //title: "Các bài viết",
              cards: bottombarBodyCards
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
