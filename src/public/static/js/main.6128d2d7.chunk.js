(this.webpackJsonpmoviefy=this.webpackJsonpmoviefy||[]).push([[0],{13:function(e,t,a){},34:function(e,t,a){e.exports=a(46)},39:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=(a(39),a(12)),i=(a(13),a(25)),s=a(26),u=a(31),m=a(30),p=a(57),v=a(18),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={toggle:!1},e.Toggle=function(){e.setState({toggle:!e.state.toggle})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navBar"},r.a.createElement(p.a,{display:"flex",p:1,bgcolor:"background.paper"},r.a.createElement(p.a,{p:1,bgcolor:"grey.300"},r.a.createElement(v.b,{to:"/"}," Home")),r.a.createElement(p.a,{textAlign:"center",flexGrow:1,p:1},"The Movie Warning Database"),r.a.createElement(p.a,{p:1,bgcolor:"grey.300"}),r.a.createElement(p.a,{p:1,bgcolor:"grey.300"}))))}}]),a}(n.Component),y=a(5),f=a.n(y),E=a(11);function d(e){var t=e.setMovie;console.log(t);var a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1];function s(){return(s=Object(E.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,fetch("/tmdb/findMovie?searchValue="+t,{method:"GET"});case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).results&&r.results.forEach((function(e){a.length<6&&a.push(e.original_title)})),i(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return r.a.createElement("div",{id:"notebooks"},r.a.createElement("input",{id:"query",type:"text",onChange:function(e){!function(e){s.apply(this,arguments)}(e.target.value)},placeholder:"Search"}),l.map((function(e){return r.a.createElement("li",{onClick:function(){return t(e)}},e)})))}var h=a(2);var b=function(e){var t=e.setMovie;Object(n.useEffect)((function(){s()}),[]);var a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1],s=function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tmdb/popularMovies");case 2:return t=e.sent,console.log(t),e.next=6,t.json();case 6:a=e.sent,console.log(a),console.log(a.results),i(a.results);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(p.a,{flexWrap:"wrap",display:"flex"},r.a.createElement("div",{className:"MovList"},l.map((function(e){return r.a.createElement(p.a,{id:"BoxStyle"},r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"vertical-center"},r.a.createElement("h1",{key:e.title},r.a.createElement("div",{onClick:function(){return t(e.title)}},e.title)))),r.a.createElement("img",{onClick:function(){return t(e.title)},src:" https://image.tmdb.org/t/p/w220_and_h330_face"+e.poster_path,alt:"no ",style:{width:"200px"}})))}))))};var w=function(e){var t=e.match;Object(n.useEffect)((function(){s(),console.log("this is the match"),console.log(t)}),[]);var a=Object(n.useState)({}),c=Object(o.a)(a,2),l=c[0],i=c[1],s=function(){var e=Object(E.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n        https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=fb1465a6d4ccc4cd5448d6f97c18f3c1&language=en-US"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,i(n),console.log("This is the item"),console.log(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"MovItem"},r.a.createElement("h1",null,l.title)),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:" https://image.tmdb.org/t/p/w600_and_h900_bestv2"+l.poster_path,alt:" ",style:{width:"300px"}}),r.a.createElement("h3",{style:{width:"300px"}},l.overview," ")))};function x(e){var t=e.movieID,a=[],n=[{category:"Animal Death",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:1,severity:2,frequency:2},{category:"Cartoon Violence",type:2,severity:2,frequency:9}].reduce((function(e,t){return a.includes(t.category)?(e[t.category].type+=t.type,e[t.category].severity+=t.severity,e[t.category].frequency+=t.frequency,e[t.category].count++,e):(a.push(t.category),e[t.category]=t,e[t.category].count=1,e)}),{});console.log(n);var c=Object.keys(n).map((function(e){var t=n[e];return r.a.createElement("li",{className:"warningListItem"},r.a.createElement("div",null,r.a.createElement("strong",null,t.category,":")),r.a.createElement("div",null,"Type:",r.a.createElement("span",{className:"red"},Math.round(t.type/t.count))),r.a.createElement("div",null,"Severity:",r.a.createElement("span",{className:"yellow"},Math.round(t.severity/t.count))),r.a.createElement("div",null,"Frequency:",r.a.createElement("span",{className:"green"},Math.round(t.frequency/t.count))),r.a.createElement("div",null,r.a.createElement("button",null,"View user comments")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"warningPageContainer"},r.a.createElement("h2",null,t),r.a.createElement("h3",null,"Warnings:"),r.a.createElement("ul",{className:"warningList"},c)),r.a.createElement("div",{className:"warningPageContainer warningPageContainer-Bottom"},r.a.createElement("button",null,"Add warning")))}function j(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(g,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:function(){return console.log(a.length),a?r.a.createElement("div",null,r.a.createElement(d,{setMovie:c}),r.a.createElement(x,{movieID:a}),r.a.createElement("button",{onClick:function(){return c("")}},"Go back to search")):r.a.createElement("div",{className:"App"},r.a.createElement(d,{setMovie:c}),r.a.createElement(b,{setMovie:c}))}}),r.a.createElement(h.a,{path:"/:id",component:w}))))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6128d2d7.chunk.js.map