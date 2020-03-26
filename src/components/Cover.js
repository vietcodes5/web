import React, { useState } from 'react';
import {
    Grid,
    Typography,
  } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',

    "& > .mask": {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      backgroundColor: '#000',
      transition: 'opacity .3s linear',
      zIndex: '0',
    },

    "& > .title": {
      position: 'absolute',
      width: '100%',
      boxSizing: 'border-box',
      padding: "10px",
      color: '#fff',
      background: '#000',
      bottom: '0',
      pointerEvents: 'none',
      transition: '.3s linear',
      zIndex: '1',
    },

    "& > .image": {
      width: '100%',
      height: '100%',
      backgroundSize: '100% 100%',
      backoroundRepeat: 'no-repeat'
    }
  },
}));

export default function Cover({ 
  title = "Loading...", 
  subtitle="Loading...", 
  photoUrl="",
  to,
  xs, sm, md, lg}) {

  const classes = useStyles();
  const [showMask, updateShow] = useState(false);
  
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <Link to={to}>
        <div
          className={classes.card}
          onMouseEnter={(e) => { 
            e.preventDefault(); 
            updateShow(true) 
          }}
          onMouseOut={() => updateShow(false)}
        >
          <img className="image" src={photoUrl} alt={title} />
          <div className="mask"
            style={{
              opacity: showMask ? ".3" : "0",
            }}></div>
          <div className="title"
            style={{
              transform: `translateY(${showMask ? "0" : "100%"})`
            }}
          >
            <Typography variant="h3">
              {title}
            </Typography>
            <Typography variant="subtitle1">
              {subtitle}
            </Typography>
          </div>
        </div>
      </Link>
    </Grid>
  )

}
 
