import React from 'react';
import { requests, addresses } from './content.js';

import './App.css';
import copy from 'copy-to-clipboard';

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
  }

  openTicket() {
    copy(this.state.requestBody);
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
  

  render() {
    return (
      <div dir='rtl'>
        <div style={{ fontWeight: 'bold'}}>פתיחת פניה באתר העיריה</div>
        <div>
        1. לחץ על הכפתור להפניה לאתר העיריה ושמירת תוכן הפניה ל-clipboard
        </div>
        <div>
        2. מלא פרטים מלאים באתר העיריה
        </div>
        <div>3. בצע פעולת 'הדבק' על מנת להכניס את תוכן הפניה ששמרנו עבורך</div>
        <div><button onClick={() => this.openTicket()}>פתח פניה במוקד העיריה</button></div>
        <p />
        <div style={{ fontWeight: 'bold'}}>שליחת מייל לאנשי מפתח בעיריה</div>
        <div><button onClick={() => window.open(this.composeEmailUrl())}>שליחת מייל בעזרת תוכנת המייל שלך</button></div>
        <div><button onClick={() => window.open(this.composeGmailUrl())}>שליחת מייל בעזרת GMail</button></div>
        <p />
        <div style={{ fontWeight: 'bold'}}>תוכן הפניה:</div>
        <p></p>
        <div style={{ fontWeight: 'bold'}}>{this.state.requestSubject}</div>
        <div>{this.state.requestBody}</div>
      </div>
    );
  }
}
export default App;
