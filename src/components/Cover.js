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
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    "& > .mask": {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      backgroundColor: 'black',
      transition: 'opacity .3s linear',
      zIndex: '0',
    },

    "& > .title": {
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: "10px",
      backgroundColor: 'transparent',
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
    },
  },
}));

export default function Cover({
  title = "Loading...",
  subtitle = "Loading...",
  photoUrl = "",
  to,
  xs, sm, md, lg }) {

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
          <img className="image"
            src={photoUrl}
            alt={title}
            style={{
              transform: `scale(${showMask ? "1.2" : "1"})`,
              transitionDuration: '.3s',
            }}
          />
          <div className="mask"
            style={{
              opacity: showMask ? ".7" : "0",

            }}></div>
          <div className="title"
            style={{
              opacity: showMask ? "1" : "0",
            }}
          >
            <Typography variant="h2">
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

