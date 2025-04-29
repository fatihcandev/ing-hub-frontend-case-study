/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(n,t,i)},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,m=f?f.emptyScript:"",v=p.reactiveElementPolyfillSupport,y=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const r=n?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of n){const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=n,this[n]=o.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??w)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,v?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,E=$.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+A,R=`<${C}>`,T=document,O=()=>T.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,N="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),J=new WeakMap,V=T.createTreeWalker(T,129);function q(t,e){if(!_(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":3===e?"<math>":"",s=D;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(s.lastIndex=h,c=s.exec(i),null!==c);)h=s.lastIndex,s===D?"!--"===c[1]?s=M:void 0!==c[1]?s=z:void 0!==c[2]?(I.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=o??D,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?j:'"'===c[3]?L:U):s===L||s===U?s=j:s===M||s===z?s=D:(s=j,o=void 0);const d=s===j&&t[e+1].startsWith("/>")?" ":"";r+=s===D?i+R:l>=0?(n.push(a),i.slice(0,l)+k+i.slice(l)+A+d):i+A+(-2===l?e:d)}return[q(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class G{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[c,l]=W(t,e);if(this.el=G.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=V.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(k)){const e=l[r++],i=n.getAttribute(t).split(A),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?X:"?"===s[1]?tt:"@"===s[1]?et:Q}),n.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:o}),n.removeAttribute(t));if(I.test(n.tagName)){const t=n.textContent.split(A),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],O()),V.nextNode(),a.push({type:2,index:++o});n.append(t[e],O())}}}else if(8===n.nodeType)if(n.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,n){if(e===F)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const r=P(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,n)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??T).importNode(e,!0);V.currentNode=n;let o=V.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=i[++s]}r!==a?.index&&(o=V.nextNode(),r++)}return V.currentNode=T,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),P(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>_(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Z(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}k(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Y(this.O(O()),this.O(O()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=K(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=K(this,n[i+s],e,s),a===F&&(a=this._$AH[s]),r||=!P(a)||a!==this._$AH[s],a===H?t=H:t!==H&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}r&&!n&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class et extends Q{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??H)===F)return;const i=this._$AH,n=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==H&&(i===H||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(G,Y),($.litHtmlVersions??=[]).push("3.3.0");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new Y(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const st=ot.litElementPolyfillSupport;function at(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var n=t[i];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)e.push({type:"CHAR",index:i,value:t[i++]});else{var o=1,r="";if("?"===t[a=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<t.length;)if("\\"!==t[a]){if(")"===t[a]){if(0==--o){a++;break}}else if("("===t[a]&&(o++,"?"!==t[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));r+=t[a++]}else r+=t[a++]+t[a++];if(o)throw new TypeError("Unbalanced pattern at ".concat(i));if(!r)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:r}),i=a}else{for(var s="",a=i+1;a<t.length;){var c=t.charCodeAt(a);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;s+=t[a++]}if(!s)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:s}),i=a}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),n=e.prefixes,o=void 0===n?"./":n,r=e.delimiter,s=void 0===r?"/#?":r,a=[],c=0,l=0,h="",d=function(t){if(l<i.length&&i[l].type===t)return i[l++].value},u=function(t){var e=d(t);if(void 0!==e)return e;var n=i[l],o=n.type,r=n.index;throw new TypeError("Unexpected ".concat(o," at ").concat(r,", expected ").concat(t))},p=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e},f=function(t){var e=a[a.length-1],i=t||(e&&"string"==typeof e?e:"");if(e&&!i)throw new TypeError('Must have text between two parameters, missing text after "'.concat(e.name,'"'));return!i||function(t){for(var e=0,i=s;e<i.length;e++){var n=i[e];if(t.indexOf(n)>-1)return!0}return!1}(i)?"[^".concat(ht(s),"]+?"):"(?:(?!".concat(ht(i),")[^").concat(ht(s),"])+?")};l<i.length;){var m=d("CHAR"),v=d("NAME"),y=d("PATTERN");if(v||y){var g=m||"";-1===o.indexOf(g)&&(h+=g,g=""),h&&(a.push(h),h=""),a.push({name:v||c++,prefix:g,suffix:"",pattern:y||f(g),modifier:d("MODIFIER")||""})}else{var w=m||d("ESCAPED_CHAR");if(w)h+=w;else if(h&&(a.push(h),h=""),d("OPEN")){g=p();var b=d("NAME")||"",x=d("PATTERN")||"",$=p();u("CLOSE"),a.push({name:b||(x?c++:""),pattern:b&&!x?f(g):x,prefix:g,suffix:$,modifier:d("MODIFIER")||""})}else u("END")}}return a}function ct(t,e){return lt(at(t,e),e)}function lt(t,e){void 0===e&&(e={});var i=dt(e),n=e.encode,o=void 0===n?function(t){return t}:n,r=e.validate,s=void 0===r||r,a=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)}));return function(e){for(var i="",n=0;n<t.length;n++){var r=t[n];if("string"!=typeof r){var c=e?e[r.name]:void 0,l="?"===r.modifier||"*"===r.modifier,h="*"===r.modifier||"+"===r.modifier;if(Array.isArray(c)){if(!h)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===c.length){if(l)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<c.length;d++){var u=o(c[d],r);if(s&&!a[n].test(u))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(u,'"'));i+=r.prefix+u+r.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!l){var p=h?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(p))}}else{u=o(String(c),r);if(s&&!a[n].test(u))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(u,'"'));i+=r.prefix+u+r.suffix}}else i+=r}return i}}function ht(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function dt(t){return t&&t.sensitive?"":"i"}function ut(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var n=i.strict,o=void 0!==n&&n,r=i.start,s=void 0===r||r,a=i.end,c=void 0===a||a,l=i.encode,h=void 0===l?function(t){return t}:l,d=i.delimiter,u=void 0===d?"/#?":d,p=i.endsWith,f="[".concat(ht(void 0===p?"":p),"]|$"),m="[".concat(ht(u),"]"),v=s?"^":"",y=0,g=t;y<g.length;y++){var w=g[y];if("string"==typeof w)v+=ht(h(w));else{var b=ht(h(w.prefix)),x=ht(h(w.suffix));if(w.pattern)if(e&&e.push(w),b||x)if("+"===w.modifier||"*"===w.modifier){var $="*"===w.modifier?"?":"";v+="(?:".concat(b,"((?:").concat(w.pattern,")(?:").concat(x).concat(b,"(?:").concat(w.pattern,"))*)").concat(x,")").concat($)}else v+="(?:".concat(b,"(").concat(w.pattern,")").concat(x,")").concat(w.modifier);else{if("+"===w.modifier||"*"===w.modifier)throw new TypeError('Can not repeat "'.concat(w.name,'" without a prefix and suffix'));v+="(".concat(w.pattern,")").concat(w.modifier)}else v+="(?:".concat(b).concat(x,")").concat(w.modifier)}}if(c)o||(v+="".concat(m,"?")),v+=i.endsWith?"(?=".concat(f,")"):"$";else{var E=t[t.length-1],S="string"==typeof E?m.indexOf(E[E.length-1])>-1:void 0===E;o||(v+="(?:".concat(m,"(?=").concat(f,"))?")),S||(v+="(?=".concat(m,"|").concat(f,")"))}return new RegExp(v,dt(i))}(at(t,i),e,i)}function pt(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=i.exec(t.source);o;)e.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var n=t.map((function(t){return pt(t,e,i).source}));return new RegExp("(?:".concat(n.join("|"),")"),dt(i))}(t,e,i):ut(t,e,i)}function ft(t){return"object"==typeof t&&!!t}function mt(t){return"function"==typeof t}function vt(t){return"string"==typeof t}function yt(t=[]){return Array.isArray(t)?t:[t]}function gt(t){return`[Vaadin.Router] ${t}`}st?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.0");class wt extends Error{code;context;constructor(t){super(gt(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}const bt=Symbol("NotFoundResult");function xt(t){return new wt(t)}function $t(t){return(Array.isArray(t)?t[0]:t)??""}function Et(t){return $t(t?.path)}const St=new Map;function kt(t){try{return decodeURIComponent(t)}catch{return t}}St.set("|false",{keys:[],pattern:/(?:)/u});var At=function(t,e,i=!1,n=[],o){const r=`${t}|${String(i)}`,s=$t(e);let a=St.get(r);if(!a){const e=[];a={keys:e,pattern:pt(t,e,{end:i,strict:""===t})},St.set(r,a)}const c=a.pattern.exec(s);if(!c)return null;const l={...o};for(let t=1;t<c.length;t++){const e=a.keys[t-1],i=e.name,n=c[t];void 0===n&&Object.hasOwn(l,i)||("+"===e.modifier||"*"===e.modifier?l[i]=n?n.split(/[/?#]/u).map(kt):[]:l[i]=n?kt(n):n)}return{keys:[...n,...a.keys],params:l,path:c[0]}};var Ct=function t(e,i,n,o,r){let s,a,c=0,l=Et(e);return l.startsWith("/")&&(n&&(l=l.substring(1)),n=!0),{next(h){if(e===h)return{done:!0,value:void 0};e.i??=function(t){return Array.isArray(t)&&t.length>0?t:void 0}(e.children);const d=e.i??[],u=!e.i&&!e.children;if(!s&&(s=At(l,i,u,o,r),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:e}};if(s&&d.length>0)for(;c<d.length;){if(!a){const o=d[c];o.parent=e;let r=s.path.length;r>0&&"/"===i.charAt(r)&&(r+=1),a=t(o,i.substring(r),n,s.keys,s.params)}const o=a.next(h);if(!o.done)return{done:!1,value:o.value};a=null,c+=1}return{done:!0,value:void 0}}}};function Rt(t){if(mt(t.route.action))return t.route.action(t)}class Tt extends Error{code;context;constructor(t,e){let i=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=Et(t.route);n&&(i+=` Resolution had failed on route: '${n}'`),super(i,e),this.code=e?.code,this.context=t}warn(){console.warn(this.message)}}class Ot{baseUrl;#t;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:e="",context:i,errorHandler:n,resolveRoute:o=Rt}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=n,this.resolveRoute=o,Array.isArray(t)?this.#e={i:t,m:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#t={...i,hash:"",next:async()=>bt,params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#t}get v(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.i??[]]}removeRoutes(){this.#e.i=[]}async resolve(t){const e=this,i={...this.#t,...vt(t)?{pathname:t}:t,next:c},n=Ct(this.#e,this.S(i.pathname)??i.pathname,!!this.baseUrl),o=this.resolveRoute;let r=null,s=null,a=i;async function c(t=!1,l=r?.value?.route,h){const d=null===h?r?.value?.route:void 0;if(r=s??n.next(d),s=null,!t&&(r.done||!function(t,e){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(r.value.route,l)))return s=r,bt;if(r.done)throw xt(i);a={...i,params:r.value.params,route:r.value.route,chain:a.chain?.slice()},function(t,e){const{path:i,route:n}=e;if(n&&!n.m){const e={path:i,route:n};if(n.parent&&t.chain)for(let e=t.chain.length-1;e>=0&&t.chain[e].route!==n.parent;e--)t.chain.pop();t.chain?.push(e)}}(a,r.value);const u=await o(a);return null!=u&&u!==bt?(a.result=(p=u)&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?u.result:u,e.#t=a,a):await c(t,l,u);var p}try{return await c(!0,this.#e)}catch(t){const e=t instanceof wt?t:new Tt(a,{code:500,cause:t});if(this.errorHandler)return a.result=this.errorHandler(e),a;throw t}}setRoutes(t){this.#e.i=[...yt(t)]}S(t){if(!this.baseUrl)return t;const e=this.v,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,n=new URL(i,e).href;return n.startsWith(e)?n.slice(e.length):void 0}addRoutes(t){return this.#e.i=[...this.#e.i??[],...yt(t)],this.getRoutes()}}function Pt(t,e,i,n){const o=e.name??n?.(e);if(o&&(t.has(o)?t.get(o)?.push(e):t.set(o,[e])),Array.isArray(i))for(const o of i)o.parent=e,Pt(t,o,o.i??o.children,n)}function _t(t,e){const i=t.get(e);if(i){if(i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i[0]}}var Nt=function(t,e={}){if(!(t instanceof Ot))throw new TypeError("An instance of Resolver is expected");const i=new Map,n=new Map;return(o,r)=>{let s=_t(n,o);if(!s&&(n.clear(),Pt(n,t.root,t.root.i,e.cacheKeyProvider),s=_t(n,o),!s))throw new Error(`Route "${o}" not found`);let a=s.fullPath?i.get(s.fullPath):void 0;if(!a){let t=Et(s),e=s.parent;for(;e;){const i=Et(e);i&&(t=`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`),e=e.parent}const n=at(t),o=Object.create(null);for(const t of n)vt(t)||(o[t.name]=!0);a={keys:o,tokens:n},i.set(t,a),s.fullPath=t}let c=lt(a.tokens,{encode:encodeURIComponent,...e})(r)||"/";if(e.stringifyQueryParams&&r){const t={};for(const[e,i]of Object.entries(r))!(e in a.keys)&&i&&(t[e]=i);const i=e.stringifyQueryParams(t);i&&(c+=i.startsWith("?")?i:`?${i}`)}return c}};const Dt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Mt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function zt(t,e){if("function"!=typeof t)return;const i=Dt.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const jt=function(t,e){if(window.Vaadin.developmentMode)return zt(t,e)};function Ut(){
/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Mt?!(Mt&&Object.keys(Mt).map((t=>Mt[t])).filter((t=>t.productionMode)).length>0):!zt((function(){return!0})))}catch(t){return!1}}());!function(t,e=(window.Vaadin??={})){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),jt(Ut);var Lt=async function(t,e){return t.classList.add(e),await new Promise((i=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const n=t.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${o}`),((t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)})(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),i()}))}else t.classList.remove(e),i()}))};function It(t){if(!t||!vt(t.path))throw new Error(gt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(mt(t.action)||Array.isArray(t.children)||mt(t.children)||vt(t.component)||vt(t.redirect)))throw new Error(gt(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach((e=>{e in t&&console.warn(gt(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function Bt(t){yt(t).forEach((t=>It(t)))}function Ft(t,e){const i=e.v;return i?new URL(t.replace(/^\//u,""),i).pathname:t}function Ht(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t),"")}function Jt({chain:t=[],hash:e="",params:i={},pathname:n="",redirectFrom:o,resolver:r,search:s=""},a){const c=t.map((t=>t.route));return{baseUrl:r?.baseUrl??"",getUrl:(e={})=>r?Ft(ct(function(t){return Ht(t.map((t=>t.route)))}(t))({...i,...e}),r):"",hash:e,params:i,pathname:n,redirectFrom:o,route:a??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:s,searchParams:new URLSearchParams(s)}}function Vt(t,e){const i={...t.params};return{redirect:{from:t.pathname,params:i,pathname:e}}}function qt(t,e,...i){if("function"==typeof t)return t.apply(e,i)}function Wt(t,e,...i){return n=>n&&ft(n)&&("cancel"in n||"redirect"in n)?n:qt(e?.[t],e,...i)}function Gt(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function Kt(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function Zt(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t instanceof MouseEvent?t.composedPath():t.path??[];for(let t=0;t<i.length;t++){const n=i[t];if("nodeName"in n&&"a"===n.nodeName.toLowerCase()){e=n;break}}for(;e&&e instanceof Node&&"a"!==Kt(e);)e=e.parentNode;if(!e||"a"!==Kt(e))return;const n=e;if(n.target&&"_self"!==n.target.toLowerCase())return;if(n.hasAttribute("download"))return;if(n.hasAttribute("router-ignore"))return;if(n.pathname===window.location.pathname&&""!==n.hash)return;const o=n.origin||function(t){const{port:e,protocol:i}=t;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}(n);if(o!==window.location.origin)return;const{hash:r,pathname:s,search:a}=n;Gt("go",{hash:r,pathname:s,search:a})&&t instanceof MouseEvent&&(t.preventDefault(),"click"===t.type&&window.scrollTo(0,0))}function Yt(t){if("vaadin-router-ignore"===t.state)return;const{hash:e,pathname:i,search:n}=window.location;Gt("go",{hash:e,pathname:i,search:n})}let Qt=[];const Xt={CLICK:{activate(){window.document.addEventListener("click",Zt)},inactivate(){window.document.removeEventListener("click",Zt)}},POPSTATE:{activate(){window.addEventListener("popstate",Yt)},inactivate(){window.removeEventListener("popstate",Yt)}}};function te(t=[]){Qt.forEach((t=>t.inactivate())),t.forEach((t=>t.activate())),Qt=t}function ee(){return{cancel:!0}}const ie={A:-1,params:{},route:{m:!0,children:[],path:"",action(){}},pathname:"",next:async()=>bt};class ne extends Ot{location=Jt({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#n=new WeakSet;#o=this.#r.bind(this);#s=0;#a;R;#c;#l=null;#h=null;constructor(t,e){const i=document.head.querySelector("base"),n=i?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...e,resolveRoute:async t=>await this.#d(t)}),te(Object.values(Xt)),this.setOutlet(t),this.subscribe()}async#d(t){const{route:e}=t;if(mt(e.children)){let i=await e.children(function({next:t,...e}){return e}(t));mt(e.children)||({children:i}=e),function(t,e){if(!Array.isArray(t)&&!ft(t))throw new Error(gt(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const i=yt(t);i.forEach((t=>It(t))),e.i=i}(i,e)}const i={component:t=>{const e=document.createElement(t);return this.#n.add(e),e},prevent:ee,redirect:e=>Vt(t,e)};return await Promise.resolve().then((async()=>{if(this.#u(t))return await qt(e.action,e,t,i)})).then((t=>null==t||"object"!=typeof t&&"symbol"!=typeof t||!(t instanceof HTMLElement||t===bt||ft(t)&&"redirect"in t)?vt(e.redirect)?i.redirect(e.redirect):void 0:t)).then((t=>null!=t?t:vt(e.component)?i.component(e.component):void 0))}setOutlet(t){t&&this.#p(t),this.#a=t}getOutlet(){return this.#a}async setRoutes(t,e=!1){return this.R=void 0,this.#c=void 0,Bt(t),super.setRoutes(t),e||this.#r(),await this.ready}addRoutes(t){return Bt(t),super.addRoutes(t)}async render(t,e=!1){this.#s+=1;const i=this.#s,n={...ie,...vt(t)?{hash:"",search:"",pathname:t}:t,A:i};return this.ready=this.#f(n,e),await this.ready}async#f(t,e){const{A:i}=t;try{const n=await this.resolve(t),o=await this.#m(n);if(!this.#u(o))return this.location;const r=this.R;if(o===r)return this.#v(r,!0),this.location;if(this.location=Jt(o),e&&this.#v(o,1===i),Gt("location-changed",{router:this,location:this.location}),o.P)return this.#y(o,r),this.R=o,this.location;this.#g(o,r);const s=this.#w(o);if(this.#b(o),this.#x(o,r),await s,this.#u(o))return this.#$(),this.R=o,this.location}catch(n){if(i===this.#s){e&&this.#v(this.context);for(const t of this.#a?.children??[])t.remove();throw this.location=Jt(Object.assign(t,{resolver:this})),Gt("error",{router:this,error:n,...t}),n}}return this.location}async#m(t,e=t){const i=await this.#E(e),n=i!==e?i:t,o=Ft(Ht(i.chain??[]),this)===i.pathname,r=async(t,e=t.route,i)=>{const n=await t.next(!1,e,i);return null===n||n===bt?o?t:null!=e.parent?await r(t,e.parent,n):n:n},s=await r(i);if(null==s||s===bt)throw xt(n);return s!==i?await this.#m(n,s):await this.#S(i)}async#E(t){const{result:e}=t;if(e instanceof HTMLElement)return function(t,e){if(e.location=Jt(t),t.chain){const i=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[i].element=e}}(t,e),t;if(e&&"redirect"in e){const i=await this.#k(e.redirect,t.N,t.A);return await this.#E(i)}throw e instanceof Error?e:new Error(gt(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`))}async#S(t){return await this.#A(t).then((async e=>e===this.R||e===t?e:await this.#m(e)))}async#A(t){const e=this.R??{},i=e.chain??[],n=t.chain??[];let o=Promise.resolve(void 0);const r=e=>Vt(t,e);if(t.D=0,t.P=!1,i.length){for(let e=0;e<Math.min(i.length,n.length)&&(i[e].route===n[e].route&&(i[e].path===n[e].path||i[e].element===n[e].element)&&this.#C(i[e].element,n[e].element));t.D++,e++);if(t.P=n.length===i.length&&t.D===n.length&&this.#C(t.result,e.result),t.P){for(let e=n.length-1;e>=0;e--)o=this.#R(o,t,{prevent:ee},i[e]);for(let e=0;e<n.length;e++)o=this.#T(o,t,{prevent:ee,redirect:r},n[e]),i[e].element.location=Jt(t,i[e].route)}else for(let e=i.length-1;e>=t.D;e--)o=this.#R(o,t,{prevent:ee},i[e])}if(!t.P)for(let e=0;e<n.length;e++)e<t.D?e<i.length&&i[e].element&&(i[e].element.location=Jt(t,i[e].route)):(o=this.#T(o,t,{prevent:ee,redirect:r},n[e]),n[e].element&&(n[e].element.location=Jt(t,n[e].route)));return await o.then((async e=>{if(e&&ft(e)){if("cancel"in e&&this.R)return this.R.A=t.A,this.R;if("redirect"in e)return await this.#k(e.redirect,t.N,t.A)}return t}))}async#R(t,e,i,n){const o=Jt(e);let r=await t;if(this.#u(e)){r=Wt("onBeforeLeave",n.element,o,i,this)(r)}if(!ft(r)||!("redirect"in r))return r}async#T(t,e,i,n){const o=Jt(e,n.route),r=await t;if(this.#u(e)){return Wt("onBeforeEnter",n.element,o,i,this)(r)}}#C(t,e){return t instanceof Element&&e instanceof Element&&(this.#n.has(t)&&this.#n.has(e)?t.localName===e.localName:t===e)}#u(t){return t.A===this.#s}async#k(t,e=0,i=0){if(e>256)throw new Error(gt(`Too many redirects when rendering ${t.from}`));return await this.resolve({...ie,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,N:e+1,A:i})}#p(t=this.#a){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(gt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#v({pathname:t,search:e="",hash:i=""},n){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==i){const o=n?"replaceState":"pushState";window.history[o](null,document.title,t+e+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#y(t,e){let i=this.#a;for(let n=0;n<(t.D??0);n++){const o=e?.chain?.[n].element;if(o){if(o.parentNode!==i)break;t.chain[n].element=o,i=o}}return i}#g(t,e){this.#p(),this.#O();const i=this.#y(t,e);this.#l=[],this.#h=Array.from(i?.children??[]).filter((e=>this.#i.has(e)&&e!==t.result));let n=i;for(let e=t.D??0;e<(t.chain?.length??0);e++){const o=t.chain[e].element;o&&(n?.appendChild(o),this.#i.add(o),n===i&&this.#l.push(o),n=o)}}#$(){if(this.#h)for(const t of this.#h)t.remove();this.#h=null,this.#l=null}#O(){if(this.#h&&this.#l){for(const t of this.#l)t.remove();this.#h=null,this.#l=null}}#x(t,e){if(e?.chain&&null!=t.D)for(let i=e.chain.length-1;i>=t.D&&this.#u(t);i--){const n=e.chain[i].element;if(n)try{const e=Jt(t);qt(n.onAfterLeave,n,e,{},this)}finally{if(this.#h?.includes(n))for(const t of n.children)t.remove()}}}#b(t){if(t.chain&&null!=t.D)for(let e=t.D;e<t.chain.length&&this.#u(t);e++){const i=t.chain[e].element;if(i){const n=Jt(t,t.chain[e].route);qt(i.onAfterEnter,i,n,{},this)}}}async#w(t){const e=this.#h?.[0],i=this.#l?.[0],n=[],{chain:o=[]}=t;let r;for(let t=o.length-1;t>=0;t--)if(o[t].route.animate){r=o[t].route.animate;break}if(e&&i&&r){const t=ft(r)&&r.leave?r.leave:"leaving",o=ft(r)&&r.enter?r.enter:"entering";n.push(Lt(e,t)),n.push(Lt(i,o))}return await Promise.all(n),t}subscribe(){window.addEventListener("vaadin-router-go",this.#o)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#o)}#r(t){const{pathname:e,search:i,hash:n}=t instanceof CustomEvent?t.detail:window.location;vt(this.S(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:i,hash:n},!0))}static setTriggers(...t){te(t)}urlForName(t,e){return this.#c||(this.#c=Nt(this,{cacheKeyProvider:t=>"component"in t&&"string"==typeof t.component?t.component:void 0})),Ft(this.#c(t,e??void 0),this)}urlForPath(t,e){return Ft(ct(t)(e??void 0),this)}static go(t){const{pathname:e,search:i,hash:n}=vt(t)?new URL(t,"http://a"):t;return Gt("go",{pathname:e,search:i,hash:n})}}const oe={en:{listEmployees:"Employee List",addEmployee:"Add Employee",editEmployee:"Edit Employee",firstName:"First Name",lastName:"Last Name",dateOfBirth:"Date of Birth",dateOfEmployment:"Date of Employment",phoneNumber:"Phone",email:"Email",department:"Department",position:"Position",analytics:"Analytics",tech:"Tech",junior:"Junior",medior:"Medior",senior:"Senior",selectDepartment:"Select Department",selectPosition:"Select Position",add:"Add",update:"Update",confirmAdd:"Are you sure you want to add this employee?",confirmUpdate:"Are you sure you want to update this employee?",confirmDelete:"Are you sure you want to delete this employee?",tableView:"Table View",listView:"List View",search:"Search",previous:"Previous",next:"Next",page:"Page",edit:"Edit",delete:"Delete",actions:"Actions",areYouSure:"Are you sure?",selectedEmployee:"Selected Employee record of",willBeDeleted:"will be deleted",proceed:"Proceed",cancel:"Cancel"},tr:{listEmployees:"Çalışan Listesi",addEmployee:"Çalışan Ekle",editEmployee:"Çalışanı Düzenle",firstName:"Ad",lastName:"Soyad",dateOfBirth:"Doğum Tarihi",dateOfEmployment:"İşe Başlama Tarihi",phoneNumber:"Telefon",email:"E-posta",department:"Departman",position:"Pozisyon",analytics:"Analitik",tech:"Teknoloji",junior:"Junior",medior:"Medior",senior:"Senior",selectDepartment:"Departman Seç",selectPosition:"Pozisyon Seç",add:"Ekle",update:"Güncelle",confirmAdd:"Bu çalışanı eklemek istediğinizden emin misiniz?",confirmUpdate:"Bu çalışanı güncellemek istediğinizden emin misiniz?",confirmDelete:"Bu çalışanı silmek istediğinizden emin misiniz?",tableView:"Tablo Görünümü",listView:"Liste Görünümü",search:"Ara",previous:"Önceki",next:"Sonraki",page:"Sayfa",edit:"Düzenle",delete:"Sil",actions:"İşlemler",areYouSure:"Emin misiniz?",selectedEmployee:"Seçilen çalışan kaydı",willBeDeleted:"silinecek",proceed:"İlerle",cancel:"İptal"}};class re extends rt{static styles=r`
    nav {
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      background-color: white;
    }
    nav a {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-right: 20px;
      text-decoration: none;
      font-size: 12px;
      color: var(--primary-color);
    }
    nav a:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      nav {
        padding: 8px;
      }
      nav a {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  `;render(){const t=document.documentElement.lang||"en",e=oe[t];return B`
      <nav>
        <a href="/">${e.listEmployees}</a>
        <a href="/add">
          <ion-icon name="add" style="font-size:16px;"></ion-icon>
          ${e.addEmployee}</a
        >
      </nav>
    `}}customElements.define("navigation-menu",re);class se{static state={employees:[]};static#P=new Set;static{const t=localStorage.getItem("employeeManagementState");if(t)try{const e=JSON.parse(t);this.state={...this.state,...e}}catch(t){console.error("Failed to load state from localStorage:",t),this.state={employees:[]}}}static getState(){return{...this.state}}static#_(){try{localStorage.setItem("employeeManagementState",JSON.stringify(this.state))}catch(t){console.error("Failed to save state to localStorage:",t)}}static#N(){this.#P.forEach((t=>t()))}static subscribe(t){return this.#P.add(t),()=>this.#P.delete(t)}static addEmployee(t){this.state.employees.push(t),this.#_(),this.#N()}static updateEmployee(t,e){const i=this.state.employees.findIndex((e=>e.id===t));-1!==i&&(this.state.employees[i]={...this.state.employees[i],...e},this.#_(),this.#N())}static deleteEmployee(t){this.state.employees=this.state.employees.filter((e=>e.id!==t)),this.#_(),this.#N()}static isEmailTaken(t,e){return this.state.employees.some((i=>i.email===t&&i.id!==e))}}class ae extends rt{static properties={employees:{type:Array},viewMode:{type:String},searchQuery:{type:String},currentPage:{type:Number},itemsPerPage:{type:Number},showConfirmDialog:{type:Boolean},employeeToDelete:{type:Object}};static styles=r`
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    .container {
      padding: 16px 32px;
      border-radius: 8px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .header h2 {
      color: var(--primary-color);
      font-size: 20px;
      margin: 0;
    }
    .view-toggle {
      display: flex;
    }
    .view-toggle button {
      padding: 5px;
      color: #666;
    }
    .view-toggle button.active {
      color: var(--primary-color);
    }
    .view-toggle img {
      width: 24px;
      height: 24px;
      opacity: 0.5;
    }
    .view-toggle button.active img {
      opacity: 1;
    }
    .controls {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    .controls input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      width: 200px;
    }
    .table-container {
      overflow-x: auto;
      background-color: white;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    th,
    td {
      padding: 12px;
      text-align: left;
      font-size: 14px;
    }
    th {
      background-color: #f9f9f9;
      color: var(--primary-color);
      font-weight: bold;
      white-space: pre;
      width: fit-content;
    }
    td {
      border-bottom: 1px solid #eee;
    }
    .employee-actions {
      display: flex;
      align-items: center;
    }
    .employee-actions button,
    .employee-actions a {
      color: var(--primary-color);
    }
    .list-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }
    .employee-card {
      background-color: white;
      border: 1px solid #eee;
      padding: 15px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    .employee-card .employee-actions {
      position: absolute;
      top: 8px;
      right: 8px;
    }
    .employee-card p {
      margin: 5px 0;
      font-size: 14px;
    }
    .employee-card .actions {
      margin-top: 10px;
    }
    .pagination {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .pagination button {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
    }
    .pagination button:not(.current):hover {
      background-color: #eee;
    }
    .pagination button:disabled {
      background-color: #eee;
      cursor: not-allowed;
    }
    .pagination .current {
      background-color: var(--primary-color);
      color: white;
    }
    .dialog-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgb(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .confirm-dialog {
      background-color: white;
      padding: 20px;
      border: 1px solid #ddd;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      border-radius: 8px;
      width: 300px;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .confirm-dialog h6 {
      font-size: 20px;
      margin: 0;
      color: var(--primary-color);
    }
    .confirm-dialog p {
      font-size: 14px;
      margin: 0;
      color: #666;
    }
    .confirm-dialog .actions {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .confirm-dialog button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    .confirm-dialog .proceed {
      background-color: var(--primary-color);
      color: white;
    }
    .confirm-dialog .cancel {
      background-color: #fff;
      border: 1px solid #ddd;
      color: #666;
    }
    .confirm-dialog .close {
      position: absolute;
      top: 0;
      right: 0px;
      font-size: 32px;
      font-weight: normal;
      color: var(--primary-color);
    }
    tbody:has(.empty-state-container) {
      position: relative;
      height: 50px;
    }
    .empty-state-container {
      padding: 20px;
      text-align: center;
      position: absolute;
      inset: 0;
    }
    @media (max-width: 768px) {
      .container {
        padding: 16px;
      }
      .view-toggle {
        align-self: flex-end;
      }
      .controls {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
      }
      .controls input {
        width: 100%;
      }
      table {
        font-size: 12px;
      }
      th,
      td {
        padding: 8px;
      }
      .employee-card {
        width: 100%;
      }
      .pagination button {
        padding: 6px 10px;
        font-size: 12px;
      }
      .confirm-dialog {
        width: 90%;
      }
    }
  `;constructor(){super(),this.employees=se.getState().employees,this.viewMode="table",this.searchQuery="",this.currentPage=1,this.itemsPerPage=10,this.showConfirmDialog=!1,this.employeeToDelete=null,se.subscribe((()=>{this.employees=se.getState().employees,this.requestUpdate()}))}handleSearch(t){this.searchQuery=t.target.value.toLowerCase(),this.currentPage=1}setViewMode(t){this.viewMode=t}openConfirmDialog(t){this.employeeToDelete=t,this.showConfirmDialog=!0}closeConfirmDialog(){this.showConfirmDialog=!1,this.employeeToDelete=null}handleDelete(){this.employeeToDelete&&(se.deleteEmployee(this.employeeToDelete.id),this.closeConfirmDialog())}get filteredEmployees(){return this.employees.filter((t=>t.firstName.toLowerCase().includes(this.searchQuery)||t.lastName.toLowerCase().includes(this.searchQuery)||t.email.toLowerCase().includes(this.searchQuery)))}get paginatedEmployees(){const t=(this.currentPage-1)*this.itemsPerPage;return this.filteredEmployees.slice(t,t+this.itemsPerPage)}get totalPages(){return Math.ceil(this.filteredEmployees.length/this.itemsPerPage)}render(){const t=document.documentElement.lang||"en",e=oe[t];return B`
      <div class="container">
        <div class="header">
          <h2>${e.listEmployees}</h2>
          <div class="view-toggle">
            <button
              class=${"table"===this.viewMode?"active":""}
              @click=${()=>this.setViewMode("table")}
            >
              <ion-icon name="menu" style="font-size:24px;"></ion-icon>
            </button>
            <button
              class=${"list"===this.viewMode?"active":""}
              @click=${()=>this.setViewMode("list")}
            >
              <ion-icon name="grid" style="font-size:16px;"></ion-icon>
            </button>
          </div>
        </div>
        <div class="controls">
          <input
            type="text"
            placeholder="${e.search}"
            @input=${this.handleSearch}
          />
        </div>
        ${"table"===this.viewMode?this.renderTable(e):this.renderList(e)}
        <div class="pagination">
          <button
            @click=${()=>this.currentPage--}
            ?disabled=${1===this.currentPage}
            class="pagination-button"
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          ${Array.from({length:this.totalPages},((t,e)=>e+1)).map((t=>B`
              <button
                class=${t===this.currentPage?"current":""}
                @click=${()=>this.currentPage=t}
              >
                ${t}
              </button>
            `))}
          <button
            @click=${()=>this.currentPage++}
            ?disabled=${this.currentPage===this.totalPages}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
        ${this.showConfirmDialog?B`
              <div class="dialog-backdrop">
                <div class="confirm-dialog">
                  <button class="close" @click=${this.closeConfirmDialog}>
                    ×
                  </button>
                  <h6>${e.areYouSure}</h6>
                  <p>
                    ${e.selectedEmployee} ${this.employeeToDelete.firstName}
                    ${this.employeeToDelete.lastName} ${e.willBeDeleted}
                  </p>
                  <div class="actions">
                    <button class="proceed" @click=${this.handleDelete}>
                      ${e.proceed}
                    </button>
                    <button class="cancel" @click=${this.closeConfirmDialog}>
                      ${e.cancel}
                    </button>
                  </div>
                </div>
              </div>
            `:""}
      </div>
    `}renderActions(t){return B`
      <div class="employee-actions">
        <a href=${`/edit/${t.id}`}>
          <ion-icon name="create-outline" style="font-size:16px;"></ion-icon>
        </a>
        <button @click=${()=>this.openConfirmDialog(t)}>
          <ion-icon name="trash" style="font-size:16px;"></ion-icon>
        </button>
      </div>
    `}renderTable(t){return B`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>${t.firstName}</th>
              <th>${t.lastName}</th>
              <th>${t.dateOfEmployment}</th>
              <th>${t.dateOfBirth}</th>
              <th>${t.phoneNumber}</th>
              <th>${t.email}</th>
              <th>${t.department}</th>
              <th>${t.position}</th>
              <th>${t.actions}</th>
            </tr>
          </thead>
          <tbody>
            ${this.paginatedEmployees.length>0?this.paginatedEmployees.map((t=>B`
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>${t.firstName}</td>
                      <td>${t.lastName}</td>
                      <td>${t.dateOfEmployment}</td>
                      <td>${t.dateOfBirth}</td>
                      <td>${t.phoneNumber}</td>
                      <td>${t.email}</td>
                      <td>${t.department}</td>
                      <td>${t.position}</td>
                      <td class="actions">${this.renderActions(t)}</td>
                    </tr>
                  `)):B`
                  <div class="empty-state-container">
                    There are no employees...
                  </div>
                `}
          </tbody>
        </table>
      </div>
    `}renderList(t){return B`
      <div class="list-view">
        ${this.paginatedEmployees.map((e=>B`
            <div class="employee-card">
              <p><strong>${t.firstName}:</strong> ${e.firstName}</p>
              <p><strong>${t.lastName}:</strong> ${e.lastName}</p>
              <p>
                <strong>${t.dateOfEmployment}:</strong> ${e.dateOfEmployment}
              </p>
              <p><strong>${t.dateOfBirth}:</strong> ${e.dateOfBirth}</p>
              <p><strong>${t.phoneNumber}:</strong> ${e.phoneNumber}</p>
              <p><strong>${t.email}:</strong> ${e.email}</p>
              <p><strong>${t.department}:</strong> ${e.department}</p>
              <p><strong>${t.position}:</strong> ${e.position}</p>
              ${this.renderActions(e)}
            </div>
          `))}
      </div>
    `}}customElements.define("employee-list",ae);class ce extends rt{static properties={employee:{type:Object},id:{type:String},errors:{type:Object}};static styles=r`
    .container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 600px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: white;
    }
    .form-container h2 {
      color: var(--primary-color);
      margin: 0;
      margin-bottom: 16px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input,
    select {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .error {
      color: red;
      font-size: 12px;
      margin-top: 4px;
    }
    button {
      padding: 10px 20px;
      background-color: var(--primary-color);
      align-self: flex-start;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    @media (max-width: 768px) {
      .container {
        align-items: flex-start;
      }
      .form-container {
        padding: 10px;
        margin-top: 16px;
        border: none;
        background-color: transparent;
      }
      input,
      select {
        font-size: 14px;
      }
    }
  `;constructor(){super(),this.employee={firstName:"",lastName:"",dateOfEmployment:"",dateOfBirth:"",phoneNumber:"",email:"",department:"",position:""},this.errors={}}updated(t){t.has("id")&&this.loadEmployee()}loadEmployee(){if(this.id){const t=se.getState().employees.find((t=>t.id===this.id));t&&(this.employee={...t})}}validateForm(){const t={},e=/^[A-Za-z\s]{2,50}$/;return e.test(this.employee.firstName)||(t.firstName="First name must be 2-50 letters"),e.test(this.employee.lastName)||(t.lastName="Last name must be 2-50 letters"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.employee.email)||(t.email="Invalid email format"),se.isEmailTaken(this.employee.email,this.id)&&(t.email="Email already exists"),/^\+?\d{10,15}$/.test(this.employee.phoneNumber)||(t.phoneNumber="Invalid phone number"),this.employee.dateOfBirth||(t.dateOfBirth="Date of birth is required"),this.employee.dateOfEmployment||(t.dateOfEmployment="Date of employment is required"),this.employee.department||(t.department="Department is required"),this.employee.position||(t.position="Position is required"),this.errors=t,0===Object.keys(t).length}handleSubmit(t){t.preventDefault(),this.validateForm()&&(this.id?se.updateEmployee(this.id,this.employee):se.addEmployee(this.employee),window.location.href="/")}handleInput(t,e){this.employee={...this.employee,[e]:t.target.value},this.requestUpdate()}render(){const t=document.documentElement.lang||"en",e=oe[t];return B`
      <div class="container">
        <div class="form-container">
          <h2>${this.id?e.editEmployee:e.addEmployee}</h2>
          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label>${e.firstName}</label>
              <input
                type="text"
                .value=${this.employee.firstName}
                @input=${t=>this.handleInput(t,"firstName")}
              />
              ${this.errors.firstName?B`<div class="error">${this.errors.firstName}</div>`:""}
            </div>
            <div class="form-group">
              <label>${e.lastName}</label>
              <input
                type="text"
                .value=${this.employee.lastName}
                @input=${t=>this.handleInput(t,"lastName")}
              />
              ${this.errors.lastName?B`<div class="error">${this.errors.lastName}</div>`:""}
            </div>
            <div class="form-group">
              <label>${e.dateOfBirth}</label>
              <input
                type="date"
                .value=${this.employee.dateOfBirth}
                @input=${t=>this.handleInput(t,"dateOfBirth")}
              />
              ${this.errors.dateOfBirth?B`<div class="error">${this.errors.dateOfBirth}</div>`:""}
            </div>
            <div class="form-group">
              <label>${e.dateOfEmployment}</label>
              <input
                type="date"
                .value=${this.employee.dateOfEmployment}
                @input=${t=>this.handleInput(t,"dateOfEmployment")}
              />
              ${this.errors.dateOfEmployment?B`<div class="error">${this.errors.dateOfEmployment}</div>`:""}
            </div>
            <div class="form-group">
              <label>${e.phoneNumber}</label>
              <input
                type="text"
                .value=${this.employee.phoneNumber}
                @input=${t=>this.handleInput(t,"phoneNumber")}
              />
              ${this.errors.phoneNumber?B`<div class="error">${this.errors.phoneNumber}</div>`:""}
            </div>
            <div class="form-group">
              <label>${e.email}</label>
              <input
                type="email"
                .value=${this.employee.email}
                @input=${t=>this.handleInput(t,"email")}
              />
              ${this.errors.email?B`<div class="error">${this.errors.email}</div>`:""}
            </div>
            <div class="form-group">
              <label>${e.department}</label>
              <select @change=${t=>this.handleInput(t,"department")}>
                <option value="">${e.selectDepartment}</option>
                <option
                  value="Analytics"
                  ?selected=${"Analytics"===this.employee.department}
                >
                  ${e.analytics}
                </option>
                <option
                  value="Tech"
                  ?selected=${"Tech"===this.employee.department}
                >
                  ${e.tech}
                </option>
              </select>
              ${this.errors.department?B`<div class="error">${this.errors.department}</div>`:""}
            </div>
            <div class="form-group">
              <label>${e.position}</label>
              <select @change=${t=>this.handleInput(t,"position")}>
                <option value="">${e.selectPosition}</option>
                <option
                  value="Junior"
                  ?selected=${"Junior"===this.employee.position}
                >
                  ${e.junior}
                </option>
                <option
                  value="Medior"
                  ?selected=${"Medior"===this.employee.position}
                >
                  ${e.medior}
                </option>
                <option
                  value="Senior"
                  ?selected=${"Senior"===this.employee.position}
                >
                  ${e.senior}
                </option>
              </select>
              ${this.errors.position?B`<div class="error">${this.errors.position}</div>`:""}
            </div>
            <button type="submit">${this.id?e.update:e.add}</button>
          </form>
        </div>
      </div>
    `}}customElements.define("employee-form",ce);class le extends rt{static styles=r`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      min-height: 100vh;
    }
  `;firstUpdated(){super.firstUpdated();new ne(this.shadowRoot.querySelector("#outlet")).setRoutes([{path:"/",component:"employee-list"},{path:"/add",component:"employee-form"},{path:"/edit/:id",component:"employee-form"},{path:"(.*)",redirect:"/"}])}render(){return B`
      <navigation-menu></navigation-menu>
      <div id="outlet"></div>
    `}}customElements.define("employee-app",le);
