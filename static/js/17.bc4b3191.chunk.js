(this.webpackJsonpclownz=this.webpackJsonpclownz||[]).push([[17],{420:function(e,n,a){"use strict";a.d(n,"a",(function(){return V}));var t=a(3),s=a(8),c=a(12),i=a(5),r=a(7),l=a.n(r),u=a(0),o=a(423),d=a(10),p=a(39),h=a(448),m=a(383),b=a(381),j=a(84),y=a(552),k=a(446),g=a(382),x=a(219),O=a(563),v=a(447),f=a(221).a,w=a(137).a,z=a(58),T=[{key:"adidas",name:"Adidas",productType:[{key:"adidas",type:"adidas alphabounce",name:"Adidas lphabounce"},{key:"adidas",type:"adidas nmd",name:"Adidas Nmd"},{key:"adidas",type:"adidas superstar",name:"Adidas Superstar"},{key:"adidas",type:"adidas yeezy",name:"Adidas Yeezy"},{key:"adidas",type:"adidas prophere",name:"Adidas Prophere"},{key:"adidas",type:"adidas falcon",name:"Adidas Falcon"},{key:"adidas",type:"adidas stan smith",name:"Adidas Stan Mmith"},{key:"adidas",type:"adidas ultraboost",name:"Adidas Ultraboost"}]},{key:"nike",name:"Nike",productType:[{key:"nike",type:"nike m2k tekno",name:"Nike M2k Tekno"},{key:"nike",type:"nike jordan",name:"Nike Jordan"},{key:"nike",type:"nike cortez",name:"Nike Cortez"},{key:"nike",type:"nike air max",name:"Nike Air Max"}]},{key:"newbalance",name:"New Balance",productType:[{key:"newbalance",type:"new balance",name:"New Balance"}]},{key:"vans",name:"Vans",productType:[{key:"vans",type:"new balance",name:"Vans Anaheim Factory"},{key:"vans",type:"vans sk8 hi",name:"Vans Sk8 Hi"},{key:"vans",type:"vans era",name:"Vans Era"},{key:"vans",type:"vans sneaker",name:"Vans Sneaker"},{key:"vans",type:"vans authentic",name:"Vans Authentic"},{key:"vans",type:"vans classic",name:"Vans Classic"}]},{key:"puma",name:"Puma",productType:[{key:"puma",type:"puma rsx",name:"Puma Rsx"},{key:"puma",type:"puma rsx puzzle",name:"Puma Rsx Puzzle"},{key:"puma",type:"puma rsx super",name:"Puma Rsx Super"}]},{key:"converse",name:"Converse",productType:[{key:"converse",type:"converse renew",name:"Converse Renew"},{key:"converse",type:"converse sneakers",name:"Converse Sneakers"},{key:"converse",type:"converse chuck 70",name:"Converse Chuck 70"}]}],S=[{size:"28",value:28},{size:"29",value:29},{size:"30",value:30},{size:"31",value:31},{size:"32",value:32},{size:"33",value:33},{size:"34",value:34},{size:"35",value:35},{size:"36",value:36},{size:"37",value:37},{size:"38",value:38},{size:"39",value:39},{size:"40",value:40},{size:"41",value:41},{size:"42",value:42},{size:"43",value:43},{size:"44",value:44},{size:"45",value:45},{size:"46",value:46},{size:"47",value:47},{size:"48",value:48}],N=a(73),C={labelCol:{xs:{span:24},sm:{span:24},lg:{span:24},xl:{span:24}},wrapperCol:{xs:{span:0},sm:{span:24}}},F=a(4);function P(e){return new Promise((function(n,a){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return n(t.result)},t.onerror=function(e){return a(e)}}))}function V(e){var n=e.actionPostAddProduct,a=e.id_product,r=e.valuesEdit,V=e.actionUpdateProduct,q=h.a.Option,A=m.a.useForm(),B=Object(i.a)(A,1)[0],I=b.a.TextArea,G=Object(u.useContext)(N.a),E=Object(i.a)(G.token,1)[0],J=Object(u.useState)(""),M=Object(i.a)(J,2),L=M[0],X=M[1],R=Object(u.useState)(""),_=Object(i.a)(R,2),H=_[0],D=_[1],U=Object(u.useState)(""),Y=Object(i.a)(U,2),K=Y[0],Q=Y[1],W=Object(u.useState)(""),Z=Object(i.a)(W,2),$=Z[0],ee=Z[1],ne=Object(u.useState)(""),ae=Object(i.a)(ne,2),te=ae[0],se=ae[1],ce=Object(u.useState)([]),ie=Object(i.a)(ce,2),re=ie[0],le=ie[1],ue=Object(u.useState)([]),oe=Object(i.a)(ue,2),de=oe[0],pe=oe[1],he=Object(u.useState)(!1),me=Object(i.a)(he,2),be=me[0],je=me[1],ye=Object(u.useState)(!1),ke=Object(i.a)(ye,2),ge=ke[0],xe=ke[1],Oe=Object(u.useState)(!1),ve=Object(i.a)(Oe,2),fe=ve[0],we=ve[1];Object(u.useEffect)((function(){B.resetFields(["NSX"])}),[L]),Object(u.useEffect)((function(){if(r){B.setFieldsValue(r);var e=r.color,n=r.poster,a=r.key,t=r.NSX;le([e]),X(a),D(t),n&&pe(n)}}),[r]),Object(u.useEffect)((function(){B.setFieldsValue({NSX:H})}),[H]);var ze=function(){var e=Object(c.a)(l.a.mark((function e(t){var s,c,i,r,u,o,p,h,m,b,y,k,g,x,O,v,f,w,z,T,S,N;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=29;break}if(s=t.name,c=t.size,i=t.price,r=t.sex,u=t.collections,o=t.productType,p=t.key,h=t.NSX,m=t.description,b=new FormData,!a){e.next=19;break}if(we(!0),y=[],!(de.length<4)){e.next=11;break}j.a.error({message:"Th\xf4ng B\xe1o",description:"Vui l\xf2ng t\u1ea3i l\xean 4 \u1ea3nh"}),e.next=19;break;case 11:for(k=0;k<de.length;k++)(g=de[k]).uid&&b.append("poster",de[k].originFileObj),g.url&&y.push(de[k]);return x={name:s,size:c,price:i,sex:r,color:re,description:m,collections:u,productType:o,key:p,NSX:h,imageOld:y,id_product:a},b.append("product",JSON.stringify(x)),e.next=16,V(b,E);case 16:O=e.sent,(v=Object(d.d)(O))&&(we(!1),window.scrollTo({top:0,behavior:"smooth"}),f=v.product,se("/detail-products?id_product=".concat(f._id,"&key=").concat(f.key)),j.a.success({message:"Th\xf4ng B\xe1o !",description:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng "}));case 19:if(a){e.next=29;break}for(we(!0),w={name:s,size:c,price:i,sex:r,color:re,description:m,collections:u,productType:o,key:p,NSX:h},z=0;z<de.length;z++)b.append("poster",de[z].originFileObj);return b.append("product",JSON.stringify(w)),e.next=26,n(b,E);case 26:T=e.sent,(S=Object(d.d)(T))&&(we(!1),B.resetFields(),pe([]),le([]),window.scrollTo({top:0,behavior:"smooth"}),N=S.product,se("/detail-products?id_product=".concat(N._id,"&key=").concat(N.key)),j.a.success({message:"Th\xf4ng B\xe1o !",description:"Th\xeam m\u1edbi th\xe0nh c\xf4ng"}));case 29:e.next=34;break;case 31:e.prev=31,e.t0=e.catch(0),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[0,31]])})));return function(n){return e.apply(this,arguments)}}(),Te=function(){K&&-1===re.indexOf(K)?(le([].concat(Object(s.a)(re),[K])),Q(""),je(!1)):(je(!1),Q(""))},Se=function(){var e=Object(c.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.url||n.preview){e.next=5;break}return e.next=4,P(n.originFileObj);case 4:n.preview=e.sent;case 5:ee(n.url||n.preview),xe(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[te&&Object(F.jsxs)("h4",{children:[" ","Click xem s\u1ea3n ph\u1ea9m v\u1eeba ",a?"c\u1eadp nh\u1eadt":"th\xeam"," ",Object(F.jsx)(p.b,{to:te,children:"T\u1ea1i \u0110\xe2y"})]}),Object(F.jsxs)("h3",{children:[a?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi"," s\u1ea3n ph\u1ea9m "]}),Object(F.jsxs)(m.a,Object(t.a)(Object(t.a)({form:B},C),{},{onFinish:ze,className:"from-add-product from-edit-product",name:"product",hasFeedback:!0,children:[Object(F.jsx)(m.a.Item,{label:"T\xean S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"name",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp t\xean s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(I,{rows:2,maxLength:100})}),Object(F.jsx)(m.a.Item,{hasFeedback:!0,label:"Gi\xe1 Ti\u1ec1n",name:"price",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp gi\xe1 ti\u1ec1n"}],children:Object(F.jsx)(y.a,{style:{width:"100%"},min:1,max:99999999})}),Object(F.jsx)(m.a.Item,{label:"Gi\u1edbi T\xednh",hasFeedback:!0,name:"sex",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn gi\u1edbi t\xednh !"}],children:Object(F.jsxs)(k.a.Group,{children:[Object(F.jsx)(k.a,{value:"nam",defaultChecked:!0,children:"Nam"}),Object(F.jsx)(k.a,{value:"n\u1eef",defaultChecked:!0,children:"N\u1eef"}),Object(F.jsx)(k.a,{value:"nam, n\u1eef",defaultChecked:!0,children:"Nam, N\u1eef"})]})}),Object(F.jsx)(m.a.Item,{label:"Nh\xe0 S\u1ea3n Xu\u1ea5t",hasFeedback:!0,name:"key",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn nh\xe0 s\u1ea3n xu\u1ea5t !"}],children:Object(F.jsx)(h.a,{onChange:function(e){X(e)},children:T.map((function(e,n){return Object(F.jsx)(q,{value:e.key,children:e.name},n)}))})}),Object(F.jsx)(m.a.Item,{label:"D\xf2ng S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"NSX",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn d\xf2ng s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(h.a,{children:T.map((function(e,n){return e.productType.map((function(n,a){return e.key===L&&Object(F.jsx)(q,{value:n.type,children:n.name},a)}))}))})}),Object(F.jsx)(m.a.Item,{label:"B\u1ed9 S\u01b0u T\u1eadp",hasFeedback:!0,name:"collections",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp b\u1ed9 s\u01b0u t\u1eadp !"}],children:Object(F.jsx)(I,{rows:2,maxLength:100})}),Object(F.jsx)(m.a.Item,{label:"Lo\u1ea1i S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"productType",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp lo\u1ea1i s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(I,{rows:2,maxLength:100})}),Object(F.jsx)(m.a.Item,{label:"M\xf4 T\u1ea3 S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"description",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp n\u1ed9i dung s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(I,{rows:11})}),Object(F.jsx)(m.a.Item,{label:"T\u1ea3i \u1ea2nh L\xean",hasFeedback:!0,name:"poster",rules:[{required:de.length<1||de.length<4,message:"Vui l\xf2ng t\u1ea3i 4 \u1ea3nh  l\xean  !"}]}),Object(F.jsx)(g.a,{listType:"picture-card",accept:".jpg, .jpeg, .png",fileList:de,onPreview:Se,onChange:function(e){var n=e.file,t=e.fileList,c=e.event,i="image/jpeg"===n.type||"image/png"===n.type||"image/jpg"===n.type,r=n.size/1024/1024<2;if(a){if(n&&0===t.length||n&&t.length>0&&!c){var l=Object(s.a)(de),u=l.findIndex((function(e){return e.id===n.id}));l.splice(u,1),pe(l)}t.length>0&&c&&(i||j.a.error({message:"Th\xf4ng B\xe1o",description:"B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 t\u1ea3i l\xean t\u1ec7p JPG / PNG / JPEG !"}),r||j.a.error({message:"Th\xf4ng b\xe1o",description:"H\xecnh \u1ea3nh ph\u1ea3i nh\u1ecf h\u01a1n 2MB "})),r&&i&&pe(t)}a||(i||j.a.error({message:"Th\xf4ng B\xe1o",description:"B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 t\u1ea3i l\xean t\u1ec7p JPG / PNG / JPEG !"}),r||j.a.error({message:"Th\xf4ng b\xe1o",description:"H\xecnh \u1ea3nh ph\u1ea3i nh\u1ecf h\u01a1n 2MB "}),r&&i&&pe(t))},maxCount:4,multiple:!0,children:de.length>=4?null:Object(F.jsxs)("div",{children:[Object(F.jsx)(o.a,{}),Object(F.jsx)("div",{style:{marginTop:8},children:"T\u1ea3i \u1ea3nh l\xean"})]})}),Object(F.jsx)(x.a,{visible:ge,footer:null,onCancel:function(){xe(!1)},children:Object(F.jsx)("img",{alt:"example",style:{width:"100%"},src:$})}),Object(F.jsxs)(m.a.Item,{label:"M\xe0u S\u1eafc",hasFeedback:!0,name:"color",rules:[{required:re.length<1,message:"Vui l\xf2ng th\xeam m\xe0u cho s\u1ea3n ph\u1ea9m !"}],children:[re.map((function(e,n){return Object(F.jsx)(O.a,{closable:!0,onClose:function(){return function(e){console.log(e);var n=re.filter((function(n){return n!==e}));le(n)}(e)},maxTagCount:3,children:e},n)})),be&&re.length<5&&Object(F.jsx)(b.a,{type:"text",size:"small",style:{display:"block",margin:"10px auto",width:"200px",height:"30px"},value:K,onChange:function(e){Q(e.target.value)},onBlur:Te,onPressEnter:Te}),!be&&re.length<5&&Object(F.jsxs)(O.a,{style:{display:"block",margin:"10px auto",width:"100px"},onClick:function(){je(!0)},children:[Object(F.jsx)(o.a,{})," Th\xeam m\xe0u"]})]}),Object(F.jsx)(m.a.Item,{label:"Ch\u1ecdn Size",hasFeedback:!0,name:"size",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp m\xe0u !"}],children:Object(F.jsx)(v.a.Group,{style:{width:"100%"},children:Object(F.jsx)(f,{children:S.map((function(e,n){return Object(F.jsx)(w,{span:8,children:Object(F.jsx)(v.a,{value:e.value,children:e.size})},n)}))})})}),Object(F.jsx)(m.a.Item,{children:Object(F.jsx)(z.a,{style:{marginTop:"10px"},type:"primary",htmlType:"submit",loading:fe,children:a?"C\u1eadp Nh\u1eadt":"Th\xeam S\u1ea3n Ph\u1ea9m"})})]}))]})}},423:function(e,n,a){"use strict";var t=a(3),s=a(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=a(9),r=function(e,n){return s.createElement(i.a,Object(t.a)(Object(t.a)({},e),{},{ref:n,icon:c}))};r.displayName="PlusOutlined";n.a=s.forwardRef(r)},533:function(e,n,a){},547:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return r}));var t=a(46),s=a(420),c=a(62),i=(a(533),a(4));function r(){var e=Object(t.b)();return Object(i.jsx)("div",{className:"ground-new-product",children:Object(i.jsx)("div",{className:"container-new-product",children:Object(i.jsx)(s.a,{actionPostAddProduct:function(n,a,t){return e(Object(c.d)(n,a,t))}})})})}}}]);
//# sourceMappingURL=17.bc4b3191.chunk.js.map