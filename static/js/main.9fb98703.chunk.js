(this["webpackJsonpreact-crud-app"]=this["webpackJsonpreact-crud-app"]||[]).push([[0],{14:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABQ0lEQVRIx+2VMU7DMBSG/5cqqEeoEEN8hbJUTHEkb2y9Akgd4ApwCEZ6hYqVyfaEOpQ7WEKqQOIEieSwRKJq4uekUCb+0e9//4v1OTYwQFLKhZRyMaSHBoRf1HVtAICIpDHm5dcGFEVx6r1/BTBplt6TJDnXWm9jvUnMoJQae+9XO+EAMPHer5RS4x8PqKrqAcCsozRraqxGXLEBesdYpkKID+fcJmQIMtiBehL5yJKD3jmgA2pMQegtBgGoMQWhtwYwUGPqBf1ff6/WMc3z/BHA1YF5S2vt9e5C6xSlaXoLYH1A+Lrp5XcAHPlHAwCt9ZaI5gDKHuElEc1DV3fwsnPOvQkhPgFcculEdGOMeQrV2dvUObfJsuwMwDRgWVpr77mM6HvAQO+E2tphzAAc+ckEWtBZqPsa9TEB39CJ6JmDuq8vH9uTjEx14LcAAAAASUVORK5CYII="},29:function(e,t,a){e.exports=a.p+"static/media/placeholder-user.6a51178c.jpg"},32:function(e,t,a){e.exports=a(70)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=a(8),i=a(10),o=a(28),u=a(4),m=a.n(u),f=a(11),p=a(5),E=a(1),d=a(12),v=a.n(d),b="https://reqres.in/api";function g(e){var t=e.first_name,a=e.last_name,n=e.email;return v.a.post("".concat(b,"/users"),{email:n,first_name:t,last_name:a})}function h(e,t){return v.a.put("".concat(b,"/users/").concat(e),{avatar:t.avatar,id:e,email:t.email,first_name:t.first_name,last_name:t.last_name})}function _(e){return v.a.delete("".concat(b,"/users/").concat(e))}a(62),a(63);var S=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"logo"},"BotBaba ReactJS Assignment")))},O=(a(64),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"copyright"},"App for Assignment Purpose Only")))}),N=(a(65),a(29)),A=a.n(N),j=a(14),C=a.n(j),y=function(e){return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement("table",{className:"data-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{onClick:function(){e.onSortChange("name")}},r.a.createElement("span",{className:"column-sort"},"First Name",r.a.createElement("img",{src:C.a,alt:"First Name"}))),r.a.createElement("th",{onClick:function(){e.onSortChange("surname")}},r.a.createElement("span",{className:"column-sort"},"Last Name",r.a.createElement("img",{src:C.a,alt:"Last Name"}))),r.a.createElement("th",{onClick:function(){e.onSortChange("email")}},r.a.createElement("span",{className:"column-sort"},"E-Mail",r.a.createElement("img",{src:C.a,alt:"E-Mail"}))),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.users.length?e.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"field-avatar"},r.a.createElement("img",{src:t.avatar?t.avatar:A.a,alt:t.first_name})),r.a.createElement("td",null,t.first_name),r.a.createElement("td",null,t.last_name),r.a.createElement("td",null,t.email),r.a.createElement("td",{className:"field-actions"},r.a.createElement("button",{className:"primary-btn",onClick:function(){e.updateRow(t)}},"Update"),r.a.createElement("button",{className:"field-actions__delete",onClick:function(){return e.deleteRow(t)}},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5"},r.a.createElement("div",{className:"no-record-message"},"No Record!"))))))},U=a(6),w=a(3),k=function(e){var t=Object(n.useState)({id:null,first_name:"",last_name:"",email:""}),a=Object(E.a)(t,2),c=a[0],l=a[1],s=function(e){var t=e.target,a=t.name,n=t.value;l(Object(w.a)(Object(w.a)({},c),{},Object(U.a)({},a,n)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c.first_name&&c.last_name&&e.createUser(c)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"first_name",value:c.first_name,onChange:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"last_name",value:c.last_name,onChange:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"E-Mail"),r.a.createElement("input",{type:"email",name:"email",value:c.email,onChange:s})),r.a.createElement("div",{className:"form-group form-group--actions"},r.a.createElement("button",{className:"primary-btn"},"Create"),r.a.createElement("button",{className:"cancel-btn",onClick:function(t){t.preventDefault(),e.setActiveModal({active:!1})}},"Cancel")))},x=function(e){var t=Object(n.useState)(e.currentUser),a=Object(E.a)(t,2),c=a[0],l=a[1],s=function(e){var t=e.target,a=t.name,n=t.value;l(Object(w.a)(Object(w.a)({},c),{},Object(U.a)({},a,n)))};return Object(n.useEffect)((function(){l(e.currentUser)}),[e]),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(c.id,c)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"first_name",value:c.first_name,onChange:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"last_name",value:c.last_name,onChange:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"E-Mail"),r.a.createElement("input",{type:"email",name:"email",value:c.email,onChange:s})),r.a.createElement("div",{className:"form-group form-group--actions"},r.a.createElement("button",{className:"primary-btn"},"Update"),r.a.createElement("button",{className:"cancel-btn",onClick:function(t){t.preventDefault(),e.setActiveModal({active:!1})}},"Cancel")))},R=function(e){var t=Object(n.useState)(e.currentUser),a=Object(E.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){l(e.currentUser)}),[e]),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.deleteUser(c.id)}},r.a.createElement("div",{className:"form-group"},"Are you sure you want to delete ",c.first_name," ",c.last_name,"?"),r.a.createElement("div",{className:"form-group form-group--actions"},r.a.createElement("button",{className:"primary-btn"},"Delete"),r.a.createElement("button",{className:"cancel-btn",onClick:function(t){t.preventDefault(),e.setActiveModal({active:!1})}},"Cancel")))},M=(a(66),function(e){var t=e.children,a=e.activeModal;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-content__title"},a.name),r.a.createElement("div",{className:"modal-content__body"},t)))}),D=(a(67),function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(E.a)(s,2),o=i[0],u=i[1];return r.a.createElement("form",{className:"search-form",onSubmit:function(t){!function(t){t.preventDefault(),l(""),c.length>2?u(!0):u(!1),e.search(c)}(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){var a=t.target.value;l(a),a.length||e.search(a)},value:c}),r.a.createElement("button",{className:"primary-btn"},"Search")),o&&r.a.createElement("span",{className:"reset-search-btn",onClick:function(){u(!1),e.resetSearch("")}},"Reset Search ",r.a.createElement("strong",null,"X")))}),B=(a(68),function(e){var t=e.totalResults,a=e.currentPage,c=e.paginate,l=e.pageSize,s=Object(n.useState)([]),i=Object(E.a)(s,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){for(var e=Math.ceil(t/l),a=[],n=1;n<=e;n++)a.push(n);u(a)}),[t,a,l]),r.a.createElement("ul",{className:"pagination"},a>1&&t>5&&r.a.createElement("li",{className:"pagination__pager"},r.a.createElement("button",{onClick:function(){return c(a-1)}},"Previous")),o.map((function(e,t){return r.a.createElement("li",{key:t,className:a===e?"pagination__pager pagination__pager--number pagination__pager--active":"pagination__pager pagination__pager--number"},r.a.createElement("button",{onClick:function(){return c(e)}},e))})),a<o.length&&r.a.createElement("li",{className:"pagination__pager"},r.a.createElement("button",{onClick:function(){return c(a+1)}},"Next")))}),T=(a(69),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"50",cy:"50",r:"45"})))});var q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.users})),a=Object(n.useState)(!1),c=Object(E.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)({id:null,avatar:null,first_name:"",last_name:"",email:""}),u=Object(E.a)(o,2),d=u[0],N=u[1],A=Object(n.useState)({name:"",active:!1}),j=Object(E.a)(A,2),C=j[0],U=j[1],w=Object(n.useState)(t),q=Object(E.a)(w,2),F=q[0],H=q[1],J=Object(n.useState)(5),L=Object(E.a)(J,1)[0],Q=Object(n.useState)(1),I=Object(E.a)(Q,2),V=I[0],K=I[1],W=Object(n.useState)(!1),Y=Object(E.a)(W,2),G=Y[0],X=Y[1],z=V*L,Z=z-L,$=t.slice(Z,z),ee=function(e){te(""),U({name:e,active:!0})},te=function(t){if(t.length>2){K(1);var a=F.filter((function(e){return Object.keys(e).some((function(a){return e[a].toString().toLowerCase().includes(t.toString().toLowerCase())}))}));e({type:"SET_USERS",data:a})}else t.length||e({type:"SET_USERS",data:F})},ae=function(){var a=Object(f.a)(m.a.mark((function a(n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return U(!1),s(!0),a.prev=2,a.next=5,g(n).then((function(a){var n=a.data;P.fire({icon:"success",title:"User created successfully."}).then((function(){e({type:"CREATE_USER",data:n}),H([].concat(Object(p.a)(t),[n]))}))}));case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),P.fire({icon:"error",title:"Failed to create user."});case 10:return a.prev=10,s(!1),a.finish(10);case 13:case"end":return a.stop()}}),a,null,[[2,7,10,13]])})));return function(e){return a.apply(this,arguments)}}(),ne=function(){var a=Object(f.a)(m.a.mark((function a(n,r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return U(!1),s(!0),a.prev=2,a.next=5,h(n,r).then((function(a){var r=a.data;P.fire({icon:"success",title:"User updated successfully."}).then((function(){e({type:"SET_USERS",data:t.map((function(e){return e.id===n?Object.assign(e,r):e}))})}))}));case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),P.fire({icon:"error",title:"Failed to update user."});case 10:return a.prev=10,s(!1),a.finish(10);case 13:case"end":return a.stop()}}),a,null,[[2,7,10,13]])})));return function(e,t){return a.apply(this,arguments)}}(),re=function(){var a=Object(f.a)(m.a.mark((function a(n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return U(!1),s(!0),a.prev=2,a.next=5,_(n).then((function(){P.fire({icon:"success",title:"User deleted successfully."}).then((function(){e({type:"SET_USERS",data:t.filter((function(e){return e.id!==n}))}),H(F.filter((function(e){return e.id!==n}))),K(1)}))}));case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),P.fire({icon:"error",title:"Failed to delete user."});case 10:return a.prev=10,s(!1),a.finish(10);case 13:case"end":return a.stop()}}),a,null,[[2,7,10,13]])})));return function(e){return a.apply(this,arguments)}}(),ce=function(){var t=Object(f.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,v.a.get("".concat(b,"/users")).then((function(t){var a=t.data;H(a.data),e({type:"SET_USERS",data:a.data})}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),P.fire({icon:"error",title:"Failed to fetch users."});case 9:return t.prev=9,setTimeout((function(){s(!1)}),500),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[1,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){ce()}),[]),r.a.createElement("div",{className:"app"},r.a.createElement(S,null),r.a.createElement("main",{className:"content"},r.a.createElement("div",{className:"container"},l?r.a.createElement(T,null):r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"toolbar"},r.a.createElement(D,{search:te,resetSearch:te}),r.a.createElement("button",{className:"primary-btn",onClick:function(){return ee("Create User")}},"Create New User")),r.a.createElement(y,{users:$,updateRow:function(e){ee("Update User"),N({id:e.id,avatar:e.avatar,first_name:e.first_name,last_name:e.last_name,email:e.email})},deleteRow:function(e){ee("Delete User"),N({id:e.id,avatar:e.avatar,first_name:e.first_name,last_name:e.last_name,email:e.email})},onSortChange:function(t){switch(X(!G),t){case"name":var a=Object(p.a)(F).sort((function(e,t){return G?e.first_name.localeCompare(t.first_name,"tr"):t.first_name.localeCompare(e.first_name,"tr")}));return void e({type:"SET_USERS",data:a});case"surname":var n=Object(p.a)(F).sort((function(e,t){return G?e.last_name.localeCompare(t.last_name,"tr"):t.last_name.localeCompare(e.last_name,"tr")}));return void e({type:"SET_USERS",data:n});case"email":var r=Object(p.a)(F).sort((function(e,t){return G?e.email.localeCompare(t.email,"tr"):t.email.localeCompare(e.email,"tr")}));return void e({type:"SET_USERS",data:r})}}}),r.a.createElement(B,{totalResults:t.length,currentPage:V,pageSize:L,paginate:function(e){K(e)}})))),C.active&&r.a.createElement(M,{activeModal:C},"Create User"===C.name&&r.a.createElement(k,{createUser:ae,setActiveModal:U}),"Update User"===C.name&&r.a.createElement(x,{currentUser:d,updateUser:ne,setActiveModal:U}),"Delete User"===C.name&&r.a.createElement(R,{currentUser:d,deleteUser:re,setActiveModal:U})),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F={users:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(w.a)(Object(w.a)({},e),{},{users:t.data});case"CREATE_USER":return Object(w.a)(Object(w.a)({},e),{},{users:[].concat(Object(p.a)(e.users),[t.data])});default:return e}},J=a(30),L=a.n(J),Q=a(31),I=a.n(Q)()(L.a),P=t.default=I,V=Object(s.createStore)(H,Object(o.composeWithDevTools)());l.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.9fb98703.chunk.js.map