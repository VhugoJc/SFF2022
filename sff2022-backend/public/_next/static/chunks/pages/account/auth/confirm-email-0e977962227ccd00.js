(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{2993:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/auth/confirm-email",function(){return c(2630)}])},2630:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}c.r(b),c.d(b,{default:function(){return n}});var e=c(1351),f=c(4051),g=c.n(f),h=c(5893),i=c(3859),j=c(9669),k=c.n(j),l=c(1163),m=c(7294);function n(a){var a=null!==a?a:(0,e.Z)(TypeError("Cannot destructure undefined")),b=(0,l.useRouter)().query,c=(0,m.useState)("checking"),f=c[0],j=c[1];return(0,m.useEffect)(function(){var a,c,e=""===location.port?location.protocol+"//"+location.host:"http://"+location.hostname+":5000",f=(c=(a=g().mark(function a(){var c;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:c={method:"PUT",url:"".concat(e,"/api/auth/confirm-email"),data:{token:b.token}},k().request(c).then(function(a){var b;return(null===(b=a.data)|| void 0===b?void 0:b.err)?j("fail"):j("success")}).catch(function(a){return j("fail")});case 2:case"end":return a.stop()}},a)}),function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}),function(){return c.apply(this,arguments)});b&&b.token?f():j("fail")},[b]),(0,h.jsx)("div",{children:"success"===f?(0,h.jsx)(i.ZP,{status:"success",title:"Su correo se ha confirmado exitosamente",subTitle:"Por favor rergrese a la aplicaci[on e inicie sesi\xf3n"}):"fail"===f?(0,h.jsx)(i.ZP,{status:"error",title:"Al parecer ocurri\xf3 un error",subTitle:"Compruebe si puede ingresar a su cuenta. De no poder ingresar por favor reportelo a un administrador"}):null})}}},function(a){a.O(0,[118,810,774,888,179],function(){var b;return a(a.s=2993)}),_N_E=a.O()}])