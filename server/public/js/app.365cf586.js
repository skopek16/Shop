(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],f=0,m=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"043d":function(e,t,n){"use strict";var r=n("6d25"),s=n.n(r);s.a},1:function(e,t){},"21bb":function(e,t,n){"use strict";var r=n("2dad"),s=n.n(r);s.a},"245b":function(e,t,n){"use strict";var r=n("7a4a"),s=n.n(r);s.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("7207"),o=n.n(s),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("div",{staticClass:"cont"},[n("router-view")],1)],1)},i=[],c=(n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/",id:"Home"}},[e._v("Home")]),this.$store.state.isLoggedIn?n("router-link",{attrs:{to:"/ManageYourItems"}},[e._v("ManageYourItems")]):e._e(),this.$store.state.isLoggedIn?n("router-link",{attrs:{to:"/UserBoughtItems"}},[e._v("UserBoughtItems")]):e._e(),this.$store.state.isLoggedIn?n("router-link",{attrs:{to:"/Chat"}},[e._v("Chat")]):e._e(),this.$store.state.isLoggedIn?n("router-link",{attrs:{to:"/yourAuctions"}},[e._v("Your Auctions")]):e._e(),this.$store.state.isLoggedIn?e._e():n("router-link",{attrs:{to:"/UserRegister"}},[e._v("Register")]),this.$store.state.isLoggedIn?e._e():n("router-link",{attrs:{to:"/UserLogin"}},[e._v("Login")]),this.$store.state.isLoggedIn?n("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("Logout")]):e._e()],1)},l=[],f=(n("d81d"),n("d3b7"),n("5530")),m=n("d4ec"),d=n("bee2"),p=n("bc3a"),g=n.n(p),v=n("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Items:")]),r("div",{attrs:{id:"addingItems"}},[r("label",{attrs:{for:"create-item"}},[e._v("Name of item: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"add-name",placeholder:"name!"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),r("label",{attrs:{for:"create-item"}},[e._v("Price: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"text",id:"add-price",placeholder:"price!"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"buyNow",value:"buyNow"},domProps:{checked:e._q(e.picked,"buyNow")},on:{click:e.HideAuctionInput,change:function(t){e.picked="buyNow"}}}),r("label",{attrs:{for:"buyNow"}},[e._v("Buy Now")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"auction",value:"auction"},domProps:{checked:e._q(e.picked,"auction")},on:{click:e.showAuctionInput,change:function(t){e.picked="auction"}}}),r("label",{attrs:{for:"auction"}},[e._v("Auction ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.showMinOfferInput,expression:"showMinOfferInput"}]},[e._v("End time in Days: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.endTime,expression:"endTime"}],attrs:{type:"text",id:"endTime",placeholder:"end time"},domProps:{value:e.endTime},on:{input:function(t){t.target.composing||(e.endTime=t.target.value)}}})]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.showMinOfferInput,expression:"showMinOfferInput"}]},[e._v("Min Offer:"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.minOffer,expression:"minOffer"}],attrs:{type:"text",id:"minOfferInput"},domProps:{value:e.minOffer},on:{input:function(t){t.target.composing||(e.minOffer=t.target.value)}}})]),r("button",{on:{click:e.createItem}},[e._v("Add Item")])]),r("hr"),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("div",{staticClass:"items-container"},[r("transition-group",{staticClass:"grid",attrs:{name:"list",tag:"div"}},e._l(e.items,(function(t,s){return r("div",{key:t._id,staticClass:"item",attrs:{item:t,index:s}},[r("img",{staticClass:"deleteButton",attrs:{src:n("8add")},on:{click:function(n){return e.deleteItem(t._id)}}}),e._v(" "+e._s(t.createdAt.getDate()+"/"+(t.createdAt.getMonth()+1)+"/"+t.createdAt.getFullYear())+" "),r("p",{staticClass:"name"},[e._v(e._s(t.name)+" price:"+e._s(t.price)+" "),"auction"==t.typeOfAuction?r("span",{staticClass:"highestOffer"},[e._v("Highest Offer:"),r("br"),r("span",{ref:""+t._id,refInFor:!0},[e._v(e._s(t.minOffer))]),r("br")]):e._e(),"buyNow"==t.typeOfAuction?r("span",{staticClass:"name"},[e._v("Type of:"),r("br"),e._v("Buy Now")]):e._e(),"auction"==t.typeOfAuction?r("span",{staticClass:"name"},[e._v("Type of:"),r("br"),e._v("Auction")]):e._e(),""!=t.boughtBy?r("span",[r("br"),e._v("Sold!")]):e._e()])])})),0)],1)])},b=[];n("b0c0");g.a.defaults.withCredentials=!0;var _="api/items/",w=function(){function e(){Object(m["a"])(this,e)}return Object(d["a"])(e,null,[{key:"getItems",value:function(){return new Promise((function(e,t){g.a.get(_).then((function(t){var n=t.data;e(n.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))})).catch((function(e){console.log("błąd"),t(e)}))}))}},{key:"getUserAuctions",value:function(){return new Promise((function(e,t){g.a.get("".concat(_,"yourAuctions")).then((function(t){var n=t.data;e(n.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))})).catch((function(e){console.log("błąd"),t(e)}))}))}},{key:"getUserItems",value:function(){return new Promise((function(e,t){g.a.get("".concat(_,"yourItems")).then((function(t){var n=t.data;e(n.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))})).catch((function(e){console.log("błąd"),t(e)}))}))}},{key:"getUserBoughtItems",value:function(){return new Promise((function(e,t){g.a.get("".concat(_,"yourBoughtItems")).then((function(t){var n=t.data;e(n.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))})).catch((function(e){console.log("błąd"),t(e)}))}))}},{key:"buyItem",value:function(e){return g.a.post("".concat(_,"buyItem"),{id:e}).then((function(e){console.log(e.data)}))}},{key:"makeOffer",value:function(e,t){return g.a.post("".concat(_,"makeOffer"),{id:e,offer:t}).then((function(e){console.log(e.data)}))}},{key:"insertItem",value:function(e,t,n,r,s){return g.a.post(_,{name:e,price:t,typeOfAuction:n,minOffer:r,endTime:s})}},{key:"deleteItem",value:function(e){return g.a.delete("".concat(_).concat(e))}}]),e}(),y=w,I={name:"ManageYourItems",data:function(){return{items:[],name:"",price:"",error:"",picked:"",minOffer:0,endTime:"",showMinOfferInput:!1}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.getUserItems();case 3:e.items=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createItem:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.picked),t.next=4,y.insertItem(e.name,e.price,e.picked,e.minOffer,2e4);case 4:return t.next=6,y.getUserItems();case 6:e.items=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.error=t.t0.message;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},showAuctionInput:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.showMinOfferInput=!0,console.log(e.showMinOfferInput)}catch(n){e.error=n.message}case 1:case"end":return t.stop()}}),t)})))()},HideAuctionInput:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.showMinOfferInput=!1,console.log(e.showMinOfferInput)}catch(n){e.error=n.message}case 1:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.deleteItem(e);case 3:return n.next=5,y.getUserItems();case 5:t.items=n.sent,n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),t.error=n.t0.message;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},k=I,O=(n("6dc9"),n("2877")),x=Object(O["a"])(k,h,b,!1,null,"077abb4a",null),N=x.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("label",{attrs:{for:"userName"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",id:"userName"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("label",{attrs:{for:"password"}},[e._v("password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.login}},[e._v("login")]),n("br"),n("br"),n("a",{attrs:{href:"/login"}},[e._v("Login")])])},C=[],j={name:"UserLogin",data:function(){return{userName:"",password:""}},methods:{login:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("jest tu"),console.log(e.userName),console.log(e.password),t.next=6,ye.login(e.userName,e.password);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.error=t.t0.message;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},L=j,$=Object(O["a"])(L,A,C,!1,null,null,null),R=$.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("label",{attrs:{for:"userName"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",id:"userName"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("label",{attrs:{for:"password"}},[e._v("password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.register}},[e._v("Register")]),n("br"),n("br"),n("a",{attrs:{href:"/login"}},[e._v("Login")])])},M=[],T={name:"UserRegister",data:function(){return{userName:"",password:""}},methods:{register:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.register(e.userName,e.password);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.error=t.t0.message;case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}},P=T,B=Object(O["a"])(P,U,M,!1,null,null,null),z=B.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Items:")]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"items-container"},[n("transition-group",{staticClass:"grid",attrs:{name:"list",tag:"div"}},e._l(e.items,(function(t,r){return n("div",{key:t._id,staticClass:"item",attrs:{item:t,index:r}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+(t.createdAt.getMonth()+1)+"/"+t.createdAt.getFullYear())+" "),n("p",{staticClass:"name"},[e._v(e._s(t.name)),n("br"),e._v(" price:"+e._s(t.price)),n("br"),"buyNow"==t.typeOfAuction?n("span",{staticClass:"name"},[e._v("Type of:"),n("br"),e._v("Buy Now"),n("br")]):e._e(),"auction"==t.typeOfAuction?n("span",{staticClass:"name"},[e._v("Type of:"),n("br"),e._v("Auction"),n("br")]):e._e(),"auction"==t.typeOfAuction?n("span",{staticClass:"highestOffer"},[e._v("Highest Offer:"),n("br"),n("span",{ref:"highestOffer"+t._id,refInFor:!0},[e._v(e._s(t.minOffer))]),n("br")]):e._e(),"auction"==t.typeOfAuction?n("input",{ref:"offer"+t._id,refInFor:!0,staticClass:"highestOfferInput",attrs:{type:"text",placeholder:""}}):e._e(),"buyNow"==t.typeOfAuction?n("button",{attrs:{type:"button"},on:{click:function(n){return e.buyItem(t._id)}}},[e._v("Buy Now")]):e._e(),"auction"==t.typeOfAuction?n("button",{attrs:{type:"button"},on:{click:function(n){return e.makeOffer(t._id)}}},[e._v("Make Offer")]):e._e()])])})),0)],1)])},H=[],S={name:"Home",data:function(){return{items:[],name:"",price:"",error:"",popupActive:!1,offer:""}},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.getItems();case 3:e.items=t.sent,console.log(e.$store.state.isLoggedIn),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{makeOffer:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,0!=t.$store.state.isLoggedIn){n.next=6;break}window.alert("Musisz byc zalogowany żeby składać ofertę lub kupować przedmioty"),console.log("musisz byc zalogowany"),n.next=16;break;case 6:return console.log("buyItem"),console.log(e),t.$refs["highestOffer".concat(e)][0].innerText=t.$refs["offer".concat(e)][0].value,console.log(t.$refs["offer".concat(e)][0].value),console.log(t.$refs["highestOffer".concat(e)][0].innerText),n.next=13,y.makeOffer(e,t.$refs["offer".concat(e)][0].value);case 13:return n.next=15,y.getItems();case 15:t.items=n.sent;case 16:n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](0),t.error=n.t0.message;case 21:case"end":return n.stop()}}),n,null,[[0,18]])})))()},buyItem:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,0!=t.$store.state.isLoggedIn){n.next=6;break}window.alert("Musisz byc zalogowany żeby składać ofertę lub kupować przedmioty"),console.log("musisz byc zalogowany"),n.next=13;break;case 6:return console.log("buyItem"),console.log(e),n.next=10,y.buyItem(e);case 10:return n.next=12,y.getItems();case 12:t.items=n.sent;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](0),t.error=n.t0.message;case 18:case"end":return n.stop()}}),n,null,[[0,15]])})))()}}},E=S,Y=(n("21bb"),Object(O["a"])(E,D,H,!1,null,null,null)),F=Y.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{attrs:{id:"users"}},e._l(e.users,(function(t,s){return r("div",{key:t._id,staticClass:"user",attrs:{user:t,index:s},on:{click:function(n){return e.goToChat(t._id)}}},[r("img",{staticClass:"goToChatButton",attrs:{src:n("c5d4")},on:{click:function(n){return e.goToChat(t._id)}}}),r("p",{staticClass:"name"},[e._v(e._s(t.userName)+" ")])])})),0),r("div",{attrs:{id:"chat"}},[this.userID?r("div",[e._l(e.messages,(function(t,n){return r("div",{key:t._id,staticClass:"message",attrs:{message:t,index:n}},[r("p",[e._v(e._s(t))])])})),r("form",{staticClass:"input-container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.msgVue,expression:"msgVue"}],attrs:{type:"text"},domProps:{value:e.msgVue},on:{input:function(t){t.target.composing||(e.msgVue=t.target.value)}}}),r("button",{attrs:{type:"button"},on:{click:e.sendMessage}},[e._v("Send")])])],2):e._e()])])},q=[];g.a.defaults.withCredentials=!0;var J="chat",G=function(){function e(){Object(m["a"])(this,e)}return Object(d["a"])(e,null,[{key:"addChat",value:function(e){return g.a.post(J,{id:e})}},{key:"getChatHistory",value:function(e){return new Promise((function(t,n){g.a.get("".concat(J,"/").concat(e)).then((function(e){var n=e.data;console.log(n),t(n)})).catch((function(e){console.log("błąd"),n(e)}))}))}}]),e}(),K=G,Q=n("8055"),W=n.n(Q),X={name:"Chat",data:function(){return{msgVue:"",users:[],chat:Object,socket:W()("http://localhost:5000"),messages:[],userID:"",userSesId:""}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.getUsers();case 3:e.users=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{goToChat:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.userID=t,e.next=4,K.getChatHistory(t);case 4:this.chat=e.sent,this.messages=this.chat.history,console.log(this.messages),console.log(t),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.error=e.t0.message;case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}(),sendMessage:function(){console.log(this.$store.state.userId),console.log(this.$store.state.isLoggedIn),this.msgVue=this.$store.state.userName+":"+this.msgVue,this.socket.emit("msg",this.msgVue,this.userID,this.$store.state.userId)},listen:function(){var e=this;this.socket.on("msg",(function(t){console.log("chce dodac msg do tablicy"),e.messages.push(t),e.msgVue=""}))}},mounted:function(){this.listen()}},Z=X,ee=(n("b434"),Object(O["a"])(Z,V,q,!1,null,"2160ea8a",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Items:")]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"items-container"},[n("transition-group",{staticClass:"grid",attrs:{name:"list",tag:"div"}},e._l(e.items,(function(t,r){return n("div",{key:t._id,staticClass:"item",attrs:{item:t,index:r}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+(t.createdAt.getMonth()+1)+"/"+t.createdAt.getFullYear())+" "),n("p",{staticClass:"name"},[e._v(e._s(t.name)),n("br"),e._v(" price:"+e._s(t.price)),n("br"),"buyNow"==t.typeOfAuction?n("span",{staticClass:"name"},[e._v("Type of:"),n("br"),e._v("Buy Now"),n("br")]):e._e(),"auction"==t.typeOfAuction?n("span",{staticClass:"name"},[e._v("Type of:"),n("br"),e._v("Auction"),n("br")]):e._e(),"auction"==t.typeOfAuction?n("span",{staticClass:"highestOffer"},[e._v("Highest Offer:"),n("br"),n("span",{ref:"highestOffer"+t._id,refInFor:!0},[e._v(e._s(t.minOffer))]),n("br")]):e._e(),"auction"==t.typeOfAuction?n("input",{ref:"offer"+t._id,refInFor:!0,staticClass:"highestOfferInput",attrs:{type:"text",placeholder:""}}):e._e(),"auction"==t.typeOfAuction?n("button",{attrs:{type:"button"},on:{click:function(n){return e.makeOffer(t._id)}}},[e._v("Make Offer")]):e._e()])])})),0)],1)])},re=[],se={name:"yourAuctions",data:function(){return{items:[],name:"",price:"",error:"",socket:W()("http://localhost:5000"),popupActive:!1,offer:""}},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.getUserAuctions();case 3:e.items=t.sent,console.log(e.$store.state.isLoggedIn),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{makeOffer:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,0!=t.$store.state.isLoggedIn){n.next=6;break}window.alert("Musisz byc zalogowany żeby składać ofertę lub kupować przedmioty"),console.log("musisz byc zalogowany"),n.next=17;break;case 6:return console.log("buyItem"),console.log(e),t.$refs["highestOffer".concat(e)][0].innerText=t.$refs["offer".concat(e)][0].value,console.log(t.$refs["offer".concat(e)][0].value),console.log(t.$refs["highestOffer".concat(e)][0].innerText),t.socket.emit("makeOffer",t.$refs["offer".concat(e)][0].value,e),n.next=14,y.makeOffer(e,t.$refs["offer".concat(e)][0].value);case 14:return n.next=16,y.getUserAuctions();case 16:t.items=n.sent;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n["catch"](0),t.error=n.t0.message;case 22:case"end":return n.stop()}}),n,null,[[0,19]])})))()},listen:function(){var e=this;this.socket.on("updateHighestOffer",(function(t,n){console.log("chce dodac msg do tablicy"),e.$refs["highestOffer".concat(n)][0].innerText=t,e.$refs["highestOffer".concat(n)][0].innerText=""}))}},mounted:function(){this.listen()}},oe=se,ae=(n("043d"),Object(O["a"])(oe,ne,re,!1,null,null,null)),ie=ae.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Items:")]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"items-container"},[n("transition-group",{staticClass:"grid",attrs:{name:"list",tag:"div"}},e._l(e.items,(function(t,r){return n("div",{key:t._id,staticClass:"item",attrs:{item:t,index:r}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+(t.createdAt.getMonth()+1)+"/"+t.createdAt.getFullYear())+" "),n("p",{staticClass:"name"},[e._v(e._s(t.name)+" price:"+e._s(t.price)+" "),"buyNow"==t.typeOfAuction?n("span",{staticClass:"name"},[e._v("Type of:"),n("br"),e._v("Buy Now")]):e._e(),"auction"==t.typeOfAuction?n("span",{staticClass:"name"},[e._v("Type of:"),n("br"),e._v("Auction")]):e._e()])])})),0)],1)])},ue=[],le={name:"UserBoughtItems",data:function(){return{items:[],name:"",price:"",error:"",picked:""}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.getUserBoughtItems();case 3:e.items=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},fe=le,me=(n("245b"),Object(O["a"])(fe,ce,ue,!1,null,"6a2e2f3e",null)),de=me.exports;r["default"].use(v["a"]);var pe=[{path:"/UserLogin",name:"UserLogin",component:R},{path:"/UserBoughtItems",name:"UserBoughtItems",component:de},{path:"/UserRegister",name:"UserRegister",component:z},{path:"/",name:"Home",component:F},{path:"/Chat",name:"Chat",component:te},{path:"/yourAuctions",name:"yourAuctions",component:ie},{path:"/ManageYourItems",name:"ManageYourItems",component:N}],ge=new v["a"]({mode:"history",base:"/",routes:pe}),ve=ge,he=n("2f62");r["default"].use(he["a"]);var be=new he["a"].Store({strict:!0,state:{isLoggedIn:!1,userId:"",userName:""},mutations:{setIsLoggedIn:function(e,t){e.isLoggedIn=t},setUserId:function(e,t){e.userId=t},setUserName:function(e,t){e.userName=t}},actions:{setIsLoggedIn:function(e,t){var n=e.commit;n("setIsLoggedIn",t)},setUserId:function(e,t){var n=e.commit;n("setUserId",t)},setUserName:function(e,t){var n=e.commit;n("setUserName",t)}}});g.a.defaults.withCredentials=!0;var _e="api/users/",we=function(){function e(){Object(m["a"])(this,e)}return Object(d["a"])(e,null,[{key:"register",value:function(e,t){return console.log("UserService"),console.log(e),console.log(t),g.a.post("".concat(_e,"register"),{userName:e,password:t}).then((function(e){console.log(" registered"),console.log(e),ve.push("/UserLogin")})).catch((function(e){console.log("cannot register"),console.log(e)}))}},{key:"getUsers",value:function(){return new Promise((function(e,t){g.a.get(_e).then((function(t){var n=t.data;e(n.map((function(e){return Object(f["a"])({},e)})))})).catch((function(e){console.log("błąd"),t(e)}))}))}},{key:"login",value:function(e,t){return console.log("UserServiceLogin"),console.log(e),console.log(t),g.a.post("".concat(_e,"login"),{userName:e,password:t}).then((function(e){console.log(" login"),console.log(e),console.log(" user"),console.log(e.data.passport.user),be.commit("setUserName",e.data.username),be.commit("setUserId",e.data.passport.user),console.log(be.state.isLoggedIn),1==e.data.isLoggedIn&&be.commit("setIsLoggedIn",!0),console.log(be.state.isLoggedIn),ve.push("/")})).catch((function(e){console.log("cannot login"),console.log(e)}))}},{key:"ifLogedIn",value:function(){return g.a.get("".concat(_e,"ifLogin"),{}).then((function(e){console.log(" login"),console.log(e),console.log(" user"),console.log(e.data.passport.user),be.commit("setUserId",e.data.passport.user),be.commit("setUserName",e.data.username),console.log(be.state.isLoggedIn),console.log(be.state.userName),1==e.data.isLoggedIn&&be.commit("setIsLoggedIn",!0),console.log(be.state.isLoggedIn)})).catch((function(e){console.log("niezalogwoany "),console.log(e)}))}},{key:"logout",value:function(){return g.a.get("".concat(_e,"logout"),{}).then((function(e){console.log(" logout"),console.log(e),console.log(e.data),console.log(e.data.answer),console.log(be.state.isLoggedIn),"wylogowany"!=e.data.answer?(console.log("zalogowany"),be.commit("setIsLoggedIn",!0)):be.commit("setIsLoggedIn",!1),console.log(be.state.isLoggedIn)})).catch((function(e){console.log("niezalogwoany "),console.log(e)}))}}]),e}(),ye=we,Ie={name:"NavBar",methods:{logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("logout"),t.next=4,ye.logout();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},ke=Ie,Oe=(n("ed6b"),Object(O["a"])(ke,u,l,!1,null,null,null)),xe=Oe.exports;console.log("test");var Ne={name:"App",components:{NavBar:xe},methods:{ifLogedIn:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.ifLogedIn();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.error=t.t0.message;case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},beforeMount:function(){this.ifLogedIn()}},Ae=Ne,Ce=(n("5c0b"),Object(O["a"])(Ae,a,i,!1,null,null,null)),je=Ce.exports,Le=n("ce5b"),$e=n.n(Le);r["default"].use(o.a),r["default"].config.productionTip=!1,r["default"].use($e.a),r["default"].prototype.$globalAuth=!1,new r["default"]({router:ve,store:be,render:function(e){return e(je)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"64eb":function(e,t,n){},"6d25":function(e,t,n){},"6dc9":function(e,t,n){"use strict";var r=n("f881"),s=n.n(r);s.a},"7a4a":function(e,t,n){},"8add":function(e,t,n){e.exports=n.p+"img/deleteIcon.460bce41.png"},"9c0c":function(e,t,n){},b434:function(e,t,n){"use strict";var r=n("64eb"),s=n.n(r);s.a},c5d4:function(e,t,n){e.exports=n.p+"img/arrow.1adb3e12.png"},d5a8:function(e,t,n){},ed6b:function(e,t,n){"use strict";var r=n("d5a8"),s=n.n(r);s.a},f881:function(e,t,n){}});
//# sourceMappingURL=app.365cf586.js.map