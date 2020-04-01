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
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const defaultValues = {
  title: 'Loading...',
  content: 'Loading...',
  photos: "Loading",
  createdAt: "Loading"
}

export default function News(props) {
  const { id } = useParams();
  const { seriesId } = useParams();
  const [ allSeries, updateAllSeries ] = useState([]);
  const [ event, loadEvent ] = useState(defaultValues)
  const [ photoUrl, updatePhotoUrl ] = useState("");
  const [ cardsData, updateCardsData ] = useState([])
  const classes = useStyles();

  useEffect(() => {
    const storage = firebase.storage();
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

    db.collection("posts")
      .limit(5)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return console.log('No event found!');
        }
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          loadEvent(data);

          storage
            .ref(`blog/${data.photos}`)
            .getDownloadURL()
            .then(url => {
              updateCardsData(prevState => ([
                ...prevState,
                {
                  title: data.title,
                  photoUrl: url,
                }
              ]));
            })
        }); 
      })
  }, [id]);

  return (
    <>
      <FeaturedPosts />
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main allSeries={allSeries} />
        <Sidebar
          header={{
            title: "Recent Posts",
            // content: "Just testing"
          }}
          body={{
            title: "",
            cards: cardsData
          }}
        />
      </Grid>
    </>
  );
}
