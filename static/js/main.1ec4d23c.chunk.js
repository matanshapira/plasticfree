(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(13),n(3)),l=n(4),u=n(6),s=n(7),m=[{subject:"\u05e0\u05d5\u05e9\u05d01",body:"\u05e9\u05dc\u05d5\u05dd 11111111......"},{subject:"\u05e0\u05d5\u05e9\u05d02",body:"\u05e9\u05dc\u05d5\u05dd 123123......"},{subject:"\u05e0\u05d5\u05e9\u05d03",body:"\u05e9\u05dc\u05d5\u05dd 234234......"}],d=["a@gmail.com","b@gmail.com"],v=(n(14),n(5)),h=n.n(v),p={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i)},any:function(){return p.Android()||p.BlackBerry()||p.iOS()||p.Opera()||p.Windows()}},b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);var o=Math.floor(Math.random()*m.length);return a.state={requestBody:m[o].body,requestSubject:m[o].subject},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"openTicket",value:function(){h()(this.state.requestBody),window.open("https://www5.tel-aviv.gov.il/TlvForms/106plus/")}},{key:"composeEmailUrl",value:function(){var e=d.join(";");return"mailto:".concat(e,"?subject=").concat(this.state.requestSubject,"&body=").concat(this.state.requestBody)}},{key:"composeGmailUrl",value:function(){var e=d.join(";");return"https://mail.google.com/mail/?view=cm&fs=1&to=".concat(e,"&su=").concat(this.state.requestSubject,"&body=").concat(this.state.requestBody)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{dir:"rtl"},o.a.createElement("div",{style:{fontWeight:"bold"}},"\u05e4\u05ea\u05d9\u05d7\u05ea \u05e4\u05e0\u05d9\u05d4 \u05d1\u05d0\u05ea\u05e8 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4"),o.a.createElement("div",null,"1. \u05dc\u05d7\u05e5 \u05e2\u05dc \u05d4\u05db\u05e4\u05ea\u05d5\u05e8 \u05dc\u05d4\u05e4\u05e0\u05d9\u05d4 \u05dc\u05d0\u05ea\u05e8 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4 \u05d5\u05e9\u05de\u05d9\u05e8\u05ea \u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4 \u05dc-clipboard"),o.a.createElement("div",null,"2. \u05de\u05dc\u05d0 \u05e4\u05e8\u05d8\u05d9\u05dd \u05de\u05dc\u05d0\u05d9\u05dd \u05d1\u05d0\u05ea\u05e8 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4"),o.a.createElement("div",null,"3. \u05d1\u05e6\u05e2 \u05e4\u05e2\u05d5\u05dc\u05ea '\u05d4\u05d3\u05d1\u05e7' \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05d0\u05ea \u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4 \u05e9\u05e9\u05de\u05e8\u05e0\u05d5 \u05e2\u05d1\u05d5\u05e8\u05da"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return e.openTicket()}},"\u05e4\u05ea\u05d7 \u05e4\u05e0\u05d9\u05d4 \u05d1\u05de\u05d5\u05e7\u05d3 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4")),o.a.createElement("p",null),o.a.createElement("div",{style:{fontWeight:"bold"}},"\u05e9\u05dc\u05d9\u05d7\u05ea \u05de\u05d9\u05d9\u05dc \u05dc\u05d0\u05e0\u05e9\u05d9 \u05de\u05e4\u05ea\u05d7 \u05d1\u05e2\u05d9\u05e8\u05d9\u05d4"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return window.open(e.composeEmailUrl())}},"\u05e9\u05dc\u05d9\u05d7\u05ea \u05de\u05d9\u05d9\u05dc \u05d1\u05e2\u05d6\u05e8\u05ea \u05ea\u05d5\u05db\u05e0\u05ea \u05d4\u05de\u05d9\u05d9\u05dc \u05e9\u05dc\u05da")),o.a.createElement("div",null," ",p.any()?"":o.a.createElement("button",{onClick:function(){return window.open(e.composeGmailUrl())}},"\u05e9\u05dc\u05d9\u05d7\u05ea \u05de\u05d9\u05d9\u05dc \u05d1\u05e2\u05d6\u05e8\u05ea GMail")),o.a.createElement("p",null),o.a.createElement("div",{style:{fontWeight:"bold"}},"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4:"),o.a.createElement("p",null),o.a.createElement("div",{style:{fontWeight:"bold"}},this.state.requestSubject),o.a.createElement("div",null,this.state.requestBody))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.1ec4d23c.chunk.js.map