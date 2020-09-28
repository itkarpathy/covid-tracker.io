(this["webpackJsonpcovid-19-app"]=this["webpackJsonpcovid-19-app"]||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(102),a(24)),l=a.n(s),i=a(37),u=a(15),m=a(237),f=a(238),d=a(239),p=a(231),v=a(235),h=(a(104),a(56)),E=a(236);a(105);var b=function(e){var t=e.cases,a=e.title,n=e.isRed,r=(e.isOrange,e.isBlack),o=e.active,s=e.total,l=Object(h.a)(e,["cases","title","isRed","isOrange","isBlack","active","total"]);return c.a.createElement(p.a,{onClick:l.onClick,className:"infoBox ".concat(o&&"infoBox__selected"," ").concat(n&&"infoBox__red"," ").concat(!n&&!r&&"infoBox__green"," ").concat(r&&"infoBox__black")},c.a.createElement(v.a,null,c.a.createElement(E.a,{className:"infoBox__title",color:"textSecondary"},a),c.a.createElement("h2",{className:"infoBox__cases"},t),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},c.a.createElement("h3",null,"Total: ",s))))},_=a(242),g=a(243),y=(a(109),a(90)),j=a(17),x=a.n(j),O=a(240),w=a(241),k={cases:{hex:"#cc1034",half_op:"rgba(204,16,52,0.5)",multiplier:800},recovered:{hex:"#7dd71d",half_op:"rgba(125,215,29,0.5)",multiplier:1200},deaths:{hex:"#000",half_op:"rgba(0,0,0,0.5)",multiplier:2e3}},N=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},C=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"};var B=function(e){var t=e.countries,a=e.casesType,n=e.zoom,r=e.center;return c.a.createElement("div",{className:"map"},c.a.createElement(_.a,{center:r,zoom:n},c.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">openstreetmap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(O.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:k[t].hex,fillColor:k[t].hex,radius:Math.sqrt(e[t])*k[t].multiplier},c.a.createElement(w.a,null,c.a.createElement("div",{className:"info__container"},c.a.createElement("div",{className:"info__flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info__name"},e.country),c.a.createElement("div",{className:"info__confirm"},c.a.createElement("span",{className:"info__cases"},"Cases: ",x()(e.cases).format("0, 0"))),c.a.createElement("div",{className:"info__recovered"},"Recovered: ",x()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info__deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))};a(110);var S=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,c.a.createElement("strong",null,x()(a).format("0,0"))))})))},I=a(88),R={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgb(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgb(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#090909",half_op:"rgb(0, 0, 0, 0.5)",multiplier:2e3}},T={legend:{dispaly:!0},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{dispaly:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}},D=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n};var z=function(e){var t=e.casesType,a=void 0===t?"cases":t,r=Object(h.a)(e,["casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],f=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=D(e,a);f(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),c.a.createElement("div",{className:r.className},(null===m||void 0===m?void 0:m.length)>0&&c.a.createElement(I.a,{options:T,data:{datasets:[{data:m,backgroundColor:R[a].half_op,borderColor:R[a].hex}]}}))};a(204);var A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],_=Object(n.useState)({}),g=Object(u.a)(_,2),y=g[0],j=g[1],x=Object(n.useState)([]),O=Object(u.a)(x,2),w=O[0],k=O[1],I=Object(n.useState)({lat:34.80746,lng:-40.4796}),R=Object(u.a)(I,2),T=R[0],D=R[1],A=Object(n.useState)(3),M=Object(u.a)(A,2),W=M[0],J=M[1],L=Object(n.useState)([]),V=Object(u.a)(L,2),Y=V[0],q=V[1],F=Object(n.useState)("cases"),K=Object(u.a)(F,2),$=K[0],G=K[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){j(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=N(e);k(a),r(t),q(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),fetch(n).then((function(e){return e.json()})).then((function(e){E(a),j(e),D([e.countryInfo.lat,e.countryInfo.long]),J(4)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"COVID-19 TRACKER 2020"),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(f.a,{key:a._id,variant:"outlined",value:h,onChange:H},c.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return c.a.createElement(d.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(b,{isRed:!0,active:"cases"===$,onClick:function(e){return G("cases")},title:"Corona Virus Cases",cases:C(y.todayCases),total:C(y.cases)}),c.a.createElement(b,{active:"recovered"===$,onClick:function(e){return G("recovered")},title:"Recovered",cases:C(y.todayRecovered),total:C(y.recovered)}),c.a.createElement(b,{isBlack:!0,active:"deaths"===$,onClick:function(e){return G("deaths")},title:"Deaths",cases:C(y.todayDeaths),total:C(y.deaths)})),c.a.createElement(B,{casesType:$,countries:Y,center:T,zoom:W})),c.a.createElement("div",null,c.a.createElement(p.a,{className:"app__right"},c.a.createElement(v.a,null,c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(S,{countries:w}),c.a.createElement("h3",null,"Worldwide new ",$),c.a.createElement(z,{casesType:$})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(205)}},[[97,1,2]]]);
//# sourceMappingURL=main.e712fb9e.chunk.js.map