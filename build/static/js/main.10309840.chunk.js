(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,a,t){e.exports={message:"Message_message__30f19",income:"Message_income__2hOTt",outcome:"Message_outcome__vRQfS",incomeUser:"Message_incomeUser__-y8q8",container:"Message_container__2LST5",left:"Message_left__2E0iq",right:"Message_right__3t0dv"}},122:function(e,a){},127:function(e,a,t){"use strict";t.r(a);var n,c=t(0),o=t.n(c),r=t(57),s=t.n(r),m=(t(71),t(29)),l=t(10),i=(t(72),t(11)),u=t(128),h=t(129),f=t(58),_=t.n(f),g=t(30),p=t.n(g),E=function(){var e=Object(c.useState)(""),a=Object(i.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),m=s[0],l=s[1];return o.a.createElement("div",{className:p.a.Join},o.a.createElement("div",{className:p.a.container},o.a.createElement("h1",null,"Join the chat room !"),o.a.createElement(u.a,{onSubmit:function(e){e.preventDefault(),_.a.post("/getUsersInRoom",{name:t,room:m}).then((function(e){console.log(e.data),e.data?alert("Username is taken"):window.location.replace("/chat?name=".concat(t,"&chatroom=").concat(m))})).catch((function(e){console.log("Server error: "+e)}))}},o.a.createElement(u.a.Label,null,"Username"),o.a.createElement(u.a.Control,{type:"text",placeholder:"Username",value:t,onChange:function(e){return n(e.target.value)},required:!0}),o.a.createElement("br",null),o.a.createElement(u.a.Label,null,"Chatroom"),o.a.createElement(u.a.Control,{type:"text",placeholder:"Chatroom you want to join",value:m,onChange:function(e){return l(e.target.value)},required:!0}),o.a.createElement("br",null),o.a.createElement(h.a,{type:"submit",variant:"success"},"Join Us!"))))},b=t(34),v=t(60),d=t.n(v),j=t(61),O=t.n(j),w=t(12),C=t.n(w),N=t(31),y=t.n(N),S=function(e){var a=e.message,t=e.name,n=e.user,c=!1;return n===t.trim().toLowerCase()&&(c=!0),c?o.a.createElement("div",{className:C.a.right},o.a.createElement("span",{className:C.a.outcome},o.a.createElement("span",{className:C.a.outcomeUser},"me: "),y.a.emojify(a))):o.a.createElement("div",{className:C.a.left},o.a.createElement("span",{className:C.a.income},o.a.createElement("span",{className:C.a.incomeUser},n+":"," "),y.a.emojify(a)))},x=t(62),J=t.n(x),U=function(e){var a=e.messages,t=e.name,n=a.map((function(e,a){return o.a.createElement(S,{message:e.message,user:e.user,name:t,key:a})}));return o.a.createElement("div",{className:J.a.messages},n)},M=t(15),k=t.n(M),L=function(e){var a=e.location,t=Object(c.useState)(""),r=Object(i.a)(t,2),s=r[0],m=r[1],l=Object(c.useState)(""),f=Object(i.a)(l,2),_=f[0],g=f[1],p=Object(c.useState)(""),E=Object(i.a)(p,2),v=E[0],j=E[1],w=Object(c.useState)([]),C=Object(i.a)(w,2),N=C[0],y=C[1];Object(c.useEffect)((function(){var e=d.a.parse(a.search),t=e.name,c=e.chatroom;return n=O.a.connect("localhost:5000"),m(t),g(c),n.emit("join",{name:t,chatroom:c}),function(){n.emit("disconnect"),n.off()}}),[a.search]),Object(c.useEffect)((function(){n.on("error",(function(){window.location.replace("/")}))})),Object(c.useEffect)((function(){n.on("chat-message",(function(e){y([].concat(Object(b.a)(N),[e]))}))}));return o.a.createElement("div",{className:k.a.chat},o.a.createElement("div",{className:k.a.output},o.a.createElement("h3",null,"Welcome in chat room ",_),o.a.createElement(U,{messages:N,name:s})),o.a.createElement("div",{className:k.a.input},o.a.createElement(u.a.Control,{as:"textarea",rows:"3",className:k.a.textarea,placeholder:"Type your message...",value:v,onChange:function(e){return j(e.target.value)}}),o.a.createElement(h.a,{variant:"success",className:k.a.button,onClick:function(e){e.preventDefault(),v&&(n.emit("chat-message",{message:v,user:s}),y([].concat(Object(b.a)(N),[{message:v,user:s}])))}},"Send")))},q=function(){return o.a.createElement(m.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/chat",component:L}),o.a.createElement(l.a,{exact:!0,path:"/",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},15:function(e,a,t){e.exports={chat:"Chat_chat__355gh",input:"Chat_input__1bR6S",textarea:"Chat_textarea__3cW_p",button:"Chat_button__1SFrL",output:"Chat_output__2J7rC"}},30:function(e,a,t){e.exports={container:"Join_container__2we-f",Join:"Join_Join__EBb1y"}},62:function(e,a,t){e.exports={messages:"Messages_messages__3aQb8"}},66:function(e,a,t){e.exports=t(127)},71:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.10309840.chunk.js.map