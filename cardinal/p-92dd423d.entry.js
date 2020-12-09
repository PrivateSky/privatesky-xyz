import{r as e,h as t}from"./p-87f0c668.js";import"./p-ff3b654f.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{C as r}from"./p-b4c074e0.js";import{T as s}from"./p-9a6ac7e0.js";var i=function(e,t,r,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o};const n=class{constructor(t){e(this,t),this.urlDestination=null,this.pageRenderer="psk-page-not-found-renderer"}render(){return null!==this.urlDestination?t("stencil-router-redirect",{url:this.urlDestination}):-1!=window.location.pathname.indexOf(this.basePath)?t("stencil-router-redirect",{url:this.basePath}):t(this.pageRenderer,null)}};i([r(),s({description:"This property is the base path of the website. \n\t\tIf this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. \n\t\tIt is not mandatory to be the root of the application, it can be the root of a section inside the website.",specialNote:"If this parameter is missing, urlDestination parameter is checked.",isMandatory:!1,propertyType:"string"})],n.prototype,"basePath",void 0),i([s({description:"This property gives a custom redirect URL destination in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, pageRenderer parameter is checked.",isMandatory:!1,propertyType:"string"})],n.prototype,"urlDestination",void 0),i([s({description:"This property allows the component to display a custom Page \n\t\tnot found content in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, psk-page-not-found-renderer is assumed.",isMandatory:!1,propertyType:"string",defaultValue:"psk-page-not-found-renderer"})],n.prototype,"pageRenderer",void 0);export{n as psk_page_not_found}