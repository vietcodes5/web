import React from 'react';
import {
  Grid, Typography, Card
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  introContainer: {
    backgroundAttachment: 'fixed',
    background: `url('https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/85051707_1977725279039567_1408145121513308160_o.jpg?_nc_cat=111&_nc_sid=0debeb&_nc_ohc=1gwCcBxXgSEAX-7wE-M&_nc_ht=scontent.fhan2-1.fna&oh=e53ef3a30740d4f1061fe6c005f8f267&oe=5ED02017') center no-repeat`,
    backgroundSize: 'cover',
    height: '1000px',
    '@media not all and (min-resolution:.001dpcm)': {
      '@supports (-webkit-appearance:none)': {
        backgroundAttachment: 'scroll',
      },
    },
  },
  chamNgonCuocSong: {
    backgroundAttachment: 'fixed',
    background: `url('https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/73194715_1844271372384959_833124110966980608_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=5MK7W-A-XBkAX_YGp9I&_nc_ht=scontent.fhan2-4.fna&oh=04e5281549831f45957e26c25aeda038&oe=5ECE0F87') center no-repeat`,
    backgroundSize: 'cover',
    '@media not all and (min-resolution:.001dpcm)': {
      '@supports (-webkit-appearance:none)': {
        backgroundAttachment: 'scroll',
      },
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
    background: `url('https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/86831364_1977724962372932_9082883158386409472_o.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=19x3mhd0F9QAX8r8W4p&_nc_ht=scontent.fhan2-4.fna&oh=a6b25a04f3ec33d5714699f624817d3d&oe=5ECF29C0') center no-repeat`,
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
    background: `url('https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/86697047_1977726942372734_2580193275130413056_o.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=0a6wre0wJe4AX9XhgP2&_nc_ht=scontent.fhan2-4.fna&oh=d65a2f9d10a9cc938eecf7a4447bfe0d&oe=5ECECB7B') center no-repeat`,
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
  }
}))

function Membercard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={5}
      style={{
        margin: 'auto',
        marginTop: '3vh',
        marginBottom: '2vh',
      }}>
      <Card className={classes.membercontainer}
        style={{
          margin: 'auto',
          background: `url('${props.memberIMG}')  no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}>
        <Grid style={{
          background: '#34B6CF',
          opacity: '0.5',
          height: 'inherit',
          width: 'inherit',
        }}>
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
    </Grid>
  )
}

export default function About(props) {
  const classes = useStyles();

  return (
    <div id="about" style={{ background: '#566B72', margin: 'auto' }}>
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
            background: 'rgb(52, 182, 207,0.5)',
            height: '86%',
          }}>
          <Grid style={{
            width: '60%',
            margin: 'auto',

          }}>
            <Typography variant='h1' className={classes.Aboutus}>About Us</Typography>
            <Typography variant='h4' className={classes.review}>Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam </Typography>
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
            background: 'rgb(52, 182, 207,0.5)',
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
              <Typography variant="h4">HISTORY</Typography>
              <br></br>
              <Typography>Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam </Typography>
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
              <Typography>Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam Dự án phi lợi nhuận thành lập vào năm 2016 với mục đích tạo cơ hội tiếp cận ngành Công nghệ thông tin cho học sinh, sinh viên tại Hà Nội, Việt Nam </Typography>
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
              background: 'rgb(52, 182, 207,0.6)',
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
                  Châm ngôn cuộc sống
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
                  "Không làm mà đòi ăn..."
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
            <Membercard name='Nguyễn Trà My' title=' Chủ Tịch' memberIMG='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/95264672_2906574359396943_4975749123136290816_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=jOHtwB-J2z4AX-K9MXc&_nc_ht=scontent.fhan2-1.fna&oh=bc5944674efb3eccabcbb042a588ec50&oe=5ECEC460'></Membercard>
            <Membercard name='Bùi Hương Giang' title='Phó Chủ Tịch/Sự Kiện' memberIMG='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/74238365_2412546238965631_7646729528638701568_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_ohc=0OwSRHvXt1gAX-4kI4L&_nc_ht=scontent.fhan2-1.fna&oh=3a6aa8caf1d44469d4168a002e3f25be&oe=5ECCA921'></Membercard>
            <Membercard name='Nguyễn Tiểu Phương' title='Chuyên Môn' memberIMG='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/95683828_1337837803271521_5128150720465338368_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=PE1ZLSD058QAX9n4dVp&_nc_ht=scontent.fhan2-4.fna&oh=6abe43a46b27c32fab08d1ce4ed6a856&oe=5ECECAC0'></Membercard>
            <Membercard name='Lê Nguyệt Hà' title=' Tài Chính' memberIMG='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/82498930_1948180958660666_3939830907153678336_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=rnHMNGdeFlYAX_3R1Qb&_nc_ht=scontent.fhan2-1.fna&oh=0f2bd872931f972ef24313d0cd3a5159&oe=5ECE15BF'></Membercard>
            <Membercard name='Trịnh Thùy Trang' title=' Truyền Thông' memberIMG='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/83078733_1948188875326541_8393976460011896832_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_ohc=GjjSFO4Ce5AAX92D4VC&_nc_ht=scontent.fhan2-1.fna&oh=9ebfa52018272f642744749f45b389c6&oe=5ECDAA74'></Membercard>
            <Membercard name='Dương Lâm Tuấn Anh' title='Med/Des' memberIMG='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/95543257_244500846793559_6998439343845015552_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=mxUVUjxYDkAAX-KrM9e&_nc_ht=scontent.fhan2-1.fna&oh=9bb22b881667a0cac1ba3bf2bbc9eef9&oe=5ECD0252'></Membercard>
            <Membercard name='Nguyễn Ngọc Linh Chi' title=' Hậu Cần' memberIMG='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/95321117_2892483204205601_7917348546011987968_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=DWWQrrwT7xQAX9tUnq5&_nc_ht=scontent.fhan2-1.fna&oh=a9910cff150dea3a5b3dfd52127b6f6b&oe=5ECEF620'></Membercard>
            <Membercard name='Nguyễn Doãn Hoàng' title='Nhân Sự' memberIMG='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/82868852_1948180841994011_6743153196509691904_o.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=Iy8BZ-z1RkYAX_mRmVk&_nc_ht=scontent.fhan2-4.fna&oh=c5eee2d7df42a1cfd5896e7bd459c7b6&oe=5ECCB871'></Membercard>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}