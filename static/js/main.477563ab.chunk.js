(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,c=s(3),r=s.n(c),o=s(6),i=s(4),a=s(5),l=s(8),u=s(7),h=s(1),b=s.n(h),d=(s(13),s(14),s(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var p=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(i.a)(this,s);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={goods:j,isReversed:!1,sortType:n.NONE},t}return Object(a.a)(s,[{key:"render",value:function(){var t=this,e=Object(o.a)(this.state.goods),s=this.state,c=s.isReversed,r=s.sortType;return e.sort((function(t,e){switch(r){case n.LENGTH:return t.length-e.length;case n.ALPHABET:return t.localeCompare(e);default:return 0}})),c&&e.reverse(),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(this.state.sortType!==n.ALPHABET?"is-light":""),onClick:function(){t.setState({sortType:n.ALPHABET})},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(this.state.sortType!==n.LENGTH?"is-light":""),onClick:function(e){t.setState({sortType:n.LENGTH}),e.currentTarget.classList.remove("is-light")},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button is-warning ".concat(!0!==this.state.isReversed?"is-light":""),onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),e[0]!==this.state.goods[0]&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.setState((function(){return{sortType:n.NONE,isReversed:!1}}))},children:"Reset"})]}),Object(d.jsx)("ul",{children:Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})})}}]),s}(b.a.Component);r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.477563ab.chunk.js.map