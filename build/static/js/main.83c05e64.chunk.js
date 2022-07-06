(this["webpackJsonpreact-router-v6-auth-demo"]=this["webpackJsonpreact-router-v6-auth-demo"]||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a,r,c,o,s,i,l,u=n(0),d=n(116),p=n(37),j=n(122),b=n(225),h=n(6),f=n(14),x=n(4),m=n(16),O=n(79),g=n.n(O),v=g.a.create({baseURL:"http://127.0.0.1:8000"}),w=n(1),y=Object(u.createContext)(),k=function(e){var t=e.children,n=function(e,t){var n=Object(u.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):(window.localStorage.setItem(e,JSON.stringify(t)),t)}catch(a){return t}})),a=Object(x.a)(n,2),r=a[0],c=a[1];return[r,function(t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){}c(t)}]}("JWT",null),a=Object(x.a)(n,2),r=a[0],c=a[1],o=Object(m.f)(),s=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/register",{username:t.username,password:t.password},{headers:{"Content-Type":"application/json"}});case 3:if(201!==e.sent.status){e.next=7;break}return e.next=7,l(t);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/changePassword",{password:t.password},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 3:if(200!==e.sent.status){e.next=7;break}return o("/"),e.abrupt("return",1);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/login",{username:t.username,password:t.password},{headers:{"Content-Type":"application/json"}});case 3:200===(n=e.sent).status&&(c(n.data.access_token),o("/")),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(f.a)(Object(h.a)().mark((function e(){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.post("/api/v1/logout",{},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then((function(e){c(null),o("/auth",{replace:!0})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=Object(u.useMemo)((function(){return{token:r,login:l,logout:d,register:s,changePassword:i}}),[r]);return Object(w.jsx)(y.Provider,{value:p,children:t})},S=function(){return Object(u.useContext)(y)},C=n(226),A=n(227),F=n(220),T=n(230),I=n(58),z=n.n(I),P=n(231),W=n(229),D=function(){var e=S().login,t=Object(m.f)(),n=u.useState(!1),a=Object(x.a)(n,2),r=a[0],c=a[1];return Object(w.jsx)(W.a,{component:"main",maxWidth:"xs",children:Object(w.jsxs)(T.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)(C.a,{sx:{m:1,bgcolor:"primary.main"},children:Object(w.jsx)(z.a,{})}),Object(w.jsx)(P.a,{component:"h1",variant:"h5",children:"Log In"}),Object(w.jsxs)(T.a,{component:"form",onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget);e({username:n.get("username"),password:n.get("password")}).then((function(e){0==e&&c(!0)}))},noValidate:!0,sx:{mt:1,textAlign:"center"},children:[Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,error:r,helperText:r?"Invalid username or password":""}),Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:r,helperText:r?"Invalid username or password":""}),Object(w.jsx)(A.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"Login In"}),Object(w.jsx)(A.a,{onClick:function(){t("/auth/register",{replace:!0})},fullWidth:!0,variant:"outlined",sx:{mt:1,mb:2,width:"75%"},children:"Don't have an account? Sign Up"})]})]})})},B=function(){var e=S().register,t=u.useState(!1),n=Object(x.a)(t,2),a=n[0],r=n[1],c=u.useState(!1),o=Object(x.a)(c,2),s=o[0],i=o[1],l=u.useState(!0),d=Object(x.a)(l,2),p=d[0],j=d[1],b=u.useState(""),h=Object(x.a)(b,2),f=h[0],m=h[1];return u.useEffect((function(){var e=0;f.match(/[a-z]+/)&&(e+=1),f.match(/[A-Z]+/)&&(e+=1),f.match(/[0-9]+/)&&(e+=1),f.match(/[$@#&!]+/)&&(e+=1),f.length>=8&&(e+=1),j(5!==e)}),[f]),Object(w.jsx)(W.a,{component:"main",maxWidth:"xs",children:Object(w.jsxs)(T.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)(C.a,{sx:{m:1,bgcolor:"primary.main"},children:Object(w.jsx)(z.a,{})}),Object(w.jsx)(P.a,{component:"h1",variant:"h5",children:"Register"}),Object(w.jsxs)(T.a,{component:"form",onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget);n.get("passwordRepeat")===f?e({username:n.get("username"),password:f}).then((function(e){0==e&&r(!0)})):i(!0)},noValidate:!0,sx:{mt:1},children:[Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,error:a,helperText:a?"Username already in use!":""}),Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){m(e.target.value)},error:s,helperText:s?"Passwords do not match!":""}),Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"passwordRepeat",label:"Password Repeat",type:"password",id:"passwordRepeat",error:s,helperText:s?"Passwords do not match!":""}),Object(w.jsx)(A.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:p,children:"Register"}),Object(w.jsx)("p",{style:{textAlign:"center"},children:"Your password should be minimum 8 characters and contain at least one capital letter, one underscore charater, one special charater, and one number."})]})]})})},E=function(){var e=S().token,t=Object(u.useState)(null),n=Object(x.a)(t,2),a=n[0],r=n[1];return Object(u.useEffect)((function(){e?v.get("/api/v1/user",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){r(e.data.result)})).catch((function(e){console.log(e)})):console.log("No user from useUserData.js")}),[e]),[a]},R=n(27),N=n(29),U="#FFFBE9",L="#E3CAA5",q="#CEAB93",_="#AD8B73",J=N.a.div(a||(a=Object(R.a)(["\n    background-color: ",";\n    border-radius: 4px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    display: inline-block;\n    padding: 10px;\n    margin: 4px;\n    "])),L),G=N.a.div(r||(r=Object(R.a)(["\n    display: flex;\n    flex-direction: row;\n    width: 80%;\n    min-height: 100vh;\n    border-width: 0 1px 0 1px;\n    border-style: none;\n    margin: 0 auto;\n    // tablet viewport\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n    "]))),M=n(83),V=n.n(M),H=N.a.div(c||(c=Object(R.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    "]))),Z=N.a.div(o||(o=Object(R.a)([" \n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    "]))),K=Object(N.a)("input")({display:"none"}),Y=Object(N.a)("p")({color:"#ff0000",alignSelf:"center",border:"1px solid",padding:"10px",borderColor:"#ff0000"}),$=function(e){var t=e.onTextChange,n=e.selectImageAction,a=e.selectedImage,r=e.selectedImageUrl,c=e.onPostButtonClick,o=e.mediaError,s=e.text;return Object(w.jsx)(H,{children:Object(w.jsxs)(J,{children:[Object(w.jsx)("h2",{style:{textAlign:"center"},children:"New Post"}),Object(w.jsx)(F.a,{label:"New Post Text",multiline:!0,rows:4,fullWidth:!0,onChange:t}),Object(w.jsxs)(Z,{children:[Object(w.jsxs)("label",{htmlFor:"contained-button-file",style:{marginRight:"10px",alignSelf:"center"},children:[Object(w.jsx)(K,{accept:"image/jpeg, image/png, image/jpg, video/mp4",id:"contained-button-file",type:"file",onChange:n}),Object(w.jsx)(A.a,{variant:"contained",component:"span",children:"Select Image or Video"})]}),o?Object(w.jsx)(Y,{children:"File is too large"}):Object(w.jsx)("p",{style:{alignSelf:"center",border:"1px solid",padding:"10px",borderColor:_},children:r?a.name:"No media selected"}),Object(w.jsx)(A.a,{disabled:""===s,variant:"contained",onClick:c,sx:{marginLeft:"10px",alignSelf:"center"},endIcon:Object(w.jsx)(V.a,{}),children:"Post"})]})]})})},Q=n(119),X=Object(Q.a)({apiKey:"AIzaSyCl3pb2edigZKcDA_qoksBaZTl7qq7CVWw",authDomain:"is-web-ca.firebaseapp.com",projectId:"is-web-ca",storageBucket:"is-web-ca.appspot.com",messagingSenderId:"684464898727",appId:"1:684464898727:web:17e848811f914e49a31182"}),ee=n(70),te=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t,n,a,r){var c;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/addComment",{text:n,author:a,id:r},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return c=e.sent,e.abrupt("return",c.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ne=function(e){var t=e.author,n=e.text,a=e.date;return Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"10px",border:"1px solid",borderRadius:"5px",padding:"10px",backgroundColor:U},children:[Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(w.jsxs)("p",{style:{fontFamily:"monospace",fontSize:"1em",fontWeight:"bold"},children:[t,":"]}),Object(w.jsx)("p",{style:{fontFamily:"monospace",fontSize:"1em"},children:n})]}),Object(w.jsx)("p",{children:new Date(a).toLocaleString()})]})},ae=function(e){var t,n=e.text,a=e.media,r=e.date,c=e.author,o=e.postId,s=e.comments,i=e.addCommentName,l=Object(u.useState)(""),d=Object(x.a)(l,2),p=d[0],j=d[1],b=S().token;return Object(w.jsxs)(J,{style:{textAlign:"center"},children:[Object(w.jsx)("p",{style:{fontFamily:"monospace",fontSize:"2em"},children:n}),a&&(t=a,t.includes("jpg")||t.includes("png")||t.includes("jpeg")?Object(w.jsx)("img",{style:{maxHeight:"550px",maxWidth:"100%"},src:a,alt:"IMAGE"}):Object(w.jsx)("video",{style:{maxHeight:"550px",maxWidth:"100%"},src:a,controls:!0})),Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(w.jsx)("p",{style:{fontFamily:"monospace",fontSize:"1em"},children:new Date(r).toLocaleString()}),Object(w.jsx)("div",{style:{width:"50px"}}),Object(w.jsxs)("p",{style:{fontFamily:"monospace",fontSize:"1em"},children:["Posted by: ",c]})]}),Object(w.jsxs)("div",{children:[s&&s.sort((function(e,t){return t.date-e.date})).map((function(e){return Object(w.jsx)(ne,{author:e.author,text:e.text,date:e.date})})),s&&0===s.length&&Object(w.jsx)("p",{style:{fontFamily:"monospace",fontSize:"1em"},children:"No comments yet"}),!s&&Object(w.jsx)("p",{style:{fontFamily:"monospace",fontSize:"1em"},children:"No comments yet"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(F.a,{label:"Post New Comment",multiline:!0,rows:4,fullWidth:!0,onChange:function(e){j(e.target.value)}}),Object(w.jsx)(A.a,{disabled:""===p,variant:"contained",onClick:function(){te(b,p,i,o).then((function(){window.location.reload()})).catch((function(e){console.log(e)}))},sx:{marginTop:"10px",alignSelf:"center"},endIcon:Object(w.jsx)(V.a,{}),children:"Send Comment"})]})]})},re=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t,n,a){var r;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/createPost",{text:n,media:a},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return r=e.sent,e.abrupt("return",r.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),ce=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get("/api/v1/getPosts",{headers:{Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(u.useState)(null),t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(u.useEffect)((function(){!function(){try{var e=window.navigator&&window.navigator.geolocation;e&&e.getCurrentPosition((function(e){console.log(e.coords.latitude+" "+e.coords.longitude),g.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude,"&units=metric&appid=").concat("173d7d4200394dff86bad335a784684f")).then((function(e){console.log(e.data),a(e.data)}))}),(function(e){console.error(e)}))}catch(t){console.log(t)}}()}),[]),[n]},se=N.a.div(s||(s=Object(R.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    height: '100%';\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n    "]))),ie=N.a.div(i||(i=Object(R.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 40%;\n    height: '100%';\n    @media (max-width: 768px) {\n        display: none;\n    }\n    "]))),le=function(){var e=Object(u.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(u.useState)(""),c=Object(x.a)(r,2),o=c[0],s=c[1],i=Object(u.useState)(""),l=Object(x.a)(i,2),d=l[0],p=l[1],j=Object(u.useState)(!1),b=Object(x.a)(j,2),m=b[0],O=b[1],g=E(),v=Object(x.a)(g,1)[0],y=S().token,k=Object(u.useState)(""),C=Object(x.a)(k,2),A=C[0],F=C[1],T=oe(),I=Object(x.a)(T,1)[0],z=Object(ee.b)(X,"gs://is-web-ca.appspot.com");Object(u.useEffect)((function(){console.log("userData",v)}),[v]);var P=function(){var e=Object(f.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(y);case 2:t=e.sent,F(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){P()}),[]);var W=function(){var e=Object(f.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=6;break}return t=Object(ee.c)(z,"/media/".concat(v._id,"/").concat(Math.floor(1e6*Math.random())).concat(Date.now()).concat(o.name)),e.next=4,Object(ee.d)(t,o).then((function(e){console.log("Uploaded a blob or file!")})).then((function(){Object(ee.a)(t).then((function(e){console.log(e),re(y,n,e).then((function(){console.log("post created"),window.location.reload()})).catch((function(e){console.log(e)}))}))}));case 4:e.next=7;break;case 6:re(y,n,null).then((function(){console.log("post created"),window.location.reload()})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(G,{children:[Object(w.jsxs)(se,{children:[Object(w.jsx)($,{onTextChange:function(e){return a(e.target.value)},text:n,selectImageAction:function(e){if(console.log(e.target.files[0].type),s(e.target.files[0]),e.target.files[0].size>25e6)O(!0);else{O(!1);var t=new FileReader;t.onload=function(e){p(e.target.result)},t.readAsDataURL(e.target.files[0])}},selectedImage:o,selectedImageUrl:d,onPostButtonClick:W,mediaError:m}),A&&A.map((function(e){return Object(w.jsx)(ae,{text:e.text,media:e.media,date:e.date,author:e.author,comments:e.comments,postId:e._id,addCommentName:v.username},e._id)}))]}),Object(w.jsx)(ie,{children:Object(w.jsx)(J,{style:{textAlign:"center"},children:I?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:I.sys.country}),Object(w.jsx)("h2",{children:I.name}),Object(w.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(I.weather[0].icon,"@2x.png")}),Object(w.jsx)("h2",{children:I.weather[0].main}),Object(w.jsxs)("p",{children:[I.main.temp.toFixed(1)," \xb0C"]})]}):Object(w.jsx)("h1",{children:"Fetching weather data..."})})})]})})},ue=n(232),de=n(233),pe=n(234),je=n(121),be=n.n(je),he=n(228),fe=n(223),xe=n(120),me=n.n(xe),Oe="DBSocial",ge=function(e){var t=e.pages,n=Object(m.f)(),a=S(),r=(a.token,a.logout),c=u.useState(!1),o=Object(x.a)(c,2),s=o[0],i=o[1],l=E(),d=Object(x.a)(l,1)[0],p=function(e){e&&n(e)};return Object(w.jsx)(ue.a,{position:"static",style:{backgroundColor:_},children:Object(w.jsx)(W.a,{maxWidth:"xl",children:Object(w.jsxs)(de.a,{disableGutters:!0,children:[Object(w.jsx)(P.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:Oe}),Object(w.jsx)(he.a,{anchor:"left",open:s,onClose:function(){return i(!1)},children:Object(w.jsxs)("div",{style:{backgroundColor:U,display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:"10px",minHeight:"100vh"},children:[null===t||void 0===t?void 0:t.map((function(e){return Object(w.jsx)(fe.a,{onClick:function(){return p(e.path)},sx:{minWidth:"40vw",backgroundColor:q,borderWidth:"1px",borderStyle:"solid",borderColor:"#ffffff40",borderRadius:"4px",margin:"4px"},children:Object(w.jsx)(P.a,{textAlign:"center",children:e.label})},e.label)})),d&&Object(w.jsx)(A.a,{onClick:r,sx:{margin:"5px"},variant:"outlined",endIcon:Object(w.jsx)(me.a,{}),children:"Logout"})]})}),Object(w.jsx)(T.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:Object(w.jsx)(pe.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){return i(!0)},color:"inherit",children:Object(w.jsx)(be.a,{})})}),Object(w.jsx)(P.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:Oe}),Object(w.jsxs)(T.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[null===t||void 0===t?void 0:t.map((function(e){return Object(w.jsx)(A.a,{onClick:function(){return p(e.path)},sx:{my:2,color:"white",display:"block"},children:e.label},e.label)})),d&&Object(w.jsx)(A.a,{onClick:r,sx:{my:2,color:"white",display:"block"},children:"logout"},"logout")]})]})})})},ve=N.a.div(l||(l=Object(R.a)(["\n    min-width: 100vw;\n    min-height: 100vh;\n    background-color: ",";\n    overflow-wrap: break-word;\n"])),U),we=function(){var e=S().token,t=Object(m.g)(),n=Object(m.f)(),a=Object(u.useState)(!0),r=Object(x.a)(a,2),c=r[0],o=r[1];return Object(u.useEffect)((function(){v.get("/api/v1/is-authenticated",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){200===e.status&&e.data.result?console.log("Authenticated"):n("/auth",{replace:!0})})).catch((function(e){n("/auth",{replace:!0})})).finally((function(){o(!1)}))}),[]),Object(w.jsxs)(ve,{children:[Object(w.jsx)(ge,{pages:[{label:"Home",path:"/"},{label:"Following",path:"/following"},{label:"Discover",path:"/discover"},{label:"Password",path:"/password"}]}),c?Object(w.jsx)("h1",{children:"Loading..."}):Object(w.jsx)(w.Fragment,{children:t})]})},ye=function(){var e=S().token,t=Object(m.g)(),n=Object(m.f)(),a=Object(u.useState)(!0),r=Object(x.a)(a,2),c=r[0],o=r[1];return Object(u.useEffect)((function(){v.get("/api/v1/is-authenticated",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){200===e.status&&e.data.result&&n("/",{replace:!0})})).catch((function(e){console.log(e)})).finally((function(){o(!1)}))}),[]),Object(w.jsxs)(ve,{children:[Object(w.jsx)(ge,{pages:[{label:"Login",path:"/auth"},{label:"Register",path:"/auth/register"}]}),c?Object(w.jsx)("h1",{children:"Loading..."}):Object(w.jsx)(w.Fragment,{children:t})]})},ke=(n(170),function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get("/api/v1/getFollowing",{headers:{Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),Se=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t,n){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/unfollow",{username:n},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.abrupt("return",a.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t,n){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/getFollowersByUsername",{username:n},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.abrupt("return",a.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Ae={fontFamily:"monospace",fontSize:"1.5em",border:"1px solid black",padding:"4px",margin:"5px"},Fe=function(e){var t=e.user,n=e.buttonAction,a=e.buttonText,r=S().token,c=Object(u.useState)([]),o=Object(x.a)(c,2),s=o[0],i=o[1],l=function(){var e=Object(f.a)(Object(h.a)().mark((function e(){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce(r,t.username);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){l()}),[]),Object(w.jsxs)(J,{style:{display:"inline-block",textAlign:"center"},children:[Object(w.jsx)("h1",{style:{fontFamily:"monospace",fontSize:"2em"},children:t.username}),Object(w.jsxs)("div",{style:{display:"inline-block",textAlign:"center",width:"100%"},children:[Object(w.jsxs)("h2",{style:Ae,children:["following: ",t.following.length]}),Object(w.jsxs)("h2",{style:Ae,children:["followers: ",s.length]})]}),Object(w.jsx)(A.a,{type:"button",variant:"contained",onClick:n,children:a})]})},Te=function(){var e=Object(u.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],r=S().token,c=Object(m.f)(),o=function(){var e=Object(f.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(r);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){o()}),[]);var s=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se(r,t);case 2:c("/",{replace:!0});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{style:{padding:"10px",textAlign:"center"},children:n&&n.map((function(e){return Object(w.jsx)(Fe,{user:e,buttonAction:function(){return s(e.username)},buttonText:"Unfollow"},e._id)}))})},Ie=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get("/api/v1/getNotFollowing",{headers:{Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t,n){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/api/v1/follow",{username:n},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.abrupt("return",a.data.result);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(u.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],r=S().token,c=Object(m.f)(),o=function(){var e=Object(f.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie(r);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){o()}),[]);var s=function(){var e=Object(f.a)(Object(h.a)().mark((function e(t){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ze(r,t);case 2:c("/",{replace:!0});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{style:{padding:"10px",textAlign:"center"},children:n&&n.map((function(e){return Object(w.jsx)(Fe,{user:e,buttonAction:function(){return s(e.username)},buttonText:"Follow"},e._id)}))})},We=function(){var e=S().changePassword,t=u.useState(!1),n=Object(x.a)(t,2),a=(n[0],n[1]),r=u.useState(!1),c=Object(x.a)(r,2),o=c[0],s=c[1],i=u.useState(!0),l=Object(x.a)(i,2),d=l[0],p=l[1],j=u.useState(""),b=Object(x.a)(j,2),h=b[0],f=b[1];return u.useEffect((function(){var e=0;h.match(/[a-z]+/)&&(e+=1),h.match(/[A-Z]+/)&&(e+=1),h.match(/[0-9]+/)&&(e+=1),h.match(/[$@#&!]+/)&&(e+=1),h.length>=8&&(e+=1),p(5!==e)}),[h]),Object(w.jsx)(W.a,{component:"main",maxWidth:"xs",children:Object(w.jsxs)(T.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)(C.a,{sx:{m:1,bgcolor:"primary.main"},children:Object(w.jsx)(z.a,{})}),Object(w.jsx)(P.a,{component:"h1",variant:"h5",children:"Change Password"}),Object(w.jsxs)(T.a,{component:"form",onSubmit:function(t){t.preventDefault(),new FormData(t.currentTarget).get("passwordRepeat")===h?e({password:h}).then((function(e){a(0==e)})):s(!0)},noValidate:!0,sx:{mt:1},children:[Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){f(e.target.value)},error:o,helperText:o?"Passwords do not match!":""}),Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"passwordRepeat",label:"Password Repeat",type:"password",id:"passwordRepeat",error:o,helperText:o?"Passwords do not match!":""}),Object(w.jsx)(A.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:d,children:"Change Password"}),Object(w.jsx)("p",{style:{textAlign:"center"},children:"Your password should be minimum 8 characters and contain at least one capital letter, one underscore charater, one special charater, and one number."})]})]})})};function De(){return Object(w.jsxs)(m.c,{children:[Object(w.jsxs)(m.a,{path:"/auth",element:Object(w.jsx)(ye,{}),children:[Object(w.jsx)(m.a,{path:"",element:Object(w.jsx)(D,{})}),Object(w.jsx)(m.a,{path:"register",element:Object(w.jsx)(B,{})})]}),Object(w.jsxs)(m.a,{element:Object(w.jsx)(we,{}),children:[Object(w.jsx)(m.a,{path:"/",element:Object(w.jsx)(le,{})}),Object(w.jsx)(m.a,{path:"following",element:Object(w.jsx)(Te,{})}),Object(w.jsx)(m.a,{path:"discover",element:Object(w.jsx)(Pe,{})}),Object(w.jsx)(m.a,{path:"password",element:Object(w.jsx)(We,{})})]}),Object(w.jsx)(m.a,{path:"*",element:Object(w.jsx)(ve,{children:Object(w.jsx)("div",{children:"404 Not Found. The page you are looking for does not exist."})})})]})}var Be=document.getElementById("root"),Ee=Object(d.createRoot)(Be),Re=Object(j.a)({palette:{primary:{main:"#3a34d2"}}});Ee.render(Object(w.jsx)(u.StrictMode,{children:Object(w.jsx)(p.a,{children:Object(w.jsx)(k,{children:Object(w.jsx)(b.a,{theme:Re,children:Object(w.jsx)(De,{})})})})}))}},[[171,1,2]]]);
//# sourceMappingURL=main.83c05e64.chunk.js.map