import React, {useState, useEffect} from 'react';
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
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (window.screen.width < 400) {
      setSmallScreen(true);
    } else setSmallScreen(false);
  }, []);

  const header = smallScreen ? 'h4' : 'h3';

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
          variant={header}
        >
          Web Developer...
        </Typography>
      </div>
      <Typography variant="h4" color="khaki" style={{fontFamily: 'Wallpoet'}}>
        About
      </Typography>
      <div className={classes.descContainer}>
        <Typography
          variant="h6"
          color="whitesmoke"
          style={{
            fontFamily: 'Readex Pro',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
