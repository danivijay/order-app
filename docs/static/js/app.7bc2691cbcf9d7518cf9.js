webpackJsonp([1],{109:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-list",e._l(e.dishTypes,function(t,a){return n("v-list-tile",{key:a,on:{click:function(n){e.onIndexClick(t)}}},[n("v-list-tile-content",[e._v("\n        "+e._s(t)+"\n      ")])],1)}))],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},110:function(e,t,n){"use strict";function a(e){n(111)}var r=n(53),i=n(112),s=n(11),o=a,c=s(r.a,i.a,!1,o,null,null);t.a=c.exports},111:function(e,t){},112:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-list",e._l(e.dishTypes,function(t,a){return n("span",{key:a},[n("v-subheader",{staticClass:"yellow darken-2",attrs:{id:t.toLowerCase().replace(/[^A-Z0-9]/gi,"-")}},[e._v("\n        "+e._s(t)+"\n      ")]),e._v(" "),e._l(e.selectItems(t),function(t,a){return n("v-list-tile",{key:a},[n("v-list-tile-content",[n("v-list-tile-title",["nonveg"==t.vegflag?n("v-icon",{attrs:{color:"red"}},[e._v("brightness_1")]):e._e(),e._v(" "),"veg"==t.vegflag?n("v-icon",{attrs:{color:"green"}},[e._v("brightness_1")]):e._e(),e._v("\n            "+e._s(t.name)+"\n          ")],1),e._v(" "),null!==t.description?n("v-list-tile-sub-title",{staticClass:"pl-4"},[e._v("\n            "+e._s(t.description)+"\n          ")]):e._e()],1),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(n){n.preventDefault(),e.addAdded(t.name,-1)}}},[n("v-icon",{attrs:{color:"error"}},[e._v("remove")])],1)],1),e._v(" "),n("v-list-tile-action",[e._v("\n          "+e._s(e.getValue(t.name))+"\n        ")]),e._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(n){n.preventDefault(),e.addAdded(t.name,1)}}},[n("v-icon",{attrs:{color:"error"}},[e._v("add")])],1)],1),e._v(" "),n("v-list-tile-action",[e._v("\n          Rs."+e._s(e.getPrice(t.name))+"\n        ")])],1)})],2)}))],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},113:function(e,t,n){"use strict";function a(e){n(114)}var r=n(54),i=n(118),s=n(11),o=a,c=s(r.a,i.a,!1,o,"data-v-362d25c9",null);t.a=c.exports},114:function(e,t){},118:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"yellow darken-2"},[n("h3",[e._v("Your Cart")])]),e._v(" "),n("v-divider"),e._v(" "),e._l(e.getAdded,function(t,a){return n("v-layout",{key:a,staticClass:"mt-2 mb-2"},[t.value>0?n("v-flex",{staticClass:"pl-2",attrs:{xs7:""}},[e._v("\n      "+e._s(t.name)+"\n    ")]):e._e(),e._v(" "),t.value>0?n("v-flex",{staticClass:"text-xs-right",attrs:{xs2:""}},[e._v("\n      x "+e._s(t.value)+"\n    ")]):e._e(),e._v(" "),t.value>0?n("v-flex",{staticClass:"text-xs-right pr-2",attrs:{xs3:""}},[e._v("\n      "+e._s(e.getPrice(t.name)*t.value)+"\n    ")]):e._e()],1)}),e._v(" "),n("v-divider"),e._v(" "),n("v-layout",{staticClass:"mt-2 mb-2"},[n("v-flex",{staticClass:"pl-2 body-2",attrs:{xs8:""}},[e._v("\n      Total\n    ")]),e._v(" "),n("v-flex",{staticClass:"text-xs-right pr-2 body-2",attrs:{xs4:""}},[e._v("\n      "+e._s(e.getTotal)+"\n    ")])],1),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"error"}},[e._v("Clear")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"success"}},[e._v("Checkout")])],1)],2)},r=[],i={render:a,staticRenderFns:r};t.a=i},119:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{staticClass:"pl-2",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("home-index")],1),e._v(" "),n("v-flex",{staticClass:"pl-2",attrs:{xs12:"",md6:""}},[n("home-menu")],1),e._v(" "),n("v-flex",{staticClass:"pl-2",attrs:{xs12:"",md3:""}},[n("home-cart")],1)],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},120:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(17),r=n(121),i=n(122),s=n(125),o=n.n(s);a.a.use(r.a);var c=(JSON.parse('[{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Egg Chinese Combo","price":100,"vegflag":"nonveg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Chicken Chinese Combo","price":110,"vegflag":"nonveg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Lebanese Falafal Pockets","price":120,"vegflag":"veg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Lebanese Chicken Pockets","price":150,"vegflag":"nonveg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Mexican Veg Nachos","price":120,"vegflag":"veg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Mexican Non Veg Nachos","price":150,"vegflag":"nonveg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Indonesian  Nasi Goreng Tofu","price":120,"vegflag":"veg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Indonesian Nasi Goreng Chicken","price":150,"vegflag":"nonveg"},{"availabletime":"12:00-16:00","category":"Salads","description":"","name":"Veg Salad","price":80,"vegflag":"veg"},{"availabletime":"12:00-16:00","category":"Salads","description":"","name":"Non Veg Salad","price":100,"vegflag":"nonveg"},{"availabletime":"10:00-20:00","category":"Oriental","description":"Chilli Garlic Chicken","name":"Chicken Starter","price":75,"vegflag":"nonveg"},{"availabletime":"10:00-20:00","category":"Oriental","description":"Chilli Garlic Potatoes","name":"Veg Starter","price":55,"vegflag":"veg"},{"availabletime":"10:00-20:00","category":"Oriental","description":"","name":"Paneer Starter","price":65,"vegflag":"veg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Potatoes, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Veg Chinese Combo","price":80,"vegflag":"veg"}]'),new r.a.Store({plugins:[Object(i.a)()],state:{items:[],added:[]},mutations:{initItems:function(e,t){e.items=t,e.added=[]},addAdded:function(e,t){var n=[];if(e.added.length>0&&(n=e.added.filter(function(e){return e.name==t.name})),n.length>0){var a=e.added.findIndex(function(e){return e.name===t.name}),r=e.added[a].value;r+=t.value,r>=0&&(e.added[a].value=r)}else e.added.push(t)}},actions:{initItems:function(e){var t=e.commit;e.getters;return o.a.get("https://thesmartq.firebaseio.com/menu.json").then(function(e){t("initItems",e.data)}).catch(function(e){throw e})},addAdded:function(e,t){var n=e.commit;e.getters;n("addAdded",t)}},getters:{getItems:function(e){return e.items},getAdded:function(e){return e.added}}}))},145:function(e,t){},33:function(e,t,n){"use strict";t.a={data:function(){return{title:"Smart Order"}},name:"App"}},34:function(e,t,n){"use strict";var a=n(70),r=n(110),i=n(113);t.a={components:{HomeIndex:a.a,HomeMenu:r.a,HomeCart:i.a},data:function(){return{}},computed:{items:function(){return this.$store.state.items}},created:function(){this.$store.dispatch("initItems")}}},35:function(e,t,n){"use strict";var a=n(36),r=n.n(a),i=n(46),s=n.n(i);t.a={data:function(){return{arr:["All","Oriental","Chineese Combos","Salads"]}},methods:{onIndexClick:function(e){$vuetify.goTo("#"+e.toLowerCase().replace(/[^A-Z0-9]/gi,"-"))}},computed:{dishTypes:function(){var e=this.$store.getters.getItems,t=new s.a(e.map(function(e){return e.category}));return[].concat(r()(t))}}}},53:function(e,t,n){"use strict";var a=n(36),r=n.n(a),i=n(46),s=n.n(i);t.a={data:function(){return{}},methods:{addAdded:function(e,t){var n={name:e,value:t};this.$store.dispatch("addAdded",n)},selectItems:function(e){return this.$store.getters.getItems.filter(function(t){return t.category==e})},getPrice:function(e){return this.$store.getters.getItems.filter(function(t){return t.name==e})[0].price},getValue:function(e){var t=this.$store.getters.getAdded,n=t.filter(function(t){return t.name==e});return n.length>0?n[0].value:0}},computed:{dishTypes:function(){var e=this.$store.getters.getItems,t=new s.a(e.map(function(e){return e.category}));return[].concat(r()(t))}}}},54:function(e,t,n){"use strict";var a=n(115),r=n.n(a);t.a={data:function(){return{}},computed:{getAdded:function(){return this.added=this.$store.getters.getAdded},getTotal:function(){var e=this.$store.getters.getAdded,t=0,n=!0,a=!1,i=void 0;try{for(var s,o=r()(e);!(n=(s=o.next()).done);n=!0){var c=s.value;t+=c.value*this.getPrice(c.name)}}catch(e){a=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw i}}return t}},methods:{getPrice:function(e){return this.$store.getters.getItems.filter(function(t){return t.name==e})[0].price}}}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),r=n(63),i=n(65),s=n(120),o=n(144),c=n.n(o),l=n(145);n.n(l);a.a.use(c.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,store:s.a,components:{App:r.a},template:"<App/>"})},63:function(e,t,n){"use strict";var a=n(33),r=n(64),i=n(11),s=i(a.a,r.a,!1,null,null,null);t.a=s.exports},64:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{staticClass:"yellow darken-2"},[n("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-content",[n("router-view")],1),e._v(" "),n("v-footer",{attrs:{fixed:"",app:""}},[n("span",[e._v("© 2018")])])],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},65:function(e,t,n){"use strict";var a=n(17),r=n(66),i=n(67);a.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"AppHome",component:i.a}]})},67:function(e,t,n){"use strict";function a(e){n(68)}var r=n(34),i=n(119),s=n(11),o=a,c=s(r.a,i.a,!1,o,null,null);t.a=c.exports},68:function(e,t){},70:function(e,t,n){"use strict";function a(e){n(71)}var r=n(35),i=n(109),s=n(11),o=a,c=s(r.a,i.a,!1,o,null,null);t.a=c.exports},71:function(e,t){}},[60]);
//# sourceMappingURL=app.7bc2691cbcf9d7518cf9.js.map