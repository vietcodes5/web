import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,Button, Typography,Card,IconButton
  } from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LayersIcon from '@material-ui/icons/Layers';

//Upcoming event
import UpcomingEvent from '../components/UpcomingEvent';
 
//For Review
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

//Style
const useStyles = makeStyles((theme) => ({
    container:{
        maxwidth: '100%',
        height: 'auto',
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
        textAlign:'center',
        width:'465px',
        fontSize:'16px',
        fontFamily:'Roboto',
        color:'white',
    },
    open:{
        marginTop:'7vh',
        textAlign:'center',
        fontWeight:'bold',
    },
    open1:{
        fontSize:'xx-large',
        textAlign:'center',
        fontWeight:'bold',
    },
    open2:{
        fontSize:'x-large',
        fontWeight:'bold',
    },
    sub1:{
        color:'#566B72',
        textAlign:'center',
        marginBottom:'5vh',
        fontWeight:'bold',
    },
    sub:{
        color:'#566B72',
        textAlign:'center',
        marginTop:'2vh',
        marginBottom:'2vh',
    },
    sub2:{
        color:'#566B72',
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
    },
    more:{
        marginTop:'10vh',
    },
    //For Review
    review:{
        background: '#FFFFFF',
        boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.2)',
        borderRadius: '16px',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5),
    },
    avatar:{
        height:'40px',
        width:'40px',
    },
    ava:{
        height:'inherit',
        width:'inherit',
    },
    //For Intro Section
    coverImg:{
        backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        maxheight:'591px',
        height:'591px',
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
        height:'140px',
        width: '140px',
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

//Main Page
export default function Home() {
    const classes = useStyles();
    return (
        <div id="home">
            <Grid container className={classes.coverImg}>
                <Grid container className={classes.bkIMG} direction="column" justify="center" alignItems="center">
                    <Typography className={classes.intro} color='primary' variant='h2'>Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam</Typography>
                    <Button className={classes.more} variant="contained" color="primary">Tìm hiểu thêm</Button>
                    <IconButton className={classes.down}>
                        <ArrowDownwardRoundedIcon className={classes.iconIMG} onClick='#'/>
                    </IconButton>
                </Grid>
            </Grid>    
            <div className={classes.container}>
                <Typography variant='h2'className={classes.open}>Vietcode qua những con số</Typography>
                <Typography variant='body1' textAlign='center' className={classes.sub}>Chặng đường Vietcode đã đi được 5 năm.<br></br> Dưới đây là những con số mà Vietcode đã để lại dấu ấn</Typography>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item md={3} xs={12}>
                        <div className={classes.iconContainer}>
                            <PeopleIcon className={classes.iconIMG} align='center'/>
                        </div>
                        <div>
                            <div className={classes.open1}>500</div>
                            <hr className={classes.hr} width='20%'></hr>
                            <div className={classes.sub1}>thành viên</div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className={classes.iconContainer}>
                            <LayersIcon className={classes.iconIMG}/>
                        </div>
                        <div>
                            <div className={classes.open1}>5</div>
                            <hr className={classes.hr} width='20%'></hr>
                            <div className={classes.sub1}>Năm</div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className={classes.iconContainer}>
                            <EventIcon className={classes.iconIMG}/>
                        </div>
                        <div>
                            <div className={classes.open1}>20</div>
                            <hr className={classes.hr} width='20%'></hr>
                            <div className={classes.sub1}>Sự kiện</div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className={classes.iconContainer}>
                            <WorkOutlineIcon className={classes.iconIMG}/>
                        </div>
                        <div>
                            <div className={classes.open1}>10</div>
                            <hr className={classes.hr} width='20%'></hr>
                            <div className={classes.sub1}>dự án</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.upcontainer} background='#34B6CF'>
                <UpcomingEvent/>
            </div>
            <div className={classes.container}>
                <Typography variant='h3' className={classes.open}>Mọi người nói gì về Vietcode</Typography>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={4} wrap>
                    <Grid item md={3} xs={12}>
                        <Review review = 'aaaaaaaaa' name='demo' title ='demo'/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Review review = 'aaaaaaaaa' name='demo' title ='demo'/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Review review = 'aaaaaaaaa' name='demo' title ='demo'/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}