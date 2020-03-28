import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

import Cover from './Cover';

import firebase from 'firebase';
import 'firebase/storage';

export default function Main(props) {
  const { allSeries } = props;
  const [ cards, loadCard ] = useState([]);

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
              xs={4}
              to={`/series/${series.id}`}
            />
          ]));
        });
    });
  }, [ allSeries ]);

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        Posts
      </Typography>
      <Divider />
      <Grid container spacing={2} justify="space-between">
        { cards }
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
};
