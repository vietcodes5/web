import React from 'react';
import Cover from '../components/Cover';
import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '30px',
    '@media screen and (max-width: 1024px)': {
      margin: '10px',
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
  divider: {
    height: '6px',
    width: '100%',
    background: '#309DBE',
  },
  title: {
    fontSize: '50px',
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { header, body } = props;

  return (
    <Grid item xs={12} md={12} className={classes.container}>
      <Typography variant="h1" className={classes.title} gutterBottom>
        {header.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {header.content}
      </Typography>
      <Divider className={classes.divider} />

      <Grid
        style={{ marginTop: '10px' }}
      >
        <Typography variant="h3" gutterBottom >
          {body.title}
        </Typography>
        <Grid
          container
          className={classes.cardsContainer}
          justify='left'
          spacing={5}

        >
          {
            body.cards.map(card => (
              <Cover
                key={card.id}
                id={card.id}
                title={card.title}
                xs={12}
                md={4}
                photoUrl={card.photoUrl}
                to={card.url}
              />
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
