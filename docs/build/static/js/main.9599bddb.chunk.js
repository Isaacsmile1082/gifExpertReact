(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n(7),i=n.n(a),u=(n(16),n(2)),s=n(9),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),a=Object(u.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(s.a)(t))})),o(""))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),p=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,c,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=X9NLaHeiHxeC9YjBy51xQ4vJhHgqrvJm"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.url;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:n,alt:e}),Object(c.jsxs)("p",{children:[" ",e," "]})]})},h=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),a=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h3",{children:[" ",e," "]}),i&&Object(c.jsx)("p",{children:"Loading"}),Object(c.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(c.jsx)(b,Object(j.a)({},t),t.id)}))})]})},O=function(t){var e=Object(r.useState)(["One punch"]),n=Object(u.a)(e,2),a=n[0],i=n[1];return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("h2",{children:"GifExpertApp"}),Object(c.jsx)(o,{setCategories:i}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:a.map((function(t){return Object(c.jsx)(h,{category:t},t)}))})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(c.jsx)(O,{}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.9599bddb.chunk.js.map