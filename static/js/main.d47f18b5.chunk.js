(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(4),r=a.n(o),l=a(1),i=a(5),c=a(6),u=a(8),m=a(7),p=a(2),d=a.n(p),b=(a(14),function(e){var t=e.goods;return n.a.createElement("ul",{className:"goods-list"},Object(l.a)(t).map((function(e){return n.a.createElement("li",{key:e}," ",e," ")})))}),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function h(e){var t=e.runAplication;return n.a.createElement("button",{type:"button",className:"start-button",onClick:t},"Start")}function y(e){var t=e.runAplication;return n.a.createElement("button",{type:"button",className:"start-button start-button--off",onClick:t},"Stop")}var v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={status:!1,goodsList:g,isRevesed:!1,sortBy:"",lengthLimit:1},e.resetApp=function(){e.setState({isReversed:!1,sortBy:"",goodsForDisplay:Object(l.a)(e.state.goodsList),lengthLimit:1})},e.runAplication=function(t){e.setState({status:!e.state.status}),e.resetApp()},e.filterGoods=function(t){var a=+t.target.value;e.setState((function(e){return{lengthLimit:a,goodsForDisplay:e.goodsList.filter((function(e){return e.length>=a}))}}))},e.sortGoods=function(t){var a=t.target.name;e.setState((function(e){return{isReversed:!1,sortBy:a,goodsForDisplay:e.goodsForDisplay.sort((function(e,t){return"bylength"===a?e.length-t.length:e.localeCompare(t)}))}}))},e.reverseGoodsList=function(){e.setState((function(e){return{isReversed:!e.isReversed,goodsForDisplay:e.goodsForDisplay.reverse()}}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState((function(e){return{goodsForDisplay:Object(l.a)(e.goodsList)}}))}},{key:"setClassName",value:function(e){var t=this.state,a=t.sortBy,s=t.status;return a===e&&s}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.lengthLimit,s=e.goodsForDisplay,o=e.isReversed,r=e.sortBy,l=t?n.a.createElement(y,{runAplication:this.runAplication}):n.a.createElement(h,{runAplication:this.runAplication});return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"title-block"},n.a.createElement("h1",{className:"title"},"Goods"),n.a.createElement("span",{className:"data"})),n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"block-controllers"},n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{type:"button",className:d()("button",{"button--enabled":this.setClassName("alphabetially")}),disabled:!t||"alphabetially"===r,name:"alphabetially",onClick:this.sortGoods},"Alphabetially")),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{type:"button",className:d()("button",{"button--enabled":this.setClassName("bylength")}),disabled:!t||"bylength"===r,name:"bylength",onClick:this.sortGoods},"By length")),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{type:"button",className:d()("button",{"button--enabled":o&&t}),disabled:!t,onClick:this.reverseGoodsList},"Reverse")),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{type:"button",className:"button",disabled:!t,onClick:this.resetApp},"Reset")),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("input",{type:"range",min:"1",max:"10",disabled:!t,value:a,onChange:this.filterGoods}),n.a.createElement("label",{className:"range-label"},a))),n.a.createElement("div",{className:"dispaly-block"},n.a.createElement("div",{className:"board"},t?n.a.createElement(b,{goods:s}):n.a.createElement("h2",{className:"pressStart"},"Press START")),l)))}}]),a}(n.a.Component);r.a.render(n.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d47f18b5.chunk.js.map