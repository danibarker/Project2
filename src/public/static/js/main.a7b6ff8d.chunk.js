(this.webpackJsonpmoviefy=this.webpackJsonpmoviefy||[]).push([[0],{13:function(e,t,n){},36:function(e,t,n){e.exports=n(48)},41:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),l=n.n(c),o=(n(41),n(2)),i=n.n(o),u=n(6),s=n(4),m=(n(13),n(27)),p=n(28),f=n(33),d=n(32),v=n(59),E=n(18),y=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={toggle:!1},e.Toggle=function(){e.setState({toggle:!e.state.toggle})},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navBar"},r.a.createElement(v.a,{display:"flex",p:1,bgcolor:"background.paper"},r.a.createElement(v.a,{p:1,bgcolor:"grey.300"},r.a.createElement(E.b,{to:"/"}," Home")),r.a.createElement(v.a,{textAlign:"center",flexGrow:1,p:1},"The Movie Warning Database"),r.a.createElement(v.a,{p:1,bgcolor:"grey.300"}),r.a.createElement(v.a,{p:1,bgcolor:"grey.300"}))))}}]),n}(a.Component);function g(e){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("searchvalue",t),n=[],e.prev=2,e.next=5,fetch("/tmdb/findMovie?searchValue="+t,{method:"GET"});case 5:return a=e.sent,e.next=8,a.json();case 8:(r=e.sent).results&&r.results.forEach((function(e){n.length<6&&n.push(e.original_title)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function h(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tmdb/popularMovies");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+"/api/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=e.setMovie,n=Object(a.useState)([]),c=Object(s.a)(n,2),l=c[0],o=c[1];function m(){return(m=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,console.log(n),o(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"notebooks"},r.a.createElement("input",{id:"query",type:"text",onChange:function(e){!function(e){m.apply(this,arguments)}(e.target.value)},placeholder:"Search"}),l.map((function(e){return r.a.createElement("li",{onClick:function(){return t(e)}},e)})))}var k=n(3);var x=function(e){var t=e.setMovie;Object(a.useEffect)((function(){m()}),[]);var n=Object(a.useState)([]),c=Object(s.a)(n,2),l=c[0],o=c[1],m=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{flexWrap:"wrap",display:"flex"},r.a.createElement("div",{className:"MovList"},l.map((function(e){return r.a.createElement(v.a,{id:"BoxStyle"},r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"vertical-center"},r.a.createElement("h1",{key:e.title},r.a.createElement("div",{onClick:function(){return t(e.title)}},e.title)))),r.a.createElement("img",{onClick:function(){return t(e.title)},src:" https://image.tmdb.org/t/p/w220_and_h330_face"+e.poster_path,alt:"no ",style:{width:"200px"}})))}))))};var I=function(e){return e.match,r.a.createElement("div",null)};function S(e){var t=e.movieID,n=[],a=[{category:"Animal Death",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:2,severity:2,frequency:9}].reduce((function(e,t){return n.includes(t.category)?(e[t.category].type+=t.type,e[t.category].severity+=t.severity,e[t.category].frequency+=t.frequency,e[t.category].count++,e):(n.push(t.category),e[t.category]=t,e[t.category].count=1,e)}),{});console.log(a);var c=Object.keys(a).map((function(e){var t=a[e];return r.a.createElement("li",{className:"warningListItem"},r.a.createElement("div",null,r.a.createElement("strong",null,t.category,":")),r.a.createElement("div",null,"Type:",r.a.createElement("span",{className:"red"},Math.round(t.type/t.count))),r.a.createElement("div",null,"Severity:",r.a.createElement("span",{className:"yellow"},Math.round(t.severity/t.count))),r.a.createElement("div",null,"Frequency:",r.a.createElement("span",{className:"green"},Math.round(t.frequency/t.count))),r.a.createElement("div",null,r.a.createElement("button",null,"View user comments")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pageContainer threeQuartersPageContainer"},r.a.createElement("h2",null,t),r.a.createElement("h3",null,"Warnings:"),r.a.createElement("ul",{className:"warningList"},c)),r.a.createElement("div",{className:"pageContainer warningPageContainer-Bottom"},r.a.createElement("button",null,"Add warning")))}var D=n(19);function N(e){var t=e.setCurrentPage,n=e.userID,c=e.movieID,l=e.movieTitle,o=function(e,t){console.log("type",e,"id",t);var n,a=Object(D.a)(g[e]);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r._id===t)return r.title}}catch(c){a.e(c)}finally{a.f()}},m=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("categories");case 2:return t=e.sent,e.next=5,O("frequencies");case 5:return n=e.sent,e.next=8,O("types");case 8:return a=e.sent,e.next=11,O("severities");case 11:r=e.sent,b({categories:t,frequencies:n,types:a,severities:r});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=Object(a.useState)(!1),f=Object(s.a)(p,2),d=f[0],v=f[1],E=Object(a.useState)(),y=Object(s.a)(E,2),g=y[0],b=y[1],h=Object(a.useState)([]),C=Object(s.a)(h,2),j=C[0],w=C[1],k=Object(a.useState)(""),x=Object(s.a)(k,2),I=x[0],S=x[1],N=Object(a.useState)(""),q=Object(s.a)(N,2),M=q[0],T=q[1],_=Object(a.useState)(""),A=Object(s.a)(_,2),G=A[0],F=A[1],P=Object(a.useState)(""),V=Object(s.a)(P,2),B=V[0],W=V[1],J=Object(a.useState)(""),L=Object(s.a)(J,2),U=L[0],H=L[1];return Object(a.useEffect)((function(){m()}),[]),g?r.a.createElement("div",{className:"pageContainer fullPageContainer"},r.a.createElement("div",null,"Add a warning to ",l),r.a.createElement("br",null),r.a.createElement("div",{className:"ptther"},r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){S(e.target.value)}},r.a.createElement("option",null,"Choose a category"),g.categories.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){T(e.target.value)}},r.a.createElement("option",null,"Choose a frequency"),g.frequencies.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){F(e.target.value)}},r.a.createElement("option",null,"Choose a Type"),g.types.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("select",{className:"add-warning-dropdown",onChange:function(e){W(e.target.value)}},r.a.createElement("option",null,"Choose a Severity"),g.severities.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.title)}))),r.a.createElement("label",{htmlFor:"commentBox"},"Details:"),r.a.createElement("textarea",{id:"commentBox",rows:"10",cols:"80",onChange:function(e){H(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){I&&M&&G&&B?(v(!1),w(j.concat([{userID:n,movieID:c,categoryID:I,frequencyID:M,typeID:G,severityID:B,comment:U}]))):v(!0)}},"Add this warning")),d?r.a.createElement("div",{style:{color:"red"}},"Please choose a value from each dropdown"):null,r.a.createElement("br",null),r.a.createElement("div",{className:"part"},r.a.createElement("button",{onClick:function(){!function(e){var t,n=Object(D.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;fetch("/api/warning/create",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({warning:{userID:a.userID,movieID:a.movieID,categoryID:a.categoryID,frequencyID:a.frequencyID,typeID:a.typeID,severityID:a.severityID}})})}}catch(r){n.e(r)}finally{n.f()}}(j),t("Thanks")}},"Send Data")),r.a.createElement("br",null),r.a.createElement("div",{className:"collapsible-tables"},r.a.createElement("table",{className:"center",border:"2"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Frequency"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Severity"),r.a.createElement("th",null,"Comment"))),j.length>0?r.a.createElement("tbody",null,j.map((function(e){return r.a.createElement("tr",{key:"row"+j.indexOf(e)},r.a.createElement("td",{"data-title":"Category",key:"c"+j.indexOf(e)},o("categories",e.categoryID)),r.a.createElement("td",{"data-title":"Frequency",key:"f"+j.indexOf(e)},o("frequencies",e.frequencyID)),r.a.createElement("td",{"data-title":"Type",key:"t"+j.indexOf(e)},o("types",e.typeID)),r.a.createElement("td",{"data-title":"Severity",key:"s"+j.indexOf(e)},o("severities",e.severityID)),r.a.createElement("td",{"data-title":"Comment",key:"co"+j.indexOf(e)},e.comment))}))):null),r.a.createElement("br",null),r.a.createElement("br",null))):null}var q=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign in component"))};var M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign up component"))};function T(e){var t=e.setCurrentPage;return Object(a.useEffect)((function(){setTimeout((function(){t("Navigation")}),2e3)})),r.a.createElement("div",null,"Thank you for your contribution")}function _(){var e=Object(a.useState)("Navigation"),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(s.a)(l,2),m=o[0],p=o[1],f=Object(a.useState)([]),d=Object(s.a)(f,2),v=d[0],g=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(y,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/",exact:!0,component:function(){switch(console.log(m.length),n){case"Thanks":return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{setCurrentPage:c}));case"Navigation":return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){c("AddWarning")}},"Go to AddWarning Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("SearchMovie")}},"Go to Main Page Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("MovieInfo")}},"Go to Movie Info Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("SignIn")}},"Go to Sign In Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("SignUp")}},"Go to Sign Up Component"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c("Admin")}},"Go to Admin Component"),r.a.createElement("br",null));case"AddWarning":return r.a.createElement(N,{setCurrentPage:c,movieTitle:"The Lion King",movieID:"5fc1e881f7d9654d5c99ad9d",userID:"5fc68a121262f52c7006d209"});case"SearchMovie":return r.a.createElement("div",{className:"App"},r.a.createElement(w,{setMovie:p}),r.a.createElement(x,{setMovie:p}));case"MovieInfo":return r.a.createElement("div",null,r.a.createElement(w,{setMovie:p}),r.a.createElement(S,{movieID:m}),r.a.createElement("button",{onClick:function(){return p("")}},"Go back to search"));case"SignIn":return r.a.createElement(q,null);case"SignUp":return r.a.createElement(M,null);case"Admin":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"hello"}),r.a.createElement("button",{onClick:Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(document.getElementById("hello").value);case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})))},"Get Stuff"),r.a.createElement("br",null),v.map((function(e){return r.a.createElement("div",null,JSON.stringify(e))})));default:return r.a.createElement("h1",null,"Error")}}}),r.a.createElement(k.a,{path:"/:id",component:I}))))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a7b6ff8d.chunk.js.map