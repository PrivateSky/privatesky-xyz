import{r as e,h as t,g as s}from"./p-7cf930c5.js";import"./p-f2139256.js";import"./p-6f3d2ab8.js";import{T as i}from"./p-4db332c8.js";import{C as r}from"./p-daa61edb.js";import{B as o}from"./p-473247c7.js";import{N as n}from"./p-3ae14e3c.js";let a=new class{constructor(){this.registry=[],void 0===$$.flows&&require("callflow").initialise(),void 0===$$.swarms?require("swarm-engine").initialise("wallet"):$$.swarmEngine.updateIdentity("wallet")}addSSAppReference(e,t){console.log("registering ssapp",e,t),void 0!==this.registry[e]&&this.registry[e]!==t?console.log("Replacing a reference."):function(e,t){let s=new(0,require("swarm-engine").SSAppPowerCord)(t.contentWindow);$$.swarmEngine.plug(e,s)}(e,t),this.registry[e]=t}removeSSAppReference(e){void 0!==this.registry[e]&&(delete this.registry[e],$$.swarmEngine.unplug(e))}getSSAppReference(e){return this.registry[e]}};var p=function(e,t,s,i){var r,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,s,n):r(t,s))||n);return o>3&&n&&Object.defineProperty(t,s,n),n};const h=class{constructor(t){e(this,t),this.seed=null,this.componentInitialized=!1}connectedCallback(){navigator.serviceWorker.addEventListener("message",this.__getSWOnMessageHandler())}disconnectedCallback(){navigator.serviceWorker.removeEventListener("message",this.__getSWOnMessageHandler())}componentShouldUpdate(e,t,s){return e!==t&&"digestKeySsiHex"===s&&(window.document.removeEventListener(t,this.eventHandler),window.document.addEventListener(e,this.eventHandler),!0)}componentWillLoad(){if(this.element.isConnected)return new Promise(e=>{this.componentInitialized=!0,this.loadApp(e)})}componentDidLoad(){let e=this.element.querySelector("iframe");console.log("#### Trying to register ssapp reference"),a.addSSAppReference(this.appName,e),this.eventHandler=this.__ssappEventHandler.bind(this),window.document.addEventListener(this.digestKeySsiHex,this.eventHandler),n.getInstance().listenForSSAppHistoryChanges()}loadApp(e){this.__hasRelevantMatchParams()&&(this.seed=this.match.params.keySSI),this.componentInitialized&&(this.digestKeySsiHex=this.__digestMessage(this.seed),n.getInstance().setIdentity(this.digestKeySsiHex),"function"==typeof e&&e())}render(){let e,s=window.parent,i=window;try{for(;i!==s;)e=s.location.href,i=s,s=s.parent}catch(e){}finally{return e=i.location.href,"/"!==e[e.length-1]&&(e+="/"),t("iframe",{"landing-page":this.landingPath,frameborder:"0",style:{overflow:"hidden",height:"100%",width:"100%"},src:e+"iframe/"+this.digestKeySsiHex})}}__hasRelevantMatchParams(){return this.match&&this.match.params&&this.match.params.keySSI}__ssappEventHandler(e){const t=e.detail||{};let s=this.element.querySelector("iframe");"seed"!==t.query?"completed"===t.status&&s.contentWindow.location.reload():s.contentWindow.document.dispatchEvent(new CustomEvent(this.digestKeySsiHex,{detail:{seed:this.seed}}))}__getSWOnMessageHandler(){return this.__onServiceWorkerMessageHandler||(this.__onServiceWorkerMessageHandler=e=>{e.data&&"seed"===e.data.query&&e.data.identity===this.digestKeySsiHex&&e.source.postMessage({seed:this.seed})}),this.__onServiceWorkerMessageHandler}__digestMessage(e){return require("pskcrypto").pskHash(e,"hex")}get element(){return s(this)}static get watchers(){return{seed:["loadApp"],match:["loadApp"]}}};p([o()],h.prototype,"modelHandler",void 0),p([r(),i({isMandatory:!0,description:["This property represents the name of the Self Sovereign Application that you want to run."],propertyType:"string"})],h.prototype,"appName",void 0),p([i({isMandatory:!1,description:"This property keeps should have 2 keys: currentDossierPath and fullPath",propertyType:"string"})],h.prototype,"seed",void 0),p([i({isMandatory:!0,description:"This property represents the direct path that will be passed to the Iframe as the landing-page property.",propertyType:"string"})],h.prototype,"landingPath",void 0);export{h as psk_ssapp}