import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Grid, Button, Typography, Card, IconButton
} from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';
import EventIcon from '@material-ui/icons/Event';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

//Upcoming event
import UpcomingEvent from '../components/UpcomingEvent';

//For Review
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

//Style
const useStyles = makeStyles((theme) => ({
  pictureContainer: {
    background: 'url(\'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/87028986_1977725495706212_2381361457833967616_o.jpg?_nc_cat=106&_nc_sid=0be424&_nc_oc=AQnepcUIwbNsa4ELO7lj0cPMC64TYwel859li1-ih1lC0ERWAqIaS_eNzaBQ6vzQPGH-rOPlPSBS1ht695LrEkjK&_nc_ht=scontent.fhan3-3.fna&oh=c78a2873470495620f353bfde2c498e2&oe=5EC28FF2\')',
    maxheight: '800px',
    height: '500px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '@media screen and (max-width: 800px)': {
      height: '400px',
    },
    '@media not all and (min-resolution:.001dpcm)': {
      '@supports (-webkit-appearance:none)': {
        backgroundAttachment: 'scroll',
      },
    },
  },
  pictureContainer1: {
    background: 'url(\'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/33717427_1378719945606773_2087821359643099136_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_oc=AQlqi6VGtYQvGqUeHtBUAAw--cAHcRa8K0nFdjkrOf_ecmwiQsk_d5hJD8q_rNN-IlU&_nc_ht=scontent.fhan5-7.fna&oh=82303f71fbbfaaebf025be4510635774&oe=5EC1B2A6\')',
    maxheight: '800px',
    height: '500px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '@media screen and (max-width: 800px)': {
      height: '400px',
    },
    '@media not all and (min-resolution:.001dpcm)': {
      '@supports (-webkit-appearance:none)': {
        backgroundAttachment: 'scroll',
      },
    },
  },
  container: {
    maxWidth: '100%',
    background: '#FFFFFF',
    display: 'flex',
    flexFlow: 'column wrap',
    padding: theme.spacing(2),
    '@media screen and (max-width: 800px)': {
      flexFlow: 'column nowrap',
    },
  },
  upcontainer: {
    maxwidth: '100%',
    background: '#309DBE',
    padding: theme.spacing(2),
  },
  hr: {
    border: '1px #309DBE solid',
  },
  //text
  intro: {
    fontFamily: 'Cabin',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    color: 'white',
    fontSize: '130%',
    maxWidth: '750px',
    '@media screen and (max-width: 750px)': {
      fontSize: '110%',
      maxWidth: '300px',
    },
    textAlign: 'center',
  },
  open: {
    fontFamily: 'Cabin',
    marginTop: '3vh',
    marginBottom: '5vh',
    textAlign: 'center',
    color: theme.palette.text.main,
    fontWeight: 'bold',
    fontSize: '250%',
  },
  open1: {
    fontFamily: 'Cabin',
    fontSize: 'xx-large',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.text.main,
  },
  open2: {
    fontFamily: 'Cabin',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: theme.palette.text.main,
  },
  sub1: {
    fontFamily: 'Cabin',
    textAlign: 'center',
    fontSize: '120%',
    marginBottom: '5vh',
    fontWeight: 'bold',
    color: theme.palette.text.main,
  },
  sub: {
    fontFamily: 'Cabin',
    marginTop: '2vh',
    marginBottom: '4vh',
    fontSize: '20px',
    color: theme.palette.text.main,
  },
  sub3: {
    fontFamily: 'Cabin',
    textAlign: 'center',
    marginTop: '2vh',
    marginBottom: '4vh',
    fontSize: '20px',
    color: theme.palette.text.main,
  },
  sub2: {
    fontFamily: 'Cabin',
    color: theme.palette.text.main,
    fontWeight: 'bold',
  },
  //button
  down: {
    borderRadius: '100%',
    border: '1px white solid',
    height: '40px',
    width: '40px',
    color: 'white',
    bottom: '3vh',
    position: 'absolute',
    '&:hover': {
      background: '#777',
    },
  },
  more: {
    fontFamily: 'Cabin',
    background: theme.palette.primary.main,
    width: '160px',
    height: '50px',
    borderRadius: '50px',
    color: 'white',
    marginTop: '30px',
    fontSize: '80%',
    letterSpacing: '2px',
    transition: '.5s',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.main,
      border: '1px solid',
    },
  },
  //For Review
  review: {
    fontFamily: 'Cabin',
    background: '#FFFFFF',
    boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.2)',
    borderRadius: '16px',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
  },
  avatar: {
    height: '8vh',
    width: '8vh',
  },
  //For Intro Section
  coverImg: {
    maxheight: '800px',
    height: '800px',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    background: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80') center no-repeat`,
    '@media not all and (min-resolution:.001dpcm)': {
      '@supports (-webkit-appearance:none)': {
        backgroundAttachment: 'scroll',
      },
    },
  },
  bkIMG: {
    background: 'rgba(0, 0, 0, .5);',
    width: '100%',
    position: 'relative',
  },
  //For Icon Section
  iconIMG: {
    color: '#FFFFFF',
    height: '50%',
    width: '50%',
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: '25%',
    bottom: '25%',
  },
  iconContainer: {
    backgroundColor: '#34B6CF',
    height: '150px',
    width: '150px',
    borderRadius: '100%',
    position: 'relative',
    margin: '0% auto 5% auto',
  },
  paddingW: {
    padding: '50px 0px 50px 0px',
    background: 'white'
  }
}));

