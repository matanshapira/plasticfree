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

const URL_106 = 'https://www5.tel-aviv.gov.il/TlvForms/106plus/'
const URL_EDU_GAN = 'https://www5.tel-aviv.gov.il/tlvforms/tlvpublicpetition/?st=41';
const URL_EDU_SCHOOL = 'https://www5.tel-aviv.gov.il/tlvforms/tlvpublicpetition/?st=119';

const TargetType = {
  MOKED_106: '106',
  EDU: 'edu'
}

var mixpanel = require('mixpanel-browser');
mixpanel.init('99f509e7db2efd670d8fa645fa070b1a', {
  persistence: 'localStorage',
});

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
      target: Math.floor(Math.random() * 2) ? TargetType.EDU : TargetType.MOKED_106,
    };
  }

  componentDidMount() {
    mixpanel.track('Referral Page Shown');
  }

  openTicket(targetUrl) {
    copy(`שלום,\n${this.state.requestBody}`);
    mixpanel.track('Open-Ticket Clicked', { targetUrl });
    window.open(targetUrl);
  }
  composeEmailUrl() {
    const targets = addresses.join(';');
    return `mailto:${targets}?subject=${this.state.requestSubject}&body=${this.state.requestBody}`;
  }

  composeGmailUrl() {
    const targets = addresses.join(';');
    const body = `שלום,%0D%0A${this.state.requestBody}`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${targets}&su=${this.state.requestSubject}&body=${body}`;
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
      marginBottom: '10px',
    };

    const ticketButtonsBoxStyle = {
      marginTop: '10px',

      display: 'flex',
      marginRight: 'auto',
      width: 'fit-content',
    };

    const moked106 = (
      <Box style={ticketButtonsBoxStyle}>
        <Button style={buttonStyle} color='secondary' variant='contained' onClick={() => this.openTicket(URL_106)}>העתק פניה ל-Clipboard <br />ופתח פניה באתר העיריה</Button>
      </Box>
    );

    const edu = (
      <Box style={ticketButtonsBoxStyle}>
        <Button style={buttonStyle} color='secondary' variant='contained' onClick={() => this.openTicket(URL_EDU_GAN)}>העתק פניה ל-Clipboard <br />ופתח פניה באתר העיריה<br />(גן ילדים)</Button>
        <Button style={buttonStyle} color='secondary' variant='contained' onClick={() => this.openTicket(URL_EDU_SCHOOL)}>העתק פניה ל-Clipboard <br />ופתח פניה באתר העיריה<br />(בית ספר)</Button>
      </Box>
    );


    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box dir='rtl'>  
            <img src={banner}  style={bannerStyle}/>
            <Divider style={{ marginTop: '10px' }} />
            
            <Typography variant='h4'>תוכן הפניה</Typography>
            <Typography variant='body1'>* תוכן זה יועתק ל-Clipboard שלך<br/></Typography>
            <Typography variant='body1'>* חשוב לפתוח פניה וגם לשלוח מייל (בתחתית העמוד)<br /><br/></Typography>
            <Typography variant='h6'>{this.state.requestSubject}</Typography>
            <Typography variant='body2'>{this.state.requestBody}</Typography>       
            <Divider style={{ marginTop: '10px' }} />     
            <Box>
              <Typography variant='h4'>פתיחת פניה באתר העיריה</Typography >
              1. לחץ/לחצי על הכפתור להפניה לאתר העיריה ושמירת תוכן הפניה ל-Clipboard<br />
              2. מלא/י פרטים מלאים באתר העיריה<br/>
              3. בצע/י פעולת 'הדבק' על מנת להכניס את תוכן הפניה ששמרנו עבורך<br/>              
              {this.state.target === TargetType.MOKED_106 ? moked106 : edu}
            </Box>
            <Divider style={{ marginTop: '10px' }} />
            <Box>
              <Typography variant='h4'>שליחת מייל לאנשי מפתח בעיריה</Typography>
              <Box style={mailButtonsBoxStyle}>
                <Button style={mailButtonStyle} color='secondary' variant='contained' onClick={this.onEmailClicked}>שלח מייל<br />בעזרת תוכנת המייל שלך</Button>
                {isMobile.any() ? '' : <Button style={mailButtonStyle} variant='contained' color='secondary' onClick={this.onGmailClicked}>שלח מייל<br />בעזרת Gmail</Button>}<br/>
              </Box>
            </Box>
          </Box> 
        </Container>
      </React.Fragment>
      
      
    );
  }
}
export default App;
