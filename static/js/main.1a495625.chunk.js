(this.webpackJsonprickandmortya=this.webpackJsonprickandmortya||[]).push([[0],{33:function(e,a,t){e.exports=t(66)},38:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){},59:function(e,a,t){},64:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),l=t.n(r),i=(t(38),t(39),t(40),t(29)),o=t.n(i),s=(t(41),t(30)),m=t.n(s),u={Accept:"application/json","Content-Type":"application/json",Origin:"*"};function d(e){return m.a.get(e,u).then((function(e){return JSON.parse(JSON.stringify(e.data))})).catch((function(e){return JSON.parse(JSON.stringify(e))}))}var f=function(e){var a=e.id,t=e.name,n=e.image,r=e.species,l=e.gender;return c.a.createElement("div",{className:"col s12 m6 l4 xl4",key:a},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},c.a.createElement("img",{className:"activator",loading:"lazy",src:n,alt:""})),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},t,c.a.createElement("i",{className:"material-icons right"},"more_vert"))),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},t,c.a.createElement("i",{className:"material-icons right"},"close")),c.a.createElement("p",null,"Gender:  ",l),c.a.createElement("p",null,"Species:  ",r))))},p=(t(59),t(8));function E(){var e=Object(p.b)();return c.a.createElement("div",{className:"row filter"},c.a.createElement("div",{className:"col s8 offset-s2 container filter-content z-depth-3"},c.a.createElement("div",{className:"input-field"},c.a.createElement("i",{className:"material-icons prefix"},"search"),c.a.createElement("input",{id:"autocomplete",type:"text",name:"autocomplete",className:"autocomplete",onChange:function(a){e({type:"SET_CHARACTER_NAME",payload:a.target.value})}}),c.a.createElement("label",{htmlFor:"autocomplete"},"Busqueda"))))}function h(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.characterList}));return Object(n.useEffect)((function(){d("https://rickandmortyapi.com/api/character/").then((function(a){null!==a&&e({type:"SET_CHARACTER_LIST",payload:a})}))}),[e]),c.a.createElement("header",{className:"App-header"},c.a.createElement(E,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s10 offset-s1 container z-depth-3"},a.map((function(e){var a=e.id,t=e.name,n=e.image,r=e.species,l=e.gender;return c.a.createElement("div",{key:a},c.a.createElement(f,{id:a,name:t,image:n,species:r,gender:l}))})))))}t(64);function v(){var e=Object(p.c)((function(e){return e.characterInfo}));console.log(e);var a=Object(p.b)();return c.a.createElement("div",null,null!==e.next?c.a.createElement("p",{className:"btn-floating btn-large waves-effect waves-light cyan right btn-right",onClick:function(){d(e.next).then((function(e){null!==e&&a({type:"SET_CHARACTER_LIST",payload:e})}))}},c.a.createElement("i",{className:"material-icons"},"chevron_right")):"",null!==e.prev?c.a.createElement("p",{className:"btn-floating btn-large waves-effect waves-light cyan left btn-left",onClick:function(){d(e.prev).then((function(e){null!==e&&a({type:"SET_CHARACTER_LIST",payload:e})}))}},c.a.createElement("i",{className:"material-icons"},"chevron_left")):"")}var g=t(14),y=t(32),N=t(2),b=t(11);var w=Object(g.b)((function(e,a){switch(a.type){case"SET_CHARACTER_LIST":return Object(b.a)(Object(b.a)({},e),{},{characterList:a.payload.results,characterFilteredOrigin:a.payload.results,characterInfo:a.payload.info});case"SET_CHARACTER_NAME":var t=e.characterFilteredOrigin.filter((function(e){return e.name.toLowerCase().includes(a.payload.toLowerCase())}));return Object(b.a)(Object(b.a)({},e),{},{characterList:t});default:return e}}),{characterList:[],characterFiltered:[],characterFilteredOrigin:[],characterInfo:[]});var O=function(){return o.a.AutoInit(),c.a.createElement(p.a,{store:w},c.a.createElement(y.a,null,c.a.createElement("div",{className:"header-background"}),c.a.createElement(v,null),c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/",component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1a495625.chunk.js.map