(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,function(t,e,n){t.exports={_display:"Display__display__2mypl",_counterInfo:"Display__counterInfo__22kA_",_counterLimit:"Display__counterLimit__1G9et"}},function(t,e,n){t.exports={_wrapper:"Main__wrapper__1OYkn",_container:"Main__container__2dn1e",_box:"Main__box__E5StX"}},function(t,e,n){t.exports={_controlPanel:"ControlPanel__controlPanel__14zVh",_incBtn:"ControlPanel__incBtn__3NwUB",_resetBtn:"ControlPanel__resetBtn__2xlL6",_unactive:"ControlPanel__unactive__2g1gd"}},,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),i=(n(15),n(1)),s=n(2),u=n(4),l=n(3),_=(n(16),n(6)),p=n.n(_),m=n(5),h=n.n(m),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:h.a._display},o.a.createElement("div",{className:5===this.props.count?"".concat(h.a._counterInfo," ").concat(h.a._counterLimit):h.a._counterInfo},this.props.count))}}]),n}(o.a.Component),f=n(7),b=n.n(f),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:b.a._controlPanel},o.a.createElement("button",{type:"button",className:b.a._incBtn,onClick:this.props.incCount,disabled:5===this.props.count},"inc."),o.a.createElement("button",{type:"button",className:b.a._resetBtn,onClick:this.props.resetCount,disabled:0===this.props.count},"reset"))}}]),n}(o.a.Component),C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:p.a._wrapper},o.a.createElement("div",{className:p.a._container},o.a.createElement("div",{className:p.a._box},o.a.createElement(d,{count:this.props.state.count}),o.a.createElement(v,{incCount:this.props.incCount,resetCount:this.props.resetCount,count:this.props.state.count}))))}}]),n}(o.a.Component),y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={count:0},t.incCount=function(){t.state.count<5&&t.setState({count:t.state.count+1})},t.resetCount=function(){t.setState({count:0})},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C,{state:this.state,incCount:this.incCount,resetCount:this.resetCount}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.e8205f43.chunk.js.map