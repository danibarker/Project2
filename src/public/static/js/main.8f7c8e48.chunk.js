(this.webpackJsonpmoviefy=this.webpackJsonpmoviefy||[]).push([[0],{12:function(e,t,n){},21:function(e,t,n){e.exports=n.p+"static/media/home.7341615b.png"},22:function(e,t,n){e.exports=n.p+"static/media/title.373e8623.png"},29:function(e,t,n){e.exports=n(40)},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),u=n.n(c),i=(n(34),n(5)),l=(n(12),n(18)),o=n(62),s=n(21),p=n.n(s),f=n(22),m=n.n(f);function d(e){var t,n=e.setCurrentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navBar"},r.a.createElement(o.a,{display:"flex",p:1,bgcolor:"background.paper"},r.a.createElement("div",{style:{width:"10%",margin:"auto"}},r.a.createElement("img",{style:{cursor:"pointer",width:"90%",margin:"0 5%"},width:"20px",src:p.a,p:1,onClick:function(){n("Navigation")}})),r.a.createElement("div",{style:{width:"70%",margin:"auto"}},r.a.createElement("img",{src:m.a,style:{width:"90%",height:"auto",margin:"0 5%"}})),r.a.createElement("div",{style:{width:"10%",display:"flex",justifyContent:"flex-end"}},r.a.createElement("button",(t={style:{width:"100%",height:"auto",padding:"0 20% 0 20%"},className:"btn btn-success"},Object(l.a)(t,"style",{fontSize:"2vw",paddingLeft:"5px",paddingRight:"5px",paddingTop:"0px",paddingBottom:"0px"}),Object(l.a)(t,"onClick",(function(){n("SignIn")})),t),"Sign in")))))}var v=n(2),h=n.n(v),b=n(4);function E(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/warnings?movieID="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("searchvalue",t),n=[],e.prev=2,e.next=5,fetch("/tmdb/findMovie?searchValue="+t,{method:"GET"});case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent).results&&r.results.forEach((function(e){n.length<6&&n.push({release_date:e.release_date,title:e.original_title,id:e.id})})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function O(e){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("/tmdb/getMovie?tmdb="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tmdb/popularMovies");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+"/api/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+"/api/movie/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=n(13);function T(){return(T=Object(b.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(D.a)(t);try{for(n.s();!(a=n.n()).done;)r=a.value,fetch("/api/warning/create",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({warning:{userID:r.userID,movieID:r.movieID,categoryID:r.categoryID,frequencyID:r.frequencyID,typeID:r.typeID,severityID:r.severityID}})})}catch(c){n.e(c)}finally{n.f()}case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return P.apply(this,arguments)}function P(){return(P=Object(b.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a="category"===t?JSON.stringify({title:n.title}):JSON.stringify({title:n.title,value:n.value}),fetch(""+"/api/".concat(t,"/create"),{method:"post",headers:{"Content-Type":"application/json"},body:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return A.apply(this,arguments)}function A(){return(A=Object(b.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=JSON.stringify({title:n.title}),fetch(""+"/api/".concat(t,"/delete"),{method:"post",headers:{"Content-Type":"application/json"},body:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return F.apply(this,arguments)}function F(){return(F=Object(b.a)(h.a.mark((function e(t,n){var a,r,c,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(t);case 3:return a=e.sent,e.abrupt("return",a._id);case 7:return e.prev=7,e.t0=e.catch(0),r=fetch("http://localhost:8000/api/movie/create",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,tmdb:t})}),e.next=12,r;case 12:return c=e.sent,e.next=15,c.json();case 15:return u=e.sent,e.abrupt("return",u._id);case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function L(e){var t=e.setPage,n=e.setMovie,c=Object(a.useState)([]),u=Object(i.a)(c,2),l=u[0],o=u[1];function s(){return(s=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,console.log(n),o(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"notebooks"},r.a.createElement("input",{id:"query",type:"text",onChange:function(e){!function(e){s.apply(this,arguments)}(e.target.value)},placeholder:"Search"}),l.map((function(e){return r.a.createElement("li",{key:e.id,onClick:Object(b.a)(h.a.mark((function a(){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M(e.id,e.title);case 2:r=a.sent,n({tmdb:e.id,title:e.title,id:r}),t("MovieInfo");case 5:case"end":return a.stop()}}),a)})))},e.title," (",e.release_date.split("-")[0],")")})))}var J=function(e){var t=e.setMovie,n=e.setPage;Object(a.useEffect)((function(){p()}),[]);var c=Object(a.useState)([]),u=Object(i.a)(c,2),l=u[0],s=u[1],p=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(o.a,{flexWrap:"wrap",display:"flex"},r.a.createElement("div",{className:"MovList"},l.map((function(e){return r.a.createElement(o.a,{key:e.title,id:"BoxStyle"},r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"vertical-center"},r.a.createElement("h4",null,r.a.createElement("div",{onClick:function(){return t(e.title)}},e.title)))),r.a.createElement("img",{onClick:Object(b.a)(h.a.mark((function a(){var r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M(e.id,e.title);case 2:r=a.sent,t({tmdb:e.id,title:e.title,id:r}),n("MovieInfo");case 5:case"end":return a.stop()}}),a)}))),src:" https://image.tmdb.org/t/p/w220_and_h330_face"+e.poster_path,alt:"no "})))}))))};function B(e){return e.reduce((function(e,t){return e+t}))/e.length}function G(e){var t=e.setCurrentPage,n=e.tmdb,c=e.movieID,u=e.movieTitle,l=Object(a.useState)([]),o=Object(i.a)(l,2),s=o[0],p=o[1],f=Object(a.useState)(),m=Object(i.a)(f,2),d=m[0],v=m[1],y=Object(a.useState)(),g=Object(i.a)(y,2),j=g[0],w=g[1],x=function(e,t,n){var a,r=Object(D.a)(d[e]);try{for(r.s();!(a=r.n()).done;){var c=a.value;if(c._id===t)return c[n]}}catch(u){r.e(u)}finally{r.f()}},C=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("categories");case 2:return t=e.sent,e.next=5,k("frequencies");case 5:return n=e.sent,e.next=8,k("types");case 8:return a=e.sent,e.next=11,k("severities");case 11:r=e.sent,v({categories:t,frequencies:n,types:a,severities:r});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n);case 2:t=e.sent,console.log(t),w(t.overview);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(c);case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return e.next=4,C();case 4:return e.next=6,S();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!d)return r.a.createElement("h1",null,"Loading...");var N={frequencies:{},types:{},severities:{}};d.frequencies.forEach((function(e){N.frequencies[e.value]=e.title})),d.types.forEach((function(e){N.types[e.value]=e.title})),d.severities.forEach((function(e){N.severities[e.value]=e.title}));var T={};s.forEach((function(e){var t=x("frequencies",e.frequencyID,"value"),n=x("severities",e.severityID,"value"),a=x("types",e.typeID,"value");Object.keys(T).includes(e.categoryID)?(T[e.categoryID].frequencies.push(t),T[e.categoryID].severities.push(n),T[e.categoryID].types.push(a)):T[e.categoryID]={frequencies:[t],severities:[n],types:[a]}}));var q=[];return Object.keys(T).forEach((function(e){q.push({category:x("categories",e,"title"),frequency:Math.round(B(T[e].frequencies)),type:Math.round(B(T[e].types)),severity:Math.round(B(T[e].severities))})})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"collapsible-tables pageContainer threeQuartersPageContainer"},r.a.createElement("h2",null,u)," ",r.a.createElement("div",{style:{right:"60%",top:"20%",marginBottom:"10px"},id:"movieDesc"},j),r.a.createElement("h3",null,"Warnings:"),r.a.createElement("table",{border:"2"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Severity"),r.a.createElement("th",null,"Frequency"),r.a.createElement("th",null,"Type"))),r.a.createElement("tbody",null,q.map((function(e){return r.a.createElement("tr",{key:q.indexOf(e)},r.a.createElement("td",{"data-title":"Category"},e.category),r.a.createElement("td",{"data-title":"Severity"},N.severities[e.severity]),r.a.createElement("td",{"data-title":"Frequency"},N.frequencies[e.frequency]),r.a.createElement("td",{"data-title":"Type"},N.types[e.type]))}))))),r.a.createElement("div",{className:"pageContainer warningPageContainer-Bottom"},r.a.createElement("button",{className:"btn btn-success",onClick:function(){t("AddWarning")}},"Add warning")))}function W(e){var t=e.setCurrentPage,n=e.userID,c=e.movieID,u=e.movieTitle,l=function(e,t){console.log("type",e,"id",t);var n,a=Object(D.a)(E[e]);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r._id===t)return r.title}}catch(c){a.e(c)}finally{a.f()}},o=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("categories");case 2:return t=e.sent,e.next=5,k("frequencies");case 5:return n=e.sent,e.next=8,k("types");case 8:return a=e.sent,e.next=11,k("severities");case 11:r=e.sent,y({categories:t,frequencies:n,types:a,severities:r});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=Object(a.useState)(!1),p=Object(i.a)(s,2),f=p[0],m=p[1],d=Object(a.useState)(),v=Object(i.a)(d,2),E=v[0],y=v[1],g=Object(a.useState)([]),j=Object(i.a)(g,2),O=j[0],w=j[1],x=Object(a.useState)(""),C=Object(i.a)(x,2),S=C[0],I=C[1],N=Object(a.useState)(""),q=Object(i.a)(N,2),P=q[0],_=q[1],A=Object(a.useState)(""),M=Object(i.a)(A,2),F=M[0],L=M[1],J=Object(a.useState)(""),B=Object(i.a)(J,2),G=B[0],W=B[1],R=Object(a.useState)(""),U=Object(i.a)(R,2),V=U[0],z=U[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),E?r.a.createElement("div",{className:"pageContainer fullPageContainer"},r.a.createElement("div",null,r.a.createElement("h2",null,"Add a warning to ",u)),r.a.createElement("br",null),r.a.createElement("div",{className:"ptther"},r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){I(e.target.value)}},r.a.createElement("option",null,"Choose a category"),E.categories.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){_(e.target.value)}},r.a.createElement("option",null,"Choose a frequency"),E.frequencies.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){L(e.target.value)}},r.a.createElement("option",null,"Choose a Type"),E.types.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){W(e.target.value)}},r.a.createElement("option",null,"Choose a Severity"),E.severities.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("textarea",{id:"commentBox",placeholder:"Additional comments",onChange:function(e){z(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-success",onClick:function(){S&&P&&F&&G?(m(!1),w(O.concat([{userID:n,movieID:c,categoryID:S,frequencyID:P,typeID:F,severityID:G,comment:V}]))):m(!0)}},"Add this warning")),f?r.a.createElement("div",{style:{color:"red"}},"Please choose a value from each dropdown"):null,r.a.createElement("br",null),r.a.createElement("div",{className:"part"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){!function(e){T.apply(this,arguments)}(O),t("Thanks")}},"Send All Warnings")),r.a.createElement("br",null),r.a.createElement("div",{className:"collapsible-tables"},r.a.createElement("table",{className:"center",border:"2"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Frequency"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Severity"),r.a.createElement("th",null,"Comment"))),O.length>0?r.a.createElement("tbody",null,O.map((function(e){return r.a.createElement("tr",{key:"row"+O.indexOf(e)},r.a.createElement("td",{"data-title":"Category",key:"c"+O.indexOf(e)},l("categories",e.categoryID)),r.a.createElement("td",{"data-title":"Frequency",key:"f"+O.indexOf(e)},l("frequencies",e.frequencyID)),r.a.createElement("td",{"data-title":"Type",key:"t"+O.indexOf(e)},l("types",e.typeID)),r.a.createElement("td",{"data-title":"Severity",key:"s"+O.indexOf(e)},l("severities",e.severityID)),r.a.createElement("td",{"data-title":"Comment",key:"co"+O.indexOf(e)},e.comment))}))):null),r.a.createElement("br",null),r.a.createElement("br",null))):r.a.createElement("div",null,"Loading...")}var R=n(52),U=n(53),V=n(54),z=n(55),K=n(56),Q=n(57),H=n(58),X=n(59),Y=n(60),Z=n(61);function $(e){var t=this,n=e.setCurrentPage,c=Object(a.useState)(""),u=Object(i.a)(c,2),l=u[0],o=u[1],s=Object(a.useState)(""),p=Object(i.a)(s,2),f=p[0],m=p[1];return r.a.createElement("div",{className:"app flex-row align-items-center"},r.a.createElement(R.a,null,r.a.createElement(U.a,{className:"justify-content-center"},r.a.createElement(V.a,{md:"9",lg:"7",xl:"6"},r.a.createElement(z.a,null,r.a.createElement(K.a,{className:"p-2"},r.a.createElement(Q.a,null,r.a.createElement(H.a,null,r.a.createElement("div",{className:"totheRight",style:{}},r.a.createElement(X.a,{className:"mb-3"},r.a.createElement(Y.a,{type:"text",onChange:function(e){var t;t=e.target.value,o(t.target.value)},placeholder:"Enter Email"})),r.a.createElement(X.a,{className:"mb-4"},r.a.createElement(Y.a,{type:"password",onChange:function(e){var t;t=e.target.value,m(t.target.value)},placeholder:"Enter Password"})),r.a.createElement(Z.a,{onClick:function(){fetch("http://localhost:3000/api/login/",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:l,password:f})}).then((function(e){return e.json()})).then((function(e){console.log(e),"Invalid"==e.Status?alert("Invalid User"):t.props.history.push("/Dashboard")}))},color:"success",block:!0},"Login"))),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){n("SignUp")}},"Create an Account"))))))))}var ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign up component"))};function te(e){var t=e.setCurrentPage;return Object(a.useEffect)((function(){setTimeout((function(){t("Navigation")}),2e3)})),r.a.createElement("div",null,r.a.createElement("h1",null,"Thank you for your contribution"))}var ne=function(e){e.setCurrentPage;var t,n=Object(a.useState)("Category","Frequency","Type","Severity"),c=Object(i.a)(n,2),u=c[0],l=c[1];return"Category"==u?t=r.a.createElement(ae,null):"Frequency"==u?t=r.a.createElement(re,null):"Type"==u?t=r.a.createElement(ce,null):"Severity"==u&&(t=r.a.createElement(ue,null)),r.a.createElement("div",null,r.a.createElement("select",{onChange:function(e){l(e.target.value)}},r.a.createElement("option",null,"Category"),r.a.createElement("option",null,"Frequency"),r.a.createElement("option",null,"Type"),r.a.createElement("option",null,"Severity")),t)},ae=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),l=Object(i.a)(u,2),o=l[0],s=l[1],p=Object(a.useState)(!1),f=Object(i.a)(p,2),m=f[0],d=f[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("categories");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,q("category",{title:o});case 3:setTimeout((function(){v(),d(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,_("category",{title:t});case 3:setTimeout((function(){v(),d(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?r.a.createElement("img",{src:"https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif"}):n?r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("div",null,n.map((function(e){return r.a.createElement("li",null,e.title," ",r.a.createElement("button",{onClick:function(){return y(e.title)},class:"deletebtn"}," Remove "))})))),r.a.createElement("div",null,r.a.createElement("h1",null,"Category"),r.a.createElement("h2",null,"Add"),r.a.createElement("input",{onChange:function(e){s(e.target.value)},placeholder:"New Category Title"}),r.a.createElement("button",{onClick:E,class:"submitbtn"},"Submit"))):r.a.createElement("h1",null,"Loading, please wait....")},re=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),l=Object(i.a)(u,2),o=l[0],s=l[1],p=Object(a.useState)(),f=Object(i.a)(p,2),m=f[0],d=f[1],v=Object(a.useState)(!1),E=Object(i.a)(v,2),y=E[0],g=E[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("frequencies");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,q("frequency",{title:o,value:m});case 3:setTimeout((function(){j(),g(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,_("frequency",{title:t});case 3:setTimeout((function(){j(),g(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y?r.a.createElement("img",{src:"https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif"}):n?r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("div",null,n.map((function(e){return r.a.createElement("li",null,e.title," ",r.a.createElement("button",{onClick:function(){return w(e.title)},class:"deletebtn"}," Remove "))})))),r.a.createElement("div",null,r.a.createElement("h1",null,"Frequency"),r.a.createElement("h2",null,"Add"),r.a.createElement("input",{onChange:function(e){s(e.target.value)},placeholder:"New Frequency Title"}),r.a.createElement("input",{onChange:function(e){d(e.target.value)},placeholder:"New Frequency Value"}),r.a.createElement("button",{onClick:O,class:"submitbtn"},"Submit"))):r.a.createElement("h1",null,"Loading, please wait....")},ce=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),l=Object(i.a)(u,2),o=l[0],s=l[1],p=Object(a.useState)(),f=Object(i.a)(p,2),m=f[0],d=f[1],v=Object(a.useState)(!1),E=Object(i.a)(v,2),y=E[0],g=E[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("types");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,q("type",{title:o,value:m});case 3:setTimeout((function(){j(),g(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,_("type",{title:t});case 3:setTimeout((function(){j(),g(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y?r.a.createElement("img",{src:"https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif"}):n?r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("div",null,n.map((function(e){return r.a.createElement("li",null,e.title," ",r.a.createElement("button",{onClick:function(){return w(e.title)},class:"deletebtn"}," Remove "))})))),r.a.createElement("div",null,r.a.createElement("h1",null,"Type"),r.a.createElement("h2",null,"Add"),r.a.createElement("input",{onChange:function(e){s(e.target.value)},placeholder:"New Type Title"}),r.a.createElement("input",{onChange:function(e){d(e.target.value)},placeholder:"New Type Value"}),r.a.createElement("button",{onClick:O,class:"submitbtn"},"Submit"))):r.a.createElement("h1",null,"Loading, please wait....")},ue=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),l=Object(i.a)(u,2),o=l[0],s=l[1],p=Object(a.useState)(),f=Object(i.a)(p,2),m=f[0],d=f[1],v=Object(a.useState)(!1),E=Object(i.a)(v,2),y=E[0],g=E[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("severities");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,q("severity",{title:o,value:m});case 3:setTimeout((function(){j(),g(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,_("severity",{title:t});case 3:setTimeout((function(){j(),g(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y?r.a.createElement("img",{src:"https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif"}):n?r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("div",null,n.map((function(e){return r.a.createElement("li",null,e.title," ",r.a.createElement("button",{onClick:function(){return w(e.title)},class:"deletebtn"}," Remove "))})))),r.a.createElement("div",null,r.a.createElement("h1",null,"Severity"),r.a.createElement("h2",null,"Add"),r.a.createElement("input",{onChange:function(e){s(e.target.value)},placeholder:"New Severity Title"}),r.a.createElement("input",{onChange:function(e){d(e.target.value)},placeholder:"New Severity Value"}),r.a.createElement("button",{onClick:O,class:"submitbtn"},"Submit"))):r.a.createElement("h1",null,"Loading, please wait....")};function ie(){var e=Object(a.useState)("Navigation"),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)({title:"The Lion King",id:"5fc1e881f7d9654d5c99ad9d",tmdb:""}),l=Object(i.a)(u,2),o=l[0],s=l[1],p=Object(a.useState)([]),f=Object(i.a)(p,2),m=(f[0],f[1],function(){switch(console.log(o.length),n){case"Thanks":return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{setCurrentPage:c}));case"Unused":return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){c("AddWarning")}},"Go to AddWarning Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("SearchMovie")}},"Go to Main Page Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("MovieInfo")}},"Go to Movie Info Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("SignIn")}},"Go to Sign In Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("SignUp")}},"Go to Sign Up Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("Admin")}},"Go to Admin Component"),r.a.createElement("br",null));case"AddWarning":return r.a.createElement(W,{setCurrentPage:c,movieTitle:o.title,movieID:o.id,userID:"5fc68a121262f52c7006d209"});case"Navigation":return r.a.createElement("div",{className:"App"},r.a.createElement(L,{setPage:c,setMovie:s}),r.a.createElement(J,{setPage:c,setMovie:s}));case"MovieInfo":return r.a.createElement("div",null,r.a.createElement(G,{tmdb:o.tmdb,setCurrentPage:c,movieTitle:o.title,movieID:o.id}));case"SignIn":return r.a.createElement($,{setCurrentPage:c});case"SignUp":return r.a.createElement(ee,null);case"Admin":return r.a.createElement(ne,null);default:return r.a.createElement("h1",null,"Error")}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{setCurrentPage:c}),r.a.createElement(m,null))}u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8f7c8e48.chunk.js.map