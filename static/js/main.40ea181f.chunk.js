(this.webpackJsonpunilist=this.webpackJsonpunilist||[]).push([[0],{90:function(e,t,n){},91:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(12),r=n.n(c),o=(n(90),n(20)),s=(n(91),n(168)),l=n(170),d=n(171),b=n(172),u=n(7);function p(){return Object(u.jsx)(l.a,{sx:{flexGrow:1},children:Object(u.jsx)(s.a,{position:"static",children:Object(u.jsx)(d.a,{children:Object(u.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Unilist"})})})})}var j=n(10),h=n(150),f=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1440px"}[e],")")},g=Object(h.a)((function(e){var t,n,a;return{hero:(t={position:"relative",width:"100%",height:"400px",left:"0px",top:"0px",marginTop:"0px",backgroundImage:"url(".concat("/unilist/university.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"rgba(0, 0, 0, 0.7)",backgroundPosition:"center",backgroundBlendMode:"multiply"},Object(j.a)(t,f("md"),{width:"100%",height:"200px"}),Object(j.a)(t,f("sm"),{width:"100%",height:"200px"}),t),heroContent:Object(j.a)({position:"absolute",left:"0",right:"0",marginLeft:"auto",marginRight:"auto",top:"10%",padding:e.spacing(.5),textAlign:"center"},f("sm"),{padding:e.spacing(3)}),heroHeading:(n={color:"#fff",textTransform:"uppercase",fontSize:"40px"},Object(j.a)(n,f("md"),{fontSize:"25px"}),Object(j.a)(n,f("sm"),{fontSize:"17px"}),n),heroSub:(a={color:"#fff",fontStyle:"italic",fontWeight:"bold",fontSize:"25px"},Object(j.a)(a,f("md"),{fontSize:"15px"}),Object(j.a)(a,f("md"),{fontSize:"10px"}),a),searchInput:{width:"75%"}}})),x=function(){var e=g();return Object(u.jsx)("div",{className:e.hero,children:Object(u.jsxs)("div",{className:e.heroContent,children:[Object(u.jsx)("h1",{className:e.heroHeading,children:"List of Nigerian Universities"}),Object(u.jsx)("p",{className:e.heroSub,children:"Check for the school right place for you"})]})})},O=n(153),m=n(155),v=n(156),w=n(157),S=n(166),C=Object(h.a)((function(e){return{table:{width:"100%",tableLayout:"fixed",marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}},caption:Object(j.a)({},f("sm"),{fontSize:"10px",flexShrink:"0.2"}),actions:Object(j.a)({},f("sm"),{marginLeft:"0px"})}}));var P=n(161),k=n(158),y=n(167),N=n(162),T=n(164),A=n(163),z=Object(h.a)((function(e){var t;return{pageContent:(t={width:"90%",margin:e.spacing(5),padding:e.spacing(3)},Object(j.a)(t,f("md"),{width:"80%"}),Object(j.a)(t,f("md"),{width:"90%",margin:e.spacing(1),padding:e.spacing(1)}),t),searchInput:Object(j.a)({width:"75%"},f("md"),{width:"100%"}),newButton:{position:"absolute",right:"10px"},tableCell:Object(j.a)({},f("sm"),{fontSize:"8px",textWrap:"wrap"})}})),I=[{id:"universityName",label:"University Name"},{id:"webAddress",label:"Website Address "}],L=function(e){var t=z(),n=Object(a.useState)({fn:function(e){return e}}),i=Object(o.a)(n,2),c=i[0],r=i[1],s=function(e,t,n){var i=C(),c=[5,10,25],r=Object(a.useState)(0),s=Object(o.a)(r,2),l=s[0],d=s[1],b=Object(a.useState)(c[l]),p=Object(o.a)(b,2),j=p[0],h=p[1],f=function(e,t){d(t)},g=function(e){h(parseInt(e.target.value,10)),d(0)};return{TblContainer:function(e){return Object(u.jsx)(O.a,{className:i.table,children:e.children})},TblHead:function(e){return Object(u.jsx)(m.a,{children:Object(u.jsx)(v.a,{children:t.map((function(e){return Object(u.jsx)(w.a,{children:e.label},e.id)}))})})},TblPagination:function(){return Object(u.jsx)(S.a,{component:"div",page:l,rowsPerPageOptions:c,rowsPerPage:j,count:e.length,onPageChange:f,onRowsPerPageChange:g,classes:{root:i.pagination,caption:i.caption,actions:i.actions}})},recordsAfterPagingAndSorting:function(){return n.fn(e).slice(l*j,(l+1)*j)}}}(e.data,I,c),l=s.TblContainer,d=s.TblHead,b=s.TblPagination,p=s.recordsAfterPagingAndSorting;return Object(u.jsxs)(P.a,{className:t.pageContent,children:[Object(u.jsx)(k.a,{children:Object(u.jsx)(y.a,{variant:"outlined",className:t.searchInput,label:"Search Universities",name:"search",onChange:function(e){var t=e.target;r({fn:function(e){return""==t.value?e:e.filter((function(e){return e.name.toLowerCase().includes(t.value)}))}})},InputProps:{startAdornment:Object(u.jsx)(N.a,{position:"start",children:Object(u.jsx)(A.a,{})})}})}),Object(u.jsxs)(l,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(T.a,{children:p().map((function(e,n){return Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{className:t.tableCell,children:e.name}),Object(u.jsxs)(w.a,{className:t.tableCell,children:[" ",Object(u.jsxs)("a",{href:e.web_pages[0],children:[e.web_pages[0]," "]})]})]},n)}))})]}),Object(u.jsx)(b,{})]})};var R=function(){var e=i.a.useState(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=i.a.useState(""),r=Object(o.a)(c,2),s=r[0],l=r[1],d=i.a.useState([]),b=Object(o.a)(d,2),j=b[0],h=b[1];return i.a.useEffect((function(){var e=new Headers;e.append("Content-Type","application/json"),e.append("Accept","application/json"),a(!0),fetch("https://unilist-b.herokuapp.com",{mode:"cors",method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){a(!1),h(e)})).catch((function(e){a(!1),l("fetch failed")}))}),[]),n?Object(u.jsx)("p",{children:"loading.."}):""!==s?Object(u.jsxs)("p",{children:["ERROR: ",s]}):Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{}),Object(u.jsx)(x,{}),Object(u.jsx)(L,{data:j})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),H()}},[[97,1,2]]]);
//# sourceMappingURL=main.40ea181f.chunk.js.map