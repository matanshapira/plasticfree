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
      width: '100%'
    };

    const buttonStyle = {
      display: 'flex',
      marginRight: 'auto',
      marginLeft: '25px',
    };
    
    const mailButtonStyle = {
      marginLeft: '25px',
      marginTop: '10px',
    };

    const mailButtonsBoxStyle = {
      display: 'flex',
      marginRight: 'auto',
      width: 'fit-content',
    };


    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box dir='rtl'>  
            <img src={banner}  style={bannerStyle}/>
            <Divider style={{ marginTop: '10px' }} />
            <Box>BLA
              <Typography variant='h4'>פתיחת פניה באתר העיריה</Typography >
              1. לחץ על הכפתור להפניה לאתר העיריה ושמירת תוכן הפניה ל-Clipboard<br />
              2. מלא פרטים מלאים באתר העיריה<br/>
              3. בצע פעולת 'הדבק' על מנת להכניס את תוכן הפניה ששמרנו עבורך<br/>
              <Box>
                <Button style={buttonStyle} color='secondary' variant='contained' onClick={() => this.openTicket()}>פתח פניה<br />במוקד העיריה</Button>
              </Box>
            </Box>
            <Divider style={{ marginTop: '10px' }} />
            <Box>
              <Typography variant='h4'>שליחת מייל לאנשי מפתח בעיריה</Typography>
              <Box style={mailButtonsBoxStyle}>
                <Button style={mailButtonStyle} color='secondary' variant='contained' onClick={this.onEmailClicked}>שלח מייל<br />בעזרת תוכנת המייל שלך</Button>
                {isMobile.any() ? '' : <Button style={mailButtonStyle} variant='contained' color='secondary' onClick={this.onGmailClicked}>שלח מייל<br />בעזרת Gmail</Button>}<br/>
              </Box>
              <Divider style={{ marginTop: '10px' }} />
              <Typography variant='h4'>תוכן הפניה</Typography>
              תוכן זה יועתק ל-Clipboard שלך<br /><br/>
              <Typography variant='subtitle2'>{this.state.requestSubject}</Typography>
              <Typography variant='body2'>{this.state.requestBody}</Typography>
            </Box>
          </Box> 
        </Container>
      </React.Fragment>
      
      
    );
  }
}
export default App;
