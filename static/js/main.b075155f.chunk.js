(this.webpackJsonpmytodo=this.webpackJsonpmytodo||[]).push([[0],{35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),s=a.n(o),l=(a(40),a(6)),i=a(7),c=a(8),d=a(9),u=a(5),m=a(1),p=a(31),g=a(19),h=a(32),f=a.n(h),v="".concat("https://todo-express-rest-api.herokuapp.com","/api"),E=f.a.create({baseURL:v,headers:{"Content-Type":"application/json"}});E.interceptors.request.use((function(e){var t=localStorage.getItem("token")||"";return t&&(e.headers.authorization=t),e}),(function(e){return Promise.reject(e)}));var b=E;var k=function(e){var t=e.type,a=e.name,n=e.value,o=e.changeHandler,s=e.placeholder,l=e.required;return r.a.createElement("input",{className:"input input--primary",type:t,name:a,value:n,onChange:o,placeholder:s,required:l})};var N=function(e){var t=e.type,a=e.disabled,n=e.clickHandler,o=e.className,s=e.icon,l=e.children;return r.a.createElement("button",{className:"btn btn--".concat(o||"primary"),type:t,onClick:n,disabled:a},s,l)},y=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.toggleDisable=function(){n.setState({isDisable:!n.state.isDisable})},n.setErrorMessage=function(e){n.setState({errorMessage:e})},n.handleLogin=function(e){e.preventDefault(),n.setErrorMessage("Logging in..."),n.toggleDisable(),b.post("/users/login",{username:n.state.username,password:n.state.password}).then((function(e){n.props.tokenHandler(e.data)})).catch((function(e){n.setErrorMessage(e.response.data.message),n.toggleDisable()}))},n.handleRegister=function(e){n.setErrorMessage("Registering..."),n.toggleDisable(),b.post("/users/register",{username:n.state.username,password:n.state.password}).then((function(e){n.props.tokenHandler(e.data)})).catch((function(e){n.setErrorMessage(e.response.data.message),n.toggleDisable()}))},n.state={username:"",password:"",isDisable:!1,errorMessage:"\u200f\u200f\u200e \u200e"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.props.token?r.a.createElement(m.a,{to:e}):r.a.createElement("div",{className:"outer-wrapper"},r.a.createElement("div",{className:"outer-wrapper__cell"},r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("form",{onSubmit:this.handleLogin},r.a.createElement("div",{className:"login-wrapper__input"},r.a.createElement(k,{type:"text",changeHandler:this.handleInput,value:this.state.username,name:"username",placeholder:"username",required:!0})),r.a.createElement("div",{className:"login-wrapper__input"},r.a.createElement(k,{type:"password",changeHandler:this.handleInput,value:this.state.password,name:"password",placeholder:"password",required:!0})),r.a.createElement("div",{className:"errorMessage"},this.state.errorMessage),r.a.createElement("div",{className:"login-buttons"},r.a.createElement(N,{type:"submit",className:"purple",clickHandler:this.handleLogin,icon:r.a.createElement(g.b,null),disabled:this.state.isDisable},"Login"),r.a.createElement(N,{type:"button",className:"blue",clickHandler:this.handleRegister,icon:r.a.createElement(g.a,null),disabled:this.state.isDisable},"Register"))))))}}]),a}(r.a.Component),_=a(34);var j=function(e){var t=e.links;return r.a.createElement("ul",{className:"nav"},t.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(u.b,{to:e.to,className:"nav__link",exact:!0},e.name))})))},D=a(14),H=a(10);var L=function(e){var t=e.detail,a=e.deleteHandler,o=e.updateHandler,s=e.editHandler,l=t.id,i=t.title,c=t.description,d=t.created,u=t.updated,m=t.status,p=Object(n.useState)(!1),g=Object(H.a)(p,2),h=g[0],f=g[1],v=Object(n.useState)(!1),E=Object(H.a)(v,2),k=E[0],y=E[1];return r.a.createElement("div",{className:"todo",onClick:function(){y(!k)}},r.a.createElement("div",{className:"todo__detail"},r.a.createElement("h2",null,i),r.a.createElement("p",null,c),r.a.createElement("div",{className:"todo-date"},r.a.createElement("span",{className:"todo-date__created"},"Created on ",new Date(1e3*d).toDateString()),d!==u&&r.a.createElement("span",{className:"todo-date__updated"},"Updated on ",new Date(1e3*u).toDateString()))),k&&r.a.createElement("div",{className:"todo__action"},r.a.createElement(N,{type:"button",className:"green",clickHandler:function(e){e.stopPropagation(),f(!0);var t={title:i,description:c,status:"active"===m?"done":"active"};b.put("/todos/".concat(l),t).then((function(e){o(l,e.data)})).catch((function(e){return console.log(e)})).finally((function(){f(!1)}))},disabled:h},"done"===m?"Undone":"Done"),r.a.createElement(N,{type:"button",className:"purple",clickHandler:function(e){e.stopPropagation(),s(t)},disabled:h},"Edit"),r.a.createElement(N,{type:"button",className:"blue",clickHandler:function(e){e.stopPropagation(),f(!0),b.delete("/todos/".concat(l)).then((function(){a(l)})).catch((function(e){return console.log(e)}))},disabled:h},"Delete")))};var O=function(e){var t=e.submitHandler,a=e.cancelHandler,o=e.initialData,s=(e.loading,Object(n.useState)(o.title||"")),l=Object(H.a)(s,2),i=l[0],c=l[1],d=Object(n.useState)(o.description||""),u=Object(H.a)(d,2),m=u[0],p=u[1],g=function(e){"title"===e.target.name&&c(e.target.value),"description"===e.target.name&&p(e.target.value)};return r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("div",{className:"modal-wrapper__cell"},r.a.createElement("div",{className:"modal-form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=o.status||"active";t({title:i,description:m,status:a},o.id)}},r.a.createElement("div",{className:"modal-form__input"},r.a.createElement(k,{name:"title",placeholder:"Title",changeHandler:g,value:i,required:!0})),r.a.createElement("div",{className:"modal-form__input"},r.a.createElement("textarea",{className:"modal-form__textarea",name:"description",placeholder:"Description",onChange:g,value:m})),r.a.createElement("div",{className:"modal-form__action"},r.a.createElement(N,{type:"reset",clickHandler:a},"Cancel"),r.a.createElement(N,{type:"reset",clickHandler:function(){c(""),p("")}},"Clear"),r.a.createElement(N,{className:"purple",type:"submit"},o.title?"Update":"Add"))))))};var w=function(e){return function(t){var a=t.isLoading,n=t.error,o=Object(D.a)(t,["isLoading","error"]);return n?r.a.createElement("div",{className:"loading"},"Error Occured!"):a?r.a.createElement("div",{className:"loading"},"Loading..."):r.a.createElement(e,o)}}((function(e){var t=e.list,a=Object(D.a)(e,["list"]);return t.map((function(e){return r.a.createElement(L,Object.assign({detail:e,key:e.id},a))}))})),S=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleForm=function(e,t){n.toggleFormLoading(),t?n.editTodo(e,t):n.addNewTodo(e)},n.addNewTodo=function(e){b.post("/todos",e).then((function(e){n.toggleModal(),n.setState({todoList:[e.data].concat(Object(_.a)(n.state.todoList))})})).catch((function(e){return console.log(e)})).finally((function(){return n.toggleFormLoading}))},n.editTodo=function(e,t){b.put("/todos/".concat(t),e).then((function(e){n.handleUpdate(t,e.data),n.toggleModal()})).catch((function(e){return console.log(e)})).finally((function(){return n.toggleFormLoading}))},n.toggleFormLoading=function(){n.setState({isPosting:!n.state.isPosting})},n.toggleModal=function(e){n.modalData=e||{},n.setState({showModal:!n.state.showModal})},n.handleDelete=function(e){n.setState({todoList:n.state.todoList.filter((function(t){return t.id!==e}))})},n.handleUpdate=function(e,t){n.setState({todoList:n.state.todoList.map((function(a){return a.id===e?t:a}))})},n.state={todoList:[],isLoading:!0,error:!1,isPosting:!1,showModal:!1},n.nav=[{name:"All",to:"/"},{name:"Active",to:"/active"},{name:"Done",to:"/done"}],n.modalData={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.token&&b.get("/todos").then((function(t){e.setState({todoList:t.data,isLoading:!1})})).catch((function(){e.setState({error:!0})}))}},{key:"render",value:function(){if(!this.props.token)return r.a.createElement(m.a,{to:{pathname:"/login",state:{from:this.props.location}}});var e=this.state.todoList,t=this.props.location.pathname.split("/")[1];return"active"!==t&&"done"!==t||(e=this.state.todoList.filter((function(e){return e.status===t}))),r.a.createElement("div",{className:"home"},this.state.showModal&&r.a.createElement(O,{submitHandler:this.handleForm,cancelHandler:this.toggleModal,loading:this.state.isPosting,initialData:this.modalData}),r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__left"},r.a.createElement(j,{links:this.nav})),r.a.createElement("div",{className:"header__right"},r.a.createElement(N,{type:"button",className:"purple",clickHandler:this.toggleModal},"Add Todo"),r.a.createElement(N,{type:"button",className:"blue",clickHandler:this.props.logoutHandler},"Logout"))),r.a.createElement(w,{error:this.state.error,isLoading:this.state.isLoading,deleteHandler:this.handleDelete,updateHandler:this.handleUpdate,editHandler:this.toggleModal,list:e}))}}]),a}(r.a.Component);var M=function(e){return r.a.createElement(u.a,{basename:"/MyTodo"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(y,Object.assign({},t,e))}}),r.a.createElement(m.b,{path:"/",render:function(t){return r.a.createElement(S,Object.assign({},t,e))}})))},T=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setToken=function(e){var t=e.token,a=e.id,r=e.username;n.setState({token:t,id:a,username:r}),localStorage.setItem("token",t)},n.removeToken=function(){n.setState({token:"",id:"",username:""}),localStorage.removeItem("token")},n.state={token:"",id:"",username:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token")||"";this.setState({token:t}),t&&b.get("/users").then((function(t){e.setToken(t.data)})).catch((function(){return e.removeToken}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(M,{token:this.state.token,tokenHandler:this.setToken,logoutHandler:this.removeToken}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b075155f.chunk.js.map