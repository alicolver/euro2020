(this["webpackJsonpeuro2020-front-end"]=this["webpackJsonpeuro2020-front-end"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=(a(99),a(44)),s=a(11),j=a(10),l=a(167),u=a(152),b=a(150),m=a(165),d=a(147),h=a(151),O=a(57),p=a.n(O),x=a(114),g=a(148),f=a(149),v="https://euro2020-back-end.herokuapp.com/";function w(e){return v+e}function y(){var e="; ".concat(document.cookie).split("; ".concat("jwt","="));if(2===e.length){var t=e.pop().split(";").shift();return"undefined"===typeof t?"":t}return""}var S=a(2);function N(){return Object(S.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(S.jsx)(d.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var C=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function k(){var e=C(),t=Object(n.useState)(""),a=Object(j.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),o=Object(j.a)(i,2),O=o[0],g=o[1],v=Object(n.useState)(""),y=Object(j.a)(v,2),k=y[0],T=y[1],A=Object(n.useState)(""),W=Object(j.a)(A,2),E=W[0],F=W[1],L=Object(n.useState)(""),P=Object(j.a)(L,2),_=P[0],B=P[1],I=Object(n.useState)(!0),q=Object(j.a)(I,2),z=q[0],G=q[1],D=Object(n.useState)(!1),J=Object(j.a)(D,2),R=J[0],H=J[1];function U(){!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(k)?G(!1):fetch(w("signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:k,password:E,name:r+" "+O})}).then((function(e){return e.json()})).then((function(e){!1===e.success?alert("error whilst signing up :("):H(!0)}))}return R?Object(S.jsx)(s.a,{to:"/"}):Object(S.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(b.a,{}),Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)(l.a,{className:e.avatar,children:Object(S.jsx)(p.a,{})}),Object(S.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(S.jsxs)("div",{className:e.form,children:[Object(S.jsxs)(h.a,{container:!0,spacing:2,children:[Object(S.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(m.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return c(e.target.value)}})}),Object(S.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return g(e.target.value)}})}),Object(S.jsx)(h.a,{item:!0,xs:12,children:Object(S.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return T(e.target.value)},error:!z})}),Object(S.jsx)(h.a,{item:!0,xs:12,children:Object(S.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return F(e.target.value)}})}),Object(S.jsx)(h.a,{item:!0,xs:12,children:Object(S.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmpassword",label:"Confirm Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return B(e.target.value)},error:E!==_})})]}),Object(S.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return U()},children:"Sign Up"}),Object(S.jsx)(h.a,{container:!0,justify:"flex-end",children:Object(S.jsx)(h.a,{item:!0,children:Object(S.jsx)(s.b,{render:function(e){var t=e.history;return Object(S.jsx)(d.a,{onClick:function(){t.push("/")},variant:"body2",children:"Already have an account? Sign in"})}})})})]})]}),Object(S.jsx)(N,{})]})}var T=a(13),A=a(166);function W(){return Object(S.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(S.jsx)(d.a,{color:"inherit",href:"https://material-ui.com/",children:"Ali Colver & Luke Ely"})," ",(new Date).getFullYear(),"."]})}var E=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function F(){var e=E(),t=Object(n.useState)({value:"",error:!1}),a=Object(j.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)({value:"",error:!1}),o=Object(j.a)(i,2),O=o[0],g=o[1],N=Object(n.useState)(!1),C=Object(j.a)(N,2),k=C[0],F=C[1];Object(n.useEffect)((function(){(function(){var e=y();return fetch(v+"authenticate",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authenticate:e}}).then((function(e){return e.json()})).then((function(e){return e.valid})),!1})()&&F(!0)}),[]);var L=function(){fetch(w("login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.value,password:O.value})}).then((function(e){return e.json()})).then((function(e){var t;""===e["error-message"]?(t=e.token,document.cookie="jwt="+t,F(!0)):(g(Object(T.a)(Object(T.a)({},O),{},{error:!0})),c(Object(T.a)(Object(T.a)({},r),{},{error:!0})))}))};return k?Object(S.jsx)(s.a,{to:"/home"}):Object(S.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(b.a,{}),Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)(l.a,{className:e.avatar,children:Object(S.jsx)(p.a,{})}),Object(S.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(S.jsxs)("div",{className:e.form,children:[Object(S.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(Object(T.a)(Object(T.a)({},r),{},{value:e.target.value}))},error:r.error}),Object(S.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return g(Object(T.a)(Object(T.a)({},O),{},{value:e.target.value}))},error:O.error}),Object(S.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return L()},children:"Sign In"}),Object(S.jsx)(h.a,{container:!0,children:Object(S.jsx)(h.a,{item:!0,children:Object(S.jsx)(s.b,{render:function(e){var t=e.history;return Object(S.jsx)(d.a,{onClick:function(){t.push("/signup")},variant:"body2",children:"Don't have an account? Sign Up"})}})})})]})]}),Object(S.jsx)(A.a,{mt:8,children:Object(S.jsx)(W,{})})]})}var L=a(154),P=a(158),_=a(157),B=a(153),I=a(155),q=a(156),z=a(79);a(111);function G(){return Object(S.jsx)("div",{className:"liveIcon",children:"LIVE"})}var D=Object(g.a)({table:{padding:"5px"}});function J(e,t,a,n){return{name:e,correctResults:t,correctScores:a,points:n}}var R=[J("Ali",1,3,10),J("Luke",4,5,19)];function H(){var e=D(),t=Object(n.useState)(!1);return Object(S.jsx)(B.a,{component:z.a,children:Object(S.jsxs)(L.a,{className:e.table,"aria-label":"simple table",children:[Object(S.jsx)(I.a,{children:Object(S.jsxs)(q.a,{children:[Object(S.jsx)(_.a,{children:"Standings"}),Object(S.jsx)(_.a,{align:"right",children:"R"}),Object(S.jsx)(_.a,{align:"right",children:"S"}),Object(S.jsx)(_.a,{align:"right",children:"Points"})]})}),Object(S.jsx)(P.a,{children:R.map((function(e,a){return Object(S.jsxs)(q.a,{children:[Object(S.jsxs)(_.a,{component:"th",scope:"row",children:[t?Object(S.jsx)(G,{}):null," ",a+1+". "+e.name]}),Object(S.jsx)(_.a,{align:"right",children:e.correctResults}),Object(S.jsx)(_.a,{align:"right",children:e.correctScores}),Object(S.jsx)(_.a,{align:"right",children:e.points})]},a)}))})]})})}var U=a(159),Y=a(160),Z=a.p+"static/media/logo.b61bf1d9.svg",M=Object(g.a)((function(e){return{root:{display:"flex",flexGrow:1,width:"100%",height:"100%"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},headerLogo:{maxWidth:50,alignSelf:"center"}}}));function V(){var e=M();return Object(S.jsx)(U.a,{position:"static",className:e.root,children:Object(S.jsxs)(Y.a,{className:e.root,children:[Object(S.jsx)("img",{className:e.headerLogo,src:Z,alt:"logo"}),Object(S.jsx)(u.a,{color:"inherit",children:"Logout"})]})})}var $=a(161),K=a(162),Q=a(73),X=a.n(Q),ee=a(75),te=a.n(ee),ae=a(74),ne=a.n(ae),re=Object(g.a)({root:{width:"100vw",position:"fixed",bottom:0,left:0}});function ce(e){var t=re();return Object(S.jsx)(s.b,{render:function(a){var n=a.history;return Object(S.jsxs)($.a,{value:e.value,onChange:function(e,t){n.push(t)},showLabels:!0,className:t.root,children:[Object(S.jsx)(K.a,{label:"Standings",value:"/standings",icon:Object(S.jsx)(X.a,{})}),Object(S.jsx)(K.a,{label:"Predict",value:"/home",icon:Object(S.jsx)(ne.a,{})}),Object(S.jsx)(K.a,{label:"History",value:"/history",icon:Object(S.jsx)(te.a,{})})]})}})}var ie=Object(g.a)({leaderboard:{padding:"5px",marginTop:"50px"}});function oe(){var e=ie();return Object(S.jsxs)(r.a.Fragment,{children:[Object(S.jsx)(V,{}),Object(S.jsx)("div",{className:e.leaderboard,children:Object(S.jsx)(H,{})}),Object(S.jsx)(ce,{value:"/standings"})]})}var se=a(163),je=a(169),le=Object(g.a)({team:{textAlign:"center",width:"25vw"},teamEmoji:{fontSize:"15vw"},teamName:{fontSize:"4vw"}});function ue(e){var t=le();return Object(S.jsxs)(A.a,{className:t.team,children:[Object(S.jsx)("div",{className:t.teamEmoji,children:e.emoji}),Object(S.jsx)("div",{className:t.teamName,children:e.name})]})}var be=Object(g.a)({match:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginBottom:"3vh"},game:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginTop:"5vh",position:"relative"},teaminput:{width:"10vw",height:"8vw",fontSize:"4vw",marginTop:"6vw"},dash:{fontSize:"8vw",marginTop:"4vw"},date:{fontSize:"5vw",marginBottom:"1.5vh",verticalAlign:"center",position:"relative"},matchCard:{marginBottom:"4vh",textAlign:"center"},buttonBox:{marginBottom:"1.5vh"},button:{backgroundColor:"#1caac9"}});function me(e){var t=be(),a=Object(n.useState)({score:"",error:!1}),r=Object(j.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)({score:"",error:!1}),s=Object(j.a)(o,2),l=s[0],b=s[1];return Object(S.jsxs)(se.a,{className:t.matchCard,children:[Object(S.jsxs)(A.a,{className:t.match,children:[Object(S.jsx)(A.a,{children:Object(S.jsx)(ue,{name:e.team1.name,emoji:e.team1.emoji})}),Object(S.jsx)(je.a,{className:t.teaminput,id:"outlined-basic",label:"",onChange:function(e){return i(Object(T.a)(Object(T.a)({},c),{},{score:e.target.value}))},error:c.error}),Object(S.jsx)("span",{className:t.dash,children:"-"}),Object(S.jsx)(je.a,{className:t.teaminput,id:"outlined-basic",label:"",onChange:function(e){return b(Object(T.a)(Object(T.a)({},l),{},{score:e.target.value}))},error:l.error}),Object(S.jsx)(A.a,{children:Object(S.jsx)(ue,{name:e.team2.name,emoji:e.team2.emoji})})]}),Object(S.jsx)(A.a,{className:t.date,children:e.match.match_date+" "+e.match.kick_off_time}),Object(S.jsx)(A.a,{className:t.buttonBox,children:Object(S.jsx)(u.a,{variant:"contained",className:t.button,onClick:function(){return function(){var e=parseInt(c.score),t=parseInt(l.score);if(isNaN(e)||isNaN(t))return i(Object(T.a)(Object(T.a)({},c),{},{error:!0})),void b(Object(T.a)(Object(T.a)({},l),{},{error:!0}));i(Object(T.a)(Object(T.a)({},c),{},{error:!1})),b(Object(T.a)(Object(T.a)({},l),{},{error:!1})),fetch(w("/predict"))}()},children:"Submit Prediction"})})]})}var de=Object(g.a)({upcomingGames:{fontSize:"8vw"}});function he(){var e=de(),t=Object(n.useState)([{team_one:{name:"team",emoji:""},team_two:{name:"team",emoji:""},match:{match_date:"",kick_off_time:"",is_knockout:!1,matchid:-1}}]),a=Object(j.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){fetch(w("prediction-required"),{method:"GET",headers:{Authenticate:y()}}).then((function(e){return e.json()})).then((function(e){e.success?(console.log(e),c(e.matches)):u(!0)}))}),[c]),l?Object(S.jsx)(s.a,{to:"/"}):Object(S.jsxs)("div",{children:[Object(S.jsx)(x.a,{className:e.upcomingGames,children:"Upcoming Games"}),r.map((function(e){return Object(S.jsx)(me,{team1:e.team_one,team2:e.team_two,match:e.match})}))]})}var Oe=a(76),pe=a(164),xe=Object(g.a)({logo:{maxHeight:"15vh"},homepage:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),ge=Object(Oe.a)({typography:{fontFamily:["Source Sans Pro","sans-serif"].join(",")}});var fe=function(){var e=xe();return Object(S.jsxs)(pe.a,{theme:ge,children:[Object(S.jsxs)(f.a,{className:e.homepage,children:[Object(S.jsx)("img",{className:e.logo,src:Z,alt:"euro logo"}),Object(S.jsx)(he,{})]}),Object(S.jsx)(ce,{value:"/home"})]})};function ve(){return Object(S.jsxs)(o.a,{children:[Object(S.jsx)(s.b,{path:"/",exact:!0,component:F}),Object(S.jsx)(s.b,{path:"/signup",exact:!0,component:k}),Object(S.jsx)(s.b,{path:"/standings",exact:!0,component:oe}),Object(S.jsx)(s.b,{path:"/predict",exact:!0,component:he}),Object(S.jsx)(s.b,{path:"/home",exact:!0,component:fe}),Object(S.jsx)(s.b,{path:"/history",exact:!0,component:History})]})}var we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(ve,{})}),document.getElementById("root")),we()},99:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.ae11e1b7.chunk.js.map