//Scroller
function Scroller() {
  document.getElementById('here').scrollIntoView({
    behavior: 'smooth',
  });
}
//CountUp

const Ticker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0} duration={4}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <div className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

//Review
function Review(props) {
  const classes = useStyles();
  return (
    <Card className={classes.review}>
      <CardContent spacing={4}>
        <Grid container spacing={2} direction="row" justify="space-between" alignItems="center">
          <Grid item md={4} xs={12}>
            <Avatar className={classes.avatar}>
              <img src={props.imgSource} width='100%' height='100%' alt={props.name}></img>
            </Avatar>
          </Grid>
          <Grid item md={9} xs={12}>
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

//Main Page
export default function Home() {
  const classes = useStyles();
  return (
    <div id='home'>
      <Grid container className={classes.coverImg}>
        <Grid container className={classes.bkIMG} direction='column' justify='center' alignItems='center'>
          <Typography className={classes.intro} color='primary' variant='h2'>
            Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam
          </Typography>
          <Link
            key='About'
            to='/about'
          >
            <Button className={classes.more} variant='contained' color='primary'>
              Tìm hiểu thêm
          </Button>
          </Link>
          <IconButton className={classes.down} onClick={Scroller} >
            <ArrowDownwardRoundedIcon className={classes.iconIMG} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container id='here' className={classes.paddingW}>
        <Grid container className={classes.container}>
          <Typography variant='h2' className={classes.open}>
            Vietcode qua những con số
        </Typography>
          <Typography variant='body1' className={classes.sub3}>
            Chặng đường Vietcode đã đi được 5 năm.<br></br> Dưới đây là những con số mà Vietcode đã để lại dấu ấn
        </Typography>
          <Grid container direction='row' justify='space-evenly' alignItems='center'>
            <Grid item md={2} xs={12}>
              <div className={classes.iconContainer}>
                <PeopleIcon className={classes.iconIMG} align='center' />
              </div>
              <div>
                <div className={classes.open1}>
                  <Ticker end={500} />
                </div>
                <hr className={classes.hr} width='10%'></hr>
                <div className={classes.sub1}>thành viên</div>
              </div>
            </Grid>
            <Grid item md={2} xs={12}>
              <div className={classes.iconContainer}>
                <SpaIcon className={classes.iconIMG} />
              </div>
              <div>
                <div className={classes.open1}>
                  <Ticker end={5} />
                </div>
                <hr className={classes.hr} width='10%'></hr>
                <div className={classes.sub1}>năm</div>
              </div>
            </Grid>
            <Grid item md={2} xs={12}>
              <div className={classes.iconContainer}>
                <EventIcon className={classes.iconIMG} />
              </div>
              <div>
                <div className={classes.open1}>
                  <Ticker end={20} />
                </div>
                <hr className={classes.hr} width='10%'></hr>
                <div className={classes.sub1}>sự kiện</div>
              </div>
            </Grid>
            <Grid item md={2} xs={12}>
              <div className={classes.iconContainer}>
                <BusinessCenterIcon className={classes.iconIMG} />
              </div>
              <div>
                <div className={classes.open1}>
                  <Ticker end={10} />
                </div>
                <hr className={classes.hr} width='10%'></hr>
                <div className={classes.sub1}>dự án</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.pictureContainer}>
      </div>
      <div className={classes.upcontainer}>
        <UpcomingEvent />
      </div>
      <div className={classes.pictureContainer1}></div>
      <div className={classes.container} style={{ paddingBottom: '100px' }}>
        <Typography variant='h3' className={classes.open}>
          Mọi người nói gì về Vietcode
        </Typography>
        <Grid container direction='row' justify='space-around' alignItems='center' spacing={4}>
          <Grid item md={3} xs={12}>
            <Review review='Im lặng là vàng' name='Lê Minh Đức' title='Cố vấn Chuyên môn' imgSource='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/95663922_540938293260314_7859982166782902272_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=jLlHOSAxKzMAX_AjwBg&_nc_ht=scontent.fhan2-1.fna&oh=b0fb414e73b986ddd30d51f320bbd0d5&oe=5ED9A22B' />
          </Grid>
          <Grid item md={3} xs={12}>
            <Review review='Có làm thì mới có ăn, không làm mà đòi ăn thì ăn <3 ăn <3' name='Nguyễn Mạnh Hùng' title='Thành viên ban Chuyên Môn S5' imgSource='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-0/p206x206/80534645_733505860492225_7696095758184873984_n.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_oc=AQlQUjDVCSaI-cKW8T1XfOqXiyevOCvhtZzpd_Lo4025l6Y35sgzDLg1ysGAkJ92E8o&_nc_ht=scontent.fhan5-3.fna&_nc_tp=6&oh=c02e709948670951f5f85dc817a5bb3b&oe=5EDC7724' />
          </Grid>
          <Grid item md={3} xs={12}>
            <Review imgSource='https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/95451678_578610833007796_1237769133295140864_n.jpg?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=xCLskLb2KKUAX_mseWj&_nc_ht=scontent-hkt1-1.xx&oh=b9c93617bec0c4ae8db469ee17772306&oe=5ED91C5F' review='Hay lắm các bạn ạ' name='Mèo' title='Giám đốc sản phẩm' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
