(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(40)},20:function(e,t,a){},21:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),s=a.n(c),l=(a(20),a(21),a(4)),u=a(3),o=a(2),i=a(42),m=a(13),f=a.n(m);function d(e){var t,a,c=Object(r.useState)(""),s=Object(o.a)(c,2),l=s[0],u=s[1];return t=function(){return e.onSearch(l)},a=400,Object(r.useEffect)(function(){var e=setTimeout(t,a);return function(){return clearTimeout(e)}},[t,a]),n.a.createElement("section",{className:"search"},n.a.createElement("form",{className:"search__form",onSubmit:function(e){return e.preventDefault()}},n.a.createElement("input",{className:"radius",spellCheck:"false",placeholder:"Search Artists",name:"search",type:"text",value:l,onChange:function(e){return u(e.target.value)}})))}function b(e){var t=Object.keys(e.filters).map(function(t){return n.a.createElement("div",{key:t,className:"filters__form-group"},n.a.createElement("input",{className:"filters__checkbox",type:"checkbox",name:t,id:t,checked:e.filters[t],onChange:function(a){return e.setFilter(t,a.target.checked)}}),n.a.createElement("label",{className:"filters__label",htmlFor:t},t))});return n.a.createElement("section",{className:"filters"},n.a.createElement("form",{className:"filters__form"},t))}function p(e){return n.a.createElement("article",{className:"card"},n.a.createElement("div",{className:"card__info"},n.a.createElement("div",{className:"card__name"},"Author: ",e.author," (",e.id,")"),n.a.createElement("div",{className:"card__artist"},"reads: ",e.reads)))}function h(e){return e.results.map(function(e){return n.a.createElement(p,Object.assign({key:e.collectionId},e))})}s.a.render(n.a.createElement(function(e){var t=Object(r.useState)({term:"",results:[],loading:!1}),a=Object(o.a)(t,2),c=a[0],s=a[1],m=Object(r.useState)([]),p=Object(o.a)(m,2),j=p[0],O=p[1],E=Object(r.useState)({Asc:!0,Reads:!1}),g=Object(o.a)(E,2),_=g[0],N=g[1],k=Object(r.useState)("id"),v=Object(o.a)(k,2),S=v[0],w=v[1],y=Object(r.useState)("asc"),x=Object(o.a)(y,2),A=x[0],D=x[1],F=Object(r.useState)(!1),R=Object(o.a)(F,2),B=(R[0],R[1]),C=Object(r.useRef)("");return Object(r.useEffect)(function(){""===C.current&&""===c.term||(s(function(e){return Object(u.a)({},e,{loading:!1})}),C.current=c.term,_.Reads&&w("reads"),_.Reads||w("id"),_.Asc&&D("asc"),_.Asc||D("desc"),f.a.get("https://cors-anywhere.herokuapp.com/https://alex-blog-api.herokuapp.com/api/posts?tags=".concat(c.term,"&sortBy=").concat(S,"&direction=").concat(A)).then(function(e){O(e.data.posts),e.data.results.sort(function(e,t){return Object(i.a)(new Date(t.releaseDate),new Date(e.releaseDate))}),s(function(e){return Object(u.a)({},e,{results:j,loading:!1})})}).catch(function(e){s({term:"",results:[],loading:!1}),B(!0)}))},[c.term]),n.a.createElement(r.Fragment,null,n.a.createElement("header",{className:"logo"},n.a.createElement("img",{src:"images/brand.png",alt:"Brand"})),n.a.createElement("main",null,n.a.createElement(d,{onSearch:function(e){return s(Object(u.a)({},c,{term:e}))}}),n.a.createElement(b,{filters:_,setFilter:function(e,t){return N(Object(u.a)({},_,Object(l.a)({},e,t)))}}),n.a.createElement(h,{results:j,filters:_})))},null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fda15336.chunk.js.map