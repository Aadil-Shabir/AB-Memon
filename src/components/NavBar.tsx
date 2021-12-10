import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  bar: {
    height: '55px',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '0.4rem',
  },
  button: {
    '&.active': {textDecoration: 'underline'},
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.bar} color="primary">
      <Box className={classes.box}>
        <Button
          color="inherit"
          component={NavLink}
          to={'/'}
          className={classes.button}
        >
          <Typography
            sx={{minWidth: 100}}
            variant="h5"
            style={{fontFamily: 'Fjalla One'}}
          >
            Home
          </Typography>
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to={'/skills'}
          className={classes.button}
        >
          <Typography
            sx={{minWidth: 100}}
            variant="h5"
            style={{fontFamily: 'Fjalla One'}}
          >
            Skills
          </Typography>
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to={'/work'}
          className={classes.button}
        >
          <Typography
            sx={{minWidth: 100}}
            variant="h5"
            style={{fontFamily: 'Fjalla One'}}
          >
            Work
          </Typography>
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to={'/contact'}
          className={classes.button}
        >
          <Typography
            sx={{minWidth: 100}}
            variant="h5"
            style={{fontFamily: 'Fjalla One'}}
          >
            Contact
          </Typography>
        </Button>
      </Box>
    </AppBar>
  );
};

export default NavBar;
