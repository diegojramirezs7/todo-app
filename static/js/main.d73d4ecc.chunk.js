(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=n(5),i=n(1),d=n(2),s=n(4),u=n(3),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,a=t.id,r=t.title;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChange(a)}}),o.a.createElement("span",{style:n?{fontStyle:"italic",color:"#c5e2d2",textDecoration:"line-through"}:null},r),o.a.createElement("button",{className:"btn-style",onClick:function(){return e.props.deleteTodo(a)}},"X"))}}]),n}(o.a.Component);var m=function(e){return o.a.createElement("div",null,e.todos.map((function(t){return o.a.createElement(p,{key:t.id,todo:t,handleChange:e.handleChange,deleteTodo:e.deleteTodo})})))},h=function(){return o.a.createElement("header",{style:{backgroundColor:"#678c89",color:"#fff",padding:"10px 15px"}},o.a.createElement("h1",{style:{fontSize:"25px",lineHeight:"1.447em",margin:"0px"}},"Simple Todo App"))},f=n(8),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"form-container",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",placeholder:"add todo",className:"input-text",name:"title",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"input-submit",name:"input-submit"}))}}]),n}(a.Component),v=n(17),g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(v.a)(),title:"Setup development environment",completed:!0},{id:Object(v.a)(),title:"develop webiste and add content",completed:!1},{id:Object(v.a)(),title:"deploy to live server",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteTodo=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var n={id:Object(v.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[n])})},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(b,{addTodo:this.addTodo}),o.a.createElement(m,{todos:this.state.todos,handleChange:this.handleChange,deleteTodo:this.deleteTodo}))}}]),n}(o.a.Component);n(14);c.a.render(o.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d73d4ecc.chunk.js.map