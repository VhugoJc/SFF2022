(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{54860:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud",function(){return c(17665)}])},9292:function(a,b,c){"use strict";var d=c(67294),e=c(18333),f=function(){return(0,d.useContext)(e.Z)};b.Z=f},69906:function(a,b,c){"use strict";c.d(b,{Z:function(){return t}});var d=c(85893),e=c(48869),f=c(55355),g=c(81644),h=c(42952),i=c(19944),j=c(84477),k=c(71577),l=c(99709),m=c(67294),n=c(11163);function o(a,b,c,d,e){return{key:b,icon:c,children:d,label:a,type:e}}var p=[o("Gr\xe1ficas","/admin",(0,d.jsx)(e.Z,{})),o("Organizaci\xf3n","/admin/crud",(0,d.jsx)(f.Z,{})),o("Transacciones","/admin/transactions",(0,d.jsx)(g.Z,{})),o("Configuraci\xf3n","/admin/settings",(0,d.jsx)(h.Z,{})),],q=function(a){var b=a.setCollapsed,c=a.collapsed,e=(0,n.useRouter)(),f=(0,m.useState)([""]),g=f[0],h=f[1];(0,m.useEffect)(function(){h([e.pathname])},[]);var o=function(){b(!c)},q=function(a){e.push(a.key)};return(0,d.jsxs)("div",{style:{width:"100%"},children:[(0,d.jsx)(k.Z,{type:"primary",onClick:o,style:{marginBottom:16},children:c?(0,d.jsx)(i.Z,{}):(0,d.jsx)(j.Z,{})}),(0,d.jsx)(l.Z,{selectedKeys:g,onClick:q,defaultSelectedKeys:g,mode:"inline",theme:"dark",inlineCollapsed:c,items:p})]})},r=c(92443),s=c(9292),t=function(a){var b=a.children,c=(0,m.useState)(!1),e=c[0],f=c[1],g=(0,s.Z)(),h=g.isAuth,i=g.logOut,j=(0,n.useRouter)().push,l=(0,m.useState)(!1),o=l[0],p=l[1];return((0,m.useEffect)(function(){console.log(h()),h()?p(!0):j("/account/auth/login")},[]),o)?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"layout-top-menu",children:(0,d.jsx)("div",{className:"layout-top-menu_logout",children:(0,d.jsx)(k.Z,{type:"ghost",onClick:function(){return i()},children:(0,d.jsx)(r.Z,{})})})}),(0,d.jsxs)("div",{className:"layout-flex-container",children:[(0,d.jsx)("div",{className:"layout-menu",children:(0,d.jsx)(q,{collapsed:e,setCollapsed:f})}),(0,d.jsx)("div",{className:"layout-children ".concat(e?"layout-children-1":"layout-children-2"),children:b})]})]}):null}},17665:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return U}});var d=c(85893),e=c(59652),f=c(76750),g=c(67294),h=c(69906),i=c(51351),j=c(16536),k=c(71577),l=c(95507),m=c(24969),n=c(14538),o=function(a){var b=a.isModalOpen,c=a.setIsModalOpen,e=a.title,f=a.children,g=function(){c(!1)};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.Z,{title:e,visible:b,onCancel:g,footer:null,children:f})})},p=c(47568),q=c(41799),r=c(69396),s=c(99534),t=c(70603),u=c(34051),v=c.n(u),w=c(3089),x=c(93940),y=c(57736),z=c(26713),A=c(9669),B=c.n(A),C=c(38498),D=c(9292),E=function(a){var b,c=a.setrefresh,e=a.setIsModalOpen,f=a.teamData,h=a.isUpdate,i=(0,D.Z)().getToken,l=(0,t.Z)(x.Z.useForm(),1)[0];(0,g.useEffect)(function(){l.setFieldsValue(f)},[f]);var n=(b=(0,p.Z)(v().mark(function a(b){var d,g,k,m,n,o,p,q,r,s,t;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:d=b.name,g=b.description,k=b.imgs,m=b.tiktok,n=b.whatsapp,o=b.facebook,p=b.instagram,q=b.logo,r=i(),s={name:d,description:g,imgs:k,_id:null==f?void 0:f._id,logo:q,socialMedia:{tiktok:m,whatsapp:n,facebook:o,instagram:p}},t={method:"",url:"".concat(C.H,"/dashboard/team"),headers:{"x-token":"".concat(r)},data:s},h?(t.method="PUT",B().request(t).then(function(a){l.resetFields(),j.ZP.success("Equipo actualizado exitosamente"),c(!0),e(!1)}).catch(function(a){console.log(a),j.ZP.error("Error al actualizar el equipo")})):(t.method="POST",B().request(t).then(function(a){l.resetFields(),j.ZP.success("Equipo creado exitosamente"),c(!0),e(!1)}).catch(function(a){console.log(a),j.ZP.error("Error al crear el equipo")}));case 5:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)});return(0,d.jsxs)(x.Z,{form:l,onFinish:n,children:[(0,d.jsx)(x.Z.Item,{name:"name",rules:[{required:!0,message:"El nombre es obligatorio!"},{min:4,message:"El nombre es obligatorio!"}],children:(0,d.jsx)(y.Z,{placeholder:"Nombre del equipo"})}),(0,d.jsx)(x.Z.Item,{name:"description",children:(0,d.jsx)(y.Z.TextArea,{placeholder:"Descripci\xf3n"})}),(0,d.jsx)(x.Z.Item,{name:"logo",rules:[{required:!0,type:"url",message:"La url no es v\xe1lida"}],children:(0,d.jsx)(y.Z,{placeholder:"Url del logo"})}),"Imagenes:",(0,d.jsx)(x.Z.List,{name:"imgs",children:function(a,b){var c=b.add,e=b.remove;return(0,d.jsxs)(d.Fragment,{children:[a.map(function(a){var b=a.key,c=a.name,f=(0,s.Z)(a,["key","name"]);return(0,d.jsxs)(z.Z,{style:{display:"flex",marginBottom:8},align:"baseline",children:[(0,d.jsx)(x.Z.Item,(0,r.Z)((0,q.Z)({style:{width:"100%"}},f),{name:[c],rules:[{type:"url",message:"La url no es v\xe1lida"}],children:(0,d.jsx)(y.Z,{className:"ant-input",placeholder:"Url de imagen"})})),(0,d.jsx)(w.Z,{onClick:function(){return e(c)}})]},b)}),(0,d.jsx)(x.Z.Item,{children:(0,d.jsx)(k.Z,{type:"dashed",onClick:function(){return a.length<6?c():null},block:!0,icon:(0,d.jsx)(m.Z,{}),children:"Agregar Url"})})]})}}),"Redes sociales:",(0,d.jsx)(x.Z.Item,{name:"tiktok",rules:[{type:"url",message:"La url no es v\xe1lida"}],children:(0,d.jsx)(y.Z,{placeholder:"Url Tiktok"})}),(0,d.jsx)(x.Z.Item,{name:"whatsapp",rules:[{type:"url",message:"La url no es v\xe1lida"}],children:(0,d.jsx)(y.Z,{placeholder:"Url Whatsapp"})}),(0,d.jsx)(x.Z.Item,{name:"facebook",rules:[{type:"url",message:"La url no es v\xe1lida"}],children:(0,d.jsx)(y.Z,{placeholder:"Url Facebook"})}),(0,d.jsx)(x.Z.Item,{name:"instagram",rules:[{type:"url",message:"La url no es v\xe1lida"}],children:(0,d.jsx)(y.Z,{placeholder:"Url Instagram"})}),"            ",(0,d.jsx)(x.Z.Item,{children:(0,d.jsx)(k.Z,{type:"primary",htmlType:"submit",children:h?"Actualizar":"Crear"})})]})},F=function(a){var a=null!==a?a:(0,i.Z)(TypeError("Cannot destructure undefined")),b=(0,g.useState)(!1),c=b[0],e=b[1],f=(0,g.useState)([]),h=f[0],n=f[1],p=(0,g.useState)(!0),q=p[0],r=p[1],s=(0,g.useState)(null),t=s[0],u=s[1],v=(0,g.useState)(!1),w=v[0],x=v[1],y=(0,D.Z)().getToken;(0,g.useEffect)(function(){var a=y(),b={method:"GET",url:"".concat(C.H,"/dashboard/team"),headers:{"x-token":"".concat(a)}};B().request(b).then(function(a){n(a.data)}).catch(function(a){console.log(a),j.ZP.error("Error al obtener los equipos")}),r(!1)},[q]);var z=function(){u({name:"",imgs:[],description:"",facebook:"",whatsapp:"",tiktok:"",instagram:"",logo:""}),e(!0),x(!1)},A=function(a){console.log(a),u({_id:null==a?void 0:a._id,name:null==a?void 0:a.name,imgs:null==a?void 0:a.imgs,description:null==a?void 0:a.description,facebook:null==a?void 0:a.socialMedia.facebook,whatsapp:null==a?void 0:a.socialMedia.whatsapp,tiktok:null==a?void 0:a.socialMedia.tiktok,instagram:null==a?void 0:a.socialMedia.instagram,logo:null==a?void 0:a.logo}),e(!0),x(!0)};return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{width:"100%",height:"100px"},children:(0,d.jsxs)(k.Z,{onClick:function(){return z()},style:{float:"right"},type:"primary",children:[(0,d.jsx)(m.Z,{})," Agregar Equipos"]})}),(0,d.jsx)("div",{children:(0,d.jsx)(l.ZP,{itemLayout:"vertical",size:"large",pagination:{onChange:function(a){},pageSize:3},dataSource:h,renderItem:function(a){return(0,d.jsx)("a",{onClick:function(){return A(a)},children:(0,d.jsxs)(l.ZP.Item,{extra:(0,d.jsx)("img",{width:272,alt:"logo",src:(null==a?void 0:a.logo)?null==a?void 0:a.logo:"https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"}),children:[(0,d.jsx)(l.ZP.Item.Meta,{title:(0,d.jsx)("p",{children:a.name}),description:Object.keys(a.socialMedia).map(function(b,c){if(a.socialMedia[b])return(0,d.jsxs)("span",{children:[a.socialMedia[b]," "]},b)})}),a.description]},a.name)})}})}),(0,d.jsx)(o,{title:w?"Editar "+(null==t?void 0:t.name):"Nuevo Equipo",isModalOpen:c,setIsModalOpen:e,children:(0,d.jsx)(E,{teamData:t,setrefresh:r,setIsModalOpen:e,isUpdate:w})})]})},G=c(68795),H=c(86548),I=c(38753),J=c(37763),K=c.n(J),L=c(21369),M=c(79915),N=c(71230),O=c(15746),P=c(14104),Q=function(a){var b=a.setrefresh,c=a.setIsModalOpen,e=a.foodDataForm,f=a.isUpdate,h=(0,t.Z)(x.Z.useForm(),1)[0],i=(0,g.useState)([]),l=i[0],n=i[1],o=(0,D.Z)().getToken;(0,g.useEffect)(function(){h.setFieldsValue(e)},[e]),(0,g.useEffect)(function(){var a=o(),b={method:"GET",url:"".concat(C.H,"/dashboard/team"),headers:{"x-token":"".concat(a)}};B().request(b).then(function(a){n(a.data)})},[]);var p=function(a){var d=o(),g={method:"",url:"".concat(C.H,"/dashboard/presale"),headers:{"x-token":"".concat(d)},data:a};f?(g.method="PUT",g.data._id=null==e?void 0:e._id,B().request(g).then(function(a){j.ZP.success("Combo actualizado exitosamente"),h.resetFields(),b(!0),c(!1)}).catch(function(a){console.log(a),j.ZP.error("Error actualizando combo")})):(g.method="POST",B().request(g).then(function(a){j.ZP.success("Combo creado exitosamente"),h.resetFields(),b(!0),c(!1)}).catch(function(a){console.log(a),j.ZP.error("Error creando combo")}))};return(0,d.jsxs)(x.Z,{form:h,onFinish:p,children:["Equipo",(0,d.jsx)(x.Z.Item,{name:"sellerId",hasFeedback:!0,rules:[{required:!0,message:"Ell equipo es obligatorio"}],children:(0,d.jsx)(L.Z,{options:l.map(function(a){return{id:a._id,label:a.name,value:a._id}})})}),(0,d.jsx)(x.Z.Item,{name:"name",rules:[{required:!0,message:"El nombre es obligatorio!"},{min:2,message:"El nombre es obligatorio!"}],children:(0,d.jsx)(y.Z,{placeholder:"Nombre"})}),(0,d.jsx)(x.Z.Item,{name:"cost",rules:[{required:!0,message:"El costo es obligatorio!"},function(){return{validator:function(a,b){return!b||b>=0?Promise.resolve():Promise.reject(Error("El costo no es correcto"))}}},],children:(0,d.jsx)(M.Z,{step:"0.50",style:{width:"100%"},prefix:"$",addonAfter:"MXN",placeholder:"Costo"})}),(0,d.jsx)(x.Z.Item,{name:"coverImg",rules:[{type:"url",message:"El formato no es una URL"},{required:!0,message:"La portada es obligatoria!"}],children:(0,d.jsx)(y.Z,{type:"url",placeholder:"URL imagen Portada"})}),(0,d.jsx)(x.Z.Item,{name:"tortas",rules:[{required:!0,message:"La cantidad de tortas es obligatori!"},function(){return{validator:function(a,b){return!b||b>=0?Promise.resolve():Promise.reject(Error("La cantidad no es correcta"))}}},],children:(0,d.jsx)(M.Z,{addonAfter:"Tortas",style:{width:"100%"},placeholder:"Cantidad de tortas"})}),(0,d.jsx)(x.Z.Item,{name:"description",children:(0,d.jsx)(P.Z,{placeholder:"Descripci\xf3n"})}),"Productos:",(0,d.jsx)(x.Z.List,{name:"products",children:function(a,b){var c=b.add,e=b.remove;return(0,d.jsxs)(d.Fragment,{children:[a.map(function(a){var b=a.key,c=a.name,f=(0,s.Z)(a,["key","name"]);return(0,d.jsxs)("div",{style:{display:"flex",marginBottom:"2rem",flexDirection:"row"},children:[(0,d.jsx)("div",{style:{flex:"auto"},children:(0,d.jsxs)(N.Z,{gutter:[18,0],children:[(0,d.jsx)(O.Z,{lg:12,children:(0,d.jsx)(x.Z.Item,(0,r.Z)((0,q.Z)({name:[c,"name"],rules:[{required:!0,message:"El nombre es obligatorio!"}]},f),{children:(0,d.jsx)(y.Z,{placeholder:"Nombre"})}))}),(0,d.jsx)(O.Z,{lg:12,children:(0,d.jsx)(x.Z.Item,{name:[c,"img"],rules:[{type:"url",message:"El formato es incorrecto"}],children:(0,d.jsx)(y.Z,{placeholder:"Url de la imagen"})})}),(0,d.jsx)(O.Z,{lg:24,children:(0,d.jsx)(x.Z.Item,{name:[c,"description"],children:(0,d.jsx)(P.Z,{placeholder:"Descripci\xf3n"})})})]})}),(0,d.jsx)("div",{style:{width:"5rem",textAlign:"center",paddingTop:"2rem"},children:(0,d.jsx)(w.Z,{onClick:function(){return e(c)}})})]},b)}),(0,d.jsx)(x.Z.Item,{children:(0,d.jsx)(k.Z,{type:"dashed",onClick:function(){return a.length<7?c():null},block:!0,icon:(0,d.jsx)(m.Z,{}),children:"Agregar producto"})}),(0,d.jsx)(k.Z,{type:"primary",htmlType:"submit",children:f?"Actualizar":" Crear combo"})]})}})]})},R=function(){var a=(0,D.Z)().getToken,b=(0,g.useState)(!1),c=b[0],e=b[1],f=(0,g.useState)(!0),h=f[0],i=f[1],j=(0,g.useState)(!1),l=j[0],n=j[1],p=(0,g.useState)(""),r=p[0],s=p[1],t=(0,g.useState)(""),u=t[0],v=t[1],w=(0,g.useRef)(null),x=(0,g.useState)([]),A=x[0],E=x[1],F=(0,g.useState)(),J=F[0],L=F[1],M=(0,g.useState)([]),N=M[0],O=M[1];(0,g.useEffect)(function(){var b=a(),c={method:"GET",url:"".concat(C.H,"/dashboard/presale"),headers:{"x-token":"".concat(b)}};B().request(c).then(function(a){E(a.data)}),i(!1)},[h]),(0,g.useEffect)(function(){var b=a(),c={method:"GET",url:"".concat(C.H,"/dashboard/team"),headers:{"x-token":"".concat(b)}};B().request(c).then(function(a){O(a.data)})},[]);var P,R=function(a,b,c){b(),s(a[0]),v(c)},S=function(a){a(),s("")},T=function(a){L(a),e(!0),n(!0)},U=function(){n(!1),L({_id:"",name:"",sellerId:"",cost:0,coverImg:"",tortas:0,description:"",products:[]}),e(!0)},V=[(0,q.Z)({title:"Nombre",dataIndex:"name",key:"name",width:"30%"},(P="name",{filterDropdown:function(a){var b=a.setSelectedKeys,c=a.selectedKeys,e=a.confirm,f=a.clearFilters;return(0,d.jsxs)("div",{style:{padding:8},onKeyDown:function(a){return a.stopPropagation()},children:[(0,d.jsx)(y.Z,{ref:w,placeholder:"Search ".concat(P),value:c[0],onChange:function(a){return b(a.target.value?[a.target.value]:[])},onPressEnter:function(){return R(c,e,P)},style:{marginBottom:8,display:"block"}}),(0,d.jsxs)(z.Z,{children:[(0,d.jsx)(k.Z,{type:"primary",onClick:function(){return R(c,e,P)},icon:(0,d.jsx)(G.Z,{}),size:"small",style:{width:90},children:"Search"}),(0,d.jsx)(k.Z,{onClick:function(){return f&&S(f)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(a){return(0,d.jsx)(G.Z,{style:{color:a?"#1890ff":void 0}})},onFilter:function(a,b){return b[P].toString().toLowerCase().includes(a.toLowerCase())},render:function(a){return u===P?(0,d.jsx)(K(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[r],autoEscape:!0,textToHighlight:a?a.toString():""}):a}})),{title:"Costo",dataIndex:"cost",key:"cost",width:"20%"},{title:"Tortas",dataIndex:"tortas",key:"tortas",width:"20%"},{title:"Equipo",dataIndex:"sellerId",key:"sellerId",width:"20%",render:function(a,b){var c=N.find(function(b){return b._id===a});return null==c?void 0:c.name},sorter:function(a,b){return a.sellerId.localeCompare(b.sellerId)},sortDirections:["descend","ascend"]},{dataIndex:"link",title:"",render:function(a,b){return(0,d.jsx)("a",{onClick:function(a){return T(b)},href:a,target:"_blank",children:(0,d.jsx)(H.Z,{})})}}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{width:"100%",height:"100px"},children:(0,d.jsxs)(k.Z,{onClick:function(){return U()},style:{float:"right"},type:"primary",children:[(0,d.jsx)(m.Z,{})," Agregar Combo"]})}),(0,d.jsx)(I.Z,{rowKey:"_id",columns:V,dataSource:A}),(0,d.jsx)(o,{title:l?"Actualizar "+(null==J?void 0:J.name):"Crear nuevo combo",isModalOpen:c,setIsModalOpen:e,children:(0,d.jsx)(Q,{setIsModalOpen:e,foodDataForm:J,setrefresh:i,isUpdate:l})})]})},S=function(a){var b=a.setrefresh,c=a.setIsModalOpen,e=a.sellerDataForm,f=a.isUpdate,h=(0,t.Z)(x.Z.useForm(),1)[0],i=(0,g.useState)([]),l=i[0],m=i[1],n=(0,D.Z)().getToken;(0,g.useEffect)(function(){var a=n(),b={method:"GET",url:"".concat(C.H,"/dashboard/team"),headers:{"x-token":"".concat(a)}};B().request(b).then(function(a){m(a.data)})},[]),(0,g.useEffect)(function(){e?h.setFieldsValue(e):h.resetFields()},[e]);var o=function(a){var d=n(),e={method:"POST",url:"".concat(C.H,"/dashboard/seller"),headers:{"x-token":"".concat(d)},data:a};e.method="POST",B().request(e).then(function(a){h.resetFields(),j.ZP.success("Vendedor creado exitosamente"),b(!0),c(!1)}).catch(function(a){console.log(a),j.ZP.error("Error creando al vendedor")})},p=function(a){var d=n();""===a.password&&delete a.password,a._uid=null==e?void 0:e._uid;var f={method:"",url:"".concat(C.H,"/dashboard/seller"),headers:{"x-token":"".concat(d)},data:a};f.method="PUT",B().request(f).then(function(a){h.resetFields(),j.ZP.success("Vendedor actualizado exitosamente"),b(!0),c(!1)}).catch(function(a){console.log(a),j.ZP.error("Error actualizando al vendedor")})};return(0,d.jsxs)(x.Z,{form:h,onFinish:f?p:o,children:[(0,d.jsx)(x.Z.Item,{hasFeedback:!0,name:"name",rules:[{required:!0,message:"El nombre es obligatorio!"},{min:2,message:"El nombre es obligatorio!"}],children:(0,d.jsx)(y.Z,{placeholder:"Nombre"})}),(0,d.jsx)(x.Z.Item,{hasFeedback:!0,name:"lastname",rules:[{required:!0,message:"El apellido es obligatorio!"},{min:2,message:"El apellido es obligatorio!"}],children:(0,d.jsx)(y.Z,{placeholder:"Apellido"})}),(0,d.jsx)(x.Z.Item,{hasFeedback:!0,name:"email",rules:[{required:!0,message:"Por favor confirme su contrase\xf1a!"},{type:"email",message:"El correo no es v\xe1lido"}],children:(0,d.jsx)(y.Z,{type:"email",placeholder:"Correo Electr\xf3nico"})}),(0,d.jsx)(x.Z.Item,{name:"password",hasFeedback:!0,rules:[{required:!f,message:"La contrase\xf1a es obligatoria!"},{min:5,message:"La contrase\xf1a es muy corta!"}],children:(0,d.jsx)(y.Z.Password,{placeholder:"Contrase\xf1a"})}),(0,d.jsx)(x.Z.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!f,message:"Por favor confirme su contrase\xf1a!"},function(a){var b=a.getFieldValue;return{validator:function(a,c){return""!=b("password")&&""===c?Promise.reject(Error("Por favor confirme su contrase\xf1a!!")):c&&b("password")!==c?Promise.reject(Error("Las dos contrase\xf1as no coinciden")):Promise.resolve()}}},],children:(0,d.jsx)(y.Z.Password,{placeholder:"Confirmar contrase\xf1a"})}),"Equipo",(0,d.jsx)(x.Z.Item,{name:"team",hasFeedback:!0,rules:[{required:!0,message:"Ell equipo es obligatorio"}],children:(0,d.jsx)(L.Z,{options:l.map(function(a){return{id:a._id,label:a.name,value:a._id}})})}),(0,d.jsx)(x.Z.Item,{children:(0,d.jsx)(k.Z,{type:"primary",htmlType:"submit",children:f?"Actualizar vendedor":"Crear vendedor"})})]})},T=function(a){var a=null!==a?a:(0,i.Z)(TypeError("Cannot destructure undefined")),b=(0,D.Z)().getToken,c=(0,g.useState)([]),e=c[0],f=c[1],h=(0,g.useState)(null),l=h[0],n=h[1],p=(0,g.useState)([]),r=p[0],s=p[1],t=(0,g.useState)(!1),u=t[0],v=t[1],w=(0,g.useState)(!0),x=w[0],A=w[1],E=(0,g.useState)(""),F=E[0],J=E[1],L=(0,g.useState)(""),M=L[0],N=L[1],O=(0,g.useState)(!1),P=O[0],Q=O[1],R=(0,g.useRef)(null);(0,g.useEffect)(function(){var a=b(),c={method:"GET",url:"".concat(C.H,"/dashboard/team"),headers:{"x-token":"".concat(a)}};B().request(c).then(function(a){s(a.data)})},[]),(0,g.useEffect)(function(){var a=b(),c={method:"GET",url:"".concat(C.H,"/dashboard/seller"),headers:{"x-token":"".concat(a)}};B().request(c).then(function(a){f(a.data),console.log(a.data)}).catch(function(a){j.ZP.error("Error al cargar los vendedores")}),A(!1)},[x]);var T=function(a,b,c){b(),J(a[0]),N(c)},U=function(a){a(),J("")},V=function(a){return{filterDropdown:function(b){var c=b.setSelectedKeys,e=b.selectedKeys,f=b.confirm,g=b.clearFilters;return(0,d.jsxs)("div",{style:{padding:8},onKeyDown:function(a){return a.stopPropagation()},children:[(0,d.jsx)(y.Z,{ref:R,placeholder:"Search ".concat(a),value:e[0],onChange:function(a){return c(a.target.value?[a.target.value]:[])},onPressEnter:function(){return T(e,f,a)},style:{marginBottom:8,display:"block"}}),(0,d.jsxs)(z.Z,{children:[(0,d.jsx)(k.Z,{type:"primary",onClick:function(){return T(e,f,a)},icon:(0,d.jsx)(G.Z,{}),size:"small",style:{width:90},children:"Search"}),(0,d.jsx)(k.Z,{onClick:function(){return g&&U(g)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(a){return(0,d.jsx)(G.Z,{style:{color:a?"#1890ff":void 0}})},onFilter:function(b,c){return c[a].toString().toLowerCase().includes(b.toLowerCase())},render:function(b){return M===a?(0,d.jsx)(K(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[F],autoEscape:!0,textToHighlight:b?b.toString():""}):b}}},W=function(a){Q(!0),n({_uid:a._uid,name:a.name,lastname:a.lastname,email:a.email,password:"",confirm:"",team:a.team}),v(!0)},X=function(){Q(!1),n(null),v(!0)},Y=[(0,q.Z)({title:"Nombre(s)",dataIndex:"name",key:"name",width:"20%"},V("name")),(0,q.Z)({title:"Apellido(s)",dataIndex:"lastname",key:"lastname",width:"20%"},V("lastname")),(0,q.Z)({title:"Correo Electr\xf3nico",dataIndex:"email",key:"email",width:"20%"},V("email")),{title:"Equipo",dataIndex:"team",key:"team",width:"20%",render:function(a,b){var c=r.find(function(b){return b._id===a});return null==c?void 0:c.name},sorter:function(a,b){return a.team.localeCompare(b.team)},sortDirections:["descend","ascend"]},{dataIndex:"link",title:"",width:"5%",render:function(a,b){return(0,d.jsx)("a",{onClick:function(a){return W(b)},href:a,target:"_blank",children:(0,d.jsx)(H.Z,{})})}}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{width:"100%",height:"100px"},children:(0,d.jsxs)(k.Z,{onClick:function(){return X()},style:{float:"right"},type:"primary",children:[(0,d.jsx)(m.Z,{})," Agregar Integrantes"]})}),(0,d.jsx)(I.Z,{columns:Y,rowKey:"_uid",dataSource:e}),(0,d.jsx)(o,{title:P?"Actualizando a "+(null==l?void 0:l.name):"Nuevo vendedor",isModalOpen:u,setIsModalOpen:v,children:(0,d.jsx)(S,{setIsModalOpen:v,setrefresh:A,sellerDataForm:l,isUpdate:P})})]})};function U(){return(0,d.jsx)(h.Z,{children:(0,d.jsx)(e.Z,{className:"crud-container",children:(0,d.jsxs)(f.Z,{defaultActiveKey:"1",children:[(0,d.jsx)(f.Z.TabPane,{tab:"Equipos",children:(0,d.jsx)(F,{})},"1"),(0,d.jsx)(f.Z.TabPane,{tab:"Integrantes",children:(0,d.jsx)(T,{})},"2"),(0,d.jsx)(f.Z.TabPane,{tab:"Combos",children:(0,d.jsx)(R,{})},"3")]})})})}}},function(a){a.O(0,[402,549,481,854,652,537,696,748,736,940,0,753,784,774,888,179],function(){var b;return a(a.s=54860)}),_N_E=a.O()}])