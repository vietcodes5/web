import React from 'react';
import { Link } from 'react-router-dom';

import {
  Typography,
  Divider,
  Grid,
  Paper,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '10px',
  },
  sidebarCard: {
    margin: '5px 0',
    border: '1px solid #ccc',
  },
  sidebarCardImage: {
    width: '100%',
    paddingTop: '100%',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  },
  cardContent: {
    padding: '5px 0 5px 10px',
  }
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { header, body } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.container} elevation={2} square>
        <Typography variant="h2">
          { header.title }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          { header.content }
        </Typography>
        <Divider />

        <div style={{ marginTop: '10px' }}>
          <Typography variant="h3" gutterBottom>
            { body.title }
          </Typography>
          {
            body.cards.map(card => (
              <SidebarCard 
                {...card}
                key={card.title}
              />
            ))
          }
        </div>
      </Paper>
    </Grid>
  );
}

function SidebarCard(props) {
  const classes = useStyles();
  const { url, title, photoUrl } = props;

  return (
    <Link to={url}>
      <Grid className={classes.sidebarCard} container>
        <Grid item xs={4}>
          <div 
            className={classes.sidebarCardImage} 
            style={{ 
              backgroundImage: `url(${photoUrl})`,
            }}
            alt="Event" />
        </Grid>
        <Grid 
          item xs={8} 
          className={classes.cardContent}
        >
          <Typography variant="h4">
            { title }
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
}
