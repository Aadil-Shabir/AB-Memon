import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Typography, Button} from '@mui/material';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    marginTop: '1em',
  },
  typoContainer: {
    margin: '2.5em',
    color: 'tomato',
  },
  anchorTag: {
    textDecoration: 'none',
    marginLeft: '6px',
    color: 'tomato',
  },
});

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.typoContainer}>
        <Typography
          variant="h4"
          color="tomato"
          style={{fontFamily: 'Readex Pro'}}
        >
          Contact Me
        </Typography>
      </div>
      <div className={classes.typoContainer}>
        <Typography
          variant="h5"
          color="white"
          style={{fontFamily: 'Readex Pro'}}
        >
          Let&apos;s get a moment to remember together <br />
          I&apos;d love to hear from you
        </Typography>
      </div>
      <div className={classes.typoContainer}>
        <a
          href="mailto:aadil.shabir13@gmail.com"
          style={{textDecoration: 'none'}}
        >
          <Button variant="outlined" size="large">
            GET IN TOUCH!
          </Button>
        </a>
      </div>
      <div className={classes.typoContainer}>
        <Typography
          variant="h5"
          color="white"
          style={{fontFamily: 'Readex Pro'}}
        >
          or, hire me on
          <a
            href="https://www.upwork.com/freelancers/~010905b3ee1f1acb1d"
            className={classes.anchorTag}
          >
            Upwork
          </a>
        </Typography>
      </div>
      <div className={classes.typoContainer}>
        <a href="https://www.linkedin.com/in/aadil-shabir-31642b1b5/">
          <img src="https://img.icons8.com/fluency/64/000000/linkedin.png" />
        </a>
        <a href="https://twitter.com/ABMemon113">
          <img src="https://img.icons8.com/color/64/000000/twitter--v1.png" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008695171133">
          <img src="https://img.icons8.com/fluency/64/000000/facebook.png" />
        </a>
        <a href="https://github.com/Aadil-Shabir">
          <img src="https://img.icons8.com/stickers/64/000000/github.png" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
