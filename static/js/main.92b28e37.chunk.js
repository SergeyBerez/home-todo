(this["webpackJsonptodo-firebase"]=this["webpackJsonptodo-firebase"]||[]).push([[0],{117:function(e,t,a){},122:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(1),r=a.n(s),i=a(15),c=a.n(i),o=(a(117),a(79)),l=a.n(o),d=a(39),u=a(92),j=a(45),b=a(11),p=a(72),h=a(19),m=a(192),x=(a(122),a(80)),O=a(38),f=a(171),g=a(26),k=a(6),v=a(196),y=a(176),w=a(177),N=a(180),S=a(174),T=a(58),I=a(179),C=a(178),_=a(96),z=a.n(_),U=a(98),L=a.n(U),D=a(97),A=a.n(D),B=a(181),M=a(182),F=a(183),J=a(99),H=a.n(J),E=240,P=Object(f.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(E,"px)"),marginLeft:E,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:E,flexShrink:0},drawerPaper:{width:E},drawerHeader:Object(x.a)(Object(x.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),R=[{title:"home",link:"/todo-material-firebase"},{title:"users",link:"/users"},{title:"about",link:"/about"}],W=function(){var e=P(),t=Object(g.a)(),a=r.a.useState(!1),s=Object(j.a)(a,2),i=s[0],c=s[1],o=function(){c(!1)};return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(S.a,{}),Object(n.jsx)(y.a,{position:"fixed",className:Object(k.a)(e.appBar,Object(b.a)({},e.appBarShift,i)),children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(C.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(k.a)(e.menuButton,i&&e.hide),children:Object(n.jsx)(z.a,{})}),Object(n.jsx)(T.a,{variant:"h6",noWrap:!0,children:"Menu"})]})}),Object(n.jsxs)(v.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper},children:[Object(n.jsx)("div",{className:e.toolbar,children:Object(n.jsx)(C.a,{onClick:o,children:"rtl"===t.direction?Object(n.jsx)(A.a,{}):Object(n.jsx)(L.a,{})})}),Object(n.jsx)(I.a,{}),Object(n.jsx)(N.a,{children:R.map((function(t,a){return Object(n.jsxs)(B.a,{button:!0,children:[Object(n.jsx)(M.a,{children:Object(n.jsx)(O.b,{onClick:o,exact:!0,to:t.link,className:e.link,children:Object(n.jsx)(H.a,{})})}),Object(n.jsx)(F.a,{primary:t.title})]},a)}))})]})]})},q=a(185),K=a(189),G=a(188),Z=a(184),Q=a(186),Y=a(187),$=a(129),V=Object(f.a)((function(e){var t;return{table:{marginTop:70},th:(t={},Object(b.a)(t,e.breakpoints.up("xs"),{fontSize:".7rem",padding:"5px"}),Object(b.a)(t,e.breakpoints.up("sm"),{padding:"10px"}),Object(b.a)(t,e.breakpoints.up("md"),{fontSize:"1rem",padding:"16px"}),t)}}));function X(e){var t=e.users,a=V();return console.log(t),Object(n.jsx)(Z.a,{component:$.a,children:Object(n.jsxs)(q.a,{className:a.table,"aria-label":"simple table",children:[Object(n.jsx)(Q.a,{children:Object(n.jsxs)(Y.a,{children:[Object(n.jsx)(G.a,{className:a.th,children:"All Users"}),Object(n.jsx)(G.a,{className:a.th,align:"right",children:"tasks"}),Object(n.jsx)(G.a,{className:a.th,align:"right",children:"date registrashion"})]})}),Object(n.jsx)(K.a,{children:t.map((function(e){return Object(n.jsxs)(Y.a,{children:[Object(n.jsx)(G.a,{className:a.th,component:"th",scope:"row",children:e.user_name}),Object(n.jsx)(G.a,{className:a.th,align:"right",children:e.countTask}),Object(n.jsx)(G.a,{className:a.th,align:"right",children:e.time})]},e.id)}))})]})})}var ee=a(193),te=a(190),ae=a(195),ne=a(71),se=a.n(ne),re=a(100),ie=a.n(re),ce=Object(f.a)((function(e){var t;return{navLink:{display:"flex",flexGrow:1,justifyContent:" space - between",textAlign:"center",textDecoration:" none"},button:{margin:8},li:{display:"flex",justifyContent:"space-between",textAlign:"center"},icon:{fontSize:"2rem"},item:{flex:"0 auto"},ListItemText:{"& span":(t={},Object(b.a)(t,e.breakpoints.up("xs"),{margin:8,fontSize:".7rem"}),Object(b.a)(t,e.breakpoints.up("sm"),{margin:8,fontSize:".9rem"}),Object(b.a)(t,e.breakpoints.up("md"),{margin:8,fontSize:"1rem"}),t)}}}));var oe=function(e){var t=e.users,a=e.deleteUser;console.log(t);var s=ce();return t.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(B.a,{button:!0,children:[Object(n.jsxs)(O.b,{className:s.navLink,to:"/users/"+parseInt(e.id_user),children:[Object(n.jsx)(F.a,{className:s.item,primary:t+1}),Object(n.jsx)(ie.a,{className:s.icon}),Object(n.jsx)(F.a,{className:s.ListItemText,primary:e.user_name}),Object(n.jsx)(F.a,{className:s.ListItemText,primary:e.countTask}),Object(n.jsx)(F.a,{className:s.ListItemText,primary:e.time})]}),Object(n.jsx)(te.a,{onClick:function(){a(t)},variant:"contained",color:"secondary",className:s.button,startIcon:Object(n.jsx)(se.a,{}),children:"Delete"})]},t),Object(n.jsx)(I.a,{})]},t)}))},le=a(101),de=a.n(le),ue=Object(f.a)((function(e){var t,a;return{Alert:{display:"flex",justifyContent:"space-between",marginTop:70,"& div":{display:"flex",width:"50%",alignItems:"center",justifyContent:"space-between"}},root:{display:"flex",justifyContent:"space-between"},textField:(t={},Object(b.a)(t,e.breakpoints.up("xs"),{width:"90%",margin:8}),Object(b.a)(t,e.breakpoints.up("sm"),{width:"90%",margin:8}),Object(b.a)(t,e.breakpoints.up("md"),{width:"90%",margin:8}),t),button:(a={},Object(b.a)(a,e.breakpoints.up("xs"),{fontSize:".7rem",margin:6}),Object(b.a)(a,e.breakpoints.up("sm"),{fontSize:"0.7rem",margin:e.spacing(1)}),Object(b.a)(a,e.breakpoints.up("md"),{fontSize:"1rem",margin:e.spacing(1)}),a)}}));var je=function(e){var t=ue();return console.log("================render ===== users",e.users),Object(n.jsxs)("div",{className:t.header,children:[Object(n.jsxs)(ae.a,{icon:!1,severity:"info",className:t.Alert,children:[Object(n.jsx)(de.a,{})," \xa0",0!==Object.keys(e.users).length?Object(n.jsxs)(n.Fragment,{children:["\xa0 ",Object(n.jsx)("p",{children:"all users"})," \xa0 \xa0",Object(n.jsx)("span",{children:Object.keys(e.users).length})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{children:"not users add user"})})]}),Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(ee.a,{value:e.value,onChange:function(t){e.changeTitle(t.target.value)},onKeyUp:e.keyHandle,id:"standard-full-width",label:"Enter user",className:t.textField,placeholder:"name user",helperText:"",margin:"normal",InputLabelProps:{shrink:!0},type:"text"}),Object(n.jsx)(te.a,{onClick:e.addUser,variant:"contained",className:t.button,children:"ADD\xa0USER"})]}),Object(n.jsx)(N.a,{children:Object(n.jsx)(oe,{users:e.users,deleteUser:e.deleteUser})})]})},be=a(104),pe=a.n(be),he=a(103),me=a.n(he),xe=a(102),Oe=a.n(xe),fe=Object(f.a)((function(e){return{root:{position:"fixed",width:"300px",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",display:"flex",justifyContent:"space-between",flexDirection:"column",borderRadius:"5px",border:"1px solid #a58e8eb5",boxShadow:"0px 1px 3px 0px",padding:"10px"},headerButton:{display:"flex",justifyContent:"space-between",alignItems:"center"},hideModal:{display:"none"},textField:{width:"70%"}}})),ge=function(e){var t=e.user,a=e.show,s=e.closeModal,r=fe();return console.log("=======render modal",t),Object(n.jsxs)("div",{className:a?r.root:r.hideModal,children:[Object(n.jsxs)("div",{className:r.headerButton,children:[Object(n.jsxs)(T.a,{className:r.typography,children:[t.id+1,"new task:",t.value]}),Object(n.jsx)(C.a,{"aria-label":"close",onClick:s,children:Object(n.jsx)(Oe.a,{})})]}),Object(n.jsxs)(T.a,{className:r.typography,children:["old task:",t.title]}),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:r.headerButton,children:[Object(n.jsx)(ee.a,{label:"user task",className:r.textField,placeholder:"edit task",helperText:"",margin:"normal",InputLabelProps:{shrink:!0},type:"text",value:t.value,onChange:function(e){t.changeTitlebyModal(e.target.value)},children:" "}),Object(n.jsx)(C.a,{onClick:function(){t.editTask(t.id_user,t.id_task),s()},"aria-label":"enter",children:Object(n.jsx)(me.a,{})})]})})]})},ke=Object(f.a)((function(e){var t,a;return{root:{display:"flex",justifyContent:"space-between"},header:{marginTop:70},typography:(t={},Object(b.a)(t,e.breakpoints.up("xs"),{margin:8,fontSize:".7rem"}),Object(b.a)(t,e.breakpoints.up("sm"),{margin:8,fontSize:".9rem"}),Object(b.a)(t,e.breakpoints.up("md"),{margin:8,fontSize:"1rem"}),t),button:(a={},Object(b.a)(a,e.breakpoints.up("xs"),{margin:8,fontSize:".7rem"}),Object(b.a)(a,e.breakpoints.up("sm"),{margin:8}),Object(b.a)(a,"margin",e.spacing(1)),a),form:{position:"fixed",width:"200px",height:"200px",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"space-between"}}}));function ve(e){var t=ke(),a=Object(s.useState)(!1),r=Object(j.a)(a,2),i=r[0],c=r[1];return console.log("======render list",{props:e}),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(B.a,{className:t.root,children:[Object(n.jsx)(T.a,{className:t.typography,children:e.title}),Object(n.jsx)(T.a,{className:t.typography,children:e.id+1}),Object(n.jsx)(T.a,{className:t.typography,children:e.time}),Object(n.jsxs)("div",{children:[Object(n.jsx)(te.a,{onClick:function(){c(!0),console.log("coloseModal")},variant:"contained",className:t.button,startIcon:Object(n.jsx)(pe.a,{}),children:"edit"}),Object(n.jsxs)(te.a,{onClick:function(){e.deleteTask(e.id_user,e.id_task,e.id)},variant:"contained",color:"secondary",startIcon:Object(n.jsx)(se.a,{}),className:t.button,children:[" ","DELL"]})]})]}),Object(n.jsx)(I.a,{}),Object(n.jsx)(ge,{user:e,show:i,closeModal:function(){console.log("showModal"),c(!1)}})]})}var ye=a(105),we=a.n(ye),Ne=Object(f.a)((function(e){var t,a;return{navLink:{},Alert:{display:"flex",justifyContent:"space-between",marginTop:70,"& div":{display:"flex",width:"50%",alignItems:"center",justifyContent:"space-between"}},root:{display:"flex",justifyContent:"space-between"},textField:(t={},Object(b.a)(t,e.breakpoints.up("xs"),{width:"85%",margin:8}),Object(b.a)(t,e.breakpoints.up("sm"),{width:"85%",margin:8}),Object(b.a)(t,e.breakpoints.up("md"),{width:"85%",margin:8}),t),button:(a={},Object(b.a)(a,e.breakpoints.up("xs"),{fontSize:".7rem"}),Object(b.a)(a,e.breakpoints.up("sm"),{fontSize:"0.7rem"}),Object(b.a)(a,e.breakpoints.up("md"),{fontSize:"1rem",margin:e.spacing(1)}),a)}})),Se=function(e){var t,a,s=Ne();return console.log("==============UserPersonalTasks render user tasks",e),e.users.length&&(void 0===(a=e.users.find((function(t){return t.id_user===parseInt(e.history.match.params.id)}))).tasks&&(a.tasks=[]),t=a.tasks.map((function(t,a){return Object(n.jsx)(ve,{id:a,id_user:parseInt(e.history.match.params.id),id_task:t.id_task,value:e.valueTodo,title:t.title,time:t.time_task,editTask:e.editTask,changeTitlebyModal:e.changeTitlebyModal,deleteTask:e.deleteTask},a)}))),Object(n.jsxs)("div",{className:s.header,children:[Object(n.jsxs)(ae.a,{icon:!1,severity:"info",className:s.Alert,children:[Object(n.jsx)(O.b,{className:s.navLink,to:"/users/",children:Object(n.jsx)(C.a,{children:Object(n.jsx)(we.a,{})})}),void 0===t?Object(n.jsx)("p1",{children:"at firs add user"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:a.user_name}),"\xa0",Object(n.jsxs)("p",{children:["tasks \xa0",a.tasks.length]})]})]}),Object(n.jsxs)("div",{className:s.root,children:[Object(n.jsx)(ee.a,Object(b.a)({id:"standard-full-width",label:"Enter task",className:s.textField,placeholder:"name task",helperText:"",margin:"normal",InputLabelProps:{shrink:!0},type:"text",value:e.valueUser,onKeyUp:function(t){e.keyHandle(t,parseInt(e.history.match.params.id),a.tasks.length)},onChange:function(t){e.changeTitleUserTask(t.target.value)}},"type","text")),Object(n.jsx)(te.a,{onClick:function(){e.addTodoTaskUser(parseInt(e.history.match.params.id),a.tasks.length)},disabled:0===e.users.length,variant:"contained",className:s.button,children:"ADD TASK"})]}),Object(n.jsxs)(N.a,{children:[t," "]})]})},Te=a(191),Ie=Object(f.a)((function(e){return{root:{marginTop:70}}}));function Ce(e){var t=Ie();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsxs)(ae.a,{severity:"info",children:[Object(n.jsx)(Te.a,{}),"\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0437\u0430\u043c\u0435\u0442\u043e\u043a \xa0 \xa0",Object(n.jsx)("strong",{children:"\u0432\u0435\u0440\u0441\u0438\u044f \xa01.1.1"})]})})}var _e=Object(f.a)((function(e){var t;return{root:(t={},Object(b.a)(t,e.breakpoints.up("xs"),{maxWidth:"400px",paddingLeft:"0px",paddingRight:"0px"}),Object(b.a)(t,e.breakpoints.up("sm"),{maxWidth:" 600px"}),Object(b.a)(t,e.breakpoints.up("md"),{maxWidth:" 960px"}),t)}}));var ze=function(){var e=_e(),t=JSON.parse(localStorage.getItem("users"))||[],a=Object(s.useState)(t),r=Object(j.a)(a,2),i=r[0],c=r[1],o=Object(s.useState)({value:""}),b=Object(j.a)(o,2),x=b[0],O=b[1],f=Object(s.useState)({value:""}),g=Object(j.a)(f,2),k=g[0],v=g[1];Object(s.useEffect)((function(){console.log("use effect"),y()}),[]);var y=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-quize-46f17.firebaseio.com/users.json");case 2:if(a=e.sent,n=Object(d.a)(i),console.log(n),!a.ok){e.next=11;break}return e.next=8,a.json();case 8:s=e.sent,console.log("getUsersFromFairbase",s),null!==s&&Object.values(s).forEach((function(e){n.push(e)}));case 11:r=n.filter((function(e,t,a){return t===a.findIndex((function(t){return e.id_user===t.id_user}))})),console.log(r),localStorage.setItem("users",JSON.stringify(r)),c(r);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){p.a.database().ref("users/"+e.id_user).set(e)},N=function(){console.log("adduser");var e={id_user:Date.now()+1,time:(new Date).toString().split("G")[0],user_name:x.value,completed:!1,tasks:[],countTask:0};if(x.value.length>2){var t=Object(d.a)(i);t.push(e),localStorage.setItem("users",JSON.stringify(t)),c(t),O({value:""}),w(e)}},S=function(e){console.log("vlaue",e),O({value:e})},T=function(e){v({value:e})},I=function(e){console.log("keyHandle"),13===e.keyCode&&x.value.length>2&&N()},C=function(e,t,a){console.log("keyHandleInputTask",t,a),13===e.keyCode&&x.value.length>2&&_(t,a)},_=function(e,t){if(console.log("ddTodoTaskUser"),x.value.length>2){var a=Object(d.a)(i),n=a.find((function(t,a){return t.id_user===e}));n.countTask=t+1;var s=Object(d.a)(n.tasks),r=new Date;s.push({id_task:(new Date).getTime()+1,title:x.value,time_task:"".concat((new Date).toLocaleDateString()," :").concat(r.getHours(),":").concat(r.getMinutes())}),n.tasks=s,c(a),localStorage.setItem("users",JSON.stringify(a)),O({value:""}),w(n),console.log("user===================",n),console.log("user===================",a)}},z=function(e,t){var a=Object(d.a)(i),n=a.find((function(t){return t.id_user===e})),s=Object(d.a)(n.tasks);s.map((function(e){return e.id_task===t&&(e.title=k.value),e})),n.tasks=s,a.map((function(t){return e===t.id_user&&(t=n),t})),console.log(a),c(a),localStorage.setItem("users",JSON.stringify(a)),v({value:""})},U=function(e){var t=Object(d.a)(i);t.splice(e,1),c(t),w(t),localStorage.setItem("users",JSON.stringify(t))},L=function(e,t,a){console.log(a);var n=Object(d.a)(i),s=n.find((function(t){return t.id_user===e}));s.tasks.splice(a,1),n.push(s);var r=n.filter((function(e,t){return n.indexOf(e)===t}));w(r),c(r),localStorage.setItem("users",JSON.stringify(r))};return Object(n.jsxs)(m.a,{className:e.root,children:[Object(n.jsx)(W,{}),Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.b,{exact:!0,path:"/todo-material-firebase",render:function(){return Object(n.jsx)(X,{users:i})}}),Object(n.jsx)(h.b,{exact:!0,path:"/users",render:function(){return Object(n.jsx)(je,{addUser:N,keyHandle:I,changeTitle:S,users:i,value:x.value,deleteUser:U})}}),Object(n.jsx)(h.b,{path:"/users/:id",render:function(e){return Object(n.jsx)(Se,{valueUser:x.value,valueTodo:k.value,history:e,users:i,keyHandle:C,addTodoTaskUser:_,editTask:z,changeTitleUserTask:S,changeTitlebyModal:T,deleteTask:L})}}),Object(n.jsx)(h.b,{path:"/about",component:Ce}),Object(n.jsx)(h.a,{to:"/todo-material-firebase"}),Object(n.jsx)(h.b,{render:function(){return Object(n.jsx)("h1",{style:{color:"red"},children:" 404 not found page..."})}})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.initializeApp({apiKey:"AIzaSyB-hPQZWluKy43wUjA7Zi6k5MpDR4ap7RY",authDomain:"react-quize-46f17.firebaseapp.com",databaseURL:"https://react-quize-46f17.firebaseio.com",projectId:"react-quize-46f17",storageBucket:"react-quize-46f17.appspot.com",messagingSenderId:"822369206100",appId:"1:822369206100:web:eb939cd61dc1e529cbd2c1"});var Ue=Object(n.jsx)(O.a,{children:Object(n.jsx)(ze,{})});c.a.render(Ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.92b28e37.chunk.js.map