(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{285:function(e,t,a){"use strict";a.r(t);a(93);var n=a(0),o=a.n(n),r=a(307),i=a(306),l=a(272),c=a(9),s=a(328),d=a.n(s),u=a(327),m=a.n(u),p=a(313),f=a.n(p),g=a(1),v=a(2),b=(a(8),a(6)),h=a(273),E=a(73),y=o.a.createContext({}),x=a(47),k=a.n(x),C=(a(27),"undefined"==typeof window?o.a.useEffect:o.a.useLayoutEffect),N=o.a.forwardRef((function(e,t){var a=e.alignItems,n=void 0===a?"center":a,r=e.autoFocus,i=void 0!==r&&r,l=e.button,c=void 0!==l&&l,s=e.children,d=e.classes,u=e.className,m=e.component,p=e.ContainerComponent,f=void 0===p?"li":p,x=e.ContainerProps,N=(x=void 0===x?{}:x).className,j=Object(v.a)(x,["className"]),O=e.dense,L=e.disabled,I=void 0!==L&&L,P=e.disableGutters,R=void 0!==P&&P,w=e.divider,M=void 0!==w&&w,S=e.focusVisibleClassName,z=e.selected,B=void 0!==z&&z,T=Object(v.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),_=o.a.useContext(y),V={dense:O||_.dense||!1,alignItems:n},A=o.a.useRef(null);C((function(){i&&A.current&&A.current.focus()}),[i]);var F=o.a.Children.toArray(s),$=F.length&&Object(E.a)(F[F.length-1],["ListItemSecondaryAction"]),D=o.a.useCallback((function(e){A.current=k.a.findDOMNode(e)}),[]),G=Object(E.b)(D,t),H=Object(g.a)({className:Object(b.a)(d.root,u,V.dense&&d.dense,!R&&d.gutters,M&&d.divider,I&&d.disabled,c&&d.button,"center"!==n&&d.alignItemsFlexStart,$&&d.secondaryAction,B&&d.selected),disabled:I},T),J=m||"li";return c&&(H.component=m||"div",H.focusVisibleClassName=Object(b.a)(d.focusVisible,S),J=h.a),$?(J=H.component||m?J:"div","li"===f&&("li"===J?J="div":"li"===H.component&&(H.component="div")),o.a.createElement(y.Provider,{value:V},o.a.createElement(f,Object(g.a)({className:Object(b.a)(d.container,N),ref:G},j),o.a.createElement(J,H,F),F.pop()))):o.a.createElement(y.Provider,{value:V},o.a.createElement(J,Object(g.a)({ref:G},H),F))})),j=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(N),O=o.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.component,l=void 0===i?"ul":i,c=e.dense,s=void 0!==c&&c,d=e.disablePadding,u=void 0!==d&&d,m=e.subheader,p=Object(v.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),f=o.a.useMemo((function(){return{dense:s}}),[s]);return o.a.createElement(y.Provider,{value:f},o.a.createElement(l,Object(g.a)({className:Object(b.a)(n.root,r,s&&n.dense,!u&&n.padding,m&&n.subheader),ref:t},p),m,a))})),L=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(O),I=a(137);var P=function(e){var t=e.title,a=e.subtitle,n=e.excerpt,i=e.date,c=e.timeToRead,s=e.url;return o.a.createElement("article",null,o.a.createElement(r.a,{variant:"h4",component:"h2",color:"primary"},o.a.createElement(I.a,{to:s},t)),o.a.createElement(l.a,null,a),o.a.createElement(l.a,{gutterBottom:!0},i," | ",c," min read"),o.a.createElement(l.a,{color:"textSecondary",gutterBottom:!0},n))};var R=function(e){var t=e.data.allMarkdownRemark.nodes.map((function(e){return o.a.createElement(j,{key:e.id,disableGutters:!0},o.a.createElement(P,{title:e.frontmatter.title,subtitle:e.frontmatter.subtitle,date:e.frontmatter.date,excerpt:e.excerpt,timeToRead:e.timeToRead,url:e.fields.slug}))}));return o.a.createElement(L,null,t)},w=a(278);a.d(t,"pageQuery",(function(){return S}));var M=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.data,a=e.classes,n=e.pageContext,c=n.prevPageURL,s=n.nextPageURL,u=n.currPageNum,p=n.totalPageNum,g=null===c?null:o.a.createElement(I.a,{to:c,className:a.leftLink},o.a.createElement(r.a,{color:"textSecondary",component:"span",classes:{root:a.link}},o.a.createElement(m.a,{classes:{root:a.linkIcon}}),"Prev")),v=null===s?null:o.a.createElement(I.a,{to:s,className:a.rightLink},o.a.createElement(r.a,{color:"textSecondary",component:"span",classes:{root:a.link}},"Next",o.a.createElement(d.a,{classes:{root:a.linkIcon}})));return o.a.createElement(w.a,null,o.a.createElement(i.a,{maxWidth:"md",classes:{root:a.container}},o.a.createElement(l.a,{variant:"h2",component:"h1",gutterBottom:!0,classes:{root:a.header}},o.a.createElement(f.a,{color:"primary",classes:{root:a.headerIcon}}),"Blog posts"),o.a.createElement(R,{data:t}),o.a.createElement(l.a,{variant:"subtitle1",color:"textSecondary",align:"center"},"Page ",u," of ",p),o.a.createElement("nav",{className:a.navigation},g,v)))},n}(o.a.Component),S="2469809116";t.default=Object(c.a)((function(e){return{container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},header:{display:"flex",alignItems:"center"},headerIcon:{fontSize:"inherit",marginRight:e.spacing(1)},navigation:{display:"flex",padding:e.spacing(1,0)},leftLink:{marginRight:"auto",marginLeft:0},rightLink:{marginLeft:"auto",marginRight:0},link:{display:"flex",alignItems:"center",fontSize:e.typography.h5.fontSize},linkIcon:{fontSize:"inherit"}}}))(M)},313:function(e,t,a){"use strict";a(41);var n=a(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(189)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17z"}),o.default.createElement("path",{d:"M4 4v12h14.83L20 17.17V4z",opacity:".3"})),"ModeCommentTwoTone");t.default=r},327:function(e,t,a){"use strict";a(41);var n=a(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(189)).default)(o.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.default=r},328:function(e,t,a){"use strict";a(41);var n=a(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(189)).default)(o.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=r}}]);
//# sourceMappingURL=component---src-components-blogpage-blogpagetemplate-js-c8039c92eeee41604c19.js.map