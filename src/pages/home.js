import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,Button, Typography,Card,IconButton
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
    container:{
        maxWidth: '100%',
        height: 'auto',	        
        '@media screen and (max-width: 800px)': {
          height: 'auto',
          display:'flex',
          flexFlow:'column nowrap',
        },
        background: '#FFFFFF',
        display:'flex',
        flexFlow:'column wrap',
        padding: theme.spacing(2),
    },
    upcontainer:{
        maxwidth: '100%',
        height: 'auto',
        background: '#309DBE',
        display:'flex',
        flexFlow:'column wrap',
        padding: theme.spacing(2),
    },
    hr:{
        border:'1px #309DBE solid',
    },
    //text
    intro:{
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
    open:{
        marginTop:'3vh',
        marginBottom:'5vh',
        textAlign:'center',
        color: theme.palette.text.main,
        fontWeight:'bold',
        fontSize: '250%',
    },
    open1:{
        fontSize:'xx-large',
        textAlign:'center',
        fontWeight:'bold',
        color: theme.palette.text.main,
    },
    open2:{
        fontSize:'x-large',
        fontWeight:'bold',
        color: theme.palette.text.main,
    },
    sub1:{
        textAlign:'center',
        marginBottom:'5vh',
        fontWeight:'bold',
        color: theme.palette.text.main,
    },
    sub:{
        marginTop:'2vh',
        marginBottom:'4vh',
        fontSize: '20px',
        color: theme.palette.text.main,
    },
    sub3:{
        textAlign:'center',
        marginTop:'2vh',
        marginBottom:'4vh',
        fontSize: '20px',
        color: theme.palette.text.main,
    },
    sub2:{
        color: theme.palette.text.main,
        fontWeight:'bold',
    },
    //button
    down:{
        borderRadius:'100%',
        border:'1px white solid',
        height:'40px',
        width:'40px',
        color:'white',
        bottom:'3vh',
        position:'absolute',
        '&:hover': {
            background: '#777',
          },  
    },
    more:{
        background: theme.palette.primary.main,
        width: '160px',
        height: '50px',
        borderRadius: '50px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
        fontSize: '80%',
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
    //For Review
    review:{
        background: '#FFFFFF',
        boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.2)',
        borderRadius: '16px',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5),
        height:'initial',
    },
    avatar:{
        height:'8vh',
        width:'8vh',
    },
    ava:{
        height:'inherit',
        width:'inherit',
    },
    //For Intro Section
    coverImg:{
        backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        maxheight:'800px',
        height:'800px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    bkIMG:{
        background:'rgba(0, 0, 0, .5);',
        width:'100%',
        position:'relative'
    },
    //For Icon Section
    iconIMG:{
        color:'#FFFFFF',
        height: '50%',
        width: '50%',
        position: 'absolute',
        left: '25%',
        right: '25%',
        top: '25%',
        bottom: '25%',
    },
    iconContainer:{
        backgroundColor:'#34B6CF',
        height:'150px',
        width: '150px',
        borderRadius:'100%',
        position:'relative',
        margin:'0% auto 5% auto',
    }
  }));

//Review
function Review(props){
    const classes=useStyles();
    return(
        <Card className={classes.review}>
            <CardContent spacing={4}>
                <Grid container spacing={2}  direction="row" justify="space-between" alignItems="center">
                    <Grid item md={3} xs={12}>
                        <Avatar className={classes.avatar}>
                            <img src={props.imgSource} className={classes.ava} alt={props.name}></img>
                        </Avatar>
                    </Grid>
                    <Grid item md={8} xs={12}>
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
// function topFunction() {
//     const to = document.getElementById('here');
//     console.log('1');
//   }
//Main Page
export default function Home() {
    const classes = useStyles();
    return (
        <div id="home">
            <Grid container className={classes.coverImg}>
                <Grid container className={classes.bkIMG} direction="column" justify="center" alignItems="center">
                    <Typography className={classes.intro} color='primary' variant='h2'>Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam</Typography>
                    <Button className={classes.more} variant="contained" color="primary">Tìm hiểu thêm</Button>
                    <IconButton className={classes.down} href='#here'>
                        <ArrowDownwardRoundedIcon className={classes.iconIMG} />
                    </IconButton>
                </Grid>
            </Grid>    
            <div className={classes.container} id='here'>
                <Typography variant='h2'className={classes.open}>Vietcode qua những con số</Typography>
                <Typography variant='body1' className={classes.sub3}>Chặng đường Vietcode đã đi được 5 năm.<br></br> Dưới đây là những con số mà Vietcode đã để lại dấu ấn</Typography>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item md={2} xs={12}>
                        <div className={classes.iconContainer}>
                            <PeopleIcon className={classes.iconIMG} align='center'/>
                        </div>
                        <div>
                            <div className={classes.open1}>500</div>
                            <hr className={classes.hr} width='10%'></hr>
                            <div className={classes.sub1}>thành viên</div>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <div className={classes.iconContainer}>
                            <SpaIcon className={classes.iconIMG}/>
                        </div>
                        <div>
                            <div className={classes.open1}>5</div>
                            <hr className={classes.hr} width='10%'></hr>
                            <div className={classes.sub1}>năm</div>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <div className={classes.iconContainer}>
                            <EventIcon className={classes.iconIMG}/>
                        </div>
                        <div>
                            <div className={classes.open1}>20</div>
                            <hr className={classes.hr} width='10%'></hr>
                            <div className={classes.sub1}>sự kiện</div>
                        </div>
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <div className={classes.iconContainer}>
                            <BusinessCenterIcon className={classes.iconIMG}/>
                        </div>
                        <div>
                            <div className={classes.open1}>10</div>
                            <hr className={classes.hr} width='10%'></hr>
                            <div className={classes.sub1}>dự án</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.upcontainer}>
                <UpcomingEvent/>
            </div>
            <div className={classes.container}>
                <Typography variant='h3' className={classes.open}>Mọi người nói gì về Vietcode</Typography>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={4}>
                    <Grid item md={3} xs={12}>
                        <Review review = 
                        'Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các 
                        học sinh THPT tiếp cận với
                        CNTT trong tương lai. 
                        Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các học sinh 
                        THPT tiếp cận với CNTT tương lai'
                        name='Triệu Sơn Hà' title ='Product Manager - Citigo'/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Review review = 
                        'Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các 
                        học sinh THPT tiếp cận với
                        CNTT trong tương lai. 
                        Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các học sinh 
                        THPT tiếp cận với CNTT tương lai'
                        name='Triệu Sơn Hà' title ='Product Manager - Citigo'/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Review review = 
                        'Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các 
                        học sinh THPT tiếp cận với
                        CNTT trong tương lai. 
                        Vietcode là một dự án rất thú vị và bổ ích, hỗ trợ các học sinh THPT tiếp cận với CNTT tương lai'
                        name='Triệu Sơn Hà' title ='Product Manager - Citigo'/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
