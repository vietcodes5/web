import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid, Typography, Card,
} from '@material-ui/core';

import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  review: {
    display: 'flex',
    fontFamily: 'Cabin',
    background: '#FFFFFF',
    boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.2)',
    borderRadius: '16px',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  avatar: {
    height: '10vh',
    width: '10vh',
    marginRight: '4vh',
  },
  sub2: {
    fontFamily: 'Cabin',
    color: theme.palette.text.main,
    fontWeight: 'bold',
  },
  open2: {
    fontFamily: 'Cabin',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: theme.palette.text.main,
  },
  hr: {
    border: '1px #309DBE solid',
  },
  sub: {
    fontFamily: 'Cabin',
    marginTop: '2vh',
    marginBottom: '4vh',
    fontSize: '20px',
    color: theme.palette.text.main,
  },
}))

export default function Review(props) {
  const classes = useStyles();
  return (
    <Card className={classes.review}>
      <CardContent spacing={4}>
        <Grid container spacing={2} justify="space-between" direction='row'>
          <Grid item md={4} xs={12}>
            <Avatar className={classes.avatar}>
              <img src={props.imgSource} width='100%' height='100%' alt={props.name}></img>
            </Avatar>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography className={classes.open2}>{props.name}</Typography>
            <hr className={classes.hr} width='50%' align='left'></hr>
            <Typography className={classes.sub2}>{props.title}</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.sub}>
          {props.review}
        </Grid>
      </CardContent>
    </Card>
  )
}
