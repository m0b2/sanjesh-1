(this.webpackJsonpsanjesh=this.webpackJsonpsanjesh||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),i=(a(37),a(38),a(39),a(11)),s=(a(40),a(41),a(25)),o=(a(42),function(e){var t=e.percent,a=e.width;return c.a.createElement("div",{className:"Progress"},c.a.createElement(s.Progress,{type:"circle",percent:t,width:a,style:{alignSelf:"center"}}))}),m=a(26),u=a.n(m),E=function(e){var t=e.current,a=e.total,n=e.title,r=c.a.useState(0),l=Object(i.a)(r,2),s=l[0],m=l[1];return c.a.createElement("div",{className:"number-static main"},c.a.createElement(o,{percent:s,width:50}),c.a.createElement("div",{className:"number-static-text"},c.a.createElement("p",{className:"not-answered"},a+"/"),c.a.createElement("p",{className:"answered"},c.a.createElement(u.a,{end:t,start:0,duration:.5,onEnd:function(){return m(Math.floor(t/a*100))}}))),c.a.createElement("p",{className:"static-title"},n))},d=(a(47),a(48),a(8)),f=a(27),v=a.n(f),h=Object(d.g)((function(e){var t=e.title,a=e.icon,n=(e.current,e.total,e.index),r=e.history,l=e.location,i=e.tuchable,s=l.pathname;return c.a.createElement(v.a,{right:n%2===0&&i,left:n%2!==0&&i,top:!i},c.a.createElement("div",{className:"category",onClick:function(){i&&r.push("".concat(s,"/").concat(n))}},c.a.createElement("svg",{version:"1.1",height:"680",width:"680",viewBox:"0 0 30 30"},c.a.createElement("path",{d:"M15 0 Q0 0 0 15 T15 30 30 15 15 0",fill:"#59C8F3",stroke:"none"})),c.a.createElement("img",{className:"category-icon",src:a}),c.a.createElement("p",{className:"category-title"},t)))})),p=a(29),b=(a(52),a(53),a(10)),g=a(30),N=a.n(g),w=a(16),y={currentUser:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(w.a)({},e,{currentUser:t.payload});default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUESTION_TYPE":return t.payload;default:return e}},j=["\u06a9\u0627\u0631","\u0645\u0633\u06a9\u0646","\u067e\u06cc\u0634\u06cc\u0646\u0647 \u0631\u0648\u0627\u0628\u0637","\u062c\u0646\u0633\u06cc","\u0633\u0644\u0627\u0645\u062a","\u0638\u0627\u0647\u0631","\u067e\u062f\u0631 \u0648 \u0645\u0627\u062f\u0631","\u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u0647\u0627\u06cc \u06af\u0633\u062a\u0631\u062f\u0647","\u062f\u0648\u0633\u062a\u0627\u0646","\u062d\u06cc\u0648\u0627\u0646\u0627\u062a \u062e\u0627\u0646\u06af\u06cc","\u0633\u06cc\u0627\u0633\u062a","\u062c\u0627\u0645\u0639\u0647","\u06a9\u0627\u0631\u0647\u0627\u06cc \u062e\u06cc\u0631\u06cc\u0647","\u062e\u062f\u0645\u062a \u0633\u0631\u0628\u0627\u0632\u06cc","\u0642\u0627\u0646\u0648\u0646","\u0631\u0633\u0627\u0646\u0647","\u062f\u06cc\u0646","\u0641\u0631\u0647\u0646\u06af","\u0627\u0648\u0642\u0627\u062a \u0641\u0631\u0627\u063a\u062a","\u062a\u0639\u0637\u06cc\u0644\u0627\u062a \u0648 \u062c\u0634\u0646 \u0647\u0627","\u0633\u0641\u0631 \u0648 \u062a\u0641\u0631\u06cc\u062d","\u0622\u0645\u0648\u0632\u0634","\u062d\u0645\u0644 \u0648 \u0646\u0642\u0644","\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a","\u0635\u0631\u0641 \u063a\u0630\u0627","\u0646\u0642\u0634 \u067e\u0630\u06cc\u0631\u06cc \u062c\u0646\u0633\u06cc","\u0646\u0698\u0627\u062f\u060c \u0642\u0648\u0645\u06cc\u062a \u0648 \u062a\u0641\u0627\u0648\u062a","\u0632\u0646\u062f\u06af\u06cc \u0647\u0631 \u0631\u0648\u0632\u0647"],O=["\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u0627\u0648\u0644","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u062f\u0648\u0645","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u0633\u0648\u0645","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u0686\u0647\u0627\u0631\u0645","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u067e\u0646\u062c\u0645"],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[j,O],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUESTION":return Object(w.a)({},e,{currentUser:t.payload});default:return e}},S=Object(b.c)({user:I,question_type:x,question:T}),k=[N.a],C=Object(b.d)(S,b.a.apply(void 0,k)),_=function(e){var t=e.title,a=e.activeTab,n=e.setActive,r=e.index,l=r===a?"tab-span tab-item-active":"tab-span";return C.dispatch({type:"SET_QUESTION_TYPE",payload:a}),c.a.createElement("span",{className:l,onClick:function(){n(r),C.dispatch({type:"SET_QUESTION_TYPE",payload:r})}},t)},q=function(e){Object(p.a)(e);var t=c.a.useState(0),a=Object(i.a)(t,2),n=a[0],r=a[1];return c.a.createElement("div",{className:"tab-contianer"},c.a.createElement(_,{title:"\u0641\u0631\u062f\u06cc",activeTab:n,setActive:r,index:0}),c.a.createElement(_,{title:"\u0631\u0641\u062a\u0627\u0631\u06cc",activeTab:n,setActive:r,index:1}))},U=a(15),M=Object(U.b)((function(e){return{current_tab:e.question_type}}))((function(e){var t=e.data,a=e.current_tab,n=0===a?1:29,r=t[a].map((function(e,t){return c.a.createElement(h,{title:e,icon:"https://sanjesh.love/amar/img/".concat(t+n,".gif"),current:Math.floor(50*Math.random()),total:Math.floor(50*Math.random())+50,index:t,tuchable:!0})}));return c.a.createElement("div",{className:"categories"},c.a.createElement(q,null),r)})),P=function(e){e.activePage;return c.a.createElement("div",{className:"content-wrapper main"},c.a.createElement("div",null,c.a.createElement("div",{className:"progresss-div"},c.a.createElement(E,{total:30,current:12,title:"\u0645\u0648\u0636\u0648\u0639\u0627\u062a \u062a\u06a9\u0645\u06cc\u0644 \u0634\u062f\u0647"}),c.a.createElement(E,{total:125,current:46,title:"\u0633\u0648\u0627\u0644\u0627\u062a \u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0634\u062f\u0647"}),c.a.createElement(E,{total:30,current:12,title:"\u0645\u0648\u0636\u0648\u0639\u0627\u062a \u062a\u06a9\u0645\u06cc\u0644 \u0634\u062f\u0647"}),c.a.createElement(E,{total:125,current:46,title:"\u0633\u0648\u0627\u0644\u0627\u062a \u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0634\u062f\u0647"}))))},Q=function(){return c.a.createElement("div",{className:"user-panel mt-3 pb-3 mb-3 d-flex"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:"https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g",className:"img-circle elevation-2",alt:"User Image"})),c.a.createElement("div",{className:"info"},c.a.createElement("a",{href:"#",className:"d-block"},"\u062d\u0633\u0627\u0645 \u0645\u0648\u0633\u0648\u06cc")))},A=function(e){return c.a.createElement("li",{className:"nav-item has-treeview"},c.a.createElement("a",{href:"#",className:"nav-link "},c.a.createElement("i",{className:"nav-icon fa "}),c.a.createElement("p",null,e.title,c.a.createElement("i",{className:"right fa fa-angle-left"}))),c.a.createElement("ul",{className:"nav nav-treeview"},e.children))},B=function(e){return c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:e.href,className:"nav-link"},c.a.createElement("i",{className:e.classIcon}),c.a.createElement("p",null,e.title),e.children))},R=function(){return c.a.createElement("nav",{className:"mt-2"},c.a.createElement("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false"},c.a.createElement(B,{title:"\u062e\u0627\u0646\u0647",href:"#",classIcon:"fa fa-home nav-icon",active:!0}),c.a.createElement(A,{title:"\u067e\u0631\u0648\u0641\u0627\u06cc\u0644",classIcon:""},c.a.createElement(B,{title:"\u0645\u0634\u0627\u0647\u062f\u0647 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644",href:"#",classIcon:"right fa fa-address-card nav-icon"}),c.a.createElement(B,{title:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a",href:"#",classIcon:"fa fa-pencil nav-icon"}),c.a.createElement(B,{title:"\u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631",href:"#",classIcon:"fa fa-key nav-icon"})),c.a.createElement(A,{title:"\u0633\u0648\u0627\u0644\u0627\u062a",classIcon:""},c.a.createElement(B,{title:"\u0633\u0648\u0627\u0644\u0627\u062a \u0633\u0646\u062c\u0634 \u0641\u0631\u062f\u06cc",href:"#",classIcon:"fa fa-tasks nav-icon"}),c.a.createElement(B,{title:"\u0633\u0648\u0627\u0644\u0627\u062a \u0645\u062f\u06cc\u0631\u06cc\u062a \u0631\u0641\u062a\u0627\u0631",href:"#",classIcon:"fa fa-tasks nav-icon"})),c.a.createElement(B,{title:"\u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627",href:"#",classIcon:"fa fa-bell nav-icon"}),c.a.createElement(B,{title:"\u062e\u0631\u0648\u062c",href:"#",classIcon:"fa fa-sign-out nav-icon"})))},Y=(a(55),function(){return c.a.createElement("div",null,c.a.createElement("aside",{className:"main-sidebar sidebar-dark-primary elevation-4 mysidebar"},c.a.createElement("div",{className:"sidebar",style:{direction:"ltr"}},c.a.createElement("div",{style:{direction:"rtl"}},c.a.createElement(Q,null),c.a.createElement(R,null)))))}),J=function(){return c.a.createElement("body",{className:"hold-transition sidebar-mini"},c.a.createElement("div",{className:"wrapper"},c.a.createElement(Y,null),c.a.createElement(P,null)))},W=(a(56),["\u06a9\u0627\u0631","\u0645\u0633\u06a9\u0646","\u067e\u06cc\u0634\u06cc\u0646\u0647 \u0631\u0648\u0627\u0628\u0637","\u062c\u0646\u0633\u06cc","\u0633\u0644\u0627\u0645\u062a","\u0638\u0627\u0647\u0631","\u067e\u062f\u0631 \u0648 \u0645\u0627\u062f\u0631","\u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u0647\u0627\u06cc \u06af\u0633\u062a\u0631\u062f\u0647","\u062f\u0648\u0633\u062a\u0627\u0646","\u062d\u06cc\u0648\u0627\u0646\u0627\u062a \u062e\u0627\u0646\u06af\u06cc","\u0633\u06cc\u0627\u0633\u062a","\u062c\u0627\u0645\u0639\u0647","\u06a9\u0627\u0631\u0647\u0627\u06cc \u062e\u06cc\u0631\u06cc\u0647","\u062e\u062f\u0645\u062a \u0633\u0631\u0628\u0627\u0632\u06cc","\u0642\u0627\u0646\u0648\u0646","\u0631\u0633\u0627\u0646\u0647","\u062f\u06cc\u0646","\u0641\u0631\u0647\u0646\u06af","\u0627\u0648\u0642\u0627\u062a \u0641\u0631\u0627\u063a\u062a","\u062a\u0639\u0637\u06cc\u0644\u0627\u062a \u0648 \u062c\u0634\u0646 \u0647\u0627","\u0633\u0641\u0631 \u0648 \u062a\u0641\u0631\u06cc\u062d","\u0622\u0645\u0648\u0632\u0634","\u062d\u0645\u0644 \u0648 \u0646\u0642\u0644","\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a","\u0635\u0631\u0641 \u063a\u0630\u0627","\u0646\u0642\u0634 \u067e\u0630\u06cc\u0631\u06cc \u062c\u0646\u0633\u06cc","\u0646\u0698\u0627\u062f\u060c \u0642\u0648\u0645\u06cc\u062a \u0648 \u062a\u0641\u0627\u0648\u062a","\u0632\u0646\u062f\u06af\u06cc \u0647\u0631 \u0631\u0648\u0632\u0647"]),F=["\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u0627\u0648\u0644","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u062f\u0648\u0645","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u0633\u0648\u0645","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u0686\u0647\u0627\u0631\u0645","\u067e\u0631\u0633\u0634\u0646\u0627\u0645\u0647 \u067e\u0646\u062c\u0645"],$=function(){return c.a.createElement("div",{className:"categories-wrapper"},c.a.createElement(M,{data:[W,F]}))},z=(a(57),a(58),Object(d.g)((function(e){var t=e.iconClass,a=e.active,n=e.setCurrent,r=e.history,l=a===t?"active":"";return c.a.createElement("div",{className:"footer-item"+" ".concat(l),onClick:function(){n(t),r.push("/"+t)}},c.a.createElement("span",{className:"footer-icon ".concat(t,"-icon")}))}))),D=Object(d.g)((function(e){var t=e.location,a=c.a.useState(t.pathname.substring(1)),n=Object(i.a)(a,2),r=n[0],l=n[1];return c.a.createElement("div",{className:"main-footer"},c.a.createElement(z,{iconClass:"home",active:r,setCurrent:l}),c.a.createElement(z,{iconClass:"search",active:r,setCurrent:l}),c.a.createElement(z,{iconClass:"question",active:r,setCurrent:l}),c.a.createElement(z,{iconClass:"notif",active:r,setCurrent:l}))})),G=(a(59),Object(d.g)((function(e){var t=e.match.params.index,a=C.getState().question,n=C.getState().question_type,r=0===n?1:29;return c.a.createElement("div",{className:"question-review-wrapper"},c.a.createElement(h,{title:a[n][t],icon:"https://sanjesh.love/amar/img/".concat(parseInt(r)+parseInt(t),".gif"),index:t}),c.a.createElement("div",{className:"progresss-div"},c.a.createElement(E,{total:29,current:18,title:"\u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0634\u062f\u0647"}),c.a.createElement(E,{total:14,current:6,title:"\u062a\u0644\u0627\u0642\u06cc"})),c.a.createElement("h2",null,"\u0634\u0631\u0648\u0639 \u0633\u0648\u0627\u0644\u0627\u062a"))}))),H=(a(60),a(61),function(){return c.a.createElement("div",{className:"question-review-wrapper"},c.a.createElement("br",null),c.a.createElement("h2",null,"\u06a9\u0627\u0631\u06af\u0631\u0627\u0646 \u0645\u0634\u063a\u0648\u0644 \u06a9\u0627\u0631\u0646\u062f"))});a(62);var K=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/home",component:J}),c.a.createElement(d.b,{exact:!0,path:"/question",component:$}),c.a.createElement(d.b,{exact:!0,path:"/question/:index",component:G}),c.a.createElement(d.b,{exact:!0,path:"/notif",component:H}),c.a.createElement(d.b,{exact:!0,path:"/search",component:H}),c.a.createElement(d.a,{to:"/home"})),window.screen.width<421?c.a.createElement(D,null):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(9);l.a.render(c.a.createElement(U.a,{store:C},c.a.createElement(L.a,null,c.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6f8c63b5.chunk.js.map