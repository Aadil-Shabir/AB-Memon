import React from 'react';
import {Typography} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    margin: '2rem',
    textAlign: 'center',
  },
});

const Work: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Typography
          variant="h4"
          color="tomato"
          style={{fontFamily: 'Readex Pro'}}
        >
          Recent Work
        </Typography>
      </div>
      <div>
        <Typography
          variant="h4"
          color="tomato"
          style={{fontFamily: 'Readex Pro'}}
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
      </div>
    </div>
  );
};

export default Work;
