import{r as e,c as r,h as s}from"./p-7cf930c5.js";import{M as t}from"./p-f2139256.js";import{C as o}from"./p-daa61edb.js";const i=class{constructor(s){e(this,s),this.getAppVersion=r(this,"getAppVersion",7),this.mobileLayout=!1,this.disableSidebar=!1}componentWillLoad(){return new Promise(e=>{this.getAppVersion.emit((r,s)=>{r||(this.appVersion=s),e()})})}render(){let e=s("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:t}),r=s("div",{class:"nav-footer"},"version ",this.appVersion),o=[];return o=this.mobileLayout?[s("psk-user-profile",{"profile-renderer":"mobile-profile-renderer"}),e]:[s("psk-user-profile",null),e,r],console.log(o),console.log(this.disableSidebar),s("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},!1===this.disableSidebar?s("aside",null,o):null,s("section",null,s("psk-app-router",null),!0===this.mobileLayout?r:null))}};!function(e,r,s,t){var o,i=arguments.length,l=i<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,s,t);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(l=(i<3?o(l):i>3?o(r,s,l):o(r,s))||l);i>3&&l&&Object.defineProperty(r,s,l)}([o()],i.prototype,"mobileLayout",void 0);export{i as psk_default_renderer}