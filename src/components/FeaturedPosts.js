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
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: 'auto',
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
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              NETFLIX - TỪ 40$ TIỀN PHẠT ĐẾN ĐẾ CHẾ TRUYỀN HÌNH TRỰC TUYẾN 152 TỈ$
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Người ta nhắc về Netflix như một dịch vụ xem phim hàng đầu mà một người không thể không biết đến, nhắc về Netflix là nghĩ ngay tới những series làm mưa làm gió: Stranger Things, House of Cards, The Crown… Chỉ với 15 đô một tháng, người dùng Netflix toàn cầu có thể truy cập vào kho phim gần như vô tận. Xem chán chê phim của Netflix, nhưng liệu ta đã biết gì về người khổng lồ mới chỉ 20 năm tuổi này?
            </Typography>
            <Button variant="contained" color="primary">
              <Link to="posts/zsmEbTYEgwUy34taENU1">
                Đọc thêm
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default FeaturedPosts;