import{r as e,h as t}from"./p-bd5842d7.js";import"./p-11ec80fb.js";import{i as r}from"./p-c2b42fe0.js";import"./p-4bed3927.js";import{C as o}from"./p-f168eff7.js";const s=class{constructor(t){e(this,t),this.mobileLayout=!1}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<650}componentWillLoad(){this.checkLayout()}render(){return t("div",{class:`global_container ${this.mobileLayout?"is-mobile":""}`},t("aside",null,t("psk-user-profile",null),t("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:650}),!1===this.mobileLayout?t("div",{class:"nav-footer"},"version 0.1"):null),t("section",null,t("psk-app-router",null),!0===this.mobileLayout?t("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))}};(function(e,t,r,o){var s,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(i<3?s(l):i>3?s(t,r,l):s(t,r))||l);i>3&&l&&Object.defineProperty(t,r,l)})([o()],s.prototype,"history",void 0),r(s);export{s as psk_default_renderer};