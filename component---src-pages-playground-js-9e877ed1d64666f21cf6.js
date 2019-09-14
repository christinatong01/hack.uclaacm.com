(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{268:function(M,N,I){"use strict";I.r(N);var D=I(10),g=I.n(D),j=I(0),i=I.n(j),e=(I(441),I(442),I(55),I(144),I(89),I(63),I(146),I(445),I(1)),y=I.n(e),z=I(83),u=I(450),a=I.n(u),n=(I(451),I(271),I(292)),T=I.n(n);function t(M){var N=M.classes,I=M.name,D=M.role,g=M.description,j=M.fluidImg;return i.a.createElement("div",{className:N.container},i.a.createElement("div",{className:N.cropper},i.a.createElement(T.a,{fluid:j})),i.a.createElement("p",{className:N.name},I),i.a.createElement("p",{className:N.role},D),i.a.createElement("p",{className:N.description},g))}t.propTypes={classes:y.a.object.isRequired,name:y.a.string.isRequired,role:y.a.string.isRequired,description:y.a.string.isRequired,photoURL:y.a.string.isRequired};var A=Object(z.withStyles)(function(M){return{container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"200px",margin:2.5*M.spacing.unit},cropper:{width:"200px",height:"200px",borderRadius:"50%",justifyContent:"center"},photo:{margin:"0 auto",display:"inline",height:"100%",width:"auto"},name:{fontFamily:["Chivo","san-serif"],fontSize:1.5*M.typography.fontSize,fontWeight:"normal",margin:M.spacing.unit,whiteSpace:"nowrap"},role:{fontFamily:["Chivo","san-serif"],fontSize:1.2*M.typography.fontSize,fontWeight:"normal",margin:M.spacing.unit,whiteSpace:"nowrap"},description:{fontFamily:["Chivo","san-serif"],fontSize:M.typography.fontSize,fontWeight:"normal",margin:M.spacing.unit,textAlign:"center"}}})(t),c="\n\tWe are a group of hackers, designers, and engineers all working to improve UCLA's\n\thacking community. We believe in moving fast, having fun, and being passionate\n\tabout using technology to solve problems that are relevant to us. We have a high\n\tbar for success, and are willing to work incredibly hard, balancing school and\n\tmany other things, to improve the experience of other students around us. We're\n\thiring in the spring, so keep a look out for an upcoming application form.\n";function O(M){var N=M.classes,I=M.data,D=M.pageContext;console.log(I);var g=new Map,j=I.allFile.edges,e=Array.isArray(j),y=0;for(j=e?j:j[Symbol.iterator]();;){var z;if(e){if(y>=j.length)break;z=j[y++]}else{if((y=j.next()).done)break;z=y.value}var u=z;g.set(u.node.relativePath,u.node.childImageSharp.fluid)}var n=D.officers.map(function(M){return Object.assign({},M,{fluidImg:g.get(M.photoURL)})}).map(function(M){return i.a.createElement(A,M)});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:N.container},i.a.createElement("img",{src:a.a,style:{width:"100%"}}),i.a.createElement("div",{className:N.content},c),i.a.createElement("div",{className:N.team}," The Team "),i.a.createElement("div",{className:N.teamContainer},n)))}O.propTypes={classes:y.a.object.isRequired};var L=Object(z.withStyles)(function(M){var N,I,D;return{container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"5%"},content:(N={fontFamily:["Chivo","san-serif"],fontSize:1.3*M.typography.fontSize,lineHeight:2.3*M.typography.fontSize+"px",marginLeft:"17%",marginRight:"17%",marginTop:7*M.spacing.unit,marginBottom:4*M.spacing.unit},N[M.breakpoints.down("xs")]={fontSize:M.typography.fontSize,lineHeight:M.typography.fontSize+9+"px",marginLeft:1.5*M.typography.fontSize,marginRight:1.5*M.typography.fontSize,marginTop:3*M.spacing.unit,marginBottom:3*M.spacing.unit},N),team:(I={fontFamily:["Poppins"],fontWeight:700,fontSize:3*M.typography.fontSize,borderStyle:"solid",borderWidth:"0 0 "+1.5*M.typography.fontSize+"px 0",borderColor:"#FB4469"},I[M.breakpoints.down("xs")]={fontSize:1.2*M.typography.fontSize,borderWidth:"0 0 "+.6*M.typography.fontSize+"px 0"},I),teamContainer:(D={display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginLeft:"17%",marginRight:"17%",marginTop:10*M.spacing.unit},D[M.breakpoints.down("xs")]={marginLeft:1.5*M.typography.fontSize,marginRight:1.5*M.typography.fontSize},D)}})(O),E=I(294);I.d(N,"default",function(){return x});var x=function(M){function N(){return M.apply(this,arguments)||this}return g()(N,M),N.prototype.render=function(){return i.a.createElement(E.a,null,i.a.createElement(L,null))},N}(i.a.Component)},271:function(M,N,I){"use strict";I.d(N,"b",function(){return u});var D=I(0),g=I.n(D),j=I(1),i=I.n(j),e=I(54),y=I.n(e);I.d(N,"a",function(){return y.a});I(273);var z=g.a.createContext({}),u=function(M){return g.a.createElement(z.Consumer,null,function(N){return M.data||N[M.query]&&N[M.query].data?(M.render||M.children)(M.data?M.data.data:N[M.query].data):g.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},273:function(M,N,I){var D;M.exports=(D=I(274))&&D.default||D},274:function(M,N,I){"use strict";I.r(N);I(55);var D=I(0),g=I.n(D),j=I(1),i=I.n(j),e=I(84),y=I(4),z=function(M){var N=M.location,I=y.default.getResourcesForPathnameSync(N.pathname);return I?g.a.createElement(e.a,Object.assign({location:N,pageResources:I},I.json)):null};z.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},N.default=z},286:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY5IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTY5IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+aGFjay13b3JkbWFyay1kYXJrY29sb3I8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyIC02NjQpIj4KPGcgaWQ9ImhhY2std29yZG1hcmstZGFya2NvbG9yIj4KPG1hc2sgaWQ9Im1hc2swX2FscGhhIiBtYXNrLXR5cGU9ImFscGhhIj4KPGcgaWQ9ImhhY2std29yZG1hcmstZGFyayI+CjxnIGlkPSJBQ00gSGFjayI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4yODggNjYzLjk2KSIgZmlsbD0iIzI0MjQyNCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMV9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIuMjg4IDY2My45NikiIGZpbGw9IiMyNDI0MjQiLz4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyLjI4OCA2NjMuOTYpIiBmaWxsPSIjMjQyNDI0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgzX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4yODggNjYzLjk2KSIgZmlsbD0iIzI0MjQyNCIvPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoNF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIuMjg4IDY2My45NikiIGZpbGw9IiMyNDI0MjQiLz4KPHVzZSB4bGluazpocmVmPSIjcGF0aDVfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyLjI4OCA2NjMuOTYpIiBmaWxsPSIjMjQyNDI0Ii8+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGg2X2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4yODggNjYzLjk2KSIgZmlsbD0iIzI0MjQyNCIvPgo8L2c+CjwvZz4KPC9tYXNrPgo8ZyBpZD0iRGFyayIgbWFzaz0idXJsKCNtYXNrMF9hbHBoYSkiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoN19maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDggNjY0KSIgZmlsbD0iIzI0MjQyNCIvPgo8L2c+CjxnIGlkPSJDb2xvciIgbWFzaz0idXJsKCNtYXNrMF9hbHBoYSkiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoOF9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTEuODU1IDY2NCkiIGZpbGw9IiNDOTYwRkYiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDE2LjM4NCAyMy42OEwgMTUuMTM2IDE5LjkwNEwgNy4wNzIgMTkuOTA0TCA1LjgyNCAyMy42OEwgMCAyMy42OEwgNy44MDggMS4xNTJMIDE0LjQ2NCAxLjE1MkwgMjIuMjQgMjMuNjhMIDE2LjM4NCAyMy42OFpNIDguNDQ4IDE1Ljc0NEwgMTMuNzYgMTUuNzQ0TCAxMS4xMDQgNy43NDRMIDguNDQ4IDE1Ljc0NFoiLz4KPHBhdGggaWQ9InBhdGgxX2ZpbGwiIGQ9Ik0gMjYuOTQwNSAyMC42NEMgMjQuNzIxOCAxOC40NjQgMjMuNjEyNSAxNS43MTIgMjMuNjEyNSAxMi4zODRDIDIzLjYxMjUgOS4wNTYgMjQuNzIxOCA2LjMxNDY3IDI2Ljk0MDUgNC4xNkMgMjkuMTgwNSAxLjk4NCAzMS45MTEyIDAuODk2IDM1LjEzMjUgMC44OTZDIDM3LjYyODUgMC44OTYgMzkuODQ3MiAxLjU1NzMzIDQxLjc4ODUgMi44OEMgNDMuNzI5OCA0LjIwMjY3IDQ1LjA4NDUgNi4wMzczMyA0NS44NTI1IDguMzg0TCAzOS4zMjQ1IDguMzg0QyAzOC40NzEyIDYuNzQxMzMgMzcuMTA1OCA1LjkyIDM1LjIyODUgNS45MkMgMzMuMzUxMiA1LjkyIDMxLjg2ODUgNi41MDY2NyAzMC43ODA1IDcuNjhDIDI5LjcxMzggOC44NTMzMyAyOS4xODA1IDEwLjQyMTMgMjkuMTgwNSAxMi4zODRDIDI5LjE4MDUgMTQuMzQ2NyAyOS43MTM4IDE1LjkxNDcgMzAuNzgwNSAxNy4wODhDIDMxLjg2ODUgMTguMjYxMyAzMy4zNTEyIDE4Ljg0OCAzNS4yMjg1IDE4Ljg0OEMgMzcuMTA1OCAxOC44NDggMzguNDcxMiAxOC4wMjY3IDM5LjMyNDUgMTYuMzg0TCA0NS44NTI1IDE2LjM4NEMgNDUuMDg0NSAxOC43MzA3IDQzLjcyOTggMjAuNTY1MyA0MS43ODg1IDIxLjg4OEMgMzkuODQ3MiAyMy4yMTA3IDM3LjYyODUgMjMuODcyIDM1LjEzMjUgMjMuODcyQyAzMS45MTEyIDIzLjg3MiAyOS4xODA1IDIyLjc5NDcgMjYuOTQwNSAyMC42NFoiLz4KPHBhdGggaWQ9InBhdGgyX2ZpbGwiIGQ9Ik0gNzQuODAyIDEuMjE2TCA3NC44MDIgMjMuNjhMIDY5LjMzIDIzLjY4TCA2OS4zMyAxMS4wMDhMIDY0LjExNCAyMy42OEwgNjAuMDUgMjMuNjhMIDU0LjgzNCAxMS4wMDhMIDU0LjgzNCAyMy42OEwgNDkuMzYyIDIzLjY4TCA0OS4zNjIgMS4yMTZMIDU1LjYzNCAxLjIxNkwgNjIuMDk4IDE2LjcwNEwgNjguNTMgMS4yMTZMIDc0LjgwMiAxLjIxNloiLz4KPHBhdGggaWQ9InBhdGgzX2ZpbGwiIGQ9Ik0gMTAwLjMxOCAxLjQ0TCAxMDMuOTY2IDEuNDRMIDEwMy45NjYgMjMuNjhMIDEwMC4zMTggMjMuNjhMIDEwMC4zMTggMTMuODU2TCA4OS44NTM3IDEzLjg1NkwgODkuODUzNyAyMy42OEwgODYuMjA1NyAyMy42OEwgODYuMjA1NyAxLjQ0TCA4OS44NTM3IDEuNDRMIDg5Ljg1MzcgMTEuMDRMIDEwMC4zMTggMTEuMDRMIDEwMC4zMTggMS40NFoiLz4KPHBhdGggaWQ9InBhdGg0X2ZpbGwiIGQ9Ik0gMTIwLjM4NCAxOS4yQyAxMjEuNDUxIDE4LjExMiAxMjEuOTg0IDE2LjY2MTMgMTIxLjk4NCAxNC44NDhDIDEyMS45ODQgMTMuMDM0NyAxMjEuNDUxIDExLjU5NDcgMTIwLjM4NCAxMC41MjhDIDExOS4zMzkgOS40NjEzMyAxMTguMDkxIDguOTI4IDExNi42NCA4LjkyOEMgMTE1LjE5IDguOTI4IDExMy45MzEgOS40NTA2NyAxMTIuODY0IDEwLjQ5NkMgMTExLjgxOSAxMS41NDEzIDExMS4yOTYgMTIuOTcwNyAxMTEuMjk2IDE0Ljc4NEMgMTExLjI5NiAxNi41OTczIDExMS44MTkgMTguMDU4NyAxMTIuODY0IDE5LjE2OEMgMTEzLjkzMSAyMC4yNTYgMTE1LjE5IDIwLjggMTE2LjY0IDIwLjhDIDExOC4wOTEgMjAuOCAxMTkuMzM5IDIwLjI2NjcgMTIwLjM4NCAxOS4yWk0gMTE1Ljg3MiAyMy45NjhDIDExMy41MjYgMjMuOTY4IDExMS41NTIgMjMuMTE0NyAxMDkuOTUyIDIxLjQwOEMgMTA4LjM1MiAxOS42OCAxMDcuNTUyIDE3LjQ4MjcgMTA3LjU1MiAxNC44MTZDIDEwNy41NTIgMTIuMTI4IDEwOC4zNDIgOS45NTIgMTA5LjkyIDguMjg4QyAxMTEuNTIgNi42MDI2NyAxMTMuNTA0IDUuNzYgMTE1Ljg3MiA1Ljc2QyAxMTcuMjU5IDUuNzYgMTE4LjQ3NSA2LjA4IDExOS41MiA2LjcyQyAxMjAuNTg3IDcuMzM4NjcgMTIxLjQwOCA4LjE2IDEyMS45ODQgOS4xODRMIDEyMS45ODQgNi4wNDhMIDEyNS42NjQgNi4wNDhMIDEyNS42NjQgMjMuNjhMIDEyMS45ODQgMjMuNjhMIDEyMS45ODQgMjAuMzg0QyAxMjEuMzg3IDIxLjQ3MiAxMjAuNTY2IDIyLjM0NjcgMTE5LjUyIDIzLjAwOEMgMTE4LjQ3NSAyMy42NDggMTE3LjI1OSAyMy45NjggMTE1Ljg3MiAyMy45NjhaIi8+CjxwYXRoIGlkPSJwYXRoNV9maWxsIiBkPSJNIDEzNy44OCAyMy45NjhDIDEzNS4zMiAyMy45NjggMTMzLjI0IDIzLjEzNiAxMzEuNjQgMjEuNDcyQyAxMzAuMDQgMTkuODA4IDEyOS4yNCAxNy42MTA3IDEyOS4yNCAxNC44OEMgMTI5LjI0IDEyLjEyOCAxMzAuMDQgOS45MiAxMzEuNjQgOC4yNTZDIDEzMy4yNjEgNi41OTIgMTM1LjM0MSA1Ljc2IDEzNy44OCA1Ljc2QyAxNDAuMDEzIDUuNzYgMTQxLjc3MyA2LjI3MiAxNDMuMTYgNy4yOTZDIDE0NC41NjggOC4yOTg2NyAxNDUuNTE3IDkuNzM4NjcgMTQ2LjAwOCAxMS42MTZMIDE0Mi4wNzIgMTEuNjE2QyAxNDEuNDEgOS43NiAxNDAuMDEzIDguODMyIDEzNy44OCA4LjgzMkMgMTM2LjM4NiA4LjgzMiAxMzUuMTkyIDkuMzY1MzMgMTM0LjI5NiAxMC40MzJDIDEzMy40MjEgMTEuNDc3MyAxMzIuOTg0IDEyLjk0OTMgMTMyLjk4NCAxNC44NDhDIDEzMi45ODQgMTYuNzQ2NyAxMzMuNDIxIDE4LjIyOTMgMTM0LjI5NiAxOS4yOTZDIDEzNS4xOTIgMjAuMzYyNyAxMzYuMzg2IDIwLjg5NiAxMzcuODggMjAuODk2QyAxMzkuOTkyIDIwLjg5NiAxNDEuMzg5IDE5Ljk2OCAxNDIuMDcyIDE4LjExMkwgMTQ2LjAwOCAxOC4xMTJDIDE0NS40OTYgMTkuOTA0IDE0NC41MzYgMjEuMzMzMyAxNDMuMTI4IDIyLjRDIDE0MS43MiAyMy40NDUzIDEzOS45NyAyMy45NjggMTM3Ljg4IDIzLjk2OFoiLz4KPHBhdGggaWQ9InBhdGg2X2ZpbGwiIGQ9Ik0gMTUzLjI5MSAyMy42OEwgMTQ5LjY0MyAyMy42OEwgMTQ5LjY0MyAwTCAxNTMuMjkxIDBMIDE1My4yOTEgMTMuNzZMIDE1OS42OTEgNi4wNDhMIDE2NC43NDcgNi4wNDhMIDE1Ni42MTkgMTQuODhMIDE2NC43NDcgMjMuNjhMIDE1OS44MTkgMjMuNjhMIDE1My4yOTEgMTYuMDk2TCAxNTMuMjkxIDIzLjY4WiIvPgo8cGF0aCBpZD0icGF0aDdfZmlsbCIgZD0iTSAwIDBMIDgzLjg1NTQgMEwgODMuODU1NCAyNEwgMCAyNEwgMCAwWiIvPgo8cGF0aCBpZD0icGF0aDhfZmlsbCIgZD0iTSAwIDBMIDkwLjE0NDYgMEwgOTAuMTQ0NiAyNEwgMCAyNEwgMCAwWiIvPgo8L2RlZnM+Cjwvc3ZnPgo="},287:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDM1MCAzNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+Cjx0aXRsZT5sb2dvLWhhY2s8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExNSAtNDUwMikiPgo8ZyBpZD0ibG9nby1oYWNrIj4KPGcgaWQ9Ikdyb3VwIj4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgwX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTUgNDUwMikiIGZpbGw9IiNDOTYwRkYiLz4KPC9nPgo8L2c+CjxnIGlkPSJHcm91cCI+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMV9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjY2Ljk4IDQ3NTguNDIpIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGcgaWQ9IlZlY3RvciI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgyX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjYuMTEgNDU4OC45KSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnIGlkPSJHcm91cCI+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoM19maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjYxLjEgNDY0NS45KSIgZmlsbD0iI0M5NjBGRiIvPgo8L2c+CjwvZz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDM0Mi4yNzQgMTkzLjY2OUwgMTkzLjY2OSAzNDIuMjc0QyAxODMuMzY3IDM1Mi41NzUgMTY2LjYzMyAzNTIuNTc1IDE1Ni4zMzEgMzQyLjI3NEwgNy43MjU5MiAxOTMuNjY5QyAtMi41NzUzMSAxODMuMzY3IC0yLjU3NTMxIDE2Ni42MzMgNy43MjU5MiAxNTYuMzMxTCAxNTYuMzMxIDcuNzI1OTJDIDE2Ni42MzMgLTIuNTc1MzEgMTgzLjM2NyAtMi41NzUzMSAxOTMuNjY5IDcuNzI1OTJMIDM0Mi4yNzQgMTU2LjMzMUMgMzUyLjU3NSAxNjYuNjMzIDM1Mi41NzUgMTgzLjM2NyAzNDIuMjc0IDE5My42NjlaIi8+CjxwYXRoIGlkPSJwYXRoMV9maWxsIiBkPSJNIDQ2LjAzOTQgNC4yMjYxN0MgNDYuMDM5NCAxNC40MTU4IDM1LjczODIgMTguOTUyOCAyMy4wMTk3IDE4Ljk1MjhDIDEwLjMwMTIgMTguOTUyOCA0LjUzOTYyZS0wNiAxNC40MTU4IDQuNTM5NjJlLTA2IDQuMjI2MTdDIDQuNTM5NjJlLTA2IC00LjkyMjIxIDQuODcxNyAzLjYzMTE0IDIzLjAxOTcgMy42MzExNEMgNDEuMTY3NyAzLjYzMTE0IDQ2LjAzOTQgLTQuNDM4NzYgNDYuMDM5NCA0LjIyNjE3WiIvPgo8cGF0aCBpZD0icGF0aDJfZmlsbCIgZD0iTSA5OS41OTA5IDEzOS43OTJDIDk5LjU5MDkgMTU5LjAxOCA4My41OTk5IDE2Ny4yIDYzLjg4OTkgMTY3LjJDIDQ0LjE4IDE2Ny4yIDI4LjE4ODkgMTU3LjM0NSAyOC4xODg5IDEzOS43OTJDIDI4LjE4ODkgMTEyLjY4MSAtNC41Mzk2MmUtMDYgMTAzLjE2MSAtNC41Mzk2MmUtMDYgNjMuODg5OUMgLTQuNTM5NjJlLTA2IDI4LjU5OCAyOC41OTggLTEuMTM0OWUtMDYgNjMuODg5OSAtMS4xMzQ5ZS0wNkMgOTkuMTgxOSAtMS4xMzQ5ZS0wNiAxMjcuNzggMjguNTk4IDEyNy43OCA2My44ODk5QyAxMjcuNzggMTA2LjI0OCA5OS41OTA5IDExNi41NDkgOTkuNTkwOSAxMzkuNzkyWiIvPgo8cGF0aCBpZD0icGF0aDNfZmlsbCIgZD0iTSA0NC4zMjg3IDQ3LjA1NDVDIDUyLjQzNTggNDEuOTIyNSA1Ny43OTEgMzIuOTIyOSA1Ny43OTEgMjIuNjIxN0MgNTcuNzkxIDEzLjc3MDggNTMuODExOCA1LjgxMjQzIDQ3LjQ4OTggMC41MzE2NThDIDQyLjQ2OTMgLTMuNzA3ODQgNDUuMjIxMyAxOC42Nzk3IDQxLjA1NjEgMjIuNjIxN0MgMzYuNjMwNyAyNi43ODY4IDIxLjMwOSAyNi42MzggMTYuNzM0OCAyMi42MjE3QyAxMi40MjEgMTguNzkxMiAxMy42ODU0IC0yLjMzMTg2IDEwLjMwMTIgMC41MzE2NThDIDQuMDE2MzcgNS44MTI0MyAtMi4yNjk4MWUtMDYgMTMuNzcwOCAtMi4yNjk4MWUtMDYgMjIuNjIxN0MgLTIuMjY5ODFlLTA2IDMyLjg4NTcgNS4zNTUxNSA0MS45MjI1IDEzLjQ2MjMgNDcuMDU0NUwgMTMuNDYyMyA4My42ODUyQyAxMy40NjIzIDg5Ljg1ODUgMTkuMTUyMSA5Mi41NzMzIDI4Ljg5NTUgOTIuNTczM0MgMzguNjM4OSA5Mi41NzMzIDQ0LjMyODcgOTAuNDE2NCA0NC4zMjg3IDgzLjY4NTJMIDQ0LjMyODcgNDcuMDU0NVoiLz4KPC9kZWZzPgo8L3N2Zz4K"},294:function(M,N,I){"use strict";var D=I(0),g=I.n(D),j=I(275),i=I.n(j),e=I(1),y=I.n(e),z=I(283),u=I.n(z),a=I(284),n=I.n(a),T=I(285),t=I.n(T),A=I(291),c=I(83),O=I(299),L=I.n(O),E=I(286),x=I.n(E),o=I(287),r=I.n(o),S=I(10),l=I.n(S),s=I(281),C=I.n(s),Y=function(M){function N(){return M.apply(this,arguments)||this}return l()(N,M),N.prototype.render=function(){var M=this.props.classes;return g.a.createElement(g.a.Fragment,null,g.a.createElement(C.a,{className:M.btn},"Home"),g.a.createElement(C.a,{className:M.btn},"Blog"),g.a.createElement(C.a,{className:M.btn},"Team"),g.a.createElement(C.a,{className:M.btn},"Contact"))},N}(g.a.Component);Y.propTypes={classes:y.a.object.isRequired};var m=Object(c.withStyles)(function(){return{btn:{fontFamily:["Poppins","sans-serif"],fontWeight:500}}})(Y);function k(M){var N=M.classes,I=Object(D.useState)(!1),j=I[0],i=I[1];return g.a.createElement(g.a.Fragment,null,g.a.createElement(u.a,{position:"sticky"},g.a.createElement(n.a,{className:N.toolbar},g.a.createElement("div",{className:N.logohome},g.a.createElement("img",{src:r.a,className:N.logo}),g.a.createElement("img",{src:x.a,className:N.clubname})),g.a.createElement("div",{className:N.desktopMenuBar},g.a.createElement(m,null)),g.a.createElement(t.a,{onClick:function(){return i(function(M){return!M})},className:N.menubtn},g.a.createElement(L.a,null)))),g.a.createElement("div",{className:N.mobileMenuBar},g.a.createElement(A.a,{in:j},g.a.createElement("div",{className:N.mobileBtnContainer},g.a.createElement(m,null)))))}k.propTypes={classes:y.a.object.isRequired};var Q=Object(c.withStyles)(function(M){var N,I,D;return{logohome:{display:"flex",alignItems:"center",justifyContent:"center"},toolbar:{backgroundColor:"white",justifyContent:"space-between",padding:"0% 6%"},logo:{height:"1.8rem",margin:M.spacing.unit},clubname:{height:"1.2rem"},menubtn:(N={display:"none"},N[M.breakpoints.down("xs")]={display:"inline"},N),desktopMenuBar:(I={display:"inline"},I[M.breakpoints.down("xs")]={display:"none"},I),mobileMenuBar:(D={display:"none"},D[M.breakpoints.down("xs")]={display:"inline"},D.boxShadow=M.shadows[4],D.position="fixed",D.zIndex="1",D.overflow="hidden",D.backgroundColor=M.palette.grey[100],D.width="100%",D),mobileBtnContainer:{display:"flex",flexDirection:"column",padding:"3%"}}})(k);function w(M){var N=M.children;return g.a.createElement(g.a.Fragment,null,g.a.createElement(i.a,null,g.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Poppins:400,500,700",rel:"stylesheet"}),g.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Chivo|Palanquin+Dark|Palanquin",rel:"stylesheet"})),g.a.createElement(Q,null),N)}w.propTypes={children:y.a.node.isRequired};N.a=w},450:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MyIgdmlld0JveD0iMCAwIDE0NDAgNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMTEuNCAyLjUxTDI5OS41NyA1MkgyODQuNzNMMjc2LjgyIDE4Ljg5TDI2OC44NCA1MkgyNTRMMjQyLjE3IDIuNTFIMjU1LjE5TDI2MS41NiAzOC4zNUwyNzAuMjQgMi41MUgyODMuMzNMMjkyLjAxIDM4LjM1TDI5OC40NSAyLjUxSDMxMS40Wk0zNDIuNDY1IDEyLjUyQzM0Ni45NDUgMTIuNTIgMzUwLjQ5MSAxNC4wMTMzIDM1My4xMDUgMTdDMzU1Ljc2NSAxOS45ODY3IDM1Ny4wOTUgMjQuMDkzMyAzNTcuMDk1IDI5LjMyVjUySDM0NS4xMjVWMzAuNzJDMzQ1LjEyNSAyOC4xMDY3IDM0NC40MjUgMjYuMDc2NyAzNDMuMDI1IDI0LjYzQzM0MS42NzEgMjMuMTM2NyAzMzkuODUxIDIyLjM5IDMzNy41NjUgMjIuMzlDMzM1LjEzOCAyMi4zOSAzMzMuMjAxIDIzLjE2IDMzMS43NTUgMjQuN0MzMzAuMzU1IDI2LjI0IDMyOS42NTUgMjguNDMzMyAzMjkuNjU1IDMxLjI4VjUySDMxNy42ODVWMC4xOTk5OTlIMzI5LjY1NVYyMC4wOEMzMzAuNzc1IDE3Ljc0NjcgMzMyLjQzMSAxNS45MDMzIDMzNC42MjUgMTQuNTVDMzM2Ljg2NSAxMy4xOTY3IDMzOS40NzggMTIuNTIgMzQyLjQ2NSAxMi41MlpNMzgzLjI1OSAxMi40NUMzODcuMTMzIDEyLjQ1IDM5MC41ODYgMTMuMjY2NyAzOTMuNjE5IDE0LjlDMzk2LjY5OSAxNi40ODY3IDM5OS4xMDMgMTguNzk2NyA0MDAuODI5IDIxLjgzQzQwMi42MDMgMjQuODYzMyA0MDMuNDg5IDI4LjQxIDQwMy40ODkgMzIuNDdDNDAzLjQ4OSAzNi41MyA0MDIuNjAzIDQwLjA3NjcgNDAwLjgyOSA0My4xMUMzOTkuMTAzIDQ2LjE0MzMgMzk2LjY5OSA0OC40NzY3IDM5My42MTkgNTAuMTFDMzkwLjU4NiA1MS42OTY3IDM4Ny4xMzMgNTIuNDkgMzgzLjI1OSA1Mi40OUMzNzkuMzg2IDUyLjQ5IDM3NS45MDkgNTEuNjk2NyAzNzIuODI5IDUwLjExQzM2OS43NDkgNDguNDc2NyAzNjcuMzIzIDQ2LjE0MzMgMzY1LjU0OSA0My4xMUMzNjMuODIzIDQwLjA3NjcgMzYyLjk1OSAzNi41MyAzNjIuOTU5IDMyLjQ3QzM2Mi45NTkgMjguNDEgMzYzLjgyMyAyNC44NjMzIDM2NS41NDkgMjEuODNDMzY3LjMyMyAxOC43OTY3IDM2OS43NDkgMTYuNDg2NyAzNzIuODI5IDE0LjlDMzc1LjkwOSAxMy4yNjY3IDM3OS4zODYgMTIuNDUgMzgzLjI1OSAxMi40NVpNMzgzLjI1OSAyMi44MUMzODAuOTczIDIyLjgxIDM3OS4wMzYgMjMuNjUgMzc3LjQ0OSAyNS4zM0MzNzUuOTA5IDI2Ljk2MzMgMzc1LjEzOSAyOS4zNDMzIDM3NS4xMzkgMzIuNDdDMzc1LjEzOSAzNS41OTY3IDM3NS45MDkgMzcuOTc2NyAzNzcuNDQ5IDM5LjYxQzM3OS4wMzYgNDEuMjQzMyAzODAuOTczIDQyLjA2IDM4My4yNTkgNDIuMDZDMzg1LjU0NiA0Mi4wNiAzODcuNDU5IDQxLjI0MzMgMzg4Ljk5OSAzOS42MUMzOTAuNTM5IDM3Ljk3NjcgMzkxLjMwOSAzNS41OTY3IDM5MS4zMDkgMzIuNDdDMzkxLjMwOSAyOS4zNDMzIDM5MC41MzkgMjYuOTYzMyAzODguOTk5IDI1LjMzQzM4Ny40NTkgMjMuNjUgMzg1LjU0NiAyMi44MSAzODMuMjU5IDIyLjgxWk00OTAuOTggMi41MUw0NzkuMTUgNTJINDY0LjMxTDQ1Ni40IDE4Ljg5TDQ0OC40MiA1Mkg0MzMuNThMNDIxLjc1IDIuNTFINDM0Ljc3TDQ0MS4xNCAzOC4zNUw0NDkuODIgMi41MUg0NjIuOTFMNDcxLjU5IDM4LjM1TDQ3OC4wMyAyLjUxSDQ5MC45OFpNNTM0LjM2NSAzMS40MkM1MzQuMzY1IDMyLjQgNTM0LjI0OCAzMy40NzMzIDUzNC4wMTUgMzQuNjRINTA2LjkyNUM1MDcuMDY1IDM3LjU4IDUwNy44MTEgMzkuNzAzMyA1MDkuMTY1IDQxLjAxQzUxMC41MTggNDIuMjcgNTEyLjI0NSA0Mi45IDUxNC4zNDUgNDIuOUM1MTYuMTE4IDQyLjkgNTE3LjU4OCA0Mi40NTY3IDUxOC43NTUgNDEuNTdDNTE5LjkyMSA0MC42ODMzIDUyMC42OTEgMzkuNTQgNTIxLjA2NSAzOC4xNEg1MzMuNzM1QzUzMy4yMjEgNDAuODkzMyA1MzIuMTAxIDQzLjM2NjcgNTMwLjM3NSA0NS41NkM1MjguNjQ4IDQ3LjcwNjcgNTI2LjQ1NSA0OS40MSA1MjMuNzk1IDUwLjY3QzUyMS4xMzUgNTEuODgzMyA1MTguMTcxIDUyLjQ5IDUxNC45MDUgNTIuNDlDNTExLjA3OCA1Mi40OSA1MDcuNjcxIDUxLjY5NjcgNTA0LjY4NSA1MC4xMUM1MDEuNzQ1IDQ4LjQ3NjcgNDk5LjQzNSA0Ni4xNDMzIDQ5Ny43NTUgNDMuMTFDNDk2LjA3NSA0MC4wNzY3IDQ5NS4yMzUgMzYuNTMgNDk1LjIzNSAzMi40N0M0OTUuMjM1IDI4LjM2MzMgNDk2LjA1MSAyNC44MTY3IDQ5Ny42ODUgMjEuODNDNDk5LjM2NSAxOC43OTY3IDUwMS42OTggMTYuNDg2NyA1MDQuNjg1IDE0LjlDNTA3LjY3MSAxMy4yNjY3IDUxMS4wNzggMTIuNDUgNTE0LjkwNSAxMi40NUM1MTguNzc4IDEyLjQ1IDUyMi4xODUgMTMuMjQzMyA1MjUuMTI1IDE0LjgzQzUyOC4wNjUgMTYuNDE2NyA1MzAuMzI4IDE4LjY1NjcgNTMxLjkxNSAyMS41NUM1MzMuNTQ4IDI0LjM5NjcgNTM0LjM2NSAyNy42ODY3IDUzNC4zNjUgMzEuNDJaTTUyMi4yNTUgMjkuNkM1MjIuMzAxIDI3LjAzMzMgNTIxLjYwMSAyNS4xMiA1MjAuMTU1IDIzLjg2QzUxOC43NTUgMjIuNTUzMyA1MTcuMDA1IDIxLjkgNTE0LjkwNSAyMS45QzUxMi43MTEgMjEuOSA1MTAuODkxIDIyLjU1MzMgNTA5LjQ0NSAyMy44NkM1MDcuOTk4IDI1LjE2NjcgNTA3LjE4MSAyNy4wOCA1MDYuOTk1IDI5LjZINTIyLjI1NVpNNTg1LjI3OCA0Mi45N0g1NjYuNzI4TDU2My42NDggNTJINTUxLjA0OEw1NjkuMTc4IDIuODZINTgyLjk2OEw2MDEuMDk4IDUySDU4OC4zNThMNTg1LjI3OCA0Mi45N1pNNTgyLjE5OCAzMy44N0w1NzYuMDM4IDE1LjY3TDU2OS44MDggMzMuODdINTgyLjE5OFpNNjE3LjcyMSAyMC4yOUM2MTkuMjE0IDE3LjkxIDYyMS4xMjggMTYuMDIgNjIzLjQ2MSAxNC42MkM2MjUuODQxIDEzLjIyIDYyOC40MDggMTIuNTIgNjMxLjE2MSAxMi41MlYyNS4zM0g2MjcuNzMxQzYyNC41NTggMjUuMzMgNjIyLjA4NCAyNi4wMDY3IDYyMC4zMTEgMjcuMzZDNjE4LjU4NCAyOC43MTMzIDYxNy43MjEgMzEgNjE3LjcyMSAzNC4yMlY1Mkg2MDUuNzUxVjEyLjk0SDYxNy43MjFWMjAuMjlaTTY3My4yNzEgMzEuNDJDNjczLjI3MSAzMi40IDY3My4xNTQgMzMuNDczMyA2NzIuOTIxIDM0LjY0SDY0NS44MzFDNjQ1Ljk3MSAzNy41OCA2NDYuNzE4IDM5LjcwMzMgNjQ4LjA3MSA0MS4wMUM2NDkuNDI0IDQyLjI3IDY1MS4xNTEgNDIuOSA2NTMuMjUxIDQyLjlDNjU1LjAyNCA0Mi45IDY1Ni40OTQgNDIuNDU2NyA2NTcuNjYxIDQxLjU3QzY1OC44MjggNDAuNjgzMyA2NTkuNTk4IDM5LjU0IDY1OS45NzEgMzguMTRINjcyLjY0MUM2NzIuMTI4IDQwLjg5MzMgNjcxLjAwOCA0My4zNjY3IDY2OS4yODEgNDUuNTZDNjY3LjU1NCA0Ny43MDY3IDY2NS4zNjEgNDkuNDEgNjYyLjcwMSA1MC42N0M2NjAuMDQxIDUxLjg4MzMgNjU3LjA3OCA1Mi40OSA2NTMuODExIDUyLjQ5QzY0OS45ODQgNTIuNDkgNjQ2LjU3OCA1MS42OTY3IDY0My41OTEgNTAuMTFDNjQwLjY1MSA0OC40NzY3IDYzOC4zNDEgNDYuMTQzMyA2MzYuNjYxIDQzLjExQzYzNC45ODEgNDAuMDc2NyA2MzQuMTQxIDM2LjUzIDYzNC4xNDEgMzIuNDdDNjM0LjE0MSAyOC4zNjMzIDYzNC45NTggMjQuODE2NyA2MzYuNTkxIDIxLjgzQzYzOC4yNzEgMTguNzk2NyA2NDAuNjA0IDE2LjQ4NjcgNjQzLjU5MSAxNC45QzY0Ni41NzggMTMuMjY2NyA2NDkuOTg0IDEyLjQ1IDY1My44MTEgMTIuNDVDNjU3LjY4NCAxMi40NSA2NjEuMDkxIDEzLjI0MzMgNjY0LjAzMSAxNC44M0M2NjYuOTcxIDE2LjQxNjcgNjY5LjIzNCAxOC42NTY3IDY3MC44MjEgMjEuNTVDNjcyLjQ1NCAyNC4zOTY3IDY3My4yNzEgMjcuNjg2NyA2NzMuMjcxIDMxLjQyWk02NjEuMTYxIDI5LjZDNjYxLjIwOCAyNy4wMzMzIDY2MC41MDggMjUuMTIgNjU5LjA2MSAyMy44NkM2NTcuNjYxIDIyLjU1MzMgNjU1LjkxMSAyMS45IDY1My44MTEgMjEuOUM2NTEuNjE4IDIxLjkgNjQ5Ljc5OCAyMi41NTMzIDY0OC4zNTEgMjMuODZDNjQ2LjkwNCAyNS4xNjY3IDY0Ni4wODggMjcuMDggNjQ1LjkwMSAyOS42SDY2MS4xNjFaIiBmaWxsPSIjMzUyQTNBIi8+CjxyZWN0IHg9Ijk1MCIgeT0iMiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjE1IiBmaWxsPSIjQzk2MEZGIi8+CjxyZWN0IHg9IjEyMDEiIHk9IjIiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI0M5NjBGRiIvPgo8cmVjdCB4PSIxMDAxLjUiIHk9IjMuNSIgd2lkdGg9IjE5MSIgaGVpZ2h0PSI0NyIgZmlsbD0iI0RCOTlGRCIgc3Ryb2tlPSIjREI5OUZEIiBzdHJva2Utd2lkdGg9IjMiLz4KPHJlY3QgeD0iNzA3IiB5PSIyIiB3aWR0aD0iOTciIGhlaWdodD0iNTAiIGZpbGw9IiNDOTYwRkYiLz4KPHJlY3QgeD0iOTUwIiB5PSIyIiB3aWR0aD0iMzQiIGhlaWdodD0iNTAiIGZpbGw9IiNDOTYwRkYiLz4KPHJlY3QgeD0iMTI5MiIgeT0iMiIgd2lkdGg9IjE0OCIgaGVpZ2h0PSI1MCIgZmlsbD0iI0E0NEJEMSIvPgo8cmVjdCB4PSIxNDIiIHk9IjIiIHdpZHRoPSI0OSIgaGVpZ2h0PSI1MCIgZmlsbD0iI0RCOTlGRCIvPgo8cmVjdCB4PSI4NjEiIHk9IjIiIHdpZHRoPSI3NSIgaGVpZ2h0PSI1MCIgZmlsbD0iI0E0NEJEMSIvPgo8cmVjdCB5PSIyIiB3aWR0aD0iOTQiIGhlaWdodD0iNTAiIGZpbGw9IiNDOTYwRkYiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-playground-js-9e877ed1d64666f21cf6.js.map