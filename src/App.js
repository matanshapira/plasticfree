import React from 'react';
import { requests, addresses } from './content.js';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import banner from './banner.jpg';

import './App.css';
import copy from 'copy-to-clipboard';

var mixpanel = require('mixpanel-browser');
mixpanel.init('99f509e7db2efd670d8fa645fa070b1a');


var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    const index = Math.floor(Math.random() * requests.length);
    this.state = {
      requestBody: requests[index].body,
      requestSubject: requests[index].subject,
    };
  }

  componentDidMount() {
    mixpanel.track('Referral Page Shown');
  }

  openTicket() {
    copy(this.state.requestBody);
    mixpanel.track('Open-Ticket Clicked');
    window.open('https://www5.tel-aviv.gov.il/TlvForms/106plus/');
  }
  composeEmailUrl() {
    const targets = addresses.join(';');
    return `mailto:${targets}?subject=${this.state.requestSubject}&body=${this.state.requestBody}`;
  }

  composeGmailUrl() {
    const targets = addresses.join(';');
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${targets}&su=${this.state.requestSubject}&body=${this.state.requestBody}`;
  }

  onEmailClicked = () => {
    mixpanel.track('Compose Email Clicked', { client: 'native' });
    window.open(this.composeEmailUrl());
  }

  onGmailClicked = () => {
    mixpanel.track('Compose Email Clicked', { client: 'gmail' });
    window.open(this.composeGmailUrl());
  }
 

  render() {
    const bannerStyle = {
      height: 400,
    };
    

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <CardMedia image={banner}  style={bannerStyle}></CardMedia>
          <Divider style={{ marginTop: '10px' }} />
          <Box dir='rtl'>  
            <Box>
            <Typography variant='h4'>פתיחת פניה באתר העיריה</Typography >
              1. לחץ על הכפתור להפניה לאתר העיריה ושמירת תוכן הפניה ל-clipboard<br />
              2. מלא פרטים מלאים באתר העיריה<br/>
              3. בצע פעולת 'הדבק' על מנת להכניס את תוכן הפניה ששמרנו עבורך<br/>
              <Button color='secondary' variant='contained' onClick={() => this.openTicket()}>פתח פניה במוקד העיריה</Button>
            </Box>
            <Divider style={{ marginTop: '10px' }} />
            <Box>
              <Typography variant='h4'>שליחת מייל לאנשי מפתח בעיריה</Typography>
              <Button color='secondary' variant='contained' onClick={this.onEmailClicked}>שליחת מייל בעזרת תוכנת המייל שלך</Button>
              {isMobile.any() ? '' : <Button style={{ margin: '10px' }} variant='contained' color='secondary' onClick={this.onGmailClicked}>שליחת מייל בעזרת GMail</Button>}<br/>
              <Typography variant='h4'>תוכן הפניה</Typography><br/>
              <Typography variant='h5'>{this.state.requestSubject}</Typography>
              <div>{this.state.requestBody}</div>
            </Box>
          </Box> 
        </Container>
      </React.Fragment>
      
      
    );
  }
}
export default App;
