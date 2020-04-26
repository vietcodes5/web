import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Avatar,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
const useStyles = makeStyles(theme => ({
  footer: {
    background: '#113d4a',
    color: 'white',
    padding: '20px',
    margin: '0',
    maxWidth: '100%',
    width: '100%',
  },
  container: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    margin: '10px',
    height: '35px',
    width: '35px',
  },
  textTitle: {
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '8px',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify='space-around'
      direction='row'
      alignItems='flex-start'
      className={classes.footer}
      spacing={3}
    >

      <Grid item xs={12} md={4}
        className={classes.container}
      >
        <Grid container alignItems='center' direction='column' justify='center' spacing={1}>
          <Grid item>
            <Typography variant='h4' className={classes.textTitle}>Vietcode Project</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>© {new Date().getFullYear()} Vietcode Official Website</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>Website designed by Vietcode Xteam</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} className={classes.container}>
        <Grid container alignItems='center' direction='column' justify='center' spacing={1}>
          <Grid item>
            <Typography variant="h5" className={classes.textTitle}>LIÊN HỆ</Typography>
          </Grid>
          <Grid item container alignItems='center' direction='row' justify='center'>
            <MailOutlineIcon className={classes.icon} />
            <Typography variant='body1' className={classes.textBody}>vietcodeproject@gmail.com</Typography>
          </Grid>
          <Grid item container alignItems='center' direction='row' justify='center'>
            <PhoneInTalkOutlinedIcon className={classes.icon} />
            <Typography variant='body1'>+84911090502</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} className={classes.container}>
        <Grid container alignItems='center' direction='column' justify='space-around' spacing={3}>
          <Grid item>
            <Typography variant="h5" className={classes.textTitle}> KẾT NỐI VỚI VIETCODE</Typography>
          </Grid>
          <Grid container direction='row' justify='center' spacing={3}>
            <a href="https://www.facebook.com/vietcode.org" target="_blank" rel="noopener noreferrer">
              <Avatar
                className={classes.avatar}
                alt="Facebook logo"
                src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png" />
            </a>
            <a href="https://www.instagram.com/vietcode/" target="_blank" rel="noopener noreferrer">
              <Avatar
                className={classes.avatar}
                alt="Insta logo"
                src="data:image/jpeg;base64,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"
              />
            </a>
            <a href="https://github.com/vietcodes5" target="_blank" rel="noopener noreferrer">
              <Avatar
                className={classes.avatar}
                alt="GitHub logo"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            </a>
          </Grid>
        </Grid>
      </Grid>

    </Grid >


  );
}
