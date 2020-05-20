import React from 'react';
import { Link } from 'react-router-dom';

import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '10px',
    background: 'white',
    color: 'black',
    marginBottom: '30px',
  },
  sidebarCard: {
    margin: '5px 0',
    transitionDuration: '.3s',
    borderRight: '4px solid white',
    background: 'white',
    color: 'black',
    boxSizing: 'border-box',
    textAlign: 'center',
    '&:hover': {
      boxShadow: theme.shadow.hover,
      borderRight: '4px solid #34b6cf',
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
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { header, body, md, xs, lg, sm } = props;

  return (
    <Grid item md={md} xs={xs} lg={lg} sm={sm}>
      <div className={classes.container}>
        <Typography variant="h2" style={{
            fontSize: '40px',
            '@media screen and (maxWidth: 800px)': {
              fontSize: '30px',
              fontWeight: 'bold',
            },
          }}
        >
          {header.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {header.content}
        </Typography>
        <Divider />

        <div style={{ marginTop: '10px' }}>
          <Typography variant="h3" gutterBottom>
            {body.title}
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
      </div>
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
          container
          item xs={8}
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
        </Grid>
      </Grid>
    </Link>
  );
}