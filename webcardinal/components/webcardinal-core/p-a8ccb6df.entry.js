import{r as t,c as e,h as o}from"./p-d4191909.js";import{H as n}from"./p-f0bd18cd.js";import{d as i,e as s,f as r,g as a,h as l}from"./p-fb057042.js";import{L as c}from"./p-e33c1597.js";import{p as d}from"./p-794858b0.js";import"./p-0c3518a5.js";import"./p-ad52b503.js";import{i as h}from"./p-a247a1f7.js";import{C as p,p as u,e as m}from"./p-2460659e.js";const f={Controller:p,WebcController:class extends p{constructor(t,e){super(t,e)}showModal(t,e,o,n,i={}){return this.createWebcModal({...i,modalTitle:e=e||"Info",modalContent:t,onConfirm:o,onClose:n})}showModalFromTemplate(t,e,o,n={}){return this.createWebcModal({...n,template:t,onConfirm:e,onClose:o})}showErrorModal(t,e,o,n,i={}){let s;return e=e||"Error",s=t instanceof Error?t.message:"object"==typeof t?t.toString():t,this.createWebcModal({disableClosing:!0,showCancelButton:!1,...i,modalTitle:e,modalContent:s,onConfirm:o,onClose:n})}showErrorModalAndRedirect(t,e,o,n,i={}){let s;e=e||"Error",s=t instanceof Error?t.message:"object"==typeof t?t.toString():t,n||(n=5e3),this.createWebcModal({disableExpanding:!0,disableClosing:!0,disableFooter:!0,...i,modalTitle:e,modalContent:s}),setTimeout((()=>{if(this.hideModal(),"string"==typeof o)this.navigateToUrl(o);else if("object"==typeof o){const{href:t,tag:e,state:n}=o;e?this.navigateToPageTag(e,n):this.navigateToUrl(t,n)}}),n)}createWebcModal({template:t,controller:e,model:o,translationModel:n,modalTitle:i,modalDescription:s,modalContent:r,modalFooter:a,confirmButtonText:l,cancelButtonText:c,centered:d,expanded:h,disableCancelButton:p,disableClosing:m,disableBackdropClosing:f,disableExpanding:b,disableFooter:w,autoShow:g,onConfirm:y,onClose:C,...v}){C||(C=y),o&&(o=u(o));const j=this.createAndAddElement("webc-modal",{template:t,controller:e,model:o,translationModel:n,modalTitle:i,modalDescription:s,modalContent:r,modalFooter:a,confirmButtonText:l,cancelButtonText:c,centered:d,expanded:h,disableCancelButton:p,disableClosing:m,disableBackdropClosing:f,disableExpanding:b,disableFooter:w,autoShow:g,...v});return j.addEventListener("confirmed",(t=>{y&&y(t),j.remove()})),j.addEventListener("closed",(t=>{C&&C(t),j.remove()})),j}hideModal(){this.element.hasAttribute("data-modal")?this.element.parentNode.host.remove():this.element.querySelectorAll("webc-modal").forEach((t=>t.remove()))}}},b={identity:{name:"WebCardinal",email:"webcardinal@axiologic.net",avatar:""},pages:[{name:"Homepage",path:"/",src:"home.html"}],pagesPathname:"pages",skinsPathname:"skins",logLevel:"error",version:"1.0.0",docsSource:"github",translations:!1,skins:[{name:"default"}]};class w{constructor(t){this._trimPathname=t=>(t.startsWith("/")&&(t=t.slice(1)),t.endsWith("/")&&(t=t.slice(0,-1)),t),this.baseURL=this._initBaseURL(),this.basePath=this._initBasePath(),this.configURL=this._initResourceURL("webcardinal.json"),this.config={},this.pendingRequests=[],this.isConfigLoaded=!1,this._readConfiguration(((t,e)=>{if(t)console.error(t);else for(this.config=this._prepareConfiguration(e),console.log("WebCardinal config:",this.config),this.isConfigLoaded=!0,window.WebCardinal=Object.assign(Object.assign({},window.WebCardinal),{basePath:this.basePath,controllers:f});this.pendingRequests.length;){const t=this.pendingRequests.pop();this._provideConfiguration(t.configKey,t.callback)}})),t.addEventListener(i,this._registerListener("routing")),t.addEventListener(s,this._registerListener("identity")),t.addEventListener(r,this._registerListener("logLevel")),t.addEventListener(a,this._registerListener("coreType")),t.addEventListener(l,this._registerListener("docsSource")),t.addEventListener("getThemeConfig",this._registerListener("theme"))}_initBaseURL(){const t=(()=>this._trimPathname(window.location.origin))(),e=(()=>{const t=document.querySelector("base");if(!t)return null;const e=t.getAttribute("href");return e&&"/"!==e?this._trimPathname(e):null})();return e?new URL(e,t):new URL(t)}_initBasePath(){const t=this._trimPathname(this.baseURL.pathname);return 0!==t.length?"/"+t:t}_initResourceURL(t){return new URL(this._trimPathname(this.baseURL.href)+"/"+this._trimPathname(t))}_readConfiguration(t){(async()=>{try{return(async t=>(await m(t)).json())(this.configURL.href)}catch(t){return t}})().then((e=>t(null,e))).catch((e=>t(e)))}_prepareConfiguration(t){const e=e=>t[e]?t[e]:b[e],o=(t=this.baseURL.href,n=e("pages"))=>{const s=[];for(const e of n){const r={};if("string"!=typeof e.name){console.warn('An invalid page detected (in "webcardinal.json")',e);continue}if(e.name.includes("/")){console.warn(`Page name must not include '/' (in "${n.name}")`);continue}r.name=e.name;const a=r.name.replace(/\s+/g,"-").toLowerCase();if(r.indexed="boolean"!=typeof e.indexed||e.indexed,"string"==typeof e.path)r.path=e.path;else{const e="/"+a;try{r.path="."+new URL(e,t).pathname}catch(t){console.error(`Pathname "${e}" for "${r.name} can not be converted into a URL!\n`,t);continue}}const l=Array.isArray(e.children)&&e.children.length>0;if("string"==typeof e.src)r.src=e.src;else{let e="/"+a;l||(e+=".html");try{r.src="."+new URL(e,t).pathname}catch(t){console.error(`Source "${e}" for "${r.name} can not be converted into a URL!\n`,t);continue}}if("string"==typeof e.tag&&(r.tag=e.tag),"string"==typeof e.loader&&(r.loader=e.loader),"object"==typeof e.skin&&"string"==typeof e.skin.name&&(r.skin=e.skin,"boolean"!=typeof r.skin.translations)){const t=i.filter((t=>t.name===r.skin.name))[0];t?r.skin.translations=t.translations:console.warn([`Skin "${r.skin.name}" can not be found in skins from webcardinal.json!`].join("\n"))}l&&(r.children=o(t,e.children)),s.push(r)}return s},n=("boolean"==typeof e("enableTranslations")&&console.warn('"enableTranslations" is deprecated in webcardinal.json, replace with "translations"!'),!0===e("enableTranslations")||!0===e("translations")),i=(()=>{let t=e("skins");if(!Array.isArray(t))return[{name:"default",translations:n}];let o=t.find((t=>"none"===(null==t?void 0:t.name.toLowerCase())));return o&&console.warn(['Skin "none" is reserved, it is internal part for webc-app-router!',"Please, rename this skin!"].join("\n")),o=t.find((t=>"default"===(null==t?void 0:t.name.toLowerCase()))),o||t.push({name:"default",translations:n}),t.filter((t=>t.name&&"none"!==t.name)).map((t=>("boolean"!=typeof t.translations&&(t.translations=n),t)))})();window.WebCardinal=Object.assign(Object.assign({},window.WebCardinal),{state:{}});let s=window.localStorage&&localStorage.getItem("webcardinal.skin");if(s)try{window.WebCardinal.state={activeSkin:JSON.parse(s)}}catch(t){console.error(t),console.warn("Previously stored preferred skin can not be used!")}return window.WebCardinal.state.activeSkin||(s=Array.isArray(i)&&i.length>0?i[0]:{name:"default",translations:n},window.WebCardinal.state.activeSkin=s),{identity:(()=>{const t=e("identity"),o={};for(const e of Object.keys(b.identity))o[e]=t[e]||b.identity[e];return o})(),routing:{baseURL:(()=>this._trimPathname(this.baseURL.href))(),pages:o(),pagesFallback:(()=>{const t=o(this.baseURL.href,[e("pagesFallback")])[0];return delete t.path,delete t.indexed,t})()},logLevel:(()=>{const t=e("logLevel");return Object.values(c).includes(t)?t:b.logLevel})(),docsSource:e("docsSource"),theme:e("theme"),version:e("version"),coreType:"webcardinal",translations:n,skins:i}}_provideConfiguration(t,e){if("function"==typeof t&&void 0===e&&(e=t,t=void 0),"function"==typeof e)return void 0===t?e(void 0,this.config):this.config.hasOwnProperty(t)?e(void 0,this.config[t]):e(`Config "${t}" does not exists!`)}_registerListener(t){return e=>{let o;if(e.preventDefault(),e.stopImmediatePropagation(),"function"==typeof e.detail)o=e.detail;else{if(!e.detail||"function"!=typeof e.detail.callback)return;o=e.detail.callback}if(this.isConfigLoaded)return this._provideConfiguration(t,o);this.pendingRequests.push({configKey:t,callback:o})}}}function g(){window.onerror=function(t,e,o,n,i){let s;return s=("string"==typeof t?t.toLowerCase():"").indexOf("script error")>-1?{message:"script error",isScriptError:!0}:{message:"string"==typeof t?t:JSON.stringify(t),url:e,lineNo:o,columnNo:n,error:i},window.dispatchEvent(new CustomEvent("webcAppError",{detail:s})),!1}}const y=class{constructor(o){t(this,o),this.getLogLevelEvent=e(this,"webcardinal:config:getLogLevel",7),this.loaderName="webc-spinner"}async componentWillLoad(){if(this.host.parentElement&&this.loaderName&&(this._loaderElement=document.createElement(this.loaderName),this.host.parentElement.appendChild(this._loaderElement)),new w(this.host),0===this.host.children.length){const t=window.getComputedStyle(this.host),e=t.getPropertyValue("--webc-app-menu-mode").trim();if("none"===e)this.host.setAttribute("layout","container"),this.host.append(document.createElement("webc-app-container"));else{const o=t.getPropertyValue("--webc-app-menu-mobile-breakpoint"),n=window.matchMedia(`(max-width: ${o})`),i=e,s="mobile",r={menu:Object.assign(document.createElement("webc-app-menu"),{mode:e}),container:document.createElement("webc-app-container")},a={menu:Object.assign(document.createElement("webc-app-menu"),{mode:s})};n.matches?(this.host.setAttribute("layout",s),this.host.append(a.menu,r.container)):(this.host.setAttribute("layout",i),this.host.append(r.menu,r.container)),n.addEventListener("change",(t=>{t.matches?(document.documentElement.style.setProperty("--webc-app-menu-mode"," "+s),r.menu.remove(),this.host.setAttribute("layout",s),this.host.insertBefore(a.menu,r.container)):(document.documentElement.style.setProperty("--webc-app-menu-mode"," "+e),a.menu.remove(),this.host.setAttribute("layout",e),this.host.insertBefore(r.menu,r.container))}))}}await this.registerAppErrorComponentAndListeners()}async componentDidLoad(){this._loaderElement&&(this._loaderElement.hidden=!0,window.WebCardinal.root=this.host,window.WebCardinal.loader=this._loaderElement)}render(){return o("slot",null)}async registerAppErrorComponentAndListeners(){this.host.appendChild(document.createElement("webc-app-error-toast"));try{!function(t){const{ERROR:e,WARN:o}=c;switch(t){case e:return void g();case o:g(),function(){const t=console.warn;console.warn=function(...e){return window.dispatchEvent(new CustomEvent("webcAppWarning",{detail:e})),t.apply(console,e)}}()}}(await d(this.getLogLevelEvent))}catch(t){console.error(t)}}};(function(t,e,o,n){var i,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,o,r):i(e,o))||r);s>3&&r&&Object.defineProperty(e,o,r)})([n()],y.prototype,"host",void 0),h(y),y.style={default:":host{display:block;width:100%;height:100%}:host([layout=vertical]){display:grid;grid-template-columns:auto 1fr}:host([layout=mobile]),:host([layout=horizontal]){display:grid;grid-template-rows:auto 1fr}"};export{y as webc_app_root}