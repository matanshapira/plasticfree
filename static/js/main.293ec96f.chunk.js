(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(2),c=n.n(l),r=(n(13),n(3)),i=n(4),u=n(6),s=n(7),m=[{subject:"\u05e0\u05d5\u05e9\u05d01",body:"\u05e9\u05dc\u05d5\u05dd 11111111......"},{subject:"\u05e0\u05d5\u05e9\u05d02",body:"\u05e9\u05dc\u05d5\u05dd 123123......"},{subject:"\u05e0\u05d5\u05e9\u05d03",body:"\u05e9\u05dc\u05d5\u05dd 234234......"}],d=["a@gmail.com","b@gmail.com"],v=(n(14),n(5)),b=n.n(v),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var o;Object(r.a)(this,n),o=t.call(this,e);var a=Math.floor(Math.random()*m.length);return o.state={requestBody:m[a].body,requestSubject:m[a].subject},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"openTicket",value:function(){b()(this.state.requestBody),window.open("https://www5.tel-aviv.gov.il/TlvForms/106plus/")}},{key:"composeEmailUrl",value:function(){var e=d.join(";");return"mailto:".concat(e,"?subject=").concat(this.state.requestSubject,"&body=").concat(this.state.requestBody)}},{key:"composeGmailUrl",value:function(){var e=d.join(";");return"https://mail.google.com/mail/?view=cm&fs=1&to=".concat(e,"&su=").concat(this.state.requestSubject,"&body=").concat(this.state.requestBody)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{dir:"rtl"},a.a.createElement("div",{style:{fontWeight:"bold"}},"\u05e4\u05ea\u05d9\u05d7\u05ea \u05e4\u05e0\u05d9\u05d4 \u05d1\u05d0\u05ea\u05e8 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4"),a.a.createElement("div",null,"1. \u05dc\u05d7\u05e5 \u05e2\u05dc \u05d4\u05db\u05e4\u05ea\u05d5\u05e8 \u05dc\u05d4\u05e4\u05e0\u05d9\u05d4 \u05dc\u05d0\u05ea\u05e8 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4 \u05d5\u05e9\u05de\u05d9\u05e8\u05ea \u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4 \u05dc-clipboard"),a.a.createElement("div",null,"2. \u05de\u05dc\u05d0 \u05e4\u05e8\u05d8\u05d9\u05dd \u05de\u05dc\u05d0\u05d9\u05dd \u05d1\u05d0\u05ea\u05e8 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4"),a.a.createElement("div",null,"3. \u05d1\u05e6\u05e2 \u05e4\u05e2\u05d5\u05dc\u05ea '\u05d4\u05d3\u05d1\u05e7' \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05d0\u05ea \u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4 \u05e9\u05e9\u05de\u05e8\u05e0\u05d5 \u05e2\u05d1\u05d5\u05e8\u05da"),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.openTicket()}},"\u05e4\u05ea\u05d7 \u05e4\u05e0\u05d9\u05d4 \u05d1\u05de\u05d5\u05e7\u05d3 \u05d4\u05e2\u05d9\u05e8\u05d9\u05d4")),a.a.createElement("p",null),a.a.createElement("div",{style:{fontWeight:"bold"}},"\u05e9\u05dc\u05d9\u05d7\u05ea \u05de\u05d9\u05d9\u05dc \u05dc\u05d0\u05e0\u05e9\u05d9 \u05de\u05e4\u05ea\u05d7 \u05d1\u05e2\u05d9\u05e8\u05d9\u05d4"),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return window.open(e.composeEmailUrl())}},"\u05e9\u05dc\u05d9\u05d7\u05ea \u05de\u05d9\u05d9\u05dc \u05d1\u05e2\u05d6\u05e8\u05ea \u05ea\u05d5\u05db\u05e0\u05ea \u05d4\u05de\u05d9\u05d9\u05dc \u05e9\u05dc\u05da")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return window.open(e.composeGmailUrl())}},"\u05e9\u05dc\u05d9\u05d7\u05ea \u05de\u05d9\u05d9\u05dc \u05d1\u05e2\u05d6\u05e8\u05ea GMail")),a.a.createElement("p",null),a.a.createElement("div",{style:{fontWeight:"bold"}},"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4:"),a.a.createElement("p",null),a.a.createElement("div",{style:{fontWeight:"bold"}},this.state.requestSubject),a.a.createElement("div",null,this.state.requestBody))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.293ec96f.chunk.js.map