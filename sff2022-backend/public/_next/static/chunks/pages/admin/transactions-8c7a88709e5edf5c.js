(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{40378:function(a,b,c){"use strict";var d=c(80779);b.Z=d.Z},29932:function(a){a.exports=function(a,b){for(var c=-1,d=null==a?0:a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e}},48983:function(a,b,c){var d=c(40371)("length");a.exports=d},44286:function(a){a.exports=function(a){return a.split("")}},40371:function(a){a.exports=function(a){return function(b){return null==b?void 0:b[a]}}},18190:function(a){var b=Math.floor;a.exports=function(a,c){var d="";if(!a||c<1||c>9007199254740991)return d;do c%2&&(d+=a),(c=b(c/2))&&(a+=a);while(c);return d}},14259:function(a){a.exports=function(a,b,c){var d=-1,e=a.length;b<0&&(b=-b>e?0:e+b),(c=c>e?e:c)<0&&(c+=e),e=b>c?0:c-b>>>0,b>>>=0;for(var f=Array(e);++d<e;)f[d]=a[d+b];return f}},80531:function(a,b,c){var d=c(62705),e=c(29932),f=c(1469),g=c(33448),h=1/0,i=d?d.prototype:void 0,j=i?i.toString:void 0;function k(a){if("string"==typeof a)return a;if(f(a))return e(a,k)+"";if(g(a))return j?j.call(a):"";var b=a+"";return"0"==b&&1/a== -h?"-0":b}a.exports=k},40180:function(a,b,c){var d=c(14259);a.exports=function(a,b,c){var e=a.length;return c=void 0===c?e:c,!b&&c>=e?a:d(a,b,c)}},78302:function(a,b,c){var d=c(18190),e=c(80531),f=c(40180),g=c(62689),h=c(88016),i=c(83140),j=Math.ceil;a.exports=function(a,b){var c=(b=void 0===b?" ":e(b)).length;if(c<2)return c?d(b,a):b;var k=d(b,j(a/h(b)));return g(b)?f(i(k),0,a).join(""):k.slice(0,a)}},62689:function(a){var b=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");a.exports=function(a){return b.test(a)}},88016:function(a,b,c){var d=c(48983),e=c(62689),f=c(21903);a.exports=function(a){return e(a)?f(a):d(a)}},83140:function(a,b,c){var d=c(44286),e=c(62689),f=c(676);a.exports=function(a){return e(a)?f(a):d(a)}},21903:function(a){var b="\ud800-\udfff",c="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",d="\ud83c[\udffb-\udfff]",e="[^"+b+"]",f="(?:\ud83c[\udde6-\uddff]){2}",g="[\ud800-\udbff][\udc00-\udfff]",h="(?:"+c+"|"+d+")?",i="[\\ufe0e\\ufe0f]?",j="(?:\\u200d(?:"+[e,f,g].join("|")+")"+i+h+")*",k="(?:"+[e+c+"?",c,f,g,"["+b+"]"].join("|")+")",l=RegExp(d+"(?="+d+")|"+k+(i+h+j),"g");a.exports=function(a){for(var b=l.lastIndex=0;l.test(a);)++b;return b}},676:function(a){var b="\ud800-\udfff",c="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",d="\ud83c[\udffb-\udfff]",e="[^"+b+"]",f="(?:\ud83c[\udde6-\uddff]){2}",g="[\ud800-\udbff][\udc00-\udfff]",h="(?:"+c+"|"+d+")?",i="[\\ufe0e\\ufe0f]?",j="(?:\\u200d(?:"+[e,f,g].join("|")+")"+i+h+")*",k="(?:"+[e+c+"?",c,f,g,"["+b+"]"].join("|")+")",l=RegExp(d+"(?="+d+")|"+k+(i+h+j),"g");a.exports=function(a){return a.match(l)||[]}},11726:function(a,b,c){var d=c(78302),e=c(88016),f=c(40554),g=c(79833);a.exports=function(a,b,c){a=g(a);var h=(b=f(b))?e(a):0;return b&&h<b?a+d(b-h,c):a}},32475:function(a,b,c){var d=c(78302),e=c(88016),f=c(40554),g=c(79833);a.exports=function(a,b,c){a=g(a);var h=(b=f(b))?e(a):0;return b&&h<b?d(b-h,c)+a:a}},18601:function(a,b,c){var d=c(14841),e=1/0;a.exports=function(a){return a?(a=d(a))===e||a=== -e?(a<0?-1:1)*17976931348623157e292:a==a?a:0:0===a?a:0}},40554:function(a,b,c){var d=c(18601);a.exports=function(a){var b=d(a),c=b%1;return b==b?c?b-c:b:0}},79833:function(a,b,c){var d=c(80531);a.exports=function(a){return null==a?"":d(a)}},63241:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/transactions",function(){return c(98486)}])},9292:function(a,b,c){"use strict";var d=c(67294),e=c(18333),f=function(){return(0,d.useContext)(e.Z)};b.Z=f},69906:function(a,b,c){"use strict";c.d(b,{Z:function(){return t}});var d=c(85893),e=c(48869),f=c(55355),g=c(81644),h=c(42952),i=c(19944),j=c(84477),k=c(71577),l=c(99709),m=c(67294),n=c(11163);function o(a,b,c,d,e){return{key:b,icon:c,children:d,label:a,type:e}}var p=[o("Gr\xe1ficas","/admin",(0,d.jsx)(e.Z,{})),o("Organizaci\xf3n","/admin/crud",(0,d.jsx)(f.Z,{})),o("Transacciones","/admin/transactions",(0,d.jsx)(g.Z,{})),o("Configuraci\xf3n","/admin/settings",(0,d.jsx)(h.Z,{})),],q=function(a){var b=a.setCollapsed,c=a.collapsed,e=(0,n.useRouter)(),f=(0,m.useState)([""]),g=f[0],h=f[1];(0,m.useEffect)(function(){h([e.pathname])},[]);var o=function(){b(!c)},q=function(a){e.push(a.key)};return(0,d.jsxs)("div",{style:{width:"100%"},children:[(0,d.jsx)(k.Z,{type:"primary",onClick:o,style:{marginBottom:16},children:c?(0,d.jsx)(i.Z,{}):(0,d.jsx)(j.Z,{})}),(0,d.jsx)(l.Z,{selectedKeys:g,onClick:q,defaultSelectedKeys:g,mode:"inline",theme:"dark",inlineCollapsed:c,items:p})]})},r=c(92443),s=c(9292),t=function(a){var b=a.children,c=(0,m.useState)(!1),e=c[0],f=c[1],g=(0,s.Z)(),h=g.isAuth,i=g.logOut,j=(0,n.useRouter)().push,l=(0,m.useState)(!1),o=l[0],p=l[1];return((0,m.useEffect)(function(){console.log(h()),h()?p(!0):j("/account/auth/login")},[]),o)?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"layout-top-menu",children:(0,d.jsx)("div",{className:"layout-top-menu_logout",children:(0,d.jsx)(k.Z,{type:"ghost",onClick:function(){return i()},children:(0,d.jsx)(r.Z,{})})})}),(0,d.jsxs)("div",{className:"layout-flex-container",children:[(0,d.jsx)("div",{className:"layout-menu",children:(0,d.jsx)(q,{collapsed:e,setCollapsed:f})}),(0,d.jsx)("div",{className:"layout-children ".concat(e?"layout-children-1":"layout-children-2"),children:b})]})]}):null}},98486:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return S}});var d=c(51351),e=c(85893),f=c(16536),g=c(59652),h=c(71230),i=c(15746),j=c(87462),k=c(15671),l=c(43144),m=c(32531),n=c(73568),o=c(67294),p=c(96159),q=c(4942),r=c(94184),s=c.n(r),t=c(53124),u=c(26303),v=c(11726),w=c.n(v),x=function(a){var b,c=a.value,d=a.formatter,e=a.precision,f=a.decimalSeparator,g=a.groupSeparator,h=a.prefixCls;if("function"==typeof d)b=d(c);else{var i=String(c),j=i.match(/^(-?)(\d*)(\.(\d+))?$/);if(j&&"-"!==i){var k=j[1],l=j[2]||"0",m=j[4]||"";l=l.replace(/\B(?=(\d{3})+(?!\d))/g,void 0===g?"":g),"number"==typeof e&&(m=w()(m,e,"0").slice(0,e>0?e:0)),m&&(m="".concat(f).concat(m)),b=[o.createElement("span",{key:"int",className:"".concat(h,"-content-value-int")},k,l),m&&o.createElement("span",{key:"decimal",className:"".concat(h,"-content-value-decimal")},m)]}else b=i}return o.createElement("span",{className:"".concat(h,"-content-value")},b)},y=x,z=function(a){var b=a.prefixCls,c=a.className,d=a.style,e=a.valueStyle,f=a.value,g=a.title,h=a.valueRender,i=a.prefix,k=a.suffix,l=a.loading,m=a.direction,n=a.onMouseEnter,p=a.onMouseLeave,r=o.createElement(y,(0,j.Z)({},a,{value:void 0===f?0:f})),t=s()(b,(0,q.Z)({},"".concat(b,"-rtl"),"rtl"===m),c);return o.createElement("div",{className:t,style:d,onMouseEnter:n,onMouseLeave:p},g&&o.createElement("div",{className:"".concat(b,"-title")},g),o.createElement(u.Z,{paragraph:!1,loading:l,className:"".concat(b,"-skeleton")},o.createElement("div",{style:e,className:"".concat(b,"-content")},i&&o.createElement("span",{className:"".concat(b,"-content-prefix")},i),h?h(r):r,k&&o.createElement("span",{className:"".concat(b,"-content-suffix")},k))))};z.defaultProps={decimalSeparator:".",groupSeparator:",",loading:!1};var A=(0,t.PG)({prefixCls:"statistic"})(z),B=A,C=c(97685),D=c(32475),E=c.n(D),F=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]],G=1e3/30;function H(a){return new Date(a).getTime()}var I=function(a){(0,m.Z)(c,a);var b=(0,n.Z)(c);function c(){var a;return(0,k.Z)(this,c),a=b.apply(this,arguments),a.syncTimer=function(){H(a.props.value)>=Date.now()?a.startTimer():a.stopTimer()},a.startTimer=function(){if(!a.countdownId){var b=a.props,c=b.onChange,d=H(b.value);a.countdownId=window.setInterval(function(){a.forceUpdate(),c&&d>Date.now()&&c(d-Date.now())},G)}},a.stopTimer=function(){var b=a.props,c=b.onFinish,d=b.value;if(a.countdownId){clearInterval(a.countdownId),a.countdownId=void 0;var e=H(d);c&&e<Date.now()&&c()}},a.formatCountdown=function(b,c){var d,e,f,g,h,i,k,l,m,n,o,p,q,r=a.props.format;return d=b,f=(e=(0,j.Z)((0,j.Z)({},c),{format:r})).format,g=new Date(d).getTime(),h=Date.now(),i=Math.max(g-h,0),k=void 0===f?"":f,l=i,m=/\[[^\]]*]/g,n=(k.match(m)||[]).map(function(a){return a.slice(1,-1)}),o=k.replace(m,"[]"),p=F.reduce(function(a,b){var c=(0,C.Z)(b,2),d=c[0],e=c[1];if(-1!==a.indexOf(d)){var f=Math.floor(l/e);return l-=f*e,a.replace(RegExp("".concat(d,"+"),"g"),function(a){var b=a.length;return E()(f.toString(),b,"0")})}return a},o),q=0,p.replace(m,function(){var a=n[q];return q+=1,a})},a.valueRender=function(a){return(0,p.Tm)(a,{title:void 0})},a}return(0,l.Z)(c,[{key:"componentDidMount",value:function(){this.syncTimer()}},{key:"componentDidUpdate",value:function(){this.syncTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return o.createElement(B,(0,j.Z)({valueRender:this.valueRender},this.props,{formatter:this.formatCountdown}))}}]),c}(o.Component);I.defaultProps={format:"HH:mm:ss"},B.Countdown=I;var J=B,K=c(9669),L=c.n(K),M=c(38498),N=c(69906),O=c(38753),P=c(9292),Q=[{title:"id",dataIndex:"_id",key:"_id",render:function(a){return(0,e.jsx)("a",{children:a.toString().slice(0,8)})}},{title:"Comprador",dataIndex:"usr",key:"name",render:function(a){return(0,e.jsx)("p",{children:(null==a?void 0:a.name)+" "+(null==a?void 0:a.lastname)})}},{title:"Total",dataIndex:"sale",key:"amount",render:function(a){return(0,e.jsxs)("p",{children:["$",((null==a?void 0:a.cost)*(null==a?void 0:a.amount)).toFixed(2)]})}},{title:"Equipo",dataIndex:["team","name"],key:"team"},{title:"Vendedor",dataIndex:"seller",key:"seller",render:function(a){return(0,e.jsx)("p",{children:(null==a?void 0:a.name)+" "+(null==a?void 0:a.lastname)})}},{title:"Fecha",dataIndex:["sale","saleDate"],key:"date",render:function(a){return(0,e.jsx)("p",{children:new Date(null==a?void 0:a.toString()).toLocaleString("es-MX")})}},],R=function(a){var a=null!==a?a:(0,d.Z)(TypeError("Cannot destructure undefined")),b=(0,P.Z)().getToken,c=(0,o.useState)([]),g=c[0],h=c[1],i=(0,o.useState)({current:1,pageSize:5}),j=i[0],k=i[1];return(0,o.useEffect)(function(){var a,c;a=b(),c={method:"GET",url:"".concat(M.H,"/transactions/all"),headers:{"x-token":"".concat(a)}},L().request(c).then(function(a){(null==a?void 0:a.data)&&(a.data.reverse(),h(a.data))}).catch(function(a){f.ZP.error("Error recuperando las transacciones"),console.log(a)})},[]),(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("p",{children:"Transacciones"}),(0,e.jsx)(O.Z,{onChange:function(a){return k(a)},rowKey:"_id",pagination:j,columns:Q,dataSource:g}),";"]}),(0,e.jsx)("div",{})]})},S=function(a){var a=null!==a?a:(0,d.Z)(TypeError("Cannot destructure undefined")),b=(0,P.Z)().getToken,c=(0,o.useState)({users:0,tortas:0,sales:0,balance:0}),j=c[0],k=c[1];return(0,o.useEffect)(function(){var a,c;a=b(),c={method:"GET",url:"".concat(M.H,"/transactions"),headers:{"x-token":"".concat(a)}},L().request(c).then(function(a){a.data&&k(a.data)}).catch(function(a){f.ZP.error("Error al recolectar los datos de la transaccion"),console.log(a)})},[]),(0,e.jsx)(N.Z,{children:(0,e.jsx)(g.Z,{className:"crud-container",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)(h.Z,{gutter:24,children:[(0,e.jsx)(i.Z,{lg:6,children:(0,e.jsx)(J,{title:"Usuarios activos ",value:j.users})}),(0,e.jsx)(i.Z,{lg:6,children:(0,e.jsx)(J,{title:"Tortas vendidas",value:j.tortas})}),(0,e.jsx)(i.Z,{lg:6,children:(0,e.jsx)(J,{title:"Combos vendidos",value:j.sales})}),(0,e.jsx)(i.Z,{lg:6,children:(0,e.jsx)(J,{prefix:"$",title:"Balance actual (MXN)",value:j.balance,precision:2})})]}),(0,e.jsx)(h.Z,{gutter:24,children:(0,e.jsx)(i.Z,{span:24,children:(0,e.jsx)(R,{})})})]})})})}},27678:function(a,b,c){"use strict";c.d(b,{g1:function(){return g},os:function(){return h}});var d=/margin|padding|width|height|max|min|offset/,e={cssFloat:1,styleFloat:1,float:1};function f(a,b,c){var g,h=arguments.length;if(b=e[b]?"cssFloat"in a.style?"cssFloat":"styleFloat":b,3===h)return"number"==typeof c&&d.test(b)&&(c="".concat(c,"px")),a.style[b]=c,c;for(var i in b)b.hasOwnProperty(i)&&f(a,i,b[i]);return g=a,1===g.nodeType?g.ownerDocument.defaultView.getComputedStyle(g,null):{}}function g(){var a;return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function h(a){var b=a.getBoundingClientRect(),c=document.documentElement;return{left:b.left+(window.pageXOffset||c.scrollLeft)-(c.clientLeft||document.body.clientLeft||0),top:b.top+(window.pageYOffset||c.scrollTop)-(c.clientTop||document.body.clientTop||0)}}},74204:function(a,b,c){"use strict";var d;function e(a){if("undefined"==typeof document)return 0;if(a|| void 0===d){var b=document.createElement("div");b.style.width="100%",b.style.height="200px";var c=document.createElement("div"),e=c.style;e.position="absolute",e.top="0",e.left="0",e.pointerEvents="none",e.visibility="hidden",e.width="200px",e.height="150px",e.overflow="hidden",c.appendChild(b),document.body.appendChild(c);var f=b.offsetWidth;c.style.overflow="scroll";var g=b.offsetWidth;f===g&&(g=c.clientWidth),document.body.removeChild(c),d=f-g}return d}function f(a){var b=a.match(/^(.*)px$/),c=Number(null==b?void 0:b[1]);return Number.isNaN(c)?e():c}function g(a){if("undefined"==typeof document||!a||!(a instanceof Element))return{width:0,height:0};var b=getComputedStyle(a,"::-webkit-scrollbar"),c=b.width,d=b.height;return{width:f(c),height:f(d)}}c.d(b,{Z:function(){return e},o:function(){return g}})}},function(a){a.O(0,[402,549,481,854,652,537,696,748,736,753,774,888,179],function(){var b;return a(a.s=63241)}),_N_E=a.O()}])