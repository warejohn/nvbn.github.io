(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r,o=t(0),c=t.n(o),i=t(3),a=t.n(i),u=(t(15),t(1)),l=t.n(u),s=t(4),f=t(7),d=t(5),m=t(8),p=t(6),w=function(){return{__isPropGetter:!0}},b=function(e){var n=Object(p.a)(e,2),t=n[0],r=n[1];return{__isDescriptor:!0,get:function(){return t},set:function(e){return r(e)}}},h=function(e,n,t){return function(r){var o=n();return e(function(){return o.next(),function(){o.next()}},t),r}},g=function(e){return new Proxy(this,{set:function(n,t,r){return r&&r.__isPropGetter?n[t]=e[t]:r&&r.__isDescriptor?Object.defineProperty(n,t,r):n[t]=r,!0}})},v=Object(o.createContext)({numberColor:"red"}),k=(r=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(i)))).initialCount=w(),t.theme=Object(o.useContext)(v),t.current=b(Object(o.useState)(t.initialCount)),t.clicked=b(Object(o.useState)()),t.onClick=Object(o.useCallback)(function(){t.current+=1,t.clicked=!0},[t.current]),t.withLogging=h(o.useEffect,l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("did mount"),void(e.next=3);case 3:console.log("did unmount");case 4:case"end":return e.stop()}},e)}),[]),t.render=t.withLogging(function(){return c.a.createElement("div",null,c.a.createElement("p",null,"Value:"," ",c.a.createElement("span",{style:{color:t.theme.numberColor}},t.current)),t.clicked&&c.a.createElement("p",null,"You already clicked!"),c.a.createElement("p",null,"Initial value: ",t.initialCount),c.a.createElement("button",{onClick:t.onClick},"Increase"))}),t}return Object(m.a)(n,e),n}(g),function(e){return new r(e).render()}),C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,{initialCount:100}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.123e9688.chunk.js.map