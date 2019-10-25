import{g as e,r as t,h as n}from"./p-8ea06cdd.js";import{c as r}from"./p-e2eec4d0.js";import{D as s,a as i}from"./p-799cbc6e.js";function o(t){return function(n,o){const{connectedCallback:a,render:p}=n;n.connectedCallback=function(){let n=this;if(e(n).hasAttribute(s)){if(!n.componentDefinitions)return n.componentDefinitions={definedProperties:[Object.assign(Object.assign({},t),{propertyName:String(o)})]},a&&a.call(n);let e=n.componentDefinitions;const r=Object.assign(Object.assign({},t),{propertyName:String(o)});if(e&&e.hasOwnProperty(i)){let t=[...e[i]];t.push(r),e[i]=[...t]}else e[i]=[r];n.componentDefinitions=Object.assign({},e)}return a&&a.call(n)},n.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[i])return p&&p.call(this);let e=this.componentDefinitions[i];e&&(e=e.reverse()),r("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}var a=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const p=class{constructor(e){t(this,e),this.urlDestination=null,this.pageRenderer="psk-page-not-found-renderer"}render(){return null!==this.urlDestination?n("stencil-router-redirect",{url:this.urlDestination}):-1!=window.location.pathname.indexOf(this.basePath)?n("stencil-router-redirect",{url:this.basePath}):n(this.pageRenderer,null)}static get style(){return":host>*{width:100%;height:100%}h1{color:red;padding:1em}a{text-decoration:none;font-style:italic;font-weight:700}"}};a([o({description:"This property is the base path of the website. \n\t\tIf this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. \n\t\tIt is not mandatory to be the root of the application, it can be the root of a section inside the website.",specialNote:"If this parameter is missing, urlDestination parameter is checked.",isMandatory:!1,propertyType:"string"})],p.prototype,"basePath",void 0),a([o({description:"This property gives a custom redirect URL destination in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, pageRenderer parameter is checked.",isMandatory:!1,propertyType:"string"})],p.prototype,"urlDestination",void 0),a([o({description:"This property allows the component to display a custom Page \n\t\tnot found content in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, psk-page-not-found-renderer is assumed.",isMandatory:!1,propertyType:"string",defaultValue:"psk-page-not-found-renderer"})],p.prototype,"pageRenderer",void 0);export{p as psk_page_not_found};