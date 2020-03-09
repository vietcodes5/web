import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";


import firebase from 'firebase';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  postCard: {
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

export default function Main(props) {
  const { allSeries = [], title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Grid container spacing={2} justify="space-between">
        {allSeries.map(series => (
          <SeriesCard series={series} key={series.title} />
        ))}
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
};

function SeriesCard(props) {
  const classes = useStyles();
  const [photoUrl, updatePhoto] = useState("");
  const [showMask, updateShow] = useState(false);

  const {
    id,
    title,
    cover_image
  } = props.series;

  useEffect(() => {
    const storage = firebase.storage();

    storage
      .ref(`posts/${cover_image.square}`)
      .getDownloadURL()
      .then(updatePhoto)

  }, [ cover_image ]);
  return (
    <Grid item md={4} xs={6}>
      <Link to={`/series/${id}`}>
        <div
          className={classes.postCard}
          onMouseEnter={(e) => { e.preventDefault(); updateShow(true) }}
          onMouseOut={() => { updateShow(false) }}
        >
          <img className="image" src={photoUrl} alt="Event" />
          <div className="mask"
            style={{
              opacity: showMask ? ".3" : "0",
            }}></div>
          <div className="title"
            style={{
              transform: `translateY(${showMask ? "0" : "100%"})`
            }}
          >
            <Typography variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor
            </Typography>
          </div>
        </div>
      </Link>
    </Grid>
  )
}
