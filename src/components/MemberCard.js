import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Card,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
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
  main: {
    display: 'flex',
    fontFamily: 'Cabin',
    background: '#FFFFFF',
    boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.2)',
    borderRadius: '16px',
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    width: '300px',
    flexFlow: 'column',
  },
  memberImg: {
    width: 'inherit',
    height: '200px',
  }
}))

export default function Member(props) {
  const classes = useStyle();
  return (
    <Card className={classes.main}>
      <img className={classes.memberImg} src={props.memImg} alt={props.name} />
      <Typography className={classes.open2}>
        {props.name}
      </Typography>
      <hr className={classes.hr} width='50%' align='left'></hr>
      <Typography className={classes.sub2}>
        {props.title}
      </Typography>
    </Card>
  )
}