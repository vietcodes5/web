import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UpcomingEvent from '../components/UpcomingEvent';
import {
  Typography,
  Divider,
  Grid,
  Button,
  Avatar,
} from '@material-ui/core';

import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';
import EventIcon from '@material-ui/icons/Event';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const useStyles = makeStyles(theme => ({
  //first part
  homeCover: {
    background: 'black',
    width: '100%',
    height: '850px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  introText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
    height: '100px',
    fontSize: '130%',
    textAlign: 'center',
  },
  timHieuThemButton: {
    background: theme.palette.primary.main,
    width: '230px',
    height: '70px',
    borderRadius: '50px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    fontSize: '130%',
    letterSpacing: '2px',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    transition: '.5s',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  //second part
  vietCodeQuaNhungCs: {
    color: theme.palette.text.main,
    background: 'white',
    width: '100%',
    height: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  vietCodeQuaNhungCsText: {
    marginTop: '0',
    width: '30%',
    fontSize: '130%',
    textAlign: 'center',
    height: '100px',
  },
  statsContainer: {
    width: '80%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  stats: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '130%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  statsButton: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsButtonIcon: {
    fontSize: '500%',
    color: 'white',
  },
  statsText: {
    textAlign: 'center',
    height: '200px',
    width: '200px',
  },
  statsTextHorizontalLine: {
    background: theme.palette.primary.main,
    height: '2px',
    width: '50px',
  },
  // Part 3
  upcomingEventsContainer: {
    color: 'white',
    width: '100%',
    height: '800px',
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    fontSize: '130%',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  upcomingEvents: {
    marginBottom: '20px',
    width: '90%',
    borderRadius: '10px',
    height: '70%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  coverImage: {
    maxHeight: '500px',
    borderRadius: '10px',
  },
  eventHigherPart: {
    display: 'flex',
    height: '250px',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  eventText: {
    marginLeft: '5%',
    width: '50%',
    maxHeight: '500px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: theme.palette.text.main,
  },
  eventTextHorizontalLine: {
    width: '50%',
    marginLeft: '0',
    background: theme.palette.primary.main,
    height: '2px',
  },
  eventLowerPart: {
    display: 'flex',
    height: '150px',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  eventDate: {
    width: '100%',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  eventDateIcon: {
    marginRight: '5px',
    color: theme.palette.primary.main,
  },
  eventLocation: {
    width: '100%',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  eventLocationIcon: {
    marginRight: '5px',
    color: theme.palette.primary.main,
  },
  eventRegisterButton: {
    borderRadius: '50px',
    height: '55px',
    width: '120px',
    background: theme.palette.primary.main,
    color: 'white',
    display: 'flex',
    border: '1px solid',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '2px',
    fontSize: '90%',
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  //Part 4
  feedbackContainer: {
    color: theme.palette.text.main,
    width: '100%',
    height: '800px',
    background: 'white',
    fontSize: '130%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  feedbacks: {
    width: '90%',
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  feedbackCard: {
    width: '30%',
    borderRadius: '40px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0 0 2rem #c4c4c4',
  },
  feedbackUsersInfo: {
    height: '150px',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  feedbackUsersAvatar: {
    width: '80px',
    height: '80px',
  },
  feedbackUsersDetailedInfo: {
    height: '110px',
    width: '75%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  feedbackUsersDetailedInfoLine: {
    width: '50%',
    marginLeft: '0',
    margin: '0px',
    background: theme.palette.primary.main,
    height: '2px',
  },
  feedbackText: {
    maxHeight: '75%',
    width: '80%',
  },
}));

const defaultValues = {
  title: 'Loading...',
  description: 'Loading...',
  photos: [],
  main_photos: {
    square: "",
    rect: ""
  }
}

export default function Home(props) {
  const classes = useStyles();
  const [ event, loadEvent ] = useState(defaultValues)
  const [ photoUrl, updatePhotoUrl ] = useState("");

  useEffect(() => {
    const db = firebase.firestore();
    const storage = firebase.storage();

    db.collection("upcoming_events")
      .get()
      .then(snapshot => {
        const doc = snapshot.docs[0];
        if (!doc.exists) {
          console.log("No upcoming events");
        } else {
          const data = doc.data();
          loadEvent(data);
          
          storage
            .ref(`events/${data.main_photos.square}`)
            .getDownloadURL()
            .then(updatePhotoUrl);
        }
      })
  }, [])
  return (
    <Grid 
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <div className={classes.homeCover}> 
        <div className={classes.introText}>
          Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam. 
        </div>
        <div className={classes.timHieuThemButton}>
          <div> Tìm hiểu thêm </div>
        </div>
      </div>

      <div className={classes.vietCodeQuaNhungCs}>
        <div className={classes.vietCodeQuaNhungCsText}>
          <h1> Vietcode qua những con số </h1>
          <p> Chặng đường Vietcode đã đi được 5 năm. Dưới đây là những con số mà Vietcode đã để lại dấu ấn</p>
        </div>
        <div className={classes.statsContainer}>
          <div className={classes.stats}>
            <div className={classes.statsButton}>
              <PeopleIcon className={classes.statsButtonIcon}/>
            </div>

            <div className={classes.statsText}>
              <h1> 500 </h1>
              <hr className={classes.statsTextHorizontalLine}/>
              <div> Thành viên </div>
            </div>

          </div>
          <div className={classes.stats}>
            <div className={classes.statsButton}>
              <SpaIcon className={classes.statsButtonIcon}/>
            </div>

            <div className={classes.statsText}>
              <h1> 5 </h1>
              <hr className={classes.statsTextHorizontalLine}/>
              <div> Năm </div>
            </div>

          </div>
          <div className={classes.stats}>
            <div className={classes.statsButton}>
              <EventIcon className={classes.statsButtonIcon}/>
            </div>
            <div className={classes.statsText}>
              <h1> 20 </h1>
              <hr className={classes.statsTextHorizontalLine}/>
              <div> Sự kiện </div>
            </div>
          </div>
          <div className={classes.stats}>
            <div className={classes.statsButton}>
              <BusinessCenterIcon className={classes.statsButtonIcon}/>
            </div>
            <div className={classes.statsText}>
              <h1> 10 </h1>
              <hr className={classes.statsTextHorizontalLine}/>
              <div> Dự án </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.upcomingEventsContainer}> 
        <h1> Sự kiện sắp tới </h1>
        <div className={classes.upcomingEvents}> 
          <div className={classes.eventPictures}>
            <img className={classes.coverImage} src={photoUrl} alt="Event cover" />
          </div> 
          <div className={classes.eventText}>
            <div className={classes.eventHigherPart}>
              <h2> {event.title} </h2>
              <p> { event.description } </p>
            </div>
            <hr className={classes.eventTextHorizontalLine} />
            <div className={classes.eventLowerPart}>
              <div className={classes.eventDate}> 
                <AccessTimeIcon className={classes.eventDateIcon} />
                { event.date }
              </div>
              <div className={classes.eventLocation}>
                <LocationOnIcon className={classes.eventLocationIcon} />
                { event.location }
              </div>
              <div className={classes.eventRegisterButton}>
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.feedbackContainer}>
        <h1> Mọi người nói gì về Vietcode</h1>
        <div className={classes.feedbacks}>
          <div className={classes.feedbackCard}>
            <div className={classes.feedbackUsersInfo}> 
              <Avatar className={classes.feedbackUsersAvatar}> V </Avatar>
              <div className={classes.feedbackUsersDetailedInfo}>
                <div style={{fontSize: '26px', fontWeight: 'bold'}}> Triệu Sơn Hà </div> 
                <hr className={classes.feedbackUsersDetailedInfoLine}/>
                <div style={{fontSize: '18px'}}> Product Manager - Citigo </div>
              </div>
            </div>
            <div className={classes.feedbackText}> 
              Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các 
              học sinh THPT tiếp cận với
              CNTT trong tương lai. 
              Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các học sinh 
              THPT tiếp cận với CNTT tương lai
            </div>
          </div>
          <div className={classes.feedbackCard}>
            <div className={classes.feedbackUsersInfo}> 
                <Avatar className={classes.feedbackUsersAvatar}> V </Avatar>
                <div className={classes.feedbackUsersDetailedInfo}>
                  <div style={{fontSize: '26px', fontWeight: 'bold'}}> Triệu Sơn Hà </div> 
                  <hr className={classes.feedbackUsersDetailedInfoLine}/>
                  <div style={{fontSize: '18px'}}> Product Manager - Citigo </div>
                </div>
              </div>
              <div className={classes.feedbackText}> 
                Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các 
                học sinh THPT tiếp cận với
                CNTT trong tương lai. 
                Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các học sinh 
                THPT tiếp cận với CNTT tương lai
              </div>
            </div>
          <div className={classes.feedbackCard}>
            <div className={classes.feedbackUsersInfo}> 
                <Avatar className={classes.feedbackUsersAvatar}> V </Avatar>
                <div className={classes.feedbackUsersDetailedInfo}>
                  <div style={{fontSize: '26px', fontWeight: 'bold'}}> Triệu Sơn Hà </div> 
                  <hr className={classes.feedbackUsersDetailedInfoLine}/>
                  <div style={{fontSize: '18px'}}> Product Manager - Citigo </div>
                </div>
              </div>
              <div className={classes.feedbackText}> 
                Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các 
                học sinh THPT tiếp cận với
                CNTT trong tương lai. 
                Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các học sinh 
                THPT tiếp cận với CNTT tương lai
              </div>
            </div>
        </div>
      </div>
    </Grid>
  );
}
