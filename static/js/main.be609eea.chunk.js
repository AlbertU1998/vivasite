(this.webpackJsonpvivasite=this.webpackJsonpvivasite||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);t(7);var a=t(5),c=t.n(a),i=(t(12),t(2)),r=t(1),s=t(0),l=function(){return Object(s.jsxs)("nav",{className:"navbar navbar-expand-md",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"index.html",children:"VIVA"}),Object(s.jsx)("button",{className:"navbar-toggler navbar-dark",type:"button","data-toggle":"collapse","data-target":"#main-navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"main-navigation",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"index.html",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"index.html",children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"index.html",children:"About"})})]})})]})},o=t(4),d=t.n(o),j=t(6),u=function(){var e=Object(j.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({file:n})},e.abrupt("return",fetch("http://localhost:3000/api",t).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(e){var n=Object(r.useState)({title:"",children:[{title:"",source:""}]}),t=Object(i.a)(n,2),a=t[0],c=t[1];Object(r.useEffect)((function(){u(e.fileName).then(c)}),[]);var l=function(n,t){return Object(s.jsx)("button",{className:"sliderOption",onClick:function(){return e.onClick(t)},children:n})};return Object(s.jsx)("div",{className:"container-fluid debuge",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-1"}),Object(s.jsxs)("div",{className:"col-md-auto sliderHead debuge",children:[" ",a.title," "]}),Object(s.jsx)("div",{className:"col sliderTail debuge",children:function(e){var n=e.length,t=function(t){return t<n?e[t].title:""},a=function(t){return t<n?e[t].source:""};return Array(n%2?(n+1)/2:n/2).fill(0).reduce((function(e,n,c){return e.concat([Object(s.jsxs)("div",{children:[l(t(2*c),a(2*c)),l(t(2*c+1),a(2*c+1))]})])}),[])}(a.children)})]})})},h=function(){var e=Object(r.useState)([{fileName:"VIVA.json"}]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=function(e){var n=t.slice().concat([{fileName:e}]);a(n)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),t.map((function(e){return Object(s.jsx)(b,{fileName:e.fileName,onClick:c},e.fileName)}))]})};c.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.be609eea.chunk.js.map