(this["webpackJsonpreact-pizza-updated"]=this["webpackJsonpreact-pizza-updated"]||[]).push([[0],{47:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(23),i=c.n(r),s=(c(47),c.p+"static/media/pizza-logo.56ac8703.svg"),o=c(14),d=c(0),l=function(e){var t=e.btnStyle,c=e.totalCount,n=e.totalPrice;return Object(d.jsx)(o.b,{to:"/cart",children:Object(d.jsxs)("button",{className:"button ".concat(t),children:[Object(d.jsxs)("span",{children:[n," \u20bd"]}),Object(d.jsx)("div",{className:"button__delimiter"}),Object(d.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{children:c})]})})},j=c(9),b=function(){var e=Object(j.c)((function(e){var t=e.cartPage;return{totalCount:t.totalCount,totalPrice:t.totalPrice}})),t=e.totalCount,c=e.totalPrice;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(o.b,{to:"/home",children:Object(d.jsxs)("div",{className:"header__logo",children:[Object(d.jsx)("img",{width:"38",src:s,alt:"Pizza logo"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"React Pizza"}),Object(d.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(d.jsx)("div",{className:"header__cart",children:Object(d.jsx)(l,{btnStyle:"button--cart",totalCount:t,totalPrice:c})})]})})})},u=function(e){var t=e.categoryItems,c=e.categoryToggle,n=e.activeCategory;return Object(d.jsx)("div",{className:"categories",children:Object(d.jsx)("ul",{children:t&&t.map((function(e){return Object(d.jsx)("li",{onClick:function(){return c(e)},className:e===n?"active":"",children:e},e)}))})})},h=c(6),p="VISIBLE_DROPDOWN",O="SET_ACTIVE_CATEGORY",x="SET_PIZZA_ITEMS",m="GET_PIZZA_ITEMS",v="SET_SORT_TYPE",C="IS_LOADING",f={visibleDropDown:!1,categoryItems:["\u0412\u0441\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],activeCategory:"\u0412\u0441\u0435",pizzaItems:null,sortTypeItems:["popular","price","name"],sortBy:"popular",isLoading:!1},g=function(e){return{type:p,payload:e}},z=function(e){return{type:C,payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(h.a)(Object(h.a)({},e),{},{visibleDropDown:t.payload});case O:return Object(h.a)(Object(h.a)({},e),{},{activeCategory:t.payload});case x:return Object(h.a)(Object(h.a)({},e),{},{pizzaItems:t.payload});case C:return Object(h.a)(Object(h.a)({},e),{},{isLoading:t.payload});case v:return Object(h.a)(Object(h.a)({},e),{},{sortBy:t.payload});default:return e}},w=["\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435","\u0442\u043e\u043d\u043a\u043e\u0435"],_={popular:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",price:"\u0446\u0435\u043d\u0435",name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"},k=function(e){var t=e.dropDownToggle,c=e.visibleDropDown,a=e.sortBy,r=e.sortTypeItems,i=Object(j.b)(),s=function(e){i({type:v,payload:e}),t(!1)},o=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(e){c&&o.current&&!o.current.contains(e.target)&&t(!1)};return document.body.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[c]),Object(d.jsxs)("div",{className:"sort",ref:function(e){return o.current=e},children:[Object(d.jsxs)("div",{className:"sort__label",children:[Object(d.jsx)("svg",{className:c?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(d.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(d.jsx)("span",{onClick:function(){i(g(!0))},children:_[a]})]}),c&&Object(d.jsx)("div",{className:"sort__popup",children:Object(d.jsx)("ul",{children:r&&r.map((function(e){return Object(d.jsx)("li",{onClick:function(){return s(e)},className:a===e?"active":"",children:_[e]},e)}))})})]})},P=c(32),L=c(22),N=c.n(L),B=function(e){var t=e.onClick,c=e.className,n=e.outline,a=e.children;return Object(d.jsx)("button",{onClick:t,className:N()("button",{"button-outline":n},c),children:a})},I=function(e){var t=e.pizzaItem,c=e.onAddPizza,a=e.addedPizzaCount,r=Object(n.useState)(0),i=Object(P.a)(r,2),s=i[0],o=i[1],l=Object(n.useState)(t.sizes[0]),j=Object(P.a)(l,2),b=j[0],u=j[1];return Object(d.jsxs)("div",{className:"pizza-block",children:[Object(d.jsx)("img",{className:"pizza-block__image",src:t.imageUrl,alt:"Pizza"}),Object(d.jsx)("h4",{className:"pizza-block__title",children:t.name}),Object(d.jsxs)("div",{className:"pizza-block__selector",children:[Object(d.jsx)("ul",{children:t.types.map((function(e){return Object(d.jsx)("li",{onClick:function(){return function(e){o(e)}(e)},className:N()({active:s===e,disabled:1===t.types.length}),children:w[e]},e)}))}),Object(d.jsx)("ul",{children:t.sizes.map((function(e){return Object(d.jsxs)("li",{onClick:function(){return function(e){u(e)}(e)},className:N()({active:b===e}),children:[e," \u0441\u043c."]},e)}))})]}),Object(d.jsxs)("div",{className:"pizza-block__bottom",children:[Object(d.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",t.price]}),Object(d.jsxs)(B,{id:t.id,onClick:function(){var e={id:t.id,imageUrl:t.imageUrl,name:t.name,type:s,size:b,price:t.price};c(e)},className:"button--outline button--add",children:[Object(d.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(d.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),a&&Object(d.jsx)("i",{children:a})]})]})]},t.id)},E=c(41),M=function(e){return Object(d.jsxs)(E.a,Object(h.a)(Object(h.a)({className:"pizza-block",speed:2,width:280,height:486,viewBox:"0 0 280 486",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:[Object(d.jsx)("circle",{cx:"133",cy:"130",r:"130"}),Object(d.jsx)("rect",{x:"0",y:"282",rx:"3",ry:"3",width:"280",height:"24"}),Object(d.jsx)("rect",{x:"0",y:"325",rx:"6",ry:"6",width:"280",height:"84"}),Object(d.jsx)("rect",{x:"0",y:"444",rx:"6",ry:"6",width:"70",height:"30"}),Object(d.jsx)("rect",{x:"126",y:"431",rx:"30",ry:"30",width:"150",height:"54"})]}))},D=c(18),V=c(27),Z="ADD_PIZZA",A="CLEAN_CART",T="REMOVE_PIZZA_GROUP",H="REMOVE_GROUP_PIZZA_ITEM",R="ADD_GROUP_PIZZA_ITEM",S={addedPizzas:{},totalPrice:0,totalCount:0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:var c=e.addedPizzas[t.payload.id]?[].concat(Object(V.a)(e.addedPizzas[t.payload.id].items),[t.payload]):[t.payload],n=Object(h.a)(Object(h.a)({},e.addedPizzas),{},Object(D.a)({},t.payload.id,{items:c,price:c.reduce((function(e,t){return t.price+e}),0)})),a=[].concat.apply([],Object.values(n)),r=Object.values(n).map((function(e){return e.items}));return Object(h.a)(Object(h.a)({},e),{},{addedPizzas:n,totalCount:[].concat.apply([],r).length,totalPrice:a.reduce((function(e,t){return t.price+e}),0)});case A:return{addedPizzas:{},totalPrice:0,totalCount:0};case T:var i=Object(h.a)({},e.addedPizzas),s=i[t.payload].price,o=i[t.payload].items.length;return delete i[t.payload],Object(h.a)(Object(h.a)({},e),{},{addedPizzas:i,totalPrice:e.totalPrice-s,totalCount:e.totalCount-o});case R:var d=[].concat(Object(V.a)(e.addedPizzas[t.payload].items),[e.addedPizzas[t.payload].items[0]]),l=Object(h.a)(Object(h.a)({},e.addedPizzas),{},Object(D.a)({},t.payload,Object(h.a)(Object(h.a)({},e.addedPizzas[t.payload]),{},{items:d,price:d.reduce((function(e,t){return t.price+e}),0)}))),j=[].concat.apply([],Object.values(l)),b=Object.values(l).map((function(e){return e.items}));return Object(h.a)(Object(h.a)({},e),{},{addedPizzas:l,totalCount:[].concat.apply([],b).length,totalPrice:j.reduce((function(e,t){return t.price+e}),0)});case H:var u=1===e.addedPizzas[t.payload].items.length?e.addedPizzas[t.payload].items:Object(V.a)(e.addedPizzas[t.payload].items.slice(1)),p=Object(h.a)(Object(h.a)({},e.addedPizzas),{},Object(D.a)({},t.payload,Object(h.a)(Object(h.a)({},e.addedPizzas[t.payload]),{},{items:u,price:u.reduce((function(e,t){return t.price+e}),0)}))),O=[].concat.apply([],Object.values(p)),x=Object.values(p).map((function(e){return e.items}));return Object(h.a)(Object(h.a)({},e),{},{addedPizzas:p,totalCount:[].concat.apply([],x).length,totalPrice:O.reduce((function(e,t){return t.price+e}),0)});default:return e}},G=function(){var e=Object(j.b)(),t=function(t){e(function(e){return{type:Z,payload:e}}(t))},c=Object(j.c)((function(e){var t=e.homePage;return{pizzaItems:t.pizzaItems,visibleDropDown:t.visibleDropDown,categoryItems:t.categoryItems,activeCategory:t.activeCategory,isLoading:t.isLoading,sortBy:t.sortBy,sortTypeItems:t.sortTypeItems}})),n=c.pizzaItems,a=c.visibleDropDown,r=c.categoryItems,i=c.activeCategory,s=c.isLoading,o=c.sortBy,l=c.sortTypeItems,b=Object(j.c)((function(e){return{addedPizzas:e.cartPage.addedPizzas}})).addedPizzas;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"content__top",children:[Object(d.jsx)(u,{categoryToggle:function(t){e(function(e){return{type:O,payload:e}}(t))},categoryItems:r,activeCategory:i}),Object(d.jsx)(k,{visibleDropDown:a,dropDownToggle:function(t){e(g(t))},sortBy:o,sortTypeItems:l})]}),Object(d.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(d.jsx)("div",{className:"content__items",children:s?Array(10).fill(0).map((function(e,t){return Object(d.jsx)(M,{},t)})):n&&n.map((function(e){return Object(d.jsx)(I,{addedPizzaCount:b[e.id]&&b[e.id].items.length,onAddPizza:t,pizzaItem:e},e.id)}))})]})},U=c(7),J=function(e){var t=e.name,c=e.size,n=e.price,a=e.type,r=e.count,i=e.id,s=e.onRemoveCartItem,o=e.onAddGroupPizzaItem,l=e.onRemoveGroupPizzaItem;return Object(d.jsxs)("div",{className:"cart__item",children:[Object(d.jsx)("div",{className:"cart__item-img",children:Object(d.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(d.jsxs)("div",{className:"cart__item-info",children:[Object(d.jsx)("h3",{children:t}),Object(d.jsxs)("p",{children:[w[a],", ",c," \u0441\u043c."]})]}),Object(d.jsxs)("div",{className:"cart__item-count",children:[Object(d.jsx)("button",{onClick:function(){return function(e){l(e)}(i)},className:"button button--outline button--circle cart__item-count-minus",children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(d.jsx)("b",{children:r}),Object(d.jsx)("button",{onClick:function(){return function(e){o(e)}(i)},className:"button button--outline button--circle cart__item-count-plus",children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(d.jsx)("div",{className:"cart__item-price",children:Object(d.jsxs)("b",{children:[n," \u20bd"]})}),Object(d.jsx)("div",{className:"cart__item-remove",children:Object(d.jsx)("button",{onClick:function(){return function(e){s(e)}(i)},className:"button button--outline button--circle",children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},Y=c.p+"static/media/empty-cart.db905d1f.png",q=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"cart cart--empty",children:[Object(d.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f \ud83d\ude15"}),Object(d.jsx)("p",{children:"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."}),Object(d.jsx)("img",{src:Y,alt:"Empty cart"}),Object(d.jsx)(o.b,{to:"/home",children:Object(d.jsx)("button",{className:"button button--black",children:Object(d.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})})]})})},F=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.cartPage})),c=t.addedPizzas,n=t.totalPrice,a=t.totalCount,r=function(t){e(function(e){return{type:T,payload:e}}(t))},i=function(t){e(function(e){return{type:R,payload:e}}(t))},s=function(t){e(function(e){return{type:H,payload:e}}(t))},l=Object.keys(c).map((function(e){return c[e].items[0]}));return Object(d.jsx)("div",{className:"container container--cart",children:l.length?Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsxs)("div",{className:"cart__top",children:[Object(d.jsxs)("h2",{className:"content__title",children:[Object(d.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(d.jsxs)("div",{className:"cart__clear",children:[Object(d.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{onClick:function(){window.confirm("\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&e({type:A})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(d.jsx)("div",{className:"content__items",children:l.map((function(e){return Object(d.jsx)(J,{id:e.id,name:e.name,size:e.size,type:e.type,price:c[e.id].price,count:c[e.id].items.length,onRemoveCartItem:r,onAddGroupPizzaItem:i,onRemoveGroupPizzaItem:s},e.id)}))}),Object(d.jsxs)("div",{className:"cart__bottom",children:[Object(d.jsxs)("div",{className:"cart__bottom-details",children:[Object(d.jsxs)("span",{children:[" \u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(d.jsxs)("b",{children:[a," \u0448\u0442."]})," "]}),Object(d.jsxs)("span",{children:[" \u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(d.jsxs)("b",{children:[n," \u20bd"]})," "]})]}),Object(d.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(d.jsx)(o.b,{to:"/home",children:Object(d.jsxs)("button",{className:"button button--outline button--add go-back-btn",children:[Object(d.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(d.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})}),Object(d.jsx)("div",{className:"button pay-btn",children:Object(d.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]}):Object(d.jsx)(q,{})})},K=function(){var e=Object(j.c)((function(e){var t=e.homePage;return{activeCategory:t.activeCategory,sortBy:t.sortBy}})),t=e.activeCategory,c=e.sortBy,a=Object(j.b)();return Object(n.useEffect)((function(){a(function(e,t){return{type:m,payload:{activeCategory:e,sortBy:t}}}(t,c))}),[t,c]),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(U.d,{children:[Object(d.jsx)(U.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(U.a,{to:"/home"})}}),Object(d.jsx)(U.b,{path:"/home",render:function(){return Object(d.jsx)(G,{})}}),Object(d.jsx)(U.b,{path:"/cart",render:function(){return Object(d.jsx)(F,{})}}),Object(d.jsx)(U.b,{path:"*",render:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:"404 not found"})})}})]})})]})},Q=c(19),X=c(42),$=c(15),ee=c.n($),te=c(16),ce=c(55),ne={"\u0412\u0441\u0435":0,"\u041c\u044f\u0441\u043d\u044b\u0435":1,"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f":2,"\u0413\u0440\u0438\u043b\u044c":3,"\u041e\u0441\u0442\u0440\u044b\u0435":4,"\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435":5},ae=function(e,t){return ce.get("/pizzas?".concat(ne[e]>0?"category=".concat(ne[e]):"","&_sort=").concat(t,"&_order=").concat("name"===t?"asc":"desc"))},re=ee.a.mark(oe),ie=ee.a.mark(de),se=ee.a.mark(le);function oe(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.b)(de);case 2:case"end":return e.stop()}}),re)}function de(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(m,le);case 2:case"end":return e.stop()}}),ie)}function le(e){var t;return ee.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(te.c)(z(!0));case 3:return c.next=5,Object(te.a)(ae,e.payload.activeCategory,e.payload.sortBy);case 5:return t=c.sent,c.next=8,Object(te.c)(z(!1));case 8:if(!t.data){c.next=13;break}return c.next=11,Object(te.c)((n=t.data,{type:x,payload:n}));case 11:c.next=14;break;case 13:throw new Error;case 14:c.next=19;break;case 16:c.prev=16,c.t0=c.catch(0),alert(c.t0);case 19:case"end":return c.stop()}var n}),se,null,[[0,16]])}var je=Object(Q.b)({homePage:y,cartPage:W}),be=Object(X.a)(),ue=Object(Q.d)(je,Object(Q.a)(be));be.run(oe);var he=ue;i.a.render(Object(d.jsx)(j.a,{store:he,children:Object(d.jsx)(o.a,{children:Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(K,{})})})}),document.getElementById("root")),window.store=he}},[[74,1,2]]]);
//# sourceMappingURL=main.343f530c.chunk.js.map