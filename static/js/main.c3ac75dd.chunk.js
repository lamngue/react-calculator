(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),i=n(8),s=n.n(i),c=(n(14),n(1)),r=n(2),u=n(4),o=n(3),p=n(6),h=n(5),m=(n(15),{textAlign:"left",fontFamily:"Ubuntu",fontSize:"3rem",width:"250px",height:"50px",border:"none",backgroundColor:"#252525",color:"#fff",paddingRight:"20px",paddingLeft:"10px",borderRadius:"10%"}),b=function(t){function e(t){return Object(c.a)(this,e),Object(u.a)(this,Object(o.a)(e).call(this))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{value:this.props.input,type:"text",style:m,disabled:!0}))}}]),e}(a.Component),d=function(t){function e(t){return Object(c.a)(this,e),Object(u.a)(this,Object(o.a)(e).call(this))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{value:"AC",onClick:this.props.onClick,name:"AC",id:"AC",type:"button",className:"text-center btn btn-danger btn-block"}),l.a.createElement("table",{className:"buttons",style:{borderSpacing:"20px",width:"200px",marginTop:"25px"},align:"center"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn btn-block btn-primary",name:"one",value:"1"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"two",value:"2"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"three",value:"3"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-secondary",name:"plus",value:"+"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"four",value:"4"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"five",value:"5"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"six",value:"6"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-secondary",name:"minus",value:"-"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"seven",value:"7"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"eight",value:"8"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"nine",value:"9"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-secondary",name:"multiply",value:"*"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,id:"delete",type:"button",className:"btn  btn-block btn-primary",name:"delete",value:"C"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-primary",name:"zero",value:"0"})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,id:"equal",className:"btn  btn-block btn-success",type:"button",name:"equal",value:"="})),l.a.createElement("td",null,l.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btn  btn-block btn-secondary",name:"divide",value:"/"})))))}}]),e}(a.Component),k=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(o.a)(e).call(this))).state={result:""},t.inputs=[],t.phepTinh=[],t.handleClick=t.handleClick.bind(Object(p.a)(t)),t}return Object(h.a)(e,t),Object(r.a)(e,[{key:"calculate",value:function(t,e,n){if(null===n)return t;var a=parseInt(t),l=parseInt(n);return"+"===e?a+l:"-"===e?a-l:"*"===e?a*l:"/"===e?parseInt(a/l):void 0}},{key:"giveDigits",value:function(t){return t.join("").match(/\d+/g).map(function(t){return+t})}},{key:"handleClick",value:function(t){this.state.result.length>8&&this.setState({result:"input overflow"});var e=t.target.name,n=t.target.value;if(this.inputs.push(n),["zero","one","two","three","four","five","six","seven","eight","nine"].includes(e))["+","-","*","/"].includes(this.inputs[this.inputs.length-2])?(this.setState({result:""}),this.setState(function(t){return{result:t.result+n}})):this.setState(function(t){return{result:t.result+n}});else if("equal"===e){var a=this.giveDigits(this.inputs),l=this.calculate(a[0],this.phepTinh[0],a[1]);this.setState({result:l}),this.phepTinh=[],this.inputs=[],this.inputs[0]=l}else if(["plus","minus","multiply","divide","equal"].includes(e)){var i,s=this.giveDigits(this.inputs);this.phepTinh.push(n),1===s.length?i=this.calculate(s[0],this.phepTinh[0],null):(i=this.calculate(s[0],this.phepTinh[0],s[1]),this.phepTinh=[],this.inputs=[],this.inputs[0]=i,this.phepTinh[0]=n),this.setState({result:i})}else"delete"===e?("number"===typeof this.inputs[0]&&(this.inputs[0]=this.inputs[0].toString(),this.inputs[0]=this.inputs[0].split("")),this.inputs[0].pop(),console.log(this.inputs),this.phepTinh.pop(),this.setState({result:this.state.result.toString().split("").slice(0,-1).join("")})):"AC"===e&&(this.inputs=[],this.phepTinh=[],this.setState({result:""}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-center"},"Calculator React"),l.a.createElement("div",{className:"App"},l.a.createElement(b,{input:this.state.result}),l.a.createElement(d,{onClick:this.handleClick})))}}]),e}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c3ac75dd.chunk.js.map