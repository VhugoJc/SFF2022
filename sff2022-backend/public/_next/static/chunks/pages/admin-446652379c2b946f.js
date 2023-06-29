(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{11382:function(a,b,c){"use strict";var d=c(87462),e=c(4942),f=c(15671),g=c(43144),h=c(32531),i=c(73568),j=c(94184),k=c.n(j),l=c(23279),m=c.n(l),n=c(98423),o=c(67294),p=c(53124),q=c(96159),r=c(93355),s=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};(0,r.b)("small","default","large");var t=null,u=function(a){(0,h.Z)(c,a);var b=(0,i.Z)(c);function c(a){(0,f.Z)(this,c),(g=b.call(this,a)).debouncifyUpdateSpinning=function(a){var b=(a||g.props).delay;b&&(g.cancelExistingSpin(),g.updateSpinning=m()(g.originalUpdateSpinning,b))},g.updateSpinning=function(){var a=g.props.spinning;g.state.spinning!==a&&g.setState({spinning:a})},g.renderSpin=function(a){var b,c,f,h,i,j=a.direction,l=g.props,m=l.spinPrefixCls,p=l.className,r=l.size,u=l.tip,v=l.wrapperClassName,w=l.style,x=s(l,["spinPrefixCls","className","size","tip","wrapperClassName","style"]),y=g.state.spinning,z=k()(m,(b={},(0,e.Z)(b,"".concat(m,"-sm"),"small"===r),(0,e.Z)(b,"".concat(m,"-lg"),"large"===r),(0,e.Z)(b,"".concat(m,"-spinning"),y),(0,e.Z)(b,"".concat(m,"-show-text"),!!u),(0,e.Z)(b,"".concat(m,"-rtl"),"rtl"===j),b),p),A=(0,n.Z)(x,["spinning","delay","indicator","prefixCls"]),B=o.createElement("div",(0,d.Z)({},A,{style:w,className:z,"aria-live":"polite","aria-busy":y}),(c=m,h=(f=g.props).indicator,i="".concat(c,"-dot"),null===h?null:(0,q.l$)(h)?(0,q.Tm)(h,{className:k()(h.props.className,i)}):(0,q.l$)(t)?(0,q.Tm)(t,{className:k()(t.props.className,i)}):o.createElement("span",{className:k()(i,"".concat(c,"-dot-spin"))},o.createElement("i",{className:"".concat(c,"-dot-item")}),o.createElement("i",{className:"".concat(c,"-dot-item")}),o.createElement("i",{className:"".concat(c,"-dot-item")}),o.createElement("i",{className:"".concat(c,"-dot-item")}))),u?o.createElement("div",{className:"".concat(m,"-text")},u):null);if(g.isNestedPattern()){var C=k()("".concat(m,"-container"),(0,e.Z)({},"".concat(m,"-blur"),y));return o.createElement("div",(0,d.Z)({},A,{className:k()("".concat(m,"-nested-loading"),v)}),y&&o.createElement("div",{key:"loading"},B),o.createElement("div",{className:C,key:"container"},g.props.children))}return B};var g,h,i,j=a.spinning,l=a.delay,p=(h=j,i=l,!!h&&!!i&&!isNaN(Number(i)));return g.state={spinning:j&&!p},g.originalUpdateSpinning=g.updateSpinning,g.debouncifyUpdateSpinning(a),g}return(0,g.Z)(c,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var a=this.updateSpinning;a&&a.cancel&&a.cancel()}},{key:"isNestedPattern",value:function(){return!!(this.props&& void 0!==this.props.children)}},{key:"render",value:function(){return o.createElement(p.C,null,this.renderSpin)}}]),c}(o.Component);u.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var v=function(a){var b=a.prefixCls,c=(0,o.useContext(p.E_).getPrefixCls)("spin",b),e=(0,d.Z)((0,d.Z)({},a),{spinPrefixCls:c});return o.createElement(u,(0,d.Z)({},e))};v.setDefaultIndicator=function(a){t=a},b.Z=v},27561:function(a,b,c){var d=c(67990),e=/^\s+/;a.exports=function(a){return a?a.slice(0,d(a)+1).replace(e,""):a}},67990:function(a){var b=/\s/;a.exports=function(a){for(var c=a.length;c-- &&b.test(a.charAt(c)););return c}},23279:function(a,b,c){var d=c(13218),e=c(7771),f=c(14841),g=Math.max,h=Math.min;a.exports=function(a,b,c){var i,j,k,l,m,n,o=0,p=!1,q=!1,r=!0;if("function"!=typeof a)throw TypeError("Expected a function");function s(b){var c=i,d=j;return i=j=void 0,o=b,l=a.apply(d,c)}function t(a){var c=a-n,d=a-o;return void 0===n||c>=b||c<0||q&&d>=k}function u(){var a,c,d,f,g=e();if(t(g))return v(g);m=setTimeout(u,(c=(a=g)-n,d=a-o,f=b-c,q?h(f,k-d):f))}function v(a){return(m=void 0,r&&i)?s(a):(i=j=void 0,l)}function w(){var a,c=e(),d=t(c);if(i=arguments,j=this,n=c,d){if(void 0===m)return o=a=n,m=setTimeout(u,b),p?s(a):l;if(q)return clearTimeout(m),m=setTimeout(u,b),s(n)}return void 0===m&&(m=setTimeout(u,b)),l}return b=f(b)||0,d(c)&&(p=!!c.leading,q="maxWait"in c,k=q?g(f(c.maxWait)||0,b):k,r="trailing"in c?!!c.trailing:r),w.cancel=function(){void 0!==m&&clearTimeout(m),o=0,i=n=j=m=void 0},w.flush=function(){return void 0===m?l:v(e())},w}},33448:function(a,b,c){var d=c(44239),e=c(37005);a.exports=function(a){return"symbol"==typeof a||e(a)&&"[object Symbol]"==d(a)}},7771:function(a,b,c){var d=c(55639),e=function(){return d.Date.now()};a.exports=e},14841:function(a,b,c){var d=c(27561),e=c(13218),f=c(33448),g=0/0,h=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,j=/^0o[0-7]+$/i,k=parseInt;a.exports=function(a){if("number"==typeof a)return a;if(f(a))return g;if(e(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=e(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=d(a);var c=i.test(a);return c||j.test(a)?k(a.slice(2),c?2:8):h.test(a)?g:+a}},64830:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return c(11200)}])},9292:function(a,b,c){"use strict";var d=c(67294),e=c(18333),f=function(){return(0,d.useContext)(e.Z)};b.Z=f},51407:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(41799),e=c(85893),f=c(67294),g=c(14516),h=c(59658),i=c(4322),j=c(24770),k=c(27690),l=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c},m=(0,f.forwardRef)(function(a,b){var c=a.chartRef,d=a.style,e=a.className,m=a.loading,n=a.loadingTemplate,o=a.errorTemplate,p=l(a,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),q=(0,h.Z)(g.Bar,p),r=q.chart,s=q.container;return(0,f.useEffect)(function(){(0,i.J)(c,r.current)},[r.current]),(0,f.useImperativeHandle)(b,function(){return{getChart:function(){return r.current}}}),f.createElement(j.Z,{errorTemplate:o},m&&f.createElement(k.Z,{loadingTemplate:n,theme:a.theme}),f.createElement("div",{className:e,style:void 0===d?{height:"inherit"}:d,ref:s}))});function n(a){var b=a.data,c=(0,f.useState)([]),g=c[0],h=c[1];return(0,f.useEffect)(function(){h(b.map(function(a){return{name:a.team.name,value:a.transaction.tortas}}))},[]),(0,e.jsx)(m,(0,d.Z)({style:{color:"red",height:"100%"}},{data:g,xField:"value",yField:"name",seriesField:"type"}))}},44307:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(41799),e=c(85893),f=c(67294),g=c(14516),h=c(59658),i=c(4322),j=c(24770),k=c(27690),l=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c},m=(0,f.forwardRef)(function(a,b){var c=a.chartRef,d=a.style,e=a.className,m=a.loading,n=a.loadingTemplate,o=a.errorTemplate,p=l(a,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),q=(0,h.Z)(g.Column,p),r=q.chart,s=q.container;return(0,f.useEffect)(function(){(0,i.J)(c,r.current)},[r.current]),(0,f.useImperativeHandle)(b,function(){return{getChart:function(){return r.current}}}),f.createElement(j.Z,{errorTemplate:o},m&&f.createElement(k.Z,{loadingTemplate:n,theme:a.theme}),f.createElement("div",{className:e,style:void 0===d?{height:"inherit"}:d,ref:s}))});function n(a){var b=a.data,c=(0,f.useState)([]),g=c[0],h=c[1];return(0,f.useEffect)(function(){h(b.map(function(a){return{name:a.team.name,value:a.transaction.balance}}))},[]),(0,e.jsx)(m,(0,d.Z)({},{data:g,xField:"name",yField:"value",columnWidthRatio:.8,xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{name:{alias:"Equipo"},value:{alias:"Ventas en MXN"}}}))}},8604:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(41799),e=c(85893),f=c(67294),g=c(14516),h=c(59658),i=c(4322),j=c(24770),k=c(27690),l=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c},m=(0,f.forwardRef)(function(a,b){var c=a.chartRef,d=a.style,e=a.className,m=a.loading,n=a.loadingTemplate,o=a.errorTemplate,p=l(a,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),q=(0,h.Z)(g.Pie,p),r=q.chart,s=q.container;return(0,f.useEffect)(function(){(0,i.J)(c,r.current)},[r.current]),(0,f.useImperativeHandle)(b,function(){return{getChart:function(){return r.current}}}),f.createElement(j.Z,{errorTemplate:o},m&&f.createElement(k.Z,{loadingTemplate:n,theme:a.theme}),f.createElement("div",{className:e,style:void 0===d?{height:"inherit"}:d,ref:s}))});function n(a){var b=a.data,c=(0,f.useState)([]),g=c[0],h=c[1];return(0,f.useEffect)(function(){h(b.map(function(a){return{name:a.team.name,value:a.transaction.presales}}))},[]),(0,e.jsx)(m,(0,d.Z)({},{appendPadding:10,data:g,angleField:"value",colorField:"name",radius:.9,label:{type:"inner",offset:"-30%",content:function(a){var b=a.percent;return"".concat((100*b).toFixed(0),"%")}},interactions:[{type:"element-active"},]}))}},69906:function(a,b,c){"use strict";c.d(b,{Z:function(){return t}});var d=c(85893),e=c(48869),f=c(55355),g=c(81644),h=c(42952),i=c(19944),j=c(84477),k=c(71577),l=c(99709),m=c(67294),n=c(11163);function o(a,b,c,d,e){return{key:b,icon:c,children:d,label:a,type:e}}var p=[o("Gr\xe1ficas","/admin",(0,d.jsx)(e.Z,{})),o("Organizaci\xf3n","/admin/crud",(0,d.jsx)(f.Z,{})),o("Transacciones","/admin/transactions",(0,d.jsx)(g.Z,{})),o("Configuraci\xf3n","/admin/settings",(0,d.jsx)(h.Z,{})),],q=function(a){var b=a.setCollapsed,c=a.collapsed,e=(0,n.useRouter)(),f=(0,m.useState)([""]),g=f[0],h=f[1];(0,m.useEffect)(function(){h([e.pathname])},[]);var o=function(){b(!c)},q=function(a){e.push(a.key)};return(0,d.jsxs)("div",{style:{width:"100%"},children:[(0,d.jsx)(k.Z,{type:"primary",onClick:o,style:{marginBottom:16},children:c?(0,d.jsx)(i.Z,{}):(0,d.jsx)(j.Z,{})}),(0,d.jsx)(l.Z,{selectedKeys:g,onClick:q,defaultSelectedKeys:g,mode:"inline",theme:"dark",inlineCollapsed:c,items:p})]})},r=c(92443),s=c(9292),t=function(a){var b=a.children,c=(0,m.useState)(!1),e=c[0],f=c[1],g=(0,s.Z)(),h=g.isAuth,i=g.logOut,j=(0,n.useRouter)().push,l=(0,m.useState)(!1),o=l[0],p=l[1];return((0,m.useEffect)(function(){console.log(h()),h()?p(!0):j("/account/auth/login")},[]),o)?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"layout-top-menu",children:(0,d.jsx)("div",{className:"layout-top-menu_logout",children:(0,d.jsx)(k.Z,{type:"ghost",onClick:function(){return i()},children:(0,d.jsx)(r.Z,{})})})}),(0,d.jsxs)("div",{className:"layout-flex-container",children:[(0,d.jsx)("div",{className:"layout-menu",children:(0,d.jsx)(q,{collapsed:e,setCollapsed:f})}),(0,d.jsx)("div",{className:"layout-children ".concat(e?"layout-children-1":"layout-children-2"),children:b})]})]}):null}},11200:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s}});var d=c(85893),e=c(16536),f=c(71230),g=c(15746),h=c(59652),i=c(11382),j=c(9669),k=c.n(j),l=c(67294),m=c(38498),n=c(51407),o=c(44307),p=c(8604),q=c(69906),r=c(9292);function s(){var a=(0,l.useState)(),b=a[0],c=a[1],j=(0,r.Z)().getToken;return(0,l.useEffect)(function(){var a,b;a=j(),b={method:"GET",url:"".concat(m.H,"/transactions/teams"),headers:{"x-token":"".concat(a)}},k().request(b).then(function(a){a.data&&c(a.data)}).catch(function(a){e.ZP.error("Error al extraer los datos"),console.log(a)})},[]),(0,d.jsx)("div",{className:"admin",children:(0,d.jsx)(q.Z,{children:(0,d.jsxs)(f.Z,{gutter:[16,16],children:[(0,d.jsx)(g.Z,{md:24,lg:24,children:(0,d.jsx)(h.Z,{title:"Ventas totales",children:(0,d.jsx)("a",{href:"/admin/charts/sales",children:b?(0,d.jsx)(o.Z,{data:b}):(0,d.jsx)(i.Z,{size:"large"})})})}),(0,d.jsx)(g.Z,{md:24,lg:12,children:(0,d.jsx)(h.Z,{title:"Tortas Vendidas",children:(0,d.jsx)("a",{href:"/admin/charts/sales-1",children:b?(0,d.jsx)(n.Z,{data:b}):(0,d.jsx)(i.Z,{size:"large"})})})}),(0,d.jsx)(g.Z,{md:24,lg:12,children:(0,d.jsx)(h.Z,{title:"Combos vendidos",children:(0,d.jsx)("a",{href:"/admin/charts/sales-2",children:b?(0,d.jsx)(p.Z,{data:b}):(0,d.jsx)(i.Z,{size:"large"})})})})]})})})}}},function(a){a.O(0,[402,549,481,854,652,537,696,744,774,888,179],function(){var b;return a(a.s=64830)}),_N_E=a.O()}])