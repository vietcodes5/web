import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Cover from '../components/Cover';

import firebase from 'firebase';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  //Containers
  container: {
    margin: '30px',
    '@media screen and (max-width: 1024px)': {
      margin: '10px',
      marginBottom: '100px',
    },
  },
  cardsContainer: {
    padding: '60px',
    paddingTop: '50px',
    '@media screen and (max-width: 1024px)': {
      padding: '10px',
      paddingTop: '50px',
    },
  },
  // Texts
  title: {
    fontSize: '50px',
  },
  // Others
  divider: {
    height: '6px',
    width: '100%',
    background: '#309DBE',
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { allSeries } = props;
  const [cards, loadCard] = useState([]);

  useEffect(() => {
    const storage = firebase.storage();

    allSeries.forEach(series => {
      storage
        .ref(`blog/${series.cover_image.square}`)
        .getDownloadURL()
        .then(url => {
          loadCard(prevCards => ([
            ...prevCards,
            <Cover
              key={series.id}
              title={series.title}
              subtitle={series.description}
              photoUrl={url}
              xs={12}
              sm={6}
              md={4}
              to={`/series/${series.id}`}
            />
          ]));
        });
    });
  }, [allSeries]);

  return (
    <Grid item xs={12} md={12} className={classes.container}>
      <Typography variant="h1" gutterBottom className={classes.title}>
        Series
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={5} className={classes.cardsContainer}>
        {cards}
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
};