(this.webpackJsonpfakestore=this.webpackJsonpfakestore||[]).push([[0],{38:function(t,e,c){},62:function(t,e,c){},68:function(t,e,c){},69:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),a=c(14),s=c.n(a),i=c(9),o=c.n(i),d=c(15),j=(c(38),c(16)),u=c.n(j),p=c(7),l="SET_DATA",b="SELECT_DATA",O="REMOVE_SELECTED_DATA",h=(c(62),c(18)),f=c(1),x=function(t){var e=Object(p.c)((function(t){return t}));return e=e.products.product,Object(f.jsx)("div",{className:"body",children:e.map((function(t){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"product",children:[Object(f.jsx)("h4",{children:t.title}),Object(f.jsx)(h.b,{to:"/product/".concat(t.id),children:Object(f.jsx)("img",{src:t.image,alt:t.title})}),Object(f.jsxs)("p",{children:["$ ",t.price]})]},t.id)})}))})},v=function(t){return Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("p",{children:"FakeStore"})})},g=(c(68),c(2)),m=function(t){var e=Object(p.c)((function(t){return t})).product.payload,c=Object(p.b)(),r=Object(g.f)();return console.log(e),Object(n.useEffect)((function(){var t=function(){var t=Object(d.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://fakestoreapi.com/products/".concat(r.productId)).catch((function(t){console.log("msg",t)}));case 2:e=t.sent,c((n=e.data,{type:b,payload:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(){return t.apply(this,arguments)}}();return r.productId&&""!==r.productId&&t(),function(){c({type:O})}}),[r,c]),Object(f.jsx)(f.Fragment,{children:e?Object(f.jsxs)("div",{className:"productInfo",children:[Object(f.jsx)("div",{className:"productInfo__left",children:Object(f.jsx)("img",{src:e.image,alt:e.title})}),Object(f.jsxs)("div",{className:"productInfo__right",children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsx)("strong",{children:"Price"}),Object(f.jsxs)("p",{children:["$ ",e.price]}),Object(f.jsx)("strong",{children:"Description"}),Object(f.jsxs)("p",{children:[" ",e.description]}),Object(f.jsx)("strong",{children:"Rating"}),Object(f.jsxs)("p",{children:[e.rating.rate," / 5 (Total ",e.rating.count," Review)"]})]})]}):Object(f.jsx)("div",{children:"...Loading"})})};var _=function(){var t=Object(p.b)();return Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://fakestoreapi.com/products").catch((function(t){return console.log(t)}));case 2:c=e.sent,t((n=c.data,{type:l,payload:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(v,{}),Object(f.jsxs)(g.c,{children:[Object(f.jsx)(g.a,{exact:!0,path:"/",children:Object(f.jsx)(x,{})}),Object(f.jsx)(g.a,{path:"/product/:productId",children:Object(f.jsx)(m,{})})]})]})})},E=c(17),y=c(10),w={product:[]},N=Object(E.a)({products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;return c===l?Object(y.a)(Object(y.a)({},t),{},{product:n}):t},product:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case b:return{payload:n};case O:return{};default:return t}}}),T=Object(E.b)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(p.a,{store:T,children:Object(f.jsx)(_,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6566f151.chunk.js.map