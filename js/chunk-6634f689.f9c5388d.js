(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6634f689"],{"20f6":function(t,e,s){},"4b85":function(t,e,s){},"58df":function(t,e,s){"use strict";s.d(e,"a",function(){return a});var r=s("2b0e");function a(...t){return r["a"].extend({mixins:t})}},6544:function(t,e){t.exports=function(t,e){var s="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var r in"function"===typeof t.exports&&(s.components=t.exports.options.components),s.components=s.components||{},e)s.components[r]=s.components[r]||e[r]}},7560:function(t,e,s){"use strict";s.d(e,"b",function(){return a});var r=s("2b0e");function a(t){const e={...t.props,...t.injections},s=n.options.computed.isDark.call(e);return n.options.computed.themeClasses.call({isDark:s})}const n=r["a"].extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});e["a"]=n},a523:function(t,e,s){"use strict";s("20f6"),s("4b85");var r=s("e8f2");
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */
function a(){const t={};let e,s,r=arguments.length;while(r--)for(e of Object.keys(arguments[r]))switch(e){case"class":case"style":case"directives":Array.isArray(t[e])||(t[e]=[]),t[e]=t[e].concat(arguments[r][e]);break;case"staticClass":if(!arguments[r][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[r][e].trim();break;case"on":case"nativeOn":t[e]||(t[e]={});const a=t[e];for(s of Object.keys(arguments[r][e]||{}))a[s]?a[s]=Array().concat(a[s],arguments[r][e][s]):a[s]=arguments[r][e][s];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":t[e]||(t[e]={}),t[e]={...arguments[r][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[r][e])}return t}e["a"]=Object(r["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:r}){let n;const{attrs:o}=s;return o&&(s.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,a(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),r)}})},e8f2:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var r=s("2b0e");function a(t){return r["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:r,children:a}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:n}=r;if(n){r.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(r.staticClass+=` ${t.join(" ")}`)}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),e(s.tag,r,a)}})}}}]);
//# sourceMappingURL=chunk-6634f689.f9c5388d.js.map