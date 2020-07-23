import React from 'react';
import {
  Grid, Typography, Card
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Images
import aboutImg1 from '../images/About/aboutImg1.jpg';
import aboutImg2 from '../images/About/aboutImg2.jpg';
import aboutImg3 from '../images/About/aboutImg3.jpg';
import aboutImg4 from '../images/About/aboutImg4.jpg';

import chuTichDangKinh from '../images/About/Members/chuTichDangKinh.jpg';
import suKien from '../images/About/Members/suKien.jpg';
import truyenThong from '../images/About/Members/truyenThong.jpg';
import meDes from '../images/About/Members/meDes.jpg';
import chuyenMon from '../images/About/Members/chuyenMon.jpg';
import taiChinh from '../images/About/Members/taiChinh.jpg';
import hauCan from '../images/About/Members/hauCan.jpg'
import nhanSu from '../images/About/Members/nhanSu.jpg';


const useStyles = makeStyles((theme) => ({
  introContainer: {
    backgroundAttachment: 'fixed',
    background: `url(${aboutImg4}) center no-repeat`,
    backgroundSize: 'cover',
    height: '800px',
    '@media not all and (min-resolution:.001dpcm)': {
      '@supports (-webkit-appearance:none)': {
        backgroundAttachment: 'scroll',
      },
    },
  },
  chamNgonCuocSong: {
    backgroundAttachment: 'fixed',
    background: `url(${aboutImg3}) center no-repeat`,
    backgroundSize: 'cover',
    '@media not all and (min-resolution:.001dpcm)': {
      '@supports (-webkit-appearance:none)': {
        backgroundAttachment: 'scroll',
      },
    },
  },
  cardMask: {

    height: 'inherit',
    width: 'inherit',
    transition: '.5s',
    '&:hover': {
      background: 'black',
      opacity: '0.4',
    },
  },
  sub2: {
    fontFamily: 'Cabin',
    color: '#F7F8FA',
    fontWeight: 'bold',
  },
  open2: {
    fontFamily: 'Cabin',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: '#F7F8FA',
  },
  hr: {
    border: '1px #F7F8FA solid',
    width: '200px'
  },
  membercontainer: {
    width: '300px',
    height: '400px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
    '@media screen and (max-width: 400px)': {
      width: '200px',
      height: '300px',
    },
  },
  Membertext: {
    fontFamily: 'Cabin',
    padding: '4vh',
    textAlign: 'center',
    color: theme.palette.text.main,
    fontWeight: 'bold',
    fontSize: '250%',
  },
  Quotetext: {
    color: '#F7F8FA',
    fontWeight: 'bold',
    fontSize: '500%',
    '@media screen and (max-width: 800px)': {
      fontSize: '400%',
    },
  },
  Aboutus: {
    padding: '4vh',
    textAlign: 'center',
    color: '#F7F8FA',
    fontWeight: 'bold',
    fontSize: '250%',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
  },
  review: {
    color: '#F7F8FA',
    textAlign: 'center',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
  },
  img1: {
    background: `url(${aboutImg1}) center no-repeat`,
    backgroundSize: 'cover',
    marginRight: '-10vh',
    width: '550px',
    height: '400px',
    marginTop: '5vh',
  },
  img2: {
    height: '400px',
    marginLeft: '-15vh',
    display: 'flex',
    flexFlow: 'row',
  },
  blue: {
    background: '#309DBE',
    height: 'inherit',
    width: '60%',
  },
  inside: {
    background: `url(${aboutImg2}) center no-repeat`,
    backgroundSize: 'cover',
    width: '500px',
    height: '300px',
    marginLeft: '-300px',
    margin: 'auto',
    '@media screen and (max-width: 800px)': {
      marginLeft: '-150px',
    },
  },
  boxleft1: {
    width: '100%',
    padding: '3vh',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
  },
}))

function Membercard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={5} lg={4}
      style={{
        margin: 'auto',
        marginTop: '3vh',
        marginBottom: '2vh',
      }}>
      <a href={props.link} target='_blank' rel="noopener noreferrer">
        <Card className={classes.membercontainer}
          style={{
            margin: 'auto',
            background: `url('${props.memberIMG}')  no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}>
          <Grid className={classes.cardMask}>
          </Grid>
          <Grid
            style={{
              position: 'absolute',
              left: '10%',
              bottom: '10px'
            }}>

            <Typography className={classes.open2}>{props.name}</Typography>
            <hr className={classes.hr} align='left'></hr>
            <Typography className={classes.sub2}>{props.title}</Typography>

          </Grid>

        </Card >
      </a>
    </Grid >

  )
}

export default function About() {
  const classes = useStyles();

  return (
    <div id="about" style={{ background: '#D3D3D3', margin: 'auto' }}>
      <Grid
        className={classes.introContainer}
      >
        <Grid
          container
          id='opening'
          justify='center'
          alignContent='center'
          alignItems='center'
          direction='column'
          style={{
            background: 'rgb(0, 0, 0,0.3)',
            height: '86%',
          }}>
          <Grid style={{
            width: '60%',
            margin: 'auto',

          }}>
            <Typography variant='h1' className={classes.Aboutus}>About Us</Typography>

            <Typography variant='h4' className={classes.review}>
              Vietcode Project - tổ chức giáo dục phi lợi nhuận được thành lập từ năm 2016 và phát huy bởi các bạn trẻ yêu thích Công nghệ thông tin với mong muốn được cống hiến, học hỏi, giao lưu rộng rãi trong lĩnh vực ngày càng phát triển này.
              <br></br>
              <br></br>
              Hoạt động qua 5 mùa, Vietcode vẫn luôn giữ sứ mệnh truyền cảm hứng, đam mê, gắn kết CNTT tới các bạn trẻ: hỗ trợ những người có định hướng CNTT, đồng thời là cầu nối quan trọng cho các bạn trẻ với các dự án, công ty CNTT trên địa bàn Hà Nội.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          id='opening'
          justify='center'
          alignContent='center'
          alignItems='center'
          direction='column'
          style={{
            background: 'rgb(0, 0, 0,0.3)',
            height: '14%',
          }}>
        </Grid>
      </Grid>

      <Grid>
        <Grid
          id='trang1'
          style={{
            background: '#F7F8FA',
            width: '80%',
            margin: 'auto',
            paddingBottom: '5vh',
          }}>
          <Grid container
            id='section1'
            style={{
              marginTop: '-10vh',
              height: '120%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',

            }}>
            <Grid item xs={12} md={6}
              id='boxleft'
              align='right'
              className={classes.boxleft1}
            >
              <Typography variant="h4"><b>HISTORY</b></Typography>
              <br></br>
              <Typography>
                Những bước đi đầu tiên
                <br></br>
                Năm 2016, Vietcode được thành lập và nhanh chóng đạt được sự thu hút của đông đảo các bạn học sinh, các nhà tài trợ bởi những hoạt động như Định hướng CNTT, Quyên góp sách tin học,...v.v… Đặc biệt là giải nhất cuộc thi Young Community Builders tổ chức bởi Youth Ventures Vietnam đã làm nên uy tín của tổ chức.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} id='boxright' className={classes.img1}></Grid>
          </Grid>

          <Grid container
            id='section2'
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-evenly',
              '@media screen and (maxWidth: 800px)': {
                flexDirection: 'row',
              },

            }}>
            <Grid item id='boxright' xs={12} md={6} align='left' className={classes.boxleft1}>
              <Typography>
                Năm 2017 trở đi, Vietcode nhận được sự tin tưởng, bắt tay hợp tác với nhiều tổ chức, công ty công nghệ khác như Young IT, MindX (Techkid), ITPlus,..v.v… tập trung tổ chức những sự kiện thành công, uy tín, đẩy lại nhiều ấn tượng sâu sắc. Song song với việc đó là việc cùng nhau học lập trình trong nội bộ, được những dự án, tổ chức lớn nhỏ tín nhiệm giao việc xây dựng website, chatbot,...v.v...
                <br></br>
                <br></br>
                Tính đến hiện tại, Vietcode đã tổ chức được rất nhiều sự kiện từ workshop, giảng dạy, trải nghiệm,... đến các cuộc thi như Hackathon,...v.v… để luôn duy trì, giữ vững sứ mệnh đưa Công nghệ thông tin tiếp cận tới giới trẻ.
              </Typography>
            </Grid>
            <Grid item id='boxleft' className={classes.img2} xs={12} md={6}>
              <Grid className={classes.blue}></Grid>
              <Grid className={classes.inside}></Grid>
            </Grid>



          </Grid>

        </Grid>

        <Grid container
          id='quotes'
          className={classes.chamNgonCuocSong}
          justify='center'
          alignItems='center'
          alignContent='center'
        >
          <Grid item
            xs={12}
            style={{
              background: 'rgb(0, 0, 0,0.6)',
              height: '100%',
              width: '100%',
            }}>
            <Grid container
              justify='center'
              alignItems='center'
              alignContent='center'
              style={{
                textAlign: 'center',
                height: '300px',
              }}
            >
              <Grid item>
                <Typography
                  variant='h3'
                  className={classes.Quotetext}
                >
                  Code sạch lên em ơi
                </Typography>
              </Grid>
            </Grid>
            <Grid container
              justify='center'
              alignItems='center'
              alignContent='flex-start'
              style={{
                textAlign: 'center',
                height: '150px',
                color: '#F7F8FA'
              }}
            >
              <Grid item>
                <Typography variant='h3'>
                  "VIETCODE S5"
                </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid id='trang2' style={{ background: '#F7F8FA', width: '80%', margin: 'auto' }}>
          <Grid
            align='center'
            className={classes.Membertext}>
            Our member
          </Grid>
          <hr style={{ border: '1px #309DBE solid', width: '80%' }}></hr>
          <Grid
            container
            id='membercontainer'
            spacing={2}
          >
            <Grid container style={useMediaQuery('(max-width: 1268px)') ? { width: '100%' } : { width: '70%', margin: 'auto' }}>
              <Membercard name='Nguyễn Trà My' title=' Chủ Tịch' memberIMG={chuTichDangKinh} link='https://www.facebook.com/chiffonng'></Membercard>
              <Membercard name='Bùi Hương Giang' title='Phó Chủ Tịch/Sự Kiện' memberIMG={suKien} link='https://www.facebook.com/zang2301'></Membercard>
            </Grid>
            <Membercard name='Nguyễn Tiểu Phương' title='Chuyên Môn' memberIMG={chuyenMon} link='https://www.facebook.com/tiuphun'></Membercard>
            <Membercard name='Lê Nguyệt Hà' title=' Tài Chính' memberIMG={taiChinh} link='https://www.facebook.com/nguyethale23'></Membercard>
            <Membercard name='Trịnh Thùy Trang' title=' Truyền Thông' memberIMG={truyenThong} link='https://www.facebook.com/Chang.Typo.373'></Membercard>
            <Membercard name='Dương Lâm Tuấn Anh' title='Med/Des' memberIMG={meDes} link='https://www.facebook.com/dlta2704'></Membercard>
            <Membercard name='Nguyễn Ngọc Linh Chi' title=' Hậu Cần' memberIMG={hauCan} link='https://www.facebook.com/nguyenngoc.linhchi.09'></Membercard>
            <Membercard name='Nguyễn Doãn Hoàng' title='Nhân Sự' memberIMG={nhanSu} link='https://www.facebook.com/kipiiler'></Membercard>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}
