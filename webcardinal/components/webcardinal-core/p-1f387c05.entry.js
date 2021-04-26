import{r as t,c as e,h as o}from"./p-d4191909.js";import{H as n}from"./p-f0bd18cd.js";import{d as s,e as i,f as a,g as r,h as l,i as c}from"./p-61a7920a.js";import{U as d,D as h,V as u,L as p}from"./p-0aafcc26.js";import{p as m}from"./p-794858b0.js";import"./p-0c3518a5.js";import"./p-ad52b503.js";import{i as f}from"./p-a247a1f7.js";import{C as b,p as w,e as g}from"./p-c785e2db.js";const y={Controller:b,WebcController:class extends b{constructor(...t){super(...t)}showModal(t,e,o,n,s={}){return this.createWebcModal({...s,modalTitle:e=e||"Info",modalContent:t,onConfirm:o,onClose:n})}showModalFromTemplate(t,e,o,n={}){return this.createWebcModal({...n,template:t,onConfirm:e,onClose:o})}showErrorModal(t,e,o,n,s={}){let i;return e=e||"Error",i=t instanceof Error?t.message:"object"==typeof t?t.toString():t,this.createWebcModal({disableClosing:!0,showCancelButton:!1,...s,modalTitle:e,modalContent:i,onConfirm:o,onClose:n})}showErrorModalAndRedirect(t,e,o,n,s={}){let i;e=e||"Error",i=t instanceof Error?t.message:"object"==typeof t?t.toString():t,n||(n=5e3),this.createWebcModal({disableExpanding:!0,disableClosing:!0,disableFooter:!0,...s,modalTitle:e,modalContent:i}),setTimeout((()=>{if(this.hideModal(),"string"==typeof o)this.navigateToUrl(o);else if("object"==typeof o){const{href:t,tag:e,state:n}=o;e?this.navigateToPageTag(e,n):this.navigateToUrl(t,n)}}),n)}createWebcModal({template:t,controller:e,model:o,translationModel:n,modalTitle:s,modalDescription:i,modalContent:a,modalFooter:r,confirmButtonText:l,cancelButtonText:c,centered:d,expanded:h,disableCancelButton:u,disableClosing:p,disableBackdropClosing:m,disableExpanding:f,disableFooter:b,autoShow:g,onConfirm:y,onClose:C,...j}){C||(C=y),o&&(o=w(o));const v=this.createAndAddElement("webc-modal",{template:t,controller:e,model:o,translationModel:n,modalTitle:s,modalDescription:i,modalContent:a,modalFooter:r,confirmButtonText:l,cancelButtonText:c,centered:d,expanded:h,disableCancelButton:u,disableClosing:p,disableBackdropClosing:m,disableExpanding:f,disableFooter:b,autoShow:g,...j});return v.addEventListener("confirmed",(t=>{y&&y(t),v.remove()})),v.addEventListener("closed",(t=>{C&&C(t),v.remove()})),v}hideModal(){this.element.hasAttribute("data-modal")?this.element.parentNode.host.remove():this.element.querySelectorAll("webc-modal").forEach((t=>t.remove()))}}},C={identity:{name:"WebCardinal",email:"webcardinal@axiologic.net",avatar:""},pagesFallback:{name:"404"},pages:[{name:"Homepage",path:"/",src:"home.html"}],logLevel:"error",version:"1.0.0",docsSource:"github",translations:!0,skin:"default"};function j(){return{setSkin:(t="default")=>{t&&"string"==typeof t||console.warn(['Function "setSkin(skin: string)" must receive a string as parameter!','Example of parameter: "advanced-skin"'].join("\n")),this.isConfigLoaded?window.WebCardinal.state.skin=t:this.config.skin=t},addControllers:t=>{if(this.isConfigLoaded)console.warn(['Function "addControllers(controllers: object)" must be called only in preload stage of WebCardinal!',"The configuration was already loaded!"].join("\n"));else{"object"==typeof t||Array.isArray(t)||console.warn(['Function "addControllers(controllers: object)" must receive an object as parameter!','Form of parameter: "{ <CONTROLLER_NAME>: <CONTROLLER_CLASS>, ... }"'].join("\n"));for(let o of Object.keys(t)){const n=t[o];e(n)?console.warn([`In function "addControllers(controllers: object)", "${o}" is not a valid WebCardinal Controller!`,"It will be ignored!"].join("\n")):this.injectedControllers[o]=n}}function e(t){const e=Object.getOwnPropertyNames(t);return!e.includes("prototype")||e.includes("arguments")}},addHook:(t,e,o)=>{let n=this.injectedHooks;this.isConfigLoaded&&(n=window.WebCardinal.hooks),t&&"string"==typeof t||console.warn(['Function "addHook(tag: string, when: whenType, hook: Function)" must receive a valid page tag!'].join("\n")),n[t]||(n[t]={}),n[t][e]=o},setConfig:t=>{this.isConfigLoaded?console.warn(['Function "setConfig(config: object)" must be called only in preload stage of WebCardinal!',"The configuration was already loaded!"].join("\n")):this.config=t},getConfig:()=>{if(!this.isConfigLoaded)return this.config;console.warn(['Function "getConfig()" must be called only in preload stage of WebCardinal!',"The configuration was already loaded!"].join("\n"))}}}async function v(t){if(t){t.endsWith(".js")||(t+=".js");try{await import(d.join(this.basePath,t).pathname),console.log("[WebCardinal] Preload middleware was used!")}catch(t){console.error(t)}}}class k{constructor(t,e){this._trimPathname=t=>(t.startsWith("/")&&(t=t.slice(1)),t.endsWith("/")&&(t=t.slice(0,-1)),t),this.baseURL=this._initBaseURL(),this.basePath=this._initBasePath(),this.configURL=this._initResourceURL("webcardinal.json"),this.config={},this.injectedControllers={},this.injectedHooks={},this.pendingRequests=[],this.isConfigLoaded=!1,this._readConfiguration((async(t,o)=>{if(t)console.error(t);else{if(this.config=this._prepareConfiguration(o),window.WebCardinal={controllers:y,hooks:this.injectedHooks,preload:j.bind(this)(),components:{define:(t,e)=>{e||(e=`${t}/${t}`),customElements.define(t,class extends HTMLElement{constructor(){super(),this.hasAttribute("shadow")&&(this._shadow=this.attachShadow({mode:"open"})),this._element=Object.assign(document.createElement("webc-component"),{template:e,element:this})}connectedCallback(){this.setAttribute(h,""),Array.from(this.attributes).forEach((t=>{["shadow","className",h,u].includes(t.nodeName)||this._element.setAttribute(t.nodeName,t.nodeValue)})),this._element.componentOnReady().then((async()=>{this._model=await this._element.getModel(),this._translationModel=await this._element.getTranslationModel(),this._element.remove(),this.removeAttribute(h)})),this.hasAttribute("shadow")?this._shadow.append(this._element):this.append(this._element)}async getModel(){return this._model}async getTranslationModel(){return this._translationModel}})}}},await v.bind(this)(e),console.log("[WebCardinal] Config:",this.config),this.isConfigLoaded=!0,window.WebCardinal=Object.assign(Object.assign({},window.WebCardinal),{basePath:this.basePath,controllers:Object.assign(Object.assign({},this.injectedControllers),y),state:{translations:this.config.translations,skin:this.config.skin}}),window.localStorage){const t=localStorage.getItem("webcardinal.skin");t&&(window.WebCardinal.state.skin=t);const e=localStorage.getItem("webcardinal.translations");e&&(window.WebCardinal.state.translations="true"===e)}for(;this.pendingRequests.length;){const t=this.pendingRequests.pop();this._provideConfiguration(t.configKey,t.callback)}}})),t.addEventListener(s,this._registerListener("routing")),t.addEventListener(i,this._registerListener("identity")),t.addEventListener(a,this._registerListener("logLevel")),t.addEventListener(r,this._registerListener("coreType")),t.addEventListener(l,this._registerListener("docsSource")),t.addEventListener(c,this._registerListener("hooks")),t.addEventListener("getThemeConfig",this._registerListener("theme"))}_initBaseURL(){const t=(()=>this._trimPathname(window.location.origin))(),e=(()=>{const t=document.querySelector("base");if(!t)return null;const e=t.getAttribute("href");return e&&"/"!==e?this._trimPathname(e):null})();return e?new URL(e,t):new URL(t)}_initBasePath(){const t=this._trimPathname(this.baseURL.pathname);return 0!==t.length?"/"+t:t}_initResourceURL(t){return new URL(this._trimPathname(this.baseURL.href)+"/"+this._trimPathname(t))}_readConfiguration(t){(async()=>{try{return(async t=>(await g(t)).json())(this.configURL.href)}catch(t){return t}})().then((async e=>await t(null,e))).catch((async e=>await t(e)))}_prepareConfiguration(t){const e=e=>t[e]?t[e]:C[e],o=(t=this.baseURL.href,n=e("pages"))=>{const s=[];for(const e of n){const i={};if("string"!=typeof e.name){console.warn('An invalid page detected (in "webcardinal.json")',e);continue}if(e.name.includes("/")){console.warn(`Page name must not include '/' (in "${n.name}")`);continue}i.name=e.name;const a=i.name.replace(/\s+/g,"-").toLowerCase();if(i.indexed="boolean"!=typeof e.indexed||e.indexed,"string"==typeof e.path)i.path=e.path;else{const e="/"+a;try{i.path="."+new URL(e,t).pathname}catch(t){console.error(`Pathname "${e}" for "${i.name} can not be converted into a URL!\n`,t);continue}}const r=Array.isArray(e.children)&&e.children.length>0;if("string"==typeof e.src)i.src=e.src;else{let e="/"+a;r||(e+=".html");try{i.src="."+new URL(e,t).pathname}catch(t){console.error(`Source "${e}" for "${i.name} can not be converted into a URL!\n`,t);continue}}"string"==typeof e.tag&&(i.tag=e.tag),"string"==typeof e.loader&&(i.loader=e.loader),r&&(i.children=o(t,e.children)),s.push(i)}return s};e("skins")&&console.warn(['"skins" is deprecated in webcardinal.json, replace with "skin"!','Only the preferred / active skin must be set via "skin" keyword, otherwise the "default" is set','example: "skin": "advanced"'].join("\n"));const n=!0===e("translations")||("boolean"==typeof e("enableTranslations")&&console.warn('"enableTranslations" is deprecated in webcardinal.json, replace with "translations"!'),!0===e("enableTranslations")),s=(()=>{const t=e("skin");return"string"!=typeof t||0===t.length?(console.warn('Type of "skin" must be a non-empty string!'),"default"):t})();return{identity:(()=>{const t=e("identity"),o={};for(const e of Object.keys(C.identity))o[e]=t[e]||C.identity[e];return o})(),routing:{baseURL:(()=>this._trimPathname(this.baseURL.href))(),pages:o(),pagesFallback:(()=>{const t=o(this.baseURL.href,[e("pagesFallback")])[0],{name:n,src:s,loader:i,tag:a}=t,r={name:n,src:s,loader:i,tag:a};return Object.keys(r).forEach((t=>void 0===r[t]&&delete r[t])),r})()},logLevel:(()=>{const t=e("logLevel");return Object.values(p).includes(t)?t:C.logLevel})(),docsSource:e("docsSource"),theme:e("theme"),version:e("version"),coreType:"webcardinal",translations:n,skin:s}}_provideConfiguration(t,e){if("function"==typeof t&&void 0===e&&(e=t,t=void 0),"function"==typeof e)return void 0===t?e(void 0,this.config):this.config.hasOwnProperty(t)?e(void 0,this.config[t]):e(`Config "${t}" does not exists!`)}_registerListener(t){return e=>{let o;if(e.preventDefault(),e.stopImmediatePropagation(),"function"==typeof e.detail)o=e.detail;else{if(!e.detail||"function"!=typeof e.detail.callback)return;o=e.detail.callback}if(this.isConfigLoaded)return this._provideConfiguration(t,o);this.pendingRequests.push({configKey:t,callback:o})}}}function L(){window.onerror=function(t,e,o,n,s){let i;return i=("string"==typeof t?t.toLowerCase():"").indexOf("script error")>-1?{message:"script error",isScriptError:!0}:{message:"string"==typeof t?t:JSON.stringify(t),url:e,lineNo:o,columnNo:n,error:s},window.dispatchEvent(new CustomEvent("webcAppError",{detail:i})),!1}}const T=class{constructor(o){t(this,o),this.getLogLevelEvent=e(this,"webcardinal:config:getLogLevel",7),this.loader="webc-spinner"}async componentWillLoad(){if(this.host.parentElement&&this.loader&&(this._loaderElement=document.createElement(this.loader),this.host.parentElement.appendChild(this._loaderElement)),new k(this.host,this.preload),0===this.host.children.length){const t=window.getComputedStyle(this.host),e=t.getPropertyValue("--webc-app-menu-mode").trim();if("none"===e)this.host.setAttribute("layout","container"),this.host.append(document.createElement("webc-app-container"));else{const o=t.getPropertyValue("--webc-app-menu-mobile-breakpoint"),n=window.matchMedia(`(max-width: ${o})`),s=e,i="mobile",a={menu:Object.assign(document.createElement("webc-app-menu"),{mode:e}),container:document.createElement("webc-app-container")},r={menu:Object.assign(document.createElement("webc-app-menu"),{mode:i})};n.matches?(this.host.setAttribute("layout",i),this.host.append(r.menu,a.container)):(this.host.setAttribute("layout",s),this.host.append(a.menu,a.container)),n.addEventListener("change",(t=>{t.matches?(document.documentElement.style.setProperty("--webc-app-menu-mode"," "+i),a.menu.remove(),this.host.setAttribute("layout",i),this.host.insertBefore(r.menu,a.container)):(document.documentElement.style.setProperty("--webc-app-menu-mode"," "+e),r.menu.remove(),this.host.setAttribute("layout",e),this.host.insertBefore(a.menu,a.container))}))}}await this.registerAppErrorComponentAndListeners()}async componentDidLoad(){this._loaderElement&&(this._loaderElement.hidden=!0,window.WebCardinal.root=this.host,window.WebCardinal.loader=this._loaderElement)}async registerAppErrorComponentAndListeners(){this.host.appendChild(document.createElement("webc-app-error-toast"));try{!function(t){const{ERROR:e,WARN:o}=p;switch(t){case e:return void L();case o:L(),function(){const t=console.warn;console.warn=function(...e){return window.dispatchEvent(new CustomEvent("webcAppWarning",{detail:e})),t.apply(console,e)}}()}}(await m(this.getLogLevelEvent))}catch(t){console.error(t)}}render(){return o("slot",null)}};(function(t,e,o,n){var s,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(i<3?s(a):i>3?s(e,o,a):s(e,o))||a);i>3&&a&&Object.defineProperty(e,o,a)})([n()],T.prototype,"host",void 0),f(T),T.style={default:":host{display:block;width:100%;height:100%}:host([layout=vertical]){display:grid;grid-template-columns:auto 1fr}:host([layout=mobile]),:host([layout=horizontal]){display:grid;grid-template-rows:auto 1fr}"};export{T as webc_app_root}