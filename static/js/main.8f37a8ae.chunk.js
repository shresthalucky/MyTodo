(this.webpackJsonpmytodo=this.webpackJsonpmytodo||[]).push([[0],{35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(30),l=a.n(r),i=(a(40),a(6)),s=a(7),c=a(8),u=a(9),d=a(5),m=a(1),p=a(31),h=a(19),g=a(32),f=a.n(g).a.create({baseURL:"https://todo-express-rest-api.herokuapp.com/api/",headers:{"Content-Type":"application/json"}});f.interceptors.request.use((function(e){var t=localStorage.getItem("token")||"";return t&&(e.headers.authorization=t),e}),(function(e){return Promise.reject(e)}));var v=f;var E=function(e){var t=e.type,a=e.name,n=e.value,r=e.changeHandler,l=e.placeholder;return o.a.createElement("input",{className:"input input--primary",type:t,name:a,value:n,onChange:r,placeholder:l})};var b=function(e){var t=e.type,a=e.disabled,n=e.clickHandler,r=e.className,l=e.icon,i=e.children;return o.a.createElement("button",{className:"btn btn--".concat(r||"primary"),type:t,onClick:n,disabled:a},l,i)},k=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.toggleDisable=function(){n.setState({isDisable:!n.state.isDisable})},n.setErrorMessage=function(e){n.setState({errorMessage:e})},n.handleLogin=function(e){n.toggleDisable(),v.post("/users/login",{username:n.state.username,password:n.state.password}).then((function(e){n.props.tokenHandler(e.data)})).catch((function(e){n.setErrorMessage(e.response.data.message),n.toggleDisable()}))},n.handleRegister=function(e){n.toggleDisable(),v.post("/users/register",{username:n.state.username,password:n.state.password}).then((function(e){n.props.tokenHandler(e.data)})).catch((function(e){n.setErrorMessage(e.response.data.message),n.toggleDisable()}))},n.state={username:"",password:"",isDisable:!1,errorMessage:"\u200f\u200f\u200e \u200e"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.props.token?o.a.createElement(m.a,{to:e}):o.a.createElement("div",{className:"outer-wrapper"},o.a.createElement("div",{className:"outer-wrapper__cell"},o.a.createElement("div",{className:"login-wrapper"},o.a.createElement("div",{className:"login-wrapper__input"},o.a.createElement(E,{type:"text",changeHandler:this.handleInput,value:this.state.username,name:"username",placeholder:"username"})),o.a.createElement("div",{className:"login-wrapper__input"},o.a.createElement(E,{type:"password",changeHandler:this.handleInput,value:this.state.password,name:"password",placeholder:"password"})),o.a.createElement("div",{className:"errorMessage"},this.state.errorMessage),o.a.createElement("div",{className:"login-buttons"},o.a.createElement(b,{type:"button",className:"purple",clickHandler:this.handleLogin,icon:o.a.createElement(h.b,null),disabled:this.state.isDisable},"Login"),o.a.createElement(b,{type:"button",className:"blue",clickHandler:this.handleRegister,icon:o.a.createElement(h.a,null),disabled:this.state.isDisable},"Register")))))}}]),a}(o.a.Component),y=a(34);var L=function(e){return e.links.map((function(e){return o.a.createElement(d.b,{to:e.to,key:e.name},e.name)}))},j=a(14),D=a(12);var H=function(e){var t=e.detail,a=e.deleteHandler,r=e.updateHandler,l=e.editHandler,i=t.id,s=t.title,c=t.description,u=t.created,d=t.updated,m=t.status,p=Object(n.useState)(!1),h=Object(D.a)(p,2),g=h[0],f=h[1];return o.a.createElement("div",null,o.a.createElement("h3",null,s),o.a.createElement("p",null,c),o.a.createElement("p",null,u),o.a.createElement("p",null,new Date(1e3*u).toLocaleString()),o.a.createElement("p",null,new Date(1e3*d).toLocaleString()),o.a.createElement("div",null,o.a.createElement(b,{type:"button",clickHandler:function(){f(!0);var e={title:s,description:c,status:"active"===m?"done":"active"};v.put("/todos/".concat(i),e).then((function(e){r(i,e.data)})).catch((function(e){return console.log(e)}))},disabled:g},"done"===m?"Undone":"Done"),o.a.createElement(b,{type:"button",clickHandler:function(){l(t)},disabled:g},"Edit"),o.a.createElement(b,{type:"button",clickHandler:function(){f(!0),v.delete("/todos/".concat(i)).then((function(){a(i)})).catch((function(e){return console.log(e)}))},disabled:g},"Delete")))};var O=function(e){var t=e.submitHandler,a=e.initialData,r=(e.loading,Object(n.useState)(a.title||"")),l=Object(D.a)(r,2),i=l[0],s=l[1],c=Object(n.useState)(a.description||""),u=Object(D.a)(c,2),d=u[0],m=u[1],p=function(e){"title"===e.target.name&&s(e.target.value),"description"===e.target.name&&m(e.target.value)};return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=a.status||"active";t({title:i,description:d,status:n},a.id)}},o.a.createElement("div",null,o.a.createElement("input",{name:"title",placeholder:"Title",onChange:p,value:i})),o.a.createElement("div",null,o.a.createElement("textarea",{name:"description",placeholder:"Description",onChange:p,value:d})),o.a.createElement("div",null,o.a.createElement(b,{type:"reset",clickHandler:function(){s(""),m("")}},"Clear"),o.a.createElement(b,{type:"submit"},a.title?"Update":"Add"))))};var w=function(e){return function(t){var a=t.isLoading,n=t.error,r=Object(j.a)(t,["isLoading","error"]);return n?o.a.createElement("span",null,"Error Occured!"):a?o.a.createElement("div",null,"Loading..."):o.a.createElement(e,r)}}((function(e){var t=e.list,a=Object(j.a)(e,["list"]);return t.map((function(e){return o.a.createElement(H,Object.assign({detail:e,key:e.id},a))}))})),S=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleForm=function(e,t){n.toggleFormLoading(),t?n.editTodo(e,t):n.addNewTodo(e)},n.addNewTodo=function(e){v.post("/todos",e).then((function(e){n.toggleModal(),n.setState({todoList:[e.data].concat(Object(y.a)(n.state.todoList))})})).catch((function(e){return console.log(e)})).finally((function(){return n.toggleFormLoading}))},n.editTodo=function(e,t){v.put("/todos/".concat(t),e).then((function(e){n.handleUpdate(t,e.data),n.toggleModal()})).catch((function(e){return console.log(e)})).finally((function(){return n.toggleFormLoading}))},n.toggleFormLoading=function(){n.setState({isPosting:!n.state.isPosting})},n.toggleModal=function(e){n.modalData=e||{},n.setState({showModal:!n.state.showModal})},n.handleDelete=function(e){n.setState({todoList:n.state.todoList.filter((function(t){return t.id!==e}))})},n.handleUpdate=function(e,t){n.setState({todoList:n.state.todoList.map((function(a){return a.id===e?t:a}))})},n.state={todoList:[],isLoading:!0,error:!1,isPosting:!1,showModal:!1},n.nav=[{name:"All",to:"/"},{name:"Active",to:"/active"},{name:"Done",to:"/done"}],n.modalData={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.token&&v.get("/todos").then((function(t){e.setState({todoList:t.data,isLoading:!1})})).catch((function(){e.setState({error:!0})}))}},{key:"render",value:function(){if(!this.props.token)return o.a.createElement(m.a,{to:{pathname:"/login",state:{from:this.props.location}}});var e=this.state.todoList,t=this.props.location.pathname.split("/")[1];return"active"!==t&&"done"!==t||(e=this.state.todoList.filter((function(e){return e.status===t}))),o.a.createElement("div",null,this.state.showModal&&o.a.createElement(O,{submitHandler:this.handleForm,loading:this.state.isPosting,initialData:this.modalData}),o.a.createElement("div",null,"Home"),o.a.createElement(L,{links:this.nav}),o.a.createElement("div",null,o.a.createElement(b,{type:"button",clickHandler:this.toggleModal},"Add Todo")),o.a.createElement("div",null,o.a.createElement(b,{type:"button",clickHandler:this.props.logoutHandler},"Logout")),o.a.createElement(w,{error:this.state.error,isLoading:this.state.isLoading,deleteHandler:this.handleDelete,updateHandler:this.handleUpdate,editHandler:this.toggleModal,list:e}))}}]),a}(o.a.Component);var M=function(e){return o.a.createElement(d.a,null,o.a.createElement(m.d,null,o.a.createElement(m.b,{exact:!0,path:"/login",render:function(t){return o.a.createElement(k,Object.assign({},t,e))}}),o.a.createElement(m.b,{path:"/",render:function(t){return o.a.createElement(S,Object.assign({},t,e))}})))},N=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setToken=function(e){var t=e.token,a=e.id,o=e.username;n.setState({token:t,id:a,username:o}),localStorage.setItem("token",t)},n.removeToken=function(){n.setState({token:"",id:"",username:""}),localStorage.removeItem("token")},n.state={token:"",id:"",username:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token")||"";this.setState({token:t}),t&&v.get("/users").then((function(t){e.setToken(t.data)})).catch((function(){return e.removeToken}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(M,{token:this.state.token,tokenHandler:this.setToken,logoutHandler:this.removeToken}))}}]),a}(o.a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8f37a8ae.chunk.js.map