import React from 'react';
import logo from '../AB-Memon.jpeg';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@mui/material';

import styles from '../styles/Home.module.css';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  logoHolder: {
    margin: '1.5rem',
  },
  logo: {
    borderRadius: '180px',
    width: '250px',
    height: '250px',
  },
  typography: {
    position: 'relative',
    color: '#11001c',
    webkitTextStroke: '0.3vw #329d52',
  },
  descContainer: {
    margin: '1.5rem',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logoHolder}>
        <img src={logo} alt="logo" className={classes.logo} />
      </div>
      <Typography
        color="silver"
        variant="h4"
        style={{fontFamily: 'Readex Pro'}}
      >
        AB Memon
      </Typography>
      <div className={styles.textContainer}>
        <Typography
          data-text="Web Developer..."
          className={styles.h2}
          variant="h3"
        >
          Web Developer...
        </Typography>
      </div>
      <Typography variant="h4" color="khaki" style={{fontFamily: 'Wallpoet'}}>
        About
      </Typography>
      <div className={classes.descContainer}>
        <Typography variant="h5" color="whitesmoke">
          I am an ambitious Software Engineering Student and
          <br /> a driven individual with the ability to adapt different
          <br />
          situations and I have potential to grow self.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
