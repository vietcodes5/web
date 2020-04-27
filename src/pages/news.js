import React, { useEffect, useState } from 'react';

// MUI component
import {
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// components
import FeaturedPosts from "../components/FeaturedPosts";
import Sidebar from "../components/Sidebar";
import Main from "../components/MainNews";

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
  const [sidebarBodyCards, updateSidebar] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const storage = firebase.storage();

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
              updateSidebar(sidebarBodyCards => ([
                ...sidebarBodyCards,
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
        <Main allSeries={allSeries} />
        <Sidebar
          header={{
            title: "Posts",
            //content: "Bài viết của Vietcode"
          }}
          body={{
            //title: "Các bài viết",
            cards: sidebarBodyCards
          }}
        />
      </Grid>
    </>
  );
}
