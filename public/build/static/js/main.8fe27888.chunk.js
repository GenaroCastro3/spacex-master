(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,n){e.exports=n(62)},46:function(e,a,n){},56:function(e,a,n){},62:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(32),r=n.n(l),s=(n(46),n(11)),u=n(12),i=n(15),o=n(13),m=n(16),h=n(39),g=n(14),b=n(64),p=n(65),d=n(18),_=n(10),E=n.n(_),f=n(19),y=n.n(f),v=n(33),N=n.n(v),k=n(63),j=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return console.log(n),c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:y()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(N.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k.a,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch details"),c.a.createElement(k.a,{to:"/site/".concat(n),className:"btn btn-secondary"},"Launch site details"))))};function O(){var e=Object(d.a)(["\n    query LaunchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return O=function(){return e},e}var L=E()(O()),w=function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,c=new Array(t),l=0;l<t;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={},n}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(t.Fragment,null,c.a.createElement("h4",{className:"display-4 my-3"},"Launches chidos"),c.a.createElement(g.b,{query:L},function(e){var a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),console.log(l),c.a.createElement(t.Fragment,null,l.launches.map(function(e){return c.a.createElement(j,{key:e.flight_number,launch:e})})))}))}}]),a}(t.Component);function x(){var e=Object(d.a)(["\n    query LaunchQuery($flight_number: Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return x=function(){return e},e}var q=E()(x()),I=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(t.Fragment,null,c.a.createElement(g.b,{query:q,variables:{flight_number:e}},function(e){var a=e.loading,n=e.error,t=e.data;if(console.log(t),a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n),console.log(t);var l=t.launch,r=l.flight_number,s=l.mission_name,u=l.launch_year,i=l.launch_success,o=(l.launch_date_local,l.rocket),m=o.rocket_id,h=o.rocket_name,g=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:"),s),c.a.createElement("h4",{className:"mb-3"},"Launch details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight number: ",r),c.a.createElement("li",{className:"list-group-item"},"Launch year: ",u),c.a.createElement("li",{className:"list-group-item"},"Launch successful: ",c.a.createElement("span",{className:y()({"text-success":i,"text-danger":!i})},i?"yes":"no"))),c.a.createElement("h4",{className:"my-3"},"Rocket details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",m),c.a.createElement("li",{className:"list-group-item"},"Rocket name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket type: ",g)),c.a.createElement("hr",null),c.a.createElement(k.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(t.Component);function F(){var e=Object(d.a)(["\n    query LaunchQuery($flight_number: Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            launch_site {\n                site_id\n                site_name\n                site_name_long\n            }\n        }\n    }\n"]);return F=function(){return e},e}var D=E()(F()),$=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(t.Fragment,null,c.a.createElement(g.b,{query:D,variables:{flight_number:e}},function(e){var a=e.loading,n=e.error,t=e.data;if(console.log(t),a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n),console.log(t);var l=t.launch,r=l.launch_success,s=l.launch_site,u=s.site_id,i=s.site_name,o=s.site_name_long;return c.a.createElement("div",null,c.a.createElement("h4",{className:"my-3"},"Launch Site details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},r?"Success":"Failed"),c.a.createElement("li",{className:"list-group-item"},"Launch ID: ",u),c.a.createElement("li",{className:"list-group-item"},"Launch name: ",i),c.a.createElement("li",{className:"list-group-item"},"Launch type: ",o)),c.a.createElement("hr",null),c.a.createElement(k.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(t.Component),B=(n(56),new h.a({uri:"/graphql"})),C=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(g.a,{client:B},c.a.createElement(b.a,null,c.a.createElement("div",{className:"App container"},c.a.createElement("h1",null,"SpaceX"),c.a.createElement(p.a,{exact:!0,path:"/",component:w}),c.a.createElement(p.a,{exact:!0,path:"/launch/:flight_number",component:I}),c.a.createElement(p.a,{exact:!0,path:"/site/:flight_number",component:$}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.8fe27888.chunk.js.map