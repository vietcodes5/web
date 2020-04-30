import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Cover from './Cover';

import firebase from 'firebase';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '30px',
  },
  cardsContainer: {
    padding: '60px',
    '@media screen and (max-width: 750px)': {
      padding: '20px',
    },
  },
  divider: {
    height: '6px',
    width: '100%',
    background: '#309DBE',
  },
  title: {
    fontSize: '50px',
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
      <Grid container spacing={5} justify="space-around" className={classes.cardsContainer}>
        {cards}
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
};