!function(){var t={312:function(t){!function(){var e=function(t,i){var n=this;e.count=(e.count||0)+1,this.count=e.count,this.isOpened=!1,this.input=s(t),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-expanded","false"),this.input.setAttribute("aria-owns","awesomplete_list_"+this.count),this.input.setAttribute("role","combobox"),this.options=i=i||{},function(t,e,i){for(var n in e){var s=e[n],r=t.input.getAttribute("data-"+n.toLowerCase());t[n]="number"==typeof s?parseInt(r):!1===s?null!==r:s instanceof Function?null:r,t[n]||0===t[n]||(t[n]=n in i?i[n]:s)}}(this,{minChars:2,maxItems:10,autoFirst:!1,data:e.DATA,filter:e.FILTER_CONTAINS,sort:!1!==i.sort&&e.SORT_BYLENGTH,container:e.CONTAINER,item:e.ITEM,replace:e.REPLACE,tabSelect:!1},i),this.index=-1,this.container=this.container(t),this.ul=s.create("ul",{hidden:"hidden",role:"listbox",id:"awesomplete_list_"+this.count,inside:this.container}),this.status=s.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-atomic":!0,inside:this.container,textContent:0!=this.minChars?"Type "+this.minChars+" or more characters for results.":"Begin typing for results."}),this._events={input:{input:this.evaluate.bind(this),blur:this.close.bind(this,{reason:"blur"}),keydown:function(t){var e=t.keyCode;n.opened&&(13===e&&n.selected?(t.preventDefault(),n.select(void 0,void 0,t)):9===e&&n.selected&&n.tabSelect?n.select(void 0,void 0,t):27===e?n.close({reason:"esc"}):38!==e&&40!==e||(t.preventDefault(),n[38===e?"previous":"next"]()))}},form:{submit:this.close.bind(this,{reason:"submit"})},ul:{mousedown:function(t){t.preventDefault()},click:function(t){var e=t.target;if(e!==this){for(;e&&!/li/i.test(e.nodeName);)e=e.parentNode;e&&0===t.button&&(t.preventDefault(),n.select(e,t.target,t))}}}},s.bind(this.input,this._events.input),s.bind(this.input.form,this._events.form),s.bind(this.ul,this._events.ul),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||i.list||[],e.all.push(this)};function i(t){var e=Array.isArray(t)?{label:t[0],value:t[1]}:"object"==typeof t&&"label"in t&&"value"in t?t:{label:t,value:t};this.label=e.label||e.value,this.value=e.value}e.prototype={set list(t){if(Array.isArray(t))this._list=t;else if("string"==typeof t&&t.indexOf(",")>-1)this._list=t.split(/\s*,\s*/);else if((t=s(t))&&t.children){var e=[];n.apply(t.children).forEach((function(t){if(!t.disabled){var i=t.textContent.trim(),n=t.value||i,s=t.label||i;""!==n&&e.push({label:s,value:n})}})),this._list=e}document.activeElement===this.input&&this.evaluate()},get selected(){return this.index>-1},get opened(){return this.isOpened},close:function(t){this.opened&&(this.input.setAttribute("aria-expanded","false"),this.ul.setAttribute("hidden",""),this.isOpened=!1,this.index=-1,this.status.setAttribute("hidden",""),s.fire(this.input,"awesomplete-close",t||{}))},open:function(){this.input.setAttribute("aria-expanded","true"),this.ul.removeAttribute("hidden"),this.isOpened=!0,this.status.removeAttribute("hidden"),this.autoFirst&&-1===this.index&&this.goto(0),s.fire(this.input,"awesomplete-open")},destroy:function(){if(s.unbind(this.input,this._events.input),s.unbind(this.input.form,this._events.form),!this.options.container){var t=this.container.parentNode;t.insertBefore(this.input,this.container),t.removeChild(this.container)}this.input.removeAttribute("autocomplete"),this.input.removeAttribute("aria-autocomplete");var i=e.all.indexOf(this);-1!==i&&e.all.splice(i,1)},next:function(){var t=this.ul.children.length;this.goto(this.index<t-1?this.index+1:t?0:-1)},previous:function(){var t=this.ul.children.length,e=this.index-1;this.goto(this.selected&&-1!==e?e:t-1)},goto:function(t){var e=this.ul.children;this.selected&&e[this.index].setAttribute("aria-selected","false"),this.index=t,t>-1&&e.length>0&&(e[t].setAttribute("aria-selected","true"),this.status.textContent=e[t].textContent+", list item "+(t+1)+" of "+e.length,this.input.setAttribute("aria-activedescendant",this.ul.id+"_item_"+this.index),this.ul.scrollTop=e[t].offsetTop-this.ul.clientHeight+e[t].clientHeight,s.fire(this.input,"awesomplete-highlight",{text:this.suggestions[this.index]}))},select:function(t,e,i){if(t?this.index=s.siblingIndex(t):t=this.ul.children[this.index],t){var n=this.suggestions[this.index];s.fire(this.input,"awesomplete-select",{text:n,origin:e||t,originalEvent:i})&&(this.replace(n),this.close({reason:"select"}),s.fire(this.input,"awesomplete-selectcomplete",{text:n,originalEvent:i}))}},evaluate:function(){var t=this,e=this.input.value;e.length>=this.minChars&&this._list&&this._list.length>0?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map((function(n){return new i(t.data(n,e))})).filter((function(i){return t.filter(i,e)})),!1!==this.sort&&(this.suggestions=this.suggestions.sort(this.sort)),this.suggestions=this.suggestions.slice(0,this.maxItems),this.suggestions.forEach((function(i,n){t.ul.appendChild(t.item(i,e,n))})),0===this.ul.children.length?(this.status.textContent="No results found",this.close({reason:"nomatches"})):(this.open(),this.status.textContent=this.ul.children.length+" results found")):(this.close({reason:"nomatches"}),this.status.textContent="No results found")}},e.all=[],e.FILTER_CONTAINS=function(t,e){return RegExp(s.regExpEscape(e.trim()),"i").test(t)},e.FILTER_STARTSWITH=function(t,e){return RegExp("^"+s.regExpEscape(e.trim()),"i").test(t)},e.SORT_BYLENGTH=function(t,e){return t.length!==e.length?t.length-e.length:t<e?-1:1},e.CONTAINER=function(t){return s.create("div",{className:"awesomplete",around:t})},e.ITEM=function(t,e,i){var n=""===e.trim()?t:t.replace(RegExp(s.regExpEscape(e.trim()),"gi"),"<mark>$&</mark>");return s.create("li",{innerHTML:n,role:"option","aria-selected":"false",id:"awesomplete_list_"+this.count+"_item_"+i})},e.REPLACE=function(t){this.input.value=t.value},e.DATA=function(t){return t},Object.defineProperty(i.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}}),i.prototype.toString=i.prototype.valueOf=function(){return""+this.label};var n=Array.prototype.slice;function s(t,e){return"string"==typeof t?(e||document).querySelector(t):t||null}function r(t,e){return n.call((e||document).querySelectorAll(t))}function o(){r("input.awesomplete").forEach((function(t){new e(t)}))}s.create=function(t,e){var i=document.createElement(t);for(var n in e){var r=e[n];if("inside"===n)s(r).appendChild(i);else if("around"===n){var o=s(r);o.parentNode.insertBefore(i,o),i.appendChild(o),null!=o.getAttribute("autofocus")&&o.focus()}else n in i?i[n]=r:i.setAttribute(n,r)}return i},s.bind=function(t,e){if(t)for(var i in e){var n=e[i];i.split(/\s+/).forEach((function(e){t.addEventListener(e,n)}))}},s.unbind=function(t,e){if(t)for(var i in e){var n=e[i];i.split(/\s+/).forEach((function(e){t.removeEventListener(e,n)}))}},s.fire=function(t,e,i){var n=document.createEvent("HTMLEvents");for(var s in n.initEvent(e,!0,!0),i)n[s]=i[s];return t.dispatchEvent(n)},s.regExpEscape=function(t){return t.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},s.siblingIndex=function(t){for(var e=0;t=t.previousElementSibling;e++);return e},"undefined"!=typeof self&&(self.Awesomplete=e),"undefined"!=typeof Document&&("loading"!==document.readyState?o():document.addEventListener("DOMContentLoaded",o)),e.$=s,e.$$=r,t.exports&&(t.exports=e)}()},703:function(t,e,i){"use strict";var n=i(414);function s(){}function r(){}r.resetWarningCache=s,t.exports=function(){function t(t,e,i,s,r,o){if(o!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:s};return i.PropTypes=i,i}},697:function(t,e,i){t.exports=i(703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}!function(){"use strict";var t=window.wp.element,e=window.wp.apiFetch,n=window.wp.blockEditor,s=window.wp.blocks,r=window.wp.components,o=window.wp.compose,a=window.wp.data,l=window.wp.hooks,u=window.wp.i18n,c=i(312),h=i(697);function p(t,e){const i=t.lastIndexOf(" ",e-1),n=t.indexOf(" ",e),s=i<0?0:i+1,r=n<0?t.length:n;return{start:s,end:r,value:t.substring(s,r)}}function d(t,e){return c.FILTER_CONTAINS(t,p(e,this.input.selectionStart).value)}function f(t,e){return c.ITEM(t,p(e,this.input.selectionStart).value)}const m=t=>function(e){t(function(t,e,i){return(t=t.length>e.start?t.slice(0,e.start)+t.slice(e.start).replace(e.value,i+" "):`${t} ${i} `).replace(/\s+/g," ")}(this.input.value,p(this.input.value,this.input.selectionStart),e))};function v(t){[...this.ul.children].find((e=>e.textContent===t.text.value)).scrollIntoView({block:"end",inline:"nearest"})}function g(t){const e=t.target.value.indexOf(t.text.value)+t.text.value.length+1;t.target.setSelectionRange(e,e)}function b(t){["ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes(t.key)&&this.evaluate()}function E(){this.evaluate()}const x=(0,t.memo)((({classNameSuggestions:e})=>(0,t.createElement)("datalist",{id:"site-custom-class-names"},e.map((e=>(0,t.createElement)("option",{key:e,value:e})))))),w=({value:i,onChange:n})=>{const[s,o]=(0,t.useState)([]);(0,t.useEffect)((()=>{!async function(){try{o(await e({path:"block-class-autocomplete/v1/suggestions"}))}catch(t){}}()}),[]);const l=(0,t.useRef)(null);return(0,t.useEffect)((()=>{if(s.length)return function(t,{onChange:e}){const i=new c(t,{sort:!1,filter:d,item:f,replace:m(e)}),n=v.bind(i),s=g.bind(i),r=b.bind(i),o=E.bind(i);return t.addEventListener("awesomplete-highlight",n),t.addEventListener("awesomplete-selectcomplete",s),t.addEventListener("keyup",r),t.addEventListener("click",o),()=>{t.removeEventListener("awesomplete-hightlight",n),t.addEventListener("awesomplete-selectcomplete",s),t.removeEventListener("keyup",r),t.removeEventListener("click",o),i.destroy()}}(l.current,{onChange:n})}),[s]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.TextControl,{ref:l,__nextHasNoMarginBottom:!0,autoComplete:"off",label:(0,u.__)("Additional CSS class(es)"),value:i,list:"site-custom-class-names",onChange:n,help:(0,u.__)("Separate multiple classes with spaces.")}),(0,t.createElement)(a.AsyncModeProvider,{value:!0},(0,t.createElement)(x,{classNameSuggestions:s})))};w.propTypes={value:h.string,onChange:h.func};const y=(0,o.createHigherOrderComponent)((e=>i=>(0,s.hasBlockSupport)(i.name,"customClassName",!0)&&i.isSelected?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{...i}),(0,t.createElement)(n.InspectorControls,{group:"advanced"},(0,t.createElement)(w,{value:i.attributes.className||"",onChange:t=>{i.setAttributes({className:""!==t?t:void 0})}}))):(0,t.createElement)(e,{...i})),"withInspectorControls");(0,l.removeFilter)("editor.BlockEdit","core/editor/custom-class-name/with-inspector-control"),(0,l.addFilter)("editor.BlockEdit","site/custom-class-name/withInspectorControls",y)}()}();