import React, { useState, useEffect } from 'react';
//MUI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// component
import UpcomingEvent from '../components/UpcomingEvent';
import Main from '../components/MainEvents';
import Review from '../components/ReviewCard';
import Member from '../components/MemberCard';
// firebase
import firebase from 'firebase';
import 'firebase/firestore';


const useStyle = makeStyles((theme) => ({
  container: {
    maxWidth: '100%',
    background: '#FFFFFF',
    display: 'flex',
    flexFlow: 'row wrap',
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(1),
  },
  opencontainer: {
    maxWidth: '90%',
    background: '#FFFFFF',
    display: 'flex',
    flexFlow: 'row wrap',
    padding: theme.spacing(2),
    justifyContent: 'space-evenly',
    margin: 'auto',
    height: 'auto',
  },
  eventcontainer: {
    maxWidth: '100%',
    background: '#FFFFFF',
    display: 'flex',
    flexFlow: 'row wrap',
    paddingTop: theme.spacing(4),

  },
  openingtext: {
    fontFamily: 'Cabin',
    marginTop: '3vh',
    marginBottom: '5vh',
    textAlign: 'center',
    color: theme.palette.text.main,
    fontWeight: 'bold',
    fontSize: '250%',
    paddingLeft: theme.spacing(5),
  },
  pic: {
    height: 'auto',
    backgroundSize: 'cover',
    background: 'url(\'https://miro.medium.com/max/10114/1*_BSX61CxShyqW7oT7Kgc8Q.jpeg\')',
    marginLeft: 'auto',
    backgroundPosition: 'center',
    boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.2)',
  },
  downbtn: {
    height: '50px',
    width: '50px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid #FFFFFF',
    '&:hover': {
      background: 'grey',
    },
  },
}))
function Scroller() {
  document.getElementById('member').scrollIntoView({
    behavior: 'smooth',
  });
}

export default function About() {
  //Variable
  const classes = useStyle();
  const [events, updateEvents] = useState([]);
  const db = firebase.firestore();
  //import data
  useEffect(() => {
    db.collection("events")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No event found!");
        } else {
          const events = [];
          snapshot.forEach(doc => events.push({
            id: doc.id,
            ...doc.data()
          }));

          updateEvents(events);
        }
      })
  }, [db]);

  return (
    <div id="about">
      {/* About*/}
      < Grid className={classes.container}>
        <Typography align='center' variant='h1' className={classes.openingtext} style={{ paddingLeft: '10vh' }}>About us</Typography>
      </Grid>
      <div className={classes.container}>
        <Grid container className={classes.opencontainer} justify='space-evenly'>
          <Grid item xs={12} md={6}>
            <Typography align='left' variant='h3'>Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam.<br></br> Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam</Typography>
          </Grid>
          <Grid item xs={12} md={5} className={classes.pic}></Grid>
        </Grid>
        <Grid item xs={12} md={12} align='center' style={{ paddingTop: '10vh' }}>
          <IconButton className={classes.downbtn} onClick={Scroller}>
            <ArrowDownwardIcon />
          </IconButton>
        </Grid>
      </div>
      {/* Member*/}
      <Grid className={classes.container} id='member'>
        <Typography align="center" variant='h1' className={classes.openingtext}>Our team</Typography>
      </Grid>
      <Grid container className={classes.container} justify='space-evenly'>
        <Member title='demo' name='demo' review='aaaa' memImg='https://miro.medium.com/max/10114/1*_BSX61CxShyqW7oT7Kgc8Q.jpeg' />
        <Member title='demo' name='demo' review='aaaa' memImg='' />
        <Member title='demo' name='demo' review='aaaa' />
        <Member title='demo' name='demo' review='aaaa' />
        <Member title='demo' name='demo' review='aaaa' />
        <Member title='demo' name='demo' review='aaaa' />
        <Member title='demo' name='demo' review='aaaa' />
        <Member title='demo' name='demo' review='aaaa' />
        <Member title='demo' name='demo' review='aaaa' />
        <Member title='demo' name='demo' review='aaaa' />
      </Grid>
      {/* Quotes*/}
      <Grid className={classes.container}>
        <Typography align="center" variant='h1' className={classes.openingtext} style={{ paddingTop: '0px' }}>Quotes about what we do</Typography>
      </Grid>
      <Grid container className={classes.container} justify='space-evenly' >
        <Grid item md={3} xs={12}>
          <Review imgSource='https://atpmedia.vn/wp-content/uploads/2019/12/C%C3%A1ch-s%E1%BB%AD-d%E1%BB%A5ng-th%E1%BA%BB-IMG.jpg' review='demo' name='doggo' title='Product Manager - Citigo' />
        </Grid>
        <Grid item md={3} xs={12}>
          <Review imgSource='https://atpmedia.vn/wp-content/uploads/2019/12/C%C3%A1ch-s%E1%BB%AD-d%E1%BB%A5ng-th%E1%BA%BB-IMG.jpg' review='demo' name='doggo' title='Product Manager - Citigo' />
        </Grid>
        <Grid item md={3} xs={12}>
          <Review imgSource='https://atpmedia.vn/wp-content/uploads/2019/12/C%C3%A1ch-s%E1%BB%AD-d%E1%BB%A5ng-th%E1%BA%BB-IMG.jpg' review='demo' name='doggo' title='Product Manager - Citigo' />
        </Grid>
      </Grid>
      {/* Event*/}
      <Grid container className={classes.eventcontainer} height='500px'>
        <Grid item md={4} xs={12}>
          <UpcomingEvent />
        </Grid>
        <Grid item md={8} xs={12} className={classes.pic}>
        </Grid>
      </Grid>
      <Grid container className={classes.container} spacing={3}>
        <Main events={events} />
      </Grid>
    </div >
  );
}
