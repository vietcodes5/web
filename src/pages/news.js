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

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sidebarBodyCards = [
  {
    title: 'Post #1',
    photoUrl: 'https://source.unsplash.com/random',
    url: '/',
  },
  {
    title: 'Post #2',
    photoUrl: 'https://source.unsplash.com/random',
    url: '/',
  },
  {
    title: 'Post #3',
    photoUrl: 'https://source.unsplash.com/random',
    url: '/',
  },
];

export default function News() {
  const classes = useStyles();
  const [ allSeries, updateAllSeries ] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

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
            title: "News",
            content: "Just testing"
          }}
          body={{
            title: "Posts",
            cards: sidebarBodyCards
          }}
        />
      </Grid>
    </>
  );
}
