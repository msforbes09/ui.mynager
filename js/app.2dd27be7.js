(function(e){function n(n){for(var o,c,i=n[0],u=n[1],s=n[2],f=0,h=[];f<i.length;f++)c=i[f],a[c]&&h.push(a[c][0]),a[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(n);while(h.length)h.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,c=1;c<t.length;c++){var i=t[c];0!==a[i]&&(o=!1)}o&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},c={app:0},a={app:0},r=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-412a733c":"4572aec4","chunk-58bd6529":"c540987d","chunk-5f34d62f":"28a2af4b","chunk-141094df":"d344a63e","chunk-6634f689":"f9c5388d","chunk-7f31b9aa":"b7d5f199","chunk-161fd9e6":"fadd70d6","chunk-19a4fd8a":"ee71f7e9","chunk-4f77085b":"eec383ed","chunk-66bc96c8":"9b265f15","chunk-c763ffa6":"2119be05","chunk-bc312750":"1f9be356","chunk-2b7668a9":"43ef0864","chunk-30ccfe8b":"f8c96920","chunk-d01108a2":"b2d10169","chunk-2ece4918":"3cda09de","chunk-754d7750":"04374eb7","chunk-ccff77ac":"524733b3","chunk-bc59f3b6":"5bfaf28a","chunk-fd698fa6":"5aba3d20"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-412a733c":1,"chunk-58bd6529":1,"chunk-5f34d62f":1,"chunk-141094df":1,"chunk-6634f689":1,"chunk-7f31b9aa":1,"chunk-161fd9e6":1,"chunk-19a4fd8a":1,"chunk-4f77085b":1,"chunk-66bc96c8":1,"chunk-c763ffa6":1,"chunk-bc312750":1,"chunk-2b7668a9":1,"chunk-30ccfe8b":1,"chunk-d01108a2":1,"chunk-2ece4918":1,"chunk-754d7750":1,"chunk-ccff77ac":1,"chunk-bc59f3b6":1,"chunk-fd698fa6":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-412a733c":"87864304","chunk-58bd6529":"44c5cfdb","chunk-5f34d62f":"186abe3e","chunk-141094df":"84a9cab0","chunk-6634f689":"92edb2a3","chunk-7f31b9aa":"c5dfae44","chunk-161fd9e6":"6b6d6356","chunk-19a4fd8a":"b476c694","chunk-4f77085b":"b476c694","chunk-66bc96c8":"6b6d6356","chunk-c763ffa6":"e951926f","chunk-bc312750":"c1fe0021","chunk-2b7668a9":"09b972e6","chunk-30ccfe8b":"1567c46a","chunk-d01108a2":"7483bf67","chunk-2ece4918":"7cf1c495","chunk-754d7750":"4c0f0846","chunk-ccff77ac":"4aec5e52","chunk-bc59f3b6":"b551a3d1","chunk-fd698fa6":"4c0f0846"}[e]+".css",a=u.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===o||f===a))return n()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){s=h[i],f=s.getAttribute("data-href");if(f===o||f===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var o=n&&n.target&&n.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],l.parentNode.removeChild(l),t(r)},l.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(l)}).then(function(){c[e]=0}));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(function(n,t){o=a[e]=[n,t]});n.push(o[2]=r);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e),s=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+c+")");r.type=o,r.request=c,t[1](r)}a[e]=void 0}};var h=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var h=0;h<s.length;h++)n(s[h]);var l=f;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"07a4":function(e,n,t){"use strict";var o=t("2b0e"),c=t("2f62"),a=t("d225"),r=t("b0b4"),i=function(){function e(){Object(a["a"])(this,e),this.errors={}}return Object(r["a"])(e,[{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e}},{key:"clear",value:function(e){delete this.errors[e]}},{key:"reset",value:function(){this.errors={}}}]),e}(),u={alert:{},showAlert:!1,error:new i,date:(new Date).toISOString().substr(0,10),drawer:!0,loading:!1,logging:!1,user:{},token:localStorage.getItem("access_token")||null,incomes:{},income:{},showIncome:!1,createIncome:!1,expenses:{},showDailyExpenses:!1,dailyExpenses:[],expense:{},showExpense:!1,searchedExpenses:{},showSearchedExpenses:!1,createExpense:!1,pagination:null},s={alert:function(e,n){e.alert=n,e.showAlert=!0},showAlert:function(e,n){e.showAlert=n},drawer:function(e,n){e.drawer=n},setToken:function(e,n){e.token=n},loading:function(e,n){e.loading=n},logging:function(e,n){e.logging=n},setUser:function(e,n){e.user=n},incomes:function(e,n){e.incomes=n},income:function(e,n){e.income=n},showIncome:function(e,n){e.showIncome=n},createIncome:function(e,n){e.createIncome=n},expenses:function(e,n){e.expenses=n},showDailyExpenses:function(e,n){e.showDailyExpenses=n},dailyExpenses:function(e,n){e.dailyExpenses=n},date:function(e,n){e.date=n},expense:function(e,n){e.expense=n},showExpense:function(e,n){e.showExpense=n},searchedExpenses:function(e,n){e.searchedExpenses=n},showSearchedExpenses:function(e,n){e.showSearchedExpenses=n},createExpense:function(e,n){e.createExpense=n},pagination:function(e,n){e.pagination=n}},f=t("bc3a"),h=t.n(f),l=t("41cb"),m={login:function(e,n){e.commit("loading",!0),h.a.post("/api/login",n).then(function(n){var t=n.data.access_token;localStorage.setItem("access_token",t),e.commit("setToken",t),l["a"].push({name:"welcome"}),e.commit("alert",{message:"Successfully logged in.",color:"blue"})}).finally(function(){e.commit("loading",!1)})},sendResetPassword:function(e,n){e.commit("loading",!0),h.a.post("/api/password/email",n).then(function(){l["a"].push({name:"login"})}).finally(function(){e.commit("loading",!1)})},resetPassword:function(e,n){e.commit("loading",!0),h.a.post("/api/password/reset",n).then(function(){l["a"].push({name:"login"})}).finally(function(){e.commit("loading",!1)})},logout:function(e){e.commit("logging",!0),h.a.post("api/logout").then(function(){e.dispatch("clearToken"),l["a"].push({name:"login"}),e.commit("logging",!1)})},clearToken:function(e){localStorage.removeItem("access_token"),e.commit("setToken",null),l["a"].push({name:"login"})},getSummary:function(e){e.commit("loading",!0),h.a.get("/api/summary").then(function(n){e.commit("setUser",n.data),e.commit("loading",!1),e.commit("logging",!1)})},getIncomes:function(e,n){e.commit("loading",!0),h.a.post("/api/income",n).then(function(t){e.commit("incomes",t.data),e.commit("loading",!1),e.commit("pagination",n)})},showIncome:function(e,n){e.commit("loading",!0),h.a.get("/api/income/"+n).then(function(n){e.commit("loading",!1),e.commit("income",n.data),e.commit("showIncome",!0)})},storeIncome:function(e,n){e.commit("loading",!0),h.a.post("/api/income/store",n).then(function(){e.commit("createIncome",!1),e.dispatch("getIncomes",e.getters.pagination)}).finally(function(){e.commit("loading",!1)})},getExpenses:function(e,n){e.commit("loading",!0),h.a.post("/api/expense",n).then(function(t){e.commit("expenses",t.data),e.commit("loading",!1),e.commit("pagination",n)})},getDailyExpenses:function(e,n){e.commit("loading",!0),h.a.get("/api/expense/date/"+n).then(function(t){e.commit("loading",!1),e.commit("showDailyExpenses",!0),e.commit("dailyExpenses",t.data),e.commit("date",n)})},getExpense:function(e,n){e.commit("loading",!0),h.a.get("/api/expense/"+n).then(function(n){e.commit("loading",!1),e.commit("expense",n.data),e.commit("showExpense",!0)})},searchExpenses:function(e,n){e.commit("loading",!0),h.a.post("/api/expense/search",n).then(function(n){e.commit("loading",!1),e.commit("searchedExpenses",n.data)})},storeExpense:function(e,n){e.commit("loading",!0),h.a.post("/api/expense/store",n).then(function(){e.commit("createExpense",!1),e.dispatch("getExpenses",e.getters.pagination),e.dispatch("getDailyExpenses",n.date)}).finally(function(){e.commit("loading",!1)})}},d={alert:function(e){return e.alert},showAlert:function(e){return e.showAlert},loggedIn:function(e){return null!==e.token},token:function(e){return e.token},loading:function(e){return e.loading},logging:function(e){return e.logging},user:function(e){return e.user},incomes:function(e){return e.incomes},income:function(e){return e.income},showIncome:function(e){return e.showIncome},createIncome:function(e){return e.createIncome},expenses:function(e){return e.expenses},showDailyExpenses:function(e){return e.showDailyExpenses},dailyExpenses:function(e){return e.dailyExpenses},date:function(e){return e.date},expense:function(e){return e.expense},showExpense:function(e){return e.showExpense},searchedExpenses:function(e){return e.searchedExpenses},showSearchedExpenses:function(e){return e.showSearchedExpenses},createExpense:function(e){return e.createExpense},error:function(e){return e.error},pagination:function(e){return e.pagination}};o["a"].use(c["a"]);n["a"]=new c["a"].Store({state:u,mutations:s,actions:m,getters:d})},"41cb":function(e,n,t){"use strict";var o=t("2b0e"),c=t("8c4f"),a=t("07a4");o["a"].use(c["a"]);var r=new c["a"]({mode:"history",base:"/",routes:[{path:"/login",component:function(){return Promise.all([t.e("chunk-6634f689"),t.e("chunk-30ccfe8b")]).then(t.bind(null,"bcfa"))},children:[{path:"",name:"login",component:function(){return Promise.all([t.e("chunk-412a733c"),t.e("chunk-6634f689"),t.e("chunk-58bd6529"),t.e("chunk-7f31b9aa"),t.e("chunk-66bc96c8")]).then(t.bind(null,"5326"))}},{path:"/forgot-password",name:"forgotPassword",component:function(){return Promise.all([t.e("chunk-412a733c"),t.e("chunk-6634f689"),t.e("chunk-58bd6529"),t.e("chunk-7f31b9aa"),t.e("chunk-161fd9e6")]).then(t.bind(null,"fa67"))}},{path:"/password/reset/:token",name:"resetPassword",component:function(){return Promise.all([t.e("chunk-412a733c"),t.e("chunk-6634f689"),t.e("chunk-58bd6529"),t.e("chunk-7f31b9aa"),t.e("chunk-c763ffa6")]).then(t.bind(null,"0bff"))}}],meta:{requiresVisitor:!0}},{path:"/",component:function(){return Promise.all([t.e("chunk-6634f689"),t.e("chunk-2b7668a9")]).then(t.bind(null,"bb51"))},children:[{path:"",name:"welcome",component:function(){return Promise.all([t.e("chunk-412a733c"),t.e("chunk-6634f689"),t.e("chunk-bc312750")]).then(t.bind(null,"eec5"))}},{path:"summary",name:"summary",component:function(){return Promise.all([t.e("chunk-412a733c"),t.e("chunk-58bd6529"),t.e("chunk-5f34d62f"),t.e("chunk-141094df")]).then(t.bind(null,"762c"))},meta:{requiresAuth:!0}},{path:"income",name:"income",component:function(){return Promise.all([t.e("chunk-412a733c"),t.e("chunk-6634f689"),t.e("chunk-58bd6529"),t.e("chunk-7f31b9aa"),t.e("chunk-4f77085b")]).then(t.bind(null,"f7fa"))},meta:{requiresAuth:!0}},{path:"expense",name:"expense",component:function(){return Promise.all([t.e("chunk-412a733c"),t.e("chunk-6634f689"),t.e("chunk-58bd6529"),t.e("chunk-7f31b9aa"),t.e("chunk-19a4fd8a")]).then(t.bind(null,"60bc"))},meta:{requiresAuth:!0}},{path:"*",name:"404",component:function(){return t.e("chunk-d01108a2").then(t.bind(null,"7746"))}}],meta:{requiresAuth:!0}}]});r.beforeEach(function(e,n,t){a["a"].getters.error.reset(),e.matched.some(function(e){return e.meta.requiresAuth})?a["a"].getters.loggedIn?t():t({name:"login"}):e.matched.some(function(e){return e.meta.requiresVisitor})&&a["a"].getters.loggedIn?t({name:"home"}):t()}),n["a"]=r},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},a=[],r=t("bc3a"),i=t.n(r),u={name:"App",computed:{token:function(){return this.$store.getters.token}},watch:{token:function(){i.a.defaults.headers.common["Authorization"]="Bearer "+this.token}}},s=u,f=t("2877"),h=Object(f["a"])(s,c,a,!1,null,null,null),l=h.exports,m=t("41cb"),d=t("07a4"),p=t("f309");o["a"].use(p["a"]);var g=new p["a"]({icons:{iconfont:"mdi"}}),k=t("2ef0"),b=t.n(k);t("be3b"),o["a"].prototype._=b.a,o["a"].config.productionTip=!1,new o["a"]({router:m["a"],store:d["a"],vuetify:g,render:function(e){return e(l)}}).$mount("#app")},be3b:function(e,n,t){"use strict";t.r(n);var o=t("bc3a"),c=t.n(o),a=t("07a4");c.a.defaults.baseURL="https://my-personal-manager.herokuapp.com/",c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",c.a.defaults.headers.common["Authorization"]="Bearer "+a["a"].getters.token,c.a.interceptors.response.use(function(e){return e.data.message&&a["a"].commit("alert",{message:e.data.message,color:"blue"}),a["a"].getters.error.reset(),e},function(e){return e.response?(401===e.response.status?(a["a"].dispatch("clearToken"),a["a"].commit("loading",!1)):422===e.response.status?a["a"].state.error.record(e.response.data.errors):a["a"].commit("alert",{message:e.message,color:"red"}),console.log(e.response)):e.request?console.log(e.request):console.log("Error",e.message),Promise.reject(e)})}});
//# sourceMappingURL=app.2dd27be7.js.map