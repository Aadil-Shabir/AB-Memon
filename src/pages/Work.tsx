import React from 'react';
import {Typography} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {motion} from 'framer-motion';

const useStyles = makeStyles({
  container: {
    margin: '2rem',
    textAlign: 'center',
  },
  projHolder: {
    margin: '1rem',
    paddingLeft: '2.5rem',
    marginBottom: '2.5rem',
  },
  link: {
    fontFamily: 'Fjalla One',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  typo: {
    margin: '30px',
    color: 'tomato',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '1rem',
  },
});

const Work: React.FC = () => {
  const classes = useStyles();

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.2}}
    >
      <div className={classes.container}>
        <Typography
          variant="h4"
          color="tomato"
          style={{fontFamily: 'Readex Pro'}}
        >
          Recent Work
        </Typography>
      </div>
      <div className={classes.projHolder}>
        <Typography
          variant="h4"
          style={{fontFamily: 'Readex Pro'}}
          className={classes.typo}
        >
          Boosted - Productivity App
        </Typography>
        <Typography
          variant="h6"
          color="white"
          style={{fontFamily: 'Readex Pro'}}
        >
          A productivity app where users can track records of their time <br />
          in different projects and get daily, weekly, and monthly reports.{' '}
          <br /> This application is made with React and Typescript in the
          frontend <br /> while REST API and Firebase in the backend.
        </Typography>
        <div className={classes.linkContainer}>
          <a
            href="https://github.com/Aadil-Shabir/boosted-web-clone"
            style={{
              fontFamily: 'Fjalla One',
            }}
          >
            <Typography variant="h6" color="primary" className={classes.link}>
              GITHUB LINK
            </Typography>
          </a>
        </div>
      </div>
      <div className={classes.projHolder}>
        <Typography
          variant="h4"
          style={{fontFamily: 'Readex Pro'}}
          className={classes.typo}
        >
          Social Media App
        </Typography>
        <Typography
          variant="h6"
          color="white"
          style={{fontFamily: 'Readex Pro'}}
        >
          This is a Social Media App where users can make their accounts and
          post <br /> whatever they want to in order to communicate their
          thoughts with world. <br /> This application is made with React and
          JavaScript with a strong preference <br /> to highlight graphQL
          implementation. Database used in this application is <br /> MongoDB
          whereas server is Apollo.
        </Typography>
        <div className={classes.linkContainer}>
          <a
            href="https://github.com/Aadil-Shabir/My-SocialMedia-App"
            style={{fontFamily: 'Fjalla One'}}
          >
            <Typography variant="h6" color="primary" className={classes.link}>
              GITHUB LINK
            </Typography>
          </a>
          <a
            href="https://happy-snyder-3d94f9.netlify.app/"
            style={{fontFamily: 'Fjalla One', marginLeft: '24px'}}
          >
            <Typography variant="h6" color="primary" className={classes.link}>
              DEPLOYED
            </Typography>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
