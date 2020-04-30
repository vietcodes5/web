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
  },
  cardsContainer: {
    padding: '60px',
    '@media screen and (max-width: 750px)': {
      padding: '20px',
    },
  },
  divider: {
    height: '5px',
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
      <Typography variant="h1" className={classes.title}>
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
          justify='space-around'
          alignContent='center'
          spacing={5}
          alignItems='center'
        >
          {
            body.cards.map(card => (
              <SidebarCard
                {...card}
                key={card.title}
              />
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

function SidebarCard(props) {
  const { id, url, title, photoUrl } = props;

  return (
    <Cover
      key={id}
      id={id}
      title={title}
      xs={12}
      md={4}
      photoUrl={photoUrl}
      to={url}
    />
  );
}
