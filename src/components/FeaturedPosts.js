import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Grid,
  Button
} from '@material-ui/core';

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    boxShadow: theme.shadow.header,
    position: 'relative',
    color: 'white',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_1028x578.v_1582751026.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '100px',
    height: '100%',
    '@media screen and (max-width: 800px)': {
      padding: '0px',
      paddingTop: '30px',
      paddingBottom: '30px',
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
  more: {
    fontFamily: 'Cabin',
    background: theme.palette.primary.main,
    width: '120px',
    height: '40px',
    borderRadius: '50px',
    color: 'white',
    fontSize: '70%',
    letterSpacing: '2px',
    transition: '.5s',
    '&:hover': {
      background: 'white',
      color: theme.palette.primary.main,
      border: '1px solid',
    },
  },
  mainFeaturedPostBox: {
    padding: theme.spacing(4),
    display: 'flex',
    margin: 'auto',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
    '@media screen and (max-width: 800px)': {
      paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    },
  },
  mainFeaturedPostContent: {
    position: 'relative',
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
    <Paper className={classes.mainFeaturedPost}>
      <Grid container justify='center' alignItems='center'>
        <Grid item md={10}>
          
          <div className={classes.mainFeaturedPostContent}>
          <Paper className={classes.mainFeaturedPostBox}>
            <Typography 
              variant="h3" 
              color="inherit" 
              align='center'
              style={{
                marginBottom: '20px', 
                color: '#707070', 
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
            <Button variant="contained" color="primary" className={classes.more}>
              <Link to="posts/zsmEbTYEgwUy34taENU1">
                Đọc thêm
              </Link>
            </Button>
            </Paper>
          </div>
          
        </Grid>
      </Grid>
    </Paper>
  )
}

export default FeaturedPosts;