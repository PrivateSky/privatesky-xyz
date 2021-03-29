import{r as e,c as i,h as a}from"./p-afa78421.js";import{H as t}from"./p-33e6dc7e.js";import"./p-eb0a894b.js";import"./p-5b88ecac.js";import{C as r}from"./p-d330161b.js";import{a as n,C as c}from"./p-623dd064.js";import{k as o}from"./p-864401d2.js";import{p as s}from"./p-794858b0.js";import"./p-0c3518a5.js";import"./p-0572c496.js";import{i as l}from"./p-585d5e03.js";import{C as d}from"./p-3db6d838.js";const f=class{constructor(a){e(this,a),this.getRoutingEvent=i(this,"webcardinal:routing:get",7),this.getTranslationsEvent=i(this,"webcardinal:config:getTranslations",7),this.disableContainer=!1}async componentWillLoad(){if(!this.host.isConnected)return;const e=await s(this.getRoutingEvent),i=await s(this.getTranslationsEvent);i&&await n.loadAndSetTranslationForPage(e);const a=this.controller;if("string"==typeof a)try{const e=await c.getController(a);this.host.isConnected&&(this.controllerInstance=new e(this.disableContainer?this.host.parentElement:this.host,this.history))}catch(e){return void console.error(e)}else this.controllerInstance=new d(this.host,this.history);const{model:t,translationModel:l}=this.controllerInstance;let f=this.host,p=this.host.parentNode;p instanceof ShadowRoot&&this.host.hasAttribute("data-modal")&&(f=p.host),await o(f,{model:t,translationModel:l},{enableTranslations:i}),(l||t)&&(this.listeners=new r(this.host,{model:t,translationModel:l}),t&&this.listeners.getModel.add(),l&&this.listeners.getTranslationModel.add())}connectedCallback(){if(this.listeners){const{getModel:e,getTranslationModel:i}=this.listeners;null==e||e.add(),null==i||i.add()}}disconnectedCallback(){if(this.listeners){const{getModel:e,getTranslationModel:i}=this.listeners;null==e||e.remove(),null==i||i.remove()}setTimeout((()=>{var e;document.body.contains(this.host)||null===(e=this.controllerInstance)||void 0===e||e.disconnectedCallback()}),100)}async componentDidLoad(){this.disableContainer&&(Array.from(this.host.childNodes).forEach((e=>this.host.parentNode.insertBefore(e,this.host))),this.host.remove())}async getModel(){if(this.controllerInstance)return this.controllerInstance.model}async getTranslationModel(){if(this.controllerInstance)return this.controllerInstance.translationModel}render(){if(!this.disableContainer)return a("slot",null)}};(function(e,i,a,t){var r,n=arguments.length,c=n<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,i,a,t);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(c=(n<3?r(c):n>3?r(i,a,c):r(i,a))||c);n>3&&c&&Object.defineProperty(i,a,c)})([t()],f.prototype,"host",void 0),l(f);const p=class{constructor(i){e(this,i)}render(){return a("div",{class:"circle-fade"},[...Array(9).keys()].map((e=>a("div",{class:"circle circle-"+e}))))}};p.style={default:'webc-spinner{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;display:flex;justify-content:center;align-items:center;z-index:var(--z-index)}webc-spinner>.circle-fade{position:relative;width:var(--width);height:var(--height);border:var(--border);border-radius:var(--radius);background:var(--background);box-shadow:var(--box-shadow)}webc-spinner>.circle-fade>.circle{position:absolute;top:0;left:0;width:100%;height:100%}webc-spinner>.circle-fade>.circle::after{content:"";display:block;margin:0.15em auto;width:var(--dot-size);height:var(--dot-size);background-color:var(--color);border-radius:var(--dot-radius);animation:spinner-default-animation var(--animation) infinite linear}webc-spinner>.circle-fade .circle-1{transform:rotate(-40deg)}webc-spinner>.circle-fade .circle-1::after{animation-delay:calc(-0.1 * var(--animation-delay))}webc-spinner>.circle-fade .circle-2{transform:rotate(-80deg)}webc-spinner>.circle-fade .circle-2::after{animation-delay:calc(-0.2 * var(--animation-delay))}webc-spinner>.circle-fade .circle-3{transform:rotate(-120deg)}webc-spinner>.circle-fade .circle-3::after{animation-delay:calc(-0.3 * var(--animation-delay))}webc-spinner>.circle-fade .circle-4{transform:rotate(-160deg)}webc-spinner>.circle-fade .circle-4::after{animation-delay:calc(-0.4 * var(--animation-delay))}webc-spinner>.circle-fade .circle-5{transform:rotate(-200deg)}webc-spinner>.circle-fade .circle-5::after{animation-delay:calc(-0.5 * var(--animation-delay))}webc-spinner>.circle-fade .circle-6{transform:rotate(-240deg)}webc-spinner>.circle-fade .circle-6::after{animation-delay:calc(-0.6 * var(--animation-delay))}webc-spinner>.circle-fade .circle-7{transform:rotate(-280deg)}webc-spinner>.circle-fade .circle-7::after{animation-delay:calc(-0.7 * var(--animation-delay))}webc-spinner>.circle-fade .circle-8{transform:rotate(-320deg)}webc-spinner>.circle-fade .circle-8::after{animation-delay:calc(-0.8 * var(--animation-delay))}webc-spinner>.circle-fade .circle-9{transform:rotate(-360deg)}webc-spinner>.circle-fade .circle-9::after{animation-delay:calc(-0.9 * var(--animation-delay))}@keyframes spinner-default-animation{0%,39%,100%{opacity:0}40%{opacity:1}}[hidden]{display:none !important}'};export{f as webc_container,p as webc_spinner}