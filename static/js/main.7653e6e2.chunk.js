(this.webpackJsonpredditor=this.webpackJsonpredditor||[]).push([[0],{118:function(e,t,a){e.exports=a(400)},123:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),s=a(29),i=a(110),c=a(111),o=a(116),l=a(117),u=a(1),h=a.n(u),d=a(14),m=a.n(d);a(123),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(124);var b=function(e){return h.a.createElement("form",{onSubmit:e.handleSubmit},h.a.createElement("label",null,h.a.createElement("input",{type:"text",value:e.sub,onChange:e.handleChange})),h.a.createElement("input",{type:"submit",value:"Search"}))},p=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({sub:e.target.value})},n.handleSubmit=function(e){console.log("A subreddit was submitted: "+n.state.sub),n.setState({sub:n.state.sub}),n.componentDidMount(),e.preventDefault()},n.state={data_reddit:[],sub:"memes"},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/".concat(this.state.sub,"/hot/.json?"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=[];try{for(s=0;s<a.data.children.length;s++)n.push(a.data.children[s].data),this.setState({data_reddit:n})}catch(r){this.setState({error:r})}case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data_reddit;return e.error?h.a.createElement("h2",{className:"headbanner"},h.a.createElement("span",null,"/r/"),this.state.sub," doesn't exist.."):h.a.createElement("div",null,h.a.createElement("div",{className:"formcontainer",id:"top"},h.a.createElement(b,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,sub:this.state.sub}),h.a.createElement("h2",{className:"headbanner"},h.a.createElement("span",null,"/r/"),this.state.sub)),h.a.createElement("div",{className:"container"},t.map((function(e,t){return h.a.createElement("figure",{className:"grid-fig"},h.a.createElement("a",{href:e.url,target:"_blank"},h.a.createElement("img",{src:e.thumbnail,alt:e.title}),h.a.createElement("figcaption",null,e.title)))}))),h.a.createElement("a",{id:"goto_top",href:"#top"},"Search something else"))}}]),a}(h.a.Component);m.a.render(h.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.7653e6e2.chunk.js.map