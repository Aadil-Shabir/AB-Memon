import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material';
import {yellow} from '@mui/material/colors';

import './index.css';
import App from './App';

const theme = createTheme({
  palette: {primary: {main: yellow[700]}},
  breakpoints: {values: {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}},
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
