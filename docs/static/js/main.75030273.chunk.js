(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),s=a(1),l=a(9),m=a(7),u=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(s.a)(a,2),i=c[0],m=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),m(""))}},r.a.createElement("input",{className:"input is-primary",type:"text",value:i,onChange:function(e){m(e.target.value)}}))};u.prototype={setCategories:a.n(m).a.func.isRequired};var o=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"column is-4 animate__animated animate__pulse"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:a,alt:t}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,t)))))},p=a(4),d=a.n(p),f=a(8),E=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=3&api_key=RYxKvg5tM8Mh6iNRSlkmjaB3XreyKtW8"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){E(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement("div",{className:"container is-fluid"},i&&r.a.createElement("progress",{className:"progress is-small is-primary",max:"100"},"15%"),r.a.createElement("h3",{className:"subtitle"},t),r.a.createElement("div",{className:"columns"},c.map((function(e){return r.a.createElement(o,Object.assign({key:e.id},e))}))))},g=(a(18),a(19),function(){var e=Object(n.useState)(["Gantz"]),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"GifExpertApp")))),r.a.createElement("section",{className:"section"},r.a.createElement(u,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(v,{key:e,category:e})})))))});a(20);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.75030273.chunk.js.map