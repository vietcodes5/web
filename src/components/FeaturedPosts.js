import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    boxShadow: theme.shadow.header,
    padding: '100px',
    paddingLeft: '250px',
    paddingRight: '250px',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(https://lh3.googleusercontent.com/D88VPn13kN3AVtuqOuTWkXkZsk3MdlC2R11irE3Z1dpWWJDGU-Cqr-PiCR31VoUb1wc)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: '1s',
    '@media screen and (min-width: 1400px)': {
      '&:hover': {
        padding: '250px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://lh3.googleusercontent.com/D88VPn13kN3AVtuqOuTWkXkZsk3MdlC2R11irE3Z1dpWWJDGU-Cqr-PiCR31VoUb1wc)',
      },
    },
    '@media screen and (max-width: 1400px)': {
      padding: '0px',
      paddingTop: '5px',
      paddingBottom: '5px',
      '&:hover': {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://lh3.googleusercontent.com/D88VPn13kN3AVtuqOuTWkXkZsk3MdlC2R11irE3Z1dpWWJDGU-Cqr-PiCR31VoUb1wc)',
      },
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostBox: {
    color: 'white',
    background: 'transparent',
    padding: theme.spacing(4),
    display: 'flex',
    margin: 'auto',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
    '@media screen and (max-width: 800px)': {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function FeaturedPosts(props) {
  const classes = useStyles();

  return (
    <Link to="posts/zsmEbTYEgwUy34taENU1">
    <div className={classes.mainFeaturedPost}>
      <Grid container justify='center' alignItems='center'>
        <Grid item md={10}>
          
          <div className={classes.mainFeaturedPostContent}>
          <div className={classes.mainFeaturedPostBox}>
            <Typography 
              variant="h3" 
              align='center'
              style={{
                marginBottom: '20px', 
                fontWeight: 'bold',
              }}
            >
              Những gã khổng lồ giới công nghệ
            </Typography>
            <Typography component="h1" variant="h2" color="inherit" gutterBottom align='center'
            style={{
              fontWeight: 'bold',
            }}>
              NETFLIX - TỪ 40$ TIỀN PHẠT ĐẾN ĐẾ CHẾ TRUYỀN HÌNH TRỰC TUYẾN 152 TỈ$
            </Typography>
            <Typography variant="h5" color="inherit" paragraph align='center'>
              Người ta nhắc về Netflix như một dịch vụ xem phim hàng đầu mà một người không thể không biết đến, nhắc về Netflix là nghĩ ngay tới những series làm mưa làm gió: Stranger Things, House of Cards, The Crown… Chỉ với 15 đô một tháng, người dùng Netflix toàn cầu có thể truy cập vào kho phim gần như vô tận. Xem chán chê phim của Netflix, nhưng liệu ta đã biết gì về người khổng lồ mới chỉ 20 năm tuổi này?
            </Typography>
            </div>
          </div>
          
        </Grid>
      </Grid>
    </div>
    </Link>
  )
}

export default FeaturedPosts;