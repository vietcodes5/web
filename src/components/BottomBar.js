import React from 'react';
import { Link } from 'react-router-dom';

import {
  Typography,
  Grid,
  Paper,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    marginTop: '10px',
    padding: '10px',
    background: 'white',
    color: 'black',
    borderRadius: '10px',
  },
  sidebarCard: {
    margin: '5px 0',
    background: '#f5f5f5',
    transitionDuration: '.3s',
    borderRight: '6px solid #f5f5f5',
    color: 'black',
    boxSizing: 'border-box',
    textAlign: 'center',
    '&:hover': {
      boxShadow: theme.shadow.hover,
      borderRight: '6px solid #34b6cf',
    },
    '&:active': {
      background: '#34b6cf',
      color: 'white',
      borderRight: '6px solid #34b6cf',
    },
  },
  sidebarCardImage: {
    paddingTop: '100%',
    borderRadius: '15px',
    backgroundSize: '95%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  cardContent: {
    padding: '5px 0 5px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    flexDirection: 'column',
  },
  title: {
    height: '85%',
    width: '100%',
  },
  subtitle: {
    height: '15%',
    width: '98%',
  },
}));

export default function Sidebar(props) {
  const { header, body } = props;

  return (
    <Grid item xs={12} md={12}>
      <Typography variant="h2">
        {header.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {header.content}
      </Typography>

      <div style={{ marginTop: '10px' }}>
        <Typography variant="h3" gutterBottom>
          {body.title}
        </Typography>
        <Grid container justify='space-around' alignItems='stretch' spacing={2}>
          {
            body.cards.map(card => (
              <SidebarCard
                {...card}
                key={card.title}
              />
            ))
          }
        </Grid>
      </div>
    </Grid>
  );
}

function SidebarCard(props) {
  const classes = useStyles();
  const { url, title, photoUrl } = props;

  return (
    <Grid item xs={12} md={5}>
      <Link to={url}>
        <Paper>
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
              container
              item
              xs={7}
              className={classes.cardContent}
            >
              <Grid
                container
                item
                alignItems='center'
                justify='center'
                className={classes.title}
              >
                <Typography variant="h4">
                  {title}
                </Typography>
              </Grid>
              <Grid item className={classes.subtitle}>
                <Typography
                  variant="subtitle2"
                  align="right"
                  color="textSecondary"
                >
                  Read more
            </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>

  );
}
