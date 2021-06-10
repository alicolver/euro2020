(this["webpackJsonpeuro2020-front-end"]=this["webpackJsonpeuro2020-front-end"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=(a(99),a(44)),s=a(11),j=a(10),l=a(167),u=a(152),b=a(150),m=a(165),d=a(147),h=a(151),O=a(57),p=a.n(O),x=a(114),f=a(148),g=a(149),v="https://euro2020-back-end.herokuapp.com/";function w(){var e=S();return fetch(v+"authenticate",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authenticate:e}}).then((function(e){return e.json()})).then((function(e){return e.valid})),!1}function y(e){return v+e}function S(){var e="; ".concat(document.cookie).split("; ".concat("jwt","="));if(2===e.length){var t=e.pop().split(";").shift();return"undefined"===typeof t?"":t}return""}var N=a(2);function C(){return Object(N.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(N.jsx)(d.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var k=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function T(){var e=k(),t=Object(n.useState)(""),a=Object(j.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),o=Object(j.a)(i,2),O=o[0],f=o[1],v=Object(n.useState)(""),S=Object(j.a)(v,2),T=S[0],_=S[1],A=Object(n.useState)(""),E=Object(j.a)(A,2),W=E[0],P=E[1],F=Object(n.useState)(""),L=Object(j.a)(F,2),B=L[0],I=L[1],q=Object(n.useState)(!0),z=Object(j.a)(q,2),G=z[0],D=z[1],J=Object(n.useState)(!1),R=Object(j.a)(J,2),H=R[0],U=R[1],Y=Object(n.useState)(!1),Z=Object(j.a)(Y,2),M=Z[0],V=Z[1];function $(){!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(T)?D(!1):fetch(y("signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:T,password:W,name:r+" "+O})}).then((function(e){return e.json()})).then((function(e){!1===e.success?alert("error whilst signing up :("):U(!0)}))}return Object(n.useEffect)((function(){w()&&V(!0)}),[V]),M?Object(N.jsx)(s.a,{to:"/home"}):H?Object(N.jsx)(s.a,{to:"/"}):Object(N.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(b.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(l.a,{className:e.avatar,children:Object(N.jsx)(p.a,{})}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(N.jsxs)("div",{className:e.form,children:[Object(N.jsxs)(h.a,{container:!0,spacing:2,children:[Object(N.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(N.jsx)(m.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return c(e.target.value)}})}),Object(N.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(N.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return f(e.target.value)}})}),Object(N.jsx)(h.a,{item:!0,xs:12,children:Object(N.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return _(e.target.value)},error:!G})}),Object(N.jsx)(h.a,{item:!0,xs:12,children:Object(N.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return P(e.target.value)}})}),Object(N.jsx)(h.a,{item:!0,xs:12,children:Object(N.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmpassword",label:"Confirm Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return I(e.target.value)},error:W!==B})})]}),Object(N.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return $()},children:"Sign Up"}),Object(N.jsx)(h.a,{container:!0,justify:"flex-end",children:Object(N.jsx)(h.a,{item:!0,children:Object(N.jsx)(s.b,{render:function(e){var t=e.history;return Object(N.jsx)(d.a,{onClick:function(){t.push("/")},variant:"body2",children:"Already have an account? Sign in"})}})})})]})]}),Object(N.jsx)(C,{})]})}var _=a(13),A=a(166);function E(){return Object(N.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(N.jsx)(d.a,{color:"inherit",href:"https://material-ui.com/",children:"Ali Colver & Luke Ely"})," ",(new Date).getFullYear(),"."]})}var W=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function P(){var e=W(),t=Object(n.useState)({value:"",error:!1}),a=Object(j.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)({value:"",error:!1}),o=Object(j.a)(i,2),O=o[0],f=o[1],v=Object(n.useState)(!1),S=Object(j.a)(v,2),C=S[0],k=S[1];Object(n.useEffect)((function(){w()&&k(!0)}),[k]);var T=function(){fetch(y("login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.value,password:O.value})}).then((function(e){return e.json()})).then((function(e){var t;""===e["error-message"]?(t=e.token,document.cookie="jwt="+t,k(!0)):(f(Object(_.a)(Object(_.a)({},O),{},{error:!0})),c(Object(_.a)(Object(_.a)({},r),{},{error:!0})))}))};return C?Object(N.jsx)(s.a,{to:"/home"}):Object(N.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(b.a,{}),Object(N.jsxs)("div",{className:e.paper,children:[Object(N.jsx)(l.a,{className:e.avatar,children:Object(N.jsx)(p.a,{})}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(N.jsxs)("div",{className:e.form,children:[Object(N.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(Object(_.a)(Object(_.a)({},r),{},{value:e.target.value}))},error:r.error}),Object(N.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return f(Object(_.a)(Object(_.a)({},O),{},{value:e.target.value}))},error:O.error}),Object(N.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return T()},children:"Sign In"}),Object(N.jsx)(h.a,{container:!0,children:Object(N.jsx)(h.a,{item:!0,children:Object(N.jsx)(s.b,{render:function(e){var t=e.history;return Object(N.jsx)(d.a,{onClick:function(){t.push("/signup")},variant:"body2",children:"Don't have an account? Sign Up"})}})})})]})]}),Object(N.jsx)(A.a,{mt:8,children:Object(N.jsx)(E,{})})]})}var F=a(154),L=a(158),B=a(157),I=a(153),q=a(155),z=a(156),G=a(79);a(111);function D(){return Object(N.jsx)("div",{className:"liveIcon",children:"LIVE"})}var J=Object(f.a)({table:{padding:"5px"}});function R(e,t,a,n){return{name:e,correctResults:t,correctScores:a,points:n}}var H=[R("Ali",1,3,10),R("Luke",4,5,19)];function U(){var e=J(),t=Object(n.useState)(!1);return Object(N.jsx)(I.a,{component:G.a,children:Object(N.jsxs)(F.a,{className:e.table,"aria-label":"simple table",children:[Object(N.jsx)(q.a,{children:Object(N.jsxs)(z.a,{children:[Object(N.jsx)(B.a,{children:"Standings"}),Object(N.jsx)(B.a,{align:"right",children:"R"}),Object(N.jsx)(B.a,{align:"right",children:"S"}),Object(N.jsx)(B.a,{align:"right",children:"Points"})]})}),Object(N.jsx)(L.a,{children:H.map((function(e,a){return Object(N.jsxs)(z.a,{children:[Object(N.jsxs)(B.a,{component:"th",scope:"row",children:[t?Object(N.jsx)(D,{}):null," ",a+1+". "+e.name]}),Object(N.jsx)(B.a,{align:"right",children:e.correctResults}),Object(N.jsx)(B.a,{align:"right",children:e.correctScores}),Object(N.jsx)(B.a,{align:"right",children:e.points})]},a)}))})]})})}var Y=a(159),Z=a(160),M=a.p+"static/media/logo.b61bf1d9.svg",V=Object(f.a)((function(e){return{root:{display:"flex",flexGrow:1,width:"100%",height:"100%"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},headerLogo:{maxWidth:50,alignSelf:"center"}}}));function $(){var e=V();return Object(N.jsx)(Y.a,{position:"static",className:e.root,children:Object(N.jsxs)(Z.a,{className:e.root,children:[Object(N.jsx)("img",{className:e.headerLogo,src:M,alt:"logo"}),Object(N.jsx)(u.a,{color:"inherit",children:"Logout"})]})})}var K=a(161),Q=a(162),X=a(73),ee=a.n(X),te=a(75),ae=a.n(te),ne=a(74),re=a.n(ne),ce=Object(f.a)({root:{width:"100vw",position:"fixed",bottom:0,left:0}});function ie(e){var t=ce();return Object(N.jsx)(s.b,{render:function(a){var n=a.history;return Object(N.jsxs)(K.a,{value:e.value,onChange:function(e,t){n.push(t)},showLabels:!0,className:t.root,children:[Object(N.jsx)(Q.a,{label:"Standings",value:"/standings",icon:Object(N.jsx)(ee.a,{})}),Object(N.jsx)(Q.a,{label:"Predict",value:"/home",icon:Object(N.jsx)(re.a,{})}),Object(N.jsx)(Q.a,{label:"History",value:"/history",icon:Object(N.jsx)(ae.a,{})})]})}})}var oe=Object(f.a)({leaderboard:{padding:"5px",marginTop:"50px"}});function se(){var e=oe();return Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsx)($,{}),Object(N.jsx)("div",{className:e.leaderboard,children:Object(N.jsx)(U,{})}),Object(N.jsx)(ie,{value:"/standings"})]})}var je=a(163),le=a(169),ue=Object(f.a)({team:{textAlign:"center",width:"25vw"},teamEmoji:{fontSize:"15vw"},teamName:{fontSize:"4vw"}});function be(e){var t=ue();return Object(N.jsxs)(A.a,{className:t.team,children:[Object(N.jsx)("div",{className:t.teamEmoji,children:e.emoji}),Object(N.jsx)("div",{className:t.teamName,children:e.name})]})}var me=Object(f.a)({match:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginBottom:"3vh"},game:{width:"80vw",margin:"0 auto",display:"flex",justifyContent:"space-between",marginTop:"5vh",position:"relative"},teaminput:{width:"10vw",height:"8vw",fontSize:"4vw",marginTop:"6vw"},dash:{fontSize:"8vw",marginTop:"4vw"},date:{fontSize:"5vw",marginBottom:"1.5vh",verticalAlign:"center",position:"relative"},matchCard:{marginBottom:"4vh",textAlign:"center"},buttonBox:{marginBottom:"1.5vh"},button:{backgroundColor:"#1caac9"}});function de(e){var t=me(),a=Object(n.useState)({score:"",error:!1}),r=Object(j.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)({score:"",error:!1}),s=Object(j.a)(o,2),l=s[0],b=s[1];return Object(N.jsxs)(je.a,{className:t.matchCard,children:[Object(N.jsxs)(A.a,{className:t.match,children:[Object(N.jsx)(A.a,{children:Object(N.jsx)(be,{name:e.team1.name,emoji:e.team1.emoji})}),Object(N.jsx)(le.a,{className:t.teaminput,id:"outlined-basic",label:"",onChange:function(e){return i(Object(_.a)(Object(_.a)({},c),{},{score:e.target.value}))},error:c.error}),Object(N.jsx)("span",{className:t.dash,children:"-"}),Object(N.jsx)(le.a,{className:t.teaminput,id:"outlined-basic",label:"",onChange:function(e){return b(Object(_.a)(Object(_.a)({},l),{},{score:e.target.value}))},error:l.error}),Object(N.jsx)(A.a,{children:Object(N.jsx)(be,{name:e.team2.name,emoji:e.team2.emoji})})]}),Object(N.jsx)(A.a,{className:t.date,children:e.match.match_date+" "+e.match.kick_off_time}),Object(N.jsx)(A.a,{className:t.buttonBox,children:Object(N.jsx)(u.a,{variant:"contained",className:t.button,onClick:function(){return function(){var t=parseInt(c.score),a=parseInt(l.score);if(isNaN(t)||isNaN(a))return i(Object(_.a)(Object(_.a)({},c),{},{error:!0})),void b(Object(_.a)(Object(_.a)({},l),{},{error:!0}));i(Object(_.a)(Object(_.a)({},c),{},{error:!1})),b(Object(_.a)(Object(_.a)({},l),{},{error:!1})),fetch(y("prediction"),{method:"POST",headers:{"Content-Type":"application/json",Authenticate:S()},body:JSON.stringify({team_one_pred:c.score,team_two_pred:l.score,matchid:e.match.matchid,penalty_winners:null})}).then((function(e){return e.json()})).then((function(e){!0===e.succes?alert("successfully stored prediction"):alert("Error whilst sending prediction, please try again")}))}()},children:"Submit Prediction"})})]})}var he=Object(f.a)({upcomingGames:{fontSize:"8vw"}});function Oe(){var e=he(),t=Object(n.useState)([{team_one:{name:"team",emoji:""},team_two:{name:"team",emoji:""},match:{match_date:"",kick_off_time:"",is_knockout:!1,matchid:-1}}]),a=Object(j.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){fetch(y("prediction-required"),{method:"GET",headers:{Authenticate:S()}}).then((function(e){return e.json()})).then((function(e){e.success?(console.log(e),c(e.matches)):u(!0)}))}),[c]),l?Object(N.jsx)(s.a,{to:"/"}):Object(N.jsxs)("div",{children:[Object(N.jsx)(x.a,{className:e.upcomingGames,children:"Upcoming Games"}),r.map((function(e){return Object(N.jsx)(de,{team1:e.team_one,team2:e.team_two,match:e.match})}))]})}var pe=a(76),xe=a(164),fe=Object(f.a)({logo:{maxHeight:"15vw"},homepage:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),ge=Object(pe.a)({typography:{fontFamily:["Source Sans Pro","sans-serif"].join(",")}});var ve=function(){var e=fe();return Object(N.jsxs)(xe.a,{theme:ge,children:[Object(N.jsxs)(g.a,{className:e.homepage,children:[Object(N.jsx)("img",{className:e.logo,src:M,alt:"euro logo"}),Object(N.jsx)(Oe,{})]}),Object(N.jsx)(ie,{value:"/home"})]})};function we(){return Object(N.jsxs)(o.a,{children:[Object(N.jsx)(s.b,{path:"/",exact:!0,component:P}),Object(N.jsx)(s.b,{path:"/signup",exact:!0,component:T}),Object(N.jsx)(s.b,{path:"/standings",exact:!0,component:se}),Object(N.jsx)(s.b,{path:"/predict",exact:!0,component:Oe}),Object(N.jsx)(s.b,{path:"/home",exact:!0,component:ve}),Object(N.jsx)(s.b,{path:"/history",exact:!0,component:History})]})}var ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(we,{})}),document.getElementById("root")),ye()},99:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.974bbc2d.chunk.js.map