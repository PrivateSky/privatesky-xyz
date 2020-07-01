import{r as e,h as t,H as i,g as o}from"./p-6c966499.js";import{M as s}from"./p-d980b6c7.js";import"./p-5ad7ea78.js";import{T as n}from"./p-91eca55c.js";import{C as r}from"./p-067f9c33.js";class a{static _prepareRoutesTree(e,t){let i=function(e){let o={};return e.forEach(e=>{let s=e.name.replace(/(\s+|-)/g,"").toLowerCase();if(!o[s]){let i=e.path;switch(t){case"browser":case"query":i=e.path;break;case"hash":i="/#"+e.path}o[s]={path:i}}if("object"==typeof e.children&&Array.isArray(e.children.items))o[s].children={type:"known",items:i(e.children.items)};else if("string"==typeof e.children&&0===e.children.indexOf("@event:")){let t=e.children.substring("@event:".length);o[s].children={type:"event",event:t}}}),o};return i(e)}static _prepareConfiguration(e,t){let i={};i.baseUrl=t;let o=t+"pages/",s=new URL(t).pathname;if(e.modals&&(i.modals={},Object.keys(e.modals).length))for(let t in e.modals)i.modals[t]=o+e.modals[t];if(!e.menu||!e.menu.defaultMenuConfig)throw new Error("Default menu configuration is missing");let n=e.menu.defaultMenuConfig;e.profile&&(i.profile=e.profile);let r=function(e){for(let t=0;t<e.length;t++)e[t].children&&e[t].children.items?r(e[t].children.items):void 0!==e[t].indexed&&"false"===e[t].indexed.toString()&&(e.splice(t,1),t--);return e},l=function(e,t){return t=t?t.replace(/^\/|\/$/g,""):"",e.forEach(e=>{if(!e.path){let t=e.name.toLowerCase().toLowerCase().replace(/\s+/g,"-");t=t.replace(/[:\/]/g,""),e.path=t}let i="/";0===t.length&&(i=""),e.path.startsWith("/")||(e.path=i+e.path);let s=t+e.path;if(s=s.replace(/^\//g,""),e.path=s,e.children)e.type="abstract",e.icon||(e.icon=n.icon);else{for(let t in n)e.hasOwnProperty(t)||(e[t]=n[t]);if("psk-page-loader"===e.component)if(e.componentProps||(e.componentProps={}),Object.assign(e.componentProps,e.options),e.pageSrc)e.componentProps.pageUrl=e.pageSrc.startsWith("http")?e.pageSrc:o+e.pageSrc;else{let s=e.name.replace(/[:.!?]/g,"").replace(/\s/g,"-").toLowerCase();e.componentProps.pageUrl=o+t+i+s+".html"}}if("object"==typeof e.children&&Array.isArray(e.children))e.children={type:"known",items:JSON.parse(JSON.stringify(e.children))},l(e.children.items,s);else if("string"==typeof e.children&&0==e.children.indexOf("@event:")){let t=e.children.substring("@event:".length);e.children={type:"event",event:t}}}),e};i.routes=l(e.menu.pages),i.historyType="browser";let c=e.menu.defaultMenuConfig.historyType;"hash"!==c&&"query"!==c||(i.historyType=c);let p=s;if("query"===c){let t="?";e.menu.defaultMenuConfig.pagePrefix&&(t=e.menu.defaultMenuConfig.pagePrefix),p=s+t}(e=>{let t=function(i){i.forEach(i=>{let o=i.path;0===o.indexOf("/")&&(o=o.substr(1)),i.path=`${e}${o}`,i.children&&i.children.items&&t(i.children.items)})};t(i.routes)})(p);let f=JSON.parse(JSON.stringify(i.routes));return i.menu=r(f),i.tags=function(e){let t=[];return function e(i){i.forEach(i=>{Object.prototype.hasOwnProperty.call(i,"tags")&&i.tags.split(",").map(e=>e.trim()).forEach(e=>{t[e]=i.path}),"object"==typeof i.children&&Array.isArray(i.children.items)&&e(i.children.items)})}(e),t}(f),i.pagesHierarchy=a._prepareRoutesTree(i.routes,c),i}}const l={theme:"default",appVersion:"1.0.0",profile:{username:"Cardinal App",email:"privatesky@axiologic.net",avatar:"https://privatesky.xyz/assets/images/privatesky.png"},menu:{defaultMenuConfig:{icon:"fa-bars",type:"route",component:"psk-page-loader",exact:!1,indexed:!0,historyType:"browser"},pages:[{name:"Home",path:"/home",pageSrc:"index.html"}]}};let c="config.json",p="menu.json";window.globalConfig={};class f{constructor(e){let t;this.configIsLoaded=!1,this.pendingRequests=[],window&&window.location&&window.location.origin&&(t=window.location.origin);let i=document.querySelector("base");if(i){let e=i.getAttribute("href");e&&(t+=e)}t.endsWith("/")||(t+="/"),c=t+c,p=t+p,window.basePath=t,this._getAppConfiguration(c,(e,i)=>{if(e)return console.log(e);this._fetchConfigurationFile(p,(e,o)=>{for(e?console.log(e):i.menu=o,this.configuration=a._prepareConfiguration(i,t),this.configuration.theme=i.theme,this.configuration.appVersion=i.appVersion,this.configIsLoaded=!0;this.pendingRequests.length;){let e=this.pendingRequests.pop();if(!this.configuration[e.configName])throw new Error(`Config ${e.configName} was not provided. Did you set it in app-config.json?`);e.callback(void 0,this.configuration[e.configName])}})}),e.addEventListener("getThemeConfig",this._provideConfig("theme")),e.addEventListener("getAppVersion",this._provideConfig("appVersion")),e.addEventListener("needRoutes",this._provideConfig("routes")),e.addEventListener("needMenuItems",this._provideConfig("menu")),e.addEventListener("getUserInfo",this._provideConfig("profile")),e.addEventListener("getHistoryType",this._provideConfig("historyType")),e.addEventListener("getModals",this._provideConfig("modals")),e.addEventListener("getTags",this._provideConfig("tags")),e.addEventListener("validateUrl",e=>{e.stopImmediatePropagation();let{sourceUrl:t,callback:i}=e.detail;i&&"function"==typeof i?this._parseSourceUrl(t,i):console.error("Callback was not properly provided!")}),e.addEventListener("getCustomLandingPage",e=>{let t=e.detail;if(window.frameElement&&window.frameElement.hasAttribute("landing-page"))return t(void 0,window.frameElement.getAttribute("landing-page"));t()})}_provideConfig(e){return t=>{t.stopImmediatePropagation();let i=t.detail;if(i&&"function"==typeof i)if(this.configIsLoaded){if(!this.configuration[e])throw new Error(`Config ${e} was not provided`);i(void 0,this.configuration[e])}else this.pendingRequests.push({configName:e,callback:i})}}_parseSourceUrl(e,t){let i=(e=e.replace(/(\s+|-)/g,"").toLowerCase()).split("/"),o=this.configuration.pagesHierarchy;for(let s=0;s<i.length;s++){let n=i[s];const r=Object.keys(o).find((function(e){return-1!==o[e].path.toLowerCase().indexOf(n)}));let a,l,c=void 0!==o[r];if(!o[n]&&!c){t(e+" is not a valid path in the application!");break}if(a=c?o[r].children:o[n].children,"object"!=typeof a||"object"!=typeof a.items||s===i.length)return l=c?o[r].path:o[n].path,t(void 0,l);o=a.items}}_getAppConfiguration(e,t){this._fetchConfigurationFile(e,(e,i)=>{if(e)return console.log(e),t(void 0,l);for(let e in l)i.hasOwnProperty(e)||(i[e]=l[e]);t(void 0,i)})}_fetchConfigurationFile(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){t(void 0,e)})).catch((function(e){t(e)}))}}const h=s;let d=(()=>{class s{constructor(t){e(this,t),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1}__createLoader(){let e="";for(let t=1;t<=12;t++)e+=`<div class="sk-circle${t} sk-circle"></div>`;let t=document.createElement("div");return t.className="app-loader",t.innerHTML=`<div class='sk-fading-circle'>${e}</div>`,t}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<h}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}componentWillLoad(){this.checkLayout(),this.host.parentElement&&(this.htmlLoader=this.__createLoader(),this.host.parentElement.appendChild(this.htmlLoader));let e=this.host.innerHTML;if(e=e.replace(/\s/g,""),e.length&&(this.hasSlot=!0),"string"==typeof this.controller)return new Promise((e,t)=>{r.getController(this.controller).then(t=>{if(this.disconnected)return e();new t(this.host),e()}).catch(t)});new f(this.host)}componentDidLoad(){this.htmlLoader&&this.htmlLoader.parentNode&&this.htmlLoader.parentNode.removeChild(this.htmlLoader)}render(){return t(i,{class:this.mobileLayout?"is-mobile":""},this.hasSlot?t("slot",null):t("psk-default-renderer",{mobileLayout:this.mobileLayout}))}get host(){return o(this)}}return function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([n({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no controller is provided, a default controller will be passed to the component","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],s.prototype,"controller",void 0),s})();export{d as psk_app_root